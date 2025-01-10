import React from 'react'
import Navbar from '../UI/Navbar'
import PdfToWord from '../component/PdfToWord'
import ListOfConverters from '../component/ListOfConverters'
import ConvertingLayout from '../component/ConvertingLayout'

function Dashboard() {
    return (
        <div className='text-center bg-teal-950 h-screen flex flex-col items-center'>
            <Navbar />
            <h1 className='text-white animate-pulse text-[4rem]'>Convert your files easily</h1>
            <ConvertingLayout />
            {/* <PdfToWord /> */}
            <ListOfConverters />
        </div>
    )
}

export default Dashboard