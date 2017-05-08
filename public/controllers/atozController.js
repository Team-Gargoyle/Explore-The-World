import { templates } from 'templates';
import 'bootstrap';
import { countriesDatabase } from 'countriesDatabase';

const atozController = function () {
    let allCountriesArr = [];

    countriesDatabase.getAllCountries()
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

                allCountriesArr.push(countryObj);
                
            });

            loadCountries(allCountriesArr);
            console.log('loaded');
            srch();
           
        
   
        });
    //.catch(err => reject(error));
};

function loadCountries(data) {
    templates.getPage('country', data);
}

function solve() {
    return function (selector, suggestionsArray) {

        let selectedElement = document.querySelector(selector); //.autocomplete

        let textBoxPattern = selectedElement.getElementsByClassName("tb-pattern")[0]; //input

        let allCountries = Array.from(document.getElementsByClassName('country'));


        textBoxPattern.addEventListener("input", function (event) {
            var textBoxInput = textBoxPattern.value.toLowerCase();
            //console.log(Array.isArray(allCountries)); true
            if (textBoxInput !== undefined) {

                for (var i = 0; i < allCountries.length; i++) {
                    var currentSearch = allCountries[i].firstElementChild.innerHTML.toLowerCase(); // "Agff"
                    var currenEl = allCountries[i].firstElementChild;
                    
                    if (currentSearch.indexOf(textBoxInput) !== -1) {
                        currenEl.parentElement.style.display = "";
                    }
                    else {
                        currenEl.parentElement.style.display = "none";
                    }
                    if (textBoxInput === "") {
                        currenEl.parentElement.style.display = "none";
                    }
                };
            }
        });

    };
}

var srch = function () {
            console.log('hello');
            var name;
            var nameVal;

            $.getJSON('../database/countriesNamesArray.json', { name: nameVal }, function (data) {
                
                solve()(".autocomplete", data);
            });
        };

export { atozController };