import React from 'react'
import Navbar from '../UI/Navbar'
import ConvertingLayout from '../component/ConvertingLayout'
import ListOfConverters from '../component/ListOfConverters'

function Dashboard() {
    return (
        <div className='text-center bg-teal-950 h-screen flex flex-col items-center'>
            <Navbar />
            <h1 className='text-white animate-pulse text-[4rem]'>Convert your files easily</h1>
            <ConvertingLayout />
            <ListOfConverters />
        </div>
    )
}

export default Dashboard