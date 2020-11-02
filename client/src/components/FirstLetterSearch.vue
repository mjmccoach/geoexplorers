<template>
    <div>
        <li
          v-on:click='handleFirstLetterSelection'
        >
        <span>
            countries starting with firstLetter
        </span>
        </li>
    </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
    name: 'first-letter-search',
    props: [],
    methods: {
        handleFirstLetterSelection() {
            eventBus.$emit('first-letter-selected', this.letter)
        }
    }
}
</script>

<style>

</style>