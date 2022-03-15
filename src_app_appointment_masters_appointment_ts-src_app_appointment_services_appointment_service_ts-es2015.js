(self["webpackChunkElitePro"] = self["webpackChunkElitePro"] || []).push([["src_app_appointment_masters_appointment_ts-src_app_appointment_services_appointment_service_ts"],{

/***/ 59542:
/*!****************************************************!*\
  !*** ./src/app/appointment/masters/appointment.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Appointment": function() { return /* binding */ Appointment; }
/* harmony export */ });
/* harmony import */ var _master_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../master/masters/base-entity */ 28685);
/* harmony import */ var _master_department_masters_department__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../master/department/masters/department */ 10776);
/* harmony import */ var _master_service_center_masters_branch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../master/service-center/masters/branch */ 40478);
/* harmony import */ var _master_unit_master_masters_Employee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../master/unit-master/masters/Employee */ 51716);
/* harmony import */ var _master_unit_master_masters_unit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../master/unit-master/masters/unit */ 56552);
/* harmony import */ var _patient_master_patient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../patient/master/patient */ 19975);






class Appointment extends _master_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity {
    constructor() {
        super();
        this.branch = new _master_service_center_masters_branch__WEBPACK_IMPORTED_MODULE_2__.Branch();
        this.department = new _master_department_masters_department__WEBPACK_IMPORTED_MODULE_1__.Department();
        this.unit = new _master_unit_master_masters_unit__WEBPACK_IMPORTED_MODULE_4__.Unit();
        this.doctor = new _master_unit_master_masters_Employee__WEBPACK_IMPORTED_MODULE_3__.Employee();
        this.patient = new _patient_master_patient__WEBPACK_IMPORTED_MODULE_5__.Patient();
        this.fromDate = new Date();
        this.toDate = new Date();
        this.appointment = "appointment";
        this.appointmentDateTime = new Date();
        this.visitDate = new Date();
    }
}


/***/ }),

/***/ 83430:
/*!*************************************************************!*\
  !*** ./src/app/appointment/services/appointment.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentService": function() { return /* binding */ AppointmentService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../main.service */ 29118);




let AppointmentService = class AppointmentService {
    constructor(http, mainService) {
        this.http = http;
        this.mainService = mainService;
        this.baseUrl = "";
        this.baseUrl = this.mainService.getBaseUrl();
    }
    getAppointmentTimeList(startTime, endTime, interval) {
        return this.http.get(`${this.baseUrl}/appointmentTimeList/${startTime}/${endTime}/${interval}`);
    }
    createAppointment(appointment) {
        return this.http.post(`${this.baseUrl}/appointment/add`, appointment);
    }
    getAppointmentList() {
        return this.http.get(`${this.baseUrl}/appointment/get`);
    }
    getAppointmentListByFilter(selectedDate, doctorId, departmentId, branchId) {
        return this.http.get(`${this.baseUrl}/appointmentList/${selectedDate}/${doctorId}/${departmentId}/${branchId}`);
    }
    updateAppointment(appointmentId, appointment) {
        return this.http.put(`${this.baseUrl}/appointment/update/${appointmentId}`, appointment);
    }
    deleteAppointment(appointmentId) {
        return this.http.delete(`${this.baseUrl}/appointment/${appointmentId}`);
    }
};
AppointmentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService }
];
AppointmentService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AppointmentService);



/***/ })

}]);
//# sourceMappingURL=src_app_appointment_masters_appointment_ts-src_app_appointment_services_appointment_service_ts-es2015.js.map