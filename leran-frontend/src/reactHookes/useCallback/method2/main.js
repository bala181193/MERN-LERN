import React, { useCallback, useState } from 'react'
import Person2 from './person2'
import Person1 from './person1'
import CounterInfo from './counterInfo'
import GetItem from './getItem'
function Main() {
    // const [counter1, setcounter1] = useState(10)
    // const [counter2, setcounter2] = useState(100)
    const [counter3, setcounter3] = useState(50)
    const [counter4, setcounter4] = useState(0)

    const [counter5, setcounter5] = useState(0)



    // const fetchApi = () => {
    //     console.log("fethapiiiiii")
    //     // setcounter5(counter5 + 1)
    // }
    const fetchApi = useCallback(() => {
        console.log("fethapiiiiii")
        // setcounter5(counter5 + 1)
    }, [counter5])
    // const getItem = () => {
    //     return [counter4 + 1, counter4 + 2, +counter4 + 3]
    // }
    const getItem = useCallback(() => {
        return [counter4 + 1, counter4 + 2, +counter4 + 3]
    }, [counter4])

    // const handleCounter1 = useCallback(() => {
    //     setcounter1(counter1 + 1)
    // }, [])

    // const handleCounter1 = () => {
    //     setcounter1(counter1 + 1)
    // }
    // const handleCounter2 = useCallback(() => {
    //     setcounter2(counter2 + 1)
    // }, [counter2])

    // const handleCounter2 = () => {
    //     setcounter2(counter1 + 1)
    // }
    return (
        <>
            <h4>{counter3}</h4>
            <button onClick={() => setcounter3(counter3 + 1)}>onClick</button>

            <button onClick={() => setcounter5(counter5 + 1)}>onClick</button>
            <input type='number' value={counter4} onChange={(e) => setcounter4(parseInt(e.target.value))} />
            <GetItem getItem={getItem} fetchApi={fetchApi}
            //      counter5={counter5}
            />
            {/* <CounterInfo counter1={counter1} counter2={counter2} />
            <Person1 counter1={counter2} handleCounter1={handleCounter1} />
            <Person2 counter2={counter2} handleCounter2={handleCounter2} />  */}
        </>
    )
}

export default Main
