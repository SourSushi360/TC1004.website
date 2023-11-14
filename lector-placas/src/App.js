import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Header, Home, Registro, Cotos, Ingresos, Contacto, IniciarSesion} from './components';
import { Suspense } from 'react';

function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/registro' exact Component={Registro}/>
          <Route path='/cotos' exact Component={Cotos}/>
          <Route path='/ingresos' exact Component={Ingresos}/>
          <Route path='/contacto' exact Component={Contacto}/>
          <Route path='/iniciar-sesion' exact Component={IniciarSesion}/>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
