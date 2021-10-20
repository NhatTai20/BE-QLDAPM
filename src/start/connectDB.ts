import mysql from 'mysql';
import config from '../config/config';
import util from 'util';

const pool = mysql.createPool({
	host: config.mysql.host,
	port: 3306,
	user: config.mysql.user,
	password: config.mysql.pass,
	database: config.mysql.database,
	connectionLimit: 50,
});

const pool_query = util.promisify(pool.query).bind(pool);

class Database{
	load(sql: string):any {
		return pool_query(sql)
	}
	
}
export const database = new Database();
