import { HTTP } from './Http.service';
import { number, object, string } from 'yup';

export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	company: Company;
}

export const UserValidationSchema = object({
	id: number(),
	name: string().required('Name is a required field.'),
	username: string().required('Username is a required field.'),
	email: string().required('Email is a required field.').email('Email is invalid.'),
	phone: string(),
	website: string().url('Website is invalid.'),
	// Not sure if there is a way to require this.
	// It appears Yup allows composition. Will check this out later.
	// address: Address;
	// company: Company;
});

interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
}

interface Company {
	name: string;
	catchPhrase: string;
	bs: string;
}

export enum UserType {
	Guest = 0,
	Admin = 1,
}

const fetchUsers = async () => {
	const res: Response = await HTTP.get('https://jsonplaceholder.typicode.com/users');

	if (!res.ok) {
		throw new Error(res.statusText || 'Whoops, something went wrong. Please try again.');
	} else {
		return res.json();
	}
};

const addUser = async (user: User): Promise<User> => {
	const res: Response = await HTTP.post('https://jsonplaceholder.typicode.com/users', user);

	if (!res.ok) {
		throw new Error(res.statusText || 'Whoops, something went wrong. Please try again.');
	} else {
		return res.json() as Promise<User>;
	}
};

const editUser = async (user: User): Promise<User> => {
	const res: Response = await HTTP.put('https://jsonplaceholder.typicode.com/users/' + user.id, user);

	if (!res.ok) {
		throw new Error(res.statusText || 'Whoops, something went wrong. Please try again.');
	} else {
		return res.json() as Promise<User>;
	}
};

const Users = {
	fetchUsers,
	addUser,
	editUser
};

export { Users };
