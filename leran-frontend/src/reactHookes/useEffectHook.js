import { useState, useEffect } from "react"

function UseEffectHook() {
    const [counter1, setcounter1] = useState(10)
    const [counter2, setcounter2] = useState(100)

    useEffect(() => {
        console.log("counter1 is eneter")
    }, [counter1])
    useEffect(() => {
        console.log("counter2 is eneter")
    }, [counter2])
    return (
        <>
            <h4>{counter1}</h4>
            <h4>{counter2}</h4>
            <button onClick={() => setcounter1(counter1 + 1)}>onClick</button>
            <button onClick={() => setcounter2(counter2 + 1)}>onClick</button>
        </>
    )
}

export default UseEffectHook
