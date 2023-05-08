"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_services_1 = __importDefault(require("../services/auth-services"));
class AuthController {
    constructor() {
        this.userLogin = (req, res) => {
            console.log("Signin");
        };
        this.userSignup = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { firstName, lastName, email, password, phoneNumber, image, role } = req.body;
            try {
                const userExist = yield auth_services_1.default.getUser({ email: email });
                if (userExist) {
                    console.log("User already exist");
                    res.status(200).json({
                        message: "User already exists.",
                    });
                    return;
                }
                const data = yield auth_services_1.default.addUser({
                    firstName,
                    lastName,
                    email,
                    password,
                    phoneNumber,
                    image,
                    role,
                });
                if (data) {
                    res.status(200).json({
                        message: "User successfully created",
                        user: data,
                    });
                }
                else {
                    res.status(400).json({
                        message: "User not added successfully.",
                    });
                }
            }
            catch (error) {
                res.status(400).json({
                    message: "Error message",
                });
            }
        });
        this.ownerLogin = (req, res) => {
            console.log("Signin");
        };
        this.ownerSignup = (req, res) => {
            console.log("SignUp");
        };
    }
}
exports.default = new AuthController();
