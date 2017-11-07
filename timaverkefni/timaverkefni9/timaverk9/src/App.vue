<template>
  <div id="app">
    <box>Texti i box</box> 
    <box>Texti i öðru boxi</box> 
    <box>Texti i enn öðru boxi</box> 
  </div>
</template>

<script>
import Box from "./components/Box.vue";

export default {
  name: 'app',
  components: { Box },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
