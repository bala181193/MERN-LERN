import mongoose from 'mongoose';
import { Product, Cart } from '../models'

const ObjectId = mongoose.Types.ObjectId;

/*
reqBody : productName,price,description
method:post
api:/productApi/productAdd
*/

export const productAdd = async (req, res) => {
    try {
        let reqBody = req.body;

        const newDoc = new Product({
            productName: reqBody.productName,
            price: parseFloat(reqBody.price),
            description: reqBody.description
        })
        await newDoc.save()
        return res.status(200).json({ message: "Product Added successfully" })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "server error", error: err })

    }
}
/*
reqQuery : search,toPrice,fromPrice,abovePrice,lessPrice
method:get
api:/productApi/productList
*/
export const productList = async (req, res) => {
    try {
        let reqQuery = req.query;
        console.log(reqQuery)
        let productData = [];
        if (reqQuery.search && reqQuery.search != "") {
            productData = await Product.find({ productName: new RegExp(reqQuery.search, 'i') })
        }
        else if (reqQuery.fromPrice && reqQuery.toPrice) {
            productData = await Product.find({
                $and: [
                    { price: { $gte: parseFloat(reqQuery.fromPrice) } },
                    { price: { $lte: parseFloat(reqQuery.toPrice) } }
                ]
            })

        } else if (reqQuery.fromPrice && reqQuery.toPrice) {
            productData = await Product.find({
                $and: [
                    { price: { $gte: parseFloat(reqQuery.fromPrice) } },
                    { price: { $lte: parseFloat(reqQuery.toPrice) } }
                ]
            })
        } else if (reqQuery.abovePrice) {
            productData = await Product.find({ price: { $gte: parseFloat(reqQuery.abovePrice) } })
        }
        else if (reqQuery.lessPrice) {
            productData = await Product.find({ price: { $lte: parseFloat(reqQuery.lessPrice) } })
        }
        console.log(productData)
        return res.status(200).json({ productList: productData })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "server error", error: err })

    }
}
const pushProductInCart = async (id, req, productData) => {
    try {
        let updateCart = await Cart.findOneAndUpdate(
            { _id: id, userId: new ObjectId(req.user.id) },
            {
                "$push": {
                    "items": {
                        productName: productData.productName,
                        price: productData.price,
                        total: parseFloat(productData.price) * parseFloat(req.body.qty),
                        qty: req.body.qty,
                        productId: productData._id
                    }
                }
            },
            { new: true }
        )
        return {
            updateStatus: true
        }
    } catch (err) {
        console.log(err)
        return {
            updateStatus: false,
            err: err
        }
    }
}

/*
reqBody : userId,productId,qty
method:post
api:/productApi/addCart
*/
export const addCart = async (req, res) => {
    try {
        let reqBody = req.body;
        console.log(reqBody)
        const productData = await Product.findOne({ _id: new ObjectId(reqBody.productId) })
        console.log(productData)
        if (!productData) {
            return res.status(400).json({ message: "Invalid Product" })
        }
        let cartData = await Cart.findOne({ userId: new ObjectId(req.user.id) })

        if (cartData) {
            console.log("eneter ifffff product count")
            if (cartData && cartData.items && cartData.items.length > 0) {
                let checkProduct = cartData.items.find((data, i) => data.productId.toString() === reqBody.productId.toString())
                console.log("*********checkProduct*******", checkProduct)
                if (checkProduct) {
                    return res.status(400).json({ message: "Product is exsit in cart" })
                } else {
                    let { updateStatus, err } = await pushProductInCart(cartData._id, req, productData)
                    if (err) {
                        return res.status(500).json({ message: "server error", error: err })
                    }
                    return res.status(200).json({ message: "Product Cart successfully" })
                }
            } else {
                let { updateStatus, err } = await pushProductInCart(cartData._id, req, productData)
                if (err) {
                    return res.status(500).json({ message: "server error", error: err })
                }
                return res.status(200).json({ message: "Product Cart successfully" })
            }
        } else {
            console.log(" elese  product count")
            let newDoc = new Cart({})
            newDoc.userId = new ObjectId(req.user.id);
            newDoc.items.push({
                productName: productData.productName,
                price: productData.price,
                total: parseFloat(productData.price) * parseFloat(reqBody.qty),
                qty: reqBody.qty,
                productId: productData._id
            })
            await newDoc.save()
            return res.status(200).json({ message: "Product Cart successfully" })
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "server error", error: err })


    }
}

/*
reqBody : productId,qty,updateType :INCREASE|DECREASE
method:post
api:/productApi/updateQty/:id (cartId)
*/
export const updateQty = async (req, res) => {
    try {
        let reqBody = req.body
        let reqParams = req.params
        console.log(reqBody, reqParams)
        let cartData = await Cart.findOne(
            {
                _id: new ObjectId(reqParams.id),
                userId: new ObjectId(req.user.id),
                "items.productId": new ObjectId(reqBody.productId)
            }
        )
        if (!cartData) {
            return res.status(400).json({ message: "Product not in cart" })
        }
        if (cartData && cartData.items && cartData.items.length > 0) {
            let findProduct = cartData.items.find((data, i) => data.productId.toString() === reqBody.productId.toString())
            let qty;
            if (reqBody.updateType === "INCREASE") {
                qty = parseFloat(findProduct.qty) + parseFloat(reqBody.qty)
            }
            if (reqBody.updateType === "DECREASE") {
                qty = parseFloat(findProduct.qty) - parseFloat(reqBody.qty)
            }
            qty = qty < 0 ? 1 : qty
            let total = qty * parseFloat(findProduct.price)
            let updateData = await Cart.findOneAndUpdate(
                {
                    userId: new ObjectId(req.user.id),
                    "items.productId": new ObjectId(reqBody.productId)
                },
                {
                    $set: {
                        "items.$.qty": qty,
                        "items.$.total": total
                    }
                },

                { new: true }
            )
            console.log(updateData)
            return res.status(200).json({ message: "cart updated successfully" })
        } else {
            return res.status(400).json({ message: " prodcut not in cart" })

        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "server error", error: err })

    }
}
/*
reqBody : productId
method:post
api:/productApi/removeProduct/:id (cartId)
*/
export const removeProduct = async (req, res) => {
    try {
        let reqBody = req.body
        let reqParams = req.params
        console.log(reqBody, reqParams, req.user.id)
        let cartData = await Cart.findOne(
            {
                _id: new ObjectId(reqParams.id),
                userId: new ObjectId(req.user.id),
                "items.productId": new ObjectId(reqBody.productId)
            }
        )
        console.log(cartData)

        if (!cartData) {
            return res.status(400).json({ message: "Product not in cart" })
        }
        let updateData = await Cart.findOneAndUpdate(
            {
                _id: new ObjectId(reqParams.id),
                userId: req.user.id,
                "items.productId": new ObjectId(reqBody.productId)
            },
            {
                $pull: {
                    "items": {
                        "productId": new ObjectId(reqBody.productId)
                    }
                }
            },
            { new: true }
        )
        console.log(updateData)
        return res.status(200).json({ message: "Product removed successfully" })

    } catch (err) {
        return res.status(500).json({ message: "server error", error: err })

    }
}

export const fetchUserCartList = async (req, res) => {
    try {
        console.log(req.query)
        let cartList = await Cart.aggregate([
            { $match: { userId: new ObjectId(req.user.id) } },
            {
                $lookup: {
                    from: 'users',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'userInfo'
                }
            },
            { $unwind: '$userInfo' },
            {
                $project: {
                    _id: 1,
                    email: "$userInfo.email",
                    items: 1,
                    cartTotalPrice: { $sum: "$items.total" }
                }
            }
        ])
        console.log(cartList)
        return res.status(200).json({ cartList })

    } catch (err) {
        console.log(err);
    }
}