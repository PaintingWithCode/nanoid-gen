<script lang="ts">
	import theme from '$lib/stores/theme';
	import { GithubTriangle, ThemeToggle } from './(header)';
	import '../app.css';
</script>

<div id="content" class:dark={$theme === 'dark'}>
	<div class="h-full min-h-screen w-screen bg-sea-green-50 dark:bg-celtic-900">
		<header class="flex flex-row items-center justify-end space-x-4">
			<ThemeToggle />
			<GithubTriangle />
		</header>
		<main class="mx-auto max-w-2xl px-4 pb-8">
			<h1
				class="mb-6 text-4xl font-extrabold tracking-tight text-sea-green-700 dark:text-celtic-100"
			>
				Nano ID Generator
			</h1>
			<slot />
		</main>
	</div>
</div>
