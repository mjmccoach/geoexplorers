<template lang="html">
    <div>
        <li
        v-on:click="handleBlocSelectionClick"
        v-if="bloc"
        >
        <span id="blocs"> {{ bloc }} </span>
        </li>
    </div>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
    name: "bloc-search",
    props: ['bloc'],
    components: {},
    methods: {
        handleBlocSelectionClick() {
            eventBus.$emit('bloc-selected', this.bloc);
            
        }
    }
}
</script>

<style lang="css" scoped>

</style>

