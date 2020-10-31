<template>
  
</template>

<script>
import { eventBus } from '../main.js';


export default {
  name: 'promises',
  data() {
    return {
      countryInfo: []
    }
  },
  mounted() {
  this.fetchAll();
},
  methods: {
    fetchAll: function() {
      fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => this.countryInfo = data)
        .then(eventBus.$emit('country-info', this.countryInfo));
    }
  }
}
</script>

<style>

</style>
