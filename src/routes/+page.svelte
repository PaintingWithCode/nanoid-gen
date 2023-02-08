<script lang="ts">
	import { AlphabetInput, AmountInput, NanoidsOutput, LengthSlider, PrefixInput } from './(home)';
	import { alphabet } from '$lib/stores';

	let generateNanoids: () => void;
</script>

<div class="flex flex-col space-y-8">
	<AlphabetInput />
	<LengthSlider />
	<div class="flex flex-row space-x-2 sm:space-x-8">
		<PrefixInput />
		<AmountInput />
	</div>
	<button
		type="button"
		disabled={$alphabet === ''}
		class="mx-auto w-1/2
	rounded-sm bg-sea-green-700/80 py-2 text-lg tracking-wide text-white
	transition duration-300 enabled:hover:bg-sea-green-700
	disabled:cursor-not-allowed disabled:opacity-40"
		on:click={generateNanoids}
	>
		Generate
	</button>
	<NanoidsOutput bind:generate={generateNanoids} />
</div>
