import React, { createContext, useState } from 'react';

export const IngresoContext = createContext();

const IngresoProvider = ({ children }) => {

    const [ingresos, setIngresos] = useState([]);

    const registrarIngresos = (ingreso) => {
        setIngresos([...ingresos, ingreso])
    };

  return (
    <IngresoContext.Provider value={{ ingresos, registrarIngresos }}>
        {children}
    </IngresoContext.Provider>
  )
}

export default IngresoProvider;