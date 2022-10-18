import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

import SignIn from "./pages/Login/Login";
import SignUp from "./pages/Cadastro/Cadastro";
import Perfil from "./pages/Perfil/Perfil"
import Listagem from "./pages/ListagemTarefas/ListagemTarefas"

//import { AuthProvider } from "../services/AuthContext";
//import { ThemeProvider } from '@mui/material/styles';
//import { theme } from './utils/styles/theme';

function App() {
  return (
    <div className="App">
            <Routes>
              {/*//? Public Routes */}
              <Route path="/login" element={<SignIn />} />
              <Route path="/cadastro" element={<SignUp />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/listagem" element={<Listagem />} />
            </Routes>
    </div>
  );
}

export default App;
