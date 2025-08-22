import React from 'react'
import logo from '../assets/logo.png'

export default function Navegacion(prop) {

    return (
        <nav class="navbar var-color navbar-expand-lg fixed-top">
            <div class="container">
                <a class="navbar-brand" href="/">
                    <img src={logo}  width="50" height="50"></img>
                    <h3 id='ttitunav'>{prop.Titulo}</h3></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0  ">
                        <li className="nav-item nav-a ">
                            <a className="nav-link colornav" id="nav-a" href="/">{prop.Inicio}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link colornav " id="nav-a" href="#Nosotros">{prop.Nosotros}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link colornav" id="nav-a" href="#Servicios">{prop.Servicios}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link colornav" id="nav-a" href="#Proyectos">{prop.Proyectos}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link colornav" id="nav-a" href="#Contacto">{prop.Contacto}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link colornav" id="nav-a" href="loguin">{prop.Loguin}</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}
