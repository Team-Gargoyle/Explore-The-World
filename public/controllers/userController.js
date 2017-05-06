import {templates} from 'templates';
import 'bootstrap';

const userController = function () {
        templates.getPage('user', {})
        .done();
};

export { userController };