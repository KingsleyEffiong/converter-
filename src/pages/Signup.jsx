import React, { useEffect, useState } from 'react'
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import { Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { PostProvider, useProvider } from "../component/PostProvider";
import AnimatedIconPage from '../UI/AnimatedIconPage';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import ReactTypingEffect from "react-typing-effect";
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Modal from '../UI/Modal';
import SigninMethods from '../component/SigninMethods';
import CircularProgress from '@mui/material/CircularProgress';




function Signup() {
  const navigate = useNavigate();
  const { res, dispatch, auth, checkingMessage, loading } = useProvider();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }
  function toggleCPasswordVisibility() {
    setShowCPassword(!showCPassword);
  }

  async function handleSubmit() {
    dispatch({ type: 'loading', payload: true })
    try {
      if (!email.trim() || !password.trim() || !cpassword.trim()) {
        throw new Error('All fields must be filled')
      }
      if (password !== cpassword) throw new Error('Password must be the same!!!');
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;
      dispatch({ type: 'successMessage', success: 'User has been added successfully' });
      navigate('/login')
    } catch (err) {
      console.log(err.message);
      if (err.message.includes('Firebase: Error (auth/network-request-failed).')) {
        console.log('True')
        dispatch({ type: 'errorMessage', error: 'Network Error, Check your internet connection' });
        dispatch({ type: 'checkingMessage', message: 'Network Error, Check your internet connection' });
      }
      else if (err.message.includes('Firebase: Error (auth/email-already-in-use).')) {
        dispatch({ type: 'errorMessage', error: 'Email is already registered' });
        dispatch({ type: 'checkingMessage', message: 'Email is already registered' });
      }
      else if (err.message.includes('Firebase: Error (auth/invalid-email).')) {
        dispatch({ type: 'errorMessage', error: 'Email is invalid' });
        dispatch({ type: 'checkingMessage', message: 'Email is invalid' });
      }
      else if (err.message.includes('Firebase: Password should be at least 6 characters (auth/weak-password).')) {
        dispatch({ type: 'errorMessage', error: 'Your password is weak, use a stronger password' });
        dispatch({ type: 'checkingMessage', message: 'Your password is weak, use a stronger password' });
      }
      else {
        dispatch({ type: 'errorMessage', error: err.message });
        dispatch({ type: 'checkingMessage', message: err.message });
      }
    }
    finally {
      dispatch({ type: 'loading', payload: false })
    }
  }


  return (
    <div className={`w-full flex items-center justify-center ${res ? 'flex-col' : 'flex-row'}`}>
      <div className={`bg-white h-screen  ${res ? 'w-[100%]' : 'w-[50%]'} flex justify-center items-center py-6`}>
        <div className="w-[400px] h-[400px] px-3">
          {/* <h1 className='text-center text-3xl'>
            <span>DOCUMENTS CONVERTER</span>
          </h1> */}
          <h1 className="text-center text-3xl">
            <span>DOCUMENTS CONVERTER</span>
            <EventRepeatIcon />
          </h1>
          <p className="text-center">
            <ReactTypingEffect
              text={["Convert any document for free"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
            />
          </p>
          <form action="" className='w-full flex flex-col gap-6 py-5'>
            <TextField
              label="Email"
              focused
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="fullWidth"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon
                      className='text-teal-950' />
                  </InputAdornment>
                ),
              }}
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
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="fullWidth"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKeyIcon className="text-teal-950" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility}>
                      {showPassword ? (
                        <VisibilityIcon className="text-teal-950" />
                      ) : (
                        <VisibilityOffIcon className="text-teal-950" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiInputLabel-root': {
                  color: 'rgb(4 47 46 / var(--tw-bg-opacity, 1))',
                  fontFamily: 'inherit',
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
              type={showCPassword ? 'text' : 'password'}
              value={cpassword}
              onChange={(e) => setCPassword(e.target.value)}
              id="fullWidth"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKeyIcon
                      className='text-teal-950' />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={toggleCPasswordVisibility}>
                      {showCPassword ? (
                        <VisibilityIcon className="text-teal-950" />
                      ) : (
                        <VisibilityOffIcon className="text-teal-950" />
                      )}
                    </IconButton>
                  </InputAdornment>
                )
              }}
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
              onClick={handleSubmit}
            >
              {loading ? <CircularProgress sx={{
                color: 'white',
                fontSize: 1
              }} /> : 'Signup'}
            </Button>
          </form>
          <p className='text-center'>
            <span>already have an account </span>
            <Link to='/login'>Login</Link>
          </p>
          <p className='text-center'>or signup with </p>
          <SigninMethods />
        </div>
        {checkingMessage !== null && <Modal />}
      </div >
      <AnimatedIconPage />
    </div >
  )
}

export default Signup