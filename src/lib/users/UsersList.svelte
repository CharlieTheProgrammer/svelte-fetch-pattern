<script lang="ts">
	import { onMount } from 'svelte';
	import { UsersService, type User } from '../Users.service';
  import { selectedUser } from './Users.store';
	import {push} from 'svelte-spa-router';
  import { Routes } from '../routes';

	let users: User[] = [];

	function selectUser(user: User) {
		selectedUser.set(user);
		push(Routes.UserForm(user.id));
	}

	let isLoading: boolean = false;
	let errorMsg: string = '';

	onMount(async () => {
		try {
			isLoading = true;
			users = await UsersService.getUsers();
			isLoading = false;
		} catch (error) {
			isLoading = false;
			errorMsg = error.message;
		}
	});

	/**
	 * There is a 3rd option for this using something called Svelte Query.
	 * This library is used for fetching data, but it's on steroids.
	 * It also, caches, synchronizes, updates server state, and much more.
	 *
	 * It's super handy because those features are all things an app needs and if
	 * it wasn't there, I'd have to manually create something like it.
	 */
</script>

<div>
	<h1 class="text-red-500 text-4xl">Hello World!</h1>

	<!-- 
    This block directly uses the fetch function to handle loading and errors.
	  One advantage is that it doesn't need the onMount logic or variables to be declared in ScriptProcessorNode.
	  But, a disadvantage is that this is starting to look like PHP. 
    While it's nice for super simple components. I can see this getting out of hand for complex components.
    Also, this doesn't support TS! I can't type users or user below. 
  -->
	<!-- {#await Users.getUsers()}
		<p>Loading...</p>
	{:then users}
		<ul>
			{#each users as user}
				<li>{user.name} (@{user.username})</li>
			{/each}
		</ul>
	{:catch error}
		<p>{error.message}</p>
	{/await} -->

	{#if isLoading}
		<p>Users are being fetched....</p>
	{:else if errorMsg}
		<p>{errorMsg}</p>
	{:else if users.length === 0}
		<p>No users found.</p>
	{:else}
		<ul class="space-y-3">
			{#each users as user}
				<li>
          <!-- How do I navigate from here to another page? Also, what happens to the data? -->
					<button on:click={(_) => selectUser(user)}>
						{user.name} (@{user.username})
					</button>
			</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
</style>
