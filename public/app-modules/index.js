import 'jquery';

//Templates
import { templates } from 'templates';

//Pages
import { homeController } from 'homeController';
import { regionController } from 'regionController';
import { atozController } from 'atozController';
import { mapsController } from 'mapsController';

//Regions
import { asiaController } from 'asiaController';
import { africaController } from 'africaController';
import { oceaniaController } from 'oceaniaController';
import { americasController } from 'americasController';
import { europeController } from 'europeController';

//User
import { registerController } from 'registerController';
import { loginController } from 'loginController';
import { userController } from 'userController';
import { logoutController } from 'logoutController';

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        let currentUser = {
            'displayName': user.displayName,
            'email': user.email,
        };

        $('#currentUser').removeClass('hidden').text(`Hello, ${currentUser.displayName}!`);
        $('#logoutBtn').removeClass('hidden')
            .on('click', () => logoutController(currentUser));
        $('#loginBtn').addClass('hidden');
        $('#registerBtn').addClass('hidden');

        $('#regions').removeClass('hidden');
        $('#atoz').removeClass('hidden');
        $('#maps').removeClass('hidden');
    }
});

const router = new Navigo(null, false, '#!');

router
    .on(() => homeController())
    .on({
        '/regions/europe': () => europeController(),
        '/regions/asia': () => asiaController(),
        '/regions/africa': () => africaController(),
        '/regions/oceania': () => oceaniaController(),
        '/regions/americas': () => americasController(),
        '/regions': () => regionController(),
        '/home': () => homeController(),
        '/register': () => registerController(),
        '/login': () => loginController(),
        '/logout': () => logoutController(),
        '/user': () => userController(),
        '/atoz': () => atozController(),
        '/maps': () => mapsController(),

    })
    .notFound(() => templates.getPage('error404', {}))
    .resolve();
