import { Request, Response } from "express";
import User from "../models/user-model";
import AuthServices from "../services/auth-services";

class AuthController {
	userLogin = async (req: Request, res: Response) => {
		const { email, password } = req.body;
		try {
			const user = await AuthServices.getUser({ email: email });
			if (user) {
				if (user.authenticate(password)) {
					const { firstName, lastName, email, role, phoneNumber, image } = user;
					const token = await AuthServices.createJwtToken({
						id: user._id,
						role,
					});
					res.cookie("futsa-token", token);
					res.status(200).json({
						message: "User successfully logged in.",
						token,
						user: {
							firstName,
							lastName,
							email,
							role,
							phoneNumber,
							image,
						},
					});
				} else {
					res.status(500).json({
						message: "Authentication credentials didn't match.",
					});
				}
			} else {
				res.status(500).json({
					message: "User not found.",
				});
			}
		} catch (error: any) {
			res.status(404).json({
				message: error.message,
			});
		}
	};

	userSignup = async (req: Request, res: Response) => {
		const { firstName, lastName, email, password, phoneNumber, image, role } =
			req.body;
		try {
			const userExist = await AuthServices.getUser({ email: email });
			if (userExist) {
				res.status(400).json({
					message: "User already exists.",
				});
				return;
			}
			const _user = new User({
				firstName,
				lastName,
				email,
				password,
				phoneNumber,
				image,
				role,
			});
			const user = await AuthServices.addUser(_user);
			if (user) {
				const token = await AuthServices.createJwtToken({
					_id: user.id,
					role: user.role,
				});
				res.cookie("futsa-token", token);
				res.status(200).json({
					message: "User successfully created.",
					token,
					user: {
						firstName,
						lastName,
						email,
						role,
						phoneNumber,
						image,
					},
				});
			} else {
				res.status(400).json({
					message: "User not added.",
				});
			}
		} catch (error: any) {
			res.status(404).json({
				message: error.message,
			});
		}
	};

	ownerLogin = (req: Request, res: Response) => {
		console.log("Signin");
	};
	ownerSignup = (req: Request, res: Response) => {
		console.log("SignUp");
	};
}

export default new AuthController();
