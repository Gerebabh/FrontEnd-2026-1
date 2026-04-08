import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Sidebar />
      <main className="flex flex-col flex-1">
        <Topbar />
        <h2 className="text-2xl mb-4">Bem-vindo ao portal do aluno</h2>
        <section className="flex flex-col flex-1">
          <Card />
          <Card />
          <Card />
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Dashboard;
