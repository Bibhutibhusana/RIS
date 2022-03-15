(self["webpackChunkElitePro"] = self["webpackChunkElitePro"] || []).push([["common"],{

/***/ 31564:
/*!********************************************************************!*\
  !*** ./src/app/Common-Security-Services/common-service.service.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonSecurityService": function() { return /* binding */ CommonSecurityService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let CommonSecurityService = class CommonSecurityService {
    constructor() { }
    /************ Patient services goes here **************************************************** */
    getPatient() {
        return JSON.parse(localStorage.getItem('patient'));
    }
    setPatient(patient) {
        localStorage.setItem('patient', JSON.stringify(patient));
    }
    cleanPatient() {
        localStorage.removeItem('patient');
    }
    /****************************************  Preferences Services Goes here **************** */
    getPreferences() {
        return JSON.parse(localStorage.getItem('preferences'));
    }
    setPreferences(preferences) {
        if (preferences) {
            localStorage.setItem('preferences', JSON.stringify(preferences));
        }
    }
    cleanPreferences() {
        localStorage.removeItem('preferences');
    }
    /*******************************************  User Services Goes here ************************************/
    setUser(user) {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        }
    }
    getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
    cleanUser() {
        localStorage.removeItem('user');
    }
};
CommonSecurityService.ctorParameters = () => [];
CommonSecurityService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], CommonSecurityService);



/***/ }),

/***/ 89959:
/*!************************************************************!*\
  !*** ./src/app/enterprise-user/masters/enterprise-user.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnterpriseUser": function() { return /* binding */ EnterpriseUser; }
/* harmony export */ });
/* harmony import */ var _master_unit_master_masters_Employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../master/unit-master/masters/Employee */ 51716);
/* harmony import */ var _master_item_master_masters_subBase_Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../master/item-master/masters/subBase-Entity */ 50050);
/* harmony import */ var _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../master/lookup-module/masters/lookup-entity */ 11697);



class EnterpriseUser extends _master_item_master_masters_subBase_Entity__WEBPACK_IMPORTED_MODULE_1__.SubBaseEntity {
    constructor() {
        super();
        this.globalProjectStore = false;
        this.globalStore = false;
        this.globalBranch = false;
        this.globalDepartment = false;
        this.globalServiceCenter = false;
        this.employee = new _master_unit_master_masters_Employee__WEBPACK_IMPORTED_MODULE_0__.Employee();
        this.userType = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity();
        this.pswModifiedDate = new Date();
        this.isPswExpires = false;
        this.pswChangeReqd = false;
    }
}


/***/ }),

/***/ 16533:
/*!*********************************************************************!*\
  !*** ./src/app/enterprise-user/services/enterprise-user.service.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnterpriseUserService": function() { return /* binding */ EnterpriseUserService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../main.service */ 29118);





let EnterpriseUserService = class EnterpriseUserService {
    constructor(http, router, mainService) {
        this.http = http;
        this.router = router;
        this.mainService = mainService;
        this.baseUrl = "";
        this.baseUrl = this.mainService.getBaseUrl();
    }
    getEnterpriseUserList() {
        return this.http.get(`${this.baseUrl}/enterpriseUser/get`);
    }
    getEnterpriseUserById(userId) {
        return this.http.get(`${this.baseUrl}/enterpriseUser/getById/${userId}`);
    }
    getEnterpriseUserByUserName(userName, password) {
        return this.http.post(`${this.baseUrl}/enterpriseUser/getByUserName/${userName}`, password);
    }
    updateEnterpriseUser(enterpriseUserId, enterpriseUser) {
        return this.http.put(`${this.baseUrl}/enterpriseUser/update/${enterpriseUserId}`, enterpriseUser);
    }
    createEnterpriseUser(enterpriseUser) {
        return this.http.post(`${this.baseUrl}/enterpriseUser/add`, enterpriseUser);
    }
    createEnterpriseUserWithImage(formData) {
        return this.http.post(`${this.baseUrl}/enterpriseUser/addWithImage`, formData);
    }
    createEnterpriseUserWithImageInServer(formData) {
        return this.http.post(`${this.baseUrl}/enterpriseUser/addWithImageInServer`, formData);
    }
};
EnterpriseUserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService }
];
EnterpriseUserService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], EnterpriseUserService);



/***/ }),

/***/ 85373:
/*!***********************************************!*\
  !*** ./src/app/layout/alert/alert.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": function() { return /* binding */ AlertService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79765);




let AlertService = class AlertService {
    constructor(router) {
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert message
                    this.clear();
                }
            }
        });
    }
    getAlert() {
        return this.subject.asObservable();
    }
    success(message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'success', text: message });
    }
    error(message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'error', text: message });
    }
    clear() {
        // clear by calling subject.next() without parameters
        this.subject.next();
    }
};
AlertService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
AlertService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ 29118:
/*!*********************************!*\
  !*** ./src/app/main.service.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainService": function() { return /* binding */ MainService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let MainService = class MainService {
    constructor() {
        this._baseUrl = "http://localhost:8080/springboot/api/v1";
    }
    getBaseUrl() {
        return this._baseUrl;
    }
};
MainService.ctorParameters = () => [];
MainService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], MainService);



/***/ }),

/***/ 60139:
/*!************************************************************!*\
  !*** ./src/app/master/country-category/masters/country.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Country": function() { return /* binding */ Country; }
/* harmony export */ });
class Country {
}


/***/ }),

/***/ 10776:
/*!*********************************************************!*\
  !*** ./src/app/master/department/masters/department.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Department": function() { return /* binding */ Department; }
/* harmony export */ });
/* harmony import */ var _service_center_masters_branch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service-center/masters/branch */ 40478);

class Department {
    constructor() {
        this.site = new _service_center_masters_branch__WEBPACK_IMPORTED_MODULE_0__.Branch;
    }
}


/***/ }),

/***/ 281:
/*!**********************************************************!*\
  !*** ./src/app/master/drug-generic/masters/age-group.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgeGroup": function() { return /* binding */ AgeGroup; }
/* harmony export */ });
class AgeGroup {
}


/***/ }),

/***/ 80294:
/*!*************************************************************!*\
  !*** ./src/app/master/drug-generic/masters/drug-dosages.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrugDosages": function() { return /* binding */ DrugDosages; }
/* harmony export */ });
/* harmony import */ var _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lookup-module/masters/lookup-entity */ 11697);
/* harmony import */ var _age_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./age-group */ 281);
/* harmony import */ var _frequency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frequency */ 94189);



class DrugDosages {
    constructor() {
        this.ageGroupRefId = new _age_group__WEBPACK_IMPORTED_MODULE_1__.AgeGroup();
        this.dosageFrequencyRefId = new _frequency__WEBPACK_IMPORTED_MODULE_2__.Frequency();
        this.doseUnitsRefId = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
        this.doseTypesRefId = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
        this.maxDoseUnitsRefId = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
        this.drugFormRefId = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
    }
}


/***/ }),

/***/ 51740:
/*!**************************************************************!*\
  !*** ./src/app/master/drug-generic/masters/drug-generics.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrugGenerics": function() { return /* binding */ DrugGenerics; }
/* harmony export */ });
/* harmony import */ var _group_master_masters_groups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../group-master/masters/groups */ 40158);
/* harmony import */ var _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lookup-module/masters/lookup-entity */ 11697);
/* harmony import */ var _drug_dosages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drug-dosages */ 80294);
/* harmony import */ var _strength__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./strength */ 62137);




class DrugGenerics {
    constructor() {
        this.dosageRefId = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__.LookupEntity();
        this.drugClassRefId = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__.LookupEntity();
        this.drugTapper = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__.LookupEntity();
        this.groups = new _group_master_masters_groups__WEBPACK_IMPORTED_MODULE_0__.Groups();
        this.genericDrugFormOfAdminDetails = new Array();
        this.genericDrugRouteOfAdminDetails = new Array();
        this.genericStrengths = new _strength__WEBPACK_IMPORTED_MODULE_3__.GenericStrength();
        this.drgDosages = new _drug_dosages__WEBPACK_IMPORTED_MODULE_2__.DrugDosages();
    }
}


/***/ }),

/***/ 94189:
/*!**********************************************************!*\
  !*** ./src/app/master/drug-generic/masters/frequency.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Frequency": function() { return /* binding */ Frequency; }
/* harmony export */ });
class Frequency {
}


/***/ }),

/***/ 62137:
/*!*********************************************************!*\
  !*** ./src/app/master/drug-generic/masters/strength.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenericStrength": function() { return /* binding */ GenericStrength; }
/* harmony export */ });
class GenericStrength {
}


/***/ }),

/***/ 44739:
/*!**********************************************************************!*\
  !*** ./src/app/master/drug-generic/services/drug-generic.service.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrugGenericService": function() { return /* binding */ DrugGenericService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../main.service */ 29118);




let DrugGenericService = class DrugGenericService {
    constructor(http, mainService) {
        this.http = http;
        this.mainService = mainService;
        //private baseUrl = 'http://localhost:8080/springboot/api/v1';
        this.baseUrl = '';
        this.baseUrl = this.mainService.getBaseUrl();
    }
    getdrugGenerics() {
        return this.http.get(`${this.baseUrl}/drugGenerics/get`);
    }
    createDrugGenerics(drugGenerics) {
        return this.http.post(`${this.baseUrl}/drugGenerics/add`, drugGenerics);
    }
    createDrugAvailableForms(drugAvailableForms) {
        return this.http.post(`${this.baseUrl}/createDrugAvailForms/add`, drugAvailableForms);
    }
};
DrugGenericService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService }
];
DrugGenericService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], DrugGenericService);



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

/***/ 11697:
/*!***************************************************************!*\
  !*** ./src/app/master/lookup-module/masters/lookup-entity.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LookupEntity": function() { return /* binding */ LookupEntity; }
/* harmony export */ });
/* harmony import */ var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../masters/base-entity */ 28685);

class LookupEntity extends _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity {
    constructor() {
        super();
    }
}


/***/ }),

/***/ 28685:
/*!***********************************************!*\
  !*** ./src/app/master/masters/base-entity.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseEntity": function() { return /* binding */ BaseEntity; }
/* harmony export */ });
class BaseEntity {
}


/***/ }),

/***/ 40478:
/*!*********************************************************!*\
  !*** ./src/app/master/service-center/masters/branch.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Branch": function() { return /* binding */ Branch; }
/* harmony export */ });
/* harmony import */ var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../masters/base-entity */ 28685);

class Branch extends _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity {
    constructor() {
        super();
    }
}


/***/ }),

/***/ 51716:
/*!********************************************************!*\
  !*** ./src/app/master/unit-master/masters/Employee.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Employee": function() { return /* binding */ Employee; }
/* harmony export */ });
/* harmony import */ var _country_category_masters_country__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../country-category/masters/country */ 60139);
/* harmony import */ var _department_masters_department__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../department/masters/department */ 10776);
/* harmony import */ var _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lookup-module/masters/lookup-entity */ 11697);
/* harmony import */ var _masters_base_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../masters/base-entity */ 28685);
/* harmony import */ var _service_center_masters_branch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service-center/masters/branch */ 40478);
/* harmony import */ var _enterpriseUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enterpriseUser */ 30063);
/* harmony import */ var _PrefixMaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PrefixMaster */ 71277);







class Employee extends _masters_base_entity__WEBPACK_IMPORTED_MODULE_3__.BaseEntity {
    constructor() {
        super(...arguments);
        this.dob = new Date();
        this.employeeStatus = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity;
        this.gender = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity;
        this.maritalStatus = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity();
        this.empNationality = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity();
        this.nationality = new _country_category_masters_country__WEBPACK_IMPORTED_MODULE_0__.Country;
        this.empCategory = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity();
        this.empEmployeementStatus = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity();
        this.department = new _department_masters_department__WEBPACK_IMPORTED_MODULE_1__.Department();
        this.bloodGroup = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity();
        this.empHealthCardValidUpto = new Date;
        this.empDesignation = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity();
        this.user = new _enterpriseUser__WEBPACK_IMPORTED_MODULE_5__.EnterpriseUser;
        this.branch = new _service_center_masters_branch__WEBPACK_IMPORTED_MODULE_4__.Branch();
        this.validDate = new Date;
        this.empPrefix = new _PrefixMaster__WEBPACK_IMPORTED_MODULE_6__.PrefixMaster();
        this.slot = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity;
    }
}


/***/ }),

/***/ 71277:
/*!************************************************************!*\
  !*** ./src/app/master/unit-master/masters/PrefixMaster.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrefixMaster": function() { return /* binding */ PrefixMaster; }
/* harmony export */ });
/* harmony import */ var _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lookup-module/masters/lookup-entity */ 11697);

class PrefixMaster {
    constructor() {
        this.gender = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
    }
}


/***/ }),

/***/ 30063:
/*!**************************************************************!*\
  !*** ./src/app/master/unit-master/masters/enterpriseUser.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnterpriseUser": function() { return /* binding */ EnterpriseUser; }
/* harmony export */ });
/* harmony import */ var _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lookup-module/masters/lookup-entity */ 11697);

class EnterpriseUser {
    constructor() {
        this.userType = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity;
    }
}


/***/ }),

/***/ 17224:
/*!************************************************************!*\
  !*** ./src/app/preferences/services/preference.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferencesService": function() { return /* binding */ PreferencesService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../main.service */ 29118);




let PreferencesService = class PreferencesService {
    constructor(http, mainService) {
        this.http = http;
        this.mainService = mainService;
        this.baseUrl = "http://192.168.1.24:8080/springboot/api/v1";
        this.baseUrl = this.mainService.getBaseUrl();
    }
    getPreferencesList() {
        return this.http.get(`${this.baseUrl}/preferences/get`);
    }
    createPreferences(preferences) {
        return this.http.post(`${this.baseUrl}/preferences/add`, preferences);
    }
    updatePreferences(preferencesId, preferences) {
        return this.http.post(`${this.baseUrl}/preferences/update/${preferencesId}`, preferences);
    }
    getPreferenceByUserId(userId) {
        return this.http.get(`${this.baseUrl}/preferences/getByUserId/${userId}`);
    }
};
PreferencesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService }
];
PreferencesService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PreferencesService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map