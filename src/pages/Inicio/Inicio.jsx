import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext.jsx';


const Inicio = () => {

  const { logout, isAutenticado } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  const navegarRegistro = () => {
    navigate('/Registro')
  }

  const navegarLista = () => {
    navigate('/Lista-vehiculos')
  }

  const navegarIngreso = () => {
    navigate('/Ingreso')
  }

  const navegarCeldas = () => {
    navigate('/Visualizacion-celdas')
  }

  return (
    <div>
      <div>
        <h1>Inicio</h1>
        <div>
          <button onClick={navegarRegistro}>Registrar un vehículo</button>
        </div>
        <br />
        <div>
          <button onClick={navegarLista}>Ver listado de vehículos</button>
        </div>
        <br />
        <div>
          <button onClick={navegarIngreso}>Registrar ingreso de un vehículo</button>
        </div>
        <br />
        <div>
          <button onClick={navegarCeldas}>Visualizar Listado de Celdas</button>
        </div>
        <br />
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </div>
  )
}

export default Inicio