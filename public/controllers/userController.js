import { templates } from 'templates';

const userController = function () {
       
        var data = localStorage.getItem('date');

        let dataObj = {
               data: data 
        };

        loadTime(dataObj);
};


function loadTime (data) { 
        templates.getPage('user', data);
}

export { userController };
