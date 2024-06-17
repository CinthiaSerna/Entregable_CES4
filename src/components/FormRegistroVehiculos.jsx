import React, { useState } from 'react';

const FormRegistroVehiculos = ({ onSubmit }) => {

    const [tipo, setTipo] = useState('carro');
    const [placa, setPlaca] = useState('');
    const [modelo, setModelo] =useState('');
    const [marca, setMarca] = useState('');
    const [cilindraje, setCilindraje] = useState('');
    const [documento, setDocumento] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (placa && modelo && marca && (tipo === 'carro' || cilindraje) && documento) {
            onSubmit ({tipo, placa, modelo, marca, cilindraje, documento});
        }
    };

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Tipo de vehículo: </label>
            <select value={tipo} onChange={(e) => setTipo(e.target.value)} required>
                <option value="carro">Carro</option>
                <option value="moto">Moto</option>
            </select>
        </div>
        <br />
        <div>
            <label>Placa: </label>
            <input type='text' value={placa} onChange={(e) => setPlaca(e.target.value)} required/>
        </div>
        <br />
        <div>
            <label>Marca: </label>
            <select value={marca} onChange={(e) => setMarca(e.target.value)} required>
                <option value="">Selecciona una marca</option>
                <option value="Toyota">Toyota</option>
                <option value="Mazda">Mazda</option>
                <option value="Hyundai">Hyundai</option>
                <option value="BMW">BMW</option>
                <option value="Volkswagen">Volkswagen</option>
            </select>
        </div>
        <br />
        <div>
            <label>Modelo: </label>
            <select value={modelo} onChange={(e) => setModelo(e.target.value)} required>
                <option value="Modelo1">Modelo 1</option>
                <option value="Modelo2">Modelo 2</option>
                <option value="Modelo3">Modelo 3</option>
            </select>
        </div>
        <br />
        {tipo === 'moto' && (
            <div>
                <label>Cilindraje: </label>
                <select value={cilindraje} onChange={(e) => setCilindraje(e.target.value)} required>
                    <option value="">Seleccione el cilindraje: </option>
                    <option value="100">100 cc</option>
                    <option value="100">150 cc</option>
                    <option value="100">200 cc</option>
                </select>
            </div>
        )}
        <br />
        <div>
            <label>Documento de identidad: </label>
            <input type='text' value={documento} onChange={(e) => setDocumento(e.target.value)} required/>
        </div>
        <br />
        <button type='submit'>Registrar vehículo</button>
    </form>
  )
}

export default FormRegistroVehiculos;