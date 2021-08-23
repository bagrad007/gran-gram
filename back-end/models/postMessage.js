import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    selectedFile: String,
    text: String,
    comments: [String],
    name: String,
    tags: [String],
    creator: String,
    cookieCount: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const PostMessage = mongoose.model('PostMessage', postSchema)
export default PostMessage