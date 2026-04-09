function Menu() {
    return (
        <nav className="px-4 py-2">
            <ul className="flex flex-col px-4 gap-5 font-semibold">
                <li className="list-disc cursor-pointer">Dashboard</li>
                <li className="list-disc cursor-pointer">Notas</li>
                <li className="list-disc cursor-pointer">Faltas</li>
                <li className="list-disc cursor-pointer">Boletos</li>
                <li className="list-disc cursor-pointer">Requerimentos</li>
                <li className="list-disc cursor-pointer">Sair</li>
            </ul>
        </nav>
    );
}

export default Menu;