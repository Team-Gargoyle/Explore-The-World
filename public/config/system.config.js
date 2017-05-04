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
        
        "jqueryUI": "../node_modules/jquery-ui-dist/jquery-ui.js",
        "bootstrap": "../node_modules/bootstrap/dist/js/bootstrap.min.js",
        //for routing
        "navigo": "../node_modules/navigo/lib/navigo.js",

        //App files
        "index": "../app-modules/index.js",
        "templates": "../app-modules/templates.js",
        "regionTemplate": "../app-modules/regionTemplate.js",
        
        "homeController": "../controllers/homeController.js",

        //regionControllers
        "regionController": "../controllers/regionController.js",
        "europeController": "../controllers/europeController.js",
        "asiaController": "../controllers/asiaController.js",
        "africaController": "../controllers/africaController.js",
        "oceaniaController": "../controllers/oceaniaController.js",
        "americasController": "../controllers/americasController.js",

        "mapsController": "../controllers/mapsController.js",
        
        "atozController": "../controllers/atozController.js",

        "registerController": "../controllers/registerController.js",
        "loginController": "../controllers/loginController.js",

        //database
        "countriesDatabase": "../database/countriesDatabase.js"
    }
});