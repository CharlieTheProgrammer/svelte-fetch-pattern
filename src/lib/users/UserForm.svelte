{#if $selectedUser}
	<form class="space-y-8 divide-y divide-gray-200 text-left">
		<div class="space-y-8 divide-y divide-gray-200">
			<div>
				<div>
					<h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
					<p class="mt-1 text-sm text-gray-500">This information will be displayed publicly so be careful what you share.</p>
				</div>

				<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
					<div class="sm:col-span-4">
						<label for="username" class="block text-sm font-medium text-gray-700">Username</label>
						<div class="mt-1 flex rounded-md shadow-sm">
							<span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">workcation.com/</span>
							<input
								type="text"
								name="username"
								id="username"
								autocomplete="username"
								bind:value={$selectedUser.username}
								class="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
						{#if errors?.username}
							<p class="form-field-error">{errors.username}</p>
						{/if}
					</div>

					<div class="sm:col-span-6">
						<label for="about" class="block text-sm font-medium text-gray-700">About</label>
						<div class="mt-1">
							<textarea
								id="about"
								bind:value={$selectedUser.company.catchPhrase}
								name="about"
								rows="3"
								class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>

						<p class="mt-2 text-sm text-gray-500">Write a few sentences about yourself.</p>
					</div>
				</div>
			</div>

			<div class="pt-8">
				<div>
					<h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
					<p class="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
				</div>
				<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
					<div class="sm:col-span-4">
						<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
						<div class="mt-1">
							<input
								type="text"
								name="name"
								id="name"
								autocomplete="given-name"
								bind:value={$selectedUser.name}
								class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
						{#if errors?.name}
							<p class="form-field-error">{errors.name}</p>
						{/if}
					</div>

					<div class="sm:col-span-4">
						<label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
						<div class="mt-1">
							<input
								id="email"
								name="email"
								type="email"
								autocomplete="email"
								bind:value={$selectedUser.email}
								class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
						{#if errors?.email}
							<p class="form-field-error">{errors.email}</p>
						{/if}
					</div>

					<div class="sm:col-span-3">
						<label for="country" class="block text-sm font-medium text-gray-700">Country</label>
						<div class="mt-1">
							<select
								id="country"
								name="country"
								autocomplete="country-name"
								class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							>
								<option>United States</option>
								<option>Canada</option>
								<option>Mexico</option>
							</select>
						</div>
					</div>

					<div class="sm:col-span-6">
						<label for="street-address" class="block text-sm font-medium text-gray-700">Street address</label>
						<div class="mt-1">
							<input
								type="text"
								name="street-address"
								id="street-address"
								autocomplete="street-address"
								bind:value={$selectedUser.address.street}
								class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
					</div>

					<div class="sm:col-span-2">
						<label for="city" class="block text-sm font-medium text-gray-700">City</label>
						<div class="mt-1">
							<input
								type="text"
								name="city"
								id="city"
								autocomplete="address-level2"
								bind:value={$selectedUser.address.city}
								class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
					</div>

					<div class="sm:col-span-2">
						<label for="region" class="block text-sm font-medium text-gray-700">State / Province</label>
						<div class="mt-1">
							<input
								type="text"
								name="region"
								id="region"
								autocomplete="address-level1"
								class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
					</div>

					<div class="sm:col-span-2">
						<label for="postal-code" class="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
						<div class="mt-1">
							<input
								type="text"
								name="postal-code"
								id="postal-code"
								autocomplete="postal-code"
								bind:value={$selectedUser.address.zipcode}
								class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="pt-5">
			<div class="flex justify-end">
				<button
					type="button"
					class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					on:click={unselectUser}>Cancel</button
				>
				<button
					type="submit"
					class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					on:click|preventDefault={updateUser}>Save</button
				>
			</div>
		</div>
	</form>
{:else}
	<div class="bg-gray-50 w-100 p-10 rounded-lg my-20">
		<p class="my-5">Loading user....</p>
	</div>
{/if}


<script lang="ts">
	import { UsersService, UserValidationSchema } from '../Users.service';
	import { Utils } from '../../utils';
  import { selectedUser } from './Users.store';
  import { params, push } from 'svelte-spa-router';
  import { Routes } from '../routes';
  import { onMount } from 'svelte';

	let errors: any = null;

	function unselectUser() {
		selectedUser.set(null);
		push(Routes.UsersList());
	}

	onMount(async () => {
		// If selectedUser is null, we have to fetch the user using the route params
		if (!$selectedUser) {
			// Note: This seems to fire multiple times and will lead to errors unless data is checked.
			params.subscribe(async (data) => {
				if (data && data.userId)
					selectedUser.set(await UsersService.getUser(Number.parseInt(data.userId)))
			})
		}
	});

	async function updateUser() {
		errors = await validateForm();
		if (errors) return;
		await UsersService.editUser($selectedUser);
		push(Routes.UsersList());
		// Here is where a success snackbar could go.
	}

	async function validateForm() {
		return Utils.getErrors(UserValidationSchema, $selectedUser);
	}
</script>


<style>
	/* This doesn't belong here but it works! */
	p:global(.form-field-error) {
		@apply text-red-500 text-sm py-2;
	}
</style>