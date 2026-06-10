import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import { Outlet, Navigate } from "react-router";
import { useAuthContext } from "../src/hooks/useAuthcontext";

function Layout () {
    const { logado } = useAuthContext();

    return (
        <>
            { logado ? (
            <section className="flex flex-col lg:flex-row min-h-screen">
            <Sidebar />
                <main className="flex flex-col flex-1">
                    
                    <Topbar />
                    <h2 className="text-2xl font-semibold px-4 py-2">"Bem vindo ao portal do aluno"</h2>
                    <section><Outlet /></section>
                    <Footer />
                </main>
            </section>
            ) : (
                <Navigate to="/login" />
            )}
        </>
    );
}

export default Layout;