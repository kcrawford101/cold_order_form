const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
    item: {
        type: String,
        required: true,
        trim: true,
    },

    upc: {
        type: Number,
        minlength: 12,
    },

    productCode: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },

    category: {
        type: String,
        trim: true,
    },

    certification: {
        type: String,
        trim: true,
    },

    size: {
        type: String,
        required: true,
        trim: true,
    },

    caseSize: {
        type: Number,
        required: true,
    },

    unitCost: {
        type: Number,
        required: true,
    },

    discountedUnitCost: {
        type: Number,
    },

    productImageURL: {
        type: String,
    },
});

const Item = model("Item", itemSchema);

module.exports = Item;
