// dependencies
import { Request, Response } from 'express';
import path from 'path';
import { asyncMiddleware } from '../middlewares/async.Middleware';

// services
import { favoritesServices } from '../services/favorite.Service';

class favoriteController {
	addItemToFavorite = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
		const IDProduct = '1';
		const IDUser = 1;
		const { data, message, status } = await favoritesServices.addItemToFavorite(IDProduct, IDUser);
		const Path = process.env.PATH_API;
		res.status(status).send({ data, message, Path });
	});
}

export const favoritesController = new favoriteController();
