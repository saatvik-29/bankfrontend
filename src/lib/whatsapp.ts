// Facebook Meta WhatsApp Business API integration
// Sends notifications to both admin and recipient numbers

interface WhatsAppMessage {
  to: string;
  message: string;
  type?: 'text' | 'template';
}

interface WhatsAppResponse {
  messaging_product: string;
  contacts: Array<{
    input: string;
    wa_id: string;
  }>;
  messages: Array<{
    id: string;
  }>;
}

class WhatsAppService {
  private readonly adminNumber = process.env.ADMIN_WHATSAPP || '8887941939';
  private readonly phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  private readonly accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
  private readonly apiUrl = `https://graph.facebook.com/v18.0`;

  private formatPhoneNumber(phone: string): string {
    // Remove any non-digit characters
    const cleaned = phone.replace(/\D/g, '');
    
    // If it starts with 91, return as is
    if (cleaned.startsWith('91')) {
      return cleaned;
    }
    
    // If it's 10 digits, add 91 prefix
    if (cleaned.length === 10) {
      return `91${cleaned}`;
    }
    
    // If it's 11 digits and starts with 0, remove 0 and add 91
    if (cleaned.length === 11 && cleaned.startsWith('0')) {
      return `91${cleaned.substring(1)}`;
    }
    
    return cleaned;
  }

  async sendMessage(message: string, to?: string): Promise<boolean> {
    try {
      const recipient = to || this.adminNumber;
      const formattedNumber = this.formatPhoneNumber(recipient);
      
      // Development mode - log to console
      if (process.env.NODE_ENV === 'development') {
        console.log(`📱 WhatsApp Message to ${formattedNumber}:`);
        console.log(message);
        console.log('---');
        return true;
      }
      
      // Production mode - Facebook Meta WhatsApp Business API
      if (!this.phoneNumberId || !this.accessToken) {
        console.error('❌ WhatsApp API credentials not configured');
        return false;
      }

      const response = await fetch(`${this.apiUrl}/${this.phoneNumberId}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: formattedNumber,
          type: 'text',
          text: { 
            body: message,
            preview_url: false
          }
        })
      });
      
      if (response.ok) {
        const result: WhatsAppResponse = await response.json();
        console.log(`✅ WhatsApp message sent to ${formattedNumber}:`, result.messages[0]?.id);
        return true;
      } else {
        const error = await response.text();
        console.error(`❌ Failed to send WhatsApp message to ${formattedNumber}:`, error);
        return false;
      }
      
    } catch (error) {
      console.error('WhatsApp service error:', error);
      return false;
    }
  }

  async sendToMultiple(message: string, recipients: string[]): Promise<{ success: number; failed: number }> {
    let success = 0;
    let failed = 0;

    for (const recipient of recipients) {
      const sent = await this.sendMessage(message, recipient);
      if (sent) {
        success++;
      } else {
        failed++;
      }
      
      // Add small delay between messages to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    return { success, failed };
  }

  // Format loan application message for admin
  formatLoanApplicationMessageForAdmin(data: any, applicationNumber: string): string {
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

  // Format loan application confirmation message for applicant
  formatLoanApplicationMessageForApplicant(data: any, applicationNumber: string): string {
    return `🏦 *Banker's Den - Application Received*

Dear ${data.full_name},

✅ Your ${data.loanType || 'loan'} application has been successfully submitted!

📋 *Application Details:*
• Application #: ${applicationNumber}
• Loan Amount: ₹${data.loanAmount?.toLocaleString('en-IN') || 'N/A'}
• Submitted: ${new Date().toLocaleString('en-IN')}

📞 *Next Steps:*
• Our team will review your application within 24-48 hours
• You'll receive updates on this WhatsApp number
• Keep your documents ready for verification

For any queries, contact us at:
📱 WhatsApp: ${this.adminNumber}
🌐 Website: bankersdens.com

Thank you for choosing Banker's Den!`;
  }

  // Format contact form message for admin
  formatContactMessageForAdmin(data: any): string {
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

  // Format contact form confirmation message for user
  formatContactMessageForUser(data: any): string {
    return `📞 *Banker's Den - Message Received*

Dear ${data.full_name},

✅ Your message has been received successfully!

📋 *Your Inquiry:*
• Category: ${data.category}
• Message: ${data.message}
• Submitted: ${new Date().toLocaleString('en-IN')}

📞 *What's Next:*
• Our team will respond within 24 hours
• You'll receive updates on this WhatsApp number

For urgent queries, contact us at:
📱 WhatsApp: ${this.adminNumber}
🌐 Website: bankersdens.com

Thank you for contacting Banker's Den!`;
  }

  // Send loan application notification to both admin and applicant
  async notifyLoanApplication(data: any, applicationNumber: string): Promise<{ adminSent: boolean; applicantSent: boolean }> {
    const adminMessage = this.formatLoanApplicationMessageForAdmin(data, applicationNumber);
    const applicantMessage = this.formatLoanApplicationMessageForApplicant(data, applicationNumber);
    
    // Send to admin
    const adminSent = await this.sendMessage(adminMessage, this.adminNumber);
    
    // Send confirmation to applicant (if phone number is provided)
    let applicantSent = false;
    if (data.phone) {
      applicantSent = await this.sendMessage(applicantMessage, data.phone);
    }
    
    return { adminSent, applicantSent };
  }

  // Send contact form notification to both admin and user
  async notifyContactForm(data: any): Promise<{ adminSent: boolean; userSent: boolean }> {
    const adminMessage = this.formatContactMessageForAdmin(data);
    const userMessage = this.formatContactMessageForUser(data);
    
    // Send to admin
    const adminSent = await this.sendMessage(adminMessage, this.adminNumber);
    
    // Send confirmation to user (if phone number is provided)
    let userSent = false;
    if (data.phone) {
      userSent = await this.sendMessage(userMessage, data.phone);
    }
    
    return { adminSent, userSent };
  }

  // Send custom message to admin
  async notifyAdmin(message: string): Promise<boolean> {
    return await this.sendMessage(message, this.adminNumber);
  }

  // Send custom message to user
  async notifyUser(message: string, phoneNumber: string): Promise<boolean> {
    return await this.sendMessage(message, phoneNumber);
  }
}

export default WhatsAppService;