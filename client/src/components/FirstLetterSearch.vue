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

#alphabet {
    color: black;
    border: 2px solid black;
    background: rgb(234,250,254);
    background: linear-gradient(180deg, rgba(234,250,254,1) 58%, rgb(33, 207, 220) 100%);
    border-radius: 3px;
    padding: 5px;
    margin: 2px;
   
}

</style>