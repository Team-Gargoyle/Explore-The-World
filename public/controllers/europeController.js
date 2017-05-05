import { regionTemplate } from 'regionTemplate';
import 'bootstrap';
import { countriesDatabase } from 'countriesDatabase';

const europeController = function () {
    var mainEl = document.getElementById('content');
        mainEl.innerHTML = '';
    const asiaCountries = `europe`;
    let allArray = [];

    countriesDatabase.getCountriesByRegion(asiaCountries)
        .then(countries => {
            countries.forEach(country => {
                let flag = country.flag;
                let name = country.name;
                //second container
                let capital = country.capital;
                let population = country.population;
                let currency = country.currencies[0].code;
                let area = country.area;
                let alpha3Code = country.alpha3Code;
                //third container
                let topLevelDomain = country.topLevelDomain[0];
                let callingCodes = country.callingCodes[0];
                let timezones = country.timezones[0];
                let region = country.region;
                let nativeName = country.nativeName;

                let countryObj = {
                    flag: flag,
                    name: name,
                    capital: capital,
                    population: population,
                    currency: currency,
                    area: area,
                    alpha3Code: alpha3Code,
                    topLevelDomain: topLevelDomain,
                    callingCodes: callingCodes,
                    timezones: timezones,
                    region: region,
                    nativeName: nativeName
                };

                allArray.push(countryObj);
                
            });
            
            loadCountries(allArray);
            
        });
        //.catch(err => reject(error));
};

function loadCountries (data) { 
        regionTemplate.getPage('region', data);
}

export { europeController };