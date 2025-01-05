import PropTypes from "prop-types";
import { createContext, useContext } from "react";
import { auth } from '../Firebase'
PostProvider.propTypes = {
    children: PropTypes.any.isRequired,
};

const Provider = createContext();

function PostProvider({ children }) {
    return (
        <Provider.Provider value={{
            auth
        }}>
            {children}
        </Provider.Provider>
    )
}

function useProvider() {
    const context = useContext(PostProvider);
    if (context === undefined) throw new Error('PostContext was used outside the postProvider');
    return context
}

export { PostProvider, useProvider }