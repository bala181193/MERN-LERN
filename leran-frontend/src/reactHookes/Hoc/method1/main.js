import React from 'react'
import Dashboard from './dashboard'
import Profile from './profile'
import Hoc from './hoc'
function Main() {

    return (
        <>
            <Dashboard />
            <Profile />
        </>
    )
}

export default Hoc(Main)
