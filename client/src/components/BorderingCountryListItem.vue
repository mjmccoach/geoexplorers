<template lang="html">
  <article>
    <div>
      <li v-if="countries.country.alpha3Code === borderingCountry">
        {{ countries.country.name }}
      </li>
    </div>
  </article>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  name: "bordering-country-list-item",
  props: ["countries", "borderingCountry"],
  components: {},
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