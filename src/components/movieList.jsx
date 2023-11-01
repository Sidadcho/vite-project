/* eslint-disable react/prop-types */
import Movies from "./movies";

export default function MovieList(props) {
    return (
        <div className="movie-list">
            <h1>{props.headingText}</h1>
            <ul>
                <Movies data={props.movies[0]}/>
                <Movies data={props.movies[1]}/>
                <Movies data={props.movies[2]}/>

            </ul>
        </div>
    )
}