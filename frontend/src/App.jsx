import {BrowserRouter, Navigate, Route, Routes, useNavigate} from "react-router-dom"
import SingUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Send from "./pages/Send"
import Login from "./pages/Login"


function App() {

    return <>
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<h1><center>ERROR : 404</center></h1>}/>
            <Route path="/" element={<Navigate to="/signup"/>}/>
            <Route path="/signup" element={<SingUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/send" element={<Send/>}/>
        </Routes>
    </BrowserRouter>
    </>
}

export default App
