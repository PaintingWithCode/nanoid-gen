<script lang="ts">
	import { Label, Input } from '$lib/components/form';
	import { MAX_AMOUNT, MIN_AMOUNT } from '$lib/constants';
	import { amount } from '$lib/stores';

	function isValidInput(inputValue: string) {
		const newAmount = parseInt(inputValue);

		return !isNaN(newAmount) && newAmount >= MIN_AMOUNT && newAmount <= MAX_AMOUNT;
	}
</script>

<div class="flex basis-1/2 flex-col">
	<Label inputId="amount" text={`Number of IDs (Max: ${MAX_AMOUNT})`} />
	<Input
		id="amount"
		type="number"
		min={MIN_AMOUNT.toString()}
		max={MAX_AMOUNT.toString()}
		bind:value={$amount}
		{isValidInput}
	/>
</div>
