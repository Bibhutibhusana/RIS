(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunksb_admin_bs4_angular_9"] = self["webpackChunksb_admin_bs4_angular_9"] || []).push([["src_app_not-found_not-found_module_ts"], {
    /***/
    44017:
    /*!*******************************************************!*\
      !*** ./src/app/not-found/not-found-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotFoundRoutingModule": function NotFoundRoutingModule() {
          return (
            /* binding */
            _NotFoundRoutingModule
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


      var _not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./not-found.component */
      21142);

      var routes = [{
        path: '',
        component: _not_found_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent
      }];

      var _NotFoundRoutingModule = function NotFoundRoutingModule() {
        _classCallCheck(this, NotFoundRoutingModule);
      };

      _NotFoundRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _NotFoundRoutingModule);
      /***/
    },

    /***/
    21142:
    /*!**************************************************!*\
      !*** ./src/app/not-found/not-found.component.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotFoundComponent": function NotFoundComponent() {
          return (
            /* binding */
            _NotFoundComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./not-found.component.html */
      84292);
      /* harmony import */


      var _not_found_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./not-found.component.scss */
      9798);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _NotFoundComponent = /*#__PURE__*/function () {
        function NotFoundComponent() {
          _classCallCheck(this, NotFoundComponent);
        }

        _createClass(NotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotFoundComponent;
      }();

      _NotFoundComponent.ctorParameters = function () {
        return [];
      };

      _NotFoundComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-not-found',
        template: _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_not_found_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _NotFoundComponent);
      /***/
    },

    /***/
    92867:
    /*!***********************************************!*\
      !*** ./src/app/not-found/not-found.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotFoundModule": function NotFoundModule() {
          return (
            /* binding */
            _NotFoundModule
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


      var _not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./not-found-routing.module */
      44017);
      /* harmony import */


      var _not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./not-found.component */
      21142);

      var _NotFoundModule = function NotFoundModule() {
        _classCallCheck(this, NotFoundModule);
      };

      _NotFoundModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotFoundRoutingModule],
        declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent]
      })], _NotFoundModule);
      /***/
    },

    /***/
    9798:
    /*!****************************************************!*\
      !*** ./src/app/not-found/not-found.component.scss ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    84292:
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n    not-found works!\n</p>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_not-found_not-found_module_ts-es5.js.map