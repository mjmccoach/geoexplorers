<template>
  <div class="country-list-wrapper">
    <ul id="country-list">
      <country-list-item v-for="(country, index) in countries" :country="country" :key="index"></country-list-item>
    </ul>
  </div>  
</template>

<script>
import { eventBus } from '@/main.js';
import CountryListItem from "@/components/CountryListItem";

export default {
  name: "country-list",
  props: ["countries"],
  computed: {
    combineLists: function() {
      const totalCountryList = this.countriesTyped.concat(this.countriesFirstLetter);
      return totalCountryList;
    }
  },
  components: {
    "country-list-item": CountryListItem,
  }
};
</script>

<style scoped>
.country-list-wrapper {
  margin-left: 10px;
}

#country-list {
  border: solid 4px black;
  background-color:teal;
  border-radius: 6px;
  padding: 0px;
  margin: 0 0 20px 0;
  width: 400px;
  overflow-y: auto;
  list-style: none;
  height: 200px;
  margin-block-start: 0;
	margin-block-end: 0;
  padding-inline-start: 0;
  box-shadow: 0 8px 13px rgba(0,0,0,0.21), 0 5px 5px rgba(0,0,0,0.21);
}

</style>