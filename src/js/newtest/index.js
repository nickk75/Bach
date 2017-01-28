import angular from 'angular';

// Create the module where our functionality can attach to
let newtestModule = angular.module('app.newtest', []);

// Include our UI-Router config settings
import NewTestConfig from './newtest.config';
newtestModule.config(NewTestConfig);


// Controllers
import NewTestCtrl from './newtest.controller';
newtestModule.controller('NewTestCtrl', NewTestCtrl);


export default newtestModule;