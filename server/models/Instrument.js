const mongoose = require('mongoose');

const { Schema } = mongoose;

    const instrumentSchema = new Schema({
        // User will pick instrument from a unordered-list
        instrumentName: {
            type: String,
            required: true,
            trim: true,
        },
        skillLevel: {
            type: String,
            required: true,
            trim: true, 
        },
    })

    const Instrument = mongoose.model('Instrument', instrumentSchema);

    module.exports = Instrument;