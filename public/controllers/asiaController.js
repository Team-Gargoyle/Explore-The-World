import { regionTemplate } from 'regionTemplate';
import 'bootstrap';
import { countriesDatabase } from 'countriesDatabase';

const asiaController = function () {
    var mainEl = document.getElementById('content');
        mainEl.innerHTML = '';
    const asiaCountries = `asia`;

    countriesDatabase.getCountriesByRegion(asiaCountries)
        .then(countries => {
            countries.forEach(count => {
                let name = count.name;
                let capital = count.capital;
                let population = count.population;
                let currency = count.currencies[0].code;
                let area = count.area;
                let flag = count.flag;

                let cObj = {
                    name: name,
                    capital: capital,
                    population: population,
                    currency: currency,
                    area: area,
                    flag: flag
                };
                
                loadCountries(cObj);
            });

            
        });
        //.catch(err => reject(error));
};

function loadCountries (data) { 
        regionTemplate.getPage('region', data);
}

export { asiaController };