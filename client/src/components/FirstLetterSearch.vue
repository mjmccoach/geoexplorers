<template lang="html">
    <div>
        <li v-on:click='handleFirstLetterSelectClick'>
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
        handleFirstLetterSelectClick() {
            eventBus.$emit('first-letter-selected', this.letter)
        }
    }
}
</script>

<style lang="css" scoped>

</style>