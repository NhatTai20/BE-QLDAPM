import { TBL_FAVORITE } from '../../../../constants/tables';
import { database } from '../../../../start/connectDB';

class FavoriteModel {
	async addItemToFavorite(IDProduct: string, IDUser: number) {
		const newData = { IDUser, IDProduct };
		await database.add(newData, TBL_FAVORITE);
		return '';
	}
}
export const favoriteModel = new FavoriteModel();
