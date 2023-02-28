<script lang="ts">
	import generateNanoid from '$lib/core/nanoidGenerator';
	import { DEFAULT_ALPHABET } from '$lib/constants';
	import CopyToClipboardButton from '$lib/components/CopyToClipboardButton.svelte';

	export let resource: string;
	export let prefix: string;

	const NANOID_OPTIONS = { length: 12, prefix: `${prefix}_` };
	let nanoid = generateNanoid(NANOID_OPTIONS);

	function handleRegenerate() {
		nanoid = generateNanoid(NANOID_OPTIONS);
	}

	let lastTransitionTime = 0;
	function flipboard(node: HTMLElement) {
		const randomChars = DEFAULT_ALPHABET;

		const text = node.textContent;
		const prefix = text?.slice(0, 4) ?? '';
		const id = text?.slice(4) ?? '';

		return {
			duration: 800,
			tick(t: number) {
				if (t === 1) {
					node.textContent = text;
					return;
				}

				const time = Date.now();
				if (time - lastTransitionTime < 64) return;
				lastTransitionTime = time;

				let displayedStr = prefix;

				for (let i = 0; i < id.length; i++) {
					const progress = i / id.length;

					if (progress < t * 0.8) {
						displayedStr += id[i];
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

	function handleCopyToClipboard() {
		navigator.clipboard.writeText(nanoid);
	}
</script>

<div class="flex basis-1/2 flex-col">
	<div class="w-fit">
		<div class="flex flex-row items-center justify-between leading-none">
			<h4
				class="text-sm font-medium leading-none text-sea-green-900/70
			dark:text-celtic-100/70"
			>
				{resource}
			</h4>
			<button
				type="button"
				title="Regenerate Nano ID"
				aria-label="Regenerate
			Nano ID"
				class="mr-2.5 cursor-pointer text-sea-green-900/40
			hover:text-sea-green-600 dark:text-celtic-50/80
			dark:hover:text-celtic-400"
				on:click={handleRegenerate}
			>
				<svg
					width="18.5"
					height="28"
					fill="currentColor"
					viewBox="0 0 440 480"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M220 220l100-90-100-90 0 70q-64 1-106 43-42 42-44 107 2 64 44 106 42 42 106 44 65-2 107-44 42-42 43-106l0-20-40 0 0 20q-1 48-32 78-30 31-78 32-48-1-78-32-31-30-32-78 1-48 32-78 30-31 78-32l0 70z"
					/>
				</svg>
			</button>
		</div>
		<div
			class="group inline-flex w-fit items-center rounded-sm border
		border-dashed border-sea-green-400 bg-white p-2 shadow-sm
		dark:border-celtic-300 dark:bg-celtic-700/80"
		>
			{#key nanoid}
				<p
					in:flipboard
					class="font-mono font-light leading-none
				text-sea-green-900 dark:text-celtic-50"
				>
					{nanoid}
				</p>
			{/key}
			<CopyToClipboardButton {handleCopyToClipboard} />
		</div>
	</div>
</div>
