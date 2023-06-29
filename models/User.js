const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is required"],
        trim: true,
        text: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    picture: {
        type: String,
        trim: true,
        default:
            "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png",
    },
});

module.exports = mongoose.model("User", userSchema);