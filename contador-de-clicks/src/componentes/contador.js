import React from "react";
import '../hojas-estilo/contador.css'

function Contador({ numeroClicks }){
  return(
    <div className='contador'>
      {numeroClicks}
    </div>
  );
}

export default Contador;