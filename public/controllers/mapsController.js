// import { templates } from 'templates';
// import 'bootstrap';
// import 'jquery';
// import { countriesDatabase } from 'countriesDatabase';

// const mapsController = function () {
//     var mainEl = document.getElementById('content');
//     mainEl.innerHTML = '';

//     mainEl.innerHTML = `
//         <select name="sweets" size ="3">
//         <option selected="selected">bulgaria</option>
//         <option>romania</option>
//         <option>france</option>
//         <option>germany</option>
//         </select>
//         <div id="div-selected">
//             <img id="selected-country" />
//         </div>`;

//     $("select")
//         .change(function () {
//             var str = "";
//             $("select option:selected").each(function () {
//                 str += $(this).text() + " ";
//             });
//             //console.log(str);

//         countriesDatabase.getCountryByName(str)
//         .then(countries => { //because is Array of one object
//             countries.forEach(count => {
//                 let lat = count.latlng[0],
//                     lng = count.latlng[1];

//                 //console.log(lat + ' ' + lng);  
//                 createImg(lat, lng);
//             });
            
//         });
        
//         })
//         .change();  
// };

// function createImg (lat, lng) {
//     var img = document.getElementById('selected-country');
//     img.src = `http://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng} 
//         &zoom=7
//         &size=900x900
//         &sensor=false`; 

//     return img;
// }



// export { mapsController };

import { templates } from 'templates';
import 'bootstrap';
import 'jquery';
import { countriesDatabase } from 'countriesDatabase';

const mapsController = function () {
    var mainEl = document.getElementById('content');
    mainEl.innerHTML = '';

    mainEl.innerHTML = `
        <select name="sweets" size ="3">
        <option selected="selected">bulgaria</option>
        <option>romania</option>
        <option>france</option>
        <option>germany</option>
        </select>
        <div id="map">
            
        </div>`;

    $("select")
        .change(function () {
            var str = "";
            $("select option:selected").each(function () {
                str += $(this).text() + " ";
            });
            //console.log(str);

        countriesDatabase.getCountryByName(str)
        .then(countries => { //because is Array of one object
            countries.forEach(count => {
                let lat = count.latlng[0],
                    lng = count.latlng[1];

                //console.log(lat + ' ' + lng);  
                myMap(lat, lng);
            });
            
        });
        
        })
        .change();  
};

function myMap(lat, lng) {
			var mapCanvas = document.getElementById("map");
			var myCenter = new google.maps.LatLng(lat, lng);
		
			
			var mapOptions = {center: myCenter, zoom: 6};
			var map = new google.maps.Map(mapCanvas, mapOptions);
		}


export { mapsController };