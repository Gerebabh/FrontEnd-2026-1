import { Link, NavLink } from "react-router";

function Menu() {
    const activeStyles =({ isActive }) => (isActive ? "text-blue-600 text-lg" : undefined);
    return ( 
        <nav className="px-4 py-2">
            <ul className="flex flex-col px-4 gap-5 font-semibold">
                <li className="list-disc cursor-pointer"><NavLink className={activeStyles} to="/">Dashboard</NavLink></li>
                <li className="list-disc cursor-pointer"><NavLink className={activeStyles} to="/notas">Notas</NavLink></li>
                <li className="list-disc cursor-pointer"><NavLink className={activeStyles} to="/faltas">Faltas</NavLink></li>
                <li className="list-disc cursor-pointer"><NavLink className={activeStyles} to="/boletos">Boletos</NavLink></li>
                <li className="list-disc cursor-pointer"><NavLink className={activeStyles} to="/requerimentos">Requerimentos</NavLink></li>
                <li className="list-disc cursor-pointer"><Link to="/login">Sair</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;