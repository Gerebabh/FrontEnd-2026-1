function TabelaNotas() {
    return (
    <article className="mb-8 border border-gray-300 rounded-lg overflow-hidden shadow-sm mx-4">
        
        <header className="bg-gray-100 p-3 border-b border-gray-300">
        <h3 className="font-bold text-gray-700">2026.1</h3>
        </header>

        <table className="w-full border-collapse bg-white text-sm">
        <thead>
            <tr className="text-gray-600 border-b border-gray-300">
                <th className="p-3 text-left font-semibold">Disciplina</th>
                <th className="p-3 text-center font-semibold border-x border-gray-200">A1</th>
                <th className="p-3 text-center font-semibold border-x border-gray-200">A2</th>
                <th className="p-3 text-center font-semibold border-x border-gray-200">A3</th>
                <th className="p-3 text-center font-semibold">Menção</th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b border-gray-200">
                <td className="p-3 text-gray-800">Construção de Frontend</td>
                <td className="p-3 text-center border-x border-gray-200">--</td>
                <td className="p-3 text-center border-x border-gray-200">--</td>
                <td className="p-3 text-center border-x border-gray-200">--</td>
                <td className="p-3 text-center font-bold text-gray-900">SR</td>
            </tr>
            <tr className="border-b border-gray-200">
                <td className="p-3 text-gray-800">Manutenção de Software</td>
                <td className="p-3 text-center border-x border-gray-200">--</td>
                <td className="p-3 text-center border-x border-gray-200">--</td>
                <td className="p-3 text-center border-x border-gray-200">--</td>
                <td className="p-3 text-center font-bold text-gray-900">SR</td>
            </tr>
            <tr>
                <td className="p-3 text-gray-800">BI & Data Warehousing</td>
                <td className="p-3 text-center border-x border-gray-200">--</td>
                <td className="p-3 text-center border-x border-gray-200">--</td>
                <td className="p-3 text-center border-x border-gray-200">--</td>
                <td className="p-3 text-center font-bold text-gray-900">SR</td>
            </tr>
        </tbody>
        </table>
    </article>
    );
}

export default TabelaNotas;