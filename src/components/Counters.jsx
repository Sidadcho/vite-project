import { useState } from "react"

export default function Counter(props){

    const [count, setCount] = useState(0)

    return(
        <div>
            <h3>Counter</h3>
            <button onClick={ () => setCount(count + 1)}>{count}</button>
        </div>
    )
}