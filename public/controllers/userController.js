import {templates} from 'templates';

const userController = function (user) {
    if (user) {
        templates.getPage('user', user)
        .done();
    }
};

export {userController};
