import register from "../assets/register.png";
import login from "../assets/login.png";
import Button from "../components/Common/Button";
import {Eye, EyeOff} from "lucide-react"
import { useState, useContext } from "react";
import { loginUser,registerUser } from "../services/authService";
import { useNavigate, Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Login = () => {

    const [currState, setCurrState] = useState("login");
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const {fetchUser,user}= useContext(UserContext);

    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        const name= e.target.name;
        const value= e.target.value;
        setData((prev)=>({...prev,[name]:value}))
    }

    if(user){
      return <Navigate to="/" replace />
    }

    const loginHandler = async () => {

        if(!data.email ||!data.password) {
            alert("Please fill all fields")
            return
        }

        try {
            const responseData = await loginUser(data)
            if(responseData.success){
              await fetchUser()
              navigate("/",{replace:true})
            }
        } catch (error) {
            alert(error.response.data.message)
        }
        
    }

    const registerHandler = async () => {

        if(!data.name ||!data.email ||!data.password ||!data.confirmPassword) {
            alert("Please fill all fields")
            return
        }

        if(!isChecked) {
            alert("Please accept terms and conditions")
            return
        }

        try {
            if(data.password !== data.confirmPassword) {
                alert("Passwords do not match")
                return
            }
    
            const responseData = await registerUser(data)
            if(responseData.success){
              await fetchUser()
              navigate("/",{replace:true})
            }
        } 
        catch (error) {
            alert(error.response.data.message)
        }
    }
        

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-6">

      <div className="flex w-225 min-h-162.5 bg-white rounded-2xl overflow-hidden shadow-2xl">

        {/* LEFT SECTION */}

        <div className="hidden md:block w-1/2 overflow-hidden">

          <img
            src={currState === "login" ? login : register}
            alt=""
            className="w-full h-full object-cover"
          />

        </div>


        {/* RIGHT SECTION */}

        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-4 md:px-10 md:py-8 bg-white">

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
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
              name="name"
              value={data.name}
              onChange={onChangeHandler}
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
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
              name="email"
              value={data.email}
              onChange={onChangeHandler}
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
                className="w-full py-3 outline-none"
                name="password"
                value={data.password}
                onChange={onChangeHandler}
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
                className="w-full py-3 outline-none"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={onChangeHandler}
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
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
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

          <Button 
            onClick={currState === "login" ? loginHandler : registerHandler} 
            text={currState === "login" ? "Login" : "Register"} />


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