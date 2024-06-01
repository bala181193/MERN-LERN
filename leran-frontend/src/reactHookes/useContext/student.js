import React, { useContext, useEffect } from 'react'
import { StudentContext } from './headmaster'

function Student() {
    const studentName = useContext(StudentContext)

    return (
        <h1>Student Name:{studentName}</h1>
    )
}

export default Student
