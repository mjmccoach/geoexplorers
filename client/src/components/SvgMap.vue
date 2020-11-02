<template>
  <div>
    <radio-svg-map v-model="selectedLocation" :map="World" />
  </div>
</template>

<script>
import { RadioSvgMap } from "vue-svg-map";
import World from "@svg-maps/world";
import { eventBus } from "@/main.js";

export default {
  name: "svg-map",
  props: ['countries'],
	components: {
    RadioSvgMap
	},
	data() {
		return {
      World,
      selectedLocation: null,
      selectedCountry: null
    };
  },
  computed: {
    matchSelectedCountry: function() {
      const list = this.countries;
      const id = this.selectedLocation;

      for (let i=0; i<list.length; i++) {
        const country = list[i]
        if(id === country.alpha2Code.toLowerCase()) {
          this.selectedCountry = country;
        };
      };
      return this.selectedCountry
    },
    emitCountry() {
      eventBus.$emit('country-selected', this.selectedCountry);
    }
  }
};
</script>

<style src="vue-svg-map/dist/index.css"></style>