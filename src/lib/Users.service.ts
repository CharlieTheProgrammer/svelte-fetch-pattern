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
	// website: string().url('Website is invalid.'),
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

const getUsers = async () => {
	const res: Response = await HTTP.get('https://jsonplaceholder.typicode.com/users');

	if (!res.ok) {
		throw new Error(res.statusText || 'Whoops, something went wrong. Please try again.');
	} else {
		return res.json();
	}
};

const getUser = async (userId: number) => {
	const res: Response = await HTTP.get('https://jsonplaceholder.typicode.com/users/' + userId);

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

const UsersService = {
	getUsers,
	addUser,
	editUser,
	getUser
};

export { UsersService };


/**
 * I need to come up with a nice strategy for dealing with passing objects between
 * page changes.
 * 
 * The most naive way is simply to query data on page load. This works, but defeats 
 * the purpose of a SPA. 
 * 
 * The other way involves using stores. However, I'm not sure where to put these 
 * in a way that makes the most sense.
 * 
 * Consider this, we have a list of users and on click, we want to be taken to a 
 * user edit page. Assume the user list already has all the data.
 * 
 * I can have a store that sets the selected user right before the navigation. But,
 * where to put this file?
 * 
 * Also, will it scale nicely, ie what if I have to create additional related stores?
 * 
 * I can think of two levels of stores.
 * 
 * Stores to handle functionality within a component and it's siblings or children.
 * 
 * Stores to maintain state between page changes.
 * 
 * The services file contains methods that will likely be reshared across related components,
 * but in thinking of stores, these are normally tightly coupled to the UI to maintain state.
 * It doesn't seem appropriate to place stores in the same place as services.
 * 
 * So, I come up with a new file. Users.store.ts
 * What happens when more and more components keep using the same store?
 * I thin
 */