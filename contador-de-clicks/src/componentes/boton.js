import React from "react";
import '../hojas-estilo/boton.css';

function Boton({texto,botonClick, manejarClick}){
return(
  <button className={ botonClick ? 'boton-click' : 'boton-reiniciar' }
    onClick={manejarClick}>
    {texto}
  </button>
);
}

export default Boton;