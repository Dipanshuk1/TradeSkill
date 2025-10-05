import { Route, Routes } from "react-router"
import { Home } from "./pages/Home.jsx"
import { Register } from "./pages/Register.jsx"
import { Login } from "./pages/Login"

function App() {
  
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/register" element={< Register/>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
