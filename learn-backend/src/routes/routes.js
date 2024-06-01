import express from 'express'
import * as authCtrl from '../controller/auth.controller'
const router = express();

// router.route('/login').post(authCtrl.login) 
router.route('/register').post(authCtrl.imageUpload, authCtrl.register);
router.route('/login').post(authCtrl.login)

router.route('/getUserDetail/:userId').get(authCtrl.getUserDetail)
router.route('/productBuy').post(authCtrl.productBuy)
router.route('/getBuyerList').get(authCtrl.getBuyerList)
router.route('/addGategory').post(authCtrl.addGategory)
router.route('/createTicket').post(authCtrl.createTicket)
router.route('/getTicketList/:ticketObjectId').get(authCtrl.getTicketList)



export default router