// 3rd dependencies
import { Router, Request, Response } from 'express';

const categoryRouter = Router();

// Middleware

// Controller
import { categoryController } from '../../controllers/category.Controller';


//-------------------------------------------- api/category/... -------------------------------

//--------------------------------------------GET------------------------------------------
categoryRouter.get('/level', categoryController.getCategoryProductByLevel);
categoryRouter.get('/idparent', categoryController.getCategoryProductByIDParent);
categoryRouter.get('/idparent-limit', categoryController.getCategoryProductByIDParentwithSetLimit);
//--------------------------------------------POST-----------------------------------------

//--------------------------------------------PUT------------------------------------------

//--------------------------------------------DELETE----------------------------------------

export = categoryRouter;