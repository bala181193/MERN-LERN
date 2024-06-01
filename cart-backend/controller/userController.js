import jwt from "jsonwebtoken";
import { User } from '../models'
import { generatePassword, comparePassword } from '../config/bcrypt'

/*
reqBody : email,passord
method:post
api:/authApi/register
*/


export const register = async (req, res) => {
    try {
        console.log("enter register")
        let reqBody = req.body;
        let checkUser = await User.findOne({ email: reqBody.email })
        if (checkUser) {
            return res.status(400).json({ message: "user is already exsit" })
        }
        const newDoc = new User({
            email: reqBody.email,
            password: generatePassword(reqBody.password)
        })
        await newDoc.save()
        return res.status(200).json({ message: "user Registered successfully" })

    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "server error", error: err })
    }
}
/*
reqBody : email,passord
method:post
api:/authApi/login
*/
export const login = async (req, res) => {
    try {
        let reqBody = req.body;
        console.log(reqBody)

        reqBody.email = reqBody.email.toLowerCase();
        let checkUser = await User.findOne({ email: reqBody.email })
        if (!checkUser) {
            return res.status(400).json({ message: "user not found" })
        }
        const checkPassword = comparePassword(reqBody.password, checkUser.password);
        console.log(checkPassword)
        if (!checkPassword) {
            return res.status(400).json({ message: "Invalid Password" })
        }
        console.log("process.env.secretOrKey", process.env.secretOrKey)
        let payloadData = {
            _id: checkUser._id
        };
        let token = jwt.sign(payloadData, process.env.secretOrKey);
        res.header('Authorization', `Bearer ${token}`);
        return res.status(200).json({ message: "user login successfully", token })

    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "server error", error: err })

    }
}