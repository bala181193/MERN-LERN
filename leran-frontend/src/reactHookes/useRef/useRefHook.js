import React, { useState, useRef, useEffect } from 'react'
import ForwardRef from './forwardRef'
function UseRefHook() {
    const [counter1, setcounter1] = useState(0)
    const currentRef = useRef(null)
    const buttonRef = useRef(null)

    const handleClick = () => {
        setcounter1(counter1 + 1)
    }
    const handleRef = () => {
        currentRef.current++
    }

    useEffect(() => {
        buttonRef.current.onclick = handleClick
    }, [counter1])

    return (
        <>
            <div style={{ backgroundColor: '#FFFFE0' }}>
                <h1>counter1:{counter1}</h1>
                <h1>useRef:{currentRef.current}</h1>
                {/* <button onClick={() => handleClick()}>{"handleClick"}</button> */}
                <ForwardRef ref={buttonRef} />
                <button onClick={() => handleRef()}>{"handleRef"}</button>
            </div>
        </>
    )
}

export default UseRefHook
