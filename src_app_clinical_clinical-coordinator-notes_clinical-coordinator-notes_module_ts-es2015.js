(self["webpackChunkElitePro"] = self["webpackChunkElitePro"] || []).push([["src_app_clinical_clinical-coordinator-notes_clinical-coordinator-notes_module_ts"],{

/***/ 98160:
/*!**************************************************************************************************!*\
  !*** ./src/app/clinical/clinical-coordinator-notes/clinical-coordinator-notes-routing.module.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClinicalCoordinatorNotesRoutingModule": function() { return /* binding */ ClinicalCoordinatorNotesRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _clinical_coordinator_notes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clinical-coordinator-notes.component */ 83226);




const routes = [
    { path: '', component: _clinical_coordinator_notes_component__WEBPACK_IMPORTED_MODULE_0__.ClinicalCoordinatorNotesComponent }
];
let ClinicalCoordinatorNotesRoutingModule = class ClinicalCoordinatorNotesRoutingModule {
};
ClinicalCoordinatorNotesRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ClinicalCoordinatorNotesRoutingModule);



/***/ }),

/***/ 83226:
/*!*********************************************************************************************!*\
  !*** ./src/app/clinical/clinical-coordinator-notes/clinical-coordinator-notes.component.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClinicalCoordinatorNotesComponent": function() { return /* binding */ ClinicalCoordinatorNotesComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_clinical_coordinator_notes_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./clinical-coordinator-notes.component.html */ 17700);
/* harmony import */ var _clinical_coordinator_notes_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clinical-coordinator-notes.component.css */ 65476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _encounter_masters_encounter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../encounter/masters/encounter */ 25405);
/* harmony import */ var _encounter_services_encounter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../encounter/services/encounter.service */ 85992);
/* harmony import */ var _master_lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../master/lookup-module/services/lookup.service */ 41168);
/* harmony import */ var _patient_master_patient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../patient/master/patient */ 19975);
/* harmony import */ var _masters_clinical_coordinator_notes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./masters/clinical-coordinator-notes */ 22673);
/* harmony import */ var _services_clinical_coordinator_notes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/clinical-coordinator-notes.service */ 88669);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ 78556);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_8__);













let ClinicalCoordinatorNotesComponent = class ClinicalCoordinatorNotesComponent {
    constructor(route, lookupService, fb, encounterService, ccNotesService, router) {
        this.route = route;
        this.lookupService = lookupService;
        this.fb = fb;
        this.encounterService = encounterService;
        this.ccNotesService = ccNotesService;
        this.router = router;
        this.lookupEntityList = new Array();
        //name:"angular";
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_8__;
        this.ccNotesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({});
        this.encounter = new _encounter_masters_encounter__WEBPACK_IMPORTED_MODULE_2__.Encounter();
        this.isAllergyRecordingWithPatientControl = true;
        this.patient = new _patient_master_patient__WEBPACK_IMPORTED_MODULE_5__.Patient();
        this.createCcNotes = new _masters_clinical_coordinator_notes__WEBPACK_IMPORTED_MODULE_6__.ClinicalCoordinatorNotes();
        this.ccNotesList = new Array();
        this.createdDate = new Date();
        this.isNewCCNote = true;
    }
    ngOnInit() {
        //this.encounterId = this.route.snapshot.params['id'];
        this.encounter = JSON.parse(localStorage.getItem('encounter'));
        this.patient = this.encounter.appointment.patient;
        this.encounterId = this.encounter.encounterId;
        this.reloadData();
        this.reloadForm();
    }
    reloadData() {
        /*this.encounterService.getEncounterById(Number(this.encounterId)).subscribe(data => {
        this.encounter = data;
        
        })*/
        this.lookupService.getLookupEntityListByCategoryId(245).subscribe(data => {
            this.lookupEntityList = data;
        });
        /*this.ccNotesService.getCcNotesByPatientId(this.patientId).subscribe(data => {
            this.ccNotesList = data;
            //console.log(this.ccNotesList)
        })*/
    }
    reloadForm() {
        this.ccNotesForm = this.fb.group({
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null)
        });
    }
    onSubmit(ccNotesForm) {
        //  console.log( `Form submit, model: ${ JSON.stringify( this.model ) }` );
        this.createCcNotes = this.ccNotesForm.value;
        var note = this.ccNotesForm.value.notes;
        var filterNote = note.replace(/<[^>]+>/g, '');
        filterNote = filterNote.replace('&nbsp;', ' ');
        console.log(filterNote);
        console.log(filterNote);
        //var decodedStripedHtml = he.decode(filterNote);
        this.createCcNotes.notes = filterNote;
        this.createCcNotes.preRegId = null;
        console.log(this.ccNotesForm.value);
        this.createCcNotes.createdDate = this.createdDate;
        this.createCcNotes.patient = this.patient;
        //this.createCcNotes.notesId = null;
        //this.createCcNotes.createdDate = this.createdDate;
        this.createCcNotes.createdBy = null;
        this.ccNotesService.createClinicalCoordinatorNotes(this.createCcNotes).subscribe(data => {
            //this.ccNotesList =data;
            alert("Clinica-co-ordinator notes successfully inserted!!!!");
            console.log(this.ccNotesForm.value);
        });
    }
    showPatient(patient) {
        this.patient = patient;
    }
    gotoviewAllCcNotes(encounter) {
        this.ccNotesService.getClinicalCoordinatorNotesByPatientId(this.patient.mrn).subscribe(data => {
            this.ccNotesList = data;
            this.isNewCCNote = false;
            console.log("GetClinicalCoordinatorNotesByPatientId", data);
        });
    }
    goToNew() {
        this.isNewCCNote = true;
    }
};
ClinicalCoordinatorNotesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _master_lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__.LookupService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: _encounter_services_encounter_service__WEBPACK_IMPORTED_MODULE_3__.EncounterService },
    { type: _services_clinical_coordinator_notes_service__WEBPACK_IMPORTED_MODULE_7__.ClinicalCoordinatorNotesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router }
];
ClinicalCoordinatorNotesComponent.propDecorators = {
    isAllergyRecordingWithPatientControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    patientList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Output }],
    patient: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Output }]
};
ClinicalCoordinatorNotesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-clinical-coordinator-notes',
        template: _raw_loader_clinical_coordinator_notes_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_clinical_coordinator_notes_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClinicalCoordinatorNotesComponent);



/***/ }),

/***/ 9122:
/*!******************************************************************************************!*\
  !*** ./src/app/clinical/clinical-coordinator-notes/clinical-coordinator-notes.module.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClinicalCoordinatorNotesModule": function() { return /* binding */ ClinicalCoordinatorNotesModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _clinical_coordinator_notes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clinical-coordinator-notes-routing.module */ 98160);
/* harmony import */ var _clinical_coordinator_notes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clinical-coordinator-notes.component */ 83226);
/* harmony import */ var _patient_control_patient_control_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../patient-control/patient-control.module */ 49870);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 22723);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ 51679);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../material/material.module */ 90898);










let ClinicalCoordinatorNotesModule = class ClinicalCoordinatorNotesModule {
};
ClinicalCoordinatorNotesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [
            _clinical_coordinator_notes_component__WEBPACK_IMPORTED_MODULE_1__.ClinicalCoordinatorNotesComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _clinical_coordinator_notes_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClinicalCoordinatorNotesRoutingModule,
            _patient_control_patient_control_module__WEBPACK_IMPORTED_MODULE_2__.PatientControlModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__.CKEditorModule,
            _shared__WEBPACK_IMPORTED_MODULE_3__.PageHeaderModule,
            _material_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule
        ]
    })
], ClinicalCoordinatorNotesModule);



/***/ }),

/***/ 22673:
/*!*******************************************************************************************!*\
  !*** ./src/app/clinical/clinical-coordinator-notes/masters/clinical-coordinator-notes.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClinicalCoordinatorNotes": function() { return /* binding */ ClinicalCoordinatorNotes; }
/* harmony export */ });
/* harmony import */ var _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../master/lookup-module/masters/lookup-entity */ 11697);
/* harmony import */ var _master_masters_base_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../master/masters/base-entity */ 28685);
/* harmony import */ var _patient_master_patient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../patient/master/patient */ 19975);
/* harmony import */ var _pre_register_patient_masters_pre_register_patient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pre-register-patient/masters/pre-register-patient */ 19976);




class ClinicalCoordinatorNotes extends _master_masters_base_entity__WEBPACK_IMPORTED_MODULE_1__.BaseEntity {
    constructor() {
        super(...arguments);
        this.preRegId = new _pre_register_patient_masters_pre_register_patient__WEBPACK_IMPORTED_MODULE_3__.PreRegisterPatient();
        this.type = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
        this.patient = new _patient_master_patient__WEBPACK_IMPORTED_MODULE_2__.Patient();
    }
    ;
}


/***/ }),

/***/ 88669:
/*!****************************************************************************************************!*\
  !*** ./src/app/clinical/clinical-coordinator-notes/services/clinical-coordinator-notes.service.ts ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClinicalCoordinatorNotesService": function() { return /* binding */ ClinicalCoordinatorNotesService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../main.service */ 29118);




let ClinicalCoordinatorNotesService = class ClinicalCoordinatorNotesService {
    constructor(http, mainService) {
        this.http = http;
        this.mainService = mainService;
        this.baseUrl = "";
        this.patient = null;
        this.baseUrl = this.mainService.getBaseUrl();
    }
    getPatient() {
        return this.patient;
    }
    setPatient(patient) {
        this.patient = patient;
    }
    getClinicalCoordinatorNotesList() {
        return this.http.get(`${this.baseUrl}/clinicalCoordinatorNotes/get`);
    }
    getClinicalCoordinatorNotesByPatientId(patientId) {
        return this.http.get(`${this.baseUrl}/clinicalCoordinatorNotes/getByPatientId/${patientId}`);
    }
    createClinicalCoordinatorNotes(ccNotes) {
        return this.http.post(`${this.baseUrl}/clinicalCoordinatorNotes/add`, ccNotes);
    }
    updateClinicalCoordinatorNotes(ccNotes) {
        return this.http.post(`${this.baseUrl}/clinicalCoordinatorNotes/update`, ccNotes);
    }
};
ClinicalCoordinatorNotesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService }
];
ClinicalCoordinatorNotesService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ClinicalCoordinatorNotesService);



/***/ }),

/***/ 65476:
/*!**********************************************************************************************!*\
  !*** ./src/app/clinical/clinical-coordinator-notes/clinical-coordinator-notes.component.css ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGluaWNhbC1jb29yZGluYXRvci1ub3Rlcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ 17700:
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clinical/clinical-coordinator-notes/clinical-coordinator-notes.component.html ***!
  \*************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"card\" >\n\t<div class=\"bg-info\">\n\t\t<app-patient-control (patientDetails)=\"showPatient($event)\"\n\t\t\t[patient]=\"patient\"></app-patient-control>\n\t</div>\n\t<form [formGroup]=\"ccNotesForm\">\n\t\t<div class=\"card-head\">\n\t\t\t<nav class=\"navbar navbar-dark bg-dark text-white justify-content-center\"><h3>Clinical\n\t\t\t\tCo-ordinator Notes</h3>\n\t\t\t\t<button class=\"btn-sm btn-danger ml-auto mr-1\"\n\t\t\t\t\t(id)=\"encounter.encounterId\"\n\t\t\t\t\t(click)=\"gotoviewAllCcNotes(encounter)\" *ngIf=\"isNewCCNote\">view all</button>\n\t\t\t\t<button class=\"btn-sm btn-danger ml-auto mr-1\"\n\t\t\t\t\t(id)=\"encounter.encounterId\"\n\t\t\t\t\t(click)=\"goToNew()\" *ngIf=\"!isNewCCNote\">New</button>\t\n\t\t\t</nav>\n\t\t</div>\n\t\t<div class=\"card-body\" *ngIf=\"isNewCCNote\">\n\t\t\t\n\t\t\t<mat-form-field appearance=\"fill\" class = \"col-md-2 p-0 m-0\">\n\t\t\t\t<mat-label for=\"name\">Notes Type :</mat-label>\n\t\t\t\t<mat-select  \n\t\t\t\t\tformControlName=\"type\"  name=\"name\" id=\"name\">\n\t\t\t\t\t<mat-option [value]=null>--Select--</mat-option>\n\t\t\t\t\t<mat-option *ngFor=\"let look of lookupEntityList\" [value]=\"look\" >{{look.lookupValue}}</mat-option>\n\t\t\t\t</mat-select>\n\t\t\t</mat-form-field>\n\t\t\t\n\t\t\t<div class = \"row\">\n\t\t\t\t<label class = \"col-md-2\" for=\"description\">Description :</label>\n\t\t\t</div>\n\t\t\t<ckeditor #editor [editor]=\"Editor\" id=\"description\"\n\t\t\t\tformControlName=\"notes\" name=\"description\" type=\"divarea\">\n\t\t\t</ckeditor>\n\t\t\t<button type=\"submit\" class=\"mt-1 mb-1 float-right btn btn-success\"\n\t\t\t\t(click)=\"onSubmit(ccNotesForm)\">Add Note</button>\n\t\t</div>\n\t</form>\n</div>\n<div class=\"card\" *ngIf=\"!isNewCCNote\">\n\n\t<table class=\"table table-sm\">\n\t\t<thead class=\"thead bg-secondary\">\n\t\t\t<tr class=\"table-bordered\">\n\t\t\t\t<th>SL No.</th>\n\t\t\t\t<th>Notes</th>\n\t\t\t\t<th>Type</th>\n\t\t\t\t<th>Created By</th>\n\t\t\t\t<th>Created Date</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let note of ccNotesList\">\n\t\t\t\t<td>{{note.notesId}}</td>\n\t\t\t\t<td>{{note.notes}}</td>\n\t\t\t\t<td>{{note.type.lookupValue}}</td>\n\t\t\t\t<td>{{note.createdBy}}</td>\n\t\t\t\t<td>{{note.createdDate | date:'dd/MM/yyyy'}}</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_clinical_clinical-coordinator-notes_clinical-coordinator-notes_module_ts-es2015.js.map