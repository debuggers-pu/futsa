"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = __importDefault(require("../controllers/auth-controller"));
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.json({
        message: "Backend Up and running for FUTSA project.",
    });
    router.post("/auth/user/login", auth_controller_1.default.userLogin);
    router.post("/auth/user/signup", auth_controller_1.default.userSignup);
    router.post("/auth/owner/login", auth_controller_1.default.ownerLogin);
    router.post("/auth/owner/signup", auth_controller_1.default.ownerSignup);
});
exports.default = router;
