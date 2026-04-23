function InputSenha ({erro, mudaValor}) {
    return (
        <fieldset className="flex flex-col gap-1 w-full border-none p-0 m-0">
            <label htmlFor="senha">Senha</label>
            <input 
                type="password" 
                id="senha" 
                name="senha"
                onChange={mudaValor}
                placeholder="Digite sua senha"
                className="border-2 border-gray-200 rouded-md"
            />
                <p>{erro && <span className="text-xs text-red-500 mt-1">{erro}</span>}</p>
        </fieldset>
    );
}    

export default InputSenha