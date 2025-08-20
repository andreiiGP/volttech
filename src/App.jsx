import { useState } from 'react'
import './App.css'
import Navegacion from './components/Navegacion'
import Contenido from './components/Contenido'

function App() {

  return (
    <div id='Inicio'>
      < Navegacion
        Titulo="VOLTTECH ⚡"
        Inicio="Inicio"
        Nosotros="Nostros"
        Proyectos="Proyectos"
        Servicios="Servicios"
        Contacto="Contacto" />
      <section>
        <Contenido



        />
      </section>


    </div>
  )
}

export default App
