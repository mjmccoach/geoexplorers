<template lang="html">
  
</template>

<script>
import { eventBus } from "@/main.js";

import RegionResultsListItem from './RegionResultsListItem';

export default {
    name: "region-results-list",
    props: [],
    components: {
        'region-results-list-item': RegionResultsListItem,
    }
}
</script>

<style lang="css scoped">

</style>