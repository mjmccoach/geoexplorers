<template>
  <div id="svg-map-box">
    <div class="map-country-name" >  
      <span v-if="!selectedCountry">The World Map</span>
      <span v-if="selectedCountry">Selected Country: {{ selectedCountry.name }} </span>
    </div>
    <div class="map-container">
    <panZoom :options="{minZoom: 0.8, maxZoom: 6}">
      <radio-svg-map v-on:click="selectTheCountry()" v-model="selectedLocation" :map="World" />
    </panZoom>
    </div>
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
  mounted() {
    eventBus.$on('map-location-selected', (country) => {
      this.selectedLocation = country.alpha2Code.toLowerCase();
  })
  },
  methods: {
      selectTheCountry: function() {
      for (let i=0; i<this.countries.length; i++) {
        const country = this.countries[i]
        if(this.selectedLocation === country.alpha2Code.toLowerCase()) {
          this.selectedCountry = country;
          eventBus.$emit('map-click', this.selectedCountry);
        };
      };
    },
}}
</script>

<style src="../styles/map.css">


</style>