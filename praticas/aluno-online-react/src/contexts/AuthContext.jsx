import { createContext, useContext, useState } from "react";

//cria o contexto
const AuthContext = createContext();

//cria o provedor
function AuthProvider ({ children }) {
    const [logado, setLogado] = useState(false);
    const [usuario, setUsuario] = useState({});

    const login = (dados) => {
        if (dados.email === "geraldo.lucio@iesb.edu.br" && dados.senha === "123") {
            setUsuario ({
                nome: "Geraldo",
                email: dados.email
            });
            setLogado(true);
            return true;
        }
        return false
    }

    const logout = () => {
        setUsuario({});
        setLogado(false);
    }

    return (
        <AuthContext.Provider value={{ logado, usuario, login, logout }}> 
        {/*value = estado compartilhado */}
            { children }
        </AuthContext.Provider>
    )
};

function UseAuthContext() {
    return useContext(AuthContext);
}

export { UseAuthContext, AuthProvider }