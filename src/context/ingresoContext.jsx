import React, { createContext, useState } from 'react';

export const IngresoContext = createContext();

const IngresoProvider = ({ children }) => {
    const initialCeldas = {
        carros: Array(10).fill(null), // 10 celdas para carros
        motos: Array(5).fill(null)    // 5 celdas para motos
    };

    const [ingresos, setIngresos] = useState([]);
    const [celdas, setCeldas] = useState(initialCeldas);

    const registrarIngresos = (entrada) => {
        setIngresos([...ingresos, entrada]);
        const newCeldas = { ...celdas };
        if (entrada.vehiculo.tipo === 'carro') {
            newCeldas.carros[entrada.celda - 1] = entrada;
        } else {
            newCeldas.motos[entrada.celda - 1] = entrada;
        }
        setCeldas(newCeldas);
    };

    return (
        <IngresoContext.Provider value={{ registrarIngresos, celdas }}>
            {children}
        </IngresoContext.Provider>
    );
}

export default IngresoProvider;
