import React, { useEffect, useState } from 'react'
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import GoogleIcon from '@mui/icons-material/Google';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { PostProvider, useProvider } from "../component/PostProvider";
import AnimatedIconPage from '../UI/AnimatedIconPage';

function Signup() {
  const { res, dispatch } = useProvider();
  useEffect(() => {
    const handleResize = () => {
      dispatch({ type: 'responsiveness', payload: window.innerWidth < 900 })
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [res]);

  return (
    <div className={`w-full flex items-center justify-center ${res ? 'flex-col' : 'flex-row'}`}>
      <div className={`bg-white h-screen  ${res ? 'w-[100%]' : 'w-[50%]'} flex justify-center items-center py-6`}>
        <div className="w-[400px] h-[400px] px-3">
          <h1 className='text-center text-3xl'>
            <span>DOCUMENTS CONVERTER</span>
            <EventRepeatIcon />
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
                  fontFamily: 'inherit'
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
                  fontFamily: 'inherit'
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
                  fontFamily: 'inherit'
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
                fontFamily: 'inherit',
                '&:hover': {
                  backgroundColor: 'rgb(4 47 46 / var(--tw-bg-opacity, 1))', // Ensure background stays same on hover
                },
              }}
            >
              Signup
            </Button>
          </form>
          <p className='text-center'>
            <span>already have an account </span>
            <Link to='/login'>Login</Link>
          </p>
          <p className='text-center'>or signup with </p>
          <div className="w-full flex justify-center gap-10 text-teal-950 my-3 cursor-pointer">
            <GoogleIcon />
            <XIcon />
            <GitHubIcon />
          </div>
        </div>
      </div>
      <AnimatedIconPage />
    </div>
  )
}

export default Signup