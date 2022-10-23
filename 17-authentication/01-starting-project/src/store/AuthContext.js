import React, { useState, createContext } from "react";

const AuthContext = createContext({
    token: '',
    isLogin: false,
    login: () => { },
    logout: () => { }
});

export const AuthContextProvider = (props) => {
    const loginStatus = sessionStorage.getItem('token')
    const [token, setToken] = useState(loginStatus);

    const isLoginUser = !!token;

    const loginHandler = (token) => {
        sessionStorage.setItem('token',token)
        setToken(token)
    }

    const logoutHandler = () => {
        setToken('')
        sessionStorage.clear();
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