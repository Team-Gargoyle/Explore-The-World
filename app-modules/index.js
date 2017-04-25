import 'jquery';
import { templateLoader } from 'templateLoader';
import { homeController } from 'homeController';

const router = new Navigo(null, false, '#!');

router
    .on(() => homeController())
    .on({
        '/home': () => homeController(),
    })
    .notFound(() => templates.getPage('notFound', {}))
    .resolve();
