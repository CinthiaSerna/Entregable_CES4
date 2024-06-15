import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import  UserProvider  from './context/userContext.jsx';
import './index.css';
import Login from './components/Login/Login.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<UserProvider>
			<App />
		</UserProvider>
	</React.StrictMode>,
);