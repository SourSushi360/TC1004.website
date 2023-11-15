import React, { useState, useEffect } from 'react';
import NavigationBar from './components/NavigationBar.js';
import RegistroTabla from './components/RegistroTabla.js';
import './Home.css';
import { useAuth } from '../lector-placas/src/AuthContext.js'; // Importa el contexto de autenticación
import { useNavigate } from 'react-router-dom';
function Visitas() {
  const [nombre, setNombre] = useState("No hay nombre disponible");
  const [isGuard, setIsGuard] = useState(true);
  useEffect(() => {
    // Cargar los datos del usuario desde el localStorage al montar el componente
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setNombre(userData.nombre);
    }
  }, []);
  const { loggedIn } = useAuth(); // Accede al estado de sesión desde el contexto de autenticación
  const [productos, setProductos] = useState([]); // Inicializado como un array vacío
  const navigate = useNavigate();


  return (
    <div className="fondo">
     <NavigationBar isLoggedIn={loggedIn} isGuard={isGuard} />
      <RegistroTabla/>
    </div>
  );
}

export default Visitas;
