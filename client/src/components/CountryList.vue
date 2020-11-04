<template>
  <div class="country-list-wrapper">
    <ul class="scroll" id="country-list">
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
  width: 49%;
}

.scroll {
  overflow-y: auto;
  list-style: none;
  max-height: 100px;
}

#country-list {
  border: solid 4px darkgreen;
  background-color: aquamarine;
  border-radius: 6px;
  padding: 5px;
  width: 400px;
  margin: 10px;
}
</style>