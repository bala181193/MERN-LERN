

/*
reqBody : productName,price,description
method:post
api:/authApi/productAdd
*/


export const productAddValid = (req, res, next) => {
    try {
        let reqBody = req.body
        let errors = {};

        if (!reqBody.productName || reqBody.productName === "") {
            errors.productName = "productname field is required";
        }
        if (!reqBody.price) {
            errors.price = "price field is required";
        } else if (isNaN(reqBody.price) || reqBody.price < 0) {
            errors.price = "Invalid Price";
        }

        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ errors: errors });
        }
        return next();

    } catch (err) {
        return res.status(500).json({ message: "server error", errors: err });

    }
}