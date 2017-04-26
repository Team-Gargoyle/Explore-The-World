import { templates } from 'templates';
import 'bootstrap';

const regionController = function () {
    templates.getPage('regions', {})
        .done();
};

export { regionController };