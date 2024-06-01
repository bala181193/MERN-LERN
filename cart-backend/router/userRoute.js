import express from 'express'
//validation
import * as userValid from '../validation/userValidation'
//controller
import * as usrCntrl from '../controller/userController'

const router = express()


router.route('/register').post(userValid.registerValid, usrCntrl.register);
router.route('/login').post(userValid.passwordValid, usrCntrl.login);


export default router