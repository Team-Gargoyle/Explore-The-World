SystemJS.config({
    'transpiler': 'plugin-babel',
    'map': {
        'plugin-babel': '../node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': '../node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
        'jquery': '../node_modules/jquery/dist/jquery.js',
        //'main': './app-modules/main.js',
        //'data': './app-modules/data.js',
        //'utils': './app-modules/utils.js',
        //'seed-data': './app-modules/seed-data.js',
        //'person-component': './app-modules/person-component.js'
    }
});