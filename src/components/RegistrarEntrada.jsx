import React, { useContext, useState } from 'react'
import { IngresoContext } from '../context/ingresoContext';

const RegistrarEntrada = ({ vehiculo, onRegistrar, celdasDisponibles }) => {

    const [celda, setCelda] = useState('');
    const [error, setError] = useState('');

    // const { registrarIngresos } = useContext(IngresoContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (celda) {
            const entrada = {
                vehiculo,
                fecha: new Date(),
                celda: celda.toString(),
            };
            onRegistrar(entrada);
        } else {
            setError('Debe seleccionar una celda.');
        }
    };

  return (
    <form onSubmit={handleSubmit}>
            <div>
                <p>Placa: {vehiculo.placa}</p>
                <p>Marca: {vehiculo.marca}</p>
                <p>Modelo: {vehiculo.modelo}</p>
                <p>Cilindraje: {vehiculo.cilindraje}</p>
                <p>Documento: {vehiculo.documento}</p>
            </div>
            <br />
            <div>
                <label>Celda: </label>
                <select value={celda} onChange={(e) => setCelda(e.target.value)} required>
                    <option value="">Seleccione una celda</option>
                    {celdasDisponibles.map((celda, index) => (
                        <option key={index} value={celda}>{celda}</option>
                    ))}
                </select>
            </div>
            <br />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type='submit'>Registrar Entrada</button>
        </form>
  )
}

export default RegistrarEntrada;
