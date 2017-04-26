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

//countriesDatabase.getCountryByName(bulgaria)
//        .then(countries => { //because is Array of one object
//            countries.forEach(count => {
//                console.log(`${count.name} : ${count.population}`);
//            });
//        })
//        .catch(err => reject(error));


countriesDatabase.getCountriesByRegion(asiaCountries)
    .then(countries => {
        countries.forEach(count => {
            console.log(`${count.name} : ${count.population}`);
        });
    })
    .catch(err => reject(error));


//countriesDatabase.getAllCountries()
//    .then(countries => {
//        countries.forEach(count => {
//            console.log(`${count.name} : ${count.population}`);
//        });
//    })
//    .catch(err => reject(error));


//-----------------------------------------------------------------------
//var url = `https://restcountries.eu/rest/v2/name/bulgaria`;

var url = `https://restcountries.eu/rest/v2/lang/ru`; //9

//Regions TOTAL 247
var europeUrl = `https://restcountries.eu/rest/v2/region/europe`; //53
var africaUrl = `https://restcountries.eu/rest/v2/region/africa`; //60
var americasUrl = `https://restcountries.eu/rest/v2/region/americas`; //57
var asiaUrl = `https://restcountries.eu/rest/v2/region/asia`; //50
var oceaniaUrl = `https://restcountries.eu/rest/v2/region/oceania`; //27

//All countries TOTAL 250
var allUrl = `https://restcountries.eu/rest/v2/all`;        // 250 