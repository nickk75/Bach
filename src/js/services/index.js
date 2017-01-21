import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

// We attach all the services modules on this index.js instead of the outside index.js
import UserService from './user.service';
servicesModule.service('User', UserService);


export default servicesModule;
