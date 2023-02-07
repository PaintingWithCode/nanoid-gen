<script lang="ts">
	import { alphabet } from '$lib/stores';
	export let nanoid: string;

	let lastTransitionTime = 0;
	function flipboard(node: HTMLElement) {
		const randomChars = $alphabet;

		return {
			duration: 800,
			tick(t: number) {
				if (t === 1) {
					node.textContent = nanoid;
					return;
				}

				const time = Date.now();
				if (time - lastTransitionTime < 64) return;
				lastTransitionTime = time;

				let displayedStr = '';

				for (let i = 0; i < nanoid.length; i++) {
					const progress = i / nanoid.length;

					if (progress < t * 0.8) {
						displayedStr += nanoid[i];
					} else if (progress < t * 1.6) {
						displayedStr += randomChars[Math.floor(Math.random() * randomChars.length)];
					} else {
						displayedStr += '*';
					}
				}

				node.textContent = displayedStr;
			}
		};
	}
</script>

{#key nanoid}
	<p in:flipboard class="font-mono leading-tight text-sea-green-900">
		{nanoid}
	</p>
{/key}
