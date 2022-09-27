import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export default AuthContext;


export const AuthProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('user') === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem('user', '1')
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('user')
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, loginHandler: loginHandler, logoutHandler: logoutHandler }}>
            {props.children}
        </AuthContext.Provider>
    )
}