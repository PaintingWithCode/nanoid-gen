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
	<p class="pt-2 text-sea-green-900">
		<strong class="font-mono">{$length}</strong> characters
	</p>
</div>

<style>
	:global(:root) {
		--range-slider: #205c4140;
		--range-handle-inactive: #457961;
		--range-handle-focus: #183c2d;
		--range-pip-text: #547a67;
		--range-pip-hover: #183c2d;
		--range-pip-active: #183c2d;
		--range-pip-active-text: #183c2d;
	}
</style>
