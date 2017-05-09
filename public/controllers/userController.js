import { templates } from 'templates';

const userController = function () {
        templates.getPage('user', {})
        .done();
};

export { userController };
