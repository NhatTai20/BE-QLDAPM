import { TBL_BOOKS, TBL_ITEMS, TBL_PRODUCTS } from '../../../../constants/tables';
import { database } from '../../../../start/connectDB';

class ProductsModel {
	// lay tat ca san pham
	async all() {
		return database.load(`select * from ${TBL_PRODUCTS}`);
	}
	async getProductsByIDCategoryWithSetLimit(IDCategory: number, limit: number) {
		const rows = await database.load(
			`select * from ${TBL_PRODUCTS} where IDCategory = ${IDCategory} limit ${limit}`
		);

		if (rows.length === 0) return null;

		return rows;
	}
	async getAllProductsByIDCategory(IDCategory: number) {
		const rows = await database.load(
			`select * from ${TBL_PRODUCTS} where IDCategory = ${IDCategory}`
		);
		if (rows.length === 0) return null;

		return rows;
	}
	// chi tiet san pham theo id
	async getProductByIDProduct(IDProduct: string) {
		const rows = await database.load(
			`select * from ${TBL_PRODUCTS} where IDProduct = '${IDProduct}'`
		);
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
	async searchProduct(search: string, sort: string, order: string, limit: number, offset: number) {
		let sql: string = ``;
		switch (sort) {
			case 'Bán Chạy Tuần':
				break;
			case 'Bán Chạy Tháng':
				break;
			case 'Bán Chạy Năm':
				break;
			case 'Nổi Bật Tuần':
				break;
			case 'Nổi Bật Tháng':
				break;
			case 'Nổi Bật Năm':
				break;
			case 'Chiết Khấu':
				break;
			case 'Giá Bán':
				break;
			case 'Mới Nhất':
				break;
			default:
				sql = `select *
                    from (
                    select * 
                    from ${TBL_PRODUCTS}
                    where 
                    match(NameProduct)
					against('${search}')
                    ${order}
                    limit ${limit}
                    offset ${offset}
                   ) as p
                   `;
				break;
		}

		const rows = await database.load(sql);
		if (rows.length === 0) return null;

		return rows;
	}
	// phan trang
	async countSearchProduct(search: string, sort: string) {
		let sql: string = ``;
		switch (sort) {
			case 'Bán Chạy Tuần':
				break;
			case 'Bán Chạy Tháng':
				break;
			case 'Bán Chạy Năm':
				break;
			case 'Nổi Bật Tuần':
				break;
			case 'Nổi Bật Tháng':
				break;
			case 'Nổi Bật Năm':
				break;
			case 'Chiết Khấu':
				break;
			case 'Giá Bán':
				break;
			case 'Mới Nhất':
				break;
			default:
				sql = `select *
                    from (
                    select * 
                    from ${TBL_PRODUCTS}
                    where 
                    match(NameProduct)
					against('${search}')
                   ) as p
                   `;
				break;
		}
		const rows = await database.load(sql);
		if (rows.length === 0) return null;

		return rows.length;
	}
	async productTrends(limit: number) {
		const rows = await database.load(
			`select * from ${TBL_PRODUCTS}
			order by View desc 
			limit ${limit}`
		);

		if (rows.length === 0) return null;

		return rows;
	}
	async productRanking(IDCategory: number, limit: number) {
		const rows = await database.load(
			`select * from ${TBL_PRODUCTS}
			where IDCategory = ${IDCategory}
			order by Votes desc 
			limit ${limit}`
		);

		if (rows.length === 0) return null;

		return rows;
	}
}
export const productsModel = new ProductsModel();

