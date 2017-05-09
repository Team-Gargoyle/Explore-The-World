import { templates } from 'templates';
import 'toastr';

const loginController = function (user) {
    templates.getPage('login', {})
        .done(() => {

            const $loginBtn = $('#btn-login');
            const $email = $('#tb-email');
            const $pass = $('#tb-password');

            $loginBtn.on('click', event => {
                event.preventDefault();
                if ($email.val() && $pass.val()) {
                    const user = firebase.auth().signInWithEmailAndPassword($email.val(), $pass.val());

                    user
                        .then((usr) => {
                            $('#loginBtn').addClass('hidden');
                            $('#registerBtn').addClass('hidden');
                            $('#currentUser').removeClass('hidden').text(`Hello, ${usr.displayName}`);
                            $('#logoutBtn').removeClass('hidden');

                            toastr.options.positionClass = 'toast-top-center';
                            toastr.options.preventDuplicates = true;
                            toastr.options.closeButton = true;

                            toastr.success(`You're logged in as ${usr.displayName}`);

                            location.hash = '/home';
                            (function reload() {
                                setTimeout(location.reload(true), 500);
                            })();

                            var dateTime = new Date();
                            localStorage.setItem('date', dateTime);
                        },
                        function (error) {
                            toastr.options.positionClass = 'toast-top-center';
                            toastr.options.preventDuplicates = true;
                            toastr.options.closeButton = true;

                            toastr.error(`There was an error: ${error.message}
                                            Please try again!`);
                        });
                } else {
                    toastr.options.positionClass = 'toast-top-center';
                    toastr.options.preventDuplicates = true;
                    toastr.options.closeButton = true;

                    toastr.error('Empty fields!');
                }
            });
        });
};

export { loginController };
