<template lang="html">
    <div>
        <li
        v-on:click='handleCountrySelectClick'
        >
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