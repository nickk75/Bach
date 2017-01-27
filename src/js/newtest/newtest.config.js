function NewTestConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.newtest', {
    url: '/newtest',
    controller: 'NewTestCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'newtest/newtest.html',
    title: 'New Test',
    resolve:{
      auth: function(User) {
        return User.ensureAuthIs(true);
      }
    }
  });

};

export default NewTestConfig;