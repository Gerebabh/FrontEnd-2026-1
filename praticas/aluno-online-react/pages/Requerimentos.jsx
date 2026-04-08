import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Requerimentos() {
  return (
    <div>
      <Sidebar />
      <main className="flex justify-between flex-col">
        <Topbar />
        <h2>Meus Requerimentos</h2>
        <section></section>
      </main>
    </div>
  );
}

export default Requerimentos;
