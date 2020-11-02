<template lang="html">
    <div>
        <li v-on:click='handleFirstLetterSelection'>
        <span id="alphabet">
            {{ letter }}
        </span>
        </li>
    </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
    name: 'first-letter-search',
    props: ['letter'],
    methods: {
        handleFirstLetterSelection() {
            eventBus.$emit('first-letter-selected', this.letter)
        }
    }
}
</script>

<style lang="css" scoped>

</style>