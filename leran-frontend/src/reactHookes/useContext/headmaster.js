import React, { useState, createContext } from 'react'
import Teacher from './teacher';

export const StudentContext = React.createContext(null)

function Headmaster() {
    const [studentName, setStudentName] = useState('balamurugan')
    const handleChange = (e) => {
        e.preventDefault();
        setStudentName('murugan')
    }
    return (
        <>
            <StudentContext.Provider value={studentName}>
                <h1>Headmaster</h1>
                <button onClick={handleChange}>click</button>
                <Teacher />8
            </StudentContext.Provider>
        </>
    )
}

export default Headmaster
