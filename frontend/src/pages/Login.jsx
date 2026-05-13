import register from "../assets/register.png";
import login from "../assets/login.png";
import Button from "../components/Common/Button";
import {Eye, EyeOff} from "lucide-react"
import { useState } from "react";

const Login = () => {

    const [currState, setCurrState] = useState("register");
    const [showPassword, setShowPassword] = useState(false);

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-6">

      <div className="flex w-225 min-h-162.5 bg-white rounded-2xl overflow-hidden shadow-2xl">

        {/* LEFT SECTION */}

        <div className="w-1/2 overflow-hidden">

          <img
            src={currState === "login" ? login : register}
            alt=""
            className="w-full h-full object-cover"
          />

        </div>


        {/* RIGHT SECTION */}

        <div className="w-1/2 flex flex-col justify-center px-10 py-8 bg-white">

          {/* HEADING */}

          <h1 className="text-3xl font-bold text-gray-900 mb-2">

            {currState === "login" ? "Login to your account" : "Create Account"}

          </h1>

          <p className="text-gray-500 mb-5">

            Enter your details to get started

          </p>


          {/* FULL NAME */}

          {currState === "register" && 

          <div className="mb-4">

            <label className="block text-sm font-semibold mb-2">

              Full Name

            </label>

            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
            />

          </div>
         }

          {/* EMAIL */}

          <div className="mb-4">

            <label className="block text-sm font-semibold mb-2">

              Email

            </label>

            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
            />

          </div>


          {/* PASSWORD */}

          <div className="mb-4">

            <label className="block text-sm font-semibold mb-2">

              Password

            </label>

            <div className="flex items-center border border-gray-300 rounded-lg px-4">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                required
                className="w-full py-3 outline-none"
              />

              {showPassword ? 
                <EyeOff size={20} className="text-gray-500 cursor-pointer" onClick={() => setShowPassword(false)}/>
               : 
                <Eye size={20} className="text-gray-500 cursor-pointer" onClick={() => setShowPassword(true)}/>
              }

            </div>

          </div>


          {/* CONFIRM PASSWORD */}

          {currState === "register" &&

          <div className="mb-4">

            <label className="block text-sm font-semibold mb-2">

              Confirm Password

            </label>

            <div className="flex items-center border border-gray-300 rounded-lg px-4">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                required
                className="w-full py-3 outline-none"
              />

              {showPassword ? 
                <EyeOff size={20} className="text-gray-500 cursor-pointer" onClick={() => setShowPassword(false)}/>
               : 
                <Eye size={20} className="text-gray-500 cursor-pointer" onClick={() => setShowPassword(true)}/>
              }

            </div>

          </div>

          }

          {currState==="login" && 

            <p className="text-sm text-blue-800 cursor-pointer mb-8 font-semibold">Forgot Password?</p>

          }

          {/* TERMS */}

          {currState === "register" &&

          <div className="flex items-start gap-2 mb-5 text-sm">

            <input
              type="checkbox"
              className="mt-1"
              required
            />

            <p className="text-gray-600">

              I agree to the

              <span className="text-purple-600 ml-1 cursor-pointer">

                Terms & Conditions

              </span>

            </p>

          </div>
            }

          {/* BUTTON */}

          <Button text={currState === "login" ? "Login" : "Register"} />


          {/* LOGIN */}

          <p className="text-center text-gray-600 mt-5">

            {currState === "register" ? "Already have an account ?" : "Don't have an account ?"}

            <span className="text-purple-600 font-semibold ml-2 cursor-pointer" 
                onClick={() => setCurrState(currState === "login" ? "register" : "login")}>

              {currState === "register" ? "Login" : "Register"}

            </span>

          </p>

        </div>

      </div>

    </div>

  );
};

export default Login;