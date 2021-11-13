import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// dotenv
import dotenv from 'dotenv';
dotenv.config();

export function authenTokenMiddleware(handler: Function): any {
	return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const token = String(req.query.token);

			if (!token) res.sendStatus(401);

			jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err, data) => {
				if (err) res.sendStatus(403);

				next();
			});
		} catch (error) {
			res.status(401).json(error);
		}
	};
}
