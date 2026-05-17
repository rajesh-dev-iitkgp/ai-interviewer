import Button from "../components/Common/Button"
import { roles, techStacks } from "../utils/constants"
import { useState } from "react"

const Interview = () => {

    const [selectedStacks,setSelectedStacks]=useState(["React","Node.js","MongoDB"])

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

                    <button className="border border-gray-300 rounded-xl px-5 py-2 font-medium hover:border-violet-500 transition">
                    Beginner
                    </button>

                    <button className="bg-violet-600 text-white rounded-xl px-5 py-2 font-medium shadow-sm">
                    Intermediate
                    </button>

                    <button className="border border-gray-300 rounded-xl px-5 py-2 font-medium hover:border-violet-500 transition">
                    Advanced
                    </button>

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

                        <button>
                        ✕
                        </button>
                    </div>
                    ))}

                </div>

                {/* Select */}
                <select
                    className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500"
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
                >
                    <option>5 Questions</option>
                    <option>10 Questions</option>
                </select>
            </div>

            {/* Interview Type */}
            <div className="flex flex-col gap-3">
                <label className="font-semibold text-gray-700">
                    Interview Type
                </label>

                <div className="flex gap-3">

                    <button className="bg-violet-600 text-white rounded-xl px-5 py-2 font-medium">
                    Technical
                    </button>

                    <button className="border border-gray-300 rounded-xl px-5 py-2 font-medium">
                    Behavioral
                    </button>

                </div>
            </div>

            {/* Button */}

            <Button text="Generate Questions ✨"  />

        </div>
    </div>
  )
}

export default Interview
