<template lang="html">
    <div>
        <ul>
            <first-letter-results-list-item
            v-if="selectedFirstLetter === country.name(toUpperCase)"
            v-for="(country, index) in countries" :country="country" :key="index"
            >
            </first-letter-results-list-item>    
        </ul>
    </div> 
</template>

<script>
import { eventBus } from "@/main.js";

import FirstLetterResultsListItem from "./FirstLetterResultsListItem.vue";

export default {
    name: 'first-letter-results-list',
    props: ['countries', 'selectedFirstLetter'],
    components: {
        "first-letter-results-list-item": FirstLetterResultsListItem,
    },
}
</script>

<style lang="css" scoped>

</style>