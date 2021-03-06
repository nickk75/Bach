
// This is exactly the same as creating a class and exporting it as a User, to actually wording it this way.
// All our controllers create classes and export the controllers then.
export default class User {
    constructor(JWT, AppConstants, $http, $state, $q) {
        'ngInject';

// Creating references for the services that we are injecting
        this._JWT = JWT;
        this._AppConstants = AppConstants;
        this._$http = $http;
        this._$state = $state;
        this._$q = $q;

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

    update(fields) {
        return this._$http({
            url: this._AppConstants.api + '/user',
            method: 'PUT',
            data: { user: fields }
        }).then(
            (res) => {
                this.current = res.data.user;
                return res.data.user;
            }
        );
    }
/*
Test on console by after logging in as a User
var User = angular.element(document).injector().get('User')
User.logout()
*/
    logout() {
        // setting logged in individual to null
        this.current = null;
        // calling the destroy method for the JWT token
        this._JWT.destroy();
        // refersh the page, return to the same state, but reload the data
        this._$state.go(this._$state.$current, null, {reload: true});
    }

// this method is invoked to check if the user is logged in or not
    verifyAuth() {
        // injecting $q is the way you create promises in Angular
        // creating deferred promise
        let deferred = this._$q.defer();

        // Check for the JWT token
        // if there is no token, they are not logged in
        if (!this._JWT.get()) {
            deferred.resolve(false);
            // return the promise becaue we defo know they are not logged in.
            // stops the rest of the code from executing because we know they are now logged in.
            return deferred.promise;
        }

        if (this.current) {
            // if they is data in the 'current', we know that they are logged in
            deferred.resolve(true);
        }

        else {
            // Otherwise we are making a request to the http server
            this._$http({
                url: this._AppConstants.api + '/user',
                method: 'GET',
                headers: {
                    Authorization: 'Token ' + this._JWT.get()
                }
            }).then(
            // we are handling the response from the request
                (res) => {
                    // we are equaling this.current with the data that we got from the server
                    this.current = res.data.user;
                    deferred.resolve(true);
                },
            // we are handling the error from the request
                (err) => {
                    // accounting for bad/faulty or out dated tokens
                    this._JWT.destroy();
                    deferred.resolve(false);
                }
                // Reject automatically handled by auth interceptor
                // Will boot them to homepage
            );
        }

        return deferred.promise;
    }

// returns a boolean response, if auth = true = logged in and vise versa
    ensureAuthIs(bool) {
        // creating deferred promise
        let deferred = this._$q.defer();
        // authValid is telling us true or faluse
        this.verifyAuth().then((authValid) => {
            // if authvalid is not equal to what we want it to be
            if(authValid !== bool) {
                // then change state to home page
                this._$state.go('app.home')
                deferred.resolve(false);
            }
            else
            // Otherwise let them be on the page
            deferred.resolve(true);
        });
        return deferred.promise;
    }
}

