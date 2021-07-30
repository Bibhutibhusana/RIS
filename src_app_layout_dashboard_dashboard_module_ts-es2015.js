(self["webpackChunksb_admin_bs4_angular_9"] = self["webpackChunksb_admin_bs4_angular_9"] || []).push([["src_app_layout_dashboard_dashboard_module_ts"],{

/***/ 46739:
/*!********************************************************************!*\
  !*** ./src/app/layout/dashboard/components/chat/chat.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatComponent": function() { return /* binding */ ChatComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_chat_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./chat.component.html */ 70613);
/* harmony import */ var _chat_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.component.scss */ 72042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let ChatComponent = class ChatComponent {
    constructor() { }
    ngOnInit() { }
};
ChatComponent.ctorParameters = () => [];
ChatComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-chat',
        template: _raw_loader_chat_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_chat_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChatComponent);



/***/ }),

/***/ 91595:
/*!******************************************************!*\
  !*** ./src/app/layout/dashboard/components/index.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimelineComponent": function() { return /* reexport safe */ _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_0__.TimelineComponent; },
/* harmony export */   "NotificationComponent": function() { return /* reexport safe */ _notification_notification_component__WEBPACK_IMPORTED_MODULE_1__.NotificationComponent; },
/* harmony export */   "ChatComponent": function() { return /* reexport safe */ _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__.ChatComponent; }
/* harmony export */ });
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline/timeline.component */ 72362);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification/notification.component */ 66195);
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat/chat.component */ 46739);





/***/ }),

/***/ 66195:
/*!************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/notification/notification.component.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationComponent": function() { return /* binding */ NotificationComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_notification_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./notification.component.html */ 72882);
/* harmony import */ var _notification_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.component.scss */ 3259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let NotificationComponent = class NotificationComponent {
    constructor() { }
    ngOnInit() { }
};
NotificationComponent.ctorParameters = () => [];
NotificationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-notification',
        template: _raw_loader_notification_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_notification_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NotificationComponent);



/***/ }),

/***/ 72362:
/*!****************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/timeline/timeline.component.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimelineComponent": function() { return /* binding */ TimelineComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_timeline_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./timeline.component.html */ 33012);
/* harmony import */ var _timeline_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeline.component.scss */ 1296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let TimelineComponent = class TimelineComponent {
    constructor() { }
    ngOnInit() { }
};
TimelineComponent.ctorParameters = () => [];
TimelineComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-timeline',
        template: _raw_loader_timeline_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_timeline_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TimelineComponent);



/***/ }),

/***/ 23201:
/*!**************************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard-routing.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": function() { return /* binding */ DashboardRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 73850);




const routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
    }
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], DashboardRoutingModule);



/***/ }),

/***/ 73850:
/*!*********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": function() { return /* binding */ DashboardComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dashboard.component.html */ 40588);
/* harmony import */ var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.scss */ 48545);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ 74903);





let DashboardComponent = class DashboardComponent {
    constructor() {
        this.alerts = [];
        this.sliders = [];
        this.sliders.push({
            imagePath: 'assets/images/slider1.jpg',
            label: 'First slide label',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }, {
            imagePath: 'assets/images/slider2.jpg',
            label: 'Second slide label',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
            imagePath: 'assets/images/slider3.jpg',
            label: 'Third slide label',
            text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        });
        this.alerts.push({
            id: 1,
            type: 'success',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        }, {
            id: 2,
            type: 'warning',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        });
    }
    ngOnInit() { }
    closeAlert(alert) {
        const index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
};
DashboardComponent.ctorParameters = () => [];
DashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DashboardComponent);



/***/ }),

/***/ 99869:
/*!******************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": function() { return /* binding */ DashboardModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared */ 51679);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ 91595);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ 23201);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ 73850);








let DashboardModule = class DashboardModule {
};
DashboardModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbCarouselModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbAlertModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__.DashboardRoutingModule, _shared__WEBPACK_IMPORTED_MODULE_0__.StatModule],
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent, _components__WEBPACK_IMPORTED_MODULE_1__.TimelineComponent, _components__WEBPACK_IMPORTED_MODULE_1__.NotificationComponent, _components__WEBPACK_IMPORTED_MODULE_1__.ChatComponent]
    })
], DashboardModule);



/***/ }),

/***/ 72042:
/*!**********************************************************************!*\
  !*** ./src/app/layout/dashboard/components/chat/chat.component.scss ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chat-panel .chat-dropdown {\n  margin-top: -3px;\n}\n.chat-panel .chat {\n  height: 350px;\n  overflow-y: scroll;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.chat-panel .chat .left img {\n  margin-right: 15px;\n}\n.chat-panel .chat .right img {\n  margin-left: 15px;\n}\n.chat-panel .chat li {\n  margin-bottom: 10px;\n  margin-right: 15px;\n  padding-bottom: 5px;\n  border-bottom: 1px dotted #999;\n}\n.chat-panel .card-footer input {\n  padding: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxnQkFBQTtBQUFSO0FBR0k7RUFhSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBYlI7QUFGWTtFQUNJLGtCQUFBO0FBSWhCO0FBQ1k7RUFDSSxpQkFBQTtBQUNoQjtBQVNRO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFQWjtBQVlRO0VBQ0ksWUFBQTtBQVZaIiwiZmlsZSI6ImNoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdC1wYW5lbCB7XG4gICAgLmNoYXQtZHJvcGRvd24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAtM3B4O1xuICAgIH1cblxuICAgIC5jaGF0IHtcbiAgICAgICAgLmxlZnQge1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmlnaHQge1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjOTk5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNhcmQtZm9vdGVyIHtcbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ 3259:
/*!**************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/notification/notification.component.scss ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 1296:
/*!******************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/timeline/timeline.component.scss ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".timeline {\n  position: relative;\n  padding: 20px 0 20px;\n  list-style: none;\n}\n\n.timeline:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 3px;\n  margin-left: -1.5px;\n  background-color: #eeeeee;\n}\n\n.timeline > li {\n  position: relative;\n  margin-bottom: 20px;\n}\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline > li:after {\n  clear: both;\n}\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline > li:after {\n  clear: both;\n}\n\n.timeline > li > .timeline-panel {\n  float: left;\n  position: relative;\n  width: 46%;\n  padding: 20px;\n  border: 1px solid #d4d4d4;\n  border-radius: 2px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\n}\n\n.timeline > li > .timeline-panel:before {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 26px;\n  right: -15px;\n  border-top: 15px solid transparent;\n  border-right: 0 solid #ccc;\n  border-bottom: 15px solid transparent;\n  border-left: 15px solid #ccc;\n}\n\n.timeline > li > .timeline-panel:after {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 27px;\n  right: -14px;\n  border-top: 14px solid transparent;\n  border-right: 0 solid #fff;\n  border-bottom: 14px solid transparent;\n  border-left: 14px solid #fff;\n}\n\n.timeline > li > .timeline-badge {\n  z-index: 100;\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: -25px;\n  border-radius: 50% 50% 50% 50%;\n  text-align: center;\n  font-size: 1.4em;\n  line-height: 50px;\n  color: #fff;\n  background-color: #999999;\n}\n\n.timeline > li.timeline-inverted > .timeline-panel {\n  float: right;\n}\n\n.timeline > li.timeline-inverted > .timeline-panel:before {\n  right: auto;\n  left: -15px;\n  border-right-width: 15px;\n  border-left-width: 0;\n}\n\n.timeline > li.timeline-inverted > .timeline-panel:after {\n  right: auto;\n  left: -14px;\n  border-right-width: 14px;\n  border-left-width: 0;\n}\n\n.timeline-badge.primary {\n  background-color: #2e6da4 !important;\n}\n\n.timeline-badge.success {\n  background-color: #3f903f !important;\n}\n\n.timeline-badge.warning {\n  background-color: #f0ad4e !important;\n}\n\n.timeline-badge.danger {\n  background-color: #d9534f !important;\n}\n\n.timeline-badge.info {\n  background-color: #5bc0de !important;\n}\n\n.timeline-title {\n  margin-top: 0;\n  color: inherit;\n}\n\n.timeline-body > p,\n.timeline-body > ul {\n  margin-bottom: 0;\n}\n\n.timeline-body > p + p {\n  margin-top: 5px;\n}\n\n@media (max-width: 767px) {\n  ul.timeline:before {\n    left: 40px;\n  }\n\n  ul.timeline > li > .timeline-panel {\n    width: calc(100% - 90px);\n    width: -webkit-calc(100% - 90px);\n  }\n\n  ul.timeline > li > .timeline-badge {\n    top: 16px;\n    left: 15px;\n    margin-left: 0;\n  }\n\n  ul.timeline > li > .timeline-panel {\n    float: right;\n  }\n\n  ul.timeline > li > .timeline-panel:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0;\n  }\n\n  ul.timeline > li > .timeline-panel:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBOztFQUVJLFlBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7O0VBRUksWUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUVBLDBDQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQkFBQTtFQUNBLHFDQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDBCQUFBO0VBQ0EscUNBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQ0FBQTtBQUNKOztBQUVBO0VBQ0ksb0NBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQ0FBQTtBQUNKOztBQUVBO0VBQ0ksb0NBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7O0VBRUksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksVUFBQTtFQUNOOztFQUVFO0lBQ0ksd0JBQUE7SUFFQSxnQ0FBQTtFQUNOOztFQUVFO0lBQ0ksU0FBQTtJQUNBLFVBQUE7SUFDQSxjQUFBO0VBQ047O0VBRUU7SUFDSSxZQUFBO0VBQ047O0VBRUU7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLHdCQUFBO0lBQ0Esb0JBQUE7RUFDTjs7RUFFRTtJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0Esd0JBQUE7SUFDQSxvQkFBQTtFQUNOO0FBQ0YiLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGltZWxpbmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAyMHB4IDAgMjBweDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4udGltZWxpbmU6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnICc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiAzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xLjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xufVxuXG4udGltZWxpbmUgPiBsaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi50aW1lbGluZSA+IGxpOmJlZm9yZSxcbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcbiAgICBjb250ZW50OiAnICc7XG4gICAgZGlzcGxheTogdGFibGU7XG59XG5cbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcbiAgICBjbGVhcjogYm90aDtcbn1cblxuLnRpbWVsaW5lID4gbGk6YmVmb3JlLFxuLnRpbWVsaW5lID4gbGk6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcgJztcbiAgICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLnRpbWVsaW5lID4gbGk6YWZ0ZXIge1xuICAgIGNsZWFyOiBib3RoO1xufVxuXG4udGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA0NiU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTc1KTtcbiAgICBib3gtc2hhZG93OiAwIDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE3NSk7XG59XG5cbi50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XG4gICAgY29udGVudDogJyAnO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyNnB4O1xuICAgIHJpZ2h0OiAtMTVweDtcbiAgICBib3JkZXItdG9wOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogMCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgI2NjYztcbn1cblxuLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWw6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcgJztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjdweDtcbiAgICByaWdodDogLTE0cHg7XG4gICAgYm9yZGVyLXRvcDogMTRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDAgc29saWQgI2ZmZjtcbiAgICBib3JkZXItYm90dG9tOiAxNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiAxNHB4IHNvbGlkICNmZmY7XG59XG5cbi50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLWJhZGdlIHtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTZweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDUwJSA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTk5OTtcbn1cblxuLnRpbWVsaW5lID4gbGkudGltZWxpbmUtaW52ZXJ0ZWQgPiAudGltZWxpbmUtcGFuZWwge1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLnRpbWVsaW5lID4gbGkudGltZWxpbmUtaW52ZXJ0ZWQgPiAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcbiAgICByaWdodDogYXV0bztcbiAgICBsZWZ0OiAtMTVweDtcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDE1cHg7XG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG59XG5cbi50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsOmFmdGVyIHtcbiAgICByaWdodDogYXV0bztcbiAgICBsZWZ0OiAtMTRweDtcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDE0cHg7XG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG59XG5cbi50aW1lbGluZS1iYWRnZS5wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU2ZGE0ICFpbXBvcnRhbnQ7XG59XG5cbi50aW1lbGluZS1iYWRnZS5zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y5MDNmICFpbXBvcnRhbnQ7XG59XG5cbi50aW1lbGluZS1iYWRnZS53YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlICFpbXBvcnRhbnQ7XG59XG5cbi50aW1lbGluZS1iYWRnZS5kYW5nZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGYgIWltcG9ydGFudDtcbn1cblxuLnRpbWVsaW5lLWJhZGdlLmluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGUgIWltcG9ydGFudDtcbn1cblxuLnRpbWVsaW5lLXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGNvbG9yOiBpbmhlcml0O1xufVxuXG4udGltZWxpbmUtYm9keSA+IHAsXG4udGltZWxpbmUtYm9keSA+IHVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4udGltZWxpbmUtYm9keSA+IHAgKyBwIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIHVsLnRpbWVsaW5lOmJlZm9yZSB7XG4gICAgICAgIGxlZnQ6IDQwcHg7XG4gICAgfVxuXG4gICAgdWwudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbCB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA5MHB4KTtcbiAgICAgICAgd2lkdGg6IC1tb3otY2FsYygxMDAlIC0gOTBweCk7XG4gICAgICAgIHdpZHRoOiAtd2Via2l0LWNhbGMoMTAwJSAtIDkwcHgpO1xuICAgIH1cblxuICAgIHVsLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtYmFkZ2Uge1xuICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgIGxlZnQ6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgIHVsLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWwge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuXG4gICAgdWwudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogLTE1cHg7XG4gICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMTVweDtcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gICAgfVxuXG4gICAgdWwudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbDphZnRlciB7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBsZWZ0OiAtMTRweDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxNHB4O1xuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ 48545:
/*!***********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 70613:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/dashboard/components/chat/chat.component.html ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"chat-panel card card-default\">\n    <div class=\"card-header\">\n        <i class=\"fa fa-comments fa-fw\"></i>\n        Chat\n        <div class=\"pull-right\" ngbDropdown>\n            <button class=\"btn btn-secondary btn-sm\" ngbDropdownToggle>\n                <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu dropdown-menu-right\">\n                <li role=\"menuitem\">\n                    <a class=\"dropdown-item\" href=\"#\"> <i class=\"fa fa-refresh fa-fw\"></i> Refresh</a>\n                </li>\n                <li role=\"menuitem\">\n                    <a class=\"dropdown-item\" href=\"#\"> <i class=\"fa fa-check-circle fa-fw\"></i> Available</a>\n                </li>\n                <li role=\"menuitem\">\n                    <a class=\"dropdown-item\" href=\"#\"> <i class=\"fa fa-times fa-fw\"></i> Busy</a>\n                </li>\n                <li class=\"divider dropdown-divider\"></li>\n                <li role=\"menuitem\">\n                    <a class=\"dropdown-item\" href=\"#\"> <i class=\"fa fa-times fa-fw\"></i> Busy </a>\n                </li>\n                <li>\n                    <a class=\"dropdown-item\" href=\"#\"> <i class=\"fa fa-clock-o fa-fw\"></i> Away </a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a class=\"dropdown-item\" href=\"#\"> <i class=\"fa fa-sign-out fa-fw\"></i> Sign Out </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <!-- /.panel-heading -->\n    <div class=\"card-body\">\n        <ul class=\"chat\">\n            <li class=\"left clearfix\">\n                <span class=\"chat-img pull-left\">\n                    <img alt=\"User Avatar\" class=\"img-circle\" src=\"http://placehold.it/50/55C1E7/fff\" />\n                </span>\n                <div class=\"chat-body clearfix\">\n                    <div class=\"header\">\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\n                        <small class=\"pull-right text-muted\"> <i class=\"fa fa-clock-o fa-fw\"></i> 12 mins ago </small>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis\n                        ullamcorper ligula sodales.\n                    </p>\n                </div>\n            </li>\n            <li class=\"right clearfix\">\n                <span class=\"chat-img pull-right\">\n                    <img alt=\"User Avatar\" class=\"img-circle\" src=\"http://placehold.it/50/FA6F57/fff\" />\n                </span>\n                <div class=\"chat-body clearfix\">\n                    <div class=\"header\">\n                        <small class=\"text-muted\"> <i class=\"fa fa-clock-o fa-fw\"></i> 13 mins ago </small>\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis\n                        ullamcorper ligula sodales.\n                    </p>\n                </div>\n            </li>\n            <li class=\"left clearfix\">\n                <span class=\"chat-img pull-left\">\n                    <img alt=\"User Avatar\" class=\"img-circle\" src=\"http://placehold.it/50/55C1E7/fff\" />\n                </span>\n                <div class=\"chat-body clearfix\">\n                    <div class=\"header\">\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\n                        <small class=\"pull-right text-muted\"> <i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago </small>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis\n                        ullamcorper ligula sodales.\n                    </p>\n                </div>\n            </li>\n            <li class=\"right clearfix\">\n                <span class=\"chat-img pull-right\">\n                    <img alt=\"User Avatar\" class=\"img-circle\" src=\"http://placehold.it/50/FA6F57/fff\" />\n                </span>\n                <div class=\"chat-body clearfix\">\n                    <div class=\"header\">\n                        <small class=\"text-muted\"> <i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago </small>\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\n                    </div>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis\n                        ullamcorper ligula sodales.\n                    </p>\n                </div>\n            </li>\n        </ul>\n    </div>\n    <!-- /.card-body -->\n    <div class=\"card-footer\">\n        <div class=\"input-group\">\n            <input class=\"form-control input-sm\" id=\"btn-input\" placeholder=\"Type your message here...\" type=\"text\" />\n            <span class=\"input-group-btn\">\n                <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\">\n                    Send\n                </button>\n            </span>\n        </div>\n    </div>\n    <!-- /.card-footer -->\n</div>\n");

/***/ }),

/***/ 72882:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/dashboard/components/notification/notification.component.html ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body\">\n    <div class=\"list-group\">\n        <a class=\"list-group-item clearfix d-block\" href=\"#\">\n            <i class=\"fa fa-comment fa-fw\"></i> New Comment\n            <span class=\"float-right text-muted small\"><em>4 minutes ago</em></span>\n        </a>\n        <a class=\"list-group-item clearfix d-block\" href=\"#\">\n            <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\n            <span class=\"float-right text-muted small\"><em>12 minutes ago</em></span>\n        </a>\n        <a class=\"list-group-item clearfix d-block\" href=\"#\">\n            <i class=\"fa fa-envelope fa-fw\"></i> Message Sent\n            <span class=\"float-right text-muted small\"><em>27 minutes ago</em></span>\n        </a>\n        <a class=\"list-group-item clearfix d-block\" href=\"#\">\n            <i class=\"fa fa-tasks fa-fw\"></i> New Task\n            <span class=\"float-right text-muted small\"><em>43 minutes ago</em></span>\n        </a>\n        <a class=\"list-group-item clearfix d-block\" href=\"#\">\n            <i class=\"fa fa-upload fa-fw\"></i> Server Rebooted\n            <span class=\"float-right text-muted small\"><em>11:32 AM</em></span>\n        </a>\n        <a class=\"list-group-item clearfix d-block\" href=\"#\">\n            <i class=\"fa fa-bolt fa-fw\"></i> Server Crashed!\n            <span class=\"float-right text-muted small\"><em>11:13 AM</em></span>\n        </a>\n        <a class=\"list-group-item clearfix d-block\" href=\"#\">\n            <i class=\"fa fa-warning fa-fw\"></i> Server Not Responding\n            <span class=\"float-right text-muted small\"><em>10:57 AM</em></span>\n        </a>\n        <a class=\"list-group-item clearfix d-block\" href=\"#\">\n            <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\n            <span class=\"float-right text-muted small\"><em>9:49 AM</em></span>\n        </a>\n        <a class=\"list-group-item clearfix d-block\" href=\"#\">\n            <i class=\"fa fa-money fa-fw\"></i> Payment Received\n            <span class=\"float-right text-muted small\"><em>Yesterday</em></span>\n        </a>\n    </div>\n    <!-- /.list-group -->\n    <a class=\"btn btn-default btn-block\" href=\"#\">View All Alerts</a>\n</div>\n");

/***/ }),

/***/ 33012:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/dashboard/components/timeline/timeline.component.html ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body\">\n    <ul class=\"timeline\">\n        <li>\n            <div class=\"timeline-badge\"><i class=\"fa fa-check\"></i></div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                    <p>\n                        <small class=\"text-muted\"><i class=\"fa fa-clock-o\"></i> 11 hours ago via Twitter</small>\n                    </p>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam dolor perspiciatis\n                        omnis exercitationem. Beatae, officia pariatur? Est cum veniam excepturi. Maiores praesentium,\n                        porro voluptas suscipit facere rem dicta, debitis.\n                    </p>\n                </div>\n            </div>\n        </li>\n        <li class=\"timeline-inverted\">\n            <div class=\"timeline-badge warning\"><i class=\"fa fa-credit-card\"></i></div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur\n                        commodi provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio,\n                        tempore. Animi officiis alias, officia repellendus.\n                    </p>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est\n                        tempora eos, nostrum provident explicabo dignissimos debitis vel! Adipisci eius voluptates, ad\n                        aut recusandae minus eaque facere.\n                    </p>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"timeline-badge danger\"><i class=\"fa fa-bomb\"></i></div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim\n                        eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam\n                        quaerat, magni commodi quisquam.\n                    </p>\n                </div>\n            </div>\n        </li>\n        <li class=\"timeline-inverted\">\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores\n                        sapiente, eligendi, nihil. Itaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem\n                        delectus libero, omnis ut debitis!\n                    </p>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"timeline-badge info\"><i class=\"fa fa-save\"></i></div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at\n                        est molestiae excepturi delectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit\n                        nulla qui! Laborum, atque.\n                    </p>\n                    <hr />\n                    <div class=\"btn-group\">\n                        <button class=\"btn btn-primary btn-sm dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\n                            <i class=\"fa fa-gear\"></i> <span class=\"caret\"></span>\n                        </button>\n                        <ul class=\"dropdown-menu\" role=\"menu\">\n                            <li><a href=\"#\">Action</a></li>\n                            <li><a href=\"#\">Another action</a></li>\n                            <li><a href=\"#\">Something else here</a></li>\n                            <li class=\"divider\"></li>\n                            <li><a href=\"#\">Separated link</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </li>\n        <li>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fuga odio quibusdam. Iure\n                        expedita, incidunt unde quis nam! Quod, quisquam. Officia quam qui adipisci quas consequuntur\n                        nostrum sequi. Consequuntur, commodi.\n                    </p>\n                </div>\n            </div>\n        </li>\n        <li class=\"timeline-inverted\">\n            <div class=\"timeline-badge success\"><i class=\"fa fa-graduation-cap\"></i></div>\n            <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati, quaerat tempore\n                        officia voluptas debitis consectetur culpa amet, accusamus dolorum fugiat, animi dicta aperiam,\n                        enim incidunt quisquam maxime neque eaque.\n                    </p>\n                </div>\n            </div>\n        </li>\n    </ul>\n</div>\n");

/***/ }),

/***/ 40588:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/dashboard/dashboard.component.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition]>\n    <h2 class=\"text-muted\">Dashboard <small>Statistics Overview</small></h2>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <ngb-carousel>\n                <ng-template *ngFor=\"let slider of sliders\" ngbSlide>\n                    <img\n                        [src]=\"slider.imagePath\"\n                        alt=\"Random first slide\"\n                        class=\"img-fluid mx-auto d-block\"\n                        width=\"100%\"\n                    />\n                    <div class=\"carousel-caption\">\n                        <h3>{{ slider.label }}</h3>\n                        <p>{{ slider.text }}</p>\n                    </div>\n                </ng-template>\n            </ngb-carousel>\n        </div>\n    </div>\n    <hr />\n    <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-6\">\n            <app-stat [bgClass]=\"'primary'\" [count]=\"26\" [icon]=\"'fa-comments'\" [label]=\"'New Comments!'\"></app-stat>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n            <app-stat [bgClass]=\"'warning'\" [count]=\"12\" [icon]=\"'fa-tasks'\" [label]=\"'New task!'\"></app-stat>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n            <app-stat\n                [bgClass]=\"'success'\"\n                [count]=\"124\"\n                [icon]=\"'fa-shopping-cart'\"\n                [label]=\"'New Orders!'\"\n            ></app-stat>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n            <app-stat [bgClass]=\"'danger'\" [count]=\"13\" [icon]=\"'fa-support'\" [label]=\"'New Tickets!'\"></app-stat>\n        </div>\n    </div>\n    <hr />\n    <ngb-alert (close)=\"closeAlert(alert)\" *ngFor=\"let alert of alerts\" [type]=\"alert.type\">{{\n        alert.message\n    }}</ngb-alert>\n    <hr />\n    <div class=\"row\">\n        <div class=\"col-lg-8\">\n            <div class=\"card card-default\">\n                <div class=\"card-header\"><i class=\"fa fa-clock-o fa-fw\"></i> Responsive Timeline</div>\n                <!-- /.card-header -->\n                <app-timeline></app-timeline>\n                <!-- /.card-body -->\n            </div>\n            <!-- /.card -->\n        </div>\n        <!-- /.col-lg-8 -->\n        <div class=\"col-lg-4\">\n            <div class=\"card card-default mb-3\">\n                <div class=\"card-header\"><i class=\"fa fa-bell fa-fw\"></i> Notifications card</div>\n                <!-- /.card-header -->\n                <app-notification></app-notification>\n                <!-- /.card-body -->\n            </div>\n            <!-- /.card -->\n\n            <app-chat></app-chat>\n            <!-- /.card .chat-card -->\n        </div>\n        <!-- /.col-lg-4 -->\n    </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layout_dashboard_dashboard_module_ts-es2015.js.map