import App from "@/App.vue";
import { countriesData } from './countries.js';
import { shallowMount } from '@vue/test-utils';
import fetch from 'fetch-mock'

describe('App', () => {
    let wrapper;
    beforeEach(async ()  => {
        fetch.once('https://restcountries.eu/rest/v2/all', JSON.stringify(countriesData));
        wrapper = shallowMount(App);
        await wrapper.vm.$nextTick()
        fetch.reset()
    })
    xit('should have 2 countries', () => {
        expect(wrapper.vm.countries).toHaveLength(2)
    });

    xit('should be able to add a favourite', () => {
        wrapper.setData({ selectedCountry: countriesData[0] })
        expect(wrapper.vm.selectedCountry.name).toMatch(countriesData[0].name)
        wrapper.vm.addToFavourites()
        expect(wrapper.vm.favouriteCountries).toHaveLength(1)
    });


});