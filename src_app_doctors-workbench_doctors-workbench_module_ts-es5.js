(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkElitePro"] = self["webpackChunkElitePro"] || []).push([["src_app_doctors-workbench_doctors-workbench_module_ts"], {
    /***/
    21071:
    /*!***************************************************************************!*\
      !*** ./src/app/doctors-workbench/components/referal/referal.component.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReferalComponent": function ReferalComponent() {
          return (
            /* binding */
            _ReferalComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_referal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./referal.component.html */
      47070);
      /* harmony import */


      var _referal_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./referal.component.css */
      26524);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ReferalComponent = /*#__PURE__*/function () {
        function ReferalComponent(datePipe) {
          _classCallCheck(this, ReferalComponent);

          this.datePipe = datePipe;
          this.departmentList = new Array();
          this.lookupEntityList = [];
          this.date = new Date();
          this.displayedColumns = ['patientName', 'fromDepartment', 'fromConsultant', 'toDepartment', 'toConsultant', 'referralCount', 'requestedDate', 'approvalStatus', 'priority'];
          this.changeColor = "background-color:aqua;";
        }

        _createClass(ReferalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.requestDateFrom = this.datePipe.transform(this.date, 'yyyy-MM-dd');
            this.requestDateTo = this.datePipe.transform(this.date, 'yyyy-MM-dd');
          }
        }, {
          key: "searchByDateRange",
          value: function searchByDateRange() {}
        }]);

        return ReferalComponent;
      }();

      _ReferalComponent.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe
        }];
      };

      _ReferalComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-referal',
        template: _raw_loader_referal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_referal_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ReferalComponent);
      /***/
    },

    /***/
    74668:
    /*!***********************************************************************!*\
      !*** ./src/app/doctors-workbench/doctors-workbench-routing.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DoctorsWorkbenchRoutingModule": function DoctorsWorkbenchRoutingModule() {
          return (
            /* binding */
            _DoctorsWorkbenchRoutingModule
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


      var _components_referal_referal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/referal/referal.component */
      21071);
      /* harmony import */


      var _doctors_workbench_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./doctors-workbench.component */
      77715);

      var routes = [{
        path: '',
        component: _doctors_workbench_component__WEBPACK_IMPORTED_MODULE_1__.DoctorsWorkbenchComponent
      }, {
        path: 'referal',
        component: _components_referal_referal_component__WEBPACK_IMPORTED_MODULE_0__.ReferalComponent
      }];

      var _DoctorsWorkbenchRoutingModule = function DoctorsWorkbenchRoutingModule() {
        _classCallCheck(this, DoctorsWorkbenchRoutingModule);
      };

      _DoctorsWorkbenchRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      })], _DoctorsWorkbenchRoutingModule);
      /***/
    },

    /***/
    77715:
    /*!******************************************************************!*\
      !*** ./src/app/doctors-workbench/doctors-workbench.component.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DoctorsWorkbenchComponent": function DoctorsWorkbenchComponent() {
          return (
            /* binding */
            _DoctorsWorkbenchComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_doctors_workbench_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./doctors-workbench.component.html */
      85826);
      /* harmony import */


      var _doctors_workbench_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./doctors-workbench.component.css */
      48615);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _appointment_masters_appointment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../appointment/masters/appointment */
      59542);
      /* harmony import */


      var _appointment_services_appointment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../appointment/services/appointment.service */
      83430);
      /* harmony import */


      var _encounter_masters_consultant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../encounter/masters/consultant */
      57233);
      /* harmony import */


      var _encounter_masters_encounter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../encounter/masters/encounter */
      25405);
      /* harmony import */


      var _encounter_services_consultant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../encounter/services/consultant.service */
      73794);
      /* harmony import */


      var _encounter_services_encounter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../encounter/services/encounter.service */
      85992);
      /* harmony import */


      var _master_department_masters_department__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../master/department/masters/department */
      10776);
      /* harmony import */


      var _master_department_services_department_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../master/department/services/department.service */
      25482);
      /* harmony import */


      var _master_lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../master/lookup-module/services/lookup.service */
      41168);
      /* harmony import */


      var _master_service_center_masters_service_center__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../master/service-center/masters/service-center */
      39758);
      /* harmony import */


      var _master_service_center_services_branch_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../master/service-center/services/branch-service.service */
      31582);
      /* harmony import */


      var _master_unit_master_masters_Employee__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../master/unit-master/masters/Employee */
      51716);
      /* harmony import */


      var _master_unit_master_services_employee_master_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../master/unit-master/services/employee-master.service */
      9655);
      /* harmony import */


      var _router_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../router.animations */
      74903);

      var _DoctorsWorkbenchComponent = /*#__PURE__*/function () {
        function DoctorsWorkbenchComponent(departmentService, lookupService, appointmentService, encounterService, serviceCenterService, consultantService, employeeService, datePipe, router) {
          _classCallCheck(this, DoctorsWorkbenchComponent);

          this.departmentService = departmentService;
          this.lookupService = lookupService;
          this.appointmentService = appointmentService;
          this.encounterService = encounterService;
          this.serviceCenterService = serviceCenterService;
          this.consultantService = consultantService;
          this.employeeService = employeeService;
          this.datePipe = datePipe;
          this.router = router;
          this.departmentList = [];
          this.serviceCenterList = [];
          this.consultantList = [];
          this.lookupEntityList = [];
          this.checkedInByDateSearchEncounterList = new Array();
          this.encounterList = [];
          this.isSearched = true;
          this.department = new _master_department_masters_department__WEBPACK_IMPORTED_MODULE_8__.Department();
          this.consultant = new _encounter_masters_consultant__WEBPACK_IMPORTED_MODULE_4__.Consultant();
          this.serviceCenter = new _master_service_center_masters_service_center__WEBPACK_IMPORTED_MODULE_11__.ServiceCenter();
          this.appointment = new _appointment_masters_appointment__WEBPACK_IMPORTED_MODULE_2__.Appointment();
          this.employee = new _master_unit_master_masters_Employee__WEBPACK_IMPORTED_MODULE_13__.Employee();
          this.encounter = new _encounter_masters_encounter__WEBPACK_IMPORTED_MODULE_5__.Encounter();
          this.showImage = false;
          this.mrn = '';
          this.patientName = '';
          this.departmentForSearch = null;
          this.serviceCenterForSearch = null;
          this.encounterStatusForSearch = 183;
          this.visitTypeForSearch = null;
          this.date = new Date();
        }

        _createClass(DoctorsWorkbenchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            ;
            this.reloadData();
            this.visitDateFrom = this.datePipe.transform(this.date, 'yyyy-MM-dd');
            this.visitDateTo = this.datePipe.transform(this.date, 'yyyy-MM-dd');
          }
        }, {
          key: "reloadData",
          value: function reloadData() {
            var _this = this;

            this.departmentService.getAllDepartments().subscribe(function (data) {
              _this.departmentList = data; //console.log(data)
            }), this.serviceCenterService.getServiceCenter().subscribe(function (data) {
              _this.serviceCenterList = data; //console.log(data)
            }), this.consultantService.getConsultantList().subscribe(function (data) {
              _this.consultantList = data;
            }), this.lookupService.getAllLookupEntities().subscribe(function (data) {
              _this.lookupEntityList = data;
            }), this.appointmentService.getAppointmentList().subscribe(function (data) {
              _this.appointmentList = data;
              _this.appointment = _this.appointmentList[0];
              console.log(_this.appointment);
            }), this.employeeService.getEmployee().subscribe(function (data) {
              _this.employeeList = data;
            }), this.encounterService.getEncounter().subscribe(function (data) {
              _this.encounterList = data;
              console.log(_this.encounterList);
            });
            /*setTimeout(()=>{
                for(let i of this.encounterList){
                    //console.log(i)
                }
            },3000);*/
            //console.log(this.encounter.encounterTime);
          }
        }, {
          key: "showServiceCenter",
          value: function showServiceCenter(event) {
            this.departmentId = event;

            var _iterator = _createForOfIteratorHelper(this.departmentList),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var department = _step.value;

                if (department.departmentId == this.departmentId) {
                  this.department = department;
                }
              } //this.departmentForSearch = event;

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            console.log(this.departmentForSearch);
          }
        }, {
          key: "showConsultant",
          value: function showConsultant(event) {
            this.serviceCenterId = event;

            var _iterator2 = _createForOfIteratorHelper(this.serviceCenterList),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var serviceCenter = _step2.value;

                if (serviceCenter.serviceCenterId == this.serviceCenterId) {
                  this.serviceCenter = serviceCenter;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }, {
          key: "encounterTime",
          value: function encounterTime(appointment) {
            this.encounterService.getEncounterByAppointment(appointment).subscribe(function (data) {
              return data;
            });
            return "Hiii";
          }
        }, {
          key: "showpatientdetails",
          value: function showpatientdetails(encounter) {
            var patient = JSON.stringify(encounter.appointment.patient);
            localStorage.setItem('patient', patient);
            this.router.navigate(['/nurseworkbench/consultation', encounter.encounterId]);
          }
        }, {
          key: "showCheckin",
          value: function showCheckin(encounter) {//console.log(encounter);
          }
        }, {
          key: "gotoallergyrecording",
          value: function gotoallergyrecording(encounter) {
            var patient = JSON.stringify(encounter.appointment.patient);
            localStorage.setItem('patient', patient);
            var encountr = JSON.stringify(encounter);
            localStorage.setItem('encounter', encountr);
            this.router.navigate(["/nurseworkbench/allergy-recording"]); //console.log(this.encounter.appointment.patient.patientId);
          }
        }, {
          key: "searchByDateRange",
          value: function searchByDateRange() {
            this.checkedInByDateSearchEncounterList = [];

            var _iterator3 = _createForOfIteratorHelper(this.encounterList),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var encounter = _step3.value;
                var date = new Date(encounter.encounterDate);
                var encounterDate = date.getTime();
                var fromDate = new Date(this.visitDateFrom);
                var toDate = new Date(this.visitDateTo);

                if (fromDate.getTime() < encounterDate && encounterDate < toDate.getTime()) {
                  //console.log("Encounter Fileter is called")
                  this.checkedInByDateSearchEncounterList.push(encounter);
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            this.isSearched = true;
          }
        }, {
          key: "showEncounterStatus",
          value: function showEncounterStatus(value) {
            console.log(this.encounterStatusForSearch);
          }
        }, {
          key: "gotoAppointment",
          value: function gotoAppointment() {
            var appoint = JSON.stringify(this.appointment);
            localStorage.setItem('appointment', appoint);
            var patient = JSON.stringify(this.appointment.patient);
            localStorage.setItem('patient', patient);
            console.log(this.appointment); //this.router.navigate(['/appointment/new-appointment'])
          }
        }, {
          key: "startConsultation",
          value: function startConsultation(encounter) {
            var patient = JSON.stringify(encounter.appointment.patient);
            localStorage.setItem('patient', patient);
            var encountr = JSON.stringify(encounter);
            localStorage.setItem('encounter', encountr);
            this.router.navigate(['/doctorsWorkbench/startConsultation', encounter.encounterId]);
          }
        }, {
          key: "gotoAllergyRecording",
          value: function gotoAllergyRecording(encounter) {
            var encounter1 = JSON.stringify(encounter);
            localStorage.setItem('encounter', encounter1);
            var patient = JSON.stringify(encounter.patient);
            localStorage.setItem('patient', patient);
            this.router.navigate(['/doctorsWorkbench/allergyRecording']);
          }
        }, {
          key: "gotoVitalSign",
          value: function gotoVitalSign(encounter) {
            var encounter1 = JSON.stringify(encounter);
            localStorage.setItem('encounter', encounter1);
            var patient = JSON.stringify(encounter.patient);
            localStorage.setItem('patient', patient);
            this.router.navigate(['/doctorsWorkbench/vitalSign']);
          }
        }]);

        return DoctorsWorkbenchComponent;
      }();

      _DoctorsWorkbenchComponent.ctorParameters = function () {
        return [{
          type: _master_department_services_department_service__WEBPACK_IMPORTED_MODULE_9__.DepartmentService
        }, {
          type: _master_lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_10__.LookupService
        }, {
          type: _appointment_services_appointment_service__WEBPACK_IMPORTED_MODULE_3__.AppointmentService
        }, {
          type: _encounter_services_encounter_service__WEBPACK_IMPORTED_MODULE_7__.EncounterService
        }, {
          type: _master_service_center_services_branch_service_service__WEBPACK_IMPORTED_MODULE_12__.BranchServiceService
        }, {
          type: _encounter_services_consultant_service__WEBPACK_IMPORTED_MODULE_6__.ConsultantService
        }, {
          type: _master_unit_master_services_employee_master_service__WEBPACK_IMPORTED_MODULE_14__.EmployeeService
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router
        }];
      };

      _DoctorsWorkbenchComponent.propDecorators = {
        appointment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.Output
        }]
      };
      _DoctorsWorkbenchComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
        selector: 'app-doctors-workbench',
        template: _raw_loader_doctors_workbench_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _router_animations__WEBPACK_IMPORTED_MODULE_15__.routerTransition)()],
        styles: [_doctors_workbench_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DoctorsWorkbenchComponent);
      /***/
    },

    /***/
    63075:
    /*!***************************************************************!*\
      !*** ./src/app/doctors-workbench/doctors-workbench.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DoctorsWorkbenchModule": function DoctorsWorkbenchModule() {
          return (
            /* binding */
            _DoctorsWorkbenchModule
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


      var _doctors_workbench_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./doctors-workbench-routing.module */
      74668);
      /* harmony import */


      var _doctors_workbench_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./doctors-workbench.component */
      77715);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared */
      51679);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../material/material.module */
      90898);
      /* harmony import */


      var _components_referal_referal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/referal/referal.component */
      21071);
      /* harmony import */


      var _appointment_appointment_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../appointment/appointment.module */
      17425);
      /* harmony import */


      var _nurseworkbench_nurseworkbench_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../nurseworkbench/nurseworkbench.module */
      2869);

      var _DoctorsWorkbenchModule = function DoctorsWorkbenchModule() {
        _classCallCheck(this, DoctorsWorkbenchModule);
      };

      _DoctorsWorkbenchModule = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_doctors_workbench_component__WEBPACK_IMPORTED_MODULE_1__.DoctorsWorkbenchComponent, _components_referal_referal_component__WEBPACK_IMPORTED_MODULE_4__.ReferalComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _doctors_workbench_routing_module__WEBPACK_IMPORTED_MODULE_0__.DoctorsWorkbenchRoutingModule, _shared__WEBPACK_IMPORTED_MODULE_2__.PageHeaderModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _appointment_appointment_module__WEBPACK_IMPORTED_MODULE_5__.AppointmentModule, _nurseworkbench_nurseworkbench_module__WEBPACK_IMPORTED_MODULE_6__.NurseworkbenchModule],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
        exports: []
      })], _DoctorsWorkbenchModule);
      /***/
    },

    /***/
    26524:
    /*!****************************************************************************!*\
      !*** ./src/app/doctors-workbench/components/referal/referal.component.css ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "table {\r\n  width: 100%;\r\n}\r\n.form-control{\r\n\r\n\tmargin-bottom:2px;\r\n}\r\n.ng-touched .ng-invalid{\r\n\tborder-left: 5px solid red;\r\n}\r\n.ng-touched .ng-valid:not(mrn) {\r\n\tborder-left: 5px solid green;\r\n}\r\n.mat-header-cell{\r\n\tfont-size:16px;\r\n\tfont-weight: 500;\r\n\tcolor:black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZmVyYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjtBQUNBOztDQUVDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsMEJBQTBCO0FBQzNCO0FBQ0E7Q0FDQyw0QkFBNEI7QUFDN0I7QUFDQTtDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsV0FBVztBQUNaIiwiZmlsZSI6InJlZmVyYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZm9ybS1jb250cm9se1xyXG5cclxuXHRtYXJnaW4tYm90dG9tOjJweDtcclxufVxyXG4ubmctdG91Y2hlZCAubmctaW52YWxpZHtcclxuXHRib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcclxufVxyXG4ubmctdG91Y2hlZCAubmctdmFsaWQ6bm90KG1ybikge1xyXG5cdGJvcmRlci1sZWZ0OiA1cHggc29saWQgZ3JlZW47XHJcbn1cclxuLm1hdC1oZWFkZXItY2VsbHtcclxuXHRmb250LXNpemU6MTZweDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG5cdGNvbG9yOmJsYWNrO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    48615:
    /*!*******************************************************************!*\
      !*** ./src/app/doctors-workbench/doctors-workbench.component.css ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "table {\r\n  width: 100%;\r\n}\r\n.form-control{\r\n\r\n\tmargin-bottom:2px;\r\n}\r\n.ng-touched .ng-invalid{\r\n\tborder-left: 5px solid red;\r\n}\r\n.ng-touched .ng-valid:not(mrn) {\r\n\tborder-left: 5px solid green;\r\n}\r\nthead tr th{\r\n\tfont-size:16px;\r\n\tfont-weight:500;\r\n}\r\n#table-header:nth-child(1){\r\n\tbackground-color: #ffff00; \r\n}\r\n#row-color:nth-child(2n-1) {\r\n\tbackground-color: #EA80FC; \r\n}\r\n#row-color:nth-child(2n) {\r\n\tbackground-color: #1DE9B6;\r\n}\r\n#matTabContent{\r\n\twidth:fit-container;\r\n\theight:auto;\r\n}\r\na:hover{\r\n\tbackground-color:#ff0080;\r\n}\r\na:active{\r\n\tbackground-color:powderblue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3RvcnMtd29ya2JlbmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTs7Q0FFQyxpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLDBCQUEwQjtBQUMzQjtBQUNBO0NBQ0MsNEJBQTRCO0FBQzdCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtBQUNoQjtBQUVDO0NBQ0EseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsbUJBQW1CO0NBQ25CLFdBQVc7QUFDWjtBQUNBO0NBQ0Msd0JBQXdCO0FBQ3pCO0FBQ0E7Q0FDQywyQkFBMkI7QUFDNUIiLCJmaWxlIjoiZG9jdG9ycy13b3JrYmVuY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZm9ybS1jb250cm9se1xyXG5cclxuXHRtYXJnaW4tYm90dG9tOjJweDtcclxufVxyXG4ubmctdG91Y2hlZCAubmctaW52YWxpZHtcclxuXHRib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcclxufVxyXG4ubmctdG91Y2hlZCAubmctdmFsaWQ6bm90KG1ybikge1xyXG5cdGJvcmRlci1sZWZ0OiA1cHggc29saWQgZ3JlZW47XHJcbn1cclxudGhlYWQgdHIgdGh7XHJcblx0Zm9udC1zaXplOjE2cHg7XHJcblx0Zm9udC13ZWlnaHQ6NTAwO1xyXG59XHJcblxyXG4gI3RhYmxlLWhlYWRlcjpudGgtY2hpbGQoMSl7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmYwMDsgXHJcbn1cclxuI3Jvdy1jb2xvcjpudGgtY2hpbGQoMm4tMSkge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNFQTgwRkM7IFxyXG59XHJcbiNyb3ctY29sb3I6bnRoLWNoaWxkKDJuKSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzFERTlCNjtcclxufSBcclxuI21hdFRhYkNvbnRlbnR7XHJcblx0d2lkdGg6Zml0LWNvbnRhaW5lcjtcclxuXHRoZWlnaHQ6YXV0bztcclxufVxyXG5hOmhvdmVye1xyXG5cdGJhY2tncm91bmQtY29sb3I6I2ZmMDA4MDtcclxufVxyXG5hOmFjdGl2ZXtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOnBvd2RlcmJsdWU7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    47070:
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/doctors-workbench/components/referal/referal.component.html ***!
      \*******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card\">\n\t<div class=\"card-body\">\n\t\t<form #outPatientSearchForm=ngForm>\n\t\t\t<div class=\"row\">\n\t\t\t\t<label class=\"col-md-2\">MR No.</label>\n\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control p-1\" [(ngModel)]=\"mrn\"\n\t\t\t\t\t\tname=\"mrn\">\n\t\t\t\t</div>\n\n\t\t\t\t<label class=\"col-md-2\">Patient Name</label>\n\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control p-1\"\n\t\t\t\t\t\t[(ngModel)]=\"patientName\" name=\"patientName\">\n\t\t\t\t</div>\n\n\t\t\t\t<label class=\"col-md-2\">From Department</label>\n\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t<select class=\"form-control p-1\"\n\t\t\t\t\t\t[(ngModel)]=\"fromDepartmentForSearch\" disabled\n\t\t\t\t\t\tname=\"fromDepartmentForSearch\">\n\t\t\t\t\t\t<option [value]=null>---select---</option>\n\t\t\t\t\t\t<option *ngFor=\"let department of departmentList\"\n\t\t\t\t\t\t\t[value]=\"department.departmentId\">{{department.departmentName}}</option>\n\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<label class=\"col-md-2\">To Department</label>\n\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t<select class=\"form-control p-1\"\n\t\t\t\t\t\t[(ngModel)]=\"toDepartmentForSearch\" name=\"toDepartmentForSearch\" disabled>\n\t\t\t\t\t\t<option [value]=null>---select---</option>\n\t\t\t\t\t\t<option *ngFor=\"let department of departmentList\"\n\t\t\t\t\t\t\t[value]=\"department.departmentId\">{{department.departmentName}}</option>\n\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<label class=\"col-md-2\">From Consultant</label>\n\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t<select class=\"form-control p-1\" disabled\n\t\t\t\t\t\tname=\"fromConsultantForSearch\"\n\t\t\t\t\t\t[(ngModel)]=\"fromConsultantForSearch\" ngModel>\n\t\t\t\t\t\t<option>---select---</option>\n\t\t\t\t\t\t<ng-container *ngFor=\"let consultant of consultantList\">\n\t\t\t\t\t\t<option [value]=\"consultant.consultantId\">{{consultant.consultantName}}</option>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<label class=\"col-md-2\">To Consultant</label>\n\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t<select class=\"form-control p-1\" disabled\n\t\t\t\t\t\tname=\"toConsultantForSearch\" [(ngModel)]=\"toConsultantForSearch\"\n\t\t\t\t\t\tngModel>\n\t\t\t\t\t\t<option>---select---</option>\n\t\t\t\t\t\t<ng-container *ngFor=\"let consultant of consultantList\">\n\t\t\t\t\t\t<option [value]=\"consultant.consultantId\">{{consultant.consultantName}}</option>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\n\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<label class=\"col-md-2\">Request Date From</label>\n\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t<input type=\"date\" name=\"visitDateFrom\"\n\t\t\t\t\t\t[(ngModel)]=\"requestDateFrom\" required class=\"form-control p-1\">\n\t\t\t\t</div>\n\t\t\t\t<label class=\"col-md-2\">Request Date To</label>\n\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t<input type=\"date\" name=\"visitDateTo\" [(ngModel)]=\"requestDateTo\"\n\t\t\t\t\t\trequired class=\"form-control p-1\">\n\t\t\t\t</div>\n\n\t\t\t\t<label class=\"col-md-2\">Approval Status</label>\n\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t<select class=\"form-control p-1\"\n\t\t\t\t\t\t[(ngModel)]=\"approvalStatusForSearch\" disabled\n\t\t\t\t\t\tname=\"approvalStatusForSearch\">\n\t\t\t\t\t\t<option [value]=null>---select---</option>\n\t\t\t\t\t\t<ng-container *ngFor=\"let lookupEntity of lookupEntityList\">\n\t\t\t\t\t\t<option *ngIf=\"lookupEntity.category.categoryId==113\"\n\t\t\t\t\t\t\t[value]=\"lookupEntity.lookupId\">{{lookupEntity.lookupValue}}</option>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row \">\n\t\t\t\t<label class=\"col-md-2\">Phone NO.</label>\n\t\t\t\t<div class=\"col-md-2 input-group\">\n\t\t\t\t\t<input type=\"text\" class=\"col-md-3  form-control p-0\"\n\t\t\t\t\t\tname=\"countryCode\" placeholder=\"+91\"> <input type=\"text\"\n\t\t\t\t\t\tclass=\"col-md-9  form-control\" [pattern]=\"'^[7-9][0-9]*$'\"\n\t\t\t\t\t\tminlength=8 maxlength=12 name=\"phoneNo\" [(ngModel)]=\"phoneNo\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col pt-2\">\n\t\t\t\t\t<span\n\t\t\t\t\t\t*ngIf=\"(outPatientSearchForm.touched && outPatientSearchForm.invalid)\"\n\t\t\t\t\t\tstyle=\"color: red;\">Please Select Visit-Date-From and\n\t\t\t\t\t\tVisit-Date-To</span>\n\t\t\t\t\t<button mat-raised-button type=\"button\"\n\t\t\t\t\t\tclass=\"btn-success float-right\" (click)=\"searchByDateRange()\"\n\t\t\t\t\t\t[disabled]=\"!outPatientSearchForm.valid\">Search</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n<div class=\"card w-100\">\n\t<table mat-table  matSort\n\t\tmatSortActive=\"patientName\" matSortDisableClear\n\t\tmatSortDirection=\"desc\">\n\n\t\t<!-- patientName Column -->\n\t\t<ng-container matColumnDef=\"patientName\">\n\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\n\t\t\tPatientName</th>\n\t\t</ng-container>\n\n\t\t<!-- fromDepartment Column -->\n\t\t<ng-container matColumnDef=\"fromDepartment\">\n\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\n\t\t\tFrom Department</th>\n\t\t</ng-container>\n\n\t\t<!-- fromConsultant Column -->\n\t\t<ng-container matColumnDef=\"fromConsultant\">\n\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\n\t\t\tFrom Consultant</th>\n\t\t</ng-container>\n\n\t\t<!-- ToDepartment Column -->\n\t\t<ng-container matColumnDef=\"toDepartment\">\n\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\n\t\t\tTo Department</th>\n\t\t</ng-container>\n\n\t\t<!-- ToConsultant Column -->\n\t\t<ng-container matColumnDef=\"toConsultant\">\n\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\n\t\t\tTo Consultant</th>\n\t\t</ng-container>\n\n\t\t<!-- Referal Count Column -->\n\t\t<ng-container matColumnDef=\"referralCount\">\n\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\n\t\t\tReferral Count</th>\n\t\t</ng-container>\n\n\t\t<!-- Requested Date Column -->\n\t\t<ng-container matColumnDef=\"requestedDate\">\n\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\n\t\t\tRequested Date</th>\n\t\t</ng-container>\n\n\t\t<!-- Approval Status Column -->\n\t\t<ng-container matColumnDef=\"approvalStatus\">\n\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\n\t\t\tApproval Status</th>\n\t\t</ng-container>\n\n\t\t<!-- Priority Column -->\n\t\t<ng-container matColumnDef=\"priority\">\n\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\n\t\t\tPriority</th>\n\t\t</ng-container>\n\n\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\t</table>\n</div>\n\n\n";
      /***/
    },

    /***/
    85826:
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/doctors-workbench/doctors-workbench.component.html ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<div [@routerTransition]>\r\n\t<app-page-header [mainhead]=\"'Dashboard'\"\r\n\t\t[heading]=\"'Doctors Work Bench'\" [mainheadLink]=\"'/dashboard'\" [icon]=\"'fa-calendar'\"></app-page-header>\r\n</div>\r\n<div class=\"card\">\r\n\t<div class=\"card-head justify-content-center\">\r\n\t\t<mat-tab-group backgroundColor=\"primary\" color=\"warn\">\r\n\t\t<div fxLayout=\"row\" fxLayoutAlign=\"space-between none\">\r\n\t\t\t<mat-tab> <ng-template mat-tab-label>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<mat-icon>person</mat-icon>\r\n\t\t\t\t\tOutpatient\r\n\t\t\t\t</div>\r\n\t\t\t\t</ng-template> <ng-template matTabContent>\r\n\t\t\t\t\r\n\t\t\t\t<app-nurseworkbench [isNurseWorkbench] = \"false\"></app-nurseworkbench>\r\n\t\t\t\t</ng-template> \r\n\t\t\t</mat-tab>\r\n\t\t\t<!-- <mat-tab> <ng-template mat-tab-label> <mat-icon>accessible</mat-icon>\r\n\t\t\tIn-Patient</ng-template> <ng-template matTabContent>In Patients</ng-template> </mat-tab> -->\r\n\t\t\t\r\n<!-- ********************************************Rereal Patient Data goes here******************************** -->\r\n\t\t\t<mat-tab>\r\n\t\t\t\t <ng-template mat-tab-label>\r\n\t\t\t\t  <mat-icon>assignment</mat-icon>Referal\r\n\t\t\t\t </ng-template>\r\n\t\t\t\t<ng-template matTabContent>\r\n\t\t\t\t\t\t<app-referal></app-referal>\r\n\t\t\t\t</ng-template> \r\n\t\t\t</mat-tab>\r\n\t\t\t<mat-tab> <ng-template mat-tab-label > <div (click) = \"gotoAppointment()\"><mat-icon>event</mat-icon>MyAppointments</div></ng-template>\r\n\t\t\t\t<ng-template matTabContent>\r\n\t\t\t\t\t<app-new-appointment [appointment] = \"appointment\" [isFromDoctorsWorkbench] = \"true\"></app-new-appointment>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</mat-tab>\r\n\r\n\t\t</div>\r\n\t\t</mat-tab-group>\r\n\t</div>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_doctors-workbench_doctors-workbench_module_ts-es5.js.map