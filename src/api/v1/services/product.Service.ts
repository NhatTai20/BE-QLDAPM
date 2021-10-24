import { productsModel } from '../models/product.Model/product.model';
class ProductService {
	getAll = async () => {
		try {
			const products = await productsModel.all();
			if (products === null) {
				return {
					data: null,
					message: 'can not find products',
					status: 400,
				};
			}
			return {
				data: products,
				message: 'Success',
				status: 200,
			};
		} catch (error: any) {
			throw new Error(error.messages);
		}
	};
	getProductsByIDCategoryWithSetLimit = async (IDCategory: number, limit: number) => {
		try {
			const products = await productsModel.getProductsByIDCategoryWithSetLimit(IDCategory, limit);
			
			if (products === null) {
				return {
					data: null,
					message: 'can not find products',
					status: 400,
				};
			}
			return {
				data: products,
				message: 'Success',
				status: 200,
			};
		} catch (error: any) {
			throw new Error(error.messages);
		}
	};
	getAllProductsByIDCategory = async (IDCategory: number) => {
		try {
			const products = await productsModel.getAllProductsByIDCategory(IDCategory);
			if (products === null) {
				return {
					data: null,
					message: 'can not find products',
					status: 400,
				};
			}
			return {
				data: products,
				message: 'Success',
				status: 200,
			};
		} catch (error: any) {
			throw new Error(error.messages);
		}
	};
	getProductByIDProduct = async (IDProduct: string) => {
		try {
			const products = await productsModel.getProductByIDProduct(IDProduct);
			if (products === null) {
				return {
					data: null,
					message: 'can not find products',
					status: 400,
				};
			}
			return {
				data: products,
				message: 'Success',
				status: 200,
			};
		} catch (error: any) {
			throw new Error(error.messages);
		}
	};
}

export const productService = new ProductService();
