<template lang="html">
    <div>
        <ul>
            <region-results-list-item
            v-for="(country, index) in countries" :country="country" :key="index"
            v-if="country.region === selectedRegion && country.region !== ''"
            >
            </region-results-list-item>
        </ul>
    </div>
</template>

<script>
import { eventBus } from "@/main.js";

import RegionResultsListItem from './RegionResultsListItem';

export default {
    name: "region-results-list",
    props: ['countries', 'selectedRegion'],
    components: {
        'region-results-list-item': RegionResultsListItem,
    }
}
</script>

<style lang="css" scoped>

.testing {
    color: red;
}

</style>