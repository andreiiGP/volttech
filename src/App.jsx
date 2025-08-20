import { useState } from 'react'
import './App.css'
import Navegacion from './components/Navegacion'
import Inicio from './components/Inicio'

function App() {

  return (
    <>
      < Navegacion
        Titulo="VOLTTECH ⚡"
        Inicio="Inicio"
        Nosotros="Nostros"
        Proyectos="Proyectos"
        Servicios="Servicios"
        Contacto="Contacto"
      />
        <Inicio
        />

    </>
  )
}

export default App
