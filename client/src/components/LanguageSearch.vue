<template lang="html">
    <div>
        <li
        v-on:click="handleLanguageSelectionClick"
        v-if="language"
        >
        <span id="languages"> {{ language }} </span>
        </li>
    </div>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
    name: "language-search",
    props: ['language'],
    components: {},
    methods: {
        handleLanguageSelectionClick() {
            eventBus.$emit('language-selected', this.language);
            
        }
    }
}
</script>

<style lang="css" scoped>

</style>

