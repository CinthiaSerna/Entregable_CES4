import React, { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login, isAutenticado } = useContext(UserContext);

  const navigate = useNavigate();

  // const defaultUsername = 'Pancho';
  // const defaultPassword = 'PanchoPerez';

  const handleLogin = (event) => {
    event.preventDefault();
    if (login(username, password)) {
      setError('');
      navigate('/Inicio');
      console.log('Inicio de sesión exitoso n.n');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div>
      <h1>Inicio de Sesión</h1>
      {isAutenticado ? (
        <Navigate to="/Inicio" />
      ) : (
        <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Usuario: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Contraseña: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Iniciar Sesión</button>
      </form>
      )}
    </div>
  );
};

export default Login;
