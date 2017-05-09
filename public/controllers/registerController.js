import { templates } from 'templates';

const registerController = function () {
    templates.getPage('register', {})
        .done(() => {

            const $registerBtn = $('#btn-register');
            const $username = $('#tb-username');
            const $email = $('#tb-email');
            const $pass = $('#tb-password');

            $registerBtn.on('click', event => {
                event.preventDefault();
                if ($email.val() && $pass.val()) {

                    const user = firebase.auth().createUserWithEmailAndPassword($email.val(), $pass.val())
                        .catch(function (error) {
                            const errorCode = error.code;
                            const errorMessage = error.message;

                            toastr.options.positionClass = 'toast-top-center';
                            toastr.options.preventDuplicates = true;
                            toastr.options.closeButton = true;

                            toastr.error(`There was an error: ${errorCode} - ${errorMessage}
                        Please try again.`);
                        });

                    user.then((usr) => {
                        firebase.auth().currentUser.updateProfile({
                            displayName: $username.val()
                        })
                            .then(() => {
                                toastr.options.positionClass = 'toast-top-center';
                                toastr.options.preventDuplicates = true;
                                toastr.options.closeButton = true;

                                toastr.success(`You have successfully registered as ${$username.val()}`);
                                location.hash = '/home';
                                location.reload(true);
                                
                                var dateTime = new Date();
                                localStorage.setItem('date', dateTime);
                            });
                    });
                } else {
                    toastr.options.positionClass = 'toast-top-center';
                    toastr.options.preventDuplicates = true;
                    toastr.options.closeButton = true;

                    toastr.error('Fill all the fields!');
                }
            });
        });
};

export { registerController };
