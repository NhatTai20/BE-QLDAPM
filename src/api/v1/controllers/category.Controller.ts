// dependencies

import { Request, Response } from 'express';
import { parse } from 'path/posix';

// Interfaces

// Middlewares
import { asyncMiddleware } from '../middlewares/async.Middleware';

// services
import { categoryServices } from '../services/category.Service';

class CategoryController {
	getCategoryProductByLevel = asyncMiddleware(
		async (req: Request, res: Response): Promise<void> => {
			const query = req.query;
			const Level = Number(query.level);
			const { data, message, status } = await categoryServices.getCategoryProductByLevel(Level);

			res.status(status).send({ data, message });
		}
	);
	getCategoryProductByIDParent = asyncMiddleware(
		async (req: Request, res: Response): Promise<void> => {
			const query = req.query;
			const IDParent = Number(query.idparent);
			const { data, message, status } = await categoryServices.getCategoryProductByIDParent(
				IDParent
			);

			res.status(status).send({ data, message });
		}
	);
	getCategoryProductByIDParentwithSetLimit = asyncMiddleware(
		async (req: Request, res: Response): Promise<void> => {
			const query = req.query;
			const IDParent = Number(query.idparent);
			const Limit = Number(query.limit);
			const { data, message, status } =
				await categoryServices.getCategoryProductByIDParentwithSetLimit(IDParent, Limit);

			res.status(status).send({ data, message });
		}
	);
}
export const categoryController = new CategoryController();

