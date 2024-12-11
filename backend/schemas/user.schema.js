const { default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        minLength: 3,
        maxLength: 30
    },
    lastName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        minLength: 3,
        maxLength: 30
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        minLength: 5,
        maxLength: 30
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minLength: 5
    }
});

userSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
})

const User = mongoose.model("User", userSchema);

module.exports = User;