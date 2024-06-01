import React, { useState, useReducer } from 'react'

const transActionReducer = (state, action) => {
    switch (action.type) {
        case "Withdraw":
            return state - action.payload
        case "Deposit":
            return state + action.payload
        default: return state
    }
}
function UseReducerHook() {
    const [userObj, setUserObj] = useState({ name: 'balamurugan', age: 22 });
    const [amount, dispatch] = useReducer(transActionReducer, 1000)
    const change = (e) => {
        e.preventDefault();
        setUserObj((pre) => {
            return {
                ...pre, ...{ name: "murugan", age: 33 }
            }
        })
    }
    return (
        <>
            <h1>{userObj?.name}</h1>
            <h1>{userObj?.age}</h1>
            <button onClick={change}>onClick</button>
            <h1>{amount}</h1>
            <button onClick={() => dispatch({ type: "Withdraw", payload: 500 })}>Withdraw</button>
            <button onClick={() => dispatch({ type: "Deposit", payload: 500 })}>Deposit</button>


        </>
    )
}

export default UseReducerHook
