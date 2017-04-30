import { templates } from 'templates';
import 'bootstrap';
import 'jqueryUI';

const regionController = function () {

    templates.getPage('regions', {})
        .done(() => {
            $("#accordion").accordion({
                collapsible: false
            });
        }

        );
};

export { regionController };