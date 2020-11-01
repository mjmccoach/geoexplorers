<template lang="html">
  <ul class="testing" id="bordering-countries">
    <bordering-country-item
    v-for="(borderingCountry, index) in countriesBorderingSelectedCountry" :borderingCountry="borderingCountry" key="index"
    >
    </bordering-country-item>
  </ul>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  name: "bordering-countries",
  props: ["countries", "countriesBorderingSelectedCountry"],
  components: {},
  methods: {},
};
</script>

<style lang="css" scoped>

.testing {
  color: red;
}


</style>