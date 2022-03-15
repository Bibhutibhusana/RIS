(self["webpackChunkElitePro"] = self["webpackChunkElitePro"] || []).push([["default-src_app_nurseworkbench_nurseworkbench_module_ts"],{

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



/***/ }),

/***/ 65848:
/*!******************************************************************!*\
  !*** ./src/app/doctors-workbench/pipes/outpatient-searc.pipe.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutPatientPipe": function() { return /* binding */ OutPatientPipe; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let OutPatientPipe = class OutPatientPipe {
    transform(value, mrn, patientName, department, serviceCenter, encounterStatus) {
        if (!mrn && !patientName && !department && !serviceCenter && !encounterStatus) {
            return value;
        }
        if (mrn) {
            return value.filter((val) => {
                let rVal = (val.patient.mrn.toLowerCase() === mrn.toLowerCase());
                return rVal;
            });
        }
        else if (patientName) {
            return value.filter((value) => {
                let rVal = (value.patient.firstName.toLowerCase().includes(patientName.toLowerCase()));
                //console.log(rVal)
                return rVal;
            });
        }
        else if (department) {
            return value.filter((value) => {
                let rVal = (value.appointment.department.departmentId == department);
                //console.log(value.appointment.department.departmentId.toString(),arg3)
                //console.log(rVal)
                return rVal;
            });
        }
        else if (serviceCenter) {
            return value.filter((value) => {
                let rVal = (value.appointment == serviceCenter);
                //console.log(value.appointment.department.departmentId.toString(),arg3)
                //console.log(rVal)
                return rVal;
            });
        }
        else if (encounterStatus) {
            console.log(encounterStatus);
            return value.filter((value) => {
                let rVal = (value.encounterStatus.lookupId == encounterStatus);
                //console.log(value.appointment.department.departmentId.toString(),arg3)
                console.log(rVal, encounterStatus);
                return rVal;
            });
        }
    }
};
OutPatientPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'outpatientpipe'
    })
], OutPatientPipe);



/***/ }),

/***/ 57233:
/*!*************************************************!*\
  !*** ./src/app/encounter/masters/consultant.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Consultant": function() { return /* binding */ Consultant; }
/* harmony export */ });
/* harmony import */ var _master_service_center_masters_service_center__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../master/service-center/masters/service-center */ 39758);

class Consultant {
    constructor() {
        this.serviceCenter = new _master_service_center_masters_service_center__WEBPACK_IMPORTED_MODULE_0__.ServiceCenter;
    }
}


/***/ }),

/***/ 25405:
/*!************************************************!*\
  !*** ./src/app/encounter/masters/encounter.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Encounter": function() { return /* binding */ Encounter; }
/* harmony export */ });
/* harmony import */ var _appointment_masters_appointment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../appointment/masters/appointment */ 59542);
/* harmony import */ var _master_department_masters_department__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../master/department/masters/department */ 10776);
/* harmony import */ var _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../master/lookup-module/masters/lookup-entity */ 11697);
/* harmony import */ var _master_service_center_masters_service_center__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../master/service-center/masters/service-center */ 39758);
/* harmony import */ var _patient_master_patient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../patient/master/patient */ 19975);
/* harmony import */ var _consultant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consultant */ 57233);
/* harmony import */ var _visit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visit */ 34494);







class Encounter {
    constructor() {
        this.department = new _master_department_masters_department__WEBPACK_IMPORTED_MODULE_1__.Department;
        this.serviceCenter = new _master_service_center_masters_service_center__WEBPACK_IMPORTED_MODULE_3__.ServiceCenter;
        this.consultant = new _consultant__WEBPACK_IMPORTED_MODULE_5__.Consultant;
        this.paymentType = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity;
        this.billing = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity;
        this.expectedTimeForConsultation = new Date();
        this.consultantType = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity;
        this.patient = new _patient_master_patient__WEBPACK_IMPORTED_MODULE_4__.Patient;
        this.encounterTime = new Date();
        this.appointment = new _appointment_masters_appointment__WEBPACK_IMPORTED_MODULE_0__.Appointment;
        this.encounterStatus = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity();
        this.encounterDate = new Date();
        this.visit = new _visit__WEBPACK_IMPORTED_MODULE_6__.Visit();
    }
}


/***/ }),

/***/ 34494:
/*!********************************************!*\
  !*** ./src/app/encounter/masters/visit.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Visit": function() { return /* binding */ Visit; }
/* harmony export */ });
/* harmony import */ var _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../master/lookup-module/masters/lookup-entity */ 11697);
/* harmony import */ var _patient_master_patient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../patient/master/patient */ 19975);


class Visit {
    constructor() {
        this.visitType = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
        this.patientCategory = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
        this.paymentType = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity;
        this.patientStatus = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity;
        this.patient = new _patient_master_patient__WEBPACK_IMPORTED_MODULE_1__.Patient;
        this.visitDate = new Date();
        this.clearedDateTime = new Date();
        this.visitPatientStatus = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity;
        this.markedForDischargeDate = new Date();
        this.validDate = new Date();
    }
}


/***/ }),

/***/ 73794:
/*!**********************************************************!*\
  !*** ./src/app/encounter/services/consultant.service.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultantService": function() { return /* binding */ ConsultantService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../main.service */ 29118);




let ConsultantService = class ConsultantService {
    constructor(http, mainService) {
        this.http = http;
        this.mainService = mainService;
        this.baseUrl = "";
        this.baseUrl = this.mainService.getBaseUrl();
    }
    getConsultantList() {
        return this.http.get(`${this.baseUrl}/consultant/get`);
    }
};
ConsultantService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService }
];
ConsultantService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ConsultantService);



/***/ }),

/***/ 85992:
/*!*********************************************************!*\
  !*** ./src/app/encounter/services/encounter.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EncounterService": function() { return /* binding */ EncounterService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../main.service */ 29118);




let EncounterService = class EncounterService {
    constructor(http, mainService) {
        this.http = http;
        this.mainService = mainService;
        this.baseUrl = '';
        this.baseUrl = this.mainService.getBaseUrl();
    }
    getEncounter() {
        return this.http.get(`${this.baseUrl}/encounter/get`);
    }
    CreateEncounter(encounter) {
        console.error(encounter);
        return this.http.post(`${this.baseUrl}/encounter/create`, encounter);
    }
    getEncounterByAppointment(appointment) {
        return this.http.get(`${this.baseUrl}/encounter/getByAppointment`, appointment);
    }
    getEncounterById(encounterId) {
        return this.http.get(`${this.baseUrl}/encounter/getById/${encounterId}`);
    }
};
EncounterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService }
];
EncounterService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], EncounterService);



/***/ }),

/***/ 9655:
/*!************************************************************************!*\
  !*** ./src/app/master/unit-master/services/employee-master.service.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeService": function() { return /* binding */ EmployeeService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../main.service */ 29118);




let EmployeeService = class EmployeeService {
    constructor(http, mainService) {
        this.http = http;
        this.mainService = mainService;
        this.baseUrl = "";
        this.baseUrl = this.mainService.getBaseUrl();
    }
    getEmployee() {
        return this.http.get(`${this.baseUrl}/employees/get`);
    }
    getEmployeesList() {
        return this.http.get(`${this.baseUrl}/employees/get`);
    }
    getEmployeeByEmployeeNo(empNo) {
        return this.http.get(`${this.baseUrl}/employee/getByEmpNo/${empNo}`);
    }
    createEmployee(employee) {
        return this.http.post(`${this.baseUrl}/employee/add`, employee);
    }
    updateEmployee(employeeId, employee) {
        return this.http.put(`${this.baseUrl}/employee/update/${employeeId}`, employee);
    }
};
EmployeeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService }
];
EmployeeService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], EmployeeService);



/***/ }),

/***/ 86046:
/*!************************************************************************************************!*\
  !*** ./src/app/nurseworkbench/components/checked-in-patients/checked-in-patients.component.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckedInPatientsComponent": function() { return /* binding */ CheckedInPatientsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_checked_in_patients_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./checked-in-patients.component.html */ 29753);
/* harmony import */ var _checked_in_patients_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checked-in-patients.component.css */ 54355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let CheckedInPatientsComponent = class CheckedInPatientsComponent {
    constructor(router) {
        this.router = router;
        this.isNurseWorkbench = true;
    }
    ngOnInit() {
    }
    gotEncounter(encounterList) {
        this.checkedInByDateSearchEncounterList = encounterList;
    }
    showpatientdetails(encounter) {
        localStorage.setItem('patientId', encounter.appointment.patient.patientId);
        if (this.isNurseWorkbench == true) {
            this.router.navigate(['/nurseWorkbench/consultation', encounter.encounterId]);
        }
        else {
            this.router.navigate(['/doctorsWorkbench/consultation', encounter.encounterId]);
        }
    }
    gotoallergyrecording(encounter) {
        localStorage.setItem('patient', JSON.stringify(encounter.appointment.patient));
        localStorage.setItem('encounter', JSON.stringify(encounter));
        if (this.isNurseWorkbench == true) {
            this.router.navigate(["/nurseWorkbench/allergyRecording"]);
        }
        else {
            this.router.navigate(["/doctorsWorkbench/allergyRecording"]);
        }
        //console.log(this.encounter.appointment.patient.patientId);
    }
    gotoClinicalNotes(encounter) {
        localStorage.setItem('patient', JSON.stringify(encounter.appointment.patient));
        localStorage.setItem('encounter', JSON.stringify(encounter));
        if (this.isNurseWorkbench == true) {
            this.router.navigate(['/nurseWorkbench/clinicalCoordinatorNotes']);
        }
        else {
            this.router.navigate(['/doctorsWorkbench/clinicalCoordinatorNotes']);
        }
    }
    gotoVitalSign(encounter) {
        let encounter1 = JSON.stringify(encounter);
        localStorage.setItem('encounter', encounter1);
        let patient = JSON.stringify(encounter.patient);
        localStorage.setItem('patient', patient);
        if (this.isNurseWorkbench == true) {
            this.router.navigate(['/nurseWorkbench/vitalSign']);
        }
        else {
            this.router.navigate(['/doctorsWorkbench/vitalSign']);
        }
    }
    gotoPatientDocument(encounter) {
        let encounter1 = JSON.stringify(encounter);
        localStorage.setItem('encounter', encounter1);
        let patient = JSON.stringify(encounter.patient);
        localStorage.setItem('patient', patient);
        if (this.isNurseWorkbench == true) {
            this.router.navigate(['/nurseWorkbench/patientDocument']);
        }
        else {
            this.router.navigate(['/doctorsWorkbench/patientDocument']);
        }
    }
    gotoClinicalDetails(encounter) {
        let encounter1 = JSON.stringify(encounter);
        localStorage.setItem('encounter', encounter1);
        let patient = JSON.stringify(encounter.patient);
        localStorage.setItem('patient', patient);
        if (this.isNurseWorkbench == true) {
            this.router.navigate(['/nurseWorkbench/clinicalDetails']);
        }
        else {
            this.router.navigate(['/doctorsWorkbench/clinicalDetails']);
        }
    }
};
CheckedInPatientsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
CheckedInPatientsComponent.propDecorators = {
    checkedInByDateSearchEncounterList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    mrn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    patientName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    isNurseWorkbench: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
CheckedInPatientsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-checked-in-patients',
        template: _raw_loader_checked_in_patients_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_checked_in_patients_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CheckedInPatientsComponent);



/***/ }),

/***/ 11563:
/*!**************************************************************************************************!*\
  !*** ./src/app/nurseworkbench/components/checked-out-patients/checked-out-patients.component.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckedOutPatientsComponent": function() { return /* binding */ CheckedOutPatientsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_checked_out_patients_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./checked-out-patients.component.html */ 2086);
/* harmony import */ var _checked_out_patients_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checked-out-patients.component.css */ 51482);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let CheckedOutPatientsComponent = class CheckedOutPatientsComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    gotEncounter(encounterList) {
        this.checkedInByDateSearchEncounterList = encounterList;
    }
    gotoallergyrecording(encounter) {
        sessionStorage.setItem('patientId', encounter.appointment.patient.patientId);
        sessionStorage.setItem('encounterId', encounter.encounterId);
        this.router.navigate(["/nurseworkbench/allergy-recording"]);
        //console.log(this.encounter.appointment.patient.patientId);
    }
    showpatientdetails(encounter) {
        sessionStorage.setItem('patientId', encounter.appointment.patient.patientId);
        this.router.navigate(['/nurseworkbench/consultation', encounter.encounterId]);
    }
    gotoClinicalNotes(encounter) {
        localStorage.setItem('patient', JSON.stringify(encounter.appointment.patient));
        localStorage.setItem('encounter', JSON.stringify(encounter));
        this.router.navigate(["/nurseWorkbench/clinicalCoordinatorNotes"]);
    }
    gotoVitalSign(encounter) {
        let encounter1 = JSON.stringify(encounter);
        localStorage.setItem('encounter', encounter1);
        let patient = JSON.stringify(encounter.patient);
        localStorage.setItem('patient', patient);
        this.router.navigate(['/doctorsWorkbench/vitalSign']);
    }
};
CheckedOutPatientsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
CheckedOutPatientsComponent.propDecorators = {
    checkedInByDateSearchEncounterList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    mrn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    patientName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
CheckedOutPatientsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-checked-out-patients',
        template: _raw_loader_checked_out_patients_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_checked_out_patients_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CheckedOutPatientsComponent);



/***/ }),

/***/ 85202:
/*!********************************************************************************************************!*\
  !*** ./src/app/nurseworkbench/components/not-checked-in-patients/not-checked-in-patients.component.ts ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotCheckedInPatientsComponent": function() { return /* binding */ NotCheckedInPatientsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_not_checked_in_patients_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./not-checked-in-patients.component.html */ 49911);
/* harmony import */ var _not_checked_in_patients_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-checked-in-patients.component.css */ 51918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let NotCheckedInPatientsComponent = class NotCheckedInPatientsComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    gotEncounter(encounterList) {
        this.checkedInByDateSearchEncounterList = encounterList;
    }
    gotoallergyrecording(encounter) {
        sessionStorage.setItem('patientId', encounter.appointment.patient.patientId);
        sessionStorage.setItem('encounterId', encounter.encounterId);
        this.router.navigate(["/nurseworkbench/allergy-recording"]);
        //console.log(this.encounter.appointment.patient.patientId);
    }
    showpatientdetails(encounter) {
        sessionStorage.setItem('patientId', encounter.appointment.patient.patientId);
        this.router.navigate(['/nurseworkbench/consultation', encounter.encounterId]);
    }
    gotoClinicalNotes(encounter) {
        localStorage.setItem('patient', JSON.stringify(encounter.appointment.patient));
        localStorage.setItem('encounter', JSON.stringify(encounter));
        this.router.navigate(["/nurseWorkbench/clinicalCoordinatorNotes"]);
    }
    gotoVitalSign(encounter) {
        let encounter1 = JSON.stringify(encounter);
        localStorage.setItem('encounter', encounter1);
        let patient = JSON.stringify(encounter.patient);
        localStorage.setItem('patient', patient);
        this.router.navigate(['/doctorsWorkbench/vitalSign']);
    }
};
NotCheckedInPatientsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
NotCheckedInPatientsComponent.propDecorators = {
    checkedInByDateSearchEncounterList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    mrn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    patientName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
NotCheckedInPatientsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-not-checked-in-patients',
        template: _raw_loader_not_checked_in_patients_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_not_checked_in_patients_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NotCheckedInPatientsComponent);



/***/ }),

/***/ 4443:
/*!*****************************************************************!*\
  !*** ./src/app/nurseworkbench/nurseworkbench-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NurseworkbenchRoutingModule": function() { return /* binding */ NurseworkbenchRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _nurseworkbench_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nurseworkbench.component */ 18802);




const routes = [
    { path: '', component: _nurseworkbench_component__WEBPACK_IMPORTED_MODULE_0__.NurseworkbenchComponent },
    { path: 'startConsultation/:id', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_clinical_consultation_consultation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../clinical/consultation/consultation.module */ 384)).then((m) => m.ConsultationModule) },
    { path: 'allergyRecording', loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_clinical_allergy-recording_allergy-recording_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../clinical/allergy-recording/allergy-recording.module */ 82488)).then((m) => m.AllergyRecordingModule) },
    { path: 'vitalSign', loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_clinical_vital-sign_vital-sign_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../clinical/vital-sign/vital-sign.module */ 88697)).then((m) => m.VitalSignModule) },
    { path: 'clinicalCoordinatorNotes', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ckeditor_ckeditor5-angular___ivy_ngcc___fesm2015_ckeditor-ckeditor5-angu-956b01"), __webpack_require__.e("src_app_clinical_clinical-coordinator-notes_clinical-coordinator-notes_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../clinical/clinical-coordinator-notes/clinical-coordinator-notes.module */ 9122)).then((m) => m.ClinicalCoordinatorNotesModule) },
    { path: 'patientDocument', loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_clinical_patient-document_patient-document_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! .././clinical/patient-document/patient-document.module */ 68742)).then((m) => m.PatientDocumentModule) },
    { path: 'clinicalDetails', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_appointment_appointment_module_ts"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ckeditor_ckeditor5-angular___ivy_ngcc___fesm2015_ckeditor-ckeditor5-angu-956b01"), __webpack_require__.e("default-src_app_clinical_vital-sign_vital-sign_module_ts"), __webpack_require__.e("default-src_app_clinical_allergy-recording_allergy-recording_module_ts"), __webpack_require__.e("default-src_app_encounter_encounter_module_ts"), __webpack_require__.e("default-src_app_clinical_patient-document_patient-document_module_ts"), __webpack_require__.e("src_app_clinical_clinical-details_clinical-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! .././clinical/clinical-details/clinical-details.module */ 22812)).then((m) => m.ClinicalDetailsModule) },
    { path: 'orders', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! .././clinical/orders/orders.module */ 55991)).then((m) => m.OrdersModule) }
];
let NurseworkbenchRoutingModule = class NurseworkbenchRoutingModule {
};
NurseworkbenchRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], NurseworkbenchRoutingModule);



/***/ }),

/***/ 18802:
/*!************************************************************!*\
  !*** ./src/app/nurseworkbench/nurseworkbench.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NurseworkbenchComponent": function() { return /* binding */ NurseworkbenchComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_nurseworkbench_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./nurseworkbench.component.html */ 59572);
/* harmony import */ var _nurseworkbench_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nurseworkbench.component.css */ 24009);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _appointment_masters_appointment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../appointment/masters/appointment */ 59542);
/* harmony import */ var _appointment_services_appointment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../appointment/services/appointment.service */ 83430);
/* harmony import */ var _encounter_masters_consultant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../encounter/masters/consultant */ 57233);
/* harmony import */ var _encounter_masters_encounter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../encounter/masters/encounter */ 25405);
/* harmony import */ var _encounter_services_consultant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../encounter/services/consultant.service */ 73794);
/* harmony import */ var _encounter_services_encounter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../encounter/services/encounter.service */ 85992);
/* harmony import */ var _master_department_masters_department__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../master/department/masters/department */ 10776);
/* harmony import */ var _master_department_services_department_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../master/department/services/department.service */ 25482);
/* harmony import */ var _master_lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../master/lookup-module/services/lookup.service */ 41168);
/* harmony import */ var _master_service_center_masters_service_center__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../master/service-center/masters/service-center */ 39758);
/* harmony import */ var _master_service_center_services_branch_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../master/service-center/services/branch-service.service */ 31582);
/* harmony import */ var _master_unit_master_masters_Employee__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../master/unit-master/masters/Employee */ 51716);
/* harmony import */ var _master_unit_master_services_employee_master_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../master/unit-master/services/employee-master.service */ 9655);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../router.animations */ 74903);




















let NurseworkbenchComponent = class NurseworkbenchComponent {
    constructor(departmentService, lookupService, appointmentService, encounterService, serviceCenterService, consultantService, employeeService, router, datePipe) {
        this.departmentService = departmentService;
        this.lookupService = lookupService;
        this.appointmentService = appointmentService;
        this.encounterService = encounterService;
        this.serviceCenterService = serviceCenterService;
        this.consultantService = consultantService;
        this.employeeService = employeeService;
        this.router = router;
        this.datePipe = datePipe;
        this.department = new _master_department_masters_department__WEBPACK_IMPORTED_MODULE_8__.Department();
        this.consultant = new _encounter_masters_consultant__WEBPACK_IMPORTED_MODULE_4__.Consultant();
        this.serviceCenter = new _master_service_center_masters_service_center__WEBPACK_IMPORTED_MODULE_11__.ServiceCenter();
        this.lookupEntityList = new Array();
        this.appointment = new _appointment_masters_appointment__WEBPACK_IMPORTED_MODULE_2__.Appointment();
        this.employee = new _master_unit_master_masters_Employee__WEBPACK_IMPORTED_MODULE_13__.Employee();
        this.encounterList = [];
        this.encounter = new _encounter_masters_encounter__WEBPACK_IMPORTED_MODULE_5__.Encounter();
        this.showImage = false;
        this.isSearched = false;
        this.date = new Date();
        this.checkedInByDateSearchEncounterList = [];
        this.departmentForSearch = null;
        this.serviceCenterForSearch = null;
        this.encounterStatusForSearch = 183;
        this.visitTypeForSearch = null;
        this.isNurseWorkbench = true;
    }
    ngOnInit() {
        this.reloadData();
        this.visitDateFrom = this.datePipe.transform(this.date, 'yyyy-MM-dd');
        this.visitDateTo = this.datePipe.transform(this.date, 'yyyy-MM-dd');
    }
    reloadData() {
        this.departmentService.getAllDepartments().subscribe(data => {
            this.departmentList = data;
            //console.log(data)
        }),
            this.serviceCenterService.getServiceCenter().subscribe(data => {
                this.serviceCenterList = data;
                //console.log(data)
            }),
            this.consultantService.getConsultantList().subscribe(data => {
                this.consultantList = data;
            }),
            this.lookupService.getAllLookupEntities().subscribe(data => {
                this.lookupEntityList = data;
            }),
            this.appointmentService.getAppointmentList().subscribe(data => {
                this.appointmentList = data;
            }),
            this.employeeService.getEmployee().subscribe(data => {
                this.employeeList = data;
            }),
            this.encounterService.getEncounter().subscribe(data => {
                this.encounterList = data;
                //console.log(this.encounterList)
            });
        setTimeout(() => {
            for (let i of this.encounterList) {
                //console.log(i)
            }
        }, 3000);
        //console.log(this.encounter.encounterTime);
    }
    showServiceCenter(event) {
        this.departmentId = event;
        for (let department of this.departmentList) {
            if (department.departmentId == this.departmentId) {
                this.department = department;
            }
        }
    }
    showConsultant(event) {
        this.serviceCenterId = event;
        for (let serviceCenter of this.serviceCenterList) {
            if (serviceCenter.serviceCenterId == this.serviceCenterId) {
                this.serviceCenter = serviceCenter;
            }
        }
    }
    encounterTime(appointment) {
        this.encounterService.getEncounterByAppointment(appointment).subscribe(data => {
            return data;
        });
        return "not-found";
    }
    showpatientdetails(encounter) {
        sessionStorage.setItem('patientId', encounter.appointment.patient.patientId);
        this.router.navigate(['/nurseworkbench/consultation', encounter.encounterId]);
    }
    showCheckin(encounter) {
        //console.log(encounter);
    }
    gotoallergyrecording(encounter) {
        sessionStorage.setItem('patientId', encounter.appointment.patient.patientId);
        sessionStorage.setItem('encounterId', encounter.encounterId);
        this.router.navigate(["/nurseworkbench/allergy-recording"]);
        //console.log(this.encounter.appointment.patient.patientId);
    }
    searchByDateRange() {
        this.checkedInByDateSearchEncounterList = [];
        for (let encounter of this.encounterList) {
            let date = new Date(encounter.encounterDate);
            let encounterDate = date.getTime();
            let fromDate = new Date(this.visitDateFrom);
            let toDate = new Date(this.visitDateTo);
            if (fromDate.getTime() < encounterDate && encounterDate < toDate.getTime()) {
                this.checkedInByDateSearchEncounterList.push(encounter);
            }
        }
        this.isSearched = true;
    }
    showEncounterStatus(value) {
        console.log(this.encounterStatusForSearch);
    }
};
NurseworkbenchComponent.ctorParameters = () => [
    { type: _master_department_services_department_service__WEBPACK_IMPORTED_MODULE_9__.DepartmentService },
    { type: _master_lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_10__.LookupService },
    { type: _appointment_services_appointment_service__WEBPACK_IMPORTED_MODULE_3__.AppointmentService },
    { type: _encounter_services_encounter_service__WEBPACK_IMPORTED_MODULE_7__.EncounterService },
    { type: _master_service_center_services_branch_service_service__WEBPACK_IMPORTED_MODULE_12__.BranchServiceService },
    { type: _encounter_services_consultant_service__WEBPACK_IMPORTED_MODULE_6__.ConsultantService },
    { type: _master_unit_master_services_employee_master_service__WEBPACK_IMPORTED_MODULE_14__.EmployeeService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe }
];
NurseworkbenchComponent.propDecorators = {
    checkedInByDateSearchEncounterList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.Output }],
    isNurseWorkbench: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.Input }]
};
NurseworkbenchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
        selector: 'app-nurseworkbench',
        template: _raw_loader_nurseworkbench_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_15__.routerTransition)()],
        styles: [_nurseworkbench_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NurseworkbenchComponent);



/***/ }),

/***/ 2869:
/*!*********************************************************!*\
  !*** ./src/app/nurseworkbench/nurseworkbench.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NurseworkbenchModule": function() { return /* binding */ NurseworkbenchModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _nurseworkbench_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nurseworkbench-routing.module */ 4443);
/* harmony import */ var _nurseworkbench_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nurseworkbench.component */ 18802);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ 51679);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _components_checked_in_patients_checked_in_patients_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/checked-in-patients/checked-in-patients.component */ 86046);
/* harmony import */ var _components_checked_out_patients_checked_out_patients_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/checked-out-patients/checked-out-patients.component */ 11563);
/* harmony import */ var _components_not_checked_in_patients_not_checked_in_patients_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/not-checked-in-patients/not-checked-in-patients.component */ 85202);
/* harmony import */ var _doctors_workbench_pipes_outpatient_searc_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../doctors-workbench/pipes/outpatient-searc.pipe */ 65848);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material/material.module */ 90898);













let NurseworkbenchModule = class NurseworkbenchModule {
};
NurseworkbenchModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [
            _nurseworkbench_component__WEBPACK_IMPORTED_MODULE_1__.NurseworkbenchComponent,
            _components_checked_in_patients_checked_in_patients_component__WEBPACK_IMPORTED_MODULE_3__.CheckedInPatientsComponent,
            _components_checked_out_patients_checked_out_patients_component__WEBPACK_IMPORTED_MODULE_4__.CheckedOutPatientsComponent,
            _components_not_checked_in_patients_not_checked_in_patients_component__WEBPACK_IMPORTED_MODULE_5__.NotCheckedInPatientsComponent,
            _doctors_workbench_pipes_outpatient_searc_pipe__WEBPACK_IMPORTED_MODULE_6__.OutPatientPipe,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _nurseworkbench_routing_module__WEBPACK_IMPORTED_MODULE_0__.NurseworkbenchRoutingModule,
            _shared__WEBPACK_IMPORTED_MODULE_2__.PageHeaderModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModule,
            _material_material_module__WEBPACK_IMPORTED_MODULE_7__.MaterialModule
        ],
        exports: [
            _components_checked_in_patients_checked_in_patients_component__WEBPACK_IMPORTED_MODULE_3__.CheckedInPatientsComponent,
            _components_checked_out_patients_checked_out_patients_component__WEBPACK_IMPORTED_MODULE_4__.CheckedOutPatientsComponent,
            _components_not_checked_in_patients_not_checked_in_patients_component__WEBPACK_IMPORTED_MODULE_5__.NotCheckedInPatientsComponent,
            _nurseworkbench_component__WEBPACK_IMPORTED_MODULE_1__.NurseworkbenchComponent,
            _doctors_workbench_pipes_outpatient_searc_pipe__WEBPACK_IMPORTED_MODULE_6__.OutPatientPipe
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe]
    })
], NurseworkbenchModule);



/***/ }),

/***/ 54355:
/*!*************************************************************************************************!*\
  !*** ./src/app/nurseworkbench/components/checked-in-patients/checked-in-patients.component.css ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" #table-header:nth-child(1){\r\n\tbackground-color: #ffff00; \r\n}\r\n#row-color:nth-child(2n-1) {\r\n\tbackground-color: #EA80FC; \r\n}\r\n#row-color:nth-child(2n) {\r\n\tbackground-color: #1DE9B6;\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrZWQtaW4tcGF0aWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQztDQUNBLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUIiLCJmaWxlIjoiY2hlY2tlZC1pbi1wYXRpZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICN0YWJsZS1oZWFkZXI6bnRoLWNoaWxkKDEpe1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmMDA7IFxyXG59XHJcbiNyb3ctY29sb3I6bnRoLWNoaWxkKDJuLTEpIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRUE4MEZDOyBcclxufVxyXG4jcm93LWNvbG9yOm50aC1jaGlsZCgybikge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMxREU5QjY7XHJcbn0gIl19 */");

/***/ }),

/***/ 51482:
/*!***************************************************************************************************!*\
  !*** ./src/app/nurseworkbench/components/checked-out-patients/checked-out-patients.component.css ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" #table-header:nth-child(1){\r\n\tbackground-color: #ffff00; \r\n}\r\n#row-color:nth-child(2n-1) {\r\n\tbackground-color: #EA80FC; \r\n}\r\n#row-color:nth-child(2n) {\r\n\tbackground-color: #1DE9B6;\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrZWQtb3V0LXBhdGllbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7Q0FDQSx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MseUJBQXlCO0FBQzFCIiwiZmlsZSI6ImNoZWNrZWQtb3V0LXBhdGllbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgI3RhYmxlLWhlYWRlcjpudGgtY2hpbGQoMSl7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmYwMDsgXHJcbn1cclxuI3Jvdy1jb2xvcjpudGgtY2hpbGQoMm4tMSkge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNFQTgwRkM7IFxyXG59XHJcbiNyb3ctY29sb3I6bnRoLWNoaWxkKDJuKSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzFERTlCNjtcclxufSAiXX0= */");

/***/ }),

/***/ 51918:
/*!*********************************************************************************************************!*\
  !*** ./src/app/nurseworkbench/components/not-checked-in-patients/not-checked-in-patients.component.css ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" #table-header:nth-child(1){\r\n\tbackground-color: #ffff00; \r\n}\r\n#row-color:nth-child(2n-1) {\r\n\tbackground-color: #EA80FC; \r\n}\r\n#row-color:nth-child(2n) {\r\n\tbackground-color: #1DE9B6;\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1jaGVja2VkLWluLXBhdGllbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7Q0FDQSx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MseUJBQXlCO0FBQzFCIiwiZmlsZSI6Im5vdC1jaGVja2VkLWluLXBhdGllbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgI3RhYmxlLWhlYWRlcjpudGgtY2hpbGQoMSl7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmYwMDsgXHJcbn1cclxuI3Jvdy1jb2xvcjpudGgtY2hpbGQoMm4tMSkge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNFQTgwRkM7IFxyXG59XHJcbiNyb3ctY29sb3I6bnRoLWNoaWxkKDJuKSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzFERTlCNjtcclxufSAiXX0= */");

/***/ }),

/***/ 24009:
/*!*************************************************************!*\
  !*** ./src/app/nurseworkbench/nurseworkbench.component.css ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" #table-header:nth-child(1){\r\n\tbackground-color: #ffff00; \r\n}\r\n#row-color:nth-child(2n-1) {\r\n\tbackground-color: #EA80FC; \r\n}\r\n#row-color:nth-child(2n) {\r\n\tbackground-color: #1DE9B6;\r\n}\r\n#matTabContent{\r\n\twidth:fit-container;\r\n\theight:auto;\r\n}\r\na:hover{\r\n\tbackground-color:#ff0080;\r\n}\r\na:active{\r\n\tbackground-color:powderblue;\r\n}\r\n.nav-tabs{\r\n\t    border: 2px solid transparent;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51cnNld29ya2JlbmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7Q0FDQSx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsV0FBVztBQUNaO0FBQ0E7Q0FDQyx3QkFBd0I7QUFDekI7QUFDQTtDQUNDLDJCQUEyQjtBQUM1QjtBQUNBO0tBQ0ssNkJBQTZCO0FBQ2xDIiwiZmlsZSI6Im51cnNld29ya2JlbmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgI3RhYmxlLWhlYWRlcjpudGgtY2hpbGQoMSl7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmYwMDsgXHJcbn1cclxuI3Jvdy1jb2xvcjpudGgtY2hpbGQoMm4tMSkge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNFQTgwRkM7IFxyXG59XHJcbiNyb3ctY29sb3I6bnRoLWNoaWxkKDJuKSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzFERTlCNjtcclxufSBcclxuI21hdFRhYkNvbnRlbnR7XHJcblx0d2lkdGg6Zml0LWNvbnRhaW5lcjtcclxuXHRoZWlnaHQ6YXV0bztcclxufVxyXG5hOmhvdmVye1xyXG5cdGJhY2tncm91bmQtY29sb3I6I2ZmMDA4MDtcclxufVxyXG5hOmFjdGl2ZXtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOnBvd2RlcmJsdWU7XHJcbn1cclxuLm5hdi10YWJze1xyXG5cdCAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufSJdfQ== */");

/***/ }),

/***/ 29753:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nurseworkbench/components/checked-in-patients/checked-in-patients.component.html ***!
  \****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card vh-50\">\r\n\t<table class=\"table table-bordered table-sm\">\r\n\t\t<thead>\r\n\t\t\t<tr id=\"table-header\">\r\n\t\t\t\t<th scope=\"col\" Style=\"font-size: 13px\">Patient Photo</th>\r\n\t\t\t\t<th scope=\"col\" Style=\"font-size: 13px\">Patient Demographic\r\n\t\t\t\t\tDetails</th>\r\n\t\t\t\t<th scope=\"col\" Style=\"font-size: 13px\">Consultation Details</th>\r\n\t\t\t\t<th scope=\"col\" Style=\"font-size: 13px\">QNo.</th>\r\n\t\t\t\t<th scope=\"col\" Style=\"font-size: 13px\">Appointment</th>\r\n\t\t\t\t<th scope=\"col\" Style=\"font-size: 13px\">Action</th>\r\n\t\t\t\t<th scope=\"col\" Style=\"font-size: 13px\">LAB</th>\r\n\t\t\t\t<th scope=\"col\" Style=\"font-size: 13px\">RAD</th>\r\n\t\t\t\t<th scope=\"col\" Style=\"font-size: 13px\">Start consultation</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody>\r\n\t\t\t<tr id=\"row-color\"\r\n\t\t\t\t*ngFor=\"let encounter of checkedInByDateSearchEncounterList | outpatientpipe : mrn:patientName\">\r\n\t\t\t\t<ng-container *ngIf=\"encounter.encounterStatus.lookupId == 183\">\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<div\r\n\t\t\t\t\t\t*ngIf=\"encounter.appointment.patient.gender.lookupValue.toString() == 'Male'  else showImage\">\r\n\r\n\t\t\t\t\t\t<img src=\"assets/images/patient.jpg\"\r\n\t\t\t\t\t\t\tStyle=\"margin-left: 0px; margin-top: 20%; margin-bottom: 5%; width: 70px; background: #fff; padding-left: 0px; border: 1px solid grey;\">\r\n\t\t\t\t\t</div> <ng-template #showImage> <img\r\n\t\t\t\t\t\tsrc=\"assets/images/female.jpg\"\r\n\t\t\t\t\t\tStyle=\"margin-left: 10px; margin-top: 20%; margin-bottom: 5%; width: 70px; background: #fff; padding-left: 0px; border: 1px solid grey;\">\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<div class=\" row col-md-12\">\r\n\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t<b>{{encounter.appointment.patient.firstName}}&nbsp;{{encounter.appointment.patient.lastName}}</b>,\r\n\t\t\t\t\t\t\t{{encounter.appointment.patient.gender.lookupValue}}-{{encounter.appointment.patient.age}}\r\n\t\t\t\t\t\t\t<br> <b>{{encounter.appointment.patient.mrn}}</b> |\r\n\t\t\t\t\t\t\t{{encounter.encounterTime| date: 'dd/MM/YY H:mm a'}} <br>\r\n\t\t\t\t\t\t\t{{encounter.encounterStatus.lookupValue}} |\r\n\t\t\t\t\t\t\t{{encounter.appointment.department.departmentName}},\r\n\t\t\t\t\t\t\t{{encounter.appointment.doctor.slot.lookupValue}} |\r\n\t\t\t\t\t\t\t{{encounter.appointment.appointmentStatusType.lookupValue}}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t<b style=\"color: blue\">Order | Cost Estimation | Forms | EMR</b>\r\n\t\t\t\t\t\t\t<br> <b>waiting time</b> <br>\r\n\t\t\t\t\t\t\t<p style=\"color: red\">Appointment time:\r\n\t\t\t\t\t\t\t\t{{encounter.appointment.fromDate | date: 'shortTime'}} -\r\n\t\t\t\t\t\t\t\t{{encounter.appointment.toDate | date:'shortTime'}}</p>\r\n\t\t\t\t\t\t\t<br> <b>counselling time-</b>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td>{{encounter.encounterTime |date: 'h:mm a '}}<br>{{encounter.appointment.department.departmentName}}\r\n\t\t\t\t\t/ {{encounter.appointment.doctor.firstName}}\r\n\t\t\t\t\t{{encounter.appointment.doctor.lastName}}\r\n\t\t\t\t</td>\r\n\r\n\r\n\t\t\t\t<td>{{encounter.queueNo}}</td>\r\n\t\t\t\t<td><a [routerLink]=\"['/appointment']\"><i\r\n\t\t\t\t\t\tclass=\"fa fa-calendar\"></i></a></td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<div ngbDropdown class=\"d-inline-block\">\r\n\t\t\t\t\t\t<a [routerLink]=\"[]\" id=\"dropdownBasic1\" ngbDropdownToggle>Select</a>\r\n\t\t\t\t\t\t<div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n\t\t\t\t\t\t\t<a ngbDropdownItem (click)=\"gotoallergyrecording(encounter)\">Allergy Recording(*)</a>\r\n\t\t\t\t\t\t\t<a ngbDropdownItem (click) = \"gotoPatientDocument(encounter)\">Patient Documents(*)</a>\r\n\t\t\t\t\t\t\t<a ngbDropdownItem (click)=\"gotoVitalSign(encounter)\">Vital Signs(*)NC</a> \r\n\t\t\t\t\t\t\t<a ngbDropdownItem (click) = \"gotoClinicalDetails(encounter)\">Clinical Details(*)</a> \r\n\t\t\t\t\t\t\t<a ngbDropdownItem (click)=\"gotoClinicalNotes(encounter)\">Clinical Co-ordiantor Notes(*)</a> \r\n\t\t\t\t\t\t\t<a ngbDropdownItem>Patient History</a> \r\n\t\t\t\t\t\t\t<a ngbDropdownItem>Waqeya Form</a> \r\n\t\t\t\t\t\t\t<a ngbDropdownItem>GHQ Claim Form</a> \r\n\t\t\t\t\t\t\t<a ngbDropdownItem>Claim Forms</a> \r\n\t\t\t\t\t\t\t<a ngbDropdownItem>Highlight</a>\r\n\t\t\t\t\t\t\t<a ngbDropdownItem>Sick Leave</a> \r\n\t\t\t\t\t\t\t<a ngbDropdownItem>Approval Health Status</a> \r\n\t\t\t\t\t\t\t<a ngbDropdownItem>Highlight</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td><a [routerLink]=\"[]\"><i class=\"fa fa-microscope\"></i></a></td>\r\n\t\t\t\t<td><a [routerLink]=\"[]\" href=\"Javascript:void(0)\"><i\r\n\t\t\t\t\t\tclass=\"fas fa-x-ray\"></i></a></td>\r\n\t\t\t\t<td><a onMouseOver=\"this.style.color='#0F0'\"\r\n\t\t\t\t\tonMouseOut=\"this.style.color='#00F'\" (id)=\"encounter.encounterId\">Start\r\n\t\t\t\t\t\tconsultation</a></td>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</table>\r\n</div>");

/***/ }),

/***/ 2086:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nurseworkbench/components/checked-out-patients/checked-out-patients.component.html ***!
  \******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n\t<table class=\"table table-bordered table-sm\">\r\n\t\t<thead>\r\n\t\t\t<tr id=\"table-header\">\r\n\t\t\t\t<th scope=\"col\" Style=\"font-size: 13px\">Patient Photo</th>\r\n\t\t\t\t<th scope=\"col\" Style=\"font-size: 13px\">Patient Demographic\r\n\t\t\t\t\tDetails</th>\r\n\t\t\t\t<th scope=\"col\" Style=\"font-size: 13px\">Consultation Details</th>\r\n\t\t\t\t<th scope=\"col\" Style=\"font-size: 13px\">QNo.</th>\r\n\t\t\t\t<th scope=\"col\" Style=\"font-size: 13px\">Appointment</th>\r\n\t\t\t\t<th scope=\"col\" Style=\"font-size: 13px\">Action</th>\r\n\t\t\t\t<th scope=\"col\" Style=\"font-size: 13px\">LAB</th>\r\n\t\t\t\t<th scope=\"col\" Style=\"font-size: 13px\">RAD</th>\r\n\t\t\t\t<th scope=\"col\" Style=\"font-size: 13px\">Start consultation</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody>\r\n\t\t\t<tr id=\"row-color\"\r\n\t\t\t\t*ngFor=\"let encounter of checkedInByDateSearchEncounterList | outpatientpipe : mrn:patientName\">\r\n\t\t\t\t<ng-container *ngIf=\"encounter.encounterStatus.lookupId == 184\">\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<div\r\n\t\t\t\t\t\t*ngIf=\"encounter.appointment.patient.gender.lookupValue.toString() == 'Male'  else showImage\">\r\n\r\n\t\t\t\t\t\t<img src=\"assets/images/patient.jpg\"\r\n\t\t\t\t\t\t\tStyle=\"margin-left: 0px; margin-top: 20%; margin-bottom: 5%; width: 70px; background: #fff; padding-left: 0px; border: 1px solid grey;\">\r\n\t\t\t\t\t</div> <ng-template #showImage> <img\r\n\t\t\t\t\t\tsrc=\"assets/images/female.jpg\"\r\n\t\t\t\t\t\tStyle=\"margin-left: 10px; margin-top: 20%; margin-bottom: 5%; width: 70px; background: #fff; padding-left: 0px; border: 1px solid grey;\">\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<div class=\" row col-md-12\">\r\n\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t<b>{{encounter.appointment.patient.firstName}}&nbsp;{{encounter.appointment.patient.lastName}}</b>,\r\n\t\t\t\t\t\t\t{{encounter.appointment.patient.gender.lookupValue}}-{{encounter.appointment.patient.age}}\r\n\t\t\t\t\t\t\t<br> <b>{{encounter.appointment.patient.mrn}}</b> |\r\n\t\t\t\t\t\t\t{{encounter.encounterTime| date: 'dd/MM/YY H:mm a'}} <br>\r\n\t\t\t\t\t\t\t{{encounter.encounterStatus.lookupValue}} |\r\n\t\t\t\t\t\t\t{{encounter.appointment.department.departmentName}},\r\n\t\t\t\t\t\t\t{{encounter.appointment.doctor.slot.lookupValue}} |\r\n\t\t\t\t\t\t\t{{encounter.appointment.appointmentStatusType.lookupValue}}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t<b style=\"color: blue\">Order | Cost Estimation | Forms | EMR</b>\r\n\t\t\t\t\t\t\t<br> <b>waiting time</b> <br>\r\n\t\t\t\t\t\t\t<p style=\"color: red\">Appointment time:\r\n\t\t\t\t\t\t\t\t{{encounter.appointment.fromDate | date: 'shortTime'}} -\r\n\t\t\t\t\t\t\t\t{{encounter.appointment.toDate | date:'shortTime'}}</p>\r\n\t\t\t\t\t\t\t<br> <b>counselling time-</b>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td>{{encounter.encounterTime |date: 'h:mm a '}}<br>{{encounter.appointment.department.departmentName}}\r\n\t\t\t\t\t/ {{encounter.appointment.doctor.firstName}}\r\n\t\t\t\t\t{{encounter.appointment.doctor.lastName}}\r\n\t\t\t\t</td>\r\n\r\n\r\n\t\t\t\t<td>{{encounter.queueNo}}</td>\r\n\t\t\t\t<td><a [routerLink]=\"['/appointment']\"><i\r\n\t\t\t\t\t\tclass=\"fa fa-calendar\"></i></a></td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<div ngbDropdown class=\"d-inline-block\">\r\n\t\t\t\t\t\t<a [routerLink]=\"[]\" id=\"dropdownBasic1\" ngbDropdownToggle>Select</a>\r\n\t\t\t\t\t\t<div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n\t\t\t\t\t\t\t<a ngbDropdownItem (id)=\"encounter.encounterId\"\r\n\t\t\t\t\t\t\t\t(click)=\"gotoallergyrecording(encounter)\">Allergy\r\n\t\t\t\t\t\t\t\tRecording(*)</a> <a ngbDropdownItem>Patient Documents</a> <a\r\n\t\t\t\t\t\t\t\tngbDropdownItem (click)=\"gotoVitalSign(encounter)\">Vital\r\n\t\t\t\t\t\t\t\tSigns(*)</a> <a ngbDropdownItem>Clinical Details</a> <a\r\n\t\t\t\t\t\t\t\tngbDropdownItem (click)=\"gotoClinicalNotes(encounter)\">Clinical\r\n\t\t\t\t\t\t\t\tCo-ordiantor Notes(*)</a> <a ngbDropdownItem>Patient History</a> <a\r\n\t\t\t\t\t\t\t\tngbDropdownItem>Waqeya Form</a> <a ngbDropdownItem>GHQ Claim\r\n\t\t\t\t\t\t\t\tForm</a> <a ngbDropdownItem>Claim Forms</a> <a ngbDropdownItem>Highlight</a>\r\n\t\t\t\t\t\t\t<a ngbDropdownItem>Sick Leave</a> <a ngbDropdownItem>Approval\r\n\t\t\t\t\t\t\t\tHealth Status</a> <a ngbDropdownItem>Highlight</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td><a [routerLink]=\"[]\"><i class=\"fa fa-microscope\"></i></a></td>\r\n\t\t\t\t<td><a [routerLink]=\"[]\" href=\"Javascript:void(0)\"><i\r\n\t\t\t\t\t\tclass=\"fas fa-x-ray\"></i></a></td>\r\n\t\t\t\t<td><a onMouseOver=\"this.style.color='#0F0'\"\r\n\t\t\t\t\tonMouseOut=\"this.style.color='#00F'\" (id)=\"encounter.encounterId\">Start\r\n\t\t\t\t\t\tconsultation</a></td>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</table>\r\n</div>\r\n");

/***/ }),

/***/ 49911:
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nurseworkbench/components/not-checked-in-patients/not-checked-in-patients.component.html ***!
  \************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n\t<table class=\"table table-bordered table-sm\">\r\n\t\t<thead>\r\n\t\t\t<tr id=\"table-header\">\r\n\t\t\t\t<th scope=\"col\" Style=\"font-size: 13px\">Patient Photo</th>\r\n\t\t\t\t<th scope=\"col\" Style=\"font-size: 13px\">Patient Demographic\r\n\t\t\t\t\tDetails</th>\r\n\t\t\t\t<th scope=\"col\" Style=\"font-size: 13px\">Consultation Details</th>\r\n\t\t\t\t<th scope=\"col\" Style=\"font-size: 13px\">QNo.</th>\r\n\t\t\t\t<th scope=\"col\" Style=\"font-size: 13px\">Appointment</th>\r\n\t\t\t\t<th scope=\"col\" Style=\"font-size: 13px\">Action</th>\r\n\t\t\t\t<th scope=\"col\" Style=\"font-size: 13px\">LAB</th>\r\n\t\t\t\t<th scope=\"col\" Style=\"font-size: 13px\">RAD</th>\r\n\t\t\t\t<th scope=\"col\" Style=\"font-size: 13px\">Start consultation</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody>\r\n\t\t\t<tr id=\"row-color\"\r\n\t\t\t\t*ngFor=\"let encounter of checkedInByDateSearchEncounterList | outpatientpipe : mrn:patientName\">\r\n\t\t\t\t<ng-container *ngIf=\"encounter.encounterStatus.lookupId == 185\">\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<div\r\n\t\t\t\t\t\t*ngIf=\"encounter.appointment.patient.gender.lookupValue.toString() == 'Male'  else showImage\">\r\n\r\n\t\t\t\t\t\t<img src=\"assets/images/patient.jpg\"\r\n\t\t\t\t\t\t\tStyle=\"margin-left: 0px; margin-top: 20%; margin-bottom: 5%; width: 70px; background: #fff; padding-left: 0px; border: 1px solid grey;\">\r\n\t\t\t\t\t</div> <ng-template #showImage> <img\r\n\t\t\t\t\t\tsrc=\"assets/images/female.jpg\"\r\n\t\t\t\t\t\tStyle=\"margin-left: 10px; margin-top: 20%; margin-bottom: 5%; width: 70px; background: #fff; padding-left: 0px; border: 1px solid grey;\">\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<div class=\" row col-md-12\">\r\n\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t<b>{{encounter.appointment.patient.firstName}}&nbsp;{{encounter.appointment.patient.lastName}}</b>,\r\n\t\t\t\t\t\t\t{{encounter.appointment.patient.gender.lookupValue}}-{{encounter.appointment.patient.age}}\r\n\t\t\t\t\t\t\t<br> <b>{{encounter.appointment.patient.mrn}}</b> |\r\n\t\t\t\t\t\t\t{{encounter.encounterTime| date: 'dd/MM/YY H:mm a'}} <br>\r\n\t\t\t\t\t\t\t{{encounter.encounterStatus.lookupValue}} |\r\n\t\t\t\t\t\t\t{{encounter.appointment.department.departmentName}},\r\n\t\t\t\t\t\t\t{{encounter.appointment.doctor.slot.lookupValue}} |\r\n\t\t\t\t\t\t\t{{encounter.appointment.appointmentStatusType.lookupValue}}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t<b style=\"color: blue\">Order | Cost Estimation | Forms | EMR</b>\r\n\t\t\t\t\t\t\t<br> <b>waiting time</b> <br>\r\n\t\t\t\t\t\t\t<p style=\"color: red\">Appointment time:\r\n\t\t\t\t\t\t\t\t{{encounter.appointment.fromDate | date: 'shortTime'}} -\r\n\t\t\t\t\t\t\t\t{{encounter.appointment.toDate | date:'shortTime'}}</p>\r\n\t\t\t\t\t\t\t<br> <b>counselling time-</b>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td>{{encounter.encounterTime |date: 'h:mm a '}}<br>{{encounter.appointment.department.departmentName}}\r\n\t\t\t\t\t/ {{encounter.appointment.doctor.firstName}}\r\n\t\t\t\t\t{{encounter.appointment.doctor.lastName}}\r\n\t\t\t\t</td>\r\n\r\n\r\n\t\t\t\t<td>{{encounter.queueNo}}</td>\r\n\t\t\t\t<td><a [routerLink]=\"['/appointment']\"><i\r\n\t\t\t\t\t\tclass=\"fa fa-calendar\"></i></a></td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<div ngbDropdown class=\"d-inline-block\">\r\n\t\t\t\t\t\t<a [routerLink]=\"[]\" id=\"dropdownBasic1\" ngbDropdownToggle>Select</a>\r\n\t\t\t\t\t\t<div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n\t\t\t\t\t\t\t<a ngbDropdownItem (id)=\"encounter.encounterId\"\r\n\t\t\t\t\t\t\t\t(click)=\"gotoallergyrecording(encounter)\">Allergy\r\n\t\t\t\t\t\t\t\tRecording(*)</a> <a ngbDropdownItem>Patient Documents</a> <a\r\n\t\t\t\t\t\t\t\tngbDropdownItem (click)=\"gotoVitalSign(encounter)\">Vital\r\n\t\t\t\t\t\t\t\tSigns(*)</a> <a ngbDropdownItem>Clinical Details</a> <a\r\n\t\t\t\t\t\t\t\tngbDropdownItem (click)=\"gotoClinicalNotes(encounter)\">Clinical\r\n\t\t\t\t\t\t\t\tCo-ordiantor Notes(*)</a> <a ngbDropdownItem>Patient History</a> <a\r\n\t\t\t\t\t\t\t\tngbDropdownItem>Waqeya Form</a> <a ngbDropdownItem>GHQ Claim\r\n\t\t\t\t\t\t\t\tForm</a> <a ngbDropdownItem>Claim Forms</a> <a ngbDropdownItem>Highlight</a>\r\n\t\t\t\t\t\t\t<a ngbDropdownItem>Sick Leave</a> <a ngbDropdownItem>Approval\r\n\t\t\t\t\t\t\t\tHealth Status</a> <a ngbDropdownItem>Highlight</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td><a [routerLink]=\"[]\"><i class=\"fa fa-microscope\"></i></a></td>\r\n\t\t\t\t<td><a [routerLink]=\"[]\" href=\"Javascript:void(0)\"><i\r\n\t\t\t\t\t\tclass=\"fas fa-x-ray\"></i></a></td>\r\n\t\t\t\t<td><a onMouseOver=\"this.style.color='#0F0'\"\r\n\t\t\t\t\tonMouseOut=\"this.style.color='#00F'\" (id)=\"encounter.encounterId\">Start\r\n\t\t\t\t\t\tconsultation</a></td>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</table>\r\n</div>\r\n");

/***/ }),

/***/ 59572:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nurseworkbench/nurseworkbench.component.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div [@routerTransition] *ngIf=\"isNurseWorkbench\">\r\n\t<app-page-header [mainhead]=\"'Dashboard'\" [mainheadLink] = \"'/dashboard'\"\r\n\t\t[heading]=\"'Nurse Work Bench'\" [icon]=\"'fa-calendar'\"></app-page-header>\r\n</div>\r\n\r\n<div class=\"card\">\r\n\t<div class=\"card-head\">\r\n\t\t<nav class=\"navbar bg-dark text-white\">\r\n\t\t\t<h3>Out Patient Desk</h3>\r\n\t\t\t<button type=\"button\" class=\"btn btn-primary\">Walkin</button>\r\n\t\t</nav>\r\n\t</div>\r\n\t<div class=\"card-body\">\r\n\t\t<form #outPatientSearchForm=ngForm>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<label class=\"col-md-2\">MR No.</label>\r\n\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control p-1\" [(ngModel)]=\"mrn\"\r\n\t\t\t\t\t\tname=\"mrn\">\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<label class=\"col-md-2\">Patient Name</label>\r\n\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control p-1\"\r\n\t\t\t\t\t\t[(ngModel)]=\"patientName\" name=\"patientName\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-md-2\">Phone NO.</label>\r\n\t\t\t\t<div class=\"col-md-2 input-group\">\r\n\t\t\t\t\t<input type=\"text\" class=\"col-md-3  form-control p-0\"\r\n\t\t\t\t\t\tname=\"countryCode\" placeholder=\"+91\"> <input type=\"text\"\r\n\t\t\t\t\t\tclass=\"col-md-9  form-control\" [pattern]=\"'^[7-9][0-9]*$'\"\r\n\t\t\t\t\t\tminlength=8 maxlength=12 name=\"phoneNo\" ngModel>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<label class=\"col-md-2\">Department</label>\r\n\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t<select class=\"form-control p-1\"\r\n\t\t\t\t\t\t(change)=\"showServiceCenter($event.target.value)\"\r\n\t\t\t\t\t\t[(ngModel)]=\"departmentForSearch\" name=\"departmentForSearch\">\r\n\t\t\t\t\t\t<option [value]=null>---select---</option>\r\n\t\t\t\t\t\t<option *ngFor=\"let department of departmentList\"\r\n\t\t\t\t\t\t\t[value]=\"department.departmentId\">{{department.departmentName}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-md-2\">ServiceCenter</label>\r\n\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t<select class=\"form-control p-1\"\r\n\t\t\t\t\t\t(change)=\"showConsultant($event.target.value)\"\r\n\t\t\t\t\t\t[(ngModel)]=\"serviceCenterForSearch\" disabled\r\n\t\t\t\t\t\tname=\"serviceCenterForSearch\" ngModel>\r\n\t\t\t\t\t\t<option value=null>---select---</option>\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let serviceCenter of serviceCenterList\">\r\n\t\t\t\t\t\t<option\r\n\t\t\t\t\t\t\t*ngIf=\"serviceCenter.department.departmentId == departmentId \"\r\n\t\t\t\t\t\t\t[value]=\"serviceCenter.serviceCenterId\">{{serviceCenter.serviceCenterName}}</option>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-md-2\">Consultant</label>\r\n\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t<select class=\"form-control p-1\" disabled\r\n\t\t\t\t\t\tname=\"departmentForSearch\" [(ngModel)]=\"departmentForSearch\"\r\n\t\t\t\t\t\tngModel>\r\n\t\t\t\t\t\t<option [value]=null>---select---</option>\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let consultant of consultantList\">\r\n\t\t\t\t\t\t<option\r\n\t\t\t\t\t\t\t*ngIf=\"consultant.serviceCenter.serviceCenterId == serviceCenterId \"\r\n\t\t\t\t\t\t\t[value]=\"consultant.consultantId\">{{consultant.consultantName}}</option>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<label class=\"col-md-2\">Visit Type</label>\r\n\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t<select class=\"form-control p-1\" disabled ngModel\r\n\t\t\t\t\t\t[(ngModel)]=\"visitTypeForSearch\" name=\"visitTypeForSearch\">\r\n\t\t\t\t\t\t<option value=null>---select---</option>\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let lookupEntity of lookupEntityList\">\r\n\t\t\t\t\t\t<option *ngIf=\"lookupEntity.category.categoryId==21\"\r\n\t\t\t\t\t\t\t[value]=\"lookupEntity\">{{lookupEntity.lookupValue}}</option>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-md-2\">Visit Date From</label>\r\n\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t<input type=\"date\" name=\"visitDateFrom\" [(ngModel)]=\"visitDateFrom\"\r\n\t\t\t\t\t\trequired class=\"form-control p-1\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-md-2\">Visit Date To</label>\r\n\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t<input type=\"date\" name=\"visitDateTo\" [(ngModel)]=\"visitDateTo\"\r\n\t\t\t\t\t\trequired class=\"form-control p-1\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\r\n\t\t\t\t<label class=\"col-md-2\">Encounter Status</label>\r\n\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t<select class=\"form-control p-1\"\r\n\t\t\t\t\t\t[(ngModel)]=\"encounterStatusForSearch\"\r\n\t\t\t\t\t\t(change)=\"showEncounterStatus($event.target.value)\" disabled\r\n\t\t\t\t\t\tname=\"encounterStatus\">\r\n\t\t\t\t\t\t<option [value]=null>---select---</option>\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let lookupEntity of lookupEntityList\">\r\n\t\t\t\t\t\t<option *ngIf=\"lookupEntity.category.categoryId==113\"\r\n\t\t\t\t\t\t\t[value]=\"lookupEntity.lookupId\">{{lookupEntity.lookupValue}}</option>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md pt-1\">\r\n\t\t\t\t\t<span\r\n\t\t\t\t\t\t*ngIf=\"(outPatientSearchForm.touched && outPatientSearchForm.invalid)\"\r\n\t\t\t\t\t\tstyle=\"color: red;\">Please Select Visit-Date-From and\r\n\t\t\t\t\t\tVisit-Date-To</span>\r\n\t\t\t\t\t<button mat-raised-button type=\"button\"\r\n\t\t\t\t\t\tclass=\"btn-success float-right\" (click)=\"searchByDateRange()\"\r\n\t\t\t\t\t\t[disabled]=\"!outPatientSearchForm.valid\">Search</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n\r\n\r\n\r\n\r\n\t<div class=\"card-body p-0 m-0\">\r\n\r\n\t\t<!--  ************************************Tab set content goes here ********************************* -->\r\n\r\n\r\n\t\t<ul ngbNav #nav=\"ngbNav\" class=\"nav-tabs\"\r\n\t\t\tstyle=\"color: yellow; background-color: lightblue; padding: 0; margin: 0;\">\r\n\t\t\t<li [ngbNavItem]=\"1\">\r\n\t\t\t\t<a ngbNavLink class=\"p-1\">\r\n\t\t\t\t\t<button class=\"btn btn-primary btn-sm  m-0\">\r\n\t\t\t\t\t\t<i class=\"fa fa-user-circle\"></i><label>Checked-In Patients</label>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</a>\r\n\t\t\t\t\t<ng-template ngbNavContent>\r\n\t\t\t\t\t\t\t<app-checked-in-patients [patientName]=\"patientName\" [mrn]=\"mrn\"\r\n\t\t\t\t\t\t\t[checkedInByDateSearchEncounterList]=\"checkedInByDateSearchEncounterList\"\r\n\t\t\t\t\t\t\t[isNurseWorkbench] = \"isNurseWorkbench\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t</app-checked-in-patients>\r\n\t\t\t\t\t\t\r\n\t\t\t\t</ng-template></li>\r\n\t\t\t<li [ngbNavItem]=\"2\"><a ngbNavLink class=\"p-1\"><button\r\n\t\t\t\t\t\tclass=\"btn btn-info btn-sm  m-0\">\r\n\t\t\t\t\t\t<i class=\"fa fa-user\"></i><label>Checked-out Patients</label>\r\n\t\t\t\t\t</button></a> <ng-template ngbNavContent> <app-checked-out-patients\r\n\t\t\t\t\t[patientName]=\"patientName\" [mrn]=\"mrn\"\r\n\t\t\t\t\t[checkedInByDateSearchEncounterList]=\"checkedInByDateSearchEncounterList\"></app-checked-out-patients>\r\n\t\t\t\t</ng-template></li>\r\n\t\t\t<li [ngbNavItem]=\"3\"><a ngbNavLink class=\"p-1\"><button\r\n\t\t\t\t\t\tclass=\"btn btn-primary btn-sm  m-0\">\r\n\t\t\t\t\t\t<i class=\"fa fa-user-times\"></i><label>Not CheckedIn\r\n\t\t\t\t\t\t\tPatients</label>\r\n\t\t\t\t\t</button></a> <ng-template ngbNavContent> <app-not-checked-in-patients\r\n\t\t\t\t\t[patientName]=\"patientName\" [mrn]=\"mrn\"\r\n\t\t\t\t\t[checkedInByDateSearchEncounterList]=\"checkedInByDateSearchEncounterList\"></app-not-checked-in-patients>\r\n\t\t\t\t</ng-template></li>\r\n\r\n\r\n\t\t</ul>\r\n\r\n\t\t<div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\r\n\r\n\t\t<br>\r\n\t</div>\r\n\t<div>\r\n\t\t<router-outlet></router-outlet>\r\n\t</div>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_nurseworkbench_nurseworkbench_module_ts-es2015.js.map