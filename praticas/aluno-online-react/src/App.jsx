import { Routes, Route } from 'react-router';
import Dashboard from "../pages/Dashboard";
import Notas from "../pages/Notas";
import Faltas from "../pages/Faltas";
import Boletos from "../pages/Boletos";
import Requerimentos from "../pages/Requerimentos";
import Layout from "../layouts/Layout";
import Login from "../pages/Login";
import Erro404 from "../pages/Erro404";

function App() {
  return (
    <Routes>
      {/* Rota de Login: Fica FORA do Layout para ocupar a tela toda */}
      <Route path="/login" element={<Login />} />

      {/* Rotas Protegidas: Todas usam o Layout (Sidebar/Navbar) */}
      <Route path="/" element={<Layout />}>
        {/* O index agora é o Dashboard, que é a tela principal após logar */}
        <Route index element={<Dashboard />} />
        <Route path="notas" element={<Notas />} />
        <Route path="faltas" element={<Faltas />} />
        <Route path="boletos" element={<Boletos />} />
        <Route path="requerimentos" element={<Requerimentos />} />
      </Route>

      {/* Rota para páginas não encontradas */}
      <Route path="*" element={<Erro404 />} />
    </Routes>
  );
}

export default App;