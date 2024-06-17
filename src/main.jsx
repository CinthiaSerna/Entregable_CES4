import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import UserProvider  from './context/userContext.jsx';
import VehiculoProvider from './context/vehiculoContext.jsx';
import './index.css';
import IngresoProvider from './context/ingresoContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<UserProvider>
			<VehiculoProvider>
				<IngresoProvider>
				<App />
				</IngresoProvider>
			</VehiculoProvider>	
		</UserProvider>
	</React.StrictMode>,
);