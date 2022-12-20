import './App.css';
import logoWeb from './imagenes/logo.png'
import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/botonClear';
import { useState } from 'react';
import React from 'react';
import {evaluate} from 'mathjs';


function App() {

  const [input,setInput] = useState('');

  const agregarInput = val =>{
    setInput(input + val);
  };

  const cacularResultado = () =>{
    if (input){
      setInput(evaluate(input));
    }else{
      alert("No se ingresaron valores a calcular");
    }
  };

  return (
    <div className="App">
      <div className='contenedor-logo'>
        <img className='imagen-logo' 
        src={logoWeb} 
        alt ='Logo de la pagina web' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input ={input} />
        <div className='fila'>
        <Boton manejarClick ={agregarInput}>1</Boton>
        <Boton manejarClick ={agregarInput}>2</Boton>
        <Boton manejarClick ={agregarInput}>3</Boton>
        <Boton manejarClick ={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClick ={agregarInput}>4</Boton>
        <Boton manejarClick ={agregarInput}>5</Boton>
        <Boton manejarClick ={agregarInput}>6</Boton>
        <Boton manejarClick ={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClick ={agregarInput}>7</Boton>
        <Boton manejarClick ={agregarInput}>8</Boton>
        <Boton manejarClick ={agregarInput}>9</Boton>
        <Boton manejarClick ={agregarInput}>*</Boton>   
        </div>
        <div className='fila'>
        <Boton manejarClick ={cacularResultado}>=</Boton>
        <Boton manejarClick ={agregarInput}>0</Boton>
        <Boton manejarClick ={agregarInput}>.</Boton>
        <Boton manejarClick ={agregarInput}>/</Boton>
        </div>
        <div className='fila'></div>
          <BotonClear manejarClear = {() => setInput('')}>Clear</BotonClear>
      </div>
    </div>
  );
}

export default App;
