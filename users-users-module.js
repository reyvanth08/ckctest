(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./src/app/users/add-users/add-users.component.html":
/*!**********************************************************!*\
  !*** ./src/app/users/add-users/add-users.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"content-header\">Add User</div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <!-- <div class=\"card-header\">\r\n                <div class=\"card-title-wrap bar-success\">\r\n                    <h4 class=\"card-title\">Regular Form (Reactive Form)</h4>\r\n                </div>\r\n            </div> -->\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <form [formGroup]=\"regularForm\" (ngSubmit)=\"onReactiveFormSubmit()\" novalidate>\r\n                        <small class=\"form-text text-muted danger\" *ngIf=\"usernameerror\">Username Already Exits.<br/><br/></small>\r\n                        <small class=\"form-text text-muted danger\" *ngIf=\"emailerror\">Email Already Exits.<br/><br/></small>\r\n                        <div class=\"form-group\">\r\n                            <label>Username</label>\r\n                            <input class=\"form-control\" id=\"username\" formControlName=\"username\" placeholder=\"Enter Username\" type=\"text\">\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('username').valid && (regularForm.get('username').dirty || regularForm.get('username').touched)\">Please enter a valid username!</small>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label>Password</label>\r\n                            <input class=\"form-control\" id=\"password\" formControlName=\"password\" placeholder=\"Enter Password\" type=\"password\">\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('password').valid && (regularForm.get('password').dirty || regularForm.get('password').touched)\">Please enter a valid password!</small>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label>First Name</label>\r\n                            <input class=\"form-control\" id=\"firstName\" formControlName=\"firstName\" placeholder=\"Enter First Name\" type=\"text\">\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('firstName').valid && (regularForm.get('firstName').dirty || regularForm.get('firstName').touched)\">Please enter a valid firstName!</small>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label>Last Name</label>\r\n                            <input class=\"form-control\" id=\"lastName\" formControlName=\"lastName\" placeholder=\"Enter Last Name\" type=\"text\">\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('lastName').valid && (regularForm.get('lastName').dirty || regularForm.get('lastName').touched)\">Please enter a valid lastName!</small>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label>Email</label>\r\n                            <input class=\"form-control\" id=\"email\" formControlName=\"email\" placeholder=\"Enter Email\" type=\"email\">\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('email').valid && (regularForm.get('email').dirty || regularForm.get('email').touched)\">Please enter a valid email!</small>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label>DOB</label>\r\n                            <input class=\"form-control\" id=\"dob\" formControlName=\"dob\" type=\"date\">\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('dob').valid && (regularForm.get('dob').dirty || regularForm.get('dob').touched)\">Please enter a valid dob!</small>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label class>Gender</label>\r\n                            <div class=\"custom-control custom-radio display-block\">\r\n                                <input type=\"radio\" id=\"genderRadios1\"  value=\"Female\" name=\"genderRadios\" class=\"custom-control-input\">\r\n                                <label class=\"custom-control-label\" for=\"genderRadios1\">Female</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio display-block\">\r\n                                <input type=\"radio\" id=\"genderRadios2\" value=\"Male\" name=\"genderRadios\" class=\"custom-control-input\" ng-checked=\"true\">\r\n                                <label class=\"custom-control-label\" for=\"genderRadios2\">Male</label>\r\n                            </div>\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('genderRadios').valid && (regularForm.get('genderRadios').dirty || regularForm.get('genderRadios').touched)\">Please choose Gender!</small>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label>Phone</label>\r\n                            <input class=\"form-control\" id=\"phone\" formControlName=\"phone\" type=\"text\">\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('phone').valid && (regularForm.get('phone').dirty || regularForm.get('phone').touched)\">Please enter valid phone number!</small>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label>Subscriber List</label>\r\n                            <select class=\"form-control\" id=\"sublist\" formControlName=\"sublist\">\r\n                                <option selected>Select List</option>\r\n                                <option *ngFor=\"let list of listDetails\" value=\"{{list.id}}\">{{list.name}}</option>\r\n                            </select>\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('sublist').valid && (regularForm.get('sublist').dirty || regularForm.get('sublist').touched)\">Please enter valid phone number!</small>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label>Address</label>\r\n                            <input class=\"form-control\" id=\"address\" formControlName=\"address\" ngx-google-places-autocomplete [options]='options' #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\"/>\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('address').valid && (regularForm.get('address').dirty || regularForm.get('address').touched)\">Please enter a valid address!</small>\r\n                        </div>\r\n                        <div class=\"form-group\" *ngIf=\"isSuperAdmin\">\r\n                            <label for=\"role\">Role</label>\r\n                            <select class=\"form-control\" id=\"role\" formControlName=\"role\">\r\n                                <option disabled=\"true\">Select Role</option>\r\n                                <option *ngFor=\"let role of roles\" value=\"{{role.id}}\">{{role.name}}</option>\r\n                            </select>\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('role').valid && (regularForm.get('role').dirty || regularForm.get('role').touched)\">Please select a role!</small>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\" *ngIf=\"isSuperAdmin\">\r\n                            <label for=\"organization\">Organization</label>\r\n                            <select class=\"form-control\" id=\"organization\" formControlName=\"organization\">\r\n                                <option disabled=\"true\">Select Organization</option>\r\n                                <option *ngFor=\"let organization of organizations\" value=\"{{organization.id}}\">{{organization.name}}</option>\r\n                            </select>\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('organization').valid && (regularForm.get('organization').dirty || regularForm.get('organization').touched)\">Please select an organization!</small>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <button type=\"button\" class=\"btn btn-danger btn-raised  mr-1\" (click)=\"cancelEdit()\">Cancel</button>\r\n                            <button type=\"submit\" class=\"btn btn-success btn-raised\" [disabled]=\"!regularForm.valid || submitted\">Submit <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i></button>\r\n                        </div>\r\n                    </form>\r\n\r\n                    <!-- <form [formGroup]=\"regularForm1\" (ngSubmit)=\"onReactiveFormSubmit()\" novalidate *ngIf=\"isSuperAdmin\">\r\n                        <small class=\"form-text text-muted danger\" *ngIf=\"usernameerror\">Username Already Exits.<br/><br/></small>\r\n                        <small class=\"form-text text-muted danger\" *ngIf=\"emailerror\">Email Already Exits.<br/><br/></small>\r\n                        <div class=\"form-group\">\r\n                            <label>Username</label>\r\n                            <input class=\"form-control\" id=\"username\" formControlName=\"username\" placeholder=\"Enter Username\" type=\"text\">\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm1.get('username').valid && (regularForm1.get('username').dirty || regularForm1.get('username').touched)\">Please enter a valid username!</small>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label>Password</label>\r\n                            <input class=\"form-control\" id=\"password\" formControlName=\"password\" placeholder=\"Enter Password\" type=\"password\">\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm1.get('password').valid && (regularForm1.get('password').dirty || regularForm1.get('password').touched)\">Please enter a valid password!</small>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label>First Name</label>\r\n                            <input class=\"form-control\" id=\"firstName\" formControlName=\"firstName\" placeholder=\"Enter First Name\" type=\"text\">\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm1.get('firstName').valid && (regularForm1.get('firstName').dirty || regularForm1.get('firstName').touched)\">Please enter a valid firstName!</small>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label>Last Name</label>\r\n                            <input class=\"form-control\" id=\"lastName\" formControlName=\"lastName\" placeholder=\"Enter Last Name\" type=\"text\">\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm1.get('lastName').valid && (regularForm1.get('lastName').dirty || regularForm1.get('lastName').touched)\">Please enter a valid lastName!</small>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label>Email</label>\r\n                            <input class=\"form-control\" id=\"email\" formControlName=\"email\" placeholder=\"Enter Email\" type=\"email\">\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm1.get('email').valid && (regularForm1.get('email').dirty || regularForm1.get('email').touched)\">Please enter a valid email!</small>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label>DOB</label>\r\n                            <input class=\"form-control\" id=\"dob\" formControlName=\"dob\" type=\"date\">\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm1.get('dob').valid && (regularForm1.get('dob').dirty || regularForm1.get('dob').touched)\">Please enter a valid dob!</small>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label class>Gender</label>\r\n                            <div class=\"custom-control custom-radio display-block\">\r\n                                <input type=\"radio\" id=\"genderRadios1\"  value=\"F\" name=\"genderRadios\" class=\"custom-control-input\">\r\n                                <label class=\"custom-control-label\" for=\"genderRadios1\">Female</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio display-block\">\r\n                                <input type=\"radio\" id=\"genderRadios2\" value=\"M\" name=\"genderRadios\" class=\"custom-control-input\">\r\n                                <label class=\"custom-control-label\" for=\"genderRadios2\">Male</label>\r\n                            </div>\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm1.get('genderRadios').valid && (regularForm1.get('genderRadios').dirty || regularForm1.get('genderRadios').touched)\">Please choose Gender!</small>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label>Phone</label>\r\n                            <input class=\"form-control\" id=\"phone\" formControlName=\"phone\" type=\"text\">\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm1.get('phone').valid && (regularForm1.get('phone').dirty || regularForm1.get('phone').touched)\">Please enter valid phone number!</small>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label>Subscriber List</label>\r\n                            <select class=\"form-control\" id=\"sublist\" formControlName=\"sublist\">\r\n                                <option disabled=\"true\">Select Subscriber</option>\r\n                                <option *ngFor=\"let list of listDetails\" value=\"{{list.id}}\">{{list.name}}</option>\r\n                            </select>\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm1.get('sublist').valid && (regularForm1.get('sublist').dirty || regularForm1.get('sublist').touched)\">Please select a Subscriber!</small>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label>Address</label>\r\n                            <input class=\"form-control\" id=\"address\" formControlName=\"address\" ngx-google-places-autocomplete [options]='options' #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\"/>\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm1.get('address').valid && (regularForm1.get('address').dirty || regularForm1.get('address').touched)\">Please enter a valid address!</small>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label for=\"role\">Role</label>\r\n                            <select class=\"form-control\" id=\"role\" formControlName=\"role\">\r\n                                <option disabled=\"true\">Select Role</option>\r\n                                <option *ngFor=\"let role of roles\" value=\"{{role.id}}\">{{role.name}}</option>\r\n                            </select>\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm1.get('role').valid && (regularForm1.get('role').dirty || regularForm1.get('role').touched)\">Please select a role!</small>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label for=\"organization\">Organization</label>\r\n                            <select class=\"form-control\" id=\"organization\" formControlName=\"organization\">\r\n                                <option disabled=\"true\">Select Organization</option>\r\n                                <option *ngFor=\"let organization of organizations\" value=\"{{organization.id}}\">{{organization.name}}</option>\r\n                            </select>\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm1.get('organization').valid && (regularForm1.get('organization').dirty || regularForm1.get('organization').touched)\">Please select an organization!</small>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <button type=\"button\" class=\"btn btn-danger btn-raised  mr-1\" (click)=\"cancelEdit()\">Cancel</button>\r\n                            <button type=\"submit\" class=\"btn btn-success btn-raised\" [disabled]=\"!regularForm1.valid\">Submit</button>\r\n                        </div>\r\n                    </form> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/users/add-users/add-users.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/users/add-users/add-users.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2FkZC11c2Vycy9hZGQtdXNlcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/users/add-users/add-users.component.ts":
/*!********************************************************!*\
  !*** ./src/app/users/add-users/add-users.component.ts ***!
  \********************************************************/
/*! exports provided: AddUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUsersComponent", function() { return AddUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_data_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/data/user.service */ "./src/app/shared/data/user.service.ts");
/* harmony import */ var _shared_data_lists_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/data/lists.service */ "./src/app/shared/data/lists.service.ts");
/* harmony import */ var _shared_data_organization_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/data/organization.service */ "./src/app/shared/data/organization.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddUsersComponent = /** @class */ (function () {
    function AddUsersComponent(userservice, organizationservice, router, route, listsservice) {
        this.userservice = userservice;
        this.organizationservice = organizationservice;
        this.router = router;
        this.route = route;
        this.listsservice = listsservice;
        this.usernameerror = false;
        this.emailerror = false;
        this.options = {
            types: ['geocode'],
            componentRestrictions: { country: 'AU' }
        };
        this.submitted = false;
        this.isSuperAdmin = false;
        var users = JSON.parse(localStorage.getItem('currentUser'));
        if (users) {
            if (users['role_id'] == '2') {
                this.isSuperAdmin = true;
            }
        }
    }
    AddUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.isSuperAdmin) {
            this.regularForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                'firstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
                'dob': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(24)]),
                'lastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                'genderRadios': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Female'),
                'address': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                'sublist': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            }, { updateOn: 'blur' });
        }
        else {
            this.regularForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                'firstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
                'dob': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(24)]),
                'lastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                'genderRadios': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Female'),
                'address': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                'sublist': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                'role': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                'organization': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
                // 'inputEmail': new FormControl(null, [Validators.required, Validators.email]),
                // 'password': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]),
                // 'textArea': new FormControl(null, [Validators.required]),
                // 'radioOption': new FormControl('Option one is this')
            }, { updateOn: 'blur' });
        }
        this.listsservice.getlist(new Date().getTime()).then(function (data) {
            console.log(data['lists']);
            _this.listDetails = data['lists'];
        }, function (error) {
        });
        this.userservice.getGroups().then(function (data) {
            _this.roles = data['groups'];
        });
        this.organizationservice.getOrganization(new Date().getTime()).then(function (data) {
            _this.organizations = data['organization'];
        });
        if (localStorage.getItem('listadmin') == '1') {
            this.showlistadmin = true;
        }
    };
    AddUsersComponent.prototype.handleAddressChange = function (address) {
        // Do some stuff
        this.newaddress = address.formatted_address;
    };
    AddUsersComponent.prototype.onReactiveFormSubmit = function () {
        var _this = this;
        this.submitted = true;
        var role = '';
        var organization = '';
        if (this.regularForm.invalid) {
            return;
        }
        if (!this.showlistadmin) {
            this.listadmin = 3; // users groupid
        }
        if (this.isSuperAdmin) {
            role = this.regularForm.controls['role'].value;
            organization = this.regularForm.controls['organization'].value;
        }
        else {
            role = this.listadmin;
            organization = '';
        }
        var userDetail = {
            username: this.regularForm.controls['username'].value,
            password: this.regularForm.controls['password'].value,
            firstName: this.regularForm.controls['firstName'].value,
            lastName: this.regularForm.controls['lastName'].value,
            email: this.regularForm.controls['email'].value,
            dob: this.regularForm.controls['dob'].value,
            genderRadios: this.regularForm.controls['genderRadios'].value,
            address: this.newaddress,
            phone: this.regularForm.controls['phone'].value,
            profileImage: '',
            sublist: this.regularForm.controls['sublist'].value,
            type: '',
            role: role,
            organization: organization
        };
        this.userservice.addUser(userDetail).then(function (data) {
            if (data['status'] == "success") {
                _this.router.navigate(['/users/users']);
            }
            else if (data['status'] == "Failed") {
            }
            else if (data['status'] == "User Exits") {
                if (data['value'] == "Username Already Exits.") {
                    _this.usernameerror = true;
                    //this.snotifyService.success('User Subscription Was Successfully', '', this.getConfig());
                    _this.emailerror = false;
                }
                else {
                    _this.emailerror = true;
                    _this.usernameerror = false;
                }
            }
        });
    };
    AddUsersComponent.prototype.change = function (e) {
        if (e.target.checked) {
            this.listadmin = 4; // list admin groupid
        }
        else {
            this.listadmin = 3; // users groupid
        }
    };
    AddUsersComponent.prototype.cancelEdit = function () {
        this.regularForm.reset();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], AddUsersComponent.prototype, "floatingLabelForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('vform'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], AddUsersComponent.prototype, "validationForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("placesRef"),
        __metadata("design:type", ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__["GooglePlaceDirective"])
    ], AddUsersComponent.prototype, "placesRef", void 0);
    AddUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-users',
            template: __webpack_require__(/*! ./add-users.component.html */ "./src/app/users/add-users/add-users.component.html"),
            styles: [__webpack_require__(/*! ./add-users.component.scss */ "./src/app/users/add-users/add-users.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_data_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _shared_data_organization_service__WEBPACK_IMPORTED_MODULE_6__["OrganizationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_data_lists_service__WEBPACK_IMPORTED_MODULE_5__["ListsService"]])
    ], AddUsersComponent);
    return AddUsersComponent;
}());



/***/ }),

/***/ "./src/app/users/checkin/checkin.component.html":
/*!******************************************************!*\
  !*** ./src/app/users/checkin/checkin.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"paging\" class=\"mb-3\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"content-header\">Check In Members</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"card\">\r\n                <label for=\"memType\">Start Date</label>\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"popupModel.dp\" ngbDatepicker #d2=\"ngbDatepicker\" />\r\n                  <div class=\"input-group-append\">\r\n                    <div class=\"input-group-text\" (click)=\"d2.toggle()\">\r\n                      <i class=\"fa fa-calendar\" style=\"cursor: pointer;\"></i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"card\">\r\n                <label for=\"memType\">End Date</label>\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp1\" [(ngModel)]=\"popupModel.dp1\" ngbDatepicker #d1=\"ngbDatepicker\" />\r\n                  <div class=\"input-group-append\">\r\n                    <div class=\"input-group-text\" (click)=\"d1.toggle()\">\r\n                      <i class=\"fa fa-calendar\" style=\"cursor: pointer;\"></i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"card px-1\">\r\n                <button type=\"button\" class=\"btn btn-info btn-raised\" (click)=\"dateFilters()\" style=\"margin-right: 14px;\">Search</button>\r\n                <button type=\"button\" class=\"btn btn-info btn-raised\" (click)=\"clearFilters()\" style=\"margin-right: 14px;\">Reset</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-3\">\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" (keyup)='updateFilter($event)' [(ngModel)]=\"search\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n              <ngx-datatable #table class='material bootstrap' [rows]='dataSource' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"10\">\r\n                <ngx-datatable-column name=\"Member Name\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    {{row.membername}}\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"Member Number\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    {{row.membernumber}}\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <!-- <ngx-datatable-column name=\"Visitors Details\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  {{ row.visitorsdetails | json }}\r\n                </ng-template>\r\n              </ngx-datatable-column> -->\r\n                <ngx-datatable-column name=\"Visitors Details\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    {{ getVisitorStyle(row.visitorsdetails) }}\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"Check In Date\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    {{row.checkindate}}\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n              </ngx-datatable>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/users/checkin/checkin.component.scss":
/*!******************************************************!*\
  !*** ./src/app/users/checkin/checkin.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NoZWNraW4vY2hlY2tpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/users/checkin/checkin.component.ts":
/*!****************************************************!*\
  !*** ./src/app/users/checkin/checkin.component.ts ***!
  \****************************************************/
/*! exports provided: CheckinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinComponent", function() { return CheckinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_data_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data/user.service */ "./src/app/shared/data/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckinComponent = /** @class */ (function () {
    function CheckinComponent(userservice) {
        this.userservice = userservice;
        this.dataSource = [];
        this.originalDataSource = [];
        this.filteredData = [];
        this.collectionSize = 0;
        this.columns = [
            { name: 'Member Name', width: 40 },
            { name: 'Member Number', width: 40 },
            { name: 'Visitors Details', width: 80 },
            { name: 'Check In Date', width: 80 }
        ];
        this.popupModel = {
            'dp': '',
            'dp1': ''
        };
        this.search = '';
    }
    CheckinComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userservice.getcheckin(new Date().getTime()).then(function (data) {
            console.log(data['user']);
            if (data['status'] == 'success') {
                _this.dataSource = data['user'];
                _this.originalDataSource = data['user'];
                _this.filteredData = data['user'];
                _this.collectionSize = data['user'].length;
            }
        }, function (error) {
        });
    };
    CheckinComponent.prototype.getVisitorStyle = function (visitors) {
        var visitor = '';
        //let visitordata = JSON.parse(visitors);
        if (visitors != null) {
            for (var i = 0; i <= visitors.length - 1; i++) {
                if (visitors[i].name != '') {
                    visitor += 'Guest ' + i + ' :- ' + visitors[i].name + ' , ' + visitors[i].phone;
                    if (i + 1 < visitors.length) {
                        visitor += ' / ';
                    }
                }
                else {
                    visitor = '-';
                }
            }
        }
        else {
            visitor = '-';
        }
        return visitor;
    };
    CheckinComponent.prototype.updateFilter = function (event) {
        if (event.target.value != '') {
            this.search = event.target.value.toLowerCase();
            var val_1 = event.target.value.toLowerCase();
            var keys_1 = Object.keys(this.dataSource[0]);
            var colsAmt_1 = keys_1.length;
            this.dataSource = this.filteredData.filter(function (item) {
                for (var i = 0; i <= colsAmt_1 - 1; i++) {
                    if (keys_1[i] !== 'visitorsdetails' && keys_1[i] !== 'checkindate') {
                        if (item[keys_1[i]] != '' && item[keys_1[i]] != null) {
                            if (item[keys_1[i]].toLowerCase().indexOf(val_1) !== -1 || !val_1) {
                                return true;
                            }
                        }
                    }
                }
            });
        }
        else {
            this.dataSource = this.originalDataSource;
        }
        this.table.offset = 0;
    };
    CheckinComponent.prototype.dateFilters = function () {
        var _this = this;
        var startDate = new Date(this.popupModel.dp['year'] + '-' + this.popupModel.dp['month'] + '-' + this.popupModel.dp['day']).getTime();
        //this.popupModel.dp = stDate;
        var endDate = new Date(this.popupModel.dp1['year'] + '-' + this.popupModel.dp1['month'] + '-' + this.popupModel.dp1['day']).getTime();
        this.userservice.getcheckinbyDates(new Date().getTime(), startDate, endDate).then(function (data) {
            console.log(data['user']);
            if (data['status'] == 'success') {
                _this.dataSource = data['user'];
                _this.originalDataSource = data['user'];
                _this.filteredData = data['user'];
                _this.collectionSize = data['user'].length;
                // if(this.search != ''){
                //   let keys = Object.keys(this.dataSource[0]);
                //   let colsAmt = keys.length;
                //   this.dataSource = this.filteredData.filter(function(item){
                //     for (let i=0; i<=colsAmt-1; i++){
                //       if (keys[i] !== 'visitorsdetails' && keys[i] !== 'checkindate'){
                //         if(item[keys[i]] != '' && item[keys[i]] != null){
                //           if(item[keys[i]].toLowerCase().indexOf(this.search) !== -1 || !this.search){
                //             return true;
                //           }
                //         }
                //       }
                //     }
                //   });
                // }
            }
        }, function (error) {
        });
        // this.dataSource = this.filteredData.filter(d => {
        //   var time = new Date(d.checkindate).getTime();
        //   return (d.checkindate >= this.popupModel.dp['year']+'-'+this.popupModel.dp['month']+'-'+this.popupModel.dp['day'] && d.checkindate <= this.popupModel.dp1['year']+'-'+this.popupModel.dp1['month']+'-'+this.popupModel.dp1['day']);
        // });
        // this.dataSource = this.filteredData.filter(function (a){
        //   return (a.checkindate) >= '2021-05-12' && (a.ProductHits) <= '2021-05-08';
        // });
        this.table.offset = 0;
    };
    CheckinComponent.prototype.clearFilters = function () {
        this.popupModel.dp = '';
        this.popupModel.dp1 = '';
        this.dataSource = this.originalDataSource;
        this.filteredData = this.originalDataSource;
        this.search = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"])
    ], CheckinComponent.prototype, "table", void 0);
    CheckinComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkin',
            template: __webpack_require__(/*! ./checkin.component.html */ "./src/app/users/checkin/checkin.component.html"),
            styles: [__webpack_require__(/*! ./checkin.component.scss */ "./src/app/users/checkin/checkin.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_data_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], CheckinComponent);
    return CheckinComponent;
}());



/***/ }),

/***/ "./src/app/users/edit-user/edit-user.component.html":
/*!**********************************************************!*\
  !*** ./src/app/users/edit-user/edit-user.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"content-header\">Edit User</div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" id=\"edituser\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xl-3\">\r\n              <a class=\"profile-image\">\r\n                <img src=\"{{userImage}}\" class=\"rounded-circle img-border gradient-summer width-100\"><br>\r\n              </a>\r\n            </div>\r\n            <div class=\"col-xl-3\">\r\n              <ul style=\"list-style: none !important;\">\r\n                <li class=\"text-uppercase font-medium-3\">{{userModel.name}}</li>\r\n                <li>Membership Card - {{userModel.subId}}</li>\r\n                <li><img src=\"assets/img/phone.jpg\"> {{userModel.phone}}</li>\r\n                <li><img src=\"assets/img/l1.jpg\"> {{userModel.address}}</li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"col-xl-6\">\r\n              <ul style=\"list-style: none !important;\">\r\n                <li class=\"text-uppercase\">List Subscription Count : {{listSubCount}}</li>\r\n                <li class=\"text-uppercase\" *ngFor=\"let detail of newsLetterDetails\">{{detail.text}} : {{detail.count}}</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <ngb-tabset>\r\n                <ngb-tab title=\"Overview\">\r\n                  <ng-template ngbTabContent>\r\n                    <form #edituser=\"ngForm\" class=\"editForm\" novalidate>\r\n                      <!-- <form #edituser=\"ngForm\" class=\"editForm\" *ngIf=\"!isSuperAdmin\" novalidate> -->\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                          <div class=\"form-group\">\r\n                            <label>Username</label>\r\n                            <input required [(ngModel)]=\"userModel.username\" name=\"username\" #username=\"ngModel\" [ngClass]=\"{ 'is-invalid': edituser.submitted && username.invalid }\" class=\"form-control\" id=\"username\" placeholder=\"Enter Username\"\r\n                              type=\"text\">\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"edituser.submitted && username.invalid\">Please enter a valid username!</small>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                          <div class=\"form-group\">\r\n                            <label>Password</label>\r\n                            <input required [(ngModel)]=\"userModel.password\" [ngClass]=\"{ 'is-invalid': edituser.submitted && password.invalid }\" class=\"form-control\" id=\"password\" name=\"password\" #password=\"ngModel\" placeholder=\"Enter Password\"\r\n                              minlength=\"4\" maxlength=\"24\" type=\"password\">\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"password.errors?.minlength\">Password characters length must be between 4 and 24 !</small>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                          <div class=\"form-group\">\r\n                            <label>First Name</label>\r\n                            <input required [(ngModel)]=\"userModel.firstName\" #firstName=\"ngModel\" [ngClass]=\"{ 'is-invalid': edituser.submitted && firstName.invalid }\" class=\"form-control\" id=\"firstName\" name=\"firstName\"\r\n                              placeholder=\"Enter First Name\" type=\"text\">\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"edituser.submitted && firstName.invalid\">Please enter a valid firstName!</small>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                          <div class=\"form-group\">\r\n                            <label>Last Name</label>\r\n                            <input [(ngModel)]=\"userModel.lastName\" #lastName=\"ngModel\" [ngClass]=\"{ 'is-invalid': edituser.submitted && lastName.invalid }\" class=\"form-control\" id=\"lastName\" name=\"lastName\" placeholder=\"Enter Last Name\" type=\"text\">\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"edituser.submitted && lastName.invalid\">Please enter a valid lastName!</small>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                          <div class=\"form-group\">\r\n                            <label>Email</label>\r\n                            <input [(ngModel)]=\"userModel.email\" #email=\"ngModel\" class=\"form-control\" id=\"email\" name=\"email\" email placeholder=\"Enter Email\" type=\"email\" [readOnly]=\"onlyUserEdit\">\r\n                            <!-- <small class=\"form-text text-muted danger\" *ngIf=\"edituser.submitted && email.invalid\">Please enter a valid email!</small> -->\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                          <div class=\"form-group\">\r\n                            <label>DOB</label>\r\n                            <input [(ngModel)]=\"userModel.dob\" #dob=\"ngModel\" class=\"form-control\" id=\"dob\" name=\"dob\" type=\"date\">\r\n                            <!-- <small class=\"form-text text-muted danger\" *ngIf=\"edituser.submitted && dob.invalid\">Please enter a valid dob!</small> -->\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                          <div class=\"form-group\">\r\n                            <label class>Gender</label>\r\n                            <div class=\"custom-control custom-radio display-block\">\r\n                              <input type=\"radio\" id=\"Female\" value=\"Female\" name=\"genderRadios\" #genderRadios=\"ngModel\" class=\"custom-control-input\" required [(ngModel)]=\"userModel.genderRadios\">\r\n                              <label class=\"custom-control-label\" for=\"Female\">Female</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio display-block\">\r\n                              <input type=\"radio\" id=\"Male\" value=\"Male\" name=\"genderRadios\" #genderRadios=\"ngModel\" class=\"custom-control-input\" [(ngModel)]=\"userModel.genderRadios\">\r\n                              <label class=\"custom-control-label\" for=\"Male\">Male</label>\r\n                            </div>\r\n                            <!-- <small class=\"form-text text-muted danger\" *ngIf=\"edituser.submitted && genderRadios.invalid\">Please choose Gender!</small> -->\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                          <div class=\"form-group\">\r\n                            <label>Phone</label>\r\n                            <input required [(ngModel)]=\"userModel.phone\" #phone=\"ngModel\" [ngClass]=\"{ 'is-invalid': edituser.submitted && phone.invalid }\" class=\"form-control\" id=\"phone\" name=\"phone\" type=\"text\" pattern=\"^\\s*(?:[A-Z0-9]\\s*){2,10}$\"\r\n                              (keypress)=\"isNumberKey($event)\">\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"edituser.submitted && phone.invalid\">Please enter valid phone number!</small>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                          <div class=\"form-group\">\r\n                            <label>Address</label>\r\n                            <input required [(ngModel)]=\"userModel.address\" #address=\"ngModel\" [ngClass]=\"{ 'is-invalid': edituser.submitted && address.invalid }\" class=\"form-control\" id=\"address\" name=\"address\" ngx-google-places-autocomplete\r\n                              [options]='options' #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\" />\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"edituser.submitted && address.invalid\">Please enter a valid address!</small>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                          <div class=\"form-group\">\r\n                            <label>Select Membership</label>\r\n                            <select required [(ngModel)]=\"userModel.membership\" [ngClass]=\"{ 'is-invalid': edituser.submitted && membership.invalid }\" (change)=\"setMembership($event)\" class=\"form-control\" id=\"membership\" #membership=\"ngModel\"\r\n                              [disabled]=\"onlyUserEdit\" name=\"membership\">\r\n                              <option value=''>Select List</option>\r\n                              <option *ngFor=\"let member of members\" value=\"{{member.id}}\">{{member.plans}}</option>\r\n                            </select>\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"(edituser.submitted && membership.invalid && membership.value == '')\">Please select a Membership.</small>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                          <div class=\"form-group\">\r\n                            <label>Membership Card</label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Membership Card\" required [(ngModel)]=\"userModel.subId\" id=\"subId\" #subId=\"ngModel\" name=\"subId\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                          <div class=\"form-group\">\r\n                            <label>Confirm Membership Fees Paid</label>\r\n                            <div class=\"custom-control custom-radio display-block\">\r\n                              <input type=\"radio\" id=\"y\" value=\"y\" name=\"paymentRadios\" class=\"custom-control-input\" required [(ngModel)]=\"userModel.paymentRadios\" #paymentRadios=\"ngModel\"\r\n                                [ngClass]=\"{ 'is-invalid': edituser.submitted && paymentRadios.invalid }\">\r\n                              <label class=\"custom-control-label\" for=\"y\">Yes</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio display-block\">\r\n                              <input type=\"radio\" id=\"n\" value=\"n\" name=\"paymentRadios\" class=\"custom-control-input\" required [(ngModel)]=\"userModel.paymentRadios\" #paymentRadios=\"ngModel\"\r\n                                [ngClass]=\"{ 'is-invalid': edituser.submitted && paymentRadios.invalid }\">\r\n                              <label class=\"custom-control-label\" for=\"n\">No</label>\r\n                            </div>\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"edituser.submitted && userModel.membership != '' && paymentRadios.invalid\">Please Select!</small>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\" *ngIf=\"userModel.paymentRadios == 'y'\">\r\n                          <div class=\"form-group\">\r\n                            <label>Add Receipt Number</label>\r\n                            <div class=\"custom-control custom-radio display-block\">\r\n                              <input type=\"text\" name=\"receiptNumber\" placeholder=\"Enter Receipt Number\" class=\"form-control\" required [(ngModel)]=\"userModel.receiptNumber\" [ngClass]=\"{ 'is-invalid': edituser.submitted && receiptNumber.invalid }\">\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row\" *ngIf=\"extraFields\">\r\n                        <div class=\"col-md-12\">\r\n                          <h4 class=\"form-section\">Extra Fields</h4>\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-6\" *ngFor=\"let field of addFields;let i = index\">\r\n                              <div class=\"form-group\" *ngIf=\"field.fieldType == 'text'\">\r\n                                <label>{{field.label}}</label>\r\n                                <input class=\"form-control\" name=\"{{field.fieldName}}\" value=\"{{field.valuesBind}}\" [(ngModel)]=\"field.valuesBind\" type=\"text\" minlength=\"1\" maxlength=\"{{field.length}}\" [required]=\"field.mandatory\"\r\n                                  (change)=\"fieldValueChange(field.id,$event.target.value, field.fieldName)\">\r\n                                <small *ngIf=\"field.validation || edituser.submitted && (field.fieldName.invalid)\" class=\"form-text text-muted danger\">{{field.validationMsg}}</small>\r\n                              </div>\r\n                              <div class=\"form-group\" *ngIf=\"field.fieldType == 'date'\">\r\n                                <label>{{field.label}}</label>\r\n                                <input class=\"form-control\" name=\"{{field.fieldName}}\" value=\"{{field.valuesBind}}\" [(ngModel)]=\"field.valuesBind\" type=\"date\" [required]=\"field.mandatory\"\r\n                                  (change)=\"fieldValueChange(field.id,$event.target.value, field.fieldName)\">\r\n                                <small *ngIf=\"field.validation || edituser.submitted && (dateValue.invalid)\" class=\"form-text text-muted danger\">{{field.validationMsg}}</small>\r\n                              </div>\r\n                              <div class=\"form-group\" *ngIf=\"field.fieldType == 'number'\">\r\n                                <label>{{field.label}}</label>\r\n                                <input class=\"form-control\" value=\"{{field.valuesBind}}\" name=\"{{field.fieldName}}\" #numbererrorValue=\"ngModel\" [(ngModel)]=\"field.valuesBind\" minlength=\"0\" maxlength=\"{{field.length}}\" #numbererrorValue=\"ngModel\"\r\n                                  [required]=\"field.mandatory\" (change)=\"fieldValueChange(field.id,$event.target.value, field.fieldName)\" (keypress)=\"isNumberKey($event)\">\r\n                                <!-- <input class=\"form-control\" name=\"numberValue\" [(ngModel)]=\"lists.numberValue\" *ngIf=\"field.length == '' && field.length <= 0\" type=\"text\" pattern=\"[0-9]\" [required]=\"field.mandatory\" (change)=\"fieldValueChange(field.id,$event.target.value, field.fieldName)\"> -->\r\n                                <small *ngIf=\"field.length != '' && field.length > 0\" class=\"form-text text-muted danger\">Field Length Should not exceed {{field.length}}</small>\r\n                                <small *ngIf=\"field.validation || edituser.submitted && (numbererrorValue.errors)\" class=\"form-text text-muted danger\">{{field.validationMsg}}</small>\r\n                              </div>\r\n                              <div class=\"form-group\" *ngIf=\"field.fieldType == 'float'\">\r\n                                <label>{{field.label}}</label>\r\n                                <input class=\"form-control\" value=\"{{field.valuesBind}}\" name=\"{{field.fieldName}}\" #floaterrorValue=\"ngModel\" [(ngModel)]=\"field.valuesBind\" minlength=\"0\" maxlength=\"{{field.length}}\" #floaterrorValue=\"ngModel\"\r\n                                  [required]=\"field.mandatory\" (change)=\"fieldValueChange(field.id,$event.target.value, field.fieldName)\" (keypress)=\"isNumberKey($event)\">\r\n                                <!-- <input class=\"form-control\" name=\"floatValue\" [(ngModel)]=\"lists.floatValue\" maxlength=\"{{field.length}}\" *ngIf=\"field.length != '' && field.length > 0\" pattern=\"/^[0-9]+(\\.[0-9]{1,2})?$/\" (change)=\"fieldValueChange(field.id,$event.target.value, field.fieldName)\" type=\"text\" [required]=\"field.mandatory\">\r\n                                            <input class=\"form-control\" name=\"floatValue\" [(ngModel)]=\"lists.floatValue\" *ngIf=\"field.length == '' && field.length <= 0\" pattern=\"/^[0-9]+(\\.[0-9]{1,2})?$/\" (change)=\"fieldValueChange(field.id,$event.target.value, field.fieldName)\" type=\"text\" [required]=\"field.mandatory\"> -->\r\n                                <small *ngIf=\"field.length != '' && field.length > 0\" class=\"form-text text-muted danger\">Field Length Should not exceed {{field.length}}</small>\r\n                                <small *ngIf=\"field.validation || edituser.submitted && (floaterrorValue.errors)\" class=\"form-text text-muted danger\">{{field.validationMsg}}</small>\r\n                              </div>\r\n                              <div class=\"form-group\" *ngIf=\"field.fieldType == 'toggle'\">\r\n                                <label>{{field.label}}</label>\r\n                                <ui-switch name=\"{{field.fieldName}}\" [(ngModel)]=\"field.valuesBind\" (change)=\"fieldValueChange(field.id,$event, field.fieldName)\" [required]=\"field.mandatory\"></ui-switch>\r\n                                <small *ngIf=\"field.validation || edituser.submitted && (toggleValue.invalid)\" class=\"form-text text-muted danger\">{{field.validationMsg}}</small>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <small class=\"form-text text-muted danger\" *ngIf=\"usernameerror\">Username Already Exists.<br /><br /></small>\r\n                      <small class=\"form-text text-muted danger\" *ngIf=\"emailerror\">Email Already Exists.<br /><br /></small>\r\n                      <small class=\"form-text text-muted danger\" *ngIf=\"dateerror\">Your age must be 18 or older.<br /><br /></small>\r\n                      <div class=\"form-group\">\r\n                        <button type=\"button\" class=\"btn btn-danger btn-raised  mr-1\" (click)=\"cancelEdit()\">Cancel</button>\r\n                        <button type=\"submit\" class=\"btn btn-success btn-raised\" [disabled]=\"!edituser.valid || submitted\" (click)=\"onReactiveFormSubmit()\">Submit <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i></button>\r\n                      </div>\r\n                    </form>\r\n                  </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab title=\"List Memberships\">\r\n                  <ng-template ngbTabContent>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12\">\r\n                        <p class=\"content-header\">List Subscription By {{user.name}}</p>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                              <label>Subscriber List</label>\r\n                              <ngx-select-dropdown [config]=\"config\" [options]=\"listDetails\" name=\"sublistid\" [(ngModel)]=\"subscriberListName\" (ngModelChange)=\"selected($event)\" [multiple]=\"true\"></ngx-select-dropdown>\r\n                              <!-- <select class=\"form-control\" id=\"sublistid\" name=\"sublistid\" [(ngModel)]=\"listSubid.sublistid\">\r\n                                           <option selected value=\"\">Select List</option>\r\n                                           <option *ngFor=\"let list of listDetails\" value=\"{{list.id}}\">{{list.name}}</option>\r\n                                           </select> -->\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-6\">\r\n                            <button type=\"submit\" class=\"btn btn-success btn-raised\" (click)=\"subscribeUsers()\" [disabled]=\"listSubid.sublistid == ''\">Subscriber User</button>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"card\">\r\n                          <div class=\"card-body\">\r\n                            <div class=\"card-block\">\r\n                              <!-- <form (ngSubmit)=\"editSubscription()\"> -->\r\n                              <div class=\"row\" *ngFor=\"let list of listSub\">\r\n                                <div class=\"col-md-6\">\r\n                                  <div class=\"form-group\">\r\n                                    <label>Subscribed To {{list.list}}</label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                  <div class=\"form-group\">\r\n                                    <ui-switch [(ngModel)]=\"list.subscribe\" (ngModelChange)=\"unsubscribe($event, list.subid, list.id)\"></ui-switch>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab title=\"Loyalty Points\">\r\n                  <ng-template ngbTabContent>\r\n                    <p class=\"content-header\">Loyaty Points Redeemed By {{user.name}}</p>\r\n                    <div class=\"card\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                          <ngx-datatable class=\"material\" class=\"bootstrap\" [rows]=\"loyaltyPointDisplay\" [columns]=\"loyaltyPointsColumns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"50\"\r\n                            [sorts]=\"[{prop: ['loyalty', 'points_redeemed', 'remaining_points', 'redeemed_on'], dir: 'desc'}]\" [limit]=\"10\">\r\n                            <ngx-datatable-column name=\"Loyalty\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                {{row.loyalty}}\r\n                              </ng-template>\r\n                            </ngx-datatable-column>\r\n                            <ngx-datatable-column name=\"Redeemed Points\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                {{row.points_redeemed}}\r\n                              </ng-template>\r\n                            </ngx-datatable-column>\r\n                            <ngx-datatable-column name=\"Remaining Points\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                {{row.remaining_points}}\r\n                              </ng-template>\r\n                            </ngx-datatable-column>\r\n                            <ngx-datatable-column name=\"Redeemed On\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                {{row.redeemed_on | date: 'MM/dd/yyyy'}}\r\n                              </ng-template>\r\n                            </ngx-datatable-column>\r\n                          </ngx-datatable>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"card\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                          <p class=\"content-header\">Loyaty Points Earned By {{user.name}}</p>\r\n                          <ngx-datatable class=\"material\" class=\"bootstrap\" [rows]=\"loyaltyPointEarned\" [columns]=\"loyaltyPointsEarnedColumns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"50\"\r\n                            [sorts]=\"[{prop: ['loyalty', 'points_redeemed', 'remaining_points', 'redeemed_on'], dir: 'desc'}]\" [limit]=\"10\">\r\n                            <ngx-datatable-column name=\"Loyalty\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                {{row.loyalty}}\r\n                              </ng-template>\r\n                            </ngx-datatable-column>\r\n                            <ngx-datatable-column name=\"Points Earned\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                {{row.points}}\r\n                              </ng-template>\r\n                            </ngx-datatable-column>\r\n                            <ngx-datatable-column name=\"Transaction Id\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                {{row.points}}\r\n                              </ng-template>\r\n                            </ngx-datatable-column>\r\n                          </ngx-datatable>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab title=\"Transactions\">\r\n                  <ng-template ngbTabContent>\r\n                    <p class=\"content-header\">Transaction Of {{user.name}}</p>\r\n                    <div class=\"text-right\">\r\n                      <!-- <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-bitbucket float-right\" (click)=\"addTransaction = !addTransaction\"><span class=\"ft-plus\"></span> Add Transaction</a> -->\r\n                    </div>\r\n                    <div class=\"card\">\r\n                      <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                          <div class=\"row\" *ngIf=\"addTransaction\">\r\n                            <form [formGroup]=\"transactionForm\" (ngSubmit)=\"onTransactionFormSubmit(this.value)\" novalidate>\r\n                              <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                  <div class=\"form-group\">\r\n                                    <label>Transaction Id</label>\r\n                                    <input class=\"form-control\" id=\"transactionId\" formControlName=\"paymentDetails\" placeholder=\"Enter Transaction Id\" type=\"text\">\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                  <div class=\"form-group\">\r\n                                    <label>Price</label>\r\n                                    <input class=\"form-control\" id=\"price\" formControlName=\"amount\" placeholder=\"Enter the Price of membership\" required type=\"text\">\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                  <div class=\"form-group\">\r\n                                    <input class=\"form-control\" id=\"membershipId\" formControlName=\"membership_id\" readonly type=\"hidden\">\r\n                                  </div>\r\n                                  <div class=\"form-group\">\r\n                                    <input class=\"form-control\" id=\"userId\" formControlName=\"uid\" readonly type=\"hidden\">\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <button type=\"submit\" class=\"btn btn-success btn-raised\" [disabled]=\"!transactionForm.valid || submitted\">Submit <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i></button>\r\n                              </div>\r\n                            </form>\r\n                          </div>\r\n                          <ngx-datatable *ngIf=\"!addTransaction\" #table class='bootstrap' [rows]=\"transactionData\" [columns]=\"transactionColumns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"10\">\r\n                            <ngx-datatable-column name=\"Transaction Id\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                {{row.transaction_id}}\r\n                              </ng-template>\r\n                            </ngx-datatable-column>\r\n                            <!-- <ngx-datatable-column name=\"User Id\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                {{row.user_id}}\r\n                              </ng-template>\r\n                            </ngx-datatable-column> -->\r\n                            <ngx-datatable-column name=\"Membership\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                {{row.plans}}\r\n                              </ng-template>\r\n                            </ngx-datatable-column>\r\n                            <ngx-datatable-column name=\"Amount\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                {{row.amount}}\r\n                              </ng-template>\r\n                            </ngx-datatable-column>\r\n                            <ngx-datatable-column name=\"Renewal Dtae\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                {{row.renewal_date}}\r\n                              </ng-template>\r\n                            </ngx-datatable-column>\r\n                            <ngx-datatable-column name=\"Expiry Date\">\r\n                              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                {{row.expiry_date}}\r\n                              </ng-template>\r\n                            </ngx-datatable-column>\r\n                          </ngx-datatable>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n                </ngb-tab>\r\n              </ngb-tabset>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- <section id=\"user-area\">\r\n      <div id=\"timeline\">\r\n         <div class=\"card\">\r\n            <div class=\"card-header\">\r\n               <div class=\"card-title-wrap bar-primary\">\r\n                  <div class=\"card-title\">User Timeline</div>\r\n               </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n               <div class=\"card-block\">\r\n                  <div class=\"timeline\">\r\n                     <div class=\"timeline-title d-inline-block  py-1 mb-4 mx-2\">Newsletters</div>\r\n                     <ul class=\"list-unstyled base-timeline activity-timeline\">\r\n                        <li class=\"\" *ngFor=\"let timeLine of timeLines\">\r\n                           <div class=\"timeline-icon bg-primary\" *ngIf=\"timeLine.type == 'newsletter'\">\r\n                              <i class=\"fa fa-envelope\"></i>\r\n                           </div>\r\n                           <div class=\"act-time\" *ngIf=\"timeLine.type == 'newsletter'\">{{timeLine.dateTime}}</div>\r\n                           <div class=\"base-timeline-info\" *ngIf=\"timeLine.type == 'newsletter'\">\r\n                              <a class=\"text-uppercase text-primary\">{{timeLine.name}}</a>\r\n                              <span class=\"d-block\">{{timeLine.description}}</span>\r\n                           </div>\r\n                        </li>\r\n                     </ul>\r\n                     <br>\r\n                     <div class=\"timeline-title d-inline-block  py-1 mb-4 mx-2\">Loyalty Points Redeemed</div>\r\n                     <ul class=\"list-unstyled base-timeline activity-timeline\">\r\n                        <li class=\"\" *ngFor=\"let timeLine of timeLines\">\r\n                           <div class=\"timeline-icon bg-primary\" *ngIf=\"timeLine.type == 'loyalty'\">\r\n                              <i class=\"fa fa-gift\"></i>\r\n                           </div>\r\n                           <div class=\"act-time\" *ngIf=\"timeLine.type == 'loyalty'\">{{timeLine.dateTime}}</div>\r\n                           <div class=\"base-timeline-info\" *ngIf=\"timeLine.type == 'loyalty'\">\r\n                              <a class=\"text-uppercase text-primary\">{{timeLine.name}}</a>\r\n                              <span class=\"d-block\">{{timeLine.description}}</span>\r\n                           </div>\r\n                        </li>\r\n                     </ul>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </section> -->\r\n</div>\r\n<!-- <div class=\"row\" style=\"display: none;\">\r\n   <div class=\"col-sm-12\">\r\n       <div class=\"card\">\r\n           <div class=\"card-body\">\r\n               <div class=\"card-block\">\r\n                   <form [formGroup]=\"regularForm\" (ngSubmit)=\"onReactiveFormSubmit()\" novalidate>\r\n                       <div class=\"form-group\">\r\n                           <label>Username</label>\r\n                           <input class=\"form-control\" id=\"username\" name=\"username\" placeholder=\"Enter Username\" type=\"text\">\r\n                           <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('username').valid && (regularForm.get('username').dirty || regularForm.get('username').touched)\">Please enter a valid username!</small>\r\n                       </div>\r\n\r\n                       <div class=\"form-group\">\r\n                           <label>Password</label>\r\n                           <input class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"Enter Password\" type=\"password\">\r\n                           <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('password').valid && (regularForm.get('password').dirty || regularForm.get('password').touched)\">Please enter a valid password!</small>\r\n                       </div>\r\n\r\n                       <div class=\"form-group\">\r\n                           <label>First Name</label>\r\n                           <input class=\"form-control\" id=\"firstName\" name=\"firstName\" placeholder=\"Enter First Name\" type=\"text\">\r\n                           <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('firstName').valid && (regularForm.get('firstName').dirty || regularForm.get('firstName').touched)\">Please enter a valid firstName!</small>\r\n                       </div>\r\n\r\n                       <div class=\"form-group\">\r\n                           <label>Last Name</label>\r\n                           <input class=\"form-control\" id=\"lastName\" name=\"lastName\" placeholder=\"Enter Last Name\" type=\"text\">\r\n                           <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('lastName').valid && (regularForm.get('lastName').dirty || regularForm.get('lastName').touched)\">Please enter a valid lastName!</small>\r\n                       </div>\r\n\r\n                       <div class=\"form-group\">\r\n                           <label>Email</label>\r\n                           <input class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Enter Email\" type=\"email\">\r\n                           <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('email').valid && (regularForm.get('email').dirty || regularForm.get('email').touched)\">Please enter a valid email!</small>\r\n                       </div>\r\n\r\n                       <div class=\"form-group\">\r\n                           <label>DOB</label>\r\n                           <input class=\"form-control\" id=\"dob\" name=\"dob\" type=\"date\">\r\n                           <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('dob').valid && (regularForm.get('dob').dirty || regularForm.get('dob').touched)\">Please enter a valid dob!</small>\r\n                       </div>\r\n\r\n                       <div class=\"form-group\">\r\n                           <label class>Gender</label>\r\n                           <div class=\"custom-control custom-radio display-block\">\r\n                               <input type=\"radio\" id=\"genderRadios1\" checked=\"{{gender == 'F'}}\" value=\"Female\" name=\"genderRadios\" class=\"custom-control-input\">\r\n                               <label class=\"custom-control-label\" for=\"genderRadios1\">Female</label>\r\n                           </div>\r\n                           <div class=\"custom-control custom-radio display-block\">\r\n                               <input type=\"radio\" id=\"genderRadios2\" checked=\"{{gender == 'M'}}\" value=\"Male\" name=\"genderRadios\" class=\"custom-control-input\">\r\n                               <label class=\"custom-control-label\" for=\"genderRadios2\">Male</label>\r\n                           </div>\r\n                           <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('genderRadios').valid && (regularForm.get('genderRadios').dirty || regularForm.get('genderRadios').touched)\">Please choose Gender!</small>\r\n                       </div>\r\n\r\n                       <div class=\"form-group\">\r\n                           <label>Address</label>\r\n                           <input class=\"form-control\" id=\"address\" name=\"address\" ngx-google-places-autocomplete [options]='options' #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\"/>\r\n                           <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('address').valid && (regularForm.get('address').dirty || regularForm.get('address').touched)\">Please enter a valid address!</small>\r\n                       </div>\r\n                       <div class=\"form-group\">\r\n                           <button type=\"button\" class=\"btn btn-danger btn-raised  mr-1\" (click)=\"cancelEdit()\">Cancel</button>\r\n                           <button type=\"submit\" class=\"btn btn-success btn-raised\" [disabled]=\"!regularForm.valid || submitted\">Submit <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i></button>\r\n                       </div>\r\n                   </form>\r\n               </div>\r\n           </div>\r\n       </div>\r\n   </div>\r\n   </div> -->"

/***/ }),

/***/ "./src/app/users/edit-user/edit-user.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/users/edit-user/edit-user.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2VkaXQtdXNlci9lZGl0LXVzZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/users/edit-user/edit-user.component.ts":
/*!********************************************************!*\
  !*** ./src/app/users/edit-user/edit-user.component.ts ***!
  \********************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_data_loyaltypoint_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/data/loyaltypoint.service */ "./src/app/shared/data/loyaltypoint.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _shared_data_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/data/user.service */ "./src/app/shared/data/user.service.ts");
/* harmony import */ var _shared_data_addFields_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/data/addFields.service */ "./src/app/shared/data/addFields.service.ts");
/* harmony import */ var _shared_data_statistics_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/data/statistics.service */ "./src/app/shared/data/statistics.service.ts");
/* harmony import */ var _shared_data_lists_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/data/lists.service */ "./src/app/shared/data/lists.service.ts");
/* harmony import */ var _shared_data_membership_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/data/membership.service */ "./src/app/shared/data/membership.service.ts");
/* harmony import */ var _shared_data_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/data/authentication.service */ "./src/app/shared/data/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(authenticationService, statisticsService, membershipService, addFieldsService, snotifyService, loyaltyPointService, userservice, router, route, listsservice) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.statisticsService = statisticsService;
        this.membershipService = membershipService;
        this.addFieldsService = addFieldsService;
        this.snotifyService = snotifyService;
        this.loyaltyPointService = loyaltyPointService;
        this.userservice = userservice;
        this.router = router;
        this.route = route;
        this.listsservice = listsservice;
        this.options = {
            types: ['geocode'],
            componentRestrictions: { country: 'AU' }
        };
        this.newaddress = '';
        this.submitted = false;
        this.listSubscription = false;
        this.listSubCount = 0;
        this.addTransaction = false;
        this.loyaltyPointsColumns = [
            { name: 'Name' },
            { name: 'Redeemed Points' },
            { name: 'Remaining Points' },
            { name: 'Redeemed On' }
        ];
        this.transactionColumns = [
            { name: 'Transaction ID' },
            { name: 'User ID' },
            { name: 'Membership ID' },
            { name: 'Amount' },
            { name: 'Renewal Date' },
            { name: 'Expiry Date' }
        ];
        this.listSub = '';
        this.loyaltyPointsEarnedColumns = [
            { name: 'Loyalty' },
            { name: 'Points Earned' },
            { name: 'Transaction ID' }
        ];
        this.timeout = 3000;
        this.position = ng_snotify__WEBPACK_IMPORTED_MODULE_5__["SnotifyPosition"].centerTop;
        this.progressBar = true;
        this.closeClick = true;
        this.newTop = true;
        this.backdrop = -1;
        this.dockMax = 8;
        this.blockMax = 6;
        this.pauseHover = true;
        this.titleMaxLength = 15;
        this.bodyMaxLength = 80;
        this.extraFields = false;
        this.addFields = [];
        this.toggleValue = false;
        this.FieldsValue = [];
        this.dynamicFieldValue = [];
        this.newsLetterDetails = [];
        this.listSubid = {
            'sublistid': [],
            'userId': ''
        };
        this.listDetails = [];
        this.config = {
            displayKey: "description",
            search: true,
            height: 'auto',
            placeholder: 'Select',
            customComparator: function () { },
            limitTo: this.listDetails.length,
            moreText: 'more',
            noResultsFound: 'No results found!',
            searchPlaceholder: 'Search',
            searchOnKey: 'name'
        };
        this.dateerror = false;
        this.userModel = {
            'username': '',
            'firstName': '',
            'email': '',
            'dob': '',
            'password': '',
            'lastName': '',
            'genderRadios': '',
            'address': '',
            'phone': '',
            'textValue': '',
            'dateValue': '',
            'numberValue': '',
            'floatValue': '',
            'toggleValue': '',
            'fields': '',
            'id': '',
            'address1': '',
            'city': '',
            'state': '',
            'postcode': '',
            'country': '',
            'membership': '',
            'roleId': '',
            'subId': '',
            'changeMembership': false,
            'newpaymentRadios': false,
            'paymentRadios': '',
            'receiptNumber': ''
        };
        this.usersModel_extra = {};
        this.subscriberListName = '';
        this.onlyUserEdit = false;
        this.transactionData = [];
        this.changeMembership = false;
        // this.regularForm = new FormGroup({
        //   'username': new FormControl(null, [Validators.required]),
        //   'firstName': new FormControl(null, [Validators.required]),
        //   'email': new FormControl(null, [Validators.required, Validators.email]),
        //   'dob': new FormControl(null, [Validators.required]),
        //   'password': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]),
        //   'lastName': new FormControl(null, [Validators.required]),
        //   'genderRadios': new FormControl(null, [Validators.required]),
        //   'address': new FormControl(null, [Validators.required]),
        //   'phone': new FormControl(null, [Validators.required]),
        //   'textValue': new FormControl(null, null),
        //   'dateValue': new FormControl(null, null),
        //   'numberValue': new FormControl(null, null),
        //   'floatValue': new FormControl(null, null),
        //   'toggleValue': new FormControl(null, null),
        //   //'sublist': new FormControl(null, null),
        //     // 'password': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]),
        //     // 'textArea': new FormControl(null, [Validators.required]),
        //     // 'radioOption': new FormControl('Option one is this')
        // }, {updateOn: 'blur'});
        this.route.queryParams.subscribe(function (params) {
            _this.userId = window.atob(params['id']);
            if (params['source'] == 'user') {
                _this.onlyUserEdit = true;
            }
            else {
                _this.onlyUserEdit = false;
            }
        });
        this.userId = ((this.userId * 12345) / 5362);
        //encodeURIComponent(window.btoa(id+"$userEdit"))
        this.addFieldsService.getFieldsByTable('users').then(function (data) {
            if (data['status'] == 'success') {
                //addFields
                for (var i = 0; i < data['fields'].length; i++) {
                    var fields = JSON.parse(data['fields'][i]['fields']);
                    _this.addFields.push({
                        'label': fields['label'],
                        'datatype': fields['datatype'],
                        'length': fields['length'],
                        'mandatory': fields['mandatory'],
                        'validation': fields['validation'],
                        'validationMsg': fields['validationMsg'],
                        'fieldType': fields['fieldType'],
                        'fieldName': fields['fieldName'],
                        'id': data['fields'][i]['id']
                    });
                }
                _this.extraFields = true;
            }
            else {
                _this.extraFields = false;
            }
        });
        this.loadData();
    }
    EditUserComponent.prototype.loadData = function () {
        var _this = this;
        this.membershipService.getMembership().then(function (data) {
            if (data['membership']) {
                _this.members = data['membership'];
            }
        }, function (error) {
        });
        this.userservice.getUserDetails(this.userId).then(function (data) {
            if (data['status'] == 'success') {
                _this.details = data['details'];
                _this.listSubid.sublistid = data['details']['listId'];
                _this.subscriberListName = data['details']['listName'];
            }
            else {
                _this.details = '';
                _this.listSubid.sublistid = [];
            }
        });
        this.listsservice.getlist(new Date().getTime()).then(function (data) {
            if (data['status'] == 'success') {
                for (var i = 0; i < data['lists'].length; i++) {
                    _this.listDetails = _this.listDetails.concat([{ id: parseInt(data['lists'][i].id), description: data['lists'][i].name }]);
                }
            }
        });
        this.userservice.getTimeLine(this.userId).then(function (data) {
            if (data['status'] == 'success') {
                _this.timeLines = data['timeLine'];
            }
            else {
                _this.timeLines = '';
            }
        });
        this.userservice.getTransactionData(this.userId, new Date().getTime()).then(function (data) {
            if (data['status'] == 'success') {
                _this.transactionData = data['data'];
            }
            else {
                _this.transactionData = [];
            }
        });
    };
    EditUserComponent.prototype.selected = function (event) {
        //console.log('event - '+ JSON.stringify(event));
        this.listSubid.sublistid = event;
        //this.selectedMemType = event;
    };
    EditUserComponent.prototype.subscribeUsers = function () {
        var _this = this;
        this.listSubid.userId = this.userId;
        this.userservice.subscribeUserThroughEdit(this.listSubid).then(function (data) {
            if (data['status'] == 'success') {
                _this.snotifyService.success('User Subscription Was Successfully', '', _this.getConfig());
                _this.userservice.getUserSubscription(_this.userId, new Date().getTime()).then(function (data) {
                    if (data['status'] == 'success') {
                        _this.listSub = data['rows'];
                    }
                });
            }
        });
    };
    EditUserComponent.prototype.fieldValueChange = function (id, value, fieldName) {
        if (this.FieldsValue.length > 0) {
            var checkValue = false;
            for (var i = 0; i < this.FieldsValue.length; i++) {
                if (this.FieldsValue[i].id == id) {
                    this.FieldsValue[i].value = value;
                    this.FieldsValue[i].fieldName = fieldName;
                    checkValue = true;
                }
            }
            if (!checkValue) {
                this.FieldsValue.push({ "id": id, "value": value, "fieldName": fieldName });
            }
        }
        else {
            this.FieldsValue.push({ "id": id, "value": value, "fieldName": fieldName });
        }
        console.log('val -' + this.FieldsValue);
    };
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transactionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'paymentDetails': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, null),
            'uid': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, null),
            'membership_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, null),
            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        this.userservice.getUser(this.userId, new Date().getTime()).then(function (data) {
            if (data['status'] == 'success') {
                _this.user = data['user'][0];
                _this.userModel.username = data['user'][0].username;
                _this.userModel.firstName = data['user'][0].firstName;
                _this.userModel.email = data['user'][0].email;
                _this.userModel.dob = data['user'][0].dob;
                _this.userModel.password = data['user'][0].password;
                _this.userModel.lastName = data['user'][0].lastName;
                _this.userModel.address = data['user'][0].address;
                _this.userModel.subId = data['user'][0].subId;
                if (data['user'][0].gender == 'F' || data['user'][0].gender == 'Female') {
                    _this.userModel.genderRadios = 'Female';
                }
                else {
                    _this.userModel.genderRadios = 'Male';
                }
                if (data['user'][0].paid == 'paid') {
                    _this.userModel.paymentRadios = 'y';
                    _this.paymentRadiosOld = 'y';
                    _this.userModel.receiptNumber = data['user'][0].receiptNumber;
                }
                else {
                    _this.userModel.paymentRadios = 'n';
                    _this.paymentRadiosOld = 'y';
                }
                _this.userModel.phone = data['user'][0].phone;
                _this.userModel.city = data['user'][0].city;
                _this.userModel.state = data['user'][0].state;
                _this.userModel.postcode = data['user'][0].postcode;
                _this.userModel.country = data['user'][0].country;
                _this.gender = data['user'][0].gender;
                if (_this.user.listName != '') {
                    _this.listSubscription = true;
                }
                if (data['user'][0].profileImage != undefined && data['user'][0].profileImage != null && data['user'][0].profileImage != '') {
                    _this.userImage = data['user'][0].profileImage;
                }
                else {
                    _this.userImage = 'assets/img/default_image.png';
                }
                _this.userModel.membership = data['user'][0].membership_id;
                _this.userModel.roleId = data['user'][0].role_id;
                _this.transactionForm.controls['membership_id'].setValue(data['user'][0].membership_id);
                _this.transactionForm.controls['uid'].setValue(_this.userId);
            }
        });
        this.userservice.getUserSubscription(this.userId, new Date().getTime()).then(function (data) {
            if (data['status'] == 'success') {
                console.log(data);
                var allLists = [];
                _this.listSub = data['rows'];
                _this.listSubCount = data['rows'].length;
                for (var i = 0; i < _this.listSubCount; i++) {
                    allLists.push(_this.listSub[i]['list']);
                }
                _this.listSubid.sublistid = allLists;
            }
            else {
                _this.listSub = '';
                _this.listSubCount = 0;
                _this.listSubid.sublistid = [];
            }
        });
        this.loyaltyPointService.getUserLoyaltyPoints(this.userId).then(function (data) {
            if (data['status'] == 'success') {
                _this.loyaltyPointDisplay = data['loyalPoints'];
            }
        });
        this.statisticsService.getStatsByUser(this.userId, new Date().getTime()).then(function (data) {
            if (data['status'] == 'success') {
                _this.newsLetterDetails = data['reports'];
            }
        });
        this.loyaltyPointEarned = [];
    };
    EditUserComponent.prototype.onTransactionFormSubmit = function (formValue) {
        var _this = this;
        var userData = this.transactionForm.value;
        userData.status = 'success';
        this.authenticationService.addtransaction(userData).then(function (data) {
            _this.snotifyService.success('Payment details was added successfully.', '', _this.getConfig());
            _this.addTransaction = false;
            _this.userservice.getTransactionData(_this.userId, new Date().getTime()).then(function (data) {
                if (data['status'] == 'success') {
                    _this.transactionData = data['data'];
                }
                else {
                    _this.transactionData = [];
                }
            });
        });
    };
    EditUserComponent.prototype.setMembership = function (event) {
        if (event.target.value != '') {
            if (this.userModel.membership == event.target.value) {
                this.changeMembership = true;
            }
            else {
                this.changeMembership = false;
            }
        }
        else {
            this.changeMembership = false;
        }
    };
    EditUserComponent.prototype.onReactiveFormSubmit = function () {
        var _this = this;
        if (this.ageCheck()) {
            this.dateerror = false;
            this.submitted = true;
            var editAddress = '';
            if (this.newaddress !== '') {
                this.userModel.address = this.newaddress;
            }
            this.userModel.fields = JSON.stringify(this.FieldsValue);
            this.userModel.id = this.userId;
            this.userModel.changeMembership = this.changeMembership;
            this.userModel.newpaymentRadios = (this.paymentRadiosOld != this.userModel.paymentRadios) ? true : false;
            //console.log(this.regularForm.controls['genderRadios'].value);
            // let userDetail = {
            //   username: this.regularForm.controls['username'].value,
            //   password: this.regularForm.controls['password'].value,
            //   firstName: this.regularForm.controls['firstName'].value,
            //   lastName: this.regularForm.controls['lastName'].value,
            //   email: this.regularForm.controls['email'].value,
            //   dob: this.regularForm.controls['dob'].value,
            //   genderRadios: this.regularForm.controls['genderRadios'].value,
            //   address: editAddress,
            //   phone: this.regularForm.controls['phone'].value,
            //   profileImage: this.user['profileImage'].split('/').pop().split('#')[0].split('?')[0],
            //   id: this.userId,
            //   fields: this.FieldsValue
            // }
            this.userservice.editUser(this.userModel).then(function (data) {
                if (data['status'] == 'success') {
                    _this.snotifyService.success('User Details Updated Successfully', '', _this.getConfig());
                    _this.submitted = false;
                    _this.userservice.getUser(_this.userId, new Date().getTime()).then(function (data) {
                        if (data['status'] == 'success') {
                            _this.user = data['user'][0];
                            // this.regularForm.controls['username'].setValue(data['user'][0].username);
                            // this.regularForm.controls['firstName'].setValue(data['user'][0].firstName);
                            // this.regularForm.controls['email'].setValue(data['user'][0].email);
                            // this.regularForm.controls['dob'].setValue(data['user'][0].dob);
                            // this.regularForm.controls['password'].setValue(data['user'][0].password);
                            // this.regularForm.controls['lastName'].setValue(data['user'][0].lastName);
                            // this.regularForm.controls['address'].setValue(data['user'][0].address);
                            // this.regularForm.controls['genderRadios'].setValue(data['user'][0].gender);
                            // this.regularForm.controls['phone'].setValue(data['user'][0].phone);
                            // this.gender = data['user'][0].gender;
                            _this.loadData();
                            if (_this.user.listName != '') {
                                _this.listSubscription = true;
                            }
                        }
                    });
                }
                else {
                    _this.snotifyService.success('Error While Updating User Details. Please Try again.', '', _this.getConfig());
                    _this.submitted = false;
                }
            });
        }
        else {
            this.submitted = false;
            this.dateerror = true;
            this.userModel.dob = '';
        }
    };
    EditUserComponent.prototype.cancelEdit = function (id) {
        this.edituserForm.reset();
        if (this.onlyUserEdit) {
            this.router.navigate(['/users/profile']);
        }
        else {
            this.router.navigate(['/users/users']);
        }
        /*let val = ((id*5362)/12345);
        this.router.navigate(['/users/user'],{queryParams:{id:window.btoa(val.toString())}});*/
    };
    EditUserComponent.prototype.handleAddressChange = function (address) {
        // Do some stuff
        this.newaddress = address.formatted_address;
        if (this.getComponentByType(address, "street_number") != '') {
            this.userModel.address1 = this.getComponentByType(address, "street_number") + ', ';
        }
        if (this.getComponentByType(address, "route") != '') {
            this.userModel.address1 += this.getComponentByType(address, "route");
        }
        this.userModel.city = this.getComponentByType(address, "locality");
        this.userModel.state = this.getComponentByType(address, "administrative_area_level_1");
        this.userModel.postcode = this.getComponentByType(address, "postal_code");
        this.userModel.country = this.getComponentByType(address, "country");
    };
    EditUserComponent.prototype.getComponentByType = function (address, type) {
        if (!type)
            return null;
        if (!address || !address.address_components || address.address_components.length == 0)
            return null;
        type = type.toLowerCase();
        for (var _i = 0, _a = address.address_components; _i < _a.length; _i++) {
            var comp = _a[_i];
            if (!comp.types || comp.types.length == 0)
                continue;
            if (comp.types.findIndex(function (x) { return x.toLowerCase() == type; }) > -1)
                return comp['long_name'];
        }
        return '';
    };
    EditUserComponent.prototype.unsubscribe = function (event, id, subscriptionId) {
        var _this = this;
        console.log(event);
        var SubscriptionDetail = {
            id: this.userId,
            listId: subscriptionId
        };
        if (event) {
            this.userservice.addSubscriptionUser(SubscriptionDetail).then(function (data) {
                if (data['status'] == 'success') {
                    _this.snotifyService.success('User Subscription Was Successfully', '', _this.getConfig());
                    _this.userservice.getUserSubscription(_this.userId, new Date().getTime()).then(function (data) {
                        if (data['status'] == 'success') {
                            _this.listSub = data['rows'];
                        }
                    });
                    _this.statisticsService.getStatsByUser(_this.userId, new Date().getTime()).then(function (data) {
                        if (data['status'] == 'success') {
                            _this.newsLetterDetails = data['reports'];
                        }
                    });
                }
            });
        }
        else {
            this.userservice.unSubscriptionUser(SubscriptionDetail).then(function (data) {
                if (data['status'] == 'success') {
                    _this.snotifyService.success('User Was Successfully Unsubscribed', '', _this.getConfig());
                    _this.userservice.getUserSubscription(_this.userId, new Date().getTime()).then(function (data) {
                        if (data['status'] == 'success') {
                            _this.listSub = data['rows'];
                        }
                    });
                }
            });
        }
    };
    EditUserComponent.prototype.ageCheck = function () {
        var today = new Date();
        var birthDate = new Date(this.userModel.dob);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 18) {
            return false;
        }
        else {
            return true;
        }
    };
    EditUserComponent.prototype.isNumberKey = function (evt) {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    EditUserComponent.prototype.getConfig = function () {
        this.snotifyService.setDefaults({
            global: {
                newOnTop: this.newTop,
                maxAtPosition: this.blockMax,
                maxOnScreen: this.dockMax,
            }
        });
        return {
            bodyMaxLength: this.bodyMaxLength,
            titleMaxLength: this.titleMaxLength,
            backdrop: this.backdrop,
            position: this.position,
            timeout: this.timeout,
            showProgressBar: this.progressBar,
            closeOnClick: this.closeClick,
            pauseOnHover: this.pauseHover
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('edituser'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], EditUserComponent.prototype, "edituserForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('vform'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], EditUserComponent.prototype, "validationForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("placesRef"),
        __metadata("design:type", ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__["GooglePlaceDirective"])
    ], EditUserComponent.prototype, "placesRef", void 0);
    EditUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/users/edit-user/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.scss */ "./src/app/users/edit-user/edit-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_data_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"], _shared_data_statistics_service__WEBPACK_IMPORTED_MODULE_8__["StatisticsService"], _shared_data_membership_service__WEBPACK_IMPORTED_MODULE_10__["MembershipService"], _shared_data_addFields_service__WEBPACK_IMPORTED_MODULE_7__["AddFieldsService"], ng_snotify__WEBPACK_IMPORTED_MODULE_5__["SnotifyService"], _shared_data_loyaltypoint_service__WEBPACK_IMPORTED_MODULE_4__["loyaltypointService"], _shared_data_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_data_lists_service__WEBPACK_IMPORTED_MODULE_9__["ListsService"]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/users/move-users/move-users.component.html":
/*!************************************************************!*\
  !*** ./src/app/users/move-users/move-users.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <div class=\"content-header\">Move Users</div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12 col-md-6 col-md-6\">\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label>Move Users From</label>\r\n              <select class=\"form-control\" [(ngModel)]=\"val\" (change)=\"removeToList($event.target.value, $event)\">\r\n                  <option selected value=\"\">Select List</option>\r\n                  <option *ngFor=\"let list of listDetails\" value=\"{{list.id}}\" [disabled]=\"selectedToList == list.id\">{{list.name}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"card\">\r\n                  <div class=\"card-header\">\r\n                    <div class=\"card-title-wrap bar-success\">\r\n                      <h4 class=\"card-title\">Users in {{moveFrom}}</h4>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"card-body\">\r\n                      <div class=\"card-block\">\r\n                        <table class=\"table table-responsive-md\">\r\n                          <tbody>\r\n                            <tr *ngFor=\"let user of users\">\r\n                              <td>\r\n                                <div class=\"custom-control custom-checkbox m-0\">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"user{{user.id}}\" value=\"{{user.id}}\" (change)=\"chooseUser($event.target.value, $event.target.checked, $event.target)\">\r\n                                    <label class=\"custom-control-label\" for=\"user{{user.id}}\"></label>\r\n                                </div>\r\n                              </td>\r\n                              <td>\r\n                                {{user.FirstName}} {{user.LastName}}, {{user.email}}\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <button type=\"button\" class=\"btn btn-success btn-raised  mr-1\" (click)=\"moveUser()\" [disabled]=\"(selectedToList == '' ||  submitted || selectedFromList == '' || moveSelectedUser == '')\">Move User <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i></button>\r\n              <button type=\"button\" class=\"btn btn-danger btn-raised  mr-1\" (click)=\"cancelReset()\">Reset</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-12 col-md-6 \">\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <div class=\"form-group\">\r\n              <label>Move Users To</label>\r\n              <select class=\"form-control\" [(ngModel)]=\"val1\" (change)=\"removeFromList($event.target.value, $event)\">\r\n                  <option selected value=\"\">Select List</option>\r\n                  <option *ngFor=\"let list of listDetails\" value=\"{{list.id}}\" [disabled]=\"selectedFromList == list.id\">{{list.name}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"card\">\r\n                  <div class=\"card-header\">\r\n                    <div class=\"card-title-wrap bar-success\">\r\n                      <h4 class=\"card-title\">Users in {{moveTo}}</h4>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"card-body\">\r\n                      <div class=\"card-block\">\r\n                          <ul class=\"list-group\">\r\n                              <li class=\"list-group-item\" *ngFor=\"let user of fromUsers\">{{user.FirstName}} {{user.LastName}}, {{user.email}}</li>\r\n                          </ul>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/users/move-users/move-users.component.scss":
/*!************************************************************!*\
  !*** ./src/app/users/move-users/move-users.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL21vdmUtdXNlcnMvbW92ZS11c2Vycy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/users/move-users/move-users.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/users/move-users/move-users.component.ts ***!
  \**********************************************************/
/*! exports provided: MoveUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveUsersComponent", function() { return MoveUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _shared_data_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/data/user.service */ "./src/app/shared/data/user.service.ts");
/* harmony import */ var _shared_data_lists_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/data/lists.service */ "./src/app/shared/data/lists.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MoveUsersComponent = /** @class */ (function () {
    function MoveUsersComponent(userservice, snotifyService, listsservice, router, route) {
        this.userservice = userservice;
        this.snotifyService = snotifyService;
        this.listsservice = listsservice;
        this.router = router;
        this.route = route;
        this.selectedToList = '';
        this.selectedFromList = '';
        this.users = [];
        this.fromUsers = [];
        this.moveSelectedUser = [];
        this.submitted = false;
        this.timeout = 3000;
        this.position = ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyPosition"].centerTop;
        this.progressBar = true;
        this.closeClick = true;
        this.newTop = true;
        this.backdrop = -1;
        this.dockMax = 8;
        this.blockMax = 6;
        this.pauseHover = true;
        this.titleMaxLength = 15;
        this.bodyMaxLength = 80;
        this.val = '';
        this.val1 = '';
    }
    MoveUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listsservice.getlist(new Date().getTime()).then(function (data) {
            console.log(data['lists']);
            _this.listDetails = data['lists'];
        }, function (error) {
        });
        // this.userservice.getUsersSubscribtion().then(data => {
        //     console.log(data['users']);
        //     this.users = data['users'];
        // },
        // error => {
        // });
    };
    MoveUsersComponent.prototype.removeToList = function (value, event) {
        var _this = this;
        this.selectedFromList = value;
        console.log(this.selectedFromList);
        this.moveFrom = event.target.options[event.target.options.selectedIndex].text;
        if (value != '') {
            this.userservice.getUsersSubscriptionList(value, new Date().getTime()).then(function (data) {
                console.log(data['users']);
                if (data['status'] == "success") {
                    _this.users = data['users'];
                }
                else {
                    _this.users = [];
                }
            });
        }
        else {
            this.users = [];
            // this.userservice.getUsersSubscribtion().then(data => {
            //     console.log(data['users']);
            //     this.users = data['users'];
            // },
            // error => {
            // });
        }
    };
    MoveUsersComponent.prototype.removeFromList = function (value, event) {
        var _this = this;
        this.selectedToList = value;
        this.moveTo = event.target.options[event.target.options.selectedIndex].text;
        if (value != '') {
            this.userservice.getUsersSubscriptionList(value, new Date().getTime()).then(function (data) {
                console.log(data['users']);
                if (data['status'] == "success") {
                    _this.fromUsers = data['users'];
                }
                else {
                    _this.fromUsers = [];
                }
            });
        }
        else {
            this.fromUsers = [];
            // this.userservice.getUsersSubscribtion().then(data => {
            //     console.log(data['users']);
            //     this.fromUsers = data['users'];
            // },
            // error => {
            // });
        }
    };
    MoveUsersComponent.prototype.moveUser = function () {
        var _this = this;
        this.submitted = true;
        if (this.moveSelectedUser != []) {
            this.userservice.moveSelectedUser(this.selectedToList, this.selectedFromList, this.moveSelectedUser).then(function (data) {
                if (data['status'] == 'success') {
                    _this.snotifyService.success('Users moved to selected list Successfully.', '', _this.getConfig());
                    _this.users = [];
                    _this.moveSelectedUser = [];
                    _this.fromUsers = [];
                    _this.val = '';
                    _this.val1 = '';
                    _this.selectedToList = '';
                    _this.selectedFromList = '';
                    _this.moveFrom = '';
                    _this.moveTo = '';
                    _this.submitted = false;
                }
            }, function (error) {
            });
        }
        else {
            this.userservice.moveUser(this.selectedToList, this.selectedFromList).then(function (data) {
                if (data['status'] == 'success') {
                    _this.snotifyService.success('Users moved to selected list Successfully.', '', _this.getConfig());
                    _this.users = [];
                    _this.moveSelectedUser = [];
                    _this.fromUsers = [];
                    _this.submitted = false;
                }
            }, function (error) {
            });
        }
    };
    MoveUsersComponent.prototype.chooseUser = function (uid, checked, val) {
        //console.log(event);
        if (!checked) {
            var arr = this.moveSelectedUser;
            for (var i = 0; i < this.moveSelectedUser.length; i++) {
                if (this.moveSelectedUser[i] == uid) {
                    arr.splice(i, 1);
                }
            }
        }
        else {
            var userExsits = false;
            if (this.fromUsers.length > 0) {
                for (var k = 0; k < this.fromUsers.length; k++) {
                    if (uid == this.fromUsers[k].id) {
                        val.checked = false;
                        this.snotifyService.success('Users already exsits in list, try other user.', '', this.getConfig());
                        userExsits = true;
                        break;
                    }
                }
            }
            if (!userExsits) {
                this.moveSelectedUser.push(uid);
            }
        }
        //console.log(arr);
        console.log(this.moveSelectedUser);
    };
    MoveUsersComponent.prototype.getConfig = function () {
        this.snotifyService.setDefaults({
            global: {
                newOnTop: this.newTop,
                maxAtPosition: this.blockMax,
                maxOnScreen: this.dockMax,
            }
        });
        return {
            bodyMaxLength: this.bodyMaxLength,
            titleMaxLength: this.titleMaxLength,
            backdrop: this.backdrop,
            position: this.position,
            timeout: this.timeout,
            showProgressBar: this.progressBar,
            closeOnClick: this.closeClick,
            pauseOnHover: this.pauseHover
        };
    };
    MoveUsersComponent.prototype.cancelReset = function () {
        this.users = [];
        this.moveSelectedUser = [];
        this.fromUsers = [];
        this.val = '';
        this.val1 = '';
        this.selectedToList = '';
        this.selectedFromList = '';
        this.moveFrom = '';
        this.moveTo = '';
        this.submitted = false;
    };
    MoveUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-move-users',
            template: __webpack_require__(/*! ./move-users.component.html */ "./src/app/users/move-users/move-users.component.html"),
            styles: [__webpack_require__(/*! ./move-users.component.scss */ "./src/app/users/move-users/move-users.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_data_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyService"], _shared_data_lists_service__WEBPACK_IMPORTED_MODULE_4__["ListsService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], MoveUsersComponent);
    return MoveUsersComponent;
}());



/***/ }),

/***/ "./src/app/users/profile/profile.component.html":
/*!******************************************************!*\
  !*** ./src/app/users/profile/profile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <section id=\"user-area\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <p class=\"bg-danger text-highlight white text-center font-medium-1 text-bold-600\" *ngIf=\"['142','143','144','153'].indexOf(user?.membership_id) > -1\"><a class=\"text-uppercase\" (click)=\"renew()\">Please Renew Your Account By Clicking Here</a>\r\n        </p>\r\n      </div>\r\n      <div class=\"col-xl-3 col-lg-12\">\r\n        <div class=\"card mb-4\">\r\n          <div class=\"card-header\">\r\n            <div class=\"card-title-wrap bar-primary\">\r\n              <div class=\"card-title\">Personal Information</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n              <div class=\"align-self-center halfway-fab text-center\">\r\n                <a class=\"profile-image\">\r\n                  <img src=\"{{userImage}}\" class=\"rounded-circle img-border gradient-summer width-100\" alt=\"Card image\">\r\n                </a>\r\n              </div>\r\n              <div class=\"text-center\">\r\n                <span class=\"font-medium-2 text-uppercase\">{{ user?.name }}</span>\r\n                <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"edituser(user?.id)\">\r\n                  <i class=\"fas fa-pencil-alt font-medium-3 mr-2\"></i>\r\n                </a>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-12 col-sm-6\">\r\n                  <ul class=\"no-list-style pl-0 text-center\">\r\n                    <li class=\"mb-2\">\r\n                      <span class=\"text-bold-500 primary\"><a><i class=\"icon-present font-small-3\"></i> Birthday:</a></span>\r\n                      <span class=\"display-block overflow-hidden\">{{user?.dob}}</span>\r\n                    </li>\r\n                    <li class=\"mb-2\">\r\n                      <span class=\"text-bold-500 primary\"><a><i class=\"ft-globe font-small-3\"></i> Lives in:</a></span>\r\n                      <span class=\"display-block overflow-hidden\">{{user?.address}}</span>\r\n                    </li>\r\n                    <li class=\"mb-2\">\r\n                      <span class=\"text-bold-500 primary\"><a><i class=\"ft-user font-small-3\"></i> Gender:</a></span>\r\n                      <span class=\"display-block overflow-hidden\">{{user?.gender}}</span>\r\n                    </li>\r\n                    <li class=\"mb-2\">\r\n                      <span class=\"text-bold-500 primary\"><a><i class=\"ft-mail font-small-3\"></i> Email:</a></span>\r\n                      <a class=\"display-block overflow-hidden\">{{user?.email}}</a>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n                <div class=\"col-12 col-sm-6\">\r\n                  <ul class=\"no-list-style pl-0 text-center\">\r\n                    <li class=\"mb-2\">\r\n                      <span class=\"text-bold-500 primary\"><a><i class=\"ft-smartphone font-small-3\"></i> Phone Number:</a></span>\r\n                      <span class=\"display-block overflow-hidden\">{{user?.phone}}</span>\r\n                    </li>\r\n                    <li class=\"mb-2\">\r\n                      <span class=\"text-bold-500 primary\"><a><i class=\"ft-monitor font-small-3\"></i> List Subscription:</a></span>\r\n                      <a class=\"display-block overflow-hidden\">{{user?.listName}}</a>\r\n                    </li>\r\n                    <li class=\"mb-2\">\r\n                      <span class=\"text-bold-500 primary\"><a><i class=\"ft-briefcase font-small-3\"></i> Membership Tire:</a></span>\r\n                      <span class=\"display-block overflow-hidden\">{{user?.membership}}</span>\r\n                    </li>\r\n                    <li class=\"mb-2\">\r\n                      <span class=\"text-bold-500 primary\"><a><i class=\"ft-book font-small-3\"></i> Joined:</a></span>\r\n                      <span class=\"display-block overflow-hidden\">{{user?.joined | date}}</span>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--<div class=\"card mb-4\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"card-title-wrap bar-danger\">\r\n                        <div class=\"card-title\">Hobbies</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-12\">\r\n                                <div class=\"row\">\r\n                                    <span class=\"col-6 col-md-4 col-xl-6 mt-2 float-left text-center\" *ngFor=\"let hobbie of hobbies\"> <i class=\"danger font-medium-3\" [ngClass]=\"hobbie.icon\"></i> <div class=\"mt-1\">{{hobbie.name}}</div></span>\r\n                                    <span class=\"col-6 col-md-4 col-xl-6 mt-2 float-left text-center\"> <i class=\"icon-speedometer danger font-medium-3\"></i> <div class=\"mt-1\">Driving</div></span>\r\n                                    <span class=\"col-6 col-md-4 col-xl-6 mt-2 float-left text-center\"> <i class=\"icon-camera danger font-medium-3\"></i> <div class=\"mt-1\">Photography</div></span>\r\n                                    <span class=\"col-6 col-md-4 col-xl-6 mt-2 float-left text-center\"> <i class=\"icon-game-controller danger font-medium-3\"></i> <div class=\"mt-1\">Gaming</div></span>\r\n                                    <span class=\"col-6 col-md-4 col-xl-6 mt-2 float-left text-center\"> <i class=\"icon-music-tone-alt danger font-medium-3\"></i> <div class=\"mt-1\">Music</div></span>\r\n                                    <span class=\"col-6 col-md-4 col-xl-6 mt-2 float-left text-center\"> <i class=\"ft-monitor danger font-medium-3\"></i> <div class=\"mt-1\">Surfing</div></span>\r\n                                    <span class=\"col-6 col-md-4 col-xl-6 mt-2 float-left text-center\"> <i class=\"ft-pie-chart danger font-medium-3\"></i> <div class=\"mt-1\">Foodie</div></span>\r\n                                    <span class=\"col-6 col-md-4 col-xl-6 mt-2 float-left text-center\"> <i class=\"ft-tv danger font-medium-3\"></i> <div class=\"mt-1\">TV</div></span>\r\n                                    <span class=\"col-6 col-md-4 col-xl-6 mt-2 float-left text-center\"> <i class=\"icon-basket-loaded danger font-medium-3\"></i> <div class=\"mt-1\">Shopping</div></span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>-->\r\n      </div>\r\n      <div class=\"col-xl-9 col-lg-12\">\r\n        <!--About div starts-->\r\n        <div id=\"about\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xl-3 col-lg-6 col-12\">\r\n              <div class=\"card gradient-orange-amber\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"px-3 py-3\">\r\n                    <div class=\"media\">\r\n                      <div class=\"align-center\">\r\n                        <i class=\"icon-users text-white font-large-2 float-left\"></i>\r\n                      </div>\r\n                      <div class=\"media-body text-white text-right\">\r\n                        <h3 class=\"text-white\">${{details?.price}}</h3>\r\n                        <span>{{details?.plans}}</span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-3 col-lg-6 col-12\">\r\n              <div class=\"card gradient-light-blue-cyan\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"px-3 py-3\">\r\n                    <div class=\"media\">\r\n                      <div class=\"align-center\">\r\n                        <i class=\"icon-present text-white font-large-2 float-left\"></i>\r\n                      </div>\r\n                      <div class=\"media-body text-white text-right\">\r\n                        <h3 class=\"text-white\">{{details?.points}}</h3>\r\n                        <span>Loyalty Points</span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-3 col-lg-6 col-12\">\r\n              <div class=\"card gradient-red-pink\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"px-3 py-3\">\r\n                    <div class=\"media\">\r\n                      <div class=\"align-center\">\r\n                        <i class=\"icon-envelope text-white font-large-2 float-left\"></i>\r\n                      </div>\r\n                      <div class=\"media-body text-white text-right\">\r\n                        <h3 class=\"text-white\">{{details?.newsletterCount}}</h3>\r\n                        <span>Newsletters</span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-3 col-lg-6 col-12\">\r\n              <div class=\"card gradient-mint\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"px-3 py-3\">\r\n                    <div class=\"media\">\r\n                      <div class=\"align-center\">\r\n                        <i class=\"icon-envelope-open text-white font-large-2 float-left\"></i>\r\n                      </div>\r\n                      <div class=\"media-body text-white text-right\">\r\n                        <h3 class=\"text-white\">{{details.newsletterCount}}</h3>\r\n                        <span>Latest Newsletter</span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"col-sm-12\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-header\">\r\n                                <div class=\"card-title-wrap bar-warning\">\r\n                                    <div class=\"card-title\">Latest Newsletter - {{details.name}} On {{details.dateTime | date}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"card-body\">\r\n                                <div class=\"card-block\">\r\n                                    <p>Subject : {{details.subject}}</p>\r\n                                    <div class=\"card-block newsletter\" [innerHTML]=\"details.message\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n          </div>\r\n        </div>\r\n        <!--About div ends-->\r\n\r\n        <!--User Timeline div starts-->\r\n        <div id=\"timeline\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <div class=\"card-title-wrap bar-primary\">\r\n                <div class=\"card-title\">User Timeline</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"card-block\">\r\n                <div class=\"timeline\">\r\n                  <div class=\"timeline-title badge-pill badge-info d-inline-block px-3 py-1 mb-4 mx-5\">Newsletters</div>\r\n                  <ul class=\"list-unstyled base-timeline activity-timeline\">\r\n\r\n                    <li class=\"\" *ngFor=\"let timeLine of timeLines\">\r\n                      <div class=\"timeline-icon bg-primary\" *ngIf=\"timeLine.type == 'newsletter'\">\r\n                        <i class=\"fa fa-envelope\"></i>\r\n                      </div>\r\n                      <div class=\"act-time\" *ngIf=\"timeLine.type == 'newsletter'\">{{timeLine.dateTime}}</div>\r\n                      <div class=\"base-timeline-info\" *ngIf=\"timeLine.type == 'newsletter'\">\r\n                        <a href=\"#\" class=\"text-uppercase text-primary\">{{timeLine.name}}</a>\r\n                        <span class=\"d-block\">{{timeLine.description}}</span>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n\r\n                  <br>\r\n\r\n                  <div class=\"timeline-title badge-pill badge-info d-inline-block px-3 py-1 mb-4 mx-5\">Loyalty Points Redeemed</div>\r\n                  <ul class=\"list-unstyled base-timeline activity-timeline\">\r\n\r\n                    <li class=\"\" *ngFor=\"let timeLine of timeLines\">\r\n                      <div class=\"timeline-icon bg-primary\" *ngIf=\"timeLine.type == 'loyalty'\">\r\n                        <i class=\"fa fa-gift\"></i>\r\n                      </div>\r\n                      <div class=\"act-time\" *ngIf=\"timeLine.type == 'loyalty'\">{{timeLine.dateTime}}</div>\r\n                      <div class=\"base-timeline-info\" *ngIf=\"timeLine.type == 'loyalty'\">\r\n                        <a href=\"#\" class=\"text-uppercase text-primary\">{{timeLine.name}}</a>\r\n                        <span class=\"d-block\">{{timeLine.description}}</span>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n\r\n                  <!--<br>\r\n\r\n                                <div class=\"timeline-title badge-pill badge-info d-inline-block px-3 py-1 mb-4 mx-5\">February 2018</div>\r\n                                <ul class=\"list-unstyled base-timeline activity-timeline\">\r\n\r\n                                    <li class=\"\">\r\n                                        <div class=\"timeline-icon bg-purple\">\r\n                                            <i class=\"fa fa-tasks\"></i>\r\n                                        </div>\r\n                                        <div class=\"act-time\">15 February</div>\r\n                                        <div class=\"base-timeline-info\">\r\n                                            <a href=\"#\" class=\"text-uppercase text-purple\">Task Added</a>\r\n                                            <span class=\"d-block\">You have added task #06 Successfully to the project �Convex�</span>\r\n                                        </div>\r\n                                        <small class=\"text-muted\">\r\n                                            1 month ago\r\n                                        </small>\r\n                                    </li>\r\n                                    <li class=\"\">\r\n                                        <div class=\"timeline-icon bg-danger\">\r\n                                            <i class=\"fa fa-calendar-o\"></i>\r\n                                        </div>\r\n                                        <div class=\"act-time\">06 February</div>\r\n                                        <div class=\"base-timeline-info\">\r\n                                            <a href=\"#\" class=\"text-uppercase text-danger\">Event Created</a>\r\n                                            <span class=\"d-block\">Final deal with Geekslabs Company is done and added to the �New deal� list</span>\r\n                                        </div>\r\n                                        <small class=\"text-muted\">\r\n                                            1 month ago\r\n                                        </small>\r\n                                    </li>\r\n                                </ul>\r\n                                <br> -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--User Timeline div ends-->\r\n      </div>\r\n    </div>\r\n  </section>"

/***/ }),

/***/ "./src/app/users/profile/profile.component.scss":
/*!******************************************************!*\
  !*** ./src/app/users/profile/profile.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".newsletter {\n  width: 100%;\n  overflow: auto;\n  border: 1px solid; }\n\n.media-body.text-white span {\n  white-space: nowrap !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvcHJvZmlsZS9DOlxcVXNlcnNcXE1SVDIwXFxEZXNrdG9wXFxVTVxcdXNlcm1hbmFnZW1lbnQvc3JjXFxhcHBcXHVzZXJzXFxwcm9maWxlXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBVztFQUNYLGVBQWM7RUFDZCxrQkFBaUIsRUFDbEI7O0FBQ0Q7RUFDSSwrQkFBOEIsRUFDakMiLCJmaWxlIjoic3JjL2FwcC91c2Vycy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3c2xldHRlcntcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxufVxyXG4ubWVkaWEtYm9keS50ZXh0LXdoaXRlIHNwYW4ge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/users/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/users/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/data/user.service */ "./src/app/shared/data/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, router, route) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.userId = '';
        this.userImage = '';
        //this.route.queryParams.subscribe(params => {this.userId = params['id'];});
        if (this.userId == '') {
            this.userId = localStorage.getItem('currentUserId');
        }
        ;
        this.userService.getUser(this.userId, new Date().getTime()).then(function (data) {
            if (data['status'] == 'success') {
                _this.user = data['user'][0];
                if (data['user'][0].profileImage != undefined && data['user'][0].profileImage != null && data['user'][0].profileImage != '') {
                    _this.userImage = data['user'][0].profileImage;
                }
                else {
                    _this.userImage = 'assets/img/default_image.png';
                }
                console.log(_this.user);
            }
        });
        this.userService.getUserDetails(this.userId).then(function (data) {
            if (data['status'] == 'success') {
                _this.details = data['details'];
                console.log(_this.details);
            }
        });
        this.userService.getTimeLine(this.userId).then(function (data) {
            if (data['status'] == 'success') {
                _this.timeLines = data['timeLine'];
                console.log(_this.timeLines);
            }
        });
    }
    ProfileComponent.prototype.edituser = function (id) {
        var val = ((id * 5362) / 12345);
        this.router.navigate(['/users/edit-user'], { queryParams: { id: window.btoa(val.toString()), source: 'user' } });
    };
    ProfileComponent.prototype.renew = function () {
        this.router.navigate(['/pages/renewal']);
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/users/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/users/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_data_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/users/segments/segments.component.html":
/*!********************************************************!*\
  !*** ./src/app/users/segments/segments.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"basic-elements\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"content-header\">Segments</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"!showSegment\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <p>Segments</p>\r\n                        </div>\r\n                        <div class=\"col-sm-6\" style=\"text-align: right;\">\r\n                            <p>\r\n                                <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-bitbucket right\" (click)=\"memToggle()\"><span class=\"ft-plus\"></span>Create Segment</a>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <ngx-datatable class=\"material\" class=\"bootstrap\" [rows]=\"segments\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"50\" [sorts]=\"[{prop: ['name'], dir: 'desc'}]\" [limit]=\"10\">\r\n                                <ngx-datatable-column name=\"Segment Name\">\r\n                                    <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                        {{row.name}}\r\n                                    </ng-template>\r\n                                </ngx-datatable-column>\r\n\r\n                                <ngx-datatable-column name=\"Created\">\r\n                                    <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                        {{row.created}}\r\n                                    </ng-template>\r\n                                </ngx-datatable-column>\r\n                                <ngx-datatable-column name=\"Action\">\r\n                                    <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                        <a class=\"info p-0\" data-original-title=\"\" title=\"\" (click)=\"editsegment(row.id)\">\r\n                                        <i class=\"fas fa-pencil-alt font-medium-3 mr-2\"></i>\r\n                                        </a>\r\n                                        <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"deletesegment(row.id)\">\r\n\r\n                                            <i class=\"fas fa-trash font-medium-3 mr-2\"></i>\r\n                                        </a>\r\n                                    </ng-template>\r\n                                </ngx-datatable-column>\r\n                            </ngx-datatable>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"showSegment\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <form [formGroup]=\"segmentForm\" (ngSubmit)=\"onReactiveFormSubmit(segmentForm.value)\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"name\">Segment Name</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\" required>\r\n                                <small class=\"form-text text-muted danger\" *ngIf=\"!segmentForm.get('name').valid && (segmentForm.get('name').dirty || segmentForm.get('name').touched)\">This field is required!</small>\r\n                            </div>\r\n                            <h2>Actions</h2>\r\n                            <p>Subscribers performs any of the following actions</p>\r\n\r\n                            <div formArrayName=\"actionset\">\r\n                                <div  [formGroupName]=\"i\" *ngFor=\"let tech of segmentForm.controls.actionset.controls; let i = index\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\r\n                                        <div class=\"form-group\">\r\n                                                <select  class=\"form-control custom-select mb-2\" formControlName=\"act1\" placeholder=\"Select an option\" required>\r\n                                                    <option value=\"visitedpage\">Visited page</option>\r\n                                                    <!-- <option value=\"clickedelement\">Clicked Element</option> -->\r\n                                                </select>\r\n                                        </div>\r\n                                    </div>\r\n                                    </div>\r\n                                    <div class=\"row\" >\r\n                                        <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\r\n                                            <div class=\"form-group\">\r\n                                                <select  class=\"form-control custom-select mb-2\" formControlName=\"act2\" placeholder=\"Select an option\" required>\r\n                                                    <option value=\"pageurl\">Page URL</option>\r\n                                                    <option value=\"refferingurl\">Reffering URL</option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\" >\r\n                                            <div class=\"form-group\">\r\n                                                <select  class=\"form-control custom-select mb-2\" formControlName=\"act3\" placeholder=\"Select an option\" required>\r\n                                                    <option value=\"isequalto\">Is equal to</option>\r\n                                                    <option value=\"isnotequalto\">Is not equal to</option>\r\n                                                    <option value=\"contains\">Contains</option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\r\n                                                <div class=\"form-group\">\r\n                                                    <input  type=\"text\" name=\"act4\" formControlName=\"act4\" class=\"form-control\" required>\r\n                                                </div>\r\n                                        </div>\r\n                                        <div class=\"col-xl-1 col-lg-6 col-md-12 mb-1\" >\r\n                                            <div class=\"col-xl-2 col-lg-6 col-md-12 mb-1\">\r\n                                                <button class=\"btn btn-danger mr-1 btn-fab\"\r\n                                                (click)=\"removeSetCondition1(i)\"><i class=\"fa fa-times\"></i></button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <button type=\"button\" class=\"btn btn-outline-primary btn-block btn-raised\" (click)=\"addSetCondition1()\" >Add Condition</button>\r\n\r\n                            <h2>Properties</h2>\r\n                            <p>Subscribers has the following properties</p>\r\n\r\n                            <div formArrayName=\"propertyset\">\r\n                                <div class=\"row\" [formGroupName]=\"i\" *ngFor=\"let tech of segmentForm.controls.propertyset.controls; let i = index\">\r\n                                    <div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\r\n                                        <div class=\"form-group\">\r\n                                            <select class=\"form-control custom-select mb-2\"  formControlName=\"ddl1\"  placeholder=\"Rule Type\"  (change)=\"ddl1change($event.target.value,i)\" required>\r\n                                                <option *ngFor=\"let value of propertyList; let j = index\"  value=\"{{value.name}}\" >{{value.name}}</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\" >\r\n                                        <div class=\"form-group\">\r\n                                            <select  class=\"form-control custom-select mb-2\" formControlName=\"seloperator\" placeholder=\"Rule Type\" required>\r\n                                                    <option value=\"isequalto\">Is equal to</option>\r\n                                                    <option value=\"isnotequalto\">Is not equal to</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\" *ngIf=\"valuesArray.length >0\">\r\n\r\n                                        <div  *ngIf=\"propertyList[valuesArray[i]].values.length == 0\">\r\n                                            <div class=\"form-group\">\r\n                                                <input  type=\"text\" name=\"txtfilterval\" formControlName=\"txtfilterval\" class=\"form-control\" required>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div  *ngIf=\"propertyList[valuesArray[i]].values.length > 0\">\r\n                                            <div class=\"form-group\">\r\n                                                <select class=\"form-control custom-select mb-2\" formControlName=\"txtfilterval\" placeholder=\"Rule Type\" required>\r\n                                                    <option value=\"\">-- Select --</option>\r\n                                                    <option  *ngFor=\"let opt of propertyList[valuesArray[i]].values\" value=\"{{opt}}\">{{opt}}</option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"col-xl-1 col-lg-6 col-md-12 mb-1\" >\r\n                                        <div class=\"col-xl-2 col-lg-6 col-md-12 mb-1\">\r\n                                            <button class=\"btn btn-danger mr-1 btn-fab\"\r\n                                            (click)=\"removeSetCondition(i)\"><i class=\"fa fa-times\"></i></button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <button type=\"button\" class=\"btn btn-outline-primary btn-block btn-raised\" (click)=\"addSetCondition()\" >Add Condition</button>\r\n                            <div class=\"form-group\">\r\n                                <button type=\"button\" class=\"btn btn-danger btn-raised mr-1\" (click)=\"cancel()\">Cancel</button>\r\n                                <button type=\"submit\" class=\"btn btn-success btn-raised\" [disabled]=\"!segmentForm.valid\">Create Segment</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/users/segments/segments.component.scss":
/*!********************************************************!*\
  !*** ./src/app/users/segments/segments.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3NlZ21lbnRzL3NlZ21lbnRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/segments/segments.component.ts":
/*!******************************************************!*\
  !*** ./src/app/users/segments/segments.component.ts ***!
  \******************************************************/
/*! exports provided: SegmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentsComponent", function() { return SegmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_data_membershipSegments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data/membershipSegments.service */ "./src/app/shared/data/membershipSegments.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SegmentsComponent = /** @class */ (function () {
    function SegmentsComponent(membershipSegmentsService, _FB, snotifyService) {
        this.membershipSegmentsService = membershipSegmentsService;
        this._FB = _FB;
        this.snotifyService = snotifyService;
        this.timeout = 3000;
        this.position = ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyPosition"].centerTop;
        this.progressBar = true;
        this.closeClick = true;
        this.newTop = true;
        this.backdrop = -1;
        this.dockMax = 8;
        this.blockMax = 6;
        this.pauseHover = true;
        this.titleMaxLength = 15;
        this.bodyMaxLength = 80;
        this.propertyList = [
            { name: 'Address', operator: ['Is equal to', 'Is not equal to'], values: [] },
            { name: 'City', operator: ['Is equal to', 'Is not equal to'], values: [] },
            { name: 'State', operator: ['Is equal to', 'Is not equal to'], values: [] },
            { name: 'Postcode', operator: ['Is equal to', 'Is not equal to'], values: [] }
        ];
        this.valuesArray = [];
    }
    SegmentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.segmentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'actionset': this._FB.array([]),
            'propertyset': this._FB.array([])
        });
        this.membershipSegmentsService.getSegmentByOrg().then(function (data) {
            if (data['status'] == 'success') {
                _this.segments = data['segments'];
                //this.collectionSize = data['segments'].length;
                _this.totalList = data['segments'].length;
            }
        }, function (error) {
        });
    };
    Object.defineProperty(SegmentsComponent.prototype, "f", {
        get: function () { return this.segmentForm.controls; },
        enumerable: true,
        configurable: true
    });
    SegmentsComponent.prototype.memToggle = function () {
        this.showSegment = true;
    };
    SegmentsComponent.prototype.cancel = function () {
        //window.location.reload();
        this.showSegment = false;
        this.segmentForm.reset();
        this.segmentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'actionset': this._FB.array([]),
            'propertyset': this._FB.array([])
        });
    };
    SegmentsComponent.prototype.deletesegment = function (id) {
        var _this = this;
        this.membershipSegmentsService.deleteSegment(id).then(function (data) {
            if (data['status']) {
                _this.snotifyService.success('Deleted Successfully', '', _this.getConfig());
                _this.segments = _this.segments.filter(function (h) { return h.id != id; });
            }
        });
    };
    /*action dynamic code*/
    SegmentsComponent.prototype.initMapFields1 = function () {
        return this._FB.group({
            act1: [],
            act2: [],
            act3: [],
            act4: []
        });
    };
    // valuesArray1 =[];
    //  ddl1change1(val,index){
    //    this.valuesArray[index] = val;
    //  }
    SegmentsComponent.prototype.addSetCondition1 = function () {
        var control = this.segmentForm.controls.actionset;
        control.push(this.initMapFields1());
    };
    SegmentsComponent.prototype.removeSetCondition1 = function (i) {
        var control = this.segmentForm.controls.actionset;
        control.removeAt(i);
        //this.valuesArray.splice(i, 1);
        //this.operatorArray.splice(i, 1);
    };
    /*action dynamic code end*/
    /*property dynamic*/
    SegmentsComponent.prototype.initMapFields = function () {
        return this._FB.group({
            ddl1: [],
            seloperator: [],
            txtfilterval: []
        });
    };
    SegmentsComponent.prototype.ddl1change = function (val, index) {
        //alert(val);
        var nameary = ["Address", "City", "State", "Postcode"];
        var indexsel = nameary.indexOf(val);
        //alert("indexsel"+indexsel);
        //this.valuesArray.push(indexsel);
        this.valuesArray[index] = indexsel;
    };
    SegmentsComponent.prototype.addSetCondition = function () {
        this.valuesArray.push(0);
        var control = this.segmentForm.controls.propertyset;
        control.push(this.initMapFields());
    };
    SegmentsComponent.prototype.removeSetCondition = function (i) {
        var control = this.segmentForm.controls.propertyset;
        control.removeAt(i);
        this.valuesArray.splice(i, 1);
        //this.operatorArray.splice(i, 1);
    };
    /*property dynamic end*/
    SegmentsComponent.prototype.onReactiveFormSubmit = function (val) {
        var _this = this;
        //console.log(JSON.stringify(val));
        var obj = { 'name': '', 'condition': { 'propertyset': '', 'actionset': '' } };
        //let obj= {'name':'','condition':'','subscribers':0};
        obj['name'] = val.name;
        obj['condition']['propertyset'] = val.propertyset;
        obj['condition']['actionset'] = val.actionset;
        //console.log('segments - '+JSON.stringify(obj));
        //let mydata = JSON.stringify(obj);
        this.membershipSegmentsService.addSegment(obj).then(function (data) {
            if (data['status'] == 'true') {
                _this.snotifyService.success('Added Successfully', '', _this.getConfig());
                _this.membershipSegmentsService.getSegmentByOrg().then(function (data) {
                    if (data['status'] == 'success') {
                        _this.segments = data['segments'];
                        _this.totalList = data['segments'].length;
                        _this.showSegment = false;
                        _this.segmentForm.reset();
                    }
                }, function (error) {
                });
            }
        });
    };
    SegmentsComponent.prototype.editsegment = function (id) {
        var editSegment = this.segments.filter(function (h) { return h.id == id; });
        this.segmentForm.controls['name'].setValue(editSegment[0]['name']);
        var condition = JSON.parse(editSegment[0]['condition']);
        for (var i = 0; i < condition['propertyset'].length; i++) {
            this.addSetConditionEdit(condition['propertyset'][i]);
        }
        for (var i = 0; i < condition['actionset'].length; i++) {
            this.addSetCondition1Edit(condition['actionset'][i]);
        }
        this.showSegment = true;
    };
    SegmentsComponent.prototype.addSetConditionEdit = function (myobj) {
        this.valuesArray.push(0);
        var control = this.segmentForm.controls.propertyset;
        control.push(this.initMapFieldsEdit(myobj));
    };
    SegmentsComponent.prototype.initMapFieldsEdit = function (myobj) {
        return this._FB.group({
            ddl1: [myobj['ddl1']],
            seloperator: [myobj['seloperator']],
            txtfilterval: [myobj['txtfilterval']]
        });
    };
    SegmentsComponent.prototype.addSetCondition1Edit = function (myobj) {
        var control = this.segmentForm.controls.actionset;
        control.push(this.initMapFields1Edit(myobj));
    };
    SegmentsComponent.prototype.initMapFields1Edit = function (myobj) {
        return this._FB.group({
            act1: [myobj['act1']],
            act2: [myobj['act2']],
            act3: [myobj['act3']],
            act4: [myobj['act4']]
        });
    };
    SegmentsComponent.prototype.getConfig = function () {
        this.snotifyService.setDefaults({
            global: {
                newOnTop: this.newTop,
                maxAtPosition: this.blockMax,
                maxOnScreen: this.dockMax,
            }
        });
        return {
            bodyMaxLength: this.bodyMaxLength,
            titleMaxLength: this.titleMaxLength,
            backdrop: this.backdrop,
            position: this.position,
            timeout: this.timeout,
            showProgressBar: this.progressBar,
            closeOnClick: this.closeClick,
            pauseOnHover: this.pauseHover
        };
    };
    SegmentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-segments',
            template: __webpack_require__(/*! ./segments.component.html */ "./src/app/users/segments/segments.component.html"),
            styles: [__webpack_require__(/*! ./segments.component.scss */ "./src/app/users/segments/segments.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_data_membershipSegments_service__WEBPACK_IMPORTED_MODULE_2__["MembershipSegmentsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"]])
    ], SegmentsComponent);
    return SegmentsComponent;
}());



/***/ }),

/***/ "./src/app/users/subscribers/subscribers.component.html":
/*!**************************************************************!*\
  !*** ./src/app/users/subscribers/subscribers.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"paging\" class=\"mb-3\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"content-header\">Users Subscription</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                  <div class=\"card-title-wrap bar-info\">\r\n                    <select class=\"form-control\" (change)=\"selectUser($event.target.value)\">\r\n                        <option selected value=\"\">Select List</option>\r\n                        <option *ngFor=\"let list of listDetails\" value=\"{{list.id}}\">{{list.name}}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                    \t<table class=\"table table-responsive-md text-center\">\r\n                    \t\t<thead>\r\n                    \t\t\t<tr>\r\n                            <th>First Name</th>\r\n                            <th>Last Name</th>\r\n                            <th>Email</th>\r\n                            <th>Address</th>\r\n                            <th>List Name</th>\r\n                            <th>Subscribed On</th>\r\n                            <th>Subscribed Status</th>\r\n                    \t\t\t</tr>\r\n                       \t\t</thead>\r\n                       \t\t<tbody>\r\n                            <tr *ngFor=\"let user of users | paginate: { itemsPerPage: 10, currentPage: p }\">\r\n                                <td>{{user.FirstName}}</td>\r\n                                <td>{{user.LastName}}</td>\r\n                                <td>{{user.email}}</td>\r\n                                <td>{{user.address}}</td>\r\n                                <td>{{user.listname}}</td>\r\n                                <td>{{user.date}}</td>\r\n                                <td *ngIf=\"user.status == true\"><span class=\"badge badge-primary\">Subscribed</span></td>\r\n                                <td *ngIf=\"user.status == false\"><span class=\"badge badge-primary\">Unsubscribed</span></td>\r\n                            </tr>\r\n                       \t\t</tbody>\r\n                    \t</table>\r\n                        <div class=\"col-12 paginationonAction\">\r\n                            <span class=\"total\">{{collectionSize}} Total</span>\r\n                            <ngb-pagination *ngIf=\"users && users.length > 5\" [pageSize]=\"pageSize\" [(page)]=\"p\" [maxSize]=\"5\" [rotate]=\"true\" [collectionSize]=\"collectionSize\" [boundaryLinks]=\"true\" style=\"float: right;\"></ngb-pagination>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/users/subscribers/subscribers.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/users/subscribers/subscribers.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3N1YnNjcmliZXJzL3N1YnNjcmliZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/subscribers/subscribers.component.ts":
/*!************************************************************!*\
  !*** ./src/app/users/subscribers/subscribers.component.ts ***!
  \************************************************************/
/*! exports provided: SubscribersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribersComponent", function() { return SubscribersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_data_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data/user.service */ "./src/app/shared/data/user.service.ts");
/* harmony import */ var _shared_data_lists_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/data/lists.service */ "./src/app/shared/data/lists.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubscribersComponent = /** @class */ (function () {
    function SubscribersComponent(userservice, listsservice, router, route) {
        this.userservice = userservice;
        this.listsservice = listsservice;
        this.router = router;
        this.route = route;
        this.users = [];
        this.isListAdmin = false;
        this.p = 1;
        this.pageSize = 5;
        if (localStorage.getItem('isListAdmin') == 'true') {
            this.isListAdmin = true;
        }
    }
    SubscribersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listsservice.getlist(new Date().getTime()).then(function (data) {
            console.log(data['lists']);
            _this.listDetails = data['lists'];
        }, function (error) {
        });
        if (this.isListAdmin) {
            var listId = JSON.parse(localStorage.getItem('currentUser'));
            this.userservice.getUsersSubscriptionList(listId['admin_listid'], new Date().getTime()).then(function (data) {
                console.log(data['users']);
                _this.users = data['users'];
                _this.collectionSize = data['users'].length;
            });
        }
        else {
            this.userservice.getUsersSubscribtion(new Date().getTime()).then(function (data) {
                console.log(data['users']);
                _this.users = data['users'];
                _this.collectionSize = data['users'].length;
            }, function (error) {
            });
        }
    };
    SubscribersComponent.prototype.selectUser = function (value) {
        var _this = this;
        this.p = 1;
        if (value != '') {
            this.userservice.getUsersSubscriptionList(value, new Date().getTime()).then(function (data) {
                console.log(data['users']);
                _this.users = data['users'];
                if (data['users']) {
                    _this.collectionSize = data['users'].length;
                }
                else {
                    _this.collectionSize = 0;
                }
            });
        }
        else {
            this.userservice.getUsersSubscribtion(new Date().getTime()).then(function (data) {
                console.log(data['users']);
                _this.users = data['users'];
                _this.collectionSize = data['users'].length;
            }, function (error) {
            });
        }
    };
    SubscribersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subscribers',
            template: __webpack_require__(/*! ./subscribers.component.html */ "./src/app/users/subscribers/subscribers.component.html"),
            styles: [__webpack_require__(/*! ./subscribers.component.scss */ "./src/app/users/subscribers/subscribers.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_data_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _shared_data_lists_service__WEBPACK_IMPORTED_MODULE_3__["ListsService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SubscribersComponent);
    return SubscribersComponent;
}());



/***/ }),

/***/ "./src/app/users/users-list/users-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/users/users-list/users-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"paging\" class=\"mb-3\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"content-header\">Members</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"showTable\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <!-- <div class=\"card-header\">\r\n                  <div class=\"card-title-wrap bar-info\">\r\n                    <h4 class=\"card-title\">Table Paging</h4>\r\n                  </div>\r\n                </div> -->\r\n        <div class=\"card-header\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <ngb-tabset (tabChange)=\"selectUser($event)\">\r\n                <ngb-tab title=\"Members\" id=\"all\" active=\"SelectedTab == 'all'\">\r\n                  <ng-template ngbTabContent>\r\n                  </ng-template>\r\n                </ngb-tab>\r\n                <!-- <ngb-tab title=\"Recently Renewed Members\" id=\"y\" active=\"SelectedTab == 'newRenewal'\">\r\n                              <ng-template ngbTabContent>\r\n                              </ng-template>\r\n                            </ngb-tab>\r\n                            <ngb-tab title=\"Renewal Pending Members\" id=\"n\" active=\"SelectedTab == 'renewalPending'\">\r\n                              <ng-template ngbTabContent>\r\n                              </ng-template>\r\n                            </ngb-tab> -->\r\n              </ngb-tabset>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"search.text\"  placeholder=\"Search...\">\r\n                <!-- (keyup)='updateFilter($event)' -->\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <select class=\"form-control\" [(ngModel)]=\"search.membership\">\r\n                  <!-- (change)=\"membershipFilter($event)\" -->\r\n                  <option value=''>Filter Membership</option>\r\n                  <option *ngFor=\"let member of members\" value=\"{{member.id}}\">{{member.plans}} {{member.duration}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n              <div class=\"form-group\">\r\n                <!-- <ui-switch [(ngModel)]=\"active\" (change)=\"onChange()\"></ui-switch> -->\r\n                <select class=\"form-control\" [(ngModel)]=\"search.status\">\r\n                  <!-- (change)=\"UserFilter($event)\" -->\r\n                  <option value=''>User Status</option>\r\n                  <option value=\"\">All</option>\r\n                  <option value=\"y\">Active</option>\r\n                  <option value=\"n\">Inactive</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-3\">\r\n              <div class=\"form-group\" style=\"display: inline-flex;\">\r\n                <a class=\"btn btn-info btn-round btn-raised mr-2\" (click)=\"searchusers()\">Filter Users</a>               \r\n                <a class=\"btn btn-primary btn-round btn-raised\" (click)=\"CleasrSearch()\">Clear Filter</a>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"col-2\">\r\n              <div class=\"form-group\">\r\n                <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\r\n                  Select Columns\r\n                </button>\r\n                <div id=\"collapseExample\" class=\"selected-column\" [ngbCollapse]=\"!isCollapsed\">\r\n                  <ul>\r\n                    <li *ngFor='let col of allColumns'>\r\n                      <input type='checkbox' [id]=\"col.name\" (click)='toggle(col)' [checked]='isChecked(col)' />\r\n                      <label [attr.for]=\"col.name\">{{col.name}}</label>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div> -->\r\n            <div class=\"col-2\">\r\n              <div class=\"form-group\">\r\n                <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-bitbucket float-right\" (click)=\"addUser()\"><span class=\"ft-plus\"></span> Add Member</a>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div>\r\n            <ngx-datatable #table class='material' class='bootstrap' [rows]='dataSource' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"10\" [loadingIndicator]=\"isLoading\">\r\n              <ngx-datatable-column *ngFor=\"let col of columns\" [name]=\"col.name\">\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Role\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  <span class=\"badge badge-primary\">{{row.role}}</span>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Action\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  <a class=\"success p-0\" data-original-title=\"\" title=\"\" *ngIf=\"SelectedTab != 'b'\" (click)=\"edituser(row.id)\">\r\n                    <i class=\"fas fa-pencil-alt font-medium-3 mr-2\"></i>\r\n                  </a>\r\n                  <a class=\"danger p-0\" data-original-title=\"\" title=\"\" *ngIf=\"SelectedTab != 'b'\" (click)=\"userdelete(row.id, row.email)\">\r\n                    <i class=\"fas fa-trash font-medium-3 mr-2\"></i>\r\n                  </a>\r\n                  <a class=\"danger p-0\" data-original-title=\"\" title=\"\" *ngIf=\"SelectedTab == 'b'\" (click)=\"removeblacklisteduser(row.id)\">\r\n                    <i class=\"fas fa-trash font-medium-3 mr-2\"></i>\r\n                  </a>\r\n                  <a class=\"success p-0\" data-original-title=\"\" title=\"\" *ngIf=\"row.status == 'y' && SelectedTab != 'b'\" (click)=\"userdeactivate('n', row.id, row.email)\" style=\"color: #f74961 !important;\">\r\n                    <i class=\"fas fa-ban font-medium-3 mr-2\" title=\"Deactivate\"></i>\r\n                  </a>\r\n                  <a class=\"success p-0\" data-original-title=\"\" title=\"\" *ngIf=\"SelectedTab != 'b' && (row.status == 'n' || row.status == '')\"\r\n                    (click)=\"useractivate('y', row.id, row.email, row.FirstName, row.LastName, row.address, row.phone, row.city, row.state)\" style=\"color: #666EE8 !important;\">\r\n                    <i class=\"fas fa-power-off font-3 mr-2\" title=\"Activate\"></i>\r\n                  </a>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n            </ngx-datatable>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"!showTable && !showInvite\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <!-- <div class=\"card-header\">\r\n                    <div class=\"card-title-wrap bar-success\">\r\n                        <h4 class=\"card-title\">Regular Form (Reactive Form)</h4>\r\n                    </div>\r\n                </div> -->\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <form #adduser=\"ngForm\" class=\"editForm\" novalidate>\r\n              <!-- <form #adduser=\"ngForm\" class=\"editForm\" *ngIf=\"!isSuperAdmin\" novalidate> -->\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label>Username</label>\r\n                    <input required [(ngModel)]=\"users.username\" name=\"username\" [ngClass]=\"{ 'is-invalid': adduser.submitted && username.invalid }\" class=\"form-control\" id=\"username\" #username=\"ngModel\" placeholder=\"Enter Username\" type=\"text\">\r\n                    <small class=\"form-text text-muted danger\" *ngIf=\"adduser.submitted && username.invalid\">Please enter a valid username!</small>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label>Password</label>\r\n                    <input required [(ngModel)]=\"users.password\" [ngClass]=\"{ 'is-invalid': adduser.submitted && password.invalid }\" class=\"form-control\" id=\"password\" name=\"password\" #password=\"ngModel\" placeholder=\"Enter Password\" minlength=\"4\"\r\n                      maxlength=\"24\" type=\"password\">\r\n                    <small class=\"form-text text-muted danger\" *ngIf=\"password.errors?.minlength\">Password characters length must be between 4 and 24 !</small>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label>First Name</label>\r\n                    <input required [(ngModel)]=\"users.firstName\" [ngClass]=\"{ 'is-invalid': adduser.submitted && firstName.invalid }\" class=\"form-control\" id=\"firstName\" #firstName=\"ngModel\" name=\"firstName\" placeholder=\"Enter First Name\"\r\n                      type=\"text\">\r\n                    <small class=\"form-text text-muted danger\" *ngIf=\"adduser.submitted && firstName.invalid\">Please enter a valid firstName!</small>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label>Last Name</label>\r\n                    <input required [(ngModel)]=\"users.lastName\" [ngClass]=\"{ 'is-invalid': adduser.submitted && lastName.invalid }\" class=\"form-control\" id=\"lastName\" #lastName=\"ngModel\" name=\"lastName\" placeholder=\"Enter Last Name\" type=\"text\">\r\n                    <small class=\"form-text text-muted danger\" *ngIf=\"adduser.submitted && lastName.invalid\">Please enter a valid lastName!</small>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label>Email</label>\r\n                    <input required [(ngModel)]=\"users.email\" [ngClass]=\"{ 'is-invalid': adduser.submitted && email.invalid }\" class=\"form-control\" id=\"email\" #email=\"ngModel\" name=\"email\" email placeholder=\"Enter Email\" type=\"email\">\r\n                    <small class=\"form-text text-muted danger\" *ngIf=\"adduser.submitted && email.invalid\">Please enter a valid email!</small>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label>DOB</label>\r\n                    <input required [(ngModel)]=\"users.dob\" [ngClass]=\"{ 'is-invalid': adduser.submitted && dob.invalid }\" class=\"form-control\" id=\"dob\" #dob=\"ngModel\" name=\"dob\" type=\"date\">\r\n                    <small class=\"form-text text-muted danger\" *ngIf=\"adduser.submitted && dob.invalid\">Please enter a valid dob!</small>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class>Gender</label>\r\n                    <div class=\"custom-control custom-radio display-block\">\r\n                      <input type=\"radio\" id=\"F\" value=\"F\" name=\"genderRadios\" class=\"custom-control-input\" required [(ngModel)]=\"users.genderRadios\" #genderRadios=\"ngModel\" [ngClass]=\"{ 'is-invalid': adduser.submitted && genderRadios.invalid }\">\r\n                      <label class=\"custom-control-label\" for=\"F\">Female</label>\r\n                    </div>\r\n                    <div class=\"custom-control custom-radio display-block\">\r\n                      <input type=\"radio\" id=\"M\" value=\"M\" name=\"genderRadios\" class=\"custom-control-input\" required [(ngModel)]=\"users.genderRadios\" #genderRadios=\"ngModel\" [ngClass]=\"{ 'is-invalid': adduser.submitted && genderRadios.invalid }\">\r\n                      <label class=\"custom-control-label\" for=\"M\">Male</label>\r\n                    </div>\r\n                    <small class=\"form-text text-muted danger\" *ngIf=\"adduser.submitted && genderRadios.invalid\">Please choose Gender!</small>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label>Phone</label>\r\n                    <input required [(ngModel)]=\"users.phone\" [ngClass]=\"{ 'is-invalid': adduser.submitted && phone.invalid }\" class=\"form-control\" id=\"phone\" #phone=\"ngModel\" name=\"phone\" type=\"text\" maxlength=\"10\" (keypress)=\"isNumberKey($event)\">\r\n                    <small class=\"form-text text-muted danger\" *ngIf=\"adduser.submitted && phone.invalid\">Please enter valid phone number!</small>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label>Subscriber List</label>\r\n                    <select required [(ngModel)]=\"users.sublist\" [ngClass]=\"{ 'is-invalid': adduser.submitted && sublist.invalid }\" class=\"form-control\" id=\"sublist\" #sublist=\"ngModel\" name=\"sublist\">\r\n                      <option value=''>Select List</option>\r\n                      <option *ngFor=\"let list of listDetails\" value=\"{{list.id}}\">{{list.name}}</option>\r\n                    </select>\r\n                    <small class=\"form-text text-muted danger\" *ngIf=\"(adduser.submitted && sublist.invalid && sublist.value == '')\">Please select a subscriber.</small>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label>Address</label>\r\n                    <input required [(ngModel)]=\"users.address\" [ngClass]=\"{ 'is-invalid': adduser.submitted && address.invalid }\" class=\"form-control\" id=\"address\" #address=\"ngModel\" name=\"address\" ngx-google-places-autocomplete [options]='options'\r\n                      #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\" />\r\n                    <small class=\"form-text text-muted danger\" *ngIf=\"adduser.submitted && address.invalid\">Please enter a valid address!</small>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label>Select Membership</label>\r\n                    <select required [(ngModel)]=\"users.membership\" [ngClass]=\"{ 'is-invalid': adduser.submitted && membership.invalid }\" class=\"form-control\" id=\"membership\" #membership=\"ngModel\" name=\"membership\">\r\n                      <option value=''>Select List</option>\r\n                      <option *ngFor=\"let member of members\" value=\"{{member.id}}\">{{member.plans}} {{member.duration}}</option>\r\n                    </select>\r\n                    <small class=\"form-text text-muted danger\" *ngIf=\"(adduser.submitted && membership.invalid && membership.value == '')\">Please select a Membership.</small>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-3\" *ngIf=\"users.membership != ''\">\r\n                  <div class=\"form-group\">\r\n                    <label>Confirm Membership Fees Paid</label>\r\n                    <div class=\"custom-control custom-radio display-block\">\r\n                      <input type=\"radio\" id=\"y\" value=\"y\" name=\"paymentRadios\" class=\"custom-control-input\" required [(ngModel)]=\"users.paymentRadios\" #paymentRadios=\"ngModel\" [ngClass]=\"{ 'is-invalid': adduser.submitted && paymentRadios.invalid }\">\r\n                      <label class=\"custom-control-label\" for=\"y\">Yes</label>\r\n                    </div>\r\n                    <div class=\"custom-control custom-radio display-block\">\r\n                      <input type=\"radio\" id=\"n\" value=\"n\" name=\"paymentRadios\" class=\"custom-control-input\" required [(ngModel)]=\"users.paymentRadios\" #paymentRadios=\"ngModel\" [ngClass]=\"{ 'is-invalid': adduser.submitted && paymentRadios.invalid }\">\r\n                      <label class=\"custom-control-label\" for=\"n\">No</label>\r\n                    </div>\r\n                    <small class=\"form-text text-muted danger\" *ngIf=\"adduser.submitted && users.membership != '' && paymentRadios.invalid\">Please Select!</small>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-3\" *ngIf=\"users.membership != '' && users.paymentRadios == 'y'\">\r\n                  <div class=\"form-group\">\r\n                    <label>Add Receipt Number</label>\r\n                    <div class=\"custom-control custom-radio display-block\">\r\n                      <input type=\"text\" name=\"receiptNumber\" class=\"form-control\" placeholder=\"Enter Receipt Number\" required [(ngModel)]=\"users.receiptNumber\" [ngClass]=\"{ 'is-invalid': adduser.submitted && receiptNumber.invalid }\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label>Membership Card</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Membership Card\" required [(ngModel)]=\"users.subId\" id=\"subId\" #subId=\"ngModel\" name=\"subId\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\" *ngIf=\"isSuperAdmin\">\r\n                <label for=\"role\">Role</label>\r\n                <select class=\"form-control\" name=\"role\" [(ngModel)]=\"users.role\" #role=\"ngModel\" [ngClass]=\"{ 'is-invalid': adduser.submitted && role.invalid }\" required>\r\n                  <option value=\"\">Select Role</option>\r\n                  <option *ngFor=\"let role of roles\" value=\"{{role.id}}\">{{role.name}}</option>\r\n                </select>\r\n                <small class=\"form-text text-muted danger\" *ngIf=\"adduser.submitted && role.invalid && users.role == ''\">Please select a role!</small>\r\n              </div>\r\n              <div class=\"form-group\" *ngIf=\"isSuperAdmin\">\r\n                <label for=\"organization\">Organization</label>\r\n                <select class=\"form-control\" name=\"organization\" [(ngModel)]=\"users.organization\" #organization=\"ngModel\" [ngClass]=\"{ 'is-invalid': adduser.submitted && organization.invalid }\" required>\r\n                  <option value=\"\">Select Organization</option>\r\n                  <option *ngFor=\"let organization of organizations\" value=\"{{organization.id}}\">{{organization.name}}</option>\r\n                </select>\r\n                <small class=\"form-text text-muted danger\" *ngIf=\"adduser.submitted && organization.invalid && users.organization == ''\">Please select an organization!</small>\r\n              </div>\r\n              <div class=\"row\" *ngIf=\"extraFields\">\r\n                <div class=\"col-md-12\">\r\n                  <h4 class=\"form-section\">\r\n                    <i class=\"fa-th-list\"></i> Extra Fields</h4>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6\" *ngFor=\"let field of addFields;let i = index\">\r\n                      <div class=\"form-group\" *ngIf=\"field.fieldType == 'text'\">\r\n                        <label>{{field.label}}</label>\r\n                        <input class=\"form-control\" name=\"{{field.fieldName}}\" [(ngModel)]=\"field.fieldName_extra\" #textValue=\"ngModel\" minlength=\"1\" maxlength=\"{{field.length}}\" type=\"text\" [required]=\"field.mandatory\"\r\n                          (change)=\"fieldValueChange(field.id,$event.target.value, field.fieldName)\">\r\n                        <small *ngIf=\"field.validation && (adduser.submitted && textValue.invalid)\" class=\"form-text text-muted danger\">{{field.validationMsg}}</small>\r\n                      </div>\r\n                      <div class=\"form-group\" *ngIf=\"field.fieldType == 'date'\">\r\n                        <label>{{field.label}}</label>\r\n                        <input class=\"form-control\" name=\"{{field.fieldName}}\" [(ngModel)]=\"field.fieldName_extra\" #dateerrorValue=\"ngModel\" type=\"date\" [required]=\"field.mandatory\"\r\n                          (change)=\"fieldValueChange(field.id,$event.target.value, field.fieldName)\">\r\n                        <small *ngIf=\"field.validation && (adduser.submitted && dateerrorValue.invalid)\" class=\"form-text text-muted danger\">{{field.validationMsg}}</small>\r\n                      </div>\r\n                      <div class=\"form-group\" *ngIf=\"field.fieldType == 'number'\">\r\n                        <label>{{field.label}}</label>\r\n                        <input class=\"form-control\" name=\"{{field.fieldName}}\" [(ngModel)]=\"field.fieldName_extra\" minlength=\"0\" maxlength=\"{{field.length}}\" #numbererrorValue=\"ngModel\" [required]=\"field.mandatory\"\r\n                          (change)=\"fieldValueChange(field.id,$event.target.value, field.fieldName)\" (keypress)=\"isNumberKey($event)\">\r\n                        <!-- <input class=\"form-control\" name=\"numberValue\" [(ngModel)]=\"numberValue_i\" *ngIf=\"field.length == '' && field.length <= 0\" type=\"text\" pattern=\"[0-9]\" [required]=\"field.mandatory\" (change)=\"fieldValueChange(field.id,$event.target.value, field.fieldName)\"> -->\r\n                        <small *ngIf=\"field.length != '' && field.length > 0\" class=\"form-text text-muted danger\">Field Length Should not exceed {{field.length}}</small>\r\n                        <small *ngIf=\"field.validation && (adduser.submitted && numbererrorValue.invalid)\" class=\"form-text text-muted danger\">{{field.validationMsg}}</small>\r\n                      </div>\r\n                      <div class=\"form-group\" *ngIf=\"field.fieldType == 'float'\">\r\n                        <label>{{field.label}}</label>\r\n                        <input class=\"form-control\" name=\"{{field.fieldName}}\" [(ngModel)]=\"field.fieldName_extra\" minlength=\"0\" maxlength=\"{{field.length}}\" #floaterrorValue=\"ngModel\" [required]=\"field.mandatory\"\r\n                          (change)=\"fieldValueChange(field.id,$event.target.value, field.fieldName)\" (keypress)=\"isNumberKey($event)\">\r\n                        <!-- <input class=\"form-control\" name=\"floatValue\" [(ngModel)]=\"floatValue_i\" maxlength=\"{{field.length}}\" *ngIf=\"field.length != '' && field.length > 0\" pattern=\"/^[0-9]+(\\.[0-9]{1,2})?$/\" (change)=\"fieldValueChange(field.id,$event.target.value, field.fieldName)\" type=\"text\" [required]=\"field.mandatory\">\r\n                                    <input class=\"form-control\" name=\"floatValue\" [(ngModel)]=\"floatValue_i\" *ngIf=\"field.length == '' && field.length <= 0\" pattern=\"/^[0-9]+(\\.[0-9]{1,2})?$/\" (change)=\"fieldValueChange(field.id,$event.target.value, field.fieldName)\" type=\"text\" [required]=\"field.mandatory\"> -->\r\n                        <small *ngIf=\"field.length != '' && field.length > 0\" class=\"form-text text-muted danger\">Field Length Should not exceed {{field.length}}</small>\r\n                        <small *ngIf=\"field.validation && (adduser.submitted && floaterrorValue.invalid)\" class=\"form-text text-muted danger\">{{field.validationMsg}}</small>\r\n                      </div>\r\n                      <div class=\"form-group\" *ngIf=\"field.fieldType == 'toggle'\">\r\n                        <label>{{field.label}}</label>\r\n                        <ui-switch name=\"{{field.fieldName}}\" [(ngModel)]=\"field.fieldName_extra\" #toggleValue=\"ngModel\" (change)=\"fieldValueChange(field.id,$event, field.fieldName)\" [required]=\"field.mandatory\"></ui-switch>\r\n                        <small *ngIf=\"field.validation && (adduser.submitted && toggleValue.invalid)\" class=\"form-text text-muted danger\">{{field.validationMsg}}</small>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <small class=\"form-text text-muted danger\" *ngIf=\"usernameerror\">Username Already Exists.<br /><br /></small>\r\n              <small class=\"form-text text-muted danger\" *ngIf=\"emailerror\">Email Already Exists.<br /><br /></small>\r\n              <small class=\"form-text text-muted danger\" *ngIf=\"dateerror\">Your age must be 18 or older.<br /><br /></small>\r\n              <div class=\"form-group\">\r\n                <button type=\"button\" class=\"btn btn-danger btn-raised  mr-1\" (click)=\"cancelEdit()\">Cancel</button>\r\n                <button type=\"submit\" class=\"btn btn-success btn-raised\" [disabled]=\"!adduser.valid\" (click)=\"onReactiveFormSubmit()\">Submit <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i></button>\r\n              </div>\r\n            </form>\r\n\r\n            <!-- <form [formGroup]=\"regularForm\" (ngSubmit)=\"onReactiveFormSubmit()\" novalidate *ngIf=\"isSuperAdmin\">\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"usernameerror\">Username Already Exits.<br/><br/></small>\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"emailerror\">Email Already Exits.<br/><br/></small>\r\n                            <div class=\"form-group\">\r\n                                <label>Username</label>\r\n                                <input class=\"form-control\" id=\"username\" formControlName=\"username\" placeholder=\"Enter Username\" type=\"text\">\r\n                                <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('username').valid && (regularForm.get('username').dirty || regularForm.get('username').touched)\">Please enter a valid username!</small>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <label>Password</label>\r\n                                <input class=\"form-control\" id=\"password\" formControlName=\"password\" placeholder=\"Enter Password\" type=\"password\">\r\n                                <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('password').valid && (regularForm.get('password').dirty || regularForm.get('password').touched)\">Please enter a valid password!</small>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <label>First Name</label>\r\n                                <input class=\"form-control\" id=\"firstName\" formControlName=\"firstName\" placeholder=\"Enter First Name\" type=\"text\">\r\n                                <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('firstName').valid && (regularForm.get('firstName').dirty || regularForm.get('firstName').touched)\">Please enter a valid firstName!</small>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <label>Last Name</label>\r\n                                <input class=\"form-control\" id=\"lastName\" formControlName=\"lastName\" placeholder=\"Enter Last Name\" type=\"text\">\r\n                                <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('lastName').valid && (regularForm.get('lastName').dirty || regularForm.get('lastName').touched)\">Please enter a valid lastName!</small>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <label>Email</label>\r\n                                <input class=\"form-control\" id=\"email\" formControlName=\"email\" placeholder=\"Enter Email\" type=\"email\">\r\n                                <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('email').valid && (regularForm.get('email').dirty || regularForm.get('email').touched)\">Please enter a valid email!</small>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <label>DOB</label>\r\n                                <input class=\"form-control\" id=\"dob\" formControlName=\"dob\" type=\"date\">\r\n                                <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('dob').valid && (regularForm.get('dob').dirty || regularForm.get('dob').touched)\">Please enter a valid dob!</small>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <label class>Gender</label>\r\n                                <div class=\"custom-control custom-radio display-block\">\r\n                                    <input type=\"radio\" id=\"genderRadios1\"  value=\"F\" name=\"genderRadios\" class=\"custom-control-input\">\r\n                                    <label class=\"custom-control-label\" for=\"genderRadios1\">Female</label>\r\n                                </div>\r\n                                <div class=\"custom-control custom-radio display-block\">\r\n                                    <input type=\"radio\" id=\"genderRadios2\" value=\"M\" name=\"genderRadios\" class=\"custom-control-input\">\r\n                                    <label class=\"custom-control-label\" for=\"genderRadios2\">Male</label>\r\n                                </div>\r\n                                <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('genderRadios').valid && (regularForm.get('genderRadios').dirty || regularForm.get('genderRadios').touched)\">Please choose Gender!</small>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <label>Phone</label>\r\n                                <input class=\"form-control\" id=\"phone\" formControlName=\"phone\" type=\"text\">\r\n                                <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('phone').valid && (regularForm.get('phone').dirty || regularForm.get('phone').touched)\">Please enter valid phone number!</small>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <label>Subscriber List</label>\r\n                                <select class=\"form-control\" id=\"sublist\" formControlName=\"sublist\">\r\n                                    <option disabled=\"true\">Select Subscriber</option>\r\n                                    <option *ngFor=\"let list of listDetails\" value=\"{{list.id}}\">{{list.name}}</option>\r\n                                </select>\r\n                                <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('sublist').valid && (regularForm.get('sublist').dirty || regularForm.get('sublist').touched)\">Please select a Subscriber!</small>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <label>Address</label>\r\n                                <input class=\"form-control\" id=\"address\" formControlName=\"address\" ngx-google-places-autocomplete [options]='options' #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\"/>\r\n                                <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('address').valid && (regularForm.get('address').dirty || regularForm.get('address').touched)\">Please enter a valid address!</small>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <label for=\"role\">Role</label>\r\n                                <select class=\"form-control\" id=\"role\" formControlName=\"role\">\r\n                                    <option disabled=\"true\">Select Role</option>\r\n                                    <option *ngFor=\"let role of roles\" value=\"{{role.id}}\">{{role.name}}</option>\r\n                                </select>\r\n                                <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('role').valid && (regularForm.get('role').dirty || regularForm.get('role').touched)\">Please select a role!</small>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <label for=\"organization\">Organization</label>\r\n                                <select class=\"form-control\" id=\"organization\" formControlName=\"organization\">\r\n                                    <option disabled=\"true\">Select Organization</option>\r\n                                    <option *ngFor=\"let organization of organizations\" value=\"{{organization.id}}\">{{organization.name}}</option>\r\n                                </select>\r\n                                <small class=\"form-text text-muted danger\" *ngIf=\"!regularForm.get('organization').valid && (regularForm.get('organization').dirty || regularForm.get('organization').touched)\">Please select an organization!</small>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <button type=\"button\" class=\"btn btn-danger btn-raised  mr-1\" (click)=\"cancelEdit()\">Cancel</button>\r\n                                <button type=\"submit\" class=\"btn btn-success btn-raised\" [disabled]=\"!regularForm.valid\">Submit</button>\r\n                            </div>\r\n                        </form> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"!showTable && showInvite\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <form [formGroup]=\"inviteForm\">\r\n              <div class=\"form-group\">\r\n                <label>Email</label>\r\n                <input class=\"form-control\" formControlName=\"inviteEmail\" [(ngModel)]=\"email\" id=\"email\" placeholder=\"Enter Email\" type=\"email\">\r\n                <small class=\"form-text text-muted danger\" *ngIf=\"!inviteForm.get('inviteEmail').valid && (inviteForm.get('inviteEmail').dirty || inviteForm.get('inviteEmail').touched)\">Please enter a valid email!</small>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"role\">Role</label>\r\n                <select class=\"form-control\" id=\"roleId\" formControlName=\"role\" [(ngModel)]=\"roleId\">\r\n                  <option disabled=\"true\">Select Role</option>\r\n                  <option *ngFor=\"let role of roles\" value=\"{{role.id}}\">{{role.name}}</option>\r\n                </select>\r\n                <small class=\"form-text text-muted danger\" *ngIf=\"!inviteForm.get('role').valid && (inviteForm.get('role').dirty || inviteForm.get('role').touched)\">Role is required!</small>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <button type=\"button\" class=\"btn btn-danger btn-raised  mr-1\" (click)=\"cancelEdit()\">Cancel</button>\r\n                <button type=\"submit\" class=\"btn btn-success btn-raised\" [disabled]=\"!inviteForm.valid\" (click)=\"sendInvite(roleId,email)\">Send Invite<i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i></button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/users/users-list/users-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/users/users-list/users-list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected-column {\n  width: 140%;\n  /*margin-right: 20px;\r\n   float: right;*/\n  text-align: left;\n  background: #FFF;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24); }\n\nli {\n  list-style: none; }\n\nul.tablealgn {\n  float: right;\n  text-align: -webkit-auto; }\n\nngx-datatable.bootstrap.ngx-datatable.fixed-header.virtualized {\n  float: left; }\n\n.btnalgn {\n  text-align: -webkit-right; }\n\n.text-right {\n  text-align: right !important;\n  right: -50%; }\n\ndiv#collapseExample ul {\n  display: inline-flex;\n  margin-bottom: 0;\n  margin-left: 0;\n  padding-left: 0; }\n\ndiv#collapseExample ul li {\n  margin-right: 9px; }\n\ndiv#collapseExample ul li label {\n  padding-left: 2px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlcnMtbGlzdC9DOlxcVXNlcnNcXE1SVDIwXFxEZXNrdG9wXFxVTVxcdXNlcm1hbmFnZW1lbnQvc3JjXFxhcHBcXHVzZXJzXFx1c2Vycy1saXN0XFx1c2Vycy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csWUFBVztFQUNYO2tCQUNlO0VBQ2YsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQiw2RUFBNEUsRUFDOUU7O0FBQ0Q7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxhQUFZO0VBQ1oseUJBQXdCLEVBQzNCOztBQUNEO0VBQ0ksWUFBVyxFQUNkOztBQUNEO0VBQ0ssMEJBQ0wsRUFBQzs7QUFDRDtFQUNFLDZCQUE0QjtFQUM1QixZQUFXLEVBQ1o7O0FBQ0Q7RUFDSSxxQkFBb0I7RUFDcEIsaUJBQWdCO0VBQ2hCLGVBQWM7RUFDZCxnQkFBZSxFQUNsQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLWxpc3QvdXNlcnMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3RlZC1jb2x1bW57XHJcbiAgIHdpZHRoOiAxNDAlO1xyXG4gICAvKm1hcmdpbi1yaWdodDogMjBweDtcclxuICAgZmxvYXQ6IHJpZ2h0OyovXHJcbiAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbn1cclxubGl7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbnVsLnRhYmxlYWxnbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWF1dG87XHJcbn1cclxubmd4LWRhdGF0YWJsZS5ib290c3RyYXAubmd4LWRhdGF0YWJsZS5maXhlZC1oZWFkZXIudmlydHVhbGl6ZWQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmJ0bmFsZ24ge1xyXG5cdCAgICB0ZXh0LWFsaWduOiAtd2Via2l0LXJpZ2h0XHJcbn1cclxuLnRleHQtcmlnaHQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgcmlnaHQ6IC01MCU7XHJcbn1cclxuZGl2I2NvbGxhcHNlRXhhbXBsZSB1bCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5kaXYjY29sbGFwc2VFeGFtcGxlIHVsIGxpIHtcclxuICAgIG1hcmdpbi1yaWdodDogOXB4O1xyXG59XHJcbmRpdiNjb2xsYXBzZUV4YW1wbGUgdWwgbGkgbGFiZWwge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/users/users-list/users-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/users/users-list/users-list.component.ts ***!
  \**********************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_data_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/data/user.service */ "./src/app/shared/data/user.service.ts");
/* harmony import */ var _shared_data_lists_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/data/lists.service */ "./src/app/shared/data/lists.service.ts");
/* harmony import */ var _shared_data_organization_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/data/organization.service */ "./src/app/shared/data/organization.service.ts");
/* harmony import */ var _shared_data_addFields_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/data/addFields.service */ "./src/app/shared/data/addFields.service.ts");
/* harmony import */ var _shared_data_membership_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/data/membership.service */ "./src/app/shared/data/membership.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};












var UsersListComponent = /** @class */ (function () {
    function UsersListComponent(addFieldsService, membershipService, snotifyService, organizationservice, listsservice, userservice, router, route) {
        var _this = this;
        this.addFieldsService = addFieldsService;
        this.membershipService = membershipService;
        this.snotifyService = snotifyService;
        this.organizationservice = organizationservice;
        this.listsservice = listsservice;
        this.userservice = userservice;
        this.router = router;
        this.route = route;
        this.isLoading = false;
        this.dataSource = [];
        this.p = 1;
        this.pageSize = 10;
        this.style = 'material';
        this.title = 'Snotify title!';
        this.body = 'Lorem ipsum dolor sit amet!';
        this.timeout = 3000;
        this.position = ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyPosition"].centerTop;
        this.progressBar = true;
        this.closeClick = true;
        this.newTop = true;
        this.backdrop = -1;
        this.dockMax = 8;
        this.blockMax = 6;
        this.pauseHover = true;
        this.titleMaxLength = 15;
        this.bodyMaxLength = 80;
        this.usernameerror = false;
        this.emailerror = false;
        this.showTable = true;
        this.isSuperAdmin = false;
        this.isAdmin = false;
        this.showInvite = false;
        this.submitted = false;
        this.options = {
            types: ['geocode'],
            componentRestrictions: { country: 'AU' }
        };
        this.search = {
            'text': '',
            'membership': '',
            'status': ''
        };
        this.extraFields = false;
        this.addFields = [];
        this.toggleValue = false;
        this.FieldsValue = [];
        this.dateerror = false;
        this.users = {
            'username': '',
            'password': '',
            'firstName': '',
            'lastName': '',
            'email': '',
            'dob': '',
            'genderRadios': '',
            'address': '',
            'phone': '',
            'profileImage': '',
            'sublist': '',
            'type': '',
            'role': '',
            'organization': '',
            'fields': '',
            'id': '',
            'address1': '',
            'city': '',
            'state': '',
            'country': '',
            'membership': '',
            'status': 'y',
            'postcode': '',
            'paymentRadios': '',
            'subId': '',
            'receiptNumber': ''
        };
        this.usersModel_extra = {};
        this.columns = [
            { name: 'First Name', width: 40 },
            { name: 'Last Name', width: 40 },
            { name: 'Email', width: 80 },
            { name: 'Address', width: 80 },
            { name: 'Phone', width: 30 },
            { name: 'Next Renewal Due Date', width: 20 }
        ];
        this.allColumns = [
            { name: 'First Name' },
            { name: 'Last Name' },
            { name: 'Email' },
            { name: 'Address' },
            { name: 'Phone' },
            { name: 'City' },
            { name: 'State' },
            { name: 'Next Renewal Due Date' }
        ];
        this.isCollapsed = false;
        this.filteredData = [];
        this.originalDataSource = [];
        this.activeUL = true;
        var users = JSON.parse(localStorage.getItem('currentUser'));
        if (users) {
            if (users['role_id'] == '2') {
                this.isSuperAdmin = true;
            }
            if (users['role_id'] == '1') {
                this.isAdmin = true;
            }
            this.storeName = users['name'];
        }
        this.userId = users;
        this.SelectedTab = 'all';
        this.membershipService.getMembership().then(function (data) {
            if (data['membership']) {
                _this.members = data['membership'];
            }
        }, function (error) {
        });
        this.isLoading = true;
        console.log('Selected - ' + this.selectedTab);
    }
    UsersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inviteForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'inviteEmail': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            'role': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        var store;
        if (this.storeName.startsWith("Auto One")) {
            store = this.storeName;
        }
        else {
            store = '';
        }
        this.userservice.getUsers(store, new Date().getTime()).then(function (data) {
            console.log(data['user']);
            if (data['status'] == 'success') {
                _this.dataSource = data['user'];
                _this.originalDataSource = data['user'];
                _this.filteredData = data['user'];
                _this.collectionSize = data['user'].length;
                _this.isLoading = false;
            }
        }, function (error) {
        });
        this.addFieldsService.getFieldsByTable('users').then(function (data) {
            if (data['status'] == 'success') {
                for (var i = 0; i < data['fields'].length; i++) {
                    var fields = JSON.parse(data['fields'][i]['fields']);
                    _this.addFields.push({
                        'label': fields['label'],
                        'datatype': fields['datatype'],
                        'length': fields['length'],
                        'mandatory': fields['mandatory'],
                        'validation': fields['validation'],
                        'validationMsg': fields['validationMsg'],
                        'fieldType': fields['fieldType'],
                        'id': data['fields'][i]['id'],
                        'fieldName': fields['fieldName']
                    });
                }
                _this.extraFields = true;
            }
            else {
                _this.extraFields = false;
            }
        });
        this.listsservice.getlist(new Date().getTime()).then(function (data) {
            _this.listDetails = data['lists'];
        });
        this.userservice.getGroups().then(function (data) {
            _this.roles = data['groups'];
        });
        this.organizationservice.getOrganization(new Date().getTime()).then(function (data) {
            _this.organizations = data['organization'];
        });
        if (localStorage.getItem('listadmin') == '1') {
            this.showlistadmin = true;
        }
    };
    UsersListComponent.prototype.UserFilter = function (event) {
        if (event.target.value != '') {
            var val_1 = event.target.value.toLowerCase();
            console.log(this.dataSource.length);
            this.dataSource = this.filteredData.filter(function (c) {
                return c.status === val_1;
            });
            this.filteredData = this.dataSource;
            console.log(this.dataSource.length);
        }
        else {
            this.dataSource = this.originalDataSource;
            this.filteredData = this.originalDataSource;
        }
        this.table.offset = 0;
    };
    UsersListComponent.prototype.updateFilter = function (event) {
        if (event.target.value != '') {
            var val_2 = event.target.value.toLowerCase();
            var keys_1 = Object.keys(this.dataSource[0]);
            var colsAmt_1 = keys_1.length;
            this.dataSource = this.filteredData.filter(function (item) {
                for (var i = 0; i < colsAmt_1; i++) {
                    if (item[keys_1[i]].toString().toLowerCase().indexOf(val_2) !== -1 || !val_2) {
                        return true;
                    }
                }
            });
            this.filteredData = this.dataSource;
        }
        else {
            this.dataSource = this.originalDataSource;
            this.filteredData = this.originalDataSource;
        }
        this.table.offset = 0;
    };
    UsersListComponent.prototype.membershipFilter = function (event) {
        if (event.target.value != '') {
            var val_3 = event.target.value.toLowerCase();
            this.dataSource = this.originalDataSource.filter(function (user) { return user.mId === val_3; });
            this.filteredData = this.dataSource;
        }
        else {
            this.dataSource = this.originalDataSource;
            this.filteredData = this.originalDataSource;
        }
        this.table.offset = 0;
    };
    UsersListComponent.prototype.searchusers = function () {
        this.dataSource = this.originalDataSource;
        if (this.search.membership != '') {
            var val_4 = this.search.membership.toLowerCase();
            this.dataSource = this.dataSource.filter(function (user) { return user.mId === val_4; });
        }
        if (this.search.text != '') {
            var val_5 = this.search.text.toLowerCase();
            var keys_2 = Object.keys(this.dataSource[0]);
            var colsAmt_2 = keys_2.length;
            this.dataSource = this.dataSource.filter(function (item) {
                for (var i = 0; i < colsAmt_2; i++) {
                    if (item[keys_2[i]].toString().toLowerCase().indexOf(val_5) !== -1 || !val_5) {
                        return true;
                    }
                }
            });
        }
        if (this.search.status != '') {
            var val_6 = this.search.status.toLowerCase();
            console.log(this.dataSource.length);
            this.dataSource = this.dataSource.filter(function (c) {
                return c.status === val_6;
            });
            console.log(this.dataSource.length);
        }
        if (this.search.membership == '' && this.search.text == '' && this.search.status == '') {
            this.dataSource = this.originalDataSource;
        }
        this.table.offset = 0;
    };
    UsersListComponent.prototype.fieldValueChange = function (id, value, fieldName) {
        if (this.FieldsValue.length > 0) {
            var checkValue = false;
            for (var i = 0; i < this.FieldsValue.length; i++) {
                if (this.FieldsValue[i].id == id) {
                    this.FieldsValue[i].value = value;
                    checkValue = true;
                }
            }
            if (!checkValue) {
                this.FieldsValue.push({ "id": id, "value": value, "fieldName": fieldName });
            }
        }
        else {
            this.FieldsValue.push({ "id": id, "value": value, "fieldName": fieldName });
        }
        console.log('val -' + this.FieldsValue);
    };
    UsersListComponent.prototype.handleAddressChange = function (address) {
        this.newaddress = address.formatted_address;
        console.log(this.getComponentByType(address, "street_number"));
        console.log(this.getComponentByType(address, "route"));
        console.log(this.getComponentByType(address, "locality"));
        console.log(this.getComponentByType(address, "administrative_area_level_1"));
        console.log(this.getComponentByType(address, "postal_code"));
        console.log(this.getComponentByType(address, "country"));
        if (this.getComponentByType(address, "street_number") != '') {
            this.users.address1 = this.getComponentByType(address, "street_number") + ', ';
        }
        if (this.getComponentByType(address, "route") != '') {
            this.users.address1 += this.getComponentByType(address, "route");
        }
        this.users.city = this.getComponentByType(address, "locality");
        this.users.state = this.getComponentByType(address, "administrative_area_level_1");
        this.users.postcode = this.getComponentByType(address, "postal_code");
        this.users.country = this.getComponentByType(address, "country");
        console.log('this.users - ' + JSON.stringify(this.users));
    };
    UsersListComponent.prototype.getComponentByType = function (address, type) {
        if (!type)
            return null;
        if (!address || !address.address_components || address.address_components.length == 0)
            return null;
        type = type.toLowerCase();
        for (var _i = 0, _a = address.address_components; _i < _a.length; _i++) {
            var comp = _a[_i];
            if (!comp.types || comp.types.length == 0)
                continue;
            if (comp.types.findIndex(function (x) { return x.toLowerCase() == type; }) > -1)
                return comp['long_name'];
        }
        return '';
    };
    UsersListComponent.prototype.edituser = function (id) {
        var val = ((id * 5362) / 12345);
        this.router.navigate(['/users/edit-user'], { queryParams: { id: window.btoa(val.toString()), source: 'admin' } });
    };
    UsersListComponent.prototype.removeblacklisteduser = function (id) {
        var _this = this;
        this.userservice.removeblacklisteduser(id).then(function (data) {
            if (data['status'] == 'success') {
                _this.snotifyService.error('User Removed From Blacklisted.', '', _this.getConfig());
                var store = void 0;
                if (_this.storeName.startsWith("Auto One")) {
                    store = _this.storeName;
                }
                else {
                    store = '';
                }
                _this.userservice.getUsersByStatus("b", store, new Date().getTime()).then(function (data) {
                    _this.dataSource = [];
                    _this.collectionSize = [];
                    if (data['status'] == "success") {
                        _this.dataSource = data['user'];
                        _this.collectionSize = data['user'].length;
                    }
                });
            }
        });
    };
    UsersListComponent.prototype.toggle = function (col) {
        var isChecked = this.isChecked(col);
        console.log('isChecked value - ' + isChecked);
        if (isChecked) {
            this.columns = this.columns.filter(function (c) {
                console.log('Name - ' + c.name);
                return c.name !== col.name;
            });
        }
        else {
            this.columns = this.columns.concat([col]);
            console.log('columns - ' + this.columns);
        }
    };
    UsersListComponent.prototype.isChecked = function (col) {
        return this.columns.find(function (c) {
            return c.name === col.name;
        });
    };
    UsersListComponent.prototype.getConfig = function () {
        this.snotifyService.setDefaults({
            global: {
                newOnTop: this.newTop,
                maxAtPosition: this.blockMax,
                maxOnScreen: this.dockMax,
            }
        });
        return {
            bodyMaxLength: this.bodyMaxLength,
            titleMaxLength: this.titleMaxLength,
            backdrop: this.backdrop,
            position: this.position,
            timeout: this.timeout,
            showProgressBar: this.progressBar,
            closeOnClick: this.closeClick,
            pauseOnHover: this.pauseHover
        };
    };
    UsersListComponent.prototype.addUser = function () {
        this.showTable = false;
        this.showInvite = false;
    };
    UsersListComponent.prototype.inviteUser = function () {
        this.showTable = false;
        this.showInvite = true;
    };
    UsersListComponent.prototype.sendInvite = function (id, email) {
        var _this = this;
        this.submitted = true;
        this.userservice.sendEmail(id, email, this.userId['organization_id']).then(function (data) {
            if (data['status'] == 'Failed') {
                _this.snotifyService.error('User Already Exists', '', _this.getConfig());
                _this.submitted = false;
            }
            else if (data['status'] == 'success') {
                _this.getActiveUsers();
                _this.showInvite = false;
                _this.showTable = true;
                _this.submitted = false;
                _this.inviteForm.reset();
                var _a = _this.getConfig(), timeout = _a.timeout, closeOnClick = _a.closeOnClick, config = __rest(_a, ["timeout", "closeOnClick"]);
                _this.snotifyService.confirm('Email Sent successfully!', 'Success', __assign({}, config, { buttons: [
                        { text: 'Ok', action: function (toast) {
                                _this.snotifyService.remove(toast.id);
                            } }
                    ] }));
            }
        });
    };
    UsersListComponent.prototype.selectUser = function (value) {
        var _this = this;
        console.log('Selected - ' + this.selectedTab);
        this.SelectedTab = value.nextId;
        console.log('Selected id - ' + this.SelectedTab);
        var store;
        if (this.storeName.startsWith("Auto One")) {
            store = this.storeName;
        }
        else {
            store = '';
        }
        this.userservice.getUsersByStatus(value.nextId, store, new Date().getTime()).then(function (data) {
            _this.dataSource = [];
            _this.collectionSize = [];
            if (data['status'] == "success") {
                _this.dataSource = data['user'];
                _this.collectionSize = data['user'].length;
            }
        });
    };
    UsersListComponent.prototype.getActiveUsers = function () {
        var _this = this;
        var store;
        if (this.storeName.startsWith("Auto One") || this.storeName.startsWith("National Office")) {
            store = this.storeName;
        }
        else {
            store = '';
        }
        this.userservice.getUsers(store, new Date().getTime()).then(function (data) {
            console.log(data['user']);
            if (data['status'] == 'success') {
                _this.dataSource = data['user'];
                _this.originalDataSource = data['user'];
                _this.filteredData = data['user'];
                _this.collectionSize = data['user'].length;
                _this.isLoading = false;
            }
        }, function (error) {
        });
        // this.userservice.getUsersByStatus('all', store, new Date().getTime()).then(data => {
        //   this.dataSource = [];
        //   this.collectionSize = [];
        //   if(data['status'] == "success"){
        //     this.dataSource = data['user'];
        //     this.collectionSize = data['user'].length;
        //   }
        // });
    };
    UsersListComponent.prototype.cancelEdit = function () {
        this.adduserForm.reset();
        this.submitted = false;
        this.showTable = true;
        this.getActiveUsers();
        //this.SelectedTab = 'y';
        //this.selectUser(this.SelectedTab);
    };
    UsersListComponent.prototype.onReactiveFormSubmit = function () {
        var _this = this;
        if (this.ageCheck()) {
            this.dateerror = false;
            this.submitted = true;
            var role = '';
            var organization = '';
            if (this.adduserForm.invalid) {
                return;
            }
            if (!this.showlistadmin) {
                this.listadmin = 3; // users groupid
            }
            if (!this.isSuperAdmin) {
                this.users.role = '3';
                this.users.organization = localStorage.getItem('oi');
            }
            var dynamicfields = '';
            if (this.extraFields) {
                this.users.fields = JSON.stringify(this.FieldsValue);
            }
            else {
                this.users.fields = '';
            }
            this.users.address = this.newaddress;
            this.userservice.addUser(this.users).then(function (data) {
                if (data['status'] == "success") {
                    _this.snotifyService.success('User Added Successfully', '', _this.getConfig());
                    _this.showTable = true;
                    _this.showInvite = false;
                    _this.getActiveUsers();
                    _this.adduserForm.reset();
                    _this.submitted = false;
                    //this.router.navigate(['/users/users']);
                }
                else if (data['status'] == "Failed") {
                    _this.submitted = false;
                }
                else if (data['status'] == "User Exits") {
                    if (data['value'] == "Username Already Exits.") {
                        _this.usernameerror = true;
                        _this.emailerror = false;
                        _this.submitted = false;
                    }
                    else {
                        _this.emailerror = true;
                        _this.usernameerror = false;
                        _this.submitted = false;
                    }
                }
            });
        }
        else {
            this.submitted = false;
            this.dateerror = true;
            this.users.dob = '';
        }
    };
    UsersListComponent.prototype.ageCheck = function () {
        var today = new Date();
        var birthDate = new Date(this.users.dob);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 18) {
            return false;
        }
        else {
            return true;
        }
    };
    UsersListComponent.prototype.isNumberKey = function (evt) {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    UsersListComponent.prototype.blacklistUser = function () {
        var self = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
            title: "<h5>Email</h5>",
            input: "text",
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save'
        }).then(function (save) {
            console.log(JSON.stringify(save));
            if (save.value) {
                self.saveBlacklistUser(save.value);
            }
        });
    };
    UsersListComponent.prototype.saveBlacklistUser = function (value) {
        var _this = this;
        this.userservice.getSubscribedListsFromEmail(value).then(function (data) {
            console.log('response from service in template', data);
            if (data['status'] == 'success') {
                _this.snotifyService.success('Blacklisted User Successfully', '', _this.getConfig());
            }
            else if (data['status'] == "user blacklisted") {
                _this.snotifyService.success('User is already blacklisted', '', _this.getConfig());
            }
        });
    };
    UsersListComponent.prototype.deleteuser = function (id, email) {
        var _this = this;
        this.userservice.deleteUser(id).then(function (data) {
            var store;
            if (_this.storeName.startsWith("Auto One")) {
                store = _this.storeName;
            }
            else {
                store = '';
            }
            _this.userservice.getUsertime(store, new Date().getTime()).then(function (data) {
                if (data['status'] == 'success') {
                    _this.dataSource = data['user'];
                    _this.collectionSize = data['user'].length;
                }
            });
            _this.snotifyService.error('Deleted Successfully', '', _this.getConfig());
        }, function (error) {
        });
    };
    UsersListComponent.prototype.userdelete = function (id, email) {
        var self = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
            title: 'Are you sure want to delete?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0CC27E',
            cancelButtonColor: '#FF586B',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No, cancel!',
            confirmButtonClass: 'btn btn-success btn-raised mr-5',
            cancelButtonClass: 'btn btn-danger btn-raised',
            buttonsStyling: false
        }).then(function (yes) {
            console.log(JSON.stringify(yes));
            if (yes.value) {
                self.deleteuser(id, email);
            }
        }, function (dismiss) {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            /* if (dismiss === 'cancel') {
                 swal(
                     'Cancelled',
                     'Your imaginary file is safe :)',
                     'error'
                 )
             }*/
        });
    };
    UsersListComponent.prototype.deactivate = function (val, id, email, fname, lname) {
        var _this = this;
        console.log('deactivate Ev - ' + this.SelectedTab);
        console.log('deactivate val - ' + val);
        this.userservice.deactivateUsers(val, id).then(function (data) {
            if (val == 'y') {
                _this.userservice.registerSuccessEmail(id, email, (fname + ' ' + lname)).then(function (data) {
                    //console.log('Email Sent - ' + JSON.stringify(data));
                });
            }
            _this.dataSource = [];
            _this.collectionSize = [];
            var store;
            if (_this.storeName.startsWith("Auto One") || _this.storeName.startsWith("National Office")) {
                store = _this.storeName;
            }
            else {
                store = '';
            }
            _this.userservice.getUsersByStatus(_this.SelectedTab, store, new Date().getTime()).then(function (data) {
                _this.dataSource = [];
                _this.collectionSize = [];
                if (data['status'] == "success") {
                    _this.dataSource = data['user'];
                    _this.collectionSize = data['user'].length;
                }
            });
            if (val == 'n') {
                _this.snotifyService.success('Deactivated Successfully', '', _this.getConfig());
            }
            else if (val == 'y') {
                _this.snotifyService.success('Activated Successfully', '', _this.getConfig());
            }
        });
    };
    UsersListComponent.prototype.userdeactivate = function (y, id, email, fname, lname) {
        var self = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
            title: 'Are you sure want to?',
            text: "",
            type: 'warning',
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonColor: '#0CC27E',
            cancelButtonColor: '#FF586B',
            confirmButtonText: 'Deactivate',
            cancelButtonText: 'Cancel',
            confirmButtonClass: 'btn btn-success btn-raised mr-5',
            cancelButtonClass: 'btn btn-danger btn-raised',
            buttonsStyling: false
        }).then(function (deactivate) {
            console.log(JSON.stringify(deactivate));
            if (deactivate.value) {
                self.deactivate(y, id, email, fname, lname);
            }
        }, function (dismiss) {
            if (dismiss === 'cancel') {
            }
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
        });
    };
    UsersListComponent.prototype.useractivate = function (n, id, email, fname, lname) {
        var self = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
            title: 'Are you sure?',
            text: "",
            type: 'warning',
            showCancelButton: true,
            showCloseButton: true,
            confirmButtonColor: '#0CC27E',
            cancelButtonColor: '#FF586B',
            confirmButtonText: 'Activate',
            cancelButtonText: 'Cancel',
            confirmButtonClass: 'btn btn-success btn-raised mr-5',
            cancelButtonClass: 'btn btn-danger btn-raised',
            buttonsStyling: false
        }).then(function (activate) {
            console.log(JSON.stringify(activate));
            if (activate.value) {
                self.deactivate(n, id, email, fname, lname);
            }
        }, function (dismiss) {
            if (dismiss === 'cancel') {
            }
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
        });
    };
    UsersListComponent.prototype.CleasrSearch = function () {
        this.search.text = '';
        this.search.membership = '';
        this.search.status = '';
        this.dataSource = this.originalDataSource;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('adduser'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], UsersListComponent.prototype, "adduserForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["DatatableComponent"])
    ], UsersListComponent.prototype, "table", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("placesRef"),
        __metadata("design:type", ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_4__["GooglePlaceDirective"])
    ], UsersListComponent.prototype, "placesRef", void 0);
    UsersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users-list',
            template: __webpack_require__(/*! ./users-list.component.html */ "./src/app/users/users-list/users-list.component.html"),
            styles: [__webpack_require__(/*! ./users-list.component.scss */ "./src/app/users/users-list/users-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_data_addFields_service__WEBPACK_IMPORTED_MODULE_8__["AddFieldsService"], _shared_data_membership_service__WEBPACK_IMPORTED_MODULE_9__["MembershipService"], ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"], _shared_data_organization_service__WEBPACK_IMPORTED_MODULE_7__["OrganizationService"], _shared_data_lists_service__WEBPACK_IMPORTED_MODULE_6__["ListsService"], _shared_data_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], UsersListComponent);
    return UsersListComponent;
}());



/***/ }),

/***/ "./src/app/users/users-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/users/users-routing.module.ts ***!
  \***********************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_users_add_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-users/add-users.component */ "./src/app/users/add-users/add-users.component.ts");
/* harmony import */ var _subscribers_subscribers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscribers/subscribers.component */ "./src/app/users/subscribers/subscribers.component.ts");
/* harmony import */ var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users-list/users-list.component */ "./src/app/users/users-list/users-list.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/users/edit-user/edit-user.component.ts");
/* harmony import */ var _move_users_move_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./move-users/move-users.component */ "./src/app/users/move-users/move-users.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/users/profile/profile.component.ts");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lists/lists.component */ "./src/app/lists/lists.component.ts");
/* harmony import */ var _segments_segments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./segments/segments.component */ "./src/app/users/segments/segments.component.ts");
/* harmony import */ var _checkin_checkin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./checkin/checkin.component */ "./src/app/users/checkin/checkin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        children: [
            {
                path: 'add-user',
                component: _add_users_add_users_component__WEBPACK_IMPORTED_MODULE_2__["AddUsersComponent"],
                data: {
                    title: 'Add User'
                }
            },
            {
                path: 'subscribers',
                component: _subscribers_subscribers_component__WEBPACK_IMPORTED_MODULE_3__["SubscribersComponent"],
                data: {
                    title: 'Subscribers'
                }
            },
            {
                path: 'users',
                component: _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_4__["UsersListComponent"],
                data: {
                    title: 'Users'
                }
            },
            {
                path: 'lists',
                component: _lists_lists_component__WEBPACK_IMPORTED_MODULE_8__["ListsComponent"],
                data: {
                    title: 'Lists'
                }
            },
            {
                path: 'edit-user',
                component: _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_5__["EditUserComponent"],
                data: {
                    title: 'Edit User'
                }
            },
            {
                path: 'move-users',
                component: _move_users_move_users_component__WEBPACK_IMPORTED_MODULE_6__["MoveUsersComponent"],
                data: {
                    title: 'Move Users'
                }
            },
            {
                path: 'profile',
                component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                data: {
                    title: 'User Profile'
                }
            },
            {
                path: 'segments',
                component: _segments_segments_component__WEBPACK_IMPORTED_MODULE_9__["SegmentsComponent"],
                data: {
                    title: 'Segments'
                }
            },
            {
                path: 'checkin',
                component: _checkin_checkin_component__WEBPACK_IMPORTED_MODULE_10__["CheckinComponent"],
                data: {
                    title: 'checkin'
                }
            },
        ]
    }
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/users/users-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _add_users_add_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-users/add-users.component */ "./src/app/users/add-users/add-users.component.ts");
/* harmony import */ var _subscribers_subscribers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subscribers/subscribers.component */ "./src/app/users/subscribers/subscribers.component.ts");
/* harmony import */ var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users-list/users-list.component */ "./src/app/users/users-list/users-list.component.ts");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lists/lists.component */ "./src/app/lists/lists.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/users/edit-user/edit-user.component.ts");
/* harmony import */ var _move_users_move_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./move-users/move-users.component */ "./src/app/users/move-users/move-users.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/users/profile/profile.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es5.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-select-dropdown */ "./node_modules/ngx-select-dropdown/dist/index.js");
/* harmony import */ var _segments_segments_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./segments/segments.component */ "./src/app/users/segments/segments.component.ts");
/* harmony import */ var _checkin_checkin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./checkin/checkin.component */ "./src/app/users/checkin/checkin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_3__["CustomFormsModule"],
                _users_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsersRoutingModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"],
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_17__["GooglePlaceModule"],
                ngx_ui_switch__WEBPACK_IMPORTED_MODULE_15__["UiSwitchModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__["NgxDatatableModule"],
                ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_18__["SelectDropDownModule"]
            ],
            declarations: [
                _add_users_add_users_component__WEBPACK_IMPORTED_MODULE_7__["AddUsersComponent"],
                _subscribers_subscribers_component__WEBPACK_IMPORTED_MODULE_8__["SubscribersComponent"],
                _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_9__["UsersListComponent"],
                _lists_lists_component__WEBPACK_IMPORTED_MODULE_10__["ListsComponent"],
                _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_11__["EditUserComponent"],
                _move_users_move_users_component__WEBPACK_IMPORTED_MODULE_12__["MoveUsersComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _segments_segments_component__WEBPACK_IMPORTED_MODULE_19__["SegmentsComponent"],
                _checkin_checkin_component__WEBPACK_IMPORTED_MODULE_20__["CheckinComponent"]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

}]);
//# sourceMappingURL=users-users-module.js.map