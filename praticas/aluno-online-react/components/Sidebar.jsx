import logo from "../src/assets/learn.svg"
import Menu from "./Menu"

function Sidebar() {
    return (
        <aside className="hidden lg:block bg-gray-200 w-64">
            <header className="flex items-center justify-start px-4 py-2 gap-5">
                <img src={logo} alt="logotipo" className="w-12 h-auto" />
                <h1 className="text-2xl font-semibold">Aluno Online</h1>
            </header>
            <Menu />
        </aside>
    )
}

export default Sidebar;