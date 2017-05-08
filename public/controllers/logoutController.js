import 'jquery';

const logoutController = function (user) {
    if (user) {

        firebase.auth().signOut()
            .then(function () {
                $('#currentUser').addClass('hidden').text(``);
                $('#logoutBtn').addClass('hidden');
                $('#loginBtn').removeClass('hidden');
                $('#registerBtn').removeClass('hidden');

                toastr.options.positionClass = 'toast-top-center';
                toastr.options.preventDuplicates = true;
                toastr.options.closeButton = true;

                toastr.success(`You've logged out!`);
                location.hash = '/home';
            })
            .catch(function (error) {
                const errorCode = error.code;
                const errorMessage = error.message;

                toastr.options.positionClass = 'toast-top-center';
                toastr.options.preventDuplicates = true;
                toastr.options.closeButton = true;

                toastr.error(`There was an error: ${errorCode} - ${errorMessage} Please try again.`);
            });
    };
};

export { logoutController };