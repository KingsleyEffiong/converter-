import React from 'react'
import Navbar from '../UI/Navbar'
import ListOfConverters from '../component/ListOfConverters'
import ConvertingLayout from '../component/ConvertingLayout'
import Footer from '../component/Footer'

function Dashboard() {
    return (
        <div className='text-center bg-teal-950 h-screen flex flex-col items-center'>
            <Navbar />
            <h1 className='text-white text-[2rem] md:text-[4rem]'>Convert your files easily</h1>
            <ConvertingLayout />
            <ListOfConverters />
            <Footer />
        </div>
    )
}

export default Dashboard