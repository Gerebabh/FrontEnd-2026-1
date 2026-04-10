function card(props) {
    return (
        <article>
            <h3>{props.titulo}</h3>
                <ul>
                    {props.items.map((item, index) => (
                        <li className="m-4" key={index}>{item}</li>
                    ))}
                </ul>
        </article>
    )
}

export default card;