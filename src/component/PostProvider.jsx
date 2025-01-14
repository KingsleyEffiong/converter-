import PropTypes from "prop-types";
import { createContext, useContext, useReducer } from "react";
import { auth } from '../Firebase'
import {} from 'firebase/auth'
PostProvider.propTypes = {
    children: PropTypes.any.isRequired,
};

const Provider = createContext();

const initialState = {
    res: window.innerWidth < 900,
    errorMessage: null,
    successMessage: null,
    checkingMessage: null,
    loading: false,
    convertFormat: null,
}


function PostProvider({ children }) {
    function reducer(state, action) {
        switch (action.type) {
            case 'responsiveness':
                return {
                    ...state,
                    res: action.payload
                }
            case 'errorMessage':
                return {
                    ...state,
                    errorMessage: action.error
                }
            case 'successMessage':
                return {
                    ...state,
                    successMessage: action.success
                }
            case 'checkingMessage':
                return {
                    ...state,
                    checkingMessage: action.message
                }
            case 'loading':
                return {
                    ...state,
                    loading: action.payload
                }
            case 'convertFormat':
                return {
                    ...state,
                    convertFormat: action.payload
                }
            default:
                return state
        }
    }
    const [{ res, errorMessage, successMessage, checkingMessage, loading, convertFormat }, dispatch] = useReducer(reducer, initialState);
    return (
        <Provider.Provider value={{
            auth,
            res,
            errorMessage,
            successMessage,
            loading,
            checkingMessage,
            convertFormat,
            dispatch
        }}>
            {children}
        </Provider.Provider>
    )
}

function useProvider() {
    const context = useContext(Provider);
    if (context === undefined) throw new Error('PostContext was used outside the postProvider');
    return context
}

export { PostProvider, useProvider }