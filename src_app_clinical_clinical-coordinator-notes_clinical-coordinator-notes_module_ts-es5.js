(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkElitePro"] = self["webpackChunkElitePro"] || []).push([["src_app_clinical_clinical-coordinator-notes_clinical-coordinator-notes_module_ts"], {
    /***/
    98160:
    /*!**************************************************************************************************!*\
      !*** ./src/app/clinical/clinical-coordinator-notes/clinical-coordinator-notes-routing.module.ts ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClinicalCoordinatorNotesRoutingModule": function ClinicalCoordinatorNotesRoutingModule() {
          return (
            /* binding */
            _ClinicalCoordinatorNotesRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _clinical_coordinator_notes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./clinical-coordinator-notes.component */
      83226);

      var routes = [{
        path: '',
        component: _clinical_coordinator_notes_component__WEBPACK_IMPORTED_MODULE_0__.ClinicalCoordinatorNotesComponent
      }];

      var _ClinicalCoordinatorNotesRoutingModule = function ClinicalCoordinatorNotesRoutingModule() {
        _classCallCheck(this, ClinicalCoordinatorNotesRoutingModule);
      };

      _ClinicalCoordinatorNotesRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ClinicalCoordinatorNotesRoutingModule);
      /***/
    },

    /***/
    83226:
    /*!*********************************************************************************************!*\
      !*** ./src/app/clinical/clinical-coordinator-notes/clinical-coordinator-notes.component.ts ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClinicalCoordinatorNotesComponent": function ClinicalCoordinatorNotesComponent() {
          return (
            /* binding */
            _ClinicalCoordinatorNotesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_clinical_coordinator_notes_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./clinical-coordinator-notes.component.html */
      17700);
      /* harmony import */


      var _clinical_coordinator_notes_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./clinical-coordinator-notes.component.css */
      65476);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _encounter_masters_encounter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../encounter/masters/encounter */
      25405);
      /* harmony import */


      var _encounter_services_encounter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../encounter/services/encounter.service */
      85992);
      /* harmony import */


      var _master_lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../master/lookup-module/services/lookup.service */
      41168);
      /* harmony import */


      var _patient_master_patient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../patient/master/patient */
      19975);
      /* harmony import */


      var _masters_clinical_coordinator_notes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./masters/clinical-coordinator-notes */
      22673);
      /* harmony import */


      var _services_clinical_coordinator_notes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./services/clinical-coordinator-notes.service */
      88669);
      /* harmony import */


      var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ckeditor/ckeditor5-build-classic */
      78556);
      /* harmony import */


      var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_8__);

      var _ClinicalCoordinatorNotesComponent = /*#__PURE__*/function () {
        function ClinicalCoordinatorNotesComponent(route, lookupService, fb, encounterService, ccNotesService, router) {
          _classCallCheck(this, ClinicalCoordinatorNotesComponent);

          this.route = route;
          this.lookupService = lookupService;
          this.fb = fb;
          this.encounterService = encounterService;
          this.ccNotesService = ccNotesService;
          this.router = router;
          this.lookupEntityList = new Array(); //name:"angular";

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

        _createClass(ClinicalCoordinatorNotesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //this.encounterId = this.route.snapshot.params['id'];
            this.encounter = JSON.parse(localStorage.getItem('encounter'));
            this.patient = this.encounter.appointment.patient;
            this.encounterId = this.encounter.encounterId;
            this.reloadData();
            this.reloadForm();
          }
        }, {
          key: "reloadData",
          value: function reloadData() {
            var _this = this;

            /*this.encounterService.getEncounterById(Number(this.encounterId)).subscribe(data => {
            this.encounter = data;
            
            })*/
            this.lookupService.getLookupEntityListByCategoryId(245).subscribe(function (data) {
              _this.lookupEntityList = data;
            });
            /*this.ccNotesService.getCcNotesByPatientId(this.patientId).subscribe(data => {
                this.ccNotesList = data;
                //console.log(this.ccNotesList)
            })*/
          }
        }, {
          key: "reloadForm",
          value: function reloadForm() {
            this.ccNotesForm = this.fb.group({
              notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null),
              type: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null)
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(ccNotesForm) {
            var _this2 = this;

            //  console.log( `Form submit, model: ${ JSON.stringify( this.model ) }` );
            this.createCcNotes = this.ccNotesForm.value;
            var note = this.ccNotesForm.value.notes;
            var filterNote = note.replace(/<[^>]+>/g, '');
            filterNote = filterNote.replace('&nbsp;', ' ');
            console.log(filterNote);
            console.log(filterNote); //var decodedStripedHtml = he.decode(filterNote);

            this.createCcNotes.notes = filterNote;
            this.createCcNotes.preRegId = null;
            console.log(this.ccNotesForm.value);
            this.createCcNotes.createdDate = this.createdDate;
            this.createCcNotes.patient = this.patient; //this.createCcNotes.notesId = null;
            //this.createCcNotes.createdDate = this.createdDate;

            this.createCcNotes.createdBy = null;
            this.ccNotesService.createClinicalCoordinatorNotes(this.createCcNotes).subscribe(function (data) {
              //this.ccNotesList =data;
              alert("Clinica-co-ordinator notes successfully inserted!!!!");
              console.log(_this2.ccNotesForm.value);
            });
          }
        }, {
          key: "showPatient",
          value: function showPatient(patient) {
            this.patient = patient;
          }
        }, {
          key: "gotoviewAllCcNotes",
          value: function gotoviewAllCcNotes(encounter) {
            var _this3 = this;

            this.ccNotesService.getClinicalCoordinatorNotesByPatientId(this.patient.mrn).subscribe(function (data) {
              _this3.ccNotesList = data;
              _this3.isNewCCNote = false;
              console.log("GetClinicalCoordinatorNotesByPatientId", data);
            });
          }
        }, {
          key: "goToNew",
          value: function goToNew() {
            this.isNewCCNote = true;
          }
        }]);

        return ClinicalCoordinatorNotesComponent;
      }();

      _ClinicalCoordinatorNotesComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
        }, {
          type: _master_lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__.LookupService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
        }, {
          type: _encounter_services_encounter_service__WEBPACK_IMPORTED_MODULE_3__.EncounterService
        }, {
          type: _services_clinical_coordinator_notes_service__WEBPACK_IMPORTED_MODULE_7__.ClinicalCoordinatorNotesService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }];
      };

      _ClinicalCoordinatorNotesComponent.propDecorators = {
        isAllergyRecordingWithPatientControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
        }],
        patientList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Output
        }],
        patient: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Output
        }]
      };
      _ClinicalCoordinatorNotesComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-clinical-coordinator-notes',
        template: _raw_loader_clinical_coordinator_notes_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_clinical_coordinator_notes_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ClinicalCoordinatorNotesComponent);
      /***/
    },

    /***/
    9122:
    /*!******************************************************************************************!*\
      !*** ./src/app/clinical/clinical-coordinator-notes/clinical-coordinator-notes.module.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClinicalCoordinatorNotesModule": function ClinicalCoordinatorNotesModule() {
          return (
            /* binding */
            _ClinicalCoordinatorNotesModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _clinical_coordinator_notes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./clinical-coordinator-notes-routing.module */
      98160);
      /* harmony import */


      var _clinical_coordinator_notes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./clinical-coordinator-notes.component */
      83226);
      /* harmony import */


      var _patient_control_patient_control_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../patient-control/patient-control.module */
      49870);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ckeditor/ckeditor5-angular */
      22723);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared */
      51679);
      /* harmony import */


      var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../material/material.module */
      90898);

      var _ClinicalCoordinatorNotesModule = function ClinicalCoordinatorNotesModule() {
        _classCallCheck(this, ClinicalCoordinatorNotesModule);
      };

      _ClinicalCoordinatorNotesModule = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_clinical_coordinator_notes_component__WEBPACK_IMPORTED_MODULE_1__.ClinicalCoordinatorNotesComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _clinical_coordinator_notes_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClinicalCoordinatorNotesRoutingModule, _patient_control_patient_control_module__WEBPACK_IMPORTED_MODULE_2__.PatientControlModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__.CKEditorModule, _shared__WEBPACK_IMPORTED_MODULE_3__.PageHeaderModule, _material_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule]
      })], _ClinicalCoordinatorNotesModule);
      /***/
    },

    /***/
    22673:
    /*!*******************************************************************************************!*\
      !*** ./src/app/clinical/clinical-coordinator-notes/masters/clinical-coordinator-notes.ts ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClinicalCoordinatorNotes": function ClinicalCoordinatorNotes() {
          return (
            /* binding */
            _ClinicalCoordinatorNotes
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../master/lookup-module/masters/lookup-entity */
      11697);
      /* harmony import */


      var _master_masters_base_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../master/masters/base-entity */
      28685);
      /* harmony import */


      var _patient_master_patient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../patient/master/patient */
      19975);
      /* harmony import */


      var _pre_register_patient_masters_pre_register_patient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../pre-register-patient/masters/pre-register-patient */
      19976);

      var _ClinicalCoordinatorNotes = /*#__PURE__*/function (_master_masters_base_) {
        _inherits(_ClinicalCoordinatorNotes, _master_masters_base_);

        var _super = _createSuper(_ClinicalCoordinatorNotes);

        function _ClinicalCoordinatorNotes() {
          var _this4;

          _classCallCheck(this, _ClinicalCoordinatorNotes);

          _this4 = _super.apply(this, arguments);
          _this4.preRegId = new _pre_register_patient_masters_pre_register_patient__WEBPACK_IMPORTED_MODULE_3__.PreRegisterPatient();
          _this4.type = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
          _this4.patient = new _patient_master_patient__WEBPACK_IMPORTED_MODULE_2__.Patient();
          return _this4;
        }

        return _ClinicalCoordinatorNotes;
      }(_master_masters_base_entity__WEBPACK_IMPORTED_MODULE_1__.BaseEntity);
      /***/

    },

    /***/
    88669:
    /*!****************************************************************************************************!*\
      !*** ./src/app/clinical/clinical-coordinator-notes/services/clinical-coordinator-notes.service.ts ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClinicalCoordinatorNotesService": function ClinicalCoordinatorNotesService() {
          return (
            /* binding */
            _ClinicalCoordinatorNotesService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../main.service */
      29118);

      var _ClinicalCoordinatorNotesService = /*#__PURE__*/function () {
        function ClinicalCoordinatorNotesService(http, mainService) {
          _classCallCheck(this, ClinicalCoordinatorNotesService);

          this.http = http;
          this.mainService = mainService;
          this.baseUrl = "";
          this.patient = null;
          this.baseUrl = this.mainService.getBaseUrl();
        }

        _createClass(ClinicalCoordinatorNotesService, [{
          key: "getPatient",
          value: function getPatient() {
            return this.patient;
          }
        }, {
          key: "setPatient",
          value: function setPatient(patient) {
            this.patient = patient;
          }
        }, {
          key: "getClinicalCoordinatorNotesList",
          value: function getClinicalCoordinatorNotesList() {
            return this.http.get("".concat(this.baseUrl, "/clinicalCoordinatorNotes/get"));
          }
        }, {
          key: "getClinicalCoordinatorNotesByPatientId",
          value: function getClinicalCoordinatorNotesByPatientId(patientId) {
            return this.http.get("".concat(this.baseUrl, "/clinicalCoordinatorNotes/getByPatientId/").concat(patientId));
          }
        }, {
          key: "createClinicalCoordinatorNotes",
          value: function createClinicalCoordinatorNotes(ccNotes) {
            return this.http.post("".concat(this.baseUrl, "/clinicalCoordinatorNotes/add"), ccNotes);
          }
        }, {
          key: "updateClinicalCoordinatorNotes",
          value: function updateClinicalCoordinatorNotes(ccNotes) {
            return this.http.post("".concat(this.baseUrl, "/clinicalCoordinatorNotes/update"), ccNotes);
          }
        }]);

        return ClinicalCoordinatorNotesService;
      }();

      _ClinicalCoordinatorNotesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }, {
          type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService
        }];
      };

      _ClinicalCoordinatorNotesService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _ClinicalCoordinatorNotesService);
      /***/
    },

    /***/
    65476:
    /*!**********************************************************************************************!*\
      !*** ./src/app/clinical/clinical-coordinator-notes/clinical-coordinator-notes.component.css ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGluaWNhbC1jb29yZGluYXRvci1ub3Rlcy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    17700:
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clinical/clinical-coordinator-notes/clinical-coordinator-notes.component.html ***!
      \*************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div class=\"card\" >\n\t<div class=\"bg-info\">\n\t\t<app-patient-control (patientDetails)=\"showPatient($event)\"\n\t\t\t[patient]=\"patient\"></app-patient-control>\n\t</div>\n\t<form [formGroup]=\"ccNotesForm\">\n\t\t<div class=\"card-head\">\n\t\t\t<nav class=\"navbar navbar-dark bg-dark text-white justify-content-center\"><h3>Clinical\n\t\t\t\tCo-ordinator Notes</h3>\n\t\t\t\t<button class=\"btn-sm btn-danger ml-auto mr-1\"\n\t\t\t\t\t(id)=\"encounter.encounterId\"\n\t\t\t\t\t(click)=\"gotoviewAllCcNotes(encounter)\" *ngIf=\"isNewCCNote\">view all</button>\n\t\t\t\t<button class=\"btn-sm btn-danger ml-auto mr-1\"\n\t\t\t\t\t(id)=\"encounter.encounterId\"\n\t\t\t\t\t(click)=\"goToNew()\" *ngIf=\"!isNewCCNote\">New</button>\t\n\t\t\t</nav>\n\t\t</div>\n\t\t<div class=\"card-body\" *ngIf=\"isNewCCNote\">\n\t\t\t\n\t\t\t<mat-form-field appearance=\"fill\" class = \"col-md-2 p-0 m-0\">\n\t\t\t\t<mat-label for=\"name\">Notes Type :</mat-label>\n\t\t\t\t<mat-select  \n\t\t\t\t\tformControlName=\"type\"  name=\"name\" id=\"name\">\n\t\t\t\t\t<mat-option [value]=null>--Select--</mat-option>\n\t\t\t\t\t<mat-option *ngFor=\"let look of lookupEntityList\" [value]=\"look\" >{{look.lookupValue}}</mat-option>\n\t\t\t\t</mat-select>\n\t\t\t</mat-form-field>\n\t\t\t\n\t\t\t<div class = \"row\">\n\t\t\t\t<label class = \"col-md-2\" for=\"description\">Description :</label>\n\t\t\t</div>\n\t\t\t<ckeditor #editor [editor]=\"Editor\" id=\"description\"\n\t\t\t\tformControlName=\"notes\" name=\"description\" type=\"divarea\">\n\t\t\t</ckeditor>\n\t\t\t<button type=\"submit\" class=\"mt-1 mb-1 float-right btn btn-success\"\n\t\t\t\t(click)=\"onSubmit(ccNotesForm)\">Add Note</button>\n\t\t</div>\n\t</form>\n</div>\n<div class=\"card\" *ngIf=\"!isNewCCNote\">\n\n\t<table class=\"table table-sm\">\n\t\t<thead class=\"thead bg-secondary\">\n\t\t\t<tr class=\"table-bordered\">\n\t\t\t\t<th>SL No.</th>\n\t\t\t\t<th>Notes</th>\n\t\t\t\t<th>Type</th>\n\t\t\t\t<th>Created By</th>\n\t\t\t\t<th>Created Date</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let note of ccNotesList\">\n\t\t\t\t<td>{{note.notesId}}</td>\n\t\t\t\t<td>{{note.notes}}</td>\n\t\t\t\t<td>{{note.type.lookupValue}}</td>\n\t\t\t\t<td>{{note.createdBy}}</td>\n\t\t\t\t<td>{{note.createdDate | date:'dd/MM/yyyy'}}</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_clinical_clinical-coordinator-notes_clinical-coordinator-notes_module_ts-es5.js.map