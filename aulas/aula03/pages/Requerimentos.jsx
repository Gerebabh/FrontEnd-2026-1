import Tabela from "../components/Tabela"
import Layout from "../pages/Layout";

function Requerimentos() {
    const colunas = []
    const requerimentos = []
    return <Layout 
        titulo="Meus Requerimentos" 
        subtitulo="Requerimentos on-line para secretaria"
        >
            <Tabela titulos={colunas} dados={requerimentos}/>
        </Layout>
}

export default Requerimentos;