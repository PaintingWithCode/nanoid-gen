<script lang="ts">
	import { alphabet } from '$lib/stores';

	import { Label, Input } from '$lib/components/form';
	import AlphabetCheckbox from './AlphabetCheckbox.svelte';

	let includeNumbers = true;
	let includeLowerCase = true;
	let includeUpperCase = true;
	let includeSymbols = false;
	let excludeVowels = true;
	let excludeLookAlikes = true;
	let manualMode = false;

	$: {
		if (!manualMode) {
			let a = '';

			if (includeNumbers) {
				a += '0123456789';
			}

			if (includeLowerCase) {
				a += 'abcdefghijklmnopqrstuvwxyz';
			}

			if (includeUpperCase) {
				a += 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
			}

			if (includeSymbols) {
				a += '_-';
			}

			if (excludeVowels) {
				a = a.replaceAll(/(a|e|i|o|u|A|E|I|O|U)/g, '');
			}

			if (excludeLookAlikes) {
				a = a.replaceAll(/(1|l|I|0|O|o|u|v|4|A|5|S|s|X|x)/g, '');
			}

			$alphabet = a;
		} else {
			includeNumbers = false;
			includeLowerCase = false;
			includeUpperCase = false;
			includeSymbols = false;
			excludeVowels = false;
			excludeLookAlikes = false;
		}
	}

	function handleInput(event: Event) {
		const input = event.target as HTMLInputElement;
		const inputValue = input.value;
		manualMode = true;

		if (isValidInput(inputValue)) {
			$alphabet = inputValue;
		} else {
			input.value = $alphabet;
		}
	}

	function isValidInput(inputValue: string) {
		// Reject duplicate characters and non-alphanumeric characters other than -
		// and _
		return !/(.)(.*)\1/.test(inputValue) && /^[\w-]+$/.test(inputValue);
	}

	function handleCheckboxToggle(type: string) {
		manualMode = false;
		switch (type) {
			case 'numbers':
				includeNumbers = !includeNumbers;
				return;
			case 'lowercase':
				includeLowerCase = !includeLowerCase;
				return;
			case 'uppercase':
				includeUpperCase = !includeUpperCase;
				return;
			case 'symbols':
				includeSymbols = !includeSymbols;
				return;
			case 'vowels':
				excludeVowels = !excludeVowels;
				return;
			case 'lookAlikes':
				excludeLookAlikes = !excludeLookAlikes;
				return;
		}
	}
</script>

<div class="flex flex-col">
	<Label inputId="amount" text="Alphabet" />
	<div class="mt-1 mb-4 flex space-x-8">
		<div class="flex basis-1/2 flex-col space-y-4">
			<AlphabetCheckbox
				inputId="numbers"
				label="Include numbers"
				checked={includeNumbers}
				on:change={() => handleCheckboxToggle('numbers')}
			/>
			<AlphabetCheckbox
				inputId="lower-case"
				label="Include lower case characters"
				checked={includeLowerCase}
				on:change={() => handleCheckboxToggle('lowercase')}
			/>
			<AlphabetCheckbox
				inputId="upper-case"
				label="Include upper case characters"
				checked={includeUpperCase}
				on:change={() => handleCheckboxToggle('uppercase')}
			/>
			<AlphabetCheckbox
				inputId="symbols"
				label="Include symbols (_-)"
				checked={includeSymbols}
				on:change={() => handleCheckboxToggle('symbols')}
			/>
		</div>
		<div class="flex basis-1/2 flex-col space-y-4">
			<AlphabetCheckbox
				inputId="vowels"
				label="Exclude vowels"
				checked={excludeVowels}
				on:change={() => handleCheckboxToggle('vowels')}
			/>
			<AlphabetCheckbox
				inputId="look-alikes"
				label="Exclude look-alikes (1lI0Oouv4A5SsXx)"
				checked={excludeLookAlikes}
				on:change={() => handleCheckboxToggle('lookAlikes')}
			/>
		</div>
	</div>
	<Input id="alphabet" value={$alphabet} {handleInput} />
</div>
