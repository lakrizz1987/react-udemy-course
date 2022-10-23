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

    const calculatingTime = (time) => {
        const currentTime = new Date().getTime();
        const futureTime = new Date(time).getTime();

        const duration = futureTime - currentTime;
        return duration;
    }

    const logoutHandler = () => {
        setToken('')
        sessionStorage.clear();
    }

    const loginHandler = (token,time) => {
        sessionStorage.setItem('token', token)
        setToken(token)
        const timeForLogOut = calculatingTime(time);

        setTimeout(loginHandler,timeForLogOut)
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