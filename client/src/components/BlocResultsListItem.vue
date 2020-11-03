<template>
    <div>
        <li v-on:click='handleBlocSelectionClick'>
            <span> {{ country.regionalBlocs[0].name }} </span>
        </li>
    </div>
</template>

<script>
import {eventBus} from "@/main.js";

export default {
    name: 'block-results-list-item',
    props: ['country'],
    components: {},
    methods: {
        handleBlocSelectionClick: function() {
            eventBus.$emit("bloc-selected", this.bloc);
        }
    }
}
</script>

<style>

</style>