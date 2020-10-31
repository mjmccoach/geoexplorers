<template>
  <section id="country-list">
    <h1>Click a country for more info</h1>

    <ul class="scroll">
      <country-list-item
        v-for="(country, index) in countries"
        :key="index"
        :country="country"
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

<style>
</style>