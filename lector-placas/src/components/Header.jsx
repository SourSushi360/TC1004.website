import React from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';
import Registro from './Registro';

const Header = () => {
    const URI = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2ZXJzaW9uPSIxLjAiIHZpZXdCb3g9Ii0xLjggMC4wIDQ3Ni40IDUwMC4wIiB6b29tQW5kUGFuPSJtYWduaWZ5IiBzdHlsZT0iZmlsbDogcmdiKDAsIDAsIDApOyIgb3JpZ2luYWxfc3RyaW5nX2xlbmd0aD0iMTk1OCIgd2lkdGg9IjQ3NnB4IiBoZWlnaHQ9IjUwMHB4Ij48bGluZWFyR3JhZGllbnQgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iX19pZDExNl9zMW0yZnI2MDBqaSIgeDE9IjEzNi40OTUiIHgyPSIzMjQuMzUiIHhsaW5rOmFjdHVhdGU9Im9uTG9hZCIgeGxpbms6c2hvdz0ib3RoZXIiIHhsaW5rOnR5cGU9InNpbXBsZSIgeTE9IjYuNDUiIHkyPSI0NjQuMTM1Ij48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiByZ2IoMjM4LCAyNTEsIDMpOyI+PC9zdG9wPjxzdG9wIG9mZnNldD0iLjk2NCIgc3R5bGU9InN0b3AtY29sb3I6IHJnYigyMzgsIDI1MSwgMyk7Ij48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJNMjcxLjg2NTgxNDIsMjMyLjk0NjY4NThINTkuMjI0MjgxM2MtOC4yNDY2NTgzLDAtMTQuMjE0NDk2Ni03Ljg3Mjg5NDMtMTEuOTg2NTQxNy0xNS44MTI4OTY3IEwxMDUuNjE1Njk5OCw5LjA4NjA3NjdDMTA3LjEyMzI5ODYsMy43MTMyNjk1LDExMi4wMjE5MjY5LDAsMTE3LjYwMjI0MTUsMGgyMTIuNjQxNTQwNSBjOC4yNDY2NzM2LDAsMTQuMjE0NTA4MSw3Ljg3Mjg5NzYsMTEuOTg2NTQxNywxNS44MTI4OTg2TDI4My44NTIzNTYsMjIzLjg2MDYxMSBDMjgyLjM0NDc1NzEsMjI5LjIzMzQyOSwyNzcuNDQ2MTM2NSwyMzIuOTQ2Njg1OCwyNzEuODY1ODE0MiwyMzIuOTQ2Njg1OHogTTEzMy43NTIwNTk5LDM4OS45ODgwMDY2bDMwLjA1ODI1ODEtMTA3LjEyMTc5NTcgYzIuMjI3OTUxLTcuOTQwMDAyNC0zLjczOTg4MzQtMTUuODEyODk2Ny0xMS45ODY1NDE3LTE1LjgxMjg5NjdINDIuNTE1MTFjLTUuNTgwMzE4NSwwLTEwLjQ3ODkzOTEsMy43MTMyNTY4LTExLjk4NjU0MzcsOS4wODYwNTk2IEwwLjQ3MDMxMDQsMzgzLjI2MTE2OTRjLTIuMjI3OTU1Myw3Ljk0MDAwMjQsMy43Mzk4ODM3LDE1LjgxMjg5NjcsMTEuOTg2NTQyNywxNS44MTI4OTY3aDEwOS4zMDg2NjI0IEMxMjcuMzQ1ODMyOCwzOTkuMDc0MDY2MiwxMzIuMjQ0NDYxMSwzOTUuMzYwODA5MywxMzMuNzUyMDU5OSwzODkuOTg4MDA2NnogTTE4OS4wNjYxMDExLDI3Ni4xMzkzNzM4bC01OC4zNzc5NDQ5LDIwOC4wNDc3Mjk1IEMxMjguNDYwMTg5OCw0OTIuMTI3MTA1NywxMzQuNDI4MDM5Niw1MDAsMTQyLjY3NDY5NzksNTAwaDIxMi42NDE1MjUzYzUuNTgwMzIyMywwLDEwLjQ3ODk0MjktMy43MTMyNTY4LDExLjk4NjU0MTctOS4wODYwOTAxIGw1OC4zNzc5NjAyLTIwOC4wNDc2OTljMi4yMjc5NjYzLTcuOTQwMDAyNC0zLjczOTg2ODItMTUuODEyODk2Ny0xMS45ODY1NDE3LTE1LjgxMjg5NjdIMjAxLjA1MjY1ODEgQzE5NS40NzIzMzU4LDI2Ny4wNTMzMTQyLDE5MC41NzM3MTUyLDI3MC43NjY1NzEsMTg5LjA2NjEwMTEsMjc2LjEzOTM3Mzh6IE0zMzkuMTY2NDEyNCwxMTAuMDEyMDAxbC0zMC4wNTgyNTgxLDEwNy4xMjE3ODggYy0yLjIyNzk2NjMsNy45NDAwMDI0LDMuNzM5ODk4NywxNS44MTI4OTY3LDExLjk4NjU0MTcsMTUuODEyODk2N2gxMDkuMzA4NjU0OCBjNS41ODAzMjIzLDAsMTAuNDc4OTQyOS0zLjcxMzI1NjgsMTEuOTg2NTQxNy05LjA4NjA3NDhsMzAuMDU4MjU4MS0xMDcuMTIxNzg4IGMyLjIyNzk2NjMtNy45NDAwMDI0LTMuNzM5ODY4Mi0xNS44MTI4OTY3LTExLjk4NjU0MTctMTUuODEyODk2N0gzNTEuMTUyOTU0MSBDMzQ1LjU3MjYzMTgsMTAwLjkyNTkyNjIsMzQwLjY3NDAxMTIsMTA0LjYzOTE5ODMsMzM5LjE2NjQxMjQsMTEwLjAxMjAwMXoiIHN0eWxlPSJmaWxsOiB1cmwoJnF1b3Q7I19faWQxMTZfczFtMmZyNjAwamkmcXVvdDspOyI+PC9wYXRoPjwvc3ZnPg==";

    return (
        <div class="header-container">
            <div class='logo-container'>
                <img src={URI} alt="logo placositos" className="logo"/>
            </div>
            <div class="header">
                <a href="/" class="logo">PLACOSITOS</a>
                <NavLink to="/" exact activeClassName="active">INICIO</NavLink>
                <NavLink to="/cotos" exact activeClassName="active">COTOS</NavLink>
                <NavLink to="/ingresos" exact activeClassName="active">INGRESOS</NavLink>
                <NavLink to="/contacto" exact activeClassName="active">CONTACTO</NavLink>
                <a href="/iniciar-sesion" class="login" id="iniciar-sesion">INICIAR SESIÓN</a>
                <a href="/registro" class="login" id="registro">REGISTRO</a>
            </div>
        </div>
    );
};

export default Header;