(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunksb_admin_bs4_angular_9"] = self["webpackChunksb_admin_bs4_angular_9"] || []).push([["src_app_layout_layout_module_ts"], {
    /***/
    42176:
    /*!**************************************************************!*\
      !*** ./src/app/layout/components/header/header.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* binding */
            _HeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./header.component.html */
      766);
      /* harmony import */


      var _header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header.component.scss */
      14127);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);

      var _HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(translate, router) {
          var _this = this;

          _classCallCheck(this, HeaderComponent);

          this.translate = translate;
          this.router = router;
          this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd && window.innerWidth <= 992 && _this.isToggled()) {
              _this.toggleSidebar();
            }
          });
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.pushRightClass = 'push-right';
          }
        }, {
          key: "isToggled",
          value: function isToggled() {
            var dom = document.querySelector('body');
            return dom.classList.contains(this.pushRightClass);
          }
        }, {
          key: "toggleSidebar",
          value: function toggleSidebar() {
            var dom = document.querySelector('body');
            dom.classList.toggle(this.pushRightClass);
          }
        }, {
          key: "rltAndLtr",
          value: function rltAndLtr() {
            var dom = document.querySelector('body');
            dom.classList.toggle('rtl');
          }
        }, {
          key: "onLoggedout",
          value: function onLoggedout() {
            localStorage.removeItem('isLoggedin');
          }
        }, {
          key: "changeLang",
          value: function changeLang(language) {
            this.translate.use(language);
          }
        }]);

        return HeaderComponent;
      }();

      _HeaderComponent.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };

      _HeaderComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _HeaderComponent);
      /***/
    },

    /***/
    74660:
    /*!****************************************************************!*\
      !*** ./src/app/layout/components/sidebar/sidebar.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SidebarComponent": function SidebarComponent() {
          return (
            /* binding */
            _SidebarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./sidebar.component.html */
      66194);
      /* harmony import */


      var _sidebar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sidebar.component.scss */
      55512);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);

      var _SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(translate, router) {
          var _this2 = this;

          _classCallCheck(this, SidebarComponent);

          this.translate = translate;
          this.router = router;
          this.collapsedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd && window.innerWidth <= 992 && _this2.isToggled()) {
              _this2.toggleSidebar();
            }
          });
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isActive = false;
            this.collapsed = false;
            this.showMenu = '';
            this.pushRightClass = 'push-right';
          }
        }, {
          key: "eventCalled",
          value: function eventCalled() {
            this.isActive = !this.isActive;
          }
        }, {
          key: "addExpandClass",
          value: function addExpandClass(element) {
            if (element === this.showMenu) {
              this.showMenu = '0';
            } else {
              this.showMenu = element;
            }
          }
        }, {
          key: "toggleCollapsed",
          value: function toggleCollapsed() {
            this.collapsed = !this.collapsed;
            this.collapsedEvent.emit(this.collapsed);
          }
        }, {
          key: "isToggled",
          value: function isToggled() {
            var dom = document.querySelector('body');
            return dom.classList.contains(this.pushRightClass);
          }
        }, {
          key: "toggleSidebar",
          value: function toggleSidebar() {
            var dom = document.querySelector('body');
            dom.classList.toggle(this.pushRightClass);
          }
        }, {
          key: "rltAndLtr",
          value: function rltAndLtr() {
            var dom = document.querySelector('body');
            dom.classList.toggle('rtl');
          }
        }, {
          key: "changeLang",
          value: function changeLang(language) {
            this.translate.use(language);
          }
        }, {
          key: "onLoggedout",
          value: function onLoggedout() {
            localStorage.removeItem('isLoggedin');
          }
        }]);

        return SidebarComponent;
      }();

      _SidebarComponent.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }];
      };

      _SidebarComponent.propDecorators = {
        collapsedEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }]
      };
      _SidebarComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-sidebar',
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sidebar_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SidebarComponent);
      /***/
    },

    /***/
    99689:
    /*!*************************************************!*\
      !*** ./src/app/layout/layout-routing.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LayoutRoutingModule": function LayoutRoutingModule() {
          return (
            /* binding */
            _LayoutRoutingModule
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


      var _layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./layout.component */
      36674);

      var routes = [{
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
        children: [{
          path: '',
          redirectTo: 'dashboard',
          pathMatch: 'prefix'
        }, {
          path: 'dashboard',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_layout_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./dashboard/dashboard.module */
            99869)).then(function (m) {
              return m.DashboardModule;
            });
          }
        }, {
          path: 'charts',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_layout_charts_charts_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./charts/charts.module */
            47000)).then(function (m) {
              return m.ChartsModule;
            });
          }
        }, {
          path: 'tables',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_layout_tables_tables_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./tables/tables.module */
            67452)).then(function (m) {
              return m.TablesModule;
            });
          }
        }, {
          path: 'forms',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_layout_form_form_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./form/form.module */
            52569)).then(function (m) {
              return m.FormModule;
            });
          }
        }, {
          path: 'bs-element',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_layout_bs-element_bs-element_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./bs-element/bs-element.module */
            81663)).then(function (m) {
              return m.BsElementModule;
            });
          }
        }, {
          path: 'grid',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_layout_grid_grid_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./grid/grid.module */
            36605)).then(function (m) {
              return m.GridModule;
            });
          }
        }, {
          path: 'components',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_layout_bs-component_bs-component_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./bs-component/bs-component.module */
            65765)).then(function (m) {
              return m.BsComponentModule;
            });
          }
        }, {
          path: 'blank-page',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_layout_blank-page_blank-page_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./blank-page/blank-page.module */
            1857)).then(function (m) {
              return m.BlankPageModule;
            });
          }
        }, {
          path: 'registration',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
            /*! ../patient/patient.module */
            72158)).then(function (m) {
              return m.PatientModule;
            });
          }
        }, {
          path: 'master',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_master_master_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../master/master.module */
            89992)).then(function (m) {
              return m.MasterModule;
            });
          }
        }, {
          path: 'appointment',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "default-src_app_appointment_appointment_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../appointment/appointment.module */
            17425)).then(function (m) {
              return m.AppointmentModule;
            });
          }
        }, {
          path: 'encounter',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_appointment_appointment_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_encounter_encounter_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../encounter/encounter.module */
            80861)).then(function (m) {
              return m.EncounterModule;
            });
          }
        }, {
          path: 'preRegistration',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
            /*! ../pre-register-patient/pre-register-patient.module */
            38666)).then(function (m) {
              return m.PreRegisterPatientModule;
            });
          }
        }]
      }];

      var _LayoutRoutingModule = function LayoutRoutingModule() {
        _classCallCheck(this, LayoutRoutingModule);
      };

      _LayoutRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _LayoutRoutingModule);
      /***/
    },

    /***/
    36674:
    /*!********************************************!*\
      !*** ./src/app/layout/layout.component.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LayoutComponent": function LayoutComponent() {
          return (
            /* binding */
            _LayoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./layout.component.html */
      31729);
      /* harmony import */


      var _layout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./layout.component.scss */
      96603);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _LayoutComponent = /*#__PURE__*/function () {
        function LayoutComponent() {
          _classCallCheck(this, LayoutComponent);
        }

        _createClass(LayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "receiveCollapsed",
          value: function receiveCollapsed($event) {
            this.collapedSideBar = $event;
          }
        }]);

        return LayoutComponent;
      }();

      _LayoutComponent.ctorParameters = function () {
        return [];
      };

      _LayoutComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-layout',
        template: _raw_loader_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LayoutComponent);
      /***/
    },

    /***/
    4805:
    /*!*****************************************!*\
      !*** ./src/app/layout/layout.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LayoutModule": function LayoutModule() {
          return (
            /* binding */
            _LayoutModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/header/header.component */
      42176);
      /* harmony import */


      var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/sidebar/sidebar.component */
      74660);
      /* harmony import */


      var _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layout-routing.module */
      99689);
      /* harmony import */


      var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./layout.component */
      36674);
      /* harmony import */


      var _patient_patient_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../patient/patient.module */
      72158);

      var _LayoutModule = function LayoutModule() {
        _classCallCheck(this, LayoutModule);
      };

      _LayoutModule = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__.LayoutRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _patient_patient_module__WEBPACK_IMPORTED_MODULE_4__.PatientModule],
        declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_3__.LayoutComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent]
      })], _LayoutModule);
      /***/
    },

    /***/
    60139:
    /*!************************************************************!*\
      !*** ./src/app/master/country-category/masters/country.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Country": function Country() {
          return (
            /* binding */
            _Country
          );
        }
        /* harmony export */

      });

      var _Country = function _Country() {
        _classCallCheck(this, _Country);
      };
      /***/

    },

    /***/
    14139:
    /*!*************************************************************!*\
      !*** ./src/app/master/country-category/masters/district.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "District": function District() {
          return (
            /* binding */
            _District
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./state */
      44636);

      var _District = function _District() {
        _classCallCheck(this, _District);

        this.state = new _state__WEBPACK_IMPORTED_MODULE_0__.State();
      };
      /***/

    },

    /***/
    44636:
    /*!**********************************************************!*\
      !*** ./src/app/master/country-category/masters/state.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "State": function State() {
          return (
            /* binding */
            _State
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _country__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./country */
      60139);

      var _State = function _State() {
        _classCallCheck(this, _State);

        this.country = new _country__WEBPACK_IMPORTED_MODULE_0__.Country();
      };
      /***/

    },

    /***/
    55990:
    /*!*****************************************************************************!*\
      !*** ./src/app/master/country-category/services/patient-address.service.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PatientAddressService": function PatientAddressService() {
          return (
            /* binding */
            _PatientAddressService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PatientAddressService = /*#__PURE__*/function () {
        function PatientAddressService(http) {
          _classCallCheck(this, PatientAddressService);

          this.http = http;
          this.baseUrl = "http://localhost:8080/springboot/api/v1";
        }

        _createClass(PatientAddressService, [{
          key: "createPatientAddress",
          value: function createPatientAddress(patientAddress) {
            return this.http.post("".concat(this.baseUrl, "/patientAddress/add"), patientAddress);
          }
        }, {
          key: "getPatientAddressList",
          value: function getPatientAddressList() {
            return this.http.get("".concat(this.baseUrl, "/patientAddress/get"));
          } //Country's Function starts here

        }, {
          key: "getCountries",
          value: function getCountries() {
            return this.http.get("".concat(this.baseUrl, "/country"));
          }
        }, {
          key: "createCountry",
          value: function createCountry(country) {
            return this.http.post("".concat(this.baseUrl, "/country"), country);
          }
        }, {
          key: "deleteCountry",
          value: function deleteCountry(countryId) {
            return this.http["delete"]("".concat(this.baseUrl, "/country/").concat(countryId));
          }
        }, {
          key: "getCountryById",
          value: function getCountryById(countryId) {
            return this.http.get("".concat(this.baseUrl, "/country/").concat(countryId));
          }
        }, {
          key: "updateCountry",
          value: function updateCountry(countryId, country) {
            return this.http.put("".concat(this.baseUrl, "/country/").concat(countryId), country);
          } //State's Functions start here

        }, {
          key: "getStates",
          value: function getStates() {
            return this.http.get("".concat(this.baseUrl, "/state"));
          }
        }, {
          key: "getStatesById",
          value: function getStatesById(stateId) {
            return this.http.get("".concat(this.baseUrl, "/state/").concat(stateId));
          }
        }, {
          key: "createState",
          value: function createState(state) {
            return this.http.post("".concat(this.baseUrl, "/state"), state);
          }
        }, {
          key: "updateState",
          value: function updateState(stateId, state) {
            return this.http.put("".concat(this.baseUrl, "/state/").concat(stateId), state);
          }
        }, {
          key: "deleteState",
          value: function deleteState(stateId) {
            return this.http["delete"]("".concat(this.baseUrl, "/state/").concat(stateId));
          }
        }, {
          key: "getStateByCountry",
          value: function getStateByCountry(countryId) {
            return this.http.get("".concat(this.baseUrl, "/states/").concat(countryId));
          } //District section goes here

        }, {
          key: "getDistricts",
          value: function getDistricts() {
            return this.http.get("".concat(this.baseUrl, "/district"));
          }
        }, {
          key: "getDistrictById",
          value: function getDistrictById(districtId) {
            return this.http.get("".concat(this.baseUrl, "/district/").concat(districtId));
          }
        }, {
          key: "createDistrict",
          value: function createDistrict(district) {
            return this.http.post("".concat(this.baseUrl, "/district"), district);
          }
        }, {
          key: "updateDistrict",
          value: function updateDistrict(districtId, district) {
            return this.http.put("".concat(this.baseUrl, "/district/").concat(districtId), district);
          }
        }, {
          key: "deleteDistrict",
          value: function deleteDistrict(districtId) {
            return this.http["delete"]("".concat(this.baseUrl, "/district/").concat(districtId));
          }
        }, {
          key: "getDistrictByState",
          value: function getDistrictByState(stateId) {
            return this.http.get("".concat(this.baseUrl, "/districts/").concat(stateId));
          }
        }]);

        return PatientAddressService;
      }();

      _PatientAddressService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _PatientAddressService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _PatientAddressService);
      /***/
    },

    /***/
    10776:
    /*!*********************************************************!*\
      !*** ./src/app/master/department/masters/department.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Department": function Department() {
          return (
            /* binding */
            _Department
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _service_center_masters_branch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../service-center/masters/branch */
      40478);

      var _Department = function _Department() {
        _classCallCheck(this, _Department);

        this.site = new _service_center_masters_branch__WEBPACK_IMPORTED_MODULE_0__.Branch();
      };
      /***/

    },

    /***/
    25482:
    /*!******************************************************************!*\
      !*** ./src/app/master/department/services/department.service.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DepartmentService": function DepartmentService() {
          return (
            /* binding */
            _DepartmentService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _DepartmentService = /*#__PURE__*/function () {
        function DepartmentService(http) {
          _classCallCheck(this, DepartmentService);

          this.http = http;
          this.baseUrl = "http://localhost:8080/springboot/api/v1/department";
        }

        _createClass(DepartmentService, [{
          key: "getAllDepartments",
          value: function getAllDepartments() {
            return this.http.get("".concat(this.baseUrl));
          }
        }, {
          key: "updateDepartment",
          value: function updateDepartment(id, value) {
            return this.http.put("".concat(this.baseUrl, "/").concat(id), value);
          }
        }, {
          key: "createDepartments",
          value: function createDepartments(departments) {
            return this.http.post("".concat(this.baseUrl), departments);
          }
        }]);

        return DepartmentService;
      }();

      _DepartmentService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _DepartmentService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _DepartmentService);
      /***/
    },

    /***/
    23529:
    /*!*****************************************************************!*\
      !*** ./src/app/master/lookup-module/masters/lookup-category.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LookupCategory": function LookupCategory() {
          return (
            /* binding */
            _LookupCategory
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../masters/base-entity */
      28685);

      var _LookupCategory = /*#__PURE__*/function (_masters_base_entity_) {
        _inherits(_LookupCategory, _masters_base_entity_);

        var _super = _createSuper(_LookupCategory);

        function _LookupCategory() {
          _classCallCheck(this, _LookupCategory);

          return _super.call(this);
        }

        return _LookupCategory;
      }(_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity);
      /***/

    },

    /***/
    11697:
    /*!***************************************************************!*\
      !*** ./src/app/master/lookup-module/masters/lookup-entity.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LookupEntity": function LookupEntity() {
          return (
            /* binding */
            _LookupEntity
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../masters/base-entity */
      28685);
      /* harmony import */


      var _lookup_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lookup-category */
      23529);

      var _LookupEntity = /*#__PURE__*/function (_masters_base_entity_2) {
        _inherits(_LookupEntity, _masters_base_entity_2);

        var _super2 = _createSuper(_LookupEntity);

        function _LookupEntity() {
          var _this3;

          _classCallCheck(this, _LookupEntity);

          _this3 = _super2.call(this);
          _this3.active = false;
          _this3.category = new _lookup_category__WEBPACK_IMPORTED_MODULE_1__.LookupCategory();
          return _this3;
        }

        return _LookupEntity;
      }(_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity);
      /***/

    },

    /***/
    41168:
    /*!*****************************************************************!*\
      !*** ./src/app/master/lookup-module/services/lookup.service.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LookupService": function LookupService() {
          return (
            /* binding */
            _LookupService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _LookupService = /*#__PURE__*/function () {
        function LookupService(http) {
          _classCallCheck(this, LookupService);

          this.http = http;
          this.baseUrl = 'http://localhost:8080/springboot/api/v1';
        }

        _createClass(LookupService, [{
          key: "getLookupCategoryList",
          value: function getLookupCategoryList() {
            return this.http.get("".concat(this.baseUrl, "/lookupcategory"));
          }
        }, {
          key: "createLookupCategory",
          value: function createLookupCategory(LookupCategory) {
            return this.http.post("".concat(this.baseUrl, "/lookupcategory"), LookupCategory);
          }
        }, {
          key: "updateLookupCategory",
          value: function updateLookupCategory(categoryId, category) {
            return this.http.put("".concat(this.baseUrl, "/lookupcategory/").concat(categoryId), category);
          }
        }, {
          key: "deleteLookupCategory",
          value: function deleteLookupCategory(categoryId) {
            return this.http["delete"]("".concat(this.baseUrl, "/lookupcategory/").concat(categoryId));
          }
        }, {
          key: "getLookupCategoryById",
          value: function getLookupCategoryById(categoryId) {
            return this.http.get("".concat(this.baseUrl, "/lookupcategory/").concat(categoryId));
          } //LookupEntity Functions here 

        }, {
          key: "getLookupEntityList",
          value: function getLookupEntityList(id) {
            return this.http.get("".concat(this.baseUrl, "/lookupEntity/getByCategoryId/").concat(id));
          }
        }, {
          key: "getAllLookupEntities",
          value: function getAllLookupEntities() {
            return this.http.get("".concat(this.baseUrl, "/lookupEntity/get"));
          }
        }, {
          key: "createLookupEntity",
          value: function createLookupEntity(entity) {
            console.warn(entity);
            return this.http.post("".concat(this.baseUrl, "/lookupEntity/add"), entity);
          }
        }, {
          key: "updateLookupEntity",
          value: function updateLookupEntity(lookupId, value) {
            console.log(value);
            return this.http.put("".concat(this.baseUrl, "/lookupEntity/update/").concat(lookupId), value);
          }
        }, {
          key: "deleteLookupEntity",
          value: function deleteLookupEntity(lookupId) {
            return this.http["delete"]("".concat(this.baseUrl, "/lookupEntity/delete/").concat(lookupId));
          }
        }]);

        return LookupService;
      }();

      _LookupService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _LookupService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _LookupService);
      /***/
    },

    /***/
    28685:
    /*!***********************************************!*\
      !*** ./src/app/master/masters/base-entity.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BaseEntity": function BaseEntity() {
          return (
            /* binding */
            _BaseEntity
          );
        }
        /* harmony export */

      });

      var _BaseEntity = function _BaseEntity() {
        _classCallCheck(this, _BaseEntity);

        this.createdBy = 'Admin';
        this.updatedBy = '';
      };
      /***/

    },

    /***/
    40478:
    /*!*********************************************************!*\
      !*** ./src/app/master/service-center/masters/branch.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Branch": function Branch() {
          return (
            /* binding */
            _Branch
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../masters/base-entity */
      28685);

      var _Branch = /*#__PURE__*/function (_masters_base_entity_3) {
        _inherits(_Branch, _masters_base_entity_3);

        var _super3 = _createSuper(_Branch);

        function _Branch() {
          _classCallCheck(this, _Branch);

          return _super3.call(this);
        }

        return _Branch;
      }(_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity);
      /***/

    },

    /***/
    31582:
    /*!**************************************************************************!*\
      !*** ./src/app/master/service-center/services/branch-service.service.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BranchServiceService": function BranchServiceService() {
          return (
            /* binding */
            _BranchServiceService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _BranchServiceService = /*#__PURE__*/function () {
        function BranchServiceService(http) {
          _classCallCheck(this, BranchServiceService);

          this.http = http;
          this.baseUrl = "http://localhost:8080/springboot/api/v1";
        }
        /*
        ************************ The ServiceCenter api's goes here. ************************************
        */


        _createClass(BranchServiceService, [{
          key: "getServiceCenter",
          value: function getServiceCenter() {
            return this.http.get("".concat(this.baseUrl, "/serviceCenter"));
          }
        }, {
          key: "updateServiceCenter",
          value: function updateServiceCenter(serviceCenterId, serviceCenter) {
            return this.http.put("".concat(this.baseUrl, "/serviceCenter/").concat(serviceCenterId), serviceCenter);
          }
        }, {
          key: "createServiceCenter",
          value: function createServiceCenter(serviceCenter) {
            return this.http.post("".concat(this.baseUrl, "/serviceCenter"), serviceCenter);
          }
          /*
          ************************ The Branch api's goes here. *******************************************
          */

        }, {
          key: "getBranch",
          value: function getBranch() {
            return this.http.get("".concat(this.baseUrl, "/branch"));
          }
          /*
          ************************ The Block api's goes here. ********************************************
          */

        }, {
          key: "getBlock",
          value: function getBlock() {
            return this.http.get("".concat(this.baseUrl, "/block"));
          }
          /*
          ************************ The Floor api's goes here. *********************************************
          */

        }, {
          key: "getFloor",
          value: function getFloor() {
            return this.http.get("".concat(this.baseUrl, "/floor"));
          }
        }]);

        return BranchServiceService;
      }();

      _BranchServiceService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _BranchServiceService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _BranchServiceService);
      /***/
    },

    /***/
    71277:
    /*!************************************************************!*\
      !*** ./src/app/master/unit-master/masters/PrefixMaster.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrefixMaster": function PrefixMaster() {
          return (
            /* binding */
            _PrefixMaster
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../lookup-module/masters/lookup-entity */
      11697);

      var _PrefixMaster = function _PrefixMaster() {
        _classCallCheck(this, _PrefixMaster);

        this.gender = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
      };
      /***/

    },

    /***/
    56552:
    /*!****************************************************!*\
      !*** ./src/app/master/unit-master/masters/unit.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Unit": function Unit() {
          return (
            /* binding */
            _Unit
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../masters/base-entity */
      28685);
      /* harmony import */


      var _department_masters_department__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../department/masters/department */
      10776);

      var _Unit = /*#__PURE__*/function (_masters_base_entity_4) {
        _inherits(_Unit, _masters_base_entity_4);

        var _super4 = _createSuper(_Unit);

        function _Unit() {
          var _this4;

          _classCallCheck(this, _Unit);

          _this4 = _super4.call(this);
          _this4.department = new _department_masters_department__WEBPACK_IMPORTED_MODULE_1__.Department();
          return _this4;
        }

        return _Unit;
      }(_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity);
      /***/

    },

    /***/
    20319:
    /*!********************************************************************!*\
      !*** ./src/app/master/unit-master/services/unit-master.service.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UnitMasterService": function UnitMasterService() {
          return (
            /* binding */
            _UnitMasterService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _UnitMasterService = /*#__PURE__*/function () {
        function UnitMasterService(http) {
          _classCallCheck(this, UnitMasterService);

          this.http = http;
          this.baseUrl = "http://localhost:8080/springboot/api/v1";
        }

        _createClass(UnitMasterService, [{
          key: "getUnit",
          value: function getUnit() {
            return this.http.get("".concat(this.baseUrl, "/units"));
          }
        }, {
          key: "createUnit",
          value: function createUnit(unit) {
            return this.http.post("".concat(this.baseUrl, "/units"), unit);
          }
        }, {
          key: "updateUnit",
          value: function updateUnit(unitId, unit) {
            return this.http.put("".concat(this.baseUrl, "/units/").concat(unitId), unit);
          }
          /* Unit-Employee Mapping goes her ************************************************/

        }, {
          key: "getUnitEmployeeMapping",
          value: function getUnitEmployeeMapping() {
            return this.http.get("".concat(this.baseUrl, "/unitEmployees"));
          }
        }, {
          key: "getOnlyRemainingEmployee",
          value: function getOnlyRemainingEmployee(departmentId, unitId) {
            return this.http.get("".concat(this.baseUrl, "/unitEmployeeOnlyEmployees/").concat(departmentId, "/").concat(unitId));
          }
        }]);

        return UnitMasterService;
      }();

      _UnitMasterService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _UnitMasterService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _UnitMasterService);
      /***/
    },

    /***/
    68722:
    /*!*******************************************************************************!*\
      !*** ./src/app/patient/components/create-patient/create-patient.component.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CreatePatientComponent": function CreatePatientComponent() {
          return (
            /* binding */
            _CreatePatientComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_create_patient_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./create-patient.component.html */
      62497);
      /* harmony import */


      var _create_patient_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./create-patient.component.css */
      51633);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../router.animations */
      74903);
      /* harmony import */


      var _master_patient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../master/patient */
      19975);
      /* harmony import */


      var _service_patient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service/patient.service */
      42766);
      /* harmony import */


      var _master_patient_address__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../master/patient_address */
      41346);
      /* harmony import */


      var _master_country_category_services_patient_address_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../master/country-category/services/patient-address.service */
      55990);
      /* harmony import */


      var _master_account__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../master/account */
      42147);
      /* harmony import */


      var _service_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../service/account.service */
      63193);
      /* harmony import */


      var _master_lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../master/lookup-module/services/lookup.service */
      41168);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _pre_register_patient_service_pre_register_patient_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../pre-register-patient/service/pre-register-patient.service */
      76858);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _CreatePatientComponent = /*#__PURE__*/function () {
        function CreatePatientComponent(patientAddressService, lookupEntityService, patientService, formBuilder, http, router, accountService, modalService, preRegistrationService) {
          _classCallCheck(this, CreatePatientComponent);

          this.patientAddressService = patientAddressService;
          this.lookupEntityService = lookupEntityService;
          this.patientService = patientService;
          this.formBuilder = formBuilder;
          this.http = http;
          this.router = router;
          this.accountService = accountService;
          this.modalService = modalService;
          this.preRegistrationService = preRegistrationService;
          this.regform = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroup({});
          this.FirstName = "";
          this.MiddleName = "";
          this.LastName = "";
          this.isCollapsed = true;
          this.referalCollapsed = true;
          this.pcf = true;
          this.submitted = false;
          this.isAvailEmpDetail = false;
          this.id = 'id';
          this.patient = new _master_patient__WEBPACK_IMPORTED_MODULE_3__.Patient();
          this.patientDetail = new _master_patient__WEBPACK_IMPORTED_MODULE_3__.Patient();
          this.patientGet = new _master_patient__WEBPACK_IMPORTED_MODULE_3__.Patient();
          this.account = new _master_account__WEBPACK_IMPORTED_MODULE_7__.Account();
          this.preRegistrationList = [];
        }

        _createClass(CreatePatientComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.patientGet = history.state;

            if (this.patientGet.mrn != undefined) {
              this.mrn = this.patientGet.mrn; //console.log(this.patientGet)

              this.isAvailEmpDetail = true;
              this.patientDetail = this.patientGet;
              console.log(this.patientDetail.mrn);
            } //console.log("This is the patient Object " + JSON.stringify(this.patient))


            this.regform = this.formBuilder.group({
              mrno: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.mrn),
              patientIdNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.patientIdNo, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern("^[0-9,-]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(15)]),
              notHavingId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.notHavingId),
              registrationDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.registrationDate),
              language: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.language),
              prefix: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.prefix, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              middleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.middleName),
              lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.gender, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              maritalStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.maritalStatus),
              //dobh : new FormControl('',Validators.required),
              dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl((0, _angular_common__WEBPACK_IMPORTED_MODULE_12__.formatDate)(this.patientDetail.dob, 'yyyy-MM-dd', 'en'), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              age: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.age, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(2)]),
              ageUnit: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.ageUnit),
              religion: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.religion),
              nationality: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.nationality, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.mobile, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(12)]),
              secondaryMobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.secondaryMobile, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(12)]),
              occupation: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.occupation),
              aliasName: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.aliasName),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
              highestQual: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.highestQual),
              kids: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.kids, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(1)]),
              confidential: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.confidential),
              patientFlag: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.patientFlag),
              hdykau: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.hdykau, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
              nokRelationship: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.nokRelationship),
              nokPrefix: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.nokPrefix),
              nokFname: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.nokFname),
              nokMname: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.nokMname),
              nokLname: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.nokLname),
              //Address Components starts here
              patientAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroup({
                addressId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.patientAddress.addressId),
                contactPersion: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.patientAddress.contactPerson),
                relation: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.patientAddress.relation),
                address: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.patientAddress.address),
                isUrban: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.patientAddress.isUrban),
                isRural: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.patientAddress.isRural),
                postOffice: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.patientAddress.postOffice),
                policeStation: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.patientAddress.policeStation),
                state: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.patientAddress.state),
                country: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.patientAddress.country, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
                district: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.patientAddress.district),
                pin: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.patientAddress.pin),
                phone1: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.patientAddress.phone1),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.patientAddress.email),
                active: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.patientAddress.active)
              }),
              contactPerson: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.contactPerson),
              relationship: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.relationship),
              relationPhoneno: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.relationPhoneno, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(12)]),
              docSSNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.docSSNo, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(8)]),
              branch: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.branch),
              docname: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.docname),
              refConsultant: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.refConsultant),
              specialityByDoctorId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.specialityByDoctorId),
              refHospitalPatientNoId: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.refHospitalPatientNoId),
              voucher: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.voucher),
              event: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.event),
              emailOrSms: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.emailOrSms),
              friendsFamilies: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.friendsFamilies),
              staff: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.staff),
              media: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.media),
              onlineMedia: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.onlineMedia),
              other: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.other),
              internet: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.internet),
              education: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.education),
              eap: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.eap),
              consentform: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.patientDetail.consentform)
            });
            this.reloadData();
          }
        }, {
          key: "reloadData",
          value: function reloadData() {
            var _this5 = this;

            this.accountService.getAccountList().subscribe(function (data) {
              _this5.accountList = data;
              console.log(data);
            });
            this.lookupEntityService.getAllLookupEntities().subscribe(function (data) {
              //console.log("Before assign data to lookupEntity "+JSON.stringify(data));
              _this5.lookupEntity = data; //console.log("After assign data to lookupEntity "+ JSON.stringify(this.lookupEntity));
            });
            this.patientAddressService.getCountries().subscribe(function (data) {
              _this5.country = data;
            });
            this.patientAddressService.getStates().subscribe(function (data) {
              _this5.state = data;
            });
            this.patientAddressService.getDistricts().subscribe(function (data) {
              _this5.district = data;
            });
            this.preRegistrationService.getPreRegistrationList().subscribe(function (data) {
              console.log(data);
              _this5.preRegistrationList = data;
            });
          }
        }, {
          key: "newPatient",
          value: function newPatient() {
            this.submitted = false;
            this.patient = new _master_patient__WEBPACK_IMPORTED_MODULE_3__.Patient();
          }
        }, {
          key: "save",
          value: function save() {
            var _this6 = this;

            this.address = this.regform.get("patientAddress").value;
            this.patient = this.regform.value;
            this.patient.visitType = null;
            console.warn(this.patient);

            if (this.patient.branch.lookupId == null) {
              this.patient.branch = null;
            }

            if (this.patient.relationship.lookupId == null) {
              this.patient.relationship = null;
            }

            if (this.patient.refConsultant.lookupId == null) {
              this.patient.refConsultant = null;
            }

            if (this.patient.docname.lookupId == null) {
              this.patient.docname = null;
            }

            if (this.patient.education.lookupId == null) {
              this.patient.education = null;
            } //console.log("This is patient class " + this.patient.patientAddress.addressId);
            //console.log("This is address class " + this.address.addressId);


            this.patientAddressService.createPatientAddress(this.address).subscribe(function (data) {
              _this6.address = new _master_patient_address__WEBPACK_IMPORTED_MODULE_5__.PatientAddress();
              _this6.address = data; //console.log(this.address);

              _this6.patient.patientAddress = _this6.address; //console.log("patient address in Patient form is " + this.patient.patientAddress.addressId)
            }, function (error) {
              return console.log(error);
            });
            setTimeout(function () {
              _this6.patientService.createPatient(_this6.patient).subscribe(function (data) {
                _this6.patient = data;
                _this6.account.accountName = _this6.patient.firstName + " " + _this6.patient.lastName;
                _this6.account.accountNo = "ACC" + _this6.patient.mrn;
                _this6.account.accountType = "undemand";
                _this6.account.amount = 0.0;

                _this6.accountService.createAccount(_this6.account).subscribe(function (data) {
                  alert("successsfull created account!!!!!!!!!!!!!!!");
                });

                _this6.patient = new _master_patient__WEBPACK_IMPORTED_MODULE_3__.Patient();

                _this6.gotoList();
              }, function (error) {
                return console.log(error);
              });
            }, 7000);
          }
        }, {
          key: "RegisterPatient",
          value: function RegisterPatient() {
            this.submitted = true;
            this.save();
          }
        }, {
          key: "gotoList",
          value: function gotoList() {
            this.router.navigate(['/registration/patientlist']);
          }
        }, {
          key: "agecalculator",
          value: function agecalculator() {
            var dobt = new Date(this.regform.value.dob);
            console.log(dobt);
            console.log(Date.now());
            console.log(dobt.getTime());
            var ageyear = Math.floor((Date.now() - dobt.getTime()) / (1000 * 3600 * 24));

            if (ageyear <= 30) {
              this.regform.controls['age'].setValue(ageyear);
              this.regform.controls['ageUnit'].setValue('Days');
            } else if (ageyear < 365) {
              this.regform.controls['age'].setValue(Math.floor(ageyear / 30));
              this.regform.controls['ageUnit'].setValue('Months');
            } else {
              this.regform.controls['age'].setValue(Math.floor(ageyear / 365));
              this.regform.controls['ageUnit'].setValue('Years');
            }
          }
        }, {
          key: "ageformat",
          value: function ageformat() {
            console.log(this.regform.get('ageUnit').value);

            if (this.regform.get('ageUnit').value == "Years") {
              var dobt = new Date(this.regform.value.dob);
              var ageyear = Math.floor((Date.now() - dobt.getTime()) / (1000 * 3600 * 24) / 365);
              this.regform.controls['age'].setValue(ageyear);
            } else if (this.regform.get('ageUnit').value == "Months") {
              var dobt = new Date(this.regform.value.dob);
              var ageyear = Math.floor((Date.now() - dobt.getTime()) / (1000 * 3600 * 24) / 12);
              this.regform.controls['age'].setValue(ageyear);
            } else if (this.regform.get('ageUnit').value == "Days") {
              var dobt = new Date(this.regform.value.dob);
              var ageyear = Math.floor((Date.now() - dobt.getTime()) / (1000 * 3600 * 24));
              this.regform.controls['age'].setValue(ageyear);
            }
          }
        }, {
          key: "changeId",
          value: function changeId() {
            this.id = this.regform.get('notHavingId').value;

            if (this.id == "National Without Card") {
              this.regform.controls['patientIdNo'].setValue('111-111111-1111');
            } else if (this.id == "Expatriate Resident Without A Card") {
              this.regform.controls['patientIdNo'].setValue('222-22222-22222');
            } else if (this.id == "Non National, Non Expat Resident Without A Card") {
              this.regform.controls['patientIdNo'].setValue('333-33333-3333');
            } else if (this.id == "Unknown Status, Without A Card") {
              this.regform.controls['patientIdNo'].setValue("00-0000-000000");
            }
          }
        }, {
          key: "gotoStates",
          value: function gotoStates(countries) {
            //console.error(countries);
            this.countryId = countries.countryId; //console.error(this.countryId)
          }
        }, {
          key: "gotoDistricts",
          value: function gotoDistricts(states) {
            //console.log(states);
            this.stateId = states.stateId;
          }
        }, {
          key: "updatePatient",
          value: function updatePatient() {
            var _this7 = this;

            this.mrn = this.patientDetail.mrn;
            this.patientDetail = this.regform.value;
            this.patientDetail.mrn = this.mrn;
            this.patientService.updatePatient(this.mrn, this.patientDetail).subscribe(function (data) {
              alert("successfully updated" + data);

              _this7.router.navigate(['registration/patientlist']);
            });
          }
        }, {
          key: "openPreRegistrationList",
          value: function openPreRegistrationList(preRegistration) {
            this.modalService.open(preRegistration, {
              size: 'lg'
            });
          }
        }, {
          key: "addPreRegisterPatient",
          value: function addPreRegisterPatient(preRegistration) {
            //console.log(preRegistration);
            this.modalService.dismissAll();
            this.regform.controls.firstName.setValue(preRegistration.firstName);
            this.regform.controls.middleName.setValue(preRegistration.middleName);
            this.regform.controls.lastName.setValue(preRegistration.lastName);
            this.regform.controls.gender.setValue(preRegistration.gender);
            var date = new Date(preRegistration.dob);
            this.patientDetail.dob = preRegistration.dob;
            this.regform.controls.dob.setValue(date);
            this.regform.controls.age.setValue(preRegistration.age);
            console.log(preRegistration.dob);
            this.regform.controls.mobile.setValue(preRegistration.telephoneNo);
            this.regform.controls.hdykau.setValue(preRegistration.hdykay);
            this.regform.controls.registrationDate.setValue(date);
            this.regform.controls.dob.setValue((0, _angular_common__WEBPACK_IMPORTED_MODULE_12__.formatDate)(date, 'yyyy-MM-dd', 'en')); //this.regform.get('dob').patchValue(this.formatDate(date));
          }
        }]);

        return CreatePatientComponent;
      }();

      _CreatePatientComponent.ctorParameters = function () {
        return [{
          type: _master_country_category_services_patient_address_service__WEBPACK_IMPORTED_MODULE_6__.PatientAddressService
        }, {
          type: _master_lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_9__.LookupService
        }, {
          type: _service_patient_service__WEBPACK_IMPORTED_MODULE_4__.PatientService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
        }, {
          type: _service_account_service__WEBPACK_IMPORTED_MODULE_8__.AccountService
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModal
        }, {
          type: _pre_register_patient_service_pre_register_patient_service__WEBPACK_IMPORTED_MODULE_10__.PreRegisterPatientService
        }];
      };

      _CreatePatientComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-create-patient',
        template: _raw_loader_create_patient_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_create_patient_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CreatePatientComponent);
      /***/
    },

    /***/
    92668:
    /*!***********************************************************************************************!*\
      !*** ./src/app/patient/components/emergency-registration/emergency-registration.component.ts ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmergencyRegistrationComponent": function EmergencyRegistrationComponent() {
          return (
            /* binding */
            _EmergencyRegistrationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_emergency_registration_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./emergency-registration.component.html */
      52590);
      /* harmony import */


      var _emergency_registration_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./emergency-registration.component.css */
      87826);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../router.animations */
      74903);
      /* harmony import */


      var _master_patient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../master/patient */
      19975);
      /* harmony import */


      var _service_patient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service/patient.service */
      42766);

      var _EmergencyRegistrationComponent = /*#__PURE__*/function () {
        function EmergencyRegistrationComponent(patientService, formBuilder, http, router) {
          _classCallCheck(this, EmergencyRegistrationComponent);

          this.patientService = patientService;
          this.formBuilder = formBuilder;
          this.http = http;
          this.router = router;
          this.baseUrl = "http://localhost:8080/springboot/api/v1/patient";
          this.regform = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({});
          this.FirstName = "";
          this.MiddleName = "";
          this.LastName = "";
          this.patient = new _master_patient__WEBPACK_IMPORTED_MODULE_3__.Patient();
          this.isCollapsed = true;
          this.referalCollapsed = true;
          this.pcf = true;
          this.submitted = false;
          this.id = 'id';
        }

        _createClass(EmergencyRegistrationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.regform = this.formBuilder.group({
              mrno: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.patient.mrn),
              id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(8)]),
              nothavingid: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              date: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              lan: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              prefix: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
              fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
              mname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
              gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
              maritalstatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              //dobh : new FormControl('',Validators.required),
              dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
              age: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]),
              ageUnit: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              religion: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              nationality: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
              mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(8)]),
              mobs: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(8)]),
              occupation: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              aliasname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
              highestqual: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              kids: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(1)]),
              confidential: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              patientflag: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              hdykau: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
              relationship: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              nokprefix: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
              nokfname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              nokmname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              noklname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              address: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.patient),
              pobox: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              street: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              landmark: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              country: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              state: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              city: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              pin: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(6)]),
              phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(8)]),
              sameaddr: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              contactPersonId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              crelationship: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              phone1Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(8)]),
              docSSNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(8)]),
              hospital: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              docname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              refConsultant: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              specialityByDoctorId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              refHospitalPatientNoId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              voucher: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              event: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              emailOrSms: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
              friendsFamilies: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              staff: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              media: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              onlineMedia: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              other: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              internet: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              education: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              eap: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              consentform: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('')
            });
          }
        }, {
          key: "createPatient",
          value: function createPatient(value) {
            return this.http.post("".concat(this.baseUrl), value);
          }
        }, {
          key: "newPatient",
          value: function newPatient() {
            this.submitted = false;
            this.patient = new _master_patient__WEBPACK_IMPORTED_MODULE_3__.Patient();
          }
        }, {
          key: "save",
          value: function save() {
            var _this8 = this;

            this.patient = this.regform.value;
            console.log(this.patient);
            this.patientService.createPatient(this.patient).subscribe(function (data) {
              console.log(data);
              _this8.patient = new _master_patient__WEBPACK_IMPORTED_MODULE_3__.Patient();

              _this8.gotoList();
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "RegisterPatient",
          value: function RegisterPatient() {
            this.submitted = true;
            this.save();
          }
        }, {
          key: "gotoList",
          value: function gotoList() {
            this.router.navigate(['']);
          }
        }, {
          key: "agecalculator",
          value: function agecalculator() {
            var dobt = new Date(this.regform.value.dob);
            console.log(dobt);
            console.log(Date.now());
            console.log(dobt.getTime());
            var ageyear = Math.floor((Date.now() - dobt.getTime()) / (1000 * 3600 * 24));

            if (ageyear <= 30) {
              this.regform.controls['age'].setValue(ageyear);
              this.regform.controls['ageUnit'].setValue('Days');
            } else if (ageyear < 365) {
              this.regform.controls['age'].setValue(Math.floor(ageyear / 30));
              this.regform.controls['ageUnit'].setValue('Months');
            } else {
              this.regform.controls['age'].setValue(Math.floor(ageyear / 365));
              this.regform.controls['ageUnit'].setValue('Years');
            }
          }
        }, {
          key: "ageformat",
          value: function ageformat() {
            console.log(this.regform.get('ageUnit').value);

            if (this.regform.get('ageUnit').value == "Years") {
              var dobt = new Date(this.regform.value.dob);
              var ageyear = Math.floor((Date.now() - dobt.getTime()) / (1000 * 3600 * 24) / 365);
              this.regform.controls['age'].setValue(ageyear);
            } else if (this.regform.get('ageUnit').value == "Months") {
              var dobt = new Date(this.regform.value.dob);
              var ageyear = Math.floor((Date.now() - dobt.getTime()) / (1000 * 3600 * 24) / 12);
              this.regform.controls['age'].setValue(ageyear);
            } else if (this.regform.get('ageUnit').value == "Days") {
              var dobt = new Date(this.regform.value.dob);
              var ageyear = Math.floor((Date.now() - dobt.getTime()) / (1000 * 3600 * 24));
              this.regform.controls['age'].setValue(ageyear);
            }
          }
        }, {
          key: "changeId",
          value: function changeId() {
            this.id = this.regform.get('nothavingid').value;
          }
        }]);

        return EmergencyRegistrationComponent;
      }();

      _EmergencyRegistrationComponent.ctorParameters = function () {
        return [{
          type: _service_patient_service__WEBPACK_IMPORTED_MODULE_4__.PatientService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }];
      };

      _EmergencyRegistrationComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-emergency-registration',
        template: _raw_loader_emergency_registration_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_emergency_registration_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _EmergencyRegistrationComponent);
      /***/
    },

    /***/
    77066:
    /*!***************************************************************************!*\
      !*** ./src/app/patient/components/patient-list/patient-list.component.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PatientListComponent": function PatientListComponent() {
          return (
            /* binding */
            _PatientListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_patient_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./patient-list.component.html */
      88418);
      /* harmony import */


      var _patient_list_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./patient-list.component.css */
      85089);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../router.animations */
      74903);
      /* harmony import */


      var _service_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/patient.service */
      42766);

      var _PatientListComponent = /*#__PURE__*/function () {
        function PatientListComponent(http, patientService, router) {
          _classCallCheck(this, PatientListComponent);

          this.http = http;
          this.patientService = patientService;
          this.router = router;
          this.name = "";
          this.page = 1;
          this.pageSize = 5;
        }

        _createClass(PatientListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getPatient();
          }
        }, {
          key: "getPatient",
          value: function getPatient() {
            var _this9 = this;

            this.patientService.getPatientList().subscribe(function (data) {
              console.log(data), _this9.patientList = data, _this9.len = data.length;
            });
          }
        }, {
          key: "deletePatient",
          value: function deletePatient(id) {
            this.patientService.deletePatient(id).subscribe(function (data) {
              console.log(data);
            });
            this.getPatient();
          }
        }, {
          key: "updatePatient",
          value: function updatePatient(patient) {
            this.router.navigate(['/registration/createpatient'], {
              state: patient
            });
          }
        }]);

        return PatientListComponent;
      }();

      _PatientListComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
        }, {
          type: _service_patient_service__WEBPACK_IMPORTED_MODULE_3__.PatientService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }];
      };

      _PatientListComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-patient-list',
        template: _raw_loader_patient_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_patient_list_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PatientListComponent);
      /***/
    },

    /***/
    42147:
    /*!*******************************************!*\
      !*** ./src/app/patient/master/account.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Account": function Account() {
          return (
            /* binding */
            _Account
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _master_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../master/masters/base-entity */
      28685);

      var _Account = /*#__PURE__*/function (_master_masters_base_) {
        _inherits(_Account, _master_masters_base_);

        var _super5 = _createSuper(_Account);

        function _Account() {
          _classCallCheck(this, _Account);

          return _super5.call(this);
        }

        return _Account;
      }(_master_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity);
      /***/

    },

    /***/
    19975:
    /*!*******************************************!*\
      !*** ./src/app/patient/master/patient.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Patient": function Patient() {
          return (
            /* binding */
            _Patient
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../master/lookup-module/masters/lookup-entity */
      11697);
      /* harmony import */


      var _patient_address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./patient_address */
      41346);

      var _Patient = function _Patient() {
        _classCallCheck(this, _Patient);

        this.registrationDate = new Date();
        this.language = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
        this.prefix = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
        this.gender = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
        this.maritalStatus = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
        this.dob = new Date();
        this.nokRelationship = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
        this.nokPrefix = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
        this.relationship = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
        this.branch = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
        this.docname = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
        this.refConsultant = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
        this.education = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
        this.patientAddress = new _patient_address__WEBPACK_IMPORTED_MODULE_1__.PatientAddress();
        this.visitType = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
      };
      /***/

    },

    /***/
    41346:
    /*!***************************************************!*\
      !*** ./src/app/patient/master/patient_address.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PatientAddress": function PatientAddress() {
          return (
            /* binding */
            _PatientAddress
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _master_country_category_masters_country__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../master/country-category/masters/country */
      60139);
      /* harmony import */


      var _master_country_category_masters_district__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../master/country-category/masters/district */
      14139);
      /* harmony import */


      var _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../master/lookup-module/masters/lookup-entity */
      11697);
      /* harmony import */


      var _master_country_category_masters_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../master/country-category/masters/state */
      44636);

      var _PatientAddress = function _PatientAddress() {
        _classCallCheck(this, _PatientAddress);

        this.state = new _master_country_category_masters_state__WEBPACK_IMPORTED_MODULE_3__.State();
        this.relation = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity();
        this.active = false;
        this.country = new _master_country_category_masters_country__WEBPACK_IMPORTED_MODULE_0__.Country();
        this.district = new _master_country_category_masters_district__WEBPACK_IMPORTED_MODULE_1__.District();
      };
      /***/

    },

    /***/
    53760:
    /*!***************************************************!*\
      !*** ./src/app/patient/patient-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PatientRoutingModule": function PatientRoutingModule() {
          return (
            /* binding */
            _PatientRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _components_create_patient_create_patient_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/create-patient/create-patient.component */
      68722);
      /* harmony import */


      var _components_emergency_registration_emergency_registration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/emergency-registration/emergency-registration.component */
      92668);
      /* harmony import */


      var _components_patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/patient-list/patient-list.component */
      77066);
      /* harmony import */


      var _patient_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./patient.component */
      42405);

      ;
      var routes = [{
        path: '',
        component: _patient_component__WEBPACK_IMPORTED_MODULE_3__.PatientComponent
      }, {
        path: 'createpatient',
        component: _components_create_patient_create_patient_component__WEBPACK_IMPORTED_MODULE_0__.CreatePatientComponent
      }, {
        path: 'patientlist',
        component: _components_patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_2__.PatientListComponent
      }, {
        path: 'emergencyregistration',
        component: _components_emergency_registration_emergency_registration_component__WEBPACK_IMPORTED_MODULE_1__.EmergencyRegistrationComponent
      }];

      var _PatientRoutingModule = function PatientRoutingModule() {
        _classCallCheck(this, PatientRoutingModule);
      };

      _PatientRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
      })], _PatientRoutingModule);
      /***/
    },

    /***/
    42405:
    /*!**********************************************!*\
      !*** ./src/app/patient/patient.component.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PatientComponent": function PatientComponent() {
          return (
            /* binding */
            _PatientComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_patient_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./patient.component.html */
      94645);
      /* harmony import */


      var _patient_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./patient.component.css */
      42134);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../router.animations */
      74903);

      var _PatientComponent = /*#__PURE__*/function () {
        function PatientComponent() {
          _classCallCheck(this, PatientComponent);
        }

        _createClass(PatientComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PatientComponent;
      }();

      _PatientComponent.ctorParameters = function () {
        return [];
      };

      _PatientComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-patient',
        template: _raw_loader_patient_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_patient_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PatientComponent);
      /***/
    },

    /***/
    72158:
    /*!*******************************************!*\
      !*** ./src/app/patient/patient.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PatientModule": function PatientModule() {
          return (
            /* binding */
            _PatientModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _patient_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./patient-routing.module */
      53760);
      /* harmony import */


      var _shared_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/modules */
      41277);
      /* harmony import */


      var _patient_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./patient.component */
      42405);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _pipe_search_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pipe/search.pipe */
      80915);
      /* harmony import */


      var _pre_register_patient_pre_register_patient_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../pre-register-patient/pre-register-patient.module */
      38666);
      /* harmony import */


      var _components_create_patient_create_patient_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/create-patient/create-patient.component */
      68722);
      /* harmony import */


      var _components_patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/patient-list/patient-list.component */
      77066);
      /* harmony import */


      var _components_emergency_registration_emergency_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/emergency-registration/emergency-registration.component */
      92668);

      var _PatientModule = function PatientModule() {
        _classCallCheck(this, PatientModule);
      };

      _PatientModule = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_components_create_patient_create_patient_component__WEBPACK_IMPORTED_MODULE_5__.CreatePatientComponent, _patient_component__WEBPACK_IMPORTED_MODULE_2__.PatientComponent, _components_patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_6__.PatientListComponent, _components_emergency_registration_emergency_registration_component__WEBPACK_IMPORTED_MODULE_7__.EmergencyRegistrationComponent, _pipe_search_pipe__WEBPACK_IMPORTED_MODULE_3__.SearchPipe],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _shared_modules__WEBPACK_IMPORTED_MODULE_1__.PageHeaderModule, _shared_modules__WEBPACK_IMPORTED_MODULE_1__.StatModule, _patient_routing_module__WEBPACK_IMPORTED_MODULE_0__.PatientRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _pre_register_patient_pre_register_patient_module__WEBPACK_IMPORTED_MODULE_4__.PreRegisterPatientModule]
      })], _PatientModule);
      /***/
    },

    /***/
    80915:
    /*!*********************************************!*\
      !*** ./src/app/patient/pipe/search.pipe.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchPipe": function SearchPipe() {
          return (
            /* binding */
            _SearchPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _SearchPipe = /*#__PURE__*/function () {
        function SearchPipe() {
          _classCallCheck(this, SearchPipe);
        }

        _createClass(SearchPipe, [{
          key: "transform",
          value: function transform(value, args) {
            if (!args) {
              return value;
            }

            return value.filter(function (val) {
              args = args.toLowerCase();
              var rVal = val.lastName.toLocaleLowerCase().includes(args) || val.firstName.toLowerCase().includes(args) || val.mobile.toString().toLowerCase().includes(args) || val.onlineMedia.toLowerCase().includes(args) || val.patientAddress.address.toLowerCase().includes(args) || val.patientAddress.state.stateName.toLowerCase().includes(args) || val.patientAddress.state.country.countryName.toLowerCase().includes(args);
              return rVal;
            });
          }
        }]);

        return SearchPipe;
      }();

      _SearchPipe = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'search'
      })], _SearchPipe);
      /***/
    },

    /***/
    63193:
    /*!****************************************************!*\
      !*** ./src/app/patient/service/account.service.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccountService": function AccountService() {
          return (
            /* binding */
            _AccountService
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _AccountService = /*#__PURE__*/function () {
        function AccountService(http) {
          _classCallCheck(this, AccountService);

          this.http = http;
          this.baseUrl = "http://localhost:8080/springboot/api/v1";
        }

        _createClass(AccountService, [{
          key: "getAccountList",
          value: function getAccountList() {
            return this.http.get("".concat(this.baseUrl, "/account/get"));
          }
        }, {
          key: "createAccount",
          value: function createAccount(account) {
            return this.http.post("".concat(this.baseUrl, "/account/add"), account);
          }
        }]);

        return AccountService;
      }();

      _AccountService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _AccountService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _AccountService);
      /***/
    },

    /***/
    42766:
    /*!****************************************************!*\
      !*** ./src/app/patient/service/patient.service.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PatientService": function PatientService() {
          return (
            /* binding */
            _PatientService
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _PatientService = /*#__PURE__*/function () {
        function PatientService(http) {
          _classCallCheck(this, PatientService);

          this.http = http;
          this.baseUrl = "http://localhost:8080/springboot/api/v1/patient";
        }

        _createClass(PatientService, [{
          key: "getPatientList",
          value: function getPatientList() {
            return this.http.get("".concat(this.baseUrl));
          }
        }, {
          key: "getPatient",
          value: function getPatient(id) {
            return this.http.get("".concat(this.baseUrl, "/").concat(id));
          }
        }, {
          key: "deletePatient",
          value: function deletePatient(id) {
            return this.http["delete"]("".concat(this.baseUrl, "/").concat(id));
          }
        }, {
          key: "createPatient",
          value: function createPatient(value) {
            return this.http.post("".concat(this.baseUrl), value);
          }
        }, {
          key: "updatePatient",
          value: function updatePatient(mrn, value) {
            return this.http.put("".concat(this.baseUrl, "/").concat(mrn), value);
          }
        }]);

        return PatientService;
      }();

      _PatientService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _PatientService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _PatientService);
      /***/
    },

    /***/
    32838:
    /*!****************************************************************************************************************!*\
      !*** ./src/app/pre-register-patient/components/add-pre-register-patient/add-pre-register-patient.component.ts ***!
      \****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddPreRegisterPatientComponent": function AddPreRegisterPatientComponent() {
          return (
            /* binding */
            _AddPreRegisterPatientComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_add_pre_register_patient_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./add-pre-register-patient.component.html */
      90288);
      /* harmony import */


      var _add_pre_register_patient_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-pre-register-patient.component.css */
      91671);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _masters_pre_register_patient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../masters/pre-register-patient */
      19976);
      /* harmony import */


      var _service_pre_register_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/pre-register-patient.service */
      76858);
      /* harmony import */


      var _service_prefix_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service/prefix-master.service */
      296);
      /* harmony import */


      var _router_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../router.animations */
      74903);
      /* harmony import */


      var _master_lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../master/lookup-module/services/lookup.service */
      41168);
      /* harmony import */


      var _master_country_category_services_patient_address_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../master/country-category/services/patient-address.service */
      55990);
      /* harmony import */


      var _master_department_services_department_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../master/department/services/department.service */
      25482);
      /* harmony import */


      var _master_service_center_services_branch_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../master/service-center/services/branch-service.service */
      31582);

      var _AddPreRegisterPatientComponent = /*#__PURE__*/function () {
        function AddPreRegisterPatientComponent(PreRegistrationService, lookupServic, prefixMasterService, patientAddressService, branchService, departmentService, router, fb) {
          _classCallCheck(this, AddPreRegisterPatientComponent);

          this.PreRegistrationService = PreRegistrationService;
          this.lookupServic = lookupServic;
          this.prefixMasterService = prefixMasterService;
          this.patientAddressService = patientAddressService;
          this.branchService = branchService;
          this.departmentService = departmentService;
          this.router = router;
          this.fb = fb;
          this.preRegisterPatient = new _masters_pre_register_patient__WEBPACK_IMPORTED_MODULE_2__.PreRegisterPatient();
          this.submitted = false;
          this.preRegistrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({});
          this.lookupEntityList = new Array();
          this.prefixList = new Array();
          this.branchList = new Array();
          this.departmentList = new Array();
          this.patientAddressList = [];
        }

        _createClass(AddPreRegisterPatientComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.lookupServic.getAllLookupEntities().subscribe(function (data) {
              _this10.lookupEntityList = data;
            });
            this.prefixMasterService.getPrefixMasterList().subscribe(function (data) {
              _this10.prefixList = data;
            });
            this.branchService.getBranch().subscribe(function (data) {
              _this10.branchList = data;
              console.log(_this10.branchList);
            });
            this.departmentService.getAllDepartments().subscribe(function (data) {
              _this10.departmentList = data;
              console.log(_this10.departmentList);
            });
            this.patientAddressService.getPatientAddressList().subscribe(function (data) {
              _this10.patientAddressList = data;
              console.log(data);
            });
            this.preRegistrationForm = this.fb.group({
              preRegistrationId: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null),
              preRegnType: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null),
              preRegistrationNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null),
              queueDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null),
              firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null),
              middleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null),
              lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null),
              patientPrefix: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null),
              gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null),
              dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null),
              age: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null),
              patientAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null),
              telephoneNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null),
              language: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null),
              remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null),
              reasonforEnquiry: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null),
              paymentMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null),
              hdyhau: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null),
              branch: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null),
              department: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null)
            });
          }
        }, {
          key: "PreRegistration",
          value: function PreRegistration() {
            this.submitted = false;
            this.preRegisterPatient = new _masters_pre_register_patient__WEBPACK_IMPORTED_MODULE_2__.PreRegisterPatient();
          }
        }, {
          key: "save",
          value: function save() {
            var _this11 = this;

            this.preRegisterPatient = this.preRegistrationForm.value;
            this.preRegisterPatient.active = true;
            console.log(this.preRegisterPatient);
            this.PreRegistrationService.addPreRegistration(this.preRegisterPatient).subscribe(function (data) {
              console.log(data);
              _this11.preRegisterPatient = new _masters_pre_register_patient__WEBPACK_IMPORTED_MODULE_2__.PreRegisterPatient();

              _this11.gotoList();
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            console.log(this.preRegistrationForm.value);
            this.save();
          }
        }, {
          key: "gotoList",
          value: function gotoList() {
            this.router.navigate(['/preRegistration/pre-register-patient-list']);
          }
        }]);

        return AddPreRegisterPatientComponent;
      }();

      _AddPreRegisterPatientComponent.ctorParameters = function () {
        return [{
          type: _service_pre_register_patient_service__WEBPACK_IMPORTED_MODULE_3__.PreRegisterPatientService
        }, {
          type: _master_lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__.LookupService
        }, {
          type: _service_prefix_master_service__WEBPACK_IMPORTED_MODULE_4__.PrefixMasterService
        }, {
          type: _master_country_category_services_patient_address_service__WEBPACK_IMPORTED_MODULE_7__.PatientAddressService
        }, {
          type: _master_service_center_services_branch_service_service__WEBPACK_IMPORTED_MODULE_9__.BranchServiceService
        }, {
          type: _master_department_services_department_service__WEBPACK_IMPORTED_MODULE_8__.DepartmentService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder
        }];
      };

      _AddPreRegisterPatientComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-add-pre-register-patient',
        template: _raw_loader_add_pre_register_patient_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _router_animations__WEBPACK_IMPORTED_MODULE_5__.routerTransition)()],
        styles: [_add_pre_register_patient_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AddPreRegisterPatientComponent);
      /***/
    },

    /***/
    37237:
    /*!**************************************************************************************************************************!*\
      !*** ./src/app/pre-register-patient/components/pre-register-appointment-list/pre-register-appointment-list.component.ts ***!
      \**************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PreRegisterAppointmentListComponent": function PreRegisterAppointmentListComponent() {
          return (
            /* binding */
            _PreRegisterAppointmentListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_pre_register_appointment_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./pre-register-appointment-list.component.html */
      30402);
      /* harmony import */


      var _pre_register_appointment_list_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pre-register-appointment-list.component.css */
      98669);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../router.animations */
      74903);
      /* harmony import */


      var _masters_pre_register_appointment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../masters/pre-register-appointment */
      42494);
      /* harmony import */


      var _service_pre_registered_appointment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service/pre-registered-appointment.service */
      79790);

      var _PreRegisterAppointmentListComponent = /*#__PURE__*/function () {
        function PreRegisterAppointmentListComponent(preRegisterAppointmentService) {
          _classCallCheck(this, PreRegisterAppointmentListComponent);

          this.preRegisterAppointmentService = preRegisterAppointmentService;
          this.preRegisteredAppointmentList = [];
          this.preRegisterAppointment = new _masters_pre_register_appointment__WEBPACK_IMPORTED_MODULE_3__.PreRegisterAppointment();
          this.page = 1;
          this.pageSize = 5;
        }

        _createClass(PreRegisterAppointmentListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.reloadData();
          }
        }, {
          key: "reloadData",
          value: function reloadData() {
            var _this12 = this;

            this.preRegisterAppointmentService.getPreRegisteredAppointmentList().subscribe(function (data) {
              console.log(data);
              _this12.preRegisteredAppointmentList = data;
              _this12.len = data;
            });
          }
        }]);

        return PreRegisterAppointmentListComponent;
      }();

      _PreRegisterAppointmentListComponent.ctorParameters = function () {
        return [{
          type: _service_pre_registered_appointment_service__WEBPACK_IMPORTED_MODULE_4__.PreRegisteredAppointmentService
        }];
      };

      _PreRegisterAppointmentListComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-pre-register-appointment-list',
        template: _raw_loader_pre_register_appointment_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_pre_register_appointment_list_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PreRegisterAppointmentListComponent);
      /***/
    },

    /***/
    9939:
    /*!****************************************************************************************************************!*\
      !*** ./src/app/pre-register-patient/components/pre-register-appointment/pre-register-appointment.component.ts ***!
      \****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PreRegisterAppointmentComponent": function PreRegisterAppointmentComponent() {
          return (
            /* binding */
            _PreRegisterAppointmentComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_pre_register_appointment_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./pre-register-appointment.component.html */
      78718);
      /* harmony import */


      var _pre_register_appointment_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pre-register-appointment.component.css */
      58691);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../router.animations */
      74903);
      /* harmony import */


      var _master_department_services_department_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../master/department/services/department.service */
      25482);
      /* harmony import */


      var _master_service_center_services_branch_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../master/service-center/services/branch-service.service */
      31582);
      /* harmony import */


      var _master_unit_master_services_unit_master_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../master/unit-master/services/unit-master.service */
      20319);
      /* harmony import */


      var _masters_pre_register_appointment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../masters/pre-register-appointment */
      42494);
      /* harmony import */


      var _masters_pre_register_patient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../masters/pre-register-patient */
      19976);
      /* harmony import */


      var _masters_referal_doctor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../masters/referal-doctor */
      59685);
      /* harmony import */


      var _masters_schedule_doctor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../masters/schedule-doctor */
      2100);
      /* harmony import */


      var _service_pre_registered_appointment_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../service/pre-registered-appointment.service */
      79790);
      /* harmony import */


      var _service_referral_doctor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../service/referral-doctor.service */
      99628);
      /* harmony import */


      var _service_schedule_doctor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../service/schedule-doctor.service */
      13070);

      var _PreRegisterAppointmentComponent = /*#__PURE__*/function () {
        function PreRegisterAppointmentComponent(router, fb, preRegistrationAppointmentService, route, branchService, departmentService, unitService, referralDoctorService, scheduleDoctorService) {
          _classCallCheck(this, PreRegisterAppointmentComponent);

          this.router = router;
          this.fb = fb;
          this.preRegistrationAppointmentService = preRegistrationAppointmentService;
          this.route = route;
          this.branchService = branchService;
          this.departmentService = departmentService;
          this.unitService = unitService;
          this.referralDoctorService = referralDoctorService;
          this.scheduleDoctorService = scheduleDoctorService;
          this.preregistration_appointment = new _masters_pre_register_appointment__WEBPACK_IMPORTED_MODULE_6__.PreRegisterAppointment();
          this.submitted = false;
          this.preRegistration_appointmentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup({});
          this.branchList = new Array();
          this.departmentList = new Array();
          this.unitList = new Array();
          this.doctorList = new Array();
          this.date = new Date();
          this.weekList = [];
          this.doctor = new _masters_referal_doctor__WEBPACK_IMPORTED_MODULE_8__.Doctor();
          this.gotAppointment = false;
          this.doctorScheduleList = new Array();
          this.preRegisterPatient = new _masters_pre_register_patient__WEBPACK_IMPORTED_MODULE_7__.PreRegisterPatient();
          this.scheduledDoctorDetails = new _masters_schedule_doctor__WEBPACK_IMPORTED_MODULE_9__.ScheduleDoctor();
          this.createsavePreRegistrationAppointment = new _masters_pre_register_appointment__WEBPACK_IMPORTED_MODULE_6__.PreRegisterAppointment();
          this.preRegistrationAppointmentList = [];
          this.hourList = [];
          this.minuteList = [];
          this.slotTiming = 20;
          this.preRegistrationPatient = new _masters_pre_register_patient__WEBPACK_IMPORTED_MODULE_7__.PreRegisterPatient();
        }

        _createClass(PreRegisterAppointmentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            var data = sessionStorage.getItem('preRegisterPatient'); //console.log(data)

            if (data != undefined) {
              this.preRegisterPatient = JSON.parse(data);
              console.log(this.preRegisterPatient);
            } //console.log(this.preRegistration)


            for (var i = 1; i <= 7; i++) {
              this.weekList.push(this.date);
              this.nextDate = this.date.getDate();
              this.nextDate += 1;
              this.date = new Date(this.date.setDate(this.nextDate));
            }

            this.preRegistration_appointmentForm = this.fb.group({
              branch: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
              department: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
              doctor: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
              unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
              appointmentDateTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null)
            });
            this.branchService.getBranch().subscribe(function (data) {
              _this13.branchList = data;
              console.log(_this13.branchList);
            });
            this.departmentService.getAllDepartments().subscribe(function (data) {
              _this13.departmentList = data;
              console.log(_this13.departmentList);
            });
            this.unitService.getUnit().subscribe(function (data) {
              _this13.unitList = data; //console.log(this.unitList)
            });
            this.referralDoctorService.getReferralDoctorList().subscribe(function (data) {
              _this13.doctorList = data; //console.log(this.doctorList)
            });
            this.preRegistrationAppointmentService.getPreRegisteredAppointmentList().subscribe(function (data) {
              _this13.preRegistrationAppointmentList = data;

              _this13.preRegistrationAppointmentList.forEach(function (data) {
                console.log(data.appointmentDateTime);
              }); //console.log(this.doctorList)

            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {}
        }, {
          key: "showDepartment",
          value: function showDepartment(branch) {
            console.log(branch.id);
            this.branchId = branch.id;
          }
        }, {
          key: "showUnit",
          value: function showUnit(department) {
            this.departmentId = department.departmentId;
          }
        }, {
          key: "showDoctors",
          value: function showDoctors(unit) {
            this.unitId = unit.unitId;
          }
        }, {
          key: "scheduleDoctor",
          value: function scheduleDoctor() {
            var _this14 = this;

            this.doctor = this.preRegistration_appointmentForm.value.doctor;
            this.scheduleDoctorService.getScheduleDoctorsByDoctorId(this.doctor.doctorId).subscribe(function (data) {
              //console.log(data),
              _this14.doctorScheduleList = data; //console.log(this.doctorScheduleList)
            }); //console.log(this.preRegistration_appointmentForm.value.doctor.doctorName)
          }
        }, {
          key: "gotoSubmit",
          value: function gotoSubmit(doctorDetail) {
            this.scheduledDoctorDetails = doctorDetail; //console.log(doctorDetail)

            this.gotAppointment = true;

            var _iterator = _createForOfIteratorHelper(this.doctorScheduleList),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {//console.log(i.availableTo)
                //console.log(i.availableFrom)

                var i = _step.value;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var availFrom = new Date(doctorDetail.availableFrom);
            var availTo = new Date(doctorDetail.availableTo);
            console.log("Available From", availTo.getTime(), availFrom.getTime());

            for (var time = availFrom.getTime(); time < availTo.getTime(); time += 1200000) {
              //console.log(this.scheduledDoctorDetails.availableFrom)
              //console.log(typeof(time))

              /*
              let timeList = time.toString().split("")
              let hour = timeList[0];
              let minute = timeList[1];
              //console.log(hour, minute)
              this.hourList.push(hour);
              let minutes = Number(minute)+20;
              this.minuteList.push(minute);
              if((minutes)>60){
                  hour = (Number(hour)+1).toString();
                  minute =(minutes/60).toString()
              }
              time = Number(hour+minute)
              console.log(minute,hour)
              console.log(time) */
              var date = new Date(time);
              this.hourList.push(date);
            }

            alert(this.hourList);
          }
        }, {
          key: "savePreRegistrationAppointment",
          value: function savePreRegistrationAppointment() {
            this.createsavePreRegistrationAppointment = this.preRegistration_appointmentForm.value;
            this.createsavePreRegistrationAppointment.patient = this.preRegisterPatient;
            this.createsavePreRegistrationAppointment.scheduleDoctor = this.scheduledDoctorDetails;
            console.log(this.createsavePreRegistrationAppointment);
            this.preRegistrationAppointmentService.addPreRegisteredAppointment(this.createsavePreRegistrationAppointment).subscribe(function (data) {
              console.log(data);
              alert("Successfully Added!!!!!!!!");
            });
          }
        }]);

        return PreRegisterAppointmentComponent;
      }();

      _PreRegisterAppointmentComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder
        }, {
          type: _service_pre_registered_appointment_service__WEBPACK_IMPORTED_MODULE_10__.PreRegisteredAppointmentService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute
        }, {
          type: _master_service_center_services_branch_service_service__WEBPACK_IMPORTED_MODULE_4__.BranchServiceService
        }, {
          type: _master_department_services_department_service__WEBPACK_IMPORTED_MODULE_3__.DepartmentService
        }, {
          type: _master_unit_master_services_unit_master_service__WEBPACK_IMPORTED_MODULE_5__.UnitMasterService
        }, {
          type: _service_referral_doctor_service__WEBPACK_IMPORTED_MODULE_11__.ReferralDoctorService
        }, {
          type: _service_schedule_doctor_service__WEBPACK_IMPORTED_MODULE_12__.ScheduleDoctorService
        }];
      };

      _PreRegisterAppointmentComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-pre-register-appointment',
        template: _raw_loader_pre_register_appointment_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_pre_register_appointment_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PreRegisterAppointmentComponent);
      /***/
    },

    /***/
    91764:
    /*!******************************************************************************************************************!*\
      !*** ./src/app/pre-register-patient/components/pre-register-patient-list/pre-register-patient-list.component.ts ***!
      \******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PreRegisterPatientListComponent": function PreRegisterPatientListComponent() {
          return (
            /* binding */
            _PreRegisterPatientListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_pre_register_patient_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./pre-register-patient-list.component.html */
      13552);
      /* harmony import */


      var _pre_register_patient_list_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pre-register-patient-list.component.css */
      686);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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
      /* harmony import */


      var _service_pre_register_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/pre-register-patient.service */
      76858);

      var _PreRegisterPatientListComponent = /*#__PURE__*/function () {
        function PreRegisterPatientListComponent(preregistrationService, route, router) {
          _classCallCheck(this, PreRegisterPatientListComponent);

          this.preregistrationService = preregistrationService;
          this.route = route;
          this.router = router;
          this.page = 1;
          this.pageSize = 5;
        }

        _createClass(PreRegisterPatientListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.preregistrationService.getPreRegistrationList().subscribe(function (data) {
              _this15.preregistrationList = data;
              _this15.len = data.length;
              console.log(data);
            });
          }
        }, {
          key: "gotoPreRegistrationAppointment",
          value: function gotoPreRegistrationAppointment(preregistration) {
            var data = JSON.stringify(preregistration);
            sessionStorage.setItem('preRegisterPatient', data);
            this.router.navigate(['/preRegistration/pre-registered-appointment']);
          }
        }]);

        return PreRegisterPatientListComponent;
      }();

      _PreRegisterPatientListComponent.ctorParameters = function () {
        return [{
          type: _service_pre_register_patient_service__WEBPACK_IMPORTED_MODULE_3__.PreRegisterPatientService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }];
      };

      _PreRegisterPatientListComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-pre-register-patient-list',
        template: _raw_loader_pre_register_patient_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_pre_register_patient_list_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PreRegisterPatientListComponent);
      /***/
    },

    /***/
    42494:
    /*!**************************************************************************!*\
      !*** ./src/app/pre-register-patient/masters/pre-register-appointment.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PreRegisterAppointment": function PreRegisterAppointment() {
          return (
            /* binding */
            _PreRegisterAppointment
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _master_department_masters_department__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../master/department/masters/department */
      10776);
      /* harmony import */


      var _master_service_center_masters_branch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../master/service-center/masters/branch */
      40478);
      /* harmony import */


      var _master_unit_master_masters_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../master/unit-master/masters/unit */
      56552);
      /* harmony import */


      var _pre_register_patient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pre-register-patient */
      19976);
      /* harmony import */


      var _referal_doctor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./referal-doctor */
      59685);
      /* harmony import */


      var _schedule_doctor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./schedule-doctor */
      2100);

      var _PreRegisterAppointment = function _PreRegisterAppointment() {
        _classCallCheck(this, _PreRegisterAppointment);

        this.branch = new _master_service_center_masters_branch__WEBPACK_IMPORTED_MODULE_1__.Branch();
        this.department = new _master_department_masters_department__WEBPACK_IMPORTED_MODULE_0__.Department();
        this.unit = new _master_unit_master_masters_unit__WEBPACK_IMPORTED_MODULE_2__.Unit();
        this.doctor = new _referal_doctor__WEBPACK_IMPORTED_MODULE_4__.Doctor();
        this.patient = new _pre_register_patient__WEBPACK_IMPORTED_MODULE_3__.PreRegisterPatient();
        this.scheduleDoctor = new _schedule_doctor__WEBPACK_IMPORTED_MODULE_5__.ScheduleDoctor();
        this.appointmentDateTime = new Date();
        this.active = true;
      };
      /***/

    },

    /***/
    19976:
    /*!**********************************************************************!*\
      !*** ./src/app/pre-register-patient/masters/pre-register-patient.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PreRegisterPatient": function PreRegisterPatient() {
          return (
            /* binding */
            _PreRegisterPatient
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _master_department_masters_department__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../master/department/masters/department */
      10776);
      /* harmony import */


      var _master_service_center_masters_branch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../master/service-center/masters/branch */
      40478);
      /* harmony import */


      var _master_unit_master_masters_PrefixMaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../master/unit-master/masters/PrefixMaster */
      71277);
      /* harmony import */


      var _patient_master_patient_address__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../patient/master/patient_address */
      41346);
      /* harmony import */


      var _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../master/lookup-module/masters/lookup-entity */
      11697);

      var _PreRegisterPatient = function _PreRegisterPatient() {
        _classCallCheck(this, _PreRegisterPatient);

        this.preRegnType = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_4__.LookupEntity();
        this.queueDate = new Date();
        this.patientPrefix = new _master_unit_master_masters_PrefixMaster__WEBPACK_IMPORTED_MODULE_2__.PrefixMaster();
        this.gender = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_4__.LookupEntity();
        this.dob = new Date();
        this.patientAddress = new _patient_master_patient_address__WEBPACK_IMPORTED_MODULE_3__.PatientAddress();
        this.branch = new _master_service_center_masters_branch__WEBPACK_IMPORTED_MODULE_1__.Branch();
        this.department = new _master_department_masters_department__WEBPACK_IMPORTED_MODULE_0__.Department();
        this.sendApproval = true;
        this.active = true;
      };
      /***/

    },

    /***/
    59685:
    /*!****************************************************************!*\
      !*** ./src/app/pre-register-patient/masters/referal-doctor.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Doctor": function Doctor() {
          return (
            /* binding */
            _Doctor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _master_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../master/masters/base-entity */
      28685);
      /* harmony import */


      var _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../master/lookup-module/masters/lookup-entity */
      11697);
      /* harmony import */


      var _master_unit_master_masters_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../master/unit-master/masters/unit */
      56552);

      var _Doctor = /*#__PURE__*/function (_master_masters_base_2) {
        _inherits(_Doctor, _master_masters_base_2);

        var _super6 = _createSuper(_Doctor);

        function _Doctor() {
          var _this16;

          _classCallCheck(this, _Doctor);

          _this16 = _super6.call(this);
          _this16.speciality = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__.LookupEntity();
          _this16.unit = new _master_unit_master_masters_unit__WEBPACK_IMPORTED_MODULE_2__.Unit();
          _this16.active = true;
          return _this16;
        }

        return _Doctor;
      }(_master_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity);
      /***/

    },

    /***/
    2100:
    /*!*****************************************************************!*\
      !*** ./src/app/pre-register-patient/masters/schedule-doctor.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScheduleDoctor": function ScheduleDoctor() {
          return (
            /* binding */
            _ScheduleDoctor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _master_department_masters_department__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../master/department/masters/department */
      10776);
      /* harmony import */


      var _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../master/lookup-module/masters/lookup-entity */
      11697);
      /* harmony import */


      var _master_service_center_masters_branch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../master/service-center/masters/branch */
      40478);
      /* harmony import */


      var _master_unit_master_masters_unit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../master/unit-master/masters/unit */
      56552);
      /* harmony import */


      var _referal_doctor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./referal-doctor */
      59685);

      var _ScheduleDoctor = function _ScheduleDoctor() {
        _classCallCheck(this, _ScheduleDoctor);

        this.availableDate = new Date();
        this.department = new _master_department_masters_department__WEBPACK_IMPORTED_MODULE_0__.Department();
        this.doctor = new _referal_doctor__WEBPACK_IMPORTED_MODULE_4__.Doctor();
        this.availableFrom = new Date();
        this.availableTo = new Date();
        this.branch = new _master_service_center_masters_branch__WEBPACK_IMPORTED_MODULE_2__.Branch();
        this.unit = new _master_unit_master_masters_unit__WEBPACK_IMPORTED_MODULE_3__.Unit();
        this.scheduleDate = new Date();
        this.scheduleType = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__.LookupEntity();
      };
      /***/

    },

    /***/
    70235:
    /*!*****************************************************************************!*\
      !*** ./src/app/pre-register-patient/pre-register-patient-routing.module.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PreRegisterPatientRoutingModule": function PreRegisterPatientRoutingModule() {
          return (
            /* binding */
            _PreRegisterPatientRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _components_add_pre_register_patient_add_pre_register_patient_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/add-pre-register-patient/add-pre-register-patient.component */
      32838);
      /* harmony import */


      var _components_pre_register_appointment_list_pre_register_appointment_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/pre-register-appointment-list/pre-register-appointment-list.component */
      37237);
      /* harmony import */


      var _components_pre_register_appointment_pre_register_appointment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/pre-register-appointment/pre-register-appointment.component */
      9939);
      /* harmony import */


      var _components_pre_register_patient_list_pre_register_patient_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/pre-register-patient-list/pre-register-patient-list.component */
      91764);
      /* harmony import */


      var _pre_register_patient_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pre-register-patient.component */
      6709);

      var routes = [{
        path: '',
        component: _pre_register_patient_component__WEBPACK_IMPORTED_MODULE_4__.PreRegisterPatientComponent
      }, {
        path: 'pre-register-patient-list',
        component: _components_pre_register_patient_list_pre_register_patient_list_component__WEBPACK_IMPORTED_MODULE_3__.PreRegisterPatientListComponent
      }, {
        path: 'add-pre-register-patient',
        component: _components_add_pre_register_patient_add_pre_register_patient_component__WEBPACK_IMPORTED_MODULE_0__.AddPreRegisterPatientComponent
      }, {
        path: 'pre-registered-appointment',
        component: _components_pre_register_appointment_pre_register_appointment_component__WEBPACK_IMPORTED_MODULE_2__.PreRegisterAppointmentComponent
      }, {
        path: 'pre-registered-appointment-list',
        component: _components_pre_register_appointment_list_pre_register_appointment_list_component__WEBPACK_IMPORTED_MODULE_1__.PreRegisterAppointmentListComponent
      }];

      var _PreRegisterPatientRoutingModule = function PreRegisterPatientRoutingModule() {
        _classCallCheck(this, PreRegisterPatientRoutingModule);
      };

      _PreRegisterPatientRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
      })], _PreRegisterPatientRoutingModule);
      /***/
    },

    /***/
    6709:
    /*!************************************************************************!*\
      !*** ./src/app/pre-register-patient/pre-register-patient.component.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PreRegisterPatientComponent": function PreRegisterPatientComponent() {
          return (
            /* binding */
            _PreRegisterPatientComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_pre_register_patient_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./pre-register-patient.component.html */
      12226);
      /* harmony import */


      var _pre_register_patient_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pre-register-patient.component.css */
      29719);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PreRegisterPatientComponent = /*#__PURE__*/function () {
        function PreRegisterPatientComponent() {
          _classCallCheck(this, PreRegisterPatientComponent);
        }

        _createClass(PreRegisterPatientComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PreRegisterPatientComponent;
      }();

      _PreRegisterPatientComponent.ctorParameters = function () {
        return [];
      };

      _PreRegisterPatientComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pre-register-patient',
        template: _raw_loader_pre_register_patient_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pre_register_patient_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PreRegisterPatientComponent);
      /***/
    },

    /***/
    38666:
    /*!*********************************************************************!*\
      !*** ./src/app/pre-register-patient/pre-register-patient.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PreRegisterPatientModule": function PreRegisterPatientModule() {
          return (
            /* binding */
            _PreRegisterPatientModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _pre_register_patient_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pre-register-patient-routing.module */
      70235);
      /* harmony import */


      var _pre_register_patient_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pre-register-patient.component */
      6709);
      /* harmony import */


      var _components_pre_register_patient_list_pre_register_patient_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/pre-register-patient-list/pre-register-patient-list.component */
      91764);
      /* harmony import */


      var _components_add_pre_register_patient_add_pre_register_patient_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/add-pre-register-patient/add-pre-register-patient.component */
      32838);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _shared_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/modules */
      41277);
      /* harmony import */


      var _components_pre_register_appointment_pre_register_appointment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/pre-register-appointment/pre-register-appointment.component */
      9939);
      /* harmony import */


      var _components_pre_register_appointment_list_pre_register_appointment_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/pre-register-appointment-list/pre-register-appointment-list.component */
      37237);

      var _PreRegisterPatientModule = function PreRegisterPatientModule() {
        _classCallCheck(this, PreRegisterPatientModule);
      };

      _PreRegisterPatientModule = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_pre_register_patient_component__WEBPACK_IMPORTED_MODULE_1__.PreRegisterPatientComponent, _components_pre_register_patient_list_pre_register_patient_list_component__WEBPACK_IMPORTED_MODULE_2__.PreRegisterPatientListComponent, _components_add_pre_register_patient_add_pre_register_patient_component__WEBPACK_IMPORTED_MODULE_3__.AddPreRegisterPatientComponent, _components_pre_register_appointment_pre_register_appointment_component__WEBPACK_IMPORTED_MODULE_5__.PreRegisterAppointmentComponent, _components_pre_register_appointment_list_pre_register_appointment_list_component__WEBPACK_IMPORTED_MODULE_6__.PreRegisterAppointmentListComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _pre_register_patient_routing_module__WEBPACK_IMPORTED_MODULE_0__.PreRegisterPatientRoutingModule, _shared_modules__WEBPACK_IMPORTED_MODULE_4__.StatModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _shared_modules__WEBPACK_IMPORTED_MODULE_4__.PageHeaderModule],
        exports: [_components_pre_register_patient_list_pre_register_patient_list_component__WEBPACK_IMPORTED_MODULE_2__.PreRegisterPatientListComponent]
      })], _PreRegisterPatientModule);
      /***/
    },

    /***/
    76858:
    /*!******************************************************************************!*\
      !*** ./src/app/pre-register-patient/service/pre-register-patient.service.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PreRegisterPatientService": function PreRegisterPatientService() {
          return (
            /* binding */
            _PreRegisterPatientService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PreRegisterPatientService = /*#__PURE__*/function () {
        function PreRegisterPatientService(http) {
          _classCallCheck(this, PreRegisterPatientService);

          this.http = http;
          this.baseUrl = 'http://localhost:8080/springboot/api/v1';
        }
        /*
         getPreRegistration(id: number): any {
            return this.http.get(`${this.baseUrl}/preregistrations/${id}`);
          }
        */


        _createClass(PreRegisterPatientService, [{
          key: "addPreRegistration",
          value: function addPreRegistration(preRegisterPatient) {
            return this.http.post("".concat(this.baseUrl, "/preRegisteredPatient/add"), preRegisterPatient);
          }
        }, {
          key: "getPreRegistrationList",
          value: function getPreRegistrationList() {
            return this.http.get("".concat(this.baseUrl, "/preRegisteredPatient/get"));
          }
        }]);

        return PreRegisterPatientService;
      }();

      _PreRegisterPatientService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _PreRegisterPatientService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _PreRegisterPatientService);
      /***/
    },

    /***/
    79790:
    /*!************************************************************************************!*\
      !*** ./src/app/pre-register-patient/service/pre-registered-appointment.service.ts ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PreRegisteredAppointmentService": function PreRegisteredAppointmentService() {
          return (
            /* binding */
            _PreRegisteredAppointmentService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PreRegisteredAppointmentService = /*#__PURE__*/function () {
        function PreRegisteredAppointmentService(http) {
          _classCallCheck(this, PreRegisteredAppointmentService);

          this.http = http;
          this.baseUrl = 'http://localhost:8080/springboot/api/v1';
        }
        /*
         getPreRegistration(id: number): any {
            return this.http.get(`${this.baseUrl}/preregistrations/${id}`);
          }
        */


        _createClass(PreRegisteredAppointmentService, [{
          key: "addPreRegisteredAppointment",
          value: function addPreRegisteredAppointment(preRegisterAppointment) {
            return this.http.post("".concat(this.baseUrl, "/preRegisteredAppointment/add"), preRegisterAppointment);
          }
        }, {
          key: "getPreRegisteredAppointmentList",
          value: function getPreRegisteredAppointmentList() {
            return this.http.get("".concat(this.baseUrl, "/preRegisteredAppointment/get"));
          }
        }]);

        return PreRegisteredAppointmentService;
      }();

      _PreRegisteredAppointmentService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _PreRegisteredAppointmentService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _PreRegisteredAppointmentService);
      /***/
    },

    /***/
    296:
    /*!***********************************************************************!*\
      !*** ./src/app/pre-register-patient/service/prefix-master.service.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrefixMasterService": function PrefixMasterService() {
          return (
            /* binding */
            _PrefixMasterService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PrefixMasterService = /*#__PURE__*/function () {
        function PrefixMasterService(http) {
          _classCallCheck(this, PrefixMasterService);

          this.http = http;
          this.baseUrl = 'http://localhost:8080/springboot/api/v1';
        }

        _createClass(PrefixMasterService, [{
          key: "getPrefixMasterList",
          value: function getPrefixMasterList() {
            return this.http.get("".concat(this.baseUrl, "/prefixMaster/get"));
          }
        }]);

        return PrefixMasterService;
      }();

      _PrefixMasterService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _PrefixMasterService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _PrefixMasterService);
      /***/
    },

    /***/
    99628:
    /*!*************************************************************************!*\
      !*** ./src/app/pre-register-patient/service/referral-doctor.service.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReferralDoctorService": function ReferralDoctorService() {
          return (
            /* binding */
            _ReferralDoctorService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ReferralDoctorService = /*#__PURE__*/function () {
        function ReferralDoctorService(http) {
          _classCallCheck(this, ReferralDoctorService);

          this.http = http;
          this.baseUrl = 'http://localhost:8080/springboot/api/v1';
        }

        _createClass(ReferralDoctorService, [{
          key: "getReferralDoctorList",
          value: function getReferralDoctorList() {
            return this.http.get("".concat(this.baseUrl, "/referralDoctor/get"));
          }
        }]);

        return ReferralDoctorService;
      }();

      _ReferralDoctorService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _ReferralDoctorService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _ReferralDoctorService);
      /***/
    },

    /***/
    13070:
    /*!*************************************************************************!*\
      !*** ./src/app/pre-register-patient/service/schedule-doctor.service.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScheduleDoctorService": function ScheduleDoctorService() {
          return (
            /* binding */
            _ScheduleDoctorService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ScheduleDoctorService = /*#__PURE__*/function () {
        function ScheduleDoctorService(http) {
          _classCallCheck(this, ScheduleDoctorService);

          this.http = http;
          this.baseUrl = 'http://localhost:8080/springboot/api/v1';
        }

        _createClass(ScheduleDoctorService, [{
          key: "getScheduleDoctorList",
          value: function getScheduleDoctorList() {
            return this.http.get("".concat(this.baseUrl, "/scheduleDoctor/get"));
          }
        }, {
          key: "getScheduleDoctorsByDoctorId",
          value: function getScheduleDoctorsByDoctorId(doctorId) {
            return this.http.get("".concat(this.baseUrl, "/scheduleDoctor/getById/").concat(doctorId));
          }
        }, {
          key: "createScheduleDoctor",
          value: function createScheduleDoctor(scheduleDoctor) {
            return this.http.post("".concat(this.baseUrl, "/scheduleDoctor/add"), scheduleDoctor);
          }
        }]);

        return ScheduleDoctorService;
      }();

      _ScheduleDoctorService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _ScheduleDoctorService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _ScheduleDoctorService);
      /***/
    },

    /***/
    51633:
    /*!********************************************************************************!*\
      !*** ./src/app/patient/components/create-patient/create-patient.component.css ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".ng-touched .ng-invalid{\r\n\tborder-left: 5px solid red;\r\n}\r\n.ng-touched .ng-valid:not(mrno) {\r\n\tborder-left: 5px solid green;\r\n}\r\n.btn\r\n {\r\n   border: 1px solid transparent;\r\n   border-radius: 4px;\r\n }\r\nlabel {\r\n    display: inline-block;\r\n    vertical-align: center;\r\n    text-align: right;\r\n    margin-top: 10px;\r\n    line-height: 100%;\r\n\r\n}\r\n.form-control {\r\n    margin: 1px;\r\n}\r\n.navbar{\r\n\tmargin-top: 5px;\r\n\tpadding : 0px;\r\n}\r\n.container {\r\n\tpadding: 0px;\r\n\tmargin:0px;\r\n}\r\n.container-fluid{\r\n\t\tpadding: 0px;\r\n\tmargin:0px;\r\n}\r\n.row{\r\n\t\t\tpadding: 0px;\r\n\tmargin:0px;\r\n}\r\n.col{\r\n\t\t\tpadding: 0px;\r\n\tmargin:0px;\r\n}\r\n    \r\n    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1wYXRpZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQywwQkFBMEI7QUFDM0I7QUFDQTtDQUNDLDRCQUE0QjtBQUM3QjtBQUVBOztHQUVHLDZCQUE2QjtHQUM3QixrQkFBa0I7Q0FDcEI7QUFDRDtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtDQUNDLGVBQWU7Q0FDZixhQUFhO0FBQ2Q7QUFDQTtDQUNDLFlBQVk7Q0FDWixVQUFVO0FBQ1g7QUFDQTtFQUNFLFlBQVk7Q0FDYixVQUFVO0FBQ1g7QUFDQTtHQUNHLFlBQVk7Q0FDZCxVQUFVO0FBQ1g7QUFDQTtHQUNHLFlBQVk7Q0FDZCxVQUFVO0FBQ1giLCJmaWxlIjoiY3JlYXRlLXBhdGllbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy10b3VjaGVkIC5uZy1pbnZhbGlke1xyXG5cdGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xyXG59XHJcbi5uZy10b3VjaGVkIC5uZy12YWxpZDpub3QobXJubykge1xyXG5cdGJvcmRlci1sZWZ0OiA1cHggc29saWQgZ3JlZW47XHJcbn1cclxuXHJcbi5idG5cclxuIHtcclxuICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuIH1cclxubGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG5cclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIG1hcmdpbjogMXB4O1xyXG59XHJcbi5uYXZiYXJ7XHJcblx0bWFyZ2luLXRvcDogNXB4O1xyXG5cdHBhZGRpbmcgOiAwcHg7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcblx0cGFkZGluZzogMHB4O1xyXG5cdG1hcmdpbjowcHg7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuXHRcdHBhZGRpbmc6IDBweDtcclxuXHRtYXJnaW46MHB4O1xyXG59XHJcbi5yb3d7XHJcblx0XHRcdHBhZGRpbmc6IDBweDtcclxuXHRtYXJnaW46MHB4O1xyXG59XHJcbi5jb2x7XHJcblx0XHRcdHBhZGRpbmc6IDBweDtcclxuXHRtYXJnaW46MHB4O1xyXG59XHJcbiAgICBcclxuICAgICJdfQ== */";
      /***/
    },

    /***/
    87826:
    /*!************************************************************************************************!*\
      !*** ./src/app/patient/components/emergency-registration/emergency-registration.component.css ***!
      \************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWVyZ2VuY3ktcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    85089:
    /*!****************************************************************************!*\
      !*** ./src/app/patient/components/patient-list/patient-list.component.css ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card-footer {\r\n\tmargin-bottom : 0px;\r\n\tmargin-top: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsbUJBQW1CO0NBQ25CLGVBQWU7QUFDaEIiLCJmaWxlIjoicGF0aWVudC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1mb290ZXIge1xyXG5cdG1hcmdpbi1ib3R0b20gOiAwcHg7XHJcblx0bWFyZ2luLXRvcDogNXB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    42134:
    /*!***********************************************!*\
      !*** ./src/app/patient/patient.component.css ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".hr{\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\t\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7Q0FDWixXQUFXOztBQUVaIiwiZmlsZSI6InBhdGllbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ocntcclxuXHRwYWRkaW5nOiAwcHg7XHJcblx0bWFyZ2luOiAwcHg7XHJcblx0XHJcbn0iXX0= */";
      /***/
    },

    /***/
    91671:
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/pre-register-patient/components/add-pre-register-patient/add-pre-register-patient.component.css ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcHJlLXJlZ2lzdGVyLXBhdGllbnQuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    98669:
    /*!***************************************************************************************************************************!*\
      !*** ./src/app/pre-register-patient/components/pre-register-appointment-list/pre-register-appointment-list.component.css ***!
      \***************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmUtcmVnaXN0ZXItYXBwb2ludG1lbnQtbGlzdC5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    58691:
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/pre-register-patient/components/pre-register-appointment/pre-register-appointment.component.css ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmUtcmVnaXN0ZXItYXBwb2ludG1lbnQuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    686:
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/pre-register-patient/components/pre-register-patient-list/pre-register-patient-list.component.css ***!
      \*******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmUtcmVnaXN0ZXItcGF0aWVudC1saXN0LmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    29719:
    /*!*************************************************************************!*\
      !*** ./src/app/pre-register-patient/pre-register-patient.component.css ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n*{\r\n\tfont-size: 14px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZS1yZWdpc3Rlci1wYXRpZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBQ0MsZUFBZTtBQUNoQiIsImZpbGUiOiJwcmUtcmVnaXN0ZXItcGF0aWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbip7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    14127:
    /*!****************************************************************!*\
      !*** ./src/app/layout/components/header/header.component.scss ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host .navbar {\n  background-color: #222;\n}\n:host .navbar .navbar-brand {\n  color: #fff;\n}\n:host .navbar .nav-item > a {\n  color: #999;\n}\n:host .navbar .nav-item > a:hover {\n  color: #fff;\n}\n:host .messages {\n  width: 300px;\n}\n:host .messages .media {\n  border-bottom: 1px solid #ddd;\n  padding: 5px 10px;\n}\n:host .messages .media:last-child {\n  border-bottom: none;\n}\n:host .messages .media-body h5 {\n  font-size: 13px;\n  font-weight: 600;\n}\n:host .messages .media-body .small {\n  margin: 0;\n}\n:host .messages .media-body .last {\n  font-size: 12px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLHNCQUhrQjtBQUUxQjtBQUdRO0VBQ0ksV0FBQTtBQURaO0FBSVE7RUFDSSxXQUFBO0FBRlo7QUFJWTtFQUNJLFdBQUE7QUFGaEI7QUFPSTtFQUNJLFlBQUE7QUFMUjtBQU9RO0VBQ0ksNkJBQUE7RUFDQSxpQkFBQTtBQUxaO0FBT1k7RUFDSSxtQkFBQTtBQUxoQjtBQVVZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBUmhCO0FBV1k7RUFDSSxTQUFBO0FBVGhCO0FBWVk7RUFDSSxlQUFBO0VBQ0EsU0FBQTtBQVZoQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdG9wbmF2LWJhY2tncm91bmQtY29sb3I6ICMyMjI7XG46aG9zdCB7XG4gICAgLm5hdmJhciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcblxuICAgICAgICAubmF2YmFyLWJyYW5kIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdi1pdGVtID4gYSB7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubWVzc2FnZXMge1xuICAgICAgICB3aWR0aDogMzAwcHg7XG5cbiAgICAgICAgLm1lZGlhIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5tZWRpYS1ib2R5IHtcbiAgICAgICAgICAgIGg1IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNtYWxsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sYXN0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    55512:
    /*!******************************************************************!*\
      !*** ./src/app/layout/components/sidebar/sidebar.component.scss ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 56px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  margin-bottom: 48px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  white-space: nowrap;\n  transition: all 0.2s ease-in-out;\n}\n.sidebar .list-group a.list-group-item {\n  background: #222;\n  border: 0;\n  border-radius: 0;\n  color: #999;\n  text-decoration: none;\n}\n.sidebar .list-group a.list-group-item .fa {\n  margin-right: 10px;\n}\n.sidebar .list-group a:hover {\n  background: #151515;\n  color: #fff;\n}\n.sidebar .list-group a.router-link-active {\n  background: #151515;\n  color: #fff;\n}\n.sidebar .list-group .header-fields {\n  padding-top: 10px;\n}\n.sidebar .list-group .header-fields > .list-group-item:first-child {\n  border-top: 1px solid rgba(255, 255, 255, 0.2);\n}\n.sidebar .sidebar-dropdown *:focus {\n  border-radius: none;\n  border: none;\n}\n.sidebar .sidebar-dropdown .panel-title {\n  font-size: 1rem;\n  height: 50px;\n  margin-bottom: 0;\n}\n.sidebar .sidebar-dropdown .panel-title a {\n  color: #999;\n  text-decoration: none;\n  font-weight: 400;\n  background: #222;\n}\n.sidebar .sidebar-dropdown .panel-title a span {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.5rem;\n  padding-top: 1rem;\n}\n.sidebar .sidebar-dropdown .panel-title a:hover,\n.sidebar .sidebar-dropdown .panel-title a:focus {\n  color: #fff;\n  outline: none;\n  outline-offset: -2px;\n}\n.sidebar .sidebar-dropdown .panel-title:hover {\n  background: #151515;\n}\n.sidebar .sidebar-dropdown .panel-collapse {\n  border-radious: 0;\n  border: none;\n}\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n  border-radius: 0;\n  background-color: #222;\n  border: 0 solid transparent;\n}\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n  color: #999;\n}\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n  color: #fff;\n}\n.sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n  background: #151515;\n}\n.nested-menu .list-group-item {\n  cursor: pointer;\n}\n.nested-menu .nested {\n  list-style-type: none;\n}\n.nested-menu ul.submenu {\n  display: none;\n  height: 0;\n}\n.nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto;\n}\n.nested-menu .expand ul.submenu li a {\n  color: #fff;\n  padding: 10px;\n  display: block;\n}\n@media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px;\n  }\n}\n@media print {\n  .sidebar {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .header-fields {\n    display: none;\n  }\n}\n::-webkit-scrollbar {\n  width: 8px;\n}\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0px white;\n  border-radius: 3px;\n}\n::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 3px white;\n}\n.toggle-button {\n  position: fixed;\n  width: 236px;\n  cursor: pointer;\n  padding: 12px;\n  bottom: 0;\n  color: #999;\n  background: #212529;\n  border-top: 1px solid #999;\n  transition: all 0.2s ease-in-out;\n}\n.toggle-button i {\n  font-size: 23px;\n}\n.toggle-button:hover {\n  background: #151515;\n  color: #fff;\n}\n.collapsed {\n  width: 60px;\n}\n.collapsed span {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBYnNCO0VBY3RCLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFLQSxnQ0FBQTtBQUFKO0FBR1E7RUFDSSxnQkExQmM7RUEyQmQsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBRFo7QUFHWTtFQUNJLGtCQUFBO0FBRGhCO0FBS1E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUFIWjtBQU1RO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FBSlo7QUFPUTtFQUNJLGlCQUFBO0FBTFo7QUFPWTtFQUNJLDhDQUFBO0FBTGhCO0FBV1E7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUFUWjtBQVlRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQVZaO0FBWVk7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQXZFVTtBQTZEMUI7QUFZZ0I7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBVnBCO0FBY1k7O0VBRUksV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQVpoQjtBQWdCUTtFQUNJLG1CQUFBO0FBZFo7QUFpQlE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7QUFmWjtBQWtCZ0I7RUFDSSxnQkFBQTtFQUNBLHNCQXBHTTtFQXFHTiwyQkFBQTtBQWhCcEI7QUFrQm9CO0VBQ0ksV0FBQTtBQWhCeEI7QUFtQm9CO0VBQ0ksV0FBQTtBQWpCeEI7QUFxQmdCO0VBQ0ksbUJBQUE7QUFuQnBCO0FBMkJJO0VBQ0ksZUFBQTtBQXhCUjtBQTJCSTtFQUNJLHFCQUFBO0FBekJSO0FBNEJJO0VBQ0ksYUFBQTtFQUNBLFNBQUE7QUExQlI7QUE4QlE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBNUJaO0FBK0JnQjtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQTdCcEI7QUFvQ0E7RUFDSTtJQUNJLFNBQUE7SUFDQSxTQUFBO0VBakNOO0FBQ0Y7QUFvQ0E7RUFDSTtJQUNJLHdCQUFBO0VBbENOO0FBQ0Y7QUFxQ0E7RUFDSTtJQUNJLGFBQUE7RUFuQ047QUFDRjtBQXNDQTtFQUNJLFVBQUE7QUFwQ0o7QUF1Q0E7RUFDSSx1Q0FBQTtFQUNBLGtCQUFBO0FBcENKO0FBdUNBO0VBQ0ksa0JBQUE7RUFDQSx1Q0FBQTtBQXBDSjtBQXVDQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBV0EsMEJBQUE7RUFLQSxnQ0FBQTtBQTlDSjtBQWdDSTtFQUNJLGVBQUE7QUE5QlI7QUFpQ0k7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUEvQlI7QUEwQ0E7RUFDSSxXQUFBO0FBdkNKO0FBeUNJO0VBQ0ksYUFBQTtBQXZDUiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuLnNpZGViYXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgdG9wOiA1NnB4O1xuICAgIGxlZnQ6IDIzNXB4O1xuICAgIHdpZHRoOiAyMzVweDtcbiAgICBtYXJnaW4tbGVmdDogLTIzNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XG4gICAgYm90dG9tOiAwO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcbiAgICAubGlzdC1ncm91cCB7XG4gICAgICAgIGEubGlzdC1ncm91cC1pdGVtIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICAgICAgICAgLmZhIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdG9wbmF2LWJhY2tncm91bmQtY29sb3IsIDUlKTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgYS5yb3V0ZXItbGluay1hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyLWZpZWxkcyB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcblxuICAgICAgICAgICAgPiAubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNpZGViYXItZHJvcGRvd24ge1xuICAgICAgICAqOmZvY3VzIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAucGFuZWwtdGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGE6aG92ZXIsXG4gICAgICAgICAgICBhOmZvY3VzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsLXRpdGxlOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdG9wbmF2LWJhY2tncm91bmQtY29sb3IsIDUlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYW5lbC1jb2xsYXBzZSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaW91czogMDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcblxuICAgICAgICAgICAgLnBhbmVsLWJvZHkge1xuICAgICAgICAgICAgICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5saXN0LWdyb3VwLWl0ZW06aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubmVzdGVkLW1lbnUge1xuICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLm5lc3RlZCB7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICB9XG5cbiAgICB1bC5zdWJtZW51IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cblxuICAgICYgLmV4cGFuZCB7XG4gICAgICAgIHVsLnN1Ym1lbnUge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAuc2lkZWJhciB7XG4gICAgICAgIHRvcDogNTRweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHByaW50IHtcbiAgICAuc2lkZWJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC5oZWFkZXItZmllbGRzIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA4cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xufVxuXG4udG9nZ2xlLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAyMzZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3R0b206IDA7XG4gICAgY29sb3I6ICM5OTk7XG4gICAgYmFja2dyb3VuZDogIzIxMjUyOTtcblxuICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdG9wbmF2LWJhY2tncm91bmQtY29sb3IsIDUlKTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM5OTk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmNvbGxhcHNlZCB7XG4gICAgd2lkdGg6IDYwcHg7XG5cbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    96603:
    /*!**********************************************!*\
      !*** ./src/app/layout/layout.component.scss ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  transition: margin-left 0.2s ease-in-out;\n}\n\n.main-container {\n  margin-top: 56px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden;\n}\n\n.collapsed {\n  margin-left: 60px;\n}\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important;\n  }\n}\n\n@media print {\n  .main-container {\n    margin-top: 0px !important;\n    margin-left: 0px !important;\n  }\n}\n\n.pagination {\n  padding: 0;\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n  margin: 0;\n}\n\n* {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUtJLHdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLDJCQUFBO0VBQ047QUFDRjs7QUFFQTtFQUNJO0lBQ0ksMEJBQUE7SUFDQSwyQkFBQTtFQUFOO0FBQ0Y7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUVBO0VBQ0MsZUFBQTtBQUNEIiwiZmlsZSI6ImxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIzNXB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgLW1zLW92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY29sbGFwc2VkIHtcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAubWFpbi1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgcHJpbnQge1xuICAgIC5tYWluLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLnBhZ2luYXRpb24ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIG1hcmdpbjogMDtcbn1cbip7XG5cdGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */";
      /***/
    },

    /***/
    766:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/header/header.component.html ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg fixed-top\">\n    <a class=\"navbar-brand\" href=\"#\">ElitePro </a>\n    <button (click)=\"toggleSidebar()\" class=\"navbar-toggler\" type=\"button\">\n        <!-- <span class=\"navbar-toggler-icon\"></span> -->\n        <i aria-hidden=\"true\" class=\"fa fa-bars text-muted\"></i>\n    </button>\n    <div class=\"collapse navbar-collapse\">\n        <form class=\"form-inline my-2 my-lg-0\">\n            <input class=\"form-control mr-sm-2\" placeholder=\"{{ 'Search' | translate }}\" type=\"text\" />\n        </form>\n        <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item d-none d-xl-block\">\n                <a\n                    class=\"nav-link btn mt-1\"\n                    href=\"https://github.com/start-angular/SB-Admin-BS4-Angular-7/archive/master.zip\"\n                    role=\"button\"\n                    style=\"padding: 0.375rem 1rem !important; border-color: #999;\"\n                >\n                    {{ 'Download Now' | translate }}\n                </a>\n            </li>&nbsp;<li class=\"nav-item\">\n                <a\n                    (click)=\"rltAndLtr()\"\n                    class=\"nav-link mt-1\"\n                    href=\"javascript:void(0)\"\n                    style=\"padding: 0.375rem 1rem !important; border-color: #999;\"\n                >\n                    RTL/LTR\n                </a>\n            </li>\n            &nbsp;\n            <li class=\"nav-item dropdown\" ngbDropdown>\n                <a class=\"nav-link\" href=\"javascript:void(0)\" ngbDropdownToggle>\n                    <i class=\"fa fa-envelope\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\n                </a>\n                <ul class=\"dropdown-menu-right messages\" ngbDropdownMenu>\n                    <li class=\"media\">\n                        <img\n                            alt=\"Generic placeholder image\"\n                            class=\"d-flex align-self-center mr-3\"\n                            src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"\n                        />\n                        <div class=\"media-body\">\n                            <h5 class=\"mt-0 mb-1\">John Smith</h5>\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                            <p class=\"last\">Lorem ipsum dolor sit amet, consectetur...</p>\n                        </div>\n                    </li>\n                    <li class=\"media\">\n                        <img\n                            alt=\"Generic placeholder image\"\n                            class=\"d-flex align-self-center mr-3\"\n                            src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"\n                        />\n                        <div class=\"media-body\">\n                            <h5 class=\"mt-0 mb-1\">John Smith</h5>\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                            <p class=\"last\">Lorem ipsum dolor sit amet, consectetur...</p>\n                        </div>\n                    </li>\n                    <li class=\"media\">\n                        <img\n                            alt=\"Generic placeholder image\"\n                            class=\"d-flex align-self-center mr-3\"\n                            src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"\n                        />\n                        <div class=\"media-body\">\n                            <h5 class=\"mt-0 mb-1\">John Smith</h5>\n                            <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\n                            <p class=\"last\">Lorem ipsum dolor sit amet, consectetur...</p>\n                        </div>\n                    </li>\n                </ul>\n            </li>\n            <li class=\"nav-item dropdown\" ngbDropdown>\n                <a class=\"nav-link\" href=\"javascript:void(0)\" ngbDropdownToggle>\n                    <i class=\"fa fa-bell\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\n                </a>\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'Pending Task' | translate }} <span class=\"badge badge-info\">6</span>\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'In queue' | translate }} <span class=\"badge badge-info\"> 13</span>\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'Mail' | translate }} <span class=\"badge badge-info\"> 45</span>\n                    </a>\n                    <li class=\"dropdown-divider\"></li>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'View All' | translate }}\n                    </a>\n                </div>\n            </li>\n            <li class=\"nav-item dropdown\" ngbDropdown>\n                <a class=\"nav-link\" href=\"javascript:void(0)\" ngbDropdownToggle>\n                    <i class=\"fa fa-language\"></i> {{ 'Language' | translate }} <b class=\"caret\"></b>\n                </a>\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n                    <a (click)=\"changeLang('en')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'English' | translate }}\n                    </a>\n                    <a (click)=\"changeLang('fr')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'French' | translate }}\n                    </a>\n                    <a (click)=\"changeLang('ur')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'Urdu' | translate }}\n                    </a>\n                    <a (click)=\"changeLang('es')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'Spanish' | translate }}\n                    </a>\n                    <a (click)=\"changeLang('it')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'Italian' | translate }}\n                    </a>\n                    <a (click)=\"changeLang('fa')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'Farsi' | translate }}\n                    </a>\n                    <a (click)=\"changeLang('de')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'German' | translate }}\n                    </a>\n                    <a (click)=\"changeLang('zh-CHS')\" class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        {{ 'Simplified Chinese' | translate }}\n                    </a>\n                </div>\n            </li>\n            <li class=\"nav-item dropdown\" ngbDropdown>\n                <a class=\"nav-link\" href=\"javascript:void(0)\" ngbDropdownToggle>\n                    <i class=\"fa fa-user\"></i> Bibhuti Sahani <b class=\"caret\"></b>\n                </a>\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        <i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        <i class=\"fa fa-fw fa-envelope\"></i> {{ 'Inbox' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        <i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' | translate }}\n                    </a>\n                    <a (click)=\"onLoggedout()\" [routerLink]=\"['/login']\" class=\"dropdown-item\">\n                        <i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}\n                    </a>\n                </div>\n            </li>\n        </ul>\n    </div>\n</nav>\n";
      /***/
    },

    /***/
    66194:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/components/sidebar/sidebar.component.html ***!
      \********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav [ngClass]=\"{ sidebarPushRight: isActive, collapsed: collapsed }\" class=\"sidebar\">\n    <div class=\"list-group\">\n        <a [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\" routerLink=\"/dashboard\">\n            <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;\n            <span>{{ 'Dashboard' | translate }}</span>\n        </a>\n        <a [routerLinkActive]=\"['router-link-active']\" [routerLink]=\"['/preRegistration']\" class=\"list-group-item\">\n            <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>&nbsp;\n            <span>{{ 'PreRegistration' | translate }}</span>\n        </a>\n        \n         <a [routerLinkActive]=\"['router-link-active']\" [routerLink]=\"['/registration']\" class=\"list-group-item\">\n            <i class=\"fa fa-file-o\"></i>&nbsp;\n            <span>{{ 'Registration' | translate }}</span>\n        </a>\n        \n        \n        <a [routerLinkActive]=\"['router-link-active']\" [routerLink]=\"['/master']\" class=\"list-group-item\">\n            <i class=\"fa fa-cog \"></i>&nbsp;\n            <span>{{ 'Master' | translate }}</span>\n        </a>\n        <a [routerLinkActive]=\"['router-link-active']\" [routerLink]=\"['/appointment']\" class=\"list-group-item\">\n            <i class=\"fa fa-user \"></i>&nbsp;\n            <span>{{ 'Appointment' | translate }}</span>\n        </a>\n        \n        <a [routerLinkActive]=\"['router-link-active']\" [routerLink]=\"['/encounter']\" class=\"list-group-item\">\n            <i class=\"fa fa-user-circle \"></i>&nbsp;\n            <span>{{ 'Encounter' | translate }}</span>\n        </a>\n        \n        <a [routerLinkActive]=\"['router-link-active']\" [routerLink]=\"['/charts']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-bar-chart-o\"></i>&nbsp;\n            <span>{{ 'Charts' | translate }}</span>\n        </a>\n        <a [routerLinkActive]=\"['router-link-active']\" [routerLink]=\"['/tables']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-table\"></i>&nbsp;\n            <span>{{ 'Tables' | translate }}</span>\n        </a>\n        <a [routerLinkActive]=\"['router-link-active']\" [routerLink]=\"['/forms']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-edit\"></i>&nbsp;\n            <span>{{ 'Forms' | translate }}</span>\n        </a>\n        <a [routerLinkActive]=\"['router-link-active']\" [routerLink]=\"['/bs-element']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-desktop\"></i>&nbsp;\n            <span>{{ 'Bootstrap Element' | translate }}</span>\n        </a>\n        <a [routerLinkActive]=\"['router-link-active']\" [routerLink]=\"['/grid']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-wrench\"></i>&nbsp;\n            <span>{{ 'Bootstrap Grid' | translate }}</span>\n        </a>\n        <a [routerLinkActive]=\"['router-link-active']\" [routerLink]=\"['/components']\" class=\"list-group-item\">\n            <i class=\"fa fa-th-list\"></i>&nbsp;\n            <span>{{ 'Component' | translate }}</span>\n        </a>\n        <div class=\"nested-menu\">\n            <a (click)=\"addExpandClass('pages')\" class=\"list-group-item\">\n                <i class=\"fa fa-plus\"></i>&nbsp;\n                <span>{{ 'Menu' | translate }}</span>\n            </a>\n            <li [class.expand]=\"showMenu === 'pages'\" class=\"nested\">\n                <ul class=\"submenu\">\n                    <li>\n                        <a href=\"javascript:void(0)\">\n                            <i class=\"fa fa-monument\"></i>&nbsp;\n                            <span>{{ 'Submenu' | translate }}</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\">\n                            <i class=\"fa fa-monument\"></i>&nbsp;\n                            <span>{{ 'Submenu' | translate }}</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\">\n                            <i class=\"fa fa-monument\"></i>&nbsp;\n                            <span>{{ 'Submenu' | translate }}</span>\n                        </a>\n                    </li>\n                </ul>\n            </li>\n        </div>\n        <a [routerLinkActive]=\"['router-link-active']\" [routerLink]=\"['/blank-page']\" class=\"list-group-item\">\n            <i class=\"fa fa-file-o\"></i>&nbsp;\n            <span>{{ 'Blank Page' | translate }}</span>\n        </a>\n        \n       \n        \n        <a class=\"list-group-item\" href=\"http://www.strapui.com/\">\n            <i class=\"fa fa-caret-down\"></i>&nbsp;\n            <span>{{ 'More Themes' | translate }}</span>\n        </a>\n\n        <div class=\"header-fields\">\n            <a (click)=\"rltAndLtr()\" class=\"list-group-item\">\n                <span><i class=\"fa fa-arrows-h\"></i>&nbsp; RTL/LTR</span>\n            </a>\n            <div class=\"nested-menu\">\n                <a (click)=\"addExpandClass('languages')\" class=\"list-group-item\">\n                    <span><i class=\"fa fa-language\"></i>&nbsp; {{ 'Language' | translate }} <b class=\"caret\"></b></span>\n                </a>\n                <li [class.expand]=\"showMenu === 'languages'\" class=\"nested\">\n                    <ul class=\"submenu\">\n                        <li>\n                            <a (click)=\"changeLang('en')\" href=\"javascript:void(0)\">\n                                {{ 'English' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a (click)=\"changeLang('fr')\" href=\"javascript:void(0)\">\n                                {{ 'French' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a (click)=\"changeLang('ur')\" href=\"javascript:void(0)\">\n                                {{ 'Urdu' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a (click)=\"changeLang('es')\" href=\"javascript:void(0)\">\n                                {{ 'Spanish' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a (click)=\"changeLang('it')\" href=\"javascript:void(0)\">\n                                {{ 'Italian' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a (click)=\"changeLang('fa')\" href=\"javascript:void(0)\">\n                                {{ 'Farsi' | translate }}\n                            </a>\n                        </li>\n                        <li>\n                            <a (click)=\"changeLang('de')\" href=\"javascript:void(0)\">\n                                {{ 'German' | translate }}\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n            </div>\n            <div class=\"nested-menu\">\n                <a (click)=\"addExpandClass('profile')\" class=\"list-group-item\">\n                    <span><i class=\"fa fa-user\"></i>&nbsp; John Smith</span>\n                </a>\n                <li [class.expand]=\"showMenu === 'profile'\" class=\"nested\">\n                    <ul class=\"submenu\">\n                        <li>\n                            <a href=\"javascript:void(0)\">\n                                <span><i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\">\n                                <span><i class=\"fa fa-fw fa-envelope\"></i> {{ 'Inbox' | translate }}</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"javascript:void(0)\">\n                                <span><i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' | translate }}</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a (click)=\"onLoggedout()\" [routerLink]=\"['/login']\">\n                                <span><i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}</span>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n            </div>\n        </div>\n    </div>\n    <div (click)=\"toggleCollapsed()\" [ngClass]=\"{ collapsed: collapsed }\" class=\"toggle-button\">\n        <i class=\"fa fa-fw fa-angle-double-{{ collapsed ? 'right' : 'left' }}\"></i>&nbsp;\n        <span>{{ 'Collapse Sidebar' | translate }}</span>\n    </div>\n</nav>\n";
      /***/
    },

    /***/
    31729:
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header></app-header>\n<app-sidebar (collapsedEvent)=\"receiveCollapsed($event)\"></app-sidebar>\n<section [ngClass]=\"{ collapsed: collapedSideBar }\" class=\"main-container\">\n    <router-outlet></router-outlet>\n</section>\n";
      /***/
    },

    /***/
    62497:
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient/components/create-patient/create-patient.component.html ***!
      \***********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [@routerTransition]>\r\n\t<app-page-header [mainhead]=\"'Registration'\" [mainheadLink]=\"'/registration'\" [heading]=\"'Patient'\" [icon]=\"'fa-bar-chart-o'\"></app-page-header>\r\n</div>\r\n<div [hidden]=\"submitted\" class=\"card\">\r\n\t<div class=\"card-header bg-dark text-white\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-4\"><h5>Registration Type : General</h5></div>\r\n\t\t\t<div class=\"col-md-2\"></div>\r\n\t\t\t<div class=\"col-md-6 float-right\">\r\n\t\t\t\t<a href=\"/registration/patientlist\" routerLinkActive=\"active\"><button class = \"btn btn-success float-right\">\r\n\t\t\t\t\tRegistered PatientList</button></a>\r\n\t\t\t\t<button class = \"btn btn-success\" (click) = \"openPreRegistrationList(preRegistration)\">Having Pre-Registration Id</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class = \"card-body p-1 m-0\">\r\n\t<!-- Large modal -->\r\n\t\t<form [formGroup]=\"regform\">\r\n\t\t<div class = \"container-fluid pt-2\">\r\n\t\t\t<div class=\"row bg-light\">\r\n\t\t\t\t<div class=\"col-sm-1 p-0 m-0 text-center \">\r\n\t\t\t\t\t<label for= \"file-open\" class=\"text-center\">\r\n\t\t\t\t\t\t<img src = \"assets/images/patient1.gif\" style = \"vertical-align: middle;text-align: left;width: 100%;\r\nborder: 1px solid gray;\" class = \"h-100 w-100\" >\r\n\t\t\t\t\t\t<input type = \"file\" id = \"file-open\" class = \"d-none\"/>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-11\">\r\n\t\t\t\t\t<div class=\"row justify-content-start\">\r\n\t\t\t\t\t\t<label class=\"col-lg-1 pl-0 col-sm-3\">MRNO :</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-2 col-sm-3\">\r\n\t\t\t\t\t\t\t<input type=\"text\" disabled name=\"mrno\" id=\"mrno\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\tformControlName=\"mrno\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<label class = \"col-lg-2 col-sm-3\"> Regd. Date :</label> \r\n\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-3\">\r\n\t\t\t\t\t\t\t<input type= \"text\"\r\n\t\t\t\t\t\t\t\tclass=\"form-control\" formControlName=\"registrationDate\"\r\n\t\t\t\t\t\t\t\tid=\"date\" disabled>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<label class = \"col-lg-2 text-right col-sm-3\">Language: </label> \r\n\t\t\t\t\t\t<div class=\"col-lg-2 col-sm-3\">\r\n\t\t\t\t\t\t\t<select class=\"form-control\"\r\n\t\t\t\t\t\t\t\tformControlName=\"language\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let lookups of lookupEntity\">\r\n\t\t\t\t\t\t\t\t<option *ngIf=\"lookups.category.categoryId == 6\"\r\n\t\t\t\t\t\t\t\t\t[ngValue]=\"lookups\">{{lookups.lookupValue}}</option>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>&nbsp;\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<label class = \"col-lg-3 col-sm-3\"> {{id}} :</label> \r\n\t\t\t\t\t\t<div class=\"col-lg-3 pr-0  col-sm-3 text-right\">\r\n\t\t\t\t\t\t\t<input type=\"text\" id=\"patientIdNo\"\r\n\t\t\t\t\t\t\t\tclass=\"form-control\" formControlName=\"patientIdNo\"  required>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<label class = \"col-lg-3 p-0 m-0 col-sm-3 text-right\"> Reason For no id :</label> \r\n\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-3\">\r\n\t\t\t\t\t\t\t<select name=\"nothavingid\" class=\"form-control\" size=\"1\"\r\n\t\t\t\t\t\t\t\tformControlName=\"notHavingId\" (change)=\"changeId()\">\r\n\t\t\t\t\t\t\t\t<option value=\" \" >-- Select --</option>\r\n\t\t\t\t\t\t\t\t<option>National Without Card</option>\r\n\t\t\t\t\t\t\t\t<option>Expatriate Resident Without A Card</option>\r\n\t\t\t\t\t\t\t\t<option>Non National, Non Expat Resident Without A\r\n\t\t\t\t\t\t\t\t\tCard</option>\r\n\t\t\t\t\t\t\t\t<option>Unknown Status, Without A Card</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t</div><br>\r\n\t\t\t<!--  Patient Division  -->\r\n\t\t\t<div class=\"container-fluid bg-light p-0 m-0\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<h3>Patient</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- First row -->\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 align-middle\">Prefix </label> \r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<select name=\"prefix\" class=\"form-control\" formControlName=\"prefix\" [(ngModel)] = \"patientDetail.prefix\">\r\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let lookup of lookupEntity\">\r\n\t\t\t\t\t\t\t\t<option *ngIf=\"(lookup.category.categoryId) == 1\" [ngValue]=\"lookup\">{{lookup.lookupValue}}</option>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">First Name</label>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"firstName\" type=\"text\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Middle Name</label>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"middleName\" type=\"text\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<!--  Second Row  -->\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Last Name </label>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"lastName\" type=\"text\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Gender </label>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<select name=\"genderCombo\" class=\"form-control\" size=\"1\" formControlName=\"gender\">\r\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let lookup of lookupEntity\">\r\n\t\t\t\t\t\t\t\t<option *ngIf=\"(lookup.category.categoryId) == 2\"\r\n\t\t\t\t\t\t\t\t\t[ngValue]=\"lookup\"><label>\r\n\t\t\t\t\t\t\t\t\t\t{{lookup.lookupValue}}</label>\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Marital Status <!--<span class=\"text-red\"> * </span> --></label>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<select name=\"PatMarritalStatus\" class=\"form-control\" size=\"1\" formControlName=\"maritalStatus\">\r\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let lookup of lookupEntity\">\r\n\t\t\t\t\t\t\t\t<option *ngIf=\"(lookup.category.categoryId) == 3\"\r\n\t\t\t\t\t\t\t\t\t[ngValue]=\"lookup\"><label>\r\n\t\t\t\t\t\t\t\t\t\t{{lookup.lookupValue}}</label>\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- Third row starts here -->\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<!--  \r\n\t\t\t\t\t\t\t<div class=\"col-md-4 pad-0\">\r\n                    \t\t\t<label class = \"col-md-6 hidden\"> DOB(Hijri) \r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t                   \t\t<input class = \"col-md-6   shadow\" type = \"date\" formControlName = \"dobh\">\r\n\t\t                \t</div>\r\n\t\t                -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">DOB </label> \r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"date\" formControlName=\"dob\"  (change)='agecalculator()'>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \"> Age</label>\r\n\t\t\t\t\t<div class=\"col-md-1 col-sm-1 p-0 m-0\">\r\n\t\t\t\t\t\t<input name=\"age\" type=\"text\" class=\"form-control\" formControlName=\"age\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class = \"col-md-1  col-sm-2  p-0 m-0\">\r\n\t\t\t\t\t\t<select name=\"ageUnit\" size=\"1\" class=\"form-control\" formControlName=\"ageUnit\" (change)=\"ageformat()\">\r\n\t\t\t\t\t\t\t<option>Years</option>\r\n\t\t\t\t\t\t\t<option>Months</option>\r\n\t\t\t\t\t\t\t<option>Days</option>\r\n\t\t\t\t\t\t</select>&nbsp;\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Religion</label> \r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<input type=\"text\" name=\"patientReligion\" class=\"form-control\" formControlName=\"religion\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- Fourth row starts here -->\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Nationality</label>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<input type=\"text\" name=\"patientNationality\" class=\"form-control\" formControlName=\"nationality\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Mobile </label> \r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<input class=\"form-control\" value=\"+9665\" type=\"text\" name=\"patMobileNo\" formControlName=\"mobile\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Mobile (Secondary) </label> \r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"tel\" name=\"secondarymobs\" formControlName=\"secondaryMobile\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<!--  Fifth row start here -->\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Occupation</label> \r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<input type=\"text\" name=\"occupation\" class=\"form-control\" formControlName=\"occupation\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Alias Name</label>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<input type=\"text\" name=\"aliasname\" class=\"form-control\" formControlName=\"aliasName\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Email </label>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<input class=\"form-control\" value=\"+9665\" type=\"text\" name=\"email\" formControlName=\"email\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!--  sixth row start here -->\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Highest Qualification </label> \r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\t\r\n\t\t\t\t\t\t<input class=\"form-control\" name=\"hightestqual\" type=\"tel\" formControlName=\"highestQual\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Kids</label>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<input type=\"text\" name=\"patientReligion\" class=\"form-control\" autocomplete=\"off\" formControlName=\"kids\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Confidential </label>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<input type=\"checkbox\" name=\"patientNationality\" class=\"form-control\" autocomplete=\"off\"\r\n\t\t\t\t\t\t\t\tformControlName=\"confidential\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!--  Seventh row start here -->\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Patient flag </label>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<select class=\"form-control\" type=\"text\" name=\"patMobileNo\" formControlName=\"patientFlag\">\r\n\t\t\t\t\t\t\t<option value=\" \">--select--</option>\r\n\t\t\t\t\t\t\t<option value=\"1\">MEDICAL ABUSE</option>\r\n\t\t\t\t\t\t\t<option value=\"1\">DRUG ADDICT</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">How did you know about us. </label>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"tel\" formControlName=\"hdykau\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"row\">\r\n\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t<h3>NOK Details:</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<label class=\"col-md-2  col-sm-3 \">Relationship: </label>\r\n\t\t\t\t\t<div class=\"col-md-2  col-sm-3 \">\r\n\t\t\t\t\t\t<select formControlName=\"nokRelationship\" class=\"form-control\">\r\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let lookup of lookupEntity\">\r\n\t\t\t\t\t\t\t\t<option *ngIf=\"(lookup.category.categoryId) == 4\"\r\n\t\t\t\t\t\t\t\t\t[ngValue]=\"lookup\"><label>\r\n\t\t\t\t\t\t\t\t\t\t{{lookup.lookupValue}}</label>\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">NOKPrefix </label>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<select name=\"nokPrefix\" class=\"form-control\" formControlName=\"nokPrefix\">\r\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let lookup of lookupEntity\">\r\n\t\t\t\t\t\t\t\t<option *ngIf=\"(lookup.category.categoryId) == 7\"\r\n\t\t\t\t\t\t\t\t\t[ngValue]=\"lookup\"><label>\r\n\t\t\t\t\t\t\t\t\t\t{{lookup.lookupValue}}</label>\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"col-md-4\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">First Name <!--  <span class=\"text-red\"> * </span> --></label>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"nokFname\" type=\"text\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Middle Name</label>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"nokMname\" type=\"text\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Last Name </label>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<input class=\"form-control\" formControlName=\"nokLname\" type=\"text\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<br>\r\n\t\t\t\t<!-- Contact Details Division -->\r\n\t\t\t\t<div class=\"row bg-light\">\r\n\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t<h3>Contact Details</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\" formGroupName=\"patientAddress\">\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Contact Person </label>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"contactPersion\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Relation</label>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<select formControlName=\"relation\" class=\"form-control\">\r\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let lookup of lookupEntity\">\r\n\t\t\t\t\t\t\t\t<option *ngIf=\"(lookup.category.categoryId) == 4\"\r\n\t\t\t\t\t\t\t\t\t[ngValue]=\"lookup\"><label>\r\n\t\t\t\t\t\t\t\t\t\t{{lookup.lookupValue}}</label>\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Village </label>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t <input type=\"text\" class=\"form-control\" formControlName=\"address\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Belongs To: </label>\r\n\t\t\t\t\t<div class=\"col-md-2 p-0 col-sm-3 \"> Urban :&nbsp;\r\n\t\t\t\t\t\t<input type=\"radio\" formControlName=\"isUrban\" name = \"isUrban\"> Rural : &nbsp;\r\n\t\t\t\t\t\t<input type=\"radio\" formControlName=\"isRural\" name = \"isRural\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">PostOffice </label>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"postOffice\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Police Station </label>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"policeStation\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Country <!--  <span class=\"text-red\"> * </span> --></label>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<select formControlName=\"country\" class=\"form-control\" (ngModelChange)=\"gotoStates($event)\">\r\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let countries of country\">\r\n\t\t\t\t\t\t\t\t<option [ngValue]=\"countries\" id=\"countries\" name=\"countries\">{{countries.countryName}}</option>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">State</label> \r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<select formControlName=\"state\" class=\"form-control\" (ngModelChange)=\"gotoDistricts($event)\">\r\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let states of state\">\r\n\t\t\t\t\t\t\t\t<option [ngValue]=\"states\" *ngIf=\"(states.country.countryId == countryId)\" id=\"states\">\r\n\t\t\t\t\t\t\t\t\t{{states.stateName}}</option>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">District </label> \r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\t\r\n\t\t\t\t\t\t<select formControlName=\"district\" class=\"form-control\">\r\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let districts of district\">\r\n\t\t\t\t\t\t\t\t<option *ngIf=\"districts.state.stateId == stateId\" [ngValue]=\"districts\">\r\n\t\t\t\t\t\t\t\t{{districts.districtName}}</option>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Pin </label>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"pin\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">phone </label>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t <input type=\"text\" class=\"form-control\" formControlName=\"phone1\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Email</label>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t\t <input type=\"text\" class=\"form-control\" formControlName=\"email\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<span class = \"col\">Correspondence address same as above</span>\r\n\t\t\t\t\t<div class=\"col-md-1 col-sm-2\">\r\n\t\t\t\t\t\t<input class = \"form-control\"  type=\"checkbox\" formControlName=\"active\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class = \"col-md-6\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t<nav class=\"navbar navbar-dark bg-info pl-2\" (click)=\"isCollapsed = !isCollapsed\">\r\n\t\t\t<h4 class=\"\">Emergency contact : </h4>\r\n\t\t\t<button type=\"button\" class=\"btn btn-outline-dark-circle\"\r\n\t\t\t\t aria-controls=\"collapseExample\">\r\n\t\t\t\t<i class=\"fa fa-arrow-circle-right \"></i>\r\n\t\t\t</button>\r\n\t\t</nav>\r\n\t\t<div class = \"container-fluid pt-1 pb-1 bg-light\" [ngbCollapse]=\"isCollapsed\">\r\n\t\t\t<div class = \"row\" >\r\n\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Contact Person :</label>\r\n\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"contactPerson\">\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<label class=\"col-md-2 col-sm-3 \">RelationShip</label>\r\n\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t<select formControlName=\"relationship\" class=\"form-control\">\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let lookup of lookupEntity\">\r\n\t\t\t\t\t\t\t<option *ngIf=\"(lookup.category.categoryId) == 5\"\r\n\t\t\t\t\t\t\t\t[ngValue]=\"lookup\"><label>\r\n\t\t\t\t\t\t\t\t\t{{lookup.lookupValue}}</label>\r\n\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Phone</label>\r\n\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t<input type=\"text\" formControlName=\"relationPhoneno\" class=\"form-control\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<nav class=\"navbar text-dark pl-2 bg-info\" (click)=\"referalCollapsed = !referalCollapsed\">\r\n\t\t\t<h4>Referral : </h4>\r\n\t\t\t<button type=\"button\" class=\"btn btn-outline-dark  -circle\"\r\n\t\t\t\t\r\n\t\t\t\taria-controls=\"collapseExample\">\r\n\t\t\t\t<i class=\"fa fa-arrow-circle-right\"></i>\r\n\t\t\t</button>\r\n\t\t</nav>\r\n\t\t<div class=\"container-fluid bg-light\" [ngbCollapse]=\"referalCollapsed\"><br>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<label class=\"col-md-2 col-sm-3 \">SSN No</label>\r\n\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t<input type=\"text\" name=\"docSSNNo\" formControlName=\"docSSNo\" class=\"form-control\">\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Hospital/Company</label>\r\n\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t<select formControlName=\"branch\" class=\"form-control\">\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let lookup of lookupEntity\">\r\n\t\t\t\t\t\t\t<option *ngIf=\"(lookup.category.categoryId) == 8\" [ngValue]=\"lookup\">\r\n\t\t\t\t\t\t\t\t<label>{{lookup.lookupValue}}</label>\r\n\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Doctor's Name</label>\r\n\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t<select formControlName=\"docname\" class=\"form-control\">\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let lookup of lookupEntity\">\r\n\t\t\t\t\t\t\t<option *ngIf=\"(lookup.category.categoryId) == 9\" [ngValue]=\"lookup\">\r\n\t\t\t\t\t\t\t\t\t<label>{{lookup.lookupValue}}</label>\r\n\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Ref.ToConsultant</label>\r\n\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t<select formControlName=\"refConsultant\" class=\"form-control\">\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let lookup of lookupEntity\">\r\n\t\t\t\t\t\t\t<option *ngIf=\"(lookup.category.categoryId) == 10\"\r\n\t\t\t\t\t\t\t\t[ngValue]=\"lookup\"><label>\r\n\t\t\t\t\t\t\t\t\t{{lookup.lookupValue}}</label>\r\n\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Speciality</label>\r\n\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t <input type=\"text\" class=\"form-control\" name=\"specialityByDoctorId\" \r\n\t\t\t\t\t formControlName=\"specialityByDoctorId\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Ref. Hospital Patient No</label>\r\n\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"refHospitalPatientNoId\" \r\n\t\t\t\t\tformControlName=\"refHospitalPatientNoId\">\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Voucher</label>\r\n\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t <input type=\"text\" class=\"form-control\" name=\"Voucher\" formControlName=\"voucher\">\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Event</label>\r\n\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t<input class=\"form-control\" formControlName=\"event\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Email/SMS</label>\r\n\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t<input id=\"emailOrSms\" type=\"text\" name=\"emailOrSms\"\r\n\t\t\t\t\t\tformControlName=\"emailOrSms\" class=\"form-control\">\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Friends/Family</label>\r\n\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t <input type=\"text\" name=\"FriendsFamilies\" formControlName=\"friendsFamilies\" class=\"form-control\">\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Staff Refferal-Staff Name</label>\r\n\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t <input type=\"text\" name=\"Staff\" formControlName=\"staff\"\r\n\t\t\t\t\t\tclass=\"form-control\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Media</label>\r\n\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t<select name=\"media\" formControlName='media' class=\"form-control\">\r\n\t\t\t\t\t\t<option value=\"TV\">TV</option>\r\n\t\t\t\t\t\t<option value=\"RADIO\">Radio</option>\r\n\t\t\t\t\t\t<option value=\"newspaper\">NewsPaper</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Online Media</label>\r\n\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t <select name=\"onlineMedia\" formControlName=\"onlineMedia\" class=\"form-control\">\r\n\t\t\t\t\t\t<option value=\"socialMedia\">SocialMedia</option>\r\n\t\t\t\t\t\t<option value=\"googleAds\">GoogleAds</option>\r\n\t\t\t\t\t\t<option value=\"website\">Website</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Other, Please Specify</label>\r\n\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t<input type=\"text\" name=\"Other\" formControlName=\"other\" class=\"form-control\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Internet</label>\r\n\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t <select name=\"internet\" formControlName=\"internet\" class=\"form-control\">\r\n\t\t\t\t\t\t<option value=\"Facebook\">Facebook</option>\r\n\t\t\t\t\t\t<option value=\"Whatsapp\">Whatsapp</option>\r\n\t\t\t\t\t\t<option value=\"Twitter\">Twitter</option>\r\n\t\t\t\t\t\t<option value=\"Youtube\">Youtube</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<label class=\"col-md-2 col-sm-3 \">Education</label>\r\n\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t<select formControlName=\"education\" class=\"form-control\">\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let lookup of lookupEntity\">\r\n\t\t\t\t\t\t\t<option *ngIf=\"(lookup.category.categoryId) == 11\" [ngValue]=\"lookup\">\r\n\t\t\t\t\t\t\t\t<label> {{lookup.lookupValue}}</label>\r\n\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<label class=\"col-md-2 col-sm-3 \">EAP</label>\r\n\t\t\t\t<div class=\"col-md-2 col-sm-3 \">\r\n\t\t\t\t\t<textarea  class=\"form-control\" name=\"eap\" formControlName=\"eap\"  cols=\"25\" rows=\"1\"></textarea>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--  Third navigation starts here -->\r\n\t\t<nav class=\"navbar nav-dark bg-info  pl-2\" (click)=\"pcf=!pcf\">\r\n\t\t\t<h4>Patient consent form : </h4>\r\n\t\t\t<button type=\"button\" class=\"btn btn-outline-dark  -circle\"\r\n\t\t\t\t aria-controls=\"collapseExample\">\r\n\t\t\t\t<i class=\"fa fa-arrow-circle-right\"></i>\r\n\t\t\t</button>\r\n\t\t</nav>\r\n\t\t<div class=\"container-fluid bg-light\" [ngbCollapse]=\"pcf\"><br>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<label class=\"col-md-3  col-sm-3 \">Consent Form Name</label>\r\n\t\t\t\t<div class=\"col-md-3 col-sm-3 \">\r\n\t\t\t\t\t<input type=\"text\" name=\"consentform\" formControlName=\"consentform\" class=\"form-control\">\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<label class = \"col-md-3 col-sm-3 \">Upload patient Consent Form</label>\r\n\t\t\t\t<div class=\"col-md-3  col-sm-3 card p-0 m-0\">\r\n\t\t\t\t\t<div class = \"card-head border border-dark p-0 m-0 text-center\">\r\n\t\t\t\t\t\t<label for = \"patient-consent\" class= \"pl-lg-3 m-0 bg-secondary\"><i class=\"fa fa-plus-circle fa-2x text-primary\" aria-hidden=\"true\"></i><span>Upload Patient Consent</span></label>\r\n\t\t\t\t\t\t<input type=\"file\"  class= \"d-none\" name=\"uploadpc\" id = \"patient-consent\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class = \"card-body\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div><br>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<table class=\"table\" border=\"1\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>\r\n\t\t\t\t\t\t\t\t<div>Download</div>\r\n\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t<th>\r\n\t\t\t\t\t\t\t\t<div>Document Name</div>\r\n\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t<th>\r\n\t\t\t\t\t\t\t\t<div>File Name</div>\r\n\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t<th>\r\n\t\t\t\t\t\t\t\t<div>Remove</div>\r\n\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div><br>\r\n\t\t<input type=\"reset\" value=\"Reset\" class=\"btn btn-danger\">\r\n\t\t&nbsp;<input type=\"button\" value=\"back\" class=\"btn btn-primary\"\r\n\t\t\trouterLink=\"/registration\"> &nbsp;\r\n\t\t<button [disabled]=\"!regform.valid\" class=\"btn btn-primary\"\r\n\t\t\t*ngIf=\"!isAvailEmpDetail\" (click)=\"RegisterPatient()\">\r\n\t\t\tRegister</button>\r\n\t\t<button class=\"btn btn-success\" *ngIf=\"isAvailEmpDetail\"\r\n\t\t\t(click)=\"updatePatient()\">Update</button>\r\n\r\n\t</form>\r\n\t<div class = \"card-footer bg-info mt-1 p-0 text-center\">\r\n\t\t<a routerLink = \"/registration\" class = \"m-2\"><button class = \"btn-warning\" >Back to Registration</button></a>\r\n\t</div>\r\n</div>\r\n</div>\r\n<div [hidden]=\"!submitted\">\r\n\t<h4>You submitted successfully!</h4>\r\n\t<!-- <button class=\"btn btn-success\" (click)=\"newEmployee()\">Add</button> -->\r\n</div>\r\n<ng-template #preRegistration >\r\n\t<div class = \"card \">\r\n\t\t<div class = \"card-head\">\r\n\t\t</div>\r\n\t\t<div class = \"card-body\">\r\n\t\t\t<table>\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th>Pre-registrationId</th>\r\n\t\t\t\t\t\t<th>Patient Name</th>\r\n\t\t\t\t\t\t<th>Pre-registration Date</th>\r\n\t\t\t\t\t\t<th>Department</th>\r\n\t\t\t\t\t\t<th>Actions</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr *ngFor = \"let preRegistration of preRegistrationList\">\r\n\t\t\t\t\t\t<td>{{preRegistration.preRegistrationId}}</td>\r\n\t\t\t\t\t\t<td>{{preRegistration.firstName}}&nbsp;{{preRegistration.middleName}}&nbsp;{{preRegistration.lastName}}</td>\r\n\t\t\t\t\t\t<td>{{preRegistration.queueDate}}</td>\r\n\t\t\t\t\t\t<td>{{preRegistration.department.departmentName}}</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<button class = \"btn btn-success\" (click) = \"addPreRegisterPatient(preRegistration)\">Add</button>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t\t\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n</ng-template>\r\n\r\n\r\n\r\n";
      /***/
    },

    /***/
    52590:
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient/components/emergency-registration/emergency-registration.component.html ***!
      \***************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [@routerTransition]>\n\t<app-page-header [mainhead]=\"'Registration'\"\n\t\t[mainheadLink]=\"'/registration'\" [heading]=\"'Emergency Registration'\"\n\t\t[icon]=\"'fa-bar-chart-o'\"></app-page-header>\n\n</div>\n<div [hidden]=\"submitted\">\n<form [formGroup] = \"regform\" (ngSubmit)= \"RegisterPatient()\" >\n\n\t<div class=\"row p-0\">\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card mb-3\">\n\t\t\t\t<div class=\"card-header row bg-dark text-white ml-3 mr-3\">\n\t\t\t\t\t<div class = \"col-md-4\">\n\t\t\t\t\t\tRegistration Type : Emergency \n\t\t\t\t\t</div>\n\t\t\t\t\t<button class = \"btn btn-success\" ><a href= \"/registration/patientlist\" routerLinkActive=\"active\"> Registered PatientList</a> </button>\n\t\t\t\t</div>\n\t\t\t\t<!-- Large modal -->\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<div class=\"row bg-light shadow rounded\">\n\t\t\t\t\t\t<div class=\"col-lg-2 justify-content-center\">\n\t\t\t\t\t\t\t<div class=\"rounded shadow col-md-9  py-3  text-center\" ><i class=\"fa fas fa-user-circle fa-5x \"></i></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-4\">\n\t\t\t\t\t\t\t\t\t<label> MRNO</label> \n\t\t\t\t\t\t\t\t\t<input type=\"text\" disabled name=\"mrno\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control rounded shadow\" formControlName = \"mrno\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-4\" >\n\t\t\t\t\t\t\t\t\t<label> {{id}} </label> <input type=\"text\" id = \"id\" \n\t\t\t\t\t\t\t\t\t\tclass=\"form-control \" formControlName = \"id\" required>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-4 \" >\n\t\t\t\t\t\t\t\t\t<label> Reason For no id :</label> \n\t\t\t\t\t\t\t\t\t<select name=\"nothavingid\" type = \"text\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" size=\"1\" class=\"col-lg-10 rounded shadow\" formControlName = \"nothavingid\" [disabled] = \"true\" (change) = \"changeId()\">\n\t\t\t\t\t\t\t\t\t\t<option value=\"\" selected = \"selected\">-- Select --</option>\n\t\t\t\t\t\t\t\t\t\t<option >National Without Card</option>\n\t\t\t\t\t\t\t\t\t\t<option >Expatriate Resident Without A\n\t\t\t\t\t\t\t\t\t\t\tCard</option>\n\t\t\t\t\t\t\t\t\t\t<option >Non National, Non Expat Resident\n\t\t\t\t\t\t\t\t\t\t\tWithout A Card</option>\n\t\t\t\t\t\t\t\t\t\t<option >Unknown Status, Without A Card</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-4\">\n\t\t\t\t\t\t\t\t\t<label class = \"col-md-5 pad-0 padx-0\"> Regd. Date</label> <input type=\"date\" class = \"col-md-7 rounded shadow\" formControlName = \"date\" id = \"date\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-4\">\n\t\t\t\t\t\t\t\t\t<label>Language: </label>\n\t\t\t\t\t\t\t\t\t <select class = \"col-md-8 rounded shadow\" formControlName = \"lan\"  >\n\t\t\t\t\t\t\t\t\t\t<option value = \"\">English</option>\n\t\t\t\t\t\t\t\t\t\t<option>Arabic</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t<br>\n\n\t\n\t\n\t<!--  Patient Division  -->\n\t\n\t\n\t\n\t<div class=\" row bg-light rounded shadow pad-0\">\n\t\n    \t<div class=\" col-md-12 pad-0\">\n            \t<h5>Patient</h5>\n        </div>\n        \n        <!-- First row -->\n        \n \n        <div class = \"col-md-12 pad-0\">\n            <div class=\"row pad-0\">\n            \t<div class = \"col-md-4 pad-0\">\n                     <label class = \"col-md-6 pad-0 mr-0\">Prefix </label>\n\t\t\t\t\t <select   name=\"patPrefix\" size=\"1\" class=\"col-md-6 rounded shadow\" formControlName = \"prefix\">\t\n\t\t\t\t\t \t<option value = \"\">-- Select --</option>\t\n\t\t\t\t\t \t<option >Master</option>\t\n\t\t\t\t\t \t<option >Dr</option>\t\n\t\t\t\t\t \t<option >Miss</option>\t\n\t\t\t\t\t \t<option >Mrs</option>\t\n\t\t\t\t\t \t<option >Mr</option>\t\n\t\t\t\t\t \t<option >Dr. (Major)</option>\t\n\t\t\t\t\t \t<option >Dr. (Brig.)</option>\t\n\t\t\t\t\t \t<option >New</option>\t\n\t\t\t\t\t \t<option >Others</option>\t\n\t\t\t\t\t \t<option >King</option>\t\n\t\t\t\t\t \t<option >Baby</option>\t\n\t\t\t\t\t \t<option >Dr.</option>\t\n\t\t\t\t\t \t<option >Twin 1</option>\t\n\t\t\t\t\t \t<option >00</option>\n\t\t\t\t\t </select>\n                </div>\n                <div class=\"col-md-4 col-sm-4 pad-0 mr-0\">\n                     <label class = \"col-md-6\">First Name</label> \n                     \t<input class = \"col-md-6 rounded shadow fname pad-0 \" formControlName=\"fname\" type=\"text\" >\n               \t\t</div>\n               \t\t\n                \t<div class=\"col-md-4 pad-0\">\n                    \t<label class = \"col-md-6\">Middle Name</label>\n                    \t<input  class = \"col-md-6 rounded shadow\" formControlName=\"mname\" type=\"text\"  >                 \n              \t\t</div>\n              \t</div>\n             </div >\n             \n              \t<!--  Second Row  -->\n             <div class = \"col-md-12\">\n             \t<div class = \"row\">\n                \t<div class=\"col-md-4 pad-0\">\n                     \t<label class = \"col-md-6\">Last Name \n                    \t</label>\n                     \t<input class = \"col-md-6 rounded shadow\" formControlName=\"lname\" type=\"text\"  >      \n               \t\t</div>\n                \t<div class=\"col-md-4 pad-0\">\n                     \t<label class = \"col-md-6\">Gender\t</label>\n                     \t<select   name=\"genderCombo\" class=\" col-md-6 rounded shadow\" size=\"1\"  formControlName = \"gender\">\t\n                    \t\t\t<option value=\"\" selected=\"selected\">-- Select --</option>\n\t\t\t\t\t\t\t\t<option value=\"29380\">Transe</option>\n\t\t\t\t\t\t\t\t<option value=\"2\">FEMALE</option>\n\t\t\t\t\t\t\t\t<option value=\"1\">MALE</option>\n\t\t\t\t\t\t\t\t<option value=\"1063\">Unknown</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-4 pad-0 \">\n                     \t\t<label class = \"col-md-6\">Marital Status\n\t\t\t\t\t\t\t<!--<span class=\"text-red\"> * </span> -->\n\t\t\t\t\t\t\t</label> \n\t                    \t<select  name=\"PatMarritalStatus\" class=\" col-md-6 rounded shadow \" size=\"1\"  formControlName = \"maritalstatus\">\n\t                    \t\t<option value=\"\">-Select --</option>\n\t\t\t\t\t\t\t\t<option value=\"93501768\">Baby</option>\n\t\t\t\t\t\t\t\t<option value=\"93502890\">Bachelor</option>\n\t\t\t\t\t\t\t\t<option value=\"93502893\">Divorced</option>\n\t\t\t\t\t\t\t\t<option value=\"3\">Married</option>\n\t\t\t\t\t\t\t\t<option value=\"1064\">Seperated</option>\n\t\t\t\t\t\t\t\t<option value=\"4\">Single</option>\n\t\t\t\t\t\t\t\t<option value=\"93501769\">UnMarried</option>\n\t\t\t\t\t\t\t\t<option value=\"3516441\">Widower</option>\n\t\t\t\t\t\t\t</select>\n\t\t               \t</div>\n\t\t             </div>\n\t\t          </div>\n\t\t          \n\t\t          <!-- Third row starts here -->\n\t\t          <div class = \"col-md-12\">\n            \t\t\t<div class=\"row\">\n            \t\t\t<!--  \n\t\t\t\t\t\t\t<div class=\"col-md-4 pad-0\">\n                    \t\t\t<label class = \"col-md-6 hidden\"> DOB(Hijri) \n\t\t\t\t\t\t\t\t</label>\n\t\t                   \t\t<input class = \"col-md-6 rounded shadow\" type = \"date\" formControlName = \"dobh\">\n\t\t                \t</div>\n\t\t                -->\n\t\t                \t<div class=\"col-md-4 pad-0\">\n                    \t\t\t<label class = \"col-md-6\">DOB \n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<input class = \"col-md-6 rounded shadow\" type = \"date\" formControlName = \"dob\" (change) = 'agecalculator()'>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class = \"col-md-4 pad-0\">\n\t\t\t\t\t\t\t\t<label class = \"col-md-6\"> Age</label><input  name=\"age\" type=\"text\" class = \"col-md-2 rounded shadow pad-0\" formControlName = \"age\">&nbsp;\n\t\t\t\t\t\t\t\t<select  name=\"ageUnit\" size=\"1\" class=\"col-md-3 pad-0 \" formControlName = \"ageUnit\" (change) = \"ageformat()\">\n\t\t\t\t\t\t\t\t\t<option >Years</option>\n\t\t\t\t\t\t\t\t\t<option >Months</option>\t\n\t\t\t\t\t\t\t\t\t<option >Days</option>\n\t\t\t\t\t\t\t\t</select>&nbsp;\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n                \t\t<div class=\"col-md-4 pad-0\">\n                     \t\t<label class = \"col-md-6\">Religion</label>\n                     \t\t<input  type=\"text\" name=\"patientReligion\"  class=\"col-md-6 rounded shadow\"  formControlName = \"religion\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Fourth row starts here -->\n\t\t\t\t\n\t\t\t\t<div class = \"col-md-12\">\n                \t<div class = \"row\">\n\t\t\t\t\t\t<div class=\"col-md-4 pad-0\">\n                     \t\t<label class=\"col-md-6 \">Nationality</label>\n\t\t\t\t\t\t\t<input  type=\"text\" name=\"patientNationality\"  class=\"col-md-6 rounded shadow\"  formControlName = \"nationality\">\n                \t\t</div>\n                \t\t<div class=\"col-md-4 pad-0\">\n                    \t\t<label class=\"col-md-6 \">Mobile \n\t\t\t\t\t\t\t</label> \n\t\t\t\t\t\t\t<input class = \"col-md-6 rounded shadow\"  value=\"+9665\" type=\"text\" name=\"patMobileNo\" formControlName =\"mobile\" >\n\t\t\t\t\t\t</div>\n                \t\t<div class=\"col-md-4 pad-0\">\n                     \t\t<label class=\"col-md-6 text-wrap \">Mobile (Secondary)\n\t\t\t\t\t \t\t</label>\n\t\t\t\t\t \t\t<input class = \"col-md-6 rounded shadow\" type = \"tel\" name = \"secondarymobs\" formControlName = \"mobs\">\n                \t\t</div>\n                \t</div>\n                </div>\n                \n                <!--  Fifth row start here -->\n                \n                \n                <div class = \"col-md-12\">\n                \t<div class = \"row\">\n                \t\t<div class=\"col-md-4 pad-0\">\n                     \t\t<label class=\"col-md-6 \">Occupation</label>\n                     \t\t<input  type=\"text\" name=\"occupation\"  class=\"col-md-6 rounded shadow \"  formControlName = \"occupation\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4 pad-0\">\n                     \t\t<label class = \"col-md-6\">Alias Name</label>\n\t\t\t\t\t\t\t<input  type=\"text\" name=\"aliasname\"  class=\"col-md-6 rounded shadow\"  formControlName = \"aliasname\">\n                \t\t</div>\n                \t\t<div class=\"col-md-4 pad-0\">\n                    \t\t<label class = \"col-md-6\">Email \n\t\t\t\t\t\t\t</label> \n\t\t\t\t\t\t\t<input class = \"col-md-6 rounded shadow\"  value=\"+9665\" type=\"text\" name=\"email\" formControlName =\"email\" >\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n                </div>\n                <div class = \"col-md-12\">\n                \t<div class = \"row\">\n                \t\t<div class=\"col-md-4 pad-0\">\n                     \t\t<label class = \"col-md-6\">Highest Qualification\n\t\t\t\t\t \t\t</label>\n\t\t\t\t\t \t\t<input class = \"col-md-6 rounded shadow\" name = \"hightestqual\" type = \"tel\" formControlName = \"highestqual\">\n                \t\t</div>\n                \t\t<div class=\"col-md-4 pad-0\">\n                     \t\t<label class = \"col-md-6\">Kids</label>\n                     \t\t<input  type=\"text\" name=\"patientReligion\"  class=\"col-md-6 rounded shadow\" autocomplete=\"off\" formControlName = \"kids\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-4 pad-0\">\n                     \t\t<label class = \"col-md-6\">Confidential\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input  type=\"checkbox\" name=\"patientNationality\"  class=\"col-md-6 rounded shadow\" autocomplete=\"off\" formControlName = \"confidential\">\n                \t\t</div>\n                \t</div>\n                </div>\n                <div class = \"col-md-12\">\n                \t<div class = \"row\">\n                \t\t<div class=\"col-md-4 pad-0\">\n                    \t\t<label class = \"col-md-6\">Patient flag \n\t\t\t\t\t\t\t</label> \n\t\t\t\t\t\t\t<select class = \"col-md-6 rounded shadow\"  type=\"text\" name=\"patMobileNo\" formControlName =\"patientflag\" >\n\t\t\t\t\t\t\t\t<option value = \" \">--select--</option>\n\t\t\t\t\t\t\t\t<option value = \"1\">MEDICAL ABUSE</option>\n\t\t\t\t\t\t\t\t<option value = \"1\">DRUG ADDICT</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n                \t\t<div class=\"col-md-4 pad-0\">\n                     \t\t<label class= \"col-md-6\">How did you know about us.\n\t\t\t\t\t \t\t</label>\n\t\t\t\t\t \t\t<input class = \"col-md-6 rounded shadow\" type = \"tel\" formControlName = \"hdykau\">\n                \t\t</div>\n                \t</div>\n                </div>\n                <div class = \"col-md-1\">\n                \t<p>NOK Details: </p>\n                </div>\n                <div class = \"col-md-11\"></div>\n               \n                <div class = \"col-md-4\">\n                \t<label class = \"col-md-6\">Relationship: </label>\n                \t<select formControlName = \"relationship\" class = \"col-md-6 rounded shadow\">\n                \t\t<option  >-- Select --</option>\n                \t\t<option >C/o</option>\t\n                \t\t<option >D/o</option>\t\n                \t\t<option >S/o</option>\t\n                \t\t<option >W/O</option>\t\n                \t\t<option >Mother of</option>\t\n                \t\t<option >Brother of</option>\t\n                \t\t<option >Other</option>\t\n                \t\t<option >Sister of</option>\n                \t</select>\n                </div>\n              \n                <div class = \"col-md-12\">\n            \t\t<div class=\"row\">\n            \t\t\t<div class = \"col-md-4\">\n                     \t\t<label class = \"col-md-6\">Prefix </label>\n\t\t\t\t\t \t\t<select   name=\"patPrefix\" size=\"1\" class=\"col-md-6 rounded shadow\" formControlName = \"nokprefix\">\t\n\t\t\t\t\t\t\t \t<option value = \" \">-- Select --</option>\t\n\t\t\t\t\t\t\t \t<option >Master</option>\t\n\t\t\t\t\t\t\t \t<option >Dr</option>\t\n\t\t\t\t\t\t\t \t<option >Miss</option>\t\n\t\t\t\t\t\t\t \t<option >Mrs</option>\t\n\t\t\t\t\t\t\t \t<option >Mr</option>\t\n\t\t\t\t\t\t\t \t<option >Dr. (Major)</option>\t\n\t\t\t\t\t\t\t \t<option >Dr. (Brig.)</option>\t\n\t\t\t\t\t\t\t \t<option >New</option>\t\n\t\t\t\t\t\t\t \t<option >Others</option>\t\n\t\t\t\t\t\t\t \t<option >King</option>\t\n\t\t\t\t\t\t\t \t<option >Baby</option>\t\n\t\t\t\t\t\t\t \t<option >Dr.</option>\t\n\t\t\t\t\t\t\t \t<option >Twin 1</option>\t\n\t\t\t\t\t\t\t \t<option >00</option>\n\t\t\t\t\t \t\t</select>\n               \t\t\t</div>\n                \t\t<div class=\"col-md-4 col-sm-12 pad-0 \">\n                     \t\t<label class = \"col-md-6\" >First Name\n\t\t\t\t\t\t\t<!--  <span class=\"text-red\"> * </span> -->\n\t\t\t\t\t\t\t</label> \n                     \t\t<input class = \"col-md-6 rounded shadow fname\" formControlName=\"nokfname\" type=\"text\" >\n               \t\t\t</div>\n                \t\t<div class=\"col-md-4 pad-0\">\n                    \t\t<label class = \"col-md-6\">Middle Name</label>\n                    \t\t<input  class = \"col-md-6 rounded shadow\" formControlName=\"nokmname\" type=\"text\"  >                 \n              \t\t\t</div>\n                \t\t<div class=\"col-md-4 pad-0\">\n                     \t\t<label class = \"col-md-6\">Last Name \n                    \t\t</label>\n                     \t\t<input class = \"col-md-6 rounded shadow\" formControlName=\"noklname\" type=\"text\"  >      \n               \t\t\t</div>\n          \t\t\t</div>\n          \t\t</div >\n            </div>\n            <br>\n            <!-- Contact Details Division -->\n            <div class = \"row bg-light rounded shadow\">\n            \t<div class = \"col-md-12\">\n            \t\t<h5> Contact Details</h5>\n            \t</div>\n            \t\n            \t<div class = \"col-md-12\">\n            \t\t<label class = \"col-md-2\"> Address (permanent)</label>\n            \t\t<input type=\"radio\"  name=\"address\" value=\"urban\" formControlName = \"address\" >\n\t\t\t\t\t<label >Urban</label>\n\t\t\t\t\t<input type=\"radio\"  name=\"address\" value=\"rural\" formControlName = \"address\">\n\t\t\t\t\t<label>Rural</label><br>\n            \t</div>\n            \t\n            \t<div class = \"col-md-12\">\n            \t\t<div class = 'row'>\n            \t\t\t<div class = \"col-md-4\">\n            \t\t\t\t<label class = \"col-md-6\">P.O Box :</label>\n            \t\t\t\t<input type = \"text\" formControlName = \"pobox\" class = \"col-md-6 rounded shadow\">\n            \t\t\t</div>\n            \t\t\t<div class = \"col-md-4\">\n            \t\t\t\t<label class = \"col-md-6\">Street :</label>\n            \t\t\t\t<input type = \"text\" formControlName = \"street\" class = \"col-md-6 rounded shadow\">\n            \t\t\t</div>\n            \t\t\t<div class = \"col-md-4\">\n            \t\t\t\t<label class = \"col-md-6\">Landmark :</label>\n            \t\t\t\t<input type = \"text\" formControlName = \"landmark\" class = \"col-md-6 rounded shadow\">\n            \t\t\t</div>\n            \t\t</div>\n            \t</div>\n            \t\n            \t<div class = \"col-md-12\">\n            \t\t<div class = 'row'>\n            \t\t\t<div class = \"col-md-4\">\n            \t\t\t\t<label class = \"col-md-6\" >Country :</label>\n            \t\t\t\t<input type = \"text\" formControlName = \"country\" class = \"col-md-6 rounded shadow\">\n            \t\t\t</div>\n            \t\t\t<div class = \"col-md-4\">\n            \t\t\t\t<label class = \"col-md-6\">State :</label>\n            \t\t\t\t<input type = \"text\" formControlName = \"state\" class = \"col-md-6 rounded shadow\">\n            \t\t\t</div>\n            \t\t\t<div class = \"col-md-4\">\n            \t\t\t\t<label class = \"col-md-6\">City :</label>\n            \t\t\t\t<input type = \"text\" formControlName = \"city\" class = \"col-md-6 rounded shadow\">\n            \t\t\t</div>\n            \t\t</div>\n            \t</div>\n            \t\n            \t<div class = \"col-md-12\">\n            \t\t<div class = 'row'>\n            \t\t\t<div class = \"col-md-4\">\n            \t\t\t\t<label class = \"col-md-6\">Pin :</label>\n            \t\t\t\t<input type = \"number\" formControlName = \"pin\" class = \"col-md-6 rounded shadow\">\n            \t\t\t</div>\n            \t\t\t<div class = \"col-md-4\">\n            \t\t\t\t<label class = \"col-md-6\">Phones :</label>\n            \t\t\t\t<input type = \"number\" formControlName = \"phone\" class = \"col-md-6 rounded shadow\">\n            \t\t\t</div>\n            \t\t\t\n            \t\t</div>\n            \t</div>\n            \t<div class = \"col-md-12 pad-5 mr-5\"><span>Correspondence address same as above</span><input type = \"checkbox\" formControlName = \"sameaddr\"></div>\n            </div>\n            \n        </div>\n    </div>\n    </div>\n   \t</div>\n \n\t\t<nav class=\"navbar navbar-dark bg-info justify-content-end pad-0 mr-0\" >\n\t\t\t<label class = \"justify-content-start \">Emergency contact : </label>\n    \t\t<button type=\"button\" class=\"btn btn-outline-dark rounded-circle\" (click)=\"isCollapsed = !isCollapsed\" aria-controls=\"collapseExample\"> \n    \t\t\t<i  class=\"fa fa-arrow-circle-right\"></i>\n    \t\t</button>\n  \t\t</nav>\n  \t\t\n  \t\t<div class = \"col-md-12 rounded shadow bg-light\" [ngbCollapse] = \"isCollapsed\">\n            <div class=\"row\">\n            \t<div class=\"col-md-4 pad-0\">\n                     <label class = \"col-md-6\">Contact Person :</label>\n                    <input type=\"text\" class = \"col-md-6 rounded shadow\" formControlName=\"contactPersonId\">\n                </div>\n                <div class=\"col-md-4 \">\n                      <label class = \"col-md-6\">RelationShip</label>\n                      <select  formControlName=\"crelationship\" class = \"col-md-6 rounded shadow\">\t\n                      \t<option value=\"\">-- Select --</option>\n\t\t\t\t\t\t<option value=\"\">Aunty</option>\n\t\t\t\t\t\t<option value=\"\">Brother</option>\n\t\t\t\t\t\t<option value=\"\">Brother - in - Law</option>\n\t\t\t\t\t\t<option value=\"\">Colleague</option>\n\t\t\t\t\t\t<option value=\"\">Cousin</option>\n\t\t\t\t\t\t<option value=\"\">Daughter</option>\n\t\t\t\t\t\t<option value=\"\">Doughter - in - Law</option>\n\t\t\t\t\t\t<option value=\"\">Father</option>\n\t\t\t\t\t\t<option value=\"\">Father-in-law</option>\n\t\t\t\t\t\t<option value=\"\">Friend</option>\n\t\t\t\t\t\t<option value=\"\">Grand Child</option>\n\t\t\t\t\t\t<option value=\"\">Grand Parent</option>\n\t\t\t\t\t\t<option value=\"\">Grand Son</option>\n\t\t\t\t\t\t<option value=\"\">Grandmother</option>\n\t\t\t\t\t\t<option value=\"\">Guardian</option>\n\t\t\t\t\t\t<option value=\"\">Husband</option>\n\t\t\t\t\t\t<option value=\"\">Mother</option>\n\t\t\t\t\t\t<option value=\"\">Mother-in-law</option>\n\t\t\t\t\t\t<option value=\"\">Nephew</option>\n\t\t\t\t\t\t<option value=\"\">Nevue</option>\n\t\t\t\t\t\t<option value=\"\">Self</option>\n\t\t\t\t\t\t<option value=\"\">Sister</option>\n\t\t\t\t\t\t<option value=\"\">Son</option>\n\t\t\t\t\t\t<option value=\"\">Son - in - Law</option>\n\t\t\t\t\t\t<option value=\"\">Son-in-Law</option>\n\t\t\t\t\t\t<option value=\"\">Spouse</option>\n\t\t\t\t\t\t<option value=\"\">Uncle</option>\n\t\t\t\t\t\t<option value=\"\">Wife</option>\n\t\t\t\t\t</select>\n                </div>\n          \n             <div class=\"col-md-3 pad-0\">\n                <label class = \"col-md-6\" >Phone</label>\n                <input  type=\"text\" formControlName=\"phone1Id\" class=\"col-md-5 rounded shadow\">\n                \n             </div>\n            </div>\n            \n        </div>\n        <hr>\n        \t<nav class=\"navbar  bg-info justify-content-end\" >\n\t\t\t<label class = \"justify-content-start\">Referral : </label>\n    \t\t<button type=\"button\" class=\"btn btn-outline-dark rounded-circle\" (click)=\"referalCollapsed = !referalCollapsed\" aria-controls=\"collapseExample\"> \n    \t\t\t<i class=\"fa fa-arrow-circle-right\"></i>\n    \t\t</button>\n  \t\t</nav>\n  \t\t\n  \t\t<div class=\"col-md-12 bg-light\" [ngbCollapse] = \"referalCollapsed\">\n            \n            <div class=\"row\">\n\t\t\t\n\t\t\t<div class=\"col-md-4 pad-0\">\n                    <label class = \"col-md-6\" >SSN No</label>\n                    <input type=\"text\" name=\"docSSNNo\" formControlName=\"docSSNo\" class = \"col-md-6 rounded shadow\">\n                    \n               </div>\n            \t<div class=\"col-md-4 pad-0\">\n                     <label class=\"col-sm-6 control-label pad-3\">Hospital/Company</label>\n                     <select class = \"col-md-6 rounded-shadow\" formControlName = \"hospital\">\n                     \t<option  value = \"\">--select--</option>\n                     \t<option value = \"1\">hm</option>\n                     </select>\n                </div>\n\t\t\t\t\n                <div class=\"col-md-4 pad-0 \">\n                      <label class=\"col-sm-6 control-label pad-3\">Doctor's Name</label>\n                      <select class = \"col-md-6 rounded shadow\" formControlName = \"docname\">\n                      \t<option value = \"\">--Select--</option>\n                      \t<option value = \"2\">----</option>\n                      </select>\n                </div>\n          \n              </div>\n              <div class = \"row\">\n                <div class=\"col-md-4 pad-0\">\n                    <label class = \"col-md-6\">Ref.ToConsultant</label>\n                    <select  name=\"refConsultant\" formControlName = \"refConsultant\"  class=\"col-md-6 rounded shadow\" size=\"1\">\t\n                    \t\t<option value=\"\">-- Select --</option>\n\t\t\t\t\t\t\t<option value=\"26687\">Dr ABDELRAMAN ALI ABDLRAMAN ALI ELSAKET</option>\n\t\t\t\t\t\t\t<option value=\"31685\">Dr Abdul Rahman  Ahmed</option>\n\t\t\t\t\t\t\t<option value=\"26245\">Dr Abdulkarim  Al Falkah</option>\n\t\t\t\t\t\t\t<option value=\"26546\">Dr ABDULLAH  ALGHAMDI</option>\n\t\t\t\t\t\t\t<option value=\"25872\">Dr Abdullah  Elgendy</option>\n\t\t\t\t\t\t\t<option value=\"26443\">Dr Abdullah  Hassan</option>\n\t\t\t\t\t\t\t<option value=\"25899\">Dr Abeer Ahmed Abdulmonem</option>\n\t\t\t\t\t\t\t<option value=\"27109\">Dr ABRAR ALI A AHMED  </option>\n\t\t\t\t\t\t\t<option value=\"27787\">Dr Adnan  Mostafa</option>\n\t\t\t\t\t\t\t<option value=\"30145\">Dr Adnan  Mustafa</option>\n\t\t\t\t\t\t\t<option value=\"27585\">Dr Adnan  Mustafa</option>\n\t\t\t\t\t\t\t<option value=\"211\">Dr Afraa Authman Babker Alahmar</option>\n\t\t\t\t\t\t\t<option value=\"313\">Dr Afshan  Taranum</option>\n\t\t\t\t\t\t\t<option value=\"319\">Dr Ahlam  Jodah</option>\n\t\t\t\t\t\t\t<option value=\"29654\">Dr Ahlam  Zedan</option>\n\t\t\t\t\t\t\t<option value=\"134\">Dr Ahmd Mhyaldyn Mykry</option>\n\t\t\t\t\t\t\t<option value=\"25540\">Dr Ahmed  </option>\n\t\t\t\t\t\t\t<option value=\"26585\">Dr Ahmed  Ali</option>\n\t\t\t\t\t\t\t<option value=\"26796\">Dr AHMED  ALMASRI</option>\n\t\t\t\t\t\t\t<option value=\"26802\">Dr AHMED  FATHI</option>\n\t\t\t\t\t\t\t<option value=\"27078\">Dr AHMED  HEGAZY</option>\n\t\t\t\t\t\t\t<option value=\"26452\">Dr Ahmed  Kheder</option>\n\t\t\t\t\t\t\t<option value=\"27566\">Dr Ahmed  Salah</option>\n\t\t\t\t\t\t\t<option value=\"29648\">Dr AHMED  SANNYELBAHAA</option>\n\t\t\t\t\t\t\t<option value=\"29593\">Dr Ahmed  Wahba</option>\n\t\t\t\t\t\t\t<option value=\"26406\">Dr Ahmed  Zaakria</option>\n\t\t\t\t\t\t\t<option value=\"26335\">Dr Ahmed Ghiaz  Hussain Anbar</option>\n\t\t\t\t\t\t\t<option value=\"303\">Dr Ahmed Mohamed  Saleh</option>\n\t\t\t\t\t\t\t<option value=\"26330\">Dr Ahmed Mohammed  Alsayed Easamra</option>\n\t\t\t\t\t\t\t<option value=\"26691\">Dr AHMED MOHAMMED  ESSAM DESOUKY</option>\n\t\t\t\t\t\t\t<option value=\"36\">Dr Ahmed Qasem Teama</option>\n\t\t\t\t\t\t\t<option value=\"34\">Dr Ala Fayiz Applejim Hasan</option>\n\t\t\t\t\t\t\t<option value=\"28365\">Dr Alaa  Mohammad</option>\n\t\t\t\t\t\t\t<option value=\"25897\">Dr Alaa Mustafa Khatib</option>\n\t\t\t\t\t\t\t<option value=\"213\">Dr Alan Eisaa  Eisaa</option>\n\t\t\t\t\t\t\t<option value=\"32745\">Dr Ali  Al abbas</option>\n\t\t\t\t\t\t\t<option value=\"26586\">Dr Ali  Al Moghazy</option>\n\t\t\t\t\t\t\t<option value=\"33225\">Dr ALIAA  ALMASRI</option>\n\t\t\t\t\t\t\t<option value=\"25901\">Dr Almutazbellah Mohamed Altayeh</option>\n\t\t\t\t\t\t\t<option value=\"27986\">Dr Alya  El Sayed</option>\n\t\t\t\t\t\t\t<option value=\"26578\">Dr ALYA  FLYWON</option>\n\t\t\t\t\t\t\t<option value=\"31168\">Dr amal  abdullwahab</option>\n\t\t\t\t\t\t\t<option value=\"29705\">Dr Amal  AlMarbat</option>\n\t\t\t\t\t\t\t<option value=\"26407\">Dr Amal  Almarbat</option>\n\t\t\t\t\t\t\t<option value=\"28306\">Dr Amal  El Abis</option>\n\t\t\t\t\t\t\t<option value=\"31245\">Dr Amal  Eysa</option>\n\t\t\t\t\t\t\t<option value=\"27076\">Dr AMAL  HASSAN</option>\n\t\t\t\t\t\t\t<option value=\"64\">Dr Amal Mohammad Tawfiq Jarad</option>\n\t\t\t\t\t\t\t<option value=\"30008\">Dr Amani  Abdel-Baqi</option>\n\t\t\t\t\t\t\t<option value=\"26809\">Dr AMANI  SABORE</option>\n\t\t\t\t\t\t\t<option value=\"312\">Dr Amani Ameen Khalid Tarbosh</option>\n\t\t\t\t\t\t\t<option value=\"26825\">Dr Ameen  </option>\n\t\t\t\t\t\t\t<option value=\"26797\">Dr AMER  LAMLOUM</option>\n\t\t\t\t\t\t\t<option value=\"29587\">Dr Amira  Farghli</option>\n\t\t\t\t\t\t\t<option value=\"26327\">Dr AMIRA MOHAMED  MAHMOUD SAID</option>\n\t\t\t\t\t\t\t<option value=\"26337\">Dr AMR ABOUELHODA  MAHMOUD  ELSIRAFY</option>\n\t\t\t\t\t\t\t<option value=\"28528\">Mr Ann  Lapenig</option>\n\t\t\t\t\t\t\t<option value=\"26645\">Dr Annas  Dohilan</option>\n\t\t\t\t\t\t\t<option value=\"112\">Dr Archana  Raghav</option>\n\t\t\t\t\t\t\t<option value=\"26803\">Dr ASHRAF  ALESAWI</option>\n\t\t\t\t\t\t\t<option value=\"306\">Dr Ashraf  Nassar</option>\n\t\t\t\t\t\t\t<option value=\"30425\">Dr Asma  Diyab</option>\n\t\t\t\t\t\t\t<option value=\"148\">Dr Asma  Eawayis</option>\n\t\t\t\t\t\t\t<option value=\"20\">Dr Asma Syd Jaballlah Eawayis</option>\n\t\t\t\t\t\t\t<option value=\"26447\">Dr Atheer  Alabdulatif</option>\n\t\t\t\t\t\t\t<option value=\"27254\">Dr Atheer  Khaled</option>\n\t\t\t\t\t\t\t<option value=\"26689\">Dr AUDAI MOIEN AMMARI</option>\n\t\t\t\t\t\t\t<option value=\"27828\">Dr Aya  Al Rashidi</option>\n\t\t\t\t\t\t\t<option value=\"28526\">Dr Aya  Al Rashidy</option>\n\t\t\t\t\t\t\t<option value=\"27825\">Dr Aya  ElRashady</option>\n\t\t\t\t\t\t\t<option value=\"29145\">Dr Ayman  Abdel-Latif</option>\n\t\t\t\t\t\t\t<option value=\"25908\">Dr Ayman  Abdullatif</option>\n\t\t\t\t\t\t\t<option value=\"29585\">Dr Ayman  Selim</option>\n\t\t\t\t\t\t\t<option value=\"302\">Dr Azam  Salamah</option>\n\t\t\t\t\t\t\t<option value=\"25986\">Dr Basema  Alobaid</option>\n\t\t\t\t\t\t\t<option value=\"26332\">Dr Basl Smyr  Qlajw</option>\n\t\t\t\t\t\t\t<option value=\"133\">Dr Basma  Sakr</option>\n\t\t\t\t\t\t\t<option value=\"29647\">Dr Basma  Sger</option>\n\t\t\t\t\t\t\t<option value=\"26549\">Dr BASMAH  NASOHI</option>\n\t\t\t\t\t\t\t<option value=\"26342\">Dr Bassma  Samir</option>\n\t\t\t\t\t\t\t<option value=\"65\">Mr Benedick Feliciano Juan</option>\n\t\t\t\t\t\t\t<option value=\"30012\">Miss Caila  </option>\n\t\t\t\t\t\t\t<option value=\"28685\">Mr Cash Medical Checkup</option>\n\t\t\t\t\t\t\t<option value=\"27490\">Dr Dalia Mohamed Anwar Aboelhana</option>\n\t\t\t\t\t\t\t<option value=\"300\">Dr Dalia Same Ewyas</option>\n\t\t\t\t\t\t\t<option value=\"26425\">Miss Dar Ram  (RN)</option>\n\t\t\t\t\t\t\t<option value=\"318\">Dr Dawlat  Afandi</option>\n\t\t\t\t\t\t\t<option value=\"28845\">Dr Diana  Ali</option>\n\t\t\t\t\t\t\t<option value=\"10\">Dr Dima Mohammad Abdalqader Almr</option>\n\t\t\t\t\t\t\t<option value=\"26454\">Dr Doaa  Hamed</option>\n\t\t\t\t\t\t\t<option value=\"29586\">Dr Doha  Mosallam</option>\n\t\t\t\t\t\t\t<option value=\"216\">Dr Ebrahim  Bakeer</option>\n\t\t\t\t\t\t\t<option value=\"314\">Dr Eglal Mouhamed Hassan Rajab</option>\n\t\t\t\t\t\t\t<option value=\"26799\">Dr EHAB  ALDAKEN</option>\n\t\t\t\t\t\t\t<option value=\"26548\">Dr EHAB  ALGHANNOUM</option>\n\t\t\t\t\t\t\t<option value=\"26808\">Dr ELAF  KOJAK</option>\n\t\t\t\t\t\t\t<option value=\"29635\">Mr Eman  Al Qeshawi</option>\n\t\t\t\t\t\t\t<option value=\"29685\">Dr Eman  Galal</option>\n\t\t\t\t\t\t\t<option value=\"29641\">Mr Eman  Galal</option>\n\t\t\t\t\t\t\t<option value=\"29825\">Dr Eman  Galall</option>\n\t\t\t\t\t\t\t<option value=\"27116\">Dr EMAN  NOUREIDIN</option>\n\t\t\t\t\t\t\t<option value=\"141\">Dr Emman  Hassan</option>\n\t\t\t\t\t\t\t<option value=\"25380\">Dr Enas  </option>\n\t\t\t\t\t\t\t<option value=\"29636\">Mr Enas  Abdulla</option>\n\t\t\t\t\t\t\t<option value=\"29566\">Miss Exilis  </option>\n\t\t\t\t\t\t\t<option value=\"27108\">Dr EYAD ZAKARIA ALMURAD</option>\n\t\t\t\t\t\t\t<option value=\"29247\">Dr Fadila  Alhammad</option>\n\t\t\t\t\t\t\t<option value=\"26365\">Dr Fahad  Khamis</option>\n\t\t\t\t\t\t\t<option value=\"27077\">Dr FAHMIDA HASAN SHAMSUL HASAN</option>\n\t\t\t\t\t\t\t<option value=\"81\">Dr Farhat L L Zainab</option>\n\t\t\t\t\t\t\t<option value=\"30750\">Dr Fatima  Alnemer</option>\n\t\t\t\t\t\t\t<option value=\"31167\">Dr fatimah  al nasser</option>\n\t\t\t\t\t\t\t<option value=\"28\">Dr Fatimah Ahmad Abdaljalil</option>\n\t\t\t\t\t\t\t<option value=\"25420\">Dr Fatimah Al Bahrani</option>\n\t\t\t\t\t\t\t<option value=\"29655\">Dr Fatma  Al Zahra</option>\n\t\t\t\t\t\t\t<option value=\"26439\">Dr Feras  ALZBOUN</option>\n\t\t\t\t\t\t\t<option value=\"29634\">Dr Fouad  Qaesha</option>\n\t\t\t\t\t\t\t<option value=\"29305\">Dr Fouad  Qaisha</option>\n\t\t\t\t\t\t\t<option value=\"29646\">Dr Gasan Shams Udeen</option>\n\t\t\t\t\t\t\t<option value=\"28428\">Dr Gassan shams al deen</option>\n\t\t\t\t\t\t\t<option value=\"25603\">Mrs Gentle Lase 1  </option>\n\t\t\t\t\t\t\t<option value=\"25604\">Mrs Gentle Lase 2  </option>\n\t\t\t\t\t\t\t<option value=\"25605\">Mrs Gentle Lase 3  </option>\n\t\t\t\t\t\t\t<option value=\"15\">Dr Ghadah Mustafaa Ali Aljundi</option>\n\t\t\t\t\t\t\t<option value=\"28245\">Dr Ghasan  Shams Alden</option>\n\t\t\t\t\t\t\t<option value=\"29594\">Dr Haitham  </option>\n\t\t\t\t\t\t\t<option value=\"29606\">Dr Haitham  Shorbji</option>\n\t\t\t\t\t\t\t<option value=\"30405\">Dr Hala  Almozien</option>\n\t\t\t\t\t\t\t<option value=\"26695\">Dr HAMS MOHAMMED  MAHMOUD</option>\n\t\t\t\t\t\t\t<option value=\"31865\">Dr hanaa  eid</option>\n\t\t\t\t\t\t\t<option value=\"29565\">Miss Harmoney  </option>\n\t\t\t\t\t\t\t<option value=\"29666\">Miss Hawra  Al Saffar</option>\n\t\t\t\t\t\t\t<option value=\"25461\">Dr Haya Vhor Bhai</option>\n\t\t\t\t\t\t\t<option value=\"25608\">Dr Haydra Facial  </option>\n\t\t\t\t\t\t\t<option value=\"25609\">Dr Haytham  Al Zyadat</option>\n\t\t\t\t\t\t\t<option value=\"143\">Dr Haytham  Elsayed</option>\n\t\t\t\t\t\t\t<option value=\"26718\">Dr Heba  Ahmed</option>\n\t\t\t\t\t\t\t<option value=\"25902\">Dr Heba Fathi Abusamra</option>\n\t\t\t\t\t\t\t<option value=\"26805\">Dr HEBAH  YOUNES</option>\n\t\t\t\t\t\t\t<option value=\"26581\">Dr HEYAM  ALHASAN</option>\n\t\t\t\t\t\t\t<option value=\"27805\">Dr Hisham  Omar</option>\n\t\t\t\t\t\t\t<option value=\"25905\">Dr Hnadee Mhmd Nanwa</option>\n\t\t\t\t\t\t\t<option value=\"25906\">Dr Hossameldeen Gamal Elsheemy</option>\n\t\t\t\t\t\t\t<option value=\"29632\">Dr Huda  </option>\n\t\t\t\t\t\t\t<option value=\"31386\">Dr Huda  Al Ali</option>\n\t\t\t\t\t\t\t<option value=\"29595\">Dr Huda  Hasson</option>\n\t\t\t\t\t\t\t<option value=\"28166\">Dr Huda  Qandeel</option>\n\t\t\t\t\t\t\t<option value=\"27885\">Dr Hudda  Qandeel</option>\n\t\t\t\t\t\t\t<option value=\"50\">Dr Husayn Ahmad Burhan</option>\n\t\t\t\t\t\t\t<option value=\"25895\">Dr Hussam Mohammed Alsududi</option>\n\t\t\t\t\t\t\t<option value=\"25607\">Dr I-Lipo  </option>\n\t\t\t\t\t\t\t<option value=\"29640\">Dr Ibrahim  Bakeer</option>\n\t\t\t\t\t\t\t<option value=\"27080\">Dr IBRAHIM EL ADGHAM</option>\n\t\t\t\t\t\t\t<option value=\"320\">Dr Ibrahim Yousef Badrasawi</option>\n\t\t\t\t\t\t\t<option value=\"30906\">Dr Ibtihal  Al Amer</option>\n\t\t\t\t\t\t\t<option value=\"27499\">Dr Imadedin Ahmad Baghdadi</option>\n\t\t\t\t\t\t\t<option value=\"29745\">Dr Iman  Al-Qaishawi</option>\n\t\t\t\t\t\t\t<option value=\"29650\">Dr Iman Nour Udeen</option>\n\t\t\t\t\t\t\t<option value=\"26801\">Dr ISLAM MOHAMMED MURTADHA</option>\n\t\t\t\t\t\t\t<option value=\"33625\">Dr Islam Munir Ali</option>\n\t\t\t\t\t\t\t<option value=\"17\">Dr Jaber Mirza Mirza</option>\n\t\t\t\t\t\t\t<option value=\"29657\">Dr Javera  </option>\n\t\t\t\t\t\t\t<option value=\"30305\">Dr javeriya  nahen</option>\n\t\t\t\t\t\t\t<option value=\"130\">Dr JaveriyaÃ  Nahin</option>\n\t\t\t\t\t\t\t<option value=\"33765\">Dr Jerman  al qahtani</option>\n\t\t\t\t\t\t\t<option value=\"28445\">Dr Jomana  Alelaiw</option>\n\t\t\t\t\t\t\t<option value=\"28266\">Dr Kawther  Al-Hajji</option>\n\t\t\t\t\t\t\t<option value=\"29589\">Dr Keran  Shindy</option>\n\t\t\t\t\t\t\t<option value=\"26326\">Dr Laila Hussein  Ismail Alsomali</option>\n\t\t\t\t\t\t\t<option value=\"27106\">Dr LAMA WASFI SALAMAH ALMASRI</option>\n\t\t\t\t\t\t\t<option value=\"26582\">Dr LINA  ALABADI</option>\n\t\t\t\t\t\t\t<option value=\"29592\">Dr Maged  Suliman</option>\n\t\t\t\t\t\t\t<option value=\"29649\">Dr Maha  Hessen</option>\n\t\t\t\t\t\t\t<option value=\"29746\">Dr Maha  Hussain</option>\n\t\t\t\t\t\t\t<option value=\"31127\">Dr Mahdi  Ghazwi</option>\n\t\t\t\t\t\t\t<option value=\"26798\">Dr MAHMOUD  ABDULMAWLA</option>\n\t\t\t\t\t\t\t<option value=\"31905\">Dr Mahmoud  elati</option>\n\t\t\t\t\t\t\t<option value=\"33905\">Dr Mahmoud  Fayed</option>\n\t\t\t\t\t\t\t<option value=\"27565\">Dr Mahmoud  Mabrouk</option>\n\t\t\t\t\t\t\t<option value=\"26185\">Dr Mahmoud  Sayed</option>\n\t\t\t\t\t\t\t<option value=\"29888\">Dr Mahmoud  Shaheen</option>\n\t\t\t\t\t\t\t<option value=\"71\">Dr Mahmud Alshrbyny Mohammad Alshrbyny</option>\n\t\t\t\t\t\t\t<option value=\"151\">Dr Mai  Hussein</option>\n\t\t\t\t\t\t\t<option value=\"28345\">Dr Mai Fahad Al-Jishi</option>\n\t\t\t\t\t\t\t<option value=\"70\">Dr Mai Mohammad Abdalraufe Salman</option>\n\t\t\t\t\t\t\t<option value=\"25909\">Dr Maiy AL Atyah</option>\n\t\t\t\t\t\t\t<option value=\"26692\">Dr MALEEHA  ZAHOOR</option>\n\t\t\t\t\t\t\t<option value=\"33585\">Dr Malek  Almutairi</option>\n\t\t\t\t\t\t\t<option value=\"26806\">Dr MAMDOUH  JAMEA</option>\n\t\t\t\t\t\t\t<option value=\"29591\">Dr Manar  </option>\n\t\t\t\t\t\t\t<option value=\"29985\">Dr Mansour  Al Ali</option>\n\t\t\t\t\t\t\t<option value=\"308\">Dr Marwa  Ahmed</option>\n\t\t\t\t\t\t\t<option value=\"32385\">Dr Marwa  Aldahri</option>\n\t\t\t\t\t\t\t<option value=\"29725\">Dr Marwa  Bader</option>\n\t\t\t\t\t\t\t<option value=\"135\">Dr Marwah  Sharaf</option>\n\t\t\t\t\t\t\t<option value=\"129\">Dr MarwaÂ&nbsp;  Mohamed</option>\n\t\t\t\t\t\t\t<option value=\"27887\">Dr may  abdullah</option>\n\t\t\t\t\t\t\t<option value=\"215\">Dr May  Alzuwawi</option>\n\t\t\t\t\t\t\t<option value=\"29651\">Dr May  Attia</option>\n\t\t\t\t\t\t\t<option value=\"25911\">Dr Mayada  Elfakharany</option>\n\t\t\t\t\t\t\t<option value=\"26696\">Dr MAZEN MUSLIH  DAGHMASH</option>\n\t\t\t\t\t\t\t<option value=\"25898\">Dr Medhat Osama Mohammed</option>\n\t\t\t\t\t\t\t<option value=\"26929\">Dr Medical  CheckUp</option>\n\t\t\t\t\t\t\t<option value=\"30765\">Dr Moatz  Mohamed</option>\n\t\t\t\t\t\t\t<option value=\"32365\">Dr Moaz  Alhaj</option>\n\t\t\t\t\t\t\t<option value=\"32445\">Dr Moaz  Haj</option>\n\t\t\t\t\t\t\t<option value=\"29596\">Dr Mohamed  Abdul Bary</option>\n\t\t\t\t\t\t\t<option value=\"31525\">Dr Mohamed  AL Nahaas</option>\n\t\t\t\t\t\t\t<option value=\"307\">Dr Mohamed  Albakor</option>\n\t\t\t\t\t\t\t<option value=\"301\">Dr Mohamed  Alhajissa</option>\n\t\t\t\t\t\t\t<option value=\"26338\">Dr Mohamed  azzat alhaffar</option>\n\t\t\t\t\t\t\t<option value=\"305\">Dr Mohamed  Hamadnah</option>\n\t\t\t\t\t\t\t<option value=\"29633\">Mr Mohamed  Hamedo</option>\n\t\t\t\t\t\t\t<option value=\"104\">Dr Mohamed  Hammam</option>\n\t\t\t\t\t\t\t<option value=\"27685\">Dr Mohamed  Othman</option>\n\t\t\t\t\t\t\t<option value=\"25480\">Dr Mohamed  Sabri</option>\n\t\t\t\t\t\t\t<option value=\"27786\">Dr Mohamed  sabry</option>\n\t\t\t\t\t\t\t<option value=\"217\">Dr Mohamed  Sameir</option>\n\t\t\t\t\t\t\t<option value=\"26328\">Dr Mohamed Hosam  AHEMD  DWYDREE</option>\n\t\t\t\t\t\t\t<option value=\"85\">Dr Mohamed Matbouly Abdelmoghny</option>\n\t\t\t\t\t\t\t<option value=\"218\">Dr Mohamed Sabry Abdelhalim Mohamed</option>\n\t\t\t\t\t\t\t<option value=\"25896\">Dr Mohamed Sayed Abouelseoud</option>\n\t\t\t\t\t\t\t<option value=\"113\">Dr Mohammad  Baiomy</option>\n\t\t\t\t\t\t\t<option value=\"31665\">Dr MOHAMMED  AL NEHAS</option>\n\t\t\t\t\t\t\t<option value=\"26445\">Dr Mohammed  Alami</option>\n\t\t\t\t\t\t\t<option value=\"29588\">Dr Mohammed  Hamedo</option>\n\t\t\t\t\t\t\t<option value=\"26807\">Dr MOHAMMED  HASSAN</option>\n\t\t\t\t\t\t\t<option value=\"31088\">Dr Mohammed  Mahdi</option>\n\t\t\t\t\t\t\t<option value=\"26545\">Dr Mohammed  mosher</option>\n\t\t\t\t\t\t\t<option value=\"27045\">Dr Mohammed  Osama</option>\n\t\t\t\t\t\t\t<option value=\"26146\">Dr Mohammed  Salman</option>\n\t\t\t\t\t\t\t<option value=\"27446\">Dr Mohammed  Toukhi</option>\n\t\t\t\t\t\t\t<option value=\"25460\">Dr Mohammed Abdullah Muthana</option>\n\t\t\t\t\t\t\t<option value=\"26686\">Dr MOHAMMED ADEL  ELSAYED</option>\n\t\t\t\t\t\t\t<option value=\"27104\">Dr MOHAMMED WASFI ALMASRI</option>\n\t\t\t\t\t\t\t<option value=\"27725\">Dr Mohanad  Salama</option>\n\t\t\t\t\t\t\t<option value=\"26145\">Dr Mohanad  Salamah</option>\n\t\t\t\t\t\t\t<option value=\"29644\">Dr Mohaned  Salama</option>\n\t\t\t\t\t\t\t<option value=\"58\">Dr Mohmed Abdelmonem Mostafa</option>\n\t\t\t\t\t\t\t<option value=\"29656\">Dr Mona  Alzazo</option>\n\t\t\t\t\t\t\t<option value=\"33946\">Dr Mona  Othman</option>\n\t\t\t\t\t\t\t<option value=\"25340\">Mr Mona Al Haj</option>\n\t\t\t\t\t\t\t<option value=\"33685\">Dr Mostafa  Hamed</option>\n\t\t\t\t\t\t\t<option value=\"29642\">Mr Motaz  AllaUdden</option>\n\t\t\t\t\t\t\t<option value=\"28265\">Dr Motaz  Mohammed</option>\n\t\t\t\t\t\t\t<option value=\"309\">Dr Moustafa  Khieraldeen</option>\n\t\t\t\t\t\t\t<option value=\"29653\">Dr Moustafa  Nazih</option>\n\t\t\t\t\t\t\t<option value=\"29466\">Dr Muhammad  Tashkandi</option>\n\t\t\t\t\t\t\t<option value=\"33065\">Dr Mujtaba  Albaqal</option>\n\t\t\t\t\t\t\t<option value=\"32386\">Dr Munira  AlAnzi</option>\n\t\t\t\t\t\t\t<option value=\"28105\">Dr Musab Zaroor </option>\n\t\t\t\t\t\t\t<option value=\"29630\">Dr Mustafa  Al Hamran</option>\n\t\t\t\t\t\t\t<option value=\"25462\">Dr Mustafa  Sami</option>\n\t\t\t\t\t\t\t<option value=\"31125\">Dr mustafa  Tarqaji</option>\n\t\t\t\t\t\t\t<option value=\"43\">Dr Mustafa Mohammed Alsaeed Mohammed</option>\n\t\t\t\t\t\t\t<option value=\"26547\">Dr NAEL  ANWAR</option>\n\t\t\t\t\t\t\t<option value=\"110\">Dr Naglaa  Hashesh</option>\n\t\t\t\t\t\t\t<option value=\"116\">Dr Nahla  Elsayed</option>\n\t\t\t\t\t\t\t<option value=\"26690\">Dr NAHLA MAHMOUD MOHAMED</option>\n\t\t\t\t\t\t\t<option value=\"26800\">Dr NAJLA  ALI</option>\n\t\t\t\t\t\t\t<option value=\"31385\">Dr Narjes  Aldarwish</option>\n\t\t\t\t\t\t\t<option value=\"124\">Mrs Nawal  Alwadaey</option>\n\t\t\t\t\t\t\t<option value=\"28145\">Dr Nemat Mousa Ali</option>\n\t\t\t\t\t\t\t<option value=\"29345\">Dr Nida  AlSadah</option>\n\t\t\t\t\t\t\t<option value=\"26441\">Dr Noha  Elsayed</option>\n\t\t\t\t\t\t\t<option value=\"30966\">Dr Nora  Alsadah</option>\n\t\t\t\t\t\t\t<option value=\"25694\">Dr Norah  Abdul aziz</option>\n\t\t\t\t\t\t\t<option value=\"25636\">Dr Ola  Zayed</option>\n\t\t\t\t\t\t\t<option value=\"322\">Dr Ola Salem Yaqoub Gamouh</option>\n\t\t\t\t\t\t\t<option value=\"29645\">Dr Omar  Ali</option>\n\t\t\t\t\t\t\t<option value=\"27827\">Dr Omar  Bashter</option>\n\t\t\t\t\t\t\t<option value=\"27605\">Dr Omnia  Lutfi</option>\n\t\t\t\t\t\t\t<option value=\"310\">Dr Rafaa M.Talal M.Salim  Assfari</option>\n\t\t\t\t\t\t\t<option value=\"26310\">Dr Rafif Mohammad Alaswad</option>\n\t\t\t\t\t\t\t<option value=\"26804\">Dr RAGDAA  ALRAWENI</option>\n\t\t\t\t\t\t\t<option value=\"28745\">Dr Raghib  Al-hajawy</option>\n\t\t\t\t\t\t\t<option value=\"210\">Dr Raghib Wasfy Alhajawy</option>\n\t\t\t\t\t\t\t<option value=\"30646\">Dr Rahma  </option>\n\t\t\t\t\t\t\t<option value=\"25900\">Dr Rahmah Hassan ALDaboos</option>\n\t\t\t\t\t\t\t<option value=\"432\">Mr Ram Faisalyah  </option>\n\t\t\t\t\t\t\t<option value=\"214\">Dr Ramdan Mohamed Tawfiq  Ali</option>\n\t\t\t\t\t\t\t<option value=\"27886\">Dr RAMIA  RAJENDRAN</option>\n\t\t\t\t\t\t\t<option value=\"27079\">Dr RANIA SABER ALSSAYIS</option>\n\t\t\t\t\t\t\t<option value=\"25894\">Dr Raniya Alsaeed Sayah</option>\n\t\t\t\t\t\t\t<option value=\"26451\">Dr Rasha  Elnoby</option>\n\t\t\t\t\t\t\t<option value=\"29643\">Dr Rasha  Mohamed</option>\n\t\t\t\t\t\t\t<option value=\"212\">Dr Rasha Mohammad Mohammad Hazen</option>\n\t\t\t\t\t\t\t<option value=\"219\">Dr Rashed  Aljamah</option>\n\t\t\t\t\t\t\t<option value=\"26448\">Dr Rawda  Alnabahin</option>\n\t\t\t\t\t\t\t<option value=\"27826\">Dr Reda  Zaki</option>\n\t\t\t\t\t\t\t<option value=\"27726\">Dr Reem  AlKhater</option>\n\t\t\t\t\t\t\t<option value=\"26440\">Dr Reem  Qassem</option>\n\t\t\t\t\t\t\t<option value=\"78\">Dr Reem Abdelkawy Hassan Khater</option>\n\t\t\t\t\t\t\t<option value=\"115\">Dr Rehab  Tolba</option>\n\t\t\t\t\t\t\t<option value=\"29631\">Dr Reham  Bioumy</option>\n\t\t\t\t\t\t\t<option value=\"25400\">Dr Reham  Saeed</option>\n\t\t\t\t\t\t\t<option value=\"29597\">Dr Rema  </option>\n\t\t\t\t\t\t\t<option value=\"28125\">Dr Remon Ajram </option>\n\t\t\t\t\t\t\t<option value=\"26334\">Dr Rhona Montenegro  Sonsona</option>\n\t\t\t\t\t\t\t<option value=\"30286\">Dr Roaa  Ismael</option>\n\t\t\t\t\t\t\t<option value=\"315\">Dr Romisah Miftah Abdulaleem</option>\n\t\t\t\t\t\t\t<option value=\"323\">Dr Rouhi Syed Adnan</option>\n\t\t\t\t\t\t\t<option value=\"30006\">Dr Saba  Sflo</option>\n\t\t\t\t\t\t\t<option value=\"26331\">Dr Sabiha Banu  Mahboob</option>\n\t\t\t\t\t\t\t<option value=\"26444\">Dr Sadeq  Qodceiah</option>\n\t\t\t\t\t\t\t<option value=\"30407\">Miss Safa  Taha</option>\n\t\t\t\t\t\t\t<option value=\"32666\">Dr safa  zaghloul</option>\n\t\t\t\t\t\t\t<option value=\"30710\">Dr Sahab  Najeeb</option>\n\t\t\t\t\t\t\t<option value=\"26579\">Dr SAHAR  ALSTOHI</option>\n\t\t\t\t\t\t\t<option value=\"68\">Mrs Sahr Saleh Abdulkareem Gamaan</option>\n\t\t\t\t\t\t\t<option value=\"25463\">Dr Sajida Khan Abdul</option>\n\t\t\t\t\t\t\t<option value=\"29665\">Miss Salaha  Asiri</option>\n\t\t\t\t\t\t\t<option value=\"27105\">Dr SALAMAH WASFI ALMASRY</option>\n\t\t\t\t\t\t\t<option value=\"25904\">Dr Salima Shaaban Eladly</option>\n\t\t\t\t\t\t\t<option value=\"29658\">Dr Salwa  Dhafar</option>\n\t\t\t\t\t\t\t<option value=\"26450\">Dr Salwa  Zafar</option>\n\t\t\t\t\t\t\t<option value=\"26525\">Dr Samah ElBadrawi  </option>\n\t\t\t\t\t\t\t<option value=\"27512\">Dr Samar  Alati</option>\n\t\t\t\t\t\t\t<option value=\"29652\">Dr Samar  Zaki</option>\n\t\t\t\t\t\t\t<option value=\"311\">Dr Samar Ali Jameel  Hassan</option>\n\t\t\t\t\t\t\t<option value=\"304\">Dr sami abdulrauof zaablawi</option>\n\t\t\t\t\t\t\t<option value=\"25903\">Dr Sarah Majdy Hassan</option>\n\t\t\t\t\t\t\t<option value=\"25\">Dr Sarya Hasan Hmdw Hamdo Ali Hindawi</option>\n\t\t\t\t\t\t\t<option value=\"26165\">Dr Shadi  Alsomadi</option>\n\t\t\t\t\t\t\t<option value=\"29605\">Dr Shaima  Samir</option>\n\t\t\t\t\t\t\t<option value=\"26685\">Dr SHAIMAA SAMER ABD ELFATAH RAMDEN</option>\n\t\t\t\t\t\t\t<option value=\"26329\">Dr Shaoeb  Khan</option>\n\t\t\t\t\t\t\t<option value=\"26580\">Dr SHEREN  SEDEQ</option>\n\t\t\t\t\t\t\t<option value=\"321\">Dr Shihab Anwar Kader</option>\n\t\t\t\t\t\t\t<option value=\"26688\">Dr SHIMAA MABROUK MOHAMED ALSODANY</option>\n\t\t\t\t\t\t\t<option value=\"26693\">Dr SHYMA  MUHAMMAD DIAB</option>\n\t\t\t\t\t\t\t<option value=\"27075\">Dr SOMAYA ELSAYED ELMAHALAWY</option>\n\t\t\t\t\t\t\t<option value=\"316\">Dr Sondos Jaafar Alawamy</option>\n\t\t\t\t\t\t\t<option value=\"33626\">Dr souaad  alzamaar</option>\n\t\t\t\t\t\t\t<option value=\"29639\">Dr Sozan  </option>\n\t\t\t\t\t\t\t<option value=\"25606\">Mrs Spectra  </option>\n\t\t\t\t\t\t\t<option value=\"4\">Dr Spiro Hanna Asbr Shuhud</option>\n\t\t\t\t\t\t\t<option value=\"26694\">Dr TALAL ABDULLATIF  AKKARI</option>\n\t\t\t\t\t\t\t<option value=\"69\">Dr Thaminah Humayun Humayun</option>\n\t\t\t\t\t\t\t<option value=\"54\">Dr Thany Mahmud Abdalhamed Ahmad</option>\n\t\t\t\t\t\t\t<option value=\"317\">Dr Thekryat Majdi Baker Badrasawi</option>\n\t\t\t\t\t\t\t<option value=\"26336\">Dr WAEL DEB  ALAHMADALMBARK</option>\n\t\t\t\t\t\t\t<option value=\"131\">Dr Wafa&nbsp;  Ghoul</option>\n\t\t\t\t\t\t\t<option value=\"27865\">Dr Walaa  Ghonim</option>\n\t\t\t\t\t\t\t<option value=\"30028\">Dr Walid  Al-Tuwairqi</option>\n\t\t\t\t\t\t\t<option value=\"26325\">Dr Yasser  Agameya</option>\n\t\t\t\t\t\t\t<option value=\"26333\">Dr YOMNA AHMED  ABDELAZIZ BARAKAT</option>\n\t\t\t\t\t\t\t<option value=\"102\">Dr Yousef  Abdi</option>\n\t\t\t\t\t\t\t<option value=\"27107\">Dr Yousef esaa Alburaym</option>\n\t\t\t\t\t\t\t<option value=\"25907\">Dr Zaher Mohamad Khachan Jazieh</option>\n\t\t\t\t\t\t\t<option value=\"28305\">Dr Zahraa  El Zaher</option>\n\t\t\t\t\t\t\t<option value=\"28527\">Dr Zainab  Al Nassir</option>\n\t\t\t\t\t\t\t<option value=\"25910\">Dr Zayad  Sylan</option>\n\t\t\t\t\t\t\t<option value=\"29637\">Mr Zohair  Shalbi</option>\n\t\t\t\t\t\t\t<option value=\"30905\">Dr Zuhair  Abbas</option>\n\t\t\t\t\t\t</select>\n                    </div>\n\t\t\t    \t<div class=\"col-md-4 pad-0\" >\n                    <label class = \"col-md-6\">Speciality</label>\n                    <input  type=\"text\" name=\"specialityByDoctorId\"  formControlName  = \"specialityByDoctorId\"   class = \"col-md-6 rounded shadow\">\n                    </div>\n              \t</div>\n                            \n           \t\t<div class = \"row\">\n              \t\t<div class=\"col-md-4 pad-0\">\n                   \t \t<label class = \"col-md-6\">Ref. Hospital Patient No</label>\n                    \t<input type=\"text\" name=\"refHospitalPatientNoId\" formControlName = \"refHospitalPatientNoId\" class=\"col-md-6 rounded shadow\" >\n               \t\t</div>\n\t\t\t   \t\t<div class=\"col-md-4 pad-0\">\n                    \t<label class = \"col-md-6\" >Voucher</label>\n                   \t\t<input  type=\"text\" name=\"Voucher\"  formControlName = \"voucher\" class=\"col-md-6 rounded shadow\" >\n                   \t\t\n               \t\t</div>\n\t\t\t   \t\t<div class=\"col-md-4 pad-0\">\n                    \t<label class=\"col-sm-6 \">Event</label>\n                    \t<input class=\"suggetionbox col-md-6 rounded shadow\" formControlName = \"event\">\n               \t\t</div>\n             \t</div>\n\t\t\t  \t<div class=\"row\">\n\t\t\t \t\t<div class=\"col-md-4 pad-0\">\n                    \t<label class=\"col-sm-6 control-label pad-1\">Email/SMS</label>\n                    \t<input id=\"emailOrSms\" type=\"text\" name=\"emailOrSms\" formControlName = \"emailOrSms\" class=\"col-md-6 rounded shadow\" >\n               </div>\n\t\t\t\n\t\t\t    <div class=\"col-md-4 pad-0\">\n                    <label class=\"col-md-6 control-label \">Friends/Family</label>\n                    <input  type=\"text\" name=\"FriendsFamilies\" formControlName = \"friendsFamilies\" class=\"col-md-6 rounded shadow\" >\n                  \n               </div>\n\t\t\t    <div class=\"col-md-4 pad-0\">\n                    <label class=\"col-md-6 control-label \">Staff Refferal-Staff Name</label>\n                    <input type=\"text\" name=\"Staff\" formControlName = \"staff\" class=\"col-md-6 rounded shadow\" >\n               </div>\n             </div>\n            <div class=\"row\">\n\t\t\t\t<div class=\"col-md-4 pad-0\">\n                    <label class=\"col-sm-6 \">Media</label>\n                    <select  name=\"media\" formControlName = 'media' class=\" col-md-6 rounded shadow\">\n                    <option value = \"1\">select</option>\n                    </select>\n               </div>\n\t\t\t    <div class=\"col-md-4 pad-0\">\n\t\t\t\t\t <label class=\"col-sm-6\">Online Media</label>\n\t\t\t\t\t<select  name=\"onlineMedia\" formControlName = \"onlineMedia\" class=\"col-md-6 rounded shadow\" >\n\t\t\t\t\t<option value = \"1\">select</option>\n\t\t\t\t\t</select>\n\t\t\t    </div>\n\t\t\t     <div class=\"col-md-4 pad-0\">\n                    <label class=\"col-sm-6 \">Other, Please Specify</label>\n                    <input  type=\"text\" name=\"Other\" formControlName = \"other\" class=\"col-sm-6 rounded shadow\" >\n                    \n                </div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-4 pad-0\">\n                    <label class=\"col-sm-6 \">Internet</label>\n                    <select  name=\"internet\" formControlName = \"internet\" class=\"col-md-6 rounded shadow\" >\n                    <option value = \"1\">select</option>\n                    </select> \n               </div>\n\t\t\t   <div class=\"col-md-4 pad-0\">\n                    <label class=\"col-sm-6 \">Education</label>\n                    <select  name=\"education\" formControlName = \"education\"  class=\"col-md-6 rounded shadow\" >\n                    \t<option value=\"\">-- Select --</option>\n\t\t\t\t\t\t<option >Nursery</option>\n\t\t\t\t\t\t<option >University</option>\n\t\t\t\t\t\t<option >School</option>\n\t\t\t\t\t</select> \n               </div>\n\t\t\t   <div class=\"col-md-4 pad-0\">\n                    <label class=\"col-sm-6 \">EAP</label>\n                    <textarea  name=\"eap\" formControlName = \"eap\" class=\"col-md-6 rounded shadow\" cols=\"25\" rows=\"1\"></textarea>\n                    \n               </div>\n\t\t\t   </div>\n  \t\t</div>\n  \t\t<hr>\n  \t\t\n  \t\t<!--  Third navigation starts here -->\n  \t\t<nav class=\"navbar navbar-dark bg-info justify-content-end\" >\n\t\t\t<label class = \"justify-content-start\">Patient consent form : </label>\n    \t\t<button type=\"button\" class=\"btn btn-outline-dark rounded-circle\" (click)=\"pcf=!pcf\" aria-controls=\"collapseExample\"> \n    \t\t\t<i class=\"fa fa-arrow-circle-right\"></i>\n    \t\t</button>\n  \t\t</nav>\n  \t\t<div class=\"col-md-12 bg-light\" [ngbCollapse] = \"pcf\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-6 pad-0\">\n\t\t\t\t\t<label class=\"col-md-6 pad-1 \">Consent Form Name</label>\n\t\t\t\t\t<input type=\"text\" name=\"consentform\" formControlName = \"consentform\"  class=\"rounded shadow\" >\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 pad-0\">\n\t\t\t\t\t<div class = \"row\">\n\t\t\t\t\t<label >Upload patient Consent Form</label>\n\t\t\t\t\t<div class = \"h-190 col-md-4 bg-light\">\n\t\t\t\t\t<input type = \"file\"  name = \"uploadpc\">\n\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-12 pad-0 \">\n\t\t\t\t<table class=\"table rounded shadow\"  border=\"1\">\n\t\t\t\t<colgroup span=\"4\"></colgroup>\n\t\t\t\t\t<thead >\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\tDownload\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t<div >Document Name\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t<div>File Name\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t<div>Remove\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tfoot>\n\t\t\t\t\t<tbody >\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\t\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\t\n\t\t</div>\n\t<input type = \"button\" value = \"PhotoCapture\" class = \"btn btn-primary\">\n\t&nbsp;<input type = \"button\" value = \"back\" class = \"btn btn-primary\" routerLink = \"/registration\">\n   &nbsp;<button type = \"submit\" [disabled]= \"!regform.valid\" class = \"btn btn-primary\"> Register</button>\n   \n   </form>\n    \n    \n    </div>\n<div [hidden]=\"!submitted\">\n\t<h4>You submitted successfully!</h4>\n\t<!-- <button class=\"btn btn-success\" (click)=\"newEmployee()\">Add</button> -->\n</div>\n\n  \n   \n    \n                ";
      /***/
    },

    /***/
    88418:
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient/components/patient-list/patient-list.component.html ***!
      \*******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [@routerTransition]>\r\n\t<app-page-header [mainhead]=\"'Registration'\"\r\n\t\t[mainheadLink]=\"'/registration'\" [heading]=\"'Patient-list'\"\r\n\t\t[icon]=\"'fa-bar-chart-o'\"></app-page-header>\r\n</div>\r\n<div class = \"card\">\r\n\t<div class = \"card-header bg-dark text-white\">\r\n\t\t<div class = \"row\">\r\n\t\t\t<div class = \"col-md-6 justify-content-left\">\r\n\t\t\t\tRegistered Patient List : &nbsp;\r\n\t\t\t\t<input type = \"search\" class = \"col-md-6  shadow\" [(ngModel)] = \"name\">&nbsp;\r\n\t\t\t</div>\r\n\t\t\t<div class = \"col-md-6  text-right\">\r\n\t\t\t\tAdd to Favorite\r\n\t\t\t\t<button class = 'btn text-light'><img src = \"assets\\images\\page_white_acrobat.png\">Pdf</button>\r\n\t\t\t\t<button class = 'btn text-light'><img src = \"assets\\images\\page_white_excel.png\">Excel</button>\r\n\t\t\t\t<button class = 'btn text-light'><a routerLink = \"/registration/createpatient\"><img src = \"assets\\images\\page_white_add.png\">New+</a></button>\r\n\t\t\t\t<button class = 'btn text-light'><img src = \"assets\\images\\search.png\">Search</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class = \"card-body p-0 m-0\">\r\n\t\t<table class = \"table \" >\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>\r\n\t\t\t\t\t\tPatient Details\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th>\r\n\t\t\t\t\t\tMobile No\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th>\r\n\t\t\t\t\t\tPatient Note\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th>\r\n\t\t\t\t\t\tRegistration Date\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th>\r\n\t\t\t\t\t\tRegistered site\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th>\r\n\t\t\t\t\t\tAction\r\n\t\t\t\t\t</th>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr *ngFor = \"let patient of patientList | search: name |slice: (page-1) * pageSize : page * pageSize\">\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t{{patient.firstName}} \r\n\t\t\t\t\t{{patient.middleName}}\r\n\t\t\t\t\t{{patient.lastName}},<br>From -\r\n\t\t\t\t\t{{patient.patientAddress.address}},\r\n\t\t\t\t\t{{patient.patientAddress.state.stateName}},\r\n\t\t\t\t\t{{patient.patientAddress.state.country.countryName}},\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t{{patient.mobile}}\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td></td>\r\n\t\t\t\t\t<td>{{patient.registrationDate}}</td>\r\n\t\t\t\t\t<td>{{patient.onlineMedia}}</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<button class = \"btn btn-dark btn-sm\" (click) =\"updatePatient(patient)\" ><i class = \"fa fa-edit fa-1x\"></i></button>\r\n\t\t\t\t\t\t&nbsp;<button class = \"btn btn-success btn-sm\">Appointment</button>\r\n\t\t\t\t\t\t<button class = \"btn btn-danger\" (click) =\"deletePatient(patient.patientId)\" hidden>Delete</button></td>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t</table>\r\n\t</div>\r\n\t<div class = \"card-footer bg-info p-0 m-0 \" >\r\n\t\t<div class = \"row justify-content-center\">\r\n\t\t\t<ngb-pagination [collectionSize]=\"len\" [(page)]=\"page\" [pageSize] = \"pageSize\"  [rotate]=\"true\"  [ellipses]=\"false\" class = \"col-md-10\"></ngb-pagination>\r\n\t\t\t<a routerLink = \"/registration\" class = \"m-2\"><button class = \"btn-warning\" >Back to master</button></a>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n\r\n";
      /***/
    },

    /***/
    94645:
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient/patient.component.html ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = " <div class=\"row\">\n        <div class=\"col-md-4 \">\n            <app-stat [bgClass]=\"'primary'\" [count]=\"01\" [icon]=\"'fa-edit'\" \n            [label]=\"'Create Patient'\" [outcomeLink]=\"'registration/createpatient'\" [data] = \"'Create Patient'\"></app-stat>\n        </div>\n          <div class=\"col-md-4 \">\n            <app-stat [bgClass]=\"'secondary'\" [count]=\"02\" [icon]=\"'fa-tasks'\" [label]=\"'Patient List'\" [data] = \"'to see PatientList'\" [outcomeLink]=\"'registration/patientlist'\"></app-stat>\n        </div>\n         <div class=\"col-md-4 \">\n            <app-stat [bgClass]=\"'success'\" [count]=\"03\" [icon]=\"'fas fa-bed'\" [label]=\"'Emergency'\" [data] = \"'Register Emergency '\" [outcomeLink]=\"'registration/emergencyregistration'\"></app-stat>\n        </div>\n</div>\n";
      /***/
    },

    /***/
    90288:
    /*!********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pre-register-patient/components/add-pre-register-patient/add-pre-register-patient.component.html ***!
      \********************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [@routerTransition]>\n\t<app-page-header [mainhead]=\"'Pre-Register Patient'\" [mainheadLink]=\"'/preRegistration'\"\n\t\t[heading]=\"'Pre-registration'\" [icon]=\"'fa-bar-chart-o'\"></app-page-header>\n\n</div>\n<div class=\"container-fluid p-0 m-0 \">\n\t<div class=\"card \">\n\t\t<div class=\"card-head \">\n\t\t\t<nav class=\"navbar bg-dark text-white\">\n\t\t\t\t<h2>Add Pre-registration</h2>\n\t\t\t\t<button routerLink=\"/preRegistration/pre-register-patient-list\"\n\t\t\t\t\tclass=\"btn btn-success text-white\"><label>Pre-registration List</label></button>\n\t\t\t</nav>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t<form [formGroup]=\"preRegistrationForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t<label class=\"col-md-3\">PreRegistration Type</label>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"preRegnType\">\n\t\t\t\t\t\t\t<option [ngValue]=\"null\">-- Select --</option>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let lookup of lookupEntityList\">\n\t\t\t\t\t\t\t\t<option *ngIf=\"lookup.category.categoryId == 69\" [ngValue]=\"lookup\">\n\t\t\t\t\t\t\t\t\t{{lookup.lookupValue}}</option>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<label class=\"col-md-3 \">PreRegistration No.</label>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<input style=\"margin-bottom:5px\" type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\tformControlName=\"preRegistrationNo\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<label class=\"col-md-3\">PreRegistration Date</label>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<input style=\"margin-top:5px\" type=\"date\" class=\"form-control\" formControlName=\"queueDate\" />\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<label class=\"col-md-3\">Prefix</label>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"patientPrefix\">\n\t\t\t\t\t\t\t<option [ngValue]=\"null\">-- Select --</option>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let prefix of prefixList\">\n\t\t\t\t\t\t\t\t<option [ngValue]=\"prefix\">{{prefix.prefix}}</option>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<label class=\"col-md-3\">FirstName</label>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<input style=\"margin-top:5px\" style=\"margin-bottom:5px\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\tformControlName=\"firstName\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<label class=\"col-md-3\">Middle Name</label>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<input style=\"margin-top:5px\" style=\"margin-bottom:5px\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\tformControlName=\"middleName\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<label class=\"col-md-3\">Last Name</label>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<input style=\"margin-top:5px\" style=\"margin-bottom:5px\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\tformControlName=\"lastName\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<label class=\"col-md-3\">Gender</label>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"gender\">\n\t\t\t\t\t\t\t<option [ngValue]=\"null\">-- Select --</option>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let lookup of lookupEntityList\">\n\t\t\t\t\t\t\t\t<option *ngIf=\"lookup.category.categoryId == 2\" [ngValue]=\"lookup\">\n\t\t\t\t\t\t\t\t\t{{lookup.lookupValue}}</option>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<label class=\"col-md-3\">Age</label>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 mr-0 pr-0\">\n\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"number\" placeholder = \"Age in Year\" formControlName=\"age\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<label class=\"col-md-3\">DOB(dd-mm-yyyy)</label>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<input style=\"margin-top:5px\" style=\"margin-bottom:5px\" type=\"date\" class=\"form-control\"\n\t\t\t\t\t\t\tformControlName=\"dob\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<label class=\"col-md-3\">Nationality</label>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"patientAddress\">\n\t\t\t\t\t\t\t<option [ngValue]=\"null\">-- Select --</option>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let patientAddress of patientAddressList\">\n\t\t\t\t\t\t\t\t<option [ngValue]=\"patientAddress\">{{patientAddress.country.countryName}}</option>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<label class=\"col-md-3\">Phone No.</label>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<input style=\"margin-top:5px\" style=\"margin-bottom:5px\" type=\"number\" class=\"form-control\"\n\t\t\t\t\t\t\tformControlName=\"telephoneNo\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<label class=\"col-md-3\">Language</label>\n\t\t\t\t\t<div class=\"col-md-3\" style = \"font-size: 18px;\">\n\t\t\t\t\t\t<input class = \"col-md-3\" type=\"radio\" formControlName=\"language\"\n\t\t\t\t\t\t\t[value]=\"'English'\"><label>English</label> \n\t\t\t\t\t\t<input type=\"radio\" class = \"col-md-3\" [value]=\"'Arabic'\" formControlName=\"language\"><label>Arabic</label>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<label class=\"col-md-3\">Remarks</label>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<input style=\"margin-top:5px\" style=\"margin-bottom:5px\" type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t\tformControlName=\"remarks\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<label class=\"col-md-3\">Reason For Enquiry</label>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<select style=\"margin-top:5px\" class=\"form-control\" formControlName=\"reasonforEnquiry\">\n\t\t\t\t\t\t\t<option value=\"null\">-----select---</option>\n\t\t\t\t\t\t\t<option [value]=1>To Register</option>\n\t\t\t\t\t\t\t<option value=2>To complain</option>\n\t\t\t\t\t\t\t<option value=3>To visit</option>\n\t\t\t\t\t\t\t<option value=4>To support</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<label class=\"col-md-3\">How did you hear about us?</label>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"hdyhau\">\n\t\t\t\t\t\t\t<option value=\"null\">-----select---</option>\n\t\t\t\t\t\t\t<option>Website</option>\n\t\t\t\t\t\t\t<option>News</option>\n\t\t\t\t\t\t\t<option>Social Media</option>\n\t\t\t\t\t\t\t<option> Refered by friend</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<label class=\"col-md-3\">Payment Mode</label>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<input type=\"checkbox\" class = \"col-md-3\"\n\t\t\t\t\t\t\tformControlName=\"paymentMode\"><label>Cash</label>\n\t\t\t\t\t\t<input type=\"checkbox\" class = \"col-md-3\"\n\t\t\t\t\t\t\tformControlName=\"paymentMode\"><label>Insurance</label>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<label class=\"col-md-3\">Branch</label>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"branch\">\n\t\t\t\t\t\t\t<option [ngValue]=\"null\">-- Select --</option>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let branch of branchList\">\n\t\t\t\t\t\t\t\t<option [ngValue]=\"branch\">{{branch.branchName}}</option>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<label class=\"col-md-3\">Department</label>\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"department\">\n\t\t\t\t\t\t\t<option [ngValue]=\"null\">-- Select --</option>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let department of departmentList\">\n\t\t\t\t\t\t\t\t<option [ngValue]=\"department\">{{department.departmentName}}</option>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3\"></div>\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t<button style=\"margin-top:5px\" type=\"submit\" class=\"btn btn-primary\"> PreRegister</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t\t\t<button style=\"margin-top:5px\" value=\"reset\" type=\"reset\" class=\"btn btn-danger\"> Reset</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t\t<div class=\"card-footer bg-info p-1 m-0 text-center\">\n\t\t\t<a routerLink=\"/preRegistration\" class=\"m-2\"><button class=\"btn-warning\">Back to\n\t\t\t\t\tPreRegistration</button></a>\n\t\t</div>\n\t</div>\n</div>";
      /***/
    },

    /***/
    30402:
    /*!******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pre-register-patient/components/pre-register-appointment-list/pre-register-appointment-list.component.html ***!
      \******************************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [@routerTransition]>\r\n\t<app-page-header [mainhead]=\"'Pre-Registered Appointment List'\" [mainheadLink]=\"'/preRegistration'\" [heading]=\"'Pre-registration Appointment'\" [icon]=\"'fa-bar-chart-o'\"></app-page-header>\r\n </div>\r\n<div class =\"container-fluid p-0 m-0\">\r\n\t<div class = \"card justify-content-center p-0 m-0\">\r\n\t\t<div class =\"card-head \">\r\n\t\t\t<nav class = \"navbar bg-dark text-white text-white\">\r\n\t\t\t\t<h2>Pre-registered Appointment List</h2>\r\n\t\t\t\t<input type = \"text\" placeholder = \"search\">\r\n\t\t\t\t<a routerLink = \"/preRegistration/pre-registered-appointment\"><button value= \"new\" class =\"btn btn-success\"> new</button></a>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t\t<div class =\"card-body p-0 m-0\">\r\n\t\t\t<table class = \"table  table-responsive w-100\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr >\r\n\t\t\t\t\t\t<th>Pre-Registered Appointment NO</th>\r\n\t\t\t\t\t\t<th >Patient MRNo.</th>\r\n\t\t\t\t\t\t<th>Branch</th>\r\n\t\t\t\t\t\t<th>Department</th>\r\n\t\t\t\t\t\t<th>Unit</th>\r\n\t\t\t\t\t\t<th>Doctor</th>\r\n\t\t\t\t\t\t<th>Appointment Date</th>\r\n\t\t\t\t\t\t<th>Appointment Time</th>\r\n\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t \t<tr *ngFor=\"let preRegisteredAppointment of preRegisteredAppointmentList |slice: (page-1) * pageSize : page * pageSize\">\r\n\t\t\t\t    \t<td>{{preRegisteredAppointment.appointmentId}}</td>\r\n\t\t\t\t        <td>{{preRegisteredAppointment.patient.preRegistrationId}}</td>\r\n\t\t\t\t        <td>{{preRegisteredAppointment.branch.branchName}}</td>\r\n\t\t\t\t        <td>{{preRegisteredAppointment.department.departmentName}}</td>\r\n\t\t\t\t\t\t<td>{{preRegisteredAppointment.unit.unitName}}</td>\r\n\t\t\t\t\t\t<td>{{preRegisteredAppointment.doctor.doctorName}}</td>\r\n\t\t\t\t\t\t<td>{{preRegisteredAppointment.scheduleDoctor.scheduleDate |date: 'medium'}}</td>\r\n\t\t\t\t\t\t<td>{{preRegisteredAppointment.appointmentDateTime}}</td>\r\n\t\t\t\t\t\t<td class= \"text-center\">\r\n\t\t\t\t\t\t\t<button class = \"btn btn-dark btn-sm float-center\"  routerLink = \"/preRegistration/pre-registered-appointment\" ><i class = \"fa fa-edit fa-1x\"></i></button>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t\t<div class = \"card-footer bg-info p-0 m-0 \" >\r\n\t\t<div class = \"row justify-content-center\">\r\n\t\t\t<ngb-pagination [collectionSize]=\"len\" [(page)]=\"page\" [pageSize] = \"pageSize\"  [rotate]=\"true\"  [ellipses]=\"false\" class = \"col-md-9\"></ngb-pagination>\r\n\t\t\t<a routerLink = \"/preRegistration\" class = \"m-2\"><button class = \"btn-warning\" >Back to PreRegistration</button></a>\r\n\t\t</div>\r\n\t</div>\r\n\t</div>\r\n</div>";
      /***/
    },

    /***/
    78718:
    /*!********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pre-register-patient/components/pre-register-appointment/pre-register-appointment.component.html ***!
      \********************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div [@routerTransition]>\n<app-page-header [mainhead]=\"'Pre-Register-Appointment'\" [mainheadLink]=\"'/preRegistration'\"\n\t\t[heading]=\"'Pre-registration Appointment'\" [icon]=\"'fa-bar-chart-o'\"></app-page-header>\n </div>\n<div class =\"container-fluid p-0 m-0 \">\n\t<div class = \"card \">\n\t\t<form [formGroup] = \"preRegistration_appointmentForm\" (ngSubmit) = \"onSubmit()\">\n\t\t\t<div class =\"card-head \">\n\t\t\t\t<nav class = \"navbar bg-info text-light\">\n\t\t\t\t\t<label >Branch</label>\n\t\t\t\t\t<div class =\"col-md-2\"  >\n\t\t\t\t\t\t<select class = \"form-control\" formControlName = \"branch\" name = 'branch' (ngModelChange) = \"showDepartment($event)\">\n\t\t\t\t\t\t\t<option [ngValue]=\"null\">-- Select --</option>\t\t\t\n\t\t\t\t\t\t\t<ng-container *ngFor = \"let branch of branchList\">\n\t\t\t\t\t\t\t\t<option   [ngValue] = \"branch\" >{{branch.branchName}}</option>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<label >Department</label>\n\t\t\t\t\t<div class =\"col-md-2\"  >\n\t\t\t\t\t\t<select class = \"form-control\" formControlName = \"department\" (ngModelChange) = \"showUnit($event)\">\n\t\t\t\t\t\t\t<option [ngValue]=\"null\">-- Select --</option>\n\t\t\t\t\t\t\t<ng-container *ngFor = \"let department of departmentList\">\n\t\t\t\t\t\t\t\t<option [ngValue] = \"department\"  *ngIf = \"department.site.id == this.branchId\">{{department.departmentName}}</option>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<label>Unit</label>\n\t\t\t\t\t<div class =\"col-md-2\"  >\n\t\t\t\t\t\t<select class = \"form-control\" formControlName = \"unit\" (ngModelChange) = \"showDoctors($event)\" >\n\t\t\t\t\t\t\t<option [ngValue]=\"null\">-- Select --</option>\n\t\t\t\t\t\t\t<ng-container *ngFor = \"let units of unitList\">\n\t\t\t\t\t\t\t\t<option  [ngValue] = \"units\" *ngIf = \"units.department.departmentId == this.departmentId\">{{units.unitName}}</option>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<label >Doctor</label>\n\t\t\t\t\t<div class =\"col-md-2\"  >\n\t\t\t\t\t\t<select class = \"form-control\" formControlName = \"doctor\" (change) = \"scheduleDoctor()\">\n\t\t\t\t\t\t\t<option [ngValue]=\"null\">-- Select --</option>\n\t\t\t\t\t\t\t<ng-container *ngFor = \"let doctor of doctorList\">\n\t\t\t\t\t\t\t\t<option  [ngValue] = \"doctor\" \t*ngIf = \"doctor.unit.unitId == this.unitId\">{{doctor.doctorName}}</option>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button  class =\"btn btn-danger\" routerLink = \"/preRegistration/pre-registered-appointment-list\"> Show List</button>\n\t\t\t\t </nav>\n\t\t\t</div>\n\t\t\t<div class =\"card-body\">\n\t\t\t\t<div class = \"row\">\n\t\t\t\t\t<div class = \"col-md-9\">\n\t\t\t\t\t\t<h3 class = \"text-center\">Weekly Value</h3>\n\t\t\t\t\t\t<table class = \"table p-o m-0\" >\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th >Date</th>\n\t\t\t\t\t\t\t\t\t<th>Department</th>\n\t\t\t\t\t\t\t\t\t<th>Doctor Name</th>\n\t\t\t\t\t\t\t\t\t<th>Available From</th>\n\t\t\t\t\t\t\t\t\t<th>Available To</th>\n\t\t\t\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr *ngFor = \"let doctorDetail of doctorScheduleList\" >\n\t\t\t\t\t\t\t\t\t<td >{{doctorDetail.availableDate | date: 'dd-MM-YYYY'}}</td>\n\t\t\t\t\t\t\t\t\t<td >{{doctorDetail.department.departmentName}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{doctorDetail.doctor.doctorName}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{doctorDetail.availableFrom | date: 'hh:mm'}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{doctorDetail.availableTo | date: 'hh:mm'}}</td>\n\t\t\t\t\t\t\t\t\t<td><button class = \"btn-success\" data-toggle=\"buttons \"  (click) = \"gotoSubmit(doctorDetail)\">Schedule</button></td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\n\t\t\t\t<div class = \"col-md-3 \" *ngIf = \"gotAppointment\">\n\t\t\t\t\t\t<label class = \"col-md-12\">Available Patient Time</label>\n\t\t\t\t\t\t<select formControlName = \"appointmentDateTime\">\n\t\t\t\t\t\t\t<option  *ngFor = \"let date of hourList\" [ngValue] = \"date\"> {{date | date: 'HH:mm'}}</option>\n\t\t\t\t\t\t</select><br>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<button class =  \"btn  btn-info\" style = \"position: relative;\" (click) = \"savePreRegistrationAppointment()\">Save Appointment</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t    </div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n\t\n     \n";
      /***/
    },

    /***/
    13552:
    /*!**********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pre-register-patient/components/pre-register-patient-list/pre-register-patient-list.component.html ***!
      \**********************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [@routerTransition]>\n\t<app-page-header [mainhead]=\"'Pre-Register Patient'\" [mainheadLink]=\"'/preRegistration'\" [heading]=\"'Pre-registration'\" [icon]=\"'fa-bar-chart-o'\"></app-page-header>\n </div>\n<div class =\"container-fluid p-0 m-0\">\n\t<div class = \"card justify-content-center p-0 m-0\">\n\t\t<div class =\"card-head \">\n\t\t\t<nav class = \"navbar bg-dark text-white text-white\">\n\t\t\t\t<h2>Pre-registration</h2>\n\t\t\t\t<input type = \"text\" placeholder = \"search\">\n\t\t\t\t<a routerLink = \"/preRegistration/add-pre-register-patient\"><button value= \"new\" class =\"btn btn-success\"> new</button></a>\n\t\t\t</nav>\n\t\t</div>\n\t\t<div class =\"card-body p-0 m-0\">\n\t\t\t<table class = \"table  table-responsive w-100\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr >\n\t\t\t\t\t\t<th>Pre-Registration No.</th>\n\t\t\t\t\t\t<th>Pre-Registration Date</th>\n\t\t\t\t\t\t<th>First Name</th>\n\t\t\t\t\t\t<th>Middle Name</th>\n\t\t\t\t\t\t<th>Last Name</th>\n\t\t\t\t\t\t<th>Department</th>\n\t\t\t\t\t\t<th>Approval Status</th>\n\t\t\t\t\t\t<th>Reason for Enquiry</th>\n\t\t\t\t\t\t<th>Remarks</th>\n\t\t\t\t\t\t<th>Pre-Registration Type</th>\n\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t \t<tr *ngFor=\"let preregistration of preregistrationList |slice: (page-1) * pageSize : page * pageSize\">\n\t\t\t\t    \t<td>{{preregistration.preRegistrationNo}}</td>\n\t\t\t\t        <td>{{preregistration.queueDate|date: 'medium'}}</td>\n\t\t\t\t        <td>{{preregistration.firstName}}</td>\n\t\t\t\t        <td>{{preregistration.middleName}}</td>\n\t\t\t\t\t\t<td>{{preregistration.lastName}}</td>\n\t\t\t\t\t\t<td>{{preregistration.department.departmentName}}</td>\n\t\t\t\t\t\t<td>{{preregistration.approvalStatus}}</td>\n\t\t\t\t\t\t<td>{{preregistration.reasonforEnquiry}}</td>\n\t\t\t\t\t\t<td>{{preregistration.remarks}}</td>\n\t\t\t\t\t\t<td>{{preregistration.preRegnType.lookupValue}}</td>\n\t\t\t\t\t\t<td class= \"text-center\">\n\t\t\t\t\t\t\t<button class = \"btn btn-dark btn-sm float-center\"  routerLink = \"/preRegistration/add-pre-register-patient\" ><i class = \"fa fa-edit fa-1x\"></i></button>\n\t\t\t\t\t\t\t<button  class = \"btn btn-primary btn-sm p-1 mt-1 m-0\" (click) = \"gotoPreRegistrationAppointment(preregistration)\">Appointment</button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t\t<div class = \"card-footer bg-info p-0 m-0 \" >\n\t\t<div class = \"row justify-content-center\">\n\t\t\t<ngb-pagination [collectionSize]=\"len\" [(page)]=\"page\" [pageSize] = \"pageSize\"  [rotate]=\"true\"  [ellipses]=\"false\" class = \"col-md-9\"></ngb-pagination>\n\t\t\t<a routerLink = \"/preRegistration\" class = \"m-2\"><button class = \"btn-warning\" >Back to PreRegistration</button></a>\n\t\t</div>\n\t</div>\n\t</div>\n</div>";
      /***/
    },

    /***/
    12226:
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pre-register-patient/pre-register-patient.component.html ***!
      \****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class ='row'>\n\t <div class=\"col-xl-4 col-lg-3\">\n        <app-stat [bgClass]=\"'primary'\" [count]=\"2\" [icon]=\"'fa-edit'\" [outcomeLink] = \"'preRegistration/add-pre-register-patient'\" [label]=\"'New Pre-Registration'\" [data]=\"'new Pre-Registration'\"></app-stat>\n    </div>\n\t<div class=\"col-xl-4 col-lg-3\">\n        <app-stat [bgClass]=\"'secondary'\" [count]=\"1\" [icon]=\"'fa-list'\" [outcomeLink] = \"'preRegistration/pre-register-patient-list'\" [label]=\"'Pre-Registered Patient List'\" [data]=\"' goto Pre-Registered List'\"></app-stat>\n    </div>\n    <div class=\"col-xl-4 col-lg-3\">\n        <app-stat [bgClass]=\"'success'\" [count]=\"2\" [icon]=\"'fa-tasks'\" [outcomeLink] = \"'preRegistration/pre-registered-appointment-list'\" [label]=\"'Pre-Register Appointments'\" [data]=\"'see Pre-Register Appointment List'\"></app-stat>\n    </div>\n</div>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_layout_layout_module_ts-es5.js.map