import { GoogleGenAI } from "@google/genai"
import dotenv from "dotenv"

dotenv.config()

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
})

const generateQuestions = async (data) => {

  const prompt = `
  Generate ${data.noOfQuestions} realistic technical interview questions.
  Role: ${data.role}
  Experience Level: ${data.experienceLevel}
  Interview Type: ${data.interviewType}

  Tech Stack:
  ${data.techStack.join(", ")}

  Rules:
  - Questions should resemble real software company interviews
  - Include conceptual and practical thinking
  - Avoid overly basic textbook definitions
  - Questions should be concise
  - Avoid repetition

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

export default generateQuestions