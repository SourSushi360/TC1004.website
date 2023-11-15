import './FormSession.css';
import RegistrationForm from './RegistrationForm';
import React, { useState, useEffect } from 'react';
import './Perfil.css';
import { useAuth } from '../AuthContext.js';
import NavigationBar from './NavigationBar.js';

const FormReg = () => {
  const { loggedIn, logout } = useAuth();
  const [nombre, setNombre] = useState("No hay nombre disponible");
  const [correo, setCorreo] = useState("No hay correo disponible");
  const [isGuard, setIsGuard] = useState(false);
  useEffect(() => {
    // Cargar los datos del usuario desde el localStorage al montar el componente
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setNombre(userData.nombre);
      setCorreo(userData.correo);
    }
  }, []);
  return (
    <div className='fondo'>
      <NavigationBar isLoggedIn={loggedIn} isGuard={isGuard} />
      <div className='row container-fluid'>
        <div className='col-12 fondo2'>
            <RegistrationForm/>
        </div>
      </div>
    </div>
  );
};

export default FormReg;