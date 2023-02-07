<script lang="ts">
	type T = $$Generic;
	export let id: string;
	export let type = 'text';
	export let value: T;
	export let min = '0';
	export let max = '0';

	/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
	export let isValidInput = (value: string) => true;

	export let handleInput = (event: Event) => {
		const input = event.target as HTMLInputElement;
		const inputValue = input.value;

		// Validate input
		if (isValidInput(inputValue)) {
			if (type === 'number') {
				value = parseInt(inputValue) as T;
			} else {
				value = inputValue as T;
			}
		} else {
			// If input is invalid, override input to previous valid value
			input.value = value as string;
		}
	};

	const setAttributes = (node: HTMLInputElement) => {
		node.type = type;

		if (type === 'number') {
			node.min = min;
			node.max = max;
		}
	};
</script>

<input
	{id}
	{value}
	use:setAttributes
	on:input={handleInput}
	class="truncate
rounded-sm border-none bg-sea-green-50/80 p-2 font-mono text-sea-green-900
transition-colors focus:bg-sea-green-50 focus:outline-none focus:ring-2
focus:ring-sea-green-600"
/>
