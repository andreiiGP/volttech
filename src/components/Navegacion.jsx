import React from 'react'
import logo from '../assets/logo.png'

export default function Navegacion(prop) {

    return (

        <nav className="navbar navbar-expand-lg var-color fixed-top" data-bs-theme="light">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html">
                    <img src={logo} alt={prop.Titulo} width="50" height="50" className="d-inline-block align-text-top"></img>
                    <h5 id="ttitunav">{prop.Titulo}</h5></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0  ">
                        <li className="nav-item nav-a ">
                            <a className="nav-link colornav" id="nav-a" aria-current="page" href="#">{prop.Inicio}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link colornav " id="nav-a" href="#">{prop.Nosotros}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link colornav" id="nav-a" href="#">{prop.Servicios}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link colornav" id="nav-a" href="#">{prop.Proyectos}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link colornav" id="nav-a" href="#">{prop.Contacto}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}
