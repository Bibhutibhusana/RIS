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

  (self["webpackChunkElitePro"] = self["webpackChunkElitePro"] || []).push([["default-src_app_master_group-master_group-master_module_ts"], {
    /***/
    26127:
    /*!********************************************************************!*\
      !*** ./src/app/master/group-master/group-master-routing.module.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GroupMasterRoutingModule": function GroupMasterRoutingModule() {
          return (
            /* binding */
            _GroupMasterRoutingModule
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


      var _group_master_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./group-master.component */
      10512);

      var routes = [{
        path: '',
        component: _group_master_component__WEBPACK_IMPORTED_MODULE_0__.GroupMasterComponent
      }];

      var _GroupMasterRoutingModule = function GroupMasterRoutingModule() {
        _classCallCheck(this, GroupMasterRoutingModule);
      };

      _GroupMasterRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _GroupMasterRoutingModule);
      /***/
    },

    /***/
    10512:
    /*!***************************************************************!*\
      !*** ./src/app/master/group-master/group-master.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TreeFlatNode": function TreeFlatNode() {
          return (
            /* binding */
            _TreeFlatNode
          );
        },

        /* harmony export */
        "GroupMasterComponent": function GroupMasterComponent() {
          return (
            /* binding */
            _GroupMasterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_group_master_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./group-master.component.html */
      23138);
      /* harmony import */


      var _group_master_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./group-master.component.css */
      52690);
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/tree */
      52796);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/tree */
      1933);
      /* harmony import */


      var _layout_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../layout/alert/alert.service */
      85373);
      /* harmony import */


      var _router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../router.animations */
      74903);
      /* harmony import */


      var _masters_group_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./masters/group-type */
      30742);
      /* harmony import */


      var _masters_groups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./masters/groups */
      40158);
      /* harmony import */


      var _services_group_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/group.service */
      99610);

      var _TreeFlatNode = function _TreeFlatNode() {
        _classCallCheck(this, _TreeFlatNode);
      };

      var _GroupMasterComponent = /*#__PURE__*/function () {
        function GroupMasterComponent(groupService, alertService) {
          _classCallCheck(this, GroupMasterComponent);

          //this.dataSource.data = TREE_DATA;
          this.groupService = groupService;
          this.alertService = alertService;
          this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__.NestedTreeControl(function (node) {
            return node.children;
          });
          this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__.MatTreeNestedDataSource();

          this.hasChild = function (_, node) {
            return !!node.children && node.children.length > 0;
          };

          this.hasNoContent = function (_, _nodeData) {
            return _nodeData.item === '';
          }; //dataSource: MatTreeFlatDataSource<Tree, TreeFlatNode>;


          this.groupsForTreeView = [];
          this.filteredGroupsForTreeView = [];
          this.groupTypeList = [];
          this.groupTypes = new _masters_group_type__WEBPACK_IMPORTED_MODULE_4__.GroupType();
          this.groupList = new Array();
          this.group = new _masters_groups__WEBPACK_IMPORTED_MODULE_5__.Groups();
          this.parentGroup = new _masters_groups__WEBPACK_IMPORTED_MODULE_5__.Groups();
          this.isNewGroup = true;
          this.groupForEmitting = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
          this.isDrugGeneric = false;
          this.groupId = 0;
        }

        _createClass(GroupMasterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.reloadData();

            if (this.groupId == 83) {
              this.groupService.getGroupsTreeByGroupTypeId(3).subscribe(function (data) {
                console.log(data);
                _this.filteredGroupsForTreeView = data;
                _this.dataSource.data = _this.filteredGroupsForTreeView;
              });
            }
          }
        }, {
          key: "reloadData",
          value: function reloadData() {
            var _this2 = this;

            this.groupService.getGroupsForTreeView().subscribe(function (data) {
              console.log(data);
              _this2.groupsForTreeView = data; //this.dataSource.data = this.groupsForTreeView;
            });
            this.groupService.getGroupTypeList().subscribe(function (data) {
              console.log(data);
              _this2.groupTypeList = data;
            });
          }
        }, {
          key: "getGroupByType",
          value: function getGroupByType(groupType) {
            var _this3 = this;

            console.log("GetGroupByType function is called");
            console.log(groupType);
            this.groupTypes = groupType;
            this.groupService.getGroupsTreeByGroupTypeId(groupType.groupTypeId).subscribe(function (data) {
              console.log(data);
              _this3.filteredGroupsForTreeView = data;
              _this3.dataSource.data = _this3.filteredGroupsForTreeView;
            });
            this.parentGroup.groupName = "";
            this.group = new _masters_groups__WEBPACK_IMPORTED_MODULE_5__.Groups();
            this.group.mapGroupId = 0;
            this.group.groupType = groupType;
          }
        }, {
          key: "childNodeClicked",
          value: function childNodeClicked(tree) {
            var _this4 = this;

            this.isNewGroup = false;
            this.name = tree.name;
            this.groupService.getGroupsByGroupId(tree.groupId).subscribe(function (data) {
              //console.log(data);
              _this4.group = data; //console.error(this.group);

              _this4.groupForEmitting.emit(_this4.group);

              if (_this4.group.mapGroupId != 0) {
                _this4.groupService.getGroupsByGroupId(_this4.group.mapGroupId).subscribe(function (data) {
                  //console.log(data,"GetByGroupId");
                  _this4.parentGroup = data;
                });
              } else {
                _this4.parentGroup.groupName = _this4.group.groupName;
              }
            });
            /*this.groupService.getGroupByName(this.name).subscribe(data =>{
                console.log(data,"GetByGroupName");
                this.groupList = data;
                //console.log(this.groupList[0])
                this.group = this.groupList[0]
                if(this.group.mapGroupId != 0){
                    this.groupService.getGroupsByGroupId(this.group.mapGroupId).subscribe(data =>{
                    console.log(data,"GetByGroupId");
                    this.parentGroup = data;
                })
                }
                else{
                    this.parentGroup.groupName = this.group.groupName;
                }
                
            })*/
          }
        }, {
          key: "parentNodeClicked",
          value: function parentNodeClicked(tree) {
            var _this5 = this;

            this.isNewGroup = false;
            this.groupService.getGroupsByGroupId(tree.groupId).subscribe(function (data) {
              console.log(data);
              _this5.group = data;

              if (_this5.group.mapGroupId != 0) {
                _this5.groupService.getGroupsByGroupId(_this5.group.mapGroupId).subscribe(function (data) {
                  console.log(data, "GetByGroupId");
                  _this5.parentGroup = data;
                });
              } else {
                _this5.parentGroup.groupName = _this5.group.groupName;
              }
            });
            this.name = tree.name;
            /*this.groupService.getGroupByName(this.name).subscribe(data =>{
                console.log(data,"GetByGroupName");
                this.groupList = data;
                //console.log(this.groupList[0])
                this.group = this.groupList[0]
                if(this.group.mapGroupId != 0){
                    this.groupService.getGroupsByGroupId(this.group.mapGroupId).subscribe(data =>{
                    console.log(data,"GetByGroupId");
                    this.parentGroup = data;
                })
                this.groupService.getGroupsByGroupId(this.group.groupId).subscribe(data =>{
                    console.log(data,"GetByGroupId");
                    this.group = data;
                })
                }
                else{
                    this.parentGroup.groupName = this.group.groupName;
                }
                
            })*/
          }
        }, {
          key: "createGroup",
          value: function createGroup() {
            this.isNewGroup = true;
            console.log("Create Group is called");
            this.parentGroup.groupName = this.group.groupName;
            this.group.groupName = null;
            this.group.description = null;
            this.group.sortOrder = null;
            this.group.serviceCodeType = null;

            if (this.group.mapGroupId == undefined) {
              this.group.mapGroupId = 0;
            } else {
              this.group.mapGroupId = this.group.groupId;
            }

            this.group.groupId = null;
            console.log(this.group);
          }
        }, {
          key: "saveGroup",
          value: function saveGroup() {
            var _this6 = this;

            console.log("Save Group is called!!!");
            this.groupService.createNewGroup(this.group).subscribe(function (data) {
              console.log(data);

              _this6.reloadData();

              _this6.getGroupByType(_this6.groupTypes);

              _this6.alertService.success("Successfully  Created Group!.");
            }, function (error) {
              _this6.alertService.error("There is some issue in your data.");
            });
          }
        }, {
          key: "updateGroup",
          value: function updateGroup() {
            var _this7 = this;

            console.log(this.group);
            this.groupService.updateGroup(this.group.groupId, this.group).subscribe(function (data) {
              console.log(data);

              _this7.reloadData();

              _this7.getGroupByType(_this7.groupTypes);

              _this7.alertService.success("Successfully Updated Group!!.");
            }, function (error) {
              _this7.alertService.error("There is some issue in your data.");
            });
          }
        }]);

        return GroupMasterComponent;
      }();

      _GroupMasterComponent.ctorParameters = function () {
        return [{
          type: _services_group_service__WEBPACK_IMPORTED_MODULE_6__.GroupService
        }, {
          type: _layout_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }];
      };

      _GroupMasterComponent.propDecorators = {
        groupsForTreeView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
        }],
        groupTypeList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
        }],
        groupForEmitting: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
        }],
        isDrugGeneric: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
        }],
        groupId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
        }]
      };
      _GroupMasterComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-group-master',
        template: _raw_loader_group_master_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _router_animations__WEBPACK_IMPORTED_MODULE_3__.routerTransition)()],
        styles: [_group_master_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _GroupMasterComponent);
      /***/
    },

    /***/
    31600:
    /*!************************************************************!*\
      !*** ./src/app/master/group-master/group-master.module.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GroupMasterModule": function GroupMasterModule() {
          return (
            /* binding */
            _GroupMasterModule
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


      var _material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../material/material.module */
      90898);
      /* harmony import */


      var _group_master_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./group-master.component */
      10512);
      /* harmony import */


      var _group_master_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./group-master-routing.module */
      26127);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared */
      51679);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _GroupMasterModule = function GroupMasterModule() {
        _classCallCheck(this, GroupMasterModule);
      };

      _GroupMasterModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_group_master_component__WEBPACK_IMPORTED_MODULE_1__.GroupMasterComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _group_master_routing_module__WEBPACK_IMPORTED_MODULE_2__.GroupMasterRoutingModule, _material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _shared__WEBPACK_IMPORTED_MODULE_3__.PageHeaderModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule],
        exports: [_group_master_component__WEBPACK_IMPORTED_MODULE_1__.GroupMasterComponent]
      })], _GroupMasterModule);
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

        var _super = _createSuper(_GroupType);

        function _GroupType() {
          _classCallCheck(this, _GroupType);

          return _super.call(this);
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

        var _super2 = _createSuper(_Groups);

        function _Groups() {
          var _this8;

          _classCallCheck(this, _Groups);

          _this8 = _super2.apply(this, arguments);
          _this8.groupType = new _group_type__WEBPACK_IMPORTED_MODULE_1__.GroupType();
          return _this8;
        }

        return _Groups;
      }(_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity);
      /***/

    },

    /***/
    99610:
    /*!***************************************************************!*\
      !*** ./src/app/master/group-master/services/group.service.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GroupService": function GroupService() {
          return (
            /* binding */
            _GroupService
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

      var _GroupService = /*#__PURE__*/function () {
        function GroupService(http) {
          _classCallCheck(this, GroupService);

          this.http = http;
          this.baseUrl = "http://192.168.1.24:8080/springboot/api/v1";
        }
        /*getGroupMasterList():any{
            return this.http.get(`${this.baseUrl}/group-master/get`)
        }
        getGroupMasterById(groupId){
            return this.http.get(`${this.baseUrl}/group-master/get-by-id/${groupId}`)
        }
        
        createGroupMaster(groupMaster):any{
            return this.http.post(`${this.baseUrl}/group-master/add`,groupMaster)
        }*/

        /********************************Groups service goes here  */


        _createClass(GroupService, [{
          key: "getGroupsList",
          value: function getGroupsList() {
            return this.http.get("".concat(this.baseUrl, "/groups/get"));
          }
        }, {
          key: "getGroupsForTreeView",
          value: function getGroupsForTreeView() {
            return this.http.get("".concat(this.baseUrl, "/groupsTree/get"));
          }
        }, {
          key: "createNewGroup",
          value: function createNewGroup(groups) {
            return this.http.post("".concat(this.baseUrl, "/groups/add"), groups);
          }
        }, {
          key: "getGroupByName",
          value: function getGroupByName(name) {
            return this.http.get("".concat(this.baseUrl, "/groups/getByGroupName/").concat(name));
          }
        }, {
          key: "getGroupsByGroupId",
          value: function getGroupsByGroupId(groupId) {
            return this.http.get("".concat(this.baseUrl, "/groups/getByGroupId/").concat(groupId));
          }
        }, {
          key: "updateGroup",
          value: function updateGroup(groupId, group) {
            return this.http.put("".concat(this.baseUrl, "/groups/update/").concat(groupId), group);
          }
        }, {
          key: "getGroupsByGroupTypeId",
          value: function getGroupsByGroupTypeId(groupTypeId) {
            return this.http.get("".concat(this.baseUrl, "/groups/getByGroupTypeId/").concat(groupTypeId));
          }
          /**************************GroupType services goes here ****************************/

        }, {
          key: "getGroupTypeList",
          value: function getGroupTypeList() {
            return this.http.get("".concat(this.baseUrl, "/groupType/get"));
          }
        }, {
          key: "getGroupsTreeByGroupTypeId",
          value: function getGroupsTreeByGroupTypeId(groupTypeId) {
            return this.http.get("".concat(this.baseUrl, "/groupsTree/getByGroupTypeId/").concat(groupTypeId));
          }
        }]);

        return GroupService;
      }();

      _GroupService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _GroupService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _GroupService);
      /***/
    },

    /***/
    52690:
    /*!****************************************************************!*\
      !*** ./src/app/master/group-master/group-master.component.css ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".example-tree-invisible {\r\n  display: none;\r\n}\r\n\r\n.example-tree ul,\r\n.example-tree li {\r\n  margin-bottom: 0;\r\n  list-style-type: none;\r\n}\r\n\r\n/*\r\n * This padding sets alignment of the nested nodes.\r\n */\r\n\r\n.example-tree .mat-nested-tree-node div[role=group] {\r\n  padding-left: 40px;\r\n}\r\n\r\n/*\r\n * Padding for leaf nodes.\r\n * Leaf nodes need to have padding so as to align with other non-leaf nodes\r\n * under the same parent.\r\n */\r\n\r\n.example-tree div[role=group] > .mat-tree-node {\r\n  padding-left: 40px;\r\n}\r\n\r\n.mat-form-field {\r\n  margin-right: 4px;\r\n}\r\n\r\n#groupBlock{\r\n\theight:80vh;\r\n\toverflow: scroll;\r\n}\r\n\r\n.checklist-leaf-node{\r\n\tmargin-top:5px;\r\n}\r\n\r\n.folder{\r\n\tcolor:#d7bc60;\r\n}\r\n\r\n.description{\r\n\tcolor:#837765;\r\n}\r\n\r\n.group-sub{\r\n\talign-self:center;\r\n}\r\n\r\n.form-control{\r\n\theight:30px;\r\n}\r\n\r\n.is-active{\r\n\theight:25px;\r\n\tmargin-top:2px;\r\n}\r\n\r\n.save-icon{\r\n\theight:30px;\r\n\twidth:auto;\r\n}\r\n\r\n.new-icon{\r\n\t\theight:30px;\r\n\twidth:auto;\r\n}\r\n\r\n.example-tree-progress-bar {\r\n  margin-left: 10px;\r\n}\r\n\r\n.example-tree-nested-node {\r\n  padding-left: 30px;\r\n}\r\n\r\nmat-tree {\r\n  margin-left: 10px;\r\n}\r\n\r\n.mat-tree-node {\r\n  padding: 0;\r\n  background-color: white;\r\n}\r\n\r\n.mat-nested-tree-node {\r\n  top: -24px;\r\n}\r\n\r\nul, li { \r\n  list-style: none; \r\n  margin: 0; \r\n  padding: 0;  \r\n}\r\n\r\nli.example-tree-container {\r\n  border-bottom: 0;\r\n  padding-top:0.5px;\r\n}\r\n\r\nul { \r\n  padding-left: 40px; \r\n}\r\n\r\nli { \r\n  padding-left: 40px;\r\n  border: 1px dotted grey;\r\n  border-width: 0 0 1px 1px; \r\n  position: relative;\r\n  top:-25px;\r\n}\r\n\r\nli.mat-tree-node,\r\nli div { \r\n  margin: 0;\r\n  position: relative;\r\n  margin-top:33px;\r\n  margin-left: -10px;\r\n  background-color: #fff;\r\n  margin-bottom: -18px;\r\n}\r\n\r\nli ul {\r\n  border-top: 1px dotted grey;\r\n  margin-left: -40px;\r\n  padding-left: 60px;\r\n  margin-top:-24px;\r\n}\r\n\r\n.mat-nested-tree-node:last-child ul {\r\n  border-left: 1px solid white;\r\n  margin-left: -41px;\r\n}\r\n\r\n.mat-icon-button {\r\n  z-index: 100;\r\n}\r\n\r\n.mat-leaves{\r\n\tmargin-bottom: -20px\r\n}\r\n\r\n.leaf-lable{\r\n\ttop:-20px;\r\n}\r\n\r\n.node-label{\r\n\tmargin-top:10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLW1hc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUU7O0FBQ0Y7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7RUFJRTs7QUFDRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxnQkFBZ0I7QUFDakI7O0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7O0FBQ0E7Q0FDQyxhQUFhO0FBQ2Q7O0FBQ0E7Q0FDQyxhQUFhO0FBQ2Q7O0FBQ0E7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7O0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsY0FBYztBQUNmOztBQUNBO0NBQ0MsV0FBVztDQUNYLFVBQVU7QUFDWDs7QUFDQTtFQUNFLFdBQVc7Q0FDWixVQUFVO0FBQ1g7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7Q0FDQztBQUNEOztBQUNBO0NBQ0MsU0FBUztBQUNWOztBQUNBO0NBQ0MsZUFBZTtBQUNoQiIsImZpbGUiOiJncm91cC1tYXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXRyZWUtaW52aXNpYmxlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZXhhbXBsZS10cmVlIHVsLFxyXG4uZXhhbXBsZS10cmVlIGxpIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLypcclxuICogVGhpcyBwYWRkaW5nIHNldHMgYWxpZ25tZW50IG9mIHRoZSBuZXN0ZWQgbm9kZXMuXHJcbiAqL1xyXG4uZXhhbXBsZS10cmVlIC5tYXQtbmVzdGVkLXRyZWUtbm9kZSBkaXZbcm9sZT1ncm91cF0ge1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxufVxyXG5cclxuLypcclxuICogUGFkZGluZyBmb3IgbGVhZiBub2Rlcy5cclxuICogTGVhZiBub2RlcyBuZWVkIHRvIGhhdmUgcGFkZGluZyBzbyBhcyB0byBhbGlnbiB3aXRoIG90aGVyIG5vbi1sZWFmIG5vZGVzXHJcbiAqIHVuZGVyIHRoZSBzYW1lIHBhcmVudC5cclxuICovXHJcbi5leGFtcGxlLXRyZWUgZGl2W3JvbGU9Z3JvdXBdID4gLm1hdC10cmVlLW5vZGUge1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxufVxyXG5cclxuI2dyb3VwQmxvY2t7XHJcblx0aGVpZ2h0Ojgwdmg7XHJcblx0b3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG4uY2hlY2tsaXN0LWxlYWYtbm9kZXtcclxuXHRtYXJnaW4tdG9wOjVweDtcclxufVxyXG4uZm9sZGVye1xyXG5cdGNvbG9yOiNkN2JjNjA7XHJcbn1cclxuLmRlc2NyaXB0aW9ue1xyXG5cdGNvbG9yOiM4Mzc3NjU7XHJcbn1cclxuLmdyb3VwLXN1YntcclxuXHRhbGlnbi1zZWxmOmNlbnRlcjtcclxufVxyXG4uZm9ybS1jb250cm9se1xyXG5cdGhlaWdodDozMHB4O1xyXG59XHJcbi5pcy1hY3RpdmV7XHJcblx0aGVpZ2h0OjI1cHg7XHJcblx0bWFyZ2luLXRvcDoycHg7XHJcbn1cclxuLnNhdmUtaWNvbntcclxuXHRoZWlnaHQ6MzBweDtcclxuXHR3aWR0aDphdXRvO1xyXG59XHJcbi5uZXctaWNvbntcclxuXHRcdGhlaWdodDozMHB4O1xyXG5cdHdpZHRoOmF1dG87XHJcbn1cclxuLmV4YW1wbGUtdHJlZS1wcm9ncmVzcy1iYXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS10cmVlLW5lc3RlZC1ub2RlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbm1hdC10cmVlIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4ubWF0LXRyZWUtbm9kZSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1hdC1uZXN0ZWQtdHJlZS1ub2RlIHtcclxuICB0b3A6IC0yNHB4O1xyXG59XHJcblxyXG51bCwgbGkgeyBcclxuICBsaXN0LXN0eWxlOiBub25lOyBcclxuICBtYXJnaW46IDA7IFxyXG4gIHBhZGRpbmc6IDA7ICBcclxufVxyXG5cclxubGkuZXhhbXBsZS10cmVlLWNvbnRhaW5lciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMDtcclxuICBwYWRkaW5nLXRvcDowLjVweDtcclxufVxyXG5cclxudWwgeyBcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7IFxyXG59XHJcblxyXG5saSB7IFxyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBib3JkZXI6IDFweCBkb3R0ZWQgZ3JleTtcclxuICBib3JkZXItd2lkdGg6IDAgMCAxcHggMXB4OyBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOi0yNXB4O1xyXG59XHJcblxyXG5saS5tYXQtdHJlZS1ub2RlLFxyXG5saSBkaXYgeyBcclxuICBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6MzNweDtcclxuICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tYm90dG9tOiAtMThweDtcclxufVxyXG5cclxubGkgdWwge1xyXG4gIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgZ3JleTtcclxuICBtYXJnaW4tbGVmdDogLTQwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gIG1hcmdpbi10b3A6LTI0cHg7XHJcbn1cclxuXHJcbi5tYXQtbmVzdGVkLXRyZWUtbm9kZTpsYXN0LWNoaWxkIHVsIHtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNDFweDtcclxufVxyXG5cclxuLm1hdC1pY29uLWJ1dHRvbiB7XHJcbiAgei1pbmRleDogMTAwO1xyXG59XHJcbi5tYXQtbGVhdmVze1xyXG5cdG1hcmdpbi1ib3R0b206IC0yMHB4XHJcbn1cclxuLmxlYWYtbGFibGV7XHJcblx0dG9wOi0yMHB4O1xyXG59XHJcbi5ub2RlLWxhYmVse1xyXG5cdG1hcmdpbi10b3A6MTBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    23138:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master/group-master/group-master.component.html ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [@routerTransition] *ngIf=\"!isDrugGeneric\">\r\n\t<app-page-header [mainhead]=\"'Master'\"\r\n\t\t[mainheadLink]=\"'/master'\" [heading]=\"'Group Master'\"\r\n\t\t[icon]=\"'fa-cog'\"></app-page-header>\r\n</div>\r\n\r\n<div class = \"card\">\r\n\t<div class =\"card-head\" *ngIf=\"!isDrugGeneric\">\r\n\t\t<nav class=\"navbar bg-dark text-white\">\r\n\t\t<h4>Groups Tree</h4>\r\n\t\t<div>\r\n\t\t\t<button class=\"btn btn-dark align-self-center text-white btn-sm p-0 m-0\" matTooltip=\"Save\" *ngIf = \"isNewGroup\" (click) = \"saveGroup()\"><img src = \"assets/images/save.png\" class =\"save-icon\"> Save</button>&nbsp;&nbsp;\r\n\t\t\t<button class=\"btn btn-dark align-self-center text-white btn-sm p-0 m-0\" matTooltip=\"Save\" *ngIf = \"!isNewGroup\" (click) = \"updateGroup()\"><img src = \"assets/images/save.png\" class =\"save-icon\"> update</button>&nbsp;&nbsp;\r\n\t\t<button class=\"btn btn-dark align-self-center text-white btn-sm float-right p-0 m-0 \" matTooltip=\"edit\" (click) = \"createGroup()\"><img src = \"assets/images/edit.ico\" class =\"new-icon\"> New</button>\r\n\t\t</div>\r\n\t\t\r\n\t</nav>\r\n\t</div>\r\n<!-- Group Type Goes here -->\r\n\t<div class =\"card-body\">\r\n\t\t<div class =\"row\">\r\n\t\t\t\r\n\t\t\t<div class =\"col-md-auto border border-dark\" id = \"groupBlock\" >\r\n\t\t\t\t<div class =\"mt-1\" *ngIf=\"!isDrugGeneric\">\r\n\t\t\t\t\tGroup Type&nbsp;&nbsp;\r\n\t\t\t\t\t<select  size=\"1\" [(ngModel)] = \"groupTypes\" name = \"groupTypes\" (ngModelChange) = \"getGroupByType($event)\" >\r\n\t\t\t\t\t\t<option [ngValue] = null>-- Select --</option>\r\n\t\t\t\t\t\t<option *ngFor = \"let groupType of groupTypeList\" [ngValue] = \"groupType\">{{groupType.groupTypeName}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t<div class =\"mt-3\">\r\n\t\t\t<!-- class=\"example-tree\" -->\r\n\t\t\t\t<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" >\r\n\t\t\t<!--   This is the tree node template for leaf nodes\r\n\t\t\t  There is inline padding applied to this node using styles.\r\n\t\t\t    This padding value depends on the mat-icon-button width. -->\r\n\t\t\t    \r\n\t\t\t  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding (click) =\"childNodeClicked(node)\">\r\n\t\t\t  \t\t<!-- <mat-checkbox class=\"checklist-leaf-node\"></mat-checkbox>&nbsp;  -->\r\n\t\t\t  \t\t\r\n\t\t\t  \t\t<li>\r\n\t\t\t\t  \t\t <div class=\"mat-leaves\">\r\n\t\t\t\t  \t\t\t<mat-icon class = \"description\">description</mat-icon>\r\n\t\t\t\t  \t\t\t<label></label>\r\n\t\t\t\t  \t\t\t<label class =\"leaf-lable\">{{node.name}}</label>\r\n\t\t\t\t  \t\t</div>\r\n\t\t\t    \t</li>\r\n\t\t\t  </mat-tree-node>\r\n\t\t\t  \r\n\t\t\t<!--   This is the tree node template for expandable nodes -->\r\n\t\t\t  <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding >\r\n\t\t\t  \t<li class=\"example-tree-container\">\r\n\t\t\t      <div class=\"mat-tree-node\">\r\n\t\t\t        <button mat-icon-button matTreeNodeToggle\r\n\t\t\t                [attr.aria-label]=\"'Toggle ' + node.name\">\r\n\t\t\t          <mat-icon class=\"mat-icon-rtl-mirror\">\r\n\t\t\t            {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n\t\t\t          </mat-icon>\r\n\t\t\t        </button>\r\n\t\t\t        \t<!-- <mat-checkbox class=\"checklist-leaf-node\"></mat-checkbox>&nbsp; -->\r\n\t\t\t        \t<mat-icon class =\"folder\">folder</mat-icon><label (click) =\"parentNodeClicked(node)\" class =\"node-label\">{{node.name}}</label>\r\n\t\t\t      </div>\r\n\t\t\t      \r\n\t\t\t      <ul class=\"example-tree-nested-node\">\r\n\t\t\t<!--       There is inline padding applied to this div using styles.\r\n\t\t\t          This padding value depends on the mat-icon-button width.  -->\r\n\t\t\t      <div [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\"\r\n\t\t\t          role=\"group\">\r\n\t\t\t        <ng-container matTreeNodeOutlet></ng-container>\r\n\t\t\t    </div>\r\n\t\t\t    </ul>\r\n\t\t\t    </li>\r\n\t\t\t  </mat-nested-tree-node>\r\n\t\t\t</mat-tree>\r\n\t\t\t</div>\r\n\t\t\t\t\r\n\t\t</div>\r\n\t\t<div class =\"col-md-7\" *ngIf=\"!isDrugGeneric\">\r\n\t\t\t<div class = \"row pl-2\">\r\n\t\t\t\t<label class =\"group-sub col-md-3\">Group Name</label>\r\n\t\t\t\t<div class =\"col-md-7\">\r\n\t\t\t\t\t<input type = \"text\" class =\"form-control\" [(ngModel)] = \"group.groupName\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row pl-2\">\r\n\t\t\t\t<label class =\"group-sub col-md-3\">Description </label>\r\n\t\t\t\t<div class =\"col-md-7\">\r\n\t\t\t\t\t<input type = \"text\" class =\"form-control\" [(ngModel)] = \"group.description\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row pl-2\">\r\n\t\t\t\t<label class =\"group-sub col-md-3\">Parent Group</label>\r\n\t\t\t\t<div class =\"col-md-7\">\r\n\t\t\t\t\t<input type = \"text\" class =\"form-control\" disabled [(ngModel)] = \"parentGroup.groupName\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row pl-2\">\r\n\t\t\t\t<label class =\"group-sub col-md-3\">Sort Order</label>\r\n\t\t\t\t<div class =\"col-md-7\"> \r\n\t\t\t\t\t<input type = \"text\" class =\"form-control\" [(ngModel)] = \"group.sortOrder\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row pl-2\">\r\n\t\t\t\t<label class =\"group-sub col-md-3\">Is Active</label>\r\n\t\t\t\t<div class =\"col-md-7\">\r\n\t\t\t\t\t<input type = \"checkbox\" class =\"form-control is-active\" [(ngModel)] = \"group.active\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class = \"row pl-2\">\r\n\t\t\t\t<label class =\"group-sub col-md-3\">Service Code Type</label>\r\n\t\t\t\t<div class =\"col-md-7\">\r\n\t\t\t\t\t<input type = \"text\" class =\"form-control\" [(ngModel)] = \"group.serviceCodeType\" name = \"serviceCodeType\" ngModel>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- <mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\r\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\r\n    <button mat-icon-button disabled></button>\r\n    <mat-checkbox class=\"checklist-leaf-node\">{{node.children}}</mat-checkbox>\r\n    [checked]=\"checklistSelection.isSelected(node)\"\r\n                  (change)=\"todoLeafItemSelectionToggle(node)\"\r\n  </mat-tree-node>\r\n\r\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasNoContent\" matTreeNodePadding>\r\n    <button mat-icon-button disabled></button>\r\n    <mat-form-field appearance=\"fill\">\r\n      <mat-label>New item...</mat-label>\r\n      <input matInput #itemValue placeholder=\"Ex. Lettuce\">\r\n    </mat-form-field>\r\n    <button mat-button >Save</button>\r\n    (click)=\"saveNode(node, itemValue.value)\"\r\n  </mat-tree-node>\r\n\r\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\r\n    <button mat-icon-button matTreeNodeToggle\r\n            [attr.aria-label]=\"'Toggle ' + node.children\">\r\n      <mat-icon class=\"mat-icon-rtl-mirror\">\r\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n      </mat-icon>\r\n    </button>\r\n    <mat-checkbox >{{node.item}}</mat-checkbox>\r\n    [checked]=\"descendantsAllSelected(node)\"\r\n                  [indeterminate]=\"descendantsPartiallySelected(node)\"\r\n                  (change)=\"todoItemSelectionToggle(node)\"\r\n    <button mat-icon-button ><mat-icon>add</mat-icon></button>\r\n    (click)=\"addNewItem(node)\"\r\n  </mat-tree-node>\r\n</mat-tree>\r\n -->\r\n</div>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_master_group-master_group-master_module_ts-es5.js.map