<template>
    <div @click="$emit('updateReminder', task.id)" v-bind:class="task.reminder ? 'border-blue-500 bg-blue-100' : 'bg-gray-100 border-gray-100' " class="select-none transition-all duration-300 cursor-pointer border-l-4 flex justify-between items-center py-2 px-4">
        <div>
            <h1 class="font-semibold text-lg text-blue-600">{{ task.title }}</h1>
            <p>{{ task.dateTime }}</p>
        </div>
        <Button @click="$emit('deleteId', task.id)" color="text-red-500" text="delete" ></Button>
    </div>
</template>



<script>
    import Button from './Button.vue';

    export default {
        name: 'Card',
        components: {
            Button,
        },
        props: {
            task: Object
        }
    }
</script>