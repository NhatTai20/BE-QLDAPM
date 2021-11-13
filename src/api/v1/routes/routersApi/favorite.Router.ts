// 3rd dependencies
import { Router, Request, Response } from 'express';
const favoriteRouter = Router();

// Middleware

// Controller
import { favoritesController } from '../../controllers/favorite.Controller';

//-------------------------------------------- api/favorite/... -------------------------------

favoriteRouter.get('/add-to-favorite', favoritesController.addItemToFavorite);

export = favoriteRouter;
