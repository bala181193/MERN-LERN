import React, { memo } from 'react'

const Heading = () => {

    console.log('Heading rendering')
    return (
        <h1 style={{ backgroundColor: "#FFB6C1" }}>Counters Example</h1>
    )
}

export default memo(Heading)