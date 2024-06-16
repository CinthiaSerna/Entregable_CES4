import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  UserProvider from './context/userContext.jsx';
import Login from './pages/Login/Login.jsx';
import Inicio from './pages/Inicio/Inicio.jsx';
import RegistroVehiculos from './pages/Vehiculos/RegistroVehiculos.jsx';
import VehiculoProvider from './context/vehiculoContext.jsx';

function App() {
	return (
		<UserProvider>
			<VehiculoProvider>
			<Router>
				<Routes>
				<Route path="/" element={<Login />} />
				<Route path='/Inicio' element={<Inicio />}/>
				<Route path='/Registro' element={<RegistroVehiculos />}/>
				</Routes>
			</Router>
			</VehiculoProvider>
		</UserProvider>
		
	);
  }
  
  export default App;