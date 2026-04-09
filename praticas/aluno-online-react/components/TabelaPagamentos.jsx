function TabelaPagamentos() {
    return (
    <article className="mb-8 border border-gray-300 rounded-lg overflow-hidden shadow-sm mx-4">
        
        <table className="w-full border-collapse bg-white text-sm">
            <thead>
                <tr className="text-gray-600 border-b border-gray-300">
                    <th className="p-3 text-center font-bold bg-gray-100 ">Vencimento</th>
                    <th className="p-3 text-center font-bold border-x border-gray-200 bg-gray-100 ">Valor R$</th>
                    <th className="p-3 text-center font-bold border-x border-gray-200 bg-gray-100 ">Situação</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b border-gray-200">
                    <td className="p-3 text-center text-gray-800">19-01-2026</td>
                    <td className="p-3 border-x border-gray-200">500,00</td>
                    <td className="p-3 border-x border-gray-200">Pago</td>
                </tr>
                <tr className="border-b border-gray-200">
                    <td className="p-3 text-center text-gray-800">19-02-2026</td>
                    <td className="p-3 border-x border-gray-200">500,00</td>
                    <td className="p-3 border-x border-gray-200">Em atraso</td>
                </tr>
                <tr className="border-b border-gray-200">
                    <td className="p-3 text-center text-gray-800">19-03-2026</td>
                    <td className="p-3 border-x border-gray-200">500,00</td>
                    <td className="p-3 border-x border-gray-200">A Pagar</td>
                </tr>
                <tr className="border-b border-gray-200">
                    <td className="p-3 text-center text-gray-800">19-04-2026</td>
                    <td className="p-3 border-x border-gray-200">500,00</td>
                    <td className="p-3 border-x border-gray-200">A Pagar</td>
                </tr>
                <tr className="border-b border-gray-200">
                    <td className="p-3 text-center text-gray-800">19-05-2026</td>
                    <td className="p-3 border-x border-gray-200">500,00</td>
                    <td className="p-3 border-x border-gray-200">A Pagar</td>
                </tr>
                <tr className="border-b border-gray-200">
                    <td className="p-3 text-center text-gray-800">19-06-2026</td>
                    <td className="p-3 border-x border-gray-200">500,00</td>
                    <td className="p-3 border-x border-gray-200">A Pagar</td>
                </tr>
                <tr>
                    <td className="p-3 text-center text-gray-800">19-07-2026</td>
                    <td className="p-3 border-x border-gray-200">500,00</td>
                    <td className="p-3 border-x border-gray-200">A Pagar</td>
                </tr>
            </tbody>
        </table>
    </article>
    );
}

export default TabelaPagamentos;