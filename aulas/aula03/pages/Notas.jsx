import Tabela from "../components/Tabela";
import Layout from "../pages/Layout";

function Notas() {
    return <Layout 
        titulo="Minhas Notas" 
        subtitulo="Histórico de Notas por Semestre"
        >
            <Tabela />
            <Tabela />
            <Tabela />

    </Layout>
}

export default Notas;