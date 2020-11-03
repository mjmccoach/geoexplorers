<template lang="html">
    <div>
        <ul class="scroll">
            <first-letter-results-list-item
            v-for="(country, index) in countries" :country="country" :key="index"
            v-if="country.name.startsWith(selectedFirstLetter)"
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

.testing {
    color: red;
}

.scroll {
  overflow-y: auto;
  height: 300px;
}

ul {
    list-style: none;
}

</style>