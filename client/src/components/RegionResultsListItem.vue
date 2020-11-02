<template lang="html">
    <div>
        <li
        v-on:click='handleRegionSelectClick'
        >
        <span> {{ region }}
        </span>
        </li>
    </div>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
    name: 'region-results-list-item',
    props: ['region'],
    components: {},
    methods: {
        handleRegionSelectClick: function () {
            eventBus.$emit("region-selected", this.region)
        }
    }
}
</script>

<style lang="css" scoped>

</style>