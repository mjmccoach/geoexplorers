const baseURL = 'http://localhost:3000/api/countries/';


export default {
    getCountries(){
        return fetch(baseURL)
        .then(res => res.json());
    },

    addCountry(country){
        return fetch(baseURL,{
            method:'POST',
            body:JSON.stringify(country),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json());
    },

    updateCountry(country){
        return fetch(baseURL + country._id, {
            method:'PUT',
            body:JSON.stringify(country),
            headers:{
                'Content-Type': 'application/json'
            }

        })
        .then(res => res.json());
    },

    deleteCountry(id){
        return fetch(baseURL +id, {
            method:'DELETE'
        }); 
    }
};





