import React, { useState, createContext } from "react";

const AuthContext = createContext({
    token: '',
    isLogin: false,
    login: () => { },
    logout: () => { }
});

export const AuthContextProvider = (props) => {
    
    const [token, setToken] = useState('');

    const isLoginUser = !!token;

    const loginHandler = (token) => {
        setToken(token)
    }

    const logoutHandler = () => {
        setToken('')
    }

    const providerValue = {
        token: token,
        isLogin: isLoginUser,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={providerValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;