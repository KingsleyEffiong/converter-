import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { PostProvider } from "./component/PostProvider";
import Dashboard from './pages/Dashboard';



function App() {
  return (
    <PostProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashbaord' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </PostProvider>
  )
}

export default App
