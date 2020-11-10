<template lang="html">
    <div>
        <li
        v-on:click="handleCountrySelectClick"
        >
        <span> {{ country.name }}</span>
        </li>
    </div>
  
</template>

<script>
import { eventBus } from '@/main.js';


export default {
    name: 'sub-region-results-list-item',
    props: ['country'],
    methods: {
        handleCountrySelectClick: function () {
            eventBus.$emit("country-selected", this.country)
        }
    }
}
</script>

<style lang="css" scoped>

.testing {
    color: red;
}

</style>