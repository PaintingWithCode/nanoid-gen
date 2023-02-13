<script lang="ts">
	import generateNanoid from '$lib/core/nanoidGenerator';
	import { alphabet, amount, length, prefix } from '$lib/stores';

	import Nanoid from './Nanoid.svelte';
	import CopyToClipboardButton from '$lib/components/CopyToClipboardButton.svelte';

	let nanoids: string[] = [];

	export function generate() {
		nanoids = [...Array($amount)].map(() =>
			generateNanoid({ prefix: $prefix, alphabet: $alphabet, length: $length })
		);
	}

	function handleCopyToClipboard() {
		let content = '';

		for (let i = 0; i < nanoids.length; i++) {
			if (i !== nanoids.length - 1) {
				content += nanoids[i] + '\n';
			} else {
				content += nanoids[i];
			}
		}
		navigator.clipboard.writeText(content);
	}
</script>

{#if nanoids.length > 0}
	<div
		class="flex flex-row items-start justify-between rounded-sm border
		border-dashed border-sea-green-400 bg-white p-2 shadow-sm"
	>
		<div class="mt-1">
			{#each nanoids as nanoid}
				<Nanoid {nanoid} />
			{/each}
		</div>
		<CopyToClipboardButton {handleCopyToClipboard} />
	</div>
{/if}
