import avatar from "../src/assets/avatar.svg"

function topbar() {
    return (
        <header>
            <h1>Ola Aluno</h1>
            <img src={avatar} alt="Imagem do Avatar" />
        </header>
    );
}

export default topbar;