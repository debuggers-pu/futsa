import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";

export const validateSignup = [
	check("firstName").notEmpty().withMessage("Firstname is required."),
	check("lastName").notEmpty().withMessage("Lastname is required."),
	check("email").notEmpty().isEmail().withMessage("Not a Valid email."),
	check("password")
		.notEmpty()
		.isLength({ min: 4 })
		.withMessage("Password must be more than 4 characters"),
];

export const validateLogin = [
	check("email").notEmpty().isEmail().withMessage("Not a valid email."),
	check("password")
		.notEmpty()
		.isLength({ min: 4 })
		.withMessage("Password must be more than 4 characters."),
];

export const isValidate = (req: Request, res: Response, next: NextFunction) => {
	try {
		const errors: any = validationResult(req);
		if (errors.array().length > 0) {
			res.status(200).json({
				message: errors.array()[0].msg,
			});
		}
		next();
	} catch (error: any) {
		res.status(500).json({ msg: error.message });
	}
};
