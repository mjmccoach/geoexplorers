<template lang="html">
    <div>
        <li v-on:click='handleCountrySelectClick'>
        <span><img id="country-flag" :src="country.flag" :alt="'Flag of ' + country.name" width="40"/></span>
        <span> {{ country.name }} </span>
        </li>
    </div>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
    name: 'first-letter-results-list-item',
    props: ['country'],
    methods: {
      handleCountrySelectClick: function (event) {
        eventBus.$emit("country-selected", this.country);
    }
  },
}
</script>

<style>
#country-flag {
  border: solid 1px black
}
</style>