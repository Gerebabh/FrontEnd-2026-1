import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import TabelaPagamentos from "../components/TabelaPagamentos";

function Boletos() {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar />
      <main className="flex flex-col flex-1">
        <Topbar />  {/* Sem props. Texto fixo da topbar */}
        <h2 className="text-2xl font-semibold p-4">Histórico de Pagamentos</h2>
        <section className="flex-1">
          <TabelaPagamentos />
        </section>
        <Footer />
      </main>
    </section>
  );
}

export default Boletos;
