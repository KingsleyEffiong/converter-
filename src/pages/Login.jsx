import React, { useEffect, useState } from 'react'
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
import SortByAlphaRoundedIcon from '@mui/icons-material/SortByAlphaRounded';
import InsertChartRoundedIcon from '@mui/icons-material/InsertChartRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import AttachEmailRoundedIcon from '@mui/icons-material/AttachEmailRounded';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import { Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useProvider } from '../component/PostProvider';
import SigninMethods from '../component/SigninMethods';
import { signInWithEmailAndPassword } from 'firebase/auth'
import Modal from '../UI/Modal';
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import AnimatedIconPage from '../UI/AnimatedIconPage';
import CircularProgress from '@mui/material/CircularProgress';

function Login() {
    const { res, dispatch, checkingMessage, auth, loading } = useProvider();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    function togglePasswordVisibility() {
        setShowPassword(!showPassword);
    }
    const navigate = useNavigate();

    async function handleLogin() {
        dispatch({ type: 'loading', payload: true })
        try {
            if (!email.trim() || !password.trim()) {
                throw new Error('All fields must be filled')
            }
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            dispatch({ type: 'successMessage', success: 'You have successfully logged in' });
            navigate('/dashboard');
        } catch (err) {
            console.log(err.message);
            if (err.message.includes('Firebase: Error (auth/network-request-failed).')) {
                dispatch({ type: 'errorMessage', error: 'Network Error, Check your internet connection' });
                dispatch({ type: 'checkingMessage', message: 'Network Error, Check your internet connection' });
            }
            else if (err.message.includes('Firebase: Error (auth/invalid-credential).')) {
                dispatch({ type: 'errorMessage', error: 'Invalid Credentials, Put in a correct credential' });
                dispatch({ type: 'checkingMessage', message: 'Invalid Credentials, Put in a correct credential' });
            }
            else if (err.message.includes('Firebase: Error (auth/invalid-email).')) {
                dispatch({ type: 'errorMessage', error: 'Email is invalid' });
                dispatch({ type: 'checkingMessage', message: 'Email is invalid' });
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
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon
                                            className='text-teal-950' />
                                    </InputAdornment>
                                ),
                            }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                            onClick={handleLogin}
                            sx={{
                                backgroundColor: 'rgb(4 47 46 / var(--tw-bg-opacity, 1))', // Custom background color
                                color: 'white', // White text color
                                fontFamily: 'inherit',
                                '&:hover': {
                                    backgroundColor: 'rgb(4 47 46 / var(--tw-bg-opacity, 1))', // Ensure background stays same on hover
                                },
                            }}
                        >
                            {loading ? <CircularProgress sx={{
                                color: 'white',
                                fontSize: 1
                            }} /> : 'Login'}
                        </Button>
                    </form>
                    <p className='text-center'>
                        <span>dont have an account </span>
                        <Link to='/signup'>Sign up</Link>
                    </p>
                    <p className='text-center'>or signin with </p>
                    <SigninMethods />
                </div>
                {checkingMessage !== null && <Modal />}
            </div>
            {checkingMessage !== null && <Modal />}
            <AnimatedIconPage />
        </div>
    )
}

export default Login