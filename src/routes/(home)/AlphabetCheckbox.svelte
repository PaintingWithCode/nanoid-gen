<script lang="ts">
	export let inputId: string;
	export let label: string;
	export let checked: boolean;
</script>

<div class="flex items-center">
	<input id={inputId} type="checkbox" {checked} on:change class="h-4 w-4 rounded-sm" />
	<label
		for={inputId}
		class={`ml-2 text-sm transition-opacity  ${checked ? 'opacity-70' : 'opacity-40 '}`}
		>{label}</label
	>
</div>
