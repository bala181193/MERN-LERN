import React, { memo } from 'react'

function Person2({ handleCounter2 }) {
    console.log("handleCounterbutton2 eneterrr cmp")
    return (
        <button onClick={handleCounter2}>counter button2</button>
    )
}

export default memo(Person2)
// export default Person2

