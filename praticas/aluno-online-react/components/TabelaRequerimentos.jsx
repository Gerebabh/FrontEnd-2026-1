function TabelaRequerimentos() {
    return (
    <article className="mb-8 border border-gray-300 rounded-lg overflow-hidden shadow-sm mx-4">
        

        <table className="w-full border-collapse bg-white text-sm">
            <thead>
                <tr className="text-gray-600 border-b border-gray-300">
                    <th className="p-3 text-center font-bold bg-gray-100 ">Tipo Requerimento</th>
                    <th className="p-3 text-center font-bold border-x border-gray-200 bg-gray-100 ">Data Solicitação</th>
                    <th className="p-3 text-center font-bold border-x border-gray-200 bg-gray-100 ">Situação</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b border-gray-200">
                    <td className="p-3 text-centerext-gray-800">Aprovar o Aluno com SS</td>
                    <td className="p-3 border-x border-gray-200">08/04/2026</td>
                    <td className="p-3 border-x border-gray-200">Deferido</td>
                </tr>
                <tr className="border-b border-gray-200">
                    <td className="p-3 text-centerext-gray-800">Revisão de Menção</td>
                    <td className="p-3 border-x border-gray-200">15/12/2025</td>
                    <td className="p-3 border-x border-gray-200">Indeferido</td>
                </tr>
                <tr className="border-b border-gray-200">
                    <td className="p-3 text-gray-800">Dispensa de Disciplina</td>
                    <td className="p-3 border-x border-gray-200">12/06/2025</td>
                    <td className="p-3 border-x border-gray-200">Indeferido</td>
                </tr>
                <tr className="border-b border-gray-200">
                    <td className="p-3 text-gray-800">Trancamento de Matrícula</td>
                    <td className="p-3 border-x border-gray-200">05/01/2024</td>
                    <td className="p-3 border-x border-gray-200">Deferido</td>
                </tr>
                <tr className="border-b border-gray-200">
                    <td className="p-3 text-gray-800">Mudança de Turno</td>
                    <td className="p-3 border-x border-gray-200">10/10/2023</td>
                    <td className="p-3 border-x border-gray-200">Deferido</td>
                </tr>
                <tr className="border-b border-gray-200">
                    <td className="p-3 text-gray-800">Renovação de Matrícula</td>
                    <td className="p-3 border-x border-gray-200">20/02/2023</td>
                    <td className="p-3 border-x border-gray-200">Deferido</td>
                </tr>
            </tbody>
        </table>
    </article>
    );
}

export default TabelaRequerimentos;