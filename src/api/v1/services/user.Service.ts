import { userModel } from '../models/user.Model/user.model';

class UserService {
	//--------------------------------------------GET------------------------------------------
	getUserByEmail = async (Email: string) => {
		try {
			const user = await userModel.getUserByEmail(Email);

			if (user === null) {
				return null;
			}

			return user;
		} catch (error: any) {
			throw new Error(error.messages);
		}
	};

	getPassword = async (Email: string) => {
		try {
			const user = await userModel.getPassword(Email);

			if (user === null) {
				return null;
			}

			return user;
		} catch (error: any) {
			throw new Error(error.messages);
		}
	};

	registerUser = async (User: any) => {
		try {
			const user = await userModel.getUserByEmail(User.Email);

			if (user) {
				return {
					data: false,
					message: 'Account already exists',
					status: 200,
				};
			}

			userModel.registerUser(User);

			return {
				data: true,
				message: 'Register User Success',
				status: 200,
			};
		} catch (error: any) {
			throw new Error(error.messages);
		}
	};

	editUser = async (User: Object, IDUser: number) => {
		try {
			userModel.editUser(User, IDUser);

			return {
				data: true,
				message: 'edit successfully',
				status: 200,
			};
		} catch (error: any) {
			throw new Error(error.messages);
		}
	};

	createOTP = async (otp: Object, Email: string) => {
		try {
			const user = await userModel.getUserByEmail(Email);

			if (user) {
				return {
					data: false,
					message: 'Account already exists',
					status: 200,
				};
			}

			userModel.addOTP(otp, Email);

			return {
				data: true,
				message: 'Success',
				status: 200,
			};
		} catch (error: any) {
			throw new Error(error.messages);
		}
	};
}

export const userService = new UserService();
