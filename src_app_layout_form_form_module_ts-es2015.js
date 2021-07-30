(self["webpackChunksb_admin_bs4_angular_9"] = self["webpackChunksb_admin_bs4_angular_9"] || []).push([["src_app_layout_form_form_module_ts"],{

/***/ 81864:
/*!****************************************************!*\
  !*** ./src/app/layout/form/form-routing.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormRoutingModule": function() { return /* binding */ FormRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.component */ 10019);




const routes = [
    {
        path: '',
        component: _form_component__WEBPACK_IMPORTED_MODULE_0__.FormComponent
    }
];
let FormRoutingModule = class FormRoutingModule {
};
FormRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], FormRoutingModule);



/***/ }),

/***/ 10019:
/*!***********************************************!*\
  !*** ./src/app/layout/form/form.component.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormComponent": function() { return /* binding */ FormComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./form.component.html */ 64509);
/* harmony import */ var _form_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.component.scss */ 45453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ 74903);





let FormComponent = class FormComponent {
    constructor() { }
    ngOnInit() { }
};
FormComponent.ctorParameters = () => [];
FormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-form',
        template: _raw_loader_form_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_form_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FormComponent);



/***/ }),

/***/ 52569:
/*!********************************************!*\
  !*** ./src/app/layout/form/form.module.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormModule": function() { return /* binding */ FormModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared */ 51679);
/* harmony import */ var _form_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-routing.module */ 81864);
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.component */ 10019);






let FormModule = class FormModule {
};
FormModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _form_routing_module__WEBPACK_IMPORTED_MODULE_1__.FormRoutingModule, _shared__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule],
        declarations: [_form_component__WEBPACK_IMPORTED_MODULE_2__.FormComponent]
    })
], FormModule);



/***/ }),

/***/ 45453:
/*!*************************************************!*\
  !*** ./src/app/layout/form/form.component.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 64509:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/form/form.component.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition]>\n    <app-page-header [heading]=\"'Forms'\" [icon]=\"'fa-edit'\"></app-page-header>\n\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <form role=\"form\">\n                <fieldset class=\"form-group\">\n                    <label>Text Input</label>\n                    <input class=\"form-control\" />\n                    <p class=\"help-block\">Example block-level help text here.</p>\n                </fieldset>\n\n                <fieldset class=\"form-group\">\n                    <label>Text Input with Placeholder</label>\n                    <input class=\"form-control\" placeholder=\"Enter text\" />\n                </fieldset>\n\n                <div class=\"form-group\">\n                    <label>Static Control</label>\n                    <p class=\"form-control-static\">email@example.com</p>\n                </div>\n\n                <fieldset class=\"form-group\">\n                    <label for=\"exampleInputFile\">File input</label>\n                    <input class=\"form-control-file\" id=\"exampleInputFile\" type=\"file\" />\n                </fieldset>\n\n                <fieldset class=\"form-group\">\n                    <label>Text area</label>\n                    <textarea class=\"form-control\" rows=\"3\"></textarea>\n                </fieldset>\n\n                <div class=\"form-group\">\n                    <label>Checkboxes</label>\n                    <div class=\"checkbox\">\n                        <label> <input type=\"checkbox\" value=\"\" /> Checkbox 1 </label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label> <input type=\"checkbox\" value=\"\" /> Checkbox 2 </label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label> <input type=\"checkbox\" value=\"\" /> Checkbox 3 </label>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Inline Checkboxes</label>\n                    <label class=\"checkbox-inline\"> <input type=\"checkbox\" />1 </label>\n                    <label class=\"checkbox-inline\"> <input type=\"checkbox\" />2 </label>\n                    <label class=\"checkbox-inline\"> <input type=\"checkbox\" />3 </label>\n                </div>\n\n                <fieldset class=\"form-group\">\n                    <label>Radio Buttons</label>\n                    <div class=\"radio\">\n                        <label>\n                            <input checked=\"\" id=\"optionsRadios1\" name=\"optionsRadios\" type=\"radio\" value=\"option1\" />\n                            Radio 1\n                        </label>\n                    </div>\n                    <div class=\"radio\">\n                        <label>\n                            <input id=\"optionsRadios2\" name=\"optionsRadios\" type=\"radio\" value=\"option2\" /> Radio 2\n                        </label>\n                    </div>\n                    <div class=\"radio\">\n                        <label>\n                            <input id=\"optionsRadios3\" name=\"optionsRadios\" type=\"radio\" value=\"option3\" /> Radio 3\n                        </label>\n                    </div>\n                </fieldset>\n\n                <fieldset class=\"form-group\">\n                    <label>Inline Radio Buttons</label>\n                    <label class=\"radio-inline\">\n                        <input\n                            checked=\"\"\n                            id=\"optionsRadiosInline1\"\n                            name=\"optionsRadiosInline\"\n                            type=\"radio\"\n                            value=\"option1\"\n                        />1\n                    </label>\n                    <label class=\"radio-inline\">\n                        <input id=\"optionsRadiosInline2\" name=\"optionsRadiosInline\" type=\"radio\" value=\"option2\" />2\n                    </label>\n                    <label class=\"radio-inline\">\n                        <input id=\"optionsRadiosInline3\" name=\"optionsRadiosInline\" type=\"radio\" value=\"option3\" />3\n                    </label>\n                </fieldset>\n\n                <div class=\"form-group\">\n                    <label>Selects</label>\n                    <select class=\"form-control\">\n                        <option>1</option>\n                        <option>2</option>\n                        <option>3</option>\n                        <option>4</option>\n                        <option>5</option>\n                    </select>\n                </div>\n\n                <fieldset class=\"form-group\">\n                    <label>Multiple Selects</label>\n                    <select class=\"form-control\" multiple=\"\">\n                        <option>1</option>\n                        <option>2</option>\n                        <option>3</option>\n                        <option>4</option>\n                        <option>5</option>\n                    </select>\n                </fieldset>\n\n                <button class=\"btn btn-secondary\" type=\"submit\">Submit Button</button>\n                <button class=\"btn btn-secondary\" type=\"reset\">Reset Button</button>\n            </form>\n        </div>\n        <div class=\"col-lg-6\">\n            <h4>Disabled Form States</h4>\n\n            <form role=\"form\">\n                <fieldset disabled=\"\">\n                    <div class=\"form-group\">\n                        <label for=\"disabledSelect\">Disabled input</label>\n                        <input\n                            class=\"form-control\"\n                            disabled=\"\"\n                            id=\"disabledInput\"\n                            placeholder=\"Disabled input\"\n                            type=\"text\"\n                        />\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"disabledSelect\">Disabled select menu</label>\n                        <select class=\"form-control\" id=\"disabledSelect\">\n                            <option>Disabled select</option>\n                        </select>\n                    </div>\n\n                    <div class=\"checkbox\">\n                        <label> <input type=\"checkbox\" /> Disabled Checkbox </label>\n                    </div>\n\n                    <button class=\"btn btn-primary\" type=\"submit\">Disabled Button</button>\n                </fieldset>\n            </form>\n            <br />\n\n            <h4>Form Validation</h4>\n\n            <form role=\"form\">\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"inputSuccess\">Input with success</label>\n                    <input class=\"form-control is-valid\" id=\"inputSuccess\" type=\"text\" />\n                    <div class=\"valid-feedback\">\n                        Input success message\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"inputError\">Input with danger</label>\n                    <input class=\"form-control is-invalid\" id=\"inputError\" type=\"text\" />\n                    <div class=\"invalid-feedback\">\n                        Input error message\n                    </div>\n                </div>\n            </form>\n\n            <h4>Input Groups</h4>\n\n            <form role=\"form\">\n                <div class=\"form-group input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">@</span>\n                    </div>\n                    <!-- <span class=\"input-group-addon\">@</span> -->\n                    <input class=\"form-control\" placeholder=\"Username\" type=\"text\" />\n                </div>\n\n                <div class=\"form-group input-group\">\n                    <input class=\"form-control\" type=\"text\" />\n                    <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">.00</span>\n                    </div>\n                </div>\n\n                <div class=\"form-group input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-eur\"></i></span>\n                    </div>\n                    <input class=\"form-control\" placeholder=\"Font Awesome Icon\" type=\"text\" />\n                </div>\n\n                <div class=\"form-group input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\">$</span>\n                    </div>\n                    <input class=\"form-control\" type=\"text\" />\n                    <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">.00</span>\n                    </div>\n                </div>\n\n                <div class=\"form-group input-group\">\n                    <input class=\"form-control\" type=\"text\" />\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-secondary\" type=\"button\"><i class=\"fa fa-search\"></i></button>\n                    </div>\n                </div>\n            </form>\n\n            <p>\n                For complete documentation, please visit\n                <a href=\"https://getbootstrap.com/docs/4.0/components/forms/\" target=\"_blank\"\n                    >Bootstrap's Form Documentation</a\n                >.\n            </p>\n        </div>\n    </div>\n    <!-- /.row -->\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layout_form_form_module_ts-es2015.js.map