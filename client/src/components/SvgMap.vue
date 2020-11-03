<template>
  <div class="map-container">
    <panZoom :options="{minZoom: 0.8, maxZoom: 6}">
      <radio-svg-map v-model="selectedLocation" :map="World" />
    </panZoom>
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
      selectTheCountry: function() {
      for (let i=0; i<this.countries.length; i++) {
        const country = this.countries[i]
        if(this.selectedLocation === country.alpha2Code.toLowerCase()) {
          this.selectedCountry = country;
          eventBus.$emit('map-click', this.selectedCountry);
        };
      };

      
    }
  }
};  
</script>

<style src="../styles/map.css">
</style>