import React, { useState } from 'react'

function Hoc(OriginalComponent) {
    return function NewComponent() {
        const [amount, setamount] = useState(10);
        const handleIncrease = () => {
            setamount(amount * 2)
        }
        return <OriginalComponent handleIncrease={handleIncrease} amount={amount} />
    }

}

export default Hoc
