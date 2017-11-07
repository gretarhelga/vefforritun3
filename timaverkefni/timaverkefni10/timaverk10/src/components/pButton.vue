<template>
	<div class="takki">
		<slot></slot>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>
	body {
		margin-top: 15px;
		margin-left: 10px;
	}
	.takki {
		border: 2px solid #1E90FF;
		background-color: #1E90FF;
		border-radius: 5px;	
		font-size: 20px;
		display: inline;
		padding: 8px;
		color: white;
	}
</style>