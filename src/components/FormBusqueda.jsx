import React, { useContext, useState } from 'react'
import { VehiculoContext } from '../context/vehiculoContext';

const FormBusqueda = ({ onBuscar }) => {

    const [cedula, setCedula] = useState('cedula');
    const [valor, setValor] = useState('');
    
    const { vehiculos } = useContext(VehiculoContext);

    const handleSubmit = (event) => {
      event.preventDefault();
      const resultado = cedula === 'cedula'
        ? vehiculos.filter(v => v.documento === valor)
        : vehiculos.filter(v => v.placa === valor);

        onBuscar(resultado);
    };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Buscar por: </label>
        <select value={cedula} onChange={(e) => setCedula(e.target.value)} required>
          <option value="cedula">Documento</option>
          <option value="placa">Placa</option>
        </select>
      </div>
      <br />
      <div>
        <label>{cedula === 'cedula' ? 'Documento' : 'Placa'}: </label>
        <input type='text' value={valor} onChange={(e) => setValor(e.target.value)} required/> 
      </div> 
      <br />
      <button type='submit'>Buscar</button>
    </form>
  )
}

export default FormBusqueda;