(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunksb_admin_bs4_angular_9"] = self["webpackChunksb_admin_bs4_angular_9"] || []).push([["src_app_server-error_server-error_module_ts"], {
    /***/
    64018:
    /*!*************************************************************!*\
      !*** ./src/app/server-error/server-error-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ServerErrorRoutingModule": function ServerErrorRoutingModule() {
          return (
            /* binding */
            _ServerErrorRoutingModule
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


      var _server_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./server-error.component */
      61685);

      var routes = [{
        path: '',
        component: _server_error_component__WEBPACK_IMPORTED_MODULE_0__.ServerErrorComponent
      }];

      var _ServerErrorRoutingModule = function ServerErrorRoutingModule() {
        _classCallCheck(this, ServerErrorRoutingModule);
      };

      _ServerErrorRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ServerErrorRoutingModule);
      /***/
    },

    /***/
    61685:
    /*!********************************************************!*\
      !*** ./src/app/server-error/server-error.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ServerErrorComponent": function ServerErrorComponent() {
          return (
            /* binding */
            _ServerErrorComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_server_error_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./server-error.component.html */
      64894);
      /* harmony import */


      var _server_error_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./server-error.component.scss */
      81110);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ServerErrorComponent = /*#__PURE__*/function () {
        function ServerErrorComponent() {
          _classCallCheck(this, ServerErrorComponent);
        }

        _createClass(ServerErrorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ServerErrorComponent;
      }();

      _ServerErrorComponent.ctorParameters = function () {
        return [];
      };

      _ServerErrorComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-server-error',
        template: _raw_loader_server_error_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_server_error_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ServerErrorComponent);
      /***/
    },

    /***/
    19818:
    /*!*****************************************************!*\
      !*** ./src/app/server-error/server-error.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ServerErrorModule": function ServerErrorModule() {
          return (
            /* binding */
            _ServerErrorModule
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


      var _server_error_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./server-error-routing.module */
      64018);
      /* harmony import */


      var _server_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./server-error.component */
      61685);

      var _ServerErrorModule = function ServerErrorModule() {
        _classCallCheck(this, ServerErrorModule);
      };

      _ServerErrorModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _server_error_routing_module__WEBPACK_IMPORTED_MODULE_0__.ServerErrorRoutingModule],
        declarations: [_server_error_component__WEBPACK_IMPORTED_MODULE_1__.ServerErrorComponent]
      })], _ServerErrorModule);
      /***/
    },

    /***/
    81110:
    /*!**********************************************************!*\
      !*** ./src/app/server-error/server-error.component.scss ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2ZXItZXJyb3IuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    64894:
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/server-error/server-error.component.html ***!
      \************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n    server-error works!\n</p>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_server-error_server-error_module_ts-es5.js.map