import { NextRequest, NextResponse } from 'next/server';
import WhatsAppService from '@/lib/whatsapp';

// Test endpoint for WhatsApp API
// Use this to test your WhatsApp integration

export async function POST(request: NextRequest) {
  try {
    const { phone, message } = await request.json();
    
    if (!phone || !message) {
      return NextResponse.json(
        { error: 'Phone number and message are required' },
        { status: 400 }
      );
    }

    const whatsappService = new WhatsAppService();
    
    // Test message with force send flag to bypass development mode
    const success = await whatsappService.sendMessage(message, phone, true);
    
    if (success) {
      return NextResponse.json({ 
        success: true, 
        message: 'Test message sent successfully',
        phone: phone,
        adminNumber: process.env.ADMIN_WHATSAPP
      });
    } else {
      return NextResponse.json(
        { error: 'Failed to send test message' },
        { status: 500 }
      );
    }
    
  } catch (error) {
    console.error('WhatsApp test error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Test API configuration
    const config = {
      phoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID ? '✅ Configured' : '❌ Missing',
      accessToken: process.env.WHATSAPP_ACCESS_TOKEN ? '✅ Configured' : '❌ Missing',
      verifyToken: process.env.WHATSAPP_VERIFY_TOKEN ? '✅ Configured' : '❌ Missing',
      adminNumber: process.env.ADMIN_WHATSAPP || 'Not set',
      nodeEnv: process.env.NODE_ENV || 'Not set'
    };

    // Test WhatsApp service instantiation
    const whatsappService = new WhatsAppService();

    return NextResponse.json({
      message: 'WhatsApp API Configuration Status',
      config,
      ready: config.phoneNumberId.includes('✅') && config.accessToken.includes('✅'),
      debug: {
        phoneNumberIdLength: process.env.WHATSAPP_PHONE_NUMBER_ID?.length || 0,
        accessTokenLength: process.env.WHATSAPP_ACCESS_TOKEN?.length || 0,
        adminNumberFromEnv: process.env.ADMIN_WHATSAPP,
        currentTime: new Date().toISOString()
      }
    });
    
  } catch (error) {
    console.error('WhatsApp config check error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}