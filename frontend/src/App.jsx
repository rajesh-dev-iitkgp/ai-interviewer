import Login from "./pages/Login"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ProtectedLayout from "./components/ProtectedLayout"
import Home from "./pages/Home"
import Interview from "./pages/Interview"
import MyInterviews from "./pages/MyInterviews"
import Profile from "./pages/Profile"
import Analytics from "./pages/Analytics"
import Settings from "./pages/Settings"

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
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
