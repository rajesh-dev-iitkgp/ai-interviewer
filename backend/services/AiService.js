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
  - Increase the difficulty level from easy to hard
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

const generateResult = async (data) => {
  const prompt = `
  Generate a result for the following interview questions and answers.

  Interview Questions and userAnswers: ${JSON.stringify(data)}

  Rules:
  -Generate the overall score for the interviewee.
  -Also generate question wise marks with feedback like strength, weakness and ideal approach.(one each)
  -Also give overall feedback like strength, weakness and ideal approach.(2 each)

  Return ONLY JSON object.

  Example:
  { questions:[
    {
      "question":"Explain Virtual DOM",
      "userAnswer":"",
      "score":0,
      "feedback":{
        "strengths":[only one],
        "weaknesses":[only one],
        "idealApproach":[only one]
      }
    }
    ]
    totalScore:0
    overallFeedback:{
      strengths:[give 2],
      weaknesses:[give 2]
      idealApproach:[give 2]
    }
  }
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

export {generateQuestions, generateResult}