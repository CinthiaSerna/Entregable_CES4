import React, { createContext, useState } from 'react';

export const IngresoContext = createContext();

const IngresoProvider = ({ children }) => {
    const initialCeldas = {
        carros: Array(5).fill(null),
        motos: Array(5).fill(null)
    };

    const [celdas, setCeldas] = useState(initialCeldas);

    const registrarIngresos = (entrada) => {
        const newCeldas = { ...celdas };
        if (entrada.vehiculo.tipo === 'carro') {
            newCeldas.carros[parseInt(entrada.celda.charAt(1)) - 1] = entrada;
        } else {
            newCeldas.motos[parseInt(entrada.celda.charAt(1)) - 1] = entrada;
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
