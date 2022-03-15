(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkElitePro"] = self["webpackChunkElitePro"] || []).push([["src_app_access-denied_access-denied_module_ts"], {
    /***/
    58853:
    /*!***************************************************************!*\
      !*** ./src/app/access-denied/access-denied-routing.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccessDeniedRoutingModule": function AccessDeniedRoutingModule() {
          return (
            /* binding */
            _AccessDeniedRoutingModule
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


      var _access_denied_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./access-denied.component */
      52123);

      var routes = [{
        path: '',
        component: _access_denied_component__WEBPACK_IMPORTED_MODULE_0__.AccessDeniedComponent
      }];

      var _AccessDeniedRoutingModule = function AccessDeniedRoutingModule() {
        _classCallCheck(this, AccessDeniedRoutingModule);
      };

      _AccessDeniedRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AccessDeniedRoutingModule);
      /***/
    },

    /***/
    52123:
    /*!**********************************************************!*\
      !*** ./src/app/access-denied/access-denied.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccessDeniedComponent": function AccessDeniedComponent() {
          return (
            /* binding */
            _AccessDeniedComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_access_denied_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./access-denied.component.html */
      42455);
      /* harmony import */


      var _access_denied_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./access-denied.component.scss */
      9405);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AccessDeniedComponent = /*#__PURE__*/function () {
        function AccessDeniedComponent() {
          _classCallCheck(this, AccessDeniedComponent);
        }

        _createClass(AccessDeniedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AccessDeniedComponent;
      }();

      _AccessDeniedComponent.ctorParameters = function () {
        return [];
      };

      _AccessDeniedComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-access-denied',
        template: _raw_loader_access_denied_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_access_denied_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AccessDeniedComponent);
      /***/
    },

    /***/
    11565:
    /*!*******************************************************!*\
      !*** ./src/app/access-denied/access-denied.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccessDeniedModule": function AccessDeniedModule() {
          return (
            /* binding */
            _AccessDeniedModule
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


      var _access_denied_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./access-denied-routing.module */
      58853);
      /* harmony import */


      var _access_denied_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./access-denied.component */
      52123);

      var _AccessDeniedModule = function AccessDeniedModule() {
        _classCallCheck(this, AccessDeniedModule);
      };

      _AccessDeniedModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _access_denied_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccessDeniedRoutingModule],
        declarations: [_access_denied_component__WEBPACK_IMPORTED_MODULE_1__.AccessDeniedComponent]
      })], _AccessDeniedModule);
      /***/
    },

    /***/
    9405:
    /*!************************************************************!*\
      !*** ./src/app/access-denied/access-denied.component.scss ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2Nlc3MtZGVuaWVkLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    42455:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/access-denied/access-denied.component.html ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n    access-denied works!\n</p>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_access-denied_access-denied_module_ts-es5.js.map