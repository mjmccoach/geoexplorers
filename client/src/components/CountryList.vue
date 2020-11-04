<template>
  <section id="country-list">
    <ul class="scroll">
      <country-list-item
        v-for="(country, index) in countries" :country="country" :key="index"
        
        >
        
      </country-list-item>
    </ul>
  </section>
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
.scroll {
  overflow-y: auto;
  list-style: none;
  max-height: 100px
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