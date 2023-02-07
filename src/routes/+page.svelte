<script lang="ts">
	import { AlphabetInput, AmountInput, NanoidsOutput, LengthSlider, PrefixInput } from './(home)';

	let generateNanoids: () => void;
</script>

<div class="flex flex-col space-y-8">
	<AlphabetInput />
	<LengthSlider />
	<div class="flex flex-row space-x-8">
		<PrefixInput />
		<AmountInput />
	</div>
	<button
		type="button"
		class="rounded-sm py-2 text-lg bg-black text-white"
		on:click={generateNanoids}
	>
		Generate
	</button>
	<NanoidsOutput bind:generate={generateNanoids} />
</div>
