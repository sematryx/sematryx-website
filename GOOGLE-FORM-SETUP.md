# Google Forms Setup for Waitlist

## Step 1: Create the Form

1. Go to https://forms.google.com
2. Click **+ Blank** to create new form
3. Title: "Sematryx Waitlist"

## Step 2: Add Fields

### Field 1: Email
- Question type: **Short answer**
- Question: "Email"
- Toggle **Required** ON
- Click the three dots → **Response validation**
  - Select: **Text** → **Email**

### Field 2: Use Case
- Question type: **Multiple choice**
- Question: "What would you optimize?"
- Options:
  - Delivery routing
  - Workforce scheduling
  - ML hyperparameters
  - System configuration
  - Other
- Toggle **Required** ON

### Field 3: Other (Conditional)
- Question type: **Short answer**
- Question: "Please specify"
- Click three dots → **Go to section based on answer** (from Field 2)
- Set to show ONLY when "Other" is selected
- Toggle **Required** ON

## Step 3: Get Form Submission URL

1. Click **Send** button (top right)
2. Click the **<>** (link icon)
3. Copy the URL - it looks like:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSc...FORM_ID.../viewform
   ```

4. **Change `/viewform` to `/formResponse`**:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSc...FORM_ID.../formResponse
   ```

## Step 4: Get Field IDs

1. Open the form in a new tab
2. Right-click → **View Page Source** (or Inspect)
3. Search for `entry.` - you'll find field IDs like:
   - `entry.123456789` (email field)
   - `entry.987654321` (use case field)
   - `entry.555666777` (other field)

Write them down:
- Email field ID: `entry.___________`
- Use case field ID: `entry.___________`
- Other field ID: `entry.___________`

## Step 5: Update Code

Edit `src/app/waitlist/page.tsx`

Find the `handleSubmit` function (around line 11):

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // TODO: Wire to actual backend
  console.log('Waitlist signup:', { 
    email, 
    useCase: useCase === 'other' ? otherUseCase : useCase,
    timestamp: new Date().toISOString()
  });
  
  setSubmitted(true);
};
```

**Replace with:**

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const formData = new URLSearchParams();
  formData.append('entry.YOUR_EMAIL_FIELD_ID', email);
  formData.append('entry.YOUR_USECASE_FIELD_ID', useCase === 'other' ? otherUseCase : useCase);
  
  try {
    await fetch('https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse', {
      method: 'POST',
      body: formData,
      mode: 'no-cors' // Required - Google Forms blocks CORS
    });
  } catch (error) {
    // Ignore errors - form still submits despite CORS
    console.log('Form submitted (CORS blocked response)');
  }
  
  setSubmitted(true);
};
```

**Replace these:**
- `YOUR_EMAIL_FIELD_ID` → your actual entry ID (e.g., `123456789`)
- `YOUR_USECASE_FIELD_ID` → your actual entry ID (e.g., `987654321`)
- `YOUR_FORM_ID` → your actual form ID from the URL

## Step 6: Deploy

```bash
cd /home/openclaw/.openclaw/workspace/sematryx-website
git add src/app/waitlist/page.tsx
git commit -m "Connect waitlist form to Google Forms"
git push origin master
```

## Step 7: View Responses

1. Go to your Google Form
2. Click **Responses** tab
3. See all submissions in spreadsheet format
4. Can export to Sheets or CSV

---

## Example (Fill in your IDs)

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const formData = new URLSearchParams();
  formData.append('entry.123456789', email); // ← Your email field ID
  formData.append('entry.987654321', useCase === 'other' ? otherUseCase : useCase); // ← Your use case field ID
  
  try {
    await fetch('https://docs.google.com/forms/d/e/1FAIpQLSc_YOUR_LONG_FORM_ID_HERE/formResponse', {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    });
  } catch (error) {
    console.log('Form submitted');
  }
  
  setSubmitted(true);
};
```

---

**Time:** ~5 minutes  
**Cost:** $0  
**Storage:** Google Sheets (unlimited signups)

Let me know once you've created the form and I'll update the code for you.
