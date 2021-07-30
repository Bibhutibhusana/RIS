(self["webpackChunksb_admin_bs4_angular_9"] = self["webpackChunksb_admin_bs4_angular_9"] || []).push([["common"],{

/***/ 73457:
/*!********************************************************!*\
  !*** ./src/app/master/service-center/masters/block.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Block": function() { return /* binding */ Block; }
/* harmony export */ });
/* harmony import */ var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../masters/base-entity */ 28685);
/* harmony import */ var _branch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./branch */ 40478);


class Block extends _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity {
    constructor() {
        super();
        this.site = new _branch__WEBPACK_IMPORTED_MODULE_1__.Branch();
    }
}


/***/ }),

/***/ 42806:
/*!********************************************************!*\
  !*** ./src/app/master/service-center/masters/floor.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Floor": function() { return /* binding */ Floor; }
/* harmony export */ });
/* harmony import */ var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../masters/base-entity */ 28685);
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block */ 73457);


class Floor extends _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity {
    constructor() {
        super();
        this.startedOn = new Date();
        this.block = new _block__WEBPACK_IMPORTED_MODULE_1__.Block();
    }
}


/***/ }),

/***/ 39758:
/*!*****************************************************************!*\
  !*** ./src/app/master/service-center/masters/service-center.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceCenter": function() { return /* binding */ ServiceCenter; }
/* harmony export */ });
/* harmony import */ var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../masters/base-entity */ 28685);
/* harmony import */ var _department_masters_department__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../department/masters/department */ 10776);
/* harmony import */ var _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lookup-module/masters/lookup-entity */ 11697);
/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block */ 73457);
/* harmony import */ var _branch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./branch */ 40478);
/* harmony import */ var _floor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./floor */ 42806);






class ServiceCenter extends _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity {
    constructor() {
        super();
        this.serviceCenterType = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity();
        this.department = new _department_masters_department__WEBPACK_IMPORTED_MODULE_1__.Department();
        this.floor = new _floor__WEBPACK_IMPORTED_MODULE_5__.Floor();
        this.block = new _block__WEBPACK_IMPORTED_MODULE_3__.Block();
        this.site = new _branch__WEBPACK_IMPORTED_MODULE_4__.Branch();
    }
}


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map