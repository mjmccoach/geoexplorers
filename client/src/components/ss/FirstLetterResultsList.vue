<template lang="html">
    <div id="filter-list">
        <ul class="scroll">
            <first-letter-results-list-item id="highlight"
            v-for="(country, index) in countries" :country="country" :key="index"
            v-if="country.name.startsWith(selectedLetter)"
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
    props: ['countries', 'selectedLetter'],
    components: {
        "first-letter-results-list-item": FirstLetterResultsListItem,
    },
}
</script>

<style lang="css" scoped>

ul {
    list-style: none;
}



.scroll {
  overflow-y: auto;
  list-style: none;
  padding: 2px;
  max-height: 100px
}

#highlight:hover {
  background-color: yellow;
}

#filter-list {
  border: solid 4px darkgreen;
  background-color: aquamarine;
  border-radius: 6px;
  padding: 5px;
  height: 120px;
  width: 400px;
  margin-left: 10px;

  overflow: hidden
}

</style>