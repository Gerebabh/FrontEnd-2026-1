import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

function Layout (props) {
    return (
        <section className="flex flex-col lg:flex-row min-h-screen">
        <Sidebar />
            <main className="flex flex-col flex-1">
                <Topbar titulo={props.titulo}/>
                <h2 className="text-2xl font-semibold px-4 py-2">{props.subtitulo}</h2>
                <section>{props.children}</section>
                <Footer />
            </main>
        </section>
    );
}

export default Layout;