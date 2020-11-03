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