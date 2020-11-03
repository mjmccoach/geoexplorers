<template>
    <div>
        <ul>
            <language-results-list-item
            v-for="(country, index) in countries" :country="country" :key="index"
            v-if="country.languages[0].name === selectedLanguage"    
            >
            </language-results-list-item>
        </ul>
    </div>
</template>

<script>
import LanguageResultsListItem from './LanguageResultsListItem';

export default {
    name: "language-results-list",
    props: ['countries', 'selectedLanguage'],
    components: {
        'language-results-list-item': LanguageResultsListItem,
    },
    methods: {},
};
</script>

<style>

</style>