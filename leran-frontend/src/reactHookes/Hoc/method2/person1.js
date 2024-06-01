import React from 'react'
import Hoc from './hoc'
function Person1({ amount, handleIncrease }) {
    return (
        <>
            <>
                <h1>Murugan amount - {amount}</h1>
                <button onClick={handleIncrease}>increase amount</button>

            </>
        </>
    )
}

export default Hoc(Person1)
