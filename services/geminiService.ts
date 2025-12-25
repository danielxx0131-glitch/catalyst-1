
import { GoogleGenAI, Type } from "@google/genai";
import { InquiryData } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || 'FAKE_API_KEY_FOR_DEVELOPMENT' });

export const processInquiryWithAI = async (data: InquiryData) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
        You are Catalyst's virtual assistant. 
        A user has just submitted an application for platform access on Catalyst.
        
        Platform Context: 
        1. We are a platform provider only. We do not participate in manual matchmaking.
        2. We provide a secure, KYC-verified space for entrepreneurs.
        3. Access is only granted after identity verification.

        User Details:
        Name: ${data.name}
        Email: ${data.email}
        Role: ${data.role}
        Company: ${data.company || 'N/A'}
        Message: ${data.message}

        Generate a short, professional "Application Received" message. 
        State that their interest is noted and the next step is the KYC identity verification process.
        Keep it concise, high-end, and in Traditional Chinese (Taiwan).
      `,
      config: {
        temperature: 0.7,
      }
    });

    return response.text;
  } catch (error) {
    console.error("AI processing failed", error);
    return "æ¨çç³è«å·²æ¶å°ãæåå°åéçºæ¨ç¼éèº«åæ ¸å¯¦ï¼KYCï¼æå¼ï¼è«çææ¨çé»å­éµä»¶ä¿¡ç®±ã";
  }
};
