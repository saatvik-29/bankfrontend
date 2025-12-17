import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/database';
import Lead from '@/models/Lead';
import WhatsAppService from '@/lib/whatsapp';

export async function POST(request: NextRequest) {
  try {
    const { full_name, email, phone, category, message } = await request.json();
    const applicationNumber = `CT${Date.now()}`;

    await connectDB();

    // Save to database
    const lead = new Lead({
      applicationNumber,
      type: 'contact',
      full_name,
      email,
      phone,
      category,
      message,
      status: 'active'
    });
    await lead.save();

    // Send WhatsApp notifications to both admin and user
    const whatsappService = new WhatsAppService();
    const notificationResult = await whatsappService.notifyContactForm({ full_name, email, phone, category, message });
    
    console.log('WhatsApp notifications:', {
      adminSent: notificationResult.adminSent,
      userSent: notificationResult.userSent,
      userPhone: phone
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully', 
      applicationNumber 
    });
  } catch (error) {
    console.error('Error sending contact form:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
}