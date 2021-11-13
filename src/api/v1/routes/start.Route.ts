import { Express } from 'express';
import categoryRouter from './routersApi/category.Router';
import productsRouter from './routersApi/products.Router';
import userRouter from './routersApi/user.Router';


export function routersApi (app: Express): void {
	app.use('/api/products', productsRouter);
	app.use('/api/category', categoryRouter);
	app.use('/api/user', userRouter)


}
