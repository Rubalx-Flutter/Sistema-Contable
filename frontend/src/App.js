import './App.css';
import {Routes, Route} from 'react-router-dom'

import Navegate from './components/Navegate';
import CrearUsuarios from './components/CrearUsuarios';
import ListaUsuario from './components/ListaUsuario';
import ActualizarUsuarios from './components/ActualizarUsuario';
import EstadoResultados from './components/Estado';
import { TablaGastos } from './components/TablaGastos';


function App() {
  return (
    <div className=''>
      <Navegate/>
      <div className='container p-4'>
        <Routes>
          <Route path='/' element={ <ListaUsuario/> } />
          <Route path='/CrearUsuarios' element={ <CrearUsuarios/> } />
          <Route path='/edit/:id' element={ <ActualizarUsuarios/> } />
          <Route path='/EstadoResultados' element={ <EstadoResultados/> } />
          <Route path='/TablaGastos' element={ <TablaGastos/> } />
         
        </Routes>
      </div>
    </div>
  );
}

export default App;
