const url = "http://localhost:3000/requerimentos";

async function criar (requerimento) {
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(requerimento),
            headers: {
                "content-type":"application/json"
            }
        });
        const dados = await response.json();
        return dados;
    } catch (error)  {
        console.log("Deu ruim:", error.message)
    }
};

async function obter (requerimento) {
    try {
        const response = await fetch(`${url}/${requerimento.id}`);
        const dados = await response.json();
        return dados;
    } catch (error)  {
        console.log("Deu ruim:", error.message)
    }
};

async function listar () {
    try {
        const response = await fetch(url);
        const dados = await response.json();
        return dados;
    } catch (error)  {
        console.log("Deu ruim:", error.message)
    }
};

async function modificar (requerimento) {
    try {
        const response = await fetch(`${url}/${requerimento.id}`, {
            method: "PUT",
            body: JSON.stringify(requerimento),
            headers: {
                "content-type":"aplication/json"
            }
        });
        const dados = await response.json();
        return dados;
    } catch (error)  {
        console.log("Deu ruim:", error.message)
    }
};

async function remover (requerimento) {
    try {
        const response = await fetch(`${url}/${requerimento.id}`, {
            method: "DELETE"
        });
        const dados = await response.json();
        return dados;
    } catch (error)  {
        console.log("Deu ruim:", error.message)
    }
};

export { criar, obter, listar, modificar, remover };
