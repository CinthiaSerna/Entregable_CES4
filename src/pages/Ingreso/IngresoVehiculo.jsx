import React, { useContext, useState } from 'react';
import { IngresoContext } from '../../context/ingresoContext';
import FormBusqueda from '../../components/FormBusqueda';
import RegistrarEntrada from '../../components/RegistrarEntrada';

const IngresoVehiculo = () => {

    const { registrarIngresos } = useContext(IngresoContext);

    const [vehiculos, setVehiculos] = useState([]);
    const [vehiculoSeleccionado, setVehiculoSeleccionado] = useState(null);
    const [celdasOcupadas, setCeldasOcupadas] = useState([]);

    const handleBuscar = (resultado) => {
        setVehiculos(resultado);
        setVehiculoSeleccionado(resultado.length > 0 ? resultado[0] : null);
    }

    const handleRegistrar = (entrada) => {
        registrarIngresos(entrada);
        setCeldasOcupadas([...celdasOcupadas,entrada.celda]);
        alert('Entrada registrada correctamente');
        setVehiculoSeleccionado(null);
        setVehiculos([]);
    }

    const handleSeleccionarVehiculo = (e) => {
        const vehiculo = vehiculos.find(v => v.placa === e.target.value);
        setVehiculoSeleccionado(vehiculo);
        // const selectedVehicle = vehiculos.find(vehiculo => vehiculo.placa === e.target.value);
        // setVehiculoSeleccionado(selectedVehicle);
    }

  return (
    <div>
        <h1>Ingresos de Vehículos</h1>
        <FormBusqueda onBuscar={handleBuscar}/>
        {vehiculos.length > 0 && (
            <div>
                <h2>Seleccione el vehículo: </h2>
                <select value={vehiculoSeleccionado?.placa || ''} onChange={handleSeleccionarVehiculo} required>
                    {vehiculos.map((vehiculo, index) => (
                        <option key={index} value={vehiculo.placa}>
                            {vehiculo.placa} - {vehiculo.marca} - {vehiculo.modelo}
                        </option>
                    ))}
                </select>
            </div>
        )}
        {vehiculoSeleccionado && (
            <RegistrarEntrada vehiculo={vehiculoSeleccionado} onRegistrar={handleRegistrar} celdasOcupadas={celdasOcupadas}/>
        )}
    </div>
  )
}

export default IngresoVehiculo;
