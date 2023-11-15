import './App.css';
import { AuthProvider } from './AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Registro, Cotos, Ingresos, Contacto, IniciarSesion } from './components';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/registro' exact Component={Registro}/>
          <Route path='/cotos' exact Component={Cotos}/>
          <Route path='/ingresos' exact Component={Ingresos}/>
          <Route path='/contacto' exact Component={Contacto}/>
          <Route path='/iniciar-sesion' exact Component={IniciarSesion}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
