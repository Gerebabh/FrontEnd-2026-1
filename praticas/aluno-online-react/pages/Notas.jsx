import Layout from "../layouts/Layout";
import Tabela from "../components/Tabela";



function Notas() {
  const colunas = [
    "Disciplina",
    "A1",
    "A2",
    "A3",
    "Menção"
  ];

  const notas_1_26 = [
    {Disciplina: "Construção de Front End", A1: 9, A2:"--", A3:"--", Menção: "--"},
    {Disciplina: "Manutenção de Software DevOps", A1: 9.5, A2:"--", A3:"--", Menção: "--"},
    {Disciplina: "BI & Data Warehousing", A1: 9.3, A2:"--", A3:"--", Menção: "--"},
    {Disciplina: "Direito Ambiental e Humano", A1: 9.7, A2:"--", A3:"--", Menção: "--"},
    {Disciplina: "Governança de TI", A1: 9, A2:"--", A3:"--", Menção: "--"}
  ];

  const notas_1_25 = [
    {Disciplina: "Construção de Back End", A1: 8, A2: 9, A3:"--", Menção: "MS"},
    {Disciplina: "Engenharia de Software - MTD Ágeis", A1: 9.1, A2:9, A3:"--", Menção: "SS"},
    {Disciplina: "Gerenciamento de Projetos", A1: 9, A2:9.3, A3:"--", Menção: "SS"},
    {Disciplina: "Estrutura de Dados", A1: 9.2, A2:8.9, A3:"--", Menção: "SS"}
  ];

  return (
      <>
        <Tabela semestre={2026.1} titulos={colunas} dados={notas_1_26}/>
        <Tabela semestre={2025.2} titulos={colunas} dados={notas_1_25}/>
    </>
  );
}

export default Notas;
