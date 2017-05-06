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

        //for Routing
        "navigo": "../node_modules/navigo/lib/navigo.js",

        //App files
        "index": "../app-modules/index.js",
        "templates": "../app-modules/templates.js",
        
        //Pages Controllers
        "homeController": "../controllers/homeController.js",
        "regionController": "../controllers/regionController.js",
        "atozController": "../controllers/atozController.js",
        "mapsController": "../controllers/mapsController.js",

        //Regions Controllers
        "europeController": "../controllers/europeController.js",
        "asiaController": "../controllers/asiaController.js",
        "africaController": "../controllers/africaController.js",
        "oceaniaController": "../controllers/oceaniaController.js",
        "americasController": "../controllers/americasController.js",

        //User Controllers
        "registerController": "../controllers/registerController.js",
        "loginController": "../controllers/loginController.js",
        "userController": "../controllers/userController.js",
        "logoutController": "../controllers/logoutController.js",
        
        //database
        "countriesDatabase": "../database/countriesDatabase.js",
        "usersDatabase": "../database/usersDatabase.js",

        "toastr": "../node_modules/toastr/toastr.js"
    }
});