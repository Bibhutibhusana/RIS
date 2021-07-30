(self["webpackChunksb_admin_bs4_angular_9"] = self["webpackChunksb_admin_bs4_angular_9"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared */ 51679);




const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layout_layout_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/layout.module */ 4805)).then((m) => m.LayoutModule),
        canActivate: [_shared__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    { path: 'login', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 80107)).then((m) => m.LoginModule) },
    { path: 'signup', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_signup_signup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./signup/signup.module */ 77648)).then((m) => m.SignupModule) },
    {
        path: 'error',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_server-error_server-error_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./server-error/server-error.module */ 19818)).then((m) => m.ServerErrorModule)
    },
    {
        path: 'access-denied',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_access-denied_access-denied_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./access-denied/access-denied.module */ 11565)).then((m) => m.AccessDeniedModule)
    },
    { path: 'not-found', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_not-found_not-found_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./not-found/not-found.module */ 92867)).then((m) => m.NotFoundModule) },
    { path: '**', redirectTo: 'not-found' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let AppComponent = class AppComponent {
    constructor() { }
    ngOnInit() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared */ 51679);
/* harmony import */ var _shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/modules/language-translation/language-translation.module */ 90894);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);











let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_3__.LanguageTranslationModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule,
        ],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        providers: [_shared__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 74903:
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routerTransition": function() { return /* binding */ routerTransition; },
/* harmony export */   "noTransition": function() { return /* binding */ noTransition; },
/* harmony export */   "slideToRight": function() { return /* binding */ slideToRight; },
/* harmony export */   "slideToLeft": function() { return /* binding */ slideToLeft; },
/* harmony export */   "slideToBottom": function() { return /* binding */ slideToBottom; },
/* harmony export */   "slideToTop": function() { return /* binding */ slideToTop; }
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 17238);

function routerTransition() {
    return noTransition();
}
function noTransition() {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routerTransition', []);
}
function slideToRight() {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routerTransition', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(-100%)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(0%)' }))
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(0%)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routerTransition', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(100%)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(0%)' }))
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(0%)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routerTransition', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(-100%)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(0%)' }))
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(0%)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routerTransition', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(100%)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(0%)' }))
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(0%)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(-100%)' }))
        ])
    ]);
}


/***/ }),

/***/ 45240:
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": function() { return /* binding */ AuthGuard; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 39895);



let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (localStorage.getItem('isLoggedin')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], AuthGuard);



/***/ }),

/***/ 61140:
/*!***************************************!*\
  !*** ./src/app/shared/guard/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": function() { return /* reexport safe */ _auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard; }
/* harmony export */ });
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ 45240);



/***/ }),

/***/ 51679:
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHeaderModule": function() { return /* reexport safe */ _modules__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule; },
/* harmony export */   "StatModule": function() { return /* reexport safe */ _modules__WEBPACK_IMPORTED_MODULE_0__.StatModule; },
/* harmony export */   "SharedPipesModule": function() { return /* reexport safe */ _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__.SharedPipesModule; },
/* harmony export */   "AuthGuard": function() { return /* reexport safe */ _guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard; }
/* harmony export */ });
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ 41277);
/* harmony import */ var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/shared-pipes.module */ 81233);
/* harmony import */ var _guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guard */ 61140);





/***/ }),

/***/ 41277:
/*!*****************************************!*\
  !*** ./src/app/shared/modules/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHeaderModule": function() { return /* reexport safe */ _page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule; },
/* harmony export */   "StatModule": function() { return /* reexport safe */ _stat_stat_module__WEBPACK_IMPORTED_MODULE_1__.StatModule; }
/* harmony export */ });
/* harmony import */ var _page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-header/page-header.module */ 12956);
/* harmony import */ var _stat_stat_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stat/stat.module */ 80110);




/***/ }),

/***/ 90894:
/*!************************************************************************************!*\
  !*** ./src/app/shared/modules/language-translation/language-translation.module.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": function() { return /* binding */ HttpLoaderFactory; },
/* harmony export */   "LanguageTranslationModule": function() { return /* binding */ LanguageTranslationModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/http-loader */ 32472);

/**
 * This module is used to language translations.
 * The translations are saved in a json file in /src/app/assets/i18n directory
 * Docs: https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular7-app-with-ngx-translate
 */


// import ngx-translate and the http loader


// ngx-translate - required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__.TranslateHttpLoader(http);
}
let LanguageTranslationModule = class LanguageTranslationModule {
    constructor(translate) {
        this.translate = translate;
        // Gets Default language from browser if available, otherwise set English ad default
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    }
};
LanguageTranslationModule.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService }
];
LanguageTranslationModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [],
        imports: [
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient]
                }
            })
        ],
        exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule]
    })
], LanguageTranslationModule);



/***/ }),

/***/ 88161:
/*!*********************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHeaderComponent": function() { return /* binding */ PageHeaderComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_page_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./page-header.component.html */ 4882);
/* harmony import */ var _page_header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-header.component.scss */ 36128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let PageHeaderComponent = class PageHeaderComponent {
    constructor() { }
    ngOnInit() {
        //this.mainhead = 'Dashboard';
    }
};
PageHeaderComponent.ctorParameters = () => [];
PageHeaderComponent.propDecorators = {
    mainhead: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    mainheadLink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    heading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
PageHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-page-header',
        template: _raw_loader_page_header_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_page_header_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PageHeaderComponent);



/***/ }),

/***/ 12956:
/*!******************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHeaderModule": function() { return /* binding */ PageHeaderModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-header.component */ 88161);





let PageHeaderModule = class PageHeaderModule {
};
PageHeaderModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
        declarations: [_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent],
        exports: [_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent]
    })
], PageHeaderModule);



/***/ }),

/***/ 15357:
/*!*******************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatComponent": function() { return /* binding */ StatComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_stat_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./stat.component.html */ 19528);
/* harmony import */ var _stat_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stat.component.scss */ 40220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../router.animations */ 74903);






let StatComponent = class StatComponent {
    constructor(router) {
        this.router = router;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() { }
    navigation(paramLink) {
        console.log(paramLink);
        this.router.navigate([paramLink]);
        //,{ mainhead:"Registration",mainheadLink : '/registration' , heading :'Patient'}
    }
};
StatComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
StatComponent.propDecorators = {
    bgClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    outcomeLink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
StatComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-stat',
        template: _raw_loader_stat_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_stat_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StatComponent);



/***/ }),

/***/ 80110:
/*!****************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatModule": function() { return /* binding */ StatModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _stat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stat.component */ 15357);




let StatModule = class StatModule {
};
StatModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
        declarations: [_stat_component__WEBPACK_IMPORTED_MODULE_0__.StatComponent],
        exports: [_stat_component__WEBPACK_IMPORTED_MODULE_0__.StatComponent]
    })
], StatModule);



/***/ }),

/***/ 81233:
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/shared-pipes.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedPipesModule": function() { return /* binding */ SharedPipesModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);



let SharedPipesModule = class SharedPipesModule {
};
SharedPipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
        declarations: []
    })
], SharedPipesModule);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.error(err));


/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table th, .table td {\n  padding: 0.3rem;\n  vertical-align: center;\n  border-top: 1px solid #dee2e6;\n}\n\n.pagination {\n  padding: 0;\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n  margin: 0;\n}\n\n* {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUVKOztBQUFBO0VBQ0MsZUFBQTtBQUdEIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB0aCwgLnRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmc6IC4zMHJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG4ucGFnaW5hdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbip7XHJcblx0Zm9udC1zaXplOiAxNHB4IDtcclxufSJdfQ== */");

/***/ }),

/***/ 36128:
/*!***********************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.component.scss ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 40220:
/*!*********************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.component.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ 4882:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/page-header/page-header.component.html ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <h2 class=\"page-header \">\n            {{ heading }}\n        </h2>\n        <ol class=\"breadcrumb \" style = \"background-color:antiquewhite;color:black\">\n            <li class=\"breadcrumb-item\">\n                <i class=\"fa fa-dashboard\"></i> <a [routerLink]=\"mainheadLink\" href=\"Javascript:void(0)\">{{mainhead}}</a>\n            </li>\n            <li class=\"breadcrumb-item active\"><i class=\"fa {{ icon }}\"></i> {{ heading }}</li>\n        </ol>\n    </div>\n</div>\n");

/***/ }),

/***/ 19528:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/stat/stat.component.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card text-white bg-{{ bgClass }}\">\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <div class=\"col-md-2\">\n                <i class=\"fa {{ icon }} fa-4x \"></i>\n            </div>\n            <div class = \"col-md-10 text-right \">\n                <div class=\"\">{{ count }}</div>\n                <div class=\" \">{{ label }}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-footer\">\n        <span class=\"float-left \">Click  to {{data}}</span>\n        <a class=\"float-right card-inverse\" href=\"javascript:void(0)\" \n\t\t(click)=\"navigation(outcomeLink)\"   >\n            <span><i class=\"fa fa-arrow-circle-right\" style= \"color:black\"></i></span>\n        </a>\n    </div>\n</div>\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map