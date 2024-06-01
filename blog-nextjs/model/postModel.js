import { Schema, model, models } from 'mongoose'
import { title } from 'process'

const postSchema = new Schema({
    title: String,
    description: String,
    image: String,
    createDate: String
}, { toJSON: { virtuals: true } })
postSchema.virtual('shortDescription').get(function () {
    return this.description.substr(0, 5) + "NEXT JS"
})
postSchema.virtual('changeDate').get(function () {
    return change_date(this.createDate)
})

const change_date = (changeDate) => {
    const date = new Date(changeDate);
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}
const postModel = models.Post || model('Post', postSchema)

export default postModel