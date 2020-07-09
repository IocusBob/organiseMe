const mongoose = require('mongoose')

const { Schema } = mongoose;

const shoppingItemSchema = new Schema({
    item: String,
    quantity: Number,
    checked: {type: Boolean, default: false},
    _user: {type: Schema.Types.ObjectId, ref: 'User'}
});


mongoose.model('shoppingItems', shoppingItemSchema)