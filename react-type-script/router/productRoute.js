import express from 'express'
import passport from "passport";

//validation
import * as productValid from '../validation/productvalidation'

import * as productCntrl from '../controller/productController'
const router = express()

const passportAuth = passport.authenticate("usersAuth", { session: false });

router.route('/productAdd').post(productValid.productAddValid, productCntrl.productAdd)
router.route('/productList').get(productCntrl.productList)
router.route('/addCart').post(passportAuth, productCntrl.addCart)
router.route('/updateQty/:id').post(passportAuth, productCntrl.updateQty)
router.route('/removeProduct/:id').post(passportAuth, productCntrl.removeProduct)
router.route('/cartList').get(passportAuth, productCntrl.fetchUserCartList)


export default router