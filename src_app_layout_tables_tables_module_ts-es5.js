(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunksb_admin_bs4_angular_9"] = self["webpackChunksb_admin_bs4_angular_9"] || []).push([["src_app_layout_tables_tables_module_ts"], {
    /***/
    98481:
    /*!********************************************************!*\
      !*** ./src/app/layout/tables/tables-routing.module.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TablesRoutingModule": function TablesRoutingModule() {
          return (
            /* binding */
            _TablesRoutingModule
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


      var _tables_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tables.component */
      34629);

      var routes = [{
        path: '',
        component: _tables_component__WEBPACK_IMPORTED_MODULE_0__.TablesComponent
      }];

      var _TablesRoutingModule = function TablesRoutingModule() {
        _classCallCheck(this, TablesRoutingModule);
      };

      _TablesRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TablesRoutingModule);
      /***/
    },

    /***/
    34629:
    /*!***************************************************!*\
      !*** ./src/app/layout/tables/tables.component.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TablesComponent": function TablesComponent() {
          return (
            /* binding */
            _TablesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tables_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tables.component.html */
      83681);
      /* harmony import */


      var _tables_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tables.component.scss */
      79210);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../router.animations */
      74903);

      var _TablesComponent = /*#__PURE__*/function () {
        function TablesComponent() {
          _classCallCheck(this, TablesComponent);
        }

        _createClass(TablesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TablesComponent;
      }();

      _TablesComponent.ctorParameters = function () {
        return [];
      };

      _TablesComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tables',
        template: _raw_loader_tables_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_tables_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TablesComponent);
      /***/
    },

    /***/
    67452:
    /*!************************************************!*\
      !*** ./src/app/layout/tables/tables.module.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TablesModule": function TablesModule() {
          return (
            /* binding */
            _TablesModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../shared */
      51679);
      /* harmony import */


      var _tables_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tables-routing.module */
      98481);
      /* harmony import */


      var _tables_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tables.component */
      34629);

      var _TablesModule = function TablesModule() {
        _classCallCheck(this, TablesModule);
      };

      _TablesModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _tables_routing_module__WEBPACK_IMPORTED_MODULE_1__.TablesRoutingModule, _shared__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule],
        declarations: [_tables_component__WEBPACK_IMPORTED_MODULE_2__.TablesComponent]
      })], _TablesModule);
      /***/
    },

    /***/
    79210:
    /*!*****************************************************!*\
      !*** ./src/app/layout/tables/tables.component.scss ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZXMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    83681:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/tables/tables.component.html ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [@routerTransition]>\n    <app-page-header [heading]=\"'Tables'\" [icon]=\"'fa-table'\"></app-page-header>\n    <div class=\"row\">\n        <div class=\"col col-xl-6 col-lg-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    Basic example\n                </div>\n                <div class=\"card-body table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th scope=\"row\">1</th>\n                                <td>Mark</td>\n                                <td>Otto</td>\n                                <td>@mdo</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">2</th>\n                                <td>Jacob</td>\n                                <td>Thornton</td>\n                                <td>@fat</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">3</th>\n                                <td>Larry</td>\n                                <td>the Bird</td>\n                                <td>@twitter</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">Table head options</div>\n                <div class=\"card-body table-responsive\">\n                    <table class=\"table\">\n                        <thead class=\"thead-inverse\">\n                            <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th scope=\"row\">1</th>\n                                <td>Mark</td>\n                                <td>Otto</td>\n                                <td>@mdo</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">2</th>\n                                <td>Jacob</td>\n                                <td>Thornton</td>\n                                <td>@fat</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">3</th>\n                                <td>Larry</td>\n                                <td>the Bird</td>\n                                <td>@twitter</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <table class=\"table\">\n                        <thead class=\"thead-default\">\n                            <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th scope=\"row\">1</th>\n                                <td>Mark</td>\n                                <td>Otto</td>\n                                <td>@mdo</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">2</th>\n                                <td>Jacob</td>\n                                <td>Thornton</td>\n                                <td>@fat</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">3</th>\n                                <td>Larry</td>\n                                <td>the Bird</td>\n                                <td>@twitter</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">Bordered table</div>\n                <div class=\"card-body table-responsive\">\n                    <table class=\"table table-bordered\">\n                        <thead>\n                            <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th scope=\"row\">1</th>\n                                <td>Mark</td>\n                                <td>Otto</td>\n                                <td>@mdo</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">2</th>\n                                <td>Mark</td>\n                                <td>Otto</td>\n                                <td>@TwBootstrap</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">3</th>\n                                <td>Jacob</td>\n                                <td>Thornton</td>\n                                <td>@fat</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">4</th>\n                                <td colspan=\"2\">Larry the Bird</td>\n                                <td>@twitter</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">Small table</div>\n                <table class=\"table table-sm\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>First Name</th>\n                            <th>Last Name</th>\n                            <th>Username</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th scope=\"row\">1</th>\n                            <td>Mark</td>\n                            <td>Otto</td>\n                            <td>@mdo</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">2</th>\n                            <td>Jacob</td>\n                            <td>Thornton</td>\n                            <td>@fat</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">3</th>\n                            <td colspan=\"2\">Larry the Bird</td>\n                            <td>@twitter</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <div class=\"col col-xl-6 col-lg-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">Inverse table</div>\n                <div class=\"card-body table-responsive\">\n                    <table class=\"table table-inverse\">\n                        <thead>\n                            <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th scope=\"row\">1</th>\n                                <td>Mark</td>\n                                <td>Otto</td>\n                                <td>@mdo</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">2</th>\n                                <td>Jacob</td>\n                                <td>Thornton</td>\n                                <td>@fat</td>\n                            </tr>\n                            <tr>\n                                <th scope=\"row\">3</th>\n                                <td>Larry</td>\n                                <td>the Bird</td>\n                                <td>@twitter</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">Striped Rows</div>\n                <div class=\"card-body table-responsive\">\n                    <table class=\"table table-hover table-striped\">\n                        <thead>\n                            <tr>\n                                <th>Page</th>\n                                <th>Visits</th>\n                                <th>% New Visits</th>\n                                <th>Revenue</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>/index.html</td>\n                                <td>1265</td>\n                                <td>32.3%</td>\n                                <td>$321.33</td>\n                            </tr>\n                            <tr>\n                                <td>/about.html</td>\n                                <td>261</td>\n                                <td>33.3%</td>\n                                <td>$234.12</td>\n                            </tr>\n                            <tr>\n                                <td>/sales.html</td>\n                                <td>665</td>\n                                <td>21.3%</td>\n                                <td>$16.34</td>\n                            </tr>\n                            <tr>\n                                <td>/blog.html</td>\n                                <td>9516</td>\n                                <td>89.3%</td>\n                                <td>$1644.43</td>\n                            </tr>\n                            <tr>\n                                <td>/404.html</td>\n                                <td>23</td>\n                                <td>34.3%</td>\n                                <td>$23.52</td>\n                            </tr>\n                            <tr>\n                                <td>/services.html</td>\n                                <td>421</td>\n                                <td>60.3%</td>\n                                <td>$724.32</td>\n                            </tr>\n                            <tr>\n                                <td>/blog/post.html</td>\n                                <td>1233</td>\n                                <td>93.2%</td>\n                                <td>$126.34</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">Hoverable rows</div>\n                <table class=\"card-body table table-hover\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>First Name</th>\n                            <th>Last Name</th>\n                            <th>Username</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th scope=\"row\">1</th>\n                            <td>Mark</td>\n                            <td>Otto</td>\n                            <td>@mdo</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">2</th>\n                            <td>Jacob</td>\n                            <td>Thornton</td>\n                            <td>@fat</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">3</th>\n                            <td colspan=\"2\">Larry the Bird</td>\n                            <td>@twitter</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">Contextual classes</div>\n                <table class=\"card-body table\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>First Name</th>\n                            <th>Last Name</th>\n                            <th>Username</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr class=\"table-active\">\n                            <th scope=\"row\">1</th>\n                            <td>Mark</td>\n                            <td>Otto</td>\n                            <td>@mdo</td>\n                        </tr>\n                        <tr class=\"table-success\">\n                            <th scope=\"row\">2</th>\n                            <td>Jacob</td>\n                            <td>Thornton</td>\n                            <td>@fat</td>\n                        </tr>\n                        <tr class=\"table-info\">\n                            <th scope=\"row\">3</th>\n                            <td>Larry</td>\n                            <td>the Bird</td>\n                            <td>@twitter</td>\n                        </tr>\n                        <tr class=\"table-warning\">\n                            <th scope=\"row\">3</th>\n                            <td>Larry</td>\n                            <td>the Bird</td>\n                            <td>@twitter</td>\n                        </tr>\n                        <tr class=\"table-danger\">\n                            <th scope=\"row\">3</th>\n                            <td>Larry</td>\n                            <td>the Bird</td>\n                            <td>@twitter</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_layout_tables_tables_module_ts-es5.js.map