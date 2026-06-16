import Layout from "../layouts/Layout";
import Tabela from "../components/Tabela";
import Botao from "../components/Botao";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { listar } from "../src/services/requerimentoService";

function Requerimentos() {
  const colunas = ["Tipo Requerimento", "Data Solicitação", "Situação"];
  const navigate = useNavigate();

  const [requerimentos, SetRequerimentos] = useState([]);

  useEffect (() => {
      const disparar = async () => {
        const resposta = await listar ();
      const dadosFormatados = resposta.map(item => ({
        id: item.id,
        Requerimento: item.tipo,
        Data: item.dataRequerimento,
        Situacao: item.situacao
      }));
      SetRequerimentos(dadosFormatados);
      };
    disparar();
  }, []);

  return  (
    <>
      <Botao
        onClick={() => navigate("/requerimentoform")}
        className="w-60 h-12 ml-4 mb-4" 
        >
          ➕ Novo Requerimento 
        </Botao>
      <Tabela semestre={2026.1} titulos={colunas} dados={requerimentos} />;
    </>
  )
}


export default Requerimentos;
