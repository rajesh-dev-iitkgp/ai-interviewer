import { GoogleGenAI } from "@google/genai"
import dotenv from "dotenv"

dotenv.config()

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
})

export const generateQuestions = async (data) => {

  const prompt = `
  Generate 5 interview questions.

  Role: ${data.role}
  Experience Level: ${data.experienceLevel}

  Tech Stack:
  ${data.techStack.join(", ")}

  Return ONLY JSON array.

  Example:
  [
    {
      "question":"Explain Virtual DOM"
    }
  ]
  `

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  })

  const text = response.text

  const cleaned = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim()

  return JSON.parse(cleaned)
}