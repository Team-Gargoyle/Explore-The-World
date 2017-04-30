import 'jquery';

import {templates} from 'templates';
import {regionTemplate} from 'regionTemplate';

//Homepage
import {homeController} from 'homeController';
//Regions
import {regionController} from 'regionController';
import {asiaController} from 'asiaController';
import {africaController} from 'africaController';
import {oceaniaController} from 'oceaniaController';
import {americasController} from 'americasController';
import {europeController} from 'europeController';

import {atozController} from 'atozController';
import {luckyController} from 'luckyController';

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
        '/lucky': () => luckyController(),
        '/register': () => registerController(),
        '/login': () => loginController(),
    })
    .notFound(() => templates.getPage('error404', {}))
    .resolve();
