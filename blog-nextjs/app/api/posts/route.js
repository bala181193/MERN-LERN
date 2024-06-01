import connectDb from "../../../utils/dbConection";
import PostModel from '../../../model/postModel'

export async function GET(req) {
    try {
        await connectDb()
        const query = req.nextUrl.searchParams.get('q')
        console.log(query)
        let postData
        if (query) {
            postData = await PostModel.find(
                {
                    $or: [

                        { title: new RegExp(query, 'i') },
                        { description: new RegExp(query, 'i') },
                    ]
                }
            )
        } else {
            postData = await PostModel.find({})
        }
        return Response.json(postData)
    } catch (err) {
        return Response.json({ message: err.message })

    }
}

