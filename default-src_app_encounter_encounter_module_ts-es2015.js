(self["webpackChunkElitePro"] = self["webpackChunkElitePro"] || []).push([["default-src_app_encounter_encounter_module_ts"],{

/***/ 60333:
/*!*******************************************************!*\
  !*** ./src/app/encounter/encounter-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EncounterRoutingModule": function() { return /* binding */ EncounterRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _encounter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encounter.component */ 90354);




const routes = [
    { path: '', component: _encounter_component__WEBPACK_IMPORTED_MODULE_0__.EncounterComponent }
];
let EncounterRoutingModule = class EncounterRoutingModule {
};
EncounterRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], EncounterRoutingModule);



/***/ }),

/***/ 90354:
/*!**************************************************!*\
  !*** ./src/app/encounter/encounter.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EncounterComponent": function() { return /* binding */ EncounterComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_encounter_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./encounter.component.html */ 74396);
/* harmony import */ var _encounter_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encounter.component.css */ 78371);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _appointment_masters_appointment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../appointment/masters/appointment */ 59542);
/* harmony import */ var _master_department_masters_department__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../master/department/masters/department */ 10776);
/* harmony import */ var _master_department_services_department_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../master/department/services/department.service */ 25482);
/* harmony import */ var _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../master/lookup-module/masters/lookup-entity */ 11697);
/* harmony import */ var _master_lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../master/lookup-module/services/lookup.service */ 41168);
/* harmony import */ var _master_service_center_masters_service_center__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../master/service-center/masters/service-center */ 39758);
/* harmony import */ var _master_service_center_services_branch_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../master/service-center/services/branch-service.service */ 31582);
/* harmony import */ var _patient_master_patient__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../patient/master/patient */ 19975);
/* harmony import */ var _patient_service_patient_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../patient/service/patient.service */ 42766);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../router.animations */ 74903);
/* harmony import */ var _masters_consultant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./masters/consultant */ 57233);
/* harmony import */ var _masters_encounter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./masters/encounter */ 25405);
/* harmony import */ var _services_consultant_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/consultant.service */ 73794);
/* harmony import */ var _services_encounter_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/encounter.service */ 85992);




















let EncounterComponent = class EncounterComponent {
    constructor(modalService, config, encounterService, departmentService, lookupService, fb, serviceCenterService, consultantService, patientService) {
        this.modalService = modalService;
        this.config = config;
        this.encounterService = encounterService;
        this.departmentService = departmentService;
        this.lookupService = lookupService;
        this.fb = fb;
        this.serviceCenterService = serviceCenterService;
        this.consultantService = consultantService;
        this.patientService = patientService;
        this.consultant = new _masters_consultant__WEBPACK_IMPORTED_MODULE_12__.Consultant();
        this.patientList = new Array();
        this.patient = new _patient_master_patient__WEBPACK_IMPORTED_MODULE_9__.Patient;
        this.lookupEntityList = [];
        this.encounter = new _masters_encounter__WEBPACK_IMPORTED_MODULE_13__.Encounter;
        this.department = new _master_department_masters_department__WEBPACK_IMPORTED_MODULE_3__.Department();
        this.serviceCenter = new _master_service_center_masters_service_center__WEBPACK_IMPORTED_MODULE_7__.ServiceCenter();
        this.waitingPatientsForConsultation = [];
        this.createEncounter = new _masters_encounter__WEBPACK_IMPORTED_MODULE_13__.Encounter();
        this.appointment = new _appointment_masters_appointment__WEBPACK_IMPORTED_MODULE_2__.Appointment;
        this.isFromClinicalDetails = false;
    }
    ngOnInit() {
        this.createForm();
        this.reloadData();
    }
    createForm() {
        this.appointment = history.state;
        //console.log(this.appointment);
        this.encounterForm = this.fb.group({
            department: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.appointment.department),
            serviceCenter: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
            consultant: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
            printCaseSheet: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
            paymentType: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
            billing: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
            complaints: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
            waitingPatientsForConsultation: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
            expectedTimeForConsultation: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
            appointmentOrderedCptCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
            eligibilityNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
            consultantType: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
            cptCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
            mailSend: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
        });
    }
    reloadData() {
        this.patientService.getPatientList().subscribe(data => {
            this.patientList = data;
        });
        this.departmentService.getAllDepartments().subscribe(data => {
            this.departmentList = data;
        });
        this.serviceCenterService.getServiceCenter().subscribe(data => {
            this.serviceCenterList = data;
        });
        this.consultantService.getConsultantList().subscribe(data => {
            this.consultantList = data;
            //console.log(this.consultantList)
        });
        this.lookupService.getAllLookupEntities().subscribe(data => {
            this.lookupEntityList = data;
            //console.log(this.lookupEntityList);
        });
    }
    onSubmit(encounterForm) {
        //console.log("On Submit is called!!!!!!")
        //console.log(encounterForm.value);
        this.createEncounter = encounterForm.value;
        this.createEncounter.department = this.department;
        this.createEncounter.serviceCenter = this.serviceCenter;
        this.createEncounter.consultant = this.consultant;
        this.createEncounter.appointment = this.appointment;
        this.createEncounter.consultationCategory = this.consultationfee;
        //console.error(this.consultationfee)
        for (let lookup of this.lookupEntityList) {
            if (lookup.lookupId == 185) {
                this.createEncounter.encounterStatus = lookup;
            }
        }
        for (let consultation of Object.entries(this.consultant)) {
            //console.warn(consultation);
            //console.warn(this.consultationfee)
            for (let i of consultation) {
                if (i.toString() == this.consultationfee.toString()) {
                    //console.log("hii")
                    this.consultationCategory = Object.values(consultation)[1].toString();
                }
            }
        }
        this.createEncounter.consultationCategory = this.consultationCategory;
        this.createEncounter.patient = this.patient;
        //console.log(this.createEncounter.consultantType)
        //console.log(this.createEncounter)
        this.createEncounter.consultantType = encounterForm.value.consultantType;
        this.encounterService.CreateEncounter(this.createEncounter).subscribe(data => {
            alert("successfully created!!");
        });
        this.encounterForm.reset();
    }
    showServiceCenter(event) {
        this.departmentId = event;
        for (let department of this.departmentList) {
            if (department.departmentId == this.departmentId) {
                this.department = department;
            }
        }
        //console.log(event);
    }
    showConsultant(event) {
        this.serviceCenterId = event;
        for (let serviceCenter of this.serviceCenterList) {
            if (serviceCenter.serviceCenterId == this.serviceCenterId) {
                this.serviceCenter = serviceCenter;
            }
        }
        //console.log(this.serviceCenterId)
    }
    showFees(consultantId) {
        //console.warn(consultantId)
        for (let consultant of this.consultantList) {
            if (consultant.consultantId == consultantId) {
                this.consultant = consultant;
                this.consultationfee = this.consultant.firstVisitFee;
            }
        }
    }
    showFeesForEveryVisit(value) {
        //console.log(this.consultant)
        this.consultationfee = value;
    }
    onCreate(container) {
        this.modalService.open(container);
    }
    onAdd(patient) {
        this.patient = patient;
        if (this.patient.visitType == null) {
            this.patient.visitType = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_5__.LookupEntity();
            this.patient.visitType.lookupValue = "firstVisit";
            this.patient.visitType.lookupId = 47;
        }
        this.waitingPatientsForConsultation = [];
        this.waitingPatientsForConsultation.push(patient);
        this.modalService.dismissAll();
    }
    callPatientDetails(event) {
        this.patient = event;
        //console.log("This is patient from patient Demographic", event)
    }
};
EncounterComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModal },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModalConfig },
    { type: _services_encounter_service__WEBPACK_IMPORTED_MODULE_15__.EncounterService },
    { type: _master_department_services_department_service__WEBPACK_IMPORTED_MODULE_4__.DepartmentService },
    { type: _master_lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__.LookupService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder },
    { type: _master_service_center_services_branch_service_service__WEBPACK_IMPORTED_MODULE_8__.BranchServiceService },
    { type: _services_consultant_service__WEBPACK_IMPORTED_MODULE_14__.ConsultantService },
    { type: _patient_service_patient_service__WEBPACK_IMPORTED_MODULE_10__.PatientService }
];
EncounterComponent.propDecorators = {
    isFromClinicalDetails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.Input }]
};
EncounterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
        selector: 'app-encounter',
        template: _raw_loader_encounter_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_11__.routerTransition)()],
        styles: [_encounter_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EncounterComponent);



/***/ }),

/***/ 80861:
/*!***********************************************!*\
  !*** ./src/app/encounter/encounter.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EncounterModule": function() { return /* binding */ EncounterModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _encounter_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encounter-routing.module */ 60333);
/* harmony import */ var _encounter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encounter.component */ 90354);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ 51679);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _appointment_appointment_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../appointment/appointment.module */ 17425);
/* harmony import */ var _patient_control_patient_control_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../patient-control/patient-control.module */ 49870);









let EncounterModule = class EncounterModule {
};
EncounterModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [
            _encounter_component__WEBPACK_IMPORTED_MODULE_1__.EncounterComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _encounter_routing_module__WEBPACK_IMPORTED_MODULE_0__.EncounterRoutingModule,
            _shared__WEBPACK_IMPORTED_MODULE_2__.StatModule,
            _shared__WEBPACK_IMPORTED_MODULE_2__.PageHeaderModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _appointment_appointment_module__WEBPACK_IMPORTED_MODULE_3__.AppointmentModule,
            _patient_control_patient_control_module__WEBPACK_IMPORTED_MODULE_4__.PatientControlModule
        ],
        exports: [
            _encounter_component__WEBPACK_IMPORTED_MODULE_1__.EncounterComponent
        ]
    })
], EncounterModule);



/***/ }),

/***/ 78371:
/*!***************************************************!*\
  !*** ./src/app/encounter/encounter.component.css ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-control{\r\n\tpadding: 0;\r\n\tmargin: 0.25rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuY291bnRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsVUFBVTtDQUNWLGVBQWU7QUFDaEIiLCJmaWxlIjoiZW5jb3VudGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9se1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0bWFyZ2luOiAwLjI1cmVtO1xyXG59Il19 */");

/***/ }),

/***/ 74396:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/encounter/encounter.component.html ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition] *ngIf = \"!isFromClinicalDetails\">\n\t<app-page-header [mainhead]=\"'Encounter'\"\n\t\t[mainheadLink]=\"'/encounter'\" [heading]=\"'New Encounter'\"\n\t\t[icon]=\"'fa-cog'\"></app-page-header>\n\t\t<div class=\"bg-light border border-dark\">\n\t<app-patient-control (patientDetails) = \"callPatientDetails($event)\"></app-patient-control>\n</div>\n</div>\n<!--<nav class=\"navbar bg-dark text-white text-center\">\n   <label><b>Patient Name:</b></label>&nbsp;\n  <label><b>{{patient.firstName}}&nbsp;{{patient.lastName}}</b></label>\n\n  <div>\n   <label><b>MR NO. :</b></label>&nbsp;\n    <label ><b>{{patient.mrno}}</b></label>\n   <button class=\"button\" class=\"ml-auto btn btn-success\" (click)=\"onCreate(container)\">add patient</button>\n  </div>  \n  <h3 style = \"font-family: Sanse Serif\"> Patient Details</h3>\n     <button class=\"button\" class=\"ml-auto btn btn-success\" (click)=\"onCreate(container)\">add patient</button>\n</nav>-->\n\n<div class = \"card\">\n\t<div class =\"card-head\">\n\t\t<nav class=\" bg-dark text-center text-white p-0 m-0\">\n\t\t\t<h2 style = \"font-family: Sanse Serif\">Create Encounter</h2>\n\t\t</nav> \n\t</div>\n\t<div class=\"card-body\" >\n\t\t<form [formGroup] = \"encounterForm\" (ngSubmit)=\"onSubmit(encounterForm)\">\n\t\t\t<div class='row justify-content-end'>\n\t\t\t\t<label class=\"col-md-2 mt-2\">Department:</label> \n\t\t\t\t<div class = \"col-md-2\">\n\t\t\t\t\t<select class=\"form-control\" formControlName = \"department\"\n\t\t\t\t\t\t(change)=\"showServiceCenter($event.target.value)\">\n\t\t\t\t\t\t<option [ngValue] = \"null\">---select---</option>\n\t\t\t\t\t\t<option *ngFor=\"let department of departmentList\"\n\t\t\t\t\t\t[value]=\"department.departmentId\" >{{department.departmentName}}</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<label class=\"col-md-2 mt-2\">Service Center: </label> \n\t\t\t\t<div class = \"col-md-2\">\n\t\t\t\t\t<select class=\" form-control\" formControlName = \"serviceCenter\"\n\t\t\t\t\t\t(change)=\"showConsultant($event.target.value)\" >\n\t\t\t\t\t\t<option [ngValue] = null>---select---</option>\n\t\t\t\t\t\t<ng-container *ngFor=\"let serviceCenter of serviceCenterList\">\n\t\t\t\t\t\t\t<option *ngIf=\"serviceCenter.department.departmentId == departmentId \"\n\t\t\t\t\t\t\t[value]=\"serviceCenter.serviceCenterId\">{{serviceCenter.serviceCenterName}}</option>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<label class=\"col-md-2 mt-2\">Consultant:</label>\n\t\t\t\t<div class = \"col-md-2\"> \n\t\t\t\t\t<select class=\"form-control\" style=\"border-width: 2px;\" formControlName = \"consultant\"\n\t\t\t\t\t\t(change)=\"showFees($event.target.value)\">\n\t\t\t\t\t\t<option [ngValue] = null>---select---</option>\n\t\t\t\t\t\t<ng-container *ngFor=\"let consultant of consultantList\">\n\t\t\t\t\t\t\t<option *ngIf=\"consultant.serviceCenter.serviceCenterId == serviceCenterId\"\n\t\t\t\t\t\t\t[value]=\"consultant.consultantId\">{{consultant.consultantName}}</option>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\n\t\t\t\t<label class=\"col-md-2 mt-2\">Consultation Type:</label> \n\t\t\t\t<div class= \"col-md-2\">\n\t\t\t\t\t<select formControlName = \"consultantType\"\n\t\t\t\t\t\tclass=\"form-control\" style=\"border-width: 2px;\">\n\t\t\t\t\t\t<option [ngValue] = null>---select---</option>\n\t\t\t\t\t\t<ng-container *ngFor = \"let lookupEntit of lookupEntityList\" >\n\t\t\t\t\t\t\t<option *ngIf = \"lookupEntit.category.categoryId == 114\" [ngValue]=\"lookupEntit\">{{lookupEntit.lookupValue}}</option>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<label class=\"col-md-2 mt-2\">CPT Code:</label> \n\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t<input formControlName = \"cptCode\" class=\"form-control\" type=\"text\" name=\"cptCode\">\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t<label class=\"col-md-2 mt-2 \">Complaints:</label>\n\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t<textarea class=\"form-control\" formControlName = \"complaints\" cols=\"15\" ></textarea>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<label class=\"col-md-2 mt-1 \">Eligibility Number:</label>\n\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t<input class=\"form-control\" formControlName = \"eligibilityNumber\" type=\"text\" value=\"\">\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<label class=\"col-md-2  \">Appointment Ordered CPT Code:</label>\n\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t<input type = \"text\" class = \"form-control\">\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<label class=\"col-md-2\">print case sheet</label>\n\t\t\t\t<div class=\"col-md-2  pl-4\">\n\t\t\t\t\t<input type=\"checkbox\" class= \"float-center\" formControlName = \"printCaseSheet\" value=\"print\">\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<label class=\"col-md-2 \">consultation category:</label>\n\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t<select class=\"form-control\"(change)= \"showFeesForEveryVisit($event.target.value)\">\n\t\n\t\t\t\t\t\t<option selected=\"selected\" [value]=\"consultant.firstVisitFee\">First\n\t\t\t\t\t\t\tvisit</option>\n\t\t\t\t\t\t<option [value]=\"consultant.followupVisitFee\">Follow-up\n\t\t\t\t\t\t\tvisit</option>\n\t\t\t\t\t\t<option [value]=\"consultant.establishVisitFee\">Establish\n\t\t\t\t\t\t\tvisit</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<div class = \"col-md-2\">\n\t\t\t\t\t<input class=\"form-control\" value={{consultationfee}} readonly />\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<h6 class=\"col-md-2 mt-2\">Mail send: </h6>\n\t\t\t\t<div class=\"col-md-2 mt-2\">\n\t\t\t\t\t<input type=\"checkbox\" name=\"mail-send\" formControlName = \"mailSend\">\n\t\t\t\t</div>\n\t\t\t\t<div class = \"col-md-2\"></div>\n\t\t\t\t<label class=\"col-md-3 mt-2\">Waiting patients for consultation:</label>\n\t\t\t\t<div class = \"col-md-3 border border-black\"></div>\n\t\t\t\t\n\t\t\t\t<label class=\"col-md-3 mt-2 \"><h6>Expected time for consultation:</h6></label>\n\t\t\t\t<div class=\"col-md-3 border border-black\">\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<label class=\"col-md-3 mt-2\"><h6>Payment type:</h6></label>\n\t\t\t\t<div class = \"col-md-3 mt-2\">\n\t\t\t\t\t<ng-container  *ngFor = \"let lookupEntit of lookupEntityList\" >\n\t\t\t\t\t\t<ng-container  *ngIf = \"lookupEntit.category.categoryId == 22\">\n\t\t\t\t\t\t\t<input type=\"radio\" name=\"paymentType\" formControlName = \"paymentType\" [value]=\"lookupEntit\"\n\t\t\t\t\t\t\tchecked=\"checked\">{{lookupEntit.lookupValue}}&nbsp;\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t<label class=\"col-md-3 mt-2\"><h6>Billing:</h6></label> \n\t\t\t\t<div class=\"col-md-3 mt-2\">\n\t\t\t\t\t<ng-container  *ngFor = \"let lookupEntit of lookupEntityList\" >\n\t\t\t\t\t\t<ng-container  *ngIf = \"lookupEntit.category.categoryId == 23\">\n\t\t\t\t\t\t\t<input type=\"radio\"  formControlName = \"billing\" name=\"billing\" [value]=\"lookupEntit\"\n\t\t\t\t\t\t\tchecked=\"checked\">{{lookupEntit.lookupValue}}&nbsp;\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t\t<div class=\"row border border-dark p-2 justify-content-between\" (change)= \"showFeesForEveryVisit($event.target.value)\">\n\t\t\t\t<label>Total Amount &nbsp;:&nbsp;</label>&nbsp;\n\t\t\t\t<input type = \"text\" [value]=\"consultationfee\" class = \"h-50\" readonly />\n\t\t\t\t<button  class=\"ml-auto btn btn-danger\" type = \"submit\">Save</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n<ng-template #container> \n\t<table class=\"table\" style=\"background-color:Aquamarine\">\n\t  <thead class=\"table-dark\">\n\t    <tr>\n\t      <th scope=\"col\">Patient Name</th>\n\t      <th scope=\"col\">MR No</th>\n\t      <th scope=\"col\">Gender</th>\n\t      <th scope=\"col\">Actions</th>\n\t    </tr>\n\t  </thead>\n\t  <tbody >\n\t    <tr *ngFor=\"let patient of patientList\">\n\t      <th scope=\"row\">{{patient.firstName}}&nbsp;{{patient.lastName}}</th>\n\t      <td>{{patient.mrn}}</td>\n\t      <td>{{patient.gender}}</td>\n\t      <td><button class=\"btn btn-success\" (click)=\"onAdd(patient)\" >Add</button></td>\n\t    </tr>\n\t  </tbody>\n\t</table>\n</ng-template>\n<footer class = \"footer bg-info text-white text-center\">\n\t<label class= \"float-center\">LC@Copyright,2021</label>\n</footer>\n\t\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_encounter_encounter_module_ts-es2015.js.map