import { useState } from 'react'
import './App.css'
import LoginPage from './pages/loginPage'
import HomePage from './pages/homePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import AdminHomePage from './pages/adminHomePage'
import { Toaster } from 'react-hot-toast'
import { GoogleOAuthProvider } from '@react-oauth/google'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <BrowserRouter>
        <Toaster position='top-right'/>
        <GoogleOAuthProvider clientId='563685840172-6bso9nhhvru25cava2mktbr4j54d2htc.apps.googleusercontent.com'>
       <Routes >          
         <Route path="/Home" element={<HomePage/>}/>   
         <Route path="/" element={<LoginPage/>}/>
         <Route path="/signup" element={<SignupPage />} />
         <Route path="/admin/*" element={<AdminHomePage />} />
         <Route path="*" element={<HomePage/>} />
       </Routes>
       </GoogleOAuthProvider>
 
      </BrowserRouter>
    </>
  )
}

export default App
