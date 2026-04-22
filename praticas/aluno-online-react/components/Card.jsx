function Card(props) {
    return (
    <section className="flex flex-col flex-1 px-4">
        <article className="border rounded-md mt-4 mb-4">
            <h3 className="pl-2 bg-gray-200 rounded-md">{props.titulo}</h3>
                <ul className="grid grid-cols-1 md:grid-row gap-1">
                    {props.items.map((item, index) => (
                        <li className="m-2" key={index}>{item}</li>
                    ))}
                </ul>
        </article>
    </section>
    )
}

export default Card;