const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const barangSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        trim: true,
        text: true,
        unique: true,
    },
    buyPrice: {
        type: Number,
        required: [true, "buy price is required"],
        trim: true,
    },
    sellPrice: {
        type: Number,
        required: [true, "sell price is required"],
        trim: true,
    },
    stock: {
        type: Number,
        required: [true, "stock is required"],
        trim: true,
    },
    picture: {
        type: String,
        trim: true,
        default:
            "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png",
    },
});

module.exports = mongoose.model("Barang", barangSchema);