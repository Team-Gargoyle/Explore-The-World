import 'jquery';
import {templates} from 'templates';

import {homeController} from 'homeController';
import {regionController} from 'regionController';
import {atozController} from 'atozController';
import {luckyController} from 'luckyController';
import {registerController} from 'registerController';
import {loginController} from 'loginController';

const router = new Navigo(null, false, '#!');

router
    .on(() => homeController())
    .on({
        '/home': () => homeController(),
        '/regions': () => regionController(),
        '/atoz': () => atozController(),
        '/lucky': () => luckyController(),
        '/register': () => registerController(),
        '/login': () => loginController(),
    })
    .notFound(() => templates.getPage('error404', {}))
    .resolve();
