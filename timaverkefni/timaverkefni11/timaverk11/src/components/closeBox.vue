<template>
	<div class="box">
		<slot></slot><br>
		<oButton>Loka Boxi</oButton>
	</div>
</template>

<script>
import oButton from "./oButton.vue";


export default {
	components: { oButton },
}
</script>

<style>
	.box {
		border: 2px solid lightgray;
		background-color: white;
		border-radius: 5px;	
		font-size: 35px;
		display: inline-block;
		padding: 20px;
	}
</style>