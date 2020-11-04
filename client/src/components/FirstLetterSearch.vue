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
    font-family: itim;
      font-size: 18px;

    border: 2px solid black;
    background: rgb(112, 206, 112);
    border-radius: 3px;
    padding: 5px;
    margin: 2px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

}

#alphabet:hover {
  background-color: yellow;
}



</style>