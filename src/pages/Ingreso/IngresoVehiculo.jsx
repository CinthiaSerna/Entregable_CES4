import React, { useContext, useState } from 'react';
import { IngresoContext } from '../../context/ingresoContext';
import FormBusqueda from '../../components/FormBusqueda';
import RegistrarEntrada from '../../components/RegistrarEntrada';

const IngresoVehiculo = () => {

    const { registrarIngresos } = useContext(IngresoContext);

    const [vehiculos, setVehiculos] = useState([]);
    const [vehiculoSeleccionado, setVehiculoSeleccionado] = useState(null);
    const [celdasCarro, setCeldasCarro] = useState(['C1', 'C2', 'C3', 'C4', 'C5']); 
    const [celdasMoto, setCeldasMoto] = useState(['M1', 'M2', 'M3', 'M4', 'M5']); 


    const handleBuscar = (resultado) => {
        setVehiculos(resultado);
        setVehiculoSeleccionado(resultado.length > 0 ? resultado[0] : null);
    }

    const handleRegistrar = (entrada) => {
        registrarIngresos(entrada);
        if (entrada.vehiculo.tipo === 'carro') {
            setCeldasCarro(celdasCarro.filter(celda => celda !== entrada.celda));
        } else if (entrada.vehiculo.tipo === 'moto') {
            setCeldasMoto(celdasMoto.filter(celda => celda !== entrada.celda));
        }
        alert('Entrada registrada correctamente');
        setVehiculoSeleccionado(null);
        setVehiculos([]);
    }

    const handleSeleccionarVehiculo = (e) => {
        const vehiculo = vehiculos.find(v => v.placa === e.target.value);
        setVehiculoSeleccionado(vehiculo);
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
            <RegistrarEntrada 
            vehiculo={vehiculoSeleccionado} 
            onRegistrar={handleRegistrar} 
            celdasDisponibles={vehiculoSeleccionado.tipo === 'carro' ? celdasCarro : celdasMoto} 
        />
        )}
    </div>
  )
}

export default IngresoVehiculo;
