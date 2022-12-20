import React from 'react';
import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import logoWeb from './imagenes/logo.png';
import { useState } from 'react';

function App() {

  const [numeroClicks, setNumClicks] = useState(0); 

  const manejarClick = () =>{
    setNumClicks(numeroClicks + 1);
  };

  const reiniciarContador = () =>{
    setNumClicks(0);   
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className = 'imagen-logo' 
        src = {logoWeb} 
        alt = 'Logo de la pagina web' />
      </div>
      <div className='contenedor-principal-del-contador-de-clicks'>
        <Contador 
        numeroClicks= {numeroClicks} />
        <Boton
        texto = 'Clic' 
        botonClick= {true}
        manejarClick = {manejarClick} />
        <Boton
        texto = 'Reiniciar' 
        botonClick= {false}
        manejarClick = {reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
