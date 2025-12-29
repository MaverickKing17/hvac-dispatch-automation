
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

/**
 * Interface for conversation history items passed to the AI.
 */
interface HistoryItem {
  role: string;
  text: string;
}

/**
 * Fetches a response from the AI Dispatcher.
 * Strictly follows the @google/genai SDK guidelines for model initialization and content generation.
 */
export const getDispatcherResponse = async (userMessage: string, history: HistoryItem[]): Promise<string> => {
  // CRITICAL: Initialize GoogleGenAI with process.env.API_KEY directly.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    // Construct the contents including history for context-aware responses.
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({
          role: h.role,
          parts: [{ text: h.text }]
        })),
        {
          role: 'user',
          parts: [{ text: userMessage }]
        }
      ],
      config: {
        systemInstruction: `You are the AI Dispatcher for 'Omega Heating and AC' in Toronto. 
        Your goal is to quickly gather information from a customer in need of HVAC services (Heating, AC, or Maintenance).
        Be professional, empathetic (especially if they are cold/hot), and efficient.
        Use Canadian spelling (e.g., 'neighbourhood', 'favour').
        Mention that you are an AI assistant available 24/7 to ensure they get help immediately without waiting on hold.
        Ask for their:
        1. Type of issue (Furnace, AC, etc.)
        2. Urgency
        3. Name and Phone number
        Keep responses concise and direct-response focused.`,
      },
    });

    // Access .text property directly as defined in the GenerateContentResponse class.
    return response.text || "I'm sorry, I couldn't process that. Can you repeat your request?";
  } catch (error) {
    console.error("Gemini Error:", error);
    // Graceful fallback for API errors.
    return "Our dispatch system is receiving high traffic. Please call (416) 555-0199 for immediate assistance.";
  }
};
