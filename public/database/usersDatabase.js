const usersDatabse = (function () {

    function register (email, password) { 
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    function login (email, password) { 
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    function logout () { 
        return firebase.auth().signOut();
    }

    function onAuthStateChanged(nextOrObserver, error, completed) {
        return firebase.auth().onAuthStateChanged(nextOrObserver, error, completed);
    }

    function getUser () {
        return firebase.auth().currentUser;
    }

    return {
        register: register,
        login: login,
        logout: logout,
        onAuthStateChanged: onAuthStateChanged,
        getUser: getUser
    };

}());


export { usersDatabse };

