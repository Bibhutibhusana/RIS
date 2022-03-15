(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkElitePro"] = self["webpackChunkElitePro"] || []).push([["main"], {
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


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _practice_field_practice_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./practice-field/practice.component */
      54593);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared */
      51679);

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_layout_layout_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./layout/layout.module */
          4805)).then(function (m) {
            return m.LayoutModule;
          });
        },
        canActivate: [_shared__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./login/login.module */
          80107)).then(function (m) {
            return m.LoginModule;
          });
        }
      }, {
        path: 'signup',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_signup_signup_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
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
        path: 'barcode-generator',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_barcode-generator_barcode-generator_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./barcode-generator/barcode-generator.module */
          65347)).then(function (m) {
            return m.BarcodeGeneratorModule;
          });
        }
      }, {
        path: 'payment',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_payment-gateway_payment-gateway_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./payment-gateway/payment-gateway.module */
          75502)).then(function (m) {
            return m.PaymentGatewayModule;
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
        path: 'practice',
        component: _practice_field_practice_component__WEBPACK_IMPORTED_MODULE_0__.PracticeComponent
      }, {
        path: '**',
        redirectTo: 'not-found'
      }];

      var _AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
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


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./material/material.module */
      90898);
      /* harmony import */


      var _practice_field_practice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./practice-field/practice.component */
      54593);

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_3__.LanguageTranslationModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModule, _material_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _practice_field_practice_component__WEBPACK_IMPORTED_MODULE_5__.PracticeComponent],
        providers: [_shared__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    90898:
    /*!*********************************************!*\
      !*** ./src/app/material/material.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaterialModule": function MaterialModule() {
          return (
            /* binding */
            _MaterialModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/expansion */
      1562);
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/divider */
      1769);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/datepicker */
      43220);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/toolbar */
      12522);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/tabs */
      65939);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout */
      25830);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/sort */
      11494);
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/tree */
      1933);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/tooltip */
      11436);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      21554);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/card */
      93738);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/core */
      5015);

      var material = [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__.MatExpansionModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__.MatDividerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__.MatDatepickerModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelectModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.FlexLayoutModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_13__.MatTreeModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltipModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__.MatAutocompleteModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatNativeDateModule];

      var _MaterialModule = function MaterialModule() {
        _classCallCheck(this, MaterialModule);
      };

      _MaterialModule = (0, tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_21__.NgModule)({
        imports: [material],
        exports: [material]
      })], _MaterialModule);
      /***/
    },

    /***/
    54593:
    /*!******************************************************!*\
      !*** ./src/app/practice-field/practice.component.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PracticeComponent": function PracticeComponent() {
          return (
            /* binding */
            _PracticeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_practice_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./practice.component.html */
      74411);
      /* harmony import */


      var _practice_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./practice.component.css */
      98123);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PracticeComponent = function PracticeComponent() {
        _classCallCheck(this, PracticeComponent);
      };

      _PracticeComponent.ctorParameters = function () {
        return [];
      };

      _PracticeComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-practice',
        template: _raw_loader_practice_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_practice_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PracticeComponent);
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

        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS', 'ar']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS|ar/) ? browserLang : 'en');
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
            //console.log(paramLink)
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
    98123:
    /*!*******************************************************!*\
      !*** ./src/app/practice-field/practice.component.css ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmFjdGljZS5jb21wb25lbnQuY3NzIn0= */";
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


      __webpack_exports__["default"] = ".table th, .table td {\n  padding: 0.3rem;\n  vertical-align: center;\n  border-top: 1px solid #dee2e6;\n}\n\n.pagination {\n  padding: 0;\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n  margin: 0;\n}\n\n* {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUVKOztBQUFBO0VBQ0MsZUFBQTtBQUdEIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB0aCwgLnRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmc6IC4zMHJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG4ucGFnaW5hdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbip7XHJcblx0Zm9udC1zaXplOiAxNHB4IDtcclxufVxyXG4iXX0= */";
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


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\n ";
      /***/
    },

    /***/
    74411:
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/practice-field/practice.component.html ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div  class=\"row bg-info m-0 p-0\">\r\n\t<div  class=\"col-md-1\">\r\n\t\t<input  type=\"text\" id=\"file-input\"\r\n\t\t\tname=\"file-input\" class=\"d-none\"><label\r\n\t\t\t for=\"file-input\" class=\"ml-1\"><img\r\n\t\t\t src=\"assets/images/patient1.gif\"\r\n\t\t\tstyle=\"width: 60px; height: 60px;\"\r\n\t\t\tclass=\"w-60 h-60 m-1 pt-1 border border-dark bg-light\"></label>\r\n\t</div>\r\n\t<div  class=\"col-md-10 mt-2 m-0\">\r\n\t\t<div  class=\"row justify-content-between\">\r\n\t\t\t<div  class=\"col-md-3 col-sm-6 mr-0 mt-0 p-0\">\r\n\t\t\t\t<label><b>Mr\r\n\t\t\t\t\t\tNo.:</b></label>&nbsp; <label  style=\"color: yellow;\">MRN_2021_00308</label>\r\n\t\t\t</div>\r\n\t\t\t<div  class=\"col-md-3 col-sm-6 m-0 p-0 \">\r\n\t\t\t\t<label   ><b   >\r\n\t\t\t\t\t\tName:</b></label>&nbsp; <label  style=\"color: yellow;\">Rohit\r\n\t\t\t\t\t&nbsp;Sharma</label>\r\n\t\t\t</div>\r\n\t\t\t<div  class=\"col-md-3 col-sm-6 m-0 p-0 \">\r\n\t\t\t\t<label   ><b   >Gender:</b></label>&nbsp;\r\n\t\t\t\t<label  style=\"color: yellow;\">Female</label>\r\n\t\t\t</div>\r\n\t\t\t<div  class=\"col-md-3 col-sm-6 m-0 p-0 \">\r\n\t\t\t\t<label  style=\"font-weight: bold\">Allergic\r\n\t\t\t\t\tType :</label> &nbsp; <label   \r\n\t\t\t\t\tstyle=\"color: yellow; padding-left: 5px;\">To be\r\n\t\t\t\t\tedited..</label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div  style=\"border-top: 1px solid #fff\"\r\n\t\t\tclass=\"row justify-content-between pt-1\">\r\n\t\t\t<div  class=\"col-md-3 col-sm-6\">\r\n\t\t\t\t<label   ><b   >Phone\r\n\t\t\t\t\t\tNo:</b></label>&nbsp; <label  style=\"color: yellow;\">98976383</label>\r\n\t\t\t</div>\r\n\t\t\t<div  class=\"col-md-3 col-sm-6\">\r\n\t\t\t\t<label  style=\"font-weight: bold\">Visit\r\n\t\t\t\t\tType :</label>&nbsp; <label  style=\"color: yellow;\">FirstVisit</label>\r\n\t\t\t</div>\r\n\t\t\t<div  class=\"col-md-3 col-sm-6\">\r\n\t\t\t\t<label   ><b   >Age:</b></label>&nbsp;\r\n\t\t\t\t<label  style=\"color: yellow;\">28</label>\r\n\t\t\t</div>\r\n\t\t\t<div  class=\"col-md-3 col-sm-6\">\r\n\t\t\t\t<label  style=\"font-weight: bold\">Nationality:</label>&nbsp;\r\n\t\t\t\t<label   \r\n\t\t\t\t\tstyle=\"color: yellow; padding-left: 5px;\">Indian</label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div  style=\"padding: 25px 0px 0px 5px\"\r\n\t\tclass=\"col-md-0.5\">\r\n\t\t<button  style=\"font-size: 13px\"\r\n\t\t\tclass=\"btn btn-success\">Change</button>\r\n\t</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- \r\n\r\n<div\r\n\tclass=\"fc-event fc-event-vert fc-corner-top fc-corner-bottom followupconsultantcalendarcss ui-draggable ui-resizable\"\r\n\tstyle=\"position: absolute; z-index: 8; top: 62px; left: 559.9px; width: 493.9px; height: 29px;\">\r\n\t<a><span id=\"DMM50000048927\" class=\"fc-event-bg\"\r\n\t\tstyle=\"background-color: #19c0cc\"></span><span id=\"DMM50000048927\"\r\n\t\tclass=\"fc-event-title\" style=\"background-color: #19c0cc; float: right\">Visit\r\n\t\t\tStatus : Booked</span><span id=\"DMM50000048927\" class=\"fc-event-title\"\r\n\t\tstyle=\"background-color: white; float: right; margin-right: 20px;\"></span><span\r\n\t\tid=\"DMM50000048927\" class=\"fc-event-title\"\r\n\t\tstyle=\"background-color: #19c0cc; float: right; clear: right;\"></span><span\r\n\t\tid=\"DMM50000048927\" class=\"fc-event-time multiColumnDayAgenda\"\r\n\t\tstyle=\"background-color: #19c0cc\">8:30 - 8:45 (15 mins)<span\r\n\t\t\tid=\"DMM50000048927\" class=\"fc-event-title\"\r\n\t\t\tstyle=\"background-color: #19c0cc; float: right;\">Mrs Ydhf\r\n\t\t\t\tDhfhh hd, DMM50000048927</span><span\r\n\t\t\tstyle=\"background-color: red; margin-left: 20px; margin-right: 500px; float: right\">\r\n\t\t</span></span></a>\r\n\t<div class=\"extronal-action multiColumnDayAgenda\">\r\n\t\t<span id=\"2338906\" class=\"fc-event-title\"\r\n\t\t\tstyle=\"float: left; background-color: #19c0cc;\">dfdfdfd</span><span\r\n\t\t\tid=\"2338906\" class=\"fc-event-title\"\r\n\t\t\tstyle=\"float: left; background-color: #19c0cc;\">APPOINT-2272673</span><span\r\n\t\t\tclass=\"blank-blue\"> </span><span class=\"blank-blue\"> </span><span\r\n\t\t\tclass=\"derma-info\" title=\"Derma Session details\"> </span><span\r\n\t\t\tclass=\"registration-edit\" title=\"Edit Patient Info\"> </span><span\r\n\t\t\tclass=\"create-updatestatus\" title=\"Confirm\"></span><span\r\n\t\t\tclass=\"edit-appointment\" title=\"Edit Appointment\"> </span><span\r\n\t\t\tclass=\"multi-remark\" title=\"Remarks\"> </span><span\r\n\t\t\tclass=\"after-callstatus\" title=\"After Call\"> </span><span\r\n\t\t\tclass=\"unPaidAmt\" title=\"Finance Info.\"> </span><span\r\n\t\t\tclass=\"manualSMS\" title=\"Manual SMS\"> </span><span\r\n\t\t\tclass=\"insuranceCardDtls\" title=\"Patient Eligibility\"> </span><span\r\n\t\t\tclass=\"create-invoice\" title=\"Invoice\"> </span><span\r\n\t\t\tclass=\"show-details\" title=\"Show Details\"\r\n\t\t\tid=\"tooltip-icn-DMM50000048927\"> </span><span class=\"show-EMR\"\r\n\t\t\ttitle=\"Show EMR\"> </span>\r\n\t</div>\r\n\t<div id=\"DMM50000048927-70\" class=\"apptooltip\" style=\"display: none;\">\r\n\t\t<table class=\"tooltips\">\r\n\t\t\t<tbody>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td rowspan=\"7\" style=\"width: 17%\"><img\r\n\t\t\t\t\t\tid=\"DMM50000048927-70Img\"\r\n\t\t\t\t\t\tsrc=\"/elite/fos/?type_=1&amp;filename=EID2772828832.png\"\r\n\t\t\t\t\t\tonerror=\"putDefaultImg(this,2)\"\r\n\t\t\t\t\t\tstyle=\"width: 100%; height: 135px; border: 0.5px solid gray;\"></td>\r\n\t\t\t\t\t<td>Pat. Name</td>\r\n\t\t\t\t\t<td><label onclick=\"selectText(this)\">Mrs Ydhf Dhfhh\r\n\t\t\t\t\t\t\thd</label></td>\r\n\t\t\t\t\t<td>FILE No.</td>\r\n\t\t\t\t\t<td><label onclick=\"selectText(this)\">DMM50000048927</label></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td>Mob No.</td>\r\n\t\t\t\t\t<td><label onclick=\"selectText(this)\">+9662288272722</label></td>\r\n\t\t\t\t\t<td>AGE</td>\r\n\t\t\t\t\t<td><label onclick=\"selectText(this)\">23 Years</label></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td>Atnd. Phy.</td>\r\n\t\t\t\t\t<td><label onclick=\"selectText(this)\">Dr Mai Mohammad\r\n\t\t\t\t\t\t\tAbdalraufe Salman, Cardiology</label></td>\r\n\t\t\t\t\t<td>PrimaryInsr</td>\r\n\t\t\t\t\t<td><label onclick=\"selectText(this)\">Cash</label></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td>Ser Pend. Amt.</td>\r\n\t\t\t\t\t<td style=\"color: blue\"><label onclick=\"selectText(this)\">undefined</label></td>\r\n\t\t\t\t\t<td>Last Pmt.</td>\r\n\t\t\t\t\t<td><label onclick=\"selectText(this)\"> ( ) </label></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td>Booked By</td>\r\n\t\t\t\t\t<td><label onclick=\"selectText(this)\"></label></td>\r\n\t\t\t\t\t<td>Enc. By</td>\r\n\t\t\t\t\t<td><label onclick=\"selectText(this)\"></label></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td>Old File No</td>\r\n\t\t\t\t\t<td><label onclick=\"selectText(this)\"></label></td>\r\n\t\t\t\t\t<td>Ins. Validity</td>\r\n\t\t\t\t\t<td><label onclick=\"selectText(this)\"></label></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td>Appointment Remarks</td>\r\n\t\t\t\t\t<td><label onclick=\"selectText(this)\">dfdfdfd</label></td>\r\n\t\t\t\t\t<td>Patient Refference Source</td>\r\n\t\t\t\t\t<td><label onclick=\"selectText(this)\">Instagram</label></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td></td>\r\n\t\t\t\t\t<td>CX_Promotional</td>\r\n\t\t\t\t\t<td><label onclick=\"selectText(this)\">drug discount</label></td>\r\n\t\t\t\t\t<td>Appointent No</td>\r\n\t\t\t\t\t<td><label onclick=\"selectText(this)\">APPOINT-2272673</label></td>\r\n\t\t\t\t</tr>\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\t</div>\r\n\t<div class=\"ui-resizable-handle ui-resizable-s\" unselectable=\"on\">=</div>\r\n</div>\r\n\r\n\r\n -->\r\n\r\n";
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


      __webpack_exports__["default"] = "<div class=\"card text-white bg-{{ bgClass }} m-1\">\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <div class=\"col-md-2\">\n                <i class=\"fa {{ icon }} fa-4x\"></i>\n            </div>\n            <div class = \"col-md-10 text-right \">\n                <div class=\"\">{{ count }}</div>\n                <div class=\" \">{{ label }}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-footer\" (click)=\"navigation(outcomeLink)\" >\n        <span class=\"float-left \">Click  to {{data}}</span>\n        <a class=\"float-right card-inverse\" href=\"javascript:void(0)\" \n\t\t  >\n            <span><i class=\"fa fa-arrow-circle-right\" style= \"color:black\"></i></span>\n        </a>\n    </div>\n</div>\n";
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