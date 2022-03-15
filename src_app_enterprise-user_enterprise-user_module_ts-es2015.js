(self["webpackChunkElitePro"] = self["webpackChunkElitePro"] || []).push([["src_app_enterprise-user_enterprise-user_module_ts"],{

/***/ 38787:
/*!*******************************************************************************************************!*\
  !*** ./src/app/enterprise-user/components/enterprise-user-create/enterprise-user-create.component.ts ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnterpriseUserCreateComponent": function() { return /* binding */ EnterpriseUserCreateComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_enterprise_user_create_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./enterprise-user-create.component.html */ 36924);
/* harmony import */ var _enterprise_user_create_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enterprise-user-create.component.css */ 55566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../router.animations */ 74903);
/* harmony import */ var _master_lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../master/lookup-module/services/lookup.service */ 41168);
/* harmony import */ var _master_unit_master_services_employee_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../master/unit-master/services/employee-master.service */ 9655);
/* harmony import */ var _masters_enterprise_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../masters/enterprise-user */ 89959);
/* harmony import */ var _services_enterprise_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/enterprise-user.service */ 16533);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 39761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _layout_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../layout/alert/alert.service */ 85373);













let EnterpriseUserCreateComponent = class EnterpriseUserCreateComponent {
    constructor(userService, formBuilder, employeeService, lookupService, alertService, router) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.employeeService = employeeService;
        this.lookupService = lookupService;
        this.alertService = alertService;
        this.router = router;
        this.employee = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl();
        this.confPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl();
        this.submitted = false;
        this.enterpriseUser = new _masters_enterprise_user__WEBPACK_IMPORTED_MODULE_5__.EnterpriseUser();
        this.name = "";
        this.wrongPassword = false;
        this.show = true;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({});
        this.employeeList = [];
        this.userFile = File;
        this.updateUser = new _masters_enterprise_user__WEBPACK_IMPORTED_MODULE_5__.EnterpriseUser();
        this.img = "./assets/images/patient.jpg";
    }
    ngOnInit() {
        //this.reloadData();
        this.reloadForm();
        this.reloadData();
        this.employeeFilterList = this.employee.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(value => this._filter(value)));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.employeeList.filter(option => option.employeeFullName.toLowerCase().includes(filterValue));
    }
    reloadData() {
        if (localStorage.getItem('userForUpdate')) {
            this.updateUser = JSON.parse(localStorage.getItem('userForUpdate'));
            localStorage.removeItem('userForUpdate');
            this.updateUser.password = atob(this.updateUser.password);
            this.registerForm.patchValue(this.updateUser);
            this.confPassword.setValue(this.registerForm.controls.password.value);
            if (this.updateUser.employeeNo != null) {
                this.employeeService.getEmployeeByEmployeeNo(this.updateUser.employeeNo).subscribe(data => {
                    console.log(data);
                    this.employee.setValue(data.employeeFullName);
                });
            }
            //console.log(document.getElementById("file-input"));
            //this.registerForm.controls.image.setValue("742d40f04377342484891bbad4706d63_1631975647903.jpg")
        }
        this.lookupService.getLookupEntityListByCategoryId(179).subscribe(data => {
            this.lookupEntityList = data;
            //console.log(this.lookupEntityList)
        });
        this.employeeService.getEmployee().subscribe(data => {
            this.employeeList = data;
        });
    }
    reloadForm() {
        this.registerForm = this.formBuilder.group({
            id: [null],
            userName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            userFullName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            isActive: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            globalProject: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            globalProjectStore: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            globalStore: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            //globalPurOrg: [null,Validators.required],
            globalBranch: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            globalDepartment: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            globalServiceCenter: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            emailId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            employeeNo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            employee: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            userType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            pswModifiedDate: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            maxFailedLoginAttempt: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            isPswExpires: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            pswExpiryDays: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            pswChangeReqd: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            imageName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            remarks: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            image: [null]
            /*aliasName: [null, Validators.required],
            fatherName: [null, Validators.required],
            dob:[null,Validators.required],
                userStatus: [null,],
                gender:[null,],
            userTypeStatus:[null,],
                maritalStatus:[null,],
            nationality : [null,],
            userCategory:[null,],
                bloodGroup : [null,],
              userHealthCardValidUpto :[null,Validators.required],*/
        });
    }
    compareUserType(userType, userType2) {
        return userType && userType2 ? userType.lookupId === userType2.lookupId : userType === userType2;
    }
    createUser() {
        this.enterpriseUser = new _masters_enterprise_user__WEBPACK_IMPORTED_MODULE_5__.EnterpriseUser();
        this.enterpriseUser = this.registerForm.value;
        this.enterpriseUser.id = null;
        var formData = new FormData();
        let enterpriseUser = this.registerForm.value;
        formData.append('enterpriseUser', JSON.stringify(this.enterpriseUser));
        formData.append('image', this.userFile);
        //console.log(formData)
        this.userService.createEnterpriseUserWithImageInServer(formData).subscribe(data => {
            //console.log(data);
            this.alertService.success("Successfully inserted !!!!");
        }, err => {
            this.alertService.error(err.getMessage());
        });
        /*this.userService.createEnterpriseUserWithImage(formData).subscribe(data =>{
            console.log(data);
            alert("Successfully inserted!!!!")
        })*/
        /*if(this.confPassword.value == this.registerForm.value.password){
            console.warn(this.enterpriseUser);
        this.userService.createEnterpriseUser(this.enterpriseUser).subscribe(data =>{
            console.log(data);
            alert("Inserted Successfully!!!!!")
            this.enterpriseUser = new EnterpriseUser;
            this.gotoList();
            });
        }
        else{
            this.wrongPassword = true;
        }
        //this.enterpriseUser = null;
        */
    }
    onSubmit() {
        this.createUser();
    }
    gotoList() {
        this.router.navigate(['/enterpriseUser/get']);
    }
    selectGroup(option) {
        //console.log(option)
        this.registerForm.controls.employeeNo.setValue(option.employeeId);
        this.registerForm.controls.emailId.setValue(option.email);
        this.registerForm.controls.employee.setValue(option);
        //console.log(this.registerForm.value.employeeNo)
    }
    uploadImage(fileInput) {
        const file = fileInput.files[0];
        //console.log(file)
        this.userFile = file;
    }
    checkPassword() {
        this.wrongPassword = true;
        if (this.confPassword.value == this.registerForm.value.password) {
            this.wrongPassword = false;
        }
    }
};
EnterpriseUserCreateComponent.ctorParameters = () => [
    { type: _services_enterprise_user_service__WEBPACK_IMPORTED_MODULE_6__.EnterpriseUserService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _master_unit_master_services_employee_master_service__WEBPACK_IMPORTED_MODULE_4__.EmployeeService },
    { type: _master_lookup_module_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__.LookupService },
    { type: _layout_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router }
];
EnterpriseUserCreateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-enterprise-user-create',
        template: _raw_loader_enterprise_user_create_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_enterprise_user_create_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EnterpriseUserCreateComponent);



/***/ }),

/***/ 20443:
/*!***************************************************************************************************!*\
  !*** ./src/app/enterprise-user/components/enterprise-user-list/enterprise-user-list.component.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnterpriseUserListComponent": function() { return /* binding */ EnterpriseUserListComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_enterprise_user_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./enterprise-user-list.component.html */ 63684);
/* harmony import */ var _enterprise_user_list_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enterprise-user-list.component.css */ 24042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../router.animations */ 74903);
/* harmony import */ var _services_enterprise_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/enterprise-user.service */ 16533);







let EnterpriseUserListComponent = class EnterpriseUserListComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.name = "";
    }
    ngOnInit() {
        this.reloadData();
    }
    reloadData() {
        this.userService.getEnterpriseUserList().subscribe(data => {
            console.log(data);
            this.enterpriseUserList = data;
        });
    }
    gotolist() {
        this.router.navigate(['user/userbranchmapping']);
    }
    gotoUserBranchMapping(user) {
        let data = JSON.stringify(user);
        localStorage.setItem('user', data);
        this.router.navigate(['/enterpriseUser/user-mapping']);
    }
    back() {
        history.back();
    }
    gotoUpdateUser(user) {
        localStorage.setItem('userForUpdate', JSON.stringify(user));
        this.router.navigate(['/enterpriseUser/add']);
    }
    gotoUserRolePrivilegeCreate(user) {
        localStorage.setItem('userForPrivilege', JSON.stringify(user));
        let id = user.id;
        this.router.navigate(['enterpriseUser/userRole/add', id]);
    }
};
EnterpriseUserListComponent.ctorParameters = () => [
    { type: _services_enterprise_user_service__WEBPACK_IMPORTED_MODULE_3__.EnterpriseUserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
EnterpriseUserListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-enterprise-user-list',
        template: _raw_loader_enterprise_user_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_2__.routerTransition)()],
        styles: [_enterprise_user_list_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EnterpriseUserListComponent);



/***/ }),

/***/ 23415:
/*!*********************************************************************************************************!*\
  !*** ./src/app/enterprise-user/components/enterprise-user-mapping/enterprise-user-mapping.component.ts ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnterpriseUserMappingComponent": function() { return /* binding */ EnterpriseUserMappingComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_enterprise_user_mapping_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./enterprise-user-mapping.component.html */ 11646);
/* harmony import */ var _enterprise_user_mapping_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enterprise-user-mapping.component.css */ 80876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _master_department_services_department_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../master/department/services/department.service */ 25482);
/* harmony import */ var _master_service_center_masters_branch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../master/service-center/masters/branch */ 40478);
/* harmony import */ var _master_service_center_services_branch_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../master/service-center/services/branch-service.service */ 31582);
/* harmony import */ var _master_store_services_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../master/store/services/store.service */ 11678);
/* harmony import */ var _master_unit_master_masters_enterpriseUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../master/unit-master/masters/enterpriseUser */ 30063);
/* harmony import */ var _masters_user_branch_department_mapping__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../masters/user-branch-department-mapping */ 56755);
/* harmony import */ var _masters_user_branch_mapping__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../masters/user-branch-mapping */ 26235);
/* harmony import */ var _masters_user_branch_service_cente_mapping__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../masters/user-branch-service-cente-mapping */ 42900);
/* harmony import */ var _services_enterprise_user_mapping_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/enterprise-user-mapping.service */ 43633);
/* harmony import */ var _services_enterprise_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/enterprise-user.service */ 16533);
/* harmony import */ var _masters_user_branch_store_mapping__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../masters/user-branch-store-mapping */ 33725);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../router.animations */ 74903);
/* harmony import */ var _Common_Security_Services_common_service_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../Common-Security-Services/common-service.service */ 31564);
/* harmony import */ var _layout_alert_alert_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../layout/alert/alert.service */ 85373);



















let EnterpriseUserMappingComponent = class EnterpriseUserMappingComponent {
    constructor(userMappingService, userService, branchService, departmentService, serviceCenterService, storeService, commonService, route, alertService) {
        this.userMappingService = userMappingService;
        this.userService = userService;
        this.branchService = branchService;
        this.departmentService = departmentService;
        this.serviceCenterService = serviceCenterService;
        this.storeService = storeService;
        this.commonService = commonService;
        this.route = route;
        this.alertService = alertService;
        this.user = new _master_unit_master_masters_enterpriseUser__WEBPACK_IMPORTED_MODULE_6__.EnterpriseUser();
        /**************************User-Branch goes here*************** */
        this.branchList = new Array();
        this.userBranchList = new Array();
        this.branchesForStore = new Array();
        this.userBranchForCreate = new _masters_user_branch_mapping__WEBPACK_IMPORTED_MODULE_8__.UserBranchMapping();
        this.dummyBranch = new _master_service_center_masters_branch__WEBPACK_IMPORTED_MODULE_3__.Branch();
        this.submitted = false;
        this.userBranchFound = false;
        this.userBranch = new _masters_user_branch_mapping__WEBPACK_IMPORTED_MODULE_8__.UserBranchMapping;
        this.dummyUserBranchMapping = new _masters_user_branch_mapping__WEBPACK_IMPORTED_MODULE_8__.UserBranchMapping;
        /**********************************User Department Mapping goes here*********************** */
        this.departmentList = Array();
        this.userBranchDepartmentMappingList = [];
        this.departmentForStore = [];
        this.userBranchDepartmentForCreate = new _masters_user_branch_department_mapping__WEBPACK_IMPORTED_MODULE_7__.UserBranchDepartmentMapping;
        this.showDepartments = false;
        /*****************************************  User ServiceCenter Mapping goes here **********  */
        this.serviceCenterList = [];
        this.userBranchServiceCenterMappingList = [];
        this.serviceCenterForStore = [];
        this.userBranchServiceCenterForCreate = new _masters_user_branch_service_cente_mapping__WEBPACK_IMPORTED_MODULE_9__.UserBranchServiceCenterMapping;
        /*****************************************  User Store Mapping goes here **********  */
        this.storeList = [];
        this.userBranchStoreMappingList = [];
        this.storeForStore = [];
        this.userBranchStoreForCreate = new _masters_user_branch_store_mapping__WEBPACK_IMPORTED_MODULE_12__.UserBranchStoreMapping;
    }
    ngOnInit() {
        this.user = this.commonService.getUser();
        this.id = this.user.id;
        //console.log(this.id);
        this.reloadData();
    }
    reloadData() {
        this.userService.getEnterpriseUserById(this.id).subscribe(data => {
            this.user = data;
            //console.log(this.user)
            this.userBranchForCreate.user = this.user;
            //console.log(data);
        });
        this.branchService.getBranch().subscribe(data => {
            this.branchList = data;
            //console.log(this.branchList,"This is branch List")
        });
        this.userMappingService.getUserBranchMappingByUserId(this.id).subscribe(data => {
            this.userBranchList = data;
            //console.log(data)
            if (this.userBranchList.length > 0) {
                this.userBranchFound = true;
            }
        });
        this.departmentService.getAllDepartments().subscribe(data => {
            //console.log(data);
            this.departmentList = data;
        });
        /*this.userMappingService.getUserBranchServiceCenterMappingById(this.id).subscribe(data=>{
            this.userBranchServiceCenterMappingList = data;
        })*/
        this.serviceCenterService.getServiceCenter().subscribe(data => {
            this.serviceCenterList = data;
            //console.log(this.serviceCenterList,"This is serviceCenterList")
        });
        this.storeService.getStoreList().subscribe(data => {
            this.storeList = data;
            console.log(data);
        });
    }
    /*****************************User BranchMapping goes here************************************ */
    checkBranchUserConnection(b) {
        //console.warn(this.userBranchMappingList,b)
        let bool;
        this.userBranchList.forEach((value) => {
            //console.warn(this.userBranchMappingList,b)
            if (b.id == value.branch.id) {
                //console.log("Connection true",b.id,value.branch.id)
                bool = true;
                //console.log(!this.branchesForStore.includes(b))
                if (!this.branchesForStore.includes(b) == true) {
                    this.branchesForStore.push(b);
                }
            }
        });
        return bool;
    }
    saveBranch(userForm) {
        this.branchIdList = userForm.value;
        let values = Object.values(this.branchIdList);
        this.branchIdList = values;
        this.branchesForStore = [];
        this.branchList.forEach((value, i) => {
            this.branchIdList.forEach((data, j) => {
                if (data == true && j == i) {
                    //console.log(value,data,i,j)
                    this.branchesForStore.push(value);
                }
            });
        });
        this.gotoCreateUserBranchMapping(this.branchesForStore);
        //console.log(this.branchesForStore)
    }
    gotoCreateUserBranchMapping(branchesForStore) {
        for (let branch of branchesForStore) {
            this.userMappingService.getUserBranchMappingByBranch(branch, this.id).subscribe(data => {
                console.log(data[0]);
                if (data.length > 0) {
                    this.userBranchForCreate = data[0];
                    this.update(this.userBranchForCreate);
                }
                else {
                    this.userBranchForCreate.branch = branch;
                    this.userBranchForCreate.id = null;
                    this.createUserBranchMapping(this.userBranchForCreate);
                }
            });
            //this.userBranchForCreate.id = branch.id;
        }
    }
    createUserBranchMapping(userBranchForCreate) {
        //console.log(userBranchForCreate)
        this.userMappingService.createUserBranchMapping(userBranchForCreate).subscribe(data => {
            this.alertService.success("User-Branch Mapping Successfully Added!!!!!!!");
            this.userMappingService.getUserBranchMappingByUserId(this.id).subscribe(data => {
                this.userBranchList = data;
                //console.log(data)
                if (this.userBranchList.length > 0) {
                    this.userBranchFound = true;
                }
            });
            //console.log(data)
        });
    }
    update(userBranchForCreate) {
        //console.log(userBranchForCreate)
        this.userMappingService.updateUserBranchMapping(userBranchForCreate.id, userBranchForCreate).subscribe(data => {
            //console.log(data,"Updated UserBranch");
            this.alertService.success("User-Branch Updated Successfully!!!!");
        });
        //console.log(ubForm.value)
    }
    /**********************************UserBranch-Department Mapping goes here*********************** */
    setUserBranch(userBranch) {
        this.userBranch = userBranch;
        this.departmentService.getDepartmentsByBranchId(userBranch.branch.id).subscribe(data => { this.departmentList = data; }, err => this.alertService.error("Getting Departments by branch cause Error"));
        this.userMappingService.getUserBranchDepartmentByUserBranchId(userBranch.id).subscribe(data => {
            this.userBranchDepartmentMappingList = data;
            //console.log(data)
        });
        this.userMappingService.getUserBranchServiceCenterByUserBranchId(userBranch.id).subscribe(data => {
            this.userBranchServiceCenterMappingList = data;
            //console.log(data);
        });
        this.userMappingService.getUserBranchStoreByUserBranchId(userBranch.id).subscribe(data => {
            console.log(data);
            this.userBranchStoreMappingList = data;
        });
        if (userBranch != null) {
            this.userBranchDepartmentForCreate.userBranchMapping = userBranch;
            this.userBranchServiceCenterForCreate.userBranchMapping = userBranch;
            this.userBranchStoreForCreate.userBranchMapping = userBranch;
            this.showDepartments = true;
            //console.log(userBranch)
        }
        else {
            this.showDepartments = false;
        }
    }
    checkDepartmentUserConnection(d) {
        //console.warn(this.userBranchMappingList,b)
        let bool;
        this.userBranchDepartmentMappingList.forEach((value) => {
            //console.warn(this.userBranchMappingList,b)
            if (d.departmentId == value.department.departmentId) {
                //console.log("Connection true",b.id,value.branch.id)
                bool = true;
                //console.log(!this.branchesForStore.includes(b))
                if (!this.departmentForStore.includes(d) == true) {
                    this.departmentForStore.push(d);
                }
            }
        });
        return bool;
    }
    saveBranchDepartment(userDepartmentForm) {
        //console.log(storeForm.value)
        this.branchDepartmentIdList = userDepartmentForm.value;
        let values = Object.values(this.branchDepartmentIdList);
        this.branchDepartmentIdList = values;
        this.departmentForStore = [];
        this.departmentList.forEach((value, i) => {
            this.branchDepartmentIdList.forEach((data, j) => {
                if (data == true && j == i) {
                    //console.log(value,data,i,j)
                    this.departmentForStore.push(value);
                }
            });
        });
        //console.log(this.departmentForStore)
        this.gotoStoreUserDepartment(this.departmentForStore);
    }
    gotoStoreUserDepartment(departmentForStore) {
        for (let department of departmentForStore) {
            this.userMappingService.getUserBranchDepartmentMappingByDepartment(department, this.userBranch.id).subscribe(data => {
                console.log(data);
                if (data.length > 0) {
                    this.userBranchDepartmentForCreate = data[0];
                    this.updateUserDepartment(this.userBranchDepartmentForCreate);
                }
                else {
                    this.userBranchDepartmentForCreate.department = department;
                    this.userBranchDepartmentForCreate.id = null;
                    this.createUserDepartmentMapping(this.userBranchDepartmentForCreate);
                }
            });
        }
    }
    createUserDepartmentMapping(userDepartmentForCreate) {
        //console.log(userDepartmentForCreate)
        this.userMappingService.createUserBranchDepartmentMapping(userDepartmentForCreate).subscribe(data => {
            this.alertService.success("User-Department Mapping Successfully Created!!!!!!!!!!!!!!!!");
            //console.log(data)
        });
    }
    updateUserDepartment(userBranchDepartmentForCreate) {
        this.userMappingService.updateUserBranchDepartmentMapping(userBranchDepartmentForCreate).subscribe(data => {
            //console.log(data);
            this.alertService.success("User-Department Updated Successfully!!!!");
        });
    }
    /************************************    User ServiceCenter goes here***************** */
    checkServiceCenterUserConnection(serviceCenter) {
        //console.warn (this.userBranchMappingList,b)
        let bool;
        this.userBranchServiceCenterMappingList.forEach((value) => {
            //console.warn(this.userBranchMappingList,b)
            if (serviceCenter.serviceCenterId == value.serviceCenter.serviceCenterId) {
                //console.log("Connection true",b.id,value.branch.id)
                bool = true;
                //console.log(!this.branchesForStore.includes(b))
                if (!this.serviceCenterForStore.includes(serviceCenter) == true) {
                    this.serviceCenterForStore.push(serviceCenter);
                }
            }
        });
        return bool;
    }
    saveUserServiceCenter(serviceCenterForm) {
        //console.log(serviceCenterForm.value)
        this.userBranchServiceCenterIdList = serviceCenterForm.value;
        let values = Object.values(this.userBranchServiceCenterIdList);
        this.userBranchServiceCenterIdList = values;
        this.serviceCenterForStore = [];
        this.serviceCenterList.forEach((value, i) => {
            this.userBranchServiceCenterIdList.forEach((data, j) => {
                //console.log(value,data,i,j)
                if (data == true && j == i) {
                    //console.log(value,data,i,j)
                    this.serviceCenterForStore.push(value);
                }
            });
        });
        //console.log(this.departmentForStore)
        this.gotoStoreUserServiceCenter(this.serviceCenterForStore);
    }
    gotoStoreUserServiceCenter(serviceCenterForStore) {
        //console.log(serviceCenterForStore)
        for (let serviceCenter of serviceCenterForStore) {
            this.userMappingService.getUserBranchServiceCenterMappingByServiceCenter(serviceCenter, this.userBranch.id).subscribe(data => {
                //console.log(data);
                if (data.length > 0) {
                    this.userBranchServiceCenterForCreate = data[0];
                    this.updateUserServiceCenterMapping(this.userBranchServiceCenterForCreate);
                }
                else {
                    this.userBranchServiceCenterForCreate.serviceCenter = serviceCenter;
                    this.userBranchServiceCenterForCreate.id = null;
                    this.createUserServiceCenterMapping(this.userBranchServiceCenterForCreate);
                }
            });
        }
    }
    createUserServiceCenterMapping(userBranchServiceCenterForCreate) {
        this.userMappingService.createUserBranchServiceCenterMapping(userBranchServiceCenterForCreate).subscribe(data => {
            this.alertService.success("User-ServiceCenter Mapping Successfully Created!!!!!!!!!!!!!!!!");
            //console.log(data)
        });
    }
    updateUserServiceCenterMapping(userBranchServiceCenterForCreate) {
        this.userMappingService.updateUserBranchServiceCenterMapping(userBranchServiceCenterForCreate).subscribe(data => {
            console.log(data);
            this.alertService.success("User-ServiceCenter updated Successfully!!!!!");
        });
    }
    /************************************    User StoreAccessoires goes here***************** */
    checkStoreUserConnection(store) {
        //console.warn (this.userBranchMappingList,b)
        let bool = false;
        this.userBranchStoreMappingList.forEach((value) => {
            //console.warn(value.storeAccessories.storeId , storeAccessories.storeId)
            if (store.id == value.store.id) {
                //console.log("Connection true",storeAccessories.storeId,value.storeAccessories.storeId)
                bool = true;
                //console.log(!this.branchesForStore.includes(b))
                if (!this.storeForStore.includes(store) == true) {
                    this.storeForStore.push(store);
                }
            }
        });
        return bool;
    }
    saveUserStoreAccessories(storeAccessoiresForm) {
        //console.log(serviceCenterForm.value)
        this.userBranchStoreIdList = storeAccessoiresForm.value;
        let values = Object.values(this.userBranchStoreIdList);
        this.userBranchStoreIdList = values;
        this.storeForStore = [];
        this.storeList.forEach((value, i) => {
            this.userBranchStoreIdList.forEach((data, j) => {
                //console.log(value,data,i,j)
                if (data == true && j == i) {
                    //console.log(value,data,i,j)
                    this.storeForStore.push(value);
                }
            });
        });
        //console.log(this.departmentForStore)
        this.gotoStoreUserStoreAccessoires(this.storeForStore);
    }
    gotoStoreUserStoreAccessoires(storeForStore) {
        //console.log(serviceCenterForStore)
        for (let store of storeForStore) {
            this.userMappingService.getUserBranchStoreMappingByStore(store, this.userBranch.id).subscribe(data => {
                //console.log(data);
                if (data.length > 0) {
                    this.userBranchStoreForCreate = data[0];
                    this.updateUserStoreMapping(this.userBranchStoreForCreate);
                }
                else {
                    this.userBranchStoreForCreate.id = null;
                    this.userBranchStoreForCreate.store = store;
                    this.createUserStoreAccessoiresMapping(this.userBranchStoreForCreate);
                }
            });
        }
    }
    createUserStoreAccessoiresMapping(userBranchStoreAccessoriesForCreate) {
        //console.log(userBranchStoreAccessoriesForCreate)
        this.userMappingService.createUserBranchStoreMapping(userBranchStoreAccessoriesForCreate).subscribe(data => {
            this.alertService.success("User-storeAccessoires Mapping Successfully Created!!!!!!!!!!!!!!!!");
            //console.log(data)
        });
    }
    updateUserStoreMapping(userBranchStoreForCreate) {
        this.userMappingService.updateUserBranchStoreMapping(userBranchStoreForCreate).subscribe(data => {
            console.log(data);
            this.alertService.success("User-Store updated Successfully!!!!");
        });
    }
};
EnterpriseUserMappingComponent.ctorParameters = () => [
    { type: _services_enterprise_user_mapping_service__WEBPACK_IMPORTED_MODULE_10__.UserMappingService },
    { type: _services_enterprise_user_service__WEBPACK_IMPORTED_MODULE_11__.EnterpriseUserService },
    { type: _master_service_center_services_branch_service_service__WEBPACK_IMPORTED_MODULE_4__.BranchServiceService },
    { type: _master_department_services_department_service__WEBPACK_IMPORTED_MODULE_2__.DepartmentService },
    { type: _master_service_center_services_branch_service_service__WEBPACK_IMPORTED_MODULE_4__.BranchServiceService },
    { type: _master_store_services_store_service__WEBPACK_IMPORTED_MODULE_5__.StoreService },
    { type: _Common_Security_Services_common_service_service__WEBPACK_IMPORTED_MODULE_14__.CommonSecurityService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute },
    { type: _layout_alert_alert_service__WEBPACK_IMPORTED_MODULE_15__.AlertService }
];
EnterpriseUserMappingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
        selector: 'app-enterprise-user-mapping',
        template: _raw_loader_enterprise_user_mapping_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_13__.routerTransition)()],
        styles: [_enterprise_user_mapping_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EnterpriseUserMappingComponent);



/***/ }),

/***/ 74061:
/*!***********************************************************************************************!*\
  !*** ./src/app/enterprise-user/components/role-master-create/role-master-create.component.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleMasterCreateComponent": function() { return /* binding */ RoleMasterCreateComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_role_master_create_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./role-master-create.component.html */ 57772);
/* harmony import */ var _role_master_create_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role-master-create.component.css */ 37217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _layout_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layout/alert/alert.service */ 85373);
/* harmony import */ var _masters_role_master__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../masters/role-master */ 87607);
/* harmony import */ var _masters_role_privileges__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../masters/role-privileges */ 20410);
/* harmony import */ var _services_feature_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/feature.service */ 87194);
/* harmony import */ var _services_role_master_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/role-master.service */ 22352);
/* harmony import */ var _services_role_privilege_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/role-privilege.service */ 91059);











let RoleMasterCreateComponent = class RoleMasterCreateComponent {
    constructor(rolePrivilegeService, formBuilder, featureService, roleMasterService, alertService) {
        this.rolePrivilegeService = rolePrivilegeService;
        this.formBuilder = formBuilder;
        this.featureService = featureService;
        this.roleMasterService = roleMasterService;
        this.alertService = alertService;
        this.roleMaster = new _masters_role_master__WEBPACK_IMPORTED_MODULE_3__.RoleMaster();
        this.submitted = false;
        this.featureModuleList = [];
        this.isFeatureModule = false;
        this.featureList = [];
        this.selectedFeature = null;
        this.size = 0;
        this.privilegeListForStore = [];
        this.isStoredFeature = false;
        this.modelFeaturePrivilegeList = [];
        this.roleForUpdate = new _masters_role_master__WEBPACK_IMPORTED_MODULE_3__.RoleMaster;
        this.isUpdateRequest = false;
        this.rolePrivilegeList = [];
        this.rolePrivilegeForStore = new _masters_role_privileges__WEBPACK_IMPORTED_MODULE_4__.RolePrivileges();
        this.isRolePrivilegeExist = false;
        this.flag = 0;
        this.roleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({});
    }
    ngOnInit() {
        this.reloadForm();
        this.reloadData();
    }
    reloadData() {
        if (localStorage.getItem('roleMasterForUpdate') != null) {
            this.roleMaster = JSON.parse(localStorage.getItem('roleMasterForUpdate'));
            localStorage.removeItem('roleMasterForUpdate');
            this.roleForm.patchValue(this.roleMaster);
            this.isUpdateRequest = true;
            this.rolePrivilegeService.getRolePrivilegeByRoleId(this.roleMaster.roleMasterId).subscribe(data => {
                this.rolePrivilegeList = data;
                if (data != null) {
                    this.isRolePrivilegeExist = true;
                }
            });
            this.featureService.getFeaturesByParentId(0).subscribe(data => {
                this.featureModuleList = data;
            }, error => {
                this.alertService.error(error.message);
            });
        }
        /*this.featureService.getFeaturesById(0).subscribe(data =>{
            console.log(data);
        },error=>{this.alertService.error(error.error.message)
            console.log("Error is",error)
        } )*/
    }
    reloadForm() {
        this.roleForm = this.formBuilder.group({
            roleName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            description: [null],
            active: [null],
            roleMasterId: [null],
            type: [null]
        });
    }
    createRoleMaster() {
        this.roleMaster = this.roleForm.value;
        this.roleMasterService.createRoleMaster(this.roleMaster).subscribe(data => {
            //console.log(data);
            this.alertService.success("Successfully created Role!!");
        }, err => this.alertService.error(err));
    }
    save() {
        this.roleMaster = this.roleForm.value;
        this.roleMaster.roleMasterId = null;
        //console.warn(this.roleMaster);
    }
    onSubmit() {
        this.createRoleMaster();
    }
    showFeatures(parentFeature) {
        this.privilegeListForStore = [];
        this.rolePrivilegeService.getModelFeaturePrivilegesListByParentFeatureId(parentFeature.featureId).subscribe(data => {
            console.log(data, "This is from parent FeatureId");
            this.modelFeaturePrivilegeList = data;
        });
        //console.log(parentFeature)
        /*this.featureService.getFeatureTreeByParentId(parentFeature.featureType.lookupId).subscribe(data =>{
            console.log(data);
            
        })*/
        /*this.featureService.getModelFeatureByfeatureId(parentFeature.featureType.lookupId).subscribe(data =>{
            //console.log(data,"modelFeaturePrivilegeList From DB");
            this.modelFeaturePrivilegeList = data;
        })*/
        this.featureService.getFeaturesByFeatureType(parentFeature.featureType.lookupId).subscribe(data => {
            //console.log(data);
            //console.log(data,"Features from DB ")
            this.isFeatureModule = true;
            this.featureList = data;
        });
    }
    featureStore(checked, modelFeaturePrivilege) {
        //this.isStoredFeature = false;
        if (checked == true) {
            if (!this.privilegeListForStore.includes(modelFeaturePrivilege)) {
                this.privilegeListForStore.push(modelFeaturePrivilege);
            }
        }
        else {
            if (this.privilegeListForStore.includes(modelFeaturePrivilege)) {
                //console.log("This is called")
                let index = this.privilegeListForStore.indexOf(modelFeaturePrivilege);
                this.privilegeListForStore.splice(index, 1);
            }
        }
    }
    saveFeatures() {
        //this.isStoredFeature = true;
        this.privilegeListForStore.forEach((data) => {
            let rolePrivilege = new _masters_role_privileges__WEBPACK_IMPORTED_MODULE_4__.RolePrivileges();
            rolePrivilege.privileges = data.privilege;
            rolePrivilege.roleMaster = this.roleMaster;
            this.rolePrivilegeService.createRolePrivilege(rolePrivilege).subscribe(data => {
                console.log(data, "Created Successfully");
                this.alertService.success("Successfully Created!!!");
            });
        });
    }
    checkModelNFeatureNPrevilege(feature) {
        let featureName;
        this.modelFeaturePrivilegeList.forEach((data) => {
            if (feature == data.featureId) {
                featureName = data.feature;
            }
        });
        return featureName;
    }
    resetForm() {
        this.roleForm.reset();
        this.isUpdateRequest = false;
    }
    updateRole() {
        this.roleMaster = this.roleForm.value;
        this.roleMasterService.updateRoleMaster(this.roleMaster).subscribe(data => {
            //console.log(data);
            this.alertService.success("Updated Successfully!!");
        });
    }
    removeFeature(feature) {
        //this.featureList.push(feature);
        if (this.privilegeListForStore.includes(feature)) {
            let index = this.privilegeListForStore.indexOf(feature);
            this.privilegeListForStore.splice(index, 1);
        }
    }
    /*findFeaturesByFeatureId(featureId){
        if(this.size <this.featureList.length){
            this.featureService.getFeatureById(featureId).subscribe(data =>{
                this.size += 1;
            return data.featureDesc;
        })
        }
        
    }*/
    compareWith(modelFeatruePrivilege) {
        let res = false;
        this.rolePrivilegeList.forEach((data) => {
            if (data.privileges.privilegesId == modelFeatruePrivilege.privilege.privilegesId) {
                res = true;
            }
        });
        //console.log(modelFeatruePrivilege.privilege)
        if (!res == true) {
            return res;
        }
        else {
            if (!this.privilegeListForStore.includes(modelFeatruePrivilege) && this.flag < this.rolePrivilegeList.length) {
                this.flag += 1;
                console.log(true);
                this.privilegeListForStore.push(modelFeatruePrivilege);
            }
            return res;
        }
    }
    updatePrivilege() {
        this.privilegeListForStore.forEach((data) => {
            let rolePrivilege = new _masters_role_privileges__WEBPACK_IMPORTED_MODULE_4__.RolePrivileges();
            rolePrivilege.privileges = data.privilege;
            rolePrivilege.roleMaster = this.roleMaster;
            this.rolePrivilegeService.updateRolePrivilege(rolePrivilege).subscribe(data => {
                console.log(data, "Updated Successfully");
                this.alertService.success("Successfully Updated!!!");
            });
        });
    }
};
RoleMasterCreateComponent.ctorParameters = () => [
    { type: _services_role_privilege_service__WEBPACK_IMPORTED_MODULE_7__.RolePrivilegeService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _services_feature_service__WEBPACK_IMPORTED_MODULE_5__.FeatureService },
    { type: _services_role_master_service__WEBPACK_IMPORTED_MODULE_6__.RoleMasterService },
    { type: _layout_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
RoleMasterCreateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-role-master-create',
        template: _raw_loader_role_master_create_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_role_master_create_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RoleMasterCreateComponent);



/***/ }),

/***/ 81763:
/*!*******************************************************************************************!*\
  !*** ./src/app/enterprise-user/components/role-master-list/role-master-list.component.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleMasterListComponent": function() { return /* binding */ RoleMasterListComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_role_master_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./role-master-list.component.html */ 68586);
/* harmony import */ var _role_master_list_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role-master-list.component.css */ 13954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_role_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/role-master.service */ 22352);






let RoleMasterListComponent = class RoleMasterListComponent {
    constructor(roleMasterService, router) {
        this.roleMasterService = roleMasterService;
        this.router = router;
        this.searchRolePrivilege = "";
        this.roleMasterList = [];
        this.roleName = "";
        this.rolePrivilege = "";
        this.page = 1;
        this.pageSize = 5;
    }
    ngOnInit() {
        this.reloadData();
    }
    reloadData() {
        this.roleMasterService.getRoleMasterList().subscribe(data => {
            this.roleMasterList = data;
            this.len = data.length;
            //console.log(data);
        });
    }
    gotoUpdateRoleMaster(roleMaster) {
        localStorage.setItem('roleMasterForUpdate', JSON.stringify(roleMaster));
        this.router.navigate(['/enterpriseUser/rolePrivilege/add']);
    }
};
RoleMasterListComponent.ctorParameters = () => [
    { type: _services_role_master_service__WEBPACK_IMPORTED_MODULE_2__.RoleMasterService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
RoleMasterListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-role-master-list',
        template: _raw_loader_role_master_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_role_master_list_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RoleMasterListComponent);



/***/ }),

/***/ 21399:
/*!*******************************************************************************************!*\
  !*** ./src/app/enterprise-user/components/user-role-create/user-role-create.component.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRoleCreateComponent": function() { return /* binding */ UserRoleCreateComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_user_role_create_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./user-role-create.component.html */ 99629);
/* harmony import */ var _user_role_create_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-role-create.component.css */ 91983);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _layout_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layout/alert/alert.service */ 85373);
/* harmony import */ var _masters_enterprise_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../masters/enterprise-user */ 89959);
/* harmony import */ var _masters_role_master__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../masters/role-master */ 87607);
/* harmony import */ var _masters_user_role_details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../masters/user-role-details */ 69481);
/* harmony import */ var _services_role_master_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/role-master.service */ 22352);
/* harmony import */ var _services_user_role_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user-role.service */ 2540);











let UserRoleCreateComponent = class UserRoleCreateComponent {
    constructor(userRoleService, roleService, alertService, route) {
        this.userRoleService = userRoleService;
        this.roleService = roleService;
        this.alertService = alertService;
        this.route = route;
        this.roleMasterList = new Array();
        this.roleMasterListForStore = new Array();
        this.userRoleList = [];
        this.user = new _masters_enterprise_user__WEBPACK_IMPORTED_MODULE_3__.EnterpriseUser();
        this.roleMaster = new _masters_role_master__WEBPACK_IMPORTED_MODULE_4__.RoleMaster();
        this.isStoredRole = false;
    }
    ngOnInit() {
        this.userId = this.route.snapshot.params['userId'];
        //console.log("This is userId",this.userId)
        this.reloadData();
    }
    reloadData() {
        this.user = JSON.parse(localStorage.getItem("userForPrivilege"));
        //console.log(this.user);
        this.roleService.getRoleMasterList().subscribe(data => {
            this.roleMasterList = data;
        });
        this.loadUserRoleList();
    }
    loadUserRoleList() {
        this.userRoleService.getUserRoleListByUserId(this.userId).subscribe(res => {
            //console.log(res,"success")
            this.userRoleList = res;
            this.showUserRoleForExisting(this.userRoleList);
        }, err => this.alertService.error(err));
        /*this.userRoleService.getUserRoleList().subscribe(data =>{
            this.userRoleList = data;
            console.log("userRoleList",this.userRoleList);
            this.showUserRoleForExisting(this.userRoleList);
            
        })*/
    }
    showUserRoleForExisting(userRoleList) {
        this.roleMasterListForStore = [];
        userRoleList.forEach((data) => {
            this.roleMasterListForStore.push(data.roleMaster);
        });
    }
    addRole(role) {
        let isStoredRole = true;
        this.roleMasterList = this.roleMasterList.filter(data => data !== role);
        this.roleMasterListForStore.forEach((data) => {
            if (data.roleMasterId == role.roleMasterId) {
                isStoredRole = false;
            }
        });
        if (isStoredRole) {
            this.roleMasterListForStore.push(role);
        }
    }
    removeRole(role) {
        this.roleMasterList.push(role);
        if (this.roleMasterListForStore.includes(role)) {
            let index = this.roleMasterListForStore.indexOf(role);
            this.roleMasterListForStore.splice(index, 1);
        }
    }
    saveUserRole() {
        this.roleMasterListForStore.forEach((data) => {
            let insert = true;
            this.userRoleList.forEach((userRoleMapping) => {
                if (userRoleMapping.roleMaster.roleMasterId == data.roleMasterId) {
                    insert = false;
                    return insert;
                }
            });
            let userRole = new _masters_user_role_details__WEBPACK_IMPORTED_MODULE_5__.UserRoleDetails();
            userRole.user = this.user;
            userRole.roleMaster = data;
            userRole.userRoleDetailsId = data.roleMasterId;
            userRole.type = data.type;
            /// Branch to be editeed
            userRole.branch = null;
            if (insert) {
                this.userRoleService.createUserRole(userRole).subscribe(data => {
                    //console.log(data);
                    this.alertService.success("Successfully Inserted!!!!!");
                    this.userRoleList = [];
                    this.loadUserRoleList();
                }, error => this.alertService.error(error));
            }
        });
    }
    back() {
        history.back();
    }
};
UserRoleCreateComponent.ctorParameters = () => [
    { type: _services_user_role_service__WEBPACK_IMPORTED_MODULE_7__.UserRoleService },
    { type: _services_role_master_service__WEBPACK_IMPORTED_MODULE_6__.RoleMasterService },
    { type: _layout_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute }
];
UserRoleCreateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-user-role-create',
        template: _raw_loader_user_role_create_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_user_role_create_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserRoleCreateComponent);



/***/ }),

/***/ 75259:
/*!***************************************************************************************!*\
  !*** ./src/app/enterprise-user/components/user-role-list/user-role-list.component.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRoleListComponent": function() { return /* binding */ UserRoleListComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_user_role_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./user-role-list.component.html */ 61655);
/* harmony import */ var _user_role_list_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-role-list.component.css */ 28508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_user_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user-role.service */ 2540);





let UserRoleListComponent = class UserRoleListComponent {
    constructor(userRoleService) {
        this.userRoleService = userRoleService;
        this.searchRolePrivilege = "";
        this.roleMasterList = [];
        this.roleName = "";
        this.rolePrivilege = "";
        this.pageSize = 5;
        this.page = 1;
    }
    ngOnInit() {
        this.reloadData();
    }
    reloadData() {
        this.userRoleService.getUserRoleList().subscribe(data => {
            this.roleMasterList = data;
            console.log(data);
        });
    }
};
UserRoleListComponent.ctorParameters = () => [
    { type: _services_user_role_service__WEBPACK_IMPORTED_MODULE_2__.UserRoleService }
];
UserRoleListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-user-role-list',
        template: _raw_loader_user_role_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_user_role_list_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserRoleListComponent);



/***/ }),

/***/ 35846:
/*!*******************************************************************!*\
  !*** ./src/app/enterprise-user/enterprise-user-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnterpriseUserRoutingModule": function() { return /* binding */ EnterpriseUserRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _components_enterprise_user_create_enterprise_user_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/enterprise-user-create/enterprise-user-create.component */ 38787);
/* harmony import */ var _components_enterprise_user_list_enterprise_user_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/enterprise-user-list/enterprise-user-list.component */ 20443);
/* harmony import */ var _components_enterprise_user_mapping_enterprise_user_mapping_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/enterprise-user-mapping/enterprise-user-mapping.component */ 23415);
/* harmony import */ var _components_role_master_create_role_master_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/role-master-create/role-master-create.component */ 74061);
/* harmony import */ var _components_role_master_list_role_master_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/role-master-list/role-master-list.component */ 81763);
/* harmony import */ var _components_user_role_create_user_role_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user-role-create/user-role-create.component */ 21399);
/* harmony import */ var _components_user_role_list_user_role_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user-role-list/user-role-list.component */ 75259);
/* harmony import */ var _enterprise_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enterprise-user.component */ 93722);











const routes = [
    { path: '', component: _enterprise_user_component__WEBPACK_IMPORTED_MODULE_7__.EnterpriseUserComponent },
    { path: 'get', component: _components_enterprise_user_list_enterprise_user_list_component__WEBPACK_IMPORTED_MODULE_1__.EnterpriseUserListComponent },
    { path: 'user-mapping', component: _components_enterprise_user_mapping_enterprise_user_mapping_component__WEBPACK_IMPORTED_MODULE_2__.EnterpriseUserMappingComponent },
    { path: 'add', component: _components_enterprise_user_create_enterprise_user_create_component__WEBPACK_IMPORTED_MODULE_0__.EnterpriseUserCreateComponent },
    { path: 'rolePrivilege/add', component: _components_role_master_create_role_master_create_component__WEBPACK_IMPORTED_MODULE_3__.RoleMasterCreateComponent },
    { path: 'rolePrivilege/list', component: _components_role_master_list_role_master_list_component__WEBPACK_IMPORTED_MODULE_4__.RoleMasterListComponent },
    { path: 'userRole/list', component: _components_user_role_list_user_role_list_component__WEBPACK_IMPORTED_MODULE_6__.UserRoleListComponent },
    { path: 'userRole/add/:userId', component: _components_user_role_create_user_role_create_component__WEBPACK_IMPORTED_MODULE_5__.UserRoleCreateComponent }
];
let EnterpriseUserRoutingModule = class EnterpriseUserRoutingModule {
};
EnterpriseUserRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
    })
], EnterpriseUserRoutingModule);



/***/ }),

/***/ 93722:
/*!**************************************************************!*\
  !*** ./src/app/enterprise-user/enterprise-user.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnterpriseUserComponent": function() { return /* binding */ EnterpriseUserComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_enterprise_user_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./enterprise-user.component.html */ 68680);
/* harmony import */ var _enterprise_user_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enterprise-user.component.css */ 48580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let EnterpriseUserComponent = class EnterpriseUserComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
EnterpriseUserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
EnterpriseUserComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-enterprise-user',
        template: _raw_loader_enterprise_user_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_enterprise_user_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EnterpriseUserComponent);



/***/ }),

/***/ 3940:
/*!***********************************************************!*\
  !*** ./src/app/enterprise-user/enterprise-user.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnterpriseUserModule": function() { return /* binding */ EnterpriseUserModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _enterprise_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enterprise-user-routing.module */ 35846);
/* harmony import */ var _enterprise_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enterprise-user.component */ 93722);
/* harmony import */ var _components_enterprise_user_list_enterprise_user_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/enterprise-user-list/enterprise-user-list.component */ 20443);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _pipes_enterprise_user_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/enterprise-user.pipe */ 72384);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ 51679);
/* harmony import */ var _components_enterprise_user_mapping_enterprise_user_mapping_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/enterprise-user-mapping/enterprise-user-mapping.component */ 23415);
/* harmony import */ var _components_enterprise_user_create_enterprise_user_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/enterprise-user-create/enterprise-user-create.component */ 38787);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material/material.module */ 90898);
/* harmony import */ var _components_role_master_create_role_master_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/role-master-create/role-master-create.component */ 74061);
/* harmony import */ var _components_role_master_list_role_master_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/role-master-list/role-master-list.component */ 81763);
/* harmony import */ var _components_user_role_list_user_role_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user-role-list/user-role-list.component */ 75259);
/* harmony import */ var _components_user_role_create_user_role_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user-role-create/user-role-create.component */ 21399);

















let EnterpriseUserModule = class EnterpriseUserModule {
};
EnterpriseUserModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
        declarations: [
            _enterprise_user_component__WEBPACK_IMPORTED_MODULE_1__.EnterpriseUserComponent,
            _components_enterprise_user_list_enterprise_user_list_component__WEBPACK_IMPORTED_MODULE_2__.EnterpriseUserListComponent,
            _pipes_enterprise_user_pipe__WEBPACK_IMPORTED_MODULE_3__.EnterpriseUserPipe,
            _components_enterprise_user_mapping_enterprise_user_mapping_component__WEBPACK_IMPORTED_MODULE_5__.EnterpriseUserMappingComponent,
            _components_enterprise_user_create_enterprise_user_create_component__WEBPACK_IMPORTED_MODULE_6__.EnterpriseUserCreateComponent,
            _components_role_master_create_role_master_create_component__WEBPACK_IMPORTED_MODULE_8__.RoleMasterCreateComponent,
            _components_role_master_list_role_master_list_component__WEBPACK_IMPORTED_MODULE_9__.RoleMasterListComponent,
            _components_user_role_list_user_role_list_component__WEBPACK_IMPORTED_MODULE_10__.UserRoleListComponent,
            _components_user_role_create_user_role_create_component__WEBPACK_IMPORTED_MODULE_11__.UserRoleCreateComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            _enterprise_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.EnterpriseUserRoutingModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
            _shared__WEBPACK_IMPORTED_MODULE_4__.StatModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
            _shared__WEBPACK_IMPORTED_MODULE_4__.PageHeaderModule,
            _material_material_module__WEBPACK_IMPORTED_MODULE_7__.MaterialModule
        ]
    })
], EnterpriseUserModule);



/***/ }),

/***/ 68154:
/*!*******************************************************!*\
  !*** ./src/app/enterprise-user/masters/privileges.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Privileges": function() { return /* binding */ Privileges; }
/* harmony export */ });
class Privileges {
    constructor() {
        this.privilegesId = null;
    }
}


/***/ }),

/***/ 87607:
/*!********************************************************!*\
  !*** ./src/app/enterprise-user/masters/role-master.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleMaster": function() { return /* binding */ RoleMaster; }
/* harmony export */ });
class RoleMaster {
    constructor() {
        this.roleMasterId = null;
    }
}


/***/ }),

/***/ 20410:
/*!************************************************************!*\
  !*** ./src/app/enterprise-user/masters/role-privileges.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolePrivileges": function() { return /* binding */ RolePrivileges; }
/* harmony export */ });
/* harmony import */ var _privileges__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privileges */ 68154);
/* harmony import */ var _role_master__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role-master */ 87607);


class RolePrivileges {
    constructor() {
        this.rolePrivilegeId = null;
        this.roleMaster = new _role_master__WEBPACK_IMPORTED_MODULE_1__.RoleMaster();
        this.privileges = new _privileges__WEBPACK_IMPORTED_MODULE_0__.Privileges();
    }
}


/***/ }),

/***/ 56755:
/*!***************************************************************************!*\
  !*** ./src/app/enterprise-user/masters/user-branch-department-mapping.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserBranchDepartmentMapping": function() { return /* binding */ UserBranchDepartmentMapping; }
/* harmony export */ });
/* harmony import */ var _master_department_masters_department__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../master/department/masters/department */ 10776);
/* harmony import */ var _master_masters_base_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../master/masters/base-entity */ 28685);
/* harmony import */ var _user_branch_mapping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-branch-mapping */ 26235);



class UserBranchDepartmentMapping extends _master_masters_base_entity__WEBPACK_IMPORTED_MODULE_1__.BaseEntity {
    constructor() {
        super();
        this.userBranchMapping = new _user_branch_mapping__WEBPACK_IMPORTED_MODULE_2__.UserBranchMapping;
        this.department = new _master_department_masters_department__WEBPACK_IMPORTED_MODULE_0__.Department;
    }
}


/***/ }),

/***/ 26235:
/*!****************************************************************!*\
  !*** ./src/app/enterprise-user/masters/user-branch-mapping.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserBranchMapping": function() { return /* binding */ UserBranchMapping; }
/* harmony export */ });
/* harmony import */ var _master_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../master/masters/base-entity */ 28685);
/* harmony import */ var _master_service_center_masters_branch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../master/service-center/masters/branch */ 40478);
/* harmony import */ var _master_unit_master_masters_enterpriseUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../master/unit-master/masters/enterpriseUser */ 30063);



class UserBranchMapping extends _master_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity {
    constructor() {
        super();
        this.user = new _master_unit_master_masters_enterpriseUser__WEBPACK_IMPORTED_MODULE_2__.EnterpriseUser;
        this.branch = new _master_service_center_masters_branch__WEBPACK_IMPORTED_MODULE_1__.Branch;
    }
}


/***/ }),

/***/ 42900:
/*!******************************************************************************!*\
  !*** ./src/app/enterprise-user/masters/user-branch-service-cente-mapping.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserBranchServiceCenterMapping": function() { return /* binding */ UserBranchServiceCenterMapping; }
/* harmony export */ });
/* harmony import */ var _master_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../master/masters/base-entity */ 28685);
/* harmony import */ var _master_service_center_masters_service_center__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../master/service-center/masters/service-center */ 39758);
/* harmony import */ var _user_branch_mapping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-branch-mapping */ 26235);



class UserBranchServiceCenterMapping extends _master_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity {
    constructor() {
        super();
        this.userBranchMapping = new _user_branch_mapping__WEBPACK_IMPORTED_MODULE_2__.UserBranchMapping();
        this.serviceCenter = new _master_service_center_masters_service_center__WEBPACK_IMPORTED_MODULE_1__.ServiceCenter();
    }
}


/***/ }),

/***/ 33725:
/*!**********************************************************************!*\
  !*** ./src/app/enterprise-user/masters/user-branch-store-mapping.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserBranchStoreMapping": function() { return /* binding */ UserBranchStoreMapping; }
/* harmony export */ });
/* harmony import */ var _master_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../master/masters/base-entity */ 28685);
/* harmony import */ var _master_store_masters_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../master/store/masters/store */ 89565);
/* harmony import */ var _user_branch_mapping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-branch-mapping */ 26235);



class UserBranchStoreMapping extends _master_masters_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity {
    constructor() {
        super();
        this.userBranchMapping = new _user_branch_mapping__WEBPACK_IMPORTED_MODULE_2__.UserBranchMapping();
        this.store = new _master_store_masters_store__WEBPACK_IMPORTED_MODULE_1__.Store();
    }
}


/***/ }),

/***/ 69481:
/*!**************************************************************!*\
  !*** ./src/app/enterprise-user/masters/user-role-details.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRoleDetails": function() { return /* binding */ UserRoleDetails; }
/* harmony export */ });
/* harmony import */ var _master_service_center_masters_branch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../master/service-center/masters/branch */ 40478);
/* harmony import */ var _enterprise_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enterprise-user */ 89959);
/* harmony import */ var _role_master__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role-master */ 87607);



class UserRoleDetails {
    constructor() {
        this.userRoleDetailsId = null;
        this.user = new _enterprise_user__WEBPACK_IMPORTED_MODULE_1__.EnterpriseUser();
        this.roleMaster = new _role_master__WEBPACK_IMPORTED_MODULE_2__.RoleMaster();
        this.branch = new _master_service_center_masters_branch__WEBPACK_IMPORTED_MODULE_0__.Branch();
    }
}


/***/ }),

/***/ 72384:
/*!***************************************************************!*\
  !*** ./src/app/enterprise-user/pipes/enterprise-user.pipe.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnterpriseUserPipe": function() { return /* binding */ EnterpriseUserPipe; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let EnterpriseUserPipe = class EnterpriseUserPipe {
    transform(value, args) {
        if (!args) {
            return value;
        }
        return value.filter((val) => {
            let rval = (val.username.toLowerCase().includes(args.toLowerCase()) || val.emailId.toLowerCase().includes(args.toLowerCase()));
            return rval;
        });
    }
};
EnterpriseUserPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'enterpriseUser'
    })
], EnterpriseUserPipe);



/***/ }),

/***/ 87194:
/*!*************************************************************!*\
  !*** ./src/app/enterprise-user/services/feature.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureService": function() { return /* binding */ FeatureService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../main.service */ 29118);




let FeatureService = class FeatureService {
    constructor(http, mainService) {
        this.http = http;
        this.mainService = mainService;
        this.baseUrl = "";
        this.baseUrl = this.mainService.getBaseUrl();
    }
    getFeaturesById(id) {
        let data;
        data = this.http.get(`${this.baseUrl}/feature/getById/${id}`);
        return data;
    }
    getFeaturesByParentId(id) {
        let data;
        data = this.http.get(`${this.baseUrl}/feature/getByParentId/${id}`);
        return data;
    }
    getFeaturesByFeatureType(featureTypeId) {
        let data;
        data = this.http.get(`${this.baseUrl}/features/getByFeatureType/${featureTypeId}`);
        return data;
    }
    getModelFeatureByfeatureId(id) {
        let data;
        data = this.http.get(`${this.baseUrl}/features/getModelFeaturePrivilegeList/${id}`);
        return data;
    }
};
FeatureService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService }
];
FeatureService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], FeatureService);



/***/ }),

/***/ 22352:
/*!*****************************************************************!*\
  !*** ./src/app/enterprise-user/services/role-master.service.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleMasterService": function() { return /* binding */ RoleMasterService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../main.service */ 29118);




let RoleMasterService = class RoleMasterService {
    constructor(http, mainService) {
        this.http = http;
        this.mainService = mainService;
        this.baseUrl = "";
        this.baseUrl = this.mainService.getBaseUrl();
    }
    getRoleMasterList() {
        let data;
        data = this.http.get(`${this.baseUrl}/roleMaster/get`);
        return data;
    }
    createRoleMaster(roleMaster) {
        return this.http.post(`${this.baseUrl}/roleMaster/add`, roleMaster);
    }
    updateRoleMaster(roleMaster) {
        return this.http.post(`${this.baseUrl}/roleMaster/update`, roleMaster);
    }
};
RoleMasterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService }
];
RoleMasterService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], RoleMasterService);



/***/ }),

/***/ 91059:
/*!********************************************************************!*\
  !*** ./src/app/enterprise-user/services/role-privilege.service.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolePrivilegeService": function() { return /* binding */ RolePrivilegeService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../main.service */ 29118);




let RolePrivilegeService = class RolePrivilegeService {
    constructor(http, mainService) {
        this.http = http;
        this.mainService = mainService;
        this.baseUrl = "";
        this.baseUrl = this.mainService.getBaseUrl();
    }
    getRolePrivilegeByRoleId(roleMasterId) {
        let data;
        data = this.http.get(`${this.baseUrl}/rolePrivileges/getByRoleId/${roleMasterId}`);
        return data;
    }
    createRolePrivilege(rolePrivilege) {
        let data;
        data = this.http.post(`${this.baseUrl}/rolePrivileges/add`, rolePrivilege);
        return data;
    }
    updateRolePrivilege(rolePrivilege) {
        let data;
        data = this.http.post(`${this.baseUrl}/rolePrivilege/update`, rolePrivilege);
        return data;
    }
    //************Services For Privileges *********** */
    getPrivilegesListByParentFeatureId(parentId) {
        let data;
        data = this.http.get(`${this.baseUrl}/privileges/getByParentFeatureId/${parentId}`);
        return data;
    }
    getModelFeaturePrivilegesListByParentFeatureId(parentId) {
        let data;
        data = this.http.get(`${this.baseUrl}/privileges/getModelFeaturePrivilegeList/${parentId}`);
        return data;
    }
};
RolePrivilegeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService }
];
RolePrivilegeService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], RolePrivilegeService);



/***/ }),

/***/ 2540:
/*!***************************************************************!*\
  !*** ./src/app/enterprise-user/services/user-role.service.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRoleService": function() { return /* binding */ UserRoleService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../main.service */ 29118);




let UserRoleService = class UserRoleService {
    constructor(http, mainService) {
        this.http = http;
        this.mainService = mainService;
        this.baseUrl = "";
        this.baseUrl = this.mainService.getBaseUrl();
    }
    getUserRoleList() {
        return this.http.get(`${this.baseUrl}/userRoleDetails/get`);
    }
    getUserRoleListByUserId(userId) {
        let data = this.http.get(`${this.baseUrl}/userRoleDetails/getByUserId/${userId}`);
        return data;
    }
    createUserRole(roleMaster) {
        return this.http.post(`${this.baseUrl}/userRoleDetails/add`, roleMaster);
    }
};
UserRoleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService }
];
UserRoleService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], UserRoleService);



/***/ }),

/***/ 9655:
/*!************************************************************************!*\
  !*** ./src/app/master/unit-master/services/employee-master.service.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeService": function() { return /* binding */ EmployeeService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../main.service */ 29118);




let EmployeeService = class EmployeeService {
    constructor(http, mainService) {
        this.http = http;
        this.mainService = mainService;
        this.baseUrl = "";
        this.baseUrl = this.mainService.getBaseUrl();
    }
    getEmployee() {
        return this.http.get(`${this.baseUrl}/employees/get`);
    }
    getEmployeesList() {
        return this.http.get(`${this.baseUrl}/employees/get`);
    }
    getEmployeeByEmployeeNo(empNo) {
        return this.http.get(`${this.baseUrl}/employee/getByEmpNo/${empNo}`);
    }
    createEmployee(employee) {
        return this.http.post(`${this.baseUrl}/employee/add`, employee);
    }
    updateEmployee(employeeId, employee) {
        return this.http.put(`${this.baseUrl}/employee/update/${employeeId}`, employee);
    }
};
EmployeeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _main_service__WEBPACK_IMPORTED_MODULE_0__.MainService }
];
EmployeeService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], EmployeeService);



/***/ }),

/***/ 55566:
/*!********************************************************************************************************!*\
  !*** ./src/app/enterprise-user/components/enterprise-user-create/enterprise-user-create.component.css ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".is-active{\r\n\theight:20px;\r\n}\r\n.col-md-2{\r\n\tmargin-top:5px;\r\n}\r\nlabel{\r\n\talign-self: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGVycHJpc2UtdXNlci1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFdBQVc7QUFDWjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkIiLCJmaWxlIjoiZW50ZXJwcmlzZS11c2VyLWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlzLWFjdGl2ZXtcclxuXHRoZWlnaHQ6MjBweDtcclxufVxyXG4uY29sLW1kLTJ7XHJcblx0bWFyZ2luLXRvcDo1cHg7XHJcbn1cclxubGFiZWx7XHJcblx0YWxpZ24tc2VsZjogY2VudGVyO1xyXG59Il19 */");

/***/ }),

/***/ 24042:
/*!****************************************************************************************************!*\
  !*** ./src/app/enterprise-user/components/enterprise-user-list/enterprise-user-list.component.css ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbnRlcnByaXNlLXVzZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ 80876:
/*!**********************************************************************************************************!*\
  !*** ./src/app/enterprise-user/components/enterprise-user-mapping/enterprise-user-mapping.component.css ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbnRlcnByaXNlLXVzZXItbWFwcGluZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ 37217:
/*!************************************************************************************************!*\
  !*** ./src/app/enterprise-user/components/role-master-create/role-master-create.component.css ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlLW1hc3Rlci1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ 13954:
/*!********************************************************************************************!*\
  !*** ./src/app/enterprise-user/components/role-master-list/role-master-list.component.css ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlLW1hc3Rlci1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ 91983:
/*!********************************************************************************************!*\
  !*** ./src/app/enterprise-user/components/user-role-create/user-role-create.component.css ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXJvbGUtY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ 28508:
/*!****************************************************************************************!*\
  !*** ./src/app/enterprise-user/components/user-role-list/user-role-list.component.css ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXJvbGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ 48580:
/*!***************************************************************!*\
  !*** ./src/app/enterprise-user/enterprise-user.component.css ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbnRlcnByaXNlLXVzZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ 36924:
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/enterprise-user/components/enterprise-user-create/enterprise-user-create.component.html ***!
  \***********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition]>\n\t<app-page-header [mainhead]=\"'EnterpriseUser'\"\n\t\t[mainheadLink]=\"'/enterpriseUser'\" [heading]=\"'New EnterpriseUser'\"\n\t\t[icon]=\"'fa-edit'\"></app-page-header>\n</div>\n<div class=\"card\">\n\t<div  class=\"card-header p-0\">\n\t\t\t<nav class =\"navbar bg-dark text-white\" >\n\t    \t\t<h2 class = \"col-md-5\">Create User</h2>\n\t\t\t\t<button class=\"btn btn-light btn-sm p-0 m-0\" [routerLink] = \"'/enterpriseUser/get'\" >\n\t\t\t\t\t<img src =\"./assets/images/round-list.png\" matTooltip = \"Show list\" style =\"height:35px;width:35px;\">\n\t\t\t\t</button>\n\t  \t\t</nav>\n\t</div>\n\t<form [formGroup] =\"registerForm\" >\n\t<div class = \"card-body\">\n\t<div class =\"col-sm-12\">\t\t\n\t\t\t<div class =\"row form-group\">\n            \t<label for = \"userLogin\" class = \"col-md-2\">  User Login</label>\n\t\t\t \t<div class = \"col-md-2 p-1\"  >\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id= \"userLogin\" required formControlName =  \"userName\" >\n\t\t    \t</div>\n\t\t    \t\n                <label for = \"loginId\" class = \"col-md-2\">  User Name </label>\n\t\t\t \t<div class = \"col-md-2 p-1\"  >\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id= \"loginId\" required formControlName =  \"userFullName\" >\n\t\t    \t</div>\n\t\t    \t\n\t\t    \t<label for = \"firstName\" class = \"col-md-2\">  Employee NO. </label>\n\t\t    \t \n\t\t\t \t<div class = \"col-md-2 p-1\"  >\n\t\t\t \t\t<input type=\"text\"\n\t\t\t \t\t\t\t\tclass = \"form-control\"\n\t\t\t\t\t           placeholder=\"Pick one\"\n\t\t\t\t\t           aria-label=\"Number\"\n\t\t\t\t\t           matInput\n\t\t\t\t\t           [formControl]=\"employee\"\n\t\t\t\t\t           [matAutocomplete]=\"auto\">\n\t\t\t\t\t   \n\t\t    \t</div>\n\t\t    \t <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n\t\t\t\t      <mat-option *ngFor=\"let option of employeeFilterList |async\" [value]=\"option.employeeFullName\" (click) =\"selectGroup(option)\">\n\t\t\t\t        {{option.email}}&nbsp;{{option.employeeFullName}}\n\t\t\t\t      </mat-option>\n\t\t\t\t</mat-autocomplete>\n\t\t\t\t\t    \n\t\t\t\t\t    \n\t\t    \t<label for = \"remarks\" class = \"col-md-2\"> Password </label>\n\t\t    \t\n\t\t\t \t<div class = \"col-md-2 p-1 input-group\"  >\n\t\t\t\t\t<input [type]=\"show?'password':'text'\" class=\"form-control\" id= \"password\" required formControlName =  \"password\" >\n\t\t\t\t\t<div class =\"input-group-append\">\n\t\t\t\t\t\t <button class =\"input-group-text\" (click) = \"show = !show\">\n    \t\t\t\t\t<mat-icon *ngIf = \"show\">visibility</mat-icon>\n    \t\t\t\t\t<mat-icon *ngIf = \"!show\">visibility_off</mat-icon>\n  \t\t\t\t\t</button>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t    \t</div>\n\t\t    \t\n\t\t    \t<label for = \"remarks\" class = \"col-md-2\"> Confirm Password </label>\n\t\t\t \t<div class = \"col-md-2 p-1 input-group\"  >\n\t\t\t \t\t<input [type]=\"show?'password':'text'\" class=\"form-control\" (change) = \"checkPassword()\" required [formControl] =  \"confPassword\"  >\n\t\t\t\t\t<div class =\"input-group-append\">\n\t\t\t\t\t\t<button class =\"input-group-text\" (click) = \"show = !show\">\n\t    \t\t\t\t\t<mat-icon *ngIf = \"show\">visibility</mat-icon>\n\t    \t\t\t\t\t<mat-icon *ngIf = \"!show\">visibility_off</mat-icon>\n\t  \t\t\t\t\t</button>\n\t\t    \t\t</div>\n\t\t    \t</div>\n\t\t    \t<label class=\"col-sm-2\"> UserType</label>\n\t\t\t\t<div class=\"col-sm-2 p-1\">\n                   \t<select class=\"form-control\" formControlName = \"userType\"  [compareWith]=\"compareUserType\">\n                   \t\t<option [ngValue] = null>--Select--</option>\n\t\t\t\t\t\t<ng-container *ngFor = \"let lookupEntity of lookupEntityList\">\n\t\t            \t<option [ngValue] =\"lookupEntity\">{{lookupEntity.lookupValue}}</option>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</select>\n         \t\t</div>\n         \t\t\n         \t\t\n\t\t    \t<label class =\"col-md-12\" *ngIf = \"wrongPassword\">\n\t\t    \t\t<label class = \"col-md-4\"></label>\n\t\t    \t\t<label class = \"col-md-4\" style =\"color:red;\">Password and Confirm password are not same.</label>\n\t\t    \t</label>\n\t\t    \t\n\t\t    \t\n\t\t    \t<!-- <label for = \"firstName\" class = \"col-md-2\">  Department </label>\n\t\t\t \t<div class = \"col-md-2 p-1\"  >\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id= \"firstName\" required formControlName =  \"emailId\" >\n\t\t    \t</div> -->\n\t\t    \t\n\n                <label for = \"firstName\" class = \"col-md-2\"> Password Expires</label>\n\t\t\t \t<div class = \"col-md-2 p-1\"  >\n\t\t\t\t\t<input type=\"checkbox\" class=\"form-control h-50\" id= \"isPswExpires\" required  formControlName =  \"isPswExpires\" >\n\t\t    \t</div>\n\t\t    \t\n\t\t    \t\n\t\t    \t\n\t\t    \t\n\t\t    \t <label for = \"firstName\" class = \"col-md-2\"> Password Change Required</label>\n\t\t\t \t<div class = \"col-md-2 p-1\"  >\n\t\t\t\t\t<input type=\"checkbox\" class=\"form-control h-50\" id= \"pswChangedReqd\" required formControlName =  \"pswChangeReqd\" >\n\t\t    \t</div>\n\t\t    \t<label for = \"firstName\" class = \"col-md-2\"> isActive </label>\n\t\t\t \t<div class = \"col-md-2 p-1\"  >\n\t\t\t\t\t<input type=\"checkbox\" class=\"form-control is-active\" id= \"isActive\" required formControlName =  \"isActive\" >\n\t\t    \t</div>\n\t\t    \t\n\t\t    \t\n\t\t    \t<label for = \"firstName\" class = \"col-md-2\">  Password Expiry </label>\n\t\t\t \t<div class = \"col-md-2 pr-5 p-1\"  >\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id= \"pswExpiryDays\" required formControlName =  \"pswExpiryDays\" >\n\t\t    \t</div>\n\t\t    \t<label style = \"margin-left:-42px;margin-right:10px;align-self:center;\">days</label>\n\t\t    \t\n\t\t    \t<label for = \"firstName\" class = \"col-md-2\">  Allowed Failed Logins </label>\n\t\t\t \t<div class = \"col-md-2 p-1\"  >\n\t\t\t\t\t<input type=\"number\" class=\"form-control\" id= \"maxFailedLoginAttempt\" required formControlName =  \"maxFailedLoginAttempt\" >\n\t\t    \t</div>\n\t\t    \t\n\t\t    \t\n\t\t    \t<label for = \"remarks\" class = \"col-md-2\"> Remarks </label>\n\t\t\t \t<div class = \"col-md-2 p-1\"  >\n\t\t\t\t\t<textarea class=\"form-control \" id= \"remaks\" required formControlName =  \"remarks\" ></textarea>\n\t\t    \t</div>\n\t\t    \t\n\t\t    \t<label for = \"file-input\" class = \"col-md-2\"> Images </label>\n\t\t\t \t<div class = \"col-md-2 p-1\"  >\n\t\t\t \t\t<input type =\"file\" #fileInput  id = \"file-input\" style = \"display: none;\" accept =\"image/*\" (change) = \"uploadImage($event.target)\" multiple>\n\t\t\t\t\t<img [src] =\"img\" (click) = \"fileInput.click()\"  style =\"height: 100px;weight:100px;\" class = \"border border-dark\">\n\t\t\t\t\t<label *ngIf =\"fileInput.files[0] != null\">{{fileInput.files[0].name}}</label>\n\t\t\t\t\t<button class =\"btn btn-sucess\" (click) = \"uploadImage(fileInput)\">Upload</button>\n\t\t    \t</div>\n\t\t    \t\n\t\t    \t<div class = \"col-md-8 text-center pt-5\"><br>\n               \t \t<button class=\"btn btn-primary col-md-2\" type=\"submit\" (click) = \"onSubmit()\">Submit</button>&nbsp;&nbsp;\n                \t<button class=\"btn btn-primary col-md-2\" type=\"reset\">Reset</button>\n       \t\t\t</div>\n\t\t    \t<!-- \n         \t\t<label class=\"col-sm-2\"> Gender</label>\n\t\t\t\t<div class=\"col-sm-2 p-1\">\n                   \t<select class=\"form-control\" formControlName = \"gender\" >\n\t\t\t\t\t\t<ng-container *ngFor = \"let lookupEntity of lookupEntityList\">\n\t\t            \t<option *ngIf = \"lookupEntity.category.categoryId == 2\" [ngValue] =\"lookupEntity\">{{lookupEntity.lookupValue}}</option>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</select>\n         \t\t</div>\n         \t\t<label class=\"col-sm-2\"> UserStatus</label>\n\t\t\t\t<div class=\"col-sm-2 p-1\">\n                   \t<select class=\"form-control\" formControlName = \"userStatus\" >\n\t\t\t\t\t\t<ng-container *ngFor = \"let lookupEntity of lookupEntityList\">\n\t\t            \t<option *ngIf = \"lookupEntity.category.categoryId == 2\" [ngValue] =\"lookupEntity\">{{lookupEntity.lookupValue}}</option>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</select>\n         \t\t</div>\n         \t\t<label class=\"col-sm-2\"> UserType Status</label>\n\t\t\t\t<div class=\"col-sm-2 p-1\">\n                   \t<select class=\"form-control\" formControlName = \"userTypeStatus\" >\n\t\t\t\t\t\t<ng-container *ngFor = \"let lookupEntity of lookupEntityList\">\n\t\t            \t<option *ngIf = \"lookupEntity.category.categoryId == 2\" [ngValue] =\"lookupEntity\">{{lookupEntity.lookupValue}}</option>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</select>\n         \t\t</div>\n         \t\t<label class=\"col-sm-2\"> Marital Status</label>\n\t\t\t\t<div class=\"col-sm-2 p-1\">\n                   \t<select class=\"form-control\" formControlName = \"maritalStatus\" >\n\t\t\t\t\t\t<ng-container *ngFor = \"let lookupEntity of lookupEntityList\">\n\t\t            \t<option *ngIf = \"lookupEntity.category.categoryId == 2\" [ngValue] =\"lookupEntity\">{{lookupEntity.lookupValue}}</option>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</select>\n         \t\t</div>\n         \t\t<label class=\"col-sm-2\"> nationality</label>\n\t\t\t\t<div class=\"col-sm-2 p-1\">\n                   \t<select class=\"form-control\" formControlName = \"nation\" >\n\t\t\t\t\t\t<ng-container *ngFor = \"let lookupEntity of lookupEntityList\">\n\t\t            \t<option *ngIf = \"lookupEntity.category.categoryId == 2\" [ngValue] =\"lookupEntity\">{{lookupEntity.lookupValue}}</option>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</select>\n         \t\t</div>\n\t\t    \t<label class=\"col-sm-2\"> User Category</label>\n\t\t\t\t<div class=\"col-sm-2 p-1\">\n                   \t<select class=\"form-control\" formControlName = \"userCategory\" >\n\t\t\t\t\t\t<ng-container *ngFor = \"let lookupEntity of lookupEntityList\">\n\t\t            \t<option *ngIf = \"lookupEntity.category.categoryId == 2\" [ngValue] =\"lookupEntity\">{{lookupEntity.lookupValue}}</option>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</select>\n         \t\t</div>\n         \t\t<label class=\"col-sm-2\"> Blood Group</label>\n\t\t\t\t<div class=\"col-sm-2 p-1\">\n                   \t<select class=\"form-control\" formControlName = \"bloodGroup\" >\n\t\t\t\t\t\t<ng-container *ngFor = \"let lookupEntity of lookupEntityList\">\n\t\t            \t<option *ngIf = \"lookupEntity.category.categoryId == 2\" [ngValue] =\"lookupEntity\">{{lookupEntity.lookupValue}}</option>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</select>\n         \t\t</div>\n\t\t    \t\n\t\t    \t<label for = \"firstName\" class = \"col-md-2\">  UserHealthCard Valid Upto </label>\n\t\t\t \t<div class = \"col-md-2 p-1\"  >\n\t\t\t\t\t<input type=\"date\" class=\"form-control\" id= \"firstName\" required formControlName =  \"userHealthCardValidUpto\" >\n\t\t    \t</div>\n\t\t    \t\n\t\t    \t\n\t\t    \t\n\t\t    \t<label for = \"remarks\" class = \"col-md-2\"> Alias Name </label>\n\t\t\t \t<div class = \"col-md-2 p-1\"  >\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id= \"aliasName\" required formControlName =  \"aliasName\" >\n\t\t    \t</div>\n\t\t    \t<label for = \"remarks\" class = \"col-md-2\"> FatherName </label>\n\t\t\t \t<div class = \"col-md-2 p-1\"  >\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id= \"fatherName\" required formControlName =  \"fatherName\" >\n\t\t    \t</div>\n\t\t    \t\n\t\t    \t<label for = \"remarks\" class = \"col-md-2\"> DOB </label>\n\t\t\t \t<div class = \"col-md-2 p-1\"  >\n\t\t\t\t\t<input type=\"date\" class=\"form-control\" id= \"dob\" required formControlName =  \"dob\" >\n\t\t    \t</div>\n\t\t    \t -->\n\t\t    \t\n\t\t    \t\n\t\t</div> \n\t\t\t<!-- <div class = \"col-md-3\"><br>\n                <button class=\"btn btn-primary col-md-6\" type=\"submit\">Submit</button>&nbsp; \n                <button class=\"btn btn-primary col-md-5\" type=\"reset\">Reset</button>\n       \t\t</div> -->\n\t</div>\n\t</div>\n\t</form>\n</div>\n\n\n  \n\n                    \n                   \n           \n                \n\n           \n       \n    \n\n");

/***/ }),

/***/ 63684:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/enterprise-user/components/enterprise-user-list/enterprise-user-list.component.html ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition]>\r\n\t<app-page-header [mainhead]=\"'EnterpriseUser'\"\r\n\t\t[mainheadLink]=\"'/enterpriseUser'\" [heading]=\"'EnterpriseUser List'\"\r\n\t\t[icon]=\"'fa-card'\"></app-page-header>\r\n</div>\r\n<div class=\"card\">\r\n\t<div class =\"card-head\">\r\n\t\t<nav class=\"navbar bg-dark text-white\">\r\n\t\t\t<h2 class=\"col-md-3\">USER LIST</h2>\r\n\t\t\t<img src =\"./assets/images/close.ico\" matTooltip = \"Back\" style =\"height:35px;width:35px;\" (click) = \"back()\">\r\n\t\t</nav>\r\n\t\t<div class =\"row  m-0\">\r\n\t\t\t<div class=\" col-md-4 pt-1 pl-0 form-group input-group\">\r\n\t\t\t<input class=\"form-control\" type=\"text\" [(ngModel)]=\"name\" />\r\n\t\t\t<div class=\"input-group-append \">\r\n\t\t\t\t<button class=\"btn btn-info\" type=\"button\">\r\n\t\t\t\t\t<i class=\"fa fa-search\"></i>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class =\"col-md-7\"></div>\r\n\t\t<div class =\"col-md-1\">\r\n\t\t\t<button class =\"btn btn-sm\">\r\n\t\t\t\t<img src =\"./assets/images/create.jpg\" matTooltip = \"New\" style =\"height:35px;width:35px;\" [routerLink] = \"'/enterpriseUser/add'\">\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"card-body \">\r\n\t\t<div class =\"row\">\r\n\t\t\r\n\t\t\t<table class=\"table  table-sm border\">\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>EmailId</th>\r\n\t\t\t\t\t<th>User Name</th>\r\n\t\t\t\t\t<th>Employee No</th>\r\n\t\t\t\t\t<th>UserType</th>\r\n\t\t\t\t\t<th>GoTo Mapping</th>\r\n\t\t\t\t\t<th>Edit</th>\r\n\t\t\t\t\t<th>Privilege</th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t<tr *ngFor='let user of enterpriseUserList | enterpriseUser: name'>\r\n\t\t\t\t\t<td>{{user.emailId}}</td>\r\n\t\t\t\t\t<td>{{user.username}}</td>\r\n\t\t\t\t\t<td>{{user.employeeNo}}</td>\r\n\t\t\t\t\t<td>{{user.userType.lookupValue}}</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<button (click)=\"gotoUserBranchMapping(user)\"\r\n\t\t\t\t\t\t\tclass=\"btn btn-info btn-sm\" style=\"margin-left: 10px\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-edit\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<br>\r\n\t\t\t\t\t<br>\r\n\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<button class=\"btn btn-success\" (click) = \"gotoUpdateUser(user)\">\r\n\t\t\t\t\t\t\tEdit</button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<button (click)=\"gotoUserRolePrivilegeCreate(user)\"\r\n\t\t\t\t\t\t\tclass=\"btn btn-danger\">Privilege</button>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\t\t</div>\r\n\t\t\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ 11646:
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/enterprise-user/components/enterprise-user-mapping/enterprise-user-mapping.component.html ***!
  \*************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [@routerTransition]>\n\t<app-page-header [mainhead]=\"'EnterpriseUser'\"\n\t\t[mainheadLink]=\"'/enterpriseUser'\" [heading]=\"'EnterpriseUser Mapping'\"\n\t\t[icon]=\"'fa-user'\"></app-page-header>\n</div>\n<div class = \"container-fluid\">\n\t<div class=\"card-header \">User Branch mapping .....{{user.userFullName}}</div>\n\t<div class = \"card-body\">\n\t\t<div class = \"container\">\n\t\t\t<ngb-tabset #t=\"ngbTabset\">\n<!-- -------------------------User Branch Mapping ------------------------------------------------------ -->\n\t\t\t\t<ngb-tab title=\"UserBranchMapping\" id=\"branchTab\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t<div class='card-head text-white bg-info text-center'>\n\t\t\t\t\t\t\t\t<h3>Branch List</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-body table-responsive\">\n\t\t\t\t\t\t\t\t<form #userBranchForm=ngForm>\n\t\t\t\t\t\t\t\t\t<table class=\" table-bordered   col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let b of branchList\">\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [ngModel] = \"checkBranchUserConnection(b)\" name=\"my{{b.id}}\" ngModel /><label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{b.branchName}} </label>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t</table>\n\t\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success\" (click)=\"saveBranch(userBranchForm)\" *ngIf = \"!userBranchFound\">Save\n\t\t\t\t\t\t\t\t\t\tBranch</button>&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success\" (click)=\"saveBranch(userBranchForm)\" *ngIf = \"userBranchFound\">Update\n\t\t\t\t\t\t\t\t\t\tBranch</button>&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success\" [routerLink]=\"'/user/userlist'\"> Back</button>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t<!-- ----------------------------------User Department Mapping -------------------------------------------- -->\n\t\t\t\t<ngb-tab id=\"departmentTab\">\n\t\t\t\t<ng-template ngbTabTitle><b>DepartmentMapping</b></ng-template>\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class='card-head text-white bg-info text-center'>\n\t\t\t\t\t\t\t<h3>Department List</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<select [(ngModel)] =\"userBranch\" (ngModelChange) =\"setUserBranch(userBranch)\" name=\"branch\" class=\"info h-25 col-md-3\"\n\t\t\t\t\t\t\t\t\t  ngModel>\n\t\t\t\t\t\t\t\t\t<option [value] = dummyUserBranchMapping> ---Select---</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let ub of userBranchList\" [ngValue]=\"ub\">\n\t\t\t\t\t\t\t\t\t\t{{ub.branch.branchName}}</option>\n\t\t\t\t\t\t\t\t</select>&nbsp;<br>\n\t\t\t\t\t\t\t\t<form #userDepartmentForm=ngForm>\n\t\t\t\t\t\t\t\t\t<div class=\" table-responsive col-md-12\" *ngIf=\"!submitted\">\n\t\t\t\t\t\t\t\t\t\t<table class=\" table-bordered\" *ngIf = \"showDepartments\">\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let department of departmentList\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModel] =\"checkDepartmentUserConnection(department)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"my{{department.departmentId}}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tngModel /><label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{department.departmentName}} </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success\" (click)=\"saveBranchDepartment(userDepartmentForm)\">Save\n\t\t\t\t\t\t\t\t\t\t\tDepartment</button>&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\n\t<!-- ---------------------------------User ServiceCenter Mapping --------------------------------------- -->\n\t\t\t\t<ngb-tab id=\"serviceCenterTab\">\n\t\t\t\t<ng-template ngbTabTitle><b>ServiceCenterMapping</b></ng-template>\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class='card-head text-white bg-info text-center'>\n\t\t\t\t\t\t\t<h3>SerivceCenter List</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<select [(ngModel)] =\"userBranch\" (ngModelChange) =\"setUserBranch(userBranch)\" name=\"branch\" class=\"info h-25 col-md-3\"\n\t\t\t\t\t\t\t\t\t  ngModel>\n\t\t\t\t\t\t\t\t\t<option [value] = dummyUserBranchMapping> ---Select---</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let ub of userBranchList\" [ngValue]=\"ub\">\n\t\t\t\t\t\t\t\t\t\t{{ub.branch.branchName}}</option>\n\t\t\t\t\t\t\t\t</select>&nbsp;<br>\n\t\t\t\t\t\t\t\t<form #userServiceCenterForm =ngForm>\n\t\t\t\t\t\t\t\t\t<div class=\" table-responsive col-md-12\" *ngIf=\"!submitted\">\n\t\t\t\t\t\t\t\t\t\t<table class=\" table-bordered\" *ngIf = \"showDepartments\">\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t \n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let serviceCenter of serviceCenterList\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModel] =\"checkServiceCenterUserConnection(serviceCenter)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"my{{serviceCenter.serviceCenterId}}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tngModel /><label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{serviceCenter.serviceCenterName}} </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success\" (click)=\"saveUserServiceCenter(userServiceCenterForm)\">Save\n\t\t\t\t\t\t\t\t\t\t\tServiceCenter</button>&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\t\n\t<!-- -------------------------User ServiceCenter Mapping ------------------------------------------------------ -->\n\t\t\t\t<ngb-tab id=\"storeAccessories\">\n\t\t\t\t<ng-template ngbTabTitle><b>Store Mapping</b></ng-template>\n\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class='card-head text-white bg-info text-center'>\n\t\t\t\t\t\t\t<h3>StoreAccessories List</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<select [(ngModel)] =\"userBranch\" (ngModelChange) =\"setUserBranch(userBranch)\" name=\"branch\" class=\"info h-25 col-md-3\"\n\t\t\t\t\t\t\t\t\t  ngModel>\n\t\t\t\t\t\t\t\t\t<option [value] = dummyUserBranchMapping> ---Select---</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let ub of userBranchList\" [ngValue]=\"ub\">\n\t\t\t\t\t\t\t\t\t\t{{ub.branch.branchName}}</option>\n\t\t\t\t\t\t\t\t</select>&nbsp;<br>\n\t\t\t\t\t\t\t\t<form #userStoreForm =ngForm>\n\t\t\t\t\t\t\t\t\t<div class=\" table-responsive col-md-12\" *ngIf=\"!submitted\">\n\t\t\t\t\t\t\t\t\t\t<table class=\" table-bordered\" *ngIf = \"showDepartments\">\n\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let stores of storeList\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"table-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModel] =\"checkStoreUserConnection(stores)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"my{{stores.id}}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tngModel /><label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{stores.storeName}} </label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success\" (click)=\"saveUserStoreAccessories(userStoreForm)\">Save Store</button>&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</ngb-tab>\t\t\n\t\t\t\t\t\t\n\t\n\t\t</ngb-tabset>\n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ 57772:
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/enterprise-user/components/role-master-create/role-master-create.component.html ***!
  \***************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n\t<div class=\"card-header p-0\">\n\t\t<nav class=\"navbar bg-dark text-white\">\n\t\t\t<h2 class=\"col-md-5\">Create RoleDetails</h2>\n\t\t\t<button class=\"btn btn-success\"\n\t\t\t\t[routerLink]=\"'/enterpriseUser/rolePrivilege/list'\">View\n\t\t\t\tList</button>\n\t\t</nav>\n\t</div>\n\t<div class=\"card-body\">\n\t\t<form [formGroup]=\"roleForm\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<label for=\"roleName\" class=\"col-md-2\"> Role Name </label>\n\t\t\t\t<div class=\"col-md-9 p-1\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control h-75\" id=\"rolename\" required\n\t\t\t\t\t\tformControlName=\"roleName\">\n\t\t\t\t</div>\n\t\t\t\t<label for=\"active\" class=\"col\"> Active </label> \n\t\t\t\t<input type=\"checkbox\" class =\"col mt-2\" formControlName=\"active\" />\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<label for=\"description\" class=\"col-md-2\"> Description </label>\n\t\t\t\t<div class=\"col-md-10 p-1\">\n\t\t\t\t\t<textarea class=\"form-control h-75\" id=\"description\" required\n\t\t\t\t\t\tformControlName=\"description\"></textarea>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\n\n\t\t\t<div class=\"col-md-3\">\n\t\t\t\t<br>\n\t\t\t\t<button class=\"btn btn-info btn-sm\" type=\"submit\"\n\t\t\t\t\t*ngIf=\"!isUpdateRequest\" (click)=\"onSubmit()\">Save</button>\n\t\t\t\t&nbsp;\n\t\t\t\t<button class=\"btn btn-info btn-sm\" type=\"submit\"\n\t\t\t\t\t*ngIf=\"isUpdateRequest\" (click)=\"updateRole()\">Update</button>\n\t\t\t\t&nbsp;\n\t\t\t\t<button class=\"btn btn-success btn-sm\" type=\"reset\"\n\t\t\t\t\t(click)=\"resetForm()\">Reset</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n<!-- ************************************* module list*********************************************** -->\n<div class=\"card\">\n\t<div class=\"card-body\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6 \">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<label class=\"col-md-4 pr-0 m-0\">Module</label>\n\t\t\t\t\t<div class=\"col-md-4 p-0 m-0\">\n\t\t\t\t\t\t<mat-select class=\"form-control\" title = \"select Feature\" [placeholder]=\"'&nbsp;&nbsp;--Select--'\" [(ngModel)]=\"selectedFeature\" name =\"selectedFeature\" id = \"selectedFeature\"\n\t\t\t\t\t\t\t(ngModelChange)=\"showFeatures($event)\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let featureModule of featureModuleList\"\n\t\t\t\t\t\t\t\t[value]=\"featureModule\">{{featureModule.featureDesc}}</mat-option>\n\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"table-responsive container-fluid\">\n\t\t\t\t\t<table class=\"table  table-bordered w-100 d-block d-md-table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Select</th>\n\t\t\t\t\t\t\t\t<th>Feature</th>\n\t\t\t\t\t\t\t\t<th>Privilege</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody *ngIf=\"isFeatureModule\">\n\t\t\t\t\t\t\t<tr *ngFor=\"let privilege of  modelFeaturePrivilegeList\">\n\t\t\t\t\t\t\t\t<td><input type=\"checkbox\"\n\t\t\t\t\t\t\t\t\t(click)=\"featureStore($event.target.checked,privilege)\" [checked] = \"compareWith(privilege)\"></td>\n\t\t\t\t\t\t\t\t<td >{{privilege.feature}}</td>\n\t\t\t\t\t\t\t\t<td>{{privilege.privilege.privilegeName}}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"table-responsive\">\n\t\t\t\t\t<table class=\"table table-bordered \">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Module</th>\n\t\t\t\t\t\t\t\t<th>Feature</th>\n\t\t\t\t\t\t\t\t<th>Privilege</th>\n\t\t\t\t\t\t\t\t<th>Removed</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody >\n\t\t\t\t\t\t\t<tr *ngFor=\"let privilege of privilegeListForStore\">\n\t\t\t\t\t\t\t\t<td>{{privilege.model}}</td>\n\t\t\t\t\t\t\t\t<td>{{privilege.feature}}</td>\n\t\t\t\t\t\t\t\t<td>{{privilege.privilege.privilegeName}}</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<button class=\" btn-danger m-1 h6\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"removeFeature(privilege)\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-times\"></i>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-2\"></div>\n\t\t\t<div class=\"col-md-1\">\n\t\t\t\t<button class=\"btn btn-sm btn-success\" *ngIf = \"!isRolePrivilegeExist\" (click)=\"saveFeatures()\">Assign Privilege</button>\n\t\t\t\t<button class=\"btn btn-sm btn-success\" *ngIf = \"isRolePrivilegeExist\" (click)=\"updatePrivilege()\">Update Privilege</button>\n\t\t\t\t\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ 68586:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/enterprise-user/components/role-master-list/role-master-list.component.html ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n\t\t<div class=\"card-header p-0\"> \n\t\t\t<nav class=\"navbar bg-dark text-white text-white\">\n\t\t\t\t<h2 class=\"col-md-5\">Role Privilege List</h2>\n\t\t\t\t<input type=\"text\" placeholder=\"search\"\n\t\t\t\t\t[(ngModel)]=\"searchRolePrivilege\">\n\t\t\t\t <a\trouterLink=\"/enterpriseUser/rolePrivilege/add\"><button value=\"create\"\n\t\t\t\t\t\tclass=\"btn btn-primary\">create</button></a>\n\t\t\t</nav>\n\t\t</div>\n\t\t<div class=\"card-body table-responsive\">\n\t\t\t<table class=\"table table-bordered\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>Role Name</th>\n\t\t\t\t\t\t<th>Role Description</th>\n\t\t\t\t\t\t<th>Active</th>\n\t\t\t\t\t\t<th>Modify</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\n\t\t\t\t<!-- <tr *ngFor=\"let role of rolePrivilege|searchRolePrivilege:searchRolePrivilege |slice: (page-1) * pageSize : page * pageSize\"> -->\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr\n\t\t\t\t\t\t*ngFor='let roleMaster of roleMasterList |slice: (page-1) * pageSize : page * pageSize'>\n\t\t\t\t\t\t<td>{{roleMaster.roleName}}</td>\n\t\t\t\t\t\t<td>{{roleMaster.description}}</td>\n\t\t\t\t\t\t<td>{{roleMaster.active}}</td>\n\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<button class=\"btn btn-info\"\n\t\t\t\t\t\t\t\t(click) = \"gotoUpdateRoleMaster(roleMaster)\" >Modify</button>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<ngb-pagination [collectionSize]=\"len\" [(page)]=\"page\"\n\t\t\t\t\t\t[pageSize]=\"pageSize\" [rotate]=\"true\" [ellipses]=\"false\"\n\t\t\t\t\t\tclass=\"col-md-9\"></ngb-pagination>\n\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t\t\t\t\n\t\t</div>\n\t</div>\n");

/***/ }),

/***/ 99629:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/enterprise-user/components/user-role-create/user-role-create.component.html ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-header p-0\" *ngIf =\"user != null \">\n\t<nav class = \"navbar bg-dark text-white m-0\">\n\t\t<h3>{{user.userFullName}}</h3>\n\t\t<button class =\"btn btn-success\" (click) = \"back()\">Back </button>\n\t</nav>\n</div>\n<div class=\" row col-md-12  mr-auto mt-1\">\n\t<div class=\"col-md-6 navbar-nav\">\n\t\t<h3 Style=\"font-weight: bold\">Available Roles</h3>\n\t\t<table border=\"1px solid\" width=\"100%\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>Type</th>\n\t\t\t\t\t<th>Role Name</th>\n\t\t\t\t\t<th >Add</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let role of roleMasterList  \">\n\t\t\t\t\t<td>{{role.type}}</td>\n\t\t\t\t\t<td>{{role.roleName}}</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-primary m-1 h6\" (click)= \"addRole(role)\">Add</button>\n\t\t\t\t\t</td>\n\t\t\t</tbody>\n\t\t</table>\n\t\t<div class =\"d-flex  bd-highlight flex-row-reverse\">\n\t\t<div class = \"pt-2\">\n\t\t\t<button type=\"button\" class=\"btn btn-sm \" mat-flat-button color = \"accent\" (click) =\"saveUserRole()\" >Assign Privilege</button>\n\t\t</div>\n\t</div>\n\t\t\n\t</div>\n\t<div class=\"col-md-6 navbar-nav\">\n\t\t<h3 Style=\"font-weight: bold\">Assigned User Role</h3>\n\t\t<table border=\"1px solid\" width=\"100%\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>Type</th>\n\t\t\t\t\t<th>User Role</th>\n\t\t\t\t\t<th>Remove</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody >\n\t\t\t\t<tr *ngFor=\"let role of roleMasterListForStore\">\n\t\t\t\t\t<td>{{role.type}}</td>\n\t\t\t\t\t<td>{{role.roleName}}</td>\n\t\t\t\t\t<td>\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t<button  class= \"btn btn-sm btn-danger m-1 h6\" (click) = \"removeRole(role)\"><i class=\"fa fa-times\"></i></button>\n\t\t\t\t\t</td>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\t\n</div>\n\n");

/***/ }),

/***/ 61655:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/enterprise-user/components/user-role-list/user-role-list.component.html ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class =\"container-fluid p-0 m-0\">\n\n<div class = \"card justify-content-center p-0 m-0\">\n\t\t<div class =\"card-head \">\n\t\t\t<nav class = \"navbar bg-dark text-white text-white\">\n\t\t\t\t<h2>Privilege List</h2>\n\t\t\t\t<input type = \"text\" placeholder = \"search\" [(ngModel)] = \"searchRolePrivilege\">\n\t\t\t\t<a routerLink = \"/enterpriseUser/userRole/add\"><button value= \"create\" class =\"btn btn-primary\"> create</button></a>\n\t\t\t</nav>\n\t\t</div>\n\t\t<div class=\"card-body table-responsive\">\n                    <table class=\"table table-bordered\">\n\t\t<thead>\n\t\t\t\t\t<tr >\n\t\t\t\t\t\t<th>Type</th>\n\t\t\t\t\t\t<th>Role Name</th>\n\t\t\t\t\t\t<th>Add</th>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t\n\t\t\t\t \t<!-- <tr *ngFor=\"let role of rolePrivilege|searchRolePrivilege:searchRolePrivilege |slice: (page-1) * pageSize : page * pageSize\"> -->\n\t\t\t\t<tbody>\n                            <tr *ngFor = 'let roleMaster of roleMasterList |slice: (page-1) * pageSize : page * pageSize'>\n                                <td>{{roleMaster.roleName}}</td>\n                                <td>{{roleMaster.description}}</td>\n                                <td>{{roleMaster.active}}</td>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<button class = \"btn btn-info\" [routerLink]=\"'/user/userRoleCreate'\"> Add  </button>\n\t\t\t\t\t\t\t\t</td>\n                            </tr>\n                            <ngb-pagination [collectionSize]=\"len\" [(page)]=\"page\" [pageSize] = \"pageSize\"  [rotate]=\"true\"  [ellipses]=\"false\" class = \"col-md-9\"></ngb-pagination>\n                            \n                        </tbody>\n                    </table>\n\t\t\n\t\t</div>\n\t\t</div>\n</div>\n");

/***/ }),

/***/ 68680:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/enterprise-user/enterprise-user.component.html ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <div class=\"row\">\n\t<div class=\"col-xl-4 col-lg-6\">\n\t    <app-stat [bgClass]=\"'primary'\" [count]=\"01\" [icon]=\"'far fa-address-card'\" \n\t    [label]=\"'EnterpriseUser Category'\" [outcomeLink]=\"'enterpriseUser/get'\" [data] = \"' go to EnterpriseUser List'\"></app-stat>\n\t</div>\n\t<div class=\"col-xl-4 col-lg-6\">\n\t    <app-stat [bgClass]=\"'secondary'\" [count]=\"01\" [icon]=\"'far fa-address-card'\" \n\t    [label]=\"'EnterpriseUser-Mapping'\" [outcomeLink]=\"'enterpriseUser/user-mapping'\" [data] = \"' go to EnterpriseUser Mapping'\"></app-stat>\n\t</div>\n\t<div class=\"col-xl-4 col-lg-6\">\n\t    <app-stat [bgClass]=\"'success'\" [count]=\"01\" [icon]=\"'far fa-edit'\" \n\t    [label]=\"'Create EnterpriseUser'\" [outcomeLink]=\"'enterpriseUser/add'\" [data] = \"' go to EnterpriseUser Form'\"></app-stat>\n\t</div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_enterprise-user_enterprise-user_module_ts-es2015.js.map