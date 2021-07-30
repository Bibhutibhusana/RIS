(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunksb_admin_bs4_angular_9"] = self["webpackChunksb_admin_bs4_angular_9"] || []).push([["src_app_layout_bs-component_bs-component_module_ts"], {
    /***/
    61324:
    /*!********************************************************************!*\
      !*** ./src/app/layout/bs-component/bs-component-routing.module.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BsComponentRoutingModule": function BsComponentRoutingModule() {
          return (
            /* binding */
            _BsComponentRoutingModule
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


      var _bs_component_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bs-component.component */
      85960);

      var routes = [{
        path: '',
        component: _bs_component_component__WEBPACK_IMPORTED_MODULE_0__.BsComponentComponent
      }];

      var _BsComponentRoutingModule = function BsComponentRoutingModule() {
        _classCallCheck(this, BsComponentRoutingModule);
      };

      _BsComponentRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _BsComponentRoutingModule);
      /***/
    },

    /***/
    85960:
    /*!***************************************************************!*\
      !*** ./src/app/layout/bs-component/bs-component.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BsComponentComponent": function BsComponentComponent() {
          return (
            /* binding */
            _BsComponentComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_bs_component_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./bs-component.component.html */
      58516);
      /* harmony import */


      var _bs_component_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bs-component.component.scss */
      38548);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _BsComponentComponent = /*#__PURE__*/function () {
        function BsComponentComponent() {
          _classCallCheck(this, BsComponentComponent);
        }

        _createClass(BsComponentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BsComponentComponent;
      }();

      _BsComponentComponent.ctorParameters = function () {
        return [];
      };

      _BsComponentComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-bs-component',
        template: _raw_loader_bs_component_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_bs_component_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _BsComponentComponent);
      /***/
    },

    /***/
    65765:
    /*!************************************************************!*\
      !*** ./src/app/layout/bs-component/bs-component.module.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BsComponentModule": function BsComponentModule() {
          return (
            /* binding */
            _BsComponentModule
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared */
      51679);
      /* harmony import */


      var _bs_component_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./bs-component-routing.module */
      61324);
      /* harmony import */


      var _bs_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bs-component.component */
      85960);
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components */
      88103);

      var _BsComponentModule = function BsComponentModule() {
        _classCallCheck(this, BsComponentModule);
      };

      _BsComponentModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _bs_component_routing_module__WEBPACK_IMPORTED_MODULE_1__.BsComponentRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, _shared__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule],
        declarations: [_bs_component_component__WEBPACK_IMPORTED_MODULE_2__.BsComponentComponent, _components__WEBPACK_IMPORTED_MODULE_3__.ButtonsComponent, _components__WEBPACK_IMPORTED_MODULE_3__.AlertComponent, _components__WEBPACK_IMPORTED_MODULE_3__.ModalComponent, _components__WEBPACK_IMPORTED_MODULE_3__.CollapseComponent, _components__WEBPACK_IMPORTED_MODULE_3__.DatePickerComponent, _components__WEBPACK_IMPORTED_MODULE_3__.DropdownComponent, _components__WEBPACK_IMPORTED_MODULE_3__.PaginationComponent, _components__WEBPACK_IMPORTED_MODULE_3__.PopOverComponent, _components__WEBPACK_IMPORTED_MODULE_3__.ProgressbarComponent, _components__WEBPACK_IMPORTED_MODULE_3__.TabsComponent, _components__WEBPACK_IMPORTED_MODULE_3__.RatingComponent, _components__WEBPACK_IMPORTED_MODULE_3__.TooltipComponent, _components__WEBPACK_IMPORTED_MODULE_3__.TimepickerComponent]
      })], _BsComponentModule);
      /***/
    },

    /***/
    31080:
    /*!*************************************************************************!*\
      !*** ./src/app/layout/bs-component/components/alert/alert.component.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AlertComponent": function AlertComponent() {
          return (
            /* binding */
            _AlertComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_alert_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./alert.component.html */
      71142);
      /* harmony import */


      var _alert_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./alert.component.scss */
      57213);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AlertComponent = /*#__PURE__*/function () {
        function AlertComponent() {
          _classCallCheck(this, AlertComponent);

          this.alerts = [];
          this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert'
          }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert'
          }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert'
          }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert'
          });
        }

        _createClass(AlertComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeAlert",
          value: function closeAlert(alert) {
            var index = this.alerts.indexOf(alert);
            this.alerts.splice(index, 1);
          }
        }]);

        return AlertComponent;
      }();

      _AlertComponent.ctorParameters = function () {
        return [];
      };

      _AlertComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-alert',
        template: _raw_loader_alert_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_alert_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AlertComponent);
      /***/
    },

    /***/
    67901:
    /*!*****************************************************************************!*\
      !*** ./src/app/layout/bs-component/components/buttons/buttons.component.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ButtonsComponent": function ButtonsComponent() {
          return (
            /* binding */
            _ButtonsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_buttons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./buttons.component.html */
      62581);
      /* harmony import */


      var _buttons_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./buttons.component.scss */
      39122);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _ButtonsComponent = /*#__PURE__*/function () {
        function ButtonsComponent(formBuilder) {
          _classCallCheck(this, ButtonsComponent);

          this.formBuilder = formBuilder;
          this.model = 1;
        }

        _createClass(ButtonsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.radioGroupForm = this.formBuilder.group({
              model: 'middle'
            });
          }
        }]);

        return ButtonsComponent;
      }();

      _ButtonsComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder
        }];
      };

      _ButtonsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-buttons',
        template: _raw_loader_buttons_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_buttons_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ButtonsComponent);
      /***/
    },

    /***/
    94846:
    /*!*******************************************************************************!*\
      !*** ./src/app/layout/bs-component/components/collapse/collapse.component.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CollapseComponent": function CollapseComponent() {
          return (
            /* binding */
            _CollapseComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_collapse_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./collapse.component.html */
      93683);
      /* harmony import */


      var _collapse_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./collapse.component.scss */
      32565);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _CollapseComponent = function CollapseComponent() {
        _classCallCheck(this, CollapseComponent);

        this.isCollapsed = false;
      };

      _CollapseComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-collapse',
        template: _raw_loader_collapse_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_collapse_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CollapseComponent);
      /***/
    },

    /***/
    17820:
    /*!*************************************************************************************!*\
      !*** ./src/app/layout/bs-component/components/date-picker/date-picker.component.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DatePickerComponent": function DatePickerComponent() {
          return (
            /* binding */
            _DatePickerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_date_picker_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./date-picker.component.html */
      75818);
      /* harmony import */


      var _date_picker_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./date-picker.component.scss */
      83015);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _DatePickerComponent = /*#__PURE__*/function () {
        function DatePickerComponent() {
          _classCallCheck(this, DatePickerComponent);
        }

        _createClass(DatePickerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DatePickerComponent;
      }();

      _DatePickerComponent.ctorParameters = function () {
        return [];
      };

      _DatePickerComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-date-picker',
        template: _raw_loader_date_picker_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_date_picker_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DatePickerComponent);
      /***/
    },

    /***/
    79624:
    /*!*******************************************************************************!*\
      !*** ./src/app/layout/bs-component/components/dropdown/dropdown.component.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DropdownComponent": function DropdownComponent() {
          return (
            /* binding */
            _DropdownComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_dropdown_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./dropdown.component.html */
      28860);
      /* harmony import */


      var _dropdown_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dropdown.component.scss */
      34649);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _DropdownComponent = /*#__PURE__*/function () {
        function DropdownComponent() {
          _classCallCheck(this, DropdownComponent);
        }

        _createClass(DropdownComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DropdownComponent;
      }();

      _DropdownComponent.ctorParameters = function () {
        return [];
      };

      _DropdownComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-dropdown',
        template: _raw_loader_dropdown_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dropdown_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DropdownComponent);
      /***/
    },

    /***/
    88103:
    /*!*********************************************************!*\
      !*** ./src/app/layout/bs-component/components/index.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ButtonsComponent": function ButtonsComponent() {
          return (
            /* reexport safe */
            _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_0__.ButtonsComponent
          );
        },

        /* harmony export */
        "AlertComponent": function AlertComponent() {
          return (
            /* reexport safe */
            _alert_alert_component__WEBPACK_IMPORTED_MODULE_1__.AlertComponent
          );
        },

        /* harmony export */
        "ModalComponent": function ModalComponent() {
          return (
            /* reexport safe */
            _modal_modal_component__WEBPACK_IMPORTED_MODULE_2__.ModalComponent
          );
        },

        /* harmony export */
        "CollapseComponent": function CollapseComponent() {
          return (
            /* reexport safe */
            _collapse_collapse_component__WEBPACK_IMPORTED_MODULE_3__.CollapseComponent
          );
        },

        /* harmony export */
        "DatePickerComponent": function DatePickerComponent() {
          return (
            /* reexport safe */
            _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_4__.DatePickerComponent
          );
        },

        /* harmony export */
        "DropdownComponent": function DropdownComponent() {
          return (
            /* reexport safe */
            _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_5__.DropdownComponent
          );
        },

        /* harmony export */
        "PaginationComponent": function PaginationComponent() {
          return (
            /* reexport safe */
            _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__.PaginationComponent
          );
        },

        /* harmony export */
        "PopOverComponent": function PopOverComponent() {
          return (
            /* reexport safe */
            _pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_7__.PopOverComponent
          );
        },

        /* harmony export */
        "ProgressbarComponent": function ProgressbarComponent() {
          return (
            /* reexport safe */
            _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_8__.ProgressbarComponent
          );
        },

        /* harmony export */
        "TabsComponent": function TabsComponent() {
          return (
            /* reexport safe */
            _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_9__.TabsComponent
          );
        },

        /* harmony export */
        "RatingComponent": function RatingComponent() {
          return (
            /* reexport safe */
            _rating_rating_component__WEBPACK_IMPORTED_MODULE_10__.RatingComponent
          );
        },

        /* harmony export */
        "TooltipComponent": function TooltipComponent() {
          return (
            /* reexport safe */
            _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_11__.TooltipComponent
          );
        },

        /* harmony export */
        "TimepickerComponent": function TimepickerComponent() {
          return (
            /* reexport safe */
            _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_12__.TimepickerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./buttons/buttons.component */
      67901);
      /* harmony import */


      var _alert_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./alert/alert.component */
      31080);
      /* harmony import */


      var _modal_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal/modal.component */
      24292);
      /* harmony import */


      var _collapse_collapse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./collapse/collapse.component */
      94846);
      /* harmony import */


      var _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./date-picker/date-picker.component */
      17820);
      /* harmony import */


      var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dropdown/dropdown.component */
      79624);
      /* harmony import */


      var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pagination/pagination.component */
      90499);
      /* harmony import */


      var _pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pop-over/pop-over.component */
      26450);
      /* harmony import */


      var _progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./progressbar/progressbar.component */
      20125);
      /* harmony import */


      var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./tabs/tabs.component */
      61866);
      /* harmony import */


      var _rating_rating_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./rating/rating.component */
      67154);
      /* harmony import */


      var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./tooltip/tooltip.component */
      36);
      /* harmony import */


      var _timepicker_timepicker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./timepicker/timepicker.component */
      17486);
      /***/

    },

    /***/
    24292:
    /*!*************************************************************************!*\
      !*** ./src/app/layout/bs-component/components/modal/modal.component.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModalComponent": function ModalComponent() {
          return (
            /* binding */
            _ModalComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./modal.component.html */
      75138);
      /* harmony import */


      var _modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./modal.component.scss */
      1435);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);

      var _ModalComponent = /*#__PURE__*/function () {
        function ModalComponent(modalService) {
          _classCallCheck(this, ModalComponent);

          this.modalService = modalService;
        }

        _createClass(ModalComponent, [{
          key: "open",
          value: function open(content) {
            var _this = this;

            this.modalService.open(content).result.then(function (result) {
              _this.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this.closeResult = "Dismissed ".concat(_this.getDismissReason(reason));
            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }]);

        return ModalComponent;
      }();

      _ModalComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal
        }];
      };

      _ModalComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-modal',
        template: _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ModalComponent);
      /***/
    },

    /***/
    90499:
    /*!***********************************************************************************!*\
      !*** ./src/app/layout/bs-component/components/pagination/pagination.component.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaginationComponent": function PaginationComponent() {
          return (
            /* binding */
            _PaginationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_pagination_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./pagination.component.html */
      59509);
      /* harmony import */


      var _pagination_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pagination.component.scss */
      83041);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PaginationComponent = /*#__PURE__*/function () {
        function PaginationComponent() {
          _classCallCheck(this, PaginationComponent);

          this.defaultPagination = 1;
          this.advancedPagination = 1;
          this.paginationSize = 1;
          this.disabledPagination = 1;
          this.isDisabled = true;
        }

        _createClass(PaginationComponent, [{
          key: "toggleDisabled",
          value: function toggleDisabled() {
            this.isDisabled = !this.isDisabled;
          }
        }]);

        return PaginationComponent;
      }();

      _PaginationComponent.ctorParameters = function () {
        return [];
      };

      _PaginationComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pagination',
        template: _raw_loader_pagination_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pagination_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PaginationComponent);
      /***/
    },

    /***/
    26450:
    /*!*******************************************************************************!*\
      !*** ./src/app/layout/bs-component/components/pop-over/pop-over.component.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PopOverComponent": function PopOverComponent() {
          return (
            /* binding */
            _PopOverComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_pop_over_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./pop-over.component.html */
      7077);
      /* harmony import */


      var _pop_over_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pop-over.component.scss */
      83784);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PopOverComponent = /*#__PURE__*/function () {
        function PopOverComponent() {
          _classCallCheck(this, PopOverComponent);
        }

        _createClass(PopOverComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PopOverComponent;
      }();

      _PopOverComponent.ctorParameters = function () {
        return [];
      };

      _PopOverComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pop-over',
        template: _raw_loader_pop_over_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pop_over_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PopOverComponent);
      /***/
    },

    /***/
    20125:
    /*!*************************************************************************************!*\
      !*** ./src/app/layout/bs-component/components/progressbar/progressbar.component.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProgressbarComponent": function ProgressbarComponent() {
          return (
            /* binding */
            _ProgressbarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_progressbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./progressbar.component.html */
      34626);
      /* harmony import */


      var _progressbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./progressbar.component.scss */
      16063);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ProgressbarComponent = /*#__PURE__*/function () {
        function ProgressbarComponent() {
          _classCallCheck(this, ProgressbarComponent);
        }

        _createClass(ProgressbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProgressbarComponent;
      }();

      _ProgressbarComponent.ctorParameters = function () {
        return [];
      };

      _ProgressbarComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-progressbar',
        template: _raw_loader_progressbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_progressbar_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProgressbarComponent);
      /***/
    },

    /***/
    67154:
    /*!***************************************************************************!*\
      !*** ./src/app/layout/bs-component/components/rating/rating.component.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RatingComponent": function RatingComponent() {
          return (
            /* binding */
            _RatingComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_rating_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./rating.component.html */
      12349);
      /* harmony import */


      var _rating_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./rating.component.scss */
      67978);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _RatingComponent = /*#__PURE__*/function () {
        function RatingComponent() {
          _classCallCheck(this, RatingComponent);

          this.currentRate = 8;
        }

        _createClass(RatingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RatingComponent;
      }();

      _RatingComponent.ctorParameters = function () {
        return [];
      };

      _RatingComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-rating',
        template: _raw_loader_rating_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_rating_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RatingComponent);
      /***/
    },

    /***/
    61866:
    /*!***********************************************************************!*\
      !*** ./src/app/layout/bs-component/components/tabs/tabs.component.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsComponent": function TabsComponent() {
          return (
            /* binding */
            _TabsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tabs_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tabs.component.html */
      20789);
      /* harmony import */


      var _tabs_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tabs.component.scss */
      90117);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TabsComponent = /*#__PURE__*/function () {
        function TabsComponent() {
          _classCallCheck(this, TabsComponent);
        }

        _createClass(TabsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TabsComponent;
      }();

      _TabsComponent.ctorParameters = function () {
        return [];
      };

      _TabsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tabs_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TabsComponent);
      /***/
    },

    /***/
    17486:
    /*!***********************************************************************************!*\
      !*** ./src/app/layout/bs-component/components/timepicker/timepicker.component.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TimepickerComponent": function TimepickerComponent() {
          return (
            /* binding */
            _TimepickerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_timepicker_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./timepicker.component.html */
      44515);
      /* harmony import */


      var _timepicker_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./timepicker.component.scss */
      36119);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TimepickerComponent = /*#__PURE__*/function () {
        function TimepickerComponent() {
          _classCallCheck(this, TimepickerComponent);

          this.defaultTime = {
            hour: 13,
            minute: 30
          };
          this.meridianTime = {
            hour: 13,
            minute: 30
          };
          this.meridian = true;
          this.SecondsTime = {
            hour: 13,
            minute: 30,
            second: 30
          };
          this.seconds = true;
          this.customTime = {
            hour: 13,
            minute: 30,
            second: 0
          };
          this.hourStep = 1;
          this.minuteStep = 15;
          this.secondStep = 30;
        }

        _createClass(TimepickerComponent, [{
          key: "toggleSeconds",
          value: function toggleSeconds() {
            this.seconds = !this.seconds;
          }
        }, {
          key: "toggleMeridian",
          value: function toggleMeridian() {
            this.meridian = !this.meridian;
          }
        }]);

        return TimepickerComponent;
      }();

      _TimepickerComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-timepicker',
        template: _raw_loader_timepicker_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_timepicker_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TimepickerComponent);
      /***/
    },

    /***/
    36:
    /*!*****************************************************************************!*\
      !*** ./src/app/layout/bs-component/components/tooltip/tooltip.component.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TooltipComponent": function TooltipComponent() {
          return (
            /* binding */
            _TooltipComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tooltip_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tooltip.component.html */
      20369);
      /* harmony import */


      var _tooltip_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tooltip.component.scss */
      99185);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TooltipComponent = /*#__PURE__*/function () {
        function TooltipComponent() {
          _classCallCheck(this, TooltipComponent);
        }

        _createClass(TooltipComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TooltipComponent;
      }();

      _TooltipComponent.ctorParameters = function () {
        return [];
      };

      _TooltipComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tooltip',
        template: _raw_loader_tooltip_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tooltip_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TooltipComponent);
      /***/
    },

    /***/
    38548:
    /*!*****************************************************************!*\
      !*** ./src/app/layout/bs-component/bs-component.component.scss ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicy1jb21wb25lbnQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    57213:
    /*!***************************************************************************!*\
      !*** ./src/app/layout/bs-component/components/alert/alert.component.scss ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    39122:
    /*!*******************************************************************************!*\
      !*** ./src/app/layout/bs-component/components/buttons/buttons.component.scss ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b25zLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    32565:
    /*!*********************************************************************************!*\
      !*** ./src/app/layout/bs-component/components/collapse/collapse.component.scss ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xsYXBzZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    83015:
    /*!***************************************************************************************!*\
      !*** ./src/app/layout/bs-component/components/date-picker/date-picker.component.scss ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ::ng-deep .datepicker-input .custom-select {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksVUFBQTtBQUFSIiwiZmlsZSI6ImRhdGUtcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5kYXRlcGlja2VyLWlucHV0IHtcbiAgICAuY3VzdG9tLXNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    34649:
    /*!*********************************************************************************!*\
      !*** ./src/app/layout/bs-component/components/dropdown/dropdown.component.scss ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcm9wZG93bi5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    1435:
    /*!***************************************************************************!*\
      !*** ./src/app/layout/bs-component/components/modal/modal.component.scss ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    83041:
    /*!*************************************************************************************!*\
      !*** ./src/app/layout/bs-component/components/pagination/pagination.component.scss ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    83784:
    /*!*********************************************************************************!*\
      !*** ./src/app/layout/bs-component/components/pop-over/pop-over.component.scss ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3Atb3Zlci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    16063:
    /*!***************************************************************************************!*\
      !*** ./src/app/layout/bs-component/components/progressbar/progressbar.component.scss ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmVzc2Jhci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    67978:
    /*!*****************************************************************************!*\
      !*** ./src/app/layout/bs-component/components/rating/rating.component.scss ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYXRpbmcuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    90117:
    /*!*************************************************************************!*\
      !*** ./src/app/layout/bs-component/components/tabs/tabs.component.scss ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    36119:
    /*!*************************************************************************************!*\
      !*** ./src/app/layout/bs-component/components/timepicker/timepicker.component.scss ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aW1lcGlja2VyLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    99185:
    /*!*******************************************************************************!*\
      !*** ./src/app/layout/bs-component/components/tooltip/tooltip.component.scss ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sdGlwLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    58516:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/bs-component/bs-component.component.html ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\n    <app-page-header [heading]=\"'Bootstrap Component'\" [icon]=\"'fa-th-list'\"></app-page-header>\n    <app-modal></app-modal>\n    <app-alert></app-alert>\n    <app-buttons></app-buttons>\n    <app-collapse></app-collapse>\n    <app-date-picker></app-date-picker>\n    <app-dropdown></app-dropdown>\n    <app-pagination></app-pagination>\n    <app-pop-over></app-pop-over>\n    <app-progressbar></app-progressbar>\n    <app-tabs></app-tabs>\n    <app-tooltip></app-tooltip>\n    <app-timepicker></app-timepicker>\n    <app-rating></app-rating>\n</div>\n";
      /***/
    },

    /***/
    71142:
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/bs-component/components/alert/alert.component.html ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"card mb-3\">\n            <div class=\"card-header\">Buttons</div>\n            <div class=\"card-body\">\n                <p *ngFor=\"let alert of alerts\">\n                    <ngb-alert (close)=\"closeAlert(alert)\" [type]=\"alert.type\">{{ alert.message }}</ngb-alert>\n                </p>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    62581:
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/bs-component/components/buttons/buttons.component.html ***!
      \*********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row mb-3\">\n    <div class=\"col col-sm-6\">\n        <div class=\"card\">\n            <div class=\"card-header\">Radio Button group (<strong>Using ngModel</strong>)</div>\n            <div class=\"card-body\">\n                <div [(ngModel)]=\"model\" class=\"btn-group btn-group-toggle mb-3\" name=\"radioBasic\" ngbRadioGroup>\n                    <label class=\"btn-primary\" ngbButtonLabel>\n                        <input [value]=\"1\" ngbButton type=\"radio\" /> Left (pre-checked)\n                    </label>\n                    <label class=\"btn-primary\" ngbButtonLabel>\n                        <input ngbButton type=\"radio\" value=\"middle\" /> Middle\n                    </label>\n                    <label class=\"btn-primary\" ngbButtonLabel>\n                        <input [value]=\"false\" ngbButton type=\"radio\" /> Right\n                    </label>\n                </div>\n                <div class=\"alert alert-info mb-0\"><strong>Selected Value: </strong>{{ model }}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col col-sm-6\">\n        <div class=\"card\">\n            <div class=\"card-header\">Radio Button group (<strong>Ractive Forms</strong>)</div>\n            <div class=\"card-body\">\n                <form [formGroup]=\"radioGroupForm\" class=\"mb-3\">\n                    <div class=\"btn-group btn-group-toggle\" formControlName=\"model\" name=\"radioBasic\" ngbRadioGroup>\n                        <label class=\"btn-primary\" ngbButtonLabel>\n                            <input [value]=\"1\" ngbButton type=\"radio\" /> Left (pre-checked)\n                        </label>\n                        <label class=\"btn-primary\" ngbButtonLabel>\n                            <input ngbButton type=\"radio\" value=\"middle\" /> Middle\n                        </label>\n                        <label class=\"btn-primary\" ngbButtonLabel>\n                            <input [value]=\"false\" ngbButton type=\"radio\" /> Right\n                        </label>\n                    </div>\n                </form>\n                <div class=\"alert alert-info mb-0\">\n                    <strong>Selected Value: </strong>{{ radioGroupForm.value.model }}\n                </div>\n                <!-- <form [formGroup]=\"radioGroupForm\">\n                    <div ngbRadioGroup name=\"radioBasic\" formControlName=\"model\">\n                        <label class=\"btn btn-primary\">\n                            <input type=\"radio\" [value]=\"1\"> Left (pre-checked)\n                        </label>\n                        <label class=\"btn btn-primary\">\n                            <input type=\"radio\" value=\"middle\"> Middle\n                        </label>\n                        <label class=\"btn btn-primary\">\n                            <input type=\"radio\" [value]=\"false\"> Right\n                        </label>\n                    </div>\n                </form> -->\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    93683:
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/bs-component/components/collapse/collapse.component.html ***!
      \***********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"card mb-3\">\n            <div class=\"card-header\">Collapse</div>\n            <div class=\"card-body\">\n                <p>\n                    <button\n                        (click)=\"isCollapsed = !isCollapsed\"\n                        [attr.aria-expanded]=\"!isCollapsed\"\n                        aria-controls=\"collapseExample\"\n                        class=\"btn btn-outline-primary\"\n                        type=\"button\"\n                    >\n                        Toggle\n                    </button>\n                </p>\n                <div [ngbCollapse]=\"isCollapsed\" id=\"collapseExample\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            You can collapse this card by clicking Toggle\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    75818:
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/bs-component/components/date-picker/date-picker.component.html ***!
      \*****************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"card mb-3\">\n            <div class=\"card-header\">Date Picker</div>\n            <div class=\"card-body\">\n                <form class=\"form-inline mb-3\">\n                    <div class=\"form-group\">\n                        <div class=\"input-group datepicker-input\">\n                            <input\n                                #d=\"ngbDatepicker\"\n                                [(ngModel)]=\"model\"\n                                class=\"form-control\"\n                                name=\"dp\"\n                                ngbDatepicker\n                                placeholder=\"yyyy-mm-dd\"\n                            />\n                            <button (click)=\"d.toggle()\" class=\"input-group-addon\" type=\"button\">\n                                <!-- <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/> -->\n                                <span class=\"fa fa-calendar\"></span>\n                            </button>\n                        </div>\n                    </div>\n                </form>\n                <div class=\"alert alert-info mb-0\"><strong>Model: </strong> {{ model | json }}</div>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    28860:
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/bs-component/components/dropdown/dropdown.component.html ***!
      \***********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-header\">Dropdown</div>\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"d-inline-block dropdown\" ngbDropdown>\n                    <button class=\"btn btn-outline-primary\" ngbDropdownToggle>Toggle dropdown</button>\n                    <div ngbDropdownMenu>\n                        <button class=\"dropdown-item\">Action</button>\n                        <button class=\"dropdown-item\">Another Action</button>\n                        <button class=\"dropdown-item\">Something else is here</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col text-right\">\n                <div class=\"d-inline-block dropdown\" ngbDropdown placement=\"top-right\">\n                    <button class=\"btn btn-outline-primary\" ngbDropdownToggle>Toggle dropup</button>\n                    <div ngbDropdownMenu>\n                        <button class=\"dropdown-item\">Action</button>\n                        <button class=\"dropdown-item\">Another Action</button>\n                        <button class=\"dropdown-item\">Something else is here</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <hr />\n        <p class=\"mb-2\">You can easily control dropdowns programmatically using the exported dropdown instance.</p>\n        <div #myDrop=\"ngbDropdown\" class=\"d-inline-block dropdown\" ngbDropdown>\n            <button class=\"btn btn-outline-primary\" ngbDropdownToggle>Toggle dropdown</button>\n            <div ngbDropdownMenu>\n                <button class=\"dropdown-item\">Action</button>\n                <button class=\"dropdown-item\">Another Action</button>\n                <button class=\"dropdown-item\">Something else is here</button>\n            </div>\n        </div>\n        <div #myDrop=\"ngbDropdown\" class=\"d-inline-block dropdown\" ngbDropdown>\n            <button (click)=\"$event.stopPropagation(); myDrop.open()\" class=\"btn btn-outline-success\">\n                Open from outside\n            </button>\n        </div>\n        <div #myDrop=\"ngbDropdown\" class=\"d-inline-block dropdown\" ngbDropdown>\n            <button (click)=\"$event.stopPropagation(); myDrop.close()\" class=\"btn btn-outline-danger\">\n                Close from outside\n            </button>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    75138:
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/bs-component/components/modal/modal.component.html ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"card mb-3\">\n            <div class=\"card-header\">Modal</div>\n            <!-- Large modal -->\n            <div class=\"card-body\">\n                <button (click)=\"open(content)\" class=\"btn btn-primary\">Large modal</button>\n                <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n                    <div class=\"modal-header\">\n                        <h4 class=\"modal-title\">Modal title</h4>\n                        <button (click)=\"d('Cross click')\" aria-label=\"Close\" class=\"close\" type=\"button\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        <p>One fine body&hellip;</p>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button (click)=\"c('Close click')\" class=\"btn btn-secondary\" type=\"button\">Close</button>\n                    </div>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    59509:
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/bs-component/components/pagination/pagination.component.html ***!
      \***************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col col-sm-6\">\n        <div class=\"card mt-3\">\n            <div class=\"card-header\">Basic Pagination</div>\n            <div class=\"card-body\">\n                <div class=\"text-uppercase text-muted fs-12\">Default pagination</div>\n                <ngb-pagination [(page)]=\"defaultPagination\" [collectionSize]=\"70\"></ngb-pagination>\n                <div class=\"text-uppercase text-muted fs-12\">directionLinks = false</div>\n                <ngb-pagination\n                    [(page)]=\"defaultPagination\"\n                    [collectionSize]=\"70\"\n                    [directionLinks]=\"false\"\n                ></ngb-pagination>\n                <div class=\"text-uppercase text-muted fs-12\">boundaryLinks = true</div>\n                <ngb-pagination\n                    [(page)]=\"defaultPagination\"\n                    [boundaryLinks]=\"true\"\n                    [collectionSize]=\"70\"\n                ></ngb-pagination>\n                <div class=\"alert alert-info\"><b>Current page: </b>{{ defaultPagination }}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col col-sm-6\">\n        <div class=\"card mt-3\">\n            <div class=\"card-header\">Advanced Pagination</div>\n            <div class=\"card-body\">\n                <div class=\"text-uppercase text-muted fs-12\">maxSize = 5, rotate = false</div>\n                <ngb-pagination\n                    [(page)]=\"advancedPagination\"\n                    [boundaryLinks]=\"true\"\n                    [collectionSize]=\"120\"\n                    [maxSize]=\"5\"\n                ></ngb-pagination>\n\n                <div class=\"text-uppercase text-muted fs-12\">maxSize = 5, rotate = true</div>\n                <ngb-pagination\n                    [(page)]=\"advancedPagination\"\n                    [boundaryLinks]=\"true\"\n                    [collectionSize]=\"120\"\n                    [maxSize]=\"5\"\n                    [rotate]=\"true\"\n                ></ngb-pagination>\n\n                <div class=\"text-uppercase text-muted fs-12\">maxSize = 5, rotate = true, ellipses = false</div>\n                <ngb-pagination\n                    [(page)]=\"advancedPagination\"\n                    [boundaryLinks]=\"true\"\n                    [collectionSize]=\"120\"\n                    [ellipses]=\"false\"\n                    [maxSize]=\"5\"\n                    [rotate]=\"true\"\n                ></ngb-pagination>\n                <div class=\"alert alert-info\"><b>Current page: </b>{{ advancedPagination }}</div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col col-sm-6\">\n        <div class=\"card mt-3\">\n            <div class=\"card-header\">Pagination size</div>\n            <div class=\"card-body\">\n                <ngb-pagination [(page)]=\"paginationSize\" [collectionSize]=\"50\" size=\"lg\"></ngb-pagination>\n                <ngb-pagination [(page)]=\"paginationSize\" [collectionSize]=\"50\"></ngb-pagination>\n                <ngb-pagination [(page)]=\"paginationSize\" [collectionSize]=\"50\" size=\"sm\"></ngb-pagination>\n            </div>\n        </div>\n    </div>\n    <div class=\"col col-sm-6\">\n        <div class=\"card mt-3\">\n            <div class=\"card-header\">Disabled pagination</div>\n            <div class=\"card-body\">\n                <p>Pagination control can be disabled:</p>\n                <ngb-pagination\n                    [(page)]=\"disabledPagination\"\n                    [collectionSize]=\"70\"\n                    [disabled]=\"isDisabled\"\n                ></ngb-pagination>\n                <hr />\n                <button (click)=\"toggleDisabled()\" class=\"btn btn-outline-primary\">\n                    Toggle disabled\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    7077:
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/bs-component/components/pop-over/pop-over.component.html ***!
      \***********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card mt-3\">\n    <div class=\"card-header\">\n        Pop over\n    </div>\n    <div class=\"card-body\">\n        <button\n            class=\"btn btn-secondary\"\n            ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n            placement=\"top\"\n            popoverTitle=\"Popover on top\"\n            type=\"button\"\n        >\n            Popover on top\n        </button>\n\n        <button\n            class=\"btn btn-secondary\"\n            ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n            placement=\"right\"\n            popoverTitle=\"Popover on right\"\n            type=\"button\"\n        >\n            Popover on right\n        </button>\n\n        <button\n            class=\"btn btn-secondary\"\n            ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n            placement=\"bottom\"\n            popoverTitle=\"Popover on bottom\"\n            type=\"button\"\n        >\n            Popover on bottom\n        </button>\n\n        <button\n            class=\"btn btn-secondary\"\n            ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n            placement=\"left\"\n            popoverTitle=\"Popover on left\"\n            type=\"button\"\n        >\n            Popover on left\n        </button>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    34626:
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/bs-component/components/progressbar/progressbar.component.html ***!
      \*****************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card mt-3\">\n    <div class=\"card-header\">Progressbar</div>\n    <div class=\"card-body\">\n        <p>\n            <ngb-progressbar [value]=\"50\" type=\"info\"></ngb-progressbar>\n        </p>\n        <p>\n            <ngb-progressbar [max]=\"200\" [value]=\"150\" showValue=\"true\" type=\"warning\"></ngb-progressbar>\n        </p>\n        <p>\n            <ngb-progressbar [striped]=\"true\" [value]=\"100\" type=\"danger\"></ngb-progressbar>\n        </p>\n        <p>\n            <ngb-progressbar [value]=\"25\" type=\"success\">25</ngb-progressbar>\n        </p>\n        <p>\n            <ngb-progressbar [value]=\"50\" type=\"info\">Copying file <b>2 of 4</b>...</ngb-progressbar>\n        </p>\n        <p>\n            <ngb-progressbar [animated]=\"true\" [striped]=\"true\" [value]=\"75\" type=\"warning\"><i>50%</i></ngb-progressbar>\n        </p>\n        <p class=\"mb-0\">\n            <ngb-progressbar [striped]=\"true\" [value]=\"100\" type=\"danger\">Completed!</ngb-progressbar>\n        </p>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    12349:
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/bs-component/components/rating/rating.component.html ***!
      \*******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-header\">Rating (<strong>Basic demo</strong>)</div>\n    <div class=\"card-body\">\n        <ngb-rating [(rate)]=\"currentRate\"></ngb-rating>\n        <hr />\n        <pre>Rate: <b>{{currentRate}}</b></pre>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    20789:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/bs-component/components/tabs/tabs.component.html ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row mt-3\">\n    <div class=\"col-sm-6\">\n        <div class=\"card\">\n            <div class=\"card-header\">Tabset</div>\n            <div class=\"card-body\">\n                <ngb-tabset>\n                    <ngb-tab title=\"Simple\">\n                        <ng-template ngbTabContent>\n                            <p>\n                                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown\n                                aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan\n                                helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu\n                                banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone.\n                                Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.\n                            </p>\n                        </ng-template>\n                    </ngb-tab>\n                    <ngb-tab>\n                        <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\n                        <ng-template ngbTabContent>\n                            <p>\n                                Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson\n                                artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo\n                                enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud\n                                organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n                                yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes\n                                anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson\n                                biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente\n                                accusamus tattooed echo park.\n                            </p>\n                        </ng-template>\n                    </ngb-tab>\n                    <ngb-tab [disabled]=\"true\" title=\"Disabled\">\n                        <ng-template ngbTabContent>\n                            <p>\n                                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown\n                                aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan\n                                helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu\n                                banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone.\n                                Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.\n                            </p>\n                        </ng-template>\n                    </ngb-tab>\n                </ngb-tabset>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <div class=\"card\">\n            <div class=\"card-header\">Pills</div>\n            <div class=\"card-body\">\n                <ngb-tabset type=\"pills\">\n                    <ngb-tab title=\"Simple\">\n                        <ng-template ngbTabContent>\n                            <p>\n                                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown\n                                aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan\n                                helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu\n                                banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone.\n                                Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.\n                            </p>\n                        </ng-template>\n                    </ngb-tab>\n                    <ngb-tab>\n                        <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\n                        <ng-template ngbTabContent\n                            >Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\n                            <p>\n                                Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson\n                                artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo\n                                enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud\n                                organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n                                yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes\n                                anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson\n                                biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente\n                                accusamus tattooed echo park.\n                            </p>\n                        </ng-template>\n                    </ngb-tab>\n                    <ngb-tab [disabled]=\"true\" title=\"Disabled\">\n                        <ng-template ngbTabContent>\n                            <p>\n                                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown\n                                aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan\n                                helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu\n                                banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone.\n                                Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.\n                            </p>\n                        </ng-template>\n                    </ngb-tab>\n                </ngb-tabset>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    44515:
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/bs-component/components/timepicker/timepicker.component.html ***!
      \***************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row mt-3\">\n    <div class=\"col-sm-6\">\n        <div class=\"card\">\n            <div class=\"card-header\">Timepicker (<b>Default</b>)</div>\n            <div class=\"card-body\">\n                <ngb-timepicker [(ngModel)]=\"defaultTime\"></ngb-timepicker>\n                <div class=\"alert alert-info\"><b>Selected time: </b>{{ defaultTime | json }}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <div class=\"card\">\n            <div class=\"card-header\">Timepicker (<b>Default</b>)</div>\n            <div class=\"card-body\">\n                <ngb-timepicker [(ngModel)]=\"meridianTime\" [meridian]=\"meridian\"></ngb-timepicker>\n                <button (click)=\"toggleMeridian()\" class=\"btn btn-sm btn-outline-{{ meridian ? 'success' : 'danger' }}\">\n                    Meridian - {{ meridian ? 'ON' : 'OFF' }}\n                </button>\n                <div class=\"alert alert-info mt-3 mb-0\"><b>Selected time: </b>{{ meridianTime | json }}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <div class=\"card\">\n            <div class=\"card-header\">Timepicker (<b>Seconds</b>)</div>\n            <div class=\"card-body\">\n                <ngb-timepicker [(ngModel)]=\"SecondsTime\" [seconds]=\"seconds\"></ngb-timepicker>\n                <button (click)=\"toggleSeconds()\" class=\"btn btn-sm btn-outline-{{ seconds ? 'success' : 'danger' }}\">\n                    Seconds - {{ seconds ? 'ON' : 'OFF' }}\n                </button>\n                <div class=\"alert alert-info mt-3 mb-0\"><b>Selected time: </b>{{ SecondsTime | json }}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-6 mt-3\">\n        <div class=\"card\">\n            <div class=\"card-header\">Timepicker (<b>Custom Step</b>)</div>\n            <div class=\"card-body\">\n                <ngb-timepicker\n                    [(ngModel)]=\"customTime\"\n                    [hourStep]=\"hourStep\"\n                    [minuteStep]=\"minuteStep\"\n                    [secondStep]=\"secondStep\"\n                    [seconds]=\"true\"\n                ></ngb-timepicker>\n\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <label for=\"changeHourStep\">Hour Step</label>\n                        <input [(ngModel)]=\"hourStep\" class=\"form-control\" type=\"number\" />\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <label for=\"changeMinuteStep\">Minute Step</label>\n                        <input [(ngModel)]=\"minuteStep\" class=\"form-control\" type=\"number\" />\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <label for=\"changeSecondStep\">Second Step</label>\n                        <input [(ngModel)]=\"secondStep\" class=\"form-control\" type=\"number\" />\n                    </div>\n                </div>\n                <div class=\"alert alert-info mt-3 mb-0\"><b>Selected time: </b>{{ customTime | json }}</div>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    20369:
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/bs-component/components/tooltip/tooltip.component.html ***!
      \*********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-header\">\n        Tooltip\n    </div>\n    <div class=\"card-body\">\n        <button class=\"btn btn-secondary\" ngbTooltip=\"Tooltip on top\" placement=\"top\" type=\"button\">\n            Tooltip on top\n        </button>\n        <button class=\"btn btn-secondary\" ngbTooltip=\"Tooltip on right\" placement=\"right\" type=\"button\">\n            Tooltip on right\n        </button>\n        <button class=\"btn btn-secondary\" ngbTooltip=\"Tooltip on bottom\" placement=\"bottom\" type=\"button\">\n            Tooltip on bottom\n        </button>\n        <button class=\"btn btn-secondary\" ngbTooltip=\"Tooltip on left\" placement=\"left\" type=\"button\">\n            Tooltip on left\n        </button>\n        <ng-template #StaticTipContent><em>Tooltip</em> <u>with</u> <b>HTML</b></ng-template>\n        <button [ngbTooltip]=\"StaticTipContent\" class=\"btn btn-secondary\" data-html=\"true\" type=\"button\">\n            Tooltip with HTML\n        </button>\n    </div>\n</div>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_layout_bs-component_bs-component_module_ts-es5.js.map