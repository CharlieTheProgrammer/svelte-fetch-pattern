import UserForm from './users/UserForm.svelte';
import UsersList from './users/UsersList.svelte';

// I'm trying to avoid using magic strings all over the code for routes.
// For now, I'll create functions to generate these URLs.
// Passing in 0's to return defautl full route. These will only be used in this file.

export const Routes = {
	UserForm: (userId: number) => {
		// Pass in zero to return default route paths
		if (!userId) return '/edit-user/:userId';
		return '/edit-user/' + userId;
	},
	UsersList: () => {
		return '/';
	},
};

export const routes = {
	// Exact path
	[Routes.UsersList()]: UsersList,
	// Using 0 to return default path
	[Routes.UserForm(0)]: UserForm,

	// Using named parameters, with last being optional
	// '/author/:first/:last?': Author,

	// Wildcard parameter
	// '/book/*': Book,

	// Catch-all
	// This is optional, but if present it must be the last
	// '*': NotFound,
};
