<template>
  <div>
    <p>{{ countryInfo }}</p>
    <promises></promises>
  </div>
</template>

<script>
import { eventBus } from './main.js';
import Promises from './components/Promises'

export default {
  name: 'app',
  data() {
    return {
      countryInfo: [],
      selectedCountry: null
    }
  },
  mounted() {
    eventBus.$on('country-info', (info) => {
			this.countryInfo = info;
		});
  },
  components: {
    'promises': Promises
  }
}
</script>

<style>

</style>