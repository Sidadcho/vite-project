export default function MappedMovies(props) {

    let items = props.items.map((item) =><li key={`${item.title}-${item.description}`}> {item.title} - {item.description}</li>)

    return (
        <ul>
            {items}
        </ul>
    );
};



//This is before adding key, trqbva key za da identificira elementite
// export default function MappedMovies(props) {

//     let items = props.items.map((item) =><li>{item.title} - {item.description}</li>)

//     return (
//         <ul>
//             {items}
//         </ul>
//     );
// };