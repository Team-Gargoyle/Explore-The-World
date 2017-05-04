import { templates } from 'templates';
import 'bootstrap';

const mapsController = function () {
    templates.getPage('lucky', {})
        .done();
};

export { mapsController };