import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

// We attach all the services modules on this index.js instead of the outside index.js
import UserService from './user.service';
// attach to the angular module
servicesModule.service('User', UserService);

import JwtService from './jwt.service';
servicesModule.service('JWT', JwtService);

import ProfileService from './profile.service';
servicesModule.service('Profile', ProfileService);

export default servicesModule;
