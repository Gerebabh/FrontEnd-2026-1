import { useState, useEffect } from "react";
import spinner from "../assets/spinner.svg"
import tailwindcss from "tailwindcss";

function Home() {
    const [ carregando, setCarregando ] = useState(true);
    const [ tarefas, setTarefas ] = useState ([]);
    
    const carregarDados = async () => {
        await new Promise ((resolve) => setTimeout(resolve, 3000));
        setTarefas ([
            {id: 1, nome: "Fazer o trabalho", status: "aberta"},
            {id: 2, nome: "Estudar API Rest", status: "aberta"},
            {id: 3, nome: "Entregar as Práticas", status: "pendente"},
            {id: 4, nome: "Revisar o conteúdo", status: "pendente"},
            {id: 5, nome: "Assisir video-aulas", status: "concluída"},
        ]);
    };

    useEffect(() => {
        const disparar = async () => {
            await carregarDados();
            setCarregando(false);
        };
        disparar();
    }, []);

    return (
        <>
            <h1>Página Inicial</h1>
            <h2>Minhas Tarefas do Dia</h2>
            { carregando ? (
                <>  
                    <p>Aguarde...</p>
                    <img 
                        src={spinner} 
                        alt="Carregando..." 
                        className="animate-spin h-5 w-5 text-blue-500" 
                    />
                    <table className="border border-gray-300 rounded animate-pulse">
                        <thead>
                            <tr className="bg-gray-300">
                                <th className="py-2 px-8"></th>
                                <th className="py-2 px-8"></th>
                                <th className="py-2 px-8"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><div className="my-1 mx-1 py-0.5 rounded bg-gray-300"></div></td>
                                <td><div className="my-1 mx-1 py-0.5 rounded bg-gray-300"></div></td>
                                <td><div className="my-1 mx-1 py-0.5 rounded bg-gray-300"></div></td>
                            </tr>
                            <tr>
                                <td><div className="my-1 mx-1 py-0.5 rounded bg-gray-300"></div></td>
                                <td><div className="my-1 mx-1 py-0.5 rounded bg-gray-300"></div></td>
                                <td><div className="my-1 mx-1 py-0.5 rounded bg-gray-300"></div></td>
                            </tr>
                            <tr>
                                <td><div className="my-1 mx-1 py-0.5 rounded bg-gray-300"></div></td>
                                <td><div className="my-1 mx-1 py-0.5 rounded bg-gray-300"></div></td>
                                <td><div className="my-1 mx-1 py-0.5 rounded bg-gray-300"></div></td>
                            </tr>
                        </tbody>
                    </table>
                </>
            ) : (
            <table  className="border border-gray-300 rounded">
                <thead>
                    <tr className="bg-gray-300">
                        <th className="py-2 px-8">ID</th>
                        <th className="py-2 px-8">Tarefa</th>
                        <th className="py-2 px-8">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tarefas.map((item, index) => (
                        <tr key={ index }>
                            <td><div className="my-1 mx-1 py-0.5 rounded bg-gray-300">{ item.id }</div></td>
                            <td><div className="my-1 mx-1 py-0.5 rounded bg-gray-300">{ item.nome }</div></td>
                            <td><div className="my-1 mx-1 py-0.5 rounded bg-gray-300">{ item.status }</div></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            )}
        </>
    );
};

export default Home;