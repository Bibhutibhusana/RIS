(self["webpackChunksb_admin_bs4_angular_9"] = self["webpackChunksb_admin_bs4_angular_9"] || []).push([["src_app_server-error_server-error_module_ts"],{

/***/ 64018:
/*!*************************************************************!*\
  !*** ./src/app/server-error/server-error-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerErrorRoutingModule": function() { return /* binding */ ServerErrorRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _server_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server-error.component */ 61685);




const routes = [
    {
        path: '',
        component: _server_error_component__WEBPACK_IMPORTED_MODULE_0__.ServerErrorComponent
    }
];
let ServerErrorRoutingModule = class ServerErrorRoutingModule {
};
ServerErrorRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ServerErrorRoutingModule);



/***/ }),

/***/ 61685:
/*!********************************************************!*\
  !*** ./src/app/server-error/server-error.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerErrorComponent": function() { return /* binding */ ServerErrorComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_server_error_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./server-error.component.html */ 64894);
/* harmony import */ var _server_error_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server-error.component.scss */ 81110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let ServerErrorComponent = class ServerErrorComponent {
    constructor() { }
    ngOnInit() { }
};
ServerErrorComponent.ctorParameters = () => [];
ServerErrorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-server-error',
        template: _raw_loader_server_error_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_server_error_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ServerErrorComponent);



/***/ }),

/***/ 19818:
/*!*****************************************************!*\
  !*** ./src/app/server-error/server-error.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerErrorModule": function() { return /* binding */ ServerErrorModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _server_error_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server-error-routing.module */ 64018);
/* harmony import */ var _server_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server-error.component */ 61685);





let ServerErrorModule = class ServerErrorModule {
};
ServerErrorModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _server_error_routing_module__WEBPACK_IMPORTED_MODULE_0__.ServerErrorRoutingModule],
        declarations: [_server_error_component__WEBPACK_IMPORTED_MODULE_1__.ServerErrorComponent]
    })
], ServerErrorModule);



/***/ }),

/***/ 81110:
/*!**********************************************************!*\
  !*** ./src/app/server-error/server-error.component.scss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2ZXItZXJyb3IuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 64894:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/server-error/server-error.component.html ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n    server-error works!\n</p>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_server-error_server-error_module_ts-es2015.js.map