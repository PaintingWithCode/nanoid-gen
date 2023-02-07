<script lang="ts">
	import 'microns/fonts/microns.css';

	import { GithubTriangle } from './(header)';
	import '../app.css';
</script>

<div class="h-full min-h-screen w-screen bg-sea-green-100">
	<header class="flex flex-row items-center justify-end space-x-4">
		<GithubTriangle />
	</header>
	<main class="mx-auto max-w-2xl px-4 pb-8">
		<h1
			class="mb-6 bg-gradient-to-br from-sea-green-700 to-sea-green-900 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent"
		>
			Nano ID Generator
		</h1>
		<slot />
	</main>
</div>
