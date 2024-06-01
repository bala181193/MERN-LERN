import React from 'react'

const ButtonForwardRef = (props, ref) => {

    return (
        <button ref={ref}>{"handleClick"}</button>

    )
}
export default React.forwardRef(ButtonForwardRef)
