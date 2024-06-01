import React, { memo, useEffect, useState } from 'react'

function GetItem({ getItem, counter4, fetchApi, counter5 }) {
    const [items, setitems] = useState([])
    const add = () => {
        console.log("adddd", 10 + 1)
        return 10 + 1
    }
    // add()

    useEffect(() => {
        console.log("eneterrr gett itemsssss")
        setitems(getItem());
    }, [getItem])
    useEffect(() => {
        fetchApi()
    }, [fetchApi])
    const handleClick = () => {
        console.log("pppp")
    }
    return (
        <>
            {
                items.map((counts, i) => {
                    return (
                        <p key={i}>{counts}</p>
                    )
                })
            }
        </>
    )
}

// export default memo(GetItem)
export default GetItem

