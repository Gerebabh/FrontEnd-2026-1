import { createContext, useState } from "react";
import { autenticar } from "../services/authService";

//cria o contexto
const AuthContext = createContext();

//cria o provedor
function AuthProvider ({ children }) {
    const token = localStorage.getItem("app:token");
    const [logado, setLogado] = useState(!!token);
    const [usuario, setUsuario] = useState({});

    const login = async (dados) => {
        const resposta = await autenticar(dados);
        if (resposta?.token) {
            setUsuario (resposta);
            localStorage.setItem("app:token", JSON.stringify(resposta));
            setLogado(true);
            return;
        }

        throw new Error("Credenciais Inválidas");
    }

    const logout = () => {
        setUsuario({});
        setLogado(false);

        localStorage.removeItem("app:token");
    };

    return (
        <AuthContext.Provider value={{ logado, usuario, login, logout }}> 
        {/*value = estado compartilhado */}
            { children }
        </AuthContext.Provider>
    )
};

export { AuthContext, AuthProvider }