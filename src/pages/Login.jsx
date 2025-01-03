import React from 'react'
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
import SortByAlphaRoundedIcon from '@mui/icons-material/SortByAlphaRounded';
import InsertChartRoundedIcon from '@mui/icons-material/InsertChartRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import AttachEmailRoundedIcon from '@mui/icons-material/AttachEmailRounded';
import { Button, TextField } from '@mui/material';
function Login() {
    const getRandomPosition = () => {
        const x = Math.floor(Math.random() * 100); // Random position on x-axis (100% width)
        const y = Math.floor(Math.random() * 100); // Random position on y-axis (100% height)
        return { left: `${x}%`, top: `${y}%` };
    };
    const renderIcons = (icon, count) => {
        return Array.from({ length: count }).map((_, index) => (
            <div key={index} style={{ ...getRandomPosition() }} className="absolute">
                {icon}
            </div>
        ));
    };
    return (
        <div className='w-full flex items-center justify-center'>
            <div className="bg-white h-screen w-[50%] flex justify-center items-center">
                <div className="w-[400px] h-[300px] py-4 px-3">
                    <h1 className='text-center text-3xl'>
                        <span>PDF CONVERTER</span>
                        <PictureAsPdfRoundedIcon />
                    </h1>
                    <p className='text-center'>Convert any document for free</p>
                    <form action="" className='w-full flex flex-col gap-6 py-5'>
                        <TextField
                            label="Email"
                            focused
                            fullWidth
                            id="fullWidth"
                            sx={{
                                '& .MuiInputLabel-root': {
                                    color: 'rgb(4 47 46 / var(--tw-bg-opacity, 1))',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: 'rgb(4 47 46 / var(--tw-bg-opacity, 1))',
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'rgb(4 47 46 / var(--tw-bg-opacity, 1))',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'rgb(4 47 46 / var(--tw-bg-opacity, 1))',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'rgb(4 47 46 / var(--tw-bg-opacity, 1))',
                                    },
                                },
                            }}
                        />
                        <TextField
                            label="Password"
                            focused
                            fullWidth
                            id="fullWidth"
                            sx={{
                                '& .MuiInputLabel-root': {
                                    color: 'rgb(4 47 46 / var(--tw-bg-opacity, 1))',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: 'rgb(4 47 46 / var(--tw-bg-opacity, 1))',
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'rgb(4 47 46 / var(--tw-bg-opacity, 1))',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'rgb(4 47 46 / var(--tw-bg-opacity, 1))',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'rgb(4 47 46 / var(--tw-bg-opacity, 1))',
                                    },
                                },
                            }}
                        />
                        <TextField
                            label="Comfirmed password"
                            focused
                            fullWidth
                            id="fullWidth"
                            sx={{
                                '& .MuiInputLabel-root': {
                                    color: 'rgb(4 47 46 / var(--tw-bg-opacity, 1))',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: 'rgb(4 47 46 / var(--tw-bg-opacity, 1))',
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'rgb(4 47 46 / var(--tw-bg-opacity, 1))',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'rgb(4 47 46 / var(--tw-bg-opacity, 1))',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'rgb(4 47 46 / var(--tw-bg-opacity, 1))',
                                    },
                                },
                            }}
                        />
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'rgb(4 47 46 / var(--tw-bg-opacity, 1))', // Custom background color
                                color: 'white', // White text color
                                '&:hover': {
                                    backgroundColor: 'rgb(4 47 46 / var(--tw-bg-opacity, 1))', // Ensure background stays same on hover
                                },
                            }}
                        >
                            Login
                        </Button>
                    </form>
                </div>
            </div>
            <div className="bg-teal-950 h-screen w-[50%] text-white relative overflow-hidden">
                {/* Duplicate icons and position them randomly */}
                {renderIcons(<PictureAsPdfRoundedIcon sx={{ fontSize: 40 }} />, 2)}
                {renderIcons(<SortByAlphaRoundedIcon sx={{ fontSize: 40 }} />, 2)}
                {renderIcons(<InsertChartRoundedIcon sx={{ fontSize: 40 }} />, 2)}
                {renderIcons(<ImageRoundedIcon sx={{ fontSize: 40 }} />, 2)}
                {renderIcons(<AttachEmailRoundedIcon sx={{ fontSize: 40 }} />, 2)}
            </div>
        </div>
    )
}

export default Login