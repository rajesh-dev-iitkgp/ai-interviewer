import Button from "../components/Common/Button"
import { roles, techStacks, experienceLevels,interviewTypes } from "../utils/constants"
import { useState, } from "react"
import { generateInterview } from "../services/interviewService"
import { useNavigate } from "react-router-dom"

const Interview = () => {

    const [selectedStacks,setSelectedStacks]=useState(["React","Node.js","MongoDB"])
    const [role,setRole]=useState("Frontend Developer")
    const [experienceLevel,setExperienceLevel]=useState("Beginner")
    const [noOfQuestions,setNoOfQuestions]=useState(5)
    const [interviewType, setInterviewType] = useState("Technical");

    const navigate = useNavigate();

    const data = {
        role,
        experienceLevel,
        techStack:selectedStacks,
        noOfQuestions,
        interviewType
    }

    const submitHandler = async()=>{
        const response = await generateInterview(data);
        const interview = response.data.interview;
        navigate(`/interview/${interview._id}`,{replace:true});
    }


    const techStacksHandler = (e)=>{
        const stack = e.target.value;
        if(!selectedStacks.includes(stack) && stack !== "Add Tech Stack"){
            setSelectedStacks([...selectedStacks,stack])
        }
    }


  return (
    <div className="py-8 px-6 bg-[#f8f9ff] min-h-screen">
  
  {/* Heading */}
        <div className="flex flex-col gap-1 mb-8">
            <h1 className="text-3xl font-bold text-[#111827]">
            Create New Mock Interview
            </h1>

            <p className="text-gray-500">
            Customize your interview and get started
            </p>
        </div>

        {/* Main Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-7 shadow-sm max-w-4xl">

            {/* Role */}
            <div className="flex flex-col gap-2">
                <label className="font-semibold text-gray-700">
                    Select Role
                </label>

                <select
                    className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500"
                    onChange={(e)=>{setRole(e.target.value)}}
                >
                    {roles.map((role)=>{
                        return <option key={role} value={role}>{role}</option>
                    })}
                </select>
            </div>

            {/* Experience */}
            <div className="flex flex-col gap-3">
                <label className="font-semibold text-gray-700">
                    Experience Level
                </label>

                <div className="flex gap-3 flex-wrap">

                    {experienceLevels.map((level) => (
                        <button
                        key={level}
                        onClick={() => setExperienceLevel(level)}
                        className={`px-5 py-2 rounded-xl font-medium border transition-all duration-200
                        ${
                            experienceLevel === level
                            ? "bg-violet-600 text-white border-violet-600 shadow-sm"
                            : "border-gray-300 hover:border-violet-500"
                        }`}
                        >
                        {level}
                        </button>
                    ))}

                </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-col gap-3">

                <label className="font-semibold text-gray-700">
                    Tech Stack / Topics
                </label>

                {/* Selected Stacks */}
                <div className="flex gap-2 flex-wrap">

                    {selectedStacks.map((stack) => (
                    <div
                        key={stack}
                        className="bg-violet-100 text-violet-700 px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-2"
                    >
                        {stack}

                        <button onClick={()=>
                            setSelectedStacks(selectedStacks.filter((item) => item !== stack))
                        }
                        className="cursor-pointer">
                        ✕
                        </button>
                    </div>
                    ))}

                </div>

                {/* Select */}
                <select
                    className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500"
                    onChange={techStacksHandler}
                >
                    <option>Add Tech Stack</option>

                    {techStacks.map((stack) => (
                    <option key={stack}>{stack}</option>
                    ))}
                </select>

            </div>

            {/* Questions */}
            <div className="flex flex-col gap-2">
                <label className="font-semibold text-gray-700">
                    Number of Questions
                </label>

                <select
                    className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500"
                    onChange={(e)=>{setNoOfQuestions(e.target.value)}}
                >
                    <option value="5">5 Questions</option>
                    <option value="10">10 Questions</option>
                </select>
            </div>

            {/* Interview Type */}
            <div className="flex flex-col gap-3">
                <label className="font-semibold text-gray-700">
                    Interview Type
                </label>

                <div className="flex gap-3">

                    {interviewTypes.map((type) => (
                        <button
                        key={type}
                        onClick={() => setInterviewType(type)}
                        className={`px-5 py-2 rounded-xl font-medium border transition-all duration-200
                        ${
                            interviewType === type
                            ? "bg-violet-600 text-white border-violet-600"
                            : "border-gray-300 hover:border-violet-500"
                        }`}
                        >
                        {type}
                        </button>
                    ))}

                    </div>
            </div>

            {/* Button */}

            <Button text="Generate Questions ✨" onClick={submitHandler}  />

        </div>
    </div>
  )
}

export default Interview
