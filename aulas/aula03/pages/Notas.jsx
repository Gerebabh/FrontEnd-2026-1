import Tabela from "../components/Tabela";
import Layout from "../pages/Layout";

function Notas() {
    const colunas = []
    const notas = []
    return <Layout 
        titulo="Minhas Notas" 
        subtitulo="Histórico de Notas por Semestre"
        >
            <Tabela titulos={colunas} dados={notas} />
    </Layout>
}

export default Notas;