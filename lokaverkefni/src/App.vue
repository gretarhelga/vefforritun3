<template>
  <div id="app">

    <form method="POST" @submit.prevent="onSubmit">
      <input type="text" v-model="postTask">
      <button type="submit">Submit</button>
    </form>

    <form method="POST">
      <div v-for="task in tasks">
        <input type="checkbox" v-model="task.completed" @click.prevent="TaskCheckbox">
        <label for="checkbox" class="title is-4" v-bind:class="{ taskDone: task.completed }" >{{ task.title }}</label>
        <p>{{ task.created }}</p>
        <p>{{ task.id }}</p>
        <br><br>
      </div>
    </form>


  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'app',
  data () {
    return {
      tasks: [],
      postTask: ""
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
  methods: {
    onSubmit(){
      var self = this;
      axios.post('http://fjolbraut.org/api/tasks?api_token=ZHffILpaLtT75Hw9CSBtiHYWYpBxS7F31k88ctOzAOpMXjFkMJZxgeDLRNAj', {
              title: self.postTask
           })
           .then(function(response) {
              console.log(response);
              location.reload();
           })
           .catch(function(error) {
              console.log(error);
           });
    },
    TaskCheckbox(){
      var self = this;
      var id = 644;
      axios.post('http://fjolbraut.org/api/tasks/' + id + '/status?api_token=ZHffILpaLtT75Hw9CSBtiHYWYpBxS7F31k88ctOzAOpMXjFkMJZxgeDLRNAj')
          .then(function(response) {
              console.log(response);
              location.reload();
          })
          .catch(function(error) {
              console.log(error);
           });
    }

  }

}
</script>

<style>
.taskDone {
  text-decoration: line-through;
  color: #787878;
}
</style>
