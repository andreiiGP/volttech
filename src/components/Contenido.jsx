import React from 'react'
import imgfondo from '../assets/pruebauno.jpg'
export default function Contenido(prop) {
  return (
    <>
      <section className='containerfondo'>
        <img className='imagen' src={imgfondo} alt="imagen no encontrada" />
         <div className="overlay"></div>
         <p className='parrafo'>{prop.Pcontenidoimagen}</p>
         <h1 className='Titulicontenido'>{prop.Contenidoimagen}</h1>
      </section>



    </>
  )
}
