import React from 'react';
import './styles.css';
import Logo from './logo'

const Header = () => {
    return (
        <div class="header-container">
            <div class="logo-container">
                <Logo/>
            </div>
            <div class="header">
                <a href="index.html" class="logo">PLACOSITOS</a>
                <a href="index.html" id="present">INICIO</a>
                <a href="#cotos">COTOS</a>
                <a href="#ingresos">INGRESOS</a>
                <a href="#contacto">CONTACTO</a>
                <a href="#iniciar-sesion" class="login" id="iniciar-sesion">INICIAR SESIÓN</a>
                <a href="#registro" class="login" id="registro">REGISTRO</a>
            </div>
        </div>
    );
};

export default Header;