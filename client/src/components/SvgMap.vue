<template>
  <div>
    <radio-svg-map v-model="selectedLocation" :map="World" />
    <h1 v-if="selectedLocation">{{ matchSelectedCountry.name }}</h1>
  </div>
</template>

<script>
import { RadioSvgMap } from "vue-svg-map";
import World from "@svg-maps/world";

export default {
  name: "MyMap",
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
      const list = this.World.locations;
      const id = this.selectedLocation;

      for (let i=0; i<list.length; i++) {
        const country = list[i]
        if(id === country.id) {
          this.selectedCountry = country;
        };
      };
      return this.selectedCountry;
    }
  }
};
</script>

<style src="vue-svg-map/dist/index.css"></style>