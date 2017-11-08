<template>
  <div id="app">
    <div v-for="petrol in sortedStations">
      <div class="box">
        <h3 class="title is-4">{{ petrol.company }}</h3>
        <h4 class="title is-6">Staðsetning: {{ petrol.name }}</h4>
        <p>Bensín verð {{ petrol.bensin95 }}kr.</p>
        <p>Dísel verð {{ petrol.diesel }}kr.</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'app',
  data () {
    return {
      petrols: []
    };
  },
  computed: {
    sortedStations() {
      return this.petrols.sort(function( a,b) {
        return a.bensin95 - b.bensin95;
      });
    }
  },
  mounted() {
    var self = this;
    axios.get("http://apis.is/petrol")
      .then(function(response) {
        self.petrols = response.data.results;
      })
      .catch(function(errors) {
        console.log(errors);
      })
  }
}

</script>

<style> 

</style>
