// dependencies
import {  Request, Response, NextFunction } from 'express';

// Interfaces

// Middlewares
import { asyncMiddleware } from '../middlewares/async.Middleware';

// services
import { productService } from '../services/product.Service';

// validations

class ProductsController {
	//-----------------------------------GET----------------------------------
	home = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
		// Website you wish to allow to connect
		// res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

		// // Request methods you wish to allow
		// res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

		// // Request headers you wish to allow
		// res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

		// // Set to true if you need the website to include cookies in the requests sent
		// // to the API (e.g. in case you use sessions)
		// res.setHeader('Access-Control-Allow-Credentials', 'true');

		
		const data = await productService.getAll();
		res.send(data);
	});
}

export const productsController = new ProductsController();
