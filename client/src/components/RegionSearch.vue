<template lang="html">
    <div>
        <li v-on:click='handleRegionSelectClick'>
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
        handleRegionSelectClick() {
            eventBus.$emit('region-selected', this.region)
        }
    }
}
</script>

<style lang="css" scoped>

.testing {
    color: red;
}

</style>