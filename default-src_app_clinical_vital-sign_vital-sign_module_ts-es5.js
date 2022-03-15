(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkElitePro"] = self["webpackChunkElitePro"] || []).push([["default-src_app_clinical_vital-sign_vital-sign_module_ts"], {
    /***/
    97760:
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/@angular-material-components/file-input/__ivy_ngcc__/fesm2015/angular-material-components-file-input.js ***!
      \******************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AcceptValidator": function AcceptValidator() {
          return (
            /* binding */
            _AcceptValidator
          );
        },

        /* harmony export */
        "MaxSizeValidator": function MaxSizeValidator() {
          return (
            /* binding */
            _MaxSizeValidator
          );
        },

        /* harmony export */
        "NgxMatFileInputComponent": function NgxMatFileInputComponent() {
          return (
            /* binding */
            _NgxMatFileInputComponent
          );
        },

        /* harmony export */
        "NgxMatFileInputIcon": function NgxMatFileInputIcon() {
          return (
            /* binding */
            _NgxMatFileInputIcon
          );
        },

        /* harmony export */
        "NgxMatFileInputModule": function NgxMatFileInputModule() {
          return (
            /* binding */
            _NgxMatFileInputModule
          );
        },

        /* harmony export */
        "calculFileSize": function calculFileSize() {
          return (
            /* binding */
            _calculFileSize
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      39490);
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/platform */
      80521);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      83166);

      var _c0 = ["inputFile"];
      var _c1 = ["inputValue"];

      function NgxMatFileInputComponent_mat_icon_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "attach_file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c2 = [[["", "ngxMatFileInputIcon", ""]]];
      var _c3 = ["[ngxMatFileInputIcon]"];
      var nextUniqueId = 0;

      var NgxMatInputBase = function NgxMatInputBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup,
      /** @docs-private */
      ngControl) {
        _classCallCheck(this, NgxMatInputBase);

        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
      };

      var _NgxMatInputMixinBase = (0, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinErrorState)(NgxMatInputBase);

      var _NgxMatFileInputIcon = function _NgxMatFileInputIcon() {
        _classCallCheck(this, _NgxMatFileInputIcon);
      };

      _NgxMatFileInputIcon.ɵfac = function NgxMatFileInputIcon_Factory(t) {
        return new (t || _NgxMatFileInputIcon)();
      };

      _NgxMatFileInputIcon.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _NgxMatFileInputIcon,
        selectors: [["", "ngxMatFileInputIcon", ""]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_NgxMatFileInputIcon, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ngxMatFileInputIcon]'
          }]
        }], null, null);
      })();

      var _NgxMatFileInputComponent = /*#__PURE__*/function (_NgxMatInputMixinBase2) {
        _inherits(_NgxMatFileInputComponent, _NgxMatInputMixinBase2);

        var _super = _createSuper(_NgxMatFileInputComponent);

        function _NgxMatFileInputComponent(_elementRef, _platform, _cd, ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher) {
          var _this;

          _classCallCheck(this, _NgxMatFileInputComponent);

          _this = _super.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
          _this._elementRef = _elementRef;
          _this._platform = _platform;
          _this._cd = _cd;
          _this.ngControl = ngControl;
          _this.color = 'primary';
          _this.fileNames = null;
          _this._uid = "ngx-mat-fileinput-".concat(nextUniqueId++);
          _this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
          _this.focused = false;
          _this.controlType = 'ngx-mat-file-input';
          _this.autofilled = false;
          /** Function when touched */

          _this._onTouched = function () {};
          /** Function when changed */


          _this._onChange = function () {};

          _this._disabled = false;
          _this._multiple = false;
          _this.placeholder = 'Choose a file';
          _this.separator = ',';
          _this._required = false;
          _this._readonly = true;
          _this.id = _this.id;

          if (_this.ngControl) {
            _this.ngControl.valueAccessor = _assertThisInitialized(_this);
          }

          return _this;
        }

        _createClass(_NgxMatFileInputComponent, [{
          key: "disabled",
          get: function get() {
            if (this.ngControl && this.ngControl.disabled !== null) {
              return this.ngControl.disabled;
            }

            return this._disabled;
          },
          set: function set(value) {
            this._disabled = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);

            if (this.focused) {
              this.focused = false;
              this.stateChanges.next();
            }
          }
        }, {
          key: "id",
          get: function get() {
            return this._id;
          },
          set: function set(value) {
            this._id = value || this._uid;
          }
        }, {
          key: "multiple",
          get: function get() {
            return this._multiple;
          },
          set: function set(value) {
            this._multiple = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
          }
        }, {
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
          }
        }, {
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(value) {
            this._value = value;
          }
        }, {
          key: "readonly",
          get: function get() {
            return this._readonly;
          },
          set: function set(value) {
            this._readonly = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
          }
          /**
           * Limiting accepted file types
           * Example: accept="image/png, image/jpeg" or accept=".png, .jpg, .jpeg" — Accept PNG or JPEG files.
           */

        }, {
          key: "accept",
          get: function get() {
            return this._accept;
          },
          set: function set(value) {
            this._accept = value;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.stateChanges.next();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.stateChanges.complete();
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.ngControl) {
              this.updateErrorState();
            }
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this._updateInputValue(value);
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
            this.stateChanges.next();
          }
          /** Focuses the input. */

        }, {
          key: "focus",
          value: function focus(options) {
            this._inputValueRef.nativeElement.focus(options);
          }
        }, {
          key: "_focusChanged",
          value: function _focusChanged(isFocused) {
            if (isFocused !== this.focused && (!this.readonly || !isFocused)) {
              this.focused = isFocused;
              this.stateChanges.next();
            }
          }
          /** Mark the field as touched */

        }, {
          key: "_markAsTouched",
          value: function _markAsTouched() {
            this._onTouched();

            this._cd.markForCheck();

            this.stateChanges.next();
          }
        }, {
          key: "_isBadInput",
          value: function _isBadInput() {
            var validity = this._inputValueRef.nativeElement.validity;
            return validity && validity.badInput;
          }
        }, {
          key: "empty",
          get: function get() {
            return !this._inputValueRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
          }
        }, {
          key: "shouldLabelFloat",
          get: function get() {
            return this.focused || !this.empty;
          }
        }, {
          key: "setDescribedByIds",
          value: function setDescribedByIds(ids) {
            this._ariaDescribedby = ids.join(' ');
          }
        }, {
          key: "openFilePicker",
          value: function openFilePicker(event) {
            this._inputFileRef.nativeElement.click();

            if (event) {
              event.preventDefault();
              event.stopPropagation();
            }

            this._markAsTouched();
          }
        }, {
          key: "handleFiles",
          value: function handleFiles(filelist) {
            if (filelist.length > 0) {
              var files = new Array();

              for (var i = 0; i < filelist.length; i++) {
                files.push(filelist.item(i));
              }

              this._updateInputValue(files);

              this._resetInputFile();

              this._onChange(this.multiple ? files : files[0]);
            }
          }
          /** Handles a click on the control's container. */

        }, {
          key: "onContainerClick",
          value: function onContainerClick(event) {}
        }, {
          key: "_resetInputFile",
          value: function _resetInputFile() {
            this._inputFileRef.nativeElement.value = "";
          }
        }, {
          key: "_updateInputValue",
          value: function _updateInputValue(files) {
            var text = null;

            if (files) {
              if (Array.isArray(files)) {
                text = this._multiple ? files.map(function (x) {
                  return x.name;
                }).join(this.separator) : files[0].name;
              } else {
                text = files.name != null ? files.name : null;
              }
            }

            this._inputValueRef.nativeElement.value = text;
          }
        }]);

        return _NgxMatFileInputComponent;
      }(_NgxMatInputMixinBase);

      _NgxMatFileInputComponent.ɵfac = function NgxMatFileInputComponent_Factory(t) {
        return new (t || _NgxMatFileInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControl, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.ErrorStateMatcher));
      };

      _NgxMatFileInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _NgxMatFileInputComponent,
        selectors: [["ngx-mat-file-input"]],
        contentQueries: function NgxMatFileInputComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _NgxMatFileInputIcon, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._customIcon = _t.first);
          }
        },
        viewQuery: function NgxMatFileInputComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputFileRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputValueRef = _t.first);
          }
        },
        hostAttrs: [1, "ngx-mat-file-input"],
        inputs: {
          color: "color",
          placeholder: "placeholder",
          separator: "separator",
          id: "id",
          disabled: "disabled",
          multiple: "multiple",
          required: "required",
          value: "value",
          readonly: "readonly",
          accept: "accept",
          errorStateMatcher: "errorStateMatcher"
        },
        exportAs: ["ngx-mat-file-input"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldControl,
          useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
            return _NgxMatFileInputComponent;
          })
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c3,
        decls: 8,
        vars: 13,
        consts: [["autocomplete", "off", 1, "mat-input-element", "mat-form-field-autofill-control", 3, "disabled", "required"], ["inputValue", ""], [1, "mat-form-field-suffix"], ["matSuffix", "", "mat-icon-button", "", "type", "button", 1, "button-browse", 3, "color", "disabled", "click"], ["class", "ngx-mat-file-input--default-icon", 4, "ngIf"], ["type", "file", 1, "input-file", 3, "multiple", "accept", "change"], ["inputFile", ""], [1, "ngx-mat-file-input--default-icon"]],
        template: function NgxMatFileInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatFileInputComponent_Template_button_click_3_listener($event) {
              return ctx.openFilePicker($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgxMatFileInputComponent_mat_icon_4_Template, 2, 0, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NgxMatFileInputComponent_Template_input_change_6_listener($event) {
              return ctx.handleFiles($event.target.files);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("required", ctx.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id)("placeholder", ctx.placeholder)("readonly", ctx.readonly || null)("aria-describedby", ctx._ariaDescribedby || null)("aria-invalid", ctx.errorState)("aria-required", ctx.required.toString());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._customIcon);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", ctx.multiple)("accept", ctx.accept);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon],
        styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .ngx-mat-file-input--default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .ngx-mat-file-input--default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .ngx-mat-file-input--default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .ngx-mat-file-input--default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .ngx-mat-file-input--default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .ngx-mat-file-input--default-icon{margin:auto}.ngx-mat-file-input{display:flex;line-height:18px;height:18px;align-items:center}.ngx-mat-file-input .input-file{display:block;visibility:hidden;width:0;height:0}"],
        encapsulation: 2
      });
      /** @nocollapse */

      _NgxMatFileInputComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__.Platform
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControl,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.ErrorStateMatcher
        }];
      };

      _NgxMatFileInputComponent.propDecorators = {
        _inputFileRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['inputFile', {
            "static": true
          }]
        }],
        _inputValueRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['inputValue', {
            "static": true
          }]
        }],
        _customIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [_NgxMatFileInputIcon]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        separator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        errorStateMatcher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        accept: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_NgxMatFileInputComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'ngx-mat-file-input',
            template: "<input #inputValue autocomplete=\"off\" class=\"mat-input-element mat-form-field-autofill-control\" [attr.id]='id'\r\n  [attr.placeholder]='placeholder' [disabled]='disabled' [required]='required' [attr.readonly]='readonly || null'\r\n  [attr.aria-describedby]='_ariaDescribedby || null' [attr.aria-invalid]='errorState'\r\n  [attr.aria-required]='required.toString()'>\r\n<div class=\"mat-form-field-suffix\">\r\n  <button matSuffix mat-icon-button [color]=\"color\" class=\"button-browse\"  (click)=\"openFilePicker($event)\" type=\"button\"\r\n   [disabled]=\"disabled\">\r\n    <mat-icon *ngIf=\"!_customIcon\" class=\"ngx-mat-file-input--default-icon\">attach_file</mat-icon>\r\n    <ng-content select=\"[ngxMatFileInputIcon]\"></ng-content>\r\n  </button>\r\n</div>\r\n<input type=\"file\" #inputFile (change)=\"handleFiles($event.target.files)\" class=\"input-file\"\r\n  [multiple]=\"multiple\" [accept]=\"accept\">",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            host: {
              'class': 'ngx-mat-file-input'
            },
            providers: [{
              provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldControl,
              useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
                return _NgxMatFileInputComponent;
              })
            }],
            exportAs: 'ngx-mat-file-input',
            styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .ngx-mat-file-input--default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .ngx-mat-file-input--default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .ngx-mat-file-input--default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .ngx-mat-file-input--default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .ngx-mat-file-input--default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .ngx-mat-file-input--default-icon{margin:auto}.ngx-mat-file-input{display:flex;line-height:18px;height:18px;align-items:center}.ngx-mat-file-input .input-file{display:block;visibility:hidden;width:0;height:0}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__.Platform
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControl,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.ErrorStateMatcher
          }];
        }, {
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          separator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          accept: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          _inputFileRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['inputFile', {
              "static": true
            }]
          }],
          _inputValueRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['inputValue', {
              "static": true
            }]
          }],
          _customIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [_NgxMatFileInputIcon]
          }],
          errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      var _NgxMatFileInputModule = function _NgxMatFileInputModule() {
        _classCallCheck(this, _NgxMatFileInputModule);
      };

      _NgxMatFileInputModule.ɵfac = function NgxMatFileInputModule_Factory(t) {
        return new (t || _NgxMatFileInputModule)();
      };

      _NgxMatFileInputModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _NgxMatFileInputModule
      });
      _NgxMatFileInputModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_NgxMatFileInputModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            declarations: [_NgxMatFileInputComponent, _NgxMatFileInputIcon],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule],
            exports: [_NgxMatFileInputComponent, _NgxMatFileInputIcon]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_NgxMatFileInputModule, {
          declarations: function declarations() {
            return [_NgxMatFileInputComponent, _NgxMatFileInputIcon];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule];
          },
          exports: function exports() {
            return [_NgxMatFileInputComponent, _NgxMatFileInputIcon];
          }
        });
      })();

      function _calculFileSize(number) {
        if (number < 1024) {
          return number + 'bytes';
        } else if (number >= 1024 && number < 1048576) {
          return (number / 1024).toFixed(1) + 'KB';
        } else if (number >= 1048576) {
          return (number / 1048576).toFixed(1) + 'MB';
        }
      }
      /**
       * Validator for size of file
       * @param max Max of size of file (in bytes)
       */


      function _MaxSizeValidator(max) {
        return function (ctrl) {
          max = Number(max);

          if (isNaN(max)) {
            throw 'MaxSizeValidator: max of size of file is invalid';
          }

          if (!ctrl.value) return null;
          var files = ctrl.value;

          if (!Array.isArray(ctrl.value)) {
            files = [ctrl.value];
          }

          if (!files.length) return null;

          var add = function add(a, b) {
            return a + b;
          };

          var sumSize = files.map(function (x) {
            return x.size;
          }).reduce(add);

          if (sumSize > max) {
            return {
              maxSize: true
            };
          }

          return null;
        };
      }
      /**
       *
       * @param accept Allowable type of file
       */


      function _AcceptValidator(accept) {
        return function (ctrl) {
          if (!accept) {
            throw 'AcceptValidator: allowable type of file can not be empty';
          }

          if (ctrl.value == null) return null;

          if (!accept.includes(ctrl.value.type)) {
            return {
              accept: true
            };
          }

          return null;
        };
      }
      /*
       * Public API Surface of file-input
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=angular-material-components-file-input.js.map

      /***/

    },

    /***/
    31069:
    /*!**********************************************************!*\
      !*** ./src/app/clinical/vital-sign/master/vital-sign.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VitalSign": function VitalSign() {
          return (
            /* binding */
            _VitalSign
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _group_parameter_mapping_masters_fouom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../group-parameter-mapping/masters/fouom */
      23796);
      /* harmony import */


      var _group_parameter_mapping_masters_vital_parameter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../group-parameter-mapping/masters/vital-parameter */
      89725);
      /* harmony import */


      var _master_group_master_masters_groups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../master/group-master/masters/groups */
      40158);
      /* harmony import */


      var _encounter_masters_visit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../encounter/masters/visit */
      34494);
      /* harmony import */


      var _master_department_masters_department__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../master/department/masters/department */
      10776);
      /* harmony import */


      var _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../master/lookup-module/masters/lookup-entity */
      11697);
      /* harmony import */


      var _master_masters_base_entity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../master/masters/base-entity */
      28685);
      /* harmony import */


      var _master_service_center_masters_branch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../master/service-center/masters/branch */
      40478);
      /* harmony import */


      var _master_service_center_masters_service_center__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../master/service-center/masters/service-center */
      39758);
      /* harmony import */


      var _patient_master_patient__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../patient/master/patient */
      19975);

      var _VitalSign = /*#__PURE__*/function (_master_masters_base_) {
        _inherits(_VitalSign, _master_masters_base_);

        var _super2 = _createSuper(_VitalSign);

        function _VitalSign() {
          var _this2;

          _classCallCheck(this, _VitalSign);

          _this2 = _super2.call(this);
          _this2.controlType = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_5__.LookupEntity();
          _this2.department = new _master_department_masters_department__WEBPACK_IMPORTED_MODULE_4__.Department();
          _this2.enteredDateTime = new Date();
          _this2.group = new _master_group_master_masters_groups__WEBPACK_IMPORTED_MODULE_2__.Groups();
          _this2.location = new _master_service_center_masters_service_center__WEBPACK_IMPORTED_MODULE_8__.ServiceCenter();
          _this2.parameter = new _group_parameter_mapping_masters_vital_parameter__WEBPACK_IMPORTED_MODULE_1__.VitalParameters();
          _this2.patient = new _patient_master_patient__WEBPACK_IMPORTED_MODULE_9__.Patient();
          _this2.site = new _master_service_center_masters_branch__WEBPACK_IMPORTED_MODULE_7__.Branch();
          _this2.uom = new _group_parameter_mapping_masters_fouom__WEBPACK_IMPORTED_MODULE_0__.FOUom();
          _this2.visit = new _encounter_masters_visit__WEBPACK_IMPORTED_MODULE_3__.Visit();
          return _this2;
        }

        return _VitalSign;
      }(_master_masters_base_entity__WEBPACK_IMPORTED_MODULE_6__.BaseEntity);
      /***/

    },

    /***/
    69203:
    /*!********************************************************************!*\
      !*** ./src/app/clinical/vital-sign/services/vital-sign.service.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VitalSignService": function VitalSignService() {
          return (
            /* binding */
            _VitalSignService
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

      var _VitalSignService = /*#__PURE__*/function () {
        function VitalSignService(http, mainService) {
          _classCallCheck(this, VitalSignService);

          this.http = http;
          this.mainService = mainService;
          this.baseUrl = "";
          this.baseUrl = this.mainService.getBaseUrl();
        }

        _createClass(VitalSignService, [{
          key: "getVitalSignList",
          value: function getVitalSignList() {
            return this.http.get("".concat(this.baseUrl, "/vitalSign/get"));
          }
        }, {
          key: "getVitalSignById",
          value: function getVitalSignById(id) {
            return this.http.get("".concat(this.baseUrl, "/vitalSign/getById/").concat(id));
          }
        }, {
          key: "getVitalSignListByPatientId",
          value: function getVitalSignListByPatientId(patientId) {
            return this.http.get("".concat(this.baseUrl, "/vitalSign/getByPatientId/").concat(patientId));
          }
        }, {
          key: "getVitalSignByGroupId",
          value: function getVitalSignByGroupId(groupId) {
            return this.http.get("".concat(this.baseUrl, "/vitalSign/getByGroupId/").concat(groupId));
          }
        }, {
          key: "createVitalSign",
          value: function createVitalSign(vitalSign) {
            return this.http.post("".concat(this.baseUrl, "/vitalSign/add"), vitalSign);
          }
        }]);

        return VitalSignService;
      }();

      _VitalSignService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }, {
          type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService
        }];
      };

      _VitalSignService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _VitalSignService);
      /***/
    },

    /***/
    24404:
    /*!******************************************************************!*\
      !*** ./src/app/clinical/vital-sign/vital-sign-routing.module.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VitalSignRoutingModule": function VitalSignRoutingModule() {
          return (
            /* binding */
            _VitalSignRoutingModule
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


      var _vital_sign_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vital-sign.component */
      21050);

      var routes = [{
        path: '',
        component: _vital_sign_component__WEBPACK_IMPORTED_MODULE_0__.VitalSignComponent
      }];

      var _VitalSignRoutingModule = function VitalSignRoutingModule() {
        _classCallCheck(this, VitalSignRoutingModule);
      };

      _VitalSignRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _VitalSignRoutingModule);
      /***/
    },

    /***/
    21050:
    /*!*************************************************************!*\
      !*** ./src/app/clinical/vital-sign/vital-sign.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VitalSignComponent": function VitalSignComponent() {
          return (
            /* binding */
            _VitalSignComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_vital_sign_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./vital-sign.component.html */
      36330);
      /* harmony import */


      var _vital_sign_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vital-sign.component.css */
      81939);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _group_parameter_mapping_services_group_parameter_mappingin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../group-parameter-mapping/services/group-parameter-mappingin.service */
      49219);
      /* harmony import */


      var _patient_master_patient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../patient/master/patient */
      19975);
      /* harmony import */


      var _router_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../router.animations */
      74903);
      /* harmony import */


      var _master_vital_sign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./master/vital-sign */
      31069);
      /* harmony import */


      var _services_vital_sign_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/vital-sign.service */
      69203);

      var _VitalSignComponent = /*#__PURE__*/function () {
        function VitalSignComponent(vitalSignService, groupParameterMappingService, dialog) {
          _classCallCheck(this, VitalSignComponent);

          this.vitalSignService = vitalSignService;
          this.groupParameterMappingService = groupParameterMappingService;
          this.dialog = dialog;
          this.vitalSignList = new Array();
          this.vitalSign = new _master_vital_sign__WEBPACK_IMPORTED_MODULE_5__.VitalSign();
          this.vitalParameterGroupMappingList = [];
          this.currentValue = new Array();
          this.bmi = null;
          this.gcs = null;
          this.map = null;
          this.patient = new _patient_master_patient__WEBPACK_IMPORTED_MODULE_3__.Patient();
          this.isFromClinicalDetails = false;
        }

        _createClass(VitalSignComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.reloadData();
          }
        }, {
          key: "ngOnLoad",
          value: function ngOnLoad() {}
        }, {
          key: "reloadData",
          value: function reloadData() {
            var _this3 = this;

            this.patient = JSON.parse(localStorage.getItem('patient'));
            this.vitalSignService.getVitalSignList().subscribe(function (data) {
              console.log(data, "VitalSignList");
              _this3.vitalSignList = data;
            });
            this.groupParameterMappingService.getGroupParameterMappingList().subscribe(function (data) {
              console.log(data);
              _this3.vitalParameterGroupMappingList = []; //console.log(document.getElementById('vitalSign').click())
            });
            console.log(window.document.getElementById('vitalSign').click());
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(vitalSignForm) {}
        }, {
          key: "showVitalParameterGroupListByGroupId",
          value: function showVitalParameterGroupListByGroupId(num) {
            var _this4 = this;

            this.groupId = num;
            this.groupParameterMappingService.getGroupParameterMappingByGroupId(num).subscribe(function (data) {
              _this4.vitalParameterGroupMappingList = data;
            });
          }
        }, {
          key: "calculateBMI",
          value: function calculateBMI(vitalSign) {
            var _this5 = this;

            //console.log(vitalSign.parameter.formula)
            if (vitalSign.parameter.parameterId == 1) {
              var formula = vitalSign.parameter.formula;
              var signs = formula.split("_");
              var weight = signs[1];
              var height = signs[3];
              var finalWeight;
              var finalHeight; //let weight,height= formula.split("_");
              //console.log(weight,height)

              this.vitalParameterGroupMappingList.forEach(function (value, index) {
                if (value.parameter.parameterId == weight) {
                  finalWeight = _this5.currentValue[index];
                }

                if (value.parameter.parameterId == height) {
                  finalHeight = _this5.currentValue[index];
                }
              });
              this.bmi = finalWeight / (finalHeight * finalHeight) * 10000;
              this.bmi = this.bmi.toFixed(2); //console.log(this.bmi)
            } else if (vitalSign.parameter.parameterId == 2) {
              console.log(vitalSign.parameter.formula);
            } else if (vitalSign.parameter.parameterId == 3) {
              this.map = 0;
              var _formula = vitalSign.parameter.formula;

              var signs = _formula.split("_"); //console.log(signs)


              var sys = signs[0];
              var dys = signs[2];
              var finalSys = 0;
              var finalDys = 0;
              this.vitalParameterGroupMappingList.forEach(function (value, index) {
                if (value.parameter.parameterId == sys) {
                  finalSys = Number(_this5.currentValue[index]); //console.log(finalSys)
                }

                if (value.parameter.parameterId == dys) {
                  finalDys = Number(_this5.currentValue[index]); //console.log(finalDys+finalSys)
                }
              });
              this.map = (finalSys + 2 * finalDys) / 3;
              this.map = this.map.toFixed(2); //console.log(this.map);
            } else if (vitalSign.parameter.parameterId == 4) {
              var _formula2 = vitalSign.parameter.formula;

              var signs = _formula2.split("_");

              console.log(signs);
              var e = signs[0];
              var v = signs[2];
              var m = signs[4];
              var finalE;
              var finalV;
              var finalM;
              this.vitalParameterGroupMappingList.forEach(function (value, index) {
                if (value.parameter.parameterId == e) {
                  finalE = Number(_this5.currentValue[index]);
                  console.log(finalE);
                }

                if (value.parameter.parameterId == v) {
                  finalV = Number(_this5.currentValue[index]);
                  console.log(finalV);
                }

                if (value.parameter.parameterId == m) {
                  finalM = Number(_this5.currentValue[index]);
                  console.log(finalM);
                }
              });
              this.gcs = finalE + finalV + finalM;
              console.log(this.gcs);
            }
          }
        }, {
          key: "gotoBack",
          value: function gotoBack() {
            history.back();
          }
        }, {
          key: "saveVitalSign",
          value: function saveVitalSign(vitalParameterGroupMappingList) {
            var _this6 = this;

            vitalParameterGroupMappingList.forEach(function (data, index) {
              var vitalSign = new _master_vital_sign__WEBPACK_IMPORTED_MODULE_5__.VitalSign();
              vitalSign.group = data.group;
              vitalSign.parameter = data.parameter;
              vitalSign.currentValue = _this6.currentValue[index];

              if (_this6.currentValue[index] == null) {
                if (data.parameter.parameterId == 1) {
                  vitalSign.currentValue = _this6.bmi;
                } else if (data.parameter.parameterId == 3) {
                  vitalSign.currentValue = _this6.map;
                } else if (data.parameter.parameterId == 4) {
                  vitalSign.currentValue = _this6.gcs;
                }
              }

              vitalSign.enteredDateTime = new Date();
              var ref = data.parameter.referenceRange.split("-");
              vitalSign.lowerRefRange = ref[0];
              vitalSign.upperRefRange = ref[1];
              vitalSign.controlType = data.parameter.controlType;
              vitalSign.department = null;
              vitalSign.location = null;
              vitalSign.patient = _this6.patient;
              vitalSign.site = null;
              vitalSign.visit = null;
              vitalSign.uom = data.parameter.uom;

              _this6.storeVitalSign(vitalSign);
            });
          }
        }, {
          key: "storeVitalSign",
          value: function storeVitalSign(vitalSign) {
            this.vitalSignService.createVitalSign(vitalSign).subscribe(function (data) {
              console.log(data);
              alert("Vital Sign Updated Successfully");
            });
          }
          /*showFilePath(event){
              console.log(event)
              console.log(event.target)
              console.log(event.target.value)
              console.log(event.target.files[0].path)
          }*/

        }, {
          key: "showVitalSignList",
          value: function showVitalSignList(popUp) {
            var _this7 = this;

            this.vitalSignService.getVitalSignByGroupId(this.groupId).subscribe(function (data) {
              console.log(data);
              _this7.vitalSignList = data;
            });
            /*this.vitalSignService.getVitalSignListByPatientId(this.patient.mrn).subscribe(data =>{
                
            })*/

            this.dialog.open(popUp);
          }
        }]);

        return VitalSignComponent;
      }();

      _VitalSignComponent.ctorParameters = function () {
        return [{
          type: _services_vital_sign_service__WEBPACK_IMPORTED_MODULE_6__.VitalSignService
        }, {
          type: _group_parameter_mapping_services_group_parameter_mappingin_service__WEBPACK_IMPORTED_MODULE_2__.GroupParameterMappinginService
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog
        }];
      };

      _VitalSignComponent.propDecorators = {
        isFromClinicalDetails: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
        }]
      };
      _VitalSignComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-vital-sign',
        template: _raw_loader_vital_sign_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _router_animations__WEBPACK_IMPORTED_MODULE_4__.routerTransition)()],
        styles: [_vital_sign_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _VitalSignComponent);
      /***/
    },

    /***/
    88697:
    /*!**********************************************************!*\
      !*** ./src/app/clinical/vital-sign/vital-sign.module.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VitalSignModule": function VitalSignModule() {
          return (
            /* binding */
            _VitalSignModule
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


      var _vital_sign_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vital-sign-routing.module */
      24404);
      /* harmony import */


      var _vital_sign_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vital-sign.component */
      21050);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared */
      51679);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../material/material.module */
      90898);
      /* harmony import */


      var _angular_material_components_file_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular-material-components/file-input */
      97760);

      var _VitalSignModule = function VitalSignModule() {
        _classCallCheck(this, VitalSignModule);
      };

      _VitalSignModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_vital_sign_component__WEBPACK_IMPORTED_MODULE_1__.VitalSignComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _vital_sign_routing_module__WEBPACK_IMPORTED_MODULE_0__.VitalSignRoutingModule, _shared__WEBPACK_IMPORTED_MODULE_2__.PageHeaderModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, _material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _angular_material_components_file_input__WEBPACK_IMPORTED_MODULE_9__.NgxMatFileInputModule],
        exports: [_vital_sign_component__WEBPACK_IMPORTED_MODULE_1__.VitalSignComponent]
      })], _VitalSignModule);
      /***/
    },

    /***/
    40920:
    /*!***************************************************************!*\
      !*** ./src/app/group-parameter-mapping/masters/fouom-type.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FOUOMType": function FOUOMType() {
          return (
            /* binding */
            _FOUOMType
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _master_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../master/masters/base-entity */
      28685);

      var _FOUOMType = /*#__PURE__*/function (_master_masters_base_2) {
        _inherits(_FOUOMType, _master_masters_base_2);

        var _super3 = _createSuper(_FOUOMType);

        function _FOUOMType() {
          var _this8;

          _classCallCheck(this, _FOUOMType);

          _this8 = _super3.apply(this, arguments);
          _this8.active = true;
          return _this8;
        }

        return _FOUOMType;
      }(_master_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity);
      /***/

    },

    /***/
    23796:
    /*!**********************************************************!*\
      !*** ./src/app/group-parameter-mapping/masters/fouom.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FOUom": function FOUom() {
          return (
            /* binding */
            _FOUom
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _master_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../master/masters/base-entity */
      28685);
      /* harmony import */


      var _fouom_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./fouom-type */
      40920);

      var _FOUom = /*#__PURE__*/function (_master_masters_base_3) {
        _inherits(_FOUom, _master_masters_base_3);

        var _super4 = _createSuper(_FOUom);

        function _FOUom() {
          var _this9;

          _classCallCheck(this, _FOUom);

          _this9 = _super4.call(this);
          _this9.uomType = new _fouom_type__WEBPACK_IMPORTED_MODULE_1__.FOUOMType();
          _this9.active = true;
          _this9.derived = false;
          return _this9;
        }

        return _FOUom;
      }(_master_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity);
      /***/

    },

    /***/
    89725:
    /*!********************************************************************!*\
      !*** ./src/app/group-parameter-mapping/masters/vital-parameter.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VitalParameters": function VitalParameters() {
          return (
            /* binding */
            _VitalParameters
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../master/lookup-module/masters/lookup-entity */
      11697);
      /* harmony import */


      var _master_masters_base_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../master/masters/base-entity */
      28685);
      /* harmony import */


      var _fouom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./fouom */
      23796);

      var _VitalParameters = /*#__PURE__*/function (_master_masters_base_4) {
        _inherits(_VitalParameters, _master_masters_base_4);

        var _super5 = _createSuper(_VitalParameters);

        function _VitalParameters() {
          var _this10;

          _classCallCheck(this, _VitalParameters);

          _this10 = _super5.call(this);
          _this10.visitTypeApplicable = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
          _this10.dataType = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
          _this10.controlType = new _master_lookup_module_masters_lookup_entity__WEBPACK_IMPORTED_MODULE_0__.LookupEntity();
          _this10.uom = new _fouom__WEBPACK_IMPORTED_MODULE_2__.FOUom();
          _this10.genderWise = false;
          _this10.ageWise = false;
          return _this10;
        }

        return _VitalParameters;
      }(_master_masters_base_entity__WEBPACK_IMPORTED_MODULE_1__.BaseEntity);
      /***/

    },

    /***/
    49219:
    /*!***************************************************************************************!*\
      !*** ./src/app/group-parameter-mapping/services/group-parameter-mappingin.service.ts ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GroupParameterMappinginService": function GroupParameterMappinginService() {
          return (
            /* binding */
            _GroupParameterMappinginService
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

      var _GroupParameterMappinginService = /*#__PURE__*/function () {
        function GroupParameterMappinginService(http, mainService) {
          _classCallCheck(this, GroupParameterMappinginService);

          this.http = http;
          this.mainService = mainService;
          this.baseUrl = "";
          this.baseUrl = this.mainService.getBaseUrl();
        }

        _createClass(GroupParameterMappinginService, [{
          key: "getGroupParameterMappingList",
          value: function getGroupParameterMappingList() {
            return this.http.get("".concat(this.baseUrl, "/parameterToGrpMap/get"));
          }
        }, {
          key: "getGroupParameterMappingById",
          value: function getGroupParameterMappingById(id) {
            return this.http.get("".concat(this.baseUrl, "/parameterToGrpMap/getById/").concat(id));
          }
        }, {
          key: "getGroupParameterMappingByGroupId",
          value: function getGroupParameterMappingByGroupId(id) {
            return this.http.get("".concat(this.baseUrl, "/parameterToGrpMap/getByGroupId/").concat(id));
          }
        }, {
          key: "createGroupParameterMapping",
          value: function createGroupParameterMapping(groupParameterMapping) {
            return this.http.post("".concat(this.baseUrl, "/parameterToGrpMap/add"), groupParameterMapping);
          }
        }, {
          key: "deleteGroupParameterMapping",
          value: function deleteGroupParameterMapping(id) {
            return this.http["delete"]("".concat(this.baseUrl, "/parameterToGrpMap/delete/").concat(id));
          }
        }]);

        return GroupParameterMappinginService;
      }();

      _GroupParameterMappinginService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }, {
          type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService
        }];
      };

      _GroupParameterMappinginService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _GroupParameterMappinginService);
      /***/
    },

    /***/
    30742:
    /*!***********************************************************!*\
      !*** ./src/app/master/group-master/masters/group-type.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GroupType": function GroupType() {
          return (
            /* binding */
            _GroupType
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../masters/base-entity */
      28685);

      var _GroupType = /*#__PURE__*/function (_masters_base_entity_) {
        _inherits(_GroupType, _masters_base_entity_);

        var _super6 = _createSuper(_GroupType);

        function _GroupType() {
          _classCallCheck(this, _GroupType);

          return _super6.call(this);
        }

        return _GroupType;
      }(_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity);
      /***/

    },

    /***/
    40158:
    /*!*******************************************************!*\
      !*** ./src/app/master/group-master/masters/groups.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Groups": function Groups() {
          return (
            /* binding */
            _Groups
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../masters/base-entity */
      28685);
      /* harmony import */


      var _group_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./group-type */
      30742);

      var _Groups = /*#__PURE__*/function (_masters_base_entity_2) {
        _inherits(_Groups, _masters_base_entity_2);

        var _super7 = _createSuper(_Groups);

        function _Groups() {
          var _this11;

          _classCallCheck(this, _Groups);

          _this11 = _super7.apply(this, arguments);
          _this11.groupType = new _group_type__WEBPACK_IMPORTED_MODULE_1__.GroupType();
          return _this11;
        }

        return _Groups;
      }(_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity);
      /***/

    },

    /***/
    81939:
    /*!**************************************************************!*\
      !*** ./src/app/clinical/vital-sign/vital-sign.component.css ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXRhbC1zaWduLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    36330:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clinical/vital-sign/vital-sign.component.html ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<div [@routerTransition] *ngIf = \"!isFromClinicalDetails\">\r\n\t<app-page-header [mainhead]=\"'DoctorsWorkBench'\"\r\n\t\t[mainheadLink]=\"'/doctorsWorkbench'\" [heading]=\"'Vital Sign'\"\r\n\t\t[icon]=\"'fa-cog'\"></app-page-header>\r\n</div>\r\n<div class=\"card \">\r\n\t<div class=\"card-head\">\r\n\t\t<nav class=\"navbar  bg-dark text-white\">\r\n\t\t\t<h3>Vital Sign</h3>\r\n\t\t\t<div>\r\n\t\t\t\t<img src =\"./assets/images/close.ico\" matTooltip = \"Back\" style =\"height:35px;width:35px;\" (click) = \"gotoBack()\">\r\n\t\t\t</div>\r\n\t\t</nav>\r\n\t</div>\r\n<!-- \t<mat-form-field>\r\n   <ngx-mat-file-input (change) = \"showFilePath($event) [accept] = true\">\r\n   </ngx-mat-file-input>\r\n</mat-form-field>\r\n\t<input matInput type =\"File\" (change) = \"showFilePath($event)\"> -->\r\n\t<div class='card-body'>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-2 \">\r\n\t\t\t\t<div class=\"card pt-0\">\r\n\t\t\t\t\t<ul ngbNav #nav=\"ngbNav\" class=\"nav-pills\" orientation=\"vertical\">\r\n\t\t\t\t\t\t<li ngbNavItem=\"vitalsign\">\r\n\t\t\t\t\t\t\t<a ngbNavLink id = \"vitalSign\" (click) = \"showVitalParameterGroupListByGroupId(1010)\"> Vital Sign </a> \r\n\t\t\t\t\t\t\t\t<ng-template ngbNavContent>\r\n\t\t\t\t\t\t\t\t\t<div class=\"card  \">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-head \">\r\n\t\t\t\t\t\t\t\t\t\t\t<nav class=\"navbar bg-dark text-white\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h2>Vital Sign</h2>\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button mat-raised-button color=\"accent\" class =\"btn btn-sm btn-warning\" (click) = \"showVitalSignList(vitalSignPopup)\">View All</button>&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button mat-raised-button color=\"primary\" class =\"btn btn-sm btn-warning\" (click) = \"saveVitalSign(vitalParameterGroupMappingList)\">Save</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table  table-sm \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Vital Signs</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Current Value</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Unit</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Reference Range</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Remarks</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let vitalsign of vitalParameterGroupMappingList; let i =index\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class =\"col-md-2\">{{vitalsign.parameter.parameterName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class =\"col-md-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div  *ngIf = \"vitalsign.parameter.controlType.lookupId != 192; else showImg\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"typeahead-basic\" type=\"text\" class=\"form-control  \"  [(ngModel)] = \"currentValue[i]\"/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #showImg>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- -----------Div for Calculation of BMI -------------------  -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label *ngIf =\" vitalsign.parameter.parameterId == 1\"> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label *ngIf = \"bmi == 'NaN'\" style =\"color:red;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPlease Enter Height and Weight first\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>&nbsp;\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label *ngIf = \"bmi!=null && bmi != 'NaN'\">{{bmi}}</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- -----------Div for Calculation of Test -------------------  -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label *ngIf =\"vitalsign.parameter.parameterId == 2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label *ngIf = \"bmi!=null && bmi != 'NaN'\">{{bmi}}</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- -----------Div for Calculation of MAP -------------------  -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label *ngIf =\"vitalsign.parameter.parameterId == 3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label *ngIf = \"map == 'NaN'\" style =\"color:red;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPlease Enter Systolic BP and Diastolic BP \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>&nbsp;\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label *ngIf = \"map!=null && map != 'NaN'\">{{map}}</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- -----------Div for Calculation of GCS -------------------  -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label *ngIf =\"vitalsign.parameter.parameterId == 4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label *ngIf = \"gcs == 'NaN'\" style =\"color:red;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPlease Enter E,V and M first\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>&nbsp;\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label *ngIf = \"gcs!=null && gcs != 'NaN'\">{{gcs}}</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src = \"./assets/images/calculator.png\" style = \"height:25px;width: 25px;\" (click) = \"calculateBMI(vitalsign)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class =\"col-md-2\"><label *ngIf =\"vitalsign.parameter.uom != null\">{{vitalsign.parameter.uom.name}}</label></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class =\"col-md-2\">{{vitalsign.parameter.referenceRange}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td class =\"col-md-4\"><input id=\"typeahead-basic\" type=\"text\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"  /></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t<li ngbNavItem=\"bloodsugar\"><a ngbNavLink (click) = \"showVitalParameterGroupListByGroupId(89)\"> Blood Sugarssss</a> <ng-template\r\n\t\t\t\t\t\t\t\tngbNavContent>\r\n\t\t\t\t\t\t\t<div class=\"card \">\r\n\t\t\t\t\t\t\t\t<div class=\"card-head \">\r\n\t\t\t\t\t\t\t\t\t<nav class=\"navbar bg-dark text-white\">\r\n\t\t\t\t\t\t\t\t\t\t<h2>Blood Sugar</h2>\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t<button mat-raised-button color=\"accent\" class =\"btn btn-sm btn-warning\">View All</button>&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t<button mat-raised-button color=\"primary\" class =\"btn btn-sm btn-warning\">Save</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t\t\t<table class=\"table  table-sm \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Vital Signs</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Current Value</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Unit</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Reference Range</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Remarks</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let vitalsign of vitalParameterGroupMappingList; let i =index\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"height: 10px; width: 10px\">{{vitalsign.parameter.parameterName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div  *ngIf = \"vitalsign.parameter.controlType.lookupId != 192; else showImg\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"typeahead-basic\" type=\"text\" class=\"form-control\"  [(ngModel)] = \"currentValue[i]\"/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #showImg>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- -----------Div for Calculation of BMI -------------------  -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label *ngIf =\" vitalsign.parameter.parameterId == 1\"> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label *ngIf = \"bmi == 'NaN'\" style =\"color:red;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPlease Enter Height and Weight first\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>&nbsp;\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label *ngIf = \"bmi!=null && bmi != 'NaN'\">{{bmi}}</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- -----------Div for Calculation of Test -------------------  -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label *ngIf =\"vitalsign.parameter.parameterId == 2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label *ngIf = \"bmi!=null && bmi != 'NaN'\">{{bmi}}</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- -----------Div for Calculation of MAP -------------------  -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label *ngIf =\"vitalsign.parameter.parameterId == 3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label *ngIf = \"map == 'NaN'\" style =\"color:red;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPlease Enter Systolic BP and Diastolic BP \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>&nbsp;\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label *ngIf = \"map!=null && map != 'NaN'\">{{map}}</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- -----------Div for Calculation of GCS -------------------  -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label *ngIf =\"vitalsign.parameter.parameterId == 4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label *ngIf = \"gcs == 'NaN'\" style =\"color:red;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPlease Enter E,V and M first\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>&nbsp;\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label *ngIf = \"gcs!=null && gcs != 'NaN'\">{{gcs}}</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;&nbsp;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src = \"./assets/images/calculator.png\" style = \"height:25px;width: 25px;\" (click) = \"calculateBMI(vitalsign)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><label *ngIf =\"vitalsign.parameter.uom != null\">{{vitalsign.parameter.uom.name}}</label></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{vitalsign.parameter.referenceRange}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td><input id=\"typeahead-basic\" type=\"text\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"  /></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ng-template></li>\r\n\r\n\t\t\t\t\t\t<li ngbNavItem=\"painscale\"><a ngbNavLink>Pain Scale</a> <ng-template\r\n\t\t\t\t\t\t\t\tngbNavContent>\r\n\t\t\t\t\t\t\t<div class=\"card \">\r\n\t\t\t\t\t\t\t\t<div class=\"card-head \">\r\n\t\t\t\t\t\t\t\t\t<nav class=\"navbar bg-dark text-white  justify-content-center\">\r\n\t\t\t\t\t\t\t\t\t\t<h2>Pain Scale</h2>\r\n\t\t\t\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t\t\t<table class=\"table table-sm \">\r\n\t\t\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Vital Signs</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Current Value</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Unit</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Reference Range</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Remarks</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"height: 10px; width: 10px\">PainScale</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row p-1 m-1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"range\" size=5 class=\"col-md-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" size=\"3\" [(ngModel)]=\"painScaleValue\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row p-1 m-1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/images/painscale1.jpg\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talter=\"painscale1\" (click)=\"setPainScaleValue('0')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row text-center ml-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>0</label> <label> No Hurt</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/images/painscale2.jpg\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talter=\"painscale1\" (click)=\"setPainScaleValue('2')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row text-center ml-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>2</label> <label> Hurts Little Bit</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/images/painscale3.jpg\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talter=\"painscale1\" (click)=\"setPainScaleValue('4')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row text-center ml-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>4</label> <label>Hurts Little More</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/images/painscale4.jpg\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talter=\"painscale1\" (click)=\"setPainScaleValue('6')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row text-center ml-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>6</label> <label>Hurts Even More</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/images/painscale5.jpg\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talter=\"painscale1\" (click)=\"setPainScaleValue('8')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row text-center ml-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>8</label> <label>Hurts Whole Lot</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/images/painscale6.jpg\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talter=\"painscale1\" (click)=\"setPainScaleValue('10')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row text-center ml-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>10</label> <label>Hurts Worst</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row p-1 m-1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table border border-1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=2>Selected Value : &nbsp;{{painValue}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>0-0 : No Pain</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>1-2 : Mid Pain</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>3-4 : Moderate</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>5-6 : Above Moderate</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>7-8 : Severe</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>9-10 : Worst</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>0.0 - 10.0</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td><input id=\"typeahead-basic\" type=\"text\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" /></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr> -->\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ng-template></li>\r\n\r\n\t\t\t\t\t\t<li ngbNavItem=\"gcs\"><a ngbNavLink>GCS</a> <ng-template\r\n\t\t\t\t\t\t\t\tngbNavContent>\r\n\t\t\t\t\t\t\t<div class=\"card \">\r\n\t\t\t\t\t\t\t\t<div class=\"card-head \" border=\"\">\r\n\t\t\t\t\t\t\t\t\t<nav class=\"navbar bg-dark text-white  justify-content-center\">\r\n\t\t\t\t\t\t\t\t\t\t<h2>GCS</h2>\r\n\t\t\t\t\t\t\t\t\t</nav>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"card-body table-responsive\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t\t\t<table class=\"table table-sm \">\r\n\t\t\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Vital Signs</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Current Value</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Unit</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Reference Range</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Remarks</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <tr *ngFor=\"let gcs of gcsList\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"height: 10px; width: 10px\">{{gcs.vitalSign}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td><input id=\"typeahead-basic\" type=\"text\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" [(ngModel)]=\"gcs.currentValue\" /></td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{gcs.unit}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{gcs.referenceRange}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<td><input id=\"typeahead-basic\" type=\"text\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" [(ngModel)]=\"gcs.remarks\" /></td>\r\n\t\t\t\t\t\t\t\t\t\t\t</tr> -->\r\n\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ng-template></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-10 \r\n\t\t\t+\">\r\n\t\t\t\t<div [ngbNavOutlet]=\"nav\" ></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<ng-template #vitalSignPopup>\r\n\t<div class =\"card border\">\r\n\t\t<nav class=\"navbar bg-dark text-white\">\r\n\t\t\t<h3>Vital Sign List</h3>\r\n\t\t</nav>\r\n\t\t<div class =\"card-body\">\r\n\t\t\t<table class =\"table table-responsive\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr class =\"bg-secondary\">\r\n\t\t\t\t\t\t<th class =\"border border-dark\">Data/Time-></th>\r\n\t\t\t\t\t\t<th *ngFor =\"let vitalSig of vitalSignList;let i = index\" class =\"border border-dark\">\r\n\t\t\t\t\t\t\t{{vitalSig.parameter.parameterName}}\r\n\t\t\t\t\t\t</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr >\r\n\t\t\t\t\t\t<td class =\"border border-dark\">Date/Time</td>\r\n\t\t\t\t\t\t<td class =\"border border-dark\" *ngFor =\"let vitalSig of vitalSignList;let i = index\">\r\n\t\t\t\t\t\t\t{{vitalSig.currentValue}}\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<!--  <td *ngFor =\"let vitalSign of vitalSignList\">{{vitalSign.parameter.parameterName}}</td>-->\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n</ng-template>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_clinical_vital-sign_vital-sign_module_ts-es5.js.map