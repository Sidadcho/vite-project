import { useState } from "react"

export default function Counter(props) {

    const [count, setCount] = useState(0)

    const negativeCount = () => {
        setCount(count - 1)
    }


    //conditional rendering 1- using return

    if (count < 0) {
        return (
            <div>
                <h3>
                    Count can't be negative!
                </h3>
                <button onClick={() => setCount(count + 2)}>+</button>
            </div>
        )
    }

    //...


    //conditional rendering 1- using if

    // let info = null;
    // if(count < 0){
    //     info = <p>invalid count</p>
    // }

    //...


    //conditional rendering 1- using ternary operator



    //conditional rendering 1- using boolean operator



    return (
        <div>
            <h3>Counter</h3>

            {/* {info} */}

            {/* ternary operator */}
            {/* {count < 0
                ? <p> invalid count</p>
                : null} */}
            {/* ... */}

            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={negativeCount}>-</button>

        </div>
    )
}