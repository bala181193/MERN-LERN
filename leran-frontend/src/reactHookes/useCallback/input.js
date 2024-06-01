import { memo } from "react"

function InputComp({ firstName, handleChange }) {
    console.log("inputcahe eneter",)
    return (
        <>
            <h1>{firstName} </h1>
            <input name={firstName} onChange={handleChange} />
        </>
    )
}
export default memo(InputComp)