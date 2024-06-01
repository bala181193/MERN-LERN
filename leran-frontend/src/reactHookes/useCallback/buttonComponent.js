import React, { memo, useState } from "react";

const ButtonComponent = ({ title, eventHandler }) => {
    // const [firstName, setfirstName] = useState("murugan")
    console.log(`ButtonComponent rendering for ${title}`)

    return (
        <>
            {/* <h1>  {name}</h1>
            <input name="firname" onChange={(e) => setname(e.target.value)} /> */}
            <button onClick={eventHandler}>{title}</button>
        </>
    )

}

export default memo(ButtonComponent);