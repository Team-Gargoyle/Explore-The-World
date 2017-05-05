import 'jquery';

const countriesDatabase = (function () {
    const MAIN_API_URL = `https://restcountries.eu/rest/v2`;

    function getCountryByName(countryName) { // bulgaria
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${MAIN_API_URL}/name/${countryName}`,
                method: 'GET'
            })
            .done(resolve)
            .fail(reject);
        });
    }

    function getCountriesByRegion(regionName) { // europe, africa, americas, asia, oceania
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${MAIN_API_URL}/region/${regionName}`,
                method: 'GET'
            })
            .done(resolve)
            .fail(reject);
        });
    }

    function getAllCountries() { // all
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${MAIN_API_URL}/all`,
                method: 'GET'
            })
            .done(resolve)
            .fail(reject);
        });
    }

    return {
        getCountryByName,
        getCountriesByRegion,
        getAllCountries
    };

}());

const euroCountries = `europe`; //53
const africaCountries = `africa`; //60
const americasCountries = `americas`; //57
const asiaCountries = `asia`; //50
const oceaniaCountries = `oceania`; //27

const bulgaria = `bulgaria`;


export { countriesDatabase };

