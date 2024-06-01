import React, { memo, useEffect } from 'react'

function Counter1({ handleCounter1, counter1 }) {
    console.log("handleCounterbutton1 eneterrr cmp ")
    useEffect(() => {
        console.log("counter1 enter useeffect", counter1)
    }, [counter1])
    useEffect(() => {
        console.log("handleCounter1 handleCounter1 useeffect")
    }, [])
    return (
        <>
            <button onClick={handleCounter1}>Counter1 Button</button>
        </>
    )
}

// export default memo(Counter1)
export default Counter1

