// DEPENDÊNCIAS
import './App.css';
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import UnidadeConsumidora from './pages/Unidadeconsumidora';
import EnergiaGerada from './pages/Energiagerada';
import Cadastro from './pages/Editaunidade';
function App() {
  return (
// Routes cria as rotas
// ToastContainer cria div para os avisos do toast
<>
          <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/unidades" element={<UnidadeConsumidora/>} />
              <Route path="/geracoes" element={<EnergiaGerada/>} />
              <Route path="/editaunidade/:id" element={<Cadastro/>} />
              <Route path="/editaunidade" element={<Cadastro/>} />
          </Routes>
          <ToastContainer />
</>
  
  );
}

export default App;
