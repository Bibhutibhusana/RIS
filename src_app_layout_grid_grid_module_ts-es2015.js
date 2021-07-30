(self["webpackChunksb_admin_bs4_angular_9"] = self["webpackChunksb_admin_bs4_angular_9"] || []).push([["src_app_layout_grid_grid_module_ts"],{

/***/ 60980:
/*!****************************************************!*\
  !*** ./src/app/layout/grid/grid-routing.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridRoutingModule": function() { return /* binding */ GridRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid.component */ 41501);




const routes = [
    {
        path: '',
        component: _grid_component__WEBPACK_IMPORTED_MODULE_0__.GridComponent
    }
];
let GridRoutingModule = class GridRoutingModule {
};
GridRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], GridRoutingModule);



/***/ }),

/***/ 41501:
/*!***********************************************!*\
  !*** ./src/app/layout/grid/grid.component.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridComponent": function() { return /* binding */ GridComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_grid_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./grid.component.html */ 98166);
/* harmony import */ var _grid_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid.component.scss */ 81329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ 74903);





let GridComponent = class GridComponent {
    constructor() { }
    ngOnInit() { }
};
GridComponent.ctorParameters = () => [];
GridComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-grid',
        template: _raw_loader_grid_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_grid_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GridComponent);



/***/ }),

/***/ 36605:
/*!********************************************!*\
  !*** ./src/app/layout/grid/grid.module.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridModule": function() { return /* binding */ GridModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared */ 51679);
/* harmony import */ var _grid_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid-routing.module */ 60980);
/* harmony import */ var _grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid.component */ 41501);






let GridModule = class GridModule {
};
GridModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _grid_routing_module__WEBPACK_IMPORTED_MODULE_1__.GridRoutingModule, _shared__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule],
        declarations: [_grid_component__WEBPACK_IMPORTED_MODULE_2__.GridComponent]
    })
], GridModule);



/***/ }),

/***/ 81329:
/*!*************************************************!*\
  !*** ./src/app/layout/grid/grid.component.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmlkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 98166:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/grid/grid.component.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition]>\n    <app-page-header [heading]=\"'Bootstrap Grid'\" [icon]=\"'fa-wrench'\"></app-page-header>\n\n    <div class=\"row\">\n        <div class=\"col-xl-12 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-12\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.row -->\n\n    <div class=\"row\">\n        <div class=\"col-xl-6 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-6\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-6 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-6\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.row -->\n\n    <div class=\"row\">\n        <div class=\"col-xl-4 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-4\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-4 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-4\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-4 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-4\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.row -->\n\n    <div class=\"row\">\n        <div class=\"col-xl-3 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-3\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-3 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-3\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-3 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-3\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-3 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-3\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.row -->\n\n    <div class=\"row\">\n        <div class=\"col-xl-2 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-2\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-2 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-2\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-2 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-2\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-2 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-2\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-2 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-2\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-2 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-2\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.row -->\n\n    <div class=\"row\">\n        <div class=\"col-xl-1 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-1\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-1 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-1\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-1 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-1\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-1 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-1\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-1 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-1\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-1 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-1\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-1 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-1\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-1 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-1\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-1 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-1\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-1 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-1\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-1 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-1\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-1 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-1\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.row -->\n\n    <div class=\"row\">\n        <div class=\"col-xl-8 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-8\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-4 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-4\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.row -->\n\n    <div class=\"row\">\n        <div class=\"col-xl-3 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-3\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-6 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-6\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-3 text-xs-center\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body\">\n                    .col-xl-3\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.row -->\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layout_grid_grid_module_ts-es2015.js.map