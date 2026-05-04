function InputEmail ({erro, mudaValor}) {
    return (
        <fieldset className="flex flex-col gap-1 w-full border-none p-0 m-0">
            <label htmlFor="matricula">E-mail</label>
            <input 
                type="email" 
                id="email" 
                name="email"
                onChange={mudaValor}
                placeholder="exemplo@email.com"
                className="w-full border border-gray-400 rounded-lg p-2 outline-none"
            />
            <p>{erro && <span className="text-xs text-red-500 mt-1">{erro}</span>}</p>
        </fieldset>
    );
}    

export default InputEmail