SystemJS.config({
    'transpiler': 'plugin-babel',
    'map': {
        'plugin-babel': '../node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': '../node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
        
        'jquery': '../node_modules/jquery/dist/jquery.js',
        //for HTML rendering:
        'handlebars': '../node_modules/handlebars/dist/handlebars.js',
        //UI for tabs, autocomplete, calendar otr else
        'jqueryUi': '../node_modules/jquery-ui-dist/jquery-ui.js',
        "bootstrap": "../node-modules/bootstrap/dist/js/bootstrap.min.js",

        //for routing
        'navigo': '../node_modules/navigo/lib/navigo.js',

        "index": "../app-modules/index.js",
        "templates": "../app-modules/templates.js",
        "homeController": "../controllers/homeController.js",
        //'main': './app-modules/main.js',
        //'data': './app-modules/data.js',
        //'utils': './app-modules/utils.js',
        //'seed-data': './app-modules/seed-data.js',
        //'person-component': './app-modules/person-component.js'
    }
});