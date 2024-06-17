import React, { useContext } from 'react'
import { VehiculoContext } from '../../context/vehiculoContext.jsx';

const ListaVehiculos = () => {

  const { vehiculos } = useContext(VehiculoContext);

  return (
    <div>
        <h1>Lista de vehículos: </h1>
        <ul>
          {vehiculos.map((vehiculo, index) => (
            <li key={index}>
              {vehiculo.tipo === 'carro' ? (
                <div>
                  <p>Tipo: Carro</p>
                  <p>Placa: {vehiculo.placa}</p>
                  <p>Modelo: {vehiculo.modelo}</p>
                  <p>Marca: {vehiculo.marca}</p>
                  <p>Documento: {vehiculo.documento}</p>
                </div>
              ) : (
                <div>
                  <p>Tipo: Moto</p>
                  <p>Placa: {vehiculo.placa}</p>
                  <p>Modelo: {vehiculo.modelo}</p>
                  <p>Marca: {vehiculo.marca}</p>
                  <p>Cilindraje: {vehiculo.cilindraje}</p>
                  <p>Documento: {vehiculo.documento}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
    </div>
  )
}

export default ListaVehiculos;