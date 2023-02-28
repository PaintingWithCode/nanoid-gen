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
	class="w-full truncate
rounded-sm border-2 border-sea-green-100 bg-white p-2 font-mono text-sea-green-900 focus:border-sea-green-600 focus:outline-none focus:ring-0
dark:border-celtic-700/60 dark:bg-celtic-700/40 dark:text-celtic-50 dark:focus:border-celtic-500"
/>
