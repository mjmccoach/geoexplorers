<template lang="html">
  <article>
    <div>
      <li>
      {{ country.name }}
      </li>
    </div>
  </article>
</template>

<script>
import { eventBus } from "@/main.js";
import borderingCountries from "./BorderingCountries.vue"

export default {
  name: "bordering-country-item",
  props: ["borderingCountry"],
  components: {
    "bordering-countries": borderingCountries
  },
  methods: {
    selectCountry() {
      eventBus.$emit('country-selected', this.borderingCountry)
    }
  },
};
</script>

<style lang = "css" scoped>

.testing {
  color: red;
}

p {
  color: purple;
}

</style>