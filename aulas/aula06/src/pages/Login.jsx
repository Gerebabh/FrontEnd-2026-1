import { useForm } from "react-hook-form";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
    const { login } = useAuthContext();
    const [ error, setErro ] = useState();
    const { 
        register,
        handleSubmit,
        reset
    } = useForm();

    const navigate = useNavigate();

    const entrar = async (dados) => {
        try {
            await login(dados);
            reset(); //limpa formulario
            setErro(""); // limpa msg de erro
            navigate("/produtos") // navega para pagina ao logar
        } catch (error) {
            setErro(error.message);
        }
    }


    return <>
        <h1>Login</h1>
        <p>{error}</p>
        <form onSubmit={handleSubmit(entrar)}>
            <input
                type="email"
                placeholder="Email"
                {...register("email")}
            />
            
            <input
                type="password"
                placeholder="Senha"
                {...register("senha")}
            />

            <button type="submit">Entrar</button>

        </form>
    </>
}

export default Login;