(self["webpackChunkElitePro"] = self["webpackChunkElitePro"] || []).push([["src_app_clinical_clinical-details_clinical-details_module_ts"],{

/***/ 22254:
/*!******************************************************************************!*\
  !*** ./src/app/clinical/clinical-details/clinical-details-routing.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClinicalDetailsRoutingModule": function() { return /* binding */ ClinicalDetailsRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _clinical_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clinical-details.component */ 7859);




const routes = [
    { path: '', component: _clinical_details_component__WEBPACK_IMPORTED_MODULE_0__.ClinicalDetailsComponent }
];
let ClinicalDetailsRoutingModule = class ClinicalDetailsRoutingModule {
};
ClinicalDetailsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ClinicalDetailsRoutingModule);



/***/ }),

/***/ 7859:
/*!*************************************************************************!*\
  !*** ./src/app/clinical/clinical-details/clinical-details.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClinicalDetailsComponent": function() { return /* binding */ ClinicalDetailsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_clinical_details_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./clinical-details.component.html */ 5589);
/* harmony import */ var _clinical_details_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clinical-details.component.css */ 38047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ 74903);





let ClinicalDetailsComponent = class ClinicalDetailsComponent {
    constructor() {
        this.patient = null;
    }
    ngOnInit() {
    }
    callPatientDetails(patient) {
        this.patient = patient;
        localStorage.setItem('patient', JSON.stringify(this.patient));
        //console.log(this.patient)
    }
};
ClinicalDetailsComponent.ctorParameters = () => [];
ClinicalDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-clinical-details',
        template: _raw_loader_clinical_details_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_clinical_details_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClinicalDetailsComponent);



/***/ }),

/***/ 22812:
/*!**********************************************************************!*\
  !*** ./src/app/clinical/clinical-details/clinical-details.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClinicalDetailsModule": function() { return /* binding */ ClinicalDetailsModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _clinical_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clinical-details-routing.module */ 22254);
/* harmony import */ var _clinical_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clinical-details.component */ 7859);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ 51679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _patient_control_patient_control_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../patient-control/patient-control.module */ 49870);
/* harmony import */ var _allergy_recording_allergy_recording_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../allergy-recording/allergy-recording.module */ 82488);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../material/material.module */ 90898);
/* harmony import */ var _vital_sign_vital_sign_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../vital-sign/vital-sign.module */ 88697);
/* harmony import */ var _encounter_encounter_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../encounter/encounter.module */ 80861);
/* harmony import */ var _patient_document_patient_document_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../patient-document/patient-document.module */ 68742);
/* harmony import */ var _orders_modules_service_orders_service_orders_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../orders/modules/service-orders/service-orders.module */ 47591);
/* harmony import */ var _orders_orders_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../orders/orders.module */ 55991);
/* harmony import */ var _referral_referral_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../referral/referral.module */ 34675);
/* harmony import */ var _diagnosis_diagnosis_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../diagnosis/diagnosis.module */ 49313);

















let ClinicalDetailsModule = class ClinicalDetailsModule {
};
ClinicalDetailsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
        declarations: [
            _clinical_details_component__WEBPACK_IMPORTED_MODULE_1__.ClinicalDetailsComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
            _clinical_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClinicalDetailsRoutingModule,
            _shared__WEBPACK_IMPORTED_MODULE_2__.PageHeaderModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModule,
            _patient_control_patient_control_module__WEBPACK_IMPORTED_MODULE_3__.PatientControlModule,
            _allergy_recording_allergy_recording_module__WEBPACK_IMPORTED_MODULE_4__.AllergyRecordingModule,
            _material_material_module__WEBPACK_IMPORTED_MODULE_5__.MaterialModule,
            _vital_sign_vital_sign_module__WEBPACK_IMPORTED_MODULE_6__.VitalSignModule,
            _encounter_encounter_module__WEBPACK_IMPORTED_MODULE_7__.EncounterModule,
            _patient_document_patient_document_module__WEBPACK_IMPORTED_MODULE_8__.PatientDocumentModule,
            _orders_modules_service_orders_service_orders_module__WEBPACK_IMPORTED_MODULE_9__.ServiceOrdersModule,
            _orders_orders_module__WEBPACK_IMPORTED_MODULE_10__.OrdersModule,
            _referral_referral_module__WEBPACK_IMPORTED_MODULE_11__.ReferralModule,
            _diagnosis_diagnosis_module__WEBPACK_IMPORTED_MODULE_12__.DiagnosisModule
        ]
    })
], ClinicalDetailsModule);



/***/ }),

/***/ 47246:
/*!****************************************************************!*\
  !*** ./src/app/clinical/diagnosis/diagnosis-routing.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagnosisRoutingModule": function() { return /* binding */ DiagnosisRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [];
let DiagnosisRoutingModule = class DiagnosisRoutingModule {
};
DiagnosisRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], DiagnosisRoutingModule);



/***/ }),

/***/ 49313:
/*!********************************************************!*\
  !*** ./src/app/clinical/diagnosis/diagnosis.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagnosisModule": function() { return /* binding */ DiagnosisModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _diagnosis_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diagnosis-routing.module */ 47246);
/* harmony import */ var _diagnosis_diagnosis_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diagnosis/diagnosis.component */ 89554);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 22723);








let DiagnosisModule = class DiagnosisModule {
};
DiagnosisModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            _diagnosis_diagnosis_component__WEBPACK_IMPORTED_MODULE_1__.DiagnosisComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _diagnosis_routing_module__WEBPACK_IMPORTED_MODULE_0__.DiagnosisRoutingModule,
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_5__.CKEditorModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule
        ],
        exports: [_diagnosis_diagnosis_component__WEBPACK_IMPORTED_MODULE_1__.DiagnosisComponent]
    })
], DiagnosisModule);



/***/ }),

/***/ 89554:
/*!*********************************************************************!*\
  !*** ./src/app/clinical/diagnosis/diagnosis/diagnosis.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagnosisComponent": function() { return /* binding */ DiagnosisComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_diagnosis_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./diagnosis.component.html */ 8768);
/* harmony import */ var _diagnosis_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diagnosis.component.css */ 33468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../router.animations */ 74903);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ 78556);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__);








let DiagnosisComponent = class DiagnosisComponent {
    constructor(router, route, fb) {
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__;
        this.editor_options = { toolbarLocation: "bottom" };
        this.model = {
            name: 'Hardik',
            description: '<p>This is a sample form using CKEditor 4.</p>'
        };
        this.selectedOption = "";
        this.fromWorkBench = false;
    }
    ngOnInit() {
    }
};
DiagnosisComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder }
];
DiagnosisComponent.propDecorators = {
    fromWorkBench: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
DiagnosisComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-diagnosis',
        template: _raw_loader_diagnosis_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_diagnosis_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DiagnosisComponent);



/***/ }),

/***/ 65808:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/clinical/referral/components/cross-consultation-request/cross-consultation-request.component.ts ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrossConsultationRequestComponent": function() { return /* binding */ CrossConsultationRequestComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_cross_consultation_request_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cross-consultation-request.component.html */ 21737);
/* harmony import */ var _cross_consultation_request_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cross-consultation-request.component.css */ 40006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _master_unit_master_masters_Employee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../master/unit-master/masters/Employee */ 51716);
/* harmony import */ var _master_department_masters_department__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../master/department/masters/department */ 10776);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _masters_cross_consultation_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../masters/cross_consultation_request */ 9657);
/* harmony import */ var _master_department_services_department_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../master/department/services/department.service */ 25482);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _encounter_services_consultant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../encounter/services/consultant.service */ 73794);
/* harmony import */ var _master_lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../master/lookup-module/services/lookup.service */ 41168);
/* harmony import */ var _patient_service_patient_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../patient/service/patient.service */ 42766);
/* harmony import */ var _masters_referral_hospital__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../masters/referral_hospital */ 45131);
/* harmony import */ var _preferences_services_preference_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../preferences/services/preference.service */ 17224);
/* harmony import */ var _doctors_workbench_services_cross_consultation_request_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../doctors-workbench/services/cross-consultation-request.service */ 57970);
/* harmony import */ var _services_referral_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/referral.service */ 65276);
/* harmony import */ var _services_unit_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/unit.service */ 1775);
/* harmony import */ var _services_referral_hospital_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/referral-hospital.service */ 17175);
/* harmony import */ var _preferences_masters_preferences__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../preferences/masters/preferences */ 75661);





















let CrossConsultationRequestComponent = class CrossConsultationRequestComponent {
    constructor(departmentService, referralService, route, consultantService, preferenceService, unitService, hospitalService, crossConsultationService, lookupService, fb, patientService) {
        this.departmentService = departmentService;
        this.referralService = referralService;
        this.route = route;
        this.consultantService = consultantService;
        this.preferenceService = preferenceService;
        this.unitService = unitService;
        this.hospitalService = hospitalService;
        this.crossConsultationService = crossConsultationService;
        this.lookupService = lookupService;
        this.fb = fb;
        this.patientService = patientService;
        this.department = new _master_department_masters_department__WEBPACK_IMPORTED_MODULE_3__.Department();
        this.hospital = new _masters_referral_hospital__WEBPACK_IMPORTED_MODULE_9__.ReferralHospital();
        this.consultant = new _master_unit_master_masters_Employee__WEBPACK_IMPORTED_MODULE_2__.Employee();
        this.patient = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Observable();
        this.crossConsultationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroup({});
        this.preference = new _preferences_masters_preferences__WEBPACK_IMPORTED_MODULE_15__.Preferences();
        this.departmentList = [];
        this.crossConsultationRequest = new _masters_cross_consultation_request__WEBPACK_IMPORTED_MODULE_4__.CrossConsultationRequests();
        this.hospitalList = [];
        this.consultantList = [];
        this.lookupEntityList = new Array();
        this.search = "";
        this.crossConsultationRequestList = [];
    }
    ngOnInit() {
        this.preference = JSON.parse(localStorage.getItem('preferences'));
        this.reloadData();
        this.reloadForm();
    }
    reloadForm() {
        this.crossConsultationForm = this.fb.group({
            patient: null,
            priority: null,
            reqDate: new (Date),
            reqDepartment: null,
            reqConsultant: null,
            hospital: null,
            reason: null
        });
    }
    reloadData() {
        this.patient = this.patientService.getPatient();
        this.lookupService.getLookupEntityListByCategoryId(293).subscribe(data => {
            console.log("Entity List", data);
            this.lookupEntityList = data;
        }, err => console.log(err));
        this.crossConsultationService.getCrossConsultationRequestsList().subscribe(data => { this.crossConsultationRequestList = data, console.log("This is crossConsultation Data", data); }, err => console.log(err));
        this.hospitalService.getReferralHospitalList().subscribe(data => {
            this.hospitalList = data;
            console.log("This is hospital List", this.hospitalList);
        });
        this.departmentService.getDepartmentList().subscribe(data => {
            this.departmentList = data;
        });
        this.preferenceService.getPreferenceByUserId(1)
            .subscribe(data => {
            this.preference = data;
            console.log(this.preference, "This is preference");
        }, err => {
            console.log(err);
        });
    }
    showConsultant(event) {
        this.departmentId = event.departmentId;
        /* for(let department of this.departmentList){
            console.log(this.departmentList)
            if(department.departmentId == this.departmentId){
                this.department = department;
            }
        }
        console.log(this.department.departmentId)
        console.log(this.consultantList)*/
        this.unitService.getEmployeeListFromUnitByDepartmentId(this.departmentId).subscribe(data => {
            this.consultantList = data;
        });
    }
    deleteCrossConsultationRequest(service) {
        console.log(service);
        let index = this.crossConsultationRequestList.indexOf(service);
        this.crossConsultationRequestList.splice(index, index + 1);
    }
    showDepartment(hospital) {
        this.departmentService.getDepartmentsByBranchId(hospital.branch.id).subscribe(data => {
            this.departmentList = data;
        }, err => console.log(err));
    }
    saveCrossConsultationRequest() {
        let crossConsultationRequest = new _masters_cross_consultation_request__WEBPACK_IMPORTED_MODULE_4__.CrossConsultationRequests();
        /// To be changed Employeeee
        this.lookupService.getLookupEntityById(323).subscribe(data => {
            crossConsultationRequest = this.crossConsultationForm.value;
            let patient = this.patient;
            crossConsultationRequest.patient = patient;
            crossConsultationRequest.site = null;
            crossConsultationRequest.visit = null;
            crossConsultationRequest.approvalStatus = data;
            crossConsultationRequest.department = this.preference.department;
            crossConsultationRequest.consultant = this.preference.user.employee;
            console.log("This is before saving ", crossConsultationRequest);
            this.crossConsultationService.createCrossConsultationRequest(crossConsultationRequest).subscribe(data => {
                this.reloadData();
                console.log("After Saving", data);
            }, err => console.log(err));
        });
    }
    searchCrossConsultaionRequest() {
        console.log('This is called');
        console.log(this.search);
        console.log("This is updated Patient", this.patient);
        this.crossConsultationService.searchCrossConsultation(this.search).subscribe(data => {
            this.crossConsultationRequestList = data;
        }, err => console.log(err));
    }
};
CrossConsultationRequestComponent.ctorParameters = () => [
    { type: _master_department_services_department_service__WEBPACK_IMPORTED_MODULE_5__.DepartmentService },
    { type: _services_referral_service__WEBPACK_IMPORTED_MODULE_12__.ReferralService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute },
    { type: _encounter_services_consultant_service__WEBPACK_IMPORTED_MODULE_6__.ConsultantService },
    { type: _preferences_services_preference_service__WEBPACK_IMPORTED_MODULE_10__.PreferencesService },
    { type: _services_unit_service__WEBPACK_IMPORTED_MODULE_13__.UnitService },
    { type: _services_referral_hospital_service__WEBPACK_IMPORTED_MODULE_14__.ReferralHospitalService },
    { type: _doctors_workbench_services_cross_consultation_request_service__WEBPACK_IMPORTED_MODULE_11__.CrossConsultationRequestService },
    { type: _master_lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_7__.LookupService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder },
    { type: _patient_service_patient_service__WEBPACK_IMPORTED_MODULE_8__.PatientService }
];
CrossConsultationRequestComponent.propDecorators = {
    patient: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.Input }]
};
CrossConsultationRequestComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
        selector: 'app-cross-consultation-request',
        template: _raw_loader_cross_consultation_request_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cross_consultation_request_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CrossConsultationRequestComponent);



/***/ }),

/***/ 62618:
/*!******************************************************!*\
  !*** ./src/app/clinical/referral/masters/VisitVO.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisitVO": function() { return /* binding */ VisitVO; }
/* harmony export */ });
/* harmony import */ var _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../master/lookup-module/masters/lookup-entity */ 11697);

class VisitVO {
    constructor() {
        this.visitType = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity;
    }
}


/***/ }),

/***/ 9657:
/*!*************************************************************************!*\
  !*** ./src/app/clinical/referral/masters/cross_consultation_request.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrossConsultationRequests": function() { return /* binding */ CrossConsultationRequests; }
/* harmony export */ });
/* harmony import */ var _master_department_masters_department__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../master/department/masters/department */ 10776);
/* harmony import */ var _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../master/lookup-module/masters/lookup-entity */ 11697);
/* harmony import */ var _master_masters_base_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../master/masters/base-entity */ 28685);
/* harmony import */ var _master_service_center_masters_branch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../master/service-center/masters/branch */ 40478);
/* harmony import */ var _master_unit_master_masters_Employee__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../master/unit-master/masters/Employee */ 51716);
/* harmony import */ var _patient_master_patient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../patient/master/patient */ 19975);
/* harmony import */ var _VisitVO__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VisitVO */ 62618);







class CrossConsultationRequests extends _master_masters_base_entity__WEBPACK_IMPORTED_MODULE_2__.BaseEntity {
    constructor() {
        super(...arguments);
        this.approvalStatus = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__.LookupEntity();
        this.consultant = new _master_unit_master_masters_Employee__WEBPACK_IMPORTED_MODULE_4__.Employee;
        this.department = new _master_department_masters_department__WEBPACK_IMPORTED_MODULE_0__.Department;
        this.patient = new _patient_master_patient__WEBPACK_IMPORTED_MODULE_5__.Patient;
        this.reqDate = new Date;
        this.reqDepartment = new _master_department_masters_department__WEBPACK_IMPORTED_MODULE_0__.Department;
        this.reqConsultant = new _master_unit_master_masters_Employee__WEBPACK_IMPORTED_MODULE_4__.Employee;
        this.site = new _master_service_center_masters_branch__WEBPACK_IMPORTED_MODULE_3__.Branch;
        this.visit = new _VisitVO__WEBPACK_IMPORTED_MODULE_6__.VisitVO;
    }
}


/***/ }),

/***/ 45131:
/*!****************************************************************!*\
  !*** ./src/app/clinical/referral/masters/referral_hospital.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferralHospital": function() { return /* binding */ ReferralHospital; }
/* harmony export */ });
/* harmony import */ var _master_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../master/masters/base-entity */ 28685);
/* harmony import */ var _master_service_center_masters_branch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../master/service-center/masters/branch */ 40478);


class ReferralHospital extends _master_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity {
    constructor() {
        super(...arguments);
        this.branch = new _master_service_center_masters_branch__WEBPACK_IMPORTED_MODULE_1__.Branch;
    }
}


/***/ }),

/***/ 43874:
/*!**************************************************************!*\
  !*** ./src/app/clinical/referral/referral-routing.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferralRoutingModule": function() { return /* binding */ ReferralRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _components_cross_consultation_request_cross_consultation_request_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/cross-consultation-request/cross-consultation-request.component */ 65808);
/* harmony import */ var _referral_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./referral.component */ 50783);





const routes = [
    { path: '', component: _referral_component__WEBPACK_IMPORTED_MODULE_1__.ReferralComponent },
    { path: 'crossconsultationrequest', component: _components_cross_consultation_request_cross_consultation_request_component__WEBPACK_IMPORTED_MODULE_0__.CrossConsultationRequestComponent }
];
let ReferralRoutingModule = class ReferralRoutingModule {
};
ReferralRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], ReferralRoutingModule);



/***/ }),

/***/ 50783:
/*!*********************************************************!*\
  !*** ./src/app/clinical/referral/referral.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferralComponent": function() { return /* binding */ ReferralComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_referral_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./referral.component.html */ 37934);
/* harmony import */ var _referral_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./referral.component.css */ 23486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _patient_master_patient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../patient/master/patient */ 19975);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../router.animations */ 74903);








let ReferralComponent = class ReferralComponent {
    constructor(router, route, fb) {
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.selectedOption = "";
        this.fromWorkBench = false;
        this.patient = new _patient_master_patient__WEBPACK_IMPORTED_MODULE_2__.Patient();
    }
    ngOnInit() {
    }
    emitPatient(patient) {
        this.patient = patient;
    }
};
ReferralComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder }
];
ReferralComponent.propDecorators = {
    fromWorkBench: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    patientList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output }],
    patient: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output }]
};
ReferralComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-referral',
        template: _raw_loader_referral_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_3__.routerTransition)()],
        styles: [_referral_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ReferralComponent);



/***/ }),

/***/ 34675:
/*!******************************************************!*\
  !*** ./src/app/clinical/referral/referral.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferralModule": function() { return /* binding */ ReferralModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _referral_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./referral-routing.module */ 43874);
/* harmony import */ var _referral_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./referral.component */ 50783);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ 51679);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _patient_control_patient_control_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../patient-control/patient-control.module */ 49870);
/* harmony import */ var _components_cross_consultation_request_cross_consultation_request_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cross-consultation-request/cross-consultation-request.component */ 65808);









let ReferralModule = class ReferralModule {
};
ReferralModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [
            _components_cross_consultation_request_cross_consultation_request_component__WEBPACK_IMPORTED_MODULE_4__.CrossConsultationRequestComponent,
            _referral_component__WEBPACK_IMPORTED_MODULE_1__.ReferralComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _referral_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReferralRoutingModule,
            _shared__WEBPACK_IMPORTED_MODULE_2__.PageHeaderModule,
            _shared__WEBPACK_IMPORTED_MODULE_2__.StatModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _patient_control_patient_control_module__WEBPACK_IMPORTED_MODULE_3__.PatientControlModule
        ],
        exports: [_referral_component__WEBPACK_IMPORTED_MODULE_1__.ReferralComponent]
    })
], ReferralModule);



/***/ }),

/***/ 17175:
/*!*************************************************************************!*\
  !*** ./src/app/clinical/referral/services/referral-hospital.service.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferralHospitalService": function() { return /* binding */ ReferralHospitalService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../main.service */ 29118);




let ReferralHospitalService = class ReferralHospitalService {
    constructor(http, mainService) {
        this.http = http;
        this.mainService = mainService;
        this.baseUrl = "";
        this.baseUrl = this.mainService.getBaseUrl();
    }
    getReferralHospitalList() {
        return this.http.get(`${this.baseUrl}/referralHospital/get`);
    }
};
ReferralHospitalService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService }
];
ReferralHospitalService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ReferralHospitalService);



/***/ }),

/***/ 65276:
/*!****************************************************************!*\
  !*** ./src/app/clinical/referral/services/referral.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferralService": function() { return /* binding */ ReferralService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../main.service */ 29118);




let ReferralService = class ReferralService {
    constructor(http, mainService) {
        this.http = http;
        this.mainService = mainService;
        this.baseUrl = "";
        this.baseUrl = this.mainService.getBaseUrl();
    }
};
ReferralService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService }
];
ReferralService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ReferralService);



/***/ }),

/***/ 1775:
/*!************************************************************!*\
  !*** ./src/app/clinical/referral/services/unit.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitService": function() { return /* binding */ UnitService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../main.service */ 29118);




let UnitService = class UnitService {
    constructor(http, mainService) {
        this.http = http;
        this.mainService = mainService;
        this.baseUrl = "";
        this.baseUrl = this.mainService.getBaseUrl();
    }
    getEmployeeListFromUnitByDepartmentId(id) {
        return this.http.get(`${this.baseUrl}/unit/getEmployeesByDepartmentId/${id}`);
    }
    createDrugOrder(drugOrder) {
        return this.http.post(`${this.baseUrl}/drugOrder/add`, drugOrder);
    }
};
UnitService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService }
];
UnitService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], UnitService);



/***/ }),

/***/ 57970:
/*!**********************************************************************************!*\
  !*** ./src/app/doctors-workbench/services/cross-consultation-request.service.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrossConsultationRequestService": function() { return /* binding */ CrossConsultationRequestService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../main.service */ 29118);




let CrossConsultationRequestService = class CrossConsultationRequestService {
    constructor(http, mainService) {
        this.http = http;
        this.mainService = mainService;
        this.baseUrl = "";
        this.baseUrl = this.mainService.getBaseUrl();
    }
    getCrossConsultationRequestsList() {
        return this.http.get(`${this.baseUrl}/crossConsultationRequests/get`);
    }
    createCrossConsultationRequest(crossConsultantRequest) {
        return this.http.post(`${this.baseUrl}/crossConsultationRequests/add`, crossConsultantRequest);
    }
    searchCrossConsultation(search) {
        return this.http.get(`${this.baseUrl}/crossConsultationRequests/search/${search}`);
    }
};
CrossConsultationRequestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService }
];
CrossConsultationRequestService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CrossConsultationRequestService);



/***/ }),

/***/ 38047:
/*!**************************************************************************!*\
  !*** ./src/app/clinical/clinical-details/clinical-details.component.css ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-icon{\r\n\tfont-size:inherit;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaW5pY2FsLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGlCQUFpQjtBQUNsQiIsImZpbGUiOiJjbGluaWNhbC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWljb257XHJcblx0Zm9udC1zaXplOmluaGVyaXQ7XHJcbn0iXX0= */");

/***/ }),

/***/ 33468:
/*!**********************************************************************!*\
  !*** ./src/app/clinical/diagnosis/diagnosis/diagnosis.component.css ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFnbm9zaXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ 40006:
/*!******************************************************************************************************************!*\
  !*** ./src/app/clinical/referral/components/cross-consultation-request/cross-consultation-request.component.css ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row{\r\n\t\r\n\tmargin-bottom: 2px;\r\n\t}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyb3NzLWNvbnN1bHRhdGlvbi1yZXF1ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsa0JBQWtCO0NBQ2xCIiwiZmlsZSI6ImNyb3NzLWNvbnN1bHRhdGlvbi1yZXF1ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93e1xyXG5cdFxyXG5cdG1hcmdpbi1ib3R0b206IDJweDtcclxuXHR9Il19 */");

/***/ }),

/***/ 23486:
/*!**********************************************************!*\
  !*** ./src/app/clinical/referral/referral.component.css ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWZlcnJhbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ 5589:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clinical/clinical-details/clinical-details.component.html ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition]>\r\n \t<app-page-header [heading]=\"'Clinical Details'\" [icon]=\"'fa fa-flask'\"></app-page-header>\r\n</div>\r\n <div class=\"col-md-12 navbar-nav bg-info mr-auto\">\r\n \t<div class=\"bg-info\">\r\n\t<app-patient-control (patientDetails) = \"callPatientDetails($event)\" ></app-patient-control>\r\n</div>\r\n</div> \r\n\r\n<!-- <div class=\"ml-0 row tab mt-2 \">\r\n\t<div>\r\n  \t\t<button class=\"tablinks btn-primary\"><i class=\"fa fa-flask\"></i> Allergy Recording</button>\r\n    </div>\r\n  \r\n  \t<div class=\"ml-1\">\r\n  \t\t<button class=\"tablinks btn-primary pl-2\" onclick=\"gotovitalsign()\"><i class=\"fa fa-stethoscope\"></i> Vital Sign</button>\r\n  \t</div>\r\n  \t\r\n  \t<div class=\"ml-1\" >\r\n  \t\t<button class=\"tablinks btn-primary pl-2\"><i class=\"fa fa-user-md\"></i> Encounter</button>\r\n  \t</div>\r\n  \t\r\n  \t<div class=\"ml-1\" >\r\n  \t\t<button class=\"tablinks btn-primary pl-2\"> <i class=\"fa fa-server\"></i> EMR</button>\r\n  \t</div>\r\n  \t\r\n  \t<div class=\"ml-1\" >\r\n  \t\t<button class=\"tablinks btn-primary pl-2\"><i class=\"fa fa-exchange\"></i> Referral</button>\r\n  \t</div>\r\n  \t\r\n  \t<div  class=\"ml-1\">\r\n  \t\t<button class=\"tablinks btn-primary pl-2\"><i class=\"fa fa-bar-chart\"></i> Diagnosis</button>\r\n  \t</div>\r\n  \t\r\n  \t<div  class=\"ml-1\">\r\n  \t\t<button class=\"tablinks btn-primary pl-2\"><i class=\"fa fa-file-text\"></i> Patient Form</button>\r\n  \t</div>\r\n  \t\r\n  \t<div  class=\"ml-1\">\r\n  \t\t<button class=\"tablinks btn-primary pl-2\"><i class=\"fa fa-book\"></i> Orders</button>\r\n  \t</div>\r\n  \t\r\n  \t<div  class=\"ml-1\">\r\n  \t\t<button class=\"tablinks btn-primary pl-2\"><i class=\"fa fa-file-o\"></i> Documents</button>\r\n  \t</div>\r\n  \t\r\n  \t<div class=\"row ml-0 mt-1\">\r\n  \t<div>\r\n  \t\t<button class=\"tablinks btn-primary pl-2\"><i class=\"fa fa-plus-square\"></i> Patient signed Form</button>\r\n  \t</div>\r\n  \t\r\n  \t<div  class=\"ml-1\">\r\n  \t\t<button class=\"tablinks btn-primary pl-2\"><i class=\"fa fa-files-o\"></i> Template</button>\r\n  \t</div>\r\n  \t\r\n  \t</div>\r\n</div>\r\n -->\r\n <mat-tab-group backgroundColor=\"primary\" color=\"warn\" >\r\n\t<div fxLayout=\"row\" fxLayoutAlign=\"space-between none\">\r\n\t\t<mat-tab> \r\n\t\t\t<ng-template mat-tab-label>\r\n\t\t\t<button mat-button>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<i _ngcontent-nub-c321=\"\" class=\"fa fa-flask\"></i>\r\n\t\t\t\t\tAllergy Recording\r\n\t\t\t\t</div>\r\n\t\t\t</button>\r\n\t\t\t</ng-template> \r\n\t\t\t<ng-template matTabContent>\r\n\t\t\t\t<app-allergy-recording [ifFromClinicalDetail] = \"true\"></app-allergy-recording>\r\n\t\t\t</ng-template> \r\n\t\t</mat-tab>\r\n\t\t<mat-tab> \r\n\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t<button mat-button>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<mat-icon>person</mat-icon>\r\n\t\t\t\t\tVital Sign\r\n\t\t\t\t</div>\r\n\t\t\t\t</button>\r\n\t\t\t</ng-template> \r\n\t\t\t<ng-template matTabContent>\r\n\t\t\t\t<app-vital-sign [isFromClinicalDetails] = \"true\"></app-vital-sign>\r\n\t\t\t</ng-template> \r\n\t\t</mat-tab>\r\n\t\t<mat-tab> \r\n\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t<button mat-button>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<mat-icon>person</mat-icon>\r\n\t\t\t\t\tEncounter \r\n\t\t\t\t</div>\r\n\t\t\t\t</button>\r\n\t\t\t</ng-template> \r\n\t\t\t<ng-template matTabContent>\r\n\t\t\t\t<app-encounter [isFromClinicalDetails] = \"true\"></app-encounter>\r\n\t\t\t</ng-template> \r\n\t\t</mat-tab>\r\n\t\t<mat-tab> \r\n\t\t\t<ng-template mat-tab-label>\r\n\t\t\t<button mat-button>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t\r\n\t\t\t\t\tEMR\r\n\t\t\t\t</div>\r\n\t\t\t\t</button>\r\n\t\t\t</ng-template> \r\n\t\t\t<ng-template matTabContent>\r\n\t\t\t\t<h2>EMR</h2>\r\n\t\t\t</ng-template> \r\n\t\t</mat-tab>\r\n\t\t<mat-tab> \r\n\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t<button mat-button>\r\n\t\t\t\t<div>\r\n\t\t\t\t<i class=\"fa fa-exchange\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\tReferral\r\n\t\t\t\t</div>\r\n\t\t\t\t</button>\r\n\t\t\t</ng-template> \r\n\t\t\t<ng-template matTabContent>\r\n\t\t\t\t<app-referral  [fromWorkBench] = \"true\"></app-referral>\r\n\t\t\t</ng-template> \r\n\t\t</mat-tab>\r\n\t\t<mat-tab> \r\n\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t<button mat-button>\r\n\t\t\t\t<div>\r\n\t\t\t\t<i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i>\r\n\t\t\t \t\tDiagnosis\r\n\t\t\t\t</div>\r\n\t\t\t\t</button>\r\n\t\t\t</ng-template> \r\n\t\t\t<ng-template matTabContent>\r\n\t\t\t\t<app-diagnosis [fromWorkBench] = \"true\"></app-diagnosis>\r\n\t\t\t</ng-template> \r\n\t\t</mat-tab>\r\n\t\t<mat-tab> \r\n\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t<button mat-button>\r\n\t\t\t\t<div>\r\n\t\t\t\t\tPatient Form\r\n\t\t\t\t</div>\r\n\t\t\t\t</button>\r\n\t\t\t</ng-template> \r\n\t\t\t<ng-template matTabContent>\r\n\t\t\t\t<h2>Patient Form</h2>\r\n\t\t\t</ng-template> \r\n\t\t</mat-tab>\r\n\t\t<mat-tab> \r\n\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t<button mat-button>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<mat-icon>person</mat-icon>\r\n\t\t\t\t\tOrders\r\n\t\t\t\t</div>\r\n\t\t\t\t</button>\r\n\t\t\t</ng-template> \r\n\t\t\t<ng-template matTabContent>\r\n\t\t\t\t<app-orders [ifFromClinicalDetail] = \"true\" [patient] = \"patient\"></app-orders>\r\n\t\t\t</ng-template> \r\n\t\t</mat-tab>\r\n\t\t<mat-tab> \r\n\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t<button mat-button>\r\n\t\t\t\t<div>\r\n\t\t\t\t<i _ngcontent-tfh-c321=\"\" class=\"fa fa-address-card-o\"></i>\r\n\t\t\t\t\tDocuments\r\n\t\t\t\t</div>\r\n\t\t\t\t</button>\r\n\t\t\t</ng-template> \r\n\t\t\t<ng-template matTabContent>\r\n\t\t\t\t<app-patient-document [isPatientDocumentsWithPatientControl] = \"false\"></app-patient-document>\r\n\t\t\t</ng-template> \r\n\t\t</mat-tab>\r\n\t\t<mat-tab> \r\n\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t<button mat-button>\r\n\t\t\t\t<div>\r\n\t\t\t\t\tPatient Signed Form\r\n\t\t\t\t</div>\r\n\t\t\t\t</button>\r\n\t\t\t</ng-template> \r\n\t\t\t<ng-template matTabContent>\r\n\t\t\t\t<h2>Patient Signed Form</h2>\r\n\t\t\t</ng-template> \r\n\t\t</mat-tab>\r\n\t</div>\r\n</mat-tab-group>\r\n \r\n \r\n \r\n \r\n<!-- <ngb-tabset\r\n    activeId=\"tab-2\"\r\n    justify=\"justified\"\r\n    type=\"pills\"\r\n    #myTabSet=\"ngbTabset\"\r\n  >\r\n  <ngb-tab title=\"Allergy Recording\" id=\"tab-1\">\r\n  \r\n    <ng-template ngbTabContent>\r\n      \r\n    </ng-template>\r\n  </ngb-tab>\r\n  <ngb-tab title=\"Vital Sign\" id=\"tab-2\">\r\n  <i class=\"fa fa-flask\"></i>\r\n    <ng-template ngbTabContent>\r\n      <p>Tab two content here</p>\r\n    </ng-template>\r\n  </ngb-tab>\r\n  <ngb-tab icon=\"fa fa-user-md\"  title=\"Encounter\" id=\"tab-3\">\r\n    <ng-template ngbTabContent>\r\n      <p>Tab three content here</p>\r\n    </ng-template>\r\n  </ngb-tab>\r\n  <ngb-tab title=\"EMR\" id=\"tab-4\">\r\n    <ng-template ngbTabContent>\r\n      <p>Tab four content here</p>\r\n    </ng-template>\r\n  </ngb-tab>\r\n  \r\n  <ngb-tab title=\"Refferal\" id=\"tab-5\">\r\n    <ng-template ngbTabContent>\r\n      <p>Tab four content here</p>\r\n    </ng-template>\r\n  </ngb-tab>\r\n  <ngb-tab title=\"Diagnosis\" id=\"tab-6\">\r\n    <ng-template ngbTabContent>\r\n      <p>Tab four content here</p>\r\n    </ng-template>\r\n  </ngb-tab>\r\n  <ngb-tab title=\"Patient Form\" id=\"tab-7\">\r\n    <ng-template ngbTabContent>\r\n      <p>Tab four content here</p>\r\n    </ng-template>\r\n  </ngb-tab>\r\n  <ngb-tab title=\"Orders\" id=\"tab-8\">\r\n    <ng-template ngbTabContent>\r\n      <p>Tab four content here</p>\r\n    </ng-template>\r\n  </ngb-tab>\r\n  <ngb-tab title=\"Documents\" id=\"tab-9\">\r\n    <ng-template ngbTabContent>\r\n      <p>Tab four content here</p>\r\n    </ng-template>\r\n  </ngb-tab>\r\n  <ngb-tab title=\"Patient Signed Form\" id=\"tab-10\">\r\n    <ng-template ngbTabContent>\r\n      <p>Tab four content here</p>\r\n    </ng-template>\r\n  </ngb-tab>\r\n</ngb-tabset> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ 8768:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clinical/diagnosis/diagnosis/diagnosis.component.html ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n\r\n\t<div class=\"card-head\"></div>\r\n\r\n\t<div class=\"card-body\">\r\n\t\t<div class=\"mt-2 \">\r\n\t\t\t<div class=\"col-md-12 row\">\r\n\t\t\t\t<label class=\"col-md-2\">Illness</label>\r\n\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t<select class=\" h-75 w-75\">\r\n\t\t\t\t\t\t<option>---Select---</option>\r\n                    </select>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<label class=\"col-md-2\">Illness Duration</label>\r\n\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t<select class=\" h-75 w-75\">\r\n\t\t\t\t\t\t<option>---Select---</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n                <a href=\"#\">View EMR</a>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t\r\n\t\t\t\r\n\t\t\t<div class =\"col-md-12 row\">\r\n\t\t\t<label class=\"col-md-2\">Behavioural Activity</label>\r\n\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t<select class=\" h-75 w-75\">\r\n\t\t\t\t\t\t<option>---Select---</option>\r\n                    </select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<h6 class=\"text-primary\"> Narrative Diagnosis</h6>\r\n\t\t\t<ckeditor #editor [editor]=\"Editor\" id=\"description\"\r\n\t\t\t\t [(ngModel)]=\"model.description\" name=\"description\" type=\"divarea\" [config]=\"editor_options\">\r\n\t\t\t</ckeditor>\r\n\t\t\t\r\n    <br>\r\n    \r\n    <div class=\"col-md-12 row\">\r\n    <div class=\"col-md-2\"><h6 class=\"text-primary\"> Primary Diagnosis</h6></div>\r\n    <div class =\"col-md-5 text-primary\">\r\n   ICD Code for <input type=\"radio\" >All \r\n                <input type=\"radio\">Accounts & Finance\r\n                <input type=\"radio\">Favourites\r\n    </div>\r\n    <div class =\"col-md-3\">\r\n     \r\n     </div>\r\n              \r\n             <div class=\"col-md-2\">\r\n\t\t\t\t<div class=\"form-group input-group m-0\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" >\r\n\t\t\t\t\t<div class=\"input-group-append \">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger \">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-search\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class=\"card mt-1\">\r\n\t\t<div class=\"card-body\">\r\n\t   <div class=\"row bg-secondary\">\r\n\t   <div class=\"col-md-4\">\r\n\t   <h6>Primary Diagnosis</h6>\r\n\t   </div>\r\n\t   <div class=\"col-md-4\">\r\n\t   </div>\r\n\t   <div class=\"col-md-4\">\r\n\t   <h6>Present Admission</h6>\r\n\t   </div>\r\n\t  </div>\r\n\t </div>\r\n    </div>\r\n    <br>\r\n\t\t\r\n\t\t<div class=\"col-md-12 row\">\r\n    <div class=\"col-md-2\"><h6 class=\"text-primary\">Secondary Diagnosis</h6></div>\r\n    <div class =\"col-md-5 text-primary\">\r\n   ICD Code for <input type=\"radio\" >All \r\n                <input type=\"radio\">Accounts & Finance\r\n                <input type=\"radio\">Favourites\r\n    </div>\r\n     <div class =\"col-md-3\">\r\n     No Known Co-Morbidities<input type=\"checkbox\">\r\n     </div>\r\n             <div class=\"col-md-2 \">\r\n\t\t\t\t<div class=\"form-group input-group m-0\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" >\r\n\t\t\t\t\t<div class=\"input-group-append \">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger \">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-search\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"card mt-1\">\r\n\t\t<div class=\"card-body\">\r\n\t   <div class=\"row bg-secondary\">\r\n\t   <div class=\"col-md-4\">\r\n\t   <h6>Primary Diagnosis</h6>\r\n\t   </div>\r\n\t   <div class=\"col-md-4\">\r\n\t   </div>\r\n\t   <div class=\"col-md-4\">\r\n\t   <h6>Present Admission</h6>\r\n\t   </div>\r\n\t  </div>\r\n\t </div>\r\n    </div>\r\n     \r\n      <div class=\"col-md-12 row mt-2\">\r\n      <label class=\"col-md-2 \">Remarks</label>\r\n      <div class=\"col-md-5  h-75 w-75\">\r\n      <input type= \"text\">\r\n      </div>\r\n      <label class=\"col-md-2 \">Remarks</label>\r\n      <div class=\"col-md-3\">\r\n\t\t\t\t\t<select class=\" h-75 w-75\">\r\n\t\t\t\t\t\t<option>---Select---</option>\r\n                    </select>\r\n\t\t\t\t</div>\r\n      \r\n       <div class=\"col-md-12 row mt-2\">\r\n       <button type=\"button\" class=\"btn btn-primary mr-2\">Save Clinical Summery</button>\r\n       <button type=\"button\" class=\"btn btn-primary \">Back to Patient List</button>\r\n       </div>\r\n      </div>\r\n     </div>\r\n   </div>\r\n </div>\r\n\r\n");

/***/ }),

/***/ 21737:
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clinical/referral/components/cross-consultation-request/cross-consultation-request.component.html ***!
  \*********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n\t<div class=\"card-head  \">\r\n\t\t<nav class=\"navbar bg-dark text-white\">\r\n\t\t\t<h2>Cross consultation Request</h2>\r\n\t\t</nav>\r\n\t</div>\r\n\t<div class=\"card-body\">\r\n\t\t<form [formGroup]=\"crossConsultationForm\">\r\n\t\t\t<div class=\"mt-2 \">\r\n\t\t\t\t<div class=\"col-md-12 row\">\r\n\t\t\t\t\t<label class =  \"col-md-1\">Hospital</label>\r\n\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t<select class=\" h-75 w-75\" formControlName=\"hospital\"\r\n\t\t\t\t\t\t\t(ngModelChange)=\"showDepartment($event)\">\r\n\t\t\t\t\t\t\t<option>---Select---</option>\r\n\t\t\t\t\t\t\t<option *ngFor=\"let hospitalDetails of hospitalList\"\r\n\t\t\t\t\t\t\t\t[ngValue]=\"hospitalDetails\">{{hospitalDetails.hospitalName}}</option>\r\n\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<label >Department</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\t\t\t\t\t<div class=\"col-md-3\">\t\t\t\t\t\r\n\t\t\t\t\t\t<select class=\"h-75 w-75\" formControlName=\"reqDepartment\"\r\n\t\t\t\t\t\t\t(ngModelChange)=\"showConsultant($event)\">\r\n\t\t\t\t\t\t\t<option [ngValue]=null>--Select--</option>\r\n\t\t\t\t\t\t\t<option *ngFor=\"let department of departmentList\"\r\n\t\t\t\t\t\t\t\t[ngValue]=\"department\">{{department.departmentName}}</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<label>Consultant</label>\r\n\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t<select class=\"h-75 w-75\" formControlName=\"reqConsultant\">\r\n\t\t\t\t\t\t\t<option value=null>---select---</option>\r\n\t\t\t\t\t\t\t<option *ngFor=\"let consultant of consultantList\"\r\n\t\t\t\t\t\t\t\t[ngValue]=\"consultant\">\r\n\t\t\t\t\t\t\t\t{{consultant.firstName}}&nbsp;{{consultant.lastName}}</option>\r\n\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\" col-md-12 row\">\r\n\r\n\t\t\t\t\t<label class =  \"col-md-1\">Reason</label>\r\n\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control h-75 w-75\" formControlName=\"reason\">\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<label class=\"col-md-1\">Priority</label>\r\n\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t<select class=\"h-75 w-75\" formControlName=\"priority\">\r\n\t\t\t\t\t\t\t<option>---select---</option>\r\n\t\t\t\t\t\t\t<option *ngFor=\"let lookup of lookupEntityList\"\r\n\t\t\t\t\t\t\t\t[value]=\"lookup.lookupValue\">{{lookup.description}}</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div> \r\n\r\n\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class=\"ml-3 btn btn-sm btn-success\"\r\n\t\t\t\t\t\t\t(click)=\"saveCrossConsultationRequest()\">save</button>\r\n\t\t\t\t\t\t&nbsp;<button class=\"ml-2 btn btn-sm btn-primary\">print</button>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t\t<br>\r\n\t\t</div>\r\n\t\t<div class =\"card-foot\">\r\n\t\t<div class=\"row justify-content-between bg-info m-0 p-1\">\r\n\t\t\t<h3>Cross Consultation Requests</h3>\r\n\t\t\t<div>\r\n\t\t\t\t<div class=\"form-group input-group m-0\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"search\">\r\n\t\t\t\t\t<div class=\"input-group-append \"\r\n\t\t\t\t\t\t(click)=\"searchCrossConsultaionRequest()\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger \">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-search\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"card-body\">\r\n\t\t\t<table class=\"col-md-12 table-bordered table-striped\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th>Patient Name</th>\r\n\t\t\t\t\t\t<th>From Department</th>\r\n\t\t\t\t\t\t<th>From Consultant</th>\r\n\t\t\t\t\t\t<th>To Department</th>\r\n\t\t\t\t\t\t<th>To Consultant</th>\r\n\t\t\t\t\t\t<th>Referral Count</th>\r\n\t\t\t\t\t\t<th>Requested Date</th>\r\n\t\t\t\t\t\t<th>Approval Status</th>\r\n\t\t\t\t\t\t<th>Priority (0-10)</th>\r\n\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr\r\n\t\t\t\t\t\t*ngFor=\"let crossConsultationRequest of crossConsultationRequestList\">\r\n\t\t\t\t\t\t<td><span *ngIf=\"crossConsultationRequest.patient\">{{crossConsultationRequest.patient.firstName}}&nbsp;{{crossConsultationRequest.patient.lastName}}</span></td>\r\n\t\t\t\t\t\t<td><span *ngIf=\"crossConsultationRequest.department\">{{crossConsultationRequest.department.departmentName}}</span></td>\r\n\t\t\t\t\t\t<td><span *ngIf=\"crossConsultationRequest.consultant\">{{crossConsultationRequest.consultant.firstName}}&nbsp;{{crossConsultationRequest.consultant.lastName}}</span></td>\r\n\t\t\t\t\t\t<td><span *ngIf=\"crossConsultationRequest.reqDepartment\">{{crossConsultationRequest.reqDepartment.departmentName}}</span></td>\r\n\t\t\t\t\t\t<td><span *ngIf=\"crossConsultationRequest.reqConsultant\">{{crossConsultationRequest.reqConsultant.firstName}}&nbsp;{{crossConsultationRequest.reqConsultant.lastName}}</span></td>\r\n\t\t\t\t\t\t<td>{{crossConsultationRequest.requistionNumber}}</td>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<td>{{crossConsultationRequest.reqDate |date:'dd:MM:YY'}}</td>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<td><span *ngIf =\"crossConsultationRequest.approvalStatus\">{{crossConsultationRequest.approvalStatus.lookupValue}}</span></td>\r\n\t\t\t\t\t\t<td>{{crossConsultationRequest.priority}}</td>\r\n\t\t\t\t\t\t<td><button class=\"btn-sm btn-danger\"\r\n\t\t\t\t\t\t\t\t(click)=\"deleteCrossConsultationRequest(crossConsultationRequest)\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t</button></td>\r\n\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\r\n\t\t\t<div></div>\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>");

/***/ }),

/***/ 37934:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clinical/referral/referral.component.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition] *ngIf =\"!fromWorkBench\">\n\t<app-page-header [mainhead] =\"'WorkBench'\" [heading]=\"'Referral'\" [mainheadLink]=\"'/referral'\"\n\t\t[heading]=\"'Referral'\" [icon]=\"'fa-bar-chart-o'\"></app-page-header>\n\t<app-patient-control [patient]=\"patient\" (patientDetails) = \"emitPatient($event)\"></app-patient-control>\n\t\n</div>\n<div>\n\t<app-cross-consultation-request [patient] = \"patient\"></app-cross-consultation-request>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_clinical_clinical-details_clinical-details_module_ts-es2015.js.map