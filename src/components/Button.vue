<template>
    <button v-bind:class="[bgColor, color]" class="block py-2 px-4 rounded-md font-semibold ">
      {{ text }}
    </button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            color: String,
            text: String,
            bgColor: String
        }
    }
</script>