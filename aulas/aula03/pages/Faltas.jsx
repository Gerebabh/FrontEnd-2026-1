import Tabela from "../components/Tabela";
import Layout from "../pages/Layout";


function Faltas() {
    const colunas = []
    const faltas = []

return <Layout 
        titulo="Minhas Faltas" 
        subtitulo="Histórico de Faltas por Semestre"
        >
            <Tabela titulos={colunas} dados={faltas}/>

        </Layout>
}

export default Faltas;
