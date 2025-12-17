# Facebook Meta WhatsApp Business API Setup Guide

This guide will help you set up Facebook Meta WhatsApp Business API for your Banker's Den application.

## 📋 Prerequisites

1. **Facebook Business Account** - [Create one here](https://business.facebook.com/)
2. **Facebook Developer Account** - [Sign up here](https://developers.facebook.com/)
3. **WhatsApp Business Account** - You'll create this during setup
4. **Phone Number** - A phone number that will be used for WhatsApp Business
5. **Privacy Policy** - A publicly accessible privacy policy (✅ Already created at `/privacy-policy`)

## 🚀 Step-by-Step Setup

### Step 1: Create Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click **"My Apps"** → **"Create App"**
3. Select **"Business"** as app type
4. Fill in app details:
   - **App Name**: "Banker's Den WhatsApp"
   - **App Contact Email**: Your email
   - **Business Account**: Select your business account

### Step 2: Add WhatsApp Product

1. In your app dashboard, click **"Add Product"**
2. Find **"WhatsApp"** and click **"Set up"**
3. This will add WhatsApp to your app

### Step 3: Configure WhatsApp Business API

1. In the WhatsApp section, you'll see:
   - **Phone Number ID** - Copy this value
   - **WhatsApp Business Account ID** - Copy this value
   - **Temporary Access Token** - Copy this (we'll make it permanent later)

### Step 4: Add Phone Number

1. Click **"Add phone number"**
2. Enter your phone number (this will be your WhatsApp Business number)
3. Verify the phone number via SMS/call
4. Complete the verification process

### Step 5: Generate Permanent Access Token

1. Go to **"System Users"** in your Business Manager
2. Create a new system user or use existing one
3. Assign the system user to your app
4. Generate a permanent access token with these permissions:
   - `whatsapp_business_messaging`
   - `whatsapp_business_management`

### Step 6: Set Up Webhook

1. In WhatsApp configuration, go to **"Configuration"** tab
2. Click **"Edit"** next to Webhook
3. Set webhook URL: `https://yourdomain.com/api/whatsapp/webhook`
4. Set verify token: Create a random string (save this for env vars)
5. Subscribe to **"messages"** field
6. Save the configuration

### Step 7: App Review Requirements (MANDATORY)

Before Meta approves your WhatsApp Business API, you must provide:

1. **Privacy Policy URL**: `https://yourdomain.com/privacy-policy`
   - ✅ Already created and accessible
   - Explains data collection and WhatsApp usage
   - Includes contact information
   - Complies with WhatsApp Business Policy

2. **Terms of Service**: `https://yourdomain.com/terms`
   - ✅ Already created and accessible
   - Explains service terms and user responsibilities

3. **App Description**: Clearly explain how you use WhatsApp
   - Example: "Banker's Den uses WhatsApp to send loan application confirmations, status updates, and provide customer support for financial services."

4. **Use Case**: Select "Customer Support" and "Notifications"

5. **Business Verification**: Complete Facebook Business verification
   - Provide business documents
   - Verify business phone number
   - Complete identity verification

6. **App Review Submission**:
   - Submit app for review in Facebook App Dashboard
   - Wait for approval (typically 1-7 business days)
   - Address any feedback from Meta reviewers

## ✅ Meta Approval Checklist

Before submitting for review, ensure:

- [ ] Privacy Policy is publicly accessible at `/privacy-policy`
- [ ] Terms of Service is publicly accessible at `/terms`
- [ ] Business is verified on Facebook Business Manager
- [ ] Phone number is verified and active
- [ ] Webhook is configured and responding correctly
- [ ] App description clearly explains WhatsApp usage
- [ ] Use case is appropriate (Customer Support/Notifications)
- [ ] No policy violations in app or website content

### Step 8: Configure Environment Variables

Add these to your `.env` file:

```env
# Facebook Meta WhatsApp Business API
WHATSAPP_PHONE_NUMBER_ID=your-phone-number-id-from-step-3
WHATSAPP_ACCESS_TOKEN=your-permanent-access-token-from-step-5
WHATSAPP_VERIFY_TOKEN=your-webhook-verify-token-from-step-6
WHATSAPP_BUSINESS_ACCOUNT_ID=your-business-account-id-from-step-3
ADMIN_WHATSAPP=8887941939
```

## 🧪 Testing Your Setup

### Test Configuration
```bash
curl https://yourdomain.com/api/whatsapp/test
```

### Send Test Message
```bash
curl -X POST https://yourdomain.com/api/whatsapp/test \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "918887941939",
    "message": "Test message from Banker'\''s Den!"
  }'
```

## 📱 Message Templates (Optional)

For better delivery rates, you can create message templates:

1. Go to **"Message Templates"** in WhatsApp Manager
2. Create templates for:
   - Loan application confirmations
   - Contact form acknowledgments
   - Status updates

## 🔧 Webhook Verification

Your webhook endpoint handles:
- **GET**: Webhook verification from Facebook
- **POST**: Incoming messages and delivery receipts

The webhook will automatically:
- Verify incoming requests
- Log incoming messages
- Send auto-replies during non-business hours
- Track message delivery status

## 🚨 Important Notes

### Rate Limits
- **1000 messages per day** for new businesses
- Rate limits increase based on phone number quality rating
- Monitor your usage in WhatsApp Manager

### Phone Number Quality
- Maintain high quality rating (Green/Yellow)
- Avoid spam complaints
- Respond to customer messages promptly

### Compliance
- Follow WhatsApp Business Policy
- Get user consent before messaging
- Provide opt-out mechanisms
- Don't send promotional messages without templates

## 🔍 Troubleshooting

### Common Issues

1. **"Invalid phone number format"**
   - Ensure phone numbers include country code
   - Format: `91xxxxxxxxxx` for India

2. **"Webhook verification failed"**
   - Check `WHATSAPP_VERIFY_TOKEN` matches webhook config
   - Ensure webhook URL is accessible

3. **"Message not delivered"**
   - Check phone number is WhatsApp registered
   - Verify access token permissions
   - Check rate limits in WhatsApp Manager

4. **"Access token expired"**
   - Use permanent token from system user
   - Regenerate if needed

### Debug Mode

Set `NODE_ENV=development` to see detailed logs:
```bash
NODE_ENV=development npm run dev
```

## 📊 Monitoring

Monitor your WhatsApp integration:

1. **WhatsApp Manager**: Check message delivery rates
2. **App Logs**: Monitor webhook events and API calls
3. **Error Tracking**: Set up alerts for failed messages

## 🔐 Security Best Practices

1. **Environment Variables**: Never commit API keys to git
2. **Webhook Security**: Verify webhook signatures (optional)
3. **Access Tokens**: Use permanent tokens with minimal permissions
4. **Rate Limiting**: Implement client-side rate limiting

## 📞 Support

- **WhatsApp Business API Docs**: [developers.facebook.com/docs/whatsapp](https://developers.facebook.com/docs/whatsapp)
- **Facebook Business Support**: [business.facebook.com/help](https://business.facebook.com/help)
- **Developer Community**: [developers.facebook.com/community](https://developers.facebook.com/community)

---

**Note**: This setup enables production-ready WhatsApp messaging for your Banker's Den application with dual notifications to both admin and applicants.