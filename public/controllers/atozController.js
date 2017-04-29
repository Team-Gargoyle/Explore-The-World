import { templates } from 'templates';
import 'bootstrap';

const atozController = function () {
    templates.getPage('atoz', {})
        .done();
};

export { atozController };