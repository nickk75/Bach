class NewTestCtrl {
  constructor(NewTest, $state, $http) {
    'ngInject';

    this._NewTest = NewTest;
    this.options = this._NewTest.options;
    this.environments = this._NewTest.options.environments;

    }
}

export default NewTestCtrl;
