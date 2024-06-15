import React, { createContext, useState } from 'react';

export const userContext = createContext();

const UserProvider = ({ children }) => {
    const [isAutenticado, setIsAutenticado] = useState(false);

    const login = (username, password) => {
        if (username === "Pancho" && password === "PanchoPerez") {
            setIsAutenticado(true);
            return true;
        } else {
            return false;
        }
    };

    const logout = () => {
        setIsAutenticado(false);
    };

    return (
        <userContext.Provider value={{ isAutenticado, login, logout }}>
            {children}
        </userContext.Provider>
    )
}

export default UserProvider;