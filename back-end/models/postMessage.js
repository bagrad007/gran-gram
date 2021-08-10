import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    selectedFile: String,
    text: String,
    comments: [String],
    tags: [String],
    creator: String,
    cookieCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const PostMessage = mongoose.model('PostMessage', postSchema)
export default PostMessage