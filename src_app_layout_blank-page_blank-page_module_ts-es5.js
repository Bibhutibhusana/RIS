(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunksb_admin_bs4_angular_9"] = self["webpackChunksb_admin_bs4_angular_9"] || []).push([["src_app_layout_blank-page_blank-page_module_ts"], {
    /***/
    39619:
    /*!****************************************************************!*\
      !*** ./src/app/layout/blank-page/blank-page-routing.module.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BlankPageRoutingModule": function BlankPageRoutingModule() {
          return (
            /* binding */
            _BlankPageRoutingModule
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


      var _blank_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./blank-page.component */
      40614);

      var routes = [{
        path: '',
        component: _blank_page_component__WEBPACK_IMPORTED_MODULE_0__.BlankPageComponent
      }];

      var _BlankPageRoutingModule = function BlankPageRoutingModule() {
        _classCallCheck(this, BlankPageRoutingModule);
      };

      _BlankPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _BlankPageRoutingModule);
      /***/
    },

    /***/
    40614:
    /*!***********************************************************!*\
      !*** ./src/app/layout/blank-page/blank-page.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BlankPageComponent": function BlankPageComponent() {
          return (
            /* binding */
            _BlankPageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_blank_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./blank-page.component.html */
      12913);
      /* harmony import */


      var _blank_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./blank-page.component.scss */
      59581);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _BlankPageComponent = /*#__PURE__*/function () {
        function BlankPageComponent() {
          _classCallCheck(this, BlankPageComponent);
        }

        _createClass(BlankPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BlankPageComponent;
      }();

      _BlankPageComponent.ctorParameters = function () {
        return [];
      };

      _BlankPageComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-blank-page',
        template: _raw_loader_blank_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_blank_page_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _BlankPageComponent);
      /***/
    },

    /***/
    1857:
    /*!********************************************************!*\
      !*** ./src/app/layout/blank-page/blank-page.module.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BlankPageModule": function BlankPageModule() {
          return (
            /* binding */
            _BlankPageModule
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


      var _blank_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./blank-page-routing.module */
      39619);
      /* harmony import */


      var _blank_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./blank-page.component */
      40614);

      var _BlankPageModule = function BlankPageModule() {
        _classCallCheck(this, BlankPageModule);
      };

      _BlankPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _blank_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.BlankPageRoutingModule],
        declarations: [_blank_page_component__WEBPACK_IMPORTED_MODULE_1__.BlankPageComponent]
      })], _BlankPageModule);
      /***/
    },

    /***/
    59581:
    /*!*************************************************************!*\
      !*** ./src/app/layout/blank-page/blank-page.component.scss ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibGFuay1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    12913:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/blank-page/blank-page.component.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_layout_blank-page_blank-page_module_ts-es5.js.map