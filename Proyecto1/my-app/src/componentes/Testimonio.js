import React from 'react';
import '../hojas-de-estilo/testimonio.css'
function Testimonio(props){
  return(
    <div className='contenedor-testimonio'>
      <img 
        className = 'imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.jpg`)}
        alt = 'Foto de Ironman' />
        <div className='contenedor-testimonio-texto'>
          <p className='nombre-testimonio'>
            <strong>{props.nombre}{props.pais}</strong>
            </p>
          <p className='puesto-del-equipo'>{props.cargo}</p>
          <p className='texto-testimonio'>{props.testimonio}</p>
        </div>
    </div>
  );
}

export default Testimonio;