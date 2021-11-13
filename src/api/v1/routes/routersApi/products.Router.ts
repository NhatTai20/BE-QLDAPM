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
productsRouter.get('/search', productsController.searchProduct);
productsRouter.get('/count-search', productsController.countSearchProduct);
productsRouter.get('/trend', productsController.productTrends);
productsRouter.get('/rank', productsController.productRanking);



//--------------------------------------------POST-----------------------------------------

//--------------------------------------------PUT------------------------------------------

//--------------------------------------------DELETE----------------------------------------

export = productsRouter;
