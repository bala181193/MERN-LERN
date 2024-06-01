import express from 'express'
import * as expOpCntrl from '../controller/mongodbCntl/ExpOp'
import * as facetStageCntrl from '../controller/mongodbCntl/facet'
import * as switchCntrl from '../controller/mongodbCntl/switch'
import * as arithamaticCtrl from '../controller/mongodbCntl/arithamticopt'
import * as arrayAggregateCntrl from '../controller/mongodbCntl/arrayAggregation'


const router = express();

router.route('/expOp').post(expOpCntrl.expOp);
router.route('/facetStage').post(facetStageCntrl.facetStage);
router.route('/facetStage').post(facetStageCntrl.facetStage);
router.route('/switch').post(switchCntrl.switchAggregation);
router.route('/arithamatic').post(arithamaticCtrl.sum);
router.route('/arrayAggregation').post(arrayAggregateCntrl.arrayElement);


export default router 