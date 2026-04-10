import avatar from "../src/assets/avatar.svg"

function topbar(props) {
    return (
        <header className="flex justify-between">
            <h1>{props.titulo}</h1>
            <img src={avatar} alt="Imagem do Avatar" />
        </header>
    );
}

export default topbar;