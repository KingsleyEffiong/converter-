import { signInWithPopup, GoogleAuthProvider, TwitterAuthProvider, GithubAuthProvider } from 'firebase/auth'
import GoogleIcon from '@mui/icons-material/Google';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import { useProvider } from './PostProvider';
import { useNavigate } from 'react-router-dom';
function SigninMethods() {
    const navigate = useNavigate();
    const { dispatch, auth } = useProvider();
    async function handleGoggleAuth() {
        const googleProvider = new GoogleAuthProvider();
        try {
            const authenticate = await signInWithPopup(auth, googleProvider);
            const user = authenticate.user
            console.log(user);
            navigate('/dashboard');
        } catch (err) {
            console.log(err.message)
            if (err.message.includes('Firebase: Error (auth/internal-error).')) {
                dispatch({ type: 'errorMessage', error: 'Network Error, Check your internet connection and try again!!!!' });
                dispatch({ type: 'checkingMessage', message: 'Network Error, Check your internet connection and try again!!!!' });
            } else if ("Firebase: Error (auth/popup-closed-by-user).") {
                dispatch({ type: 'errorMessage', error: 'You close the signin modal, Please signin again' });
                dispatch({ type: 'checkingMessage', message: "You close the signin modal, Please signin again" });
            } else {
                dispatch({ type: 'errorMessage', error: err.message });
                dispatch({ type: 'checkingMessage', message: err.message });
            }
        }
    }
    // async function handleGithubAuth() {
    //     const Githubprovider = new GithubAuthProvider();
    //     try {
    //         const authenticate = await signInWithPopup(auth, Githubprovider);
    //         const user = authenticate.user
    //         console.log(user);
    //         navigate('/dashboard');
    //     } catch (err) {
    //         console.log(err.message)
    //         if (err.message.includes('Firebase: Error (auth/internal-error).')) {
    //             dispatch({ type: 'errorMessage', error: 'Network Error, Check your internet connection and try again!!!!' });
    //             dispatch({ type: 'checkingMessage', message: 'Network Error, Check your internet connection and try again!!!!' });
    //         } else if ("Firebase: Error (auth/popup-closed-by-user).") {
    //             dispatch({ type: 'errorMessage', error: 'You close the signin modal, Please signin again' });
    //             dispatch({ type: 'checkingMessage', message: "You close the signin modal, Please signin again" });
    //         }
    //         else {
    //             dispatch({ type: 'errorMessage', error: err.message });
    //             dispatch({ type: 'checkingMessage', message: err.message });
    //         }
    //     }
    // }
    async function handleTwitterAuth() {
        const Twitterprovider = new TwitterAuthProvider();
        try {
            const authenticate = await signInWithPopup(auth, Twitterprovider);
            const user = authenticate.user
            console.log(user);
            navigate('/dashboard');
        } catch (err) {
            console.log(err.message)
            if (err.message.includes('Firebase: Error (auth/internal-error).')) {
                dispatch({ type: 'errorMessage', error: 'Network Error, Check your internet connection and try again!!!!' });
                dispatch({ type: 'checkingMessage', message: 'Network Error, Check your internet connection and try again!!!!' });
            } else if ("Firebase: Error (auth/popup-closed-by-user).") {
                dispatch({ type: 'errorMessage', error: 'You close the signin modal, Please signin again' });
                dispatch({ type: 'checkingMessage', message: "You close the signin modal, Please signin again" });
            }
            else {
                dispatch({ type: 'errorMessage', error: err.message });
                dispatch({ type: 'checkingMessage', message: err.message });
            }
        }
    }

    return (
        <div className="w-full flex justify-center gap-10 text-teal-950 my-3 cursor-pointer">
            <IconButton onClick={handleGoggleAuth}>
                <GoogleIcon className="text-teal-950" />
            </IconButton>
            <IconButton onClick={handleTwitterAuth}>
                <XIcon className="text-teal-950" />
            </IconButton>
            {/* <IconButton onClick={handleGithubAuth}>
                <GitHubIcon className="text-teal-950" />
            </IconButton> */}
        </div>
    )
}

export default SigninMethods