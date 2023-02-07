<script lang="ts">
	import { createPopperActions } from 'svelte-popperjs';
	import { fade } from 'svelte/transition';

	export let handleCopyToClipboard: () => void;

	let showTooltip = false;
	let tooltipContent = 'Copy to clipboard';

	const [popperRef, popperContent] = createPopperActions({
		placement: 'bottom-end',
		strategy: 'absolute',
		modifiers: [{ name: 'offset', options: { offset: [0, 4] } }]
	});

	function handleClick() {
		handleCopyToClipboard();
		tooltipContent = 'Copied';
	}

	function handleMouseEnter() {
		showTooltip = true;
	}

	function handleMouseLeave() {
		showTooltip = false;
		tooltipContent = 'Copy to clipboard';
	}
</script>

<button
	type="button"
	class="mu mu-copy tooltip-entering tooltip-leaving ml-4 cursor-pointer text-xl text-sea-green-900/40 transition
	hover:text-sea-green-600"
	use:popperRef
	on:click={handleClick}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
/>

{#if showTooltip}
	<div
		id="tooltip"
		use:popperContent
		transition:fade={{ duration: 150 }}
		class="rounded-sm bg-sea-green-200 px-2 py-1 text-sm text-sea-green-900"
	>
		{tooltipContent}
	</div>
{/if}
