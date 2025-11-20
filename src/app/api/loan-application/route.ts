import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/database';
import Lead from '@/models/Lead';
import WhatsAppService from '@/lib/whatsapp';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const applicationNumber = `LA${Date.now()}`;

    await connectDB();

    // Save to database
    const lead = new Lead({
      applicationNumber,
      type: 'loan',
      status: 'active',
      ...formData
    });
    await lead.save();

    // Send WhatsApp notification to admin
    const whatsappService = new WhatsAppService();
    await whatsappService.notifyLoanApplication(formData, applicationNumber);

    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully',
      applicationNumber 
    });
  } catch (error) {
    console.error('Error submitting loan application:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit application' },
      { status: 500 }
    );
  }
}