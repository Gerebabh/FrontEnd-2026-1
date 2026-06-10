function BotaoNavegacao ({ children, onClick }) {
    return <button 
        type="button"
        onClick={onClick} 
        className="w-64 h-8 ml-4 mb-4 border border-gray-300 rounded-lg outline-none bg-gray-300 hover:bg-gray-500 transition-colors duration-200 hover:text-white">{children}</button>;
}

export default BotaoNavegacao