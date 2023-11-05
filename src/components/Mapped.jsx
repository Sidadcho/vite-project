export default function MappedMovies(props) {

    let items = props.items.map((item) =><li>{item.title} - {item.description}</li>)

    return (
        <ul>
            {items}
        </ul>
    );
};