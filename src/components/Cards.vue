<template>
    <div :key="task.id" v-for="task in tasks" class="flex flex-col space-y-2 mt-12">
        <Card v-on:deleteId="$emit('deleteId', task.id)" @updateReminder="$emit('updateReminder', task.id)" :task="task"></Card>
    </div>
</template>



<script>
    import Card from './TaskCard.vue'

    export default {
        name: 'Cards',
        components: {
            Card
        },
        emits: ['deleteId', 'updateReminder'],
        props: {
            tasks: Array
        }
    }
</script>