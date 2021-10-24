import { Express } from 'express';
import categoryRouter from './routersApi/category.Router';
import productsRouter from './routersApi/products.Router';



export function routersApi (app: Express): void {
	
	app.use('/api/products', productsRouter);
	app.use('/api/category', categoryRouter);
}
