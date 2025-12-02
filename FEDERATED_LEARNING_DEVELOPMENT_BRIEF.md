# Federated Learning Development Brief
**Date**: 2025-01-11  
**Purpose**: Development specification for implementing tier-based federated learning business model

---

## 1. Product Positioning Statement

### **Core Message**:
> "AEAO becomes more effective with every new problem it sees. As more teams run diverse optimizations, it learns which strategies work best on which problem types—so you spend less time guessing, trying dead ends, and tuning, and more time getting good solutions quickly."

### **Private Learning Option**:
> "For teams in regulated or highly competitive spaces, AEAO can also learn privately from your history only—capturing the quirks, constraints, and proprietary behavior of your systems so the optimizer becomes specifically better for you, without contributing those patterns back to anyone else."

### **Key Principles**:
1. **Default behavior**: Learning is enabled by default (communal/shared learning)
2. **Value proposition**: System gets smarter from collective experience
3. **Benefit focus**: Less time guessing, faster to good solutions
4. **Private option**: Available for regulated/competitive teams (paid upgrade)
5. **No complexity**: Simple, clear messaging without technical jargon

---

## 2. Business Model Design

### **Tier Structure**:

| Tier | Learning Mode | Price | Target Audience |
|------|--------------|-------|-----------------|
| **Free/Starter** | Communal (default) | $0-49/month | General users, startups |
| **Professional** | Communal OR Private | $299/month | Competitive teams, regulated industries |
| **Enterprise** | Communal OR Private | Custom | Large organizations |

### **What's Shared in Communal Learning**:
- Algorithm performance (which optimizers work best)
- Domain patterns (finance vs. healthcare vs. supply chain)
- Failure patterns (what doesn't work)
- Problem signatures (problem characteristics)

### **What's NOT Shared**:
- Raw optimization data
- Specific parameter values
- Optimization trajectories
- Problem-specific details
- Competitive information

### **Private Learning Benefits**:
- All learning stays within your organization
- Captures proprietary system behavior
- Competitive advantage from exclusive insights
- Regulatory compliance (HIPAA, finance regulations)

---

## 3. Current Technical Implementation

### **3.1 Existing Components** (Already Built):

#### Identity & Subscription System:
```python
# Location: aeao/core/identity/client_identity_hub.py

class SubscriptionTier(Enum):
    FREE = "free"
    STARTER = "starter"
    PROFESSIONAL = "professional"
    ENTERPRISE = "enterprise"
    CUSTOM = "custom"

@dataclass
class EnhancedClientIdentity:
    client_id: str
    subscription_tier: SubscriptionTier = SubscriptionTier.STARTER
    privacy_level: PrivacyLevel = PrivacyLevel.AGGREGATED
    federated_learning_enabled: bool = True
    stripe_customer_id: Optional[str] = None
    stripe_subscription_id: Optional[str] = None
```

#### Privacy Levels:
```python
# Location: aeao/core/ai/federated_learning/privacy_preserving_central_learning.py

class PrivacyLevel(Enum):
    PUBLIC = "public"           # Share freely
    AGGREGATED = "aggregated"   # Share after differential privacy (FREE tier default)
    FEDERATED = "federated"     # Share model updates only (PROFESSIONAL default)
    PRIVATE = "private"         # Never share - client-only (PROFESSIONAL upgrade)
```

#### Data Classification:
```python
class DataClassification(Enum):
    ALGORITHM_PERFORMANCE = "algorithm_performance"      # Shared in communal
    DOMAIN_PATTERNS = "domain_patterns"                  # Shared in communal
    FAILURE_PATTERNS = "failure_patterns"                # Shared in communal
    PROBLEM_SIGNATURES = "problem_signatures"            # Shared in communal
    PARAMETER_EFFECTIVENESS = "parameter_effectiveness"  # NOT shared in communal
    OPTIMIZATION_TRAJECTORIES = "optimization_trajectories"  # NOT shared
```

#### Billing System:
```python
# Location: aeao/platform_services/billing/simple_billing.py

class SimpleBilling:
    # Stripe integration exists
    # Can create subscriptions, track usage, handle webhooks
    # Already integrated with ClientIdentity system
```

#### Learning Storage:
```python
# Location: aeao/core/ai/federated_learning/privacy_preserving_central_learning.py

class PrivacyPreservingCentralLearning:
    def store_private_learning(data_type, learning_data):
        # Stores data privately (never shared)
    
    def contribute_to_global_learning(data_type, learning_data):
        # Stores data in communal pool (shared)
```

### **3.2 Configuration Files**:

```json
// aeao_central_learning_config.json
{
  "enabled": true,
  "privacy_level": "FEDERATED",
  "auto_share_algorithm_performance": true,
  "auto_share_failure_patterns": true,
  "auto_share_domain_patterns": true,
  "share_parameter_effectiveness": false,
  "share_optimization_trajectories": false
}
```

---

## 4. Development Objective

### **Goal**: 
Implement tier-based enforcement that connects subscription payment to learning privacy features, ensuring free users use communal learning and only paid users can access private learning.

### **What's Missing** (Needs to be built):

#### 4.1 Payment Enforcement
- No checks to prevent free users from using private learning
- No automatic privacy level enforcement based on subscription tier
- No validation in optimization flow

#### 4.2 Upgrade Flow
- No API to upgrade to private learning with payment
- No checkout session creation for learning upgrades
- No webhook handling for learning feature access

#### 4.3 Feature Access Control
- No method to check if user can use private learning
- No enforcement of tier rules during optimization
- No graceful downgrade when user loses access

---

## 5. Required Implementation

### **Phase 1: Core Enforcement** (~100 lines)

#### Add to `aeao/core/identity/client_identity_hub.py`:

```python
class EnhancedClientIdentity:
    
    def can_use_private_learning(self) -> bool:
        """Check if subscription tier allows private learning"""
        return self.subscription_tier in [
            SubscriptionTier.PROFESSIONAL,
            SubscriptionTier.ENTERPRISE,
            SubscriptionTier.CUSTOM
        ]
    
    def can_disable_learning(self) -> bool:
        """Check if subscription tier allows disabling learning"""
        # Could be same tier or different - decide based on business model
        return self.subscription_tier in [
            SubscriptionTier.PROFESSIONAL,
            SubscriptionTier.ENTERPRISE,
            SubscriptionTier.CUSTOM
        ]
    
    def enforce_tier_privacy_rules(self) -> None:
        """Enforce privacy level restrictions based on subscription tier
        
        Raises:
            PermissionError: If privacy level not allowed for current tier
        """
        if self.privacy_level == PrivacyLevel.PRIVATE:
            if not self.can_use_private_learning():
                raise PermissionError(
                    f"Private learning requires Professional or Enterprise tier. "
                    f"Current tier: {self.subscription_tier.value}. "
                    f"Upgrade at: /billing/upgrade?feature=private_learning"
                )
        
        # Free/Starter must use communal learning (AGGREGATED or FEDERATED)
        if self.subscription_tier in [SubscriptionTier.FREE, SubscriptionTier.STARTER]:
            if self.privacy_level not in [PrivacyLevel.AGGREGATED, PrivacyLevel.FEDERATED]:
                raise PermissionError(
                    f"Free and Starter tiers must use communal learning. "
                    f"Upgrade to Professional for private learning."
                )
    
    def get_allowed_privacy_levels(self) -> List[PrivacyLevel]:
        """Get list of privacy levels allowed for current tier"""
        if self.subscription_tier in [SubscriptionTier.FREE, SubscriptionTier.STARTER]:
            return [PrivacyLevel.AGGREGATED, PrivacyLevel.FEDERATED]
        else:
            return list(PrivacyLevel)  # All levels allowed
```

### **Phase 2: Optimization Flow Integration** (~50 lines)

#### Add to `aeao/core/ai/federated_learning/central_learning_integration.py`:

```python
def register_optimization_attempt(
    problem_info: Dict[str, Any],
    optimization_result: Dict[str, Any],
    optimizer_config: Dict[str, Any]
) -> Optional[Dict[str, Any]]:
    """
    Register optimization with tier-based privacy enforcement
    """
    # Get current user identity
    identity = get_current_user_identity()
    
    if not identity:
        logger.warning("No identity found - using local storage only")
        return _fallback_local_storage(problem_info, optimization_result, optimizer_config)
    
    # Enforce tier rules
    try:
        identity.enforce_tier_privacy_rules()
    except PermissionError as e:
        logger.warning(f"Privacy level not allowed for tier: {e}")
        # Automatically downgrade to allowed level
        allowed_levels = identity.get_allowed_privacy_levels()
        identity.privacy_level = allowed_levels[0]  # Use first allowed level
        logger.info(f"Downgraded to {identity.privacy_level.value} for tier {identity.subscription_tier.value}")
    
    # Store based on actual privacy level
    if identity.privacy_level == PrivacyLevel.PRIVATE:
        # Store privately only (paid feature)
        return _store_private_learning(problem_info, optimization_result, identity)
    else:
        # Store with communal sharing (free tier)
        return _store_communal_learning(problem_info, optimization_result, identity)


def get_current_user_identity() -> Optional[EnhancedClientIdentity]:
    """Get current user's identity from context"""
    # Implementation depends on how identity is passed in optimization flow
    # Could be from API context, environment variable, or config file
    try:
        from aeao.core.identity import get_identity_hub
        hub = get_identity_hub()
        # Get client_id from current context (request, config, etc.)
        client_id = _get_current_client_id()
        return hub.get_identity(client_id)
    except Exception as e:
        logger.warning(f"Could not get user identity: {e}")
        return None
```

### **Phase 3: API Endpoints** (~80 lines)

#### Add to `aeao/platform_services/api_server/routes/identity.py`:

```python
@router.get("/{client_id}/learning-features", response_model=Dict[str, Any])
async def get_learning_features(
    client_id: str,
    hub = Depends(require_client_identity)
):
    """Get available learning features for user's tier"""
    identity = hub.get_identity(client_id)
    if not identity:
        raise HTTPException(status_code=404, detail="Client identity not found")
    
    return {
        "client_id": client_id,
        "subscription_tier": identity.subscription_tier.value,
        "current_privacy_level": identity.privacy_level.value,
        "allowed_privacy_levels": [level.value for level in identity.get_allowed_privacy_levels()],
        "can_use_private_learning": identity.can_use_private_learning(),
        "can_disable_learning": identity.can_disable_learning(),
        "features": {
            "communal_learning": True,  # Always available
            "private_learning": identity.can_use_private_learning(),
            "disable_learning": identity.can_disable_learning()
        }
    }


@router.post("/{client_id}/request-private-learning", response_model=Dict[str, Any])
async def request_private_learning(
    client_id: str,
    hub = Depends(require_client_identity),
    billing: SimpleBilling = Depends(get_billing_system)
):
    """Request private learning access (may require upgrade)"""
    identity = hub.get_identity(client_id)
    if not identity:
        raise HTTPException(status_code=404, detail="Client identity not found")
    
    # Check if already has access
    if identity.can_use_private_learning():
        # Just enable it
        identity.update_privacy_level(PrivacyLevel.PRIVATE)
        return {
            "success": True,
            "privacy_level": "PRIVATE",
            "message": "Private learning enabled"
        }
    
    # Requires upgrade
    try:
        upgrade_result = billing.create_upgrade_checkout(
            user_id=client_id,
            target_plan=BillingPlan.PRO,
            feature="private_learning",
            success_url=f"/dashboard?upgraded=private_learning",
            cancel_url=f"/dashboard?upgrade_cancelled=true"
        )
        
        return {
            "success": False,
            "requires_upgrade": True,
            "checkout_url": upgrade_result['checkout_url'],
            "required_tier": "PROFESSIONAL",
            "price": "$299/month",
            "message": "Upgrade to Professional tier for private learning"
        }
    except Exception as e:
        logger.error(f"Failed to create upgrade checkout: {e}")
        raise HTTPException(status_code=500, detail="Failed to create upgrade session")


@router.put("/{client_id}/privacy-level", response_model=Dict[str, Any])
async def update_privacy_level(
    client_id: str,
    privacy_level: str,
    hub = Depends(require_client_identity)
):
    """Update privacy level (with tier enforcement)"""
    identity = hub.get_identity(client_id)
    if not identity:
        raise HTTPException(status_code=404, detail="Client identity not found")
    
    # Parse privacy level
    try:
        new_level = PrivacyLevel(privacy_level.lower())
    except ValueError:
        raise HTTPException(status_code=400, detail=f"Invalid privacy level: {privacy_level}")
    
    # Check if allowed for tier
    allowed_levels = identity.get_allowed_privacy_levels()
    if new_level not in allowed_levels:
        return {
            "success": False,
            "error": "Privacy level not allowed for current tier",
            "current_tier": identity.subscription_tier.value,
            "allowed_levels": [level.value for level in allowed_levels],
            "requested_level": new_level.value,
            "upgrade_required": True,
            "upgrade_url": f"/billing/upgrade?feature=private_learning"
        }
    
    # Update privacy level
    identity.update_privacy_level(new_level)
    
    return {
        "success": True,
        "privacy_level": new_level.value,
        "message": f"Privacy level updated to {new_level.value}"
    }
```

### **Phase 4: Billing Integration** (~60 lines)

#### Add to `aeao/platform_services/billing/simple_billing.py`:

```python
class SimpleBilling:
    
    def create_upgrade_checkout(
        self,
        user_id: str,
        target_plan: BillingPlan,
        feature: str,
        success_url: str,
        cancel_url: str
    ) -> Dict[str, Any]:
        """Create Stripe checkout session for upgrade
        
        Args:
            user_id: User ID to upgrade
            target_plan: Target billing plan
            feature: Feature being upgraded for (e.g., "private_learning")
            success_url: URL to redirect on success
            cancel_url: URL to redirect on cancel
            
        Returns:
            Dict with checkout_url and session_id
        """
        try:
            # Get current subscription
            current_subscription = self.subscriptions.get(user_id)
            
            if not current_subscription:
                raise ValueError(f"No subscription found for user {user_id}")
            
            # Get price ID for target plan
            price_id = self.plan_prices.get(target_plan)
            if not price_id:
                raise ValueError(f"No price configured for plan {target_plan}")
            
            # Create checkout session
            checkout_session = stripe.checkout.Session.create(
                customer=current_subscription.stripe_customer_id,
                mode='subscription',
                line_items=[{
                    'price': price_id,
                    'quantity': 1,
                }],
                success_url=success_url,
                cancel_url=cancel_url,
                metadata={
                    'user_id': user_id,
                    'upgrade_feature': feature,
                    'previous_plan': current_subscription.plan.value,
                    'target_plan': target_plan.value
                }
            )
            
            logger.info(f"Created upgrade checkout for {user_id}: {target_plan.value} (feature: {feature})")
            
            return {
                'checkout_url': checkout_session.url,
                'session_id': checkout_session.id,
                'target_plan': target_plan.value,
                'feature': feature
            }
            
        except Exception as e:
            logger.error(f"Failed to create upgrade checkout: {e}")
            raise
    
    def handle_subscription_updated_webhook(self, event_data: Dict[str, Any]) -> bool:
        """Handle subscription updated webhook from Stripe
        
        Updates user's subscription tier and privacy level based on new plan
        """
        try:
            subscription = event_data['data']['object']
            customer_id = subscription['customer']
            
            # Find user by Stripe customer ID
            user_id = self._find_user_by_stripe_customer(customer_id)
            if not user_id:
                logger.warning(f"No user found for Stripe customer {customer_id}")
                return False
            
            # Get new plan from subscription
            price_id = subscription['items']['data'][0]['price']['id']
            new_plan = self._get_plan_from_price_id(price_id)
            
            # Update subscription tier in identity system
            identity_hub = get_identity_hub()
            identity = identity_hub.get_identity(user_id)
            
            if identity:
                # Map billing plan to subscription tier
                tier_mapping = {
                    BillingPlan.FREE: SubscriptionTier.FREE,
                    BillingPlan.STARTER: SubscriptionTier.STARTER,
                    BillingPlan.PRO: SubscriptionTier.PROFESSIONAL,
                    BillingPlan.ENTERPRISE: SubscriptionTier.ENTERPRISE
                }
                new_tier = tier_mapping.get(new_plan, SubscriptionTier.STARTER)
                
                # Update tier
                identity_hub.update_subscription_tier(user_id, new_tier)
                
                # If upgraded to Professional/Enterprise, user can now use private learning
                # But don't automatically enable it - let them choose
                logger.info(f"Updated subscription tier for {user_id}: {new_tier.value}")
                
                return True
            
            return False
            
        except Exception as e:
            logger.error(f"Failed to handle subscription update webhook: {e}")
            return False
```

---

## 6. Testing Requirements

### **Unit Tests**:
```python
def test_can_use_private_learning():
    # Free tier cannot use private learning
    identity = EnhancedClientIdentity(
        client_id="test",
        subscription_tier=SubscriptionTier.FREE
    )
    assert not identity.can_use_private_learning()
    
    # Professional tier can use private learning
    identity.subscription_tier = SubscriptionTier.PROFESSIONAL
    assert identity.can_use_private_learning()

def test_enforce_tier_privacy_rules():
    identity = EnhancedClientIdentity(
        client_id="test",
        subscription_tier=SubscriptionTier.FREE,
        privacy_level=PrivacyLevel.PRIVATE
    )
    
    # Should raise PermissionError
    with pytest.raises(PermissionError):
        identity.enforce_tier_privacy_rules()

def test_optimization_with_tier_enforcement():
    # Mock free user trying to use private learning
    # Should automatically downgrade to FEDERATED
    pass
```

### **Integration Tests**:
```python
def test_upgrade_flow():
    # 1. Create free user
    # 2. Try to enable private learning
    # 3. Should return upgrade_required
    # 4. Complete upgrade
    # 5. Should now be able to enable private learning
    pass

def test_webhook_subscription_update():
    # 1. Mock Stripe webhook for subscription update
    # 2. Should update user's tier
    # 3. Should allow private learning if upgraded to Professional
    pass
```

---

## 7. Deployment Checklist

- [ ] Add enforcement methods to `EnhancedClientIdentity`
- [ ] Add tier checks to optimization flow
- [ ] Add API endpoints for feature access
- [ ] Add upgrade checkout creation
- [ ] Add webhook handlers for subscription changes
- [ ] Update configuration defaults
- [ ] Write unit tests
- [ ] Write integration tests
- [ ] Test upgrade flow end-to-end
- [ ] Test downgrade scenarios
- [ ] Update API documentation
- [ ] Deploy to staging
- [ ] Test in staging
- [ ] Deploy to production

---

## 8. Success Criteria

### **Functional Requirements**:
- ✅ Free users can only use communal learning (AGGREGATED/FEDERATED)
- ✅ Professional+ users can enable private learning
- ✅ System automatically enforces tier rules during optimization
- ✅ Users can upgrade to private learning via API
- ✅ Stripe webhooks update tier and feature access
- ✅ Graceful degradation when user loses access

### **Business Requirements**:
- ✅ Private learning requires payment
- ✅ Clear upgrade path from free to private
- ✅ No free users can access private learning
- ✅ Billing system connected to learning features

### **User Experience**:
- ✅ Clear error messages when feature not available
- ✅ Easy upgrade flow with Stripe checkout
- ✅ Automatic tier updates on subscription changes
- ✅ No disruption to existing optimizations

---

## 9. Key Files to Modify

| File | Purpose | Lines to Add |
|------|---------|--------------|
| `aeao/core/identity/client_identity_hub.py` | Add enforcement methods | ~100 |
| `aeao/core/ai/federated_learning/central_learning_integration.py` | Add tier checks in optimization flow | ~50 |
| `aeao/platform_services/api_server/routes/identity.py` | Add API endpoints | ~80 |
| `aeao/platform_services/billing/simple_billing.py` | Add upgrade flow | ~60 |
| `tests/test_federated_learning_tiers.py` | Add tests | ~200 |

**Total**: ~490 lines of code

---

## 10. Timeline Estimate

- **Phase 1** (Core Enforcement): 2-3 days
- **Phase 2** (Optimization Integration): 1-2 days
- **Phase 3** (API Endpoints): 2-3 days
- **Phase 4** (Billing Integration): 2-3 days
- **Testing & QA**: 2-3 days
- **Deployment**: 1 day

**Total**: 10-15 days (2-3 weeks)

---

## 11. Questions for Implementation

1. **Tier Pricing**: Confirm Professional tier price ($299/month suggested)
2. **Disable Learning**: Should disabling learning be same tier as private, or separate?
3. **Downgrade Behavior**: What happens to private data when user downgrades?
4. **Grace Period**: Should there be a grace period before enforcing tier changes?
5. **Trial Period**: Should private learning have a trial period?

---

## Contact

For questions or clarifications during implementation, refer to:
- `FEDERATED_LEARNING_IMPLEMENTATION_EVALUATION.md` - Technical evaluation
- `FEDERATED_LEARNING_PRODUCT_STRATEGY.md` - Product strategy analysis
- `FEDERATED_LEARNING_EVALUATION.md` - Gap analysis

---

**End of Development Brief**

