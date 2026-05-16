import Login from "./pages/Login"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ProtectedLayout from "./components/ProtectedLayout"
import Home from "./pages/Home"
import Interview from "./pages/Interview"
import MyInterviews from "./pages/MyInterviews"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* protectedRoutes */}
        
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/history" element={<MyInterviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
