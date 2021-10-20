import {productsModel} from '../models/product.Model/product.model';
class ProductService {
	getAll = async () => {
		return productsModel.all();
	};
}

export const productService = new ProductService();
