import { categoryModel } from '../models/category.Model/category.model';

class CategoryServices {
	getCategoryProductByLevel = async (Level: number) => {
		try {
			const categories = await categoryModel.getCategoryProductByLevel(Level);
			if (categories === null) {
				return {
					data: null,
					message: 'can not find categories',
					status: 400,
				};
			}
			return {
				data: categories,
				message: 'Success',
				status: 200,
			};
		} catch (error: any) {
			throw new Error(error.messages);
		}
	};
	getCategoryProductByIDParentwithSetLimit = async (IDParent: number, limit: number) => {
		try {
			const categories = await categoryModel.getCategoryProductByIDParentwithSetLimit(
				IDParent,
				limit
			);
			if (categories === null) {
				return {
					data: null,
					message: 'can not find categories',
					status: 400,
				};
			}
			return {
				data: categories,
				message: 'Success',
				status: 200,
			};
		} catch (error: any) {
			throw new Error(error.messages);
		}
	};
    getCategoryProductByIDParent = async (IDParent: number) => {
		try {
			const categories = await categoryModel.getCategoryProductByIDParent(IDParent)
			if (categories === null) {
				return {
					data: null,
					message: 'can not find categories',
					status: 400,
				};
			}
			return {
				data: categories,
				message: 'Success',
				status: 200,
			};
		} catch (error: any) {
			throw new Error(error.messages);
		}
	};
}
export const categoryServices = new CategoryServices()