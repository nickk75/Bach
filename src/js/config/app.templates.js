angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("article/article.html","<div class=\"article-page\">\r\n\r\n  <!-- Banner for article title, action buttons -->\r\n  <div class=\"banner\">\r\n    <div class=\"container\">\r\n\r\n      <h1>Example article title</h1>\r\n\r\n      <div class=\"article-meta\">\r\n        <!-- Show author info + favorite & follow buttons -->\r\n        <div class=\"article-meta\">\r\n          <a href=\"\"><img /></a>\r\n          <div class=\"info\">\r\n            <a href=\"\" class=\"author\">Brad Green</a>\r\n            <span class=\"date\">January 20th</span>\r\n          </div>\r\n\r\n          <button class=\"btn btn-sm btn-outline-secondary\">\r\n            <i class=\"ion-plus-round\"></i>\r\n            &nbsp;\r\n            Follow Brad Green\r\n          </button>\r\n          &nbsp;\r\n          <button class=\"btn btn-sm btn-outline-primary\">\r\n            <i class=\"ion-heart\"></i>\r\n            &nbsp;\r\n            Favorite Article <span class=\"counter\">(29)</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <!-- Main view. Contains article html and comments -->\r\n  <div class=\"container page\">\r\n\r\n    <!-- Article\'s HTML & tags rendered here -->\r\n    <div class=\"row article-content\">\r\n      <div class=\"col-xs-12\">\r\n\r\n        <div>\r\n          <p>This is the content of our article.</p>\r\n        </div>\r\n\r\n        <ul class=\"tag-list\">\r\n          <li class=\"tag-default tag-pill tag-outline\">\r\n            Tag One\r\n          </li>\r\n          <li class=\"tag-default tag-pill tag-outline\">\r\n            Tag Two\r\n          </li>\r\n        </ul>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <hr />\r\n\r\n    <div class=\"article-actions\">\r\n\r\n      <!-- Show author info + favorite & follow buttons -->\r\n      <div class=\"article-meta\">\r\n        <a href=\"\"><img /></a>\r\n        <div class=\"info\">\r\n          <a href=\"\" class=\"author\">Brad Green</a>\r\n          <span class=\"date\">January 20th</span>\r\n        </div>\r\n\r\n        <button class=\"btn btn-sm btn-outline-secondary\">\r\n          <i class=\"ion-plus-round\"></i>\r\n          &nbsp;\r\n          Follow Brad Green\r\n        </button>\r\n        &nbsp;\r\n        <button class=\"btn btn-sm btn-outline-primary\">\r\n          <i class=\"ion-heart\"></i>\r\n          &nbsp;\r\n          Favorite Article <span class=\"counter\">(29)</span>\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <!-- Comments section -->\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-8 offset-md-2\">\r\n\r\n        <div>\r\n          <form class=\"card comment-form\">\r\n            <div class=\"card-block\">\r\n              <textarea class=\"form-control\"\r\n                placeholder=\"Write a comment...\"\r\n                rows=\"3\"></textarea>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n              <img class=\"comment-author-img\" />\r\n              <button class=\"btn btn-sm btn-primary\" type=\"submit\">\r\n               Post Comment\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n          <div class=\"card-block\">\r\n            <p class=\"card-text\">This is an example comment.</p>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <a class=\"comment-author\" href=\"\">\r\n              <img class=\"comment-author-img\" />\r\n            </a>\r\n            &nbsp;\r\n            <a class=\"comment-author\" href=\"\">\r\n              BradGreen\r\n            </a>\r\n            <span class=\"date-posted\">\r\n              Jan 20, 2016\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n");
$templateCache.put("auth/auth.html","<div class=\"auth-page\">\r\n  <div class=\"container page\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-md-6 offset-md-3 col-xs-12\">\r\n        <h1 class=\"text-xs-center\" ng-bind=\"::$ctrl.title\"></h1>\r\n        <p class=\"text-xs-center\">\r\n          <!-- we are targetting the login controller, if authType === signup, and vice versa for the one below -->\r\n          <a ui-sref=\"app.login\" ng-show=\"$ctrl.authType === \'signup\'\">\r\n              Login\r\n          </a>\r\n          <a ui-sref=\"app.signup\" ng-show=\"$ctrl.authType === \'login\'\">\r\n              Sign up\r\n          </a>\r\n        </p>\r\n\r\n        <!-- We create a component that has a html template, with the functionality we want to be exectu\r\n        We might re-use that component again in the applciation, so instead of retyping it each time,\r\n        we can just access it through the code below -->\r\n        <list-errors errors=\"$ctrl.errors\"></list-errors>\r\n\r\n\r\n        <form ng-submit=\"$ctrl.submitForm()\">\r\n          <!-- Freeze the form until the form is submitted, no other functionality can take place -->\r\n          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\r\n\r\n            <fieldset class=\"form-group\" ng-show=\"$ctrl.authType === \'signup\'\">\r\n              <input class=\"form-control form-control-lg\"\r\n                type=\"text\"\r\n                placeholder=\"Username\"\r\n                ng-model=\"$ctrl.formData.username\" />\r\n            </fieldset>\r\n\r\n            <fieldset class=\"form-group\">\r\n              <input class=\"form-control form-control-lg\"\r\n                type=\"email\"\r\n                placeholder=\"Email\"\r\n                ng-model=\"$ctrl.formData.email\" />\r\n            </fieldset>\r\n\r\n            <fieldset class=\"form-group\">\r\n              <input class=\"form-control form-control-lg\"\r\n                type=\"password\"\r\n                placeholder=\"Password\"\r\n                ng-model=\"$ctrl.formData.password\" />\r\n            </fieldset>\r\n\r\n            <button class=\"btn btn-lg btn-primary pull-xs-right\"\r\n              type=\"submit\" ng-bind=\"::$ctrl.title\">\r\n\r\n            </button>\r\n\r\n          </fieldset>\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>");
$templateCache.put("components/list-errors.html","<ul class=\"error-messages\" ng-show=\"$ctrl.errors\">\r\n<!-- This iterates through every key in the object -->\r\n    <div ng-repeat=\"(field, errors) in $ctrl.errors\">\r\n    <!-- While this repeat is for the strings in the object -->\r\n        <li ng-repeat=\"error in errors\">\r\n        <!-- display the field (e-mail, pass etc) and the error associated to the field -->\r\n        {{field}} {{error}}\r\n        </li>\r\n    </div>\r\n</ul>");
$templateCache.put("editor/editor.html","<div class=\"editor-page\">\r\n  <div class=\"container page\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-10 offset-md-1 col-xs-12\">\r\n\r\n        <list-errors errors=\"$ctrl.errors\"></list-errors>\r\n        <form>\r\n          <!-- TODO! create is submitting controller -->\r\n          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\r\n\r\n            <fieldset class=\"form-group\">\r\n              <!-- TODO! create is article title (test title) controller -->\r\n              <input class=\"form-control form-control-lg\"\r\n                ng-model=\"$ctrl.article.title\"\r\n                type=\"text\"\r\n                placeholder=\"Test Title\" />\r\n            </fieldset>\r\n\r\n\r\n            <label ng-repeat=\"entry in $ctrl._Gsheets.entries\">\r\n              <input type=\"checkbox\"> <b> testcase type: </b>{{entry.gsx$type.$t}} <b>testcase ID: </b>{{entry.gsx$testcaseid.$t}}\r\n            </label>\r\n          </fieldset>\r\n        </form>\r\n\r\n\r\n\r\n\r\n\r\n        <button class=\"btn btn-lg pull-xs-right btn-primary\" type=\"button\" ng-click=\"$ctrl.submit()\">\r\n          Run Test\r\n        </button>\r\n\r\n\r\n\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");
$templateCache.put("home/home.html"," <div class=\"home-page\">\r\n\r\n  <!-- Splash banner that only shows when not logged in -->\r\n  <div class=\"banner\" show-authed=\"false\">\r\n    <div class=\"container\">\r\n      <h1 class=\"logo-font\" ng-bind=\"::$ctrl.appName | lowercase\"></h1>\r\n      <p>Metlife QA Automation</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container page\">\r\n  <div class=\"row\">\r\n\r\n\r\n    <!-- Main view - contains tabs & article list -->\r\n    <div class=\"col-md-9\">\r\n      <!-- Tabs for toggling between feed, article lists -->\r\n      <div class=\"feed-toggle\">\r\n        <ul class=\"nav nav-pills outline-active\">\r\n\r\n          <li class=\"nav-item\" show-authed=\"true\">\r\n            <a href=\"\" class=\"nav-link active\">\r\n              Your Feed\r\n            </a>\r\n          </li>\r\n\r\n          <li class=\"nav-item\">\r\n            <a href=\"\" class=\"nav-link\">\r\n              Global Feed\r\n            </a>\r\n          </li>\r\n\r\n        </ul>\r\n      </div>\r\n\r\n      <!-- List the current articles -->\r\n      <div class=\"article-preview\">\r\n        <div class=\"article-meta\">\r\n          <a href=\"\"><img /></a>\r\n          <div class=\"info\">\r\n            <a href=\"\" class=\"author\">Nick the Greek</a>\r\n            <span class=\"date\">January 20th</span>\r\n          </div>\r\n          <button class=\"btn btn-outline-primary btn-sm pull-xs-right\">\r\n            <i class=\"ion-heart\"></i> 29\r\n          </button>\r\n        </div>\r\n        <a href=\"\" class=\"preview-link\">\r\n          <h1>How to build Angular apps that scale</h1>\r\n          <p>Building web applications is not an easy task. It\'s even hard to make ones that scale.</p>\r\n          <span>Read more...</span>\r\n          <ul class=\"tag-list\">\r\n            <li class=\"tag-default tag-pill tag-outline\">programming</li>\r\n            <li class=\"tag-default tag-pill tag-outline\">web</li>\r\n          </ul>\r\n        </a>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <!-- Sidebar where popular tags are listed -->\r\n    <div class=\"col-md-3\">\r\n      <div class=\"sidebar\">\r\n\r\n        <p>Popular Tags</p>\r\n\r\n        <div class=\"tag-list\">\r\n          <a href=\"\" class=\"tag-default tag-pill\">\r\n            Tag One\r\n          </a>\r\n          <a href=\"\" class=\"tag-default tag-pill\">\r\n            Tag Two\r\n          </a>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    End the row & container divs\r\n  </div>\r\n</div>\r\n\r\n</div>\r\n");
$templateCache.put("layout/app-view.html","<app-header></app-header>\r\n\r\n<div ui-view></div>\r\n\r\n<app-footer></app-footer>\r\n");
$templateCache.put("layout/footer.html","<footer>\r\n  <div class=\"container\">\r\n    <a class=\"logo-font\" ui-sref=\"app.home\" ng-bind=\"::$ctrl.appName | lowercase\"></a>\r\n    <span class=\"attribution\">\r\n      &copy; {{::$ctrl.date | date:\'yyyy\'}}.\r\n      Designed by Nikos Konstantinidis. Code Licensed under MIT\r\n    </span>\r\n  </div>\r\n</footer>\r\n");
$templateCache.put("layout/header.html","<nav class=\"navbar navbar-light\">\r\n  <div class=\"container\">\r\n\r\n    <a class=\"navbar-brand\"\r\n      ui-sref=\"app.home\"\r\n      ng-bind=\"::$ctrl.appName | lowercase\">\r\n    </a>\r\n\r\n    <!-- Show this for logged out users -->\r\n    <ul show-authed=\"false\"\r\n      class=\"nav navbar-nav pull-xs-right\">\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"\r\n          ui-sref-active=\"active\"\r\n          ui-sref=\"app.home\">\r\n          <button class=\"btn\" \"btn-primary\" type=\"button\">Home</button>\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"\r\n          ui-sref-active=\"active\"\r\n          ui-sref=\"app.login\">\r\n          <button class=\"btn\" \"btn-primary\" type=\"button\">Login</button>\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"\r\n          ui-sref-active=\"active\"\r\n          ui-sref=\"app.signup\">\r\n          <button class=\"btn\" \"btn-primary\" type=\"button\">Sign up</button>\r\n        </a>\r\n      </li>\r\n\r\n    </ul>\r\n\r\n    <!-- Show this for logged in users -->\r\n    <ul show-authed=\"true\"\r\n      class=\"nav navbar-nav pull-xs-right\">\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"\r\n          ui-sref-active=\"active\"\r\n          ui-sref=\"app.editor\">\r\n          <button class=\"btn\" \"btn-primary\" type=\"button\">New Test</button>\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"\r\n          ui-sref-active=\"active\"\r\n          ui-sref=\"app.home\">\r\n          <button class=\"btn\" \"btn-primary\" type=\"button\">Edit Tests</button>\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"\r\n          ui-sref-active=\"active\"\r\n          ui-sref=\"app.settings\">\r\n          <button class=\"btn\" \"btn-primary\" type=\"button\">Settings</button>\r\n        </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\"\r\n          ui-sref-active=\"active\"\r\n          ui-sref=\"app.profile({ username: $ctrl.currentUser.username})\">\r\n          <button class=\"btn\" \"btn-primary\" type=\"button\">{{ $ctrl.currentUser.username }}</button>\r\n        </a>\r\n      </li>\r\n\r\n    </ul>\r\n\r\n\r\n  </div>\r\n</nav>\r\n");
$templateCache.put("profile/profile.html","<div class=\"profile-page\">\r\n\r\n  <!-- User\'s basic info & action buttons -->\r\n  <div class=\"user-info\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-md-10 offset-md-1\">\r\n\r\n          <h4 ng-bind=\"::$ctrl.profile.username\"></h4>\r\n\r\n<!-- we only show the settings bar if we are the user ng-show=$ctrl.isUser -->\r\n          <a ui-sref=\"app.settings\"\r\n            class=\"btn btn-sm btn-outline-secondary action-btn\"\r\n            ng-show=\"$ctrl.isUser\">\r\n            <i class=\"ion-gear-a\"></i> Edit Profile Settings\r\n          </a>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Container where User\'s posts & favs are list w/ toggle tabs -->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-xs-12 col-md-10 offset-md-1\">\r\n\r\n        <!-- Tabs for switching between author articles & favorites -->\r\n        <div class=\"articles-toggle\">\r\n          <ul class=\"nav nav-pills outline-active\">\r\n\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active\">\r\n                My Articles\r\n              </a>\r\n            </li>\r\n\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\">\r\n                Favorited Articles\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n\r\n        <!-- List of articles -->\r\n        <div class=\"article-preview\">\r\n          <div class=\"article-meta\">\r\n            <a href=\"\"><img /></a>\r\n            <div class=\"info\">\r\n              <a href=\"\" class=\"author\">BradGreen</a>\r\n              <span class=\"date\">January 20th</span>\r\n            </div>\r\n            <button class=\"btn btn-outline-primary btn-sm pull-xs-right\">\r\n              <i class=\"ion-heart\"></i> 29\r\n            </button>\r\n          </div>\r\n          <a href=\"\" class=\"preview-link\">\r\n            <h1>How to build Angular apps that scale</h1>\r\n            <p>Building web applications is not an easy task. It\'s even hard to make ones that scale.</p>\r\n            <span>Read more...</span>\r\n            <ul class=\"tag-list\">\r\n              <li class=\"tag-default tag-pill tag-outline\">programming</li>\r\n              <li class=\"tag-default tag-pill tag-outline\">web</li>\r\n            </ul>\r\n          </a>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n    <!-- End row & container divs -->\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n");
$templateCache.put("settings/settings.html","<div class=\"settings-page\">\r\n  <div class=\"container page\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 offset-md-3 col-xs-12\">\r\n\r\n        <h1 class=\"text-xs-center\">Your Settings</h1>\r\n\r\n<!-- we are able to hook at the errors without adding any additional functionality, as we have an error component pre created -->\r\n        <list-errors errors=\"$ctrl.errors\"></list-errors>\r\n\r\n        <form ng-submit=\"$ctrl.submitForm()\">\r\n          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\r\n\r\n\r\n            <fieldset class=\"form-group\">\r\n              <input class=\"form-control form-control-lg\"\r\n                type=\"text\"\r\n                placeholder=\"Username\"\r\n                ng-model=\"$ctrl.formData.username\" />\r\n            </fieldset>\r\n\r\n\r\n            <fieldset class=\"form-group\">\r\n              <input class=\"form-control form-control-lg\"\r\n                type=\"email\"\r\n                placeholder=\"Email\"\r\n                ng-model=\"$ctrl.formData.email\" />\r\n            </fieldset>\r\n\r\n            <fieldset class=\"form-group\">\r\n              <input class=\"form-control form-control-lg\"\r\n                type=\"password\"\r\n                placeholder=\"New Password\"\r\n                ng-model=\"$ctrl.formData.password\" />\r\n            </fieldset>\r\n\r\n            <button class=\"btn btn-lg btn-primary pull-xs-right\"\r\n              type=\"submit\">\r\n              Update Settings\r\n            </button>\r\n\r\n          </fieldset>\r\n        </form>\r\n\r\n        <!-- Line break for logout button -->\r\n        <hr />\r\n\r\n        <button class=\"btn btn-outline-danger\"\r\n          ng-click=\"$ctrl.logout()\">\r\n          Or click here to logout.\r\n        </button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");}]);