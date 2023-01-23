const mongoose = require('mongoose');

const { Schema } = mongoose;

    const commentSchema = new Schema({
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
        likes: {
            type: Number,
            default: 0 
        },
        // Poster can pin the comments in the post
        pinned: {
            type: Boolean,
            default: false
        }        
    })

    const Comment = mongoose.model('Comment', commentSchema);

    module.exports = Comment;