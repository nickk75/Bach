function AuthConfig($stateProvider, $httpProvider) {
  'ngInject';

  $stateProvider

  .state('app.login', {
    url: '/login',
    controller: 'AuthCtrl as $ctrl',
    templateUrl: 'auth/auth.html',
    title: 'Login',
    resolve : {
      auth: function(User) {
        // they can only access this route if they are not logged in
        // we ensure that they are not logged in
        return User.ensureAuthIs(false);
      }
    }
  })
  .state('app.signup', {
    url: '/signup',
    controller: 'AuthCtrl as $ctrl',
    templateUrl: 'auth/auth.html',
    title: 'Sign up',
    resolve : {
      auth: function(User) {
        // they can only access this route if they are not logged in
        // we ensure that they are not logged in
        return User.ensureAuthIs(false);
      }
    }
  });

};

export default AuthConfig;