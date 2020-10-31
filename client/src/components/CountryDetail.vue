<template>
  <article>
      <h1>{{ country.countryName }}</h1>

  </article>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
    name: 'country-detail',
    props: ['country'],
    components: {

    },
    methods: {

    }
}
</script>

<style lang="css" scoped>

.testing {
    color: red
}

</style>

//  