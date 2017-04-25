import 'jquery';
import {templates} from 'templates';
import {registerController} from 'registerController';
import {loginController} from 'loginController';
import {logoutController} from 'logoutController';
import {userController} from 'userController';
import {homeController} from 'homeController';
import {changePasswordController} from 'changePasswordController';
import {editProfileController} from 'editProfileController';

const router = new Navigo(null, false, '#!');

router
    .on(() => homeController())
    .on({
        '/home': () => homeController(),
    })
    .notFound(() => templates.getPage('notFound', {}))
    .resolve();

// const ref = firebase.database().ref();

// ref.on("value", function(snapshot) {
//     console.log(snapshot.val());
// }, function (error) {
//     console.log("Error: " + error.code);
// });