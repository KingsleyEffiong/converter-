import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import React from 'react'
import ReactTypingEffect from "react-typing-effect";
function Navbar() {
    return (
        <div className='w-full h-[70px] flex justify-between items-center px-3'>
            <h1 className='text-white text-3xl'>
                <ReactTypingEffect
                    text={[" MY CONVERTER"]}
                    speed={100}
                    eraseSpeed={50}
                    typingDelay={500}
                    eraseDelay={2000}
                />
            </h1>
            <ExitToAppIcon className='text-white cursor-pointer ' sx={{
                fontSize: '3rem'
            }} />
        </div>
    )
}

export default Navbar