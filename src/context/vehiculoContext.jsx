import React, { createContext, useState } from 'react';

export const VehiculoContext = createContext();

const VehiculoProvider = ({ children }) => {

    const [vehiculos, setVehiculos] = useState([]);

    const registrarVehiculo = (vehiculo) => {
        const placaExiste = vehiculos.some(v => v.placa === vehiculo.placa);
        const documentoExiste = vehiculos.some(v => v.documento === vehiculo.documento);

        if (placaExiste || documentoExiste) {
            return false;
        }

        setVehiculos([...vehiculos, vehiculo]);
        return true;

    };

  return (
    <VehiculoContext.Provider value={{vehiculos, registrarVehiculo}}>
        {children}
    </VehiculoContext.Provider>
  )
}

export default VehiculoProvider;