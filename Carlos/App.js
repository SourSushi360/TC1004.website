import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../lector-placas/src/AuthContext';
import FormSession from './components/FormSession';
import FormReg from './components/FormReg';
import Visitas from './Visitas';
import VisitasReg from './VisitasReg';

function App() {
  return (
    <Router>
      <AuthProvider> {/* Envuelve toda la aplicación con el proveedor de contexto de autenticación */}
        <div className="App">
          <Routes>
            <Route path="/" element={<Visitas />} />
            <Route path="/VisitasReg" element={<VisitasReg />} />
            <Route path="/Visitas" element={<Visitas />} />
            <Route path="/FormSession" element={<FormSession />} />
            <Route path="/FormReg" element={<FormReg />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
