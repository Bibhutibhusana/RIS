(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (self["webpackChunksb_admin_bs4_angular_9"] = self["webpackChunksb_admin_bs4_angular_9"] || []).push([["common"], {
    /***/
    73457:
    /*!********************************************************!*\
      !*** ./src/app/master/service-center/masters/block.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Block": function Block() {
          return (
            /* binding */
            _Block
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../masters/base-entity */
      28685);
      /* harmony import */


      var _branch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./branch */
      40478);

      var _Block = /*#__PURE__*/function (_masters_base_entity_) {
        _inherits(_Block, _masters_base_entity_);

        var _super = _createSuper(_Block);

        function _Block() {
          var _this;

          _classCallCheck(this, _Block);

          _this = _super.call(this);
          _this.site = new _branch__WEBPACK_IMPORTED_MODULE_1__.Branch();
          return _this;
        }

        return _Block;
      }(_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity);
      /***/

    },

    /***/
    42806:
    /*!********************************************************!*\
      !*** ./src/app/master/service-center/masters/floor.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Floor": function Floor() {
          return (
            /* binding */
            _Floor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../masters/base-entity */
      28685);
      /* harmony import */


      var _block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./block */
      73457);

      var _Floor = /*#__PURE__*/function (_masters_base_entity_2) {
        _inherits(_Floor, _masters_base_entity_2);

        var _super2 = _createSuper(_Floor);

        function _Floor() {
          var _this2;

          _classCallCheck(this, _Floor);

          _this2 = _super2.call(this);
          _this2.startedOn = new Date();
          _this2.block = new _block__WEBPACK_IMPORTED_MODULE_1__.Block();
          return _this2;
        }

        return _Floor;
      }(_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity);
      /***/

    },

    /***/
    39758:
    /*!*****************************************************************!*\
      !*** ./src/app/master/service-center/masters/service-center.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ServiceCenter": function ServiceCenter() {
          return (
            /* binding */
            _ServiceCenter
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../masters/base-entity */
      28685);
      /* harmony import */


      var _department_masters_department__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../department/masters/department */
      10776);
      /* harmony import */


      var _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../lookup-module/masters/lookup-entity */
      11697);
      /* harmony import */


      var _block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./block */
      73457);
      /* harmony import */


      var _branch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./branch */
      40478);
      /* harmony import */


      var _floor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./floor */
      42806);

      var _ServiceCenter = /*#__PURE__*/function (_masters_base_entity_3) {
        _inherits(_ServiceCenter, _masters_base_entity_3);

        var _super3 = _createSuper(_ServiceCenter);

        function _ServiceCenter() {
          var _this3;

          _classCallCheck(this, _ServiceCenter);

          _this3 = _super3.call(this);
          _this3.serviceCenterType = new _lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_2__.LookupEntity();
          _this3.department = new _department_masters_department__WEBPACK_IMPORTED_MODULE_1__.Department();
          _this3.floor = new _floor__WEBPACK_IMPORTED_MODULE_5__.Floor();
          _this3.block = new _block__WEBPACK_IMPORTED_MODULE_3__.Block();
          _this3.site = new _branch__WEBPACK_IMPORTED_MODULE_4__.Branch();
          return _this3;
        }

        return _ServiceCenter;
      }(_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity);
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map