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
	searchProduct = async (
		search: string,
		sort: string,
		order: string,
		limit: number,
		offset: number,
		ordervalue: string,
		typeproduct?: string,
		price?: string,
		votes?: number
	) => {
		try {
			const products = await productsModel.searchProduct(
				search,
				sort,
				order,
				limit,
				offset,
				ordervalue,
				typeproduct,
				price,
				votes
			);
			if (products === null) {
				return {
					data: [],
					message: 'can not find products',
					status: 200,
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
	countSearchProduct = async (
		search: string,
		sort: string,
		typeproduct: string,
		price: string,
		votes: number
	) => {
		try {
			const products = await productsModel.countSearchProduct(
				search,
				sort,
				typeproduct,
				price,
				votes
			);
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
	productTrends = async (limit: number) => {
		try {
			const products = await productsModel.productTrends(limit);
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
	productRanking = async (IDCategory: number, limit: number) => {
		try {
			const products = await productsModel.productRanking(IDCategory, limit);
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
	favoriteList = async (IDUser: number) => {
		try {
			const products = await productsModel.favoriteProduct(IDUser);
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
