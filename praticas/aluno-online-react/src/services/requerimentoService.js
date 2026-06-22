const url = "http://localhost:3000/requerimentos";

function getToken() {
    const sessao = JSON.parse(
        localStorage.getItem("app:token")
    );

    return sessao?.token;
}

async function criar(requerimento) {
    try {
        const token = getToken();

        if (!token) {
            throw new Error("401");
        }

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(requerimento),
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });

        const dados = await response.json();
        return dados;

    } catch (error) {
        console.log("Deu ruim:", error.message);
        throw error;
    }
}

async function listar() {
    try {
        const token = getToken();

        if (!token) {
            throw new Error("401");
        }

        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const dados = await response.json();
        return dados;

    } catch (error) {
        console.log("Deu ruim:", error.message);
        throw error;
    }
}

export { criar, listar };