(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunksb_admin_bs4_angular_9"] = self["webpackChunksb_admin_bs4_angular_9"] || []).push([["src_app_master_master_module_ts"], {
    /***/
    22001:
    /*!****************************************************************************!*\
      !*** ./src/app/master/country-category/country-category-routing.module.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CountryCategoryRoutingModule": function CountryCategoryRoutingModule() {
          return (
            /* binding */
            _CountryCategoryRoutingModule
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


      var _country_category_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./country-category.component */
      86571);

      var routes = [{
        path: '',
        component: _country_category_component__WEBPACK_IMPORTED_MODULE_0__.CountryCategoryComponent
      }, {
        path: 'itemmaster',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ../item-master/item-master.module */
          15113)).then(function (m) {
            return m.ItemMasterModule;
          });
        }
      }];

      var _CountryCategoryRoutingModule = function CountryCategoryRoutingModule() {
        _classCallCheck(this, CountryCategoryRoutingModule);
      };

      _CountryCategoryRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CountryCategoryRoutingModule);
      /***/
    },

    /***/
    86571:
    /*!***********************************************************************!*\
      !*** ./src/app/master/country-category/country-category.component.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CountryCategoryComponent": function CountryCategoryComponent() {
          return (
            /* binding */
            _CountryCategoryComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_country_category_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./country-category.component.html */
      31072);
      /* harmony import */


      var _country_category_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./country-category.component.css */
      19966);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../router.animations */
      74903);
      /* harmony import */


      var _masters_country__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./masters/country */
      60139);
      /* harmony import */


      var _services_patient_address_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/patient-address.service */
      55990);

      var _CountryCategoryComponent = /*#__PURE__*/function () {
        function CountryCategoryComponent(http, router, patietnAddresService) {
          _classCallCheck(this, CountryCategoryComponent);

          this.http = http;
          this.router = router;
          this.patietnAddresService = patietnAddresService;
          this.data = new _masters_country__WEBPACK_IMPORTED_MODULE_3__.Country();
          this.createCountry = new _masters_country__WEBPACK_IMPORTED_MODULE_3__.Country();
          this.submitted = true;
          this.submit = true;
          this.name = '';
          this.page = 1;
          this.pageSize = 5;
        }

        _createClass(CountryCategoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.reloadData();
          }
        }, {
          key: "reloadData",
          value: function reloadData() {
            var _this = this;

            this.patietnAddresService.getCountries().subscribe(function (data) {
              _this.country = data, console.log(_this.country), _this.len = data.length;
            });
            ;
          }
        }, {
          key: "details",
          value: function details(country) {
            this.submitted = !this.submitted;
            this.submit = true;
            this.createCountry = country;
          }
        }, {
          key: "gotoStates",
          value: function gotoStates(countryId) {
            console.log(countryId);
            this.router.navigate(['/master/state', countryId]);
          }
        }, {
          key: "goto",
          value: function goto() {
            this.submitted = !this.submitted;
          }
        }, {
          key: "newCountry",
          value: function newCountry() {
            this.submitted = !this.submitted;
            this.submit = false;
            this.createCountry = new _masters_country__WEBPACK_IMPORTED_MODULE_3__.Country();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this2 = this;

            this.patietnAddresService.createCountry(this.createCountry).subscribe(function (data) {
              console.log("This is return after saving " + data);
              _this2.submitted = !_this2.submitted;

              _this2.reloadData();
            });
          }
        }, {
          key: "updateCountry",
          value: function updateCountry(country) {
            var _this3 = this;

            this.patietnAddresService.updateCountry(country.countryId, country).subscribe(function (data) {
              alert("Updated Successfully");
              _this3.createCountry = new _masters_country__WEBPACK_IMPORTED_MODULE_3__.Country();

              _this3.reloadData();

              _this3.submitted = true;
            });
          }
        }, {
          key: "deleteCountry",
          value: function deleteCountry() {
            var _this4 = this;

            this.patietnAddresService.deleteCountry(this.data.countryId).subscribe(function (data) {
              console.log(data);

              _this4.reloadData();

              _this4.submitted = !_this4.submitted;
            });
          }
        }, {
          key: "show",
          value: function show() {
            this.submitted = true;
            this.submit = true;
          }
        }]);

        return CountryCategoryComponent;
      }();

      _CountryCategoryComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _services_patient_address_service__WEBPACK_IMPORTED_MODULE_4__.PatientAddressService
        }];
      };

      _CountryCategoryComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-country-category',
        template: _raw_loader_country_category_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_country_category_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CountryCategoryComponent);
      /***/
    },

    /***/
    54582:
    /*!********************************************************************!*\
      !*** ./src/app/master/country-category/country-category.module.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CountryCategoryModule": function CountryCategoryModule() {
          return (
            /* binding */
            _CountryCategoryModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _country_category_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./country-category.component */
      86571);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared */
      51679);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _pipes_country_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pipes/country.pipe */
      61504);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _country_category_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./country-category-routing.module */
      22001);

      var _CountryCategoryModule = function CountryCategoryModule() {
        _classCallCheck(this, CountryCategoryModule);
      };

      _CountryCategoryModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_country_category_component__WEBPACK_IMPORTED_MODULE_0__.CountryCategoryComponent, _pipes_country_pipe__WEBPACK_IMPORTED_MODULE_2__.CountryPipe],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _country_category_routing_module__WEBPACK_IMPORTED_MODULE_3__.CountryCategoryRoutingModule, _shared__WEBPACK_IMPORTED_MODULE_1__.PageHeaderModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule]
      })], _CountryCategoryModule);
      /***/
    },

    /***/
    98396:
    /*!*************************************************************************************!*\
      !*** ./src/app/master/country-category/modules/district/district-routing.module.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DistrictRoutingModule": function DistrictRoutingModule() {
          return (
            /* binding */
            _DistrictRoutingModule
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


      var _district_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./district.component */
      88220);

      var routes = [{
        path: '',
        component: _district_component__WEBPACK_IMPORTED_MODULE_0__.DistrictComponent
      }];

      var _DistrictRoutingModule = function DistrictRoutingModule() {
        _classCallCheck(this, DistrictRoutingModule);
      };

      _DistrictRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _DistrictRoutingModule);
      /***/
    },

    /***/
    88220:
    /*!********************************************************************************!*\
      !*** ./src/app/master/country-category/modules/district/district.component.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DistrictComponent": function DistrictComponent() {
          return (
            /* binding */
            _DistrictComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_district_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./district.component.html */
      8734);
      /* harmony import */


      var _district_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./district.component.css */
      50395);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _masters_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../masters/state */
      44636);
      /* harmony import */


      var _services_patient_address_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/patient-address.service */
      55990);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _masters_district__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../masters/district */
      14139);
      /* harmony import */


      var _masters_country__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../masters/country */
      60139);

      var _DistrictComponent = /*#__PURE__*/function () {
        function DistrictComponent(_location, patientAddressService, route, router) {
          _classCallCheck(this, DistrictComponent);

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

        _createClass(DistrictComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.stateId = this.route.snapshot.params['id'];
            this.countryId = this.route.snapshot.params['countryId'];
            console.log(this.countryId);
            this.reloadData(this.stateId, this.countryId);
          }
        }, {
          key: "reloadData",
          value: function reloadData(stateId, countryId) {
            var _this5 = this;

            this.patientAddressService.getStatesById(stateId).subscribe(function (data) {
              console.log(data);
              _this5.state = data;
            });
            this.patientAddressService.getDistrictByState(stateId).subscribe(function (data) {
              console.log(data);
              _this5.district = data;
            });
            this.patientAddressService.getCountryById(countryId).subscribe(function (data) {
              _this5.len = data.length;
              _this5.country = data;
            });
          }
        }, {
          key: "goto",
          value: function goto() {
            this.submitted = !this.submitted;
            this.submit = true;
          }
        }, {
          key: "details",
          value: function details(district) {
            this.submit = true;
            this.submitted = false;
            this.createDistrict = district;
          }
        }, {
          key: "updateDistrict",
          value: function updateDistrict(district) {
            var _this6 = this;

            this.patientAddressService.updateDistrict(district.districtId, district).subscribe(function (data) {
              _this6.submitted = true;

              _this6.reloadData(_this6.stateId, _this6.countryId);

              alert("Updated Successfully");
            }, function (error) {
              return console.log(error);
            });
            ;
          }
        }, {
          key: "deleteDistrict",
          value: function deleteDistrict(districtId) {
            var _this7 = this;

            this.patientAddressService.deleteDistrict(districtId).subscribe(function (data) {
              _this7.reloadData(_this7.stateId, _this7.countryId);
            });
          }
        }, {
          key: "addNew",
          value: function addNew() {
            this.submitted = false;
            this.submit = false;
            this.createDistrict = new _masters_district__WEBPACK_IMPORTED_MODULE_4__.District();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(addDistrictForm) {
            this.createDistrict = addDistrictForm.value;
            this.createDistrict.state = this.state;
            this.addDistrict(this.createDistrict); //console.warn(this.createState.stateId)
            //console.log("countryId : "+this.countryId +"countryName  is "+this.createState.country.countryName);
          }
        }, {
          key: "addDistrict",
          value: function addDistrict(entity) {
            var _this8 = this;

            this.patientAddressService.createDistrict(entity).subscribe(function (data) {
              _this8.reloadData(_this8.stateId, _this8.countryId);

              _this8.createDistrict = new _masters_district__WEBPACK_IMPORTED_MODULE_4__.District();
              _this8.submitted = true; //console.warn("This is the data returned after saving",data)
            }, function (error) {
              return console.log(error);
            });
          }
        }]);

        return DistrictComponent;
      }();

      _DistrictComponent.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location
        }, {
          type: _services_patient_address_service__WEBPACK_IMPORTED_MODULE_3__.PatientAddressService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }];
      };

      _DistrictComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-district',
        template: _raw_loader_district_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_district_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DistrictComponent);
      /***/
    },

    /***/
    51989:
    /*!*****************************************************************************!*\
      !*** ./src/app/master/country-category/modules/district/district.module.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DistrictModule": function DistrictModule() {
          return (
            /* binding */
            _DistrictModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared */
      51679);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _district_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./district.component */
      88220);
      /* harmony import */


      var _district_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./district-routing.module */
      98396);
      /* harmony import */


      var _pipes_district_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../pipes/district.pipe */
      41341);

      var _DistrictModule = function DistrictModule() {
        _classCallCheck(this, DistrictModule);
      };

      _DistrictModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_district_component__WEBPACK_IMPORTED_MODULE_1__.DistrictComponent, _pipes_district_pipe__WEBPACK_IMPORTED_MODULE_3__.DistrictPipe],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _district_routing_module__WEBPACK_IMPORTED_MODULE_2__.DistrictRoutingModule, _shared__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule],
        exports: [_district_component__WEBPACK_IMPORTED_MODULE_1__.DistrictComponent]
      })], _DistrictModule);
      /***/
    },

    /***/
    5252:
    /*!*******************************************************************************!*\
      !*** ./src/app/master/country-category/modules/state/state-routing.module.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StateRoutingModule": function StateRoutingModule() {
          return (
            /* binding */
            _StateRoutingModule
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


      var _state_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./state.component */
      15868);

      var routes = [{
        path: '',
        component: _state_component__WEBPACK_IMPORTED_MODULE_0__.StateComponent
      }];

      var _StateRoutingModule = function StateRoutingModule() {
        _classCallCheck(this, StateRoutingModule);
      };

      _StateRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _StateRoutingModule);
      /***/
    },

    /***/
    15868:
    /*!**************************************************************************!*\
      !*** ./src/app/master/country-category/modules/state/state.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StateComponent": function StateComponent() {
          return (
            /* binding */
            _StateComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_state_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./state.component.html */
      74754);
      /* harmony import */


      var _state_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./state.component.css */
      44031);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _masters_country__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../masters/country */
      60139);
      /* harmony import */


      var _masters_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../masters/state */
      44636);
      /* harmony import */


      var _services_patient_address_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/patient-address.service */
      55990);

      var _StateComponent = /*#__PURE__*/function () {
        function StateComponent(http, router, route, patientAddressService) {
          _classCallCheck(this, StateComponent);

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

        _createClass(StateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.submitted = true;
            this.submit = true;
            this.countryId = this.route.snapshot.params['id'];
            this.reloadData(this.countryId);
          }
        }, {
          key: "reloadData",
          value: function reloadData(countryId) {
            var _this9 = this;

            this.patientAddressService.getCountryById(countryId).subscribe(function (data) {
              _this9.len = data.length;
              _this9.country = data; //console.log(this.country);
            });
            this.patientAddressService.getStateByCountry(countryId).subscribe(function (data) {
              _this9.state = data; //console.log("This is the data from state table " + data)
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(addForm) {
            this.createState = addForm.value;
            this.createState.country = this.country;
            this.createStates(this.createState); //console.warn(this.createState.stateId)
            //console.log("countryId : "+this.countryId +"countryName  is "+this.createState.country.countryName);
          }
        }, {
          key: "goto",
          value: function goto() {
            this.submitted = true;
            this.submit = true;
          }
        }, {
          key: "createStates",
          value: function createStates(entity) {
            var _this10 = this;

            this.patientAddressService.createState(entity).subscribe(function (data) {
              _this10.createState = new _masters_state__WEBPACK_IMPORTED_MODULE_3__.State(); //console.warn("This is the data returned after saving",data)

              _this10.submitted = true;

              _this10.reloadData(_this10.countryId);
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "updateState",
          value: function updateState(state) {
            var _this11 = this;

            //console.log("Update button is working")
            //console.log(lookup);
            this.patientAddressService.updateState(state.stateId, state).subscribe(function (data) {
              //console.log(data);
              _this11.country = new _masters_country__WEBPACK_IMPORTED_MODULE_2__.Country();
              _this11.submitted = !_this11.submitted;

              _this11.reloadData(_this11.countryId);

              alert("Updated Successfully");
            }, function (error) {
              return console.log(error);
            });
            ;
          }
        }, {
          key: "deleteState",
          value: function deleteState(stateId) {
            var _this12 = this;

            this.patientAddressService.deleteState(stateId).subscribe(function (data) {
              //console.log(data);
              _this12.reloadData(_this12.countryId);
            });
          }
        }, {
          key: "gotoDistricts",
          value: function gotoDistricts(stateId) {
            console.log(this.currentNav);
            this.router.navigate(['/master/district', {
              id: stateId,
              countryId: this.countryId
            }]);
          }
        }, {
          key: "details",
          value: function details(state) {
            this.submit = true;
            this.submitted = false;
            this.createState = state;
          }
        }, {
          key: "addState",
          value: function addState() {
            this.submit = false;
            this.submitted = false;
            this.createState = new _masters_state__WEBPACK_IMPORTED_MODULE_3__.State();
          }
        }]);

        return StateComponent;
      }();

      _StateComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
        }, {
          type: _services_patient_address_service__WEBPACK_IMPORTED_MODULE_4__.PatientAddressService
        }];
      };

      _StateComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-state',
        template: _raw_loader_state_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_state_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _StateComponent);
      /***/
    },

    /***/
    2093:
    /*!***********************************************************************!*\
      !*** ./src/app/master/country-category/modules/state/state.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StateModule": function StateModule() {
          return (
            /* binding */
            _StateModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../shared */
      51679);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _state_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./state.component */
      15868);
      /* harmony import */


      var _pipes_state_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../pipes/state.pipe */
      586);
      /* harmony import */


      var _state_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./state-routing.module */
      5252);

      var _StateModule = function StateModule() {
        _classCallCheck(this, StateModule);
      };

      _StateModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_state_component__WEBPACK_IMPORTED_MODULE_1__.StateComponent, _pipes_state_pipe__WEBPACK_IMPORTED_MODULE_2__.StatePipe],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _state_routing_module__WEBPACK_IMPORTED_MODULE_3__.StateRoutingModule, _shared__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule],
        exports: [_state_component__WEBPACK_IMPORTED_MODULE_1__.StateComponent]
      })], _StateModule);
      /***/
    },

    /***/
    61504:
    /*!***************************************************************!*\
      !*** ./src/app/master/country-category/pipes/country.pipe.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CountryPipe": function CountryPipe() {
          return (
            /* binding */
            _CountryPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _CountryPipe = /*#__PURE__*/function () {
        function CountryPipe() {
          _classCallCheck(this, CountryPipe);
        }

        _createClass(CountryPipe, [{
          key: "transform",
          value: function transform(value, args) {
            if (!args) {
              return value;
            }

            return value.filter(function (val) {
              var rVal = val.countryCode.toLocaleLowerCase().includes(args.toLowerCase()) || val.identification.toLowerCase().includes(args.toLowerCase()) || val.countryName.toLowerCase().includes(args.toLowerCase());
              return rVal;
            });
          }
        }]);

        return CountryPipe;
      }();

      _CountryPipe = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'country'
      })], _CountryPipe);
      /***/
    },

    /***/
    41341:
    /*!****************************************************************!*\
      !*** ./src/app/master/country-category/pipes/district.pipe.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DistrictPipe": function DistrictPipe() {
          return (
            /* binding */
            _DistrictPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _DistrictPipe = /*#__PURE__*/function () {
        function DistrictPipe() {
          _classCallCheck(this, DistrictPipe);
        }

        _createClass(DistrictPipe, [{
          key: "transform",
          value: function transform(value, args) {
            if (!args) {
              return value;
            }

            return value.filter(function (val) {
              var rVal = val.districtCode.toLocaleLowerCase().includes(args.toLowerCase()) || val.description.toLowerCase().includes(args.toLowerCase()) || val.districtName.toLowerCase().includes(args.toLowerCase());
              return rVal;
            });
          }
        }]);

        return DistrictPipe;
      }();

      _DistrictPipe = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'district'
      })], _DistrictPipe);
      /***/
    },

    /***/
    586:
    /*!*************************************************************!*\
      !*** ./src/app/master/country-category/pipes/state.pipe.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StatePipe": function StatePipe() {
          return (
            /* binding */
            _StatePipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _StatePipe = /*#__PURE__*/function () {
        function StatePipe() {
          _classCallCheck(this, StatePipe);
        }

        _createClass(StatePipe, [{
          key: "transform",
          value: function transform(value, args) {
            if (!args) {
              return value;
            }

            return value.filter(function (val) {
              var rVal = val.stateCode.toLocaleLowerCase().includes(args.toLowerCase()) || val.description.toLowerCase().includes(args.toLowerCase()) || val.stateName.toLowerCase().includes(args.toLowerCase());
              return rVal;
            });
          }
        }]);

        return StatePipe;
      }();

      _StatePipe = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'state'
      })], _StatePipe);
      /***/
    },

    /***/
    40872:
    /*!****************************************************************!*\
      !*** ./src/app/master/department/department-routing.module.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DepartmentRoutingModule": function DepartmentRoutingModule() {
          return (
            /* binding */
            _DepartmentRoutingModule
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


      var _department_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./department.component */
      79281);

      var routes = [{
        path: '',
        component: _department_component__WEBPACK_IMPORTED_MODULE_0__.DepartmentComponent
      }];

      var _DepartmentRoutingModule = function DepartmentRoutingModule() {
        _classCallCheck(this, DepartmentRoutingModule);
      };

      _DepartmentRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _DepartmentRoutingModule);
      /***/
    },

    /***/
    79281:
    /*!***********************************************************!*\
      !*** ./src/app/master/department/department.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DepartmentComponent": function DepartmentComponent() {
          return (
            /* binding */
            _DepartmentComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_department_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./department.component.html */
      80839);
      /* harmony import */


      var _department_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./department.component.css */
      95823);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../router.animations */
      74903);
      /* harmony import */


      var _services_department_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/department.service */
      25482);
      /* harmony import */


      var _service_center_services_branch_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../service-center/services/branch-service.service */
      31582);

      var _DepartmentComponent = /*#__PURE__*/function () {
        function DepartmentComponent(http, route, branchService, router, departmentService) {
          _classCallCheck(this, DepartmentComponent);

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

        _createClass(DepartmentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.reloadData();
          }
        }, {
          key: "reloadData",
          value: function reloadData() {
            var _this13 = this;

            this.branchService.getBranch().subscribe(function (data) {
              _this13.branchList = data;
            });
            this.departmentService.getAllDepartments().subscribe(function (data) {
              console.log(data), _this13.departments = data, _this13.len = data.length;
            });
          }
        }, {
          key: "details",
          value: function details(data) {
            this.dep = data;
            this.submitted = !this.submitted;
            this.id1 = this.dep.departmentId;
          }
        }, {
          key: "OnSubmit",
          value: function OnSubmit(form) {
            var _this14 = this;

            this.branchId = form.site;
            console.log(this.branchId);
            console.log(form.value);

            var _iterator = _createForOfIteratorHelper(this.branchList),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var branch = _step.value;

                if (this.branchId == branch.id) {
                  this.dep.site = branch;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.departmentService.updateDepartment(this.id1, this.dep).subscribe(function (data) {
              _this14.gotoList();
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "gotoList",
          value: function gotoList() {
            this.reloadData(); //this.router.navigate(['/master/department']).then(() => {window.location.reload()});
          }
        }, {
          key: "newDepartment",
          value: function newDepartment() {
            this.submit = !this.submit;
            this.submitted = true;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(createDocForm) {
            var _this15 = this;

            this.department = createDocForm.value;
            console.log("This is the CreateDocForm data" + createDocForm);
            this.departmentService.createDepartments(this.department).subscribe(function (data) {
              console.log("This is data from creating department" + data);

              _this15.gotoList();
            });
          }
        }, {
          key: "showDepartments",
          value: function showDepartments() {
            this.submitted = true;
            this.submit = true;
          }
        }]);

        return DepartmentComponent;
      }();

      _DepartmentComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
        }, {
          type: _service_center_services_branch_service_service__WEBPACK_IMPORTED_MODULE_4__.BranchServiceService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _services_department_service__WEBPACK_IMPORTED_MODULE_3__.DepartmentService
        }];
      };

      _DepartmentComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'department',
        template: _raw_loader_department_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_department_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DepartmentComponent);
      /***/
    },

    /***/
    70389:
    /*!********************************************************!*\
      !*** ./src/app/master/department/department.module.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DepartmentModule": function DepartmentModule() {
          return (
            /* binding */
            _DepartmentModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _department_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./department-routing.module */
      40872);
      /* harmony import */


      var _department_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./department.component */
      79281);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared */
      51679);
      /* harmony import */


      var _pipes_depsearch_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pipes/depsearch.pipe */
      29613);

      var _DepartmentModule = function DepartmentModule() {
        _classCallCheck(this, DepartmentModule);
      };

      _DepartmentModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_department_component__WEBPACK_IMPORTED_MODULE_1__.DepartmentComponent, _pipes_depsearch_pipe__WEBPACK_IMPORTED_MODULE_3__.DepsearchPipe],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _department_routing_module__WEBPACK_IMPORTED_MODULE_0__.DepartmentRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _shared__WEBPACK_IMPORTED_MODULE_2__.PageHeaderModule]
      })], _DepartmentModule);
      /***/
    },

    /***/
    29613:
    /*!***********************************************************!*\
      !*** ./src/app/master/department/pipes/depsearch.pipe.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DepsearchPipe": function DepsearchPipe() {
          return (
            /* binding */
            _DepsearchPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _DepsearchPipe = /*#__PURE__*/function () {
        function DepsearchPipe() {
          _classCallCheck(this, DepsearchPipe);
        }

        _createClass(DepsearchPipe, [{
          key: "transform",
          value: function transform(value, args) {
            if (!args) {
              return value;
            }

            return value.filter(function (val) {
              var rVal = val.departmentName.toLocaleLowerCase().includes(args) || val.description.toLowerCase().includes(args) || val.hod.toLowerCase().includes(args);
              return rVal;
            });
          }
        }]);

        return DepsearchPipe;
      }();

      _DepsearchPipe = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'depsearch'
      })], _DepsearchPipe);
      /***/
    },

    /***/
    3900:
    /*!******************************************************************!*\
      !*** ./src/app/master/item-master/item-master-routing.module.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ItemMasterRoutingModule": function ItemMasterRoutingModule() {
          return (
            /* binding */
            _ItemMasterRoutingModule
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


      var _item_master_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./item-master.component */
      46370);

      var routes = [{
        path: '',
        component: _item_master_component__WEBPACK_IMPORTED_MODULE_0__.ItemMasterComponent
      }];

      var _ItemMasterRoutingModule = function ItemMasterRoutingModule() {
        _classCallCheck(this, ItemMasterRoutingModule);
      };

      _ItemMasterRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ItemMasterRoutingModule);
      /***/
    },

    /***/
    46370:
    /*!*************************************************************!*\
      !*** ./src/app/master/item-master/item-master.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ItemMasterComponent": function ItemMasterComponent() {
          return (
            /* binding */
            _ItemMasterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_item_master_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./item-master.component.html */
      21166);
      /* harmony import */


      var _item_master_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./item-master.component.css */
      36684);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../router.animations */
      74903);
      /* harmony import */


      var _lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../lookup-module/services/lookup.service */
      41168);
      /* harmony import */


      var _masters_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./masters/item */
      57574);
      /* harmony import */


      var _masters_item_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./masters/item-type */
      71068);
      /* harmony import */


      var _masters_UOM__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./masters/UOM */
      36027);
      /* harmony import */


      var _services_item_master_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./services/item-master.service */
      68208);

      var _ItemMasterComponent = /*#__PURE__*/function () {
        function ItemMasterComponent(itemSerice, fb, lookupService) {
          _classCallCheck(this, ItemMasterComponent);

          this.itemSerice = itemSerice;
          this.fb = fb;
          this.lookupService = lookupService;
          this.createItemForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({});
          this.item = new _masters_item__WEBPACK_IMPORTED_MODULE_4__.Item();
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
          this.createItem = new _masters_item__WEBPACK_IMPORTED_MODULE_4__.Item();
          this.itemTypeDemo = new _masters_item_type__WEBPACK_IMPORTED_MODULE_5__.ItemType();
          this.baseUom = new _masters_UOM__WEBPACK_IMPORTED_MODULE_6__.UOM();
        }

        _createClass(ItemMasterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.showItemList();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            console.log(this.createItemForm.value);
            this.createItem = this.createItemForm.value;
            this.itemTypeDemo = this.createItemForm.value.itemType;
            this.createItem.itemType = this.itemTypeDemo;
            this.baseUom = this.createItemForm.value.baseUom;
            this.createItem.baseUom = this.baseUom;
            this.itemSerice.createItem(this.createItem).subscribe(function (data) {
              console.log(data);
              alert("Inserted Successfuly");
            });
          }
        }, {
          key: "createItemFunc",
          value: function createItemFunc() {
            var _this16 = this;

            this.itemSerice.getItemTypeList().subscribe(function (data) {
              _this16.itemTypeList = data;
              console.log("ItemType", data);
            });
            this.itemSerice.getItemClassList().subscribe(function (data) {
              _this16.itemClassList = data;
              console.log("ItemClass", data);
            });
            this.itemSerice.getItemCategoryList().subscribe(function (data) {
              _this16.itemCategoryList = data;
              console.log("ItemCategory", data);
            });
            this.itemSerice.getItemCategoryList().subscribe(function (data) {
              _this16.itemCategoryList = data;
              console.log("ItemCategory", data);
            });
            this.itemSerice.getUOMList().subscribe(function (data) {
              _this16.uomList = data;
              console.log("UOM", data);
            });
            this.itemSerice.getInventoryAccontList().subscribe(function (data) {
              _this16.inventoryAccountList = data;
              console.log("InventoryAccont", data);
            });
            this.itemSerice.getUOMTypeList().subscribe(function (data) {
              _this16.uomTypeList = data;
              console.log("uomType", data);
            });
            this.itemSerice.getItemSuppliersList().subscribe(function (data) {
              _this16.itemSupplierList = data;
              console.log("ItemSuppliers", data);
            });
            this.itemSerice.getItemStoresList().subscribe(function (data) {
              _this16.itemStoreList = data;
              console.log("itemStore", data);
            });
            this.itemSerice.getAlternateItemList().subscribe(function (data) {
              _this16.alternateItemList = data;
              console.log("AlternateItem", data);
            });
            this.itemSerice.getItemSpecificationList().subscribe(function (data) {
              _this16.itemSpecificationList = data;
              console.log("ItemSpecification", data);
            });
            this.itemSerice.getPurchaseOrganisationList().subscribe(function (data) {
              _this16.purchaseOrgList = data;
              console.log("PurchaseOrganization", data);
            });
            this.itemSerice.getItemBranchAccountMapList().subscribe(function (data) {
              _this16.itemBranchAccMapList = data;
              console.log("itemBranchAccMapList", data);
            });
            this.lookupService.getAllLookupEntities().subscribe(function (data) {
              console.log(data);
              _this16.lookupEntityList = data;
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
              currentCost: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null)
            });
          }
        }, {
          key: "showItemList",
          value: function showItemList() {
            var _this17 = this;

            this.itemSerice.getItemList().subscribe(function (itemData) {
              //console.log(data);
              _this17.itemList = itemData;
              _this17.len = itemData.length; //console.log(this.len);

              _this17.isList = true;
            });
          }
        }, {
          key: "addItem",
          value: function addItem() {
            this.isList = false;
            this.createItemFunc();
          }
        }, {
          key: "trackUom",
          value: function trackUom(uom) {
            this.uomId = uom.uomId;
            console.log(uom.uomId);
          }
        }]);

        return ItemMasterComponent;
      }();

      _ItemMasterComponent.ctorParameters = function () {
        return [{
          type: _services_item_master_service__WEBPACK_IMPORTED_MODULE_7__.ItemMasterService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
        }, {
          type: _lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__.LookupService
        }];
      };

      _ItemMasterComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-item-master',
        template: _raw_loader_item_master_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_item_master_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ItemMasterComponent);
      /***/
    },

    /***/
    15113:
    /*!**********************************************************!*\
      !*** ./src/app/master/item-master/item-master.module.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ItemMasterModule": function ItemMasterModule() {
          return (
            /* binding */
            _ItemMasterModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _item_master_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./item-master-routing.module */
      3900);
      /* harmony import */


      var _item_master_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./item-master.component */
      46370);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared */
      51679);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _pipes_search_item_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pipes/search-item.pipe */
      12276);

      var _ItemMasterModule = function ItemMasterModule() {
        _classCallCheck(this, ItemMasterModule);
      };

      _ItemMasterModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_item_master_component__WEBPACK_IMPORTED_MODULE_1__.ItemMasterComponent, _pipes_search_item_pipe__WEBPACK_IMPORTED_MODULE_3__.SearchItemPipe],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _item_master_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemMasterRoutingModule, _shared__WEBPACK_IMPORTED_MODULE_2__.PageHeaderModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
        exports: [_item_master_component__WEBPACK_IMPORTED_MODULE_1__.ItemMasterComponent]
      })], _ItemMasterModule);
      /***/
    },

    /***/
    16818:
    /*!*************************************************************!*\
      !*** ./src/app/master/item-master/masters/Item-category.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ItemCategory": function ItemCategory() {
          return (
            /* binding */
            _ItemCategory
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../masters/base-entity */
      28685);
      /* harmony import */


      var _inventory_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./inventory-account */
      87551);
      /* harmony import */


      var _Item_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./Item-class */
      83938);
      /* harmony import */


      var _UOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./UOM */
      36027);

      var _ItemCategory = /*#__PURE__*/function (_masters_base_entity_) {
        _inherits(_ItemCategory, _masters_base_entity_);

        var _super = _createSuper(_ItemCategory);

        function _ItemCategory() {
          var _this18;

          _classCallCheck(this, _ItemCategory);

          _this18 = _super.call(this);
          _this18.itemClass = new _Item_class__WEBPACK_IMPORTED_MODULE_2__.ItemClass();
          _this18.salesAccount = new _inventory_account__WEBPACK_IMPORTED_MODULE_1__.InventoryAccount();
          _this18.purchAndInvenAccount = new _inventory_account__WEBPACK_IMPORTED_MODULE_1__.InventoryAccount();
          _this18.costOfSalesAccount = new _inventory_account__WEBPACK_IMPORTED_MODULE_1__.InventoryAccount();
          _this18.stockControlAccount = new _inventory_account__WEBPACK_IMPORTED_MODULE_1__.InventoryAccount();
          _this18.trackUOM = new _UOM__WEBPACK_IMPORTED_MODULE_3__.UOM();
          _this18.baseUOM = new _UOM__WEBPACK_IMPORTED_MODULE_3__.UOM();
          return _this18;
        }

        return _ItemCategory;
      }(_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity);
      /***/

    },

    /***/
    83938:
    /*!**********************************************************!*\
      !*** ./src/app/master/item-master/masters/Item-class.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ItemClass": function ItemClass() {
          return (
            /* binding */
            _ItemClass
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../masters/base-entity */
      28685);

      var _ItemClass = /*#__PURE__*/function (_masters_base_entity_2) {
        _inherits(_ItemClass, _masters_base_entity_2);

        var _super2 = _createSuper(_ItemClass);

        function _ItemClass() {
          _classCallCheck(this, _ItemClass);

          return _super2.call(this);
        }

        return _ItemClass;
      }(_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity);
      /***/

    },

    /***/
    36027:
    /*!***************************************************!*\
      !*** ./src/app/master/item-master/masters/UOM.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UOM": function UOM() {
          return (
            /* binding */
            _UOM
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../masters/base-entity */
      28685);
      /* harmony import */


      var _UOMType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./UOMType */
      51126);

      var _UOM = /*#__PURE__*/function (_masters_base_entity_3) {
        _inherits(_UOM, _masters_base_entity_3);

        var _super3 = _createSuper(_UOM);

        function _UOM() {
          var _this19;

          _classCallCheck(this, _UOM);

          _this19 = _super3.call(this);
          _this19.uomType = new _UOMType__WEBPACK_IMPORTED_MODULE_1__.UOMType();
          return _this19;
        }

        return _UOM;
      }(_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity);
      /***/

    },

    /***/
    51126:
    /*!*******************************************************!*\
      !*** ./src/app/master/item-master/masters/UOMType.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UOMType": function UOMType() {
          return (
            /* binding */
            _UOMType
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../masters/base-entity */
      28685);

      var _UOMType = /*#__PURE__*/function (_masters_base_entity_4) {
        _inherits(_UOMType, _masters_base_entity_4);

        var _super4 = _createSuper(_UOMType);

        function _UOMType() {
          _classCallCheck(this, _UOMType);

          return _super4.call(this);
        }

        return _UOMType;
      }(_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity);
      /***/

    },

    /***/
    87551:
    /*!*****************************************************************!*\
      !*** ./src/app/master/item-master/masters/inventory-account.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InventoryAccount": function InventoryAccount() {
          return (
            /* binding */
            _InventoryAccount
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../masters/base-entity */
      28685);
      /* harmony import */


      var _money__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./money */
      52274);

      var _InventoryAccount = /*#__PURE__*/function (_masters_base_entity_5) {
        _inherits(_InventoryAccount, _masters_base_entity_5);

        var _super5 = _createSuper(_InventoryAccount);

        function _InventoryAccount() {
          var _this20;

          _classCallCheck(this, _InventoryAccount);

          _this20 = _super5.call(this);
          _this20.balance = new _money__WEBPACK_IMPORTED_MODULE_1__.Money();
          return _this20;
        }

        return _InventoryAccount;
      }(_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity);
      /***/

    },

    /***/
    90888:
    /*!******************************************************************!*\
      !*** ./src/app/master/item-master/masters/item-specification.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ItemSpecification": function ItemSpecification() {
          return (
            /* binding */
            _ItemSpecification
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../lookup-module/masters/lookup-entity */
      11697);
      /* harmony import */


      var _subBase_Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./subBase-Entity */
      50050);

      var _ItemSpecification = /*#__PURE__*/function (_subBase_Entity__WEBP) {
        _inherits(_ItemSpecification, _subBase_Entity__WEBP);

        var _super6 = _createSuper(_ItemSpecification);

        function _ItemSpecification() {
          var _this21;

          _classCallCheck(this, _ItemSpecification);

          _this21 = _super6.call(this);
          _this21.availableFrom = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
          return _this21;
        }

        return _ItemSpecification;
      }(_subBase_Entity__WEBPACK_IMPORTED_MODULE_1__.SubBaseEntity);
      /***/

    },

    /***/
    71068:
    /*!*********************************************************!*\
      !*** ./src/app/master/item-master/masters/item-type.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ItemType": function ItemType() {
          return (
            /* binding */
            _ItemType
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../masters/base-entity */
      28685);

      var _ItemType = /*#__PURE__*/function (_masters_base_entity_6) {
        _inherits(_ItemType, _masters_base_entity_6);

        var _super7 = _createSuper(_ItemType);

        function _ItemType() {
          _classCallCheck(this, _ItemType);

          return _super7.call(this);
        }

        return _ItemType;
      }(_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity);
      /***/

    },

    /***/
    57574:
    /*!****************************************************!*\
      !*** ./src/app/master/item-master/masters/item.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Item": function Item() {
          return (
            /* binding */
            _Item
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../masters/base-entity */
      28685);
      /* harmony import */


      var _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../lookup-module/masters/lookup-entity */
      11697);
      /* harmony import */


      var _inventory_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./inventory-account */
      87551);
      /* harmony import */


      var _Item_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./Item-category */
      16818);
      /* harmony import */


      var _Item_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./Item-class */
      83938);
      /* harmony import */


      var _item_specification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./item-specification */
      90888);
      /* harmony import */


      var _item_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./item-type */
      71068);
      /* harmony import */


      var _purchase_organization__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./purchase-organization */
      1850);
      /* harmony import */


      var _UOM__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./UOM */
      36027);

      var _Item = /*#__PURE__*/function (_masters_base_entity_7) {
        _inherits(_Item, _masters_base_entity_7);

        var _super8 = _createSuper(_Item);

        function _Item() {
          var _this22;

          _classCallCheck(this, _Item);

          _this22 = _super8.call(this);
          _this22.itemCategory = new _Item_category__WEBPACK_IMPORTED_MODULE_3__.ItemCategory();
          _this22.itemType = new _item_type__WEBPACK_IMPORTED_MODULE_6__.ItemType();
          _this22.itemGroup = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__.LookupEntity();
          _this22.itemClass = new _Item_class__WEBPACK_IMPORTED_MODULE_4__.ItemClass();
          _this22.stockType = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__.LookupEntity();
          _this22.procurementType = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__.LookupEntity();
          _this22.baseUom = new _UOM__WEBPACK_IMPORTED_MODULE_8__.UOM();
          _this22.trackUom = new _UOM__WEBPACK_IMPORTED_MODULE_8__.UOM();
          _this22.distributionCategory = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__.LookupEntity();
          _this22.purchaseOrg = new _purchase_organization__WEBPACK_IMPORTED_MODULE_7__.PurchaseOrganization();
          _this22.itemSpecification = new _item_specification__WEBPACK_IMPORTED_MODULE_5__.ItemSpecification();
          _this22.purchaseUom = new _UOM__WEBPACK_IMPORTED_MODULE_8__.UOM();
          _this22.salesUOM = new _UOM__WEBPACK_IMPORTED_MODULE_8__.UOM();
          _this22.defaultPricingMethod = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__.LookupEntity();
          _this22.costOfSalesAccount = new _inventory_account__WEBPACK_IMPORTED_MODULE_2__.InventoryAccount();
          _this22.purchaseAccount = new _inventory_account__WEBPACK_IMPORTED_MODULE_2__.InventoryAccount();
          _this22.salesAccount = new _inventory_account__WEBPACK_IMPORTED_MODULE_2__.InventoryAccount();
          _this22.vedAnalysisType = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__.LookupEntity();
          _this22.cycleCountFrequency = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__.LookupEntity();
          _this22.fsnType = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__.LookupEntity();
          _this22.itemStores = new Array();
          _this22.alternateItems = new Array();
          return _this22;
        }

        return _Item;
      }(_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity);
      /***/

    },

    /***/
    52274:
    /*!*****************************************************!*\
      !*** ./src/app/master/item-master/masters/money.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Money": function Money() {
          return (
            /* binding */
            _Money
          );
        }
        /* harmony export */

      });

      var _Money = function _Money() {
        _classCallCheck(this, _Money);
      };
      /***/

    },

    /***/
    1850:
    /*!*********************************************************************!*\
      !*** ./src/app/master/item-master/masters/purchase-organization.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PurchaseOrganization": function PurchaseOrganization() {
          return (
            /* binding */
            _PurchaseOrganization
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _simple_profile_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./simple-profile-data */
      5520);

      var _PurchaseOrganization = /*#__PURE__*/function (_simple_profile_data_) {
        _inherits(_PurchaseOrganization, _simple_profile_data_);

        var _super9 = _createSuper(_PurchaseOrganization);

        function _PurchaseOrganization() {
          _classCallCheck(this, _PurchaseOrganization);

          return _super9.call(this);
        }

        return _PurchaseOrganization;
      }(_simple_profile_data__WEBPACK_IMPORTED_MODULE_0__.SimpleProfileData);
      /***/

    },

    /***/
    5520:
    /*!*******************************************************************!*\
      !*** ./src/app/master/item-master/masters/simple-profile-data.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SimpleProfileData": function SimpleProfileData() {
          return (
            /* binding */
            _SimpleProfileData
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _subBase_Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./subBase-Entity */
      50050);

      var _SimpleProfileData = /*#__PURE__*/function (_subBase_Entity__WEBP2) {
        _inherits(_SimpleProfileData, _subBase_Entity__WEBP2);

        var _super10 = _createSuper(_SimpleProfileData);

        function _SimpleProfileData() {
          _classCallCheck(this, _SimpleProfileData);

          return _super10.apply(this, arguments);
        }

        return _SimpleProfileData;
      }(_subBase_Entity__WEBPACK_IMPORTED_MODULE_0__.SubBaseEntity);
      /***/

    },

    /***/
    50050:
    /*!**************************************************************!*\
      !*** ./src/app/master/item-master/masters/subBase-Entity.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SubBaseEntity": function SubBaseEntity() {
          return (
            /* binding */
            _SubBaseEntity
          );
        }
        /* harmony export */

      });

      var _SubBaseEntity = function _SubBaseEntity() {
        _classCallCheck(this, _SubBaseEntity);
      };
      /***/

    },

    /***/
    12276:
    /*!**************************************************************!*\
      !*** ./src/app/master/item-master/pipes/search-item.pipe.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchItemPipe": function SearchItemPipe() {
          return (
            /* binding */
            _SearchItemPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _SearchItemPipe = /*#__PURE__*/function () {
        function SearchItemPipe() {
          _classCallCheck(this, SearchItemPipe);
        }

        _createClass(SearchItemPipe, [{
          key: "transform",
          value: function transform(value, args) {
            if (!args) {
              return value;
            }

            return value.filter(function (val) {
              var rVal = val.itemName.toLocaleLowerCase().includes(args) || val.itemDesc.toLowerCase().includes(args) || val.itemCode.toString().includes(args);
              return rVal;
            });
          }
        }]);

        return SearchItemPipe;
      }();

      _SearchItemPipe = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'searchItem'
      })], _SearchItemPipe);
      /***/
    },

    /***/
    68208:
    /*!********************************************************************!*\
      !*** ./src/app/master/item-master/services/item-master.service.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ItemMasterService": function ItemMasterService() {
          return (
            /* binding */
            _ItemMasterService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ItemMasterService = /*#__PURE__*/function () {
        function ItemMasterService(http) {
          _classCallCheck(this, ItemMasterService);

          this.http = http;
          this.baseUrl = "http://localhost:8080/springboot/api/v1";
        }

        _createClass(ItemMasterService, [{
          key: "getItemList",
          value: function getItemList() {
            return this.http.get("".concat(this.baseUrl, "/item/get"));
          }
        }, {
          key: "createItem",
          value: function createItem(item) {
            return this.http.post("".concat(this.baseUrl, "/item/add"), item);
          }
          /************************************************  Item Type Goes Here******************************************/

        }, {
          key: "getItemTypeList",
          value: function getItemTypeList() {
            return this.http.get("".concat(this.baseUrl, "/itemType/get"));
          }
        }, {
          key: "createItemType",
          value: function createItemType(itemType) {
            return this.http.post("".concat(this.baseUrl, "/itemType/add"), itemType);
          }
          /********************************************** Item Class Goes here  *********************************************************/

        }, {
          key: "getItemClassList",
          value: function getItemClassList() {
            return this.http.get("".concat(this.baseUrl, "/itemClass/get"));
          }
        }, {
          key: "createItemClass",
          value: function createItemClass(itemClass) {
            return this.http.post("".concat(this.baseUrl, "/itemClass/add"), itemClass);
          }
          /********************************************** Item Category Goes here  *********************************************************/

        }, {
          key: "getItemCategoryList",
          value: function getItemCategoryList() {
            return this.http.get("".concat(this.baseUrl, "/itemCategory/get"));
          }
        }, {
          key: "createItemCategory",
          value: function createItemCategory(itemCategory) {
            return this.http.post("".concat(this.baseUrl, "/itemCategory/add"), itemCategory);
          }
          /********************************************** UOM Goes here  *********************************************************/

        }, {
          key: "getUOMList",
          value: function getUOMList() {
            return this.http.get("".concat(this.baseUrl, "/uom/get"));
          }
        }, {
          key: "createUOM",
          value: function createUOM(uom) {
            return this.http.post("".concat(this.baseUrl, "/uom/add"), uom);
          }
          /********************************************** UOMType Goes here  *********************************************************/

        }, {
          key: "getUOMTypeList",
          value: function getUOMTypeList() {
            return this.http.get("".concat(this.baseUrl, "/uomType/get"));
          }
        }, {
          key: "createUOMType",
          value: function createUOMType(uomType) {
            return this.http.post("".concat(this.baseUrl, "/uomType/add"), uomType);
          }
          /********************************************** InventoryAccount Goes here  *********************************************************/

        }, {
          key: "getInventoryAccontList",
          value: function getInventoryAccontList() {
            return this.http.get("".concat(this.baseUrl, "/inventoryAccount/get"));
          }
        }, {
          key: "createInventoryAccount",
          value: function createInventoryAccount(inventoryAccount) {
            return this.http.post("".concat(this.baseUrl, "/inventoryAccount/add"), inventoryAccount);
          }
          /********************************************** ItemSuppliers Goes here  *********************************************************/

        }, {
          key: "getItemSuppliersList",
          value: function getItemSuppliersList() {
            return this.http.get("".concat(this.baseUrl, "/itemSuppliers/get"));
          }
        }, {
          key: "createItemSuppliers",
          value: function createItemSuppliers(itemSuppliers) {
            return this.http.post("".concat(this.baseUrl, "/itemSuppliers/add"), itemSuppliers);
          }
          /********************************************** ItemStores Goes here  *********************************************************/

        }, {
          key: "getItemStoresList",
          value: function getItemStoresList() {
            return this.http.get("".concat(this.baseUrl, "/itemStores/get"));
          }
        }, {
          key: "createItemStores",
          value: function createItemStores(itemStores) {
            return this.http.post("".concat(this.baseUrl, "/itemStores/add"), itemStores);
          }
          /********************************************** AlternateItem Goes here  *********************************************************/

        }, {
          key: "getAlternateItemList",
          value: function getAlternateItemList() {
            return this.http.get("".concat(this.baseUrl, "/alternateItem/get"));
          }
        }, {
          key: "createAlternateItem",
          value: function createAlternateItem(alternateItem) {
            return this.http.post("".concat(this.baseUrl, "/alternateItem/add"), alternateItem);
          }
          /********************************************** PurchaseOrganisation Goes here  *********************************************************/

        }, {
          key: "getPurchaseOrganisationList",
          value: function getPurchaseOrganisationList() {
            return this.http.get("".concat(this.baseUrl, "/purchaseOrganisation/get"));
          }
        }, {
          key: "createPurchaseOrganisation",
          value: function createPurchaseOrganisation(purchaseOrganisation) {
            return this.http.post("".concat(this.baseUrl, "/purchaseOrganisation/add"), purchaseOrganisation);
          }
          /********************************************** ItemSpecification Goes here  *********************************************************/

        }, {
          key: "getItemSpecificationList",
          value: function getItemSpecificationList() {
            return this.http.get("".concat(this.baseUrl, "/itemSpecification/get"));
          }
        }, {
          key: "createItemSpecification",
          value: function createItemSpecification(itemSpecification) {
            return this.http.post("".concat(this.baseUrl, "/itemSpecification/add"), itemSpecification);
          }
          /********************************************** itemBranchAccountMap Goes here  *********************************************************/

        }, {
          key: "getItemBranchAccountMapList",
          value: function getItemBranchAccountMapList() {
            return this.http.get("".concat(this.baseUrl, "/itemBranchAccountMap/get"));
          }
        }, {
          key: "createItemBranchAccountMap",
          value: function createItemBranchAccountMap(itemBranchAccountMap) {
            return this.http.post("".concat(this.baseUrl, "/itemBranchAccountMap/add"), itemBranchAccountMap);
          }
        }]);

        return ItemMasterService;
      }();

      _ItemMasterService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _ItemMasterService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _ItemMasterService);
      /***/
    },

    /***/
    68967:
    /*!**********************************************************************************************!*\
      !*** ./src/app/master/lookup-module/components/lookup-category/lookup-category.component.ts ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LookupCategoryComponent": function LookupCategoryComponent() {
          return (
            /* binding */
            _LookupCategoryComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_lookup_category_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./lookup-category.component.html */
      73258);
      /* harmony import */


      var _lookup_category_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lookup-category.component.css */
      29835);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../router.animations */
      74903);
      /* harmony import */


      var _masters_lookup_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../masters/lookup-category */
      23529);
      /* harmony import */


      var _services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/lookup.service */
      41168);

      var _LookupCategoryComponent = /*#__PURE__*/function () {
        function LookupCategoryComponent(http, router, lookupService) {
          _classCallCheck(this, LookupCategoryComponent);

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

        _createClass(LookupCategoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.reloadData();
          }
        }, {
          key: "reloadData",
          value: function reloadData() {
            var _this23 = this;

            this.lookupService.getLookupCategoryList().subscribe(function (data) {
              _this23.lookupCategory = data, console.log(_this23.lookupCategory), _this23.len = data.length;
            });
            ;
          }
        }, {
          key: "details",
          value: function details(lookup) {
            this.submitted = !this.submitted;
            this.createLookup = lookup;
            this.isDetail = false;
          }
        }, {
          key: "gotoLookupEntity",
          value: function gotoLookupEntity(categoryId) {
            //console.log(categoryId);
            this.router.navigate(['/master/lookup-entity', categoryId]);
          }
        }, {
          key: "goto",
          value: function goto() {
            this.submitted = !this.submitted;
          }
        }, {
          key: "newLookupCategory",
          value: function newLookupCategory() {
            this.submitted = !this.submitted;
            this.isDetail = true;
            this.createLookup = new _masters_lookup_category__WEBPACK_IMPORTED_MODULE_3__.LookupCategory();
          }
        }, {
          key: "createLookupCategory",
          value: function createLookupCategory() {
            var _this24 = this;

            this.lookupService.createLookupCategory(this.createLookup).subscribe(function (data) {
              //console.log("This is return after saving "+data);
              _this24.submitted = !_this24.submitted;
              console.log(data);

              _this24.reloadData();
            });
          }
        }, {
          key: "updateLookupCategory",
          value: function updateLookupCategory() {
            var _this25 = this;

            this.lookupService.updateLookupCategory(this.createLookup.categoryId, this.createLookup).subscribe(function (data) {
              _this25.reloadData();

              _this25.show();
            });
          }
        }, {
          key: "deleteLookupCategory",
          value: function deleteLookupCategory() {
            var _this26 = this;

            this.lookupService.deleteLookupCategory(this.data.categoryId).subscribe(function (data) {
              console.log(data);

              _this26.reloadData();

              _this26.submitted = !_this26.submitted;
            });
          }
        }, {
          key: "show",
          value: function show() {
            this.submitted = true;
          }
        }]);

        return LookupCategoryComponent;
      }();

      _LookupCategoryComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: _services_lookup_service__WEBPACK_IMPORTED_MODULE_4__.LookupService
        }];
      };

      _LookupCategoryComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-lookup-category',
        template: _raw_loader_lookup_category_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_lookup_category_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LookupCategoryComponent);
      /***/
    },

    /***/
    79288:
    /*!******************************************************************************************!*\
      !*** ./src/app/master/lookup-module/components/lookup-entity/lookup-entity.component.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LookupEntityComponent": function LookupEntityComponent() {
          return (
            /* binding */
            _LookupEntityComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_lookup_entity_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./lookup-entity.component.html */
      53103);
      /* harmony import */


      var _lookup_entity_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lookup-entity.component.css */
      71256);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _masters_lookup_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../masters/lookup-category */
      23529);
      /* harmony import */


      var _masters_lookup_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../masters/lookup-entity */
      11697);
      /* harmony import */


      var _services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/lookup.service */
      41168);

      var _LookupEntityComponent = /*#__PURE__*/function () {
        function LookupEntityComponent(http, route, lookupService) {
          _classCallCheck(this, LookupEntityComponent);

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

        _createClass(LookupEntityComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.categoryId = this.route.snapshot.params['id'];
            this.reloadData(this.categoryId);
          }
        }, {
          key: "reloadData",
          value: function reloadData(id) {
            var _this27 = this;

            this.lookupService.getLookupEntityList(id).subscribe(function (data) {
              _this27.len = data.length;
              _this27.lookupEntity = data, _this27.submitted = true;
            });
            this.lookupService.getLookupCategoryById(this.categoryId).subscribe(function (data) {
              _this27.lookups = data;
              console.log("This is lookupCategory Data " + data);
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(addLookup) {
            this.createLookupEntity = addLookup.value;
            this.createLookupEntity.category = this.lookups;
            this.createLookup(this.createLookupEntity);
            console.warn(this.createLookupEntity.lookupId);
            console.log("categoryId : " + this.categoryId + "category is " + this.createLookupEntity.category.createdBy);
          }
        }, {
          key: "goto",
          value: function goto() {
            this.submitted = !this.submitted;
            this.submit = !this.submit;
          }
        }, {
          key: "details",
          value: function details(lookup) {
            this.submitted = !this.submitted;
            this.createLookupEntity = lookup;
            this.submit = true;
          }
        }, {
          key: "createLookup",
          value: function createLookup(entity) {
            var _this28 = this;

            this.lookupService.createLookupEntity(entity).subscribe(function (data) {
              _this28.reloadData(_this28.categoryId);
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "updateLookupEntity",
          value: function updateLookupEntity(lookup) {
            var _this29 = this;

            //console.log("Update button is working")
            //console.log(lookup);
            this.lookupService.updateLookupEntity(lookup.lookupId, lookup).subscribe(function (data) {
              //console.log(data);
              _this29.lookups = new _masters_lookup_category__WEBPACK_IMPORTED_MODULE_2__.LookupCategory();
              _this29.createLookupEntity = new _masters_lookup_entity__WEBPACK_IMPORTED_MODULE_3__.LookupEntity();

              _this29.reloadData(_this29.categoryId);

              alert("Updated Successfully");
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "deleteLookupEntity",
          value: function deleteLookupEntity(lookupId) {
            var _this30 = this;

            this.lookupService.deleteLookupEntity(lookupId).subscribe(function (data) {
              //console.log(data);
              _this30.reloadData(_this30.categoryId);
            });
          }
        }, {
          key: "addLookup",
          value: function addLookup() {
            this.submitted = false;
            this.submit = false;
            this.createLookupEntity = new _masters_lookup_entity__WEBPACK_IMPORTED_MODULE_3__.LookupEntity();
          }
        }]);

        return LookupEntityComponent;
      }();

      _LookupEntityComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
        }, {
          type: _services_lookup_service__WEBPACK_IMPORTED_MODULE_4__.LookupService
        }];
      };

      _LookupEntityComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-lookup-entity',
        template: _raw_loader_lookup_entity_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_lookup_entity_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LookupEntityComponent);
      /***/
    },

    /***/
    76560:
    /*!**********************************************************************!*\
      !*** ./src/app/master/lookup-module/lookup-module-routing.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LookupModuleRoutingModule": function LookupModuleRoutingModule() {
          return (
            /* binding */
            _LookupModuleRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _components_lookup_category_lookup_category_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/lookup-category/lookup-category.component */
      68967);
      /* harmony import */


      var _components_lookup_entity_lookup_entity_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/lookup-entity/lookup-entity.component */
      79288);

      var routes = [{
        path: 'lookupCategory',
        component: _components_lookup_category_lookup_category_component__WEBPACK_IMPORTED_MODULE_0__.LookupCategoryComponent
      }, {
        path: 'lookupEntity',
        component: _components_lookup_entity_lookup_entity_component__WEBPACK_IMPORTED_MODULE_1__.LookupEntityComponent
      }];

      var _LookupModuleRoutingModule = function LookupModuleRoutingModule() {
        _classCallCheck(this, LookupModuleRoutingModule);
      };

      _LookupModuleRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      })], _LookupModuleRoutingModule);
      /***/
    },

    /***/
    88143:
    /*!**************************************************************!*\
      !*** ./src/app/master/lookup-module/lookup-module.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LookupModuleModule": function LookupModuleModule() {
          return (
            /* binding */
            _LookupModuleModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _lookup_module_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lookup-module-routing.module */
      76560);
      /* harmony import */


      var _components_lookup_category_lookup_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/lookup-category/lookup-category.component */
      68967);
      /* harmony import */


      var _components_lookup_entity_lookup_entity_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/lookup-entity/lookup-entity.component */
      79288);
      /* harmony import */


      var _pipes_lookup_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pipes/lookup.pipe */
      5054);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared */
      51679);
      /* harmony import */


      var _pipes_lookupEntity_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pipes/lookupEntity.pipe */
      64508);

      var _LookupModuleModule = function LookupModuleModule() {
        _classCallCheck(this, LookupModuleModule);
      };

      _LookupModuleModule = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_components_lookup_category_lookup_category_component__WEBPACK_IMPORTED_MODULE_1__.LookupCategoryComponent, _components_lookup_entity_lookup_entity_component__WEBPACK_IMPORTED_MODULE_2__.LookupEntityComponent, _pipes_lookup_pipe__WEBPACK_IMPORTED_MODULE_3__.LookupPipe, _pipes_lookupEntity_pipe__WEBPACK_IMPORTED_MODULE_5__.LookupEntityPipe],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _lookup_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.LookupModuleRoutingModule, _shared__WEBPACK_IMPORTED_MODULE_4__.PageHeaderModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule]
      })], _LookupModuleModule);
      /***/
    },

    /***/
    5054:
    /*!***********************************************************!*\
      !*** ./src/app/master/lookup-module/pipes/lookup.pipe.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LookupPipe": function LookupPipe() {
          return (
            /* binding */
            _LookupPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _LookupPipe = /*#__PURE__*/function () {
        function LookupPipe() {
          _classCallCheck(this, LookupPipe);
        }

        _createClass(LookupPipe, [{
          key: "transform",
          value: function transform(value, args) {
            if (!args) {
              return value;
            }

            return value.filter(function (val) {
              var rVal = val.categoryName.toLocaleLowerCase().includes(args) || val.createdBy.toLowerCase().includes(args);
              return rVal;
            });
          }
        }]);

        return LookupPipe;
      }();

      _LookupPipe = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'lookup'
      })], _LookupPipe);
      /***/
    },

    /***/
    64508:
    /*!*****************************************************************!*\
      !*** ./src/app/master/lookup-module/pipes/lookupEntity.pipe.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LookupEntityPipe": function LookupEntityPipe() {
          return (
            /* binding */
            _LookupEntityPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _LookupEntityPipe = /*#__PURE__*/function () {
        function LookupEntityPipe() {
          _classCallCheck(this, LookupEntityPipe);
        }

        _createClass(LookupEntityPipe, [{
          key: "transform",
          value: function transform(value, args) {
            if (!args) {
              return value;
            }

            return value.filter(function (val) {
              var rVal = val.lookupCode.toLocaleLowerCase().includes(args.toLowerCase()) || val.description.toLowerCase().includes(args.toLowerCase()) || val.lookupValue.toLowerCase().includes(args.toLowerCase());
              return rVal;
            });
          }
        }]);

        return LookupEntityPipe;
      }();

      _LookupEntityPipe = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'lookupEntityPipe'
      })], _LookupEntityPipe);
      /***/
    },

    /***/
    22070:
    /*!*************************************************!*\
      !*** ./src/app/master/master-routing.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MasterRoutingModule": function MasterRoutingModule() {
          return (
            /* binding */
            _MasterRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _country_category_country_category_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./country-category/country-category.component */
      86571);
      /* harmony import */


      var _country_category_modules_district_district_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./country-category/modules/district/district.component */
      88220);
      /* harmony import */


      var _country_category_modules_state_state_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./country-category/modules/state/state.component */
      15868);
      /* harmony import */


      var _department_department_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./department/department.component */
      79281);
      /* harmony import */


      var _lookup_module_components_lookup_category_lookup_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lookup-module/components/lookup-category/lookup-category.component */
      68967);
      /* harmony import */


      var _lookup_module_components_lookup_entity_lookup_entity_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lookup-module/components/lookup-entity/lookup-entity.component */
      79288);
      /* harmony import */


      var _master_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./master.component */
      55429);
      /* harmony import */


      var _service_center_service_center_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./service-center/service-center.component */
      28656);
      /* harmony import */


      var _unit_master_unit_master_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./unit-master/unit-master.component */
      87554);

      var routes = [{
        path: '',
        component: _master_component__WEBPACK_IMPORTED_MODULE_6__.MasterComponent
      }, {
        path: 'lookup',
        component: _lookup_module_components_lookup_category_lookup_category_component__WEBPACK_IMPORTED_MODULE_4__.LookupCategoryComponent
      }, {
        path: 'department',
        component: _department_department_component__WEBPACK_IMPORTED_MODULE_3__.DepartmentComponent
      }, {
        path: 'country',
        component: _country_category_country_category_component__WEBPACK_IMPORTED_MODULE_0__.CountryCategoryComponent
      }, {
        path: 'lookup-entity/:id',
        component: _lookup_module_components_lookup_entity_lookup_entity_component__WEBPACK_IMPORTED_MODULE_5__.LookupEntityComponent
      }, {
        path: 'state/:id',
        component: _country_category_modules_state_state_component__WEBPACK_IMPORTED_MODULE_2__.StateComponent
      }, {
        path: 'district',
        component: _country_category_modules_district_district_component__WEBPACK_IMPORTED_MODULE_1__.DistrictComponent
      }, {
        path: 'serviceCenter',
        component: _service_center_service_center_component__WEBPACK_IMPORTED_MODULE_7__.ServiceCenterComponent
      }, {
        path: 'unitmaster',
        component: _unit_master_unit_master_component__WEBPACK_IMPORTED_MODULE_8__.UnitMasterComponent
      }, {
        path: 'itemmaster',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./item-master/item-master.module */
          15113)).then(function (m) {
            return m.ItemMasterModule;
          });
        }
      }];

      var _MasterRoutingModule = function MasterRoutingModule() {
        _classCallCheck(this, MasterRoutingModule);
      };

      _MasterRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
      })], _MasterRoutingModule);
      /***/
    },

    /***/
    55429:
    /*!********************************************!*\
      !*** ./src/app/master/master.component.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MasterComponent": function MasterComponent() {
          return (
            /* binding */
            _MasterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_master_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./master.component.html */
      90676);
      /* harmony import */


      var _master_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./master.component.css */
      99365);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _MasterComponent = /*#__PURE__*/function () {
        function MasterComponent() {
          _classCallCheck(this, MasterComponent);
        }

        _createClass(MasterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MasterComponent;
      }();

      _MasterComponent.ctorParameters = function () {
        return [];
      };

      _MasterComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-master',
        template: _raw_loader_master_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_master_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MasterComponent);
      /***/
    },

    /***/
    89992:
    /*!*****************************************!*\
      !*** ./src/app/master/master.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MasterModule": function MasterModule() {
          return (
            /* binding */
            _MasterModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _master_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./master-routing.module */
      22070);
      /* harmony import */


      var _master_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./master.component */
      55429);
      /* harmony import */


      var _shared_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/modules */
      41277);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _lookup_module_lookup_module_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lookup-module/lookup-module.module */
      88143);
      /* harmony import */


      var _department_department_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./department/department.module */
      70389);
      /* harmony import */


      var _service_center_service_center_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./service-center/service-center.module */
      31585);
      /* harmony import */


      var _unit_master_unit_master_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./unit-master/unit-master.module */
      70520);
      /* harmony import */


      var _country_category_country_category_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./country-category/country-category.module */
      54582);
      /* harmony import */


      var _item_master_item_master_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./item-master/item-master.module */
      15113);
      /* harmony import */


      var _country_category_modules_state_state_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./country-category/modules/state/state.module */
      2093);
      /* harmony import */


      var _country_category_modules_district_district_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./country-category/modules/district/district.module */
      51989);

      var _MasterModule = function MasterModule() {
        _classCallCheck(this, MasterModule);
      };

      _MasterModule = (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
        declarations: [_master_component__WEBPACK_IMPORTED_MODULE_1__.MasterComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _master_routing_module__WEBPACK_IMPORTED_MODULE_0__.MasterRoutingModule, _shared_modules__WEBPACK_IMPORTED_MODULE_2__.StatModule, _shared_modules__WEBPACK_IMPORTED_MODULE_2__.PageHeaderModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule, _lookup_module_lookup_module_module__WEBPACK_IMPORTED_MODULE_3__.LookupModuleModule, _department_department_module__WEBPACK_IMPORTED_MODULE_4__.DepartmentModule, _service_center_service_center_module__WEBPACK_IMPORTED_MODULE_5__.ServiceCenterModule, _unit_master_unit_master_module__WEBPACK_IMPORTED_MODULE_6__.UnitMasterModule, _country_category_country_category_module__WEBPACK_IMPORTED_MODULE_7__.CountryCategoryModule, _country_category_modules_state_state_module__WEBPACK_IMPORTED_MODULE_9__.StateModule, _country_category_modules_district_district_module__WEBPACK_IMPORTED_MODULE_10__.DistrictModule, _item_master_item_master_module__WEBPACK_IMPORTED_MODULE_8__.ItemMasterModule]
      })], _MasterModule);
      /***/
    },

    /***/
    33239:
    /*!********************************************************************!*\
      !*** ./src/app/master/service-center/pipes/service-search.pipe.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ServiceSearchPipe": function ServiceSearchPipe() {
          return (
            /* binding */
            _ServiceSearchPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ServiceSearchPipe = /*#__PURE__*/function () {
        function ServiceSearchPipe() {
          _classCallCheck(this, ServiceSearchPipe);
        }

        _createClass(ServiceSearchPipe, [{
          key: "transform",
          value: function transform(value, args) {
            if (!args) {
              return value;
            }

            return value.filter(function (val) {
              args = args.toLowerCase();
              var rVal = val.serviceCenterName.toLocaleLowerCase().includes(args) || val.serviceCenterType.lookupValue.toLowerCase().includes(args) || val.department.departmentName.toLowerCase().includes(args) || val.serviceCenterCode.toString().includes(args);
              return rVal;
            });
          }
        }]);

        return ServiceSearchPipe;
      }();

      _ServiceSearchPipe = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'serviceSearch'
      })], _ServiceSearchPipe);
      /***/
    },

    /***/
    26646:
    /*!************************************************************************!*\
      !*** ./src/app/master/service-center/service-center-routing.module.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ServiceCenterRoutingModule": function ServiceCenterRoutingModule() {
          return (
            /* binding */
            _ServiceCenterRoutingModule
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


      var _service_center_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./service-center.component */
      28656);

      var routes = [{
        path: '',
        component: _service_center_component__WEBPACK_IMPORTED_MODULE_0__.ServiceCenterComponent
      }];

      var _ServiceCenterRoutingModule = function ServiceCenterRoutingModule() {
        _classCallCheck(this, ServiceCenterRoutingModule);
      };

      _ServiceCenterRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ServiceCenterRoutingModule);
      /***/
    },

    /***/
    28656:
    /*!*******************************************************************!*\
      !*** ./src/app/master/service-center/service-center.component.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ServiceCenterComponent": function ServiceCenterComponent() {
          return (
            /* binding */
            _ServiceCenterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_service_center_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./service-center.component.html */
      7708);
      /* harmony import */


      var _service_center_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./service-center.component.css */
      46588);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../router.animations */
      74903);
      /* harmony import */


      var _department_services_department_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../department/services/department.service */
      25482);
      /* harmony import */


      var _lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../lookup-module/services/lookup.service */
      41168);
      /* harmony import */


      var _masters_service_center__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./masters/service-center */
      39758);
      /* harmony import */


      var _services_branch_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/branch-service.service */
      31582);

      var _ServiceCenterComponent = /*#__PURE__*/function () {
        function ServiceCenterComponent(branchServiceService, departmentService, lookupService) {
          _classCallCheck(this, ServiceCenterComponent);

          this.branchServiceService = branchServiceService;
          this.departmentService = departmentService;
          this.lookupService = lookupService;
          this.page = 1;
          this.pageSize = 5;
          this.submit = true;
          this.submitted = true;
          this.ifDetail = true;
        }

        _createClass(ServiceCenterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.submit = true;
            this.submitted = true;
            this.ifDetail = true;
            this.reloadData();
            this.getData();
          }
        }, {
          key: "getData",
          value: function getData() {
            var _this31 = this;

            this.branchServiceService.getBranch().subscribe(function (data) {
              _this31.branchList = data;
            });
            this.branchServiceService.getBlock().subscribe(function (data) {
              _this31.blockList = data;
            });
            this.branchServiceService.getFloor().subscribe(function (data) {
              _this31.floorList = data;
            });
            this.departmentService.getAllDepartments().subscribe(function (data) {
              _this31.departmentList = data;
            });
            this.lookupService.getAllLookupEntities().subscribe(function (data) {
              _this31.lookupEntityList = data;
              console.log(_this31.lookupEntityList);
            });
          }
        }, {
          key: "reloadData",
          value: function reloadData() {
            var _this32 = this;

            this.branchServiceService.getServiceCenter().subscribe(function (data) {
              console.log(data);
              _this32.serviceCenterList = data;
              _this32.len = data.length;
            });
          } //selectedLevel = this.floorList;

        }, {
          key: "showServiceCenter",
          value: function showServiceCenter() {
            this.submitted = true;
            this.submit = true;
            this.ifDetail = true;
          }
        }, {
          key: "newServiceCenter",
          value: function newServiceCenter() {
            this.serviceCenterDetails = new _masters_service_center__WEBPACK_IMPORTED_MODULE_5__.ServiceCenter();
            this.submitted = false;
            this.submit = false;
            this.ifDetail = false;
          }
        }, {
          key: "details",
          value: function details(serviceCenter) {
            this.serviceCenterDetails = serviceCenter;
            this.selectedValue = '';
            console.log(this.selectedValue);
            this.submit = true;
            this.ifDetail = false;
            this.id = this.serviceCenterDetails.serviceCenterId;
            console.log(this.serviceCenterDetails);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(form) {
            var _this33 = this;

            this.serviceCenterDetails = form.value;
            this.branchServiceService.createServiceCenter(this.serviceCenterDetails).subscribe(function (data) {
              console.log(data);
              _this33.serviceCenterDetails = new _masters_service_center__WEBPACK_IMPORTED_MODULE_5__.ServiceCenter();

              _this33.showServiceCenter();

              _this33.reloadData();
            });
          }
        }, {
          key: "update",
          value: function update(serviceCenterForm) {
            var _this34 = this;

            this.serviceCenterDetails = serviceCenterForm.value;

            var _iterator2 = _createForOfIteratorHelper(this.departmentList),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var i = _step2.value;

                if (i.departmentId == serviceCenterForm.value.department) {
                  this.serviceCenterDetails.department = i;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            var _iterator3 = _createForOfIteratorHelper(this.lookupEntityList),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _i = _step3.value;

                if (_i.lookupId == serviceCenterForm.value.serviceCenterType) {
                  this.serviceCenterDetails.serviceCenterType = _i;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            var _iterator4 = _createForOfIteratorHelper(this.branchList),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _i2 = _step4.value;

                if (_i2.id == serviceCenterForm.value.site) {
                  this.serviceCenterDetails.site = _i2;
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            var _iterator5 = _createForOfIteratorHelper(this.blockList),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var _i3 = _step5.value;

                if (_i3.blockId == serviceCenterForm.value.block) {
                  this.serviceCenterDetails.block = _i3;
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            var _iterator6 = _createForOfIteratorHelper(this.floorList),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _i4 = _step6.value;

                if (_i4.floorId == serviceCenterForm.value.floor) {
                  this.serviceCenterDetails.floor = _i4;
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            this.updateCenter = this.serviceCenterDetails;
            this.branchServiceService.updateServiceCenter(this.id, this.updateCenter).subscribe(function (data) {
              _this34.serviceCenterDetails = new _masters_service_center__WEBPACK_IMPORTED_MODULE_5__.ServiceCenter();
              alert("updated Successfulyy" + data);
              _this34.ifDetail = true;

              _this34.reloadData();
            });
          }
        }, {
          key: "create",
          value: function create() {}
        }]);

        return ServiceCenterComponent;
      }();

      _ServiceCenterComponent.ctorParameters = function () {
        return [{
          type: _services_branch_service_service__WEBPACK_IMPORTED_MODULE_6__.BranchServiceService
        }, {
          type: _department_services_department_service__WEBPACK_IMPORTED_MODULE_3__.DepartmentService
        }, {
          type: _lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__.LookupService
        }];
      };

      _ServiceCenterComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-service-center',
        template: _raw_loader_service_center_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_service_center_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ServiceCenterComponent);
      /***/
    },

    /***/
    31585:
    /*!****************************************************************!*\
      !*** ./src/app/master/service-center/service-center.module.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ServiceCenterModule": function ServiceCenterModule() {
          return (
            /* binding */
            _ServiceCenterModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _service_center_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./service-center.component */
      28656);
      /* harmony import */


      var _pipes_service_search_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pipes/service-search.pipe */
      33239);
      /* harmony import */


      var _service_center_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./service-center-routing.module */
      26646);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared */
      51679);

      var _ServiceCenterModule = function ServiceCenterModule() {
        _classCallCheck(this, ServiceCenterModule);
      };

      _ServiceCenterModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_service_center_component__WEBPACK_IMPORTED_MODULE_0__.ServiceCenterComponent, _pipes_service_search_pipe__WEBPACK_IMPORTED_MODULE_1__.ServiceSearchPipe],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _service_center_routing_module__WEBPACK_IMPORTED_MODULE_2__.ServiceCenterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, _shared__WEBPACK_IMPORTED_MODULE_3__.PageHeaderModule]
      })], _ServiceCenterModule);
      /***/
    },

    /***/
    91831:
    /*!***********************************************************************!*\
      !*** ./src/app/master/unit-master/masters/employee-master.service.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmployeeService": function EmployeeService() {
          return (
            /* binding */
            _EmployeeService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _EmployeeService = /*#__PURE__*/function () {
        function EmployeeService(http) {
          _classCallCheck(this, EmployeeService);

          this.http = http;
          this.baseUrl = "http://localhost:8080/springboot/api/v1/employees";
        }

        _createClass(EmployeeService, [{
          key: "getEmployee",
          value: function getEmployee() {
            return this.http.get("".concat(this.baseUrl));
          }
        }, {
          key: "updateEmployee",
          value: function updateEmployee(employeeId, employee) {
            return this.http.put("".concat(this.baseUrl, "/").concat(employeeId), employee);
          }
        }]);

        return EmployeeService;
      }();

      _EmployeeService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _EmployeeService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _EmployeeService);
      /***/
    },

    /***/
    80473:
    /*!***********************************************************!*\
      !*** ./src/app/master/unit-master/pipes/employee.pipe.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmployeePipe": function EmployeePipe() {
          return (
            /* binding */
            _EmployeePipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _EmployeePipe = /*#__PURE__*/function () {
        function EmployeePipe() {
          _classCallCheck(this, EmployeePipe);
        }

        _createClass(EmployeePipe, [{
          key: "transform",
          value: function transform(value, args) {
            if (!args) {
              return value;
            }

            return value.filter(function (val) {
              args = args.toLowerCase();
              var rVal = val.employee.firstName.toLocaleLowerCase().includes(args) || val.employee.employeeNo.toString().includes(args) || val.employee.employeeStatus.lookupValue.toLocaleLowerCase().includes(args);
              return rVal;
            });
          }
        }]);

        return EmployeePipe;
      }();

      _EmployeePipe = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'emppipe'
      })], _EmployeePipe);
      /***/
    },

    /***/
    94113:
    /*!****************************************************************!*\
      !*** ./src/app/master/unit-master/pipes/unit-emp-list.pipe.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UnitEmpListPipe": function UnitEmpListPipe() {
          return (
            /* binding */
            _UnitEmpListPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _UnitEmpListPipe = /*#__PURE__*/function () {
        function UnitEmpListPipe() {
          _classCallCheck(this, UnitEmpListPipe);
        }

        _createClass(UnitEmpListPipe, [{
          key: "transform",
          value: function transform(value, args) {
            if (!args) {
              return value;
            }

            return value.filter(function (val) {
              args = args.toLowerCase();
              var rVal = val.employee.firstName.toLocaleLowerCase().includes(args) || val.employee.employeeNo.toString().includes(args) || val.employee.branch.branchName.toLowerCase().includes(args);
              return rVal;
            });
          }
        }]);

        return UnitEmpListPipe;
      }();

      _UnitEmpListPipe = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'unitEmpList'
      })], _UnitEmpListPipe);
      /***/
    },

    /***/
    38484:
    /*!************************************************************!*\
      !*** ./src/app/master/unit-master/pipes/unit-list.pipe.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UnitListPipe": function UnitListPipe() {
          return (
            /* binding */
            _UnitListPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _UnitListPipe = /*#__PURE__*/function () {
        function UnitListPipe() {
          _classCallCheck(this, UnitListPipe);
        }

        _createClass(UnitListPipe, [{
          key: "transform",
          value: function transform(value, args) {
            if (!args) {
              return value;
            }

            return value.filter(function (val) {
              args = args.toLowerCase();
              var rVal = val.unitName.toLocaleLowerCase().includes(args) || val.unitId.toString().includes(args);
              return rVal;
            });
          }
        }]);

        return UnitListPipe;
      }();

      _UnitListPipe = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'unitList'
      })], _UnitListPipe);
      /***/
    },

    /***/
    87554:
    /*!*************************************************************!*\
      !*** ./src/app/master/unit-master/unit-master.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UnitMasterComponent": function UnitMasterComponent() {
          return (
            /* binding */
            _UnitMasterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_unit_master_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./unit-master.component.html */
      30010);
      /* harmony import */


      var _unit_master_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./unit-master.component.css */
      95854);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _department_services_department_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../department/services/department.service */
      25482);
      /* harmony import */


      var _lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../lookup-module/services/lookup.service */
      41168);
      /* harmony import */


      var _masters_employee_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./masters/employee-master.service */
      91831);
      /* harmony import */


      var _masters_unit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./masters/unit */
      56552);
      /* harmony import */


      var _services_unit_master_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/unit-master.service */
      20319);

      var _UnitMasterComponent = /*#__PURE__*/function () {
        function UnitMasterComponent(unitMasterService, departmetnService, lookupEntityService, employeeService, config, modalService, router) {
          _classCallCheck(this, UnitMasterComponent);

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

        _createClass(UnitMasterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.reloadData();
          }
        }, {
          key: "reloadData",
          value: function reloadData() {
            var _this35 = this;

            this.unitMasterService.getUnit().subscribe(function (data) {
              //console.log(data);
              _this35.unitList = data;
              _this35.len = data.length;
            });
            this.lookupEntityService.getAllLookupEntities().subscribe(function (data) {
              _this35.lookupEntityList = data;
            });
            this.unitMasterService.getUnitEmployeeMapping().subscribe(function (data) {
              _this35.unitEmployeeMappingList = data; //console.warn(this.unitEmployeeMappingList)
            });
            this.departmetnService.getAllDepartments().subscribe(function (data) {
              _this35.departmentList = data;
            });
          }
        }, {
          key: "showEmployee",
          value: function showEmployee(unit) {
            this.unitEmployeeList = [];
            this.unitEmployeeList = unit.unitEmployeeMappingList;
            this.empLen = unit.unitEmployeeMappingList.length;
            this.departmentId = unit.department.departmentId;
            console.log(this.departmentId);
            this.unitId = unit.unitId;
            this.unit = unit; //console.log(unit);

            this.submitted = false;
          }
        }, {
          key: "closeEmployee",
          value: function closeEmployee() {
            this.submitted = true;
          }
        }, {
          key: "employeeDetails",
          value: function employeeDetails(employee) {
            this.employeeDetail = employee;
            this.isDetail = false;
          }
        }, {
          key: "updateEmployeeDetails",
          value: function updateEmployeeDetails() {
            this.employeeService.updateEmployee(this.employeeDetail.employeeId, this.employeeDetail).subscribe(function (data) {
              console.log(data);
              alert("updated Successfully!!");
            });
          }
        }, {
          key: "closeEmployeeDetails",
          value: function closeEmployeeDetails() {
            this.isDetail = true;
          }
        }, {
          key: "addUnit",
          value: function addUnit(content) {
            this.isAdd = false;
            this.unit = new _masters_unit__WEBPACK_IMPORTED_MODULE_5__.Unit();
            this.open(content);
          }
        }, {
          key: "createUnit",
          value: function createUnit(newUnitForm) {
            var _this36 = this;

            console.log(newUnitForm.value);

            var _iterator7 = _createForOfIteratorHelper(this.departmentList),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var dept = _step7.value;

                if (dept.departmentId == newUnitForm.value.department) {
                  this.unit.department = dept;
                }
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }

            alert(this.unit.department.departmentId);
            this.unitMasterService.createUnit(this.unit).subscribe(function (data) {
              _this36.modalService.dismissAll();

              console.log(data);

              _this36.reloadData();

              _this36.isAdd = true;
            });
          }
        }, {
          key: "addEmployee",
          value: function addEmployee(empcontent) {
            var _this37 = this;

            this.unitMasterService.getOnlyRemainingEmployee(this.departmentId, this.unitId).subscribe(function (data) {
              _this37.unitEmployeeRemainingMappingArray = data;
              _this37.empUnitlen = _this37.unitEmployeeRemainingMappingArray.length;
              console.error(_this37.unitEmployeeRemainingMappingArray);
            });
            this.empcontent = empcontent;
            this.modalService.open(empcontent, {
              size: 'lg'
            });
          }
        }, {
          key: "open",
          value: function open(content) {
            this.modalService.open(content, {
              size: 'lg'
            });
          }
        }, {
          key: "updateUnit",
          value: function updateUnit(unitForm) {
            var _this38 = this;

            this.unitMasterService.updateUnit(this.unit.unitId, this.unit).subscribe(function (data) {
              console.log(data);
              alert("Updated successfully");

              _this38.reloadData();

              _this38.modalService.dismissAll();
            });
          }
        }, {
          key: "addEmployeeToUnit",
          value: function addEmployeeToUnit(unitEmployeeMapping) {
            var _this39 = this;

            console.warn(this.unitEmployeeList);
            this.unitEmployeeList.push(unitEmployeeMapping);
            console.warn(this.unitEmployeeList);
            this.unit.unitEmployeeMappingList = this.unitEmployeeList;
            this.unitMasterService.updateUnit(this.unitId, this.unit).subscribe(function (data) {
              //console.log(data);
              _this39.modalService.dismissAll();

              _this39.addEmployee(_this39.empcontent);

              _this39.reloadData();
            });
          }
        }, {
          key: "update",
          value: function update(unit, content) {
            this.isAdd = true;
            this.modalService.open(content, {
              size: 'lg'
            });
            this.unit = unit;
          }
        }, {
          key: "backToMaster",
          value: function backToMaster() {
            //console.log("Back to Master clicked!!!!!")
            this.router.navigate(['/master']);
          }
        }]);

        return UnitMasterComponent;
      }();

      _UnitMasterComponent.ctorParameters = function () {
        return [{
          type: _services_unit_master_service__WEBPACK_IMPORTED_MODULE_6__.UnitMasterService
        }, {
          type: _department_services_department_service__WEBPACK_IMPORTED_MODULE_2__.DepartmentService
        }, {
          type: _lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__.LookupService
        }, {
          type: _masters_employee_master_service__WEBPACK_IMPORTED_MODULE_4__.EmployeeService
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModalConfig
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }];
      };

      _UnitMasterComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-unit-master',
        template: _raw_loader_unit_master_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_unit_master_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _UnitMasterComponent);
      /***/
    },

    /***/
    70520:
    /*!**********************************************************!*\
      !*** ./src/app/master/unit-master/unit-master.module.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UnitMasterModule": function UnitMasterModule() {
          return (
            /* binding */
            _UnitMasterModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _unit_master_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./unit-master.component */
      87554);
      /* harmony import */


      var _pipes_unit_list_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pipes/unit-list.pipe */
      38484);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _pipes_employee_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pipes/employee.pipe */
      80473);
      /* harmony import */


      var _pipes_unit_emp_list_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pipes/unit-emp-list.pipe */
      94113);

      var _UnitMasterModule = function UnitMasterModule() {
        _classCallCheck(this, UnitMasterModule);
      };

      _UnitMasterModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_unit_master_component__WEBPACK_IMPORTED_MODULE_0__.UnitMasterComponent, _pipes_unit_list_pipe__WEBPACK_IMPORTED_MODULE_1__.UnitListPipe, _pipes_employee_pipe__WEBPACK_IMPORTED_MODULE_2__.EmployeePipe, _pipes_unit_emp_list_pipe__WEBPACK_IMPORTED_MODULE_3__.UnitEmpListPipe],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule]
      })], _UnitMasterModule);
      /***/
    },

    /***/
    19966:
    /*!************************************************************************!*\
      !*** ./src/app/master/country-category/country-category.component.css ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n.table th, .table td {\r\n    padding: .30rem;\r\n    vertical-align: center;\r\n    border-top: 1px solid #dee2e6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50cnktY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJjb3VudHJ5LWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRhYmxlIHRoLCAudGFibGUgdGQge1xyXG4gICAgcGFkZGluZzogLjMwcmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59Il19 */";
      /***/
    },

    /***/
    50395:
    /*!*********************************************************************************!*\
      !*** ./src/app/master/country-category/modules/district/district.component.css ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n.table th, .table td {\r\n    padding: .30rem;\r\n    vertical-align: center;\r\n    border-top: 1px solid #dee2e6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3RyaWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakMiLCJmaWxlIjoiZGlzdHJpY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udGFibGUgdGgsIC50YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiAuMzByZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    44031:
    /*!***************************************************************************!*\
      !*** ./src/app/master/country-category/modules/state/state.component.css ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n.table th, .table td {\r\n    padding: .30rem;\r\n    vertical-align: center;\r\n    border-top: 1px solid #dee2e6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3RhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udGFibGUgdGgsIC50YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiAuMzByZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    95823:
    /*!************************************************************!*\
      !*** ./src/app/master/department/department.component.css ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "input.ng-invalid.ng-touched\r\n{\r\n\tborder-left: 5px solid red;\r\n}\r\n\r\ninput.ng-valid.ng-touched {\r\n\tborder-left: 5px solid green;\r\n}\r\n\r\n.table th, .table td {\r\n    padding: .30rem;\r\n    vertical-align: center;\r\n    border-top: 1px solid #dee2e6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGFydG1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQywwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyw0QkFBNEI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJkZXBhcnRtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWRcclxue1xyXG5cdGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xyXG59XHJcblxyXG5pbnB1dC5uZy12YWxpZC5uZy10b3VjaGVkIHtcclxuXHRib3JkZXItbGVmdDogNXB4IHNvbGlkIGdyZWVuO1xyXG59XHJcblxyXG4udGFibGUgdGgsIC50YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiAuMzByZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    36684:
    /*!**************************************************************!*\
      !*** ./src/app/master/item-master/item-master.component.css ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\ninput.ng-invalid.ng-touched\r\n{\r\n\tborder-left: 5px solid red;\r\n}\r\n\r\ninput.ng-valid.ng-touched {\r\n\tborder-left: 5px solid green;\r\n}\r\n\r\n.form-control{\r\n\tpadding: 0;\r\n\tmargin: 0.25rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tbWFzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztDQUVDLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLDRCQUE0QjtBQUM3Qjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixlQUFlO0FBQ2hCIiwiZmlsZSI6Iml0ZW0tbWFzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkXHJcbntcclxuXHRib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuaW5wdXQubmctdmFsaWQubmctdG91Y2hlZCB7XHJcblx0Ym9yZGVyLWxlZnQ6IDVweCBzb2xpZCBncmVlbjtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbHtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdG1hcmdpbjogMC4yNXJlbTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    29835:
    /*!***********************************************************************************************!*\
      !*** ./src/app/master/lookup-module/components/lookup-category/lookup-category.component.css ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "input.ng-invalid.ng-touched\r\n{\r\n\tborder-left: 5px solid red;\r\n}\r\n\r\ninput.ng-valid.ng-touched {\r\n\tborder-left: 5px solid green;\r\n}\r\n\r\n.table th, .table td {\r\n    padding: .30rem;\r\n    vertical-align: center;\r\n    border-top: 1px solid #dee2e6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvb2t1cC1jYXRlZ29yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLDRCQUE0QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsNkJBQTZCO0FBQ2pDIiwiZmlsZSI6Imxvb2t1cC1jYXRlZ29yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkXHJcbntcclxuXHRib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuaW5wdXQubmctdmFsaWQubmctdG91Y2hlZCB7XHJcblx0Ym9yZGVyLWxlZnQ6IDVweCBzb2xpZCBncmVlbjtcclxufVxyXG5cclxuLnRhYmxlIHRoLCAudGFibGUgdGQge1xyXG4gICAgcGFkZGluZzogLjMwcmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59Il19 */";
      /***/
    },

    /***/
    71256:
    /*!*******************************************************************************************!*\
      !*** ./src/app/master/lookup-module/components/lookup-entity/lookup-entity.component.css ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "input.ng-invalid.ng-touched\r\n{\r\n\tborder-left: 5px solid red;\r\n}\r\n\r\ninput.ng-valid.ng-touched {\r\n\tborder-left: 5px solid green;\r\n}\r\n\r\ntable th, .table td {\r\n    padding: .30rem;\r\n    vertical-align: center;\r\n    border-top: 1px solid #dee2e6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvb2t1cC1lbnRpdHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQywwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyw0QkFBNEI7QUFDN0I7O0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJsb29rdXAtZW50aXR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWRcclxue1xyXG5cdGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xyXG59XHJcblxyXG5pbnB1dC5uZy12YWxpZC5uZy10b3VjaGVkIHtcclxuXHRib3JkZXItbGVmdDogNXB4IHNvbGlkIGdyZWVuO1xyXG59XHJcbnRhYmxlIHRoLCAudGFibGUgdGQge1xyXG4gICAgcGFkZGluZzogLjMwcmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59Il19 */";
      /***/
    },

    /***/
    99365:
    /*!*********************************************!*\
      !*** ./src/app/master/master.component.css ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n.table th, .table td {\r\n    padding: .30rem;\r\n    vertical-align: center;\r\n    border-top: 1px solid #dee2e6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsNkJBQTZCO0FBQ2pDIiwiZmlsZSI6Im1hc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi50YWJsZSB0aCwgLnRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmc6IC4zMHJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxufSJdfQ== */";
      /***/
    },

    /***/
    46588:
    /*!********************************************************************!*\
      !*** ./src/app/master/service-center/service-center.component.css ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n.table th, .table td {\r\n    padding: .30rem;\r\n    vertical-align: center;\r\n    border-top: 1px solid #dee2e6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2UtY2VudGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakMiLCJmaWxlIjoic2VydmljZS1jZW50ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udGFibGUgdGgsIC50YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiAuMzByZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    95854:
    /*!**************************************************************!*\
      !*** ./src/app/master/unit-master/unit-master.component.css ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n.table th, .table td {\r\n    padding: .30rem;\r\n    vertical-align: center;\r\n    border-top: 1px solid #dee2e6;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaXQtbWFzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakMiLCJmaWxlIjoidW5pdC1tYXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udGFibGUgdGgsIC50YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiAuMzByZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    31072:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master/country-category/country-category.component.html ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [@routerTransition]>\n\t<app-page-header [mainhead]=\"'Master'\"\n\t\t[mainheadLink]=\"'/master'\" [heading]=\"'Country Category'\"\n\t\t[icon]=\"'fa-bar-chart-o'\"></app-page-header>\n</div>\n\n<!-- First page goes here -->\n\n<div class = \"card\">\n\t<div class = \"card-head\" >\n\t\t<nav class = \"navbar bg-dark text-white\">\n\t\t\t<label>\tCountry Category</label>\n\t\t\t<input type = \"search\" [(ngModel)] = \"name\" *ngIf = \"submitted\">\n\t\t\t<button class = \"btn btn-success text-white\" (click) = \"show()\" *ngIf=\"!submitted\" >Show List</button>\n  \t\t\t<button class = \"btn btn-success text-white\" (click) = \"newCountry()\" *ngIf=\"submitted \" >Add New</button>\t\t\n  \t\t</nav>\n\t</div>\n\t<div class = \"card-body\" *ngIf = \"submitted\" >\n\t\t<table class = \"table text-center\" >\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>CountryName</th>\n\t\t\t\t\t<th>IsActive</th>\n\t\t\t\t\t<th>identification</th>\n\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t<th>States</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor = \"let country of country |country: name|slice: (page-1) * pageSize : page * pageSize\">\n\t\t\t\t\t<td><label>{{country.countryName}}</label></td>\n\t\t\t\t\t<td><label>{{country.active}}</label></td>\n\t\t\t\t\t<td><label>{{country.identification}}</label></td>\n  \t\t\t\t\t<td>\n  \t\t\t\t\t\t<button class = \"btn btn-primary btn-sm\" (click) = \"details(country)\">details</button>\n  \t\t\t\t\t</td>\n  \t\t\t\t\t<td><button (click) = \"gotoStates(country.countryId)\" class = \"btn btn-warning btn-sm\"><a>States</a></button></td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\t\n\t<!-- This is the naviagation button to the master back. -->\n\t\n<!-- Create Country and CountryDetails   goes here -->\n<div class = \"card-body p-0 m-0\">\n\t<div class=\"row\" *ngIf=\"!submitted\">\n  \t\t\t<div class=\"card-body\">\n  \t\t\t\t<div class = \"\" >\n  \t\t\t\t\t<form  >\n  \t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<label for=\"countryCode\">Country Code</label> \n\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"countryCode\" required\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createCountry.countryCode\" name=\"countryCode\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\t\t\t\n\t\t\t\t\t\t\t\t\t<label for=\"countryName\">Country Name</label> \n\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"countryName\" required\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createCountry.countryName\" name=\"countryName\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\t\t\t\n\t\t\t\t\t\t\t\t\t<label for=\"countryName\">Country PhoneCode</label> \n\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"countryPhoneCode\" required\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createCountry.countryPhoneCode\" name=\"countryPhoneCode\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<label for=\"identification\">identification</label>\n\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"identification\" required\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createCountry.identification\" name=\"identification\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<label>IsActive</label>\n\t\t\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t                        <label> <input type = \"checkbox\" name = \"active\" [(ngModel)] = \"createCountry.active\" ></label>\n\t\t\t                    </div>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<label>\t&nbsp;</label>\n\t\t\t\t\t\t\t\t<div class=\"checkbox\"> \n\t\t\t\t\t\t\t\t\t<button class = \"btn btn-success\" (click)= \"updateCountry(createCountry)\" *ngIf = \"submit\">update</button>&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t\t<button class = \"btn btn-danger\" (click) = \"deleteCountry()\" hidden>Delete</button>\n\t\t\t\t\t\t\t\t\t<button  class=\"btn btn-success\" (click)=\"onSubmit()\" *ngIf = \"!submit\">Add Country</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n  \t\t\t\t</div>\n  \t\t\t</div>  \t\t\t\n \t\t</div>\n \t</div>\n \t<div class = \"card-footer bg-info p-0 m-0\" >\n\t\t<div class = \"row  justify-content-center \">\n\t\t\t<ngb-pagination *ngIf = \"submitted && submit\"    [collectionSize]=\"len\" [(page)]=\"page\" [pageSize] = \"pageSize\"  [rotate]=\"true\"  [ellipses]=\"false\" class = \"col-md-10\"></ngb-pagination>\n\t\t\t<a routerLink = \"/master\" class = \"m-2\"><button class = \"btn-warning\" >Back to master</button></a>\n\t\t</div>\n\t</div>\n</div>\n";
      /***/
    },

    /***/
    8734:
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master/country-category/modules/district/district.component.html ***!
      \************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card\">\r\n\t<div class = \"card-head\">\r\n\t\t\r\n\t\t\t<nav class = \"navbar bg-dark text-white\">\r\n  \t\t\t\t<label>Country</label>\r\n  \t\t\t\t<button class = \"btn btn-success text-white\" routerLink = \"/master/country\">Select All</button>\r\n  \t\t\t</nav>\r\n  \t\t\t<div class = \"row\">\r\n\t\t\t<div class = \"col-md-3\">\r\n\t\t\t\t<label>Country Name :-&nbsp;&nbsp;</label>\r\n\t\t\t\t<label   name = \"countryName\" id = \"countryName\" *ngIf = \"true\" >{{country.countryName}}</label>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"col-md-3\">\r\n\t\t\t\t<label>Is Active :-&nbsp;&nbsp;</label>\r\n\t\t\t\t<input type = \"checkbox\" name = \"active\" [(ngModel)] = \"country.active\">\r\n\t\t\t</div>\r\n\t\t\t<div class = \"col-md-3\">\r\n\t\t\t\t<label>Country Code :-&nbsp;&nbsp;</label>\r\n\t\t\t\t<label  name = \"countryCode\" >{{country.countryCode}}</label>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"col-md-3\">\r\n\t\t\t\t<label>Identification :-&nbsp;&nbsp;</label>\r\n\t\t\t\t<label name = \"identification\" >{{country.identification}}</label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n  \t\t<nav class = \"navbar bg-dark text-white\">\r\n  \t\t\t<label>State</label>\r\n  \t\t\t<button class = \"btn btn-success text-white\" [routerLink] = '[\"/master/state\",countryId]' >Select All</button>\r\n  \t\t</nav>\r\n  \t\t        \t\t\t\t\t\t\t\t\t\r\n\t\t\r\n\t\t<div class = \"row\">\r\n\t\t\t<div class = \"col-md-3\">\r\n\t\t\t\t<label>State Name :-&nbsp;&nbsp;</label>\r\n\t\t\t\t<label   name = \"stateName\" id = \"stateName\"  >{{state.stateName}}</label>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"col-md-3\">\r\n\t\t\t\t<label>Is Active :-&nbsp;&nbsp;</label>\r\n\t\t\t\t<input type = \"checkbox\" name = \"active\" [(ngModel)] = \"state.active\">\r\n\t\t\t</div>\r\n\t\t\t<div class = \"col-md-3\">\r\n\t\t\t\t<label>State Code :-&nbsp;&nbsp;</label>\r\n\t\t\t\t<label  name = \"stateCode\" >{{state.stateCode}}</label>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"col-md-3\">\r\n\t\t\t\t<label>Description :-&nbsp;&nbsp;</label>\r\n\t\t\t\t<label name = \"description\" >{{state.description}}</label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!--  District section goes here  -->\r\n  \t\t<nav class = \"navbar bg-dark text-white\">\r\n  \t\t\t<label>Districts</label>\r\n  \t\t\t<input type = \"search\" [(ngModel)] = \"name\" *ngIf = \"submitted\">\r\n  \t\t\t<button class = \"btn btn-success text-white\" (click) = \"goto()\" *ngIf=\"!submitted\" >Show List</button>\r\n  \t\t\t<button class = \"btn btn-success text-white\" (click) = \"addNew()\" *ngIf=\"submitted\" >Add New</button>\r\n  \t\t</nav>\r\n\t<div class = \"card-body\">\r\n  \t\t<table class = \"table\" *ngIf=\"submitted\">\r\n  \t\t\t<thead>\r\n  \t\t\t\t<tr>\r\n  \t\t\t\t\t<th>District Name </th>\r\n  \t\t\t\t\t<th>District Code</th>\r\n  \t\t\t\t\t<th>Description</th>\r\n  \t\t\t\t\t<th>Is Active</th>\r\n  \t\t\t\t\t<th>Actions</th>\r\n  \t\t\t\t</tr>\r\n  \t\t\t</thead>\r\n  \t\t\t<tbody>\r\n  \t\t\t\t<tr *ngFor = \"let district of district |district: name|slice:  (page-1) * pageSize : page * pageSize \">\r\n  \t\t\t\t\t<td><label>{{district.districtName}}</label></td>\r\n  \t\t\t\t\t<td><label>{{district.districtCode}}</label></td>\r\n  \t\t\t\t\t<td><label>{{district.description}}</label></td>\r\n  \t\t\t\t\t<td><label>{{district.active}}</label></td>\r\n  \t\t\t\t\t<td>\r\n  \t\t\t\t\t\t\r\n  \t\t\t\t\t\t<button class = \"btn btn-primary btn-sm\"  (click) = \"details(district)\">details</button>&nbsp;\r\n  \t\t\t\t\t\t<button class = \"btn btn-danger btn-sm\" (click) = \"deleteDistrict(district.districtId)\" >Delete</button>\r\n  \t\t\t\t\t</td>\r\n  \t\t\t\t</tr>\r\n  \t\t\t</tbody>\r\n  \t\t</table>\r\n  \t<!--  District Details section goes here -->\r\n  \t\r\n\t\r\n\t<!-- Create District goes here -->\r\n\t\r\n\t<div class=\"row\" *ngIf=\"!submitted\">\r\n  \t\t\t<div class=\"card-body\">\r\n  \t\t\t\t<div class = \"\" >\r\n  \t\t\t\t\t<form #addDistrictForm = ngForm >\r\n  \t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"districtCode\">District Code</label> \r\n\t\t\t\t\t\t\t\t\t<input type=\"text\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"districtCode\" required\r\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createDistrict.districtCode\" name=\"districtCode\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"districtName\">District Name</label>\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\"\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"districtName\" required\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createDistrict.districtName\" name=\"districtName\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-1\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"defaultYesno\">Default</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t                        <label> <input type = \"checkbox\" name = \"defaultYesno\" [(ngModel)] = \"createDistrict.defaultYesno\" ></label>\r\n\t\t\t                    </div>\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-1\">\r\n\t\t\t\t\t\t\t\t<label>Active</label>\r\n\t\t\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t                        <label> <input type = \"checkbox\" name = \"active\" [(ngModel)] = \"createDistrict.active\" ></label>\r\n\t\t\t                    </div>\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\t\t\t\r\n\t\t\t\t\t\t\t\t\t<label for=\"description\">Description</label> \r\n\t\t\t\t\t\t\t\t\t<input type=\"text\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"description\" required\r\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createDistrict.description\" name=\"description\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"col-sm-1\">&nbsp;\r\n\t\t\t\t\r\n\t\t\t\t\t\t\t\t<button class = \"btn btn-primary btn-sm\" (click)= \"updateDistrict(createDistrict)\" *ngIf = \"submit\">update</button>\r\n\t\t\t\t\t\t\t\t<button (click)=\"onSubmit(addDistrictForm)\" class=\"btn btn-success btn-sm\" *ngIf = \"!submit\">Add District</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n  \t\t\t\t</div>\r\n  \t\t\t</div>  \t\t\t\r\n  \t\t</div>\r\n  \t\r\n\t\r\n\t</div>\r\n\t<div class = \"card-footer bg-info p-0 m-0\" >\r\n\t\t<div class = \"row justify-content-center \">\r\n\t\t\t<ngb-pagination *ngIf = \"submitted\" [collectionSize]=\"len\" [(page)]=\"page\" [pageSize] = \"pageSize\"  [rotate]=\"true\"  [ellipses]=\"false\" class = \"col-md-10\"></ngb-pagination>\r\n\t\t\t<a routerLink = \"/master\" class = \"m-2\"><button class = \"btn-warning\" >Back to master</button></a>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
      /***/
    },

    /***/
    74754:
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master/country-category/modules/state/state.component.html ***!
      \******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card\">\n\t<div class = \"card-head\">\n  \t\t<nav class = \"navbar bg-dark text-white\">\n  \t\t\t<label>Country</label>\n  \t\t\t<button class = \"btn btn-success text-white btn-sm\" routerLink = \"/master/country\">Select All</button>\n  \t\t</nav>\n\t\t<div class = \"row\">\n\t\t\t<div class = \"col-md-3\">\n\t\t\t\t<label>Country Name :-&nbsp;&nbsp;</label>\n\t\t\t\t<label   name = \"countryName\" id = \"countryName\" *ngIf = \"true\" >{{country.countryName}}</label>\n\t\t\t</div>\n\t\t\t<div class = \"col-md-3\">\n\t\t\t\t<label>Is Active :-&nbsp;&nbsp;</label>\n\t\t\t\t<input type = \"checkbox\" name = \"active\" [(ngModel)] = \"country.active\">\n\t\t\t</div>\n\t\t\t<div class = \"col-md-3\">\n\t\t\t\t<label>Country Code :-&nbsp;&nbsp;</label>\n\t\t\t\t<label  name = \"countryCode\" >{{country.countryCode}}</label>\n\t\t\t</div>\n\t\t\t<div class = \"col-md-3\">\n\t\t\t\t<label>Identification :-&nbsp;&nbsp;</label>\n\t\t\t\t<label name = \"identification\" >{{country.identification}}</label>\n\t\t\t</div>\n\t\t</div>\n  \t\t\n  \t\t<!--  State section goes here  -->\n  \t\t<nav class = \"navbar bg-dark text-white\">\n  \t\t\t<label>States</label>\n  \t\t\t<input type = \"search\" [(ngModel)] = \"name\" *ngIf = \"submitted\">\n  \t\t\t<button class = \"btn btn-success text-white btn-sm\" (click) = \"goto()\" *ngIf=\"!submitted\" >Show List</button>\n  \t\t\t<button class = \"btn btn-success text-white btn-sm\" (click) = \"addState()\" *ngIf=\"submitted\" >Add New</button>\n  \t\t</nav>\n \t </div>\n\n  \t<div class = \"card-body\">\n  \t\t<table class = \"table\" *ngIf=\"submitted\">\n  \t\t\t<thead>\n  \t\t\t\t<tr>\n  \t\t\t\t\t<th>State Name </th>\n  \t\t\t\t\t<th>State Code</th>\n  \t\t\t\t\t<th>Description</th>\n  \t\t\t\t\t<th>Is Active</th>\n  \t\t\t\t\t<th>Actions</th>\n  \t\t\t\t\t<th>Districts</th>\n  \t\t\t\t</tr>\n  \t\t\t</thead>\n  \t\t\t<tbody>\n  \t\t\t\t<tr *ngFor = \"let state of state |state: name |slice: (page-1) * pageSize : page * pageSize\">\n  \t\t\t\t\t<td><label>{{state.stateName}}</label></td>\n  \t\t\t\t\t<td><label>{{state.stateCode}}</label></td>\n  \t\t\t\t\t<td><label>{{state.description}}</label></td>\n  \t\t\t\t\t<td><label>{{state.active}}</label></td>\n  \t\t\t\t\t<td>\n  \t\t\t\t\t\t<button class = \"btn btn-primary btn-sm\"  (click) = \"details(state)\">details</button>\n  \t\t\t\t\t</td>\n  \t\t\t\t\t<td><button (click) = \"gotoDistricts(state.stateId)\" class = \"btn btn-warning btn-sm\"><a>Districts</a></button></td>\n  \t\t\t\t</tr>\n  \t\t\t</tbody>\n  \t\t</table>\n \n  \t<!-- Create state and State Details  goes here  -->\n  \t\t<div class=\"row\" *ngIf=\"!submitted\">\n  \t\t\t\t\t<form #addForm = ngForm  >\n  \t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t<label for=\"stateCode\">State Code</label> \n\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"stateCode\" required\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createState.stateCode\" name=\"stateCode\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t<label for=\"lookupValue\">State Name</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"stateName\" required\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createState.stateName\" name=\"stateName\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t\t<label for=\"lookupValue\">Default</label>\n\t\t\t\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t                        <label> <input type = \"checkbox\" name = \"defaultYesno\" [(ngModel)] = \"createState.defaultYesno\" ></label>\n\t\t\t                    </div>\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t<label>Active</label>\n\t\t\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t                        <label> <input type = \"checkbox\" name = \"active\" [(ngModel)] = \"createState.active\" ></label>\n\t\t\t                    </div>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\t\t\t\n\t\t\t\t\t\t\t\t\t<label for=\"description\">Description</label> \n\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"description\" required\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createState.description\" name=\"description\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t\t<button class = \"btn btn-success\" (click)= \"updateState(createState)\" *ngIf = \"submit\">update</button>&nbsp;\n\t\t\t\t\t\t\t\t\t<button  class=\"btn btn-success\" *ngIf = \"!submit\" (click)=\"onSubmit(addForm)\">Add State</button>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<button class = \"btn btn-danger\" (click) = \"deleteState(createState.stateId)\" hidden >Delete</button>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n  \t\t\t\t</div>\n  \t\t\t</div>  \t\t\t\n  \t<div class = \"card-footer bg-info p-0 m-0\" >\n  \t\t<div class = \"row justify-content-center \">\n\t\t\t<ngb-pagination *ngIf = \"submitted\"  [collectionSize]=\"len\" [(page)]=\"page\" [pageSize] = \"pageSize\"  [rotate]=\"true\"  [ellipses]=\"false\" class = \"col-md-10\"></ngb-pagination>\n\t\t\t<a routerLink = \"/master\" class = \"m-2\" ><button class = \"btn-warning\" >Back to master</button></a>\n\t\t</div>\n\t</div>\n</div>\n  \t\t\t\t";
      /***/
    },

    /***/
    80839:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master/department/department.component.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [@routerTransition]>\r\n\t<app-page-header [mainhead]=\"'Master'\"\r\n\t\t[mainheadLink]=\"'/master'\" [heading]=\"'Department Category'\"\r\n\t\t[icon]=\"'fa-bar-chart-o'\"></app-page-header>\r\n</div>\r\n\r\n<div class = \"card\">\r\n\t<nav class = \"navbar text-white bg-dark\">\r\n\t\t\t<label *ngIf = \"(submitted && !submit)\">Create Department &nbsp;</label>\r\n\t\t\t<label *ngIf = \"!(submitted && !submit)\">Department Master &nbsp;</label>\r\n\t\t\t<input type = \"text\" placeholder = \"search here\" [(ngModel)] = \"search\" *ngIf = \"submit\">\r\n\t\t\t<button class = \"btn btn-success text-white\" (click) = \"showDepartments()\" *ngIf=\"!(submitted && submit)\" >Show List</button>\r\n  \t\t\t<button class = \"btn btn-success text-white\" (click) = \"newDepartment()\" *ngIf=\"submitted && submit\" >Add New</button>\t\t\r\n\t</nav>\r\n\r\n<!-- Show Department list part begins here -->\t\r\n\r\n<div class = \"row card-body\" *ngIf = \"submit\">\r\n\t<div class =\"col-md-12\">\r\n\t<table class = 'table' >\r\n\t\t<thead>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>DepartmentCode</th>\r\n\t\t\t\t<th>Department Name</th>\r\n\t\t\t\t<th>Description</th>\r\n\t\t\t\t<th>Branch</th>\r\n\t\t\t\t<th>Started On</th>\r\n\t\t\t\t<th>H.O.D </th>\r\n\t\t\t\t<th>Active</th>\r\n\t\t\t\t<th>Action</th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody>\r\n\t\t\t<tr *ngFor = \"let dep of departments | depsearch:search |slice: (page-1) * pageSize : page * pageSize\">\r\n\t\t\t\t<td>{{dep.departmentCode}}</td>\r\n\t\t\t\t<td>{{dep.departmentName}}</td>\r\n\t\t\t\t<td>{{dep.description}}</td>\r\n\t\t\t\t<td>{{dep.site.branchName}}</td>\r\n\t\t\t\t<td>{{dep.startedOn}}</td>\r\n\t\t\t\t<td>{{dep.hod}}</td>\r\n\t\t\t\t<td>{{dep.active}}</td>\r\n\t\t\t\t<td><button class = \"btn\" (click) = \"details(dep)\" ><i class = \"fa fa-edit\"></i></button></td>\r\n\t\t\t\t\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t</table>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n<!--  Update and Details Department Part begins here -->\r\n\r\n<div class = \"card-footer p-0 m-0\" *ngIf = \"!submitted && submit\" >\r\n\t<form #departmentForm = \"ngForm\" (ngSubmit) = \"OnSubmit(departmentForm)\">\r\n\t\t<nav class = \"navbar bg-dark text-light text-center\"><label>Department Details</label></nav><br>\r\n\t\t\t<div class = \"row p-2\">\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Department's  Code</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-6\" [(ngModel)] = \"dep.departmentCode\" ngModel name = \"departmentCode\" required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Department Name</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-6\" placeholder = \"DENTAL\" [(ngModel)] = \"dep.departmentName\" ngModel name = \"departmentName\" required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Department TypeId</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-6\" [(ngModel)] = \"dep.departmentTypeId\" name = \"departmentTypeId\" ngModel required>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row p-2\">\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Description</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-6\" [(ngModel)] = \"dep.description\" name = \"description\" ngModel>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Started On</label>\r\n\t\t\t\t\t<input type = \"date\" class = \"col-md-6\" [(ngModel)] = \"dep.startedOn\" name = \"startedOn\" ngModel required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">H.O.D</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-6\" [(ngModel)] = \"dep.hod\" name = \"hod\" ngModel>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row p-2\">\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Is Active</label>\r\n\t\t\t\t\t<input type = \"checkbox\"  class = \"col-md-6\" [(ngModel)] = \"dep.active\" name = \"active\" ngModel>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">created By</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-6\" placeholder = \"DENTAL\" [(ngModel)] = \"dep.createdBy\" name = \"createdBy\" ngModel required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Image Name</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-6\" [(ngModel)] = \"dep.imageName\" placeholder = \"dep.imageName\" name = \"imageName\" ngModel>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row p-2\">\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Branch</label>\r\n\t\t\t\t\t<select class = \"col-md-6\" [(ngModel)] = \"dep.site.id\" name = \"site\" id = \"site\">\r\n\t\t\t\t\t\t<ng-container *ngFor = \"let site of branchList\">\r\n\t\t\t\t\t\t\t<option [ngValue] = \"site.id\">{{site.branchName}}</option>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<button type = \"submit\" class = \"btn btn-success btn-sm p-0 ml-3\">Update Department</button><br><br>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t</form>\r\n</div>\r\n\r\n<!-- Create Department Part begins here -->\r\n\r\n<div class = \"card-body p-0 m-0\" *ngIf = \"submitted && !submit\">\r\n\t<form #createDocForm = \"ngForm\" (ngSubmit) = \"onSubmit(createDocForm)\">\r\n\t\t<div class = \"border col-md-12  rounded  \" ><br>\r\n\t\t\t<div class = \"row\">\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Department Code</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-6\"  ngModel name = \"departmentCode\" required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Department Name</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-6\" placeholder = \"DENTAL\"  ngModel name = \"departmentName\" required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Description</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-6\"  name = \"description\" ngModel>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row\">\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">created  On</label>\r\n\t\t\t\t\t<input type = \"date\" class = \"col-md-6\" placeholder = \"05/04/2021\"  name = \"createdDate\" ngModel required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Started On</label>\r\n\t\t\t\t\t<input type = \"date\" class = \"col-md-6\" placeholder = \"DENTAL\"  name = \"startedOn\" ngModel required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">H.O.D</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-6\"  name = \"hod\" ngModel>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row\">\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Is Active</label>\r\n\t\t\t\t\t<input type = \"checkbox\"  class = \"col-md-6\"  name = \"active\" ngModel>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">created By</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-6\" placeholder = \"Admin\"  name = \"createdBy\" ngModel required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Image Name</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-6\"  placeholder = \"Enter the path to the image\" name = \"imageName\" ngModel>\r\n\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Branch</label>\r\n\t\t\t\t\t<select class = \"col-md-6\" [(ngModel)] = \"dep.site\" name = \"site\" id = \"site\">\r\n\t\t\t\t\t\t<ng-container *ngFor = \"let site of branchList\">\r\n\t\t\t\t\t\t\t<option [ngValue] = \"site\">{{site.branchName}}</option>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<button type = \"submit\" class = \"btn btn-success btn-sm ml-3 \">Create Department</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div><br><br>\r\n\t\t</div>\r\n\r\n\t</form>\r\n\r\n</div>\r\n\r\n\t<div class = \"card-footer bg-info p-0 m-0\" >\r\n\t\t<div class = \"row justify-content-center \">\r\n\t\t\t<ngb-pagination *ngIf = \"submit\" [collectionSize]=\"len\" [(page)]=\"page\" [pageSize] = \"pageSize\"  [rotate]=\"true\"  [ellipses]=\"false\" class = \"col-md-10\"></ngb-pagination>\r\n\t\t\t<a routerLink = \"/master\" class = \"m-2\" ><button class = \"btn-warning\" >Back to master</button></a>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
      /***/
    },

    /***/
    21166:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master/item-master/item-master.component.html ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [@routerTransition]>\r\n\t<app-page-header [mainhead]=\"'Master'\"\r\n\t\t[mainheadLink]=\"'/master'\" [heading]=\"'Item Category'\"\r\n\t\t[icon]=\"'fa-list-alt'\"></app-page-header>\r\n</div>\r\n<div class = \"card\">\r\n\t<div class = \"card-head\">\r\n\t\t<nav class = \"navbar text-white bg-dark\">\r\n\t\t\t<h3 *ngIf = \"!isList\">Create Item&nbsp;</h3>\r\n\t\t\t<h3 *ngIf = \"isList\">Item Master &nbsp;</h3>\r\n\t\t\t<input type = \"text\" placeholder = \"search here\" *ngIf = \"isList\" [(ngModel)] = \"searchItem\">\r\n\t\t\t<button class = \"btn bg-success  text-white\" (click) = \"showItemList()\" *ngIf = \"!isList\">Show List</button>\r\n  \t\t\t<button class = \"btn bg-success text-white\" (click) = \"addItem()\" *ngIf = \"isList\">Add New</button>\t\t\r\n\t</nav>\r\n\t</div>\r\n\t<div class = \"card-body\" *ngIf = \"isList\">\r\n\t\t<div class = \"row\">\r\n\t\t\t<table class = 'table'>\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th>Item Code</th>\r\n\t\t\t\t\t\t<th>Item Name</th>\r\n\t\t\t\t\t\t<th>Item Description</th>\r\n\t\t\t\t\t\t<th>Item Category</th>\r\n\t\t\t\t\t\t<th>Item Group</th>\r\n\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr *ngFor = \"let item of itemList| searchItem: searchItem |slice: (page-1) * pageSize : page * pageSize\">\r\n\t\t\t\t\t\t<td>{{item.itemCode}}</td>\r\n\t\t\t\t\t\t<td>{{item.itemName}}</td>\r\n\t\t\t\t\t\t<td>{{item.itemDesc}}</td>\r\n\t\t\t\t\t\t<td>{{item.itemCategory.description}}</td>\r\n\t\t\t\t\t\t<td>{{item.itemClass.itemClassDesc}}</td>\r\n\t\t\t\t\t\t<td><i class = \"fa fa-edit\"></i></td>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n\t<form [formGroup] = \"createItemForm\" *ngIf = \"!isList\">\r\n\t\t<div class =\"card-body\">\r\n\t\r\n\t\t\t<div class = \"row \">\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Item Code</label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<input  type=\"text\" class = \"form-control\" formControlName = \"itemCode\"/>\r\n\t\t\t\t</div><br>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Item Name</label>\r\n\t\t\t\t<div class =\"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<input type=\"text\" class=\"textbox form-control\" formControlName = \"itemName\">\r\n\t\t\t\t</div><br>\r\n\t\t\t\t<label class= \"col-sm-3 col-md-2\">Item Description<font class=\"star\">*</font></label>\r\n\t\t\t\t<div class= \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<input  type=\"text\" class=\"textbox form-control\" formControlName = \"itemDescription\">\r\n\t\t\t\t</div><br>\r\n\t\t\t\t<label class= \"col-sm-3 col-md-2\"> Arbic Name<font class=\"star\">*</font></label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<input type=\"text\" value=\"\" class = \"form-control\" formControlName = \"arbicName\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class= \"col-sm-3 col-md-2\">Item Type<font class=\"star\">*</font></label>\r\n\t\t\t\t<div class= \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<select  class = \"form-control\" size=\"1\" formControlName = \"itemType\">\r\n\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t<option *ngFor = \"let itemType of itemTypeList\" [ngValue]=\"itemType\">{{itemType.itemTypeDesc}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class= \"col-sm-3 col-md-2\">Item Category<font class=\"star\">*</font></label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<select class = \"form-control\" size=\"1\" formControlName = \"itemCategory\">\r\n\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t<option *ngFor = \"let category of itemCategoryList\" [ngValue]=\"category\">{{category.description}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class= \"col-sm-3 col-md-2\">Item Group<font class=\"star\">*</font></label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<select  class = \"form-control\" size=\"1\" formControlName = \"itemGroup\">\r\n\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t<ng-container *ngFor = \"let lookup of lookupEntityList\">\r\n\t\t\t\t\t\t<option  [ngValue]=\"lookup\" *ngIf = \"lookup.category.categoryId == 24\">{{lookup.lookupValue}}</option>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Item Class<font class=\"star\">*</font></label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<select class = \"form-control\" size=\"1\" formControlName = \"itemClass\">\r\n\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t<option *ngFor = \"let itemClass of itemClassList\" [ngValue]=\"itemClass\">{{itemClass.itemClassDesc}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Stock Type</label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<select  class = \"form-control\" size=\"1\" formControlName = \"stockType\">\r\n\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t<ng-container *ngFor = \"let lookup of lookupEntityList\">\r\n\t\t\t\t\t\t<option  [ngValue]=\"lookup\" *ngIf = \"lookup.category.categoryId == 25\">{{lookup.lookupValue}}</option>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Procurement Type</label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<select  class = \"form-control\" size=\"1\" formControlName = \"procurementType\">\r\n\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t<ng-container *ngFor = \"let lookup of lookupEntityList\">\r\n\t\t\t\t\t\t<option  [ngValue]=\"lookup\" *ngIf = \"lookup.category.categoryId == 26\">{{lookup.lookupValue}}</option>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Base UOM</label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<select class = \"form-control\" size=\"1\" formControlName = \"baseUom\" (ngModelChange) = \"trackUom($event)\">\r\n\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t<option *ngFor = \"let uom of uomList\" [ngValue]=\"uom\">{{uom.name}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Track UOM</label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<select class = \"form-control\" size=\"1\" formControlName = \"trackUom\">\r\n\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t<ng-container *ngFor = \"let uom of uomList\">\r\n\t\t\t\t\t\t<option *ngIf = \"uomId === uom.uomId\"  [ngValue]=\"uom\">{{uom.name}}</option>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Distribution category<font class=\"star\">*</font></label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<select  class = \"form-control\" size=\"1\" formControlName = \"distributionCategory\">\r\n\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t<ng-container *ngFor = \"let lookup of lookupEntityList\">\r\n\t\t\t\t\t\t<option  [ngValue]=\"lookup\" *ngIf = \"lookup.category.categoryId == 49\">{{lookup.lookupValue}}</option>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Purchase Organisation<font class=\"star\">*</font></label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<select class = \"form-control\" size=\"1\" formControlName = \"purchaseOrg\" (ngModelChange) = \"trackUom($event)\">\r\n\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t<option *ngFor = \"let purchaseOrg of purchaseOrgList\" [ngValue]=\"purchaseOrg\">{{purchaseOrg.profileDesc}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Shelf Life Limit</label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<input type=\"text\" class=\"textbox form-control\" formControlName = \"selfLifeLimit\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Item Specification </label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<input type=\"text\" class=\"textbox form-control\" readonly=\"readonly\" formControlName = \"itemSpecification\">\r\n\t\t\t\t</div>\r\n\t\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">SFDA</label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2\">\r\n\t\t\t\t\t<input type=\"text\"class=\"textbox form-control\" formControlName = \"sfda\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4 col-sm-6\"></div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2 \">Inventorised</label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2 text-center\">\r\n\t\t\t\t\t<input type=\"checkbox\" checked=\"d\" formControlName = \"inventoried\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Is batch tracked</label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2 text-center\">\r\n\t\t\t\t\t<input type=\"checkbox\" checked=\"d\" formControlName = \"isBatchTracked\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Is expiry date required</label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2 text-center\">\r\n\t\t\t\t\t<input type=\"checkbox\" checked=\"d\" formControlName = \"isExpiryDateRequired\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Is serialized</label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2 text-center\">\r\n\t\t\t\t\t<input type=\"checkbox\" checked=\"d\" formControlName = \"isSerialized\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Active</label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2 text-center\">\r\n\t\t\t\t\t<input type=\"checkbox\" checked=\"d\" formControlName = \"active\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Is Approval Required</label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2 text-center\">\r\n\t\t\t\t\t<input type=\"checkbox\" checked=\"d\" formControlName = \"isApprovalRequired\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class = \"col-sm-3 col-md-2\">Is Insurance Cover</label>\r\n\t\t\t\t<div class = \"col-sm-3 col-md-2 text-center\">\r\n\t\t\t\t\t<input type=\"checkbox\" checked=\"d\" formControlName = \"isInsuranceCover\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class = \"card-body border border-dark p-1 m-0\">\r\n\t\t\t<ul ngbNav #nav=\"ngbNav\" class=\"nav-tabs\">\r\n\t\t\t\t<li [ngbNavItem]=\"1\">\r\n\t\t\t\t    <a ngbNavLink>Account and Sales Info.</a>\r\n\t\t\t\t    <ng-template ngbNavContent>\r\n\t\t\t    \t\t<div class = \"row\">\r\n\t\t\t    \t\t\t<label class = \"col-sm-3 col-md-3\">Purchase UOM</label>\r\n\t\t\t    \t\t\t<div class = \"col-sm-3 col-md-3\">\r\n\t\t\t    \t\t\t\t<select class = \"form-control\" size=\"1\" formControlName = \"purchaseUom\" (ngModelChange) = \"trackUom($event)\">\r\n\t\t\t\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t\t\t\t<option *ngFor = \"let uom of uomList\" [ngValue]=\"uom\">{{uom.name}}</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t    \t\t\t</div>\r\n\t\t\t    \t\t\t<label class = \"col-sm-3 col-md-3\">Sales UOM</label>\r\n\t\t\t    \t\t\t<div class = \"col-sm-3 col-md-3\">\r\n\t\t\t    \t\t\t\t<select class = \"form-control\" size=\"1\" formControlName = \"salesUOM\" (ngModelChange) = \"trackUom($event)\">\r\n\t\t\t\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t\t\t\t<option *ngFor = \"let uom of uomList\" [ngValue]=\"uom\">{{uom.name}}</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t    \t\t\t</div>\r\n\t\t\t    \t\t\t<label class = \"col-sm-3 col-md-3\">Default Pricing Method</label>\r\n\t\t\t    \t\t\t<div class = \"col-sm-3 col-md-3\">\r\n\t\t\t    \t\t\t\t<select  class = \"form-control\" size=\"1\" formControlName = \"defaultPricingMethod\">\r\n\t\t\t\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor = \"let lookup of lookupEntityList\">\r\n\t\t\t\t\t\t\t\t\t<option  [ngValue]=\"lookup\" *ngIf = \"lookup.category.categoryId == 27\">{{lookup.lookupValue}}</option>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t    \t\t\t</div>\r\n\t\t\t    \t\t\t<label class = \"col-sm-3 col-md-3\">Default Markup Percentage</label>\r\n\t\t\t    \t\t\t<div class = \"col-sm-3 col-md-3\">\r\n\t\t\t    \t\t\t\t<input type = \"text\" formControName = \"markupPercentage\">\r\n\t\t\t    \t\t\t</div>\r\n\t\r\n\t\t\t    \t\t\t<h3 class = \"col-sm-12\">Account Details:</h3>\r\n\t\t\t    \t\t\t<label class = \"col-sm-3 col-md-3\">Branch</label>\r\n\t\t\t    \t\t\t<div class = \"col-sm-3 col-md-3\">\r\n\t\t\t    \t\t\t\t<select class = \"form-control\" size=\"1\" formControlName = \"purchaseUom\">\r\n\t\t\t\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t\t\t\t<option *ngFor = \"let itemBranchAcc of itemBranchAccMapList\" [ngValue]=\"itemBranchAcc\">{{itemBranchAcc.branch.name}}</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t    \t\t\t\t<select class=\"combobox form-control\" size=\"1\" >\r\n\t\t\t\t\t\t\t\t\t<option value=\"\">-- Select --</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"2\">Ram Alaqrabiah</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"3\">Ram Khober Shamaliah</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"4\">Dar Ram</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"6\">Ram Rakah</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"7\">Ram Mubarkyah</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"8\">Ram Murikbat</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"10\">Ram Buhairah</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"11\">Ram Mubaraz</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"12\">Ram Hofuf</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"13\">Ram Qatif</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"14\">Ram Rahema</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"15\">Ram Jubail Industrial</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"16\">Ram Yanbu Industrial</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"17\">Ram Jeddah</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"18\">Ram Manamah</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"5\">Ram Doha</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"9\">Ram Faisalyah</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"20\">SCECO DAMMAM</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"21\">SCECO HASSA</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"19\">Saudi Swiss</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"22\">New Dawha</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t    \t\t\t</div>\r\n\t\t\t    \t\t\t<label class = \"col-sm-3 col-md-3\">Purchase/Inventory Acc.</label>\r\n\t\t\t    \t\t\t<div class = \"col-sm-3 col-md-3\">\r\n\t\t\t    \t\t\t\t<select class = \"form-control\" size=\"1\" formControlName = \"purchaseAccount\">\r\n\t\t\t\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t\t\t\t<option *ngFor = \"let purchaseAccount of inventoryAccountList\" [ngValue]=\"purchaseAccount\">{{purchaseAccount.accountDesc}}</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t    \t\t\t</div>\r\n\t\t\t    \t\t\t<label class = \"col-sm-3 col-md-3\">Cost Of Sales Acc.</label>\r\n\t\t\t    \t\t\t<div class = \"col-sm-3 col-md-3\">\r\n\t\t\t    \t\t\t\t<select class = \"form-control\" size=\"1\" formControlName = \"costOfSalesAccount\">\r\n\t\t\t\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t\t\t\t<option *ngFor = \"let costOfSalesAccount of inventoryAccountList\" [ngValue]=\"costOfSalesAccount\">{{costOfSalesAccount.accountDesc}}</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t    \t\t\t</div>\r\n\t\t\t    \t\t\t<label class = \"col-sm-3 col-md-3\">Sale Account</label>\r\n\t\t\t    \t\t\t<div class = \"col-sm-3 col-md-3\">\r\n\t\t\t    \t\t\t\t<select class = \"form-control\" size=\"1\" formControlName = \"salesAccount\">\r\n\t\t\t\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t\t\t\t<option *ngFor = \"let salesAccount of inventoryAccountList\" [ngValue]=\"salesAccount\">{{salesAccount.accountDesc}}</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t    \t\t\t</div>\r\n\t\t\t    \t\t</div>\r\n\t\t\t\t    </ng-template>\r\n\t\t\t\t  </li>\r\n\t\t\t\t  <li [ngbNavItem]=\"2\">\r\n\t\t\t\t    <a ngbNavLink>Stock</a>\r\n\t\t\t\t    <ng-template ngbNavContent>\r\n\t\t\t\t    \t<div class = \"row\">\r\n\t\t\t\t    \t\t<label class = \"col-md-3 col-sm-3\">VED Category</label>\r\n\t\t\t\t    \t\t<div class = \"col-md-3 col-sm-3\">\r\n\t\t\t\t    \t\t\t<select  class = \"form-control\" size=\"1\" formControlName = \"vedAnalysisType\">\r\n\t\t\t\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor = \"let lookup of lookupEntityList\">\r\n\t\t\t\t\t\t\t\t\t\t<option  [ngValue]=\"lookup\" *ngIf = \"lookup.category.categoryId == 47\">{{lookup.lookupValue}}</option>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t    \t\t</div>\r\n\t\t\t\t    \t\t<label class = \"col-md-3 col-sm-3\">Cycle Count Frequency</label>\r\n\t\t\t\t    \t\t<div class = \"col-md-3 col-sm-3\">\r\n\t\t\t\t    \t\t\t<select  class = \"form-control\" size=\"1\" formControlName = \"cycleCountFrequency\">\r\n\t\t\t\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor = \"let lookup of lookupEntityList\">\r\n\t\t\t\t\t\t\t\t\t\t<option  [ngValue]=\"lookup\" *ngIf = \"lookup.category.categoryId == 48\">{{lookup.lookupValue}}</option>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t    \t\t</div>\r\n\t\t\t\t    \t\t<label class = \"col-md-3 col-sm-3\">Reusable</label>\r\n\t\t\t\t    \t\t<div class = \"col-md-3 col-sm-3\">\r\n\t\t\t\t    \t\t\t<input type = \"checkbox\" class = \"text-center form-control\" formControlName = \"reusable\">\r\n\t\t\t\t    \t\t</div>\r\n\t\t\t\t    \t\t<label class = \"col-md-3 col-sm-3\">Reusable Count</label>\r\n\t\t\t\t    \t\t<div class = \"col-md-3 col-sm-3\">\r\n\t\t\t\t    \t\t\t<input type = \"text\" class =\"form-control\" formControlName = \"reusableCount\">\r\n\t\t\t\t    \t\t</div>\r\n\t\t\t\t    \t\t<label class = \"col-md-3 col-sm-3\">Item rate</label>\r\n\t\t\t\t    \t\t<div class = \"col-md-3 col-sm-3\">\r\n\t\t\t\t    \t\t\t<input type = \"text\" class =\"form-control\" formControlName = \"itemRate\">\r\n\t\t\t\t    \t\t</div>\r\n\t\t\t\t    \t\t<label class = \"col-md-3 col-sm-3\">Reserved Qty</label>\r\n\t\t\t\t    \t\t<div class = \"col-md-3 col-sm-3\">\r\n\t\t\t\t    \t\t\t<input type = \"text\" class =\"form-control\" formControlName = \"reserveQty\">\r\n\t\t\t\t    \t\t</div>\r\n\t\t\t\t    \t\t<label class = \"col-md-3 col-sm-3\">FsnType</label>\r\n\t\t\t\t    \t\t<div class = \"col-md-3 col-sm-3\">\r\n\t\t\t\t    \t\t\t<select  class = \"form-control\" size=\"1\" formControlName = \"fsnType\">\r\n\t\t\t\t\t\t\t\t\t<option [ngValue] = \"null\">--Select--</option>\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor = \"let lookup of lookupEntityList\">\r\n\t\t\t\t\t\t\t\t\t\t<option  [ngValue]=\"lookup\" *ngIf = \"lookup.category.categoryId == 50\">{{lookup.lookupValue}}</option>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t    \t\t</div>\r\n\t\t\t\t    \t\t<label class = \"col-md-3 col-sm-3\">Manufacturer Name</label>\r\n\t\t\t\t    \t\t<div class = \"col-md-3 col-sm-3\">\r\n\t\t\t\t    \t\t\t<input type = \"text\" class =\"form-control\" formControlName = \"manufacturerName\">\r\n\t\t\t\t    \t\t</div>\r\n\t\t\t\t    \t</div>\r\n\t\t\t\t    </ng-template>\r\n\t\t\t\t  </li>\r\n\t\t\t\t  <li [ngbNavItem]=\"3\">\r\n\t\t\t\t    <a ngbNavLink>Stores</a>\r\n\t\t\t\t    <ng-template ngbNavContent>\r\n\t\t\t\t    <div class =\"panel-body\">\r\n\t\t\t\t    \t<table class = \"table table-responsive border border-dark table-sm\" >\r\n\t\t\t\t    \t\t<thead>\r\n\t\t\t\t    \t\t\t<tr class = \"m-auto\">\r\n\t\t\t\t    \t\t\t\t<th>Store Code</th>\r\n\t\t\t\t    \t\t\t\t<th>Store Description</th>\r\n\t\t\t\t    \t\t\t\t<th>Min</th>\r\n\t\t\t\t    \t\t\t\t<th>Max</th>\r\n\t\t\t\t    \t\t\t\t<th>ReOrder Level</th>\r\n\t\t\t\t    \t\t\t\t<th>Lead Days</th>\r\n\t\t\t\t    \t\t\t\t<th>Ideal Days</th>\r\n\t\t\t\t    \t\t\t\t<th>Order Frequency</th>\r\n\t\t\t\t    \t\t\t\t<th>Consumption Period</th>\r\n\t\t\t\t    \t\t\t\t<th>Locators</th>\r\n\t\t\t\t    \t\t\t\t<th>Automate Stock Consumption</th>\r\n\t\t\t\t    \t\t\t\t<th>Auto Indenting</th>\r\n\t\t\t\t    \t\t\t\t\r\n\t\t\t\t    \t\t\t\t<th>Action</th>\r\n\t\t\t\t    \t\t\t</tr>\r\n\t\t\t\t    \t\t</thead>\r\n\t\t\t\t    \t\t<tbody>\r\n\t\t\t\t    \t\t\t<tr *ngFor = \"let store of itemStoreList\">\r\n\t\t\t\t    \t\t\t\t<td>{{store.itemStoreId}}</td>\r\n\t\t\t\t    \t\t\t\t<td>Store Description</td>\r\n\t\t\t\t    \t\t\t\t<td><input type = \"text\" [value] = \"store.min\" ></td>\r\n\t\t\t\t    \t\t\t\t<td><input type = \"text\" [value] = \"store.max\"></td>\r\n\t\t\t\t    \t\t\t\t<td><input type = \"text\" [value] = \"store.reOrderLevel\"></td>\r\n\t\t\t\t    \t\t\t\t<td><input type = \"text\" [value] = \"store.lead\"></td>\r\n\t\t\t\t    \t\t\t\t<td><input type = \"text\" [value] = \"store.ideal\"></td>\r\n\t\t\t\t    \t\t\t\t<td><input type = \"text\" [value] = \"store.orderFrequency\"></td>\r\n\t\t\t\t    \t\t\t\t<td><input type = \"text\" [value] = \"store.consumptionPeriod\"></td>\r\n\t\t\t\t    \t\t\t\t<td class = \"w-25\"><input type = \"text\" [value] = \"store.locatorName\"></td>\r\n\t\t\t\t    \t\t\t\t<td><input type = \"checkbox\" [value] = \"store.automateStock\" [checked] = \"store.automateStock\"></td>\r\n\t\t\t\t    \t\t\t\t<td><input type = \"checkbox\" [value] = \"store.isautoIndenting\"  [checked] = \"store.isautoIndenting\"></td>\r\n\t\t\t\t    \t\t\t\t\r\n\t\t\t\t    \t\t\t\t<td><i class = \"fa fa-edit fa-1x\"></i></td>\r\n\t\t\t\t    \t\t\t\t\r\n\t\t\t\t    \t\t\t</tr>\r\n\t\t\t\t    \t\t</tbody>\r\n\t\t\t\t    \t</table>\r\n\t\t\t\t    </div>\r\n\t\t\t\t     </ng-template>\r\n\t\t\t\t  </li>\r\n\t\t\t\t  <li [ngbNavItem] = \"4\">\r\n\t\t\t\t \t<a ngbNavLink>Alternate Items</a>\r\n\t\t\t\t \t<ng-template ngbNavContent>\r\n\t\t\t\t \t\t<div class = \"panel-body\">\r\n\t\t\t\t\t \t\t<table class = \"table table-responsive\">\r\n\t\t\t\t\t \t\t\t<thead>\r\n\t\t\t\t\t \t\t\t\t<tr>\r\n\t\t\t\t\t\t \t\t\t\t<td>Item Code</td>\r\n\t\t\t\t\t\t \t\t\t\t<td>Item Name</td>\r\n\t\t\t\t\t\t \t\t\t\t<td>Action</td>\r\n\t\t\t\t\t \t\t\t\t</tr>\r\n\t\t\t\t\t \t\t\t</thead>\r\n\t\t\t\t\t \t\t\t<tbody>\r\n\t\t\t\t\t \t\t\t</tbody>\r\n\t\t\t\t\t \t\t</table>\r\n\t\t\t\t\t \t</div>\r\n\t\t\t\t \t</ng-template>\r\n\t\t\t\t </li>\r\n\t\t\t\t <li [ngbNavItem] = \"5\">\r\n\t\t\t\t \t<a ngbNavLink>Pricing Method</a>\r\n\t\t\t\t \t<ng-template ngbNavContent>\r\n\t\t\t\t \t\t<div class = \"panel-body\">\r\n\t\t\t\t\t \t\t<table class = \"table table-responsive\">\r\n\t\t\t\t\t \t\t\t<thead>\r\n\t\t\t\t\t \t\t\t\t<tr>\r\n\t\t\t\t\t\t \t\t\t\t<td>SiteName</td>\r\n\t\t\t\t\t\t \t\t\t\t<td>Default Pricing Method</td>\r\n\t\t\t\t\t\t \t\t\t\t<td>Price</td>\r\n\t\t\t\t\t\t \t\t\t\t<td>Markup Percentage</td>\r\n\t\t\t\t\t\t \t\t\t\t<td>Action</td>\r\n\t\t\t\t\t \t\t\t\t</tr>\r\n\t\t\t\t\t \t\t\t</thead>\r\n\t\t\t\t\t \t\t\t<tbody>\r\n\t\t\t\t\t \t\t\t\t<tr>\r\n\t\t\t\t\t\t \t\t\t\t<td>Dear Ram</td>\r\n\t\t\t\t\t\t \t\t\t\t<td>\r\n\t\t\t\t\t\t \t\t\t\t\t<select>\r\n\t\t\t\t\t\t \t\t\t\t\t\t<option>--Select--</option>\t\r\n\t\t\t\t\t\t \t\t\t\t\t</select>\r\n\t\t\t\t\t\t \t\t\t\t</td>\r\n\t\t\t\t\t\t \t\t\t\t<td>\r\n\t\t\t\t\t\t \t\t\t\t\t<input type = \"text\">\r\n\t\t\t\t\t\t \t\t\t\t</td>\r\n\t\t\t\t\t\t \t\t\t\t<td>\r\n\t\t\t\t\t\t \t\t\t\t\t<input type = \"text\" formControlName = \"sellingPrice\">\r\n\t\t\t\t\t\t \t\t\t\t\t\r\n\t\t\t\t\t\t \t\t\t\t</td>\r\n\t\t\t\t\t\t \t\t\t\t<td>\r\n\t\t\t\t\t\t \t\t\t\t\t<i class = \"fa fa-edit\"></i>\r\n\t\t\t\t\t\t \t\t\t\t</td>\r\n\t\t\t\t\t \t\t\t\t</tr>\r\n\t\t\t\t\t \t\t\t</tbody>\r\n\t\t\t\t\t \t\t</table>\r\n\t\t\t\t\t \t</div>\r\n\t\t\t\t \t</ng-template>\r\n\t\t\t\t </li>\r\n\t\t\t\t <li [ngbNavItem] = \"6\">\r\n\t\t\t\t \t<a ngbNavLink>Remarks</a>\r\n\t\t\t\t \t<ng-template ngbNavContent>\r\n\t\t\t\t \t\t<input type = \"text\" formControlName = \"remarks\">\r\n\t\t\t\t \t</ng-template>\r\n\t\t\t\t </li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\r\n\t\t</div>\r\n\t\t<div class = \"row justify-content-end m-2 \">\r\n\t\t\t<button class = \"btn btn-success\" [disabled] = \"createItemForm.invalid\" (click) = \"onSubmit()\" >Save Item</button>\r\n\t\t</div>\r\n\t</form>\r\n\t<div class = \"card-footer bg-info p-0 m-0\">\r\n\t\t<div class = \"row justify-content-center \">\r\n\t\t\t\r\n\t\t\t<ngb-pagination [collectionSize]=\"len\" [(page)]=\"page\" [pageSize] = \"pageSize\"  [rotate]=\"true\"  [ellipses]=\"false\" *ngIf = \"isList\" class = \"col-md-10\"></ngb-pagination>\r\n\t\t\t<a routerLink = \"/master\" class =\"m-2 \" ><button class = \"btn-warning\" >Back to master</button></a>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n</div>\r\n";
      /***/
    },

    /***/
    73258:
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master/lookup-module/components/lookup-category/lookup-category.component.html ***!
      \**************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [@routerTransition]>\n\t<app-page-header [mainhead]=\"'Master'\"\n\t\t[mainheadLink]=\"'/master'\" [heading]=\"'Lookup Category'\"\n\t\t[icon]=\"'fa-bar-chart-o'\"></app-page-header>\n</div>\n\n<div class = \"card no-gutter px-0 mx-0\">\n\t<div class = \"card-head\" >\n\t\t<nav class = \"navbar bg-dark text-white\">\n\t\t\t<label>\tLookup Category</label>\n\t\t\t<input type = \"search\" [(ngModel)] = \"name\" *ngIf = \"submitted\">\n\t\t\t<button class = \"btn btn-success text-white\" (click) = \"show()\" *ngIf=\"!submitted\" >Show List</button>\n  \t\t\t<button class = \"btn btn-success text-white\" (click) = \"newLookupCategory()\" *ngIf=\"submitted\" >Add New</button>\t\t\n  \t\t</nav>\n\t</div>\n\t<div class = \"card-body \" *ngIf = \"submitted\" >\n\t\t<table class = \"table\" >\n\t\t\t<thead>\n\t\t\t\t<tr class = \"row text-center\">\n\t\t\t\t\t<th class = \"col\">CategoryID</th>\n\t\t\t\t\t<th class = \"col\">Lookup Category</th>\n\t\t\t\t\t<th class = \"col\">IsActive</th>\n\t\t\t\t\t<th class = \"col\">Created By</th>\n\t\t\t\t\t<th class = \"col\">Action</th>\n\t\t\t\t\t<th class = \"col\">Entities</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody class = \"text-center\"  >\n\t\t\t\t<tr *ngFor = \"let lookup of lookupCategory |lookup : name |slice: (page-1) * pageSize : page * pageSize\" class = \"row\"  >\n\t\t\t\t\t<td class = \"col\">{{lookup.categoryId}}</td>\n\t\t\t\t\t<td class = \"col\">{{lookup.categoryName}}</td>\n\t\t\t\t\t<td class = \"col\"><input type = \"checkbox\"  checked =\"{{lookup.active}}\"></td>\n\t\t\t\t\t<td class = \"col\">{{lookup.createdBy}}</td>\n\t\t\t\t\t<td class = \"col\"><button class = \"btn\" (click)= \"details(lookup)\"><i class = \"fa fa-edit\"></i></button></td>\n\t\t\t\t\t<td class = \"col\"><button (click) = \"gotoLookupEntity(lookup.categoryId)\" class = \"btn btn-warning btn-sm\"><a>Entities</a></button></td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\t\n\t\n\n<!-- Create LookupCategory and LookupCategory Details goes here -->\n\t<div class=\"row\" *ngIf=\"!submitted\">\n  \t\t\t<div class=\"card-body\">\n  \t\t\t\t<div class = \"\" >\n  \t\t\t\t\t<form >\n  \t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t<label for=\"lookupCode\">Category Code</label> \n\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"categoryCode\" required\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createLookup.categoryCode\" name=\"categoryCode\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\t\t\t\n\t\t\t\t\t\t\t\t\t<label for=\"description\">Category Name</label> \n\t\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"categoryName\" required\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createLookup.categoryName\" name=\"categoryName\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t<label for=\"lookupValue\">Created By</label>\n\t\t\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"createdBy\" required\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createLookup.createdBy\" name=\"createdBy\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t<label>IsActive</label>\n\t\t\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t                        <label> <input type = \"checkbox\" name = \"active\" [(ngModel)] = \"createLookup.active\" ></label>\n\t\t\t                    </div>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t<label>\t&nbsp;</label>\n\t\t\t\t\t\t\t\t<div class=\"checkbox\"> \n\t\t\t\t\t\t\t\t\t<button  class=\"btn btn-success\" (click)=\"createLookupCategory()\" *ngIf = \"isDetail\">Add Lookup</button>\n\t\t\t\t\t\t\t\t\t<button class = \"btn btn-primary\" (click) = \"updateLookupCategory()\" *ngIf = \"!isDetail\">Update</button>&nbsp;\n\t\t\t\t\t\t\t\t\t<button class = \"btn btn-danger\" (click) = \"deleteLookupCategory()\" hidden>Delete</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n  \t\t\t\t</div>\n  \t\t\t</div>  \t\t\t\n  \t\n\t</div>\n</div>\n<div class = \"card-footer bg-info p-0 m-0 \" >\n\t<div class = \"row justify-content-center \">\n\t\t\t<ngb-pagination *ngIf = \"submitted\"  [collectionSize]=\"len\" [(page)]=\"page\" [pageSize] = \"pageSize\"  [rotate]=\"true\"  [ellipses]=\"false\" class = \"col-md-10\"></ngb-pagination>\n\t\t\t<a routerLink = \"/master\"  class = \"m-2\"><button class = \"btn-warning\" >Back to master</button></a>\n\t</div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n";
      /***/
    },

    /***/
    53103:
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master/lookup-module/components/lookup-entity/lookup-entity.component.html ***!
      \**********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card\">\r\n\t<div class = \"card-head\">\r\n  \t\t<nav class = \"navbar bg-dark text-white\">\r\n  \t\t\t<label>Lookup Category</label>\r\n  \t\t\t<button class = \"btn btn-success text-white\" routerLink = \"/master/lookup\">Select All</button>\r\n  \t\t</nav>\r\n\t\t<div class = \"row\">\r\n\t\t\t<div class = \"col-md-3\">\r\n\t\t\t\t<label>Category Name :-&nbsp;&nbsp;</label>\r\n\t\t\t\t<label   name = \"lookupCode\" id = \"lookupCode\" *ngIf = \"true\" >{{lookups.categoryName}}</label>\r\n\t\t\t</div>\r\n\t\t\t<script>\r\n\t\t\t</script>\r\n\t\t\t<div class = \"col-md-3\">\r\n\t\t\t\t<label>Is Active :-&nbsp;&nbsp;</label>\r\n\t\t\t\t<input type = \"checkbox\" name = \"active\" [(ngModel)] = \"lookups.active\">\r\n\t\t\t</div>\r\n\t\t\t<div class = \"col-md-3\">\r\n\t\t\t\t<label>Creatd By :-&nbsp;&nbsp;</label>\r\n\t\t\t\t<label  name = \"description\" >{{lookups.createdBy}}</label>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"col-md-3\">\r\n\t\t\t\t<label>IsModifiable :-&nbsp;&nbsp;</label>\r\n\t\t\t\t<input type = \"checkbox\" name = \"active\" [(ngModel)] = \"lookups.active\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n  \t\t\r\n  \t\t<nav class = \"navbar bg-dark text-white\">\r\n  \t\t\t<label>Lookup Entity Data</label>\r\n  \t\t\t<input type = \"search\" [(ngModel)] = \"name\" *ngIf = \"submitted\">\r\n  \t\t\t<button class = \"btn btn-success text-white\" (click) = \"goto()\" *ngIf=\"!submitted\" >Show List</button>\r\n  \t\t\t<button class = \"btn btn-success text-white\" (click) = \"addLookup()\" *ngIf=\"submitted\" >Add New</button>\r\n  \t\t</nav>\r\n \t </div>\r\n\r\n  \t<div class = \"card-body\">\r\n  \t\t<table class = \"table\" *ngIf=\"submitted\">\r\n  \t\t\t<thead>\r\n  \t\t\t\t<tr class = \"text-center\">\r\n  \t\t\t\t\t<th>Lookup Id</th>\r\n  \t\t\t\t\t<th>Lookup Code</th>\r\n  \t\t\t\t\t<th>Description</th>\r\n  \t\t\t\t\t<th>Lookup Value </th>\r\n  \t\t\t\t\t<th>Is Active</th>\r\n  \t\t\t\t\t<th>Actions</th>\r\n  \t\t\t\t</tr>\r\n  \t\t\t</thead>\r\n  \t\t\t<tbody class = \"ml-auto text-center\" >\r\n  \t\t\t\t<tr *ngFor = \"let lookup of lookupEntity  | lookupEntityPipe : name |slice: (page-1) * pageSize : page * pageSize\">\r\n  \t\t\t\t\t<td class = \"ml-auto\"><label>{{lookup.lookupId}}</label></td>\r\n  \t\t\t\t\t<td class = \"ml-auto\"><label>{{lookup.lookupCode}}</label></td>\r\n  \t\t\t\t\t<td class = \"ml-auto\"><label>{{lookup.description}}</label></td>\r\n  \t\t\t\t\t<td class = \"ml-auto\"><label>{{lookup.lookupValue}}</label></td>\r\n  \t\t\t\t\t<td class = \"ml-auto\"><label>{{lookup.active}}</label></td>\r\n  \t\t\t\t\t<td class = \"ml-auto jusfify-content-between\">\r\n  \t\t\t\t\t\t<button class = \"btn btn-primary btn-sm\" (click) = \"details(lookup)\">Details</button>&nbsp;\r\n  \t\t\t\t\t\t<button class = \"btn btn-danger btn-sm\" (click) = \"deleteLookupEntity(lookup.lookupId)\">delete</button>\r\n  \t\t\t\t\t</td>\r\n  \t\t\t\t</tr>\r\n  \t\t\t</tbody>\r\n  \t\t</table>\r\n  \t\r\n  \t\t<div class=\"row\" *ngIf=\"!submitted\">\r\n  \t\t\t<div class=\"card-body\">\r\n  \t\t\t\t<div class = \"\" >\r\n  \t\t\t\t\t<form #addlookup = ngForm >\r\n  \t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"lookupCode\">Lookup Code</label> \r\n\t\t\t\t\t\t\t\t\t<input type=\"text\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"lookupCode\" required\r\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createLookupEntity.lookupCode\" name=\"lookupCode\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\t\t\t\r\n\t\t\t\t\t\t\t\t\t<label for=\"description\">Description</label> \r\n\t\t\t\t\t\t\t\t\t<input type=\"text\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"description\" required\r\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createLookupEntity.description\" name=\"description\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t\t<label for=\"lookupValue\">Lookup Value</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\"\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\" id=\"lookupValue\" required\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createLookupEntity.lookupValue\" name=\"lookupValue\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-1\">\r\n\t\t\t\t\t\t\t\t<label>IsActive</label>\r\n\t\t\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t                        <label> <input type = \"checkbox\" name = \"active\" [(ngModel)] = \"createLookupEntity.active\" ></label>\r\n\t\t\t                    </div>\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t\t\t<label>\t&nbsp;</label>\r\n\t\t\t\t\t\t\t\t<div class=\"checkbox\"> \r\n\t\t\t\t\t\t\t\t\t<button class = \"btn btn-primary\" (click) = \"updateLookupEntity(createLookupEntity)\" *ngIf = \"submit\">update</button>\r\n\t\t\t\t\t\t\t\t\t<button (click)=\"onSubmit(addlookup)\" class=\"btn btn-success\" *ngIf = \"!submit\">Add Lookup</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n  \t\t\t\t</div>\r\n  \t\t\t</div>  \t\t\t\r\n  \t\t</div>\r\n  \t</div>\r\n  \t<div class = \"card-footer bg-info p-0 m-0\" >\r\n  \t\t<div class = \"row justify-content-center\">\r\n\t\t\t<ngb-pagination *ngIf = \"submitted\" [collectionSize]=\"len\" [(page)]=\"page\" [pageSize] = \"pageSize\"  [rotate]=\"true\"  [ellipses]=\"false\" class = \"col-md-10\"></ngb-pagination>\r\n\t\t\t<a routerLink = \"/master\" class = 'm-2'><button class = \"btn-warning\" >Back to master</button></a>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n  \t\t\t\t";
      /***/
    },

    /***/
    90676:
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master/master.component.html ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = " <div class=\"row\">\n        <div class=\"col-xl-4 col-lg-6\">\n            <app-stat [bgClass]=\"'primary'\" [count]=\"01\" [icon]=\"'far fa-address-card'\" \n            [label]=\"'Lookup Category'\" [outcomeLink]=\"'master/lookup'\" [data] = \"' go to Lookup Category'\"></app-stat>\n        </div>\n        <div class=\"col-xl-4 col-lg-6\">\n            <app-stat [bgClass]=\"'secondary'\" [count]=\"02\" [icon]=\"'fal fa-hospital-o'\" \n            [label]=\"'Department Category'\" [outcomeLink]=\"'master/department'\" [data] = \"' go to Department Category'\"></app-stat>\n        </div>\n        <div class=\"col-xl-4 col-lg-6\">\n            <app-stat [bgClass]=\"'success'\" [count]=\"03\" [icon]=\"'fal fa-flag'\" \n            [label]=\"'Country Category'\" [outcomeLink]=\"'master/country'\" [data] = \"' go to Country Category'\"></app-stat>\n        </div>\n</div><br>\n <div class=\"row\">\n \t <div class=\"col-xl-4 col-lg-6\">\n            <app-stat [bgClass]=\"'danger'\" [count]=\"04\" [icon]=\"'fas fa-cogs'\" \n            [label]=\"'ServiceCenter Category'\" [outcomeLink]=\"'master/serviceCenter'\" [data] = \"' go to ServiceCenter Category'\"></app-stat>\n        </div>\n        <div class=\"col-xl-4 col-lg-6\">\n            <app-stat [bgClass]=\"'warning'\" [count]=\"05\" [icon]=\"'fa-users'\" \n            [label]=\"'Unit Category'\" [outcomeLink]=\"'master/unitmaster'\" [data] = \"'go to Unit Category'\"></app-stat>\n        </div>\n        <div class=\"col-xl-4 col-lg-6\">\n            <app-stat [bgClass]=\"'info'\" [count]=\"06\" [icon]=\"'fa-list-alt'\" \n            [label]=\"'Item Category'\" [outcomeLink]=\"'master/itemmaster'\" [data] = \"'go to Item Category'\"></app-stat>\n        </div>\n  </div>";
      /***/
    },

    /***/
    7708:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master/service-center/service-center.component.html ***!
      \***********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [@routerTransition]>\r\n\t<app-page-header [mainhead]=\"'Master'\"\r\n\t\t[mainheadLink]=\"'/master'\" [heading]=\"'ServiceCenter Category'\"\r\n\t\t[icon]=\"'fa-bar-chart-o'\"></app-page-header>\r\n</div>\r\n\r\n<div class = \"card\">\r\n\t<nav class = \"navbar text-white bg-dark\">\r\n\t\t\r\n\t\t\t<label>ServiceCenter Master &nbsp;</label>\r\n\t\t\t<input type = \"text\" placeholder = \"search here\" [(ngModel)] = \"search\" *ngIf = \"(submitted || ifDetail)\">\r\n\t\t\t<button class = \"btn btn-success text-white\" (click) = \"showServiceCenter()\" *ngIf=\"!submitted\" >Show List</button>\r\n  \t\t\t<button class = \"btn btn-success text-white\" (click) = \"newServiceCenter()\" *ngIf=\"submitted\" >Add New</button>\t\t\r\n\t</nav>\r\n\t\r\n\t<!-- Show ServiceCenter list part begins here -->\t\r\n\r\n\t<div class = \"card-body\" *ngIf = \"(submitted || ifDetail)\">\r\n\t\t<div class =\"col-md-12\">\r\n\t\t<table class = 'table' >\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th >ServiceCenter Code</th>\r\n\t\t\t\t\t<th>ServiceCenter Name</th>\r\n\t\t\t\t\t<th>serviceCenter Type</th>\r\n\t\t\t\t\t<th>DepartmentName</th>\r\n\t\t\t\t\t<th>IsAttachedStore</th>\r\n\t\t\t\t\t<th>IsActive</th>\r\n\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t<tr *ngFor = \"let serviceCenter of serviceCenterList |serviceSearch: search |slice: (page-1) * pageSize : page * pageSize\">\r\n\t\t\t\t\t<td>{{serviceCenter.serviceCenterCode}}</td>\r\n\t\t\t\t\t<td>{{serviceCenter.serviceCenterName}}</td>\r\n\t\t\t\t\t<td>{{serviceCenter.serviceCenterType.lookupValue}}</td>\r\n\t\t\t\t\t<td>{{serviceCenter.department.departmentName}}</td>\r\n\t\t\t\t\t<td>{{serviceCenter.attachStore}}</td>\r\n\t\t\t\t\t<td>{{serviceCenter.active}}</td>\r\n\t\t\t\t\t<td><button class = \"btn\" (click) = \"details(serviceCenter)\" ><i class = \"fa fa-edit\"></i></button></td>\r\n\t\t\t\t\t\r\n\t\t\t\t</tr>\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\t</div>\r\n\t\r\n\t\r\n\r\n\t</div>\r\n\t<!--  Update and Details Service Part begins here -->\r\n\r\n<div class = \"card-body p-0 m-0\" *ngIf = \"!(submitted && ifDetail)\" >\r\n\t<form #serviceCenterForm = \"ngForm\">\r\n\t\t<header class = \"header bg-dark text-light text-center\"  *ngIf = \"submit\"><label>ServiceCenter Details</label></header><br>\r\n\t\t<div class = \"border col-md-12\" >\r\n\t\t\t<div class = \"row\">\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-7\">ServiceCenter Code</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-5\" [(ngModel)] = \"serviceCenterDetails.serviceCenterCode\"  name = \"serviceCenterCode\" ngModel>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-7\">ServiceCenter Name</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-5\"  [(ngModel)] = \"serviceCenterDetails.serviceCenterName\"  name = \"serviceCenterName\" ngModel>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Department </label>\r\n\t\t\t\t\t<select class = \"col-md-6\"  [(ngModel)] = \"serviceCenterDetails.department.departmentId\"  name = \"department\" >\r\n\t\t\t\t\t\t<option [ngValue] = \"dept.departmentId\" *ngFor =\"let dept of departmentList\" >{{dept.departmentName}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row\">\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-7\">ServiceCenterType</label>\r\n\t\t\t\t\t<select class = \"col-md-5\"  [(ngModel)] = \"serviceCenterDetails.serviceCenterType.lookupId\"  name = \"serviceCenterType\"  required >\r\n\t\t\t\t\t<ng-container *ngFor =\"let lookupEntity of lookupEntityList\">\r\n\t\t\t\t\t\t<option [ngValue] = \"lookupEntity.lookupId\"   *ngIf = \"lookupEntity.category.categoryId == 13\" >{{lookupEntity.lookupValue}}</option>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-7\">Description</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-5\" [(ngModel)] = \"serviceCenterDetails.description\" name = \"description\" ngModel>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Site</label>\r\n\t\t\t\t\t<select class = \"col-md-6\"  [(ngModel)] = \"serviceCenterDetails.site.branchId\"  name = \"site\"  required  >\r\n\t\t\t\t\t\t<option [ngValue] = \"branch.id\" *ngFor =\"let branch of branchList\">{{branch.branchName}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row\">\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-7\">Started On</label>\r\n\t\t\t\t\t<input type = \"date\" class = \"col-md-5\"  [(ngModel)] = \"serviceCenterDetails.startedOn\" name = \"startedOn\" ngModel required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-7\">LastInactivatedOn</label>\r\n\t\t\t\t\t<input type = \"datetime\"  class = \"col-md-5\" [(ngModel)] = \"serviceCenterDetails.lastInactivatedOn\" datetime=\"yyyy-MM-dd HH:mm:ss\" placeholder = \"yyyy-MM-dd HH:mm:ss\" name = \"lastInactivatedOn\" ngModel>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Block</label>\r\n\t\t\t\t\t<select class = \"col-md-6\" [(ngModel)] = \"serviceCenterDetails.block.blockId\"  name = \"block\"  required >\r\n\t\t\t\t\t\t<option [ngValue] = \"block.blockId\"  *ngFor =\"let block of blockList\" >{{block.blockName}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row\">\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-7\">Is Active</label>\r\n\t\t\t\t\t<input type = \"checkbox\"  class = \"col-md-5\" [(ngModel)] = \"serviceCenterDetails.active\" name = \"active\" ngModel>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-7\">Attach Store</label>\r\n\t\t\t\t\t<input type = \"checkbox\" class = \"col-md-5\" [(ngModel)] = \"serviceCenterDetails.attachStore\" name = \"attachStore\" ngModel required>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-6\">Floor</label>\r\n\t\t\t\t\t<select class = \"col-md-6\" [(ngModel)]= \"serviceCenterDetails.floor.floorId\" name = \"floor\" id = \"floor\">\r\n\t\t\t\t\t\t<option [ngValue] = \"floor.floorId\" *ngFor =\"let floor of floorList\" >{{floor.floorName}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row\">\r\n\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t<label class = \"col-md-7\">Created By</label>\r\n\t\t\t\t\t<input type = \"text\" class = \"col-md-5\" [(ngModel)] = \"serviceCenterDetails\" name = \"createdBy\" ngModel required>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<button type = \"reset\"  class = \"btn btn-danger justify-content-right btn-sm\" *ngIf =\"!submit\">Reset</button>&nbsp;\r\n\t\t\t<button class = \"btn btn-success justify-content-right btn-sm\" (click) = \"update(serviceCenterForm)\" *ngIf = \"submit\">Update Service Center</button>\r\n\t\t\t<button type = \"submit\" class = \"btn btn-success justify-content-right btn-sm\" (click)= \"onSubmit(serviceCenterForm)\" *ngIf =\"!submit\" >Create Service Center</button><br><br>\r\n\t\t</div>\r\n\t</form>\r\n</div>\t\r\n\t\t<div class = \"text-right justify-content-center row\">\r\n\t\t\t\t\r\n\t</div>\r\n\t<div class = \"card-footer bg-info p-0 m-0\" >\r\n\t\t<div class = \"row justify-content-center \">\r\n\t\t\t<ngb-pagination *ngIf = \"submitted\" [collectionSize]=\"len\" [(page)]=\"page\" [pageSize] = \"pageSize\"  [rotate]=\"true\"  [ellipses]=\"false\" class = \"col-md-10\"></ngb-pagination>\r\n\t\t\t<a routerLink = \"/master\" class = \"m-2\" ><button class = \"btn-warning\" >Back to master</button></a>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t";
      /***/
    },

    /***/
    30010:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master/unit-master/unit-master.component.html ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class = \"card\">\r\n\t<div class = \"card-head\">\r\n\t\t<nav class = \"navbar bg-dark text-white\">\r\n\t\t\t<h3>Unit List</h3>\r\n\t\t\t<input type = \"text\" [(ngModel)] = \"name\">\r\n\t\t\t<button class = \"btn btn-success btn-sm\" (click) = \"addUnit(content)\">Add Unit</button>\r\n\t\t</nav>\r\n\t</div>\r\n\t<div class = \"card-body\" >\r\n\t\t<form>\r\n\t\t\t<div class = \" text-center\">\r\n\t\t\t\t<table class = \"table\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr class= \"row\">\r\n\t\t\t\t\t\t\t<th class = \"col\">Unit Id</th>\r\n\t\t\t\t\t\t\t<th class = \"col\">Unit Name</th>\r\n\t\t\t\t\t\t\t<th class = \"col\">Department</th>\r\n\t\t\t\t\t\t\t<th class = \"col\">isActive</th>\r\n\t\t\t\t\t\t\t<th class = \"col\">Actions</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<tr *ngFor = \"let unit of unitList |unitList: name |slice: (page-1) * pageSize : page * pageSize\" class= \"row\">\r\n\t\t\t\t\t\t\t<td class = \"col\">{{unit.unitId}}</td>\r\n\t\t\t\t\t\t\t<td class = \"col\">{{unit.unitName}}</td>\r\n\t\t\t\t\t\t\t<td class = \"col\" >{{unit.department.departmentName}}</td>\r\n\t\t\t\t\t\t\t<td class = \"col\">{{unit.isActive}}</td>\r\n\t\t\t\t\t\t\t<td class = \"col\">\r\n\t\t\t\t\t\t\t\t<button class = \"btn  btn-sm btn-primary\" (click) = \"update(unit,content)\">Update</button>&nbsp;\r\n\t\t\t\t\t\t\t\t<button class = \"btn btn-success btn-sm\" (click) = \"showEmployee(unit)\">Employee</button>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n\t\r\n\t<div class = \"card-foot row\" >\r\n\t\t<div class =\"col-md-6\" *ngIf= \"!submitted\">\r\n\t\t\t<nav class = \"navbar bg-dark text-white\">\r\n\t\t\t\t<h5>Employee List</h5>\r\n\t\t\t\t<input type = \"text\" [(ngModel)] = \"empsearch\">\r\n\t\t\t\t<button class = \"btn btn-sm btn-primary\" (click) = \"addEmployee(empcontent)\">Add Employee</button>\r\n\t\t\t</nav>\r\n\t\t\t<form>\r\n\t\t\t\t<div class = \"container text-center\">\r\n\t\t\t\t\t<table class = \"table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr class= \"row\">\r\n\t\t\t\t\t\t\t\t<th class = \"col\">Employee No</th>\r\n\t\t\t\t\t\t\t\t<th class = \"col\">Employee Name</th>\r\n\t\t\t\t\t\t\t\t<th class = \"col\">Employee Status</th>\r\n\t\t\t\t\t\t\t\t<th class = \"col\">IsActive</th>\r\n\t\t\t\t\t\t\t\t<th class = \"col\">Actions</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr *ngFor = \"let unitEmployee of unitEmployeeList | emppipe: empsearch\" class= \"row\">\r\n\t\t\t\t\t\t\t\t<td class = \"col\">{{unitEmployee.employee.employeeNo}}</td>\r\n\t\t\t\t\t\t\t\t<td class = \"col\">{{unitEmployee.employee.firstName}}</td>\r\n\t\t\t\t\t\t\t\t<td class = \"col\">{{unitEmployee.employee.employeeStatus.lookupValue}}</td>\r\n\t\t\t\t\t\t\t\t<td class = \"col\">{{unitEmployee.employee.employeeStatus.active}}</td>\r\n\t\t\t\t\t\t\t\t<td class = \"col\">\r\n\t\t\t\t\t\t\t\t\t<button class = \"btn btn-success btn-sm\" (click)=\"employeeDetails(unitEmployee.employee)\"><i class=\"fa fa-info-circle \"></i></button>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t\t<div class = \"row p-0 m-0 \">\r\n\t\t\t\t<ngb-pagination [collectionSize]=\"empLen\" [(page)]=\"empPage\" [pageSize] = \"pageSize\"  [rotate]=\"true\"  [ellipses]=\"false\" class = \"col-md-10\"></ngb-pagination>\r\n\t\t\t\t<button class = \"btn-danger btn-sm m-2\" (click) = \"closeEmployee()\">Close</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class = \"col-md-6\" *ngIf = \"!submitted && !isDetail\">\r\n\t\t\t<nav class = \"navbar bg-dark text-white\">\r\n\t\t\t\t<h5>Employee Details</h5>\r\n\t\t\t</nav>\r\n\t\t\t<div class = \"container\">\r\n\t\t\t\t<div class = \"row\">\r\n\t\t\t\t\t<div class = \"col-md-6\">\r\n\t\t\t\t\t\t<label>Name :</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class = \"col-md-6\">\r\n\t\t\t\t\t\t<label>{{employeeDetail.employeeName}}</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"row\">\r\n\t\t\t\t\t<div class = \"col-md-6\">\r\n\t\t\t\t\t\t<label>New Patient Visited :</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class = \"col-md-6\">\r\n\t\t\t\t\t\t<input type = \"number\" [(ngModel)] = \"employeeDetail.newPatient\" name = \"newPatient\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class = \"col-md-5\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"row\">\r\n\t\t\t\t\t<div class = \"col-md-6\">\r\n\t\t\t\t\t\t<label>Existing Patient Visited :</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class = \"col-md-6\">\r\n\t\t\t\t\t\t<input type = \"number\" [(ngModel)] = \"employeeDetail.existingPatient\" name = \"existingPatient\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"row\">\r\n\t\t\t\t\t<div class = \"col-md-6\">\r\n\t\t\t\t\t\t<label>Followup Patient Visited :</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t\t<input type = \"number\" [(ngModel)] = \"employeeDetail.followupPatient\" name = \"followupPatient\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"row\">\r\n\t\t\t\t\t<div class = \"col-md-6\">\r\n\t\t\t\t\t\t<label>Slot :</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class = \"col-md-6\">\r\n\t\t\t\t\t\t<select [(ngModel)] =  \"employeeDetail.slot.lookupId\" name = \"slot\" id = \"slot\">\r\n\t\t\t\t\t\t\t<ng-container *ngFor = \"let lookupEntity of lookupEntityList\">\r\n\t\t\t\t\t\t\t\t<option  [value] = \"lookupEntity.lookupId\" *ngIf = \"lookupEntity.category.categoryId === employeeDetail.slot.category.categoryId\">{{lookupEntity.lookupValue}}</option>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class = \"row\">\r\n\t\t\t\t\t<div class = \"col-md-6\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t\t<button class =\"btn btn-success btn-sm\" (click) = \"updateEmployeeDetails()\">Update</button>&nbsp;\r\n\t\t\t\t\t\t<button class = \"btn btn-danger btn-sm\" (click) = \"closeEmployeeDetails()\">Close</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t\t\r\n\t\t\r\n\t</div>\r\n</div>\r\n\r\n<!--  ***************************************  Add Unit pop up goes here ********************************************* -->\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n\t<div class=\"modal-header\">\r\n\t\t<nav class = \"navbar bg-dark text-white w-100\" >\r\n\t\t\t<h3 *ngIf = \"!isAdd\">Add Unit</h3>\r\n\t\t\t<h3 *ngIf = \"isAdd\">Update Unit</h3>\r\n\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n\t      \t\t<span aria-hidden=\"true\">&times;</span>\r\n\t    \t</button>\r\n\t\t</nav>\r\n  \t</div>\r\n\t<div class = \"card-body\">\r\n\t\t\t<form #newUnitForm = ngForm>\r\n\t\t\t\t<div class = \"row\">\r\n\t\t\t\t\t<label class = \"col-md-2\">Unit Name: </label>\r\n\t\t\t\t\t<div class = \"col-md-2 \">\r\n\t\t\t\t\t\t<input type = \"text\" class =\"form-control\" [(ngModel)] = \"unit.unitName\" name = \"unitName\" id = \"unitName\" >\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label class = \"col-md-2\">Unit Code: </label>\r\n\t\t\t\t\t<div class = \"col-md-2\">\r\n\t\t\t\t\t\t<input type = \"text\" class = \"form-control\" [(ngModel)] = \"unit.unitCode\" name = \"unitCode\" id = \"unitCode\" >\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<label class = \"col-md-2\">Unit Head: </label>\r\n\t\t\t\t\t<div class = \"col-md-2\">\r\n\t\t\t\t\t\t<input type = \"text\" class = \"form-control\" [(ngModel)] = \"unit.unitHead\" name = \"unitHead\" id = \"unitHead\" >\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div><br>\r\n\t\t\t\t<div class = \"row\">\r\n\t\t\t\r\n\t\t\t\t\t<label class = \"col-md-2\">Department : </label>\r\n\t\t\t\t\t<div class = \"col-md-2\">\r\n\t\t\t\t\t\t<select   class = \"form-control\" [(ngModel)] = \"unit.department.departmentId\" name = \"department\" ngModel>\r\n\t\t\t\t\t\t\t<option *ngFor = \"let department of departmentList\" [value]= \"department.departmentId\">{{department.departmentName}}</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class = \"col-md-4\">\r\n\t\t\t\t\t\t<label class = \"col-md-4\">Active: </label>\r\n\t\t\t\t\t\t<input type = \"checkbox\" class = \"col-md-3\" [(ngModel)] = \"unit.isActive\" name = \"isActive\" id = \"isActive\" >\r\n\t\t\t\t\t\t<button class = \"btn btn-success btn-sm col-md-5\" (click) = \"updateUnit(newUnitForm)\" *ngIf = \"isAdd\">Update</button>\r\n\t\t\t\t\t\t<button class = \"btn btn-success btn-sm col-md-5\" (click) = \"createUnit(newUnitForm)\" *ngIf = \"!isAdd\">Add</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n  <!--  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\r\n  </div> -->\r\n</ng-template>\r\n\r\n<!-- **************************************           Add employee pop up goes here ******************************. -->\r\n\r\n<ng-template #empcontent let-c=\"close\" let-d=\"dismiss\">\r\n\t<div class=\"modal-header\">\r\n\t\t<nav class = \"navbar bg-dark text-white w-100 \">\r\n\t\t\t\t<h5>Employee List&nbsp;: &nbsp;</h5>&nbsp;&nbsp;&nbsp;\r\n\t\t\t\t<input type = \"text\" class = \"text-right\" [(ngModel)] = \"unitEmpSearch\">\r\n\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n\t      \t\t&times;\r\n\t    \t</button>\r\n\t\t</nav>\r\n  \t</div>\r\n\t<div class = \"card-body\">\r\n\t\t\t<form #newUnitForm = ngForm>\r\n\t\t\t\t<table class = \"table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th>Employee Id</th>\r\n\t\t\t\t\t\t\t\t<th >Employee No</th>\r\n\t\t\t\t\t\t\t\t<th >Employee Name</th>\r\n\t\t\t\t\t\t\t\t<th>Branch</th>\r\n\t\t\t\t\t\t\t\t<th >Actions</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr *ngFor = \"let remainingUnitEmployee of unitEmployeeRemainingMappingArray | unitEmpList : unitEmpSearch\">\r\n\t\t\t\t\t\t\t\t<td>{{remainingUnitEmployee.employeeId}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td >{{remainingUnitEmployee.employee.employeeNo}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td >{{remainingUnitEmployee.employee.firstName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{remainingUnitEmployee.employee.branch.branchName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td  >\r\n\t\t\t\t\t\t\t\t\t\t\t<button class = \"btn btn-success btn-sm\" (click)=\"addEmployeeToUnit(remainingUnitEmployee)\"><i class=\"fa fa-plus-circle\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr> <!--\r\n\t\t\t\t\t\t\t<tr *ngFor = \"let unitEmployee of unitEmployeeMappingList\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor = \"let units of unitEmployeeList\">\r\n\t\t\t\t\t\t\t\t\t\t<td  *ngIf = \"!(units.employee.employeeId == unitEmployee.employee.employeeId)\">{{unitEmployee.employee.employeeNo}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td  *ngIf = \"!(units.employee.employeeId == unitEmployee.employee.employeeId)\">{{unitEmployee.employee.firstName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td  *ngIf = \"!(units.employee.employeeId == unitEmployee.employee.employeeId)\">{{unitEmployee.employee.branch.branchName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td  *ngIf = \"!(units.employee.employeeId == unitEmployee.employee.employeeId)\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class = \"btn btn-success btn-sm\" (click)=\"addEmployeeToUnit(unitEmployee)\"><i class=\"fa fa-plus-circle\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</tr>  -->\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t</form>\r\n\t\t\t<ngb-pagination [collectionSize]=\"empUnitlen\" [(page)]=\"empUnitPage\" [pageSize] = \"pageSize\"  [rotate]=\"true\"  [ellipses]=\"false\" class = \"col-md-10\"></ngb-pagination>\r\n\t\t</div>\r\n  <!--  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\r\n  </div> -->\r\n</ng-template>\r\n<div class = \" bg-info footer\" >\r\n\t<div class = \"row justify-content-center \">\r\n\t\t<ngb-pagination [collectionSize]=\"len\" [(page)]=\"page\" [pageSize] = \"pageSize\"  [rotate]=\"true\"  [ellipses]=\"true\" class = \"col-md-10\"></ngb-pagination>\r\n\t\t<a  class = \"m-2\" ><button class = \"btn-warning\" (click) = \"backToMaster()\" >Back to master</button></a>\r\n\t</div>\r\n</div>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_master_master_module_ts-es5.js.map