<template>
    <div>
        <li v-on:click='handleCountrySelectionClick'>
            <span> {{ country.languages[0].name }} </span>
        </li>
    </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
    name: 'language-results-list-item',
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