import { templates } from 'templates';
import 'bootstrap';

const luckyController = function () {
    templates.getPage('lucky', {})
        .done();
};

export { luckyController };