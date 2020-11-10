<template lang="html">
    <div>
        <li v-on:click='handleRegionSelection'>
            <span id="regions">
                {{ region }}
            </span>
        </li>
    </div>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
    name: 'region-search',
    props: ['region'],
    methods: {
        handleRegionSelection() {
            eventBus.$emit('region-selected', this.region)
        }
    }
}
</script>

<style lang="css" scoped>

</style>