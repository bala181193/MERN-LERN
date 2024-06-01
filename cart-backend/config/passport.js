import mongoose from 'mongoose';
import { User } from '../models'

const ObjectId = mongoose.Types.ObjectId;
const
    JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.secretOrKey;


export const userAuth = async (passport) => {
    passport.use("usersAuth",
        new JwtStrategy(opts, async function (jwt_payload, done) {
            console.log("jwt_payload", jwt_payload)
            User.findOne({ _id: new ObjectId(jwt_payload._id) }).then(user => {
                let data = {
                    id: user._id,
                }
                // req.user = data
                return done(null, data);
            }).catch(err => {
                return done(null, false)
            })
        })
    )

}