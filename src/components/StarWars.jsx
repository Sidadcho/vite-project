import { useEffect, useState } from "react"


export default function StarWars(props) {
    const [characters, setCharacters] = useState([]);
    console.log(characters);

    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then((response) => response.json())
            .then((data) => {
                setCharacters(data.results)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <h1>SW characters</h1>
            <ul>
                {characters.map(characters => <li key={characters.name}>{characters.name}</li>)}
            </ul>
        </div>
    )

}