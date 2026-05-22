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
  - Avoid repetition and lengthy questions
  - Question should not exceed 3 lines

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
  -Also generate question wise marks(maximum marks for each question is 10 )with feedback like strength, weakness and ideal approach.(one each)
  -Also give overall feedback like strength, weakness and ideal approach.(2 each)
  -For each feedback component give one line feedback only

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

const generateOverview = async (data) => {
  const prompt = `
  Generate the overall stats for the following overall interviews history

  Interview History: ${JSON.stringify(data)}

  Rules:
  -Give improvement in percentage by analyzing all interviews
  -Also give weakness in percentage
  -Also give best streak by checking where there are continuous interviews everyday without any break
  -Give average score per 50 marks
  
  return ONLY JSON object.

  Example:
  {
    interviewsTaken:0,
    average Score:0,
    improvement:0,
    bestStreak:0,
    weakness:0
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

export {generateQuestions, generateResult, generateOverview}