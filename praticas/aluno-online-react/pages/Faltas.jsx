import Tabela from "../components/Tabela";
import Layout from "../pages/Layout";

function Faltas() {
    const colunas = [
    "Disciplina",
    "Total de Faltas",
    "% de Presença"
  ];

  const faltas_1_26 = [
    {Disciplina: "Construção de Front End", Acum_Faltas: 2, Presenca: "97%"},
    {Disciplina: "Manutenção de Software DevOps", Acum_Faltas: 2, Presenca: "97%"},
    {Disciplina: "BI & Data Warehousing", Acum_Faltas: 0, Presenca: "100%"},
    {Disciplina: "Direito Ambiental e Humano", Acum_Faltas: 0, Presenca: "100%"},
    {Disciplina: "Governança de TI", Acum_Faltas: 0, Presenca: "100%"}
  ];

    const faltas_2_25 = [
    {Disciplina: "Construção de Back End", Acum_Faltas: 0, Presenca: "100%"},
    {Disciplina: "Engenharia de Software - MTD Ágeis", Acum_Faltas: 2, Presenca: "97%"},
    {Disciplina: "Gerenciamento de Projetos", Acum_Faltas: 0, Presenca: "100%"},
    {Disciplina: "Estrutura de Dados", Acum_Faltas: 4, Presenca: "94%"},
    {Disciplina: "Direito", Acum_Faltas: 0, Presenca: "100%"}
  ];


  return (
    <Layout
      titulo="Minhas Faltas"
      subtitulo="Histórico de Faltas por Semestre"
    >
      <Tabela semestre={2026.1} titulos={colunas} dados={faltas_1_26}/>
      <Tabela semestre={2025.2} titulos={colunas} dados={faltas_2_25}/>
    </Layout>
  );
}

export default Faltas;
