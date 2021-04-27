const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema({
    // _id field will be create automatically

    text: {
        type: String,
        trim: true,
        required: [true, 'Please enter transaction label']
    },
    amount: {
        type: Number,
        required: [true, 'Please add positive or negative number']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Transaction', TransactionSchema)