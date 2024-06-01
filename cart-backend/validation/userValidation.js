
/*
reqBody : email,passord
method:post
*/

export const registerValid = (req, res, next) => {
    try {
        let reqBody = req.body
        let errors = {};
        console.log("registerValidregisterValid", reqBody)
        let emaiRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/;
        let passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*\W).{6,18}/g;

        console.log(reqBody.email || reqBody.email == "")

        if (!reqBody.email || reqBody.email == "") {
            errors.email = "Email field is required";
        } else if (!emaiRegex.test(reqBody.email)) {
            errors.email = "invalid email";
        }
        if (!reqBody.password || reqBody.password === "") {
            errors.password = "password field is required";
        } else if (!passwordRegex.test(reqBody.password)) {
            errors.password = "password should be 6 to 18 ,atleast one uppercase,atleast one lowercase,atleast one number, atleast one special character";
        }

        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ errors: errors });
        }
        return next();

    } catch (err) {
        return res.status(500).json({ message: "server error", errors: err });

    }
}


export const passwordValid = (req, res, next) => {
    try {
        let reqBody = req.body
        let errors = {};
        console.log("registerValidregisterValid", reqBody)
        let emaiRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/;

        if (!reqBody.email || reqBody.email == "") {
            errors.email = "Email field is required";
        } else if (!emaiRegex.test(reqBody.email)) {
            errors.email = "invalid email";
        }
        if (!reqBody.password || reqBody.password === "") {
            errors.password = "password field is required";
        }
        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ errors: errors });
        }
        return next();

    } catch (err) {
        return res.status(500).json({ message: "server error", errors: err });

    }
}