import React, { createContext, useState } from 'react';

export const UserContext = createContext();

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
        <UserContext.Provider value={{ isAutenticado, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;