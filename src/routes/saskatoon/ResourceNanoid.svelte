<script lang="ts">
	import generateNanoid from '$lib/nanoidGenerator';
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
			<p class="text-sm font-medium leading-none text-sea-green-900/70">
				{resource}
			</p>
			<button
				type="button"
				title="Regenerate Nano ID"
				aria-label="Regenerate
			Nano ID"
				class="mu mu-refresh mr-2.5 cursor-pointer text-xl
			text-sea-green-900/40 transition hover:text-sea-green-600"
				on:click={handleRegenerate}
			/>
		</div>
		<div
			class="group inline-flex w-fit items-center rounded-sm border
		border-dashed border-sea-green-400 bg-white p-2 shadow-sm"
		>
			{#key nanoid}
				<p in:flipboard class="font-mono font-light leading-none text-sea-green-900">
					{nanoid}
				</p>
			{/key}
			<CopyToClipboardButton {handleCopyToClipboard} />
		</div>
	</div>
</div>
