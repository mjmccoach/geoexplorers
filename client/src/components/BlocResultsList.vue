<template>
    <div>
        <ul>
            <bloc-results-list-item
            v-for="(country, index) in countries" :country="country" :key="index"            
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
// v-if="country.regionalBlocs[0].name === selectedBloc" 