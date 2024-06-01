import ConectMongo from '@/utils/dbConection';
import EnquiryModel from '../../../model/enquiryModel'
export async function POST(req) {
    try {
        const { name, email, message } = await req.json();
        console.log(name, email, message)
        const enquiryObj = { name, email, message }
        await ConectMongo();
        await EnquiryModel.create(enquiryObj)
        return Response.json({ message: "success" })
    } catch (error) {
        console.log(error)
        return Response.json({ message: error.message })

    }

}