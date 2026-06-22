import { Routes, Route } from 'react-router';
import Dashboard from "../pages/Dashboard";
import Notas from "../pages/Notas";
import Faltas from "../pages/Faltas";
import Boletos from "../pages/Boletos";
import Requerimentos from "../pages/Requerimentos";
import Layout from "../layouts/Layout";
import Login from "../pages/Login";
import Erro404 from "../pages/Erro404";
import RequerimentoForm from "./forms/RequerimentoForm";
import Privado from '../pages/Privado';

function App() {
  return (
    <Routes>
      <Route element={<Privado />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="notas" element={<Notas />} />
          <Route path="faltas" element={<Faltas />} />
          <Route path="boletos" element={<Boletos />} />
          <Route path="requerimentos" element={<Requerimentos />} />
          <Route path="requerimentoform" element={<RequerimentoForm />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Erro404 />} />
    </Routes>
  );
}

export default App;