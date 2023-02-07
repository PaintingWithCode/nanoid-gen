<script>
	import ResourceNanoid from './ResourceNanoid.svelte';
</script>

<div class="flex flex-col space-y-10">
	<div class="flex flex-row">
		<ResourceNanoid resource="Institution" prefix="ins" />
		<ResourceNanoid resource="Module" prefix="mod" />
	</div>
	<div class="flex flex-row">
		<ResourceNanoid resource="Client Admin" prefix="cta" />
		<ResourceNanoid resource="Learner" prefix="lnr" />
	</div>
	<div class="flex flex-row">
		<ResourceNanoid resource="Cohort" prefix="cht" />
		<ResourceNanoid resource="Assignment" prefix="ast" />
	</div>
	<div class="flex flex-row">
		<ResourceNanoid resource="Submission" prefix="sbm" />
	</div>
</div>
