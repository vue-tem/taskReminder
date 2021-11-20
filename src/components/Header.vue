<template>
  <div class="flex justify-between items-center">
    <h1 class="text-blue-500 text-3xl font-bold">Task Reminder</h1>
    <Button v-on:click="$emit('toggleForm', 'change')" bgColor="bg-indigo-600" color="text-white" text="new task"></Button>
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'HelloWorld',
  components: {
    Button,
  }
}
</script>

