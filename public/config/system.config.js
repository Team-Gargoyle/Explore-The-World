SystemJS.config({
    "transpiler": "plugin-babel",
    "map": {
        //systemJS
        "plugin-babel": "../node_modules/systemjs-plugin-babel/plugin-babel.js",
        "systemjs-babel-build": "../node_modules/systemjs-plugin-babel/systemjs-babel-browser.js",

        //jquery
        "jquery": "../node_modules/jquery/dist/jquery.js",
        //for HTML rendering:
        "handlebars": "../node_modules/handlebars/dist/handlebars.js",

        //UI for tabs, autocomplete, calendar otr else
        "jqueryUi": "../node_modules/jquery-ui-dist/jquery-ui.js",
        "bootstrap": "../node_modules/bootstrap/dist/js/bootstrap.min.js",

        //for routing
        "navigo": "../node_modules/navigo/lib/navigo.js",

        //App files
        "index": "../app-modules/index.js",
        "templates": "../app-modules/templates.js",
        "homeController": "../controllers/homeController.js",
        "luckyController": "../controllers/luckyController.js",
        "regionController": "../controllers/regionController.js",
        "atozController": "../controllers/atozController.js",
        "registerController": "../controllers/registerController.js",
        "loginController": "../controllers/loginController.js",

        //database
        "countriesDatabase": "../database/countriesDatabase.js"
    }
});