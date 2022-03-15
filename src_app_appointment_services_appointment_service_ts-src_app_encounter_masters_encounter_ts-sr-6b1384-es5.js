(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (self["webpackChunkElitePro"] = self["webpackChunkElitePro"] || []).push([["src_app_appointment_services_appointment_service_ts-src_app_encounter_masters_encounter_ts-sr-6b1384"], {
    /***/
    59542:
    /*!****************************************************!*\
      !*** ./src/app/appointment/masters/appointment.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Appointment": function Appointment() {
          return (
            /* binding */
            _Appointment
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _master_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../master/masters/base-entity */
      28685);
      /* harmony import */


      var _master_department_masters_department__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../master/department/masters/department */
      10776);
      /* harmony import */


      var _master_service_center_masters_branch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../master/service-center/masters/branch */
      40478);
      /* harmony import */


      var _master_unit_master_masters_Employee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../master/unit-master/masters/Employee */
      51716);
      /* harmony import */


      var _master_unit_master_masters_unit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../master/unit-master/masters/unit */
      56552);
      /* harmony import */


      var _patient_master_patient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../patient/master/patient */
      19975);

      var _Appointment = /*#__PURE__*/function (_master_masters_base_) {
        _inherits(_Appointment, _master_masters_base_);

        var _super = _createSuper(_Appointment);

        function _Appointment() {
          var _this;

          _classCallCheck(this, _Appointment);

          _this = _super.call(this);
          _this.branch = new _master_service_center_masters_branch__WEBPACK_IMPORTED_MODULE_2__.Branch();
          _this.department = new _master_department_masters_department__WEBPACK_IMPORTED_MODULE_1__.Department();
          _this.unit = new _master_unit_master_masters_unit__WEBPACK_IMPORTED_MODULE_4__.Unit();
          _this.doctor = new _master_unit_master_masters_Employee__WEBPACK_IMPORTED_MODULE_3__.Employee();
          _this.patient = new _patient_master_patient__WEBPACK_IMPORTED_MODULE_5__.Patient();
          _this.fromDate = new Date();
          _this.toDate = new Date();
          _this.appointment = "appointment";
          _this.appointmentDateTime = new Date();
          _this.visitDate = new Date();
          return _this;
        }

        return _Appointment;
      }(_master_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity);
      /***/

    },

    /***/
    83430:
    /*!*************************************************************!*\
      !*** ./src/app/appointment/services/appointment.service.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppointmentService": function AppointmentService() {
          return (
            /* binding */
            _AppointmentService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../main.service */
      29118);

      var _AppointmentService = /*#__PURE__*/function () {
        function AppointmentService(http, mainService) {
          _classCallCheck(this, AppointmentService);

          this.http = http;
          this.mainService = mainService;
          this.baseUrl = "";
          this.baseUrl = this.mainService.getBaseUrl();
        }

        _createClass(AppointmentService, [{
          key: "getAppointmentTimeList",
          value: function getAppointmentTimeList(startTime, endTime, interval) {
            return this.http.get("".concat(this.baseUrl, "/appointmentTimeList/").concat(startTime, "/").concat(endTime, "/").concat(interval));
          }
        }, {
          key: "createAppointment",
          value: function createAppointment(appointment) {
            return this.http.post("".concat(this.baseUrl, "/appointment/add"), appointment);
          }
        }, {
          key: "getAppointmentList",
          value: function getAppointmentList() {
            return this.http.get("".concat(this.baseUrl, "/appointment/get"));
          }
        }, {
          key: "getAppointmentListByFilter",
          value: function getAppointmentListByFilter(selectedDate, doctorId, departmentId, branchId) {
            return this.http.get("".concat(this.baseUrl, "/appointmentList/").concat(selectedDate, "/").concat(doctorId, "/").concat(departmentId, "/").concat(branchId));
          }
        }, {
          key: "updateAppointment",
          value: function updateAppointment(appointmentId, appointment) {
            return this.http.put("".concat(this.baseUrl, "/appointment/update/").concat(appointmentId), appointment);
          }
        }, {
          key: "deleteAppointment",
          value: function deleteAppointment(appointmentId) {
            return this.http["delete"]("".concat(this.baseUrl, "/appointment/").concat(appointmentId));
          }
        }]);

        return AppointmentService;
      }();

      _AppointmentService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }, {
          type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService
        }];
      };

      _AppointmentService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _AppointmentService);
      /***/
    },

    /***/
    57233:
    /*!*************************************************!*\
      !*** ./src/app/encounter/masters/consultant.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Consultant": function Consultant() {
          return (
            /* binding */
            _Consultant
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _master_service_center_masters_service_center__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../master/service-center/masters/service-center */
      39758);

      var _Consultant = function _Consultant() {
        _classCallCheck(this, _Consultant);

        this.serviceCenter = new _master_service_center_masters_service_center__WEBPACK_IMPORTED_MODULE_0__.ServiceCenter();
      };
      /***/

    },

    /***/
    25405:
    /*!************************************************!*\
      !*** ./src/app/encounter/masters/encounter.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Encounter": function Encounter() {
          return (
            /* binding */
            _Encounter
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _appointment_masters_appointment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../appointment/masters/appointment */
      59542);
      /* harmony import */


      var _master_department_masters_department__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../master/department/masters/department */
      10776);
      /* harmony import */


      var _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../master/lookup-module/masters/lookup-entity */
      11697);
      /* harmony import */


      var _master_service_center_masters_service_center__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../master/service-center/masters/service-center */
      39758);
      /* harmony import */


      var _patient_master_patient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../patient/master/patient */
      19975);
      /* harmony import */


      var _consultant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./consultant */
      57233);
      /* harmony import */


      var _visit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./visit */
      34494);

      var _Encounter = function _Encounter() {
        _classCallCheck(this, _Encounter);

        this.department = new _master_department_masters_department__WEBPACK_IMPORTED_MODULE_1__.Department();
        this.serviceCenter = new _master_service_center_masters_service_center__WEBPACK_IMPORTED_MODULE_3__.ServiceCenter();
        this.consultant = new _consultant__WEBPACK_IMPORTED_MODULE_5__.Consultant();
        this.paymentType = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity();
        this.billing = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity();
        this.expectedTimeForConsultation = new Date();
        this.consultantType = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity();
        this.patient = new _patient_master_patient__WEBPACK_IMPORTED_MODULE_4__.Patient();
        this.encounterTime = new Date();
        this.appointment = new _appointment_masters_appointment__WEBPACK_IMPORTED_MODULE_0__.Appointment();
        this.encounterStatus = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity();
        this.encounterDate = new Date();
        this.visit = new _visit__WEBPACK_IMPORTED_MODULE_6__.Visit();
      };
      /***/

    },

    /***/
    34494:
    /*!********************************************!*\
      !*** ./src/app/encounter/masters/visit.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Visit": function Visit() {
          return (
            /* binding */
            _Visit
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../master/lookup-module/masters/lookup-entity */
      11697);
      /* harmony import */


      var _patient_master_patient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../patient/master/patient */
      19975);

      var _Visit = function _Visit() {
        _classCallCheck(this, _Visit);

        this.visitType = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
        this.patientCategory = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
        this.paymentType = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
        this.patientStatus = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
        this.patient = new _patient_master_patient__WEBPACK_IMPORTED_MODULE_1__.Patient();
        this.visitDate = new Date();
        this.clearedDateTime = new Date();
        this.visitPatientStatus = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
        this.markedForDischargeDate = new Date();
        this.validDate = new Date();
      };
      /***/

    },

    /***/
    73794:
    /*!**********************************************************!*\
      !*** ./src/app/encounter/services/consultant.service.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConsultantService": function ConsultantService() {
          return (
            /* binding */
            _ConsultantService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../main.service */
      29118);

      var _ConsultantService = /*#__PURE__*/function () {
        function ConsultantService(http, mainService) {
          _classCallCheck(this, ConsultantService);

          this.http = http;
          this.mainService = mainService;
          this.baseUrl = "";
          this.baseUrl = this.mainService.getBaseUrl();
        }

        _createClass(ConsultantService, [{
          key: "getConsultantList",
          value: function getConsultantList() {
            return this.http.get("".concat(this.baseUrl, "/consultant/get"));
          }
        }]);

        return ConsultantService;
      }();

      _ConsultantService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }, {
          type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService
        }];
      };

      _ConsultantService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _ConsultantService);
      /***/
    },

    /***/
    85992:
    /*!*********************************************************!*\
      !*** ./src/app/encounter/services/encounter.service.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EncounterService": function EncounterService() {
          return (
            /* binding */
            _EncounterService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../main.service */
      29118);

      var _EncounterService = /*#__PURE__*/function () {
        function EncounterService(http, mainService) {
          _classCallCheck(this, EncounterService);

          this.http = http;
          this.mainService = mainService;
          this.baseUrl = '';
          this.baseUrl = this.mainService.getBaseUrl();
        }

        _createClass(EncounterService, [{
          key: "getEncounter",
          value: function getEncounter() {
            return this.http.get("".concat(this.baseUrl, "/encounter/get"));
          }
        }, {
          key: "CreateEncounter",
          value: function CreateEncounter(encounter) {
            console.error(encounter);
            return this.http.post("".concat(this.baseUrl, "/encounter/create"), encounter);
          }
        }, {
          key: "getEncounterByAppointment",
          value: function getEncounterByAppointment(appointment) {
            return this.http.get("".concat(this.baseUrl, "/encounter/getByAppointment"), appointment);
          }
        }, {
          key: "getEncounterById",
          value: function getEncounterById(encounterId) {
            return this.http.get("".concat(this.baseUrl, "/encounter/getById/").concat(encounterId));
          }
        }]);

        return EncounterService;
      }();

      _EncounterService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }, {
          type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService
        }];
      };

      _EncounterService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _EncounterService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_appointment_services_appointment_service_ts-src_app_encounter_masters_encounter_ts-sr-6b1384-es5.js.map