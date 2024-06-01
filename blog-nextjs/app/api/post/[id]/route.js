import connectDb from "../../../../utils/dbConection";
import PostModel from '../../../../model/postModel'

export async function GET(req, { params }) {
    try {
        await connectDb()
        const postData = await PostModel.findOne({ _id: params.id })
        return Response.json(postData)
    } catch (err) {
        return Response.json({ message: err.message })
    }
}

