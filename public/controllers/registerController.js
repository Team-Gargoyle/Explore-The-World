import { templates } from 'templates';

const registerController = function () {
    templates.getPage('register', {})
        .done();
};

export { registerController };
