<template>
<section id="country-detail">
  <article v-if="country">
    <h2>{{country.name}}</h2>
      <img id="country-flag" :src="country.flag" :alt="'Flag of ' + country.name"/>
    <p>
      {{ country.name }} is a country in the {{ country.subregion }} part of {{ country.region }}.
    <p>
      {{ country.name }} has a population of {{ country.population }} people spread over a surface area of {{ country.area }} square miles.
    </p>
    <p>
      The capital of {{ country.name }} is {{ country.capital }}.
    </p>

     <p>
       Play National Anthem of {{ country.name }}

       <p>
      <audio :key="this.audioUrl" controls id="player" preload="auto" controlsList="nodownload">
        <source :src="this.audioUrl" >
        </audio>
     </p>
        
    <p>
      Learn about the neighbours of {{ country.name }}:
      <bordering-countries-list :borderingCountries="borderingCountries"></bordering-countries-list>
    </p>
  </article>
  </section>
</template>

<script>
import { eventBus } from "@/main.js";
import BorderingCountriesList from "./BorderingCountriesList.vue"

export default {
  name: "country-detail",

  props: ["country", "borderingCountries"],
  components: {
    "bordering-countries-list": BorderingCountriesList
  },
  methods: {
  },

  computed: {
    audioUrl() {
      const lowerAlpha2Code = this.country.alpha2Code.toLowerCase()
      return `http://www.nationalanthems.info/${lowerAlpha2Code}.mp3`
    }
  }
};
</script>

<style lang="css" scoped>
.testing {
  color: red;
}

#country-detail {
  border: solid 4px darkgreen;
  background-color: yellow;
  border-radius: 10px;
  height: max-content;
  margin: 10px;
  padding: 5px;
  width: 400px
}

#country-flag {
  width: 120px;
  margin-right: 10px;
  border: solid 2px black;
  box-shadow: 5px 5px 15px 5px gray;
  
  
}

h1 {
  font-weight: bold;
  text-justify: auto;
}


</style>

//  