import { GoogleGenerativeAI } from '@google/generative-ai';
import { SYSTEM_PROMPT } from '@/lib/chatbotPrompt';

export async function POST(req: Request) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return Response.json({ error: 'Gemini API Key not configured' }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const { messages } = await req.json();

    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.5-flash',
      systemInstruction: SYSTEM_PROMPT
    });

    let rawHistory = messages.slice(0, -1);
    
    // Gemini history MUST start with a 'user' message.
    const firstUserIndex = rawHistory.findIndex((msg: any) => msg.role === 'user');
    if (firstUserIndex !== -1) {
      rawHistory = rawHistory.slice(firstUserIndex);
    } else {
      rawHistory = []; // No user messages yet, so history is empty
    }

    const history = rawHistory.map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    const latestMessage = messages[messages.length - 1].text;

    const chat = model.startChat({
      history: history,
    });

    const result = await chat.sendMessage([{ text: latestMessage }]);
    const text = result.response.text();

    return Response.json({ text });

  } catch (error) {
    console.error('Chat API Error:', error);
    return Response.json({ error: 'Failed to generate response' }, { status: 500 });
  }
}