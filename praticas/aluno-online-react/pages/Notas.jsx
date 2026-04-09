import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import TabelaNotas from "../components/TabelaNotas";
import Footer from "../components/Footer";


function Notas() {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar />
      <main className="flex flex-col flex-1">
        <Topbar />  {/* Sem props. Texto fixo da topbar */}
        <h2 className="text-2xl font-semibold p-4">Histórico de Notas por Semestre</h2>
        <section className="flex-1">
          <TabelaNotas />
          <TabelaNotas />
        </section>
        <Footer />
      </main>
    </section>
  );
}

export default Notas;
