import React from 'react'
import Hoc from './hoc'

function Person2({ amount, handleIncrease }) {
    return (
        <>
            <h1>bala amount - {amount}</h1>
            <button onClick={handleIncrease}>increase amount</button>
        </>
    )
}

export default Hoc(Person2)
