import { Express } from 'express';


import productsRouter from './routersApi/products.Router';

export function routersApi (app: Express): void {
	
	app.use('/', productsRouter);
}
