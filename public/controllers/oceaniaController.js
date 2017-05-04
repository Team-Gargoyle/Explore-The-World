import { regionTemplate } from 'regionTemplate';
import 'bootstrap';
import { countriesDatabase } from 'countriesDatabase';

const oceaniaController = function () {
    var mainEl = document.getElementById('content');
        mainEl.innerHTML = '';
    const asiaCountries = `oceania`;

    countriesDatabase.getCountriesByRegion(asiaCountries)
        .then(countries => {
            countries.forEach(count => {
                let flag = count.flag;
                let name = count.name;
                //second container
                let capital = count.capital;
                let population = count.population;
                let currency = count.currencies[0].code;
                let area = count.area;
                let alpha3Code = count.alpha3Code;
                //third container
                let topLevelDomain = count.topLevelDomain[0];
                let callingCodes = count.callingCodes[0];
                let timezones = count.timezones[0];
                let region = count.region;
                let nativeName = count.nativeName;

                let cObj = {
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
                
                loadCountries(cObj);
            });

            
        });
        //.catch(err => reject(error));
};

function loadCountries (data) { 
        regionTemplate.getPage('region', data);
}

export { oceaniaController };