(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunksb_admin_bs4_angular_9"] = self["webpackChunksb_admin_bs4_angular_9"] || []).push([["src_app_login_login_module_ts"], {
    /***/
    45393:
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginRoutingModule": function LoginRoutingModule() {
          return (
            /* binding */
            _LoginRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login.component */
      98458);

      var routes = [{
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
      }];

      var _LoginRoutingModule = function LoginRoutingModule() {
        _classCallCheck(this, LoginRoutingModule);
      };

      _LoginRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _LoginRoutingModule);
      /***/
    },

    /***/
    98458:
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginComponent": function LoginComponent() {
          return (
            /* binding */
            _LoginComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./login.component.html */
      86850);
      /* harmony import */


      var _login_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.component.scss */
      60103);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../router.animations */
      74903);

      var _LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(router) {
          _classCallCheck(this, LoginComponent);

          this.router = router;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onLoggedin",
          value: function onLoggedin() {
            localStorage.setItem('isLoggedin', 'true');
          }
        }]);

        return LoginComponent;
      }();

      _LoginComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }];
      };

      _LoginComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LoginComponent);
      /***/
    },

    /***/
    80107:
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginModule": function LoginModule() {
          return (
            /* binding */
            _LoginModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login-routing.module */
      45393);
      /* harmony import */


      var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.component */
      98458);

      var _LoginModule = function LoginModule() {
        _classCallCheck(this, LoginModule);
      };

      _LoginModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule],
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent]
      })], _LoginModule);
      /***/
    },

    /***/
    60103:
    /*!********************************************!*\
      !*** ./src/app/login/login.component.scss ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  display: block;\n}\n\n.login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #222;\n  text-align: center;\n  color: #fff;\n  padding: 3em;\n}\n\n.login-page .col-lg-4 {\n  padding: 0;\n}\n\n.login-page .input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 0;\n}\n\n.login-page .input-underline {\n  background: 0 0;\n  border: none;\n  box-shadow: none;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n  color: #fff;\n  border-radius: 0;\n}\n\n.login-page .input-underline:focus {\n  border-bottom: 2px solid #fff;\n  box-shadow: none;\n}\n\n.login-page .rounded-btn {\n  border-radius: 50px;\n  color: rgba(255, 255, 255, 0.8);\n  background: #222;\n  border: 2px solid rgba(255, 255, 255, 0.8);\n  font-size: 18px;\n  line-height: 40px;\n  padding: 0 25px;\n}\n\n.login-page .rounded-btn:hover,\n.login-page .rounded-btn:focus,\n.login-page .rounded-btn:active,\n.login-page .rounded-btn:visited {\n  color: white;\n  border: 2px solid white;\n  outline: none;\n}\n\n.login-page h1 {\n  font-weight: 300;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 36px;\n}\n\n.login-page h1 small {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.login-page .form-group {\n  padding: 8px 0;\n}\n\n.login-page .form-group input::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page .form-group input:-moz-placeholder {\n  /* Firefox 18- */\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page .form-group input::-moz-placeholder {\n  /* Firefox 19+ */\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page .form-group input:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page .form-content {\n  padding: 40px 0;\n}\n\n.login-page .user-avatar {\n  border-radius: 50%;\n  border: 2px solid #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0FBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQVpzQjtFQWF0QixrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQUo7O0FBRUk7RUFDSSxVQUFBO0FBQVI7O0FBR0k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQURSOztBQUlJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlEQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBRlI7O0FBS0k7RUFDSSw2QkFBQTtFQUNBLGdCQUFBO0FBSFI7O0FBTUk7RUFFSSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBL0NrQjtFQWdEbEIsMENBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSlI7O0FBT0k7Ozs7RUFJSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBTFI7O0FBUUk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBTlI7O0FBUVE7RUFDSSwrQkFBQTtBQU5aOztBQVVJO0VBQ0ksY0FBQTtBQVJSOztBQVVRO0VBQ0ksMENBQUE7QUFSWjs7QUFXUTtFQUNJLGdCQUFBO0VBQ0EsMENBQUE7QUFUWjs7QUFZUTtFQUNJLGdCQUFBO0VBQ0EsMENBQUE7QUFWWjs7QUFhUTtFQUNJLDBDQUFBO0FBWFo7O0FBZUk7RUFDSSxlQUFBO0FBYlI7O0FBZ0JJO0VBRUksa0JBQUE7RUFDQSxzQkFBQTtBQWRSIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9naW4tcGFnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDNlbTtcblxuICAgIC5jb2wtbGctNCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgLmlucHV0LWxnIHtcbiAgICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzMztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG5cbiAgICAuaW5wdXQtdW5kZXJsaW5lIHtcbiAgICAgICAgYmFja2dyb3VuZDogMCAwO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cblxuICAgIC5pbnB1dC11bmRlcmxpbmU6Zm9jdXMge1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG5cbiAgICAucm91bmRlZC1idG4ge1xuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgIGJhY2tncm91bmQ6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDI1cHg7XG4gICAgfVxuXG4gICAgLnJvdW5kZWQtYnRuOmhvdmVyLFxuICAgIC5yb3VuZGVkLWJ0bjpmb2N1cyxcbiAgICAucm91bmRlZC1idG46YWN0aXZlLFxuICAgIC5yb3VuZGVkLWJ0bjp2aXNpdGVkIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDM2cHg7XG5cbiAgICAgICAgc21hbGwge1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XG5cbiAgICAgICAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAvKiBGaXJlZm94IDE4LSAqL1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgLyogRmlyZWZveCAxOSsgKi9cbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9ybS1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogNDBweCAwO1xuICAgIH1cblxuICAgIC51c2VyLWF2YXRhciB7XG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    86850:
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [@routerTransition] class=\"login-page\">\n    <div class=\"row justify-content-md-center\">\n        <div class=\"col-md-4\">\n            <img class=\"user-avatar\" src=\"assets/images/logo.png\" width=\"150px\" />\n            <h1>Elite Pro</h1>\n            <form role=\"form\">\n                <div class=\"form-content\">\n                    <div class=\"form-group\">\n                        <input\n                            [placeholder]=\"'Email' | translate\"\n                            class=\"form-control input-underline input-lg\"\n                            type=\"text\"\n                        />\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input\n                            [placeholder]=\"'Password' | translate\"\n                            class=\"form-control input-underline input-lg\"\n                            type=\"password\"\n                        />\n                    </div>\n                </div>\n                <a (click)=\"onLoggedin()\" [routerLink]=\"['/dashboard']\" class=\"btn rounded-btn\">{{\n                    'Log in' | translate\n                }}</a>\n                &nbsp;\n                <a [routerLink]=\"['/signup']\" class=\"btn rounded-btn\">{{ 'Register' | translate }}</a>\n            </form>\n        </div>\n    </div>\n</div>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_login_login_module_ts-es5.js.map