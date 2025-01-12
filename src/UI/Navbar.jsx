import React from 'react'
import ReactTypingEffect from "react-typing-effect";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
function Navbar() {
    return (
        <div className='w-full h-[70px] flex justify-between items-center px-3'>
            <h1 className='text-white text-3xl'>
                MY CONVERTER
            </h1>
            <LogoutOutlinedIcon className='text-white cursor-pointer ' sx={{
                fontSize: '3rem'
            }} />
        </div>
    )
}

export default Navbar