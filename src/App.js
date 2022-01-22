import './App.css';
import { Routes,Route } from 'react-router-dom';
import UnidadeConsumidora from './pages/unidadeconsumidora';
import EnergiaGerada from './pages/energiagerada';
import Home from './pages/home'
import Dashboard from './pages/dashboard'
import Menu from './component/menu'


function App() {
  return (
<>
        <Menu/>
        <Routes> 
            <Route path="/" element={<Home/>}/>
            <Route path="/unidadeconsumidora/:id" element={<UnidadeConsumidora/>}/>
            <Route path="/energiaGerada" element={<EnergiaGerada/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
</>
  );
}
export default App;
