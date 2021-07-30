(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunksb_admin_bs4_angular_9"] = self["webpackChunksb_admin_bs4_angular_9"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
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


      var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shared */
      51679);

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_layout_layout_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./layout/layout.module */
          4805)).then(function (m) {
            return m.LayoutModule;
          });
        },
        canActivate: [_shared__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./login/login.module */
          80107)).then(function (m) {
            return m.LoginModule;
          });
        }
      }, {
        path: 'signup',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_signup_signup_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./signup/signup.module */
          77648)).then(function (m) {
            return m.SignupModule;
          });
        }
      }, {
        path: 'error',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_server-error_server-error_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./server-error/server-error.module */
          19818)).then(function (m) {
            return m.ServerErrorModule;
          });
        }
      }, {
        path: 'access-denied',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_access-denied_access-denied_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./access-denied/access-denied.module */
          11565)).then(function (m) {
            return m.AccessDeniedModule;
          });
        }
      }, {
        path: 'not-found',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_not-found_not-found_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./not-found/not-found.module */
          92867)).then(function (m) {
            return m.NotFoundModule;
          });
        }
      }, {
        path: '**',
        redirectTo: 'not-found'
      }];

      var _AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      91106);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      43069);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppComponent;
      }();

      _AppComponent.ctorParameters = function () {
        return [];
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AppComponent);
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      75835);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared */
      51679);
      /* harmony import */


      var _shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/modules/language-translation/language-translation.module */
      90894);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_3__.LanguageTranslationModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        providers: [_shared__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    74903:
    /*!**************************************!*\
      !*** ./src/app/router.animations.ts ***!
      \**************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "routerTransition": function routerTransition() {
          return (
            /* binding */
            _routerTransition
          );
        },

        /* harmony export */
        "noTransition": function noTransition() {
          return (
            /* binding */
            _noTransition
          );
        },

        /* harmony export */
        "slideToRight": function slideToRight() {
          return (
            /* binding */
            _slideToRight
          );
        },

        /* harmony export */
        "slideToLeft": function slideToLeft() {
          return (
            /* binding */
            _slideToLeft
          );
        },

        /* harmony export */
        "slideToBottom": function slideToBottom() {
          return (
            /* binding */
            _slideToBottom
          );
        },

        /* harmony export */
        "slideToTop": function slideToTop() {
          return (
            /* binding */
            _slideToTop
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      17238);

      function _routerTransition() {
        return _noTransition();
      }

      function _noTransition() {
        return (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routerTransition', []);
      }

      function _slideToRight() {
        return (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routerTransition', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('void', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('*', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
          transform: 'translateX(-100%)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
          transform: 'translateX(0%)'
        }))]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
          transform: 'translateX(0%)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
          transform: 'translateX(100%)'
        }))])]);
      }

      function _slideToLeft() {
        return (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routerTransition', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('void', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('*', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
          transform: 'translateX(100%)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
          transform: 'translateX(0%)'
        }))]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
          transform: 'translateX(0%)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
          transform: 'translateX(-100%)'
        }))])]);
      }

      function _slideToBottom() {
        return (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routerTransition', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('void', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('*', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
          transform: 'translateY(-100%)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
          transform: 'translateY(0%)'
        }))]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
          transform: 'translateY(0%)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
          transform: 'translateY(100%)'
        }))])]);
      }

      function _slideToTop() {
        return (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routerTransition', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('void', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('*', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
          transform: 'translateY(100%)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
          transform: 'translateY(0%)'
        }))]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
          transform: 'translateY(0%)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
          transform: 'translateY(-100%)'
        }))])]);
      }
      /***/

    },

    /***/
    45240:
    /*!********************************************!*\
      !*** ./src/app/shared/guard/auth.guard.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthGuard": function AuthGuard() {
          return (
            /* binding */
            _AuthGuard
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate() {
            if (localStorage.getItem('isLoggedin')) {
              return true;
            }

            this.router.navigate(['/login']);
            return false;
          }
        }]);

        return AuthGuard;
      }();

      _AuthGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router
        }];
      };

      _AuthGuard = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], _AuthGuard);
      /***/
    },

    /***/
    61140:
    /*!***************************************!*\
      !*** ./src/app/shared/guard/index.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthGuard": function AuthGuard() {
          return (
            /* reexport safe */
            _auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.guard */
      45240);
      /***/

    },

    /***/
    51679:
    /*!*********************************!*\
      !*** ./src/app/shared/index.ts ***!
      \*********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PageHeaderModule": function PageHeaderModule() {
          return (
            /* reexport safe */
            _modules__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule
          );
        },

        /* harmony export */
        "StatModule": function StatModule() {
          return (
            /* reexport safe */
            _modules__WEBPACK_IMPORTED_MODULE_0__.StatModule
          );
        },

        /* harmony export */
        "SharedPipesModule": function SharedPipesModule() {
          return (
            /* reexport safe */
            _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__.SharedPipesModule
          );
        },

        /* harmony export */
        "AuthGuard": function AuthGuard() {
          return (
            /* reexport safe */
            _guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./modules */
      41277);
      /* harmony import */


      var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pipes/shared-pipes.module */
      81233);
      /* harmony import */


      var _guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./guard */
      61140);
      /***/

    },

    /***/
    41277:
    /*!*****************************************!*\
      !*** ./src/app/shared/modules/index.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PageHeaderModule": function PageHeaderModule() {
          return (
            /* reexport safe */
            _page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule
          );
        },

        /* harmony export */
        "StatModule": function StatModule() {
          return (
            /* reexport safe */
            _stat_stat_module__WEBPACK_IMPORTED_MODULE_1__.StatModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./page-header/page-header.module */
      12956);
      /* harmony import */


      var _stat_stat_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stat/stat.module */
      80110);
      /***/

    },

    /***/
    90894:
    /*!************************************************************************************!*\
      !*** ./src/app/shared/modules/language-translation/language-translation.module.ts ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpLoaderFactory": function HttpLoaderFactory() {
          return (
            /* binding */
            _HttpLoaderFactory
          );
        },

        /* harmony export */
        "LanguageTranslationModule": function LanguageTranslationModule() {
          return (
            /* binding */
            _LanguageTranslationModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      32472);
      /**
       * This module is used to language translations.
       * The translations are saved in a json file in /src/app/assets/i18n directory
       * Docs: https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular7-app-with-ngx-translate
       */
      // import ngx-translate and the http loader
      // ngx-translate - required for AOT compilation


      function _HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__.TranslateHttpLoader(http);
      }

      var _LanguageTranslationModule = function LanguageTranslationModule(translate) {
        _classCallCheck(this, LanguageTranslationModule);

        this.translate = translate; // Gets Default language from browser if available, otherwise set English ad default

        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
      };

      _LanguageTranslationModule.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService
        }];
      };

      _LanguageTranslationModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [],
        imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule.forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateLoader,
            useFactory: _HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient]
          }
        })],
        exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule]
      })], _LanguageTranslationModule);
      /***/
    },

    /***/
    88161:
    /*!*********************************************************************!*\
      !*** ./src/app/shared/modules/page-header/page-header.component.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PageHeaderComponent": function PageHeaderComponent() {
          return (
            /* binding */
            _PageHeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_page_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./page-header.component.html */
      4882);
      /* harmony import */


      var _page_header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./page-header.component.scss */
      36128);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PageHeaderComponent = /*#__PURE__*/function () {
        function PageHeaderComponent() {
          _classCallCheck(this, PageHeaderComponent);
        }

        _createClass(PageHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {//this.mainhead = 'Dashboard';
          }
        }]);

        return PageHeaderComponent;
      }();

      _PageHeaderComponent.ctorParameters = function () {
        return [];
      };

      _PageHeaderComponent.propDecorators = {
        mainhead: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        mainheadLink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        heading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _PageHeaderComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-page-header',
        template: _raw_loader_page_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_page_header_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PageHeaderComponent);
      /***/
    },

    /***/
    12956:
    /*!******************************************************************!*\
      !*** ./src/app/shared/modules/page-header/page-header.module.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PageHeaderModule": function PageHeaderModule() {
          return (
            /* binding */
            _PageHeaderModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./page-header.component */
      88161);

      var _PageHeaderModule = function PageHeaderModule() {
        _classCallCheck(this, PageHeaderModule);
      };

      _PageHeaderModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
        declarations: [_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent],
        exports: [_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent]
      })], _PageHeaderModule);
      /***/
    },

    /***/
    15357:
    /*!*******************************************************!*\
      !*** ./src/app/shared/modules/stat/stat.component.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StatComponent": function StatComponent() {
          return (
            /* binding */
            _StatComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_stat_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./stat.component.html */
      19528);
      /* harmony import */


      var _stat_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stat.component.scss */
      40220);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../router.animations */
      74903);

      var _StatComponent = /*#__PURE__*/function () {
        function StatComponent(router) {
          _classCallCheck(this, StatComponent);

          this.router = router;
          this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        }

        _createClass(StatComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "navigation",
          value: function navigation(paramLink) {
            console.log(paramLink);
            this.router.navigate([paramLink]); //,{ mainhead:"Registration",mainheadLink : '/registration' , heading :'Patient'}
          }
        }]);

        return StatComponent;
      }();

      _StatComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }];
      };

      _StatComponent.propDecorators = {
        bgClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        count: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
        }],
        outcomeLink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }]
      };
      _StatComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-stat',
        template: _raw_loader_stat_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_stat_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _StatComponent);
      /***/
    },

    /***/
    80110:
    /*!****************************************************!*\
      !*** ./src/app/shared/modules/stat/stat.module.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StatModule": function StatModule() {
          return (
            /* binding */
            _StatModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _stat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./stat.component */
      15357);

      var _StatModule = function StatModule() {
        _classCallCheck(this, StatModule);
      };

      _StatModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
        declarations: [_stat_component__WEBPACK_IMPORTED_MODULE_0__.StatComponent],
        exports: [_stat_component__WEBPACK_IMPORTED_MODULE_0__.StatComponent]
      })], _StatModule);
      /***/
    },

    /***/
    81233:
    /*!*****************************************************!*\
      !*** ./src/app/shared/pipes/shared-pipes.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedPipesModule": function SharedPipesModule() {
          return (
            /* binding */
            _SharedPipesModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _SharedPipesModule = function SharedPipesModule() {
        _classCallCheck(this, SharedPipesModule);
      };

      _SharedPipesModule = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
        declarations: []
      })], _SharedPipesModule);
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      24608);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    43069:
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".table th, .table td {\n  padding: 0.3rem;\n  vertical-align: center;\n  border-top: 1px solid #dee2e6;\n}\n\n.pagination {\n  padding: 0;\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n  margin: 0;\n}\n\n* {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUVKOztBQUFBO0VBQ0MsZUFBQTtBQUdEIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB0aCwgLnRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmc6IC4zMHJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG4ucGFnaW5hdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbip7XHJcblx0Zm9udC1zaXplOiAxNHB4IDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    36128:
    /*!***********************************************************************!*\
      !*** ./src/app/shared/modules/page-header/page-header.component.scss ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    40220:
    /*!*********************************************************!*\
      !*** ./src/app/shared/modules/stat/stat.component.scss ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    91106:
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    4882:
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/page-header/page-header.component.html ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <h2 class=\"page-header \">\n            {{ heading }}\n        </h2>\n        <ol class=\"breadcrumb \" style = \"background-color:antiquewhite;color:black\">\n            <li class=\"breadcrumb-item\">\n                <i class=\"fa fa-dashboard\"></i> <a [routerLink]=\"mainheadLink\" href=\"Javascript:void(0)\">{{mainhead}}</a>\n            </li>\n            <li class=\"breadcrumb-item active\"><i class=\"fa {{ icon }}\"></i> {{ heading }}</li>\n        </ol>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    19528:
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/stat/stat.component.html ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card text-white bg-{{ bgClass }}\">\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <div class=\"col-md-2\">\n                <i class=\"fa {{ icon }} fa-4x \"></i>\n            </div>\n            <div class = \"col-md-10 text-right \">\n                <div class=\"\">{{ count }}</div>\n                <div class=\" \">{{ label }}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-footer\">\n        <span class=\"float-left \">Click  to {{data}}</span>\n        <a class=\"float-right card-inverse\" href=\"javascript:void(0)\" \n\t\t(click)=\"navigation(outcomeLink)\"   >\n            <span><i class=\"fa fa-arrow-circle-right\" style= \"color:black\"></i></span>\n        </a>\n    </div>\n</div>\n";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map