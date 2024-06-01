import React, { useEffect } from 'react'

function CounterInfo({ counter1, counter2 }) {
    console.log("counter1 enter both", counter1, counter2)

    useEffect(() => {
        console.log("counter1 enter", counter1)
    }, [counter1])
    useEffect(() => {
        console.log("counter2 enter", counter2)
    }, [counter2])
    return (
        <>
            <h1>counter1:{counter1}</h1>
            <h1>counter2:{counter2}</h1>
        </>
    )
}

export default CounterInfo
