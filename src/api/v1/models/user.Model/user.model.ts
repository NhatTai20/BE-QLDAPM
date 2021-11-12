import { TBL_USER, TBL_OTP } from '../../../../constants/tables';
import { database } from '../../../../start/connectDB';

class UserModel {
	// Get Data
	async getUserByPhoneNumber(PhoneNumber: string) {
		const rows = await database.load(
			`select * from ${TBL_USER} where PhoneNumber = "${PhoneNumber}"`
		);

		if (rows.length === 0) return null;

		return rows[0];
	}

	async getUserByEmail(Email: string) {
		const rows = await database.load(
			`select IDUser, FirstName, LastName, Email, DateOfBirth, Gender, TypeOfUser, Active from ${TBL_USER} where Email = "${Email}"`
		);

		if (rows.length === 0) return null;

		return rows[0];
	}

	async getPassword(Email: string) {
		const rows = await database.load(`select Password from ${TBL_USER} where Email = "${Email}"`);

		if (rows.length === 0) return null;

		return rows[0];
	}

	// Add Data
	registerUser(user: any) {
		return database.add(user, TBL_USER);
	}

	async addOTP(otp: Object, Email: string) {
		const rows = await database.load(`select * from ${TBL_OTP} where Email = "${Email}"`);

		if (rows.length != 0) {
			database.del({ Email }, TBL_OTP);
		}

		return database.add(otp, TBL_OTP);
	}

	// Edit Date
	editUser(User: Object, IDUser: number) {
		return database.patch(User, IDUser, TBL_USER);
	}

	// Delete Data
}

export const userModel = new UserModel();
