(self["webpackChunksb_admin_bs4_angular_9"] = self["webpackChunksb_admin_bs4_angular_9"] || []).push([["src_app_master_master_module_ts"],{

/***/ 22001:
/*!****************************************************************************!*\
  !*** ./src/app/master/country-category/country-category-routing.module.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryCategoryRoutingModule": function() { return /* binding */ CountryCategoryRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _country_category_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country-category.component */ 86571);




const routes = [
    { path: '', component: _country_category_component__WEBPACK_IMPORTED_MODULE_0__.CountryCategoryComponent },
    { path: 'itemmaster', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../item-master/item-master.module */ 15113)).then((m) => m.ItemMasterModule) },
];
let CountryCategoryRoutingModule = class CountryCategoryRoutingModule {
};
CountryCategoryRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], CountryCategoryRoutingModule);



/***/ }),

/***/ 86571:
/*!***********************************************************************!*\
  !*** ./src/app/master/country-category/country-category.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryCategoryComponent": function() { return /* binding */ CountryCategoryComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_country_category_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./country-category.component.html */ 31072);
/* harmony import */ var _country_category_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country-category.component.css */ 19966);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ 74903);
/* harmony import */ var _masters_country__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./masters/country */ 60139);
/* harmony import */ var _services_patient_address_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/patient-address.service */ 55990);









let CountryCategoryComponent = class CountryCategoryComponent {
    constructor(http, router, patietnAddresService) {
        this.http = http;
        this.router = router;
        this.patietnAddresService = patietnAddresService;
        this.data = new _masters_country__WEBPACK_IMPORTED_MODULE_3__.Country;
        this.createCountry = new _masters_country__WEBPACK_IMPORTED_MODULE_3__.Country();
        this.submitted = true;
        this.submit = true;
        this.name = '';
        this.page = 1;
        this.pageSize = 5;
    }
    ngOnInit() {
        this.reloadData();
    }
    reloadData() {
        this.patietnAddresService.getCountries().subscribe(data => { this.country = data, console.log(this.country), this.len = data.length; });
        ;
    }
    details(country) {
        this.submitted = !this.submitted;
        this.submit = true;
        this.createCountry = country;
    }
    gotoStates(countryId) {
        console.log(countryId);
        this.router.navigate(['/master/state', countryId]);
    }
    goto() {
        this.submitted = !this.submitted;
    }
    newCountry() {
        this.submitted = !this.submitted;
        this.submit = false;
        this.createCountry = new _masters_country__WEBPACK_IMPORTED_MODULE_3__.Country;
    }
    onSubmit() {
        this.patietnAddresService.createCountry(this.createCountry).subscribe(data => {
            console.log("This is return after saving " + data);
            this.submitted = !this.submitted;
            this.reloadData();
        });
    }
    updateCountry(country) {
        this.patietnAddresService.updateCountry(country.countryId, country).subscribe(data => {
            alert("Updated Successfully");
            this.createCountry = new _masters_country__WEBPACK_IMPORTED_MODULE_3__.Country;
            this.reloadData();
            this.submitted = true;
        });
    }
    deleteCountry() {
        this.patietnAddresService.deleteCountry(this.data.countryId).subscribe(data => {
            console.log(data);
            this.reloadData();
            this.submitted = !this.submitted;
        });
    }
    show() {
        this.submitted = true;
        this.submit = true;
    }
};
CountryCategoryComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_patient_address_service__WEBPACK_IMPORTED_MODULE_4__.PatientAddressService }
];
CountryCategoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-country-category',
        template: _raw_loader_country_category_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_country_category_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CountryCategoryComponent);



/***/ }),

/***/ 54582:
/*!********************************************************************!*\
  !*** ./src/app/master/country-category/country-category.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryCategoryModule": function() { return /* binding */ CountryCategoryModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _country_category_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country-category.component */ 86571);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared */ 51679);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _pipes_country_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/country.pipe */ 61504);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _country_category_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./country-category-routing.module */ 22001);









let CountryCategoryModule = class CountryCategoryModule {
};
CountryCategoryModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _country_category_component__WEBPACK_IMPORTED_MODULE_0__.CountryCategoryComponent,
            _pipes_country_pipe__WEBPACK_IMPORTED_MODULE_2__.CountryPipe
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _country_category_routing_module__WEBPACK_IMPORTED_MODULE_3__.CountryCategoryRoutingModule,
            _shared__WEBPACK_IMPORTED_MODULE_1__.PageHeaderModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule
        ]
    })
], CountryCategoryModule);



/***/ }),

/***/ 98396:
/*!*************************************************************************************!*\
  !*** ./src/app/master/country-category/modules/district/district-routing.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DistrictRoutingModule": function() { return /* binding */ DistrictRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _district_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./district.component */ 88220);




const routes = [
    { path: '', component: _district_component__WEBPACK_IMPORTED_MODULE_0__.DistrictComponent },
];
let DistrictRoutingModule = class DistrictRoutingModule {
};
DistrictRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], DistrictRoutingModule);



/***/ }),

/***/ 88220:
/*!********************************************************************************!*\
  !*** ./src/app/master/country-category/modules/district/district.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DistrictComponent": function() { return /* binding */ DistrictComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_district_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./district.component.html */ 8734);
/* harmony import */ var _district_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./district.component.css */ 50395);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _masters_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../masters/state */ 44636);
/* harmony import */ var _services_patient_address_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/patient-address.service */ 55990);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _masters_district__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../masters/district */ 14139);
/* harmony import */ var _masters_country__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../masters/country */ 60139);










let DistrictComponent = class DistrictComponent {
    constructor(_location, patientAddressService, route, router) {
        this._location = _location;
        this.patientAddressService = patientAddressService;
        this.route = route;
        this.router = router;
        this.state = new _masters_state__WEBPACK_IMPORTED_MODULE_2__.State();
        this.createDistrict = new _masters_district__WEBPACK_IMPORTED_MODULE_4__.District();
        this.country = new _masters_country__WEBPACK_IMPORTED_MODULE_5__.Country();
        this.name = "";
        this.submitted = true;
        this.submit = true;
        this.page = 1;
        this.pageSize = 5;
    }
    ngOnInit() {
        this.stateId = this.route.snapshot.params['id'];
        this.countryId = this.route.snapshot.params['countryId'];
        console.log(this.countryId);
        this.reloadData(this.stateId, this.countryId);
    }
    reloadData(stateId, countryId) {
        this.patientAddressService.getStatesById(stateId).subscribe(data => {
            console.log(data);
            this.state = data;
        });
        this.patientAddressService.getDistrictByState(stateId).subscribe(data => {
            console.log(data);
            this.district = data;
        });
        this.patientAddressService.getCountryById(countryId).subscribe(data => {
            this.len = data.length;
            this.country = data;
        });
    }
    goto() {
        this.submitted = !this.submitted;
        this.submit = true;
    }
    details(district) {
        this.submit = true;
        this.submitted = false;
        this.createDistrict = district;
    }
    updateDistrict(district) {
        this.patientAddressService.updateDistrict(district.districtId, district).subscribe(data => {
            this.submitted = true;
            this.reloadData(this.stateId, this.countryId);
            alert("Updated Successfully");
        }, error => console.log(error));
        ;
    }
    deleteDistrict(districtId) {
        this.patientAddressService.deleteDistrict(districtId).subscribe(data => {
            this.reloadData(this.stateId, this.countryId);
        });
    }
    addNew() {
        this.submitted = false;
        this.submit = false;
        this.createDistrict = new _masters_district__WEBPACK_IMPORTED_MODULE_4__.District();
    }
    onSubmit(addDistrictForm) {
        this.createDistrict = addDistrictForm.value;
        this.createDistrict.state = this.state;
        this.addDistrict(this.createDistrict);
        //console.warn(this.createState.stateId)
        //console.log("countryId : "+this.countryId +"countryName  is "+this.createState.country.countryName);
    }
    addDistrict(entity) {
        this.patientAddressService.createDistrict(entity).subscribe(data => {
            this.reloadData(this.stateId, this.countryId);
            this.createDistrict = new _masters_district__WEBPACK_IMPORTED_MODULE_4__.District;
            this.submitted = true;
            //console.warn("This is the data returned after saving",data)
        }, error => console.log(error));
    }
};
DistrictComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _services_patient_address_service__WEBPACK_IMPORTED_MODULE_3__.PatientAddressService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
DistrictComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-district',
        template: _raw_loader_district_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_district_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DistrictComponent);



/***/ }),

/***/ 51989:
/*!*****************************************************************************!*\
  !*** ./src/app/master/country-category/modules/district/district.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DistrictModule": function() { return /* binding */ DistrictModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared */ 51679);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _district_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./district.component */ 88220);
/* harmony import */ var _district_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./district-routing.module */ 98396);
/* harmony import */ var _pipes_district_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/district.pipe */ 41341);









let DistrictModule = class DistrictModule {
};
DistrictModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _district_component__WEBPACK_IMPORTED_MODULE_1__.DistrictComponent,
            _pipes_district_pipe__WEBPACK_IMPORTED_MODULE_3__.DistrictPipe
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _district_routing_module__WEBPACK_IMPORTED_MODULE_2__.DistrictRoutingModule,
            _shared__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule
        ],
        exports: [_district_component__WEBPACK_IMPORTED_MODULE_1__.DistrictComponent]
    })
], DistrictModule);



/***/ }),

/***/ 5252:
/*!*******************************************************************************!*\
  !*** ./src/app/master/country-category/modules/state/state-routing.module.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateRoutingModule": function() { return /* binding */ StateRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _state_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.component */ 15868);




const routes = [
    { path: '', component: _state_component__WEBPACK_IMPORTED_MODULE_0__.StateComponent },
];
let StateRoutingModule = class StateRoutingModule {
};
StateRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], StateRoutingModule);



/***/ }),

/***/ 15868:
/*!**************************************************************************!*\
  !*** ./src/app/master/country-category/modules/state/state.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateComponent": function() { return /* binding */ StateComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_state_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./state.component.html */ 74754);
/* harmony import */ var _state_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.component.css */ 44031);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _masters_country__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../masters/country */ 60139);
/* harmony import */ var _masters_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../masters/state */ 44636);
/* harmony import */ var _services_patient_address_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/patient-address.service */ 55990);









let StateComponent = class StateComponent {
    constructor(http, router, route, patientAddressService) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.patientAddressService = patientAddressService;
        this.createState = new _masters_state__WEBPACK_IMPORTED_MODULE_3__.State();
        this.country = new _masters_country__WEBPACK_IMPORTED_MODULE_2__.Country();
        this.submitted = true;
        this.submit = true;
        this.page = 1;
        this.pageSize = 5;
        this.name = "";
    }
    ngOnInit() {
        this.submitted = true;
        this.submit = true;
        this.countryId = this.route.snapshot.params['id'];
        this.reloadData(this.countryId);
    }
    reloadData(countryId) {
        this.patientAddressService.getCountryById(countryId).subscribe(data => {
            this.len = data.length;
            this.country = data;
            //console.log(this.country);
        });
        this.patientAddressService.getStateByCountry(countryId).subscribe(data => {
            this.state = data;
            //console.log("This is the data from state table " + data)
        });
    }
    onSubmit(addForm) {
        this.createState = addForm.value;
        this.createState.country = this.country;
        this.createStates(this.createState);
        //console.warn(this.createState.stateId)
        //console.log("countryId : "+this.countryId +"countryName  is "+this.createState.country.countryName);
    }
    goto() {
        this.submitted = true;
        this.submit = true;
    }
    createStates(entity) {
        this.patientAddressService.createState(entity).subscribe(data => {
            this.createState = new _masters_state__WEBPACK_IMPORTED_MODULE_3__.State();
            //console.warn("This is the data returned after saving",data)
            this.submitted = true;
            this.reloadData(this.countryId);
        }, error => console.log(error));
    }
    updateState(state) {
        //console.log("Update button is working")
        //console.log(lookup);
        this.patientAddressService.updateState(state.stateId, state).subscribe(data => {
            //console.log(data);
            this.country = new _masters_country__WEBPACK_IMPORTED_MODULE_2__.Country();
            this.submitted = !this.submitted;
            this.reloadData(this.countryId);
            alert("Updated Successfully");
        }, error => console.log(error));
        ;
    }
    deleteState(stateId) {
        this.patientAddressService.deleteState(stateId).subscribe(data => {
            //console.log(data);
            this.reloadData(this.countryId);
        });
    }
    gotoDistricts(stateId) {
        console.log(this.currentNav);
        this.router.navigate(['/master/district', { id: stateId, countryId: this.countryId }]);
    }
    details(state) {
        this.submit = true;
        this.submitted = false;
        this.createState = state;
    }
    addState() {
        this.submit = false;
        this.submitted = false;
        this.createState = new _masters_state__WEBPACK_IMPORTED_MODULE_3__.State();
    }
};
StateComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _services_patient_address_service__WEBPACK_IMPORTED_MODULE_4__.PatientAddressService }
];
StateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-state',
        template: _raw_loader_state_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_state_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StateComponent);



/***/ }),

/***/ 2093:
/*!***********************************************************************!*\
  !*** ./src/app/master/country-category/modules/state/state.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateModule": function() { return /* binding */ StateModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared */ 51679);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _state_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.component */ 15868);
/* harmony import */ var _pipes_state_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/state.pipe */ 586);
/* harmony import */ var _state_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state-routing.module */ 5252);









let StateModule = class StateModule {
};
StateModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _state_component__WEBPACK_IMPORTED_MODULE_1__.StateComponent,
            _pipes_state_pipe__WEBPACK_IMPORTED_MODULE_2__.StatePipe
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _state_routing_module__WEBPACK_IMPORTED_MODULE_3__.StateRoutingModule,
            _shared__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule
        ],
        exports: [_state_component__WEBPACK_IMPORTED_MODULE_1__.StateComponent]
    })
], StateModule);



/***/ }),

/***/ 61504:
/*!***************************************************************!*\
  !*** ./src/app/master/country-category/pipes/country.pipe.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryPipe": function() { return /* binding */ CountryPipe; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let CountryPipe = class CountryPipe {
    transform(value, args) {
        if (!args) {
            return value;
        }
        return value.filter((val) => {
            let rVal = (val.countryCode.toLocaleLowerCase().includes(args.toLowerCase()) || (val.identification.toLowerCase().includes(args.toLowerCase()) || (val.countryName.toLowerCase().includes(args.toLowerCase()))));
            return rVal;
        });
    }
};
CountryPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'country'
    })
], CountryPipe);



/***/ }),

/***/ 41341:
/*!****************************************************************!*\
  !*** ./src/app/master/country-category/pipes/district.pipe.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DistrictPipe": function() { return /* binding */ DistrictPipe; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let DistrictPipe = class DistrictPipe {
    transform(value, args) {
        if (!args) {
            return value;
        }
        return value.filter((val) => {
            let rVal = (val.districtCode.toLocaleLowerCase().includes(args.toLowerCase()) || (val.description.toLowerCase().includes(args.toLowerCase()) || (val.districtName.toLowerCase().includes(args.toLowerCase()))));
            return rVal;
        });
    }
};
DistrictPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'district'
    })
], DistrictPipe);



/***/ }),

/***/ 586:
/*!*************************************************************!*\
  !*** ./src/app/master/country-category/pipes/state.pipe.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatePipe": function() { return /* binding */ StatePipe; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let StatePipe = class StatePipe {
    transform(value, args) {
        if (!args) {
            return value;
        }
        return value.filter((val) => {
            let rVal = (val.stateCode.toLocaleLowerCase().includes(args.toLowerCase()) || (val.description.toLowerCase().includes(args.toLowerCase()) || (val.stateName.toLowerCase().includes(args.toLowerCase()))));
            return rVal;
        });
    }
};
StatePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'state'
    })
], StatePipe);



/***/ }),

/***/ 40872:
/*!****************************************************************!*\
  !*** ./src/app/master/department/department-routing.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepartmentRoutingModule": function() { return /* binding */ DepartmentRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _department_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./department.component */ 79281);




const routes = [
    { path: '', component: _department_component__WEBPACK_IMPORTED_MODULE_0__.DepartmentComponent },
];
let DepartmentRoutingModule = class DepartmentRoutingModule {
};
DepartmentRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], DepartmentRoutingModule);



/***/ }),

/***/ 79281:
/*!***********************************************************!*\
  !*** ./src/app/master/department/department.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepartmentComponent": function() { return /* binding */ DepartmentComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_department_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./department.component.html */ 80839);
/* harmony import */ var _department_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./department.component.css */ 95823);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ 74903);
/* harmony import */ var _services_department_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/department.service */ 25482);
/* harmony import */ var _service_center_services_branch_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-center/services/branch-service.service */ 31582);









let DepartmentComponent = class DepartmentComponent {
    constructor(http, route, branchService, router, departmentService) {
        this.http = http;
        this.route = route;
        this.branchService = branchService;
        this.router = router;
        this.departmentService = departmentService;
        this.search = '';
        this.page = 1;
        this.pageSize = 5;
        this.submitted = true;
        this.submit = true;
        this.dep = '';
    }
    ngOnInit() {
        this.reloadData();
    }
    reloadData() {
        this.branchService.getBranch().subscribe(data => {
            this.branchList = data;
        });
        this.departmentService.getAllDepartments().subscribe(data => {
            console.log(data), this.departments = data, this.len = data.length;
        });
    }
    details(data) {
        this.dep = data;
        this.submitted = !this.submitted;
        this.id1 = this.dep.departmentId;
    }
    OnSubmit(form) {
        this.branchId = form.site;
        console.log(this.branchId);
        console.log(form.value);
        for (let branch of this.branchList) {
            if (this.branchId == branch.id) {
                this.dep.site = branch;
            }
        }
        this.departmentService.updateDepartment(this.id1, this.dep).subscribe(data => {
            this.gotoList();
        }, error => console.log(error));
    }
    gotoList() {
        this.reloadData();
        //this.router.navigate(['/master/department']).then(() => {window.location.reload()});
    }
    newDepartment() {
        this.submit = !this.submit;
        this.submitted = true;
    }
    onSubmit(createDocForm) {
        this.department = createDocForm.value;
        console.log("This is the CreateDocForm data" + createDocForm);
        this.departmentService.createDepartments(this.department).subscribe(data => {
            console.log("This is data from creating department" + data);
            this.gotoList();
        });
    }
    showDepartments() {
        this.submitted = true;
        this.submit = true;
    }
};
DepartmentComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _service_center_services_branch_service_service__WEBPACK_IMPORTED_MODULE_4__.BranchServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_department_service__WEBPACK_IMPORTED_MODULE_3__.DepartmentService }
];
DepartmentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'department',
        template: _raw_loader_department_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_department_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DepartmentComponent);



/***/ }),

/***/ 70389:
/*!********************************************************!*\
  !*** ./src/app/master/department/department.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepartmentModule": function() { return /* binding */ DepartmentModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _department_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./department-routing.module */ 40872);
/* harmony import */ var _department_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./department.component */ 79281);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ 51679);
/* harmony import */ var _pipes_depsearch_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/depsearch.pipe */ 29613);









let DepartmentModule = class DepartmentModule {
};
DepartmentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _department_component__WEBPACK_IMPORTED_MODULE_1__.DepartmentComponent,
            _pipes_depsearch_pipe__WEBPACK_IMPORTED_MODULE_3__.DepsearchPipe
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _department_routing_module__WEBPACK_IMPORTED_MODULE_0__.DepartmentRoutingModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _shared__WEBPACK_IMPORTED_MODULE_2__.PageHeaderModule
        ]
    })
], DepartmentModule);



/***/ }),

/***/ 29613:
/*!***********************************************************!*\
  !*** ./src/app/master/department/pipes/depsearch.pipe.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepsearchPipe": function() { return /* binding */ DepsearchPipe; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let DepsearchPipe = class DepsearchPipe {
    transform(value, args) {
        if (!args) {
            return value;
        }
        return value.filter((val) => {
            let rVal = (val.departmentName.toLocaleLowerCase().includes(args) || (val.description.toLowerCase().includes(args) || (val.hod.toLowerCase().includes(args))));
            return rVal;
        });
    }
};
DepsearchPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'depsearch'
    })
], DepsearchPipe);



/***/ }),

/***/ 3900:
/*!******************************************************************!*\
  !*** ./src/app/master/item-master/item-master-routing.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemMasterRoutingModule": function() { return /* binding */ ItemMasterRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _item_master_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-master.component */ 46370);




const routes = [
    { path: '', component: _item_master_component__WEBPACK_IMPORTED_MODULE_0__.ItemMasterComponent }
];
let ItemMasterRoutingModule = class ItemMasterRoutingModule {
};
ItemMasterRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ItemMasterRoutingModule);



/***/ }),

/***/ 46370:
/*!*************************************************************!*\
  !*** ./src/app/master/item-master/item-master.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemMasterComponent": function() { return /* binding */ ItemMasterComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_master_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-master.component.html */ 21166);
/* harmony import */ var _item_master_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-master.component.css */ 36684);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ 74903);
/* harmony import */ var _lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lookup-module/services/lookup.service */ 41168);
/* harmony import */ var _masters_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./masters/item */ 57574);
/* harmony import */ var _masters_item_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./masters/item-type */ 71068);
/* harmony import */ var _masters_UOM__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./masters/UOM */ 36027);
/* harmony import */ var _services_item_master_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/item-master.service */ 68208);











let ItemMasterComponent = class ItemMasterComponent {
    constructor(itemSerice, fb, lookupService) {
        this.itemSerice = itemSerice;
        this.fb = fb;
        this.lookupService = lookupService;
        this.createItemForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({});
        this.item = new _masters_item__WEBPACK_IMPORTED_MODULE_4__.Item;
        this.itemList = new Array();
        this.page = 1;
        this.pageSize = 5;
        this.isList = true;
        this.searchItem = "";
        this.itemTypeList = [];
        this.itemClassList = [];
        this.itemCategoryList = [];
        this.uomList = new Array();
        this.inventoryAccountList = [];
        this.uomTypeList = [];
        this.itemSupplierList = [];
        this.itemStoreList = [];
        this.alternateItemList = [];
        this.itemSpecificationList = [];
        this.purchaseOrgList = [];
        this.itemBranchAccMapList = [];
        this.lookupEntityList = [];
        this.uomId = 0;
        this.createItem = new _masters_item__WEBPACK_IMPORTED_MODULE_4__.Item;
        this.itemTypeDemo = new _masters_item_type__WEBPACK_IMPORTED_MODULE_5__.ItemType;
        this.baseUom = new _masters_UOM__WEBPACK_IMPORTED_MODULE_6__.UOM;
    }
    ngOnInit() {
        this.showItemList();
    }
    onSubmit() {
        console.log(this.createItemForm.value);
        this.createItem = this.createItemForm.value;
        this.itemTypeDemo = this.createItemForm.value.itemType;
        this.createItem.itemType = this.itemTypeDemo;
        this.baseUom = this.createItemForm.value.baseUom;
        this.createItem.baseUom = this.baseUom;
        this.itemSerice.createItem(this.createItem).subscribe(data => {
            console.log(data);
            alert("Inserted Successfuly");
        });
    }
    createItemFunc() {
        this.itemSerice.getItemTypeList().subscribe(data => {
            this.itemTypeList = data;
            console.log("ItemType", data);
        });
        this.itemSerice.getItemClassList().subscribe(data => {
            this.itemClassList = data;
            console.log("ItemClass", data);
        });
        this.itemSerice.getItemCategoryList().subscribe(data => {
            this.itemCategoryList = data;
            console.log("ItemCategory", data);
        });
        this.itemSerice.getItemCategoryList().subscribe(data => {
            this.itemCategoryList = data;
            console.log("ItemCategory", data);
        });
        this.itemSerice.getUOMList().subscribe(data => {
            this.uomList = data;
            console.log("UOM", data);
        });
        this.itemSerice.getInventoryAccontList().subscribe(data => {
            this.inventoryAccountList = data;
            console.log("InventoryAccont", data);
        });
        this.itemSerice.getUOMTypeList().subscribe(data => {
            this.uomTypeList = data;
            console.log("uomType", data);
        });
        this.itemSerice.getItemSuppliersList().subscribe(data => {
            this.itemSupplierList = data;
            console.log("ItemSuppliers", data);
        });
        this.itemSerice.getItemStoresList().subscribe(data => {
            this.itemStoreList = data;
            console.log("itemStore", data);
        });
        this.itemSerice.getAlternateItemList().subscribe(data => {
            this.alternateItemList = data;
            console.log("AlternateItem", data);
        });
        this.itemSerice.getItemSpecificationList().subscribe(data => {
            this.itemSpecificationList = data;
            console.log("ItemSpecification", data);
        });
        this.itemSerice.getPurchaseOrganisationList().subscribe(data => {
            this.purchaseOrgList = data;
            console.log("PurchaseOrganization", data);
        });
        this.itemSerice.getItemBranchAccountMapList().subscribe(data => {
            this.itemBranchAccMapList = data;
            console.log("itemBranchAccMapList", data);
        });
        this.lookupService.getAllLookupEntities().subscribe(data => {
            console.log(data);
            this.lookupEntityList = data;
        });
        this.createItemForm = this.fb.group({
            itemCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            itemName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            itemDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            arbicName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            itemCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            itemType: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            itemGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            itemClass: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            stockType: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            procurementType: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            baseUom: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            trackUom: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            distributionCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            purchaseOrg: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            selfLifeLimit: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            itemSpecification: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            sfda: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            inventoried: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            isBatchTracked: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            isExpiryDateRequired: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            isSerialized: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            active: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            isApprovalRequired: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            isInsuranceCover: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            purchaseUom: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            salesUOM: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            defaultPricingMethod: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            markupPercentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            itemBranchAccMapList: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            costOfSalesAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            purchaseAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            salesAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            vedAnalysisType: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            cycleCountFrequency: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            reusable: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            reusableCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            itemRate: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            reserveQty: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            fsnType: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            manufacturerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            bulky: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            itemStores: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            sellingPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            salesPricingMethod: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
            currentCost: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
        });
    }
    showItemList() {
        this.itemSerice.getItemList().subscribe(itemData => {
            //console.log(data);
            this.itemList = itemData;
            this.len = itemData.length;
            //console.log(this.len);
            this.isList = true;
        });
    }
    addItem() {
        this.isList = false;
        this.createItemFunc();
    }
    trackUom(uom) {
        this.uomId = uom.uomId;
        console.log(uom.uomId);
    }
};
ItemMasterComponent.ctorParameters = () => [
    { type: _services_item_master_service__WEBPACK_IMPORTED_MODULE_7__.ItemMasterService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__.LookupService }
];
ItemMasterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-item-master',
        template: _raw_loader_item_master_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_item_master_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemMasterComponent);



/***/ }),

/***/ 15113:
/*!**********************************************************!*\
  !*** ./src/app/master/item-master/item-master.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemMasterModule": function() { return /* binding */ ItemMasterModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _item_master_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-master-routing.module */ 3900);
/* harmony import */ var _item_master_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-master.component */ 46370);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ 51679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _pipes_search_item_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/search-item.pipe */ 12276);









let ItemMasterModule = class ItemMasterModule {
};
ItemMasterModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _item_master_component__WEBPACK_IMPORTED_MODULE_1__.ItemMasterComponent,
            _pipes_search_item_pipe__WEBPACK_IMPORTED_MODULE_3__.SearchItemPipe
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _item_master_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemMasterRoutingModule,
            _shared__WEBPACK_IMPORTED_MODULE_2__.PageHeaderModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule
        ],
        exports: [_item_master_component__WEBPACK_IMPORTED_MODULE_1__.ItemMasterComponent]
    })
], ItemMasterModule);



/***/ }),

/***/ 16818:
/*!*************************************************************!*\
  !*** ./src/app/master/item-master/masters/Item-category.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemCategory": function() { return /* binding */ ItemCategory; }
/* harmony export */ });
/* harmony import */ var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../masters/base-entity */ 28685);
/* harmony import */ var _inventory_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory-account */ 87551);
/* harmony import */ var _Item_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item-class */ 83938);
/* harmony import */ var _UOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UOM */ 36027);




class ItemCategory extends _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity {
    constructor() {
        super();
        this.itemClass = new _Item_class__WEBPACK_IMPORTED_MODULE_2__.ItemClass();
        this.salesAccount = new _inventory_account__WEBPACK_IMPORTED_MODULE_1__.InventoryAccount();
        this.purchAndInvenAccount = new _inventory_account__WEBPACK_IMPORTED_MODULE_1__.InventoryAccount();
        this.costOfSalesAccount = new _inventory_account__WEBPACK_IMPORTED_MODULE_1__.InventoryAccount();
        this.stockControlAccount = new _inventory_account__WEBPACK_IMPORTED_MODULE_1__.InventoryAccount();
        this.trackUOM = new _UOM__WEBPACK_IMPORTED_MODULE_3__.UOM;
        this.baseUOM = new _UOM__WEBPACK_IMPORTED_MODULE_3__.UOM;
    }
}


/***/ }),

/***/ 83938:
/*!**********************************************************!*\
  !*** ./src/app/master/item-master/masters/Item-class.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemClass": function() { return /* binding */ ItemClass; }
/* harmony export */ });
/* harmony import */ var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../masters/base-entity */ 28685);

class ItemClass extends _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity {
    constructor() {
        super();
    }
}


/***/ }),

/***/ 36027:
/*!***************************************************!*\
  !*** ./src/app/master/item-master/masters/UOM.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UOM": function() { return /* binding */ UOM; }
/* harmony export */ });
/* harmony import */ var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../masters/base-entity */ 28685);
/* harmony import */ var _UOMType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UOMType */ 51126);


class UOM extends _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity {
    constructor() {
        super();
        this.uomType = new _UOMType__WEBPACK_IMPORTED_MODULE_1__.UOMType();
    }
}


/***/ }),

/***/ 51126:
/*!*******************************************************!*\
  !*** ./src/app/master/item-master/masters/UOMType.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UOMType": function() { return /* binding */ UOMType; }
/* harmony export */ });
/* harmony import */ var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../masters/base-entity */ 28685);

class UOMType extends _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity {
    constructor() {
        super();
    }
}


/***/ }),

/***/ 87551:
/*!*****************************************************************!*\
  !*** ./src/app/master/item-master/masters/inventory-account.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryAccount": function() { return /* binding */ InventoryAccount; }
/* harmony export */ });
/* harmony import */ var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../masters/base-entity */ 28685);
/* harmony import */ var _money__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./money */ 52274);


class InventoryAccount extends _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity {
    constructor() {
        super();
        this.balance = new _money__WEBPACK_IMPORTED_MODULE_1__.Money;
    }
}


/***/ }),

/***/ 90888:
/*!******************************************************************!*\
  !*** ./src/app/master/item-master/masters/item-specification.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemSpecification": function() { return /* binding */ ItemSpecification; }
/* harmony export */ });
/* harmony import */ var _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lookup-module/masters/lookup-entity */ 11697);
/* harmony import */ var _subBase_Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subBase-Entity */ 50050);


class ItemSpecification extends _subBase_Entity__WEBPACK_IMPORTED_MODULE_1__.SubBaseEntity {
    constructor() {
        super();
        this.availableFrom = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity;
    }
}


/***/ }),

/***/ 71068:
/*!*********************************************************!*\
  !*** ./src/app/master/item-master/masters/item-type.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemType": function() { return /* binding */ ItemType; }
/* harmony export */ });
/* harmony import */ var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../masters/base-entity */ 28685);

class ItemType extends _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity {
    constructor() {
        super();
    }
}


/***/ }),

/***/ 57574:
/*!****************************************************!*\
  !*** ./src/app/master/item-master/masters/item.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Item": function() { return /* binding */ Item; }
/* harmony export */ });
/* harmony import */ var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../masters/base-entity */ 28685);
/* harmony import */ var _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lookup-module/masters/lookup-entity */ 11697);
/* harmony import */ var _inventory_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventory-account */ 87551);
/* harmony import */ var _Item_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Item-category */ 16818);
/* harmony import */ var _Item_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Item-class */ 83938);
/* harmony import */ var _item_specification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-specification */ 90888);
/* harmony import */ var _item_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-type */ 71068);
/* harmony import */ var _purchase_organization__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./purchase-organization */ 1850);
/* harmony import */ var _UOM__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UOM */ 36027);









class Item extends _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity {
    constructor() {
        super();
        this.itemCategory = new _Item_category__WEBPACK_IMPORTED_MODULE_3__.ItemCategory();
        this.itemType = new _item_type__WEBPACK_IMPORTED_MODULE_6__.ItemType();
        this.itemGroup = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__.LookupEntity();
        this.itemClass = new _Item_class__WEBPACK_IMPORTED_MODULE_4__.ItemClass();
        this.stockType = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__.LookupEntity();
        this.procurementType = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__.LookupEntity();
        this.baseUom = new _UOM__WEBPACK_IMPORTED_MODULE_8__.UOM();
        this.trackUom = new _UOM__WEBPACK_IMPORTED_MODULE_8__.UOM();
        this.distributionCategory = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__.LookupEntity();
        this.purchaseOrg = new _purchase_organization__WEBPACK_IMPORTED_MODULE_7__.PurchaseOrganization;
        this.itemSpecification = new _item_specification__WEBPACK_IMPORTED_MODULE_5__.ItemSpecification;
        this.purchaseUom = new _UOM__WEBPACK_IMPORTED_MODULE_8__.UOM;
        this.salesUOM = new _UOM__WEBPACK_IMPORTED_MODULE_8__.UOM();
        this.defaultPricingMethod = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__.LookupEntity();
        this.costOfSalesAccount = new _inventory_account__WEBPACK_IMPORTED_MODULE_2__.InventoryAccount();
        this.purchaseAccount = new _inventory_account__WEBPACK_IMPORTED_MODULE_2__.InventoryAccount();
        this.salesAccount = new _inventory_account__WEBPACK_IMPORTED_MODULE_2__.InventoryAccount();
        this.vedAnalysisType = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__.LookupEntity;
        this.cycleCountFrequency = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__.LookupEntity;
        this.fsnType = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__.LookupEntity;
        this.itemStores = new Array();
        this.alternateItems = new Array();
    }
}


/***/ }),

/***/ 52274:
/*!*****************************************************!*\
  !*** ./src/app/master/item-master/masters/money.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Money": function() { return /* binding */ Money; }
/* harmony export */ });
class Money {
}


/***/ }),

/***/ 1850:
/*!*********************************************************************!*\
  !*** ./src/app/master/item-master/masters/purchase-organization.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrganization": function() { return /* binding */ PurchaseOrganization; }
/* harmony export */ });
/* harmony import */ var _simple_profile_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple-profile-data */ 5520);

class PurchaseOrganization extends _simple_profile_data__WEBPACK_IMPORTED_MODULE_0__.SimpleProfileData {
    constructor() {
        super();
    }
}


/***/ }),

/***/ 5520:
/*!*******************************************************************!*\
  !*** ./src/app/master/item-master/masters/simple-profile-data.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimpleProfileData": function() { return /* binding */ SimpleProfileData; }
/* harmony export */ });
/* harmony import */ var _subBase_Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subBase-Entity */ 50050);

class SimpleProfileData extends _subBase_Entity__WEBPACK_IMPORTED_MODULE_0__.SubBaseEntity {
}


/***/ }),

/***/ 50050:
/*!**************************************************************!*\
  !*** ./src/app/master/item-master/masters/subBase-Entity.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubBaseEntity": function() { return /* binding */ SubBaseEntity; }
/* harmony export */ });
class SubBaseEntity {
}


/***/ }),

/***/ 12276:
/*!**************************************************************!*\
  !*** ./src/app/master/item-master/pipes/search-item.pipe.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchItemPipe": function() { return /* binding */ SearchItemPipe; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let SearchItemPipe = class SearchItemPipe {
    transform(value, args) {
        if (!args) {
            return value;
        }
        return value.filter((val) => {
            let rVal = (val.itemName.toLocaleLowerCase().includes(args) || (val.itemDesc.toLowerCase().includes(args)) || (val.itemCode.toString().includes(args)));
            return rVal;
        });
    }
};
SearchItemPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'searchItem'
    })
], SearchItemPipe);



/***/ }),

/***/ 68208:
/*!********************************************************************!*\
  !*** ./src/app/master/item-master/services/item-master.service.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemMasterService": function() { return /* binding */ ItemMasterService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);



let ItemMasterService = class ItemMasterService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "http://localhost:8080/springboot/api/v1";
    }
    getItemList() {
        return this.http.get(`${this.baseUrl}/item/get`);
    }
    createItem(item) {
        return this.http.post(`${this.baseUrl}/item/add`, item);
    }
    /************************************************  Item Type Goes Here******************************************/
    getItemTypeList() {
        return this.http.get(`${this.baseUrl}/itemType/get`);
    }
    createItemType(itemType) {
        return this.http.post(`${this.baseUrl}/itemType/add`, itemType);
    }
    /********************************************** Item Class Goes here  *********************************************************/
    getItemClassList() {
        return this.http.get(`${this.baseUrl}/itemClass/get`);
    }
    createItemClass(itemClass) {
        return this.http.post(`${this.baseUrl}/itemClass/add`, itemClass);
    }
    /********************************************** Item Category Goes here  *********************************************************/
    getItemCategoryList() {
        return this.http.get(`${this.baseUrl}/itemCategory/get`);
    }
    createItemCategory(itemCategory) {
        return this.http.post(`${this.baseUrl}/itemCategory/add`, itemCategory);
    }
    /********************************************** UOM Goes here  *********************************************************/
    getUOMList() {
        return this.http.get(`${this.baseUrl}/uom/get`);
    }
    createUOM(uom) {
        return this.http.post(`${this.baseUrl}/uom/add`, uom);
    }
    /********************************************** UOMType Goes here  *********************************************************/
    getUOMTypeList() {
        return this.http.get(`${this.baseUrl}/uomType/get`);
    }
    createUOMType(uomType) {
        return this.http.post(`${this.baseUrl}/uomType/add`, uomType);
    }
    /********************************************** InventoryAccount Goes here  *********************************************************/
    getInventoryAccontList() {
        return this.http.get(`${this.baseUrl}/inventoryAccount/get`);
    }
    createInventoryAccount(inventoryAccount) {
        return this.http.post(`${this.baseUrl}/inventoryAccount/add`, inventoryAccount);
    }
    /********************************************** ItemSuppliers Goes here  *********************************************************/
    getItemSuppliersList() {
        return this.http.get(`${this.baseUrl}/itemSuppliers/get`);
    }
    createItemSuppliers(itemSuppliers) {
        return this.http.post(`${this.baseUrl}/itemSuppliers/add`, itemSuppliers);
    }
    /********************************************** ItemStores Goes here  *********************************************************/
    getItemStoresList() {
        return this.http.get(`${this.baseUrl}/itemStores/get`);
    }
    createItemStores(itemStores) {
        return this.http.post(`${this.baseUrl}/itemStores/add`, itemStores);
    }
    /********************************************** AlternateItem Goes here  *********************************************************/
    getAlternateItemList() {
        return this.http.get(`${this.baseUrl}/alternateItem/get`);
    }
    createAlternateItem(alternateItem) {
        return this.http.post(`${this.baseUrl}/alternateItem/add`, alternateItem);
    }
    /********************************************** PurchaseOrganisation Goes here  *********************************************************/
    getPurchaseOrganisationList() {
        return this.http.get(`${this.baseUrl}/purchaseOrganisation/get`);
    }
    createPurchaseOrganisation(purchaseOrganisation) {
        return this.http.post(`${this.baseUrl}/purchaseOrganisation/add`, purchaseOrganisation);
    }
    /********************************************** ItemSpecification Goes here  *********************************************************/
    getItemSpecificationList() {
        return this.http.get(`${this.baseUrl}/itemSpecification/get`);
    }
    createItemSpecification(itemSpecification) {
        return this.http.post(`${this.baseUrl}/itemSpecification/add`, itemSpecification);
    }
    /********************************************** itemBranchAccountMap Goes here  *********************************************************/
    getItemBranchAccountMapList() {
        return this.http.get(`${this.baseUrl}/itemBranchAccountMap/get`);
    }
    createItemBranchAccountMap(itemBranchAccountMap) {
        return this.http.post(`${this.baseUrl}/itemBranchAccountMap/add`, itemBranchAccountMap);
    }
};
ItemMasterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
ItemMasterService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ItemMasterService);



/***/ }),

/***/ 68967:
/*!**********************************************************************************************!*\
  !*** ./src/app/master/lookup-module/components/lookup-category/lookup-category.component.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LookupCategoryComponent": function() { return /* binding */ LookupCategoryComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_lookup_category_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./lookup-category.component.html */ 73258);
/* harmony import */ var _lookup_category_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lookup-category.component.css */ 29835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../router.animations */ 74903);
/* harmony import */ var _masters_lookup_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../masters/lookup-category */ 23529);
/* harmony import */ var _services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/lookup.service */ 41168);









let LookupCategoryComponent = class LookupCategoryComponent {
    constructor(http, router, lookupService) {
        this.http = http;
        this.router = router;
        this.lookupService = lookupService;
        this.data = new _masters_lookup_category__WEBPACK_IMPORTED_MODULE_3__.LookupCategory();
        this.lookup = '';
        this.submitted = true;
        this.isDetail = true;
        this.name = '';
        this.page = 1;
        this.pageSize = 5;
        this.createLookup = new _masters_lookup_category__WEBPACK_IMPORTED_MODULE_3__.LookupCategory();
    }
    ngOnInit() {
        this.reloadData();
    }
    reloadData() {
        this.lookupService.getLookupCategoryList().subscribe(data => { this.lookupCategory = data, console.log(this.lookupCategory), this.len = data.length; });
        ;
    }
    details(lookup) {
        this.submitted = !this.submitted;
        this.createLookup = lookup;
        this.isDetail = false;
    }
    gotoLookupEntity(categoryId) {
        //console.log(categoryId);
        this.router.navigate(['/master/lookup-entity', categoryId]);
    }
    goto() {
        this.submitted = !this.submitted;
    }
    newLookupCategory() {
        this.submitted = !this.submitted;
        this.isDetail = true;
        this.createLookup = new _masters_lookup_category__WEBPACK_IMPORTED_MODULE_3__.LookupCategory();
    }
    createLookupCategory() {
        this.lookupService.createLookupCategory(this.createLookup).subscribe(data => {
            //console.log("This is return after saving "+data);
            this.submitted = !this.submitted;
            console.log(data);
            this.reloadData();
        });
    }
    updateLookupCategory() {
        this.lookupService.updateLookupCategory(this.createLookup.categoryId, this.createLookup).subscribe(data => {
            this.reloadData();
            this.show();
        });
    }
    deleteLookupCategory() {
        this.lookupService.deleteLookupCategory(this.data.categoryId).subscribe(data => {
            console.log(data);
            this.reloadData();
            this.submitted = !this.submitted;
        });
    }
    show() {
        this.submitted = true;
    }
};
LookupCategoryComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_lookup_service__WEBPACK_IMPORTED_MODULE_4__.LookupService }
];
LookupCategoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-lookup-category',
        template: _raw_loader_lookup_category_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_lookup_category_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LookupCategoryComponent);



/***/ }),

/***/ 79288:
/*!******************************************************************************************!*\
  !*** ./src/app/master/lookup-module/components/lookup-entity/lookup-entity.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LookupEntityComponent": function() { return /* binding */ LookupEntityComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_lookup_entity_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./lookup-entity.component.html */ 53103);
/* harmony import */ var _lookup_entity_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lookup-entity.component.css */ 71256);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _masters_lookup_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../masters/lookup-category */ 23529);
/* harmony import */ var _masters_lookup_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../masters/lookup-entity */ 11697);
/* harmony import */ var _services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/lookup.service */ 41168);









let LookupEntityComponent = class LookupEntityComponent {
    constructor(http, route, lookupService) {
        this.http = http;
        this.route = route;
        this.lookupService = lookupService;
        this.createLookupEntity = new _masters_lookup_entity__WEBPACK_IMPORTED_MODULE_3__.LookupEntity();
        this.lookups = new _masters_lookup_category__WEBPACK_IMPORTED_MODULE_2__.LookupCategory();
        this.submitted = true;
        this.submit = true;
        this.page = 1;
        this.pageSize = 5;
        this.name = "";
    }
    ngOnInit() {
        this.categoryId = this.route.snapshot.params['id'];
        this.reloadData(this.categoryId);
    }
    reloadData(id) {
        this.lookupService.getLookupEntityList(id).subscribe(data => {
            this.len = data.length;
            this.lookupEntity = data,
                this.submitted = true;
        });
        this.lookupService.getLookupCategoryById(this.categoryId).subscribe(data => {
            this.lookups = data;
            console.log("This is lookupCategory Data " + data);
        });
    }
    onSubmit(addLookup) {
        this.createLookupEntity = addLookup.value;
        this.createLookupEntity.category = this.lookups;
        this.createLookup(this.createLookupEntity);
        console.warn(this.createLookupEntity.lookupId);
        console.log("categoryId : " + this.categoryId + "category is " + this.createLookupEntity.category.createdBy);
    }
    goto() {
        this.submitted = !this.submitted;
        this.submit = !this.submit;
    }
    details(lookup) {
        this.submitted = !this.submitted;
        this.createLookupEntity = lookup;
        this.submit = true;
    }
    createLookup(entity) {
        this.lookupService.createLookupEntity(entity).subscribe(data => {
            this.reloadData(this.categoryId);
        }, error => console.log(error));
    }
    updateLookupEntity(lookup) {
        //console.log("Update button is working")
        //console.log(lookup);
        this.lookupService.updateLookupEntity(lookup.lookupId, lookup).subscribe(data => {
            //console.log(data);
            this.lookups = new _masters_lookup_category__WEBPACK_IMPORTED_MODULE_2__.LookupCategory();
            this.createLookupEntity = new _masters_lookup_entity__WEBPACK_IMPORTED_MODULE_3__.LookupEntity();
            this.reloadData(this.categoryId);
            alert("Updated Successfully");
        }, error => console.log(error));
    }
    deleteLookupEntity(lookupId) {
        this.lookupService.deleteLookupEntity(lookupId).subscribe(data => {
            //console.log(data);
            this.reloadData(this.categoryId);
        });
    }
    addLookup() {
        this.submitted = false;
        this.submit = false;
        this.createLookupEntity = new _masters_lookup_entity__WEBPACK_IMPORTED_MODULE_3__.LookupEntity();
    }
};
LookupEntityComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _services_lookup_service__WEBPACK_IMPORTED_MODULE_4__.LookupService }
];
LookupEntityComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-lookup-entity',
        template: _raw_loader_lookup_entity_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_lookup_entity_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LookupEntityComponent);



/***/ }),

/***/ 76560:
/*!**********************************************************************!*\
  !*** ./src/app/master/lookup-module/lookup-module-routing.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LookupModuleRoutingModule": function() { return /* binding */ LookupModuleRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _components_lookup_category_lookup_category_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/lookup-category/lookup-category.component */ 68967);
/* harmony import */ var _components_lookup_entity_lookup_entity_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/lookup-entity/lookup-entity.component */ 79288);





const routes = [
    { path: 'lookupCategory', component: _components_lookup_category_lookup_category_component__WEBPACK_IMPORTED_MODULE_0__.LookupCategoryComponent },
    {
        path: 'lookupEntity', component: _components_lookup_entity_lookup_entity_component__WEBPACK_IMPORTED_MODULE_1__.LookupEntityComponent
    }
];
let LookupModuleRoutingModule = class LookupModuleRoutingModule {
};
LookupModuleRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], LookupModuleRoutingModule);



/***/ }),

/***/ 88143:
/*!**************************************************************!*\
  !*** ./src/app/master/lookup-module/lookup-module.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LookupModuleModule": function() { return /* binding */ LookupModuleModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _lookup_module_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lookup-module-routing.module */ 76560);
/* harmony import */ var _components_lookup_category_lookup_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/lookup-category/lookup-category.component */ 68967);
/* harmony import */ var _components_lookup_entity_lookup_entity_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/lookup-entity/lookup-entity.component */ 79288);
/* harmony import */ var _pipes_lookup_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/lookup.pipe */ 5054);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ 51679);
/* harmony import */ var _pipes_lookupEntity_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/lookupEntity.pipe */ 64508);











let LookupModuleModule = class LookupModuleModule {
};
LookupModuleModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _components_lookup_category_lookup_category_component__WEBPACK_IMPORTED_MODULE_1__.LookupCategoryComponent,
            _components_lookup_entity_lookup_entity_component__WEBPACK_IMPORTED_MODULE_2__.LookupEntityComponent,
            _pipes_lookup_pipe__WEBPACK_IMPORTED_MODULE_3__.LookupPipe,
            _pipes_lookupEntity_pipe__WEBPACK_IMPORTED_MODULE_5__.LookupEntityPipe
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _lookup_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.LookupModuleRoutingModule,
            _shared__WEBPACK_IMPORTED_MODULE_4__.PageHeaderModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule,
        ]
    })
], LookupModuleModule);



/***/ }),

/***/ 5054:
/*!***********************************************************!*\
  !*** ./src/app/master/lookup-module/pipes/lookup.pipe.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LookupPipe": function() { return /* binding */ LookupPipe; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let LookupPipe = class LookupPipe {
    transform(value, args) {
        if (!args) {
            return value;
        }
        return value.filter((val) => {
            let rVal = (val.categoryName.toLocaleLowerCase().includes(args) || (val.createdBy.toLowerCase().includes(args)));
            return rVal;
        });
    }
};
LookupPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'lookup'
    })
], LookupPipe);



/***/ }),

/***/ 64508:
/*!*****************************************************************!*\
  !*** ./src/app/master/lookup-module/pipes/lookupEntity.pipe.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LookupEntityPipe": function() { return /* binding */ LookupEntityPipe; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let LookupEntityPipe = class LookupEntityPipe {
    transform(value, args) {
        if (!args) {
            return value;
        }
        return value.filter((val) => {
            let rVal = (val.lookupCode.toLocaleLowerCase().includes(args.toLowerCase()) || (val.description.toLowerCase().includes(args.toLowerCase()) || (val.lookupValue.toLowerCase().includes(args.toLowerCase()))));
            return rVal;
        });
    }
};
LookupEntityPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'lookupEntityPipe'
    })
], LookupEntityPipe);



/***/ }),

/***/ 22070:
/*!*************************************************!*\
  !*** ./src/app/master/master-routing.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MasterRoutingModule": function() { return /* binding */ MasterRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _country_category_country_category_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country-category/country-category.component */ 86571);
/* harmony import */ var _country_category_modules_district_district_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country-category/modules/district/district.component */ 88220);
/* harmony import */ var _country_category_modules_state_state_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country-category/modules/state/state.component */ 15868);
/* harmony import */ var _department_department_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./department/department.component */ 79281);
/* harmony import */ var _lookup_module_components_lookup_category_lookup_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lookup-module/components/lookup-category/lookup-category.component */ 68967);
/* harmony import */ var _lookup_module_components_lookup_entity_lookup_entity_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lookup-module/components/lookup-entity/lookup-entity.component */ 79288);
/* harmony import */ var _master_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./master.component */ 55429);
/* harmony import */ var _service_center_service_center_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service-center/service-center.component */ 28656);
/* harmony import */ var _unit_master_unit_master_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./unit-master/unit-master.component */ 87554);












const routes = [
    { path: '', component: _master_component__WEBPACK_IMPORTED_MODULE_6__.MasterComponent },
    { path: 'lookup', component: _lookup_module_components_lookup_category_lookup_category_component__WEBPACK_IMPORTED_MODULE_4__.LookupCategoryComponent },
    { path: 'department', component: _department_department_component__WEBPACK_IMPORTED_MODULE_3__.DepartmentComponent },
    { path: 'country', component: _country_category_country_category_component__WEBPACK_IMPORTED_MODULE_0__.CountryCategoryComponent },
    { path: 'lookup-entity/:id', component: _lookup_module_components_lookup_entity_lookup_entity_component__WEBPACK_IMPORTED_MODULE_5__.LookupEntityComponent },
    { path: 'state/:id', component: _country_category_modules_state_state_component__WEBPACK_IMPORTED_MODULE_2__.StateComponent },
    { path: 'district', component: _country_category_modules_district_district_component__WEBPACK_IMPORTED_MODULE_1__.DistrictComponent },
    { path: 'serviceCenter', component: _service_center_service_center_component__WEBPACK_IMPORTED_MODULE_7__.ServiceCenterComponent },
    { path: 'unitmaster', component: _unit_master_unit_master_component__WEBPACK_IMPORTED_MODULE_8__.UnitMasterComponent },
    { path: 'itemmaster', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./item-master/item-master.module */ 15113)).then((m) => m.ItemMasterModule) },
];
let MasterRoutingModule = class MasterRoutingModule {
};
MasterRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
    })
], MasterRoutingModule);



/***/ }),

/***/ 55429:
/*!********************************************!*\
  !*** ./src/app/master/master.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MasterComponent": function() { return /* binding */ MasterComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_master_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./master.component.html */ 90676);
/* harmony import */ var _master_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./master.component.css */ 99365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let MasterComponent = class MasterComponent {
    constructor() { }
    ngOnInit() {
    }
};
MasterComponent.ctorParameters = () => [];
MasterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-master',
        template: _raw_loader_master_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_master_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MasterComponent);



/***/ }),

/***/ 89992:
/*!*****************************************!*\
  !*** ./src/app/master/master.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MasterModule": function() { return /* binding */ MasterModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _master_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./master-routing.module */ 22070);
/* harmony import */ var _master_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./master.component */ 55429);
/* harmony import */ var _shared_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/modules */ 41277);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _lookup_module_lookup_module_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lookup-module/lookup-module.module */ 88143);
/* harmony import */ var _department_department_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./department/department.module */ 70389);
/* harmony import */ var _service_center_service_center_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-center/service-center.module */ 31585);
/* harmony import */ var _unit_master_unit_master_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unit-master/unit-master.module */ 70520);
/* harmony import */ var _country_category_country_category_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./country-category/country-category.module */ 54582);
/* harmony import */ var _item_master_item_master_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./item-master/item-master.module */ 15113);
/* harmony import */ var _country_category_modules_state_state_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./country-category/modules/state/state.module */ 2093);
/* harmony import */ var _country_category_modules_district_district_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./country-category/modules/district/district.module */ 51989);
















let MasterModule = class MasterModule {
};
MasterModule = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
        declarations: [
            _master_component__WEBPACK_IMPORTED_MODULE_1__.MasterComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
            _master_routing_module__WEBPACK_IMPORTED_MODULE_0__.MasterRoutingModule,
            _shared_modules__WEBPACK_IMPORTED_MODULE_2__.StatModule,
            _shared_modules__WEBPACK_IMPORTED_MODULE_2__.PageHeaderModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule,
            _lookup_module_lookup_module_module__WEBPACK_IMPORTED_MODULE_3__.LookupModuleModule,
            _department_department_module__WEBPACK_IMPORTED_MODULE_4__.DepartmentModule,
            _service_center_service_center_module__WEBPACK_IMPORTED_MODULE_5__.ServiceCenterModule,
            _unit_master_unit_master_module__WEBPACK_IMPORTED_MODULE_6__.UnitMasterModule,
            _country_category_country_category_module__WEBPACK_IMPORTED_MODULE_7__.CountryCategoryModule,
            _country_category_modules_state_state_module__WEBPACK_IMPORTED_MODULE_9__.StateModule,
            _country_category_modules_district_district_module__WEBPACK_IMPORTED_MODULE_10__.DistrictModule,
            _item_master_item_master_module__WEBPACK_IMPORTED_MODULE_8__.ItemMasterModule,
        ]
    })
], MasterModule);



/***/ }),

/***/ 33239:
/*!********************************************************************!*\
  !*** ./src/app/master/service-center/pipes/service-search.pipe.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceSearchPipe": function() { return /* binding */ ServiceSearchPipe; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let ServiceSearchPipe = class ServiceSearchPipe {
    transform(value, args) {
        if (!args) {
            return value;
        }
        return value.filter((val) => {
            args = args.toLowerCase();
            let rVal = (val.serviceCenterName.toLocaleLowerCase().includes(args) || (val.serviceCenterType.lookupValue.toLowerCase().includes(args) || (val.department.departmentName.toLowerCase().includes(args))) || (val.serviceCenterCode.toString().includes(args)));
            return rVal;
        });
    }
};
ServiceSearchPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'serviceSearch'
    })
], ServiceSearchPipe);



/***/ }),

/***/ 26646:
/*!************************************************************************!*\
  !*** ./src/app/master/service-center/service-center-routing.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceCenterRoutingModule": function() { return /* binding */ ServiceCenterRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _service_center_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-center.component */ 28656);




const routes = [
    { path: '', component: _service_center_component__WEBPACK_IMPORTED_MODULE_0__.ServiceCenterComponent },
];
let ServiceCenterRoutingModule = class ServiceCenterRoutingModule {
};
ServiceCenterRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ServiceCenterRoutingModule);



/***/ }),

/***/ 28656:
/*!*******************************************************************!*\
  !*** ./src/app/master/service-center/service-center.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceCenterComponent": function() { return /* binding */ ServiceCenterComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_service_center_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./service-center.component.html */ 7708);
/* harmony import */ var _service_center_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-center.component.css */ 46588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ 74903);
/* harmony import */ var _department_services_department_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../department/services/department.service */ 25482);
/* harmony import */ var _lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lookup-module/services/lookup.service */ 41168);
/* harmony import */ var _masters_service_center__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./masters/service-center */ 39758);
/* harmony import */ var _services_branch_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/branch-service.service */ 31582);









let ServiceCenterComponent = class ServiceCenterComponent {
    constructor(branchServiceService, departmentService, lookupService) {
        this.branchServiceService = branchServiceService;
        this.departmentService = departmentService;
        this.lookupService = lookupService;
        this.page = 1;
        this.pageSize = 5;
        this.submit = true;
        this.submitted = true;
        this.ifDetail = true;
    }
    ngOnInit() {
        this.submit = true;
        this.submitted = true;
        this.ifDetail = true;
        this.reloadData();
        this.getData();
    }
    getData() {
        this.branchServiceService.getBranch().subscribe(data => {
            this.branchList = data;
        });
        this.branchServiceService.getBlock().subscribe(data => {
            this.blockList = data;
        });
        this.branchServiceService.getFloor().subscribe(data => {
            this.floorList = data;
        });
        this.departmentService.getAllDepartments().subscribe(data => {
            this.departmentList = data;
        });
        this.lookupService.getAllLookupEntities().subscribe(data => {
            this.lookupEntityList = data;
            console.log(this.lookupEntityList);
        });
    }
    reloadData() {
        this.branchServiceService.getServiceCenter().subscribe(data => {
            console.log(data);
            this.serviceCenterList = data;
            this.len = data.length;
        });
    }
    //selectedLevel = this.floorList;
    showServiceCenter() {
        this.submitted = true;
        this.submit = true;
        this.ifDetail = true;
    }
    newServiceCenter() {
        this.serviceCenterDetails = new _masters_service_center__WEBPACK_IMPORTED_MODULE_5__.ServiceCenter;
        this.submitted = false;
        this.submit = false;
        this.ifDetail = false;
    }
    details(serviceCenter) {
        this.serviceCenterDetails = serviceCenter;
        this.selectedValue = '';
        console.log(this.selectedValue);
        this.submit = true;
        this.ifDetail = false;
        this.id = this.serviceCenterDetails.serviceCenterId;
        console.log(this.serviceCenterDetails);
    }
    onSubmit(form) {
        this.serviceCenterDetails = form.value;
        this.branchServiceService.createServiceCenter(this.serviceCenterDetails).subscribe(data => {
            console.log(data);
            this.serviceCenterDetails = new _masters_service_center__WEBPACK_IMPORTED_MODULE_5__.ServiceCenter();
            this.showServiceCenter();
            this.reloadData();
        });
    }
    update(serviceCenterForm) {
        this.serviceCenterDetails = serviceCenterForm.value;
        for (let i of this.departmentList) {
            if (i.departmentId == serviceCenterForm.value.department) {
                this.serviceCenterDetails.department = i;
            }
        }
        for (let i of this.lookupEntityList) {
            if (i.lookupId == serviceCenterForm.value.serviceCenterType) {
                this.serviceCenterDetails.serviceCenterType = i;
            }
        }
        for (let i of this.branchList) {
            if (i.id == serviceCenterForm.value.site) {
                this.serviceCenterDetails.site = i;
            }
        }
        for (let i of this.blockList) {
            if (i.blockId == serviceCenterForm.value.block) {
                this.serviceCenterDetails.block = i;
            }
        }
        for (let i of this.floorList) {
            if (i.floorId == serviceCenterForm.value.floor) {
                this.serviceCenterDetails.floor = i;
            }
        }
        this.updateCenter = this.serviceCenterDetails;
        this.branchServiceService.updateServiceCenter(this.id, this.updateCenter).subscribe(data => {
            this.serviceCenterDetails = new _masters_service_center__WEBPACK_IMPORTED_MODULE_5__.ServiceCenter;
            alert("updated Successfulyy" + data);
            this.ifDetail = true;
            this.reloadData();
        });
    }
    create() {
    }
};
ServiceCenterComponent.ctorParameters = () => [
    { type: _services_branch_service_service__WEBPACK_IMPORTED_MODULE_6__.BranchServiceService },
    { type: _department_services_department_service__WEBPACK_IMPORTED_MODULE_3__.DepartmentService },
    { type: _lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__.LookupService }
];
ServiceCenterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-service-center',
        template: _raw_loader_service_center_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_service_center_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ServiceCenterComponent);



/***/ }),

/***/ 31585:
/*!****************************************************************!*\
  !*** ./src/app/master/service-center/service-center.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceCenterModule": function() { return /* binding */ ServiceCenterModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _service_center_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-center.component */ 28656);
/* harmony import */ var _pipes_service_search_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/service-search.pipe */ 33239);
/* harmony import */ var _service_center_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-center-routing.module */ 26646);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ 51679);









let ServiceCenterModule = class ServiceCenterModule {
};
ServiceCenterModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _service_center_component__WEBPACK_IMPORTED_MODULE_0__.ServiceCenterComponent,
            _pipes_service_search_pipe__WEBPACK_IMPORTED_MODULE_1__.ServiceSearchPipe
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _service_center_routing_module__WEBPACK_IMPORTED_MODULE_2__.ServiceCenterRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule,
            _shared__WEBPACK_IMPORTED_MODULE_3__.PageHeaderModule
        ]
    })
], ServiceCenterModule);



/***/ }),

/***/ 91831:
/*!***********************************************************************!*\
  !*** ./src/app/master/unit-master/masters/employee-master.service.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeService": function() { return /* binding */ EmployeeService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);



let EmployeeService = class EmployeeService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "http://localhost:8080/springboot/api/v1/employees";
    }
    getEmployee() {
        return this.http.get(`${this.baseUrl}`);
    }
    updateEmployee(employeeId, employee) {
        return this.http.put(`${this.baseUrl}/${employeeId}`, employee);
    }
};
EmployeeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
EmployeeService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], EmployeeService);



/***/ }),

/***/ 80473:
/*!***********************************************************!*\
  !*** ./src/app/master/unit-master/pipes/employee.pipe.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeePipe": function() { return /* binding */ EmployeePipe; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let EmployeePipe = class EmployeePipe {
    transform(value, args) {
        if (!args) {
            return value;
        }
        return value.filter((val) => {
            args = args.toLowerCase();
            let rVal = (val.employee.firstName.toLocaleLowerCase().includes(args) || val.employee.employeeNo.toString().includes(args)) || val.employee.employeeStatus.lookupValue.toLocaleLowerCase().includes(args);
            return rVal;
        });
    }
};
EmployeePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'emppipe'
    })
], EmployeePipe);



/***/ }),

/***/ 94113:
/*!****************************************************************!*\
  !*** ./src/app/master/unit-master/pipes/unit-emp-list.pipe.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitEmpListPipe": function() { return /* binding */ UnitEmpListPipe; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let UnitEmpListPipe = class UnitEmpListPipe {
    transform(value, args) {
        if (!args) {
            return value;
        }
        return value.filter((val) => {
            args = args.toLowerCase();
            let rVal = (val.employee.firstName.toLocaleLowerCase().includes(args) || val.employee.employeeNo.toString().includes(args) || val.employee.branch.branchName.toLowerCase().includes(args));
            return rVal;
        });
    }
};
UnitEmpListPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'unitEmpList'
    })
], UnitEmpListPipe);



/***/ }),

/***/ 38484:
/*!************************************************************!*\
  !*** ./src/app/master/unit-master/pipes/unit-list.pipe.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitListPipe": function() { return /* binding */ UnitListPipe; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let UnitListPipe = class UnitListPipe {
    transform(value, args) {
        if (!args) {
            return value;
        }
        return value.filter((val) => {
            args = args.toLowerCase();
            let rVal = (val.unitName.toLocaleLowerCase().includes(args) || val.unitId.toString().includes(args));
            return rVal;
        });
    }
};
UnitListPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'unitList'
    })
], UnitListPipe);



/***/ }),

/***/ 87554:
/*!*************************************************************!*\
  !*** ./src/app/master/unit-master/unit-master.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitMasterComponent": function() { return /* binding */ UnitMasterComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_unit_master_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./unit-master.component.html */ 30010);
/* harmony import */ var _unit_master_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit-master.component.css */ 95854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _department_services_department_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../department/services/department.service */ 25482);
/* harmony import */ var _lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lookup-module/services/lookup.service */ 41168);
/* harmony import */ var _masters_employee_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./masters/employee-master.service */ 91831);
/* harmony import */ var _masters_unit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./masters/unit */ 56552);
/* harmony import */ var _services_unit_master_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/unit-master.service */ 20319);











let UnitMasterComponent = class UnitMasterComponent {
    constructor(unitMasterService, departmetnService, lookupEntityService, employeeService, config, modalService, router) {
        this.unitMasterService = unitMasterService;
        this.departmetnService = departmetnService;
        this.lookupEntityService = lookupEntityService;
        this.employeeService = employeeService;
        this.config = config;
        this.modalService = modalService;
        this.router = router;
        this.unitList = [];
        this.unit = new _masters_unit__WEBPACK_IMPORTED_MODULE_5__.Unit();
        this.submitted = true;
        this.isDetail = true;
        this.isAdd = false;
        this.page = 1;
        this.empPage = 1;
        this.empUnitPage = 1;
        this.pageSize = 4;
        this.name = "";
        this.empsearch = "";
        this.unitEmpSearch = "";
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.reloadData();
    }
    reloadData() {
        this.unitMasterService.getUnit().subscribe(data => {
            //console.log(data);
            this.unitList = data;
            this.len = data.length;
        });
        this.lookupEntityService.getAllLookupEntities().subscribe(data => {
            this.lookupEntityList = data;
        });
        this.unitMasterService.getUnitEmployeeMapping().subscribe(data => {
            this.unitEmployeeMappingList = data;
            //console.warn(this.unitEmployeeMappingList)
        });
        this.departmetnService.getAllDepartments().subscribe(data => {
            this.departmentList = data;
        });
    }
    showEmployee(unit) {
        this.unitEmployeeList = [];
        this.unitEmployeeList = unit.unitEmployeeMappingList;
        this.empLen = unit.unitEmployeeMappingList.length;
        this.departmentId = unit.department.departmentId;
        console.log(this.departmentId);
        this.unitId = unit.unitId;
        this.unit = unit;
        //console.log(unit);
        this.submitted = false;
    }
    closeEmployee() {
        this.submitted = true;
    }
    employeeDetails(employee) {
        this.employeeDetail = employee;
        this.isDetail = false;
    }
    updateEmployeeDetails() {
        this.employeeService.updateEmployee(this.employeeDetail.employeeId, this.employeeDetail).subscribe(data => {
            console.log(data);
            alert("updated Successfully!!");
        });
    }
    closeEmployeeDetails() {
        this.isDetail = true;
    }
    addUnit(content) {
        this.isAdd = false;
        this.unit = new _masters_unit__WEBPACK_IMPORTED_MODULE_5__.Unit();
        this.open(content);
    }
    createUnit(newUnitForm) {
        console.log(newUnitForm.value);
        for (let dept of this.departmentList) {
            if (dept.departmentId == newUnitForm.value.department) {
                this.unit.department = dept;
            }
        }
        alert(this.unit.department.departmentId);
        this.unitMasterService.createUnit(this.unit).subscribe(data => {
            this.modalService.dismissAll();
            console.log(data);
            this.reloadData();
            this.isAdd = true;
        });
    }
    addEmployee(empcontent) {
        this.unitMasterService.getOnlyRemainingEmployee(this.departmentId, this.unitId).subscribe(data => {
            this.unitEmployeeRemainingMappingArray = data;
            this.empUnitlen = this.unitEmployeeRemainingMappingArray.length;
            console.error(this.unitEmployeeRemainingMappingArray);
        });
        this.empcontent = empcontent;
        this.modalService.open(empcontent, { size: 'lg' });
    }
    open(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    updateUnit(unitForm) {
        this.unitMasterService.updateUnit(this.unit.unitId, this.unit).subscribe(data => {
            console.log(data);
            alert("Updated successfully");
            this.reloadData();
            this.modalService.dismissAll();
        });
    }
    addEmployeeToUnit(unitEmployeeMapping) {
        console.warn(this.unitEmployeeList);
        this.unitEmployeeList.push(unitEmployeeMapping);
        console.warn(this.unitEmployeeList);
        this.unit.unitEmployeeMappingList = this.unitEmployeeList;
        this.unitMasterService.updateUnit(this.unitId, this.unit).subscribe(data => {
            //console.log(data);
            this.modalService.dismissAll();
            this.addEmployee(this.empcontent);
            this.reloadData();
        });
    }
    update(unit, content) {
        this.isAdd = true;
        this.modalService.open(content, { size: 'lg' });
        this.unit = unit;
    }
    backToMaster() {
        //console.log("Back to Master clicked!!!!!")
        this.router.navigate(['/master']);
    }
};
UnitMasterComponent.ctorParameters = () => [
    { type: _services_unit_master_service__WEBPACK_IMPORTED_MODULE_6__.UnitMasterService },
    { type: _department_services_department_service__WEBPACK_IMPORTED_MODULE_2__.DepartmentService },
    { type: _lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__.LookupService },
    { type: _masters_employee_master_service__WEBPACK_IMPORTED_MODULE_4__.EmployeeService },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModalConfig },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
UnitMasterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-unit-master',
        template: _raw_loader_unit_master_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_unit_master_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UnitMasterComponent);



/***/ }),

/***/ 70520:
/*!**********************************************************!*\
  !*** ./src/app/master/unit-master/unit-master.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitMasterModule": function() { return /* binding */ UnitMasterModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _unit_master_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unit-master.component */ 87554);
/* harmony import */ var _pipes_unit_list_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/unit-list.pipe */ 38484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _pipes_employee_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/employee.pipe */ 80473);
/* harmony import */ var _pipes_unit_emp_list_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/unit-emp-list.pipe */ 94113);









let UnitMasterModule = class UnitMasterModule {
};
UnitMasterModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _unit_master_component__WEBPACK_IMPORTED_MODULE_0__.UnitMasterComponent,
            _pipes_unit_list_pipe__WEBPACK_IMPORTED_MODULE_1__.UnitListPipe,
            _pipes_employee_pipe__WEBPACK_IMPORTED_MODULE_2__.EmployeePipe,
            _pipes_unit_emp_list_pipe__WEBPACK_IMPORTED_MODULE_3__.UnitEmpListPipe
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule
        ]
    })
], UnitMasterModule);



/***/ }),

/***/ 19966:
/*!************************************************************************!*\
  !*** ./src/app/master/country-category/country-category.component.css ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.table th, .table td {\r\n    padding: .30rem;\r\n    vertical-align: center;\r\n    border-top: 1px solid #dee2e6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50cnktY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJjb3VudHJ5LWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRhYmxlIHRoLCAudGFibGUgdGQge1xyXG4gICAgcGFkZGluZzogLjMwcmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59Il19 */");

/***/ }),

/***/ 50395:
/*!*********************************************************************************!*\
  !*** ./src/app/master/country-category/modules/district/district.component.css ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.table th, .table td {\r\n    padding: .30rem;\r\n    vertical-align: center;\r\n    border-top: 1px solid #dee2e6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3RyaWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakMiLCJmaWxlIjoiZGlzdHJpY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udGFibGUgdGgsIC50YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiAuMzByZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn0iXX0= */");

/***/ }),

/***/ 44031:
/*!***************************************************************************!*\
  !*** ./src/app/master/country-category/modules/state/state.component.css ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.table th, .table td {\r\n    padding: .30rem;\r\n    vertical-align: center;\r\n    border-top: 1px solid #dee2e6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3RhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udGFibGUgdGgsIC50YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiAuMzByZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn0iXX0= */");

/***/ }),

/***/ 95823:
/*!************************************************************!*\
  !*** ./src/app/master/department/department.component.css ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input.ng-invalid.ng-touched\r\n{\r\n\tborder-left: 5px solid red;\r\n}\r\n\r\ninput.ng-valid.ng-touched {\r\n\tborder-left: 5px solid green;\r\n}\r\n\r\n.table th, .table td {\r\n    padding: .30rem;\r\n    vertical-align: center;\r\n    border-top: 1px solid #dee2e6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGFydG1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQywwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyw0QkFBNEI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJkZXBhcnRtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWRcclxue1xyXG5cdGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xyXG59XHJcblxyXG5pbnB1dC5uZy12YWxpZC5uZy10b3VjaGVkIHtcclxuXHRib3JkZXItbGVmdDogNXB4IHNvbGlkIGdyZWVuO1xyXG59XHJcblxyXG4udGFibGUgdGgsIC50YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiAuMzByZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn0iXX0= */");

/***/ }),

/***/ 36684:
/*!**************************************************************!*\
  !*** ./src/app/master/item-master/item-master.component.css ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\ninput.ng-invalid.ng-touched\r\n{\r\n\tborder-left: 5px solid red;\r\n}\r\n\r\ninput.ng-valid.ng-touched {\r\n\tborder-left: 5px solid green;\r\n}\r\n\r\n.form-control{\r\n\tpadding: 0;\r\n\tmargin: 0.25rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tbWFzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztDQUVDLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLDRCQUE0QjtBQUM3Qjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixlQUFlO0FBQ2hCIiwiZmlsZSI6Iml0ZW0tbWFzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkXHJcbntcclxuXHRib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuaW5wdXQubmctdmFsaWQubmctdG91Y2hlZCB7XHJcblx0Ym9yZGVyLWxlZnQ6IDVweCBzb2xpZCBncmVlbjtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbHtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdG1hcmdpbjogMC4yNXJlbTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 29835:
/*!***********************************************************************************************!*\
  !*** ./src/app/master/lookup-module/components/lookup-category/lookup-category.component.css ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input.ng-invalid.ng-touched\r\n{\r\n\tborder-left: 5px solid red;\r\n}\r\n\r\ninput.ng-valid.ng-touched {\r\n\tborder-left: 5px solid green;\r\n}\r\n\r\n.table th, .table td {\r\n    padding: .30rem;\r\n    vertical-align: center;\r\n    border-top: 1px solid #dee2e6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvb2t1cC1jYXRlZ29yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLDRCQUE0QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsNkJBQTZCO0FBQ2pDIiwiZmlsZSI6Imxvb2t1cC1jYXRlZ29yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkXHJcbntcclxuXHRib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuaW5wdXQubmctdmFsaWQubmctdG91Y2hlZCB7XHJcblx0Ym9yZGVyLWxlZnQ6IDVweCBzb2xpZCBncmVlbjtcclxufVxyXG5cclxuLnRhYmxlIHRoLCAudGFibGUgdGQge1xyXG4gICAgcGFkZGluZzogLjMwcmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59Il19 */");

/***/ }),

/***/ 71256:
/*!*******************************************************************************************!*\
  !*** ./src/app/master/lookup-module/components/lookup-entity/lookup-entity.component.css ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input.ng-invalid.ng-touched\r\n{\r\n\tborder-left: 5px solid red;\r\n}\r\n\r\ninput.ng-valid.ng-touched {\r\n\tborder-left: 5px solid green;\r\n}\r\n\r\ntable th, .table td {\r\n    padding: .30rem;\r\n    vertical-align: center;\r\n    border-top: 1px solid #dee2e6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvb2t1cC1lbnRpdHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQywwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyw0QkFBNEI7QUFDN0I7O0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJsb29rdXAtZW50aXR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWRcclxue1xyXG5cdGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xyXG59XHJcblxyXG5pbnB1dC5uZy12YWxpZC5uZy10b3VjaGVkIHtcclxuXHRib3JkZXItbGVmdDogNXB4IHNvbGlkIGdyZWVuO1xyXG59XHJcbnRhYmxlIHRoLCAudGFibGUgdGQge1xyXG4gICAgcGFkZGluZzogLjMwcmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59Il19 */");

/***/ }),

/***/ 99365:
/*!*********************************************!*\
  !*** ./src/app/master/master.component.css ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.table th, .table td {\r\n    padding: .30rem;\r\n    vertical-align: center;\r\n    border-top: 1px solid #dee2e6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsNkJBQTZCO0FBQ2pDIiwiZmlsZSI6Im1hc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi50YWJsZSB0aCwgLnRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmc6IC4zMHJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxufSJdfQ== */");

/***/ }),

/***/ 46588:
/*!********************************************************************!*\
  !*** ./src/app/master/service-center/service-center.component.css ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.table th, .table td {\r\n    padding: .30rem;\r\n    vertical-align: center;\r\n    border-top: 1px solid #dee2e6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2UtY2VudGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakMiLCJmaWxlIjoic2VydmljZS1jZW50ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udGFibGUgdGgsIC50YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiAuMzByZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn0iXX0= */");

/***/ }),

/***/ 95854:
/*!**************************************************************!*\
  !*** ./src/app/master/unit-master/unit-master.component.css ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.table th, .table td {\r\n    padding: .30rem;\r\n    vertical-align: center;\r\n    border-top: 1px solid #dee2e6;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaXQtbWFzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakMiLCJmaWxlIjoidW5pdC1tYXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udGFibGUgdGgsIC50YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiAuMzByZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 31072:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master/country-category/country-category.component.html ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition]>\n\t<app-page-header [mainhead]=\"'Master'\"\n\t\t[mainheadLink]=\"'/master'\" [heading]=\"'Country Category'\"\n\t\t[icon]=\"'fa-bar-chart-o'\"></app-page-header>\n</div>\n\n<!-- First page goes here -->\n\n<div class = \"card\">\n\t<div class = \"card-head\" >\n\t\t<nav class = \"navbar bg-dark text-white\">\n\t\t\t<label>\tCountry Category</label>\n\t\t\t<input type = \"search\" [(ngModel)] = \"name\" *ngIf = \"submitted\">\n\t\t\t<button class = \"btn btn-success text-white\" (click) = \"show()\" *ngIf=\"!submitted\" >Show List</button>\n  \t\t\t<button class = \"btn btn-success text-white\" (click) = \"newCountry()\" *ngIf=\"submitted \" >Add New</button>\t\t\n  \t\t</nav>\n\t</div>\n\t<div class = \"card-body\" *ngIf = \"submitted\" >\n\t\t<table class = \"table text-center\" >\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>CountryName</th>\n\t\t\t\t\t<th>IsActive</th>\n\t\t\t\t\t<th>identification</th>\n\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t<th>States</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor = \"let country of country |country: name|slice: (page-1) * pageSize : page * pageSize\">\n\t\t\t\t\t<td><label>{{country.countryName}}</label></td>\n\t\t\t\t\t<td><label>{{country.active}}</label></td>\n\t\t\t\t\t<td><label>{{country.identification}}</label></td>\n  \t\t\t\t\t<td>\n  \t\t\t\t\t\t<button class = \"btn btn-primary btn-sm\" (click) = \"details(country)\">details</button>\n  \t\t\t\t\t</td>\n  \t\t\t\t\t<td><button (click) = \"gotoStates(country.countryId)\" class = \"btn btn-warning btn-sm\"><a>States</a></button></td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\t\n\t<!-- This is the naviagation button to the master back. -->\n\t\n<!-- Create Country and CountryDetails   goes here -->\n<div class = \"card-body p-0 m-0\">\n\t<div class=\"row\" *ngIf=\"!submitted\">\n  \t\t\t<div class=\"card-body\">\n  \t\t\t\t<div class = \"\" >\n  \t\t\t\t\t<form  >\n  \t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<label for=\"countryCode\">Country Code</label> \n\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"countryCode\" required\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createCountry.countryCode\" name=\"countryCode\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\t\t\t\n\t\t\t\t\t\t\t\t\t<label for=\"countryName\">Country Name</label> \n\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"countryName\" required\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createCountry.countryName\" name=\"countryName\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\t\t\t\n\t\t\t\t\t\t\t\t\t<label for=\"countryName\">Country PhoneCode</label> \n\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"countryPhoneCode\" required\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createCountry.countryPhoneCode\" name=\"countryPhoneCode\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<label for=\"identification\">identification</label>\n\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"identification\" required\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createCountry.identification\" name=\"identification\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<label>IsActive</label>\n\t\t\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t                        <label> <input type = \"checkbox\" name = \"active\" [(ngModel)] = \"createCountry.active\" ></label>\n\t\t\t                    </div>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<label>\t&nbsp;</label>\n\t\t\t\t\t\t\t\t<div class=\"checkbox\"> \n\t\t\t\t\t\t\t\t\t<button class = \"btn btn-success\" (click)= \"updateCountry(createCountry)\" *ngIf = \"submit\">update</button>&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t\t<button class = \"btn btn-danger\" (click) = \"deleteCountry()\" hidden>Delete</button>\n\t\t\t\t\t\t\t\t\t<button  class=\"btn btn-success\" (click)=\"onSubmit()\" *ngIf = \"!submit\">Add Country</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n  \t\t\t\t</div>\n  \t\t\t</div>  \t\t\t\n \t\t</div>\n \t</div>\n \t<div class = \"card-footer bg-info p-0 m-0\" >\n\t\t<div class = \"row  justify-content-center \">\n\t\t\t<ngb-pagination *ngIf = \"submitted && submit\"    [collectionSize]=\"len\" [(page)]=\"page\" [pageSize] = \"pageSize\"  [rotate]=\"true\"  [ellipses]=\"false\" class = \"col-md-10\"></ngb-pagination>\n\t\t\t<a routerLink = \"/master\" class = \"m-2\"><button class = \"btn-warning\" >Back to master</button></a>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ 8734:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master/country-category/modules/district/district.component.html ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n\t<div class = \"card-head\">\r\n\t\t\r\n\t\t\t<nav class = \"navbar bg-dark text-white\">\r\n  \t\t\t\t<label>Country</label>\r\n  \t\t\t\t<button class = \"btn btn-success text-white\" routerLink = \"/master/country\">Select All</button>\r\n  \t\t\t</nav>\r\n  \t\t\t<div class = \"row\">\r\n\t\t\t<div class = \"col-md-3\">\r\n\t\t\t\t<label>Country Name :-&nbsp;&nbsp;</label>\r\n\t\t\t\t<label   name = \"countryName\" id = \"countryName\" *ngIf = \"true\" >{{country.countryName}}</label>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"col-md-3\">\r\n\t\t\t\t<label>Is Active :-&nbsp;&nbsp;</label>\r\n\t\t\t\t<input type = \"checkbox\" name = \"active\" [(ngModel)] = \"country.active\">\r\n\t\t\t</div>\r\n\t\t\t<div class = \"col-md-3\">\r\n\t\t\t\t<label>Country Code :-&nbsp;&nbsp;</label>\r\n\t\t\t\t<label  name = \"countryCode\" >{{country.countryCode}}</label>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"col-md-3\">\r\n\t\t\t\t<label>Identification :-&nbsp;&nbsp;</label>\r\n\t\t\t\t<label name = \"identification\" >{{country.identification}}</label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n  \t\t<nav class = \"navbar bg-dark text-white\">\r\n  \t\t\t<label>State</label>\r\n  \t\t\t<button class = \"btn btn-success text-white\" [routerLink] = '[\"/master/state\",countryId]' >Select All</button>\r\n  \t\t</nav>\r\n  \t\t        \t\t\t\t\t\t\t\t\t\r\n\t\t\r\n\t\t<div class = \"row\">\r\n\t\t\t<div class = \"col-md-3\">\r\n\t\t\t\t<label>State Name :-&nbsp;&nbsp;</label>\r\n\t\t\t\t<label   name = \"stateName\" id = \"stateName\"  >{{state.stateName}}</label>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"col-md-3\">\r\n\t\t\t\t<label>Is Active :-&nbsp;&nbsp;</label>\r\n\t\t\t\t<input type = \"checkbox\" name = \"active\" [(ngModel)] = \"state.active\">\r\n\t\t\t</div>\r\n\t\t\t<div class = \"col-md-3\">\r\n\t\t\t\t<label>State Code :-&nbsp;&nbsp;</label>\r\n\t\t\t\t<label  name = \"stateCode\" >{{state.stateCode}}</label>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"col-md-3\">\r\n\t\t\t\t<label>Description :-&nbsp;&nbsp;</label>\r\n\t\t\t\t<label name = \"description\" >{{state.description}}</label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!--  District section goes here  -->\r\n  \t\t<nav class = \"navbar bg-dark text-white\">\r\n  \t\t\t<label>Districts</label>\r\n  \t\t\t<input type = \"search\" [(ngModel)] = \"name\" *ngIf = \"submitted\">\r\n  \t\t\t<button class = \"btn btn-success text-white\" (click) = \"goto()\" *ngIf=\"!submitted\" >Show List</button>\r\n  \t\t\t<button class = \"btn btn-success text-white\" (click) = \"addNew()\" *ngIf=\"submitted\" >Add New</button>\r\n  \t\t</nav>\r\n\t<div class = \"card-body\">\r\n  \t\t<table class = \"table\" *ngIf=\"submitted\">\r\n  \t\t\t<thead>\r\n  \t\t\t\t<tr>\r\n  \t\t\t\t\t<th>District Name </th>\r\n  \t\t\t\t\t<th>District Code</th>\r\n  \t\t\t\t\t<th>Description</th>\r\n  \t\t\t\t\t<th>Is Active</th>\r\n  \t\t\t\t\t<th>Actions</th>\r\n  \t\t\t\t</tr>\r\n  \t\t\t</thead>\r\n  \t\t\t<tbody>\r\n  \t\t\t\t<tr *ngFor = \"let district of district |district: name|slice:  (page-1) * pageSize : page * pageSize \">\r\n  \t\t\t\t\t<td><label>{{district.districtName}}</label></td>\r\n  \t\t\t\t\t<td><label>{{district.districtCode}}</label></td>\r\n  \t\t\t\t\t<td><label>{{district.description}}</label></td>\r\n  \t\t\t\t\t<td><label>{{district.active}}</label></td>\r\n  \t\t\t\t\t<td>\r\n  \t\t\t\t\t\t\r\n  \t\t\t\t\t\t<button class = \"btn btn-primary btn-sm\"  (click) = \"details(district)\">details</button>&nbsp;\r\n  \t\t\t\t\t\t<button class = \"btn btn-danger btn-sm\" (click) = \"deleteDistrict(district.districtId)\" >Delete</button>\r\n  \t\t\t\t\t</td>\r\n  \t\t\t\t</tr>\r\n  \t\t\t</tbody>\r\n  \t\t</table>\r\n  \t<!--  District Details section goes here -->\r\n  \t\r\n\t\r\n\t<!-- Create District goes here -->\r\n\t\r\n\t<div class=\"row\" *ngIf=\"!submitted\">\r\n  \t\t\t<div class=\"card-body\">\r\n  \t\t\t\t<div class = \"\" >\r\n  \t\t\t\t\t<form #addDistrictForm = ngForm >\r\n  \t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"districtCode\">District Code</label> \r\n\t\t\t\t\t\t\t\t\t<input type=\"text\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"districtCode\" required\r\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createDistrict.districtCode\" name=\"districtCode\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"districtName\">District Name</label>\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\"\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"districtName\" required\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createDistrict.districtName\" name=\"districtName\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-1\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"defaultYesno\">Default</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t                        <label> <input type = \"checkbox\" name = \"defaultYesno\" [(ngModel)] = \"createDistrict.defaultYesno\" ></label>\r\n\t\t\t                    </div>\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-1\">\r\n\t\t\t\t\t\t\t\t<label>Active</label>\r\n\t\t\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t                        <label> <input type = \"checkbox\" name = \"active\" [(ngModel)] = \"createDistrict.active\" ></label>\r\n\t\t\t                    </div>\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\t\t\t\r\n\t\t\t\t\t\t\t\t\t<label for=\"description\">Description</label> \r\n\t\t\t\t\t\t\t\t\t<input type=\"text\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"description\" required\r\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createDistrict.description\" name=\"description\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"col-sm-1\">&nbsp;\r\n\t\t\t\t\r\n\t\t\t\t\t\t\t\t<button class = \"btn btn-primary btn-sm\" (click)= \"updateDistrict(createDistrict)\" *ngIf = \"submit\">update</button>\r\n\t\t\t\t\t\t\t\t<button (click)=\"onSubmit(addDistrictForm)\" class=\"btn btn-success btn-sm\" *ngIf = \"!submit\">Add District</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n  \t\t\t\t</div>\r\n  \t\t\t</div>  \t\t\t\r\n  \t\t</div>\r\n  \t\r\n\t\r\n\t</div>\r\n\t<div class = \"card-footer bg-info p-0 m-0\" >\r\n\t\t<div class = \"row justify-content-center \">\r\n\t\t\t<ngb-pagination *ngIf = \"submitted\" [collectionSize]=\"len\" [(page)]=\"page\" [pageSize] = \"pageSize\"  [rotate]=\"true\"  [ellipses]=\"false\" class = \"col-md-10\"></ngb-pagination>\r\n\t\t\t<a routerLink = \"/master\" class = \"m-2\"><button class = \"btn-warning\" >Back to master</button></a>\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ 74754:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master/country-category/modules/state/state.component.html ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n\t<div class = \"card-head\">\n  \t\t<nav class = \"navbar bg-dark text-white\">\n  \t\t\t<label>Country</label>\n  \t\t\t<button class = \"btn btn-success text-white btn-sm\" routerLink = \"/master/country\">Select All</button>\n  \t\t</nav>\n\t\t<div class = \"row\">\n\t\t\t<div class = \"col-md-3\">\n\t\t\t\t<label>Country Name :-&nbsp;&nbsp;</label>\n\t\t\t\t<label   name = \"countryName\" id = \"countryName\" *ngIf = \"true\" >{{country.countryName}}</label>\n\t\t\t</div>\n\t\t\t<div class = \"col-md-3\">\n\t\t\t\t<label>Is Active :-&nbsp;&nbsp;</label>\n\t\t\t\t<input type = \"checkbox\" name = \"active\" [(ngModel)] = \"country.active\">\n\t\t\t</div>\n\t\t\t<div class = \"col-md-3\">\n\t\t\t\t<label>Country Code :-&nbsp;&nbsp;</label>\n\t\t\t\t<label  name = \"countryCode\" >{{country.countryCode}}</label>\n\t\t\t</div>\n\t\t\t<div class = \"col-md-3\">\n\t\t\t\t<label>Identification :-&nbsp;&nbsp;</label>\n\t\t\t\t<label name = \"identification\" >{{country.identification}}</label>\n\t\t\t</div>\n\t\t</div>\n  \t\t\n  \t\t<!--  State section goes here  -->\n  \t\t<nav class = \"navbar bg-dark text-white\">\n  \t\t\t<label>States</label>\n  \t\t\t<input type = \"search\" [(ngModel)] = \"name\" *ngIf = \"submitted\">\n  \t\t\t<button class = \"btn btn-success text-white btn-sm\" (click) = \"goto()\" *ngIf=\"!submitted\" >Show List</button>\n  \t\t\t<button class = \"btn btn-success text-white btn-sm\" (click) = \"addState()\" *ngIf=\"submitted\" >Add New</button>\n  \t\t</nav>\n \t </div>\n\n  \t<div class = \"card-body\">\n  \t\t<table class = \"table\" *ngIf=\"submitted\">\n  \t\t\t<thead>\n  \t\t\t\t<tr>\n  \t\t\t\t\t<th>State Name </th>\n  \t\t\t\t\t<th>State Code</th>\n  \t\t\t\t\t<th>Description</th>\n  \t\t\t\t\t<th>Is Active</th>\n  \t\t\t\t\t<th>Actions</th>\n  \t\t\t\t\t<th>Districts</th>\n  \t\t\t\t</tr>\n  \t\t\t</thead>\n  \t\t\t<tbody>\n  \t\t\t\t<tr *ngFor = \"let state of state |state: name |slice: (page-1) * pageSize : page * pageSize\">\n  \t\t\t\t\t<td><label>{{state.stateName}}</label></td>\n  \t\t\t\t\t<td><label>{{state.stateCode}}</label></td>\n  \t\t\t\t\t<td><label>{{state.description}}</label></td>\n  \t\t\t\t\t<td><label>{{state.active}}</label></td>\n  \t\t\t\t\t<td>\n  \t\t\t\t\t\t<button class = \"btn btn-primary btn-sm\"  (click) = \"details(state)\">details</button>\n  \t\t\t\t\t</td>\n  \t\t\t\t\t<td><button (click) = \"gotoDistricts(state.stateId)\" class = \"btn btn-warning btn-sm\"><a>Districts</a></button></td>\n  \t\t\t\t</tr>\n  \t\t\t</tbody>\n  \t\t</table>\n \n  \t<!-- Create state and State Details  goes here  -->\n  \t\t<div class=\"row\" *ngIf=\"!submitted\">\n  \t\t\t\t\t<form #addForm = ngForm  >\n  \t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t<label for=\"stateCode\">State Code</label> \n\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"stateCode\" required\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createState.stateCode\" name=\"stateCode\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t<label for=\"lookupValue\">State Name</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"stateName\" required\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createState.stateName\" name=\"stateName\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t\t<label for=\"lookupValue\">Default</label>\n\t\t\t\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t                        <label> <input type = \"checkbox\" name = \"defaultYesno\" [(ngModel)] = \"createState.defaultYesno\" ></label>\n\t\t\t                    </div>\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t<label>Active</label>\n\t\t\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t                        <label> <input type = \"checkbox\" name = \"active\" [(ngModel)] = \"createState.active\" ></label>\n\t\t\t                    </div>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\t\t\t\n\t\t\t\t\t\t\t\t\t<label for=\"description\">Description</label> \n\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"description\" required\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createState.description\" name=\"description\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t\t<button class = \"btn btn-success\" (click)= \"updateState(createState)\" *ngIf = \"submit\">update</button>&nbsp;\n\t\t\t\t\t\t\t\t\t<button  class=\"btn btn-success\" *ngIf = \"!submit\" (click)=\"onSubmit(addForm)\">Add State</button>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<button class = \"btn btn-danger\" (click) = \"deleteState(createState.stateId)\" hidden >Delete</button>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n  \t\t\t\t</div>\n  \t\t\t</div>  \t\t\t\n  \t<div class = \"card-footer bg-info p-0 m-0\" >\n  \t\t<div class = \"row justify-content-center \">\n\t\t\t<ngb-pagination *ngIf = \"submitted\"  [collectionSize]=\"len\" [(page)]=\"page\" [pageSize] = \"pageSize\"  [rotate]=\"true\"  [ellipses]=\"false\" class = \"col-md-10\"></ngb-pagination>\n\t\t\t<a routerLink = \"/master\" class = \"m-2\" ><button class = \"btn-warning\" >Back to master</button></a>\n\t\t</div>\n\t</div>\n</div>\n  \t\t\t\t");

/***/ }),

/***/ 80839:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master/department/department.component.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition]>\r\n\t<app-page-header [mainhead]=\"'Master'\"\r\n\t\t[mainheadLink]=\"'/master'\" [heading]=\"'Department Category'\"\r\n\t\t[icon]=\"'fa-bar-chart-o'\"></app-page-header>\r\n</div>\r\n\r\n<div class = \"card\">\r\n\t<nav class = \"navbar text-white bg-dark\">\r\n\t\t\t<label *ngIf = \"(submitted && !submit)\">Create Department &nbsp;</label>\r\n\t\t\t<label *ngIf = \"!(submitted && !submit)\">Department Master &nbsp;</label>\r\n\t\t\t<input type = \"text\" placeholder = \"search here\" [(ngModel)] = \"search\" *ngIf = \"submit\">\r\n\t\t\t<button class = \"btn btn-success text-white\" (click) = \"showDepartments()\" *ngIf=\"!(submitted && submit)\" >Show List</button>\r\n  \t\t\t<button class = \"btn btn-success text-white\" (click) = \"newDepartment()\" *ngIf=\"submitted && submit\" >Add New</button>\t\t\r\n\t</nav>\r\n\r\n<!-- Show Department list part begins here -->\t\r\n\r\n<div class = \"row card-body\" *ngIf = \"submit\">\r\n\t<div class =\"col-md-12\">\r\n\t<table class = 'table' >\r\n\t\t<thead>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>DepartmentCode</th>\r\n\t\t\t\t<th>Department Name</th>\r\n\t\t\t\t<th>Description</th>\r\n\t\t\t\t<th>Branch</th>\r\n\t\t\t\t<th>Started On</th>\r\n\t\t\t\t<th>H.O.D </th>\r\n\t\t\t\t<th>Active</th>\r\n\t\t\t\t<th>Action</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody>\r\n\t\t\t<tr *ngFor = \"let dep of departments | depsearch:search |slice: (page-1) * pageSize : page * pageSize\">\r\n\t\t\t\t<td>{{dep.departmentCode}}</td>\r\n\t\t\t\t<td>{{dep.departmentName}}</td>\r\n\t\t\t\t<td>{{dep.description}}</td>\r\n\t\t\t\t<td>{{dep.site.branchName}}</td>\r\n\t\t\t\t<td>{{dep.startedOn}}</td>\r\n\t\t\t\t<td>{{dep.hod}}</td>\r\n\t\t\t\t<td>{{dep.active}}</td>\r\n\t\t\t\t<td><button class = \"btn\" (click) = \"details(dep)\" ><i class = \"fa fa-edit\"></i></button></td>\r\n\t\t\t\t\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</table>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n<!--  Update and Details Department Part begins here -->\r\n\r\n<div class = \"card-footer p-0 m-0\" *ngIf = \"!submitted && submit\" >\r\n\t<form #departmentForm = \"ngForm\" (ngSubmit) = \"OnSubmit(departmentForm)\">\r\n\t\t<nav class = \"navbar bg-dark text-light text-center\"><label>Department Details</label></nav><br>\r\n\t\t\t<div class = \"row p-2\">\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Department's  Code</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-6\" [(ngModel)] = \"dep.departmentCode\" ngModel name = \"departmentCode\" required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Department Name</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-6\" placeholder = \"DENTAL\" [(ngModel)] = \"dep.departmentName\" ngModel name = \"departmentName\" required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Department TypeId</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-6\" [(ngModel)] = \"dep.departmentTypeId\" name = \"departmentTypeId\" ngModel required>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row p-2\">\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Description</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-6\" [(ngModel)] = \"dep.description\" name = \"description\" ngModel>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Started On</label>\r\n\t\t\t\t\t<input type = \"date\" class = \"col-md-6\" [(ngModel)] = \"dep.startedOn\" name = \"startedOn\" ngModel required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">H.O.D</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-6\" [(ngModel)] = \"dep.hod\" name = \"hod\" ngModel>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row p-2\">\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Is Active</label>\r\n\t\t\t\t\t<input type = \"checkbox\"  class = \"col-md-6\" [(ngModel)] = \"dep.active\" name = \"active\" ngModel>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">created By</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-6\" placeholder = \"DENTAL\" [(ngModel)] = \"dep.createdBy\" name = \"createdBy\" ngModel required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Image Name</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-6\" [(ngModel)] = \"dep.imageName\" placeholder = \"dep.imageName\" name = \"imageName\" ngModel>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row p-2\">\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Branch</label>\r\n\t\t\t\t\t<select class = \"col-md-6\" [(ngModel)] = \"dep.site.id\" name = \"site\" id = \"site\">\r\n\t\t\t\t\t\t<ng-container *ngFor = \"let site of branchList\">\r\n\t\t\t\t\t\t\t<option [ngValue] = \"site.id\">{{site.branchName}}</option>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<button type = \"submit\" class = \"btn btn-success btn-sm p-0 ml-3\">Update Department</button><br><br>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t</form>\r\n</div>\r\n\r\n<!-- Create Department Part begins here -->\r\n\r\n<div class = \"card-body p-0 m-0\" *ngIf = \"submitted && !submit\">\r\n\t<form #createDocForm = \"ngForm\" (ngSubmit) = \"onSubmit(createDocForm)\">\r\n\t\t<div class = \"border col-md-12  rounded  \" ><br>\r\n\t\t\t<div class = \"row\">\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Department Code</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-6\"  ngModel name = \"departmentCode\" required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Department Name</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-6\" placeholder = \"DENTAL\"  ngModel name = \"departmentName\" required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Description</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-6\"  name = \"description\" ngModel>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row\">\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">created  On</label>\r\n\t\t\t\t\t<input type = \"date\" class = \"col-md-6\" placeholder = \"05/04/2021\"  name = \"createdDate\" ngModel required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Started On</label>\r\n\t\t\t\t\t<input type = \"date\" class = \"col-md-6\" placeholder = \"DENTAL\"  name = \"startedOn\" ngModel required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">H.O.D</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-6\"  name = \"hod\" ngModel>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row\">\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Is Active</label>\r\n\t\t\t\t\t<input type = \"checkbox\"  class = \"col-md-6\"  name = \"active\" ngModel>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">created By</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-6\" placeholder = \"Admin\"  name = \"createdBy\" ngModel required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Image Name</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-6\"  placeholder = \"Enter the path to the image\" name = \"imageName\" ngModel>\r\n\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Branch</label>\r\n\t\t\t\t\t<select class = \"col-md-6\" [(ngModel)] = \"dep.site\" name = \"site\" id = \"site\">\r\n\t\t\t\t\t\t<ng-container *ngFor = \"let site of branchList\">\r\n\t\t\t\t\t\t\t<option [ngValue] = \"site\">{{site.branchName}}</option>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<button type = \"submit\" class = \"btn btn-success btn-sm ml-3 \">Create Department</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div><br><br>\r\n\t\t</div>\r\n\r\n\t</form>\r\n\r\n</div>\r\n\r\n\t<div class = \"card-footer bg-info p-0 m-0\" >\r\n\t\t<div class = \"row justify-content-center \">\r\n\t\t\t<ngb-pagination *ngIf = \"submit\" [collectionSize]=\"len\" [(page)]=\"page\" [pageSize] = \"pageSize\"  [rotate]=\"true\"  [ellipses]=\"false\" class = \"col-md-10\"></ngb-pagination>\r\n\t\t\t<a routerLink = \"/master\" class = \"m-2\" ><button class = \"btn-warning\" >Back to master</button></a>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ 21166:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master/item-master/item-master.component.html ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition]>\r\n\t<app-page-header [mainhead]=\"'Master'\"\r\n\t\t[mainheadLink]=\"'/master'\" [heading]=\"'Item Category'\"\r\n\t\t[icon]=\"'fa-list-alt'\"></app-page-header>\r\n</div>\r\n<div class = \"card\">\r\n\t<div class = \"card-head\">\r\n\t\t<nav class = \"navbar text-white bg-dark\">\r\n\t\t\t<h3 *ngIf = \"!isList\">Create Item&nbsp;</h3>\r\n\t\t\t<h3 *ngIf = \"isList\">Item Master &nbsp;</h3>\r\n\t\t\t<input type = \"text\" placeholder = \"search here\" *ngIf = \"isList\" [(ngModel)] = \"searchItem\">\r\n\t\t\t<button class = \"btn bg-success  text-white\" (click) = \"showItemList()\" *ngIf = \"!isList\">Show List</button>\r\n  \t\t\t<button class = \"btn bg-success text-white\" (click) = \"addItem()\" *ngIf = \"isList\">Add New</button>\t\t\r\n\t</nav>\r\n\t</div>\r\n\t<div class = \"card-body\" *ngIf = \"isList\">\r\n\t\t<div class = \"row\">\r\n\t\t\t<table class = 'table'>\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th>Item Code</th>\r\n\t\t\t\t\t\t<th>Item Name</th>\r\n\t\t\t\t\t\t<th>Item Description</th>\r\n\t\t\t\t\t\t<th>Item Category</th>\r\n\t\t\t\t\t\t<th>Item Group</th>\r\n\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr *ngFor = \"let item of itemList| searchItem: searchItem |slice: (page-1) * pageSize : page * pageSize\">\r\n\t\t\t\t\t\t<td>{{item.itemCode}}</td>\r\n\t\t\t\t\t\t<td>{{item.itemName}}</td>\r\n\t\t\t\t\t\t<td>{{item.itemDesc}}</td>\r\n\t\t\t\t\t\t<td>{{item.itemCategory.description}}</td>\r\n\t\t\t\t\t\t<td>{{item.itemClass.itemClassDesc}}</td>\r\n\t\t\t\t\t\t<td><i class = \"fa fa-edit\"></i></td>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n\t<form [formGroup] = \"createItemForm\" *ngIf = \"!isList\">\r\n\t\t<div class =\"card-body\">\r\n\t\r\n\t\t\t<div class = \"row \">\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Item Code</label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<input  type=\"text\" class = \"form-control\" formControlName = \"itemCode\"/>\r\n\t\t\t\t</div><br>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Item Name</label>\r\n\t\t\t\t<div class =\"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<input type=\"text\" class=\"textbox form-control\" formControlName = \"itemName\">\r\n\t\t\t\t</div><br>\r\n\t\t\t\t<label class= \"col-sm-3 col-md-2\">Item Description<font class=\"star\">*</font></label>\r\n\t\t\t\t<div class= \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<input  type=\"text\" class=\"textbox form-control\" formControlName = \"itemDescription\">\r\n\t\t\t\t</div><br>\r\n\t\t\t\t<label class= \"col-sm-3 col-md-2\"> Arbic Name<font class=\"star\">*</font></label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<input type=\"text\" value=\"\" class = \"form-control\" formControlName = \"arbicName\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class= \"col-sm-3 col-md-2\">Item Type<font class=\"star\">*</font></label>\r\n\t\t\t\t<div class= \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<select  class = \"form-control\" size=\"1\" formControlName = \"itemType\">\r\n\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t<option *ngFor = \"let itemType of itemTypeList\" [ngValue]=\"itemType\">{{itemType.itemTypeDesc}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class= \"col-sm-3 col-md-2\">Item Category<font class=\"star\">*</font></label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<select class = \"form-control\" size=\"1\" formControlName = \"itemCategory\">\r\n\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t<option *ngFor = \"let category of itemCategoryList\" [ngValue]=\"category\">{{category.description}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class= \"col-sm-3 col-md-2\">Item Group<font class=\"star\">*</font></label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<select  class = \"form-control\" size=\"1\" formControlName = \"itemGroup\">\r\n\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t<ng-container *ngFor = \"let lookup of lookupEntityList\">\r\n\t\t\t\t\t\t<option  [ngValue]=\"lookup\" *ngIf = \"lookup.category.categoryId == 24\">{{lookup.lookupValue}}</option>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Item Class<font class=\"star\">*</font></label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<select class = \"form-control\" size=\"1\" formControlName = \"itemClass\">\r\n\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t<option *ngFor = \"let itemClass of itemClassList\" [ngValue]=\"itemClass\">{{itemClass.itemClassDesc}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Stock Type</label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<select  class = \"form-control\" size=\"1\" formControlName = \"stockType\">\r\n\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t<ng-container *ngFor = \"let lookup of lookupEntityList\">\r\n\t\t\t\t\t\t<option  [ngValue]=\"lookup\" *ngIf = \"lookup.category.categoryId == 25\">{{lookup.lookupValue}}</option>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Procurement Type</label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<select  class = \"form-control\" size=\"1\" formControlName = \"procurementType\">\r\n\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t<ng-container *ngFor = \"let lookup of lookupEntityList\">\r\n\t\t\t\t\t\t<option  [ngValue]=\"lookup\" *ngIf = \"lookup.category.categoryId == 26\">{{lookup.lookupValue}}</option>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Base UOM</label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<select class = \"form-control\" size=\"1\" formControlName = \"baseUom\" (ngModelChange) = \"trackUom($event)\">\r\n\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t<option *ngFor = \"let uom of uomList\" [ngValue]=\"uom\">{{uom.name}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Track UOM</label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<select class = \"form-control\" size=\"1\" formControlName = \"trackUom\">\r\n\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t<ng-container *ngFor = \"let uom of uomList\">\r\n\t\t\t\t\t\t<option *ngIf = \"uomId === uom.uomId\"  [ngValue]=\"uom\">{{uom.name}}</option>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Distribution category<font class=\"star\">*</font></label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<select  class = \"form-control\" size=\"1\" formControlName = \"distributionCategory\">\r\n\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t<ng-container *ngFor = \"let lookup of lookupEntityList\">\r\n\t\t\t\t\t\t<option  [ngValue]=\"lookup\" *ngIf = \"lookup.category.categoryId == 49\">{{lookup.lookupValue}}</option>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Purchase Organisation<font class=\"star\">*</font></label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<select class = \"form-control\" size=\"1\" formControlName = \"purchaseOrg\" (ngModelChange) = \"trackUom($event)\">\r\n\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t<option *ngFor = \"let purchaseOrg of purchaseOrgList\" [ngValue]=\"purchaseOrg\">{{purchaseOrg.profileDesc}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Shelf Life Limit</label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<input type=\"text\" class=\"textbox form-control\" formControlName = \"selfLifeLimit\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Item Specification </label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<input type=\"text\" class=\"textbox form-control\" readonly=\"readonly\" formControlName = \"itemSpecification\">\r\n\t\t\t\t</div>\r\n\t\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">SFDA</label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<input type=\"text\"class=\"textbox form-control\" formControlName = \"sfda\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4 col-sm-6\"></div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2 \">Inventorised</label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2 text-center\">\r\n\t\t\t\t\t<input type=\"checkbox\" checked=\"d\" formControlName = \"inventoried\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Is batch tracked</label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2 text-center\">\r\n\t\t\t\t\t<input type=\"checkbox\" checked=\"d\" formControlName = \"isBatchTracked\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Is expiry date required</label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2 text-center\">\r\n\t\t\t\t\t<input type=\"checkbox\" checked=\"d\" formControlName = \"isExpiryDateRequired\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Is serialized</label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2 text-center\">\r\n\t\t\t\t\t<input type=\"checkbox\" checked=\"d\" formControlName = \"isSerialized\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Active</label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2 text-center\">\r\n\t\t\t\t\t<input type=\"checkbox\" checked=\"d\" formControlName = \"active\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Is Approval Required</label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2 text-center\">\r\n\t\t\t\t\t<input type=\"checkbox\" checked=\"d\" formControlName = \"isApprovalRequired\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Is Insurance Cover</label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2 text-center\">\r\n\t\t\t\t\t<input type=\"checkbox\" checked=\"d\" formControlName = \"isInsuranceCover\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class = \"card-body border border-dark p-1 m-0\">\r\n\t\t\t<ul ngbNav #nav=\"ngbNav\" class=\"nav-tabs\">\r\n\t\t\t\t<li [ngbNavItem]=\"1\">\r\n\t\t\t\t    <a ngbNavLink>Account and Sales Info.</a>\r\n\t\t\t\t    <ng-template ngbNavContent>\r\n\t\t\t    \t\t<div class = \"row\">\r\n\t\t\t    \t\t\t<label class = \"col-sm-3 col-md-3\">Purchase UOM</label>\r\n\t\t\t    \t\t\t<div class = \"col-sm-3 col-md-3\">\r\n\t\t\t    \t\t\t\t<select class = \"form-control\" size=\"1\" formControlName = \"purchaseUom\" (ngModelChange) = \"trackUom($event)\">\r\n\t\t\t\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t\t\t\t<option *ngFor = \"let uom of uomList\" [ngValue]=\"uom\">{{uom.name}}</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t    \t\t\t</div>\r\n\t\t\t    \t\t\t<label class = \"col-sm-3 col-md-3\">Sales UOM</label>\r\n\t\t\t    \t\t\t<div class = \"col-sm-3 col-md-3\">\r\n\t\t\t    \t\t\t\t<select class = \"form-control\" size=\"1\" formControlName = \"salesUOM\" (ngModelChange) = \"trackUom($event)\">\r\n\t\t\t\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t\t\t\t<option *ngFor = \"let uom of uomList\" [ngValue]=\"uom\">{{uom.name}}</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t    \t\t\t</div>\r\n\t\t\t    \t\t\t<label class = \"col-sm-3 col-md-3\">Default Pricing Method</label>\r\n\t\t\t    \t\t\t<div class = \"col-sm-3 col-md-3\">\r\n\t\t\t    \t\t\t\t<select  class = \"form-control\" size=\"1\" formControlName = \"defaultPricingMethod\">\r\n\t\t\t\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor = \"let lookup of lookupEntityList\">\r\n\t\t\t\t\t\t\t\t\t<option  [ngValue]=\"lookup\" *ngIf = \"lookup.category.categoryId == 27\">{{lookup.lookupValue}}</option>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t    \t\t\t</div>\r\n\t\t\t    \t\t\t<label class = \"col-sm-3 col-md-3\">Default Markup Percentage</label>\r\n\t\t\t    \t\t\t<div class = \"col-sm-3 col-md-3\">\r\n\t\t\t    \t\t\t\t<input type = \"text\" formControName = \"markupPercentage\">\r\n\t\t\t    \t\t\t</div>\r\n\t\r\n\t\t\t    \t\t\t<h3 class = \"col-sm-12\">Account Details:</h3>\r\n\t\t\t    \t\t\t<label class = \"col-sm-3 col-md-3\">Branch</label>\r\n\t\t\t    \t\t\t<div class = \"col-sm-3 col-md-3\">\r\n\t\t\t    \t\t\t\t<select class = \"form-control\" size=\"1\" formControlName = \"purchaseUom\">\r\n\t\t\t\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t\t\t\t<option *ngFor = \"let itemBranchAcc of itemBranchAccMapList\" [ngValue]=\"itemBranchAcc\">{{itemBranchAcc.branch.name}}</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t    \t\t\t\t<select class=\"combobox form-control\" size=\"1\" >\r\n\t\t\t\t\t\t\t\t\t<option value=\"\">-- Select --</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"2\">Ram Alaqrabiah</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"3\">Ram Khober Shamaliah</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"4\">Dar Ram</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"6\">Ram Rakah</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"7\">Ram Mubarkyah</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"8\">Ram Murikbat</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"10\">Ram Buhairah</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"11\">Ram Mubaraz</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"12\">Ram Hofuf</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"13\">Ram Qatif</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"14\">Ram Rahema</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"15\">Ram Jubail Industrial</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"16\">Ram Yanbu Industrial</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"17\">Ram Jeddah</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"18\">Ram Manamah</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"5\">Ram Doha</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"9\">Ram Faisalyah</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"20\">SCECO DAMMAM</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"21\">SCECO HASSA</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"19\">Saudi Swiss</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"22\">New Dawha</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t    \t\t\t</div>\r\n\t\t\t    \t\t\t<label class = \"col-sm-3 col-md-3\">Purchase/Inventory Acc.</label>\r\n\t\t\t    \t\t\t<div class = \"col-sm-3 col-md-3\">\r\n\t\t\t    \t\t\t\t<select class = \"form-control\" size=\"1\" formControlName = \"purchaseAccount\">\r\n\t\t\t\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t\t\t\t<option *ngFor = \"let purchaseAccount of inventoryAccountList\" [ngValue]=\"purchaseAccount\">{{purchaseAccount.accountDesc}}</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t    \t\t\t</div>\r\n\t\t\t    \t\t\t<label class = \"col-sm-3 col-md-3\">Cost Of Sales Acc.</label>\r\n\t\t\t    \t\t\t<div class = \"col-sm-3 col-md-3\">\r\n\t\t\t    \t\t\t\t<select class = \"form-control\" size=\"1\" formControlName = \"costOfSalesAccount\">\r\n\t\t\t\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t\t\t\t<option *ngFor = \"let costOfSalesAccount of inventoryAccountList\" [ngValue]=\"costOfSalesAccount\">{{costOfSalesAccount.accountDesc}}</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t    \t\t\t</div>\r\n\t\t\t    \t\t\t<label class = \"col-sm-3 col-md-3\">Sale Account</label>\r\n\t\t\t    \t\t\t<div class = \"col-sm-3 col-md-3\">\r\n\t\t\t    \t\t\t\t<select class = \"form-control\" size=\"1\" formControlName = \"salesAccount\">\r\n\t\t\t\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t\t\t\t<option *ngFor = \"let salesAccount of inventoryAccountList\" [ngValue]=\"salesAccount\">{{salesAccount.accountDesc}}</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t    \t\t\t</div>\r\n\t\t\t    \t\t</div>\r\n\t\t\t\t    </ng-template>\r\n\t\t\t\t  </li>\r\n\t\t\t\t  <li [ngbNavItem]=\"2\">\r\n\t\t\t\t    <a ngbNavLink>Stock</a>\r\n\t\t\t\t    <ng-template ngbNavContent>\r\n\t\t\t\t    \t<div class = \"row\">\r\n\t\t\t\t    \t\t<label class = \"col-md-3 col-sm-3\">VED Category</label>\r\n\t\t\t\t    \t\t<div class = \"col-md-3 col-sm-3\">\r\n\t\t\t\t    \t\t\t<select  class = \"form-control\" size=\"1\" formControlName = \"vedAnalysisType\">\r\n\t\t\t\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor = \"let lookup of lookupEntityList\">\r\n\t\t\t\t\t\t\t\t\t\t<option  [ngValue]=\"lookup\" *ngIf = \"lookup.category.categoryId == 47\">{{lookup.lookupValue}}</option>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t    \t\t</div>\r\n\t\t\t\t    \t\t<label class = \"col-md-3 col-sm-3\">Cycle Count Frequency</label>\r\n\t\t\t\t    \t\t<div class = \"col-md-3 col-sm-3\">\r\n\t\t\t\t    \t\t\t<select  class = \"form-control\" size=\"1\" formControlName = \"cycleCountFrequency\">\r\n\t\t\t\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor = \"let lookup of lookupEntityList\">\r\n\t\t\t\t\t\t\t\t\t\t<option  [ngValue]=\"lookup\" *ngIf = \"lookup.category.categoryId == 48\">{{lookup.lookupValue}}</option>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t    \t\t</div>\r\n\t\t\t\t    \t\t<label class = \"col-md-3 col-sm-3\">Reusable</label>\r\n\t\t\t\t    \t\t<div class = \"col-md-3 col-sm-3\">\r\n\t\t\t\t    \t\t\t<input type = \"checkbox\" class = \"text-center form-control\" formControlName = \"reusable\">\r\n\t\t\t\t    \t\t</div>\r\n\t\t\t\t    \t\t<label class = \"col-md-3 col-sm-3\">Reusable Count</label>\r\n\t\t\t\t    \t\t<div class = \"col-md-3 col-sm-3\">\r\n\t\t\t\t    \t\t\t<input type = \"text\" class =\"form-control\" formControlName = \"reusableCount\">\r\n\t\t\t\t    \t\t</div>\r\n\t\t\t\t    \t\t<label class = \"col-md-3 col-sm-3\">Item rate</label>\r\n\t\t\t\t    \t\t<div class = \"col-md-3 col-sm-3\">\r\n\t\t\t\t    \t\t\t<input type = \"text\" class =\"form-control\" formControlName = \"itemRate\">\r\n\t\t\t\t    \t\t</div>\r\n\t\t\t\t    \t\t<label class = \"col-md-3 col-sm-3\">Reserved Qty</label>\r\n\t\t\t\t    \t\t<div class = \"col-md-3 col-sm-3\">\r\n\t\t\t\t    \t\t\t<input type = \"text\" class =\"form-control\" formControlName = \"reserveQty\">\r\n\t\t\t\t    \t\t</div>\r\n\t\t\t\t    \t\t<label class = \"col-md-3 col-sm-3\">FsnType</label>\r\n\t\t\t\t    \t\t<div class = \"col-md-3 col-sm-3\">\r\n\t\t\t\t    \t\t\t<select  class = \"form-control\" size=\"1\" formControlName = \"fsnType\">\r\n\t\t\t\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor = \"let lookup of lookupEntityList\">\r\n\t\t\t\t\t\t\t\t\t\t<option  [ngValue]=\"lookup\" *ngIf = \"lookup.category.categoryId == 50\">{{lookup.lookupValue}}</option>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t    \t\t</div>\r\n\t\t\t\t    \t\t<label class = \"col-md-3 col-sm-3\">Manufacturer Name</label>\r\n\t\t\t\t    \t\t<div class = \"col-md-3 col-sm-3\">\r\n\t\t\t\t    \t\t\t<input type = \"text\" class =\"form-control\" formControlName = \"manufacturerName\">\r\n\t\t\t\t    \t\t</div>\r\n\t\t\t\t    \t</div>\r\n\t\t\t\t    </ng-template>\r\n\t\t\t\t  </li>\r\n\t\t\t\t  <li [ngbNavItem]=\"3\">\r\n\t\t\t\t    <a ngbNavLink>Stores</a>\r\n\t\t\t\t    <ng-template ngbNavContent>\r\n\t\t\t\t    <div class =\"panel-body\">\r\n\t\t\t\t    \t<table class = \"table table-responsive border border-dark table-sm\" >\r\n\t\t\t\t    \t\t<thead>\r\n\t\t\t\t    \t\t\t<tr class = \"m-auto\">\r\n\t\t\t\t    \t\t\t\t<th>Store Code</th>\r\n\t\t\t\t    \t\t\t\t<th>Store Description</th>\r\n\t\t\t\t    \t\t\t\t<th>Min</th>\r\n\t\t\t\t    \t\t\t\t<th>Max</th>\r\n\t\t\t\t    \t\t\t\t<th>ReOrder Level</th>\r\n\t\t\t\t    \t\t\t\t<th>Lead Days</th>\r\n\t\t\t\t    \t\t\t\t<th>Ideal Days</th>\r\n\t\t\t\t    \t\t\t\t<th>Order Frequency</th>\r\n\t\t\t\t    \t\t\t\t<th>Consumption Period</th>\r\n\t\t\t\t    \t\t\t\t<th>Locators</th>\r\n\t\t\t\t    \t\t\t\t<th>Automate Stock Consumption</th>\r\n\t\t\t\t    \t\t\t\t<th>Auto Indenting</th>\r\n\t\t\t\t    \t\t\t\t\r\n\t\t\t\t    \t\t\t\t<th>Action</th>\r\n\t\t\t\t    \t\t\t</tr>\r\n\t\t\t\t    \t\t</thead>\r\n\t\t\t\t    \t\t<tbody>\r\n\t\t\t\t    \t\t\t<tr *ngFor = \"let store of itemStoreList\">\r\n\t\t\t\t    \t\t\t\t<td>{{store.itemStoreId}}</td>\r\n\t\t\t\t    \t\t\t\t<td>Store Description</td>\r\n\t\t\t\t    \t\t\t\t<td><input type = \"text\" [value] = \"store.min\" ></td>\r\n\t\t\t\t    \t\t\t\t<td><input type = \"text\" [value] = \"store.max\"></td>\r\n\t\t\t\t    \t\t\t\t<td><input type = \"text\" [value] = \"store.reOrderLevel\"></td>\r\n\t\t\t\t    \t\t\t\t<td><input type = \"text\" [value] = \"store.lead\"></td>\r\n\t\t\t\t    \t\t\t\t<td><input type = \"text\" [value] = \"store.ideal\"></td>\r\n\t\t\t\t    \t\t\t\t<td><input type = \"text\" [value] = \"store.orderFrequency\"></td>\r\n\t\t\t\t    \t\t\t\t<td><input type = \"text\" [value] = \"store.consumptionPeriod\"></td>\r\n\t\t\t\t    \t\t\t\t<td class = \"w-25\"><input type = \"text\" [value] = \"store.locatorName\"></td>\r\n\t\t\t\t    \t\t\t\t<td><input type = \"checkbox\" [value] = \"store.automateStock\" [checked] = \"store.automateStock\"></td>\r\n\t\t\t\t    \t\t\t\t<td><input type = \"checkbox\" [value] = \"store.isautoIndenting\"  [checked] = \"store.isautoIndenting\"></td>\r\n\t\t\t\t    \t\t\t\t\r\n\t\t\t\t    \t\t\t\t<td><i class = \"fa fa-edit fa-1x\"></i></td>\r\n\t\t\t\t    \t\t\t\t\r\n\t\t\t\t    \t\t\t</tr>\r\n\t\t\t\t    \t\t</tbody>\r\n\t\t\t\t    \t</table>\r\n\t\t\t\t    </div>\r\n\t\t\t\t     </ng-template>\r\n\t\t\t\t  </li>\r\n\t\t\t\t  <li [ngbNavItem] = \"4\">\r\n\t\t\t\t \t<a ngbNavLink>Alternate Items</a>\r\n\t\t\t\t \t<ng-template ngbNavContent>\r\n\t\t\t\t \t\t<div class = \"panel-body\">\r\n\t\t\t\t\t \t\t<table class = \"table table-responsive\">\r\n\t\t\t\t\t \t\t\t<thead>\r\n\t\t\t\t\t \t\t\t\t<tr>\r\n\t\t\t\t\t\t \t\t\t\t<td>Item Code</td>\r\n\t\t\t\t\t\t \t\t\t\t<td>Item Name</td>\r\n\t\t\t\t\t\t \t\t\t\t<td>Action</td>\r\n\t\t\t\t\t \t\t\t\t</tr>\r\n\t\t\t\t\t \t\t\t</thead>\r\n\t\t\t\t\t \t\t\t<tbody>\r\n\t\t\t\t\t \t\t\t</tbody>\r\n\t\t\t\t\t \t\t</table>\r\n\t\t\t\t\t \t</div>\r\n\t\t\t\t \t</ng-template>\r\n\t\t\t\t </li>\r\n\t\t\t\t <li [ngbNavItem] = \"5\">\r\n\t\t\t\t \t<a ngbNavLink>Pricing Method</a>\r\n\t\t\t\t \t<ng-template ngbNavContent>\r\n\t\t\t\t \t\t<div class = \"panel-body\">\r\n\t\t\t\t\t \t\t<table class = \"table table-responsive\">\r\n\t\t\t\t\t \t\t\t<thead>\r\n\t\t\t\t\t \t\t\t\t<tr>\r\n\t\t\t\t\t\t \t\t\t\t<td>SiteName</td>\r\n\t\t\t\t\t\t \t\t\t\t<td>Default Pricing Method</td>\r\n\t\t\t\t\t\t \t\t\t\t<td>Price</td>\r\n\t\t\t\t\t\t \t\t\t\t<td>Markup Percentage</td>\r\n\t\t\t\t\t\t \t\t\t\t<td>Action</td>\r\n\t\t\t\t\t \t\t\t\t</tr>\r\n\t\t\t\t\t \t\t\t</thead>\r\n\t\t\t\t\t \t\t\t<tbody>\r\n\t\t\t\t\t \t\t\t\t<tr>\r\n\t\t\t\t\t\t \t\t\t\t<td>Dear Ram</td>\r\n\t\t\t\t\t\t \t\t\t\t<td>\r\n\t\t\t\t\t\t \t\t\t\t\t<select>\r\n\t\t\t\t\t\t \t\t\t\t\t\t<option>--Select--</option>\t\r\n\t\t\t\t\t\t \t\t\t\t\t</select>\r\n\t\t\t\t\t\t \t\t\t\t</td>\r\n\t\t\t\t\t\t \t\t\t\t<td>\r\n\t\t\t\t\t\t \t\t\t\t\t<input type = \"text\">\r\n\t\t\t\t\t\t \t\t\t\t</td>\r\n\t\t\t\t\t\t \t\t\t\t<td>\r\n\t\t\t\t\t\t \t\t\t\t\t<input type = \"text\" formControlName = \"sellingPrice\">\r\n\t\t\t\t\t\t \t\t\t\t\t\r\n\t\t\t\t\t\t \t\t\t\t</td>\r\n\t\t\t\t\t\t \t\t\t\t<td>\r\n\t\t\t\t\t\t \t\t\t\t\t<i class = \"fa fa-edit\"></i>\r\n\t\t\t\t\t\t \t\t\t\t</td>\r\n\t\t\t\t\t \t\t\t\t</tr>\r\n\t\t\t\t\t \t\t\t</tbody>\r\n\t\t\t\t\t \t\t</table>\r\n\t\t\t\t\t \t</div>\r\n\t\t\t\t \t</ng-template>\r\n\t\t\t\t </li>\r\n\t\t\t\t <li [ngbNavItem] = \"6\">\r\n\t\t\t\t \t<a ngbNavLink>Remarks</a>\r\n\t\t\t\t \t<ng-template ngbNavContent>\r\n\t\t\t\t \t\t<input type = \"text\" formControlName = \"remarks\">\r\n\t\t\t\t \t</ng-template>\r\n\t\t\t\t </li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\r\n\t\t</div>\r\n\t\t<div class = \"row justify-content-end m-2 \">\r\n\t\t\t<button class = \"btn btn-success\" [disabled] = \"createItemForm.invalid\" (click) = \"onSubmit()\" >Save Item</button>\r\n\t\t</div>\r\n\t</form>\r\n\t<div class = \"card-footer bg-info p-0 m-0\">\r\n\t\t<div class = \"row justify-content-center \">\r\n\t\t\t\r\n\t\t\t<ngb-pagination [collectionSize]=\"len\" [(page)]=\"page\" [pageSize] = \"pageSize\"  [rotate]=\"true\"  [ellipses]=\"false\" *ngIf = \"isList\" class = \"col-md-10\"></ngb-pagination>\r\n\t\t\t<a routerLink = \"/master\" class =\"m-2 \" ><button class = \"btn-warning\" >Back to master</button></a>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n</div>\r\n");

/***/ }),

/***/ 73258:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master/lookup-module/components/lookup-category/lookup-category.component.html ***!
  \**************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition]>\n\t<app-page-header [mainhead]=\"'Master'\"\n\t\t[mainheadLink]=\"'/master'\" [heading]=\"'Lookup Category'\"\n\t\t[icon]=\"'fa-bar-chart-o'\"></app-page-header>\n</div>\n\n<div class = \"card no-gutter px-0 mx-0\">\n\t<div class = \"card-head\" >\n\t\t<nav class = \"navbar bg-dark text-white\">\n\t\t\t<label>\tLookup Category</label>\n\t\t\t<input type = \"search\" [(ngModel)] = \"name\" *ngIf = \"submitted\">\n\t\t\t<button class = \"btn btn-success text-white\" (click) = \"show()\" *ngIf=\"!submitted\" >Show List</button>\n  \t\t\t<button class = \"btn btn-success text-white\" (click) = \"newLookupCategory()\" *ngIf=\"submitted\" >Add New</button>\t\t\n  \t\t</nav>\n\t</div>\n\t<div class = \"card-body \" *ngIf = \"submitted\" >\n\t\t<table class = \"table\" >\n\t\t\t<thead>\n\t\t\t\t<tr class = \"row text-center\">\n\t\t\t\t\t<th class = \"col\">CategoryID</th>\n\t\t\t\t\t<th class = \"col\">Lookup Category</th>\n\t\t\t\t\t<th class = \"col\">IsActive</th>\n\t\t\t\t\t<th class = \"col\">Created By</th>\n\t\t\t\t\t<th class = \"col\">Action</th>\n\t\t\t\t\t<th class = \"col\">Entities</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody class = \"text-center\"  >\n\t\t\t\t<tr *ngFor = \"let lookup of lookupCategory |lookup : name |slice: (page-1) * pageSize : page * pageSize\" class = \"row\"  >\n\t\t\t\t\t<td class = \"col\">{{lookup.categoryId}}</td>\n\t\t\t\t\t<td class = \"col\">{{lookup.categoryName}}</td>\n\t\t\t\t\t<td class = \"col\"><input type = \"checkbox\"  checked =\"{{lookup.active}}\"></td>\n\t\t\t\t\t<td class = \"col\">{{lookup.createdBy}}</td>\n\t\t\t\t\t<td class = \"col\"><button class = \"btn\" (click)= \"details(lookup)\"><i class = \"fa fa-edit\"></i></button></td>\n\t\t\t\t\t<td class = \"col\"><button (click) = \"gotoLookupEntity(lookup.categoryId)\" class = \"btn btn-warning btn-sm\"><a>Entities</a></button></td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\t\n\t\n\n<!-- Create LookupCategory and LookupCategory Details goes here -->\n\t<div class=\"row\" *ngIf=\"!submitted\">\n  \t\t\t<div class=\"card-body\">\n  \t\t\t\t<div class = \"\" >\n  \t\t\t\t\t<form >\n  \t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t<label for=\"lookupCode\">Category Code</label> \n\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"categoryCode\" required\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createLookup.categoryCode\" name=\"categoryCode\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\t\t\t\n\t\t\t\t\t\t\t\t\t<label for=\"description\">Category Name</label> \n\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"categoryName\" required\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createLookup.categoryName\" name=\"categoryName\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t<label for=\"lookupValue\">Created By</label>\n\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"createdBy\" required\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createLookup.createdBy\" name=\"createdBy\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t<label>IsActive</label>\n\t\t\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t                        <label> <input type = \"checkbox\" name = \"active\" [(ngModel)] = \"createLookup.active\" ></label>\n\t\t\t                    </div>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t<label>\t&nbsp;</label>\n\t\t\t\t\t\t\t\t<div class=\"checkbox\"> \n\t\t\t\t\t\t\t\t\t<button  class=\"btn btn-success\" (click)=\"createLookupCategory()\" *ngIf = \"isDetail\">Add Lookup</button>\n\t\t\t\t\t\t\t\t\t<button class = \"btn btn-primary\" (click) = \"updateLookupCategory()\" *ngIf = \"!isDetail\">Update</button>&nbsp;\n\t\t\t\t\t\t\t\t\t<button class = \"btn btn-danger\" (click) = \"deleteLookupCategory()\" hidden>Delete</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n  \t\t\t\t</div>\n  \t\t\t</div>  \t\t\t\n  \t\n\t</div>\n</div>\n<div class = \"card-footer bg-info p-0 m-0 \" >\n\t<div class = \"row justify-content-center \">\n\t\t\t<ngb-pagination *ngIf = \"submitted\"  [collectionSize]=\"len\" [(page)]=\"page\" [pageSize] = \"pageSize\"  [rotate]=\"true\"  [ellipses]=\"false\" class = \"col-md-10\"></ngb-pagination>\n\t\t\t<a routerLink = \"/master\"  class = \"m-2\"><button class = \"btn-warning\" >Back to master</button></a>\n\t</div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ 53103:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master/lookup-module/components/lookup-entity/lookup-entity.component.html ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n\t<div class = \"card-head\">\r\n  \t\t<nav class = \"navbar bg-dark text-white\">\r\n  \t\t\t<label>Lookup Category</label>\r\n  \t\t\t<button class = \"btn btn-success text-white\" routerLink = \"/master/lookup\">Select All</button>\r\n  \t\t</nav>\r\n\t\t<div class = \"row\">\r\n\t\t\t<div class = \"col-md-3\">\r\n\t\t\t\t<label>Category Name :-&nbsp;&nbsp;</label>\r\n\t\t\t\t<label   name = \"lookupCode\" id = \"lookupCode\" *ngIf = \"true\" >{{lookups.categoryName}}</label>\r\n\t\t\t</div>\r\n\t\t\t<script>\r\n\t\t\t</script>\r\n\t\t\t<div class = \"col-md-3\">\r\n\t\t\t\t<label>Is Active :-&nbsp;&nbsp;</label>\r\n\t\t\t\t<input type = \"checkbox\" name = \"active\" [(ngModel)] = \"lookups.active\">\r\n\t\t\t</div>\r\n\t\t\t<div class = \"col-md-3\">\r\n\t\t\t\t<label>Creatd By :-&nbsp;&nbsp;</label>\r\n\t\t\t\t<label  name = \"description\" >{{lookups.createdBy}}</label>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"col-md-3\">\r\n\t\t\t\t<label>IsModifiable :-&nbsp;&nbsp;</label>\r\n\t\t\t\t<input type = \"checkbox\" name = \"active\" [(ngModel)] = \"lookups.active\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n  \t\t\r\n  \t\t<nav class = \"navbar bg-dark text-white\">\r\n  \t\t\t<label>Lookup Entity Data</label>\r\n  \t\t\t<input type = \"search\" [(ngModel)] = \"name\" *ngIf = \"submitted\">\r\n  \t\t\t<button class = \"btn btn-success text-white\" (click) = \"goto()\" *ngIf=\"!submitted\" >Show List</button>\r\n  \t\t\t<button class = \"btn btn-success text-white\" (click) = \"addLookup()\" *ngIf=\"submitted\" >Add New</button>\r\n  \t\t</nav>\r\n \t </div>\r\n\r\n  \t<div class = \"card-body\">\r\n  \t\t<table class = \"table\" *ngIf=\"submitted\">\r\n  \t\t\t<thead>\r\n  \t\t\t\t<tr class = \"text-center\">\r\n  \t\t\t\t\t<th>Lookup Id</th>\r\n  \t\t\t\t\t<th>Lookup Code</th>\r\n  \t\t\t\t\t<th>Description</th>\r\n  \t\t\t\t\t<th>Lookup Value </th>\r\n  \t\t\t\t\t<th>Is Active</th>\r\n  \t\t\t\t\t<th>Actions</th>\r\n  \t\t\t\t</tr>\r\n  \t\t\t</thead>\r\n  \t\t\t<tbody class = \"ml-auto text-center\" >\r\n  \t\t\t\t<tr *ngFor = \"let lookup of lookupEntity  | lookupEntityPipe : name |slice: (page-1) * pageSize : page * pageSize\">\r\n  \t\t\t\t\t<td class = \"ml-auto\"><label>{{lookup.lookupId}}</label></td>\r\n  \t\t\t\t\t<td class = \"ml-auto\"><label>{{lookup.lookupCode}}</label></td>\r\n  \t\t\t\t\t<td class = \"ml-auto\"><label>{{lookup.description}}</label></td>\r\n  \t\t\t\t\t<td class = \"ml-auto\"><label>{{lookup.lookupValue}}</label></td>\r\n  \t\t\t\t\t<td class = \"ml-auto\"><label>{{lookup.active}}</label></td>\r\n  \t\t\t\t\t<td class = \"ml-auto jusfify-content-between\">\r\n  \t\t\t\t\t\t<button class = \"btn btn-primary btn-sm\" (click) = \"details(lookup)\">Details</button>&nbsp;\r\n  \t\t\t\t\t\t<button class = \"btn btn-danger btn-sm\" (click) = \"deleteLookupEntity(lookup.lookupId)\">delete</button>\r\n  \t\t\t\t\t</td>\r\n  \t\t\t\t</tr>\r\n  \t\t\t</tbody>\r\n  \t\t</table>\r\n  \t\r\n  \t\t<div class=\"row\" *ngIf=\"!submitted\">\r\n  \t\t\t<div class=\"card-body\">\r\n  \t\t\t\t<div class = \"\" >\r\n  \t\t\t\t\t<form #addlookup = ngForm >\r\n  \t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"lookupCode\">Lookup Code</label> \r\n\t\t\t\t\t\t\t\t\t<input type=\"text\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"lookupCode\" required\r\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createLookupEntity.lookupCode\" name=\"lookupCode\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\t\t\t\r\n\t\t\t\t\t\t\t\t\t<label for=\"description\">Description</label> \r\n\t\t\t\t\t\t\t\t\t<input type=\"text\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"description\" required\r\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createLookupEntity.description\" name=\"description\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t\t<label for=\"lookupValue\">Lookup Value</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\"\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"lookupValue\" required\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createLookupEntity.lookupValue\" name=\"lookupValue\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-1\">\r\n\t\t\t\t\t\t\t\t<label>IsActive</label>\r\n\t\t\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t                        <label> <input type = \"checkbox\" name = \"active\" [(ngModel)] = \"createLookupEntity.active\" ></label>\r\n\t\t\t                    </div>\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t\t\t<label>\t&nbsp;</label>\r\n\t\t\t\t\t\t\t\t<div class=\"checkbox\"> \r\n\t\t\t\t\t\t\t\t\t<button class = \"btn btn-primary\" (click) = \"updateLookupEntity(createLookupEntity)\" *ngIf = \"submit\">update</button>\r\n\t\t\t\t\t\t\t\t\t<button (click)=\"onSubmit(addlookup)\" class=\"btn btn-success\" *ngIf = \"!submit\">Add Lookup</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n  \t\t\t\t</div>\r\n  \t\t\t</div>  \t\t\t\r\n  \t\t</div>\r\n  \t</div>\r\n  \t<div class = \"card-footer bg-info p-0 m-0\" >\r\n  \t\t<div class = \"row justify-content-center\">\r\n\t\t\t<ngb-pagination *ngIf = \"submitted\" [collectionSize]=\"len\" [(page)]=\"page\" [pageSize] = \"pageSize\"  [rotate]=\"true\"  [ellipses]=\"false\" class = \"col-md-10\"></ngb-pagination>\r\n\t\t\t<a routerLink = \"/master\" class = 'm-2'><button class = \"btn-warning\" >Back to master</button></a>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n  \t\t\t\t");

/***/ }),

/***/ 90676:
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master/master.component.html ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <div class=\"row\">\n        <div class=\"col-xl-4 col-lg-6\">\n            <app-stat [bgClass]=\"'primary'\" [count]=\"01\" [icon]=\"'far fa-address-card'\" \n            [label]=\"'Lookup Category'\" [outcomeLink]=\"'master/lookup'\" [data] = \"' go to Lookup Category'\"></app-stat>\n        </div>\n        <div class=\"col-xl-4 col-lg-6\">\n            <app-stat [bgClass]=\"'secondary'\" [count]=\"02\" [icon]=\"'fal fa-hospital-o'\" \n            [label]=\"'Department Category'\" [outcomeLink]=\"'master/department'\" [data] = \"' go to Department Category'\"></app-stat>\n        </div>\n        <div class=\"col-xl-4 col-lg-6\">\n            <app-stat [bgClass]=\"'success'\" [count]=\"03\" [icon]=\"'fal fa-flag'\" \n            [label]=\"'Country Category'\" [outcomeLink]=\"'master/country'\" [data] = \"' go to Country Category'\"></app-stat>\n        </div>\n</div><br>\n <div class=\"row\">\n \t <div class=\"col-xl-4 col-lg-6\">\n            <app-stat [bgClass]=\"'danger'\" [count]=\"04\" [icon]=\"'fas fa-cogs'\" \n            [label]=\"'ServiceCenter Category'\" [outcomeLink]=\"'master/serviceCenter'\" [data] = \"' go to ServiceCenter Category'\"></app-stat>\n        </div>\n        <div class=\"col-xl-4 col-lg-6\">\n            <app-stat [bgClass]=\"'warning'\" [count]=\"05\" [icon]=\"'fa-users'\" \n            [label]=\"'Unit Category'\" [outcomeLink]=\"'master/unitmaster'\" [data] = \"'go to Unit Category'\"></app-stat>\n        </div>\n        <div class=\"col-xl-4 col-lg-6\">\n            <app-stat [bgClass]=\"'info'\" [count]=\"06\" [icon]=\"'fa-list-alt'\" \n            [label]=\"'Item Category'\" [outcomeLink]=\"'master/itemmaster'\" [data] = \"'go to Item Category'\"></app-stat>\n        </div>\n  </div>");

/***/ }),

/***/ 7708:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master/service-center/service-center.component.html ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition]>\r\n\t<app-page-header [mainhead]=\"'Master'\"\r\n\t\t[mainheadLink]=\"'/master'\" [heading]=\"'ServiceCenter Category'\"\r\n\t\t[icon]=\"'fa-bar-chart-o'\"></app-page-header>\r\n</div>\r\n\r\n<div class = \"card\">\r\n\t<nav class = \"navbar text-white bg-dark\">\r\n\t\t\r\n\t\t\t<label>ServiceCenter Master &nbsp;</label>\r\n\t\t\t<input type = \"text\" placeholder = \"search here\" [(ngModel)] = \"search\" *ngIf = \"(submitted || ifDetail)\">\r\n\t\t\t<button class = \"btn btn-success text-white\" (click) = \"showServiceCenter()\" *ngIf=\"!submitted\" >Show List</button>\r\n  \t\t\t<button class = \"btn btn-success text-white\" (click) = \"newServiceCenter()\" *ngIf=\"submitted\" >Add New</button>\t\t\r\n\t</nav>\r\n\t\r\n\t<!-- Show ServiceCenter list part begins here -->\t\r\n\r\n\t<div class = \"card-body\" *ngIf = \"(submitted || ifDetail)\">\r\n\t\t<div class =\"col-md-12\">\r\n\t\t<table class = 'table' >\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th >ServiceCenter Code</th>\r\n\t\t\t\t\t<th>ServiceCenter Name</th>\r\n\t\t\t\t\t<th>serviceCenter Type</th>\r\n\t\t\t\t\t<th>DepartmentName</th>\r\n\t\t\t\t\t<th>IsAttachedStore</th>\r\n\t\t\t\t\t<th>IsActive</th>\r\n\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t<tr *ngFor = \"let serviceCenter of serviceCenterList |serviceSearch: search |slice: (page-1) * pageSize : page * pageSize\">\r\n\t\t\t\t\t<td>{{serviceCenter.serviceCenterCode}}</td>\r\n\t\t\t\t\t<td>{{serviceCenter.serviceCenterName}}</td>\r\n\t\t\t\t\t<td>{{serviceCenter.serviceCenterType.lookupValue}}</td>\r\n\t\t\t\t\t<td>{{serviceCenter.department.departmentName}}</td>\r\n\t\t\t\t\t<td>{{serviceCenter.attachStore}}</td>\r\n\t\t\t\t\t<td>{{serviceCenter.active}}</td>\r\n\t\t\t\t\t<td><button class = \"btn\" (click) = \"details(serviceCenter)\" ><i class = \"fa fa-edit\"></i></button></td>\r\n\t\t\t\t\t\r\n\t\t\t\t</tr>\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\t</div>\r\n\t\r\n\t\r\n\r\n\t</div>\r\n\t<!--  Update and Details Service Part begins here -->\r\n\r\n<div class = \"card-body p-0 m-0\" *ngIf = \"!(submitted && ifDetail)\" >\r\n\t<form #serviceCenterForm = \"ngForm\">\r\n\t\t<header class = \"header bg-dark text-light text-center\"  *ngIf = \"submit\"><label>ServiceCenter Details</label></header><br>\r\n\t\t<div class = \"border col-md-12\" >\r\n\t\t\t<div class = \"row\">\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-7\">ServiceCenter Code</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-5\" [(ngModel)] = \"serviceCenterDetails.serviceCenterCode\"  name = \"serviceCenterCode\" ngModel>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-7\">ServiceCenter Name</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-5\"  [(ngModel)] = \"serviceCenterDetails.serviceCenterName\"  name = \"serviceCenterName\" ngModel>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Department </label>\r\n\t\t\t\t\t<select class = \"col-md-6\"  [(ngModel)] = \"serviceCenterDetails.department.departmentId\"  name = \"department\" >\r\n\t\t\t\t\t\t<option [ngValue] = \"dept.departmentId\" *ngFor =\"let dept of departmentList\" >{{dept.departmentName}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row\">\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-7\">ServiceCenterType</label>\r\n\t\t\t\t\t<select class = \"col-md-5\"  [(ngModel)] = \"serviceCenterDetails.serviceCenterType.lookupId\"  name = \"serviceCenterType\"  required >\r\n\t\t\t\t\t<ng-container *ngFor =\"let lookupEntity of lookupEntityList\">\r\n\t\t\t\t\t\t<option [ngValue] = \"lookupEntity.lookupId\"   *ngIf = \"lookupEntity.category.categoryId == 13\" >{{lookupEntity.lookupValue}}</option>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-7\">Description</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-5\" [(ngModel)] = \"serviceCenterDetails.description\" name = \"description\" ngModel>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Site</label>\r\n\t\t\t\t\t<select class = \"col-md-6\"  [(ngModel)] = \"serviceCenterDetails.site.branchId\"  name = \"site\"  required  >\r\n\t\t\t\t\t\t<option [ngValue] = \"branch.id\" *ngFor =\"let branch of branchList\">{{branch.branchName}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row\">\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-7\">Started On</label>\r\n\t\t\t\t\t<input type = \"date\" class = \"col-md-5\"  [(ngModel)] = \"serviceCenterDetails.startedOn\" name = \"startedOn\" ngModel required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-7\">LastInactivatedOn</label>\r\n\t\t\t\t\t<input type = \"datetime\"  class = \"col-md-5\" [(ngModel)] = \"serviceCenterDetails.lastInactivatedOn\" datetime=\"yyyy-MM-dd HH:mm:ss\" placeholder = \"yyyy-MM-dd HH:mm:ss\" name = \"lastInactivatedOn\" ngModel>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Block</label>\r\n\t\t\t\t\t<select class = \"col-md-6\" [(ngModel)] = \"serviceCenterDetails.block.blockId\"  name = \"block\"  required >\r\n\t\t\t\t\t\t<option [ngValue] = \"block.blockId\"  *ngFor =\"let block of blockList\" >{{block.blockName}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row\">\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-7\">Is Active</label>\r\n\t\t\t\t\t<input type = \"checkbox\"  class = \"col-md-5\" [(ngModel)] = \"serviceCenterDetails.active\" name = \"active\" ngModel>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-7\">Attach Store</label>\r\n\t\t\t\t\t<input type = \"checkbox\" class = \"col-md-5\" [(ngModel)] = \"serviceCenterDetails.attachStore\" name = \"attachStore\" ngModel required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Floor</label>\r\n\t\t\t\t\t<select class = \"col-md-6\" [(ngModel)]= \"serviceCenterDetails.floor.floorId\" name = \"floor\" id = \"floor\">\r\n\t\t\t\t\t\t<option [ngValue] = \"floor.floorId\" *ngFor =\"let floor of floorList\" >{{floor.floorName}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row\">\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-7\">Created By</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-5\" [(ngModel)] = \"serviceCenterDetails\" name = \"createdBy\" ngModel required>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<button type = \"reset\"  class = \"btn btn-danger justify-content-right btn-sm\" *ngIf =\"!submit\">Reset</button>&nbsp;\r\n\t\t\t<button class = \"btn btn-success justify-content-right btn-sm\" (click) = \"update(serviceCenterForm)\" *ngIf = \"submit\">Update Service Center</button>\r\n\t\t\t<button type = \"submit\" class = \"btn btn-success justify-content-right btn-sm\" (click)= \"onSubmit(serviceCenterForm)\" *ngIf =\"!submit\" >Create Service Center</button><br><br>\r\n\t\t</div>\r\n\t</form>\r\n</div>\t\r\n\t\t<div class = \"text-right justify-content-center row\">\r\n\t\t\t\t\r\n\t</div>\r\n\t<div class = \"card-footer bg-info p-0 m-0\" >\r\n\t\t<div class = \"row justify-content-center \">\r\n\t\t\t<ngb-pagination *ngIf = \"submitted\" [collectionSize]=\"len\" [(page)]=\"page\" [pageSize] = \"pageSize\"  [rotate]=\"true\"  [ellipses]=\"false\" class = \"col-md-10\"></ngb-pagination>\r\n\t\t\t<a routerLink = \"/master\" class = \"m-2\" ><button class = \"btn-warning\" >Back to master</button></a>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t");

/***/ }),

/***/ 30010:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master/unit-master/unit-master.component.html ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class = \"card\">\r\n\t<div class = \"card-head\">\r\n\t\t<nav class = \"navbar bg-dark text-white\">\r\n\t\t\t<h3>Unit List</h3>\r\n\t\t\t<input type = \"text\" [(ngModel)] = \"name\">\r\n\t\t\t<button class = \"btn btn-success btn-sm\" (click) = \"addUnit(content)\">Add Unit</button>\r\n\t\t</nav>\r\n\t</div>\r\n\t<div class = \"card-body\" >\r\n\t\t<form>\r\n\t\t\t<div class = \" text-center\">\r\n\t\t\t\t<table class = \"table\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr class= \"row\">\r\n\t\t\t\t\t\t\t<th class = \"col\">Unit Id</th>\r\n\t\t\t\t\t\t\t<th class = \"col\">Unit Name</th>\r\n\t\t\t\t\t\t\t<th class = \"col\">Department</th>\r\n\t\t\t\t\t\t\t<th class = \"col\">isActive</th>\r\n\t\t\t\t\t\t\t<th class = \"col\">Actions</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<tr *ngFor = \"let unit of unitList |unitList: name |slice: (page-1) * pageSize : page * pageSize\" class= \"row\">\r\n\t\t\t\t\t\t\t<td class = \"col\">{{unit.unitId}}</td>\r\n\t\t\t\t\t\t\t<td class = \"col\">{{unit.unitName}}</td>\r\n\t\t\t\t\t\t\t<td class = \"col\" >{{unit.department.departmentName}}</td>\r\n\t\t\t\t\t\t\t<td class = \"col\">{{unit.isActive}}</td>\r\n\t\t\t\t\t\t\t<td class = \"col\">\r\n\t\t\t\t\t\t\t\t<button class = \"btn  btn-sm btn-primary\" (click) = \"update(unit,content)\">Update</button>&nbsp;\r\n\t\t\t\t\t\t\t\t<button class = \"btn btn-success btn-sm\" (click) = \"showEmployee(unit)\">Employee</button>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n\t\r\n\t<div class = \"card-foot row\" >\r\n\t\t<div class =\"col-md-6\" *ngIf= \"!submitted\">\r\n\t\t\t<nav class = \"navbar bg-dark text-white\">\r\n\t\t\t\t<h5>Employee List</h5>\r\n\t\t\t\t<input type = \"text\" [(ngModel)] = \"empsearch\">\r\n\t\t\t\t<button class = \"btn btn-sm btn-primary\" (click) = \"addEmployee(empcontent)\">Add Employee</button>\r\n\t\t\t</nav>\r\n\t\t\t<form>\r\n\t\t\t\t<div class = \"container text-center\">\r\n\t\t\t\t\t<table class = \"table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr class= \"row\">\r\n\t\t\t\t\t\t\t\t<th class = \"col\">Employee No</th>\r\n\t\t\t\t\t\t\t\t<th class = \"col\">Employee Name</th>\r\n\t\t\t\t\t\t\t\t<th class = \"col\">Employee Status</th>\r\n\t\t\t\t\t\t\t\t<th class = \"col\">IsActive</th>\r\n\t\t\t\t\t\t\t\t<th class = \"col\">Actions</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr *ngFor = \"let unitEmployee of unitEmployeeList | emppipe: empsearch\" class= \"row\">\r\n\t\t\t\t\t\t\t\t<td class = \"col\">{{unitEmployee.employee.employeeNo}}</td>\r\n\t\t\t\t\t\t\t\t<td class = \"col\">{{unitEmployee.employee.firstName}}</td>\r\n\t\t\t\t\t\t\t\t<td class = \"col\">{{unitEmployee.employee.employeeStatus.lookupValue}}</td>\r\n\t\t\t\t\t\t\t\t<td class = \"col\">{{unitEmployee.employee.employeeStatus.active}}</td>\r\n\t\t\t\t\t\t\t\t<td class = \"col\">\r\n\t\t\t\t\t\t\t\t\t<button class = \"btn btn-success btn-sm\" (click)=\"employeeDetails(unitEmployee.employee)\"><i class=\"fa fa-info-circle \"></i></button>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t\t<div class = \"row p-0 m-0 \">\r\n\t\t\t\t<ngb-pagination [collectionSize]=\"empLen\" [(page)]=\"empPage\" [pageSize] = \"pageSize\"  [rotate]=\"true\"  [ellipses]=\"false\" class = \"col-md-10\"></ngb-pagination>\r\n\t\t\t\t<button class = \"btn-danger btn-sm m-2\" (click) = \"closeEmployee()\">Close</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class = \"col-md-6\" *ngIf = \"!submitted && !isDetail\">\r\n\t\t\t<nav class = \"navbar bg-dark text-white\">\r\n\t\t\t\t<h5>Employee Details</h5>\r\n\t\t\t</nav>\r\n\t\t\t<div class = \"container\">\r\n\t\t\t\t<div class = \"row\">\r\n\t\t\t\t\t<div class = \"col-md-6\">\r\n\t\t\t\t\t\t<label>Name :</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class = \"col-md-6\">\r\n\t\t\t\t\t\t<label>{{employeeDetail.employeeName}}</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"row\">\r\n\t\t\t\t\t<div class = \"col-md-6\">\r\n\t\t\t\t\t\t<label>New Patient Visited :</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class = \"col-md-6\">\r\n\t\t\t\t\t\t<input type = \"number\" [(ngModel)] = \"employeeDetail.newPatient\" name = \"newPatient\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class = \"col-md-5\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"row\">\r\n\t\t\t\t\t<div class = \"col-md-6\">\r\n\t\t\t\t\t\t<label>Existing Patient Visited :</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class = \"col-md-6\">\r\n\t\t\t\t\t\t<input type = \"number\" [(ngModel)] = \"employeeDetail.existingPatient\" name = \"existingPatient\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"row\">\r\n\t\t\t\t\t<div class = \"col-md-6\">\r\n\t\t\t\t\t\t<label>Followup Patient Visited :</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t\t<input type = \"number\" [(ngModel)] = \"employeeDetail.followupPatient\" name = \"followupPatient\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"row\">\r\n\t\t\t\t\t<div class = \"col-md-6\">\r\n\t\t\t\t\t\t<label>Slot :</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class = \"col-md-6\">\r\n\t\t\t\t\t\t<select [(ngModel)] =  \"employeeDetail.slot.lookupId\" name = \"slot\" id = \"slot\">\r\n\t\t\t\t\t\t\t<ng-container *ngFor = \"let lookupEntity of lookupEntityList\">\r\n\t\t\t\t\t\t\t\t<option  [value] = \"lookupEntity.lookupId\" *ngIf = \"lookupEntity.category.categoryId === employeeDetail.slot.category.categoryId\">{{lookupEntity.lookupValue}}</option>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"row\">\r\n\t\t\t\t\t<div class = \"col-md-6\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t\t<button class =\"btn btn-success btn-sm\" (click) = \"updateEmployeeDetails()\">Update</button>&nbsp;\r\n\t\t\t\t\t\t<button class = \"btn btn-danger btn-sm\" (click) = \"closeEmployeeDetails()\">Close</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t\t\r\n\t\t\r\n\t</div>\r\n</div>\r\n\r\n<!--  ***************************************  Add Unit pop up goes here ********************************************* -->\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n\t<div class=\"modal-header\">\r\n\t\t<nav class = \"navbar bg-dark text-white w-100\" >\r\n\t\t\t<h3 *ngIf = \"!isAdd\">Add Unit</h3>\r\n\t\t\t<h3 *ngIf = \"isAdd\">Update Unit</h3>\r\n\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n\t      \t\t<span aria-hidden=\"true\">&times;</span>\r\n\t    \t</button>\r\n\t\t</nav>\r\n  \t</div>\r\n\t<div class = \"card-body\">\r\n\t\t\t<form #newUnitForm = ngForm>\r\n\t\t\t\t<div class = \"row\">\r\n\t\t\t\t\t<label class = \"col-md-2\">Unit Name: </label>\r\n\t\t\t\t\t<div class = \"col-md-2 \">\r\n\t\t\t\t\t\t<input type = \"text\" class =\"form-control\" [(ngModel)] = \"unit.unitName\" name = \"unitName\" id = \"unitName\" >\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label class = \"col-md-2\">Unit Code: </label>\r\n\t\t\t\t\t<div class = \"col-md-2\">\r\n\t\t\t\t\t\t<input type = \"text\" class = \"form-control\" [(ngModel)] = \"unit.unitCode\" name = \"unitCode\" id = \"unitCode\" >\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label class = \"col-md-2\">Unit Head: </label>\r\n\t\t\t\t\t<div class = \"col-md-2\">\r\n\t\t\t\t\t\t<input type = \"text\" class = \"form-control\" [(ngModel)] = \"unit.unitHead\" name = \"unitHead\" id = \"unitHead\" >\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div><br>\r\n\t\t\t\t<div class = \"row\">\r\n\t\t\t\r\n\t\t\t\t\t<label class = \"col-md-2\">Department : </label>\r\n\t\t\t\t\t<div class = \"col-md-2\">\r\n\t\t\t\t\t\t<select   class = \"form-control\" [(ngModel)] = \"unit.department.departmentId\" name = \"department\" ngModel>\r\n\t\t\t\t\t\t\t<option *ngFor = \"let department of departmentList\" [value]= \"department.departmentId\">{{department.departmentName}}</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t\t<label class = \"col-md-4\">Active: </label>\r\n\t\t\t\t\t\t<input type = \"checkbox\" class = \"col-md-3\" [(ngModel)] = \"unit.isActive\" name = \"isActive\" id = \"isActive\" >\r\n\t\t\t\t\t\t<button class = \"btn btn-success btn-sm col-md-5\" (click) = \"updateUnit(newUnitForm)\" *ngIf = \"isAdd\">Update</button>\r\n\t\t\t\t\t\t<button class = \"btn btn-success btn-sm col-md-5\" (click) = \"createUnit(newUnitForm)\" *ngIf = \"!isAdd\">Add</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n  <!--  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\r\n  </div> -->\r\n</ng-template>\r\n\r\n<!-- **************************************           Add employee pop up goes here ******************************. -->\r\n\r\n<ng-template #empcontent let-c=\"close\" let-d=\"dismiss\">\r\n\t<div class=\"modal-header\">\r\n\t\t<nav class = \"navbar bg-dark text-white w-100 \">\r\n\t\t\t\t<h5>Employee List&nbsp;: &nbsp;</h5>&nbsp;&nbsp;&nbsp;\r\n\t\t\t\t<input type = \"text\" class = \"text-right\" [(ngModel)] = \"unitEmpSearch\">\r\n\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n\t      \t\t&times;\r\n\t    \t</button>\r\n\t\t</nav>\r\n  \t</div>\r\n\t<div class = \"card-body\">\r\n\t\t\t<form #newUnitForm = ngForm>\r\n\t\t\t\t<table class = \"table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th>Employee Id</th>\r\n\t\t\t\t\t\t\t\t<th >Employee No</th>\r\n\t\t\t\t\t\t\t\t<th >Employee Name</th>\r\n\t\t\t\t\t\t\t\t<th>Branch</th>\r\n\t\t\t\t\t\t\t\t<th >Actions</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr *ngFor = \"let remainingUnitEmployee of unitEmployeeRemainingMappingArray | unitEmpList : unitEmpSearch\">\r\n\t\t\t\t\t\t\t\t<td>{{remainingUnitEmployee.employeeId}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td >{{remainingUnitEmployee.employee.employeeNo}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td >{{remainingUnitEmployee.employee.firstName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{remainingUnitEmployee.employee.branch.branchName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td  >\r\n\t\t\t\t\t\t\t\t\t\t\t<button class = \"btn btn-success btn-sm\" (click)=\"addEmployeeToUnit(remainingUnitEmployee)\"><i class=\"fa fa-plus-circle\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr> <!--\r\n\t\t\t\t\t\t\t<tr *ngFor = \"let unitEmployee of unitEmployeeMappingList\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor = \"let units of unitEmployeeList\">\r\n\t\t\t\t\t\t\t\t\t\t<td  *ngIf = \"!(units.employee.employeeId == unitEmployee.employee.employeeId)\">{{unitEmployee.employee.employeeNo}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td  *ngIf = \"!(units.employee.employeeId == unitEmployee.employee.employeeId)\">{{unitEmployee.employee.firstName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td  *ngIf = \"!(units.employee.employeeId == unitEmployee.employee.employeeId)\">{{unitEmployee.employee.branch.branchName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td  *ngIf = \"!(units.employee.employeeId == unitEmployee.employee.employeeId)\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class = \"btn btn-success btn-sm\" (click)=\"addEmployeeToUnit(unitEmployee)\"><i class=\"fa fa-plus-circle\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</tr>  -->\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t</form>\r\n\t\t\t<ngb-pagination [collectionSize]=\"empUnitlen\" [(page)]=\"empUnitPage\" [pageSize] = \"pageSize\"  [rotate]=\"true\"  [ellipses]=\"false\" class = \"col-md-10\"></ngb-pagination>\r\n\t\t</div>\r\n  <!--  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\r\n  </div> -->\r\n</ng-template>\r\n<div class = \" bg-info footer\" >\r\n\t<div class = \"row justify-content-center \">\r\n\t\t<ngb-pagination [collectionSize]=\"len\" [(page)]=\"page\" [pageSize] = \"pageSize\"  [rotate]=\"true\"  [ellipses]=\"true\" class = \"col-md-10\"></ngb-pagination>\r\n\t\t<a  class = \"m-2\" ><button class = \"btn-warning\" (click) = \"backToMaster()\" >Back to master</button></a>\r\n\t</div>\r\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_master_master_module_ts-es2015.js.map