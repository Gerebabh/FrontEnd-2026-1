import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { useEffect } from "react";
import Botao from "../../components/Botao";
import { criar } from "../services/requerimentoService";

function RequerimentoForm() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            dataRequerimento: new Date ().toLocaleDateString("en-CA"),
            situacao:"Novo"
        }
    });

    const limparFormulario = () => {
        if (window.confirm("Deseja realmente limpar o formulário?")) {
            reset();
        }
    };

    const navigate = useNavigate();

    const onSubmit = async (dados) => {
        // console.log("Dados do Requerimento enviado:", dados);
        await criar(dados);
        navigate("/requerimentos");
    };

    const regras = {
        tipo: {
            required: "Por favor, selecione o tipo de requerimento"
        },

        descricao: {
            required: "O texto do requerimento é obrigatório",

            minLength: {
                value: 20,
                message:
                    "Por favor, escreva uma descrição com pelo menos 20 caracteres."
            },

            maxLength: {
                value: 1000,
                message:
                    "A descrição deve possuir no máximo 1000 caracteres."
            }
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">
                Novo Requerimento
            </h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
            >
                {/* Tipo */}
                <div>
                    <label
                        htmlFor="tipo"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Tipo de Requerimento
                    </label>

                    <select
                        id="tipo"
                        {...register("tipo", regras.tipo)}
                        className="w-full h-10 px-3 border border-gray-300 rounded-lg outline-none bg-white focus:border-blue-500"
                    >
                        <option value="">
                            Selecione uma opção...
                        </option>
                        <option value="Revisão de Menção">
                            Revisão de Menção
                        </option>
                        <option value="Dispensa de Disciplina">
                            Dispensa de Disciplina
                        </option>
                        <option value="Trancamento de Matrícula">
                            Trancamento de Matrícula
                        </option>
                        <option value="Mudança de Turno">
                            Mudança de Turno
                        </option>
                    </select>

                    {errors?.tipo && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.tipo.message}
                        </p>
                    )}
                </div>

                {/* Descrição */}
                <div>
                    <label
                        htmlFor="descricao"
                        className="text-sm font-medium text-gray-700"
                    >
                        Descrição do Requerimento:
                    </label>

                    <textarea
                        id="descricao"
                        rows="5"
                        placeholder="Digite aqui detalhadamente o motivo do seu requerimento..."
                        {...register(
                            "descricao",
                            regras.descricao
                        )}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500 resize-y min-h-[100px]"
                    />

                    {errors?.descricao && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.descricao.message}
                        </p>
                    )}
                </div>

                {/* Data */}
                <div>
                    <label
                        htmlFor="dataRequerimento"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Data do Requerimento
                    </label>

                    <input
                        type="date"
                        id="dataRequerimento"
                        readOnly
                        {...register(
                            "dataRequerimento",
                            regras.dataRequerimento
                        )}
                        className="w-40 h-10 px-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
                    />

                    {errors?.dataRequerimento && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.dataRequerimento.message}
                        </p>
                    )}
                </div>
                {/* Botoes */}
                <div className="flex gap-4 pt-2">

                    <Botao 
                        variant="secondary"
                        onClick={() => navigate("/requerimentos")}
                    >
                        Cancelar
                    </Botao>

                    <Botao
                        type="submit" 
                        variant="primary"
                    >
                        Enviar 
                    </Botao>

                    <Botao
                        variant="danger"
                        onClick={limparFormulario}
                    >
                        Limpar 
                    </Botao>
                </div>
            </form>
        </div>
    );
}

export default RequerimentoForm;