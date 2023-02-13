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
	aria-label="Copy to clipboard"
	class="tooltip-entering tooltip-leaving ml-4 cursor-pointer text-sea-green-900/40 transition
	hover:text-sea-green-600"
	use:popperRef
	on:click={handleClick}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
>
	<svg
		width="20"
		height="28"
		viewBox="0 0 480 480"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M320 300l0-100 60 0 0 180-180 0 0-60 100 0q8 0 14-6 6-6 6-14l0 0z m-260 0q0 8 6 14 6 6 14 6l80 0 0 80q0 8 6 14 6 6 14 6l220 0q8 0 14-6 6-6 6-14l0-220q0-8-6-14-6-6-14-6l-80 0 0-80q0-8-6-14-6-6-14-6l-220 0q-8 0-14 6-6 6-6 14l0 220z m40-20l0-180 180 0 0 180-180 0z"
		/>
	</svg>
</button>

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
