function Tabela({titulos, dados, semestre}) {
    return (
    <article className="mb-8 border border-gray-300 rounded-lg overflow-hidden shadow-sm mx-4">
        
        <header className="bg-gray-100 p-3 border-b border-gray-300">
        <h3 className="font-bold text-gray-700">{semestre}</h3>
        </header>

        <table className="w-full border-collapse bg-white text-sm">
            <thead>
                <tr className="text-gray-600 border-b border-gray-300">
                    {titulos.map((item,index) =>
                        <th className="p-3 text-left font-semibold" key={index}>{item}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {dados.map((item, index) => (
                <tr className="border-b border-gray-200" key={item.id || index}>
                    {Object.entries(item)
                        .filter(([chave]) => chave !== "id")
                        .map(([_, valor], idx) => (
                            <td className="p-3 text-center border-x border-gray-200" key={idx}>
                                {valor}
                            </td>
                        ))
                    }
                </tr>
            ))}
            </tbody>
        </table>
    </article>
    );
}

export default Tabela;