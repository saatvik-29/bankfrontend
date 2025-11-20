import { NextRequest, NextResponse } from 'next/server';
import ChatbotService from '@/lib/chatbot';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    const chatbotService = new ChatbotService();
    const response = await chatbotService.getChatResponse(message);
    
    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chat error:', error);
    return NextResponse.json(
      { message: 'Sorry, I encountered an error. Please try again.' },
      { status: 500 }
    );
  }
}