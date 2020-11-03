<template>
    <div>
        <ul>
            <bloc-results-list-item
            v-for="(country, index) in countries" :country="country" :key="index"
            v-if="country.bloc === selectedBloc"    
            >
            </bloc-results-list-item>
        </ul>
    </div>
</template>

<script>
import BlocResultsListItem from './BlocResultsListItem';

export default {
    name: "bloc-results-list",
    props: ['countries', 'selectedBloc'],
    components: {
        'bloc-results-list-item': BlocResultsListItem,
    }
}
</script>

<style>

</style>