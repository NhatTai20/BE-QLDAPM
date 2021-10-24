import { TBL_BOOKS, TBL_ITEMS, TBL_PRODUCTS } from '../../../../constants/tables';
import { database } from '../../../../start/connectDB';

class ProductsModel {
	async all() {
		return database.load(`select * from ${TBL_PRODUCTS}`);
	}
	async getProductsByIDCategoryWithSetLimit(IDCategory: number,limit: number) {
		const rows = await database.load(
			`select * from ${TBL_PRODUCTS} where IDCategory = ${IDCategory} limit ${limit}`
		);
	
		if (rows.length === 0) return null;

		return rows;
	}
	async getAllProductsByIDCategory(IDCategory: number) {
		const rows = await database.load(`select * from ${TBL_PRODUCTS} where IDCategory = ${IDCategory}`);
		if (rows.length === 0) return null;

		return rows;
	}
	async getProductByIDProduct(IDProduct: string) {
		const rows = await database.load(`select * from ${TBL_PRODUCTS} where IDProduct = '${IDProduct}'`);
		if (rows.length === 0) {
			return null;
		} else {
			let data: object;
			if (rows[0].TypeProduct === 'Book') {
				data = database.load(
					`select * from ${TBL_PRODUCTS} pd join ${TBL_BOOKS} bk on pd.IDProduct = bk.IDProduct where pd.IDProduct = '${IDProduct}'`
				);
			} else {
        data = database.load(
					`select * from ${TBL_PRODUCTS} pd join ${TBL_ITEMS} bk on pd.IDProduct = bk.IDProduct where pd.IDProduct = '${IDProduct}'`
				);
			}
      return data;
		}
	}
}
export const productsModel = new ProductsModel();
