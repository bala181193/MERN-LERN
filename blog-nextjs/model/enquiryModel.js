import { Schema, model, models } from 'mongoose'
import { title } from 'process'

const enquirySchema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    message: { type: String, require: true }
})
const enquiryModel = models.Enquiry || model('Enquiry', enquirySchema)

export default enquiryModel