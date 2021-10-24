// 3rd dependencies
import { Router, Request, Response } from 'express';
const productsRouter = Router();

// Middleware

// Controller
import { productsController } from '../../controllers/products.Controller';


//-------------------------------------------- api/products/... -------------------------------

//--------------------------------------------GET------------------------------------------
productsRouter.get('/all', productsController.getAllProduct);
productsRouter.get('/idcategory-limit', productsController.getProductsByIDCategoryWithSetLimit);
productsRouter.get('/idcategory', productsController.getAllProductsByIDCategory);
productsRouter.get('/idproduct', productsController.getProductByIDProduct);

//--------------------------------------------POST-----------------------------------------

//--------------------------------------------PUT------------------------------------------

//--------------------------------------------DELETE----------------------------------------

export = productsRouter;
