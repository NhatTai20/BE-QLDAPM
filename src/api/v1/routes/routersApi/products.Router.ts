// 3rd dependencies
import { Router, Request, Response } from 'express';
const productsRouter = Router();

// Middleware

// Controller
import { productsController } from '../../controllers/products.Controller';

//-------------------------------------------- api/products/... -------------------------------

//--------------------------------------------GET------------------------------------------
productsRouter.get('/', productsController.home);
//--------------------------------------------POST-----------------------------------------

//--------------------------------------------PUT------------------------------------------

//--------------------------------------------DELETE----------------------------------------

export = productsRouter;
