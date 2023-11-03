import { useState } from "react"

//hook state e massive i stateValue e stoinostta ot tozi masiv
//setState e funkciqta za promqna na state
// ppc ne se pishe taka kakto e doly zeleno, a se izpolzva distructuring
//v useState() se slaga default stoinost zashtoto inache purvonachalno e undefined

export default function Timer(props){

    // const hookResult = useState();
    // const stateValue = hookResult[0]
    // const setState = hookResult[1]
    // let time = 0

    const [time, setTime] = useState(0);

    //NOTE: dont use setTimeout, useEffect is more appropriate!
    setTimeout(() =>{
        setTime(time + 1);
    }, 1000);

    return(
        <div>
            <h3>Timer</h3>
            <p>{time}</p>
        </div>
    )
}



//PRAVILO:
//Vseki component se prerenderira ako nqkoi ot negovite hookove ili stateove se promeni