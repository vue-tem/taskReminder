<template>
  <div class="flex flex-col md:w-1/2 w-11/12 m-auto mt-20 mb-20 ">
    <Header @toggleForm="changeToggleForm"/>
    <Form @newTask="getNewTask" :toggleForm="toggleForm"></Form>

    <Cards v-bind:tasks="tasks" @deleteId="deleteTask" @updateReminder="updateReminder"></Cards>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Cards from './components/Cards.vue';
import Form from './components/Form.vue';

export default {
  name: 'App',
  components: {
    Header,
    Cards,
    Form
  },
  data: function(){
    return {
      tasks: [],
      toggleForm: true
    }
  },
  methods: {
    deleteTask(id){
      if(confirm('Are you Sure?')){
        this.tasks = this.tasks.filter((task) => {
          return task.id !== id
        })
      }
    },
    updateReminder(id){
      this.tasks = this.tasks.map((task) => {
        if (task.id === id){
          task.reminder = !task.reminder
        }
        return task
      })
    },
    getNewTask(task){
      var lastId
      if(this.tasks.length > 0){
        lastId = this.tasks[0]['id'];
      }else{
        lastId = 1
      }
      var newTask = {
        id: lastId + 1,
        title: task.title,
        dateTime: task.dateTime,
        reminder: task.reminder
      }
      this.tasks.push(newTask)
      this.sortTask()
    },
    changeToggleForm(){
      this.toggleForm = !this.toggleForm
    },
    sortTask(){
      this.tasks = this.tasks.sort((a, b) => b.id - a.id)
      console.log(this.tasks)
    }
  },
  created(){
    this.tasks = [
        {id: 1, title: 'Meeting For me', dateTime: 'Thursday 2:30 pm', reminder: false},
        {id: 2, title: 'Tution', dateTime: 'Saturday 9:00 am', reminder: true},
    ]
    this.sortTask()
  }
}
</script>
