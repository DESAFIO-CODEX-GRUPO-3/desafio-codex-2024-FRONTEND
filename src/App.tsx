import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/globals.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Servico from './pages/Servico'; // Corrigindo a importação

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Servico />} /> {/* Corrigindo o elemento para Servico */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

