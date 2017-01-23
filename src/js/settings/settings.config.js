function SettingsConfig($stateProvider) {
  'ngInject';

    $stateProvider
    .state('app.settings', {
        url: '/settings',
        controller: 'SettingsCtrl',
        controllerAs: '$ctrl',
        templateUrl: 'settings/settings.html',
        title: 'Settings',
        resolve : {
          auth: function(User) {
            // they can only access this route if they are logged in
            // we ensure that they are logged in
            return User.ensureAuthIs(true);
          }
        }
    });
};

export default SettingsConfig;