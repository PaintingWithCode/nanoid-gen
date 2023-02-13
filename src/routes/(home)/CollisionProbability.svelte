<script lang="ts">
	import { slide } from 'svelte/transition';
	import calculateCollision from '$lib/core/collisionCalculator';
	import { alphabet, length } from '$lib/stores';

	let open = false;
	let rate = 1000;
	let unit = 'hour';
	$: time = calculateCollision($alphabet, $length, rate, unit);

	function handleRateInput(event: Event) {
		const input = event.target as HTMLInputElement;
		const newRate = parseInt(input.value);

		if (!isNaN(newRate)) {
			rate = newRate;
		} else {
			input.value = rate.toString();
		}
	}
</script>

<div>
	<button
		class="inline-flex cursor-pointer items-center  gap-x-2 text-sea-green-900/40 hover:text-sea-green-600"
		on:click={() => (open = !open)}
	>
		<svg
			fill="currentColor"
			width="12"
			height="16"
			viewBox="0 0 350 480"
			class="transition-transform"
			class:rotate-90={open}
			xmlns="http://www.w3.org/2000/svg"
			><path d="M290 250l-180-190-30 30 150 160-150 150 30 30 180-180z" /></svg
		>
		<span class="text-sm font-medium leading-none text-sea-green-900/70">Collision Probability</span
		>
	</button>
	{#if open}
		<div transition:slide class="rounded-sm bg-sea-green-200 shadow-inner">
			<p class="p-3 text-sea-green-900">
				At a rate of
				<input
					value={rate}
					on:input={handleRateInput}
					dir="rtl"
					type="number"
					min="10"
					step="10"
					class="w-20 border-0 border-b-2 border-white bg-transparent p-0
				text-right focus:border-b-2 focus:border-sea-green-600 focus:outline-none focus:ring-0 "
				/>
				ids generated every
				<button
					class={`transition-opacity ${
						unit === 'second' ? 'underline decoration-dotted opacity-50' : ''
					}`}
					on:click={() => (unit = 'hour')}
				>
					hour
				</button>
				/
				<button
					class={`transition-opacity ${
						unit === 'hour' ? 'underline decoration-dotted opacity-50' : ''
					}`}
					on:click={() => (unit = 'second')}
				>
					second
				</button>, there is a 1% probability of at least one collision every
				<strong>{time}</strong>.
			</p>
		</div>
	{/if}
</div>
