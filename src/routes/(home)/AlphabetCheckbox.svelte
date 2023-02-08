<script lang="ts">
	export let inputId: string;
	export let label: string;
	export let checked: boolean;
</script>

<div class="group flex items-center">
	<input
		id={inputId}
		type="checkbox"
		{checked}
		on:change
		class="h-4 w-4
	cursor-pointer rounded-sm border-sea-green-300 bg-sea-green-50/80
	text-sea-green-700/80 focus:ring-sea-green-700/80 focus:ring-offset-sea-green-100"
	/>
	<label
		for={inputId}
		class={`ml-2 cursor-pointer text-sm text-sea-green-800
	transition-opacity group-hover:opacity-90  ${checked ? 'opacity-90' : 'opacity-70 '}`}
		>{label}</label
	>
</div>
