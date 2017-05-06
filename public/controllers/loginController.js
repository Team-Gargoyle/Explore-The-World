import { templates } from 'templates';
import {usersDatabase} from 'usersDatabase';

const loginController = function (user) {
    templates.getPage('login', {})
        .done();
    };

export { loginController };
