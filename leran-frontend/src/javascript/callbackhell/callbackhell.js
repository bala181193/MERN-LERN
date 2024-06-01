function serviceEntry(callback) {
    setTimeout(function () {
        callback(null, `Entry registered`)
    }, 1000);
}

function engineService(callback) {
    setTimeout(function () {
        callback(null, `Engine Service is done`)
    }, 1000);
}

function wheelAlignment(callback) {
    setTimeout(function () {
        callback(null, `Alignment is done`)
    }, 1000);
}

function waterService(callback) {
    setTimeout(function () {
        callback(null, `Water wash is done`)
    }, 1000);
}


function afterServiceEntry(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        engineService(afterEngineService);
    }
}

function afterEngineService(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        wheelAlignment(afterWheelAlignment);
    }
}

function afterWheelAlignment(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        waterService(afterWaterService);
    }
}

function afterWaterService(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
}


serviceEntry(function (error, result) {
    if (error) {
        console.log(error)
    } else {
        console.log(result)
        engineService(function (error, result) {
            if (error) {
                console.log(error)
            } else {
                console.log(result)
                wheelAlignment(function (error, result) {
                    if (error) {
                        console.log(error)
                    } else {
                        console.log(result)
                        waterService(function (error, result) {
                            if (error) {
                                console.log(error)
                            } else {
                                console.log(result)
                            }
                        })
                    }


                })
            }
        })
    }
})

const CalbackHell = () => {
    return (
        <>CalbackHell</>
    )
}

export default CalbackHell