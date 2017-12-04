<template>
  <div id="app">

    <!-- <input type="text" v-model="postTask"> -->

    <div v-for="task in tasks">
      <h3 class="title is-4" >{{ task.title }}</h3>
      <p>{{ task.created }}</p><br><br>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'app',
  data () {
    return {
      tasks: [],
      postTask: []
    };
  },
  mounted() {
    var self = this;
    axios.get('http://fjolbraut.org/api/tasks?api_token=ZHffILpaLtT75Hw9CSBtiHYWYpBxS7F31k88ctOzAOpMXjFkMJZxgeDLRNAj')
         .then(function(response) {
            console.log(response.data);
            self.tasks = response.data;
         }).
         catch(function(error) {
            console.log(error);
         });
  },
/*axios.post('http://fjolbraut.org/api/tasks?api_token=ZHffILpaLtT75Hw9CSBtiHYWYpBxS7F31k88ctOzAOpMXjFkMJZxgeDLRNAj', {
            title: self.postTask
         })
         .then(function(response) {
            console.log(response);
         })
         .catch(function(error) {
            console.log(error);
         });    */
}
</script>

<style>

</style>
