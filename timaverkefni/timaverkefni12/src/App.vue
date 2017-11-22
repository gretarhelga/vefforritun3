<template>
  <div id="app">
    <div class="column is-6 is-offset-3">
      <input type="radio" id="orkan" v-model="stations">
      <label for="orkan">Orkan</label>



      <div class="box" v-for="petrol in sortedStations">
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
      petrols: [],
      stations: []
    };
  },
  computed: {
    sortedStations() {
      var sorted = this.petrols.sort(function(a, b) {
        return a.bensin95 - b.bensin95;
      });
      return sorted;
    },
    filterStations() {
      var self = this;
      var filterd self.stations.filter(function(station){
        if(station === petrol.company){
          return true;
        }
        else(station !== petrol.company){
          return false;
        }
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
