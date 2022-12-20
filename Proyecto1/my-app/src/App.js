import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio.js';
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1 className='titulo-del-contenedor-principal'>Datos irrelevantes sobre los Avengers:</h1>
      </div>
      <Testimonio
        nombre='Anthony Edward Stark'
        pais='Bulgaria'
        imagen='Ironman'
        cargo='Magnate, Científico, Ingeniero'
        testimonio= 'Anthony Edward Stark es el hijo del jefe de Industrias Stark, Howard Stark y su esposa Maria Stark. Un niño genio que ingresa al MIT a la edad de 15 años para estudiar Ingeniería Industrial, luego recibe maestrías en ingeniería eléctrica y física. Después de que sus padres mueren en un accidente automovilístico, hereda la compañía de su familia.'/>
    </div>
  );
}

export default App;
