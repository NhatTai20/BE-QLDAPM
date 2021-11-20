// dependencies
import { Request, Response } from 'express';
import path from 'path';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// dotenv
import dotenv from 'dotenv';
dotenv.config();

// Middlewares
import { asyncMiddleware } from '../middlewares/async.Middleware';
import { search } from '../routes/routersApi/category.Router';

// Service
import { userService } from '../services/user.Service';

// Nodemailer
const generator = require('generate-password');
import nodemailer from 'nodemailer';

class UserController {
	//-----------------------------------GET----------------------------------
	login = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
		const query = req.query;
		const email = String(query.email);
		const password = String(query.pass);
		const Path = process.env.PATH_API;

		const pass = await userService.getPassword(email);
		const ret = bcrypt.compareSync(password, pass.Password);

		if (ret) {
			const data = await userService.getUserByEmail(email);
			const accessToken = jwt.sign({ ...data }, process.env.ACCESS_TOKEN_SECRET as string, {
				expiresIn: '300s',
			});

			res.json({ data: accessToken, message: 'Login success', Path });
		} else {
			res.json({ data: false, message: 'Login failed', Path });
		}
	});

	register = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
		const query = req.query;
		const email = String(query.email);
		const pass = String(query.pass) || '';
		const Path = process.env.PATH_API;
		const passCover = bcrypt.hashSync(pass, Number(process.env.ROUNDS));

		const user = {
			Email: email,
			Password: passCover,
			Active: 1,
			TypeOfUser: 0,
		};

		const { data, message, status } = await userService.registerUser(user);

		res.status(status).json({ data, message });
	});

	sendOTP = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
		const query = req.query;
		const email = String(query.email);

		// create OTP random
		const otp = generator.generate({
			length: 6,
			numbers: true,
		});

		// create reusable transporter object using the default SMTP transport
		const transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			auth: {
				user: process.env.MAIL, // generated ethereal user
				pass: process.env.PASS, // generated ethereal password
			},
		});

		// send mail with defined transport object
		const mailOptions = {
			from: 'Hệ thống Fahasa',
			to: String(email),
			subject: 'Xác nhận đăng ký tài khoản Fahasa ✔',
			text: 'Chào mừng bạn đến với Fahasa',
			html:
				'<b>Mã xác nhận OTP của bạn là : ' +
				otp +
				'<b>.Vui lòng không chia sẽ mã OTP với bất kỳ ai!',
		};

		transporter.sendMail(mailOptions, async function (error: any, info: any) {
			if (error) {
				console.log(error);
			} else {
				const otpData = {
					Email: email,
					OTP: otp,
				};

				const { data, message, status } = await userService.createOTP(otpData, email);

				if (data) {
					res.status(status).json({ data: otp, isUser: data, message });
				} else {
					res.status(status).json({ data: '', isUser: data, message });
				}
			}
		});
	});

	getInfo = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
		res.status(200).json({ data: res.locals.data, message: 'Info' });
	});
}

export const userController = new UserController();
