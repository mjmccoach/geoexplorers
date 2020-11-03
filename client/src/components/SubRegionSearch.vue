<template lang="html">
    <div>
        <li
        v-on:click='handleSubRegionSelectClick'
        v-if="subRegion"
        >
            <span id="sub-regions">
                {{ subRegion }}
            </span>
        </li>
    </div>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
    name: 'sub-region-search',
    props: ['subRegion'],
    methods: {
        handleSubRegionSelectClick() {
            eventBus.$emit('sub-region-selected', this.subRegion)
        }
    }
}
</script>

<style lang="css" scoped>

.testing {
    color: red;
}

</style>