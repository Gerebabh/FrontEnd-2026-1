import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Notas() {
  return (
    <div>
      <Sidebar />
      <main className="flex justify-between flex-col">
        <Topbar />
        <h2>Minhas Notas</h2>
        <section></section>
      </main>
    </div>
  );
}

export default Notas;
