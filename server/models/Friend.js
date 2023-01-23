const mongoose = require('mongoose');

const { Schema } = mongoose;

    const friendSchema = new Schema({
        createdAt: {
            type: Date,
            default: Date.now()
          },
        myFriend: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        relationship: {
            type: String,
            default: 'Friend'
        }
    })

    const Friend = mongoose.model('Friend', friendSchema);

    module.exports = Friend;