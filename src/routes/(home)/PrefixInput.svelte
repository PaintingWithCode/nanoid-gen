<script lang="ts">
	import { Label, Input } from '$lib/components/form';
	import { prefix } from '$lib/stores';
</script>

<div class="flex basis-1/2 flex-col">
	<Label inputId="prefix" text="Prefix" />
	<Input id="prefix" bind:value={$prefix} />
</div>
