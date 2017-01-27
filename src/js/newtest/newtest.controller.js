class NewTestCtrl {
  constructor(NewTest, $state, $http) {
    'ngInject';

    this._NewTest = NewTest;
    this.browsers = this._NewTest.object.browsers;
    this.env = this._NewTest.object.environments;
  }
}

export default NewTestCtrl;
