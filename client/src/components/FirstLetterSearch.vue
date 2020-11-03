<template lang="html">
    <div>
        <li v-on:click='handleFirstLetterSelectClick'>
            <span>
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
    background: rgb(112, 206, 112);
    border-radius: 3px;
    padding: 5px;
    margin: 2px;
}

#alphabet:hover {
  background-color: yellow;
}


</style>