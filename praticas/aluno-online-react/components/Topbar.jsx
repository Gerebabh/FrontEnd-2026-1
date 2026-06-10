import avatar from "../src/assets/avatar.svg"
import { useAuthContext } from "../src/hooks/useAuthcontext";


function Topbar() {
    const { usuario, logado } = useAuthContext();

    return (
        <header className="flex justify-between items-center px-4 py-2">
            {logado && (
                <h1 className="text-4xl font-bold">Olá {usuario.nome},</h1>
            )}
            <img src={avatar} alt="Imagem do Avatar" className="w-12 h-auto" />
        </header>
        
        
    );
}

export default Topbar;