<script lang="ts">
	import { GithubTriangle } from './(header)';
	import '../app.css';
</script>

<div class="h-full min-h-screen w-screen bg-sea-green-50">
	<header class="flex flex-row items-center justify-end space-x-4">
		<GithubTriangle />
	</header>
	<main class="mx-auto max-w-2xl px-4 pb-8">
		<h1 class="mb-6 text-4xl font-extrabold tracking-tight text-sea-green-700">
			Nano ID Generator
		</h1>
		<slot />
	</main>
</div>
