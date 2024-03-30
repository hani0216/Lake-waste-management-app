const mongoose = require('mongoose');
const { Schema } = mongoose;

const tauxSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    pho: Number,
    nit: Number,
    amo: Number
}, { versionKey: false });

module.exports = mongoose.model('Taux', tauxSchema);
