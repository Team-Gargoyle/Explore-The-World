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

// Simple jQuery AJAX Request - working

//$.ajax({
//    url: url,
//    method: 'GET',
//    cors: true,
//    //contentType: 'application/json',
//    success: function (data) {
//        //var countriesArray = data;
//        //console.log(countriesArray);
//        //document.getElementById('root').innerHTML = countriesArray[1].name + ' ' + countriesArray[1].population;
//        //console.log(Array.isArray(countriesArray)); //array with objects  
//
//        useReturnData(data);
//    }
//});
//
//function useReturnData(data) {
//    var countriesArray = data;
//    document.getElementById('root').innerHTML = countriesArray[1].name + ' ' + countriesArray[1].population;
//}

//-----------------------------------------------------------------------
// Simple Native AJAX Request

//function getRegion () {
//    //1. create the xhr
//    var xhr = new XMLHttpRequest();
//
//    //2. open the xhr to url and verb
//    xhr.open("GET", url, true);
//
//    //3. setup
//        //3.1 add headers
//    
//
//    //4. attach to ready event
//    xhr.onreadystatechange = function  () {
//        if (xhr.readyState !== 4) {
//            return;
//        }
//
//        switch(0 | (xhr.status / 100)){
//            case 2: 
//            var arr = JSON.parse(xhr.responseText);
//
//            var itemTemplate = document.createElement('li');
//            var list = document.createElement('ul');
//            var img = document.createElement('img');
//            img.style.width = '20px';
//            img.style.height = '20px';
//
//            for (var i = 0; i < arr.length; i+=1) {
//                var li = itemTemplate.cloneNode(true);
//                li.innerHTML = `Country: ${arr[i].name} with capital: ${arr[i].capital}`;
//                var pic = img.cloneNode(true);
//                pic.style.border = '1px solid black';
//                pic.style.margin = '5px';
//                pic.src = arr[i].flag;
//
//                li.appendChild(pic);
//                list.appendChild(li);
//            }
//
//            break;
//            case 4:
//            case 5: alert(xhr.responseText); 
//            break;
//        }
//
//        document.getElementById('root').appendChild(list);
//    };
//
//    //5. send the request
//    xhr.send();
//}
//
//
//getRegion();