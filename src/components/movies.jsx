/* eslint-disable react/prop-types */
export default function Movies(props){
    return(
        <ul>
        <h2>{props.data.title}</h2>
        <p>{props.data.description}</p>
        </ul>
    );
}