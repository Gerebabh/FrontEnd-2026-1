function BotaoSubmit ({ children }) {
    return <button 
        type="submit" 
        className="w-full border border-gray-400 rounded-lg p-2 outline-none bg-gray-300 hover:bg-gray-600 transition-colors duration-200 hover:text-white">{children}</button>;
}

export default BotaoSubmit