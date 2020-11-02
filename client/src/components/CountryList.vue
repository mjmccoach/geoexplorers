<template>
  <section id="country-list">
    <h1>Click a country for more info</h1>

    <ul class="scroll">
      <country-list-item
        v-for="(country, index) in countries" :country="country" :key="index" 
      >
      </country-list-item>
    </ul>
  </section>
</template>

<script>
import CountryListItem from "@/components/CountryListItem";

export default {
  name: "country-list",
  components: {
    "country-list-item": CountryListItem,
  },

  props: ["countries"],
};
</script>

<style scoped>
.scroll {
  overflow-y: auto;
  max-height: 400px;
}
</style>