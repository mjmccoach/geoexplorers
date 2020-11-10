<template lang="html">
    <div>
        <ul>
            <sub-region-results-list-item
            v-for="(country, index) in countries" :country="country" :key="index"
            v-if="country.subregion === selectedSubRegion && country.subregion !== ''"
            >
            </sub-region-results-list-item>
        </ul>
    </div>
  
</template>

<script>
import { eventBus } from '@/main.js';

import SubRegionResultsListItem from './SubRegionResultsListItem';

export default {
    name: 'sub-region-results-list',
    props: ['countries', 'selectedSubRegion'],
    components: {
        'sub-region-results-list-item': SubRegionResultsListItem,
    }
}
</script>

<style lang="css" scoped>

.testing {
    color: red;
}

</style>