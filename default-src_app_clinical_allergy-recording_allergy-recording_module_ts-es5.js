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

  (self["webpackChunkElitePro"] = self["webpackChunkElitePro"] || []).push([["default-src_app_clinical_allergy-recording_allergy-recording_module_ts"], {
    /***/
    32651:
    /*!********************************************************************************!*\
      !*** ./src/app/clinical/allergy-recording/allergy-recording-routing.module.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AllergyRecordingRoutingModule": function AllergyRecordingRoutingModule() {
          return (
            /* binding */
            _AllergyRecordingRoutingModule
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


      var _allergy_recording_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./allergy-recording.component */
      58273);

      var routes = [{
        path: '',
        component: _allergy_recording_component__WEBPACK_IMPORTED_MODULE_0__.AllergyRecordingComponent
      }];

      var _AllergyRecordingRoutingModule = function AllergyRecordingRoutingModule() {
        _classCallCheck(this, AllergyRecordingRoutingModule);
      };

      _AllergyRecordingRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AllergyRecordingRoutingModule);
      /***/
    },

    /***/
    58273:
    /*!***************************************************************************!*\
      !*** ./src/app/clinical/allergy-recording/allergy-recording.component.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AllergyRecordingComponent": function AllergyRecordingComponent() {
          return (
            /* binding */
            _AllergyRecordingComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_allergy_recording_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./allergy-recording.component.html */
      26584);
      /* harmony import */


      var _allergy_recording_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./allergy-recording.component.css */
      3930);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! rxjs/operators */
      39761);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var _encounter_masters_encounter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../encounter/masters/encounter */
      25405);
      /* harmony import */


      var _encounter_services_encounter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../encounter/services/encounter.service */
      85992);
      /* harmony import */


      var _master_lookup_module_masters_lookup_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../master/lookup-module/masters/lookup-category */
      23529);
      /* harmony import */


      var _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../master/lookup-module/masters/lookup-entity */
      11697);
      /* harmony import */


      var _master_lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../master/lookup-module/services/lookup.service */
      41168);
      /* harmony import */


      var _patient_master_patient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../patient/master/patient */
      19975);
      /* harmony import */


      var _masters_allergy_reaction_mapping__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./masters/allergy-reaction-mapping */
      84218);
      /* harmony import */


      var _masters_allergy_Recording__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./masters/allergy-Recording */
      97983);
      /* harmony import */


      var _masters_reaction_mapping__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./masters/reaction-mapping */
      89403);
      /* harmony import */


      var _masters_reaction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./masters/reaction */
      29054);
      /* harmony import */


      var _services_allergy_reaction_mapping_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./services/allergy-reaction-mapping.service */
      54888);
      /* harmony import */


      var _services_allergy_recording_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./services/allergy-recording.service */
      38453);
      /* harmony import */


      var _services_reaction_mapping_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./services/reaction-mapping.service */
      87980);
      /* harmony import */


      var _router_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../router.animations */
      74903);

      var _AllergyRecordingComponent = /*#__PURE__*/function () {
        function AllergyRecordingComponent(encounterService, route, lookupService, fb, allergyRecordingService, reactionMappingService, allergyReactionMappingService, datePipe) {
          _classCallCheck(this, AllergyRecordingComponent);

          this.encounterService = encounterService;
          this.route = route;
          this.lookupService = lookupService;
          this.fb = fb;
          this.allergyRecordingService = allergyRecordingService;
          this.reactionMappingService = reactionMappingService;
          this.allergyReactionMappingService = allergyReactionMappingService;
          this.datePipe = datePipe;
          this.encounter = new _encounter_masters_encounter__WEBPACK_IMPORTED_MODULE_2__.Encounter();
          this.isAllergyRecordingWithPatientControl = true;
          this.patient = new _patient_master_patient__WEBPACK_IMPORTED_MODULE_7__.Patient();
          this.isAllergyRecordingFound = true;
          this.lookupEntityList = new Array();
          this.allergyRecordingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroup({});
          this.addAllergyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroup({});
          this.reactionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroup({});
          this.allergyType = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_5__.LookupEntity();
          this.onSet = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_5__.LookupEntity();
          this.onSetType = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_5__.LookupEntity();
          this.onSetDate = new Date();
          this.allergyStatus = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_5__.LookupEntity();
          this.resolvedDate = new Date();
          this.allergyRecordingList = new Array();
          this.createAllergyRecording = new _masters_allergy_Recording__WEBPACK_IMPORTED_MODULE_9__.AllergyRecording();
          this.reactionList = [];
          this.reaction = new _masters_reaction__WEBPACK_IMPORTED_MODULE_11__.Reaction();
          this.reactionMapList = [];
          this.reactionMappingList = [];
          this.createAllergyReactionMapping = new _masters_allergy_reaction_mapping__WEBPACK_IMPORTED_MODULE_8__.AllergyReactionMapping();
          this.allergyRecording = new _masters_allergy_Recording__WEBPACK_IMPORTED_MODULE_9__.AllergyRecording();
          this.allergyRecordingListByPatientId = new Array();
          this.isEnvironmental = false;
          this.isFood = false;
          this.isNonFormulaDrug = false;
          this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl();
          this.allergyList = [];
          this.lookupCategoryList = [];
          this.category = new _master_lookup_module_masters_lookup_category__WEBPACK_IMPORTED_MODULE_4__.LookupCategory();
          this.createLookupEntity = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_5__.LookupEntity();
          this.updatedAllergyRecording = new _masters_allergy_Recording__WEBPACK_IMPORTED_MODULE_9__.AllergyRecording();
          this.allergyRecordingFound = false;
          this.allergyRecordingForUpdate = new _masters_allergy_Recording__WEBPACK_IMPORTED_MODULE_9__.AllergyRecording();
          this.reactionMappingListForUpdate = [];
          this.ifFromClinicalDetail = false;
        }

        _createClass(AllergyRecordingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            //console.log(this.myControl.value)
            this.filteredOptions = this.myControl.valueChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.startWith)(''), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(function (value) {
              return _this._filter(value);
            }));

            if (localStorage.getItem('encounter') != null) {
              this.encounter = JSON.parse(localStorage.getItem('encounter'));
            }

            this.encounterId = this.encounter.encounterId;
            this.reloadData();
            this.reloadForm(); //console.log(this.lookupEntityList)
            //console.error("hii",this.encounter.encounterId)
          }
        }, {
          key: "_filter",
          value: function _filter(value) {
            var filterValue = value.toLowerCase();
            return this.allergyList.filter(function (option) {
              return option.lookupValue.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "reloadData",
          value: function reloadData() {
            var _this2 = this;

            this.lookupService.getLookupCategoryList().subscribe(function (data) {
              //	console.log(data, 'this is categoryList');
              _this2.lookupCategoryList = data;
            });
            this.encounterService.getEncounterById(this.encounterId).subscribe(function (data) {
              _this2.encounter = data;
              _this2.patient = _this2.encounter.appointment.patient; //console.log(this.patient)

              _this2.allergyRecordingService.getAllergyRecordingByPatientId(_this2.patient.mrn).subscribe(function (data) {
                _this2.allergyRecordingListByPatientId = data;
                console.log(_this2.allergyRecordingListByPatientId);
              });
            }), this.lookupService.getAllLookupEntities().subscribe(function (data) {
              _this2.lookupEntityList = data; //console.log(this.lookupEntityList, "this is lookupEntityList")
            }), this.allergyRecordingService.getAllergyRecording().subscribe(function (data) {
              _this2.allergyRecordingList = data;
              _this2.allergyRecording = data; //console.log(this.allergyRecordingList)
            }), this.allergyRecordingService.getReactionList().subscribe(function (data) {
              _this2.reactionList = data;
            });
          }
        }, {
          key: "loadForm",
          value: function loadForm() {
            this.reloadForm();
          }
        }, {
          key: "reloadForm",
          value: function reloadForm() {
            this.allergyRecordingForm = this.fb.group({
              allergyId: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
              allergyType: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
              allergicTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
              onSet: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
              onSetType: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
              onSetDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
              allergyStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
              resolvedDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
              currentRemarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null)
            }), this.addAllergyForm = this.fb.group({
              lookupId: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
              lookupValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
              category: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
              description: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
              active: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null)
            });
            this.reactionForm = this.fb.group({});
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

            //console.log(this.reactionMapList)
            this.saveReactions();
            setTimeout(function () {
              _this3.storeAllergyRecording(_this3.reactionMappingList);
            }, 1000); //this.gotoStoreAllergyRecording();
          }
        }, {
          key: "saveReactions",
          value: function saveReactions() {
            var _this4 = this;

            this.reactionMappingList = [];
            this.reactionMapList.forEach(function (reaction) {
              var reactionMap = new _masters_reaction_mapping__WEBPACK_IMPORTED_MODULE_10__.ReactionMapping();
              reactionMap.reaction = reaction;
              reactionMap.encounter = _this4.encounter;
              console.log(reaction);

              _this4.reactionMappingService.createReactionMapping(reactionMap).subscribe(function (data) {
                //console.log(data);
                _this4.reactionMappingList.push(data); //alert("Data inserted Successfully")

              });
            });
            /*this.allergyReactionMappingService.createAllergyReactionMapping().subscribe(data =>{
                this.allergyReactionMappingList = data;
            
            })*/
          }
        }, {
          key: "storeAllergyRecording",
          value: function storeAllergyRecording(reactionMappingList) {
            //console.log(reactionMappingList)
            //console.log(this.allergyRecordingForm.value)

            /*this.createAllergyRecording = allergyRecordingForm.value;
            this.createAllergyRecording.allergyType= this.allergyType;
            this.createAllergyRecording.allergicTo = this.allergicTo;
            this.createAllergyRecording.onSet = this.onSet;
            this.createAllergyRecording.onSetType = this.onSetType;
            this.createAllergyRecording.onSetDate = this.onSetDate;
            this.createAllergyRecording.allergyStatus = this.allergyStatus;
            this.createAllergyRecording.resolvedDate = this.resolvedDate;*/
            //console.log(this.reactionMappingList,"This is reactionMapping List Before");
            this.createAllergyRecording = this.allergyRecordingForm.value;
            this.createAllergyRecording.reaction = this.reactionMappingList;
            this.createAllergyRecording.encounterId = this.encounter;
            this.createAllergyRecording.visitId = this.encounter.visit;
            this.createAllergyRecording.patientId = this.patient; //console.log(this.reactionMappingList,"This is reactionMapping List After");
            //console.log(this.createAllergyRecording)

            this.saveAllergyRecording();
          }
        }, {
          key: "saveAllergyRecording",
          value: function saveAllergyRecording() {
            var _this5 = this;

            this.allergyRecordingService.CreateAllergyRecording(this.createAllergyRecording).subscribe(function (data) {
              //	console.log(data);
              alert("Allergy-Recording saved successfully");

              _this5.allergyRecordingForm.reset();

              _this5.reactionForm.reset();

              _this5.reactionMapList = [];

              _this5.reloadData();
            });
          }
        }, {
          key: "addReaction",
          value: function addReaction(value, reaction) {
            //console.log(value)
            //console.log(reaction)
            if (value == true) {
              var count = 0;
              this.reactionMapList.forEach(function (data) {
                if (data.reactionId == reaction.reactionId) {
                  count += 1;
                }
              });

              if (count == 1) {
                console.log("Reaction is present", this.reactionMapList);
              } else if (count == 0) {
                this.reactionMapList.push(reaction);
              }
            } else {
              var _count = 0;
              this.reactionMapList.forEach(function (data) {
                if (data.reactionId == reaction.reactionId) {
                  _count += 1;
                }
              });

              if (_count == 1) {
                var pos = this.reactionMapList.findIndex(function (a) {
                  return a.reactionId === reaction.reactionId;
                }); //console.log()

                this.reactionMapList.splice(pos, 1); //console.log(this.reactionMapList)
              }
            }
          }
        }, {
          key: "addAllergy",
          value: function addAllergy() {
            this.showModal = true; //console.log(this.myControl.value)
            // Show-Hide Modal Check
            //this.content = "This is content!!"; // Dynamic Data
            //this.title = "This is title!!";    // Dynamic Data
          } //Bootstrap Modal Close event

        }, {
          key: "hide",
          value: function hide() {
            this.showModal = false;
          }
        }, {
          key: "getAllergyList",
          value: function getAllergyList(lookupCategory) {
            var _this6 = this;

            //console.log(lookupCategory)
            if (lookupCategory != null) {
              this.lookupService.getLookupEntityListByCategoryId(lookupCategory.categoryId).subscribe(function (data) {
                //console.log(data);
                _this6.allergyList = data;
              });
            }
          }
        }, {
          key: "saveAllergyTypes",
          value: function saveAllergyTypes(option) {
            //console.log(option)
            this.allergyRecordingForm.controls.allergicTo.setValue(option); //console.log(this.allergyRecordingForm.value.allergicTo)
          }
        }, {
          key: "onAdd",
          value: function onAdd(addAllergyForm) {
            this.createLookupEntity.createdBy = null;
            this.createLookupEntity.createdDate = new Date();
            this.createLookupEntity.versionNo = 0;
            this.createLookupEntity.orderBy = null;
            this.createLookupEntity.updatedBy = null;
            this.createLookupEntity.updatedDate = new Date(); //console.log(this.addAllergyForm.value);

            this.createLookupEntity = this.addAllergyForm.value;
            this.lookupService.createLookupEntity(this.createLookupEntity).subscribe(function (data) {
              //console.log(this.lookupEntityList, "this is a new allergy")
              alert('Allergy added successfully');
            });
            this.addAllergyForm.reset();
          }
        }, {
          key: "gotoEditAR",
          value: function gotoEditAR(allergyRecording) {
            var _this7 = this;

            this.allergyRecordingFound = true;
            var onSetDate = this.datePipe.transform(allergyRecording.onSetDate, 'yyyy-MM-dd');
            var resolvedDate = this.datePipe.transform(allergyRecording.resolvedDate, 'yyyy-MM-dd'); //sf: DateFormat = new DateFormat(); 

            this.allergyRecordingForm.patchValue(allergyRecording);
            this.allergyRecordingForUpdate = allergyRecording;
            this.reactionMappingList = allergyRecording.reaction;
            this.myControl.setValue(allergyRecording.allergicTo.lookupValue);
            this.reactionMapList = []; //console.log("This is reactionMapping List",this.reactionMappingList,this.reactionMapList)

            this.reactionMappingList.forEach(function (data) {
              _this7.reactionMapList.push(data.reaction);
            });
            this.allergyRecordingForm.controls.onSetDate.setValue(onSetDate);
            this.allergyRecordingForm.controls.resolvedDate.setValue(resolvedDate);
            this.reactionForm.reset; //this.allergyRecordingForm.controls.allergicTo.setValue(allergyRecording.lookupValue);
          }
        }, {
          key: "compareAllergyType",
          value: function compareAllergyType(allergy1, allergy2) {
            return allergy1 && allergy2 ? allergy1.categoryId === allergy2.categoryId : allergy1 === allergy2; //return t1 && t2 ? t1.techId === t2.techId : t1 === t2;
            //console.log(allergy1.categoryId + '-' + allergy2.categoryId);
          }
        }, {
          key: "compareOnSet",
          value: function compareOnSet(onSet1, onSet2) {
            return onSet1 && onSet2 ? onSet1.lookupId === onSet2.lookupId : onSet1 === onSet2;
          }
        }, {
          key: "compareOnsetType",
          value: function compareOnsetType(onSetType1, onSetType2) {
            return onSetType1 && onSetType2 ? onSetType1.lookupId === onSetType2.lookupId : onSetType1 === onSetType2;
          }
        }, {
          key: "compareAllergyStatus",
          value: function compareAllergyStatus(allergyStatus1, allergyStatus2) {
            return allergyStatus1 && allergyStatus2 ? allergyStatus1.lookupId === allergyStatus2.lookupId : allergyStatus1 === allergyStatus2;
          }
        }, {
          key: "updateAllergyRecording",
          value: function updateAllergyRecording(allergyRecordingForm, reactionForm) {
            var _this8 = this;

            //this.saveReactions();
            this.reactionMappingListForUpdate = [];
            this.reactionMapList.forEach(function (data) {
              var reaction = new _masters_reaction_mapping__WEBPACK_IMPORTED_MODULE_10__.ReactionMapping();
              reaction.reaction = data;
              reaction.encounter = _this8.encounter;

              _this8.reactionMappingList.forEach(function (value) {
                if (data.reactionId === value.reaction.reactionId) {
                  reaction = value;
                }
              });

              _this8.reactionMappingService.createReactionMapping(reaction).subscribe(function (data) {
                //console.log(data);
                _this8.reactionMappingListForUpdate.push(data); //alert("Data inserted Successfully")

              });
            });
            this.allergyRecordingForUpdate.allergyType = this.allergyRecordingForm.value.allergyType;
            this.allergyRecordingForUpdate.allergicTo = this.allergyRecordingForm.value.allergicTo;
            this.allergyRecordingForUpdate.onSet = this.allergyRecordingForm.value.onSet;
            this.allergyRecordingForUpdate.onSetType = this.allergyRecordingForm.value.onSetType;
            this.allergyRecordingForUpdate.onSetDate = this.allergyRecordingForm.value.onSetDate;
            this.allergyRecordingForUpdate.allergyStatus = this.allergyRecordingForm.value.allergyStatus;
            this.allergyRecordingForUpdate.resolvedDate = this.allergyRecordingForm.value.resolvedDate;
            this.allergyRecordingForUpdate.currentRemarks = this.allergyRecordingForm.value.currentRemarks;
            this.allergyRecordingForUpdate.reaction = this.reactionMappingListForUpdate;
            this.allergyRecordingForm.reset();
            console.log(this.allergyRecordingForUpdate);
            setTimeout(function () {
              _this8.allergyRecordingService.updateAllergyRecording(_this8.allergyRecordingForUpdate).subscribe(function (data) {
                alert("allergyRecording updated");
                _this8.allergyRecordingFound = false;
                _this8.reactionMapList = [];
                console.log(data);
              });
            }, 3000);
          }
        }, {
          key: "checkReaction",
          value: function checkReaction(reaction) {
            var res = false; //console.log("Reaction Updation is called")
            //console.log(this.reactionMapList)

            this.reactionMapList.forEach(function (data) {
              // console.log(data.reactionId,reaction.reactionId)
              if (data.reactionId == reaction.reactionId) {
                res = true;
              }
            });
            return res;
          }
        }, {
          key: "back",
          value: function back() {
            history.back();
          }
        }, {
          key: "callPatientDetails",
          value: function callPatientDetails(event) {
            this.patient = event;
            console.log(event);
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.allergyRecordingFound = false;
            this.reactionMapList = [];
            this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl();
            this.allergyRecordingForm.reset();
          }
        }]);

        return AllergyRecordingComponent;
      }();

      _AllergyRecordingComponent.ctorParameters = function () {
        return [{
          type: _encounter_services_encounter_service__WEBPACK_IMPORTED_MODULE_3__.EncounterService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute
        }, {
          type: _master_lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__.LookupService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder
        }, {
          type: _services_allergy_recording_service__WEBPACK_IMPORTED_MODULE_13__.AllergyRecordingService
        }, {
          type: _services_reaction_mapping_service__WEBPACK_IMPORTED_MODULE_14__.ReactionMappingService
        }, {
          type: _services_allergy_reaction_mapping_service__WEBPACK_IMPORTED_MODULE_12__.AllergyReactionMappingService
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe
        }];
      };

      _AllergyRecordingComponent.propDecorators = {
        isAllergyRecordingWithPatientControl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.Input
        }],
        patientList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.Output
        }],
        patient: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.Output
        }],
        ifFromClinicalDetail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.Input
        }]
      };
      _AllergyRecordingComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_21__.Component)({
        selector: 'app-allergy-recording',
        template: _raw_loader_allergy_recording_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _router_animations__WEBPACK_IMPORTED_MODULE_15__.routerTransition)()],
        styles: [_allergy_recording_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AllergyRecordingComponent);
      /***/
    },

    /***/
    82488:
    /*!************************************************************************!*\
      !*** ./src/app/clinical/allergy-recording/allergy-recording.module.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AllergyRecordingModule": function AllergyRecordingModule() {
          return (
            /* binding */
            _AllergyRecordingModule
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


      var _allergy_recording_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./allergy-recording-routing.module */
      32651);
      /* harmony import */


      var _allergy_recording_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./allergy-recording.component */
      58273);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared */
      51679);
      /* harmony import */


      var _patient_control_patient_control_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../patient-control/patient-control.module */
      49870);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../material/material.module */
      90898);

      var _AllergyRecordingModule = function AllergyRecordingModule() {
        _classCallCheck(this, AllergyRecordingModule);
      };

      _AllergyRecordingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_allergy_recording_component__WEBPACK_IMPORTED_MODULE_1__.AllergyRecordingComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _allergy_recording_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllergyRecordingRoutingModule, _shared__WEBPACK_IMPORTED_MODULE_2__.PageHeaderModule, _patient_control_patient_control_module__WEBPACK_IMPORTED_MODULE_3__.PatientControlModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _material_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule],
        exports: [_allergy_recording_component__WEBPACK_IMPORTED_MODULE_1__.AllergyRecordingComponent]
      })], _AllergyRecordingModule);
      /***/
    },

    /***/
    97983:
    /*!*************************************************************************!*\
      !*** ./src/app/clinical/allergy-recording/masters/allergy-Recording.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AllergyRecording": function AllergyRecording() {
          return (
            /* binding */
            _AllergyRecording
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _patient_master_patient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../patient/master/patient */
      19975);
      /* harmony import */


      var _encounter_masters_encounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../encounter/masters/encounter */
      25405);
      /* harmony import */


      var _encounter_masters_visit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../encounter/masters/visit */
      34494);
      /* harmony import */


      var _master_lookup_module_masters_lookup_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../master/lookup-module/masters/lookup-category */
      23529);
      /* harmony import */


      var _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../master/lookup-module/masters/lookup-entity */
      11697);

      var _AllergyRecording = function _AllergyRecording() {
        _classCallCheck(this, _AllergyRecording);

        this.allergyType = new _master_lookup_module_masters_lookup_category__WEBPACK_IMPORTED_MODULE_3__.LookupCategory();
        this.allergicTo = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_4__.LookupEntity();
        this.onSet = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_4__.LookupEntity();
        this.onSetType = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_4__.LookupEntity();
        this.allergyStatus = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_4__.LookupEntity();
        this.visitId = new _encounter_masters_visit__WEBPACK_IMPORTED_MODULE_2__.Visit();
        this.encounterId = new _encounter_masters_encounter__WEBPACK_IMPORTED_MODULE_1__.Encounter(); //patient: Patient = new Patient;

        this.reaction = new Array();
        this.patientId = new _patient_master_patient__WEBPACK_IMPORTED_MODULE_0__.Patient();
      };
      /***/

    },

    /***/
    84218:
    /*!********************************************************************************!*\
      !*** ./src/app/clinical/allergy-recording/masters/allergy-reaction-mapping.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AllergyReactionMapping": function AllergyReactionMapping() {
          return (
            /* binding */
            _AllergyReactionMapping
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _allergy_Recording__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./allergy-Recording */
      97983);
      /* harmony import */


      var _reaction_mapping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./reaction-mapping */
      89403);

      var _AllergyReactionMapping = function _AllergyReactionMapping() {
        _classCallCheck(this, _AllergyReactionMapping);

        this.reactionMappingId = new _reaction_mapping__WEBPACK_IMPORTED_MODULE_1__.ReactionMapping();
        this.allergyId = new _allergy_Recording__WEBPACK_IMPORTED_MODULE_0__.AllergyRecording();
      };
      /***/

    },

    /***/
    89403:
    /*!************************************************************************!*\
      !*** ./src/app/clinical/allergy-recording/masters/reaction-mapping.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReactionMapping": function ReactionMapping() {
          return (
            /* binding */
            _ReactionMapping
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _encounter_masters_encounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../encounter/masters/encounter */
      25405);
      /* harmony import */


      var _reaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./reaction */
      29054);

      var _ReactionMapping = function _ReactionMapping() {
        _classCallCheck(this, _ReactionMapping);

        this.reaction = new _reaction__WEBPACK_IMPORTED_MODULE_1__.Reaction();
        this.encounter = new _encounter_masters_encounter__WEBPACK_IMPORTED_MODULE_0__.Encounter();
      };
      /***/

    },

    /***/
    29054:
    /*!****************************************************************!*\
      !*** ./src/app/clinical/allergy-recording/masters/reaction.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Reaction": function Reaction() {
          return (
            /* binding */
            _Reaction
          );
        }
        /* harmony export */

      });

      var _Reaction = function _Reaction() {
        _classCallCheck(this, _Reaction);
      };
      /***/

    },

    /***/
    54888:
    /*!*****************************************************************************************!*\
      !*** ./src/app/clinical/allergy-recording/services/allergy-reaction-mapping.service.ts ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AllergyReactionMappingService": function AllergyReactionMappingService() {
          return (
            /* binding */
            _AllergyReactionMappingService
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

      var _AllergyReactionMappingService = /*#__PURE__*/function () {
        function AllergyReactionMappingService(http, mainService) {
          _classCallCheck(this, AllergyReactionMappingService);

          this.http = http;
          this.mainService = mainService;
          this.baseUrl = '';
          this.baseUrl = this.mainService.getBaseUrl();
        }

        _createClass(AllergyReactionMappingService, [{
          key: "createAllergyReactionMapping",
          value: function createAllergyReactionMapping() {
            return this.http.get("".concat(this.baseUrl, "/allergyReactionMapping"));
          }
        }]);

        return AllergyReactionMappingService;
      }();

      _AllergyReactionMappingService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }, {
          type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService
        }];
      };

      _AllergyReactionMappingService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _AllergyReactionMappingService);
      /***/
    },

    /***/
    38453:
    /*!**********************************************************************************!*\
      !*** ./src/app/clinical/allergy-recording/services/allergy-recording.service.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AllergyRecordingService": function AllergyRecordingService() {
          return (
            /* binding */
            _AllergyRecordingService
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

      var _AllergyRecordingService = /*#__PURE__*/function () {
        function AllergyRecordingService(http, mainService) {
          _classCallCheck(this, AllergyRecordingService);

          this.http = http;
          this.mainService = mainService;
          this.baseUrl = '';
          this.baseUrl = this.mainService.getBaseUrl();
        }

        _createClass(AllergyRecordingService, [{
          key: "getAllergyRecording",
          value: function getAllergyRecording() {
            return this.http.get("".concat(this.baseUrl, "/allergyRecording/get"));
          }
        }, {
          key: "getAllergyRecordingById",
          value: function getAllergyRecordingById(allergyId) {
            return this.http.get("".concat(this.baseUrl, "/allergyRecording/getById/").concat(allergyId));
          }
        }, {
          key: "CreateAllergyRecording",
          value: function CreateAllergyRecording(allergyRecording) {
            return this.http.post("".concat(this.baseUrl, "/allergyRecording/add"), allergyRecording);
          }
        }, {
          key: "getReactionList",
          value: function getReactionList() {
            return this.http.get("".concat(this.baseUrl, "/reactions/get"));
          }
        }, {
          key: "getAllergyRecordingByPatientId",
          value: function getAllergyRecordingByPatientId(patientId) {
            return this.http.get("".concat(this.baseUrl, "/allergyRecording/getByPatientId/").concat(patientId));
          }
        }, {
          key: "createLookupentity",
          value: function createLookupentity(lookupEntity) {
            return this.http.post("".concat(this.baseUrl, "/lookupEntity/add"), lookupEntity);
          }
        }, {
          key: "updateAllergyRecording",
          value: function updateAllergyRecording(allergyRecording) {
            return this.http.post("".concat(this.baseUrl, "/allergyRecording/update"), allergyRecording);
          }
        }]);

        return AllergyRecordingService;
      }();

      _AllergyRecordingService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }, {
          type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService
        }];
      };

      _AllergyRecordingService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _AllergyRecordingService);
      /***/
    },

    /***/
    87980:
    /*!*********************************************************************************!*\
      !*** ./src/app/clinical/allergy-recording/services/reaction-mapping.service.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReactionMappingService": function ReactionMappingService() {
          return (
            /* binding */
            _ReactionMappingService
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

      var _ReactionMappingService = /*#__PURE__*/function () {
        function ReactionMappingService(http, mainService) {
          _classCallCheck(this, ReactionMappingService);

          this.http = http;
          this.mainService = mainService;
          this.baseUrl = '';
          this.baseUrl = this.mainService.getBaseUrl();
        }

        _createClass(ReactionMappingService, [{
          key: "getReactionMappingList",
          value: function getReactionMappingList() {
            return this.http.get("".concat(this.baseUrl, "/reactionMapping/get"));
          }
        }, {
          key: "createReactionMapping",
          value: function createReactionMapping(reactionMapping) {
            return this.http.post("".concat(this.baseUrl, "/reactionMapping/add"), reactionMapping);
          }
        }]);

        return ReactionMappingService;
      }();

      _ReactionMappingService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }, {
          type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService
        }];
      };

      _ReactionMappingService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _ReactionMappingService);
      /***/
    },

    /***/
    23529:
    /*!*****************************************************************!*\
      !*** ./src/app/master/lookup-module/masters/lookup-category.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LookupCategory": function LookupCategory() {
          return (
            /* binding */
            _LookupCategory
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../masters/base-entity */
      28685);

      var _LookupCategory = /*#__PURE__*/function (_masters_base_entity_) {
        _inherits(_LookupCategory, _masters_base_entity_);

        var _super = _createSuper(_LookupCategory);

        function _LookupCategory() {
          _classCallCheck(this, _LookupCategory);

          return _super.call(this);
        }

        return _LookupCategory;
      }(_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity);
      /***/

    },

    /***/
    3930:
    /*!****************************************************************************!*\
      !*** ./src/app/clinical/allergy-recording/allergy-recording.component.css ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGxlcmd5LXJlY29yZGluZy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    26584:
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clinical/allergy-recording/allergy-recording.component.html ***!
      \*******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = " <div [@routerTransition]  *ngIf = \"!ifFromClinicalDetail\">\n\t <div *ngIf = \"isAllergyRecordingWithPatientControl\">\n\t \t<app-page-header [mainhead]=\"'Dashboard'\"\n\t\t[heading]=\"'AllergyRecording'\" [mainheadLink] = \"'/dashboard'\" [icon]=\"'fa-flask'\"></app-page-header>\n\t \t<div class=\"col-md-12 navbar-nav bg-info mr-auto\">\n\t \t\t<div class=\"bg-info\">\n\t\t\t\t<app-patient-control  (patientDetails) = \"callPatientDetails($event)\" [patient]=\"patient\"></app-patient-control>\n\t\t\t</div>\n\t \t</div> \n\t </div>\n</div> \n <div class=\"card\">\n<div class=\" row col-md-12  mr-auto mt-1\">\n\t<div class=\"col-md-8\" >\n\t<h3>Existing Allergy</h3>\n\t\t<table border=\"1px solid\" width=\"100%\">\n\t\t\t<tbody>\n\t\t\t\t<tr>\n\t\t\t\t\t<th Style=\"font-size:13px\">Visit No</th>\n\t\t\t\t\t<th Style=\"font-size:13px\">Allergy Category</th>\n\t\t\t\t\t<th Style=\"font-size:13px\">Allergy To</th>\n\t\t\t\t\t<th Style=\"font-size:13px\">Status</th>\n\t\t\t\t\t<th Style=\"font-size:13px\">Actions</th>\n\t\t\t\t</tr>\n\t\t\t\t<tr *ngFor=\"let allergy of allergyRecordingListByPatientId\">\n\t\t\t\t<ng-container *ngIf=\"encounter.patient.mrn == allergy.encounterId.patient.mrn\">\n\t\t\t\t\t<td>{{allergy.encounterId.visit.visitId}}</td>\n\t\t\t\t\t<td>{{allergy.allergyType.categoryName}}</td>\n\t\t\t\t\t<td>{{allergy.allergicTo.lookupValue}}</td>\n\t\t\t\t\t<td>{{allergy.allergyStatus.lookupValue}}</td>\n\t\t\t\t\t<td><button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"gotoEditAR(allergy)\">\n\t\t\t\t\t\t\tEdit </button></td>\n\t\t\t\t\t\t\t\t\n\t\t\t\t</ng-container>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t\t<!-- <form>\n\t\t\t<mat-form-field>\n\t\t\t\t<input type=\"text\" MatInput [matAutocomplete]=\"auto\"/>\n\t\t\t\t<mat-autocomplete #auto=\"matAutocomplete\">\n\t\t\t\t\t<mat-option *ngFor=\"let option of options\" [value]=\"option\">\n\t\t\t\t\t{{option}}\n\t\t\t\t\t</mat-option>\n\t\t\t\t</mat-autocomplete>\n\t\t\t</mat-form-field>\n\t\t</form> -->\n\n\t</div>\n\t<!-- <div class=\"col-md-4 navbar-nav\"> -->\n\t<div class=\"col-md-4  border border-dark\" >\n\t<form [formGroup] = \"allergyRecordingForm\" >\n\t\t<div class=\"row border border-dark\" >\n\t\t\t\t<input type=\"checkbox\">No Known Allergies\n\t\t\t</div>\n\t\t\t<div class=\"row border border-dark border-top-0\">\n\t\t\t\t<label class=\"col-md-9 float-left\">Allergy Details</label>\n        \t\t<button class=\"btn-info\" Style=\"font-size:12px\" (click) =\"resetForm()\">New Allergy</button>\t\n        \t</div>\n\t\t<table class=\"m-1 p-1\" width=\"100%\">\n\t\t\t<tbody>\n\t\t\t\t<tr>\n\t\t\t\t\t<td Style=\"font-size:13px\">Allergy Type</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t<select Style=\"font-size:13px\" formControlName=\"allergyType\" [compareWith]=\"compareAllergyType\"  (ngModelChange) = \"getAllergyList($event)\">\n\t\t\t\t\t\t<option [ngValue]=null>--select--</option>\n\t\t\t\t\t\t<option>Drug</option>\n\t\t\t\t\t\t<ng-container *ngFor=\"let a of lookupCategoryList\">\n\t\t\t\t\t\t\t<option *ngIf=\"a.categoryId==224 || a.categoryId==225 || a.categoryId==226\"  [ngValue] = \"a\" >{{a.categoryName}}</option>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\n\t\t\t\t\t</select></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td Style=\"font-size:13px\">Allergic To</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div class=\"form-group input-group\">\n\t\t                     <input type=\"text\"\n\t\t\t\t\t\t           placeholder=\"\"\n\t\t\t\t\t\t           aria-label=\"Number\"\n\t\t\t\t\t\t           matInput\n\t\t\t\t\t\t           [formControl] =\"myControl\"\n\t\t\t\t\t\t           [matAutocomplete]=\"auto\">\n\t\t\t\t\t\t    <mat-autocomplete   #auto=\"matAutocomplete\" style =\"width: 300px;\">\n\t\t\t\t\t\t      <mat-option Style= \"font-size:13px\" *ngFor=\"let option of filteredOptions |async\" (click) = \"saveAllergyTypes(option)\" [value]=\"option.lookupValue\">\n\t\t\t\t\t\t        {{option.category.categoryName}}&nbsp;,{{option.lookupValue}}\n\t\t\t\t\t\t      </mat-option>\n\t\t\t\t\t\t    </mat-autocomplete>\n\t\t                    <div class=\"input-group-append\">\n\t\t                        <span class=\"input-group-text\" (click)=\"addAllergy()\"> <i class=\"fa fa-plus\"></i> </span>\n\t\t                    </div>\n\t\t                </div>\n\t\t\t\t\t\t \n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td Style=\"font-size:13px\">On Set</td>\n\t\t\t\t\t<td >\n\t\t\t\t\t\t<select Style=\"font-size:13px\" formControlName=\"onSet\" [compareWith]=\"compareOnSet\">\n\t\t\t\t\t\t<option value =null>--select--</option>\n\t\t\t\t\t\t<ng-container *ngFor=\"let a of lookupEntityList\">\n\t\t\t\t\t\t\t<option *ngIf=\"a.category.categoryId==227\" [ngValue]=\"a\" [value]=\"\" >{{a.lookupValue}}</option>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</select>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td Style=\"font-size:13px\">OnSet Type</td>\n\t\t\t\t\t<td><select Style=\"font-size:13px\" formControlName=\"onSetType\" [compareWith]=\"compareOnsetType\">\n\t\t\t\t\t\t<option value =null>--select--</option>\n\t\t\t\t\t\t<ng-container *ngFor=\"let a of lookupEntityList\">\n\t\t\t\t\t\t\t<option *ngIf=\"a.category.categoryId==228\" [ngValue]=\"a\" >{{a.lookupValue}}</option>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</select></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td Style=\"font-size:13px\">Onset Date</td>\n\t\t\t\t\t<td Style=\"font-size:13px\"><input type=\"date\" formControlName=\"onSetDate\"></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td Style=\"font-size:13px\">Allergy Status</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<select Style=\"font-size:13px\" formControlName=\"allergyStatus\" [compareWith]=\"compareAllergyStatus\">\n\t\t\t\t\t\t<option value =null>--select--</option>\n\t\t\t\t\t\t<ng-container *ngFor=\"let a of lookupEntityList\">\n\t\t\t\t\t\t\t<option *ngIf=\"a.category.categoryId==229\" [ngValue]=\"a\">{{a.lookupValue}}</option>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</select>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td Style=\"font-size:13px\">Resolved Date</td>\n\t\t\t\t\t<td Style=\"font-size:13px\"><input type=\"date\" formControlName=\"resolvedDate\"></td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t\t\t\t\n\t\t\n\t\t<h6 Style=\"font-weight:bold; font-size: 13px\">Reactions</h6>\n\t\t<div class=\" border border-dark\" Style=\"overflow:auto;height:200px\">\n\t\t<form [formGroup]=\"reactionForm\">\n\t\t<div>\n\t\t\t\t<div Style=\"font-size:13px\" *ngFor=\"let reaction of reactionList\">\n\t\t\t\t\t<div class=\" row border border-dark border-top-0\" Style=\"font-size:13px\">\n\t\t\t\t\t<input  class=\"col-md-2\" type=\"checkbox\" name =\"reaction\" [checked]=\"checkReaction(reaction)\"  (click)=\"addReaction($event.target.checked,reaction)\">\n\t\t\t\t\t<label class=\"col-md-10\"  Style=\"font-size:13px\">{{reaction.reactionName}}</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t</div>\n\t\t</form>\n\t\t</div>\n\t\t\n\t\t<br>\n\t\t<label>Remarks</label>\n\t\t<div>\n\t\t\t<textarea class=\"mr-1 ml-1\" cols=\"37\" rows=\"1\" formControlName=\"currentRemarks\"></textarea>\n\t\t</div>\n\t\t<div>\n\t\t\t<button type=\"button\" class=\"btn-primary m-1 h6\" type=\"submit\" *ngIf =\"!allergyRecordingFound\" (click)=\"onSubmit()\">Save Allergy</button>\n\t\t\t<button type=\"button\" class=\"btn-primary m-1 h6\" type=\"submit\" *ngIf =\"allergyRecordingFound\" (click)=\"updateAllergyRecording()\">Update Allergy</button>\n\t\t</div>\n\t\t\n\t\t\t\n\t\t\n\t\t<div>\n\t\t<!-- The Modal -->\n  <div class=\"modal\" id=\"myModal\" [style.display]=\"showModal ? 'block' : 'none'\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n      \n        <!-- Modal Header -->\n        <div class=\"modal-header bg-dark text-white\">\n          <h4 class=\"modal-title\">Allergy Details</h4>\n          <button type=\"button\" class=\"close text-white\" data-dismiss=\"modal\" (click) = \"hide()\">&times;</button>\n        </div>\n        \n        <!-- Modal body -->\n        <div class=\"modal-body col-md-12\">\n        <form [formGroup]= \"addAllergyForm\" >\n        <div class=\"row\">\n        \t<div class=\"col-md-6\">\n         \t\t<label class=\"col-md-6\">Allergy Name</label>\n         \t\t<input class=\"col-md-6\" type=\"text\" formControlName=\"lookupValue\">\n         \t</div>\n         \t<div class=\"col-md-6\">\n         \t\t<label class=\"col-md-6\">Allergy Type</label>\n         \t\t<select class=\"col-md-6\" formControlName=\"category\" >\n\t         \t\t<option [ngValue]=null>---select---</option>\n\t         \t\t<option [ngValue]=null>Drug</option>\n\t         \t\t<ng-container *ngFor=\"let look of lookupCategoryList\">\n\t         \t\t\t<option *ngIf=\"look.categoryId==224 || look.categoryId==225 || look.categoryId==226\"  [ngValue] = \"look\">{{look.categoryName}}</option>\n\t         \t\t</ng-container>\n         \t\t</select>\n         \t</div>\n         </div>\n         <div class=\"row\">\n         <div class=\"col-md-6\">\n         \t<label class=\"col-md-6\">Remarks</label>\n         \t<textarea class=\"col-md-6\" formControlName=\"description\" rows=\"1\"></textarea>\n         </div>\n         <div class=\"col-md-6\">\n         \t<label class=\"col-md-3\">Active</label>\n         \t<input type=\"checkbox\" formControlName= \"active\">\n         </div>\n         </div>\n         </form>\n        </div>\n        \n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-success\" type =\"submit\" (click)=\"onAdd(addAllergyForm)\" data-dismiss=\"modal\">Save</button>\n          <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click) = \"hide()\">Close</button>\n        </div>\n        \n      </div>\n    </div>\n  </div>\n</div>\n\t\t</form>\n\t</div>\n</div>\n</div>\n\n\n\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_clinical_allergy-recording_allergy-recording_module_ts-es5.js.map