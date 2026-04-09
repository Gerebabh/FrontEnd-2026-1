import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar />
      <main className="flex flex-col flex-1">
        <Topbar />
        <h2 className="text-2xl font-semibold px-4 py-2">Bem-vindo ao portal do aluno</h2>
        <section className="flex flex-col flex-1 px-4">
          <ul className="grid grid-cols-1 md:grid-row gap-1">
            <li className="list-none"><Card /></li>
            <li className="list-none"><Card /></li>
            <li className="list-none"><Card /></li>
          </ul>
        </section>
        <Footer />
      </main>
    </section>
  );
}

export default Dashboard;
