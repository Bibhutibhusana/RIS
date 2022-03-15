(self["webpackChunkElitePro"] = self["webpackChunkElitePro"] || []).push([["default-src_app_clinical_patient-document_patient-document_module_ts"],{

/***/ 86306:
/*!***********************************************************************!*\
  !*** ./src/app/clinical/patient-document/masters/patient-document.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "patientDocument": function() { return /* binding */ patientDocument; }
/* harmony export */ });
/* harmony import */ var _encounter_masters_visit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../encounter/masters/visit */ 34494);
/* harmony import */ var _master_department_masters_department__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../master/department/masters/department */ 10776);
/* harmony import */ var _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../master/lookup-module/masters/lookup-entity */ 11697);
/* harmony import */ var _master_service_center_masters_service_center__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../master/service-center/masters/service-center */ 39758);
/* harmony import */ var _patient_master_patient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../patient/master/patient */ 19975);





class patientDocument {
    constructor() {
        this.patient = new _patient_master_patient__WEBPACK_IMPORTED_MODULE_4__.Patient();
        this.department = new _master_department_masters_department__WEBPACK_IMPORTED_MODULE_1__.Department();
        this.serviceCenter = new _master_service_center_masters_service_center__WEBPACK_IMPORTED_MODULE_3__.ServiceCenter();
        this.visit = new _encounter_masters_visit__WEBPACK_IMPORTED_MODULE_0__.Visit();
        this.category = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity();
        this.subCategory = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity();
    }
}


/***/ }),

/***/ 11638:
/*!******************************************************************************!*\
  !*** ./src/app/clinical/patient-document/patient-document-routing.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientDocumentRoutingModule": function() { return /* binding */ PatientDocumentRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _patient_document_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patient-document.component */ 33496);




const routes = [
    { path: '', component: _patient_document_component__WEBPACK_IMPORTED_MODULE_0__.PatientDocumentComponent }
];
let PatientDocumentRoutingModule = class PatientDocumentRoutingModule {
};
PatientDocumentRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], PatientDocumentRoutingModule);



/***/ }),

/***/ 33496:
/*!*************************************************************************!*\
  !*** ./src/app/clinical/patient-document/patient-document.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientDocumentComponent": function() { return /* binding */ PatientDocumentComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_patient_document_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./patient-document.component.html */ 617);
/* harmony import */ var _patient_document_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patient-document.component.css */ 79985);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _encounter_services_consultant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../encounter/services/consultant.service */ 73794);
/* harmony import */ var _master_department_services_department_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../master/department/services/department.service */ 25482);
/* harmony import */ var _encounter_masters_encounter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../encounter/masters/encounter */ 25405);
/* harmony import */ var _encounter_services_encounter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../encounter/services/encounter.service */ 85992);
/* harmony import */ var _master_department_masters_department__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../master/department/masters/department */ 10776);
/* harmony import */ var _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../master/lookup-module/masters/lookup-entity */ 11697);
/* harmony import */ var _master_lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../master/lookup-module/services/lookup.service */ 41168);
/* harmony import */ var _patient_master_patient__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../patient/master/patient */ 19975);
/* harmony import */ var _masters_patient_document__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./masters/patient-document */ 86306);
/* harmony import */ var _services_patient_documents_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/patient-documents.service */ 42491);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../router.animations */ 74903);

















let PatientDocumentComponent = class PatientDocumentComponent {
    constructor(encounterService, patientDocumentsService, lookupService, fb, departmentService, consultationService, router) {
        this.encounterService = encounterService;
        this.patientDocumentsService = patientDocumentsService;
        this.lookupService = lookupService;
        this.fb = fb;
        this.departmentService = departmentService;
        this.consultationService = consultationService;
        this.router = router;
        this.encounter = new _encounter_masters_encounter__WEBPACK_IMPORTED_MODULE_4__.Encounter();
        this.patient = new _patient_master_patient__WEBPACK_IMPORTED_MODULE_9__.Patient();
        this.patientDocuments = new _masters_patient_document__WEBPACK_IMPORTED_MODULE_10__.patientDocument();
        this.totalFiles = 0;
        this.myFiles = [];
        this.fileNames = [];
        this.documentList = [];
        this.files = [];
        this.progress = 0;
        this.departmentList = new Array();
        this.department = new _master_department_masters_department__WEBPACK_IMPORTED_MODULE_6__.Department();
        this.consultantList = new Array();
        this.lookupEntityList = new Array();
        this.patientDForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup({});
        this.documentUploadedDate = new Date();
        this.isPatientDocumentsWithPatientControl = true;
        this.mainhead = "";
        this.mainHeadLink = "";
        this.category = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_7__.LookupEntity();
        this.catDemo = this.category;
    }
    ngOnInit() {
        this.setMainHead();
        this.reloadData();
        this.reloadForm();
        /*this.fileInfos =  this.patientDocumentsService.getFiles();*/
    }
    setMainHead() {
        let url = this.router.url;
        let urlList = url.split("/");
        if (urlList[1] == "nurseWorkbench") {
            this.mainhead = "Nurse Work Bench";
            this.mainHeadLink = "/nurseWorkbench";
        }
        else if (urlList[1] == "doctorsWorkbench") {
            this.mainhead = "Doctors Work Bench";
            this.mainHeadLink = "/doctorsWorkbench";
        }
        if (localStorage.getItem('encounter') != null) {
            this.encounter = JSON.parse(localStorage.getItem('encounter'));
            this.encounterId = this.encounter.encounterId;
        }
    }
    reloadData() {
        this.encounterService.getEncounterById(Number(this.encounterId)).subscribe(data => {
            this.encounter = data;
            this.patient = this.encounter.appointment.patient;
            /*console.log(this.patient)*/
        });
        this.departmentService.getDepartmentList().subscribe(data => {
            this.departmentList = data;
        });
        this.consultationService.getConsultantList().subscribe(data => {
            this.consultantList = data;
        });
        this.lookupService.getLookupEntityList().subscribe(data => {
            this.lookupEntityList = data;
        });
    }
    reloadForm() {
        this.patientDForm = this.fb.group({
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            subCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
            fileDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null)
        });
    }
    onFileSelected(event) {
        const file = event.target.files[0];
        this.file = event.target.files[0];
        this.file = file;
        this.fileName = file.name;
        this.documentList = event.target.files;
        this.documentPath = event.target.value;
        //console.log(file.name)
        //console.log(this.documentPath)
        this.selectedFiles = event.target.files;
        //console.log(this.documentList.values)
        for (let fil of event.target.files) {
            this.files.push({
                name: fil.name,
                type: fil.type
            });
        }
        for (var i = 0; i < event.target.files.length; i++) {
            this.myFiles.push(event.target.files[i]);
        }
        if (file) {
            //this.File_name = file.name;
            this.totalFiles = this.myFiles.length;
            //console.log(this.documentList)
            //console.log(this.File_name[0])
            //console.log(i)
        }
    }
    upload() {
        this.progress = 0;
        this.patientDocuments = this.patientDForm.value;
        this.patientDocuments.patient = this.encounter.patient;
        this.patientDocuments.department = this.encounter.department;
        this.patientDocuments.serviceCenter = this.encounter.serviceCenter;
        this.patientDocuments.visit = this.encounter.visit;
        this.patientDocuments.uploadedBy = null;
        this.patientDocuments.documentUploadedDate = this.documentUploadedDate;
        //this.patientDocuments.documentNo = null;
        //this.patientDocuments.fileDescription = null;
        //this.patientDocuments.fileName = this.fileName;
        //this.patientDocuments.folderPath = this.folderPath;
        var formData = new FormData();
        formData.append('patientDocument', JSON.stringify(this.patientDocuments));
        formData.append('document', this.file);
        console.log(formData);
        console.log(this.patientDocuments);
        this.patientDocumentsService.uploadPatientDocumentWithFile(formData).subscribe(data => {
            //console.log(data);
            alert("Successfully inserted!!!!!");
        });
        /*this.patientDocumentsService.UploadPatientDocuments(this.patientDocuments).subscribe(data =>{
            console.log(patientDocuments)
            alert("file uploaded successfully")
        })*/
        //this.patientDocuments.filePath = this.
    }
    showFileName(data) {
        console.log(data);
        console.log(document.getElementById("fileId"));
        console.log(data.target.files);
    }
};
PatientDocumentComponent.ctorParameters = () => [
    { type: _encounter_services_encounter_service__WEBPACK_IMPORTED_MODULE_5__.EncounterService },
    { type: _services_patient_documents_service__WEBPACK_IMPORTED_MODULE_11__.PatientDocumentsService },
    { type: _master_lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_8__.LookupService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder },
    { type: _master_department_services_department_service__WEBPACK_IMPORTED_MODULE_3__.DepartmentService },
    { type: _encounter_services_consultant_service__WEBPACK_IMPORTED_MODULE_2__.ConsultantService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router }
];
PatientDocumentComponent.propDecorators = {
    PatientList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Output }],
    patient: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Output }],
    isPatientDocumentsWithPatientControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }]
};
PatientDocumentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-patient-document',
        template: _raw_loader_patient_document_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_12__.routerTransition)()],
        styles: [_patient_document_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PatientDocumentComponent);



/***/ }),

/***/ 68742:
/*!**********************************************************************!*\
  !*** ./src/app/clinical/patient-document/patient-document.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientDocumentModule": function() { return /* binding */ PatientDocumentModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _patient_document_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patient-document-routing.module */ 11638);
/* harmony import */ var _patient_document_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patient-document.component */ 33496);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ 51679);
/* harmony import */ var _patient_control_patient_control_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../patient-control/patient-control.module */ 49870);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);








let PatientDocumentModule = class PatientDocumentModule {
};
PatientDocumentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _patient_document_component__WEBPACK_IMPORTED_MODULE_1__.PatientDocumentComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _patient_document_routing_module__WEBPACK_IMPORTED_MODULE_0__.PatientDocumentRoutingModule,
            _shared__WEBPACK_IMPORTED_MODULE_2__.PageHeaderModule,
            _patient_control_patient_control_module__WEBPACK_IMPORTED_MODULE_3__.PatientControlModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule
        ],
        exports: [
            _patient_document_component__WEBPACK_IMPORTED_MODULE_1__.PatientDocumentComponent
        ]
    })
], PatientDocumentModule);



/***/ }),

/***/ 42491:
/*!*********************************************************************************!*\
  !*** ./src/app/clinical/patient-document/services/patient-documents.service.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientDocumentsService": function() { return /* binding */ PatientDocumentsService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../main.service */ 29118);




let PatientDocumentsService = class PatientDocumentsService {
    constructor(http, mainService) {
        this.http = http;
        this.mainService = mainService;
        this.baseUrl = "";
        this.baseUrl = this.mainService.getBaseUrl();
    }
    getPatientDocuments(patient) {
        return this.http.get(`${this.baseUrl}/patientDocuments/get`, patient);
    }
    UploadPatientDocuments(patient) {
        return this.http.post(`${this.baseUrl}/patientDocument/add`, patient);
    }
    uploadPatientDocumentWithFile(formData) {
        return this.http.post(`${this.baseUrl}/patientDocument/addInServer`, formData);
    }
};
PatientDocumentsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService }
];
PatientDocumentsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PatientDocumentsService);



/***/ }),

/***/ 79985:
/*!**************************************************************************!*\
  !*** ./src/app/clinical/patient-document/patient-document.component.css ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXRpZW50LWRvY3VtZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ 617:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clinical/patient-document/patient-document.component.html ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <div [@routerTransition] *ngIf = \"isPatientDocumentsWithPatientControl\">\n \t<app-page-header [mainhead]=\"mainhead\" [mainheadLink]=\"mainHeadLink\" [heading]=\"'Patient Documents'\" [icon]=\"'fa fa-address-card-o'\"></app-page-header>\n </div>\n <div class=\"col-md-12 navbar-nav bg-info mr-auto\" *ngIf = \"isPatientDocumentsWithPatientControl\">\n \t<div class=\"bg-info\">\n\t<app-patient-control [patient]=\"patient\" ></app-patient-control>\n</div>\n</div>\n\n<div class=\"col-md-12 row mt-2\">\n<div class=\"col-md-5 row\">\n<form [formGroup]=\"patientDForm\">\n\t<div  class=\"col-md-12\">\n\t\t<label class=\"col-md-4\">Department</label>\n\t\t<b>:</b>\n\t\t<select  class=\"col-md-6\" >\n\t\t<option [ngValue]=\"department\" selected >{{encounter.department.departmentName}}</option>\n\t\t<option *ngFor =\"let dept of departmentList\" >{{dept.departmentName}}</option>\n\t\t</select>\n\t</div>\n\t<div class=\"col-md-12\">\n\t\t<label class=\"col-md-4\">Consultant</label>\n\t\t<b>:</b>\n\t\t<select class=\"col-md-6\">\n\t\t<option selected>{{encounter.consultant.consultantName}}</option>\n\t\t<option *ngFor=\"let consult of consultantList\">{{consult.consultantName}}</option>\n\t\t</select>\n\t</div>\n\t<div class=\"col-md-12\">\n\t\t<label class=\"col-md-4\">Category</label>\n\t\t<b>:</b>\n\t\t<select class=\"col-md-6\" [(ngModel)]=\"category\" formControlName=\"category\" name =\"category\">\n\t\t<option [value] = \"catDemo\">--select Category--</option>\n\t\t<ng-container *ngFor=\"let look of lookupEntityList\">\n\t\t<option *ngIf=\"look.category.categoryId==267\" [ngValue] = \"look\">{{look.lookupValue}}</option>\n\t\t</ng-container>\n\t\t</select>\n\t</div>\n\t<div class=\"col-md-12\">\n\t\t<label class=\"col-md-4\">SubCategory</label>\n\t\t<b>:</b>\n\t\t<select class=\"col-md-6\" formControlName=\"subCategory\">\n\t\t<option [ngValue] = null>--select SubCategory--</option>\n\t\t<ng-container *ngFor=\"let look of lookupEntityList\">\n\t\t\t<option *ngIf=\"look.category.categoryId==269\" [ngValue] = \"look\">{{look.lookupValue}}</option>\t\n\t\t</ng-container>\n\t\t</select>\n\t</div>\n\t\n\t<div class=\"col-md-12\">\n\t\t<label class=\"col-md-4\">File</label>\n\t\t<b>:</b>\n\t\t<input class=\"col-md-6 form-gr\" multiple accept=\".pdf,.jpg,.jpeg,.png\" type='file' name='files' id=\"files\" (change)=\"onFileSelected($event)\" #fileUpload />\n\t</div>\n\t\n\t<div class=\"col-md-12\">\n\t\t<label class=\"col-md-4\">Description</label>\n\t\t<b>:</b>\n\t\t<textarea class=\"col-md-6\" rows=\"1\" formControlName=\"fileDescription\" type=\"text\"></textarea>\n\t</div>\n\t<div class=\"col-md-12\">\n\t<div class=\"col-md-8\">\n\t\t<div>Docs List<label><b>[Total:{{totalFiles}} files]</b></label><!-- <b>{{document.name}}</b> --></div>\n\t\t<label></label>\n\t</div>\n\t</div>\n\t<hr class=\"bg-primary\">\n\t<div Style=\"overflow:auto;height:200px\">\n\t<div class=\"col-md-12 row\" *ngFor=\"let document of documentList\">\n\t<div class=\"col-md-2\">\n\t\t<input type=\"checkbox\"/>\n\t</div>\n\t<div class=\"col-md-10 row\">\n\t\t<div>\n\t\t\t<label class=\"col-md-5\">Created Date</label>\n\t\t\t<input class=\"col-md-7\" [value]=\"documentUploadedDate | date:'yyyy-MM-dd'\" type =\"date\">\n\t\t</div>\n\t\t<div class=\"col-md-12\">\n\t\t\t<label>({{document.name}})</label>\n\t\t</div>\n\t\t<div class=\"col-md-12\">\n\t\t\t\n\t\t\t\t[<label></label>{{category.lookupValue}}-<label>{{documentUploadedDate | date:'dd-MM-yyyy'}}</label>-<label>{{encounter.consultant.consultantName}}</label>]\t\n\t\t</div>\n\t</div>\n\t</div></div>\n\t<div class=\"col-md-12\">\n\t<div class=\"col-md-8\"></div>\n\t<div class=\"col-md-2 \">\n\t\t<button class=\"btn-success\" type=\"submit\"  (click)=\"upload()\">Upload</button>\n\t</div>\n\t</div>\n\t</form>\n</div>\n\n</div>\n\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_clinical_patient-document_patient-document_module_ts-es2015.js.map