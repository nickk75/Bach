
// This is exactly the same as creating a class and exporting it as a User, to actually wording it this way.
// All our controllers create classes and export the controllers then.
export default class User {
    constructor(JWT, AppConstants, $http) {
        'ngInject';

// Creating references for the services that we are injecting
        this._JWT = JWT;
        this._AppConstants = AppConstants;
        this._$http = $http;

// Current is the current individual logged in,
// if u invoke current, it shows who is logged in
        this.current = null;
    }

// Creating a method attemptAuth with 2 arguments
  attemptAuth(type, credentials) {
  // below we are changing routes depending on login/register information
  // This in essence is an if statement,
  // if type === login (produces a boolean result) if its true then, route to /login, otherwise give an empty string
    let route = (type === 'login') ? '/login': '';
      return this._$http({
        url: this._AppConstants.api + '/users' + route,
        method: 'POST',
        data: {
            user: credentials
        }
    }).then(
    // (res) => is the same as fucntion(res)
        (res) => {
            this._JWT.save(res.data.user.token);
            this.current = res.data.user;

// returns the res.data.user data.
            return res;
            }
        );
    }
}

