<template>
  <div id="app">
    <div v-for="concert in concerts">
      <h3>{{ concert.eventdateName }}</h3>
      <h5 class="subtitle">{{ concert.eventHallName }}</h5>
      <img :src="consert.imageSource">
    </div>
  </div>
</template>

<script>
import axios from "axios";
  export default {
    name: 'app',
    data () {
      return {
        concerts: []
      };
    },
    mounted() {
      var self = this;
      axios.get("http://api.is/concerts")
      .then(function(response) {
        this.concerts = response.data.results;
      })
      .catch(function(errors) {
        console.log(errors);
      })
    }
  }

</script>

<style>
  body {
    padding:20px;
  }
  .subtitle {
    color: #d3d3d3;
  }
</style>
