<script lang="ts">
	import RangeSlider from 'svelte-range-slider-pips';
	import type { OnChange } from 'svelte-range-slider-pips';
	import { Label } from '$lib/components/form';
	import { length } from '$lib/stores';

	function handleChange(event: CustomEvent<OnChange>) {
		$length = event.detail.value;
	}
</script>

<div class="flex flex-col">
	<Label inputId="length-slider" text="Length" />
	<RangeSlider
		id="length-slider"
		values={[$length]}
		on:change={handleChange}
		min={4}
		max={32}
		pips
		pipstep={4}
		all="label"
	/>
	<p class="pt-2 transition-colors">
		<strong>{$length}</strong> characters
	</p>
</div>
