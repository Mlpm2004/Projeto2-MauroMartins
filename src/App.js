import './App.css';
import Login from '../src/components/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import UnidadeConsumidora from './pages/unidadeconsumidora';
import EnergiaGerada from './pages/energiagerada';
import Cadastro from './pages/editaunidade';
import { LoginProvider } from './context/login';
function App() {
  return (
      <LoginProvider>
          <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/unidades" element={<UnidadeConsumidora/>} />
              <Route path="/geracoes" element={<EnergiaGerada/>} />
              <Route path="/editaunidade/:id" element={<Cadastro/>} />
              <Route path="/editaunidade" element={<Cadastro/>} />
          </Routes>
          <ToastContainer />
      </LoginProvider>
  
  );
}

export default App;
