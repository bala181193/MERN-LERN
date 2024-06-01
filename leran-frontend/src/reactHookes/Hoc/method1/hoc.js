import React from 'react'
import NotFound from './notFound'

const isAuth = false
function Hoc(Componet) {
    return function () {
        if (!isAuth) {
            return <NotFound />
        }
        return <Componet />
    }


}
export default Hoc
