import { useState } from 'react';
import InputEmail from '../components/InputEmail';
import InputSenha from '../components/InputSenha';
import BotaoSubmit from '../components/BotaoSubmit';

function FormLogin () {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [emailErro, setEmailErro] = useState ();
    const [senhaErro, setSenhaErro] = useState ();

    const trataSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setEmailErro("Email é Obrigatório")
        };

        if (!senha) {
            setSenhaErro("Senha é Obrigatório")
        };
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