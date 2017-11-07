<template>
	<div class="box">
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
	.box {
		border: 2px solid gray;
		border-radius: 5px;	
		font-size: 20px;
		display: inline;
		padding: 8px;
	}
</style>