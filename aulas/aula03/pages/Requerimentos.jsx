import Tabela from "../components/Tabela"
import Layout from "../pages/Layout";

function Requerimentos() {
    return <Layout 
        titulo="Meus Requerimentos" 
        subtitulo="Requerimentos on-line para secretaria"
        >
            <Tabela />
        </Layout>
}

export default Requerimentos;