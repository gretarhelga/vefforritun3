<template>
  <div id="app">
    <closeBox>Texti í boxi</closeBox>
  </div>
</template>

<script>
import closeBox from "./components/closeBox.vue";

export default {
  name: 'app',
  components: { closeBox },
  data () {
    return {

    }
  }
}
</script>

<style>
  body {
    margin-top: 35px;
    margin-left: 10px;
  }
</style>
