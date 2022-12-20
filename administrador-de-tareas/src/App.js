import './App.css';
import logo from './imagenes/logo.png';
import React from 'react';
import ListaDeTareas from './componentes/lista-de-tareas';


function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='logo-contenedor'>
        <img 
        src={logo}
        className = 'imagen-logo' />
      </div>
      <div className='lista-principal-de-tareas'>
        <h1 className='titulo-principal-de-tareas'>Mis tareas</h1>
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
