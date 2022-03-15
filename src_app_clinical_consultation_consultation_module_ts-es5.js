(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkElitePro"] = self["webpackChunkElitePro"] || []).push([["src_app_clinical_consultation_consultation_module_ts"], {
    /***/
    15759:
    /*!**********************************************************************!*\
      !*** ./src/app/clinical/consultation/consultation-routing.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConsultationRoutingModule": function ConsultationRoutingModule() {
          return (
            /* binding */
            _ConsultationRoutingModule
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


      var _start_consultation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./start-consultation.component */
      98670);

      var routes = [{
        path: '',
        component: _start_consultation_component__WEBPACK_IMPORTED_MODULE_0__.StartConsultationComponent
      }];

      var _ConsultationRoutingModule = function ConsultationRoutingModule() {
        _classCallCheck(this, ConsultationRoutingModule);
      };

      _ConsultationRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ConsultationRoutingModule);
      /***/
    },

    /***/
    384:
    /*!**************************************************************!*\
      !*** ./src/app/clinical/consultation/consultation.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConsultationModule": function ConsultationModule() {
          return (
            /* binding */
            _ConsultationModule
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _consultation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./consultation-routing.module */
      15759);
      /* harmony import */


      var _start_consultation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./start-consultation.component */
      98670);
      /* harmony import */


      var _patient_control_patient_control_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../patient-control/patient-control.module */
      49870);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared */
      51679);

      var _ConsultationModule = function ConsultationModule() {
        _classCallCheck(this, ConsultationModule);
      };

      _ConsultationModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_start_consultation_component__WEBPACK_IMPORTED_MODULE_1__.StartConsultationComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _consultation_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConsultationRoutingModule, _patient_control_patient_control_module__WEBPACK_IMPORTED_MODULE_2__.PatientControlModule, _shared__WEBPACK_IMPORTED_MODULE_3__.PageHeaderModule]
      })], _ConsultationModule);
      /***/
    },

    /***/
    98670:
    /*!***********************************************************************!*\
      !*** ./src/app/clinical/consultation/start-consultation.component.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StartConsultationComponent": function StartConsultationComponent() {
          return (
            /* binding */
            _StartConsultationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_start_consultation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./start-consultation.component.html */
      27222);
      /* harmony import */


      var _start_consultation_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./start-consultation.component.css */
      23955);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../router.animations */
      74903);
      /* harmony import */


      var _encounter_masters_encounter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../encounter/masters/encounter */
      25405);
      /* harmony import */


      var _encounter_services_encounter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../encounter/services/encounter.service */
      85992);
      /* harmony import */


      var _patient_master_patient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../patient/master/patient */
      19975);

      var _StartConsultationComponent = /*#__PURE__*/function () {
        function StartConsultationComponent(encounterService, route) {
          _classCallCheck(this, StartConsultationComponent);

          this.encounterService = encounterService;
          this.route = route;
          this.encounter = new _encounter_masters_encounter__WEBPACK_IMPORTED_MODULE_3__.Encounter();
          this.patient = new _patient_master_patient__WEBPACK_IMPORTED_MODULE_5__.Patient();
        }

        _createClass(StartConsultationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.encounterId = Number(sessionStorage.getItem('encounterId'));
            this.encounterId = this.route.snapshot.params['id']; //console.log(this.encounterId);

            this.reloadData();
          }
        }, {
          key: "reloadData",
          value: function reloadData() {
            var _this = this;

            this.encounterService.getEncounterById(this.encounterId).subscribe(function (data) {
              _this.encounter = data;
              _this.patient = _this.encounter.appointment.patient;
              console.log("Patient from consultant", _this.patient);
            });
          }
        }, {
          key: "callPatientDetails",
          value: function callPatientDetails(patient) {
            console.log(patient);
          }
        }]);

        return StartConsultationComponent;
      }();

      _StartConsultationComponent.ctorParameters = function () {
        return [{
          type: _encounter_services_encounter_service__WEBPACK_IMPORTED_MODULE_4__.EncounterService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
        }];
      };

      _StartConsultationComponent.propDecorators = {
        patientList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
        }],
        patient: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
        }]
      };
      _StartConsultationComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-start-consultation',
        template: _raw_loader_start_consultation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_start_consultation_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _StartConsultationComponent);
      /***/
    },

    /***/
    23955:
    /*!************************************************************************!*\
      !*** ./src/app/clinical/consultation/start-consultation.component.css ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFydC1jb25zdWx0YXRpb24uY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    27222:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clinical/consultation/start-consultation.component.html ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = " <div [@routerTransition]>\r\n \t<app-page-header [heading]=\"'consultation'\" [icon]=\"'fa fa-user-md'\"></app-page-header>\r\n \r\n </div>\r\n <div class=\"col-md-12 navbar-nav bg-info mr-auto\">\r\n \t<div class=\"bg-info\">\r\n\t<app-patient-control (patientDetails) = \"callPatientDetails($event)\" [patient]=\"patient\" ></app-patient-control>\r\n</div>\r\n </div>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_clinical_consultation_consultation_module_ts-es5.js.map