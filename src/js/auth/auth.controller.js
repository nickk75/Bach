class AuthCtrl {
    constructor(User, $state) {
        'ngInject';

         this.User = User;

        this.title = $state.current.title;
        this.authType = $state.current.name.replace('app.', '');

    }

    submitForm() {
        this.isSubmitting = true;

        this.User.attemptAuth(this.authType, this.formData).then(
            // success call back, console.log the data we are getting back from the server
            (res) => {
                this.isSubmitting = false;
                console.log(res);
            },
            (err) => {
            // error call back, we console.log the errors that are logged in an errors object from the server
                this.isSubmitting = false;
                this.errors = err.data.errors;
            }
        )
    }
}

export default AuthCtrl;