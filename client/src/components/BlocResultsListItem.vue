<template>
    <div>
        <li v-on:click='handleCountrySelectionClick'>
            <span> {{ country.name }} </span>
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
        handleCountrySelectionClick: function() {
            eventBus.$emit("country-selected", this.country);
        }
    }
}
</script>

<style>

</style>