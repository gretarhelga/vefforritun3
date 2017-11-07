<template>
  <div id="app">
    <div v-for="petrol in petrols">
      
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'app',
  data () {
    return {
      petrol: []
    };
  },
  mounted() {
    var self = this;
    axios.get("http://apis.is/petrol")
      .then(function(response) {
        this.petrol = response.data.results;
      })
      .catch(function(errors) {
        console.log(errors);
      })
  }
}

</script>

<style>

</style>
