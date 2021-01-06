const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const currency = require('mongoose-currency').loadType(mongoose);

const promotionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: Image,
        required: true

    },
    featured: {
        type: Boolean,
    },
    cost: {
        type: { type: currency },
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const Promotion = mongoose.model('Partner', promotionSchema);

module.exports = Promotion;