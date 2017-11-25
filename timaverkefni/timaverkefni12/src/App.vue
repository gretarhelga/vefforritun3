<template>
  <div id="app">
    <div class="column is-4 is-offset-4">
      <div class="filter">
        <input type="radio" id="Allt" value="Allt" v-model="stations">
        <label for="Allt">Allt</label>

        <input type="radio" id="Atlantsolía" value="Atlantsolía" v-model="stations">
        <label for="Atlantsolía">Atlantsolía</label>

        <input type="radio" id="Costco Iceland" value="Costco Iceland" v-model="stations">
        <label for="Costco Iceland">Costco Iceland</label>

        <input type="radio" id="Dælan" value="Dælan" v-model="stations">
        <label for="Dælan">Dælan</label>

        <input type="radio" id="N1" value="N1" v-model="stations">
        <label for="N1">N1</label>

        <input type="radio" id="Olís" value="Olís" v-model="stations">
        <label for="Olís">Olís</label><br>

        <input type="radio" id="Orkan" value="Orkan" v-model="stations">
        <label for="Orkan">Orkan</label>

        <input type="radio" id="Orkan X" value="Orkan X" v-model="stations">
        <label for="Orkan X">Orkan X</label>

        <input type="radio" id="ÓB" value="ÓB" v-model="stations">
        <label for="ÓB">ÓB</label>

        <input type="radio" id="Skeljungur" value="Skeljungur" v-model="stations">
        <label for="Skeljungur">Skeljungur</label>
      </div>


      <p style="padding:15px;">Fjöldi Stöðva: {{ filterStations.length }}</p>

      <div class="box" v-for="petrol in filterStations">
        <h3 class="title is-4" >{{ petrol.company }}</h3>
        <h4 class="title is-6">{{ petrol.name }}</h4>
        <p class="bensin">Bensín - {{ petrol.bensin95 }}</p>
        <p class="disel">Dísel - {{ petrol.diesel }}</p>
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
      stations: "Allt"
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
      return this.sortedStations.filter(function(item) {
        if(self.stations === "Allt"){
          return item.company;
        }
        else{
          return item.company === self.stations;
        }
      })
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
.filter{
  padding: 30px;
  text-align: center;
}
.bensin{
  position: absolute;
  margin-left: 450px;
  margin-top: -90px;
  color: #D8D8D8;
}
.disel{
  position: absolute;
  margin-left: 462px;
  margin-top: -50px;
  color: #D8D8D8;
}
</style>