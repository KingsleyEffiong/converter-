import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { PostProvider } from "./component/PostProvider";


function App() {
  return (
    <div className="">
      <PostProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </PostProvider>
    </div>
  )
}

export default App
