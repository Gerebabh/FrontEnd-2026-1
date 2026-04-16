import Layout from "../pages/Layout";
import Tabela from "../components/Tabela";

function Boletos() {

  const colunas = [
    "Vencimento",
    "Valor",
    "Situação"
  ];

  const boletos = [
    {vencimento: "01/01/2026", valor: 500, situacao:"Pago"},
    {vencimento: "01/02/2026", valor: 500, situacao:"Pago"},
    {vencimento: "01/03/2026", valor: 500, situacao:"Pago"},
    {vencimento: "01/04/2026", valor: 500, situacao:"Pago"},
    {vencimento: "01/05/2026", valor: 500, situacao:"Pago"},
    {vencimento: "01/06/2026", valor: 500, situacao:"A Vencer"},
    {vencimento: "01/07/2026", valor: 500, situacao:"A Vencer"}
  ]

  return (
    <Layout
      titulo="Meus Boletos"
      subtitulo="Histórico de Pagamentos"
    >
      <Tabela semestre={1.2026} titulos={colunas} dados={boletos} />
    </Layout>
  );
}

export default Boletos;
