import React, { useState, useCallback } from 'react'
import ButtonComponent from './useCallback/buttonComponent'
import Heading from './useCallback/headerComponent'
import InfoComponent from './useCallback/infoComponent'
import Input from './useCallback/input'
function UseCallbackHook() {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(100)
    const [firstName, setfirstName] = useState("murugan")


    const increment1 = useCallback(() => {
        setCounter1(counter1 + 1)
    }, [counter1])
    // const increment1 = () => {
    //     setCounter1(counter1 + 1)
    // }
    const increment2 = useCallback(() => {
        setCounter2(counter2 + 1)
    }, [counter2])
    // const increment2 = () => {
    //     setCounter2(counter2 + 1)
    // }
    // const handleChange = (e) => {
    //     setfirstName(e.target.value)
    // }
    const handleChange = useCallback((e) => {
        setfirstName(e.target.value)
    }, [firstName])
    return (
        <>

            <Heading />
            <Input firstName={firstName} handleChange={handleChange} />
            <InfoComponent title="Counter1 :" value={counter1} />
            <ButtonComponent title="Increment 1" eventHandler={increment1} />
            <InfoComponent title="Counter2 :" value={counter2} />
            <ButtonComponent title="Increment 2" eventHandler={increment2} />
        </>
    )
}

export default UseCallbackHook
