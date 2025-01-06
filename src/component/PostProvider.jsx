import PropTypes from "prop-types";
import { createContext, useContext, useReducer } from "react";
import { auth } from '../Firebase'
PostProvider.propTypes = {
    children: PropTypes.any.isRequired,
};

const Provider = createContext();

const initialState = {
    res: window.innerWidth < 900,
    errorMessage: null,
    successMessage: null,
    internetMessage: null,
}


function PostProvider({ children }) {
    function reducer(state, action) {
        switch (action.type) {
            case 'Responsiveness':
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
            default:
                return state
        }
    }
    const [{ res, errorMessage, successMessage }, dispatch] = useReducer(reducer, initialState);
    return (
        <Provider.Provider value={{
            auth,
            res,
            errorMessage,
            successMessage,
            dispatch
        }}>
            {children},
        </Provider.Provider>
    )
}

function useProvider() {
    const context = useContext(Provider);
    if (context === undefined) throw new Error('PostContext was used outside the postProvider');
    return context
}

export { PostProvider, useProvider }