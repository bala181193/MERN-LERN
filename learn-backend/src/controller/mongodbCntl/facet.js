import FacetModel from '../../models/aggregationModel/facetModel'
export const facetStage = async () => {
    try {
        // const facetModel = await FacetModel.insertMany([
        //     {

        //         "item": "apple",
        //         "quantity": 10,
        //         "price": 2.5,
        //         "date": new Date("2023-01-01T00:00:00Z")
        //     },
        //     {

        //         "item": "banana",
        //         "quantity": 5,
        //         "price": 1.0,
        //         "date": new Date("2023-01-02T00:00:00Z")
        //     },
        //     {

        //         "item": "cherry",
        //         "quantity": 20,
        //         "price": 0.5,
        //         "date": new Date("2023-01-03T00:00:00Z")
        //     },
        //     {

        //         "item": "apple",
        //         "quantity": 15,
        //         "price": 2.0,
        //         "date": new Date("2023-01-04T00:00:00Z")
        //     },
        //     {

        //         "item": "banana",
        //         "quantity": 10,
        //         "price": 1.5,
        //         "date": new Date("2023-01-05T00:00:00Z")
        //     }
        // ])

        //if facet use, aggreation ever use stage by stage
        const result = await FacetModel.aggregate([

            {
                $match: {
                    $or: [{ item: 'apple' }, { item: 'banana' }]
                }
            },
            // {
            //     $expr: { $eq: ['$item', 'apple'] }
            // },
            {
                $match: {
                    $or: [{ item: 'apple' }, { item: 'banana' }]
                }
            },
            {
                $project: {
                    item: 1,
                    qty: '$quantity',
                    price: 1
                }
            },
            {

                $facet: {
                    totalQuantityByItem: [
                        {
                            $group: {
                                _id: " $item",
                                totalQuantity: { $sum: "$quantity" },
                                count: { $sum: 1 }
                            }
                        }
                    ],
                    topRecentSales: [
                        { $sort: { date: -1 } },
                        { $limit: 3 }
                    ],
                    averagePrice: [
                        {
                            $group: {
                                _id: null,
                                averagePrice: { $avg: "$price" }
                            }
                        },
                        {
                            $project: {
                                _id: 0,
                                averagePrice: 1
                            }
                        }
                    ],
                    sort: [
                        { $sort: { date: -1 } },
                        { $limit: 3 }
                    ]
                }
            }
        ])
        console.log(result);
        console.log(result[0].totalQuantityByItem[0])
    } catch (err) {
        console.log(err)
    }
}

// facetStage();