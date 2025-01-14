import React from 'react';
import ReactTypingEffect from "react-typing-effect";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { auth } from '../Firebase';
import { useNavigate } from "react-router-dom";
import { useProvider } from "../component/PostProvider";
function Navbar() {
    const navigate = useNavigate();
    const { dispatch } = useProvider();

    async function handleLogoutUser() {
        auth.signOut().then(() => {
            dispatch({ type: 'successMessage', success: 'User is Logedout' });
            navigate('/login'); // Navigate to login page after sign out
            console.log('User is Logedout');
        }).catch((error) => {
            // console.error("Error signing out: ", error);
            dispatch({ type: 'errorMessage', error: error.message });
        });
    }

    return (
        <div className='w-full h-[70px] flex justify-between items-center px-3'>
            <h1 className='text-white text-3xl'>
                MY CONVERTER
            </h1>
            <LogoutOutlinedIcon
                className='text-white cursor-pointer'
                onClick={handleLogoutUser} // Trigger logout when clicked
                sx={{
                    fontSize: '3rem'
                }} />
        </div>
    );
}

export default Navbar;
