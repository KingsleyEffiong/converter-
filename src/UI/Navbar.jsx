import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import React from 'react'
import ReactTypingEffect from "react-typing-effect";
function Navbar() {
    return (
        <div className='w-full h-[70px] flex justify-between items-center px-3'>
            <h1 className='text-white text-3xl'>
                MY CONVERTER
            </h1>
            <ExitToAppIcon className='text-white cursor-pointer ' sx={{
                fontSize: '3rem'
            }} />
        </div>
    )
}

export default Navbar