import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  UserProvider from './context/userContext.jsx';
import Login from './components/Login/Login.jsx';
import Inicio from './components/Inicio/Inicio.jsx';

function App() {
	return (
		<UserProvider>
			<Router>
				<Routes>
				<Route path="/" element={<Login />} />
				<Route path='/Inicio' element={<Inicio />}/>
				</Routes>
			</Router>
		</UserProvider>
		
	);
  }
  
  export default App;