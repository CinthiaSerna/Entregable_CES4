import React, { useState } from 'react'
import { useContext } from 'react';
import { VehiculoContext } from '../../context/vehiculoContext.jsx';
import FormRegistroVehiculos from '../../components/FormRegistroVehiculos';

const RegistroVehiculos = () => {

    const { registrarVehiculo } = useContext(VehiculoContext);
    const [error, setError] = useState('');
    const [exitos, setExitos] = useState('');

    const handleRegistro = (vehiculo) => {
        const result = registrarVehiculo(vehiculo);
        if (!result) {
            setError('La placa o el documento de identidad ya están registrados.')
        } else {
            setExitos('Vehículo registrado exitosamente');
        }
    }

  return (
    <div>
        <h1>Registro de Vehículos</h1>
        {error && <p style={{color: 'red'}}>{error}</p>}
        {exitos && <p style={{color: 'green'}}>{exitos}</p> }
        <FormRegistroVehiculos onSubmit={handleRegistro}/>
    </div>
  )
}

export default RegistroVehiculos;