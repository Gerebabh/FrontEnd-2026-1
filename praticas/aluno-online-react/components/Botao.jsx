function Botao({
    children,
    type = "button",
    variant = "primary",
    onClick,
    className = ""
}) {

    const estilos = {
        primary: "border border-gray-400 rounded-lg outline-none bg-gray-300 hover:bg-gray-600 transition-colors duration-200 hover:text-white",
        secondary: "bg-gray-300 text-gray-700 hover:bg-gray-400",
        danger: "bg-red-600 text-white hover:bg-red-700"
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-4 py-2 rounded-lg ${estilos[variant]} ${className}`}
        >
            {children}
        </button>
    );
}

export default Botao;