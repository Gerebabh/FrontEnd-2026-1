import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import TabelaRequerimentos from "../components/TabelaRequerimentos";

function Requerimentos() {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar />
      <main className="flex flex-col flex-1">
        <Topbar />  {/* Sem props. Texto fixo da topbar */}
        <header className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold">Faça Solicitações Online Para Secretaria</h2>
          <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-md transition-colors shadow-md self-start md:self-auto">
              + Novo Requerimento
          </button>
        </header>
        <section className="flex-1">
          <TabelaRequerimentos />
        </section>
        <Footer />
      </main>
    </section>
  );
}

export default Requerimentos;
