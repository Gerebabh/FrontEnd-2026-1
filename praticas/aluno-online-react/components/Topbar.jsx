import avatar from "../src/assets/avatar.svg"

function topbar() {
    return (
        <header className="flex justify-between items-center mb-4">
            <h1 className="text-4xl font-bold">Ola Aluno</h1>
            <img src={avatar} alt="Imagem do Avatar" />
        </header>
    );
}

export default topbar;