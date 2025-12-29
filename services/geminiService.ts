
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
        systemInstruction: `You are the highly professional AI Dispatcher for 'Omega Heating and AC' in Toronto. 
        
        YOUR CORE GOAL: Gather specific information required to book an HVAC service call as efficiently as possible while providing a premium customer experience.
        
        EMPATHY FIRST: If a customer mentions being cold, hot, or uncomfortable, respond with genuine empathy (e.g., "I am so sorry you're dealing with a cold home in this Toronto winter, let's get you some help immediately."). Their comfort is your priority.
        
        LOCAL TONE: Use Canadian spelling exclusively (e.g., 'neighbourhood', 'favour', 'centre', 'metre'). You are local to the GTA.
        
        VALUE PROPOSITION: Explicitly mention you are an AI assistant available 24/7. This ensures the customer knows they are being handled instantly and won't have to wait on hold.
        
        INFORMATION NEEDED:
        1. Nature of the HVAC issue (Furnace, Air Conditioning, Heat Pump, etc.)
        2. Level of urgency (Emergency breakdown vs. scheduled maintenance)
        3. Customer's Name and Phone number
        
        Keep your responses concise, action-oriented, and focused on getting a technician dispatched. Do not engage in long small talk once the emotional connection is established.`,
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
