import { useState } from 'react'
import './App.css'
import LoginPage from './pages/loginPage'
import HomePage from './pages/homePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import AdminHomePage from './pages/adminHomePage'
import { Toaster } from 'react-hot-toast'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <BrowserRouter>
        <Toaster position='top-right'/>
       <Routes path="/*">          
         <Route path="/" element={<HomePage/>}/>   
         <Route path="/login" element={<LoginPage/>}/>
         <Route path="/signup" element={<SignupPage />} />
         <Route path="/admin/*" element={<AdminHomePage />} />
         <Route path="/*" element={<HomePage/>} />
       </Routes>
 
      </BrowserRouter>
    </>
  )
}

export default App
