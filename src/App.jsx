import { useState } from 'react'
import './App.css'
import Navegacion from './components/Navegacion'
import Contenido from './components/Contenido'
import Nosotros from './components/Nosotros'

function App() {

  return (
    <>
      <section id='Inicio'>
      < Navegacion
        Titulo="VOLTTECH"
        Inicio="Inicio"
        Nosotros="Nostros"
        Proyectos="Proyectos"
        Servicios="Servicios"
        Contacto="Contacto" 
        Loguin="Loguin" />
      </section>
      <section>
        <Contenido
        Pcontenidoimagen="Innovación  Electrica"
        Contenidoimagen="SOLUCIONES ELÉCTRICAS INTEGRALES PARA TU PROPIEDAD"
        />
      </section>
      <section id='Nosotros'>
        <Nosotros
        Titulonosotros="Nuestra Empresa"
        
        
        
        />
      </section>
    </>
  )
}

export default App
