import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CodeBlock from '@/components/CodeBlock'
import Link from 'next/link'
import { Metadata } from 'next'
import { MessageSquare, Bot, CheckCircle2, ArrowRight, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Conversational Optimization Tutorial - Sematryx',
  description: 'Learn how to create optimization problems through natural language conversation with an AI agent.',
}

export default function ConversationalOptimizationTutorial() {
  const problemDescription = `I want to optimize my marketing budget across Google, Facebook, and LinkedIn to maximize ROI`

  const startConversation = `from sematryx.client.sdk import SematryxClient

client = SematryxClient(api_key="YOUR_API_KEY")

# Start conversation with natural language description
result = client.start_conversational_optimization(
    description="I want to optimize my marketing budget across Google, Facebook, and LinkedIn to maximize ROI"
)

conversation_id = result["conversation_id"]
print(f"✅ Conversation started: {conversation_id}")`

  const checkStatus = `import time

# Check conversation status
status = client.get_conversation_status(conversation_id)

if status["status"] == "waiting_for_input":
    print(f"🤖 Agent: {status.get('question')}")
    print(f"💡 Examples: {', '.join(status.get('examples', []))}")
elif status["status"] == "ready_to_optimize":
    print("✅ All parameters collected! Ready to optimize.")
elif status["status"] == "processing":
    print("⏳ Agent is still processing...")
    time.sleep(2)  # Wait and check again`

  const continueConversation = `# Respond to agent's question
response = "$50000"  # User's answer
result = client.continue_conversation(conversation_id, response)
print(f"✅ Response accepted: {result.get('accepted', False)}")`

  const fullFlow = `from sematryx.client.sdk import SematryxClient
import time

client = SematryxClient(api_key="YOUR_API_KEY")

# Step 1: Start conversation
result = client.start_conversational_optimization(
    description="I want to optimize my marketing budget for maximum ROI"
)
conversation_id = result["conversation_id"]

# Step 2: Interactive loop
while True:
    status = client.get_conversation_status(conversation_id)
    
    if status["status"] == "waiting_for_input":
        # Agent has a question
        print(f"\\n🤖 Agent: {status.get('question')}")
        
        # Get user response (in production, from user input)
        user_response = input("You: ")
        
        # Continue conversation
        client.continue_conversation(conversation_id, user_response)
        
    elif status["status"] == "ready_to_optimize":
        print("\\n✅ All parameters collected! Ready to optimize.")
        break
        
    elif status["status"] == "processing":
        print("⏳ Processing...")
        time.sleep(2)
    else:
        break

# Step 3: Complete and optimize
result = client.complete_conversational_optimization(
    conversation_id,
    max_evaluations=2000,
    mode="balanced"
)

optimization_id = result['optimization_id']
print(f"\\n🚀 Optimization started!")
print(f"📊 Optimization ID: {optimization_id}")

# Step 4: Poll for results
print("\\n⏳ Waiting for optimization to complete...")
while True:
    opt_status = client.get_optimization_status(optimization_id)
    
    if opt_status["status"] == "completed":
        print("\\n🎉 Optimization complete!")
        
        # Get detailed results
        results = client.get_optimization_results(optimization_id)
        
        # Display results in a user-friendly format
        print(f"\\n📊 Optimal Budget Allocation:")
        solution = results.get("solution", {})
        for channel, allocation in solution.items():
            print(f"   • {channel}: ${allocation:,.0f}")
        
        print(f"\\n💰 Performance Metrics:")
        print(f"   • Total ROI: {results.get('roi', 0):.1%}")
        print(f"   • Expected Revenue: ${results.get('revenue', 0):,.0f}")
        print(f"   • Total Conversions: {results.get('conversions', 0):,.0f}")
        
        # Agent can also provide insights
        if "insights" in results:
            print(f"\\n💡 Key Insights:")
            for insight in results["insights"]:
                print(f"   • {insight}")
        
        break
    elif opt_status["status"] == "failed":
        print(f"\\n❌ Optimization failed: {opt_status.get('error')}")
        break
    else:
        time.sleep(2)  # Poll every 2 seconds`

  const conversationExample = `User: "I want to optimize my marketing budget for maximum ROI"

Agent: "I understand you want to optimize your marketing budget. 
What is your total marketing budget?"

User: "$50000"

Agent: "Thank you! I've recorded budget as 50000.0.
Which marketing channels would you like to optimize across?"

User: "Google, Facebook, LinkedIn"

Agent: "Great! I've recorded channels as ['Google', 'Facebook', 'LinkedIn'].
To calculate ROI, I need some performance data. 
What's the average cost per acquisition (CPA) for each channel?"

User: "Google: $25, Facebook: $30, LinkedIn: $45"

Agent: "Perfect! And what's the average revenue per customer?"

User: "$150"

Agent: "Excellent! I have all the information I need. 
Starting optimization now... This may take a few moments."

[Optimization running...]

Agent: "🎉 Optimization complete! Here are your results:

📊 **Optimal Budget Allocation:**
   • Google: $28,500 (57.0%) - Best ROI channel
   • Facebook: $15,000 (30.0%) - Strong performance
   • LinkedIn: $6,500 (13.0%) - Lower efficiency, minimal allocation

💰 **Expected Performance:**
   • Total Conversions: 1,140 customers
   • Total Revenue: $171,000
   • Average ROI: 242% (2.42x return)
   • Total Profit: $121,000

💡 **Key Insights:**
   Google delivers the best ROI at 300% due to lower CPA.
   I've allocated 57% of your budget there to maximize returns.
   Facebook gets 30% as it's your second-best performer.
   LinkedIn gets minimal allocation (13%) due to higher CPA.

Would you like me to explain any of these results in more detail?"

User: "Yes, why didn't you put all the budget in Google since it has the highest ROI?"

Agent: "Great question! While Google has the highest ROI, I applied risk diversification constraints to protect your marketing strategy:

🛡️ **Risk Management:**
   • **Diminishing Returns**: As spend increases on a single channel, marginal ROI decreases. 
     Google's ROI drops from 300% at low spend to ~250% at high spend due to ad saturation.
   
   • **Channel Diversification**: Allocating 30% to Facebook maintains your presence there, 
     preventing competitors from dominating that channel and protecting future opportunities.
   
   • **Minimum Viable Presence**: LinkedIn gets 13% to maintain brand visibility in the 
     professional network, which is important for B2B credibility even if direct ROI is lower.

   • **Risk Mitigation**: If Google's performance suddenly drops (algorithm changes, competition, etc.), 
     you're not left with zero marketing presence. Diversification reduces portfolio risk.

📈 **The Math:**
   • 100% Google: Would yield ~$165,000 revenue (diminishing returns)
   • Diversified (57/30/13): Yields $171,000 revenue (optimal balance)
   
   The diversified approach actually generates $6,000 more revenue while reducing risk!

Would you like to adjust these constraints, or explore what happens with different risk tolerance levels?"`

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/20 rounded-full mb-6">
              <MessageSquare className="w-8 h-8 text-primary-400" />
            </div>
            <h1 className="text-5xl font-bold text-gray-100 mb-4">
              Conversational Optimization Tutorial
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Create optimization problems through natural language conversation with an AI agent.
              Perfect for users who want to optimize but aren't familiar with technical concepts.
            </p>
          </div>

          <div className="space-y-12">
            <section className="bg-[#1a1f2e] border border-gray-700 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <Zap className="w-8 h-8 text-primary-400 mr-3" />
                What You'll Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-200 mb-1">Start Conversations</h3>
                    <p className="text-gray-400 text-sm">Describe problems in natural language</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-200 mb-1">Interactive Guidance</h3>
                    <p className="text-gray-400 text-sm">Agent asks questions to collect parameters</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-200 mb-1">Automatic Validation</h3>
                    <p className="text-gray-400 text-sm">Inputs validated in real-time</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-200 mb-1">Execute Optimization</h3>
                    <p className="text-gray-400 text-sm">Complete and run optimization automatically</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-100 mb-6">Step 1: Start a Conversation</h2>
              <p className="text-gray-400 mb-6">
                Begin by describing your optimization problem in natural language. The agent will analyze
                your description and start collecting the required parameters.
              </p>
              <CodeBlock
                code={startConversation}
                language="python"
                title="Starting a conversation"
              />
              <div className="mt-4 bg-blue-900/20 border border-blue-700 rounded-lg p-4">
                <p className="text-blue-200 text-sm">
                  <strong>Example:</strong> "{problemDescription}"
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-100 mb-6">Step 2: Check Conversation Status</h2>
              <p className="text-gray-400 mb-6">
                Poll the status endpoint to see if the agent has questions ready. The status will be
                "processing" while the agent analyzes, then "waiting_for_input" when a question is ready.
              </p>
              <CodeBlock
                code={checkStatus}
                language="python"
                title="Checking conversation status"
              />
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-100 mb-6">Step 3: Continue the Conversation</h2>
              <p className="text-gray-400 mb-6">
                When the agent asks a question, provide your response. The agent will validate your input
                and continue collecting parameters until all required information is gathered.
              </p>
              <CodeBlock
                code={continueConversation}
                language="python"
                title="Responding to agent questions"
              />
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-100 mb-6">Example Conversation Flow</h2>
              <div className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6">
                <div className="space-y-4">
                  {conversationExample.split('\n\n').map((exchange, idx) => (
                    <div key={idx} className="border-l-2 border-primary-500 pl-4">
                      <pre className="text-gray-300 whitespace-pre-wrap text-sm font-mono">
                        {exchange}
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-100 mb-6">Complete Example</h2>
              <p className="text-gray-400 mb-6">
                Here's a complete example showing the full conversational optimization flow:
              </p>
              <CodeBlock
                code={fullFlow}
                language="python"
                title="Complete conversational optimization flow"
              />
            </section>

            <section className="bg-[#1a1f2e] border border-gray-700 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <Bot className="w-8 h-8 text-primary-400 mr-3" />
                Key Features
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-200 mb-1">Natural Language Understanding</h3>
                    <p className="text-gray-400 text-sm">
                      The agent uses LLM to understand your problem description and extract key components
                      like domain, objective, and required parameters.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-200 mb-1">Progressive Parameter Collection</h3>
                    <p className="text-gray-400 text-sm">
                      The agent asks one question at a time, ensuring you understand what's needed and
                      providing examples when helpful.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-200 mb-1">Domain Extension Building</h3>
                    <p className="text-gray-400 text-sm">
                      If no existing domain matches your problem, the agent can offer to create a custom
                      domain extension on the fly.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-100 mb-6">Next Steps</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                  href="/docs/conversational-optimization"
                  className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6 hover:border-primary-500 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-200">API Documentation</h3>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-gray-400 text-sm">
                    Complete API reference for conversational optimization endpoints
                  </p>
                </Link>
                <Link
                  href="/docs/sdks/python"
                  className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6 hover:border-primary-500 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-200">Python SDK Guide</h3>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-gray-400 text-sm">
                    Learn more about the Python SDK methods for conversational optimization
                  </p>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

