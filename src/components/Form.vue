<template>
    <form v-on:submit.prevent="addTask" method="post" v-bind:class="toggleForm ? 'block' : 'hidden' " class="transition-all duration-300 flex flex-col w-full m-auto space-y-6 mt-10 ">
        <div class="flex flex-col w-full space-y-3">
            <label for="task" class="font-semibold">Title</label>
            <input type="text" v-model="title" class="outline-none border-2 border-blue-300 py-2 px-4 text-blue-600">
            <p class="font-semibold text-red-600 ">{{ errors.title }}</p>
        </div>
        <div class="flex flex-col w-full space-y-3">
            <label for="time" class="font-semibold">Date Time</label>
            <input type="text" v-model="dateTime" class="outline-none border-2 border-blue-300 py-2 px-4 text-blue-600">
            <p class="font-semibold text-red-600 ">{{ errors.dateTime }}</p>
        </div>
        <div class="flex space-x-4 items-center">
            <label for="setReminder" class="font-semibold">set reminder</label>
            <input type="checkbox" name="setReminder" v-model="reminder">
        </div>
        <Button type="submit" bgColor="bg-indigo-600" color="text-white" text="add task"></Button>
    </form>
</template>

<script>
import Button from './Button.vue';

export default {
    name: 'Form',
    components: {
        Button,
    },
    props: ['toggleForm'],
    data: function(){
        return {
            title: '', 
            dateTime: '',
            reminder: false,
            errors: {
                title: '',
                dateTime: ''
            }
        }
    },
    methods: {
        addTask(){
            if(this.title.trim() < 1){
                this.errors.title = "You have to fill title"
                return;
            }

            if(this.dateTime.trim() < 1){
                this.errors.dateTime = "You have to fill datetime"
                return;
            }

            var newTask = {
                title: this.title,
                dateTime: this.dateTime,
                reminder: this.reminder
            }

            this.$emit('newTask', newTask);

            this.title = ''
            this.dateTime = ''
            this.reminder = false
        }
    }
}
</script>