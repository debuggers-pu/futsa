"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const UserSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 4,
        max: 20,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 4,
        max: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true,
        lowercase: true,
    },
    hash_password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        enum: ["user", "owner"],
        default: "user",
    },
}, { timestamps: true });
UserSchema.virtual("fullName").get(function () {
    return `${this.firstName} ${this.lastName}`;
});
UserSchema.virtual("password").set(function (password) {
    this.hash_password = bcrypt_1.default.hashSync(password, 10);
});
UserSchema.methods = {
    authenticate: function (password) {
        return bcrypt_1.default.compareSync(password, this.hash_password);
    },
};
const User = (0, mongoose_1.model)("User", UserSchema);
exports.default = User;
