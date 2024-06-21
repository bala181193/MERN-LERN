import SwitchModel from '../../models/aggregationModel/switch'
export const switchAggregation = async () => {
    try {
        // await SwitchModel.deleteMany({});

        // const insertData = await SwitchModel.insertMany([
        //     { "name": "Susan Wilkes", summary: "good", price: 10, "scores": [87, 86, 78] },
        //     { "name": "Bob Hanna", summary: "bad", price: 10, "scores": [71, 64, 81] },
        //     { "name": "James Torrelio", summary: "average", price: 10, "scores": [91, 84, 97] }
        // ])
        // console.log(insertData)

        const result = await SwitchModel.aggregate([
            {
                $project: {
                    name: 1,
                    price: 1,
                    total: { $multiply: ['$price', 2] },
                    describe: {
                        $switch: {
                            branches: [
                                {
                                    case: { $eq: ['$name', 'Susan Wilkes'] },
                                    //then: '$total',
                                    then: 'good total'

                                },
                                {
                                    case: { $eq: ['$name', 'Wilkes1'] },
                                    then: "$total"
                                }
                            ],
                            default: "No  found."
                        }
                    }
                }
            }
        ])

        console.log(result)
        // const result = await SwitchModel.aggregate([
        //     {
        //         $project: {
        //             name: 1,
        //             summary: {

        //                 $switch: {
        //                     branches: [
        //                         {
        //                             case: { $gte: [{ $avg: "$scores" }, 90] },
        //                             then: "Doing great!"

        //                         },
        //                         {
        //                             case: {
        //                                 $and: [
        //                                     { $gte: [{ $avg: "$scores" }, 80] },
        //                                     { $lte: [{ $avg: "$scores" }, 90] },
        //                                 ],
        //                             },
        //                             then: "Doing pretty well."

        //                         },
        //                         {
        //                             case: { $lt: [{ $avg: "$scores" }, 80] },
        //                             then: "Needs improvement."
        //                         }
        //                     ],
        //                     default: "No scores found."
        //                 }
        //             }
        //         }
        //     }
        // ])
        // console.log(result)
    } catch (err) {
        console.log(err)
    }
}



const sample = () => {
    console.log("aaaaaaaa")
}
//sample()





// switchAggregation()