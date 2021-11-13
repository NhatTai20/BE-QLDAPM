// dependencies
import { Request, Response } from 'express';
import path from 'path';


// Interfaces

// Middlewares
import { asyncMiddleware } from '../middlewares/async.Middleware';
import { search } from '../routes/routersApi/category.Router';


// services
import { productService } from '../services/product.Service';

class ProductsController {
	//-----------------------------------GET----------------------------------
	getAllProduct = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
		const { data, message, status } = await productService.getAll();
		const Path = process.env.PATH_API;
		res.status(status).send({ data, message, Path });
	});
	getProductsByIDCategoryWithSetLimit = asyncMiddleware(
		async (req: Request, res: Response): Promise<void> => {
			const query = req.query;
			const IDCategory = Number(query.IDCategory);
			const Limit = Number(query.limit);
			const Path = process.env.PATH_API;
			const { data, message, status } = await productService.getProductsByIDCategoryWithSetLimit(
				IDCategory,
				Limit
			);

			res.status(status).send({ data, message, Path });
		}
	);
	getAllProductsByIDCategory = asyncMiddleware(
		async (req: Request, res: Response): Promise<void> => {
			const query = req.query;
			const IDCategory = Number(query.IDCategory);
			const Path = process.env.PATH_API;
			const { data, message, status } = await productService.getAllProductsByIDCategory(IDCategory);

			res.status(status).send({ data, message, Path });
		}
	);
	getProductByIDProduct = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
		const query = req.query;
		const IDProduct = String(query.IDProduct);
		const Path = process.env.PATH_API;
		const { data, message, status } = await productService.getProductByIDProduct(IDProduct);

		res.status(status).send({ data, message, Path });
	});
	searchProduct = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
		const query = req.query;
		const Search = String(query.search || '');
		const Sort = String(query.sort || '');
		const Order = String('Price');
		const OrderValue = String(query.orderby || 'ASC');
		const Limit = Number(query.limit || 48);
		const Page = Number(query.page || 0);
		const Offset = Page * Limit;
		const Path = process.env.PATH_API;

		const TypeProduct =
			String(query.typeproduct || '') === 'Sách, vở'
				? 'Book'
				: String(query.typeproduct || '') === 'Dụng cụ học tập'
				? 'Item'
				: '';
		const Price = String(query.price || '');
		const Votes = parseInt(String(query.votes || ''));

		const { data, message, status } = await productService.searchProduct(
			Search,
			Sort,
			Order,
			Limit,
			Offset,
			OrderValue,
			TypeProduct,
			Price,
			Votes
		);

		res.status(status).send({ data, message, Path });
	});
	countSearchProduct = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
		const query = req.query;
		const Search = String(query.search) || '';
		const Sort = String(query.sort) || '';
		const TypeProduct =
			String(query.typeproduct || '') === 'Sách, vở'
				? 'Book'
				: String(query.typeproduct || '') === 'Dụng cụ học tập'
				? 'Item'
				: '';
		const Price = String(query.price || '');
		const Votes = parseInt(String(query.votes || ''));

		const Path = process.env.PATH_API;
		const { data, message, status } = await productService.countSearchProduct(
			Search,
			Sort,
			TypeProduct,
			Price,
			Votes
		);

		res.status(status).send({ data, message, Path });
	});
	productTrends = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
		const query = req.query;
		const Limit = Number(query.limit) || 10;
		const { data, message, status } = await productService.productTrends(Limit);
		const Path = process.env.PATH_API;
		res.status(status).send({ data, message, Path });
	});
	productRanking = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
		const query = req.query;

		const IDCategory = Number(query.IDCategory);
		const Limit = Number(query.limit) || 5;
		const { data, message, status } = await productService.productRanking(IDCategory, Limit);
		const Path = process.env.PATH_API;
		res.status(status).send({ data, message, Path });
	});

	favoriteList = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
		const { data, message, status } = await productService.favoriteList(1);
		const Path = process.env.PATH_API;
		res.status(status).send({ data, message, Path });
	});
}
export const productsController = new ProductsController();
