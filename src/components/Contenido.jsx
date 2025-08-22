import React from 'react'
import imgfondo from '../assets/pruebauno.jpg'
export default function Contenido(prop) {
  return (
    <>
      <section className='containerfondo'>
        <img className='imagen' src={imgfondo} alt="imagen no encontrada" />
        <div className="overlay"></div>
        <p className='parrafo slide-right '>{prop.Pcontenidoimagen}</p>
        <div className="overlaydos">
          <h1 className='Titulicontenido slide-right'>{prop.Contenidoimagen}</h1>
        </div>
      </section>
    </>
  )
}
