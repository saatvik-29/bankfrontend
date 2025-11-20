// WhatsApp notification service using WhatsApp Business API or third-party service
// For now, we'll use a simple HTTP service that can send WhatsApp messages

interface WhatsAppMessage {
  to: string;
  message: string;
}

class WhatsAppService {
  private readonly adminNumber = '8887941939';

  async sendMessage(message: string, to?: string): Promise<boolean> {
    try {
      const recipient = to || this.adminNumber;
      
      // For production, you would integrate with:
      // - WhatsApp Business API
      // - Twilio WhatsApp API
      // - Other WhatsApp service providers
      
      // Development mode - log to console
      console.log(`📱 WhatsApp Message to ${recipient}:`);
      console.log(message);
      console.log('---');
      
      // Production mode - uncomment and configure one of these options:
      
      // OPTION 1: Twilio WhatsApp API
      if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
        const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${process.env.TWILIO_ACCOUNT_SID}/Messages.json`, {
          method: 'POST',
          headers: {
            'Authorization': `Basic ${Buffer.from(`${process.env.TWILIO_ACCOUNT_SID}:${process.env.TWILIO_AUTH_TOKEN}`).toString('base64')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            From: 'whatsapp:+14155238886', // Your Twilio WhatsApp number
            To: `whatsapp:+91${recipient}`,
            Body: message
          })
        });
        
        if (response.ok) {
          console.log('✅ WhatsApp message sent via Twilio');
          return true;
        } else {
          console.error('❌ Failed to send WhatsApp message via Twilio');
          return false;
        }
      }
      
      // OPTION 2: WhatsApp Business API
      if (process.env.WHATSAPP_API_URL && process.env.WHATSAPP_API_TOKEN) {
        const response = await fetch(process.env.WHATSAPP_API_URL, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.WHATSAPP_API_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messaging_product: 'whatsapp',
            to: `91${recipient}`,
            type: 'text',
            text: { body: message }
          })
        });
        
        if (response.ok) {
          console.log('✅ WhatsApp message sent via Business API');
          return true;
        } else {
          console.error('❌ Failed to send WhatsApp message via Business API');
          return false;
        }
      }
      
      return true;
    } catch (error) {
      console.error('WhatsApp service error:', error);
      return false;
    }
  }

  // Format loan application message
  formatLoanApplicationMessage(data: any, applicationNumber: string): string {
    return `🏦 *New Loan Application - Banker's Den*

📋 *Application Details:*
• Application #: ${applicationNumber}
• Loan Type: ${data.loanType?.toUpperCase() || 'N/A'}
• Applicant: ${data.full_name}
• Email: ${data.email}
• Phone: ${data.phone}
• Loan Amount: ₹${data.loanAmount?.toLocaleString('en-IN') || 'N/A'}
• Monthly Income: ₹${data.monthlyIncome?.toLocaleString('en-IN') || 'N/A'}
• Employment: ${data.employmentType || 'N/A'}
• Company: ${data.companyName || 'N/A'}
• Experience: ${data.workExperience || 'N/A'} years
• PAN: ${data.panNumber || 'N/A'}
• Address: ${data.address || 'N/A'}, ${data.city || 'N/A'}, ${data.state || 'N/A'} - ${data.pincode || 'N/A'}

⏰ *Submitted:* ${new Date().toLocaleString('en-IN')}

Please review and follow up with the applicant.`;
  }

  // Format contact form message
  formatContactMessage(data: any): string {
    return `📞 *New Contact Form - Banker's Den*

👤 *Contact Details:*
• Name: ${data.full_name}
• Email: ${data.email}
• Phone: ${data.phone}
• Category: ${data.category}

💬 *Message:*
${data.message}

⏰ *Submitted:* ${new Date().toLocaleString('en-IN')}

Please respond to the inquiry.`;
  }

  // Send loan application notification
  async notifyLoanApplication(data: any, applicationNumber: string): Promise<boolean> {
    const message = this.formatLoanApplicationMessage(data, applicationNumber);
    return await this.sendMessage(message);
  }

  // Send contact form notification
  async notifyContactForm(data: any): Promise<boolean> {
    const message = this.formatContactMessage(data);
    return await this.sendMessage(message);
  }
}

export default WhatsAppService;