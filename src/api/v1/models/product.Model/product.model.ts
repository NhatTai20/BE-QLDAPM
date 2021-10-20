import {database} from '../../../../start/connectDB';
const TBL_PRODUCTS: string = 'products';

class ProductsModel{
    async all() {
      return database.load(`select * from ${TBL_PRODUCTS}`);
    }
}
export const productsModel = new ProductsModel(); 