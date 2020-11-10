<template lang="html">
    <li v-on:click='handleFirstLetterSelectClick' id="alphabet">
        {{ letter }}
    </li>
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
    font-family: 'Varela Round';
    font-size: 17px;
    border: 2px solid black;
    background: rgb(112, 206, 112);
    border-radius: 5px;
    padding: 5px;
    margin: 2px;
    transition:0.9s ease-in-out;

    box-shadow: 0 8px 13px rgba(0,0,0,0.21), 0 5px 5px rgba(0,0,0,0.21);
}

#alphabet:hover {
  background-color: yellow;
  cursor: pointer;
  box-shadow: 0 13px 21px rgba(0,0,0,0.55), 0 8px 8px rgba(0,0,0,0.55);
}

</style>