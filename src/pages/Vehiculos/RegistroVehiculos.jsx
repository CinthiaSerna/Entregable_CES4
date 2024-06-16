import React, { useState } from 'react'
import FormRegistroVehiculos from '../../components/FormRegistroVehiculos';
import { useContext } from 'react';
import { VehiculoContext } from '../../context/vehiculoContext.jsx';

const RegistroVehiculos = () => {

    const { registrarVehiculo } = useContext(VehiculoContext);
    const [error, setError] = useState('');

    const handleRegistro = (vehiculo) => {
        const result = registrarVehiculo(vehiculo);
        if (!result) {
            setError('La placa o el documento de identidad ya están registrados.')
        } else {
            setError('');
        }
    }

  return (
    <div>
        <h1>Registro de Vehículos</h1>
        {error && <p style={{color: 'red'}}>{error}</p>}
        <FormRegistroVehiculos onSubmit={handleRegistro}/>
    </div>
  )
}

export default RegistroVehiculos;