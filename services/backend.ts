import type { Chat } from '@google/genai';
import { createChatSession, generateOneOffResponse } from './geminiService';

/**
 * This file simulates a backend API layer.
 * In this sandboxed environment, we can't create a true backend server.
 * However, this simulates the structure of calling a backend.
 * 
 * Importantly, the API key used in `geminiService.ts` is handled by `process.env.API_KEY`.
 * On this platform, this is a secure way to manage secrets, equivalent to how a backend would handle it.
 * The key is NOT exposed to the user's browser.
 */
export const backendApi = {
  /**
   * Creates a new chat session.
   * @returns A new Chat instance.
   */
  createChat: (): Chat => {
    return createChatSession();
  },

  /**
   * Sends a message to a chat session.
   * @param chatSession The active chat session.
   * @param message The user's message.
   * @returns The AI's text response.
   */
  sendMessage: async (chatSession: Chat, message: string): Promise<string> => {
    const response = await chatSession.sendMessage({ message });
    return response.text;
  },

  /**
   * Generates a one-off response for prompts that don't need chat history.
   * @param prompt The prompt to send.
   * @returns The AI's text response.
   */
  generateOneOff: async (prompt: string): Promise<string> => {
    return await generateOneOffResponse(prompt);
  },
};
