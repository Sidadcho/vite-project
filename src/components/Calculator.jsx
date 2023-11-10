import { useState, useRef } from "react"


export default function Calculator(props) {

    const inputRef = useRef(null);

    const handleClick = event => {
        event.preventDefault();
      };

    return (
        <div>
            <h3>Calculator</h3>
            <input name="result" ref={inputRef} type="number" />
            <input name="result" ref={inputRef} type="number" />
            {/* <p>{result}</p> */}
            <button onClick={handleClick} >+</button>
            <button >-</button>

        </div>
    )
}