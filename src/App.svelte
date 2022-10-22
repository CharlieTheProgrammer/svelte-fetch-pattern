<script lang="ts">
	import Router from 'svelte-spa-router';
  import { routes } from './lib/routes';
</script>

<main class="main">
	<Router {routes}/>
</main>

<style>
	.main {
		text-align: center;
	}
</style>
