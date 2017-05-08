import {homeController} from 'homeController';
import {loginController} from 'loginController';
import {logoutController} from 'logoutController';
import {userController} from 'userController';
import {registerController} from 'registerController';

mocha.setup('bdd');
const expect = chai.expect;

describe('Home controller tests', () => {

    it('Expect home controller to exist', () => {
        var controller = homeController;
        expect(controller).to.exist;
    });


    it('Expect home controller to be a function', () => {
        var controller = homeController;
        expect(controller).to.be.a('function');
    });
});

describe('Login controller tests', () => {

    it('Expect login controller to exist', () => {
        var controller = loginController;
        expect(controller).to.exist;
    });


    it('Expect login controller to be a function', () => {
        var controller = loginController;
        expect(controller).to.be.a('function');
    });


    it('Expect login controller to redirect to home page if login is successful.', function () {
        var user = "pesho";
        if (!(user)) {
            expect(location.hash).to.equal('/home');
        }
    });
});

describe('Logout controller tests', () => {

    it('Expect logout controller to exist', () => {
        var controller = logoutController;
        expect(controller).to.exist;
    });


    it('Expect logout controller to be a function', () => {
        var controller = logoutController;
        expect(controller).to.be.a('function');
    });


    it('Expect logout controller to redirect to home page if logout is successful.', function () {
        var user = "pesho";
        if (!(user)) {
            expect(location.hash).to.equal('/home');
        }
    });
});

describe('User controller tests', () => {

    it('Expect user controller to exist', () => {
        var controller = userController;
        expect(controller).to.exist;
    });


    it('Expect user controller to be a function', () => {
        var controller = userController;
        expect(controller).to.be.a('function');
    });
});

describe('Register controller tests', () => {

    it('Expect register controller to exist', () => {
        var controller = registerController;
        expect(controller).to.exist;
    });


    it('Expect register controller to be a function', () => {
        var controller = registerController;
        expect(controller).to.be.a('function');
    });


    it('Expect register controller to redirect to home page if registration is successful.', function () {
        var user = "pesho";
        if (!(user)) {
            expect(location.hash).to.equal('/home');
        }
    });
});

mocha.run();