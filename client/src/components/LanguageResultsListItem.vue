<template>
    <div>
        <li v-on:click='handleLanguageSelectionClick'>
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
        handleLanguageSelectionClick: function() {
            eventBus.$emit("language-selected", this.language);
        }
    }
}
</script>

<style>

</style>