import 'jquery';

const regionTemplate = (function () {
    function getPage(pageName, data) {
        const url = `templates/${pageName}.handlebars`;
        return $.get(url, function (html) {
            let hbTemplate = Handlebars.compile(html.toString());
            $('#content').append(hbTemplate(data));
        });
    }

    return {
        getPage: getPage
    };
}());

export {
    regionTemplate
};