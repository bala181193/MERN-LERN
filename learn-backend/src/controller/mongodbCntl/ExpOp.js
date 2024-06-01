import mongoose from "mongoose";
import OrderExpr from '../../models/aggregationModel/exprModel'
import ConditionModel from '../../models/aggregationModel/conditionModel'
import ExistsModel from '../../models/aggregationModel/exsitAggregationModel'
export const expOp = async () => {
    // const monthlyBudget = [

    //     { category: "food", budget: 400, spent: 450 },
    //     { category: "drinks", budget: 100, spent: 150 },
    //     { category: "clothes", budget: 100, spent: 50 },
    //     { category: "misc", budget: 500, spent: 300 },
    //     { category: "travel", budget: 200, spent: 650 }
    // ]
    // const data = await OrderExpr.insertMany(monthlyBudget);

    // const data = await OrderExpr.find({ spent: { $gt: 150 } })
    // console.log(data)
    // const data = await OrderExpr.find({ $expr: { $gt: ['$spent', '$budget'] } })
    // console.log(data)
    // const data = await OrderExpr.find({ $expr: { $gt: ['$budget', '$spent'] } })
    // console.log(data)
    // const data = await OrderExpr.find({
    //     $expr: {
    //         $and: [
    //             { $gt: ['$spent', '$budget'] },
    //             { $lt: ['$spent', 200] }
    //         ]
    //     }
    // }) //same result 
    // console.log(data) 
    const data = await OrderExpr.aggregate([
        {
            $match: {
                $expr: {
                    $and: [
                        { $gt: ['$spent', '$budget'] },
                        { $lt: ['$spent', 200] }
                    ]
                }
            }
        }
    ]
    )  //same result 
    console.log(data)
    // const data = await OrderExpr.find({ $gt: ['$budget', '$spent'] })
    // console.log(data) //not used error is comming


}

export const conditionalCntl = async () => {
    try {
        // const insertData = await ConditionModel.insertMany([
        //     { "item": "abc1", qty: 300},
        //     { "item": "abc2", qty: 200},
        //     { "item": "xyz1", qty: 250 }
        // ])
        // console.log(insertData)
        // await ConditionModel.deleteMany({})
        const result = await ConditionModel.aggregate([
            {
                $project: {
                    item: 1,
                    discount: { $cond: { if: { $eq: ['$item', 'abc1'] }, then: 30, else: 10 } }
                }
            }

        ])
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}
const ifNullCondition = async () => {
    // await ConditionModel.deleteMany({})

    // const insertData = await ConditionModel.insertMany([
    //     { "item": "abc1", qty: 300, description: "toy car", },
    //     { "item": "abc2", qty: 200, description: null },
    //     { "item": "xyz1" }
    // ])
    // console.log(insertData)

    //method1
    // const result = await ConditionModel.aggregate([
    //     {
    //         $project: {
    //             item: 1,
    //             description: {
    //                 $ifNull: ['$description', 'place-some-value-for-null']
    //             },
    //             qty: {
    //                 $ifNull: ['$qty', 100]
    //             },
    //             total: { $multiply: [{ $ifNull: ['$qty', 100] }, 2] }
    //         }
    //     }

    // ])
    // console.log("result", result)
    // const result = await ConditionModel.find({ qty: { $exists: false } })
    // console.log(result)


}

export const exsitAggregation = async () => {
    try {
        // await ExistsModel.deleteMany({});

        // const insertData = await ExistsModel.insertMany([
        //     { saffron: 5, cinnamon: 5, mustard: null },
        //     { saffron: 3, cinnamon: null, mustard: 8 },
        //     { saffron: null, cinnamon: 3, mustard: 9 },
        //     { saffron: 1, cinnamon: 2, mustard: 3 },
        //     { saffron: 2, mustard: 5 },
        //     { saffron: 3, cinnamon: 2 },
        //     { saffron: 4 },
        //     { cinnamon: 2, mustard: 4 },
        //     { cinnamon: 2 },
        //     { mustard: 6 }
        // ])
        // console.log(insertData)
        // const result = await ExistsModel.find({ saffron: { $exists: true } })
        // console.log(result) // saffron only display
        // const result1 = await ExistsModel.find({ saffron: { $exists: false } })
        // console.log(result1) // saffron not only display
        // const result1 = await ExistsModel.find({ mustard: { $exists: false } }).countDocuments()
        // console.log(result1) //3 // saffron not only display
        const result2 = await ExistsModel.find({ mustard: { $exists: true } }).countDocuments()
        console.log(result2) //7  including null
    } catch (err) {
        console.log(err)
    }
}
// exsitAggregation()
// ifNullCondition()
// conditionalCntl()
// expOp()