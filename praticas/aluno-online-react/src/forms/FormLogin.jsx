import { useState } from 'react';
import { useNavigate } from "react-router";
import { useAuthContext } from '../hooks/useAuthContext';
import InputEmail from '../../components/InputEmail';
import InputSenha from '../../components/InputSenha';
import BotaoSubmit from '../../components/BotaoSubmit';

function FormLogin () {
    const navigate = useNavigate();
    const { login } = useAuthContext();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [emailErro, setEmailErro] = useState ("");
    const [senhaErro, setSenhaErro] = useState ("");

    const trataSubmit = async (e) => {
        e.preventDefault();

        let temErro = false;
        
        if (!email) {
            setEmailErro("Email é Obrigatório");
            temErro = true;
        };

        if (!senha) {
            setSenhaErro("Senha é Obrigatório")
            temErro = true;
        };

        if (!temErro) {
            try {
                await login({ email, senha });
                navigate("/");
            } catch (error) {
                setEmailErro(error.message);
            }
        }
    };

    const mudaEmail = (e) => {
        setEmail(e.target.value);
        setEmailErro("");
    };
    const mudaSenha = (e) => {
        setSenha(e.target.value);
        setSenhaErro("");
    };
    

    return (
        <form onSubmit={trataSubmit} className="flex flex-col gap-2">
            <InputEmail
                erro={emailErro} 
                mudaValor={mudaEmail}
            />
            <InputSenha
                erro={senhaErro}
                mudaValor={mudaSenha}
            />
            <BotaoSubmit>Entrar</BotaoSubmit>
        </form>
    );
}

export default FormLogin;