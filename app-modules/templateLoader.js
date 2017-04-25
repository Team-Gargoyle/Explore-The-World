import 'jquery';

const templateLoader = (function  () {
    function getPage (pageName, data) {
        const url = `handlebars/${pageName}.handlebars`;
        return $.get(url, function (html) {
            const hbTemplate = Handlebars.complie(html.toString());
            $('#content').html(hbTemplate(data));
        });
    }

    return {
        getPage: getPage
    };
}());

export { templateLoader };