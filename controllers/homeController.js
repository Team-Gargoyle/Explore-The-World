import { handlebars } from 'handlebars';
import 'bootstrap';

const homeController = function () {
    handlebars.getPage('sample', {})
        .done(() => {
            $('.carousel').carousel({
                interval: 3000
            })
        })
};

export {homeController};