import React, { useState, useEffect, useMemo } from 'react'

const simpleclaculator1 = (num) => {
    console.log("simpleclaculator", num)
    for (let i = 0; i < 10; i++) {
        num += i;
        console.log("...aaaaaaaaaaaa", num)
    }
}

function UseMemoHook() {
    const [number, setNumber] = useState(0)
    const [name, setName] = useState("balamurugan")

    const simpleclaculator = (num) => {
        console.log("simpleclaculator", num)
        for (let i = 0; i < 10; i++) {
            num += i;
        }
        return num;

    }
    const claculator = useMemo(() => simpleclaculator(number), [number])

    const handleClick = () => {
        setNumber(pre => pre + 1)
    }
    const handleChange = (e) => {
        setName(e.target.value)
    }

    return (
        <>
            <h1>{number}</h1>
            <input
                name='firstName'
                value={name}
                onChange={handleChange}
            />
            <button onClick={handleClick}>Click</button>
        </>
    )
}

export default UseMemoHook
