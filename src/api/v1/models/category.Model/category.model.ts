import { TBL_CATEGORYPRODUCT } from '../../../../constants/tables';
import { database } from '../../../../start/connectDB';


class CategoryModel {
	async getCategoryProductByLevel(Level: number) {
		const rows = await database.load(`select * from ${TBL_CATEGORYPRODUCT} where Level = ${Level}`);
		if (rows.length === 0 ) return null;

		return rows;
	}
    async getCategoryProductByIDParentwithSetLimit(IDParent: number, limit: number){
        const rows = await database.load(`select * from ${TBL_CATEGORYPRODUCT} where IDParent = ${IDParent} limit ${limit}`);
		if (rows.length === 0) return null;

		return rows;
    }
    async getCategoryProductByIDParent(IDParent: number){
        const rows = await database.load(`select * from ${TBL_CATEGORYPRODUCT} where IDParent = ${IDParent}`);
		if (rows.length === 0) return null;

		return rows;
    }
}
export const categoryModel = new CategoryModel();