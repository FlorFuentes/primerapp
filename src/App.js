//import logo from './logo.svg';
import './App.css';
import Usuario from './componentes/Usuario';

function App() {
  return (
    <div className="App">
      
      
        
        <Usuario nombre="Florencia" cargo="Desarrolladora Web" descargarCV="Cv de Florencia" imagen={require('./componentes/img/stych.png')}/>
        <Usuario nombre="Carlos" cargo="Tecnico en Sofware" descargarCV="Cv de Carlos" imagen={require('./componentes/img/stych.png')}/>
        <Usuario nombre="Martina" cargo="Desarrollador Back End" descargarCV="Cv de Martina" imagen={require('./componentes/img/stych.png')} /> 
      
    </div>
  );
}

export default App;
