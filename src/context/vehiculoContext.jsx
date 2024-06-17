import React, { createContext, useState } from 'react';

export const VehiculoContext = createContext();

const VehiculoProvider = ({ children }) => {

    const [vehiculos, setVehiculos] = useState([]);

    // const registrarVehiculo = (vehiculo) => {
    //     const placaExiste = vehiculos.some(v => v.placa === vehiculo.placa);
    //     const documentoExiste = vehiculos.some(v => v.documento === vehiculo.documento);

    //     if (placaExiste || documentoExiste) {
    //         return false;
    //     }

    //     setVehiculos([...vehiculos, vehiculo]);
    //     return true;

    // };

    const registrarVehiculo = (vehiculo) => {
      setVehiculos((prevVehiculos) => {
          // Verifica si el documento existe en los vehículos actuales
          const documentoExiste = prevVehiculos.some(v => v.documento === vehiculo.documento);

          if (documentoExiste) {
              // Si el documento existe, agrega el vehículo sin impedimentos
              return [...prevVehiculos, vehiculo];
          } else {
              // Si el documento no existe, verifica si la placa existe
              const placaExiste = prevVehiculos.some(v => v.placa === vehiculo.placa);
              if (!placaExiste) {
                  // Si la placa no existe, agrega el vehículo
                  return [...prevVehiculos, vehiculo];
              } else {
                  // Si la placa existe, devuelve false
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