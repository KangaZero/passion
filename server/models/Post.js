const mongoose = require('mongoose');

const { Schema } = mongoose;

    const postSchema = new Schema({
        createdAt: {
            type: Date,
            default: Date.now()
          },
        content: {
            type: String,
            required: true,
            trim: true,
        },
        videoLink: {
            type: String,
            required: false,
        },
        images: {
            type: Map,
            of: String,
            required: false,
        },
        comments: {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        },
        likes: {
            type: Number,
            default: 0 
        },
        pinned: {
            type: Boolean,
            default: false
        }        
    })

    const Post = mongoose.model('Post', postSchema);

    module.exports = Post;