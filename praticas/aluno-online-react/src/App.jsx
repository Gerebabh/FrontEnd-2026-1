import "./App.css";
import Dashboard from "../pages/Dashboard";
import Notas from "../pages/Notas";
import Faltas from "../pages/Faltas";
import Boletos from "../pages/Boletos";
import Requerimentos from "../pages/Requerimentos";
import Layout from "../pages/Layout";
import Login from "../pages/Login";


function App() {
  const pagina = 0;
  return (
    <>
      {pagina == 0 && <Login />}
      {pagina == 1 && <Dashboard />}
      {pagina == 2 && <Notas />}
      {pagina == 3 && <Faltas />}
      {pagina == 4 && <Boletos />}
      {pagina == 5 && <Requerimentos />}
      {pagina == 6 && <Layout />}
    </>
  );
}

export default App;