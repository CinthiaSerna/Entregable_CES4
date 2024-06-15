import React, { useContext } from 'react'
import { userContext } from '../../context/userContext';


const Inicio = () => {
  const { logout, isAutenticado } = useContext(userContext);

  return (
    <div>
      <h1>Inicio</h1>
      <button >cerrar sesion</button>
      
    </div>
  )
}

export default Inicio