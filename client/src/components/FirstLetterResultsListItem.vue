<template lang="html">
    <div>
        <li
        v-on:click='handleCountrySelectClick'
        >
        <span><img id="country-flag" :src="country.flag" :alt="'Flag of ' + country.name" width="80"/></span>
        <span> {{ country.name }} </span>
        </li>
    </div>
</template>

<script>
import { eventBus } from '@/main.js';


export default {
    name: 'first-letter-results-list-item',
    props: ['country'],
    components: {},
    methods: {
    handleCountrySelectClick: function (event) {
      eventBus.$emit("country-selected", this.country);
    },
  },
}
</script>

<style lang="css" scoped>

</style>