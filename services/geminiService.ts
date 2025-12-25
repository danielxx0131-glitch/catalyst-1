
import { GoogleGenAI, Type } from "@google/genai";
import { InquiryData } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

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
    return "您的申請已收到。我們將儘速為您發送身分核實（KYC）指引，請留意您的電子郵件信箱。";
  }
};
