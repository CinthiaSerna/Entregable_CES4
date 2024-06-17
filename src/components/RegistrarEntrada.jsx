import React, { useState } from 'react'

const RegistrarEntrada = ({ vehiculo, onRegistrar }) => {

    const [celda, setCelda] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (celda) {
            const entrada = {
                vehiculo, 
                fecha: new Date(),
                celda,
            };
            onRegistrar(entrada);
        } else {
            setError('Debe de seleccionar una celda');
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
            <input type='text' value={celda} onChange={(e) => setCelda(e.target.value)} required/>
        </div>
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type='submit'>Registrar Entrada</button>
    </form>
  )
}

export default RegistrarEntrada;