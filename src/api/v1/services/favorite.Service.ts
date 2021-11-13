import { favoriteModel } from '../models/favorite.Model/favorite.model';

class favoriteServices {
	addItemToFavorite = async (IDProduct: string, IDUser: number) => {
		try {
			const result = await favoriteModel.addItemToFavorite(IDProduct, IDUser);
			return {
				data: result,
				message: 'Success',
				status: 200,
			};
		} catch (error: any) {
			throw new Error(error.messages);
		}
	};
}
export const favoritesServices = new favoriteServices();
