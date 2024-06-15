import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../context/userContext.jsx';


const Inicio = () => {

  const { logout, isAutenticado } = useContext(userContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  return (
    <div>
      <h1>Inicio</h1>
      <button onClick={handleLogout}>Cerrar sesión</button>
      
    </div>
  )
}

export default Inicio