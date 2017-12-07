<template>
  <div id="app">

    <div class="columns">
      <div class="column is-4 is-offset-4" style="background-color: white;margin-top:25px;">

          <form method="POST" @submit.prevent="onSubmit" style="padding:10px;">
            <div class="field is-grouped">
              <div class="control is-expanded">
                <input type="text" v-model="postTask" class="input" placeholder="Add task">
              </div>
              <div class="control">
                <button type="submit" class="button is-info">Submit</button>
              </div>
            </div>
            <hr>
          </form>

        <form method="POST">
          <div v-for="task in tasks">
            <div class="field is-grouped">
              <div class="checkbox control is-expanded">
                <input type="checkbox" v-model="task.completed" @click.prevent="TaskCheckbox(task.id)">
                <label for="checkbox" class="title is-4" v-bind:class="{ taskDone: task.completed }" >{{ task.title }}</label>
              </div>
              <div class="control">
                <p style="margin-top:3px;">({{ task.created }})</p>
              </div>
            </div>
            <hr>
          </div>
        </form>

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
      tasks: [],
      postTask: "",
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
    TaskCheckbox(id){
      var self = this;
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

<style lang="scss">
@import '~bulma/bulma';
.taskDone {
  text-decoration: line-through;
  color: #787878;
}
html {
  height: 100%;
}
body {
  min-height: 100%;
  background-color: #DCDCDC;
}
</style>
