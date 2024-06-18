import React, { useContext } from 'react';
import { IngresoContext } from '../../context/ingresoContext';

const VisualizarCeldas = () => {
    const { celdas } = useContext(IngresoContext);

    return (
        <div>
            <h1>Estado de las celdas del parqueadero: </h1>
            <h2>Celdas Para Carros: </h2>
            <div>
                {celdas.carros.map((entrada, index) => (
                    <div key={index} style={{ marginBottom: '10px', border: '1px solid black', padding: '10px' }}>
                        <p>Celda {index + 1}: {entrada ? 'Ocupada' : 'Disponible'}</p>
                        {entrada && (
                            <div>
                                <p>Placa: {entrada.vehiculo.placa}</p>
                                <p>Marca: {entrada.vehiculo.marca}</p>
                                <p>Modelo: {entrada.vehiculo.modelo}</p>
                                <p>Cilindraje: {entrada.vehiculo.cilindraje}</p>
                                <p>Documento: {entrada.vehiculo.documento}</p>
                                <p>Fecha de Ingreso: {new Date(entrada.fecha).toLocaleString()}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <h2>Celdas Para Motos: </h2>
            <div>
                {celdas.motos.map((entrada, index) => (
                    <div key={index} style={{ marginBottom: '10px', border: '1px solid black', padding: '10px' }}>
                        <p>Celda {index + 1}: {entrada ? 'Ocupada' : 'Disponible'}</p>
                        {entrada && (
                            <div>
                                <p>Placa: {entrada.vehiculo.placa}</p>
                                <p>Marca: {entrada.vehiculo.marca}</p>
                                <p>Modelo: {entrada.vehiculo.modelo}</p>
                                <p>Cilindraje: {entrada.vehiculo.cilindraje}</p>
                                <p>Documento: {entrada.vehiculo.documento}</p>
                                <p>Fecha de Ingreso: {new Date(entrada.fecha).toLocaleString()}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VisualizarCeldas;
