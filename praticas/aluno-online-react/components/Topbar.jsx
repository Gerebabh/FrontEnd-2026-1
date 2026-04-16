import avatar from "../src/assets/avatar.svg"

function Topbar(props) {
    return (
        <header className="flex justify-between items-center px-4 py-2">
            <h1 className="text-4xl font-bold">{props.titulo}</h1>
            <img src={avatar} alt="Imagem do Avatar" className="w-12 h-auto" />
        </header>
        
        
    );
}

export default Topbar;