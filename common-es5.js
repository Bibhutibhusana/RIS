(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkElitePro"] = self["webpackChunkElitePro"] || []).push([["common"], {
    /***/
    31564:
    /*!********************************************************************!*\
      !*** ./src/app/Common-Security-Services/common-service.service.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CommonSecurityService": function CommonSecurityService() {
          return (
            /* binding */
            _CommonSecurityService
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

      var _CommonSecurityService = /*#__PURE__*/function () {
        function CommonSecurityService() {
          _classCallCheck(this, CommonSecurityService);
        }
        /************ Patient services goes here **************************************************** */


        _createClass(CommonSecurityService, [{
          key: "getPatient",
          value: function getPatient() {
            return JSON.parse(localStorage.getItem('patient'));
          }
        }, {
          key: "setPatient",
          value: function setPatient(patient) {
            localStorage.setItem('patient', JSON.stringify(patient));
          }
        }, {
          key: "cleanPatient",
          value: function cleanPatient() {
            localStorage.removeItem('patient');
          }
          /****************************************  Preferences Services Goes here **************** */

        }, {
          key: "getPreferences",
          value: function getPreferences() {
            return JSON.parse(localStorage.getItem('preferences'));
          }
        }, {
          key: "setPreferences",
          value: function setPreferences(preferences) {
            if (preferences) {
              localStorage.setItem('preferences', JSON.stringify(preferences));
            }
          }
        }, {
          key: "cleanPreferences",
          value: function cleanPreferences() {
            localStorage.removeItem('preferences');
          }
          /*******************************************  User Services Goes here ************************************/

        }, {
          key: "setUser",
          value: function setUser(user) {
            if (user) {
              localStorage.setItem('user', JSON.stringify(user));
            }
          }
        }, {
          key: "getUser",
          value: function getUser() {
            return JSON.parse(localStorage.getItem('user'));
          }
        }, {
          key: "cleanUser",
          value: function cleanUser() {
            localStorage.removeItem('user');
          }
        }]);

        return CommonSecurityService;
      }();

      _CommonSecurityService.ctorParameters = function () {
        return [];
      };

      _CommonSecurityService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
      })], _CommonSecurityService);
      /***/
    },

    /***/
    89959:
    /*!************************************************************!*\
      !*** ./src/app/enterprise-user/masters/enterprise-user.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EnterpriseUser": function EnterpriseUser() {
          return (
            /* binding */
            _EnterpriseUser
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _master_unit_master_masters_Employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../master/unit-master/masters/Employee */
      51716);
      /* harmony import */


      var _master_item_master_masters_subBase_Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../master/item-master/masters/subBase-Entity */
      50050);
      /* harmony import */


      var _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../master/lookup-module/masters/lookup-entity */
      11697);

      var _EnterpriseUser = /*#__PURE__*/function (_master_item_master_m) {
        _inherits(_EnterpriseUser, _master_item_master_m);

        var _super = _createSuper(_EnterpriseUser);

        function _EnterpriseUser() {
          var _this;

          _classCallCheck(this, _EnterpriseUser);

          _this = _super.call(this);
          _this.globalProjectStore = false;
          _this.globalStore = false;
          _this.globalBranch = false;
          _this.globalDepartment = false;
          _this.globalServiceCenter = false;
          _this.employee = new _master_unit_master_masters_Employee__WEBPACK_IMPORTED_MODULE_0__.Employee();
          _this.userType = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity();
          _this.pswModifiedDate = new Date();
          _this.isPswExpires = false;
          _this.pswChangeReqd = false;
          return _this;
        }

        return _EnterpriseUser;
      }(_master_item_master_masters_subBase_Entity__WEBPACK_IMPORTED_MODULE_1__.SubBaseEntity);
      /***/

    },

    /***/
    16533:
    /*!*********************************************************************!*\
      !*** ./src/app/enterprise-user/services/enterprise-user.service.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EnterpriseUserService": function EnterpriseUserService() {
          return (
            /* binding */
            _EnterpriseUserService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../main.service */
      29118);

      var _EnterpriseUserService = /*#__PURE__*/function () {
        function EnterpriseUserService(http, router, mainService) {
          _classCallCheck(this, EnterpriseUserService);

          this.http = http;
          this.router = router;
          this.mainService = mainService;
          this.baseUrl = "";
          this.baseUrl = this.mainService.getBaseUrl();
        }

        _createClass(EnterpriseUserService, [{
          key: "getEnterpriseUserList",
          value: function getEnterpriseUserList() {
            return this.http.get("".concat(this.baseUrl, "/enterpriseUser/get"));
          }
        }, {
          key: "getEnterpriseUserById",
          value: function getEnterpriseUserById(userId) {
            return this.http.get("".concat(this.baseUrl, "/enterpriseUser/getById/").concat(userId));
          }
        }, {
          key: "getEnterpriseUserByUserName",
          value: function getEnterpriseUserByUserName(userName, password) {
            return this.http.post("".concat(this.baseUrl, "/enterpriseUser/getByUserName/").concat(userName), password);
          }
        }, {
          key: "updateEnterpriseUser",
          value: function updateEnterpriseUser(enterpriseUserId, enterpriseUser) {
            return this.http.put("".concat(this.baseUrl, "/enterpriseUser/update/").concat(enterpriseUserId), enterpriseUser);
          }
        }, {
          key: "createEnterpriseUser",
          value: function createEnterpriseUser(enterpriseUser) {
            return this.http.post("".concat(this.baseUrl, "/enterpriseUser/add"), enterpriseUser);
          }
        }, {
          key: "createEnterpriseUserWithImage",
          value: function createEnterpriseUserWithImage(formData) {
            return this.http.post("".concat(this.baseUrl, "/enterpriseUser/addWithImage"), formData);
          }
        }, {
          key: "createEnterpriseUserWithImageInServer",
          value: function createEnterpriseUserWithImageInServer(formData) {
            return this.http.post("".concat(this.baseUrl, "/enterpriseUser/addWithImageInServer"), formData);
          }
        }]);

        return EnterpriseUserService;
      }();

      _EnterpriseUserService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }, {
          type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService
        }];
      };

      _EnterpriseUserService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _EnterpriseUserService);
      /***/
    },

    /***/
    85373:
    /*!***********************************************!*\
      !*** ./src/app/layout/alert/alert.service.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AlertService": function AlertService() {
          return (
            /* binding */
            _AlertService
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      79765);

      var _AlertService = /*#__PURE__*/function () {
        function AlertService(router) {
          var _this2 = this;

          _classCallCheck(this, AlertService);

          this.router = router;
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
          this.keepAfterRouteChange = false; // clear alert messages on route change unless 'keepAfterRouteChange' flag is true

          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
              if (_this2.keepAfterRouteChange) {
                // only keep for a single route change
                _this2.keepAfterRouteChange = false;
              } else {
                // clear alert message
                _this2.clear();
              }
            }
          });
        }

        _createClass(AlertService, [{
          key: "getAlert",
          value: function getAlert() {
            return this.subject.asObservable();
          }
        }, {
          key: "success",
          value: function success(message) {
            var keepAfterRouteChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            this.keepAfterRouteChange = keepAfterRouteChange;
            this.subject.next({
              type: 'success',
              text: message
            });
          }
        }, {
          key: "error",
          value: function error(message) {
            var keepAfterRouteChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            this.keepAfterRouteChange = keepAfterRouteChange;
            this.subject.next({
              type: 'error',
              text: message
            });
          }
        }, {
          key: "clear",
          value: function clear() {
            // clear by calling subject.next() without parameters
            this.subject.next();
          }
        }]);

        return AlertService;
      }();

      _AlertService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
        }];
      };

      _AlertService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _AlertService);
      /***/
    },

    /***/
    29118:
    /*!*********************************!*\
      !*** ./src/app/main.service.ts ***!
      \*********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainService": function MainService() {
          return (
            /* binding */
            _MainService
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

      var _MainService = /*#__PURE__*/function () {
        function MainService() {
          _classCallCheck(this, MainService);

          this._baseUrl = "http://localhost:8080/springboot/api/v1";
        }

        _createClass(MainService, [{
          key: "getBaseUrl",
          value: function getBaseUrl() {
            return this._baseUrl;
          }
        }]);

        return MainService;
      }();

      _MainService.ctorParameters = function () {
        return [];
      };

      _MainService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
      })], _MainService);
      /***/
    },

    /***/
    60139:
    /*!************************************************************!*\
      !*** ./src/app/master/country-category/masters/country.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Country": function Country() {
          return (
            /* binding */
            _Country
          );
        }
        /* harmony export */

      });

      var _Country = function _Country() {
        _classCallCheck(this, _Country);
      };
      /***/

    },

    /***/
    10776:
    /*!*********************************************************!*\
      !*** ./src/app/master/department/masters/department.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Department": function Department() {
          return (
            /* binding */
            _Department
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _service_center_masters_branch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../service-center/masters/branch */
      40478);

      var _Department = function _Department() {
        _classCallCheck(this, _Department);

        this.site = new _service_center_masters_branch__WEBPACK_IMPORTED_MODULE_0__.Branch();
      };
      /***/

    },

    /***/
    281:
    /*!**********************************************************!*\
      !*** ./src/app/master/drug-generic/masters/age-group.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AgeGroup": function AgeGroup() {
          return (
            /* binding */
            _AgeGroup
          );
        }
        /* harmony export */

      });

      var _AgeGroup = function _AgeGroup() {
        _classCallCheck(this, _AgeGroup);
      };
      /***/

    },

    /***/
    80294:
    /*!*************************************************************!*\
      !*** ./src/app/master/drug-generic/masters/drug-dosages.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DrugDosages": function DrugDosages() {
          return (
            /* binding */
            _DrugDosages
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../lookup-module/masters/lookup-entity */
      11697);
      /* harmony import */


      var _age_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./age-group */
      281);
      /* harmony import */


      var _frequency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./frequency */
      94189);

      var _DrugDosages = function _DrugDosages() {
        _classCallCheck(this, _DrugDosages);

        this.ageGroupRefId = new _age_group__WEBPACK_IMPORTED_MODULE_1__.AgeGroup();
        this.dosageFrequencyRefId = new _frequency__WEBPACK_IMPORTED_MODULE_2__.Frequency();
        this.doseUnitsRefId = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
        this.doseTypesRefId = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
        this.maxDoseUnitsRefId = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
        this.drugFormRefId = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
      };
      /***/

    },

    /***/
    51740:
    /*!**************************************************************!*\
      !*** ./src/app/master/drug-generic/masters/drug-generics.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DrugGenerics": function DrugGenerics() {
          return (
            /* binding */
            _DrugGenerics
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _group_master_masters_groups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../group-master/masters/groups */
      40158);
      /* harmony import */


      var _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../lookup-module/masters/lookup-entity */
      11697);
      /* harmony import */


      var _drug_dosages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./drug-dosages */
      80294);
      /* harmony import */


      var _strength__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./strength */
      62137);

      var _DrugGenerics = function _DrugGenerics() {
        _classCallCheck(this, _DrugGenerics);

        this.dosageRefId = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__.LookupEntity();
        this.drugClassRefId = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__.LookupEntity();
        this.drugTapper = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_1__.LookupEntity();
        this.groups = new _group_master_masters_groups__WEBPACK_IMPORTED_MODULE_0__.Groups();
        this.genericDrugFormOfAdminDetails = new Array();
        this.genericDrugRouteOfAdminDetails = new Array();
        this.genericStrengths = new _strength__WEBPACK_IMPORTED_MODULE_3__.GenericStrength();
        this.drgDosages = new _drug_dosages__WEBPACK_IMPORTED_MODULE_2__.DrugDosages();
      };
      /***/

    },

    /***/
    94189:
    /*!**********************************************************!*\
      !*** ./src/app/master/drug-generic/masters/frequency.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Frequency": function Frequency() {
          return (
            /* binding */
            _Frequency
          );
        }
        /* harmony export */

      });

      var _Frequency = function _Frequency() {
        _classCallCheck(this, _Frequency);
      };
      /***/

    },

    /***/
    62137:
    /*!*********************************************************!*\
      !*** ./src/app/master/drug-generic/masters/strength.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GenericStrength": function GenericStrength() {
          return (
            /* binding */
            _GenericStrength
          );
        }
        /* harmony export */

      });

      var _GenericStrength = function _GenericStrength() {
        _classCallCheck(this, _GenericStrength);
      };
      /***/

    },

    /***/
    44739:
    /*!**********************************************************************!*\
      !*** ./src/app/master/drug-generic/services/drug-generic.service.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DrugGenericService": function DrugGenericService() {
          return (
            /* binding */
            _DrugGenericService
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

      var _DrugGenericService = /*#__PURE__*/function () {
        function DrugGenericService(http, mainService) {
          _classCallCheck(this, DrugGenericService);

          this.http = http;
          this.mainService = mainService; //private baseUrl = 'http://localhost:8080/springboot/api/v1';

          this.baseUrl = '';
          this.baseUrl = this.mainService.getBaseUrl();
        }

        _createClass(DrugGenericService, [{
          key: "getdrugGenerics",
          value: function getdrugGenerics() {
            return this.http.get("".concat(this.baseUrl, "/drugGenerics/get"));
          }
        }, {
          key: "createDrugGenerics",
          value: function createDrugGenerics(drugGenerics) {
            return this.http.post("".concat(this.baseUrl, "/drugGenerics/add"), drugGenerics);
          }
        }, {
          key: "createDrugAvailableForms",
          value: function createDrugAvailableForms(drugAvailableForms) {
            return this.http.post("".concat(this.baseUrl, "/createDrugAvailForms/add"), drugAvailableForms);
          }
        }]);

        return DrugGenericService;
      }();

      _DrugGenericService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }, {
          type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService
        }];
      };

      _DrugGenericService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _DrugGenericService);
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
    11697:
    /*!***************************************************************!*\
      !*** ./src/app/master/lookup-module/masters/lookup-entity.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LookupEntity": function LookupEntity() {
          return (
            /* binding */
            _LookupEntity
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../masters/base-entity */
      28685);

      var _LookupEntity = /*#__PURE__*/function (_masters_base_entity_) {
        _inherits(_LookupEntity, _masters_base_entity_);

        var _super2 = _createSuper(_LookupEntity);

        function _LookupEntity() {
          _classCallCheck(this, _LookupEntity);

          return _super2.call(this);
        }

        return _LookupEntity;
      }(_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity);
      /***/

    },

    /***/
    28685:
    /*!***********************************************!*\
      !*** ./src/app/master/masters/base-entity.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BaseEntity": function BaseEntity() {
          return (
            /* binding */
            _BaseEntity
          );
        }
        /* harmony export */

      });

      var _BaseEntity = function _BaseEntity() {
        _classCallCheck(this, _BaseEntity);
      };
      /***/

    },

    /***/
    40478:
    /*!*********************************************************!*\
      !*** ./src/app/master/service-center/masters/branch.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Branch": function Branch() {
          return (
            /* binding */
            _Branch
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../masters/base-entity */
      28685);

      var _Branch = /*#__PURE__*/function (_masters_base_entity_2) {
        _inherits(_Branch, _masters_base_entity_2);

        var _super3 = _createSuper(_Branch);

        function _Branch() {
          _classCallCheck(this, _Branch);

          return _super3.call(this);
        }

        return _Branch;
      }(_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity);
      /***/

    },

    /***/
    51716:
    /*!********************************************************!*\
      !*** ./src/app/master/unit-master/masters/Employee.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Employee": function Employee() {
          return (
            /* binding */
            _Employee
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _country_category_masters_country__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../country-category/masters/country */
      60139);
      /* harmony import */


      var _department_masters_department__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../department/masters/department */
      10776);
      /* harmony import */


      var _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../lookup-module/masters/lookup-entity */
      11697);
      /* harmony import */


      var _masters_base_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../masters/base-entity */
      28685);
      /* harmony import */


      var _service_center_masters_branch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service-center/masters/branch */
      40478);
      /* harmony import */


      var _enterpriseUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./enterpriseUser */
      30063);
      /* harmony import */


      var _PrefixMaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./PrefixMaster */
      71277);

      var _Employee = /*#__PURE__*/function (_masters_base_entity_3) {
        _inherits(_Employee, _masters_base_entity_3);

        var _super4 = _createSuper(_Employee);

        function _Employee() {
          var _this3;

          _classCallCheck(this, _Employee);

          _this3 = _super4.apply(this, arguments);
          _this3.dob = new Date();
          _this3.employeeStatus = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity();
          _this3.gender = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity();
          _this3.maritalStatus = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity();
          _this3.empNationality = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity();
          _this3.nationality = new _country_category_masters_country__WEBPACK_IMPORTED_MODULE_0__.Country();
          _this3.empCategory = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity();
          _this3.empEmployeementStatus = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity();
          _this3.department = new _department_masters_department__WEBPACK_IMPORTED_MODULE_1__.Department();
          _this3.bloodGroup = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity();
          _this3.empHealthCardValidUpto = new Date();
          _this3.empDesignation = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity();
          _this3.user = new _enterpriseUser__WEBPACK_IMPORTED_MODULE_5__.EnterpriseUser();
          _this3.branch = new _service_center_masters_branch__WEBPACK_IMPORTED_MODULE_4__.Branch();
          _this3.validDate = new Date();
          _this3.empPrefix = new _PrefixMaster__WEBPACK_IMPORTED_MODULE_6__.PrefixMaster();
          _this3.slot = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity();
          return _this3;
        }

        return _Employee;
      }(_masters_base_entity__WEBPACK_IMPORTED_MODULE_3__.BaseEntity);
      /***/

    },

    /***/
    71277:
    /*!************************************************************!*\
      !*** ./src/app/master/unit-master/masters/PrefixMaster.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrefixMaster": function PrefixMaster() {
          return (
            /* binding */
            _PrefixMaster
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../lookup-module/masters/lookup-entity */
      11697);

      var _PrefixMaster = function _PrefixMaster() {
        _classCallCheck(this, _PrefixMaster);

        this.gender = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
      };
      /***/

    },

    /***/
    30063:
    /*!**************************************************************!*\
      !*** ./src/app/master/unit-master/masters/enterpriseUser.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EnterpriseUser": function EnterpriseUser() {
          return (
            /* binding */
            _EnterpriseUser2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../lookup-module/masters/lookup-entity */
      11697);

      var _EnterpriseUser2 = function _EnterpriseUser2() {
        _classCallCheck(this, _EnterpriseUser2);

        this.userType = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
      };
      /***/

    },

    /***/
    17224:
    /*!************************************************************!*\
      !*** ./src/app/preferences/services/preference.service.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PreferencesService": function PreferencesService() {
          return (
            /* binding */
            _PreferencesService
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
      /*! ../../main.service */
      29118);

      var _PreferencesService = /*#__PURE__*/function () {
        function PreferencesService(http, mainService) {
          _classCallCheck(this, PreferencesService);

          this.http = http;
          this.mainService = mainService;
          this.baseUrl = "http://192.168.1.24:8080/springboot/api/v1";
          this.baseUrl = this.mainService.getBaseUrl();
        }

        _createClass(PreferencesService, [{
          key: "getPreferencesList",
          value: function getPreferencesList() {
            return this.http.get("".concat(this.baseUrl, "/preferences/get"));
          }
        }, {
          key: "createPreferences",
          value: function createPreferences(preferences) {
            return this.http.post("".concat(this.baseUrl, "/preferences/add"), preferences);
          }
        }, {
          key: "updatePreferences",
          value: function updatePreferences(preferencesId, preferences) {
            return this.http.post("".concat(this.baseUrl, "/preferences/update/").concat(preferencesId), preferences);
          }
        }, {
          key: "getPreferenceByUserId",
          value: function getPreferenceByUserId(userId) {
            return this.http.get("".concat(this.baseUrl, "/preferences/getByUserId/").concat(userId));
          }
        }]);

        return PreferencesService;
      }();

      _PreferencesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }, {
          type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService
        }];
      };

      _PreferencesService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _PreferencesService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map