import React, { createContext, useState } from 'react';

export const VehiculoContext = createContext();

const VehiculoProvider = ({ children }) => {

    const [vehiculos, setVehiculos] = useState([]);

    const registrarVehiculo = (vehiculo) => {
      setVehiculos((prevVehiculos) => {
          const documentoExiste = prevVehiculos.some(v => v.documento === vehiculo.documento);

          if (documentoExiste) {
              return [...prevVehiculos, vehiculo];
          } else {
              const placaExiste = prevVehiculos.some(v => v.placa === vehiculo.placa);
              if (!placaExiste) {
                  return [...prevVehiculos, vehiculo];
              } else {
                  return prevVehiculos;
              }
          }
      });
      return true;
  };

  return (
    <VehiculoContext.Provider value={{vehiculos, registrarVehiculo}}>
        {children}
    </VehiculoContext.Provider>
  )
}

export default VehiculoProvider;