import Layout from "../layouts/Layout";
import Tabela from "../components/Tabela";

function Requerimentos() {
  const colunas = ["Tipo Requerimento", "Data Solicitação", "Situação"];

  const requerimentos = [
    {
      Requerimento: "Aprovar o aluno com SS",
      Data: "08/04/2026",
      Situacao: "Deferido",
    },
    {
      Requerimento: "Revisão de Menção",
      Data: "15/12/2025",
      Situacao: "Indeferido",
    },
    {
      Requerimento: "Dispensa de Disciplina",
      Data: "12/06/2025",
      Situacao: "Deferido",
    },
    {
      Requerimento: "Trancamento de Matrícula",
      Data: "05/01/2024",
      Situacao: "Deferido",
    },
    {
      Requerimento: "Mudança de Turno",
      Data: "10/10/2023",
      Situacao: "Deferido",
    },
  ];

  return <Tabela semestre={2026.1} titulos={colunas} dados={requerimentos} />;
}

export default Requerimentos;
