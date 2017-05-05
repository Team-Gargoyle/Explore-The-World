import 'jquery';
//Templates
import {templates} from 'templates';

//Pages
import {homeController} from 'homeController';
import {regionController} from 'regionController';
import {atozController} from 'atozController';
import {mapsController} from 'mapsController';
//Regions

import {asiaController} from 'asiaController';
import {africaController} from 'africaController';
import {oceaniaController} from 'oceaniaController';
import {americasController} from 'americasController';
import {europeController} from 'europeController';

//User
import {registerController} from 'registerController';
import {loginController} from 'loginController';

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
    })
    .on({
        '/home': () => homeController(),
        '/atoz': () => atozController(),
        '/maps': () => mapsController(),
        '/register': () => registerController(),
        '/login': () => loginController(),
    })
    .notFound(() => templates.getPage('error404', {}))
    .resolve();
