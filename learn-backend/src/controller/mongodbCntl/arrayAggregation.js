
import ArrayAggreegationModel from "../../models/aggregationModel/arrayAggregationModel"
export const arrayElement = async () => {
    try {
        console.log("aaaaaaa");
        // await ArrayAggreegationModel.deleteMany()
        // const insertArray = await ArrayAggreegationModel.insertMany([
        //     { "name": "dave123", favorites: ["briyani", "chocolate", "cake", "butter", "apples", "chicken-briyani"] },
        //     { "name": "li", favorites: ["orange", "apples", "pudding", "pie", "banna"] },
        //     { "name": "ahn", favorites: ["pears", "pecans", "chocolate", "cherries"] },
        //     { "name": "ty", favorites: ["ice cream"] }
        // ])
        // const insertArray = await ArrayAggreegationModel.insertMany([
        //     { "name": "dave123", favorites: [{ name: "bala", age: 22 }, { name: "murugan", age: 12 }, { name: "kali", age: 32 }] },
        //     { "name": "li", favorites: [{ name: "bala", age: 22 }, { name: "murugan", age: 12 }, { name: "kali", age: 32 }, { name: "kani", age: 42 }] },
        //     { "name": "ahn", favorites: [{ name: "varun", age: 22 }, { name: "ivicky", age: 12 }] },
        //     { "name": "ty", favorites: [{ name: "pichai", age: 22 }] }

        // ])
        // console.log(insertArray)
        // const result = await ArrayAggreegationModel.aggregate([
        //     {
        //         $project: {
        //             first: { $arrayElemAt: ['$favorites', 1] },
        //             last: { $arrayElemAt: ['$favorites', -2] }

        //         }
        //     }
        // ])
        // console.log(result)
    } catch (err) {
        console.log(err)
    }
}

export const slice = async () => {
    try {
        // await ArrayAggreegationModel.deleteMany()

        // const insertArray = await ArrayAggreegationModel.insertMany([
        //     { "name": "dave123", favorites: ["briyani", "chocolate", "cake", "butter", "apples", "chicken-briyani"] },
        //     { "name": "li", favorites: ["orange", "apples", "pudding", "pie", "banna"] },
        //     { "name": "ahn", favorites: ["pears", "pecans", "chocolate", "cherries"] },
        //     { "name": "ty", favorites: ["ice cream"] }
        // ])
        // console.log(insertArray)

        const result = await ArrayAggreegationModel.aggregate([
            {
                $project: {

                    slice: { $slice: ['$favorites', 2] },
                    size: { $size: "$favorites" },
                    // abs: { $abs: { $subtract: [2, { $size: "$favorites" }] } },
                    // remainingfavorites: { $slice: ["$favorites", 3, { $abs: { $subtract: [{ $size: "$favorites" }, 2] } }] }


                }
            }
        ])
        console.log(result)

    } catch (err) {
        console.log(err)
    }
}
export const push = async () => {
    try {
        // await ArrayAggreegationModel.deleteMany()
        // const insertData = await ArrayAggreegationModel.insertMany([
        //     { name: "die", uniqueStringId: "r5", summary: "Roll a 5", uniqueNumberId: 1 },
        //     { name: "card", uniqueStringId: "d3rc", summary: "Draw 3 red cards", uniqueNumberId: 1 },
        //     { name: "card", uniqueStringId: "d3rc", summary: "Draw 3 red cards", uniqueNumberId: 2 },
        //     { name: "card", uniqueStringId: "d3rc", summary: "Draw 3 red cards", uniqueNumberId: 3 },
        //     { name: "die", uniqueStringId: "r16", summary: "Roll a 1 then a 6", uniqueNumberId: 1 },
        //     { name: "die", uniqueStringId: "r16", summary: "Roll a 1 then a 6", uniqueNumberId: 2 },
        //     { name: "card", uniqueStringId: "dak", summary: "Draw an ace, then a king", uniqueNumberId: 1 },
        //     { name: "card", uniqueStringId: "dak", summary: "Draw an ace, then a king", uniqueNumberId: 2 }

        // ])

        // console.log(insertData)
        // const insertArray = await ArrayAggreegationModel.aggregate([
        //     {
        //         $group:

        //         {
        //             _id: "$uniqueStringId",
        //             newArray: {
        //                 $push: {
        //                     summary: "$summary",
        //                     name: "$name",
        //                 },
        //             },
        //             // newArray: {
        //             //     $push: "$$ROOT", // each object full data in array
        //             // }
        //         },
        //     },
        // ]);
        // const insertArray = await ArrayAggreegationModel.insertMany([
        //     { "name": "dave123", favorites: ["briyani", "chocolate", "cake", "butter", "apples", "chicken-briyani"] },
        //     { "name": "li", favorites: ["orange", "apples", "pudding", "pie", "banna"] },
        //     { "name": "ahn", favorites: ["pears", "pecans", "chocolate", "cherries"] },
        //     { "name": "ty", favorites: ["ice cream"] }
        // ])
        // console.log(insertArray)
        //single value
        // const updateManyPush = await ArrayAggreegationModel.updateMany(
        //     {},
        //     { $push: { "favorites": "rice" } }
        // )
        // console.log(updateManyPush)

        // const updateManyPush = await ArrayAggreegationModel.updateMany(
        //     {},
        //     { $push: { "favorites": { $each: ['burger', 'pitza'] } } }
        // )
        // console.log(updateManyPush)


    } catch (err) {
        console.log(err)
    }
}
export const pull = async () => {
    try {

        // const result = [
        //     { "name": "Math1", "score": "undefined" },
        //     { "name": "English", "score": null },
        //     { "name": "Science", "score": undefined },
        //     { "name": "Math", "score": "83" },
        //     { "name": "English", "score": 40 },
        //     { "name": "Science", "score": 83 }
        // ]

        // const findData = result.filter((data, i) => data.score === undefined || data.score === 83)
        // console.log(findData)
        // await ArrayAggreegationModel.deleteMany()

        // const insertArray = await ArrayAggreegationModel.insertMany([
        //     { "name": "dave123", favorites: ["briyani", "chocolate", "cake", "butter", "apples", "chicken-briyani"] },
        //     { "name": "li", favorites: ["orange", "apples", "pudding", "pie", "banna"] },
        //     { "name": "ahn", favorites: ["pears", "pecans", "chocolate", "cherries"] },
        //     { "name": "ty", favorites: ["ice cream"] }
        // ])
        // console.log(insertArray)

        // const pullData = await ArrayAggreegationModel.updateMany({},
        //     { $pull: { favorites: "apples" } }
        // )
        // console.log(pullData)

        // const insertArray = await ArrayAggreegationModel.insertMany([
        //     { "item": "abc", name: "balamuruga1n1", "updatedSubjects": [{ "name": "Math", "score": "" }, { "name": "English", "score": null }, { "name": "Science", "score": 83 }], "date": new Date("2014-01-01T08:00:00Z") },
        //     { "item": "abc", name: "balamuruga1n1", "updatedSubjects": [{ "name": "Math", "score": 10 }, { "name": "English", "score": 40 }, { "name": "Science", "score": 83 }], "date": new Date("2014-01-01T08:00:00Z") },
        //     { "item": "jkl", name: "murugan2", "updatedSubjects": [{ "name": "Math", "score": 94 }, { "name": "English", "score": 99 }, { "name": "Science", "score": 77 }], "date": new Date("2014-02-03T09:00:00Z") },
        //     { "item": "xyz", name: "kali3", "updatedSubjects": [{ "name": "Math", "score": 95 }, { "name": "English", "score": 93 }, { "name": "Science", "score": 100 }], "date": new Date("2014-02-03T09:05:00Z") },

        // ])
        // console.log(insertArray)
        // const pullData = await ArrayAggreegationModel.updateMany({},
        //     {
        //         $pull: {
        //             updatedSubjects: {
        //                 $or:
        //                     [
        //                         { score: "" },
        //                         { score: null }

        //                     ]
        //                 // score: ""
        //             }
        //         }
        //     }
        // )
        // console.log(pullData)

    } catch (err) {
        console.log(err)
    }
}
export const pop = async () => {
    try {
        // await ArrayAggreegationModel.deleteMany()

        // const insertArray = await ArrayAggreegationModel.insertMany([
        //     { "name": "dave123", favorites: ["briyani", "chocolate", "cake", "butter", "apples", "chicken-briyani"] },
        //     { "name": "li", favorites: ["orange", "apples", "pudding", "pie", "banna"] },
        //     { "name": "ahn", favorites: ["pears", "pecans", "chocolate", "cherries"] },
        //     { "name": "ty", favorites: ["ice cream"] }
        // ])
        // console.log(insertArray)

        // const pullData = await ArrayAggreegationModel.updateMany({},
        //     { $pop: { favorites: 1 } }
        // )
        // console.log(pullData)

        // const insertArray = await ArrayAggreegationModel.insertMany([
        //     { "item": "abc", name: "balamuruga1n1", "updatedSubjects": [{ "name": "Math", "score": "" }, { "name": "English", "score": null }, { "name": "Science", "score": 83 }], "date": new Date("2014-01-01T08:00:00Z") },
        //     { "item": "abc", name: "balamuruga1n1", "updatedSubjects": [{ "name": "Math", "score": 10 }, { "name": "English", "score": 40 }, { "name": "Science", "score": 83 }], "date": new Date("2014-01-01T08:00:00Z") },
        //     { "item": "jkl", name: "murugan2", "updatedSubjects": [{ "name": "Math", "score": 94 }, { "name": "English", "score": 99 }, { "name": "Science", "score": 77 }], "date": new Date("2014-02-03T09:00:00Z") },
        //     { "item": "xyz", name: "kali3", "updatedSubjects": [{ "name": "Math", "score": 95 }, { "name": "English", "score": 93 }, { "name": "Science", "score": 100 }], "date": new Date("2014-02-03T09:05:00Z") },

        // ])
        // console.log(insertArray)

        // const pullData = await ArrayAggreegationModel.updateMany({},
        //     { $pop: { "updatedSubjects": 1 } }
        // )
        // console.log(pullData)

    } catch (err) {
        console.log(err)
    }
}

export const addToset = async () => {
    try {
        // await ArrayAggreegationModel.deleteMany()

        // const insertArray = await ArrayAggreegationModel.insertMany([
        //     { "name": "dave123", favorites: ["briyani", "chocolate", "cake", "butter", "apples", "chicken-briyani"] },
        //     { "name": "li", favorites: ["orange", "apples", "pudding", "pie", "banna"] },
        //     { "name": "ahn", favorites: ["pears", "pecans", "chocolate", "cherries"] },
        //     { "name": "ty", favorites: ["ice cream"] }
        // ])
        // console.log(insertArray)
        // const arraySet = await ArrayAggreegationModel.updateMany({},
        //     {
        //         // $push: { favorites: "MangoCake" }
        //         // $addToSet: { favorites: "MangoCake" }  avoid duplicate
        //         // $push: { favorites: "MangoCake" },
        //         $addToSet: { favorites: "iceCake" }  //avoid duplicate


        //     }
        // )
        // const arraySet = await ArrayAggreegationModel.updateMany({},
        //     {
        //         // $push: { favorites: { $each: ['iceCake', 'MangoCake'] } }
        //         $addToSet: { favorites: { $each: ['iceCake', 'MangoCake', 'chocho-pie'] } }   //avoid duplicate


        //     }
        // )
        // console.log(arraySet)
        // const insertArray = await ArrayAggreegationModel.insertMany([
        //     // { "item": "abc", name: "balamuruga1n1", "updatedSubjects": [{ "name": "Math", "score": "" }, { "name": "English", "score": null }, { "name": "Science", "score": 83 }], "date": new Date("2014-01-01T08:00:00Z") },
        //     { "item": "abc", name: "balamuruga1n1", "updatedSubjects": [{ "name": "Math", "score": 10 }, { "name": "English", "score": 40 }, { "name": "Science", "score": 83 }], "date": new Date("2014-01-01T08:00:00Z") },
        //     { "item": "jkl", name: "murugan2", "updatedSubjects": [{ "name": "Math", "score": 94 }, { "name": "English", "score": 99 }, { "name": "Science", "score": 77 }], "date": new Date("2014-02-03T09:00:00Z") },
        //     { "item": "xyz", name: "kali3", "updatedSubjects": [{ "name": "Math", "score": 95 }, { "name": "English", "score": 93 }, { "name": "Science", "score": 100 }], "date": new Date("2014-02-03T09:05:00Z") },

        // ])
        // console.log(insertArray)
        // const arraySet = await ArrayAggreegationModel.updateMany({},
        //     {
        //         // $push: { favorites: { $each: ['iceCake', 'MangoCake'] } }
        //         // $addToSet: {
        //         //     updatedSubjects:
        //         //     {
        //         //         $each:
        //         //             [{ name: "tamil", score: 100, status: "pass" }]
        //         //     }
        //         // }   //avoid duplicate
        //         // $addToSet: {
        //         //     updatedSubjects: { status: "pass" } //another object add

        //         // }
        //     }
        // )
        // console.log(arraySet)

    } catch (err) {
        console.log(err)
    }
}
export const fisrtAggregation = async () => {
    try {

        // await ArrayAggreegationModel.deleteMany()

        // const insertArray = await ArrayAggreegationModel.insertMany([
        //     { "item": "abc", name: "balamuruga1n1", "price": 10, "quantity": 2, "date": new Date("2014-01-01T08:00:00Z") },
        //     { "item": "jkl", name: "murugan2", "price": 20, "quantity": 1, "date": new Date("2014-02-03T09:00:00Z") },
        //     { "item": "xyz", name: "kali3", "price": 5, "quantity": 5, "date": new Date("2014-02-03T09:05:00Z") },
        //     { "item": "abc", name: "kani4", "price": 10, "quantity": 10, "date": new Date("2014-02-15T08:00:00Z") },
        //     { "item": "xyz", name: "vijay5", "price": 5, "quantity": 10, "date": new Date("2014-02-15T09:05:00Z") },
        //     { "item": "xyz", name: "arun6", "price": 5, "quantity": 5, "date": new Date("2014-02-15T12:05:10Z") },
        //     { "item": "xyz", name: "vivky7", "price": 5, "quantity": 10, "date": new Date("2014-02-15T14:12:12Z") }
        // ])
        // console.log(insertArray)

        // const result = await ArrayAggreegationModel.aggregate([
        //     {
        //         $sort: { item: 1, date: 1 }
        //     },
        //     {

        //         $group: {

        //             _id: "$item",
        //             firstSale: { $first: "$date" }, //take first element
        //             name: { $first: "$name" },
        //             firstSale: { $last: "$date" },
        //             name: { $last: "$name" }
        //             //total: { $sum: '$price' }

        //         }
        //     },
        //     {
        //         $project: {
        //             firstSale: 1,
        //             name: 1
        //         }
        //     }
        // ])

    } catch (err) {
        console.log(err)
    }
}

export const mapAggregation = async () => {
    try {
        await ArrayAggreegationModel.deleteMany()

        // const insertArray = await ArrayAggreegationModel.insertMany([
        //     // { "item": "abc", name: "balamuruga1n1", "updatedSubjects": [{ "name": "Math", "score": "" }, { "name": "English", "score": null }, { "name": "Science", "score": 83 }], "date": new Date("2014-01-01T08:00:00Z") },
        //     { "item": "abc", name: "balamuruga1n1", "updatedSubjects": [{ "name": "Math", "score": 10 }, { "name": "English", "score": 40 }, { "name": "Science", "score": 83 }], "date": new Date("2014-01-01T08:00:00Z") },
        //     { "item": "jkl", name: "murugan2", "updatedSubjects": [{ "name": "Math", "score": 94 }, { "name": "English", "score": 99 }, { "name": "Science", "score": 77 }], "date": new Date("2014-02-03T09:00:00Z") },
        //     { "item": "xyz", name: "kali3", "updatedSubjects": [{ "name": "Math", "score": 95 }, { "name": "English", "score": 93 }, { "name": "Science", "score": 100 }], "date": new Date("2014-02-03T09:05:00Z") },

        // ])
        // console.log(insertArray)

        // const result = await ArrayAggreegationModel.aggregate([
        //     {
        //         $project: {
        //             name: 1,
        //             totalMarks: {
        //                 $map: {
        //                     input: "$updatedSubjects",
        //                     as: 'subject',
        //                     in: {
        //                         name: "$$subject.name",
        //                         score: { $add: ['$$subject.score', 5] }
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // ])

        // const result = await ArrayAggreegationModel.aggregate([
        //     {
        //         $project: {
        //             name: 1,
        //             totalMarks: {
        //                 $map: {
        //                     input: "$updatedSubjects",
        //                     as: 'subject',
        //                     in: {
        //                         name: "$$subject.name",
        //                         score: {
        //                             $add: [
        //                                 {

        //                                     $cond: {
        //                                         if: { $or: [{ $eq: ["$$subject.score", null] }, { $eq: ["$$subject.score", ""] }] },
        //                                         then: 0,
        //                                         else: '$$subject.score'
        //                                     }
        //                                 }, 5]
        //                         }

        //                     }
        //                 }
        //             }
        //         }
        //     }
        // ])
        // console.log(result)

        // const insertArray = await ArrayAggreegationModel.create({
        //     favorites: [1, 2, 3, 4, 4]
        // });
        // console.log(insertArray)
    } catch (err) {
        console.log(err)
    }
}

export const reduce = async () => {
    try {
        await ArrayAggreegationModel.deleteMany();
        // const insertArray = await ArrayAggreegationModel.insertMany([
        //     { name: "die", uniqueStringId: "r5", summary: "Roll a 5", uniqueNumberId: 1, price: 0.16666666666667 },
        //     { name: "card", uniqueStringId: "d3rc", summary: "Draw 3 red cards", uniqueNumberId: 1, price: 0.5 },
        //     { name: "card", uniqueStringId: "d3rc", summary: "Draw 3 red cards", uniqueNumberId: 2, price: 0.49019607843137 },
        //     { name: "card", uniqueStringId: "d3rc", summary: "Draw 3 red cards", uniqueNumberId: 3, price: 0.48 },
        //     { name: "die", uniqueStringId: "r16", summary: "Roll a 1 then a 6", uniqueNumberId: 1, price: 0.16666666666667 },
        //     { name: "die", uniqueStringId: "r16", summary: "Roll a 1 then a 6", uniqueNumberId: 2, price: 0.16666666666667 },
        //     { name: "card", uniqueStringId: "dak", summary: "Draw an ace, then a king", uniqueNumberId: 1, price: 0.07692307692308 },
        //     { name: "card", uniqueStringId: "dak", summary: "Draw an ace, then a king", uniqueNumberId: 2, price: 0.07843137254902 }
        // ])
        // console.log(insertArray)
        // const insertArray = await ArrayAggreegationModel.aggregate([
        //     {
        //         $group:
        //         {
        //             _id: "$uniqueStringId",
        //             priceyArr: {
        //                 $push: "$price",
        //             },
        //         },
        //     },
        //     {
        //         $project:
        //         {
        //             results: {
        //                 $reduce: {
        //                     input: "$priceyArr",
        //                     initialValue: 1,
        //                     in: {
        //                         $multiply: ["$$value", "$$this"],
        //                     },
        //                 },
        //             },
        //         },
        //     }
        // ]);


        // const insertArray = await ArrayAggreegationModel.create({
        //     favorites: [1, 2, 3, 4, 4]
        // });
        // console.log(insertArray)
        // const result = await ArrayAggreegationModel.aggregate([
        //     {
        //         $project:

        //         {
        //             resut: {
        //                 $reduce: {
        //                     input: "$favorites",
        //                     initialValue: 1,
        //                     in: {
        //                         $multiply: ["$$value", "$$this"],
        //                     },
        //                 },
        //             },
        //         },
        //     },
        // ])
        // const insertArray = await ArrayAggreegationModel.insertMany([
        //     { "name": "dave123", favorites: ["briyani", "chocolate", "cake", "butter", "apples", "chicken-briyani"] },
        //     { "name": "li", favorites: ["orange", "apples", "pudding", "pie", "banna"] },
        //     { "name": "ahn", favorites: ["pears", "pecans", "chocolate", "cherries"] },
        //     { "name": "ty", favorites: ["ice cream"] }
        // ])
        // console.log(insertArray)
        const result = await ArrayAggreegationModel.aggregate([
            {
                $project:

                {
                    resut: {
                        $reduce: {
                            input: "$favorites",
                            initialValue: "my faour:",
                            in: {
                                $concat: [
                                    "$$value",
                                    {
                                        $cond: {
                                            if: { $eq: ["$$value", "my faour:"] }, then: " ", else: ","
                                        }
                                    },
                                    "$$this"
                                ]
                            },
                        },
                    },
                },
            },
        ])
    } catch (err) {
        console.log(err)
    }
}


export const replaceRoot = async () => {
    try {
        // await ArrayAggreegationModel.deleteMany()

        // const insertArray = await ArrayAggreegationModel.insertMany([
        //     // { "nameObj": { "first": "John", "last": "Backus" } },
        //     // { "nameObj": { "first": "John", "last": "McCarthy" } },
        //     // { "nameObj": { "first": "Grace", "last": "Hopper" } },
        //     // { "firstname": "bala", "lastname": "murugan" },
        //     // { "firstname": "kani", "lastname": "selvam" },

        //     {
        //         "name": "Susan",
        //         "favorites": [{ "cell": "555-653-6527" },
        //         { "home": "555-965-2454" }]
        //     },
        //     {
        //         "name": "Mark",
        //         "favorites": [{ "cell": "555-445-8767" },
        //         { "home": "555-322-2774" }]
        //     }

        // ])
        // console.log(insertArray)
        // {
        //     $unwind: "$favorites"
        // },
        // {
        //     $match: { "favorites.cell" : { $exists: true } }
        // },
        // {
        //     $replaceRoot: { newRoot: "$favorites" }
        // }

        // metrhod 1:
        // const result1 = await ArrayAggreegationModel.aggregate([
        //     {
        //         $replaceRoot:
        //         /**
        //          * replacementDocument: A document or string.
        //          */
        //         {
        //             newRoot: {
        //                 $mergeObjects: [
        //                     {
        //                         age: 30, first: "bala", last: "murugan"
        //                     },
        //                     "$nameObj",
        //                 ],
        //             },
        //         },
        //     }
        // ])
        // const result2 = await ArrayAggreegationModel.aggregate([
        //     {
        //         $replaceRoot:

        //         {
        //             newRoot: {
        //                 $mergeObjects: [
        //                     {
        //                         salary: 2000,
        //                         age: 12,
        //                     },
        //                     "$$ROOT",// intial array of object
        //                 ],
        //             },
        //         },
        //     },
        //     {
        //         $project:

        //         {
        //             nameObj: 1,
        //             firstname: { $ifNull: ['$firstname', "no-name"] },
        //             age: 1,
        //             salary: 1
        //         },
        //     },
        // ])
        // method:3
        // const insertArray = await ArrayAggreegationModel.insertMany([
        //     {
        //         "nameObj": { "first": "John", "last": "Backus" },
        //         "userInfo": {
        //             "username": "jdoe",
        //             "contact": {
        //                 "email": "jdoe@example.com",
        //                 "phone": "555-1234"
        //             },
        //             "studentMark": {
        //                 "tamil": 50,
        //                 "english": 70
        //             }
        //         },
        //         "date": new Date("2023-01-01T00:00:00Z")
        //     }
        // ])
        // console.log(insertArray)

        // const result3 = await ArrayAggreegationModel.aggregate([
        //     {
        //         $replaceRoot:
        //         // {
        //         //     newRoot: {
        //         //         $mergeObjects: [
        //         //             "$userInfo",
        //         //             "$userInfo.contact",
        //         //             {
        //         //                 createdAt: "$date",
        //         //             },
        //         //         ],
        //         //     },
        //         // },
        //         {
        //             newRoot: {
        //                 $mergeObjects: [
        //                     "$userInfo",
        //                     "$userInfo.contact",
        //                     "$nameObj",
        //                     {
        //                         createdAt: "$date",
        //                     },
        //                 ],
        //             },
        //         },
        //     },
        //     {
        //         $project:
        //         {
        //             email: 1,
        //             tamil: "$studentMark.tamil",
        //         },
        //     },
        // ])

    } catch (err) {
        console.log(err)
    }
}

export const elementMatch = async () => {
    try {
        // await ArrayAggreegationModel.deleteMany()

        // const insertArray = await ArrayAggreegationModel.insertMany([
        //     // { "item": "abc", name: "balamuruga1n1", "updatedSubjects": [{ "name": "Math", "score": "" }, { "name": "English", "score": null }, { "name": "Science", "score": 83 }], "date": new Date("2014-01-01T08:00:00Z") },
        //     { "item": "abc", name: "balamuruga1n1", "updatedSubjects": [{ "name": "Math", "score": 10 }, { "name": "English", "score": 40 }, { "name": "Science", "score": 83 }], "date": new Date("2014-01-01T08:00:00Z") },
        //     { "item": "jkl", name: "murugan2", "updatedSubjects": [{ "name": "Math", "score": 94 }, { "name": "English", "score": 99 }, { "name": "Science", "score": 77 }], "date": new Date("2014-02-03T09:00:00Z") },
        //     { "item": "xyz", name: "kali3", "updatedSubjects": [{ "name": "Math", "score": 95 }, { "name": "English", "score": 93 }, { "name": "Science", "score": 100 }], "date": new Date("2014-02-03T09:05:00Z") },

        // ])
        // console.log(insertArray)
        // const result = await ArrayAggreegationModel.find(
        //     { updatedSubjects: { $elemMatch: { name: "Math", score: { $lte: 15 } } } }
        // )
        // console.log(result)
        // const insertArray = await ArrayAggreegationModel.create([
        //     // { "item": "abc", name: "balamuruga1n1", "updatedSubjects": [{ "name": "Math", "score": "" }, { "name": "English", "score": null }, { "name": "Science", "score": 83 }], "date": new Date("2014-01-01T08:00:00Z") },
        //     {
        //         "item": "abc",
        //         name: "balamuruga1n1",
        //         "updatedSubjects":
        //             [
        //                 { "id": 1, "name": "Math", "score": 10 },
        //                 { "id": 2, "name": "English", "score": 40 },
        //                 { "id": 3, name: "Science", "score": 83 }
        //             ],
        //         "date": new Date("2014-01-01T08:00:00Z")
        //     },

        // ])
        // console.log(insertArray)

        // const updateDoc = await ArrayAggreegationModel.updateOne(
        //     { "item": "abc", "updatedSubjects.id": 1 },
        //     {
        //         $set: {
        //             "updatedSubjects.$.score": 75,
        //             "updatedSubjects.$.name": "tamil",

        //         }
        //     }

        // )
        // console.log(updateDoc)
    } catch (err) {

    }
}
export const objectToArray = async () => {
    try {
        // await ArrayAggreegationModel.deleteMany()

        // const insertArray = await ArrayAggreegationModel.insertMany([
        //     { name: "balamuruga1n1", "nameObj": { "first": "John", "last": "Backus", score: 100, mark: 200 }, "date": new Date("2014-01-01T08:00:00Z") },
        //     { name: "murugan2", "nameObj": { "first": "John", "last": "McCarthy", score: 200, mark: 100 }, "date": new Date("2014-02-03T09:00:00Z") },
        //     { name: "kali3", "nameObj": { "first": "Grace", "last": "Hopper", score: 200, mark: 200 }, "date": new Date("2014-02-03T09:05:00Z") },

        // ])
        // console.log(insertArray)



        // const result = await ArrayAggreegationModel.aggregate([
        //     {
        //         $project: {
        //             name: 1,
        //             nameObj: {
        //                 $objectToArray: "$nameObj"
        //             }
        //         }
        //     },
        //     {
        //         $unwind: "$nameObj"
        //     },
        //     {
        //         $group: {
        //             _id: "$nameObj.k",
        //             fieldN: {
        //                 total: {
        //                     $sum: {
        //                         $cond:
        //                         {
        //                             if: { $or: [{ $eq: ['$nameObj.v', "first"] }, { $eq: ['$nameObj.v', "last"] }] }, then: 0, else: '$nameObj.v'
        //                         }
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // ])

        // const insertArray = await ArrayAggreegationModel.insertMany([
        //     { name: "balamuruga1n1", "nameObj": { score: 100, mark: 200 }, "date": new Date("2014-01-01T08:00:00Z") },
        //     { name: "murugan2", "nameObj": { score: 200, mark: 100 }, "date": new Date("2014-02-03T09:00:00Z") },
        //     { name: "kali3", "nameObj": { score: 200, mark: 200 }, "date": new Date("2014-02-03T09:05:00Z") },

        // ])
        // console.log(insertArray)


        //     let namObjArr = [
        //         { k: "first", v: "John" },
        //         { k: "last", v: "Backus" },
        //         { k: "score", v: 100 },
        //         { k: "markr", v: 200 }
        //     ]
        //     //  after concatarray
        //     namObjArr = [...namObjArr, { k: "total", v: 300 }]
        //     console.log(namObjArr)
        //     //  then into object
        //  const newObj  ={ "first": "John", "last": "Backus", "score": 100, "mark": 200 }
        const result = await ArrayAggreegationModel.aggregate([
            {
                $project: {
                    name: 1,
                    nameArray: {
                        $objectToArray: "$nameObj"
                    }
                }
                // like this [ { k: "first", v: "John" }]
            },
            {
                $addFields: {
                    newNameArray: { $concatArrays: ["$nameArray", [{ "k": "total", "v": { $sum: "$nameArray.v" } }]] },
                } // like this[ { k: "first", v: "John" },{k:total,v:500}]
            },
            {
                $addFields: {
                    newNameObj: { $arrayToObject: "$newNameArray" }
                }
            },/// {first:100,total:500}
            {
                $project: {
                    name: 1,
                    newNameObj: 1
                }
            }
        ])
    } catch (err) {
        console.log(err)
    }
}



// objectToArray()
// elementMatch()
// addToset()
// pop()
// pull()
// push()
// reduce()
// replaceRoot()
// mapAggregation()
// fisrtAggregation()
// arrayElement()
// slice()

// {
//     $set:{
//       "products.productDetails.productImage":{
//         $cond: {
//           if: { $eq: ["$products.productDetails.productImage", { $arrayElemAt: [ "$gallery._id",0]}] },
//           then: { $arrayElemAt: [ "$gallery.galleryImage",0]},
//           else: null
//         }
//       }
//     }
//   },