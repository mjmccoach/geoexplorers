<template lang="html">
    <div>
        <ul>
            <region-results-list-item
            v-for="(region, index) in regions" :region="region" :key="index"
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
    props: ['regions'],
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