(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feedback-feedback-module"],{

/***/ "./node_modules/angular-formio/auth/auth.config.js":
/*!*********************************************************!*\
  !*** ./node_modules/angular-formio/auth/auth.config.js ***!
  \*********************************************************/
/*! exports provided: FormioAuthFormConfig, FormioAuthRouteConfig, FormioAuthConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormioAuthFormConfig", function() { return FormioAuthFormConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormioAuthRouteConfig", function() { return FormioAuthRouteConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormioAuthConfig", function() { return FormioAuthConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @record
 */
function FormioAuthFormConfig() { }
if (false) {}
/**
 * @record
 */
function FormioAuthRouteConfig() { }
if (false) {}
var FormioAuthConfig = /** @class */ (function () {
    function FormioAuthConfig() {
    }
    FormioAuthConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return FormioAuthConfig;
}());

if (false) {}


/***/ }),

/***/ "./node_modules/angular-formio/auth/auth.service.js":
/*!**********************************************************!*\
  !*** ./node_modules/angular-formio/auth/auth.service.js ***!
  \**********************************************************/
/*! exports provided: FormioAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormioAuthService", function() { return FormioAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.config */ "./node_modules/angular-formio/auth/auth.config.js");
/* harmony import */ var _formio_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../formio.config */ "./node_modules/angular-formio/formio.config.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formiojs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formiojs */ "./node_modules/formiojs/index.js");
/* harmony import */ var formiojs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formiojs__WEBPACK_IMPORTED_MODULE_4__);
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





var FormioAuthService = /** @class */ (function () {
    function FormioAuthService(appConfig, config) {
        var _this = this;
        this.appConfig = appConfig;
        this.config = config;
        this.authenticated = false;
        this.formAccess = {};
        this.submissionAccess = {};
        this.is = {};
        this.user = null;
        if (this.appConfig && this.appConfig.appUrl) {
            formiojs__WEBPACK_IMPORTED_MODULE_4__["Formio"].setBaseUrl(this.appConfig.apiUrl);
            formiojs__WEBPACK_IMPORTED_MODULE_4__["Formio"].setProjectUrl(this.appConfig.appUrl);
            formiojs__WEBPACK_IMPORTED_MODULE_4__["Formio"].formOnly = !!this.appConfig.formOnly;
        }
        else {
            console.error('You must provide an AppConfig within your application!');
        }
        this.loginForm =
            this.appConfig.appUrl +
                '/' +
                Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(this.config, 'login.form', 'user/login');
        this.registerForm =
            this.appConfig.appUrl +
                '/' +
                Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(this.config, 'register.form', 'user/login');
        this.onLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onLogout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ready = new Promise(function (resolve, reject) {
            _this.readyResolve = resolve;
            _this.readyReject = reject;
        });
        // Register for the core events.
        formiojs__WEBPACK_IMPORTED_MODULE_4__["Formio"].events.on('formio.badToken', function () { return _this.logoutError(); });
        formiojs__WEBPACK_IMPORTED_MODULE_4__["Formio"].events.on('formio.sessionExpired', function () { return _this.logoutError(); });
        this.init();
    }
    /**
     * @param {?} submission
     * @return {?}
     */
    FormioAuthService.prototype.onLoginSubmit = /**
     * @param {?} submission
     * @return {?}
     */
    function (submission) {
        this.setUser(submission);
        this.onLogin.emit(submission);
    };
    /**
     * @param {?} submission
     * @return {?}
     */
    FormioAuthService.prototype.onRegisterSubmit = /**
     * @param {?} submission
     * @return {?}
     */
    function (submission) {
        this.setUser(submission);
        this.onRegister.emit(submission);
    };
    /**
     * @return {?}
     */
    FormioAuthService.prototype.init = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.projectReady = formiojs__WEBPACK_IMPORTED_MODULE_4__["Formio"].makeStaticRequest(this.appConfig.appUrl).then(function (project) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_3__["each"])(project.access, function (access) {
                _this.formAccess[access.type] = access.roles;
            });
        }, function () {
            _this.formAccess = {};
            return null;
        });
        // Get the access for this project.
        this.accessReady = formiojs__WEBPACK_IMPORTED_MODULE_4__["Formio"].makeStaticRequest(this.appConfig.appUrl + '/access').then(function (access) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_3__["each"])(access.forms, function (form) {
                _this.submissionAccess[form.name] = {};
                form.submissionAccess.forEach(function (subAccess) {
                    _this.submissionAccess[form.name][subAccess.type] = subAccess.roles;
                });
            });
            _this.roles = access.roles;
            return access;
        }, function () {
            _this.roles = {};
            return null;
        });
        this.userReady = formiojs__WEBPACK_IMPORTED_MODULE_4__["Formio"].currentUser().then(function (user) {
            _this.setUser(user);
            return user;
        });
        // Trigger we are redy when all promises have resolved.
        if (this.accessReady) {
            this.accessReady
                .then(function () { return _this.projectReady; })
                .then(function () { return _this.userReady; })
                .then(function () { return _this.readyResolve(true); })
                .catch(function (err) { return _this.readyReject(err); });
        }
    };
    /**
     * @param {?} user
     * @return {?}
     */
    FormioAuthService.prototype.setUser = /**
     * @param {?} user
     * @return {?}
     */
    function (user) {
        if (user) {
            this.user = user;
            localStorage.setItem('formioAppUser', JSON.stringify(user));
            this.setUserRoles();
        }
        else {
            this.user = null;
            this.is = {};
            localStorage.removeItem('formioAppUser');
            formiojs__WEBPACK_IMPORTED_MODULE_4__["Formio"].clearCache();
            formiojs__WEBPACK_IMPORTED_MODULE_4__["Formio"].setUser(null);
        }
        this.authenticated = !!formiojs__WEBPACK_IMPORTED_MODULE_4__["Formio"].getToken();
        this.onUser.emit(this.user);
    };
    /**
     * @return {?}
     */
    FormioAuthService.prototype.setUserRoles = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.accessReady) {
            this.accessReady.then(function () {
                Object(lodash__WEBPACK_IMPORTED_MODULE_3__["each"])(_this.roles, function (role, roleName) {
                    if (_this.user.roles.indexOf(role._id) !== -1) {
                        _this.is[roleName] = true;
                    }
                });
            });
        }
    };
    /**
     * @return {?}
     */
    FormioAuthService.prototype.logoutError = /**
     * @return {?}
     */
    function () {
        this.setUser(null);
        localStorage.removeItem('formioToken');
        this.onError.emit();
    };
    /**
     * @return {?}
     */
    FormioAuthService.prototype.logout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setUser(null);
        localStorage.removeItem('formioToken');
        formiojs__WEBPACK_IMPORTED_MODULE_4__["Formio"].logout()
            .then(function () { return _this.onLogout.emit(); })
            .catch(function () { return _this.logoutError(); });
    };
    FormioAuthService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    FormioAuthService.ctorParameters = function () { return [
        { type: _formio_config__WEBPACK_IMPORTED_MODULE_2__["FormioAppConfig"] },
        { type: _auth_config__WEBPACK_IMPORTED_MODULE_1__["FormioAuthConfig"] }
    ]; };
    return FormioAuthService;
}());

if (false) {}


/***/ }),

/***/ "./node_modules/angular-formio/grid/GridBodyComponent.js":
/*!***************************************************************!*\
  !*** ./node_modules/angular-formio/grid/GridBodyComponent.js ***!
  \***************************************************************/
/*! exports provided: GridBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridBodyComponent", function() { return GridBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GridHeaderComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GridHeaderComponent */ "./node_modules/angular-formio/grid/GridHeaderComponent.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



var GridBodyComponent = /** @class */ (function () {
    function GridBodyComponent() {
        this.firstItem = 0;
        this.lastItem = 0;
        this.skip = 0;
        this.limit = 0;
        this.total = 0;
        this.rowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loading = true;
    }
    /**
     * @param {?} formio
     * @param {?=} query
     * @return {?}
     */
    GridBodyComponent.prototype.load = /**
     * @param {?} formio
     * @param {?=} query
     * @return {?}
     */
    function (formio, query) {
        return Promise.resolve({});
    };
    /**
     * @param {?} event
     * @param {?} row
     * @return {?}
     */
    GridBodyComponent.prototype.onRowSelect = /**
     * @param {?} event
     * @param {?} row
     * @return {?}
     */
    function (event, row) {
        event.preventDefault();
        this.rowSelect.emit(row);
    };
    /**
     * @param {?} event
     * @param {?} row
     * @param {?} action
     * @return {?}
     */
    GridBodyComponent.prototype.onRowAction = /**
     * @param {?} event
     * @param {?} row
     * @param {?} action
     * @return {?}
     */
    function (event, row, action) {
        event.preventDefault();
        this.rowAction.emit({ row: row, action: action });
    };
    /**
     * Set the rows for this Grid body.
     *
     * @param query
     * @param items
     * @return any
     */
    /**
     * Set the rows for this Grid body.
     *
     * @param {?} query
     * @param {?} items
     * @return {?} any
     */
    GridBodyComponent.prototype.setRows = /**
     * Set the rows for this Grid body.
     *
     * @param {?} query
     * @param {?} items
     * @return {?} any
     */
    function (query, items) {
        var _this = this;
        this.rows = [];
        this.firstItem = query.skip + 1;
        this.lastItem = this.firstItem + items.length - 1;
        this.total = items.serverCount;
        this.limit = query.limit;
        this.skip = Math.floor(items.skip / query.limit) + 1;
        this.loading = false;
        Object(lodash__WEBPACK_IMPORTED_MODULE_1__["each"])(items, function (item) {
            _this.rows.push(item);
        });
        return this.rows;
    };
    GridBodyComponent.propDecorators = {
        header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        actionAllowed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rowSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        rowAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],] }]
    };
    return GridBodyComponent;
}());

if (false) {}


/***/ }),

/***/ "./node_modules/angular-formio/grid/GridFooterComponent.js":
/*!*****************************************************************!*\
  !*** ./node_modules/angular-formio/grid/GridFooterComponent.js ***!
  \*****************************************************************/
/*! exports provided: GridFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridFooterComponent", function() { return GridFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _GridHeaderComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GridHeaderComponent */ "./node_modules/angular-formio/grid/GridHeaderComponent.js");
/* harmony import */ var _GridBodyComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GridBodyComponent */ "./node_modules/angular-formio/grid/GridBodyComponent.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



var GridFooterComponent = /** @class */ (function () {
    function GridFooterComponent() {
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.createItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    GridFooterComponent.propDecorators = {
        header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        createText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        actionAllowed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        createItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],] }]
    };
    return GridFooterComponent;
}());

if (false) {}


/***/ }),

/***/ "./node_modules/angular-formio/grid/GridHeaderComponent.js":
/*!*****************************************************************!*\
  !*** ./node_modules/angular-formio/grid/GridHeaderComponent.js ***!
  \*****************************************************************/
/*! exports provided: GridHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridHeaderComponent", function() { return GridHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var GridHeaderComponent = /** @class */ (function () {
    function GridHeaderComponent() {
        this.headers = [];
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(GridHeaderComponent.prototype, "numHeaders", {
        get: /**
         * @return {?}
         */
        function () {
            return this.headers.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} formio
     * @param {?=} query
     * @return {?}
     */
    GridHeaderComponent.prototype.load = /**
     * @param {?} formio
     * @param {?=} query
     * @return {?}
     */
    function (formio, query) {
        return Promise.resolve([]);
    };
    GridHeaderComponent.propDecorators = {
        actionAllowed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],] }]
    };
    return GridHeaderComponent;
}());

if (false) {}


/***/ }),

/***/ "./node_modules/angular-formio/grid/form/FormGridBody.component.js":
/*!*************************************************************************!*\
  !*** ./node_modules/angular-formio/grid/form/FormGridBody.component.js ***!
  \*************************************************************************/
/*! exports provided: FormGridBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGridBodyComponent", function() { return FormGridBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _GridBodyComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GridBodyComponent */ "./node_modules/angular-formio/grid/GridBodyComponent.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var FormGridBodyComponent = /** @class */ (function (_super) {
    __extends(FormGridBodyComponent, _super);
    function FormGridBodyComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} formio
     * @param {?=} query
     * @return {?}
     */
    FormGridBodyComponent.prototype.load = /**
     * @param {?} formio
     * @param {?=} query
     * @return {?}
     */
    function (formio, query) {
        var _this = this;
        query = query || {};
        return formio.loadForms({ params: query }).then(function (forms) { return _this.setRows(query, forms); });
    };
    FormGridBodyComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'form-grid-body',
                    styles: [".form-btn { font-size: 0.75rem; } "],
                    template: "<ng-template> <tbody *ngIf=\"rows\"> <tr *ngFor=\"let form of rows\"> <td> <div class=\"row\"> <div class=\"col-sm-8\"> <a href=\"#\" (click)=\"onRowSelect($event, form)\"><h5>{{ form.title }}</h5></a> </div> <div class=\"col-sm-4\"> <button *ngIf=\"actionAllowed('formView')\" class=\"btn btn-secondary btn-sm form-btn\" (click)=\"onRowAction($event, form, 'view')\"><span class=\"fa fa-pencil\"></span> Enter Data</button>&nbsp; <button *ngIf=\"actionAllowed('submissionIndex')\" class=\"btn btn-secondary btn-sm form-btn\" (click)=\"onRowAction($event, form, 'submission')\"><span class=\"fa fa-list-alt\"></span> View Data</button>&nbsp; <button *ngIf=\"actionAllowed('formEdit')\" class=\"btn btn-secondary btn-sm form-btn\" (click)=\"onRowAction($event, form, 'edit')\"><span class=\"fa fa-edit\"></span> Edit Form</button>&nbsp; <button *ngIf=\"actionAllowed('formDelete')\" class=\"btn btn-secondary btn-sm form-btn\" (click)=\"onRowAction($event, form, 'delete')\"><span class=\"fa fa-trash\"></span></button> </div> </div> </td> </tr> </tbody> </ng-template> "
                },] },
    ];
    return FormGridBodyComponent;
}(_GridBodyComponent__WEBPACK_IMPORTED_MODULE_1__["GridBodyComponent"]));



/***/ }),

/***/ "./node_modules/angular-formio/grid/form/FormGridFooter.component.js":
/*!***************************************************************************!*\
  !*** ./node_modules/angular-formio/grid/form/FormGridFooter.component.js ***!
  \***************************************************************************/
/*! exports provided: FormGridFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGridFooterComponent", function() { return FormGridFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _GridFooterComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GridFooterComponent */ "./node_modules/angular-formio/grid/GridFooterComponent.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var FormGridFooterComponent = /** @class */ (function (_super) {
    __extends(FormGridFooterComponent, _super);
    function FormGridFooterComponent() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    FormGridFooterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.createText) {
            this.createText = 'Create Form';
        }
    };
    FormGridFooterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "<ng-template> <tfoot class=\"formio-grid-footer\"> <tr> <td *ngIf=\"header\" [colSpan]=\"header.numHeaders\"> <button *ngIf=\"actionAllowed('formCreate')\" class=\"btn btn-primary pull-left float-left\" (click)=\"createItem.emit('form')\"><i class=\"glyphicon glyphicon-plus fa fa-plus\"></i> {{ createText }}</button> <span class=\"pull-right float-right item-counter\"><span class=\"page-num\">{{ body.firstItem }} - {{ body.lastItem }}</span> / {{ body.total }} total</span> <pagination [totalItems]=\"body.total\" [itemsPerPage]=\"body.limit\" [(ngModel)]=\"body.skip\" (pageChanged)=\"pageChanged.emit($event)\" class=\"justify-content-center pagination-sm\"></pagination> </td> </tr> </tfoot> </ng-template> ",
                    styles: ["tfoot.formio-grid-footer td { padding: 0.3rem; } tfoot.formio-grid-footer .page-num { font-size: 1.4em; } tfoot.formio-grid-footer ul.pagination { margin-top: 5px; margin-bottom: 0; } "],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
                },] },
    ];
    /** @nocollapse */
    FormGridFooterComponent.ctorParameters = function () { return []; };
    return FormGridFooterComponent;
}(_GridFooterComponent__WEBPACK_IMPORTED_MODULE_1__["GridFooterComponent"]));



/***/ }),

/***/ "./node_modules/angular-formio/grid/form/FormGridHeader.component.js":
/*!***************************************************************************!*\
  !*** ./node_modules/angular-formio/grid/form/FormGridHeader.component.js ***!
  \***************************************************************************/
/*! exports provided: FormGridHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGridHeaderComponent", function() { return FormGridHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _GridHeaderComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GridHeaderComponent */ "./node_modules/angular-formio/grid/GridHeaderComponent.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var FormGridHeaderComponent = /** @class */ (function (_super) {
    __extends(FormGridHeaderComponent, _super);
    function FormGridHeaderComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?=} formio
     * @return {?}
     */
    FormGridHeaderComponent.prototype.load = /**
     * @param {?=} formio
     * @return {?}
     */
    function (formio) {
        this.header = {
            label: 'Title',
            key: 'title',
            sort: 'asc'
        };
        this.headers = [this.header];
        return Promise.resolve(this.headers);
    };
    Object.defineProperty(FormGridHeaderComponent.prototype, "numHeaders", {
        get: /**
         * @return {?}
         */
        function () {
            return 2;
        },
        enumerable: true,
        configurable: true
    });
    FormGridHeaderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'form-grid-header',
                    template: "<ng-template> <thead> <tr> <th> <div class=\"row\"> <div class=\"col-sm-8\"> <a (click)=\"sort.emit(header)\"> {{ header.label }}&nbsp;<span [ngClass]=\"{'glyphicon-triangle-top fa-caret-up': (header.sort === 'asc'), 'glyphicon-triangle-bottom fa-caret-down': (header.sort === 'desc')}\" class=\"glyphicon fa\" *ngIf=\"header.sort\"></span> </a> </div> <div class=\"col-sm-4\"> Operations </div> </div> </th> </tr> </thead> </ng-template> "
                },] },
    ];
    return FormGridHeaderComponent;
}(_GridHeaderComponent__WEBPACK_IMPORTED_MODULE_1__["GridHeaderComponent"]));

if (false) {}


/***/ }),

/***/ "./node_modules/angular-formio/grid/form/index.js":
/*!********************************************************!*\
  !*** ./node_modules/angular-formio/grid/form/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormGridHeader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormGridHeader.component */ "./node_modules/angular-formio/grid/form/FormGridHeader.component.js");
/* harmony import */ var _FormGridBody_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormGridBody.component */ "./node_modules/angular-formio/grid/form/FormGridBody.component.js");
/* harmony import */ var _FormGridFooter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormGridFooter.component */ "./node_modules/angular-formio/grid/form/FormGridFooter.component.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



/* harmony default export */ __webpack_exports__["default"] = ({
    header: _FormGridHeader_component__WEBPACK_IMPORTED_MODULE_0__["FormGridHeaderComponent"],
    body: _FormGridBody_component__WEBPACK_IMPORTED_MODULE_1__["FormGridBodyComponent"],
    footer: _FormGridFooter_component__WEBPACK_IMPORTED_MODULE_2__["FormGridFooterComponent"]
});


/***/ }),

/***/ "./node_modules/angular-formio/grid/grid.component.js":
/*!************************************************************!*\
  !*** ./node_modules/angular-formio/grid/grid.component.js ***!
  \************************************************************/
/*! exports provided: FormioGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormioGridComponent", function() { return FormioGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_loader_formio_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/loader/formio.loader */ "./node_modules/angular-formio/components/loader/formio.loader.js");
/* harmony import */ var _components_alerts_formio_alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/alerts/formio.alerts */ "./node_modules/angular-formio/components/alerts/formio.alerts.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formiojs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formiojs */ "./node_modules/formiojs/index.js");
/* harmony import */ var formiojs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formiojs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _form_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form/index */ "./node_modules/angular-formio/grid/form/index.js");
/* harmony import */ var _submission_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submission/index */ "./node_modules/angular-formio/grid/submission/index.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */







var FormioGridComponent = /** @class */ (function () {
    function FormioGridComponent(loader, alerts, resolver, ref) {
        this.loader = loader;
        this.alerts = alerts;
        this.resolver = resolver;
        this.ref = ref;
        this.page = 0;
        this.isLoading = false;
        this.initialized = false;
        this.select = this.rowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.createItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loader.loading = true;
    }
    /**
     * @param {?} property
     * @param {?} component
     * @return {?}
     */
    FormioGridComponent.prototype.createComponent = /**
     * @param {?} property
     * @param {?} component
     * @return {?}
     */
    function (property, component) {
        /** @type {?} */
        var factory = this.resolver.resolveComponentFactory(component);
        /** @type {?} */
        var componentRef = property.createComponent(factory);
        return componentRef.instance;
    };
    /**
     * @param {?=} src
     * @return {?}
     */
    FormioGridComponent.prototype.loadGrid = /**
     * @param {?=} src
     * @return {?}
     */
    function (src) {
        var _this = this;
        // If no source is provided, then skip.
        if (!src && !this.formio) {
            return;
        }
        // Do not double load.
        if (this.formio && this.src && (src === this.src)) {
            return;
        }
        if (src) {
            this.src = src;
            this.formio = new formiojs__WEBPACK_IMPORTED_MODULE_4__["Formio"](this.src, { formOnly: true });
        }
        // Load the header.
        this.header.load(this.formio)
            .then(function () { return _this.setPage(0); })
            .catch(function (error) { return _this.onError(error); });
    };
    /**
     * @return {?}
     */
    FormioGridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Create our components.
        /** @type {?} */
        var comps = this.components || ((this.gridType === 'form') ? _form_index__WEBPACK_IMPORTED_MODULE_5__["default"] : _submission_index__WEBPACK_IMPORTED_MODULE_6__["default"]);
        this.header = this.createComponent(this.headerElement, comps.header);
        this.header.actionAllowed = this.actionAllowed.bind(this);
        this.header.sort.subscribe(function (header) { return _this.sortColumn(header); });
        this.body = this.createComponent(this.bodyElement, comps.body);
        this.body.header = this.header;
        this.body.actionAllowed = this.actionAllowed.bind(this);
        this.body.rowSelect.subscribe(function (row) { return _this.rowSelect.emit(row); });
        this.body.rowAction.subscribe(function (action) { return _this.rowAction.emit(action); });
        this.footer = this.createComponent(this.footerElement, comps.footer);
        this.footer.header = this.header;
        this.footer.body = this.body;
        this.footer.actionAllowed = this.actionAllowed.bind(this);
        this.footer.createText = this.createText;
        this.footer.pageChanged.subscribe(function (page) { return _this.pageChanged(page); });
        this.footer.createItem.subscribe(function (item) { return _this.createItem.emit(item); });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FormioGridComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.initialized &&
            ((changes.src && changes.src.currentValue) ||
                (changes.formio && changes.formio.currentValue))) {
            this.loadGrid(changes.src.currentValue);
        }
        if (changes.createText && changes.createText.currentValue) {
            this.footer.createText = changes.createText.currentValue;
        }
    };
    /**
     * @return {?}
     */
    FormioGridComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.alerts.setAlerts([]);
        this.query = this.query || {};
        if (this.refresh) {
            this.refresh.subscribe(function (query) { return _this.refreshGrid(query); });
        }
        this.loadGrid(this.src);
        this.initialized = true;
        this.ref.detectChanges();
    };
    Object.defineProperty(FormioGridComponent.prototype, "loading", {
        set: /**
         * @param {?} _loading
         * @return {?}
         */
        function (_loading) {
            this.loader.loading = this.isLoading = _loading;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} action
     * @return {?}
     */
    FormioGridComponent.prototype.actionAllowed = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        if (this.isActionAllowed) {
            return this.isActionAllowed(action);
        }
        else {
            return true;
        }
    };
    /**
     * @param {?} error
     * @return {?}
     */
    FormioGridComponent.prototype.onError = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        this.loading = false;
        this.error.emit(error);
        this.alerts.setAlert({
            type: 'danger',
            message: error
        });
    };
    /**
     * @param {?=} query
     * @return {?}
     */
    FormioGridComponent.prototype.refreshGrid = /**
     * @param {?=} query
     * @return {?}
     */
    function (query) {
        var _this = this;
        this.alerts.setAlerts([]);
        query = query || {};
        query = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["assign"])(query, this.query);
        if (!query.hasOwnProperty('limit')) {
            query.limit = 10;
        }
        if (!query.hasOwnProperty('skip')) {
            query.skip = 0;
        }
        this.loading = true;
        this.ref.detectChanges();
        this.body.load(this.formio, query).then(function (info) {
            _this.loading = false;
            _this.initialized = true;
            _this.ref.detectChanges();
        }).catch(function (error) { return _this.onError(error); });
    };
    /**
     * @param {?=} num
     * @return {?}
     */
    FormioGridComponent.prototype.setPage = /**
     * @param {?=} num
     * @return {?}
     */
    function (num) {
        if (num === void 0) { num = -1; }
        if (this.isLoading) {
            return;
        }
        this.page = num !== -1 ? num : this.page;
        if (!this.query.hasOwnProperty('limit')) {
            this.query.limit = 10;
        }
        if (!this.query.hasOwnProperty('skip')) {
            this.query.skip = 0;
        }
        this.query.skip = this.page * this.query.limit;
        this.refreshGrid();
    };
    /**
     * @param {?} header
     * @return {?}
     */
    FormioGridComponent.prototype.sortColumn = /**
     * @param {?} header
     * @return {?}
     */
    function (header) {
        // Reset all other column sorts.
        Object(lodash__WEBPACK_IMPORTED_MODULE_3__["each"])(this.header.headers, function (col) {
            if (col.key !== header.key) {
                col.sort = '';
            }
        });
        switch (header.sort) {
            case 'asc':
                header.sort = 'desc';
                this.query.sort = '-' + header.key;
                break;
            case 'desc':
                header.sort = '';
                delete this.query.sort;
                break;
            case '':
                header.sort = 'asc';
                this.query.sort = header.key;
                break;
        }
        this.refreshGrid();
    };
    /**
     * @param {?} page
     * @return {?}
     */
    FormioGridComponent.prototype.pageChanged = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.setPage(page.page - 1);
    };
    FormioGridComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'formio-grid',
                    styles: [".formio-grid { position: relative; width: 100%; } .grid-refresh { height: 400px; width: 100%; } "],
                    template: "<ng-template #headerTemplate></ng-template> <ng-template #bodyTemplate></ng-template> <ng-template #footerTemplate></ng-template> <div class=\"formio-grid\"> <formio-alerts [alerts]=\"alerts\"></formio-alerts> <table class=\"table table-bordered table-striped table-hover\"> <ng-container *ngIf=\"initialized\" [ngTemplateOutlet]=\"header.template\"></ng-container> <formio-loader></formio-loader> <ng-container *ngIf=\"initialized\" [ngTemplateOutlet]=\"body.template\"></ng-container> <ng-container *ngIf=\"initialized\" [ngTemplateOutlet]=\"footer.template\"></ng-container> </table> </div> "
                },] },
    ];
    /** @nocollapse */
    FormioGridComponent.ctorParameters = function () { return [
        { type: _components_loader_formio_loader__WEBPACK_IMPORTED_MODULE_1__["FormioLoader"] },
        { type: _components_alerts_formio_alerts__WEBPACK_IMPORTED_MODULE_2__["FormioAlerts"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    FormioGridComponent.propDecorators = {
        src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        query: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        refresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        gridType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        components: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        formio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        createText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isActionAllowed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        rowSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        rowAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        createItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        headerElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['headerTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },] }],
        bodyElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['bodyTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },] }],
        footerElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['footerTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },] }]
    };
    return FormioGridComponent;
}());

if (false) {}


/***/ }),

/***/ "./node_modules/angular-formio/grid/grid.module.js":
/*!*********************************************************!*\
  !*** ./node_modules/angular-formio/grid/grid.module.js ***!
  \*********************************************************/
/*! exports provided: FormioGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormioGrid", function() { return FormioGrid; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _formio_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../formio.module */ "./node_modules/angular-formio/formio.module.js");
/* harmony import */ var _components_loader_formio_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/loader/formio.loader */ "./node_modules/angular-formio/components/loader/formio.loader.js");
/* harmony import */ var _components_alerts_formio_alerts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/alerts/formio.alerts */ "./node_modules/angular-formio/components/alerts/formio.alerts.js");
/* harmony import */ var _grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid.component */ "./node_modules/angular-formio/grid/grid.component.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var _form_FormGridHeader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form/FormGridHeader.component */ "./node_modules/angular-formio/grid/form/FormGridHeader.component.js");
/* harmony import */ var _form_FormGridBody_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form/FormGridBody.component */ "./node_modules/angular-formio/grid/form/FormGridBody.component.js");
/* harmony import */ var _form_FormGridFooter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form/FormGridFooter.component */ "./node_modules/angular-formio/grid/form/FormGridFooter.component.js");
/* harmony import */ var _submission_SubmissionGridHeader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./submission/SubmissionGridHeader.component */ "./node_modules/angular-formio/grid/submission/SubmissionGridHeader.component.js");
/* harmony import */ var _submission_SubmissionGridBody_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./submission/SubmissionGridBody.component */ "./node_modules/angular-formio/grid/submission/SubmissionGridBody.component.js");
/* harmony import */ var _submission_SubmissionGridFooter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./submission/SubmissionGridFooter.component */ "./node_modules/angular-formio/grid/submission/SubmissionGridFooter.component.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */














var FormioGrid = /** @class */ (function () {
    function FormioGrid() {
    }
    FormioGrid.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                        _formio_module__WEBPACK_IMPORTED_MODULE_3__["FormioModule"],
                        ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot()
                    ],
                    declarations: [
                        _grid_component__WEBPACK_IMPORTED_MODULE_6__["FormioGridComponent"],
                        _form_FormGridHeader_component__WEBPACK_IMPORTED_MODULE_8__["FormGridHeaderComponent"],
                        _form_FormGridBody_component__WEBPACK_IMPORTED_MODULE_9__["FormGridBodyComponent"],
                        _form_FormGridFooter_component__WEBPACK_IMPORTED_MODULE_10__["FormGridFooterComponent"],
                        _submission_SubmissionGridHeader_component__WEBPACK_IMPORTED_MODULE_11__["SubmissionGridHeaderComponent"],
                        _submission_SubmissionGridBody_component__WEBPACK_IMPORTED_MODULE_12__["SubmissionGridBodyComponent"],
                        _submission_SubmissionGridFooter_component__WEBPACK_IMPORTED_MODULE_13__["SubmissionGridFooterComponent"]
                    ],
                    exports: [
                        _grid_component__WEBPACK_IMPORTED_MODULE_6__["FormioGridComponent"]
                    ],
                    entryComponents: [
                        _form_FormGridHeader_component__WEBPACK_IMPORTED_MODULE_8__["FormGridHeaderComponent"],
                        _form_FormGridBody_component__WEBPACK_IMPORTED_MODULE_9__["FormGridBodyComponent"],
                        _form_FormGridFooter_component__WEBPACK_IMPORTED_MODULE_10__["FormGridFooterComponent"],
                        _submission_SubmissionGridHeader_component__WEBPACK_IMPORTED_MODULE_11__["SubmissionGridHeaderComponent"],
                        _submission_SubmissionGridBody_component__WEBPACK_IMPORTED_MODULE_12__["SubmissionGridBodyComponent"],
                        _submission_SubmissionGridFooter_component__WEBPACK_IMPORTED_MODULE_13__["SubmissionGridFooterComponent"]
                    ],
                    providers: [
                        _components_loader_formio_loader__WEBPACK_IMPORTED_MODULE_4__["FormioLoader"],
                        _components_alerts_formio_alerts__WEBPACK_IMPORTED_MODULE_5__["FormioAlerts"]
                    ]
                },] },
    ];
    return FormioGrid;
}());



/***/ }),

/***/ "./node_modules/angular-formio/grid/index.js":
/*!***************************************************!*\
  !*** ./node_modules/angular-formio/grid/index.js ***!
  \***************************************************/
/*! exports provided: FormioGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid.module */ "./node_modules/angular-formio/grid/grid.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormioGrid", function() { return _grid_module__WEBPACK_IMPORTED_MODULE_0__["FormioGrid"]; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



/***/ }),

/***/ "./node_modules/angular-formio/grid/submission/SubmissionGridBody.component.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/angular-formio/grid/submission/SubmissionGridBody.component.js ***!
  \*************************************************************************************/
/*! exports provided: SubmissionGridBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionGridBodyComponent", function() { return SubmissionGridBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GridBodyComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GridBodyComponent */ "./node_modules/angular-formio/grid/GridBodyComponent.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



var SubmissionGridBodyComponent = /** @class */ (function (_super) {
    __extends(SubmissionGridBodyComponent, _super);
    function SubmissionGridBodyComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} formio
     * @param {?=} query
     * @return {?}
     */
    SubmissionGridBodyComponent.prototype.load = /**
     * @param {?} formio
     * @param {?=} query
     * @return {?}
     */
    function (formio, query) {
        var _this = this;
        query = query || {};
        return formio.loadSubmissions({ params: query })
            .then(function (submissions) { return _this.setRows(query, submissions); });
    };
    /**
     * Render the cell data.
     *
     * @param row
     * @param header
     * @return any
     */
    /**
     * Render the cell data.
     *
     * @param {?} row
     * @param {?} header
     * @return {?} any
     */
    SubmissionGridBodyComponent.prototype.view = /**
     * Render the cell data.
     *
     * @param {?} row
     * @param {?} header
     * @return {?} any
     */
    function (row, header) {
        /** @type {?} */
        var cellValue = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(row, header.key);
        if (typeof header.component.getView === 'function') {
            return header.component.getView(cellValue);
        }
        return header.component.asString(cellValue);
    };
    SubmissionGridBodyComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "<ng-template> <tbody> <tr *ngFor=\"let row of rows\" (click)=\"onRowSelect($event, row)\"> <td *ngFor=\"let rowHeader of header.headers\" [innerHTML]=\"view(row, rowHeader)\"></td> </tr> </tbody> </ng-template> "
                },] },
    ];
    return SubmissionGridBodyComponent;
}(_GridBodyComponent__WEBPACK_IMPORTED_MODULE_2__["GridBodyComponent"]));



/***/ }),

/***/ "./node_modules/angular-formio/grid/submission/SubmissionGridFooter.component.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/angular-formio/grid/submission/SubmissionGridFooter.component.js ***!
  \***************************************************************************************/
/*! exports provided: SubmissionGridFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionGridFooterComponent", function() { return SubmissionGridFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _GridFooterComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GridFooterComponent */ "./node_modules/angular-formio/grid/GridFooterComponent.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var SubmissionGridFooterComponent = /** @class */ (function (_super) {
    __extends(SubmissionGridFooterComponent, _super);
    function SubmissionGridFooterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubmissionGridFooterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "<ng-template> <tfoot class=\"formio-grid-footer\"> <tr> <td *ngIf=\"header\" [colSpan]=\"header.numHeaders\"> <button *ngIf=\"actionAllowed('submissionCreate') && createText\" class=\"btn btn-primary pull-left float-left\" (click)=\"createItem.emit('form')\"><i class=\"glyphicon glyphicon-plus fa fa-plus\"></i> {{ createText }}</button> <span class=\"pull-right float-right item-counter\"><span class=\"page-num\">{{ body.firstItem }} - {{ body.lastItem }}</span> / {{ body.total }} total</span> <pagination [totalItems]=\"body.total\" [itemsPerPage]=\"body.limit\" [(ngModel)]=\"body.skip\" (pageChanged)=\"pageChanged.emit($event)\" class=\"justify-content-center pagination-sm\"></pagination> </td> </tr> </tfoot> </ng-template> ",
                    styles: ["tfoot.formio-grid-footer td { padding: 0.3rem; } tfoot.formio-grid-footer .page-num { font-size: 1.4em; } tfoot.formio-grid-footer ul.pagination { margin-top: 5px; margin-bottom: 0; } "],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
                },] },
    ];
    return SubmissionGridFooterComponent;
}(_GridFooterComponent__WEBPACK_IMPORTED_MODULE_1__["GridFooterComponent"]));



/***/ }),

/***/ "./node_modules/angular-formio/grid/submission/SubmissionGridHeader.component.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/angular-formio/grid/submission/SubmissionGridHeader.component.js ***!
  \***************************************************************************************/
/*! exports provided: SubmissionGridHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionGridHeaderComponent", function() { return SubmissionGridHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var formiojs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formiojs */ "./node_modules/formiojs/index.js");
/* harmony import */ var formiojs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formiojs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GridHeaderComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GridHeaderComponent */ "./node_modules/angular-formio/grid/GridHeaderComponent.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



var SubmissionGridHeaderComponent = /** @class */ (function (_super) {
    __extends(SubmissionGridHeaderComponent, _super);
    function SubmissionGridHeaderComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} formio
     * @param {?=} query
     * @return {?}
     */
    SubmissionGridHeaderComponent.prototype.load = /**
     * @param {?} formio
     * @param {?=} query
     * @return {?}
     */
    function (formio, query) {
        var _this = this;
        query = query || {};
        return formio.loadForm({ params: query }).then(function (form) {
            _this.headers = [];
            formiojs__WEBPACK_IMPORTED_MODULE_1__["Utils"].eachComponent(form.components, function (component) {
                if (component.input && component.tableView) {
                    _this.headers.push({
                        label: component.label,
                        key: 'data.' + component.key,
                        sort: '',
                        component: formiojs__WEBPACK_IMPORTED_MODULE_1__["Components"].create(component, null, null, true)
                    });
                }
            });
            return _this.headers;
        });
    };
    SubmissionGridHeaderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "<ng-template> <thead> <tr> <th *ngFor=\"let header of headers\"> <a (click)=\"sort.emit(header)\"> {{ header.label }}&nbsp;<span [ngClass]=\"{'glyphicon-triangle-top': (header.sort === 'asc'), 'glyphicon-triangle-bottom': (header.sort === 'desc')}\" class=\"glyphicon\" *ngIf=\"header.sort\"></span> </a> </th> </tr> </thead> </ng-template> "
                },] },
    ];
    return SubmissionGridHeaderComponent;
}(_GridHeaderComponent__WEBPACK_IMPORTED_MODULE_2__["GridHeaderComponent"]));



/***/ }),

/***/ "./node_modules/angular-formio/grid/submission/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/angular-formio/grid/submission/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubmissionGridHeader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmissionGridHeader.component */ "./node_modules/angular-formio/grid/submission/SubmissionGridHeader.component.js");
/* harmony import */ var _SubmissionGridBody_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmissionGridBody.component */ "./node_modules/angular-formio/grid/submission/SubmissionGridBody.component.js");
/* harmony import */ var _SubmissionGridFooter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubmissionGridFooter.component */ "./node_modules/angular-formio/grid/submission/SubmissionGridFooter.component.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



/* harmony default export */ __webpack_exports__["default"] = ({
    header: _SubmissionGridHeader_component__WEBPACK_IMPORTED_MODULE_0__["SubmissionGridHeaderComponent"],
    body: _SubmissionGridBody_component__WEBPACK_IMPORTED_MODULE_1__["SubmissionGridBodyComponent"],
    footer: _SubmissionGridFooter_component__WEBPACK_IMPORTED_MODULE_2__["SubmissionGridFooterComponent"]
});


/***/ }),

/***/ "./node_modules/angular-formio/manager/create/create.component.js":
/*!************************************************************************!*\
  !*** ./node_modules/angular-formio/manager/create/create.component.js ***!
  \************************************************************************/
/*! exports provided: FormManagerCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormManagerCreateComponent", function() { return FormManagerCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit/edit.component */ "./node_modules/angular-formio/manager/edit/edit.component.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var FormManagerCreateComponent = /** @class */ (function (_super) {
    __extends(FormManagerCreateComponent, _super);
    function FormManagerCreateComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    FormManagerCreateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.service.reset();
    };
    FormManagerCreateComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "<div class=\"loader\" *ngIf=\"loading\"></div> <div class=\"form-group row\"> <div class=\"col-sm-8\"> <input type=\"text\" class=\"form-control\" id=\"formTitle\" placeholder=\"Enter a Title\" #title> </div> <div class=\"col-sm-2\"> <select class=\"form-control\" id=\"formSelect\" #type> <option value=\"form\">Form</option> <option value=\"wizard\">Wizard</option> <option value=\"pdf\">PDF</option> </select> </div> <div class=\"col-sm-2\"> <button class=\"btn btn-primary btn-block\" (click)=\"onSave()\">Save Form</button> </div> </div> <formio-alerts [alerts]=\"alerts\"></formio-alerts> <form-builder *ngIf=\"formReady\" [formbuilder]=\"config.builder\" [form]=\"form\" #builder></form-builder> <button class=\"btn btn-primary\" style=\"margin-top: 10px;\" (click)=\"onSave()\">Save Form</button> "
                },] },
    ];
    return FormManagerCreateComponent;
}(_edit_edit_component__WEBPACK_IMPORTED_MODULE_1__["FormManagerEditComponent"]));



/***/ }),

/***/ "./node_modules/angular-formio/manager/delete/delete.component.js":
/*!************************************************************************!*\
  !*** ./node_modules/angular-formio/manager/delete/delete.component.js ***!
  \************************************************************************/
/*! exports provided: FormManagerDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormManagerDeleteComponent", function() { return FormManagerDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-manager.service */ "./node_modules/angular-formio/manager/form-manager.service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_alerts_formio_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/alerts/formio.alerts */ "./node_modules/angular-formio/components/alerts/formio.alerts.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




var FormManagerDeleteComponent = /** @class */ (function () {
    function FormManagerDeleteComponent(service, router, route, alerts) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.alerts = alerts;
    }
    /**
     * @return {?}
     */
    FormManagerDeleteComponent.prototype.onDelete = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.service.formio.deleteForm().then(function () {
            _this.router.navigate(['../../'], { relativeTo: _this.route });
        }).catch(function (err) { return _this.alerts.setAlert({ type: 'danger', message: (err.message || err) }); });
    };
    /**
     * @return {?}
     */
    FormManagerDeleteComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.router.navigate(['../', 'view'], { relativeTo: this.route });
    };
    FormManagerDeleteComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "<formio-alerts [alerts]=\"alerts\"></formio-alerts> <h3>Are you sure you wish to delete this form?</h3> <div class=\"btn-toolbar\"> <button type=\"button\" (click)=\"onDelete()\" class=\"btn btn-danger\" style=\"margin-right: 10px;\">Yes</button> <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-danger\">No</button> </div> "
                },] },
    ];
    /** @nocollapse */
    FormManagerDeleteComponent.ctorParameters = function () { return [
        { type: _form_manager_service__WEBPACK_IMPORTED_MODULE_1__["FormManagerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _components_alerts_formio_alerts__WEBPACK_IMPORTED_MODULE_3__["FormioAlerts"] }
    ]; };
    return FormManagerDeleteComponent;
}());

if (false) {}


/***/ }),

/***/ "./node_modules/angular-formio/manager/edit/edit.component.js":
/*!********************************************************************!*\
  !*** ./node_modules/angular-formio/manager/edit/edit.component.js ***!
  \********************************************************************/
/*! exports provided: FormManagerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormManagerEditComponent", function() { return FormManagerEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-manager.service */ "./node_modules/angular-formio/manager/form-manager.service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_manager_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form-manager.config */ "./node_modules/angular-formio/manager/form-manager.config.js");
/* harmony import */ var _components_alerts_formio_alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/alerts/formio.alerts */ "./node_modules/angular-formio/components/alerts/formio.alerts.js");
/* harmony import */ var _components_formbuilder_formbuilder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/formbuilder/formbuilder.component */ "./node_modules/angular-formio/components/formbuilder/formbuilder.component.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */







var FormManagerEditComponent = /** @class */ (function () {
    function FormManagerEditComponent(service, router, route, config, ref, alerts) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.config = config;
        this.ref = ref;
        this.alerts = alerts;
        this.form = { components: [] };
        this.formReady = false;
        this.loading = false;
        this.editMode = false;
    }
    /**
     * @param {?} cb
     * @return {?}
     */
    FormManagerEditComponent.prototype.checkBuilder = /**
     * @param {?} cb
     * @return {?}
     */
    function (cb) {
        var _this = this;
        if (this.builder) {
            return cb(this.builder);
        }
        setTimeout(function () { return _this.checkBuilder(cb); }, 100);
    };
    /**
     * @return {?}
     */
    FormManagerEditComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.builderReady = new Promise(function (resolve) { return _this.checkBuilder(resolve); });
        this.route.url.subscribe(function (url) {
            // See if we are editing a form or creating one.
            if (url[0].path === 'edit') {
                _this.loading = true;
                _this.ref.detectChanges();
                _this.editMode = true;
                _this.service.loadForm().then(function (form) {
                    _this.form = form;
                    _this.ref.detectChanges();
                    _this.formTitle.nativeElement.value = form.title;
                    _this.formType.nativeElement.value = form.display || 'form';
                    _this.formReady = true;
                    _this.builderReady.then(function () {
                        _this.builder.buildForm(form);
                        _this.loading = false;
                    });
                }).catch(function (err) {
                    _this.alerts.setAlert({ type: 'danger', message: (err.message || err) });
                    _this.loading = false;
                    _this.formReady = true;
                });
            }
            else {
                _this.formReady = true;
            }
            _this.formType.nativeElement.addEventListener('change', function () {
                _this.builderReady.then(function () { return _this.builder.setDisplay(_this.formType.nativeElement.value); });
            });
        });
    };
    /**
     * @return {?}
     */
    FormManagerEditComponent.prototype.onSave = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loading = true;
        this.builderReady.then(function () {
            _this.form.title = _this.formTitle.nativeElement.value;
            _this.form.display = _this.formType.nativeElement.value;
            _this.form.components = _this.builder.formio.schema.components;
            if (_this.config.tag) {
                _this.form.tags = _this.form.tags || [];
                _this.form.tags.push(_this.config.tag);
                _this.form.tags = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.uniq(_this.form.tags);
            }
            if (!_this.form._id) {
                _this.form.name = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.camelCase(_this.form.title).toLowerCase();
                _this.form.path = _this.form.name;
            }
            _this.service.formio.saveForm(_this.form).then(function (form) {
                _this.form = form;
                _this.loading = false;
                if (_this.editMode) {
                    _this.router.navigate(['../', 'view'], { relativeTo: _this.route });
                }
                else {
                    _this.router.navigate(['../', form._id, 'view'], { relativeTo: _this.route });
                }
            }).catch(function (err) {
                _this.alerts.setAlert({ type: 'danger', message: (err.message || err) });
                _this.loading = false;
            });
        });
    };
    FormManagerEditComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "<div class=\"loader\" *ngIf=\"loading\"></div> <div class=\"form-group row\"> <div class=\"col-sm-8\"> <input type=\"text\" class=\"form-control\" id=\"formTitle\" placeholder=\"Enter a Title\" #title> </div> <div class=\"col-sm-2\"> <select class=\"form-control\" id=\"formSelect\" #type> <option value=\"form\">Form</option> <option value=\"wizard\">Wizard</option> <option value=\"pdf\">PDF</option> </select> </div> <div class=\"col-sm-2\"> <button class=\"btn btn-primary btn-block\" (click)=\"onSave()\">Save Form</button> </div> </div> <formio-alerts [alerts]=\"alerts\"></formio-alerts> <form-builder *ngIf=\"formReady\" [formbuilder]=\"config.builder\" [form]=\"form\" #builder></form-builder> <button class=\"btn btn-primary\" style=\"margin-top: 10px;\" (click)=\"onSave()\">Save Form</button> "
                },] },
    ];
    /** @nocollapse */
    FormManagerEditComponent.ctorParameters = function () { return [
        { type: _form_manager_service__WEBPACK_IMPORTED_MODULE_1__["FormManagerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _form_manager_config__WEBPACK_IMPORTED_MODULE_3__["FormManagerConfig"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _components_alerts_formio_alerts__WEBPACK_IMPORTED_MODULE_4__["FormioAlerts"] }
    ]; };
    FormManagerEditComponent.propDecorators = {
        builder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_components_formbuilder_formbuilder_component__WEBPACK_IMPORTED_MODULE_5__["FormBuilderComponent"],] }],
        formTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['title',] }],
        formType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['type',] }]
    };
    return FormManagerEditComponent;
}());

if (false) {}


/***/ }),

/***/ "./node_modules/angular-formio/manager/form-manager.config.js":
/*!********************************************************************!*\
  !*** ./node_modules/angular-formio/manager/form-manager.config.js ***!
  \********************************************************************/
/*! exports provided: FormManagerRouteConfig, FormManagerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormManagerRouteConfig", function() { return FormManagerRouteConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormManagerConfig", function() { return FormManagerConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @record
 */
function FormManagerRouteConfig() { }
if (false) {}
var FormManagerConfig = /** @class */ (function () {
    function FormManagerConfig() {
        this.tag = '';
        this.includeSearch = false;
        this.saveDraft = false;
    }
    FormManagerConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return FormManagerConfig;
}());

if (false) {}


/***/ }),

/***/ "./node_modules/angular-formio/manager/form-manager.module.js":
/*!********************************************************************!*\
  !*** ./node_modules/angular-formio/manager/form-manager.module.js ***!
  \********************************************************************/
/*! exports provided: FormManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormManagerModule", function() { return FormManagerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _formio_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../formio.module */ "./node_modules/angular-formio/formio.module.js");
/* harmony import */ var _grid_grid_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../grid/grid.module */ "./node_modules/angular-formio/grid/grid.module.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index/index.component */ "./node_modules/angular-formio/manager/index/index.component.js");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create/create.component */ "./node_modules/angular-formio/manager/create/create.component.js");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form/form.component */ "./node_modules/angular-formio/manager/form/form.component.js");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/view.component */ "./node_modules/angular-formio/manager/view/view.component.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit/edit.component */ "./node_modules/angular-formio/manager/edit/edit.component.js");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./delete/delete.component */ "./node_modules/angular-formio/manager/delete/delete.component.js");
/* harmony import */ var _submission_submission_submission_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./submission/submission/submission.component */ "./node_modules/angular-formio/manager/submission/submission/submission.component.js");
/* harmony import */ var _submission_edit_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./submission/edit/edit.component */ "./node_modules/angular-formio/manager/submission/edit/edit.component.js");
/* harmony import */ var _submission_delete_delete_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./submission/delete/delete.component */ "./node_modules/angular-formio/manager/submission/delete/delete.component.js");
/* harmony import */ var _submission_view_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./submission/view/view.component */ "./node_modules/angular-formio/manager/submission/view/view.component.js");
/* harmony import */ var _submission_index_index_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./submission/index/index.component */ "./node_modules/angular-formio/manager/submission/index/index.component.js");
/* harmony import */ var _form_manager_routes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./form-manager.routes */ "./node_modules/angular-formio/manager/form-manager.routes.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var _formio_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../formio.utils */ "./node_modules/angular-formio/formio.utils.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




















var FormManagerModule = /** @class */ (function () {
    function FormManagerModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    FormManagerModule.forChild = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return Object(_formio_utils__WEBPACK_IMPORTED_MODULE_19__["extendRouter"])(FormManagerModule, config, _form_manager_routes__WEBPACK_IMPORTED_MODULE_17__["FormManagerRoutes"]);
    };
    /**
     * @param {?=} config
     * @return {?}
     */
    FormManagerModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return Object(_formio_utils__WEBPACK_IMPORTED_MODULE_19__["extendRouter"])(FormManagerModule, config, _form_manager_routes__WEBPACK_IMPORTED_MODULE_17__["FormManagerRoutes"]);
    };
    FormManagerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _formio_module__WEBPACK_IMPORTED_MODULE_4__["FormioModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _grid_grid_module__WEBPACK_IMPORTED_MODULE_5__["FormioGrid"],
                        ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_18__["PaginationModule"].forRoot()
                    ],
                    declarations: [
                        _index_index_component__WEBPACK_IMPORTED_MODULE_6__["FormManagerIndexComponent"],
                        _create_create_component__WEBPACK_IMPORTED_MODULE_7__["FormManagerCreateComponent"],
                        _form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormManagerFormComponent"],
                        _view_view_component__WEBPACK_IMPORTED_MODULE_9__["FormManagerViewComponent"],
                        _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__["FormManagerEditComponent"],
                        _delete_delete_component__WEBPACK_IMPORTED_MODULE_11__["FormManagerDeleteComponent"],
                        _submission_submission_submission_component__WEBPACK_IMPORTED_MODULE_12__["SubmissionComponent"],
                        _submission_edit_edit_component__WEBPACK_IMPORTED_MODULE_13__["SubmissionEditComponent"],
                        _submission_delete_delete_component__WEBPACK_IMPORTED_MODULE_14__["SubmissionDeleteComponent"],
                        _submission_view_view_component__WEBPACK_IMPORTED_MODULE_15__["SubmissionViewComponent"],
                        _submission_index_index_component__WEBPACK_IMPORTED_MODULE_16__["SubmissionIndexComponent"]
                    ]
                },] },
    ];
    return FormManagerModule;
}());



/***/ }),

/***/ "./node_modules/angular-formio/manager/form-manager.routes.js":
/*!********************************************************************!*\
  !*** ./node_modules/angular-formio/manager/form-manager.routes.js ***!
  \********************************************************************/
/*! exports provided: FormManagerRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormManagerRoutes", function() { return FormManagerRoutes; });
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index/index.component */ "./node_modules/angular-formio/manager/index/index.component.js");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create/create.component */ "./node_modules/angular-formio/manager/create/create.component.js");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ "./node_modules/angular-formio/manager/form/form.component.js");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/view.component */ "./node_modules/angular-formio/manager/view/view.component.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ "./node_modules/angular-formio/manager/edit/edit.component.js");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delete/delete.component */ "./node_modules/angular-formio/manager/delete/delete.component.js");
/* harmony import */ var _submission_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submission/edit/edit.component */ "./node_modules/angular-formio/manager/submission/edit/edit.component.js");
/* harmony import */ var _submission_delete_delete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./submission/delete/delete.component */ "./node_modules/angular-formio/manager/submission/delete/delete.component.js");
/* harmony import */ var _submission_view_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./submission/view/view.component */ "./node_modules/angular-formio/manager/submission/view/view.component.js");
/* harmony import */ var _submission_index_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./submission/index/index.component */ "./node_modules/angular-formio/manager/submission/index/index.component.js");
/* harmony import */ var _submission_submission_submission_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./submission/submission/submission.component */ "./node_modules/angular-formio/manager/submission/submission/submission.component.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */











/**
 * @param {?=} config
 * @return {?}
 */
function FormManagerRoutes(config) {
    return [
        {
            path: '',
            component: config && config.formIndex ? config.formIndex : _index_index_component__WEBPACK_IMPORTED_MODULE_0__["FormManagerIndexComponent"]
        },
        {
            path: 'create',
            component: config && config.formCreate ? config.formCreate : _create_create_component__WEBPACK_IMPORTED_MODULE_1__["FormManagerCreateComponent"]
        },
        {
            path: ':id',
            component: config && config.form ? config.form : _form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormManagerFormComponent"],
            children: [
                {
                    path: '',
                    redirectTo: 'view',
                    pathMatch: 'full'
                },
                {
                    path: 'view',
                    component: config && config.formView ? config.formView : _view_view_component__WEBPACK_IMPORTED_MODULE_3__["FormManagerViewComponent"]
                },
                {
                    path: 'edit',
                    component: config && config.formEdit ? config.formEdit : _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["FormManagerEditComponent"]
                },
                {
                    path: 'delete',
                    component: config && config.formDelete ? config.formDelete : _delete_delete_component__WEBPACK_IMPORTED_MODULE_5__["FormManagerDeleteComponent"]
                },
                {
                    path: 'submission',
                    component: config && config.submissionIndex ? config.submissionIndex : _submission_index_index_component__WEBPACK_IMPORTED_MODULE_9__["SubmissionIndexComponent"]
                },
                {
                    path: 'submission/:id',
                    component: config && config.submission ? config.submission : _submission_submission_submission_component__WEBPACK_IMPORTED_MODULE_10__["SubmissionComponent"],
                    children: [
                        {
                            path: '',
                            redirectTo: 'view',
                            pathMatch: 'full'
                        },
                        {
                            path: 'view',
                            component: config && config.submissionView ? config.submissionView : _submission_view_view_component__WEBPACK_IMPORTED_MODULE_8__["SubmissionViewComponent"]
                        },
                        {
                            path: 'edit',
                            component: config && config.submissionEdit ? config.submissionEdit : _submission_edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["SubmissionEditComponent"]
                        },
                        {
                            path: 'delete',
                            component: config && config.submissionDelete ? config.submissionDelete : _submission_delete_delete_component__WEBPACK_IMPORTED_MODULE_7__["SubmissionDeleteComponent"]
                        }
                    ]
                }
            ]
        }
    ];
}


/***/ }),

/***/ "./node_modules/angular-formio/manager/form-manager.service.js":
/*!*********************************************************************!*\
  !*** ./node_modules/angular-formio/manager/form-manager.service.js ***!
  \*********************************************************************/
/*! exports provided: FormManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormManagerService", function() { return FormManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _formio_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../formio.config */ "./node_modules/angular-formio/formio.config.js");
/* harmony import */ var _form_manager_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-manager.config */ "./node_modules/angular-formio/manager/form-manager.config.js");
/* harmony import */ var formiojs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formiojs */ "./node_modules/formiojs/index.js");
/* harmony import */ var formiojs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formiojs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./node_modules/angular-formio/auth/auth.service.js");
/* harmony import */ var _formio_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../formio.utils */ "./node_modules/angular-formio/formio.utils.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/intersection */ "./node_modules/lodash/intersection.js");
/* harmony import */ var lodash_intersection__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_intersection__WEBPACK_IMPORTED_MODULE_7__);
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */








var FormManagerService = /** @class */ (function () {
    function FormManagerService(appConfig, config, auth) {
        var _this = this;
        this.appConfig = appConfig;
        this.config = config;
        this.auth = auth;
        this.form = null;
        this.perms = { delete: false, edit: false };
        if (this.appConfig && this.appConfig.appUrl) {
            formiojs__WEBPACK_IMPORTED_MODULE_3__["Formio"].setBaseUrl(this.appConfig.apiUrl);
            formiojs__WEBPACK_IMPORTED_MODULE_3__["Formio"].setProjectUrl(this.appConfig.appUrl);
        }
        else {
            console.error('You must provide an AppConfig within your application!');
        }
        this.allAccessMap = {
            'update_all': 'formEdit',
            'delete_all': 'formDelete'
        };
        this.ownAccessMap = {
            'update_own': 'formEdit',
            'delete_own': 'formDelete'
        };
        this.actionAllowed = function (action) { return _this.isActionAllowed(action); };
        this.reset();
    }
    /**
     * @param {?} action
     * @return {?}
     */
    FormManagerService.prototype.isActionAllowed = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        return this.access[action];
    };
    /**
     * @return {?}
     */
    FormManagerService.prototype.setAccess = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.access = {
            formCreate: true,
            formView: true,
            formEdit: true,
            formDelete: true,
            submissionIndex: true
        };
        if (this.auth) {
            this.access = {
                formCreate: false,
                formView: false,
                formEdit: false,
                formDelete: false,
                submissionIndex: false
            };
            this.ready = this.auth.ready.then(function () {
                /** @type {?} */
                var adminRoles = [];
                lodash_each__WEBPACK_IMPORTED_MODULE_6___default()(_this.auth.roles, function (role, name) {
                    if (role.admin) {
                        adminRoles.push(role._id);
                    }
                });
                if (_this.auth.user && _this.auth.user.roles) {
                    _this.auth.user.roles.forEach(function (roleId) {
                        if (adminRoles.indexOf(roleId) !== -1) {
                            _this.access.formCreate = true;
                            _this.access.formView = true;
                            _this.access.formEdit = true;
                            _this.access.formDelete = true;
                            _this.access.submissionIndex = true;
                        }
                        if (!_this.access.formCreate) {
                            _this.access.formCreate = (_this.auth.formAccess.create_all.indexOf(roleId) !== -1);
                        }
                        if (!_this.access.formView) {
                            _this.access.formView = (_this.auth.formAccess.read_all.indexOf(roleId) !== -1);
                        }
                        if (!_this.access.formEdit) {
                            _this.access.formEdit = (_this.auth.formAccess.update_all.indexOf(roleId) !== -1);
                        }
                        if (!_this.access.formDelete) {
                            _this.access.formDelete = (_this.auth.formAccess.delete_all.indexOf(roleId) !== -1);
                        }
                        if (!_this.access.submissionIndex) {
                            _this.access.submissionIndex = (_this.auth.formAccess.read_all.indexOf(roleId) !== -1);
                        }
                    });
                }
            });
        }
        else {
            this.ready = Promise.resolve(false);
        }
    };
    /**
     * @param {?=} route
     * @return {?}
     */
    FormManagerService.prototype.reset = /**
     * @param {?=} route
     * @return {?}
     */
    function (route) {
        var _this = this;
        if (route) {
            route.params.subscribe(function (params) {
                if (params.id) {
                    _this.formio = new formiojs__WEBPACK_IMPORTED_MODULE_3__["Formio"](_this.formio.formsUrl + "/" + params.id);
                }
                else {
                    _this.reset();
                }
            });
        }
        else {
            this.formio = new formiojs__WEBPACK_IMPORTED_MODULE_3__["Formio"](this.appConfig.appUrl);
            this.setAccess();
        }
    };
    /**
     * @param {?} roles
     * @return {?}
     */
    FormManagerService.prototype.hasAccess = /**
     * @param {?} roles
     * @return {?}
     */
    function (roles) {
        if (!this.auth.user) {
            return false;
        }
        return !!lodash_intersection__WEBPACK_IMPORTED_MODULE_7___default()(roles, this.auth.user.roles).length;
    };
    /**
     * @param {?} form
     * @return {?}
     */
    FormManagerService.prototype.setForm = /**
     * @param {?} form
     * @return {?}
     */
    function (form) {
        var _this = this;
        this.form = form;
        if (form.access) {
            // Check if they have access here.
            form.access.forEach(function (access) {
                // Check for all access.
                if (_this.allAccessMap[access.type] && !_this.access[_this.allAccessMap[access.type]]) {
                    _this.access[_this.allAccessMap[access.type]] = _this.hasAccess(access.roles);
                }
                // Check for own access.
                if (_this.auth && _this.auth.user &&
                    (form._id === _this.auth.user._id) &&
                    _this.ownAccessMap[access.type] &&
                    !_this.access[_this.ownAccessMap[access.type]]) {
                    _this.access[_this.ownAccessMap[access.type]] = _this.hasAccess(access.roles);
                }
            });
        }
        return form;
    };
    /**
     * @return {?}
     */
    FormManagerService.prototype.loadForm = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.formio.loadForm().then(function (form) { return _this.setForm(form); });
    };
    /**
     * @param {?} route
     * @return {?}
     */
    FormManagerService.prototype.setSubmission = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        var _this = this;
        return new Promise(function (resolve) {
            route.params.subscribe(function (params) {
                _this.formio = new formiojs__WEBPACK_IMPORTED_MODULE_3__["Formio"](_this.formio.submissionsUrl + "/" + params.id);
                resolve(_this.formio);
            });
        });
    };
    /**
     * @param {?} submission
     * @return {?}
     */
    FormManagerService.prototype.submissionLoaded = /**
     * @param {?} submission
     * @return {?}
     */
    function (submission) {
        var _this = this;
        this.auth.ready.then(function () {
            Object(_formio_utils__WEBPACK_IMPORTED_MODULE_5__["submissionPermissions"])(_this.formio, _this.form, submission, _this.auth.user).then(function (perms) {
                _this.perms.delete = perms.delete;
                _this.perms.edit = perms.edit;
            });
        });
    };
    /**
     * @return {?}
     */
    FormManagerService.prototype.loadForms = /**
     * @return {?}
     */
    function () {
        return this.formio.loadForms({ params: {
                tags: this.config.tag
            } });
    };
    /**
     * @param {?} form
     * @return {?}
     */
    FormManagerService.prototype.createForm = /**
     * @param {?} form
     * @return {?}
     */
    function (form) {
        return this.formio.createform(form);
    };
    FormManagerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    FormManagerService.ctorParameters = function () { return [
        { type: _formio_config__WEBPACK_IMPORTED_MODULE_1__["FormioAppConfig"] },
        { type: _form_manager_config__WEBPACK_IMPORTED_MODULE_2__["FormManagerConfig"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["FormioAuthService"] }
    ]; };
    return FormManagerService;
}());

if (false) {}


/***/ }),

/***/ "./node_modules/angular-formio/manager/form/form.component.js":
/*!********************************************************************!*\
  !*** ./node_modules/angular-formio/manager/form/form.component.js ***!
  \********************************************************************/
/*! exports provided: FormManagerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormManagerFormComponent", function() { return FormManagerFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-manager.service */ "./node_modules/angular-formio/manager/form-manager.service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



var FormManagerFormComponent = /** @class */ (function () {
    function FormManagerFormComponent(service, route) {
        this.service = service;
        this.route = route;
    }
    /**
     * @return {?}
     */
    FormManagerFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.service.reset(this.route);
    };
    FormManagerFormComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "<ul class=\"nav nav-tabs\" style=\"margin-bottom:10px\"> <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"../\"><i class=\"fa fa-chevron-left glyphicon glyphicon-chevron-left\"></i></a></li> <li class=\"nav-item\" routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"view\" routerLinkActive=\"active\"><i class=\"fa fa-pencil glyphicon glyphicon-pencil\"></i> Enter Data</a></li> <li class=\"nav-item\" routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"submission\" routerLinkActive=\"active\"><i class=\"fa fa-list-alt glyphicon glyphicon-list-alt\"></i> View Data</a></li> <li *ngIf=\"service.actionAllowed('formEdit')\" class=\"nav-item\" routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"edit\" routerLinkActive=\"active\"><i class=\"fa fa-edit glyphicon glyphicon-edit\"></i> Edit Form</a></li> <li *ngIf=\"service.actionAllowed('formDelete')\" class=\"nav-item\" routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"delete\" routerLinkActive=\"active\"><span class=\"fa fa-trash glyphicon glyphicon-trash\"></span></a></li> </ul> <router-outlet></router-outlet> "
                },] },
    ];
    /** @nocollapse */
    FormManagerFormComponent.ctorParameters = function () { return [
        { type: _form_manager_service__WEBPACK_IMPORTED_MODULE_1__["FormManagerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    return FormManagerFormComponent;
}());

if (false) {}


/***/ }),

/***/ "./node_modules/angular-formio/manager/index.js":
/*!******************************************************!*\
  !*** ./node_modules/angular-formio/manager/index.js ***!
  \******************************************************/
/*! exports provided: FormManagerConfig, FormManagerService, FormManagerRoutes, FormManagerIndexComponent, FormManagerCreateComponent, FormManagerFormComponent, FormManagerViewComponent, FormManagerEditComponent, FormManagerDeleteComponent, SubmissionEditComponent, SubmissionDeleteComponent, SubmissionViewComponent, SubmissionIndexComponent, SubmissionComponent, FormManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_manager_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-manager.config */ "./node_modules/angular-formio/manager/form-manager.config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormManagerConfig", function() { return _form_manager_config__WEBPACK_IMPORTED_MODULE_0__["FormManagerConfig"]; });

/* harmony import */ var _form_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-manager.service */ "./node_modules/angular-formio/manager/form-manager.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormManagerService", function() { return _form_manager_service__WEBPACK_IMPORTED_MODULE_1__["FormManagerService"]; });

/* harmony import */ var _form_manager_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-manager.routes */ "./node_modules/angular-formio/manager/form-manager.routes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormManagerRoutes", function() { return _form_manager_routes__WEBPACK_IMPORTED_MODULE_2__["FormManagerRoutes"]; });

/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "./node_modules/angular-formio/manager/index/index.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormManagerIndexComponent", function() { return _index_index_component__WEBPACK_IMPORTED_MODULE_3__["FormManagerIndexComponent"]; });

/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create/create.component */ "./node_modules/angular-formio/manager/create/create.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormManagerCreateComponent", function() { return _create_create_component__WEBPACK_IMPORTED_MODULE_4__["FormManagerCreateComponent"]; });

/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form/form.component */ "./node_modules/angular-formio/manager/form/form.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormManagerFormComponent", function() { return _form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormManagerFormComponent"]; });

/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/view.component */ "./node_modules/angular-formio/manager/view/view.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormManagerViewComponent", function() { return _view_view_component__WEBPACK_IMPORTED_MODULE_6__["FormManagerViewComponent"]; });

/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit/edit.component */ "./node_modules/angular-formio/manager/edit/edit.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormManagerEditComponent", function() { return _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["FormManagerEditComponent"]; });

/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./delete/delete.component */ "./node_modules/angular-formio/manager/delete/delete.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormManagerDeleteComponent", function() { return _delete_delete_component__WEBPACK_IMPORTED_MODULE_8__["FormManagerDeleteComponent"]; });

/* harmony import */ var _submission_edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./submission/edit/edit.component */ "./node_modules/angular-formio/manager/submission/edit/edit.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmissionEditComponent", function() { return _submission_edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["SubmissionEditComponent"]; });

/* harmony import */ var _submission_delete_delete_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./submission/delete/delete.component */ "./node_modules/angular-formio/manager/submission/delete/delete.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmissionDeleteComponent", function() { return _submission_delete_delete_component__WEBPACK_IMPORTED_MODULE_10__["SubmissionDeleteComponent"]; });

/* harmony import */ var _submission_view_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./submission/view/view.component */ "./node_modules/angular-formio/manager/submission/view/view.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmissionViewComponent", function() { return _submission_view_view_component__WEBPACK_IMPORTED_MODULE_11__["SubmissionViewComponent"]; });

/* harmony import */ var _submission_index_index_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./submission/index/index.component */ "./node_modules/angular-formio/manager/submission/index/index.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmissionIndexComponent", function() { return _submission_index_index_component__WEBPACK_IMPORTED_MODULE_12__["SubmissionIndexComponent"]; });

/* harmony import */ var _submission_submission_submission_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./submission/submission/submission.component */ "./node_modules/angular-formio/manager/submission/submission/submission.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmissionComponent", function() { return _submission_submission_submission_component__WEBPACK_IMPORTED_MODULE_13__["SubmissionComponent"]; });

/* harmony import */ var _form_manager_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./form-manager.module */ "./node_modules/angular-formio/manager/form-manager.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormManagerModule", function() { return _form_manager_module__WEBPACK_IMPORTED_MODULE_14__["FormManagerModule"]; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

















/***/ }),

/***/ "./node_modules/angular-formio/manager/index/index.component.js":
/*!**********************************************************************!*\
  !*** ./node_modules/angular-formio/manager/index/index.component.js ***!
  \**********************************************************************/
/*! exports provided: FormManagerIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormManagerIndexComponent", function() { return FormManagerIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form-manager.service */ "./node_modules/angular-formio/manager/form-manager.service.js");
/* harmony import */ var _form_manager_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form-manager.config */ "./node_modules/angular-formio/manager/form-manager.config.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




var FormManagerIndexComponent = /** @class */ (function () {
    function FormManagerIndexComponent(service, route, router, config) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.config = config;
        this.gridQuery = { tags: this.config.tag, type: 'form' };
        this.refreshGrid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    FormManagerIndexComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.service.reset();
    };
    /**
     * @return {?}
     */
    FormManagerIndexComponent.prototype.onSearch = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var searchInput = this.search.nativeElement.value;
        if (searchInput.length > 0) {
            this.gridQuery.skip = 0;
            this.gridQuery.title__regex = '/' + searchInput + '/i';
        }
        else {
            delete this.gridQuery.title__regex;
        }
        this.refreshGrid.emit(this.gridQuery);
    };
    /**
     * @param {?} action
     * @return {?}
     */
    FormManagerIndexComponent.prototype.onAction = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this.router.navigate([action.row._id, action.action], { relativeTo: this.route });
    };
    /**
     * @param {?} row
     * @return {?}
     */
    FormManagerIndexComponent.prototype.onSelect = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        this.router.navigate([row._id, 'view'], { relativeTo: this.route });
    };
    /**
     * @return {?}
     */
    FormManagerIndexComponent.prototype.onCreateItem = /**
     * @return {?}
     */
    function () {
        this.router.navigate(['create'], { relativeTo: this.route });
    };
    FormManagerIndexComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "<div class=\"input-group mb-3\" *ngIf=\"config.includeSearch\"> <input type=\"text\" class=\"form-control\" placeholder=\"Search Forms\" aria-label=\"Search Forms\" aria-describedby=\"button-search\" #search> <div class=\"input-group-append\"> <button class=\"btn btn-outline-secondary\" type=\"button\" id=\"button-search\" (click)=\"onSearch()\"><i class=\"fa fa-search\"></i> Search</button> </div> </div> <formio-grid *ngIf=\"service.ready\" [formio]=\"service.formio\" [gridType]=\"'form'\" [query]=\"{tags: config.tag, type: 'form'}\" [refresh]=\"refreshGrid\" [isActionAllowed]=\"service.actionAllowed\" (rowAction)=\"onAction($event)\" (rowSelect)=\"onSelect($event)\" (createItem)=\"onCreateItem()\" ></formio-grid> "
                },] },
    ];
    /** @nocollapse */
    FormManagerIndexComponent.ctorParameters = function () { return [
        { type: _form_manager_service__WEBPACK_IMPORTED_MODULE_2__["FormManagerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _form_manager_config__WEBPACK_IMPORTED_MODULE_3__["FormManagerConfig"] }
    ]; };
    FormManagerIndexComponent.propDecorators = {
        search: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['search',] }]
    };
    return FormManagerIndexComponent;
}());

if (false) {}


/***/ }),

/***/ "./node_modules/angular-formio/manager/submission/delete/delete.component.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/angular-formio/manager/submission/delete/delete.component.js ***!
  \***********************************************************************************/
/*! exports provided: SubmissionDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionDeleteComponent", function() { return SubmissionDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../form-manager.service */ "./node_modules/angular-formio/manager/form-manager.service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_alerts_formio_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/alerts/formio.alerts */ "./node_modules/angular-formio/components/alerts/formio.alerts.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




var SubmissionDeleteComponent = /** @class */ (function () {
    function SubmissionDeleteComponent(service, router, route, alerts) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.alerts = alerts;
    }
    /**
     * @return {?}
     */
    SubmissionDeleteComponent.prototype.onDelete = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.service.formio.deleteSubmission().then(function () {
            _this.router.navigate(['../../'], { relativeTo: _this.route });
        }).catch(function (err) { return _this.alerts.setAlert({ type: 'danger', message: (err.message || err) }); });
    };
    /**
     * @return {?}
     */
    SubmissionDeleteComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.router.navigate(['../', 'view'], { relativeTo: this.route });
    };
    SubmissionDeleteComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "<formio-alerts [alerts]=\"alerts\"></formio-alerts> <h3>Are you sure you wish to delete this record?</h3> <div class=\"btn-toolbar\"> <button type=\"button\" (click)=\"onDelete()\" class=\"btn btn-danger\" style=\"margin-right: 10px;\">Yes</button> <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-danger\">No</button> </div> "
                },] },
    ];
    /** @nocollapse */
    SubmissionDeleteComponent.ctorParameters = function () { return [
        { type: _form_manager_service__WEBPACK_IMPORTED_MODULE_1__["FormManagerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _components_alerts_formio_alerts__WEBPACK_IMPORTED_MODULE_3__["FormioAlerts"] }
    ]; };
    return SubmissionDeleteComponent;
}());

if (false) {}


/***/ }),

/***/ "./node_modules/angular-formio/manager/submission/edit/edit.component.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/angular-formio/manager/submission/edit/edit.component.js ***!
  \*******************************************************************************/
/*! exports provided: SubmissionEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionEditComponent", function() { return SubmissionEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../form-manager.service */ "./node_modules/angular-formio/manager/form-manager.service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



var SubmissionEditComponent = /** @class */ (function () {
    function SubmissionEditComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
    }
    /**
     * @param {?} submission
     * @return {?}
     */
    SubmissionEditComponent.prototype.onSubmit = /**
     * @param {?} submission
     * @return {?}
     */
    function (submission) {
        this.router.navigate(['../../'], { relativeTo: this.route });
    };
    SubmissionEditComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "<formio [renderer]=\"service.config.renderer\" [src]=\"service.formio.submissionUrl\" (submit)=\"onSubmit($event)\" (formLoad)=\"service.setForm($event)\" (submissionLoad)=\"service.submissionLoaded($event)\" ></formio> "
                },] },
    ];
    /** @nocollapse */
    SubmissionEditComponent.ctorParameters = function () { return [
        { type: _form_manager_service__WEBPACK_IMPORTED_MODULE_1__["FormManagerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    return SubmissionEditComponent;
}());

if (false) {}


/***/ }),

/***/ "./node_modules/angular-formio/manager/submission/index/index.component.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/angular-formio/manager/submission/index/index.component.js ***!
  \*********************************************************************************/
/*! exports provided: SubmissionIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionIndexComponent", function() { return SubmissionIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../form-manager.service */ "./node_modules/angular-formio/manager/form-manager.service.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



var SubmissionIndexComponent = /** @class */ (function () {
    function SubmissionIndexComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    /**
     * @param {?} row
     * @return {?}
     */
    SubmissionIndexComponent.prototype.onSelect = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        this.router.navigate([row._id, 'view'], { relativeTo: this.route });
    };
    SubmissionIndexComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "<formio-grid [formio]=\"service.formio\" (rowSelect)=\"onSelect($event)\"></formio-grid> "
                },] },
    ];
    /** @nocollapse */
    SubmissionIndexComponent.ctorParameters = function () { return [
        { type: _form_manager_service__WEBPACK_IMPORTED_MODULE_2__["FormManagerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    return SubmissionIndexComponent;
}());

if (false) {}


/***/ }),

/***/ "./node_modules/angular-formio/manager/submission/submission/submission.component.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/angular-formio/manager/submission/submission/submission.component.js ***!
  \*******************************************************************************************/
/*! exports provided: SubmissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionComponent", function() { return SubmissionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../form-manager.service */ "./node_modules/angular-formio/manager/form-manager.service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



var SubmissionComponent = /** @class */ (function () {
    function SubmissionComponent(service, route) {
        this.service = service;
        this.route = route;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    SubmissionComponent.prototype.setDownloadUrl = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        this.downloadUrl = url;
    };
    /**
     * @return {?}
     */
    SubmissionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.service.setSubmission(this.route).then(function (formio) {
            formio.getDownloadUrl().then(function (url) { return _this.setDownloadUrl(url); });
        });
    };
    SubmissionComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "<a *ngIf=\"downloadUrl\" [href]=\"downloadUrl\" target=\"_blank\" class=\"pull-right\"><img src=\"https://pro.formview.io/assets/pdf.png\" style=\"height: 2em;\" /></a> <ul class=\"nav nav-tabs\" style=\"margin-bottom:10px\"> <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"../\"><i class=\"fa fa-chevron-left glyphicon glyphicon-chevron-left\"></i></a></li> <li class=\"nav-item\" routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"view\" routerLinkActive=\"active\"><i class=\"fa fa-eye glyphicon glyphicon-eye\"></i> View</a></li> <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"service.perms.edit\"><a class=\"nav-link\" routerLink=\"edit\" routerLinkActive=\"active\"><i class=\"fa fa-edit glyphicon glyphicon-edit\"></i> Edit</a></li> <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"service.perms.delete\"><a class=\"nav-link\" routerLink=\"delete\" routerLinkActive=\"active\"><span class=\"fa fa-trash glyphicon glyphicon-trash\"></span></a></li> </ul> <router-outlet></router-outlet> "
                },] },
    ];
    /** @nocollapse */
    SubmissionComponent.ctorParameters = function () { return [
        { type: _form_manager_service__WEBPACK_IMPORTED_MODULE_1__["FormManagerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    return SubmissionComponent;
}());

if (false) {}


/***/ }),

/***/ "./node_modules/angular-formio/manager/submission/view/view.component.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/angular-formio/manager/submission/view/view.component.js ***!
  \*******************************************************************************/
/*! exports provided: SubmissionViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionViewComponent", function() { return SubmissionViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../form-manager.service */ "./node_modules/angular-formio/manager/form-manager.service.js");
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var SubmissionViewComponent = /** @class */ (function () {
    function SubmissionViewComponent(service) {
        this.service = service;
    }
    SubmissionViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "<formio [renderer]=\"service.config.renderer\" [src]=\"service.formio.submissionUrl\" [readOnly]=\"true\" (formLoad)=\"service.setForm($event)\" (submissionLoad)=\"service.submissionLoaded($event)\" ></formio> "
                },] },
    ];
    /** @nocollapse */
    SubmissionViewComponent.ctorParameters = function () { return [
        { type: _form_manager_service__WEBPACK_IMPORTED_MODULE_1__["FormManagerService"] }
    ]; };
    return SubmissionViewComponent;
}());

if (false) {}


/***/ }),

/***/ "./node_modules/angular-formio/manager/view/view.component.js":
/*!********************************************************************!*\
  !*** ./node_modules/angular-formio/manager/view/view.component.js ***!
  \********************************************************************/
/*! exports provided: FormManagerViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormManagerViewComponent", function() { return FormManagerViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form_manager_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-manager.config */ "./node_modules/angular-formio/manager/form-manager.config.js");
/* harmony import */ var _form_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form-manager.service */ "./node_modules/angular-formio/manager/form-manager.service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/auth.service */ "./node_modules/angular-formio/auth/auth.service.js");
/* harmony import */ var formiojs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formiojs */ "./node_modules/formiojs/index.js");
/* harmony import */ var formiojs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(formiojs__WEBPACK_IMPORTED_MODULE_5__);
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */






var FormManagerViewComponent = /** @class */ (function () {
    function FormManagerViewComponent(service, router, route, config, auth) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.config = config;
        this.auth = auth;
        this.onSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.renderOptions = {
            saveDraft: this.config.saveDraft
        };
        this.currentForm = null;
        this.submission = { data: {} };
    }
    /**
     * @return {?}
     */
    FormManagerViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Reset the formio service to this form only.
        this.service.formio = new formiojs__WEBPACK_IMPORTED_MODULE_5__["Formio"](this.service.formio.formUrl);
        this.service.loadForm().then(function (form) {
            _this.currentForm = form;
        });
    };
    /**
     * @param {?} submission
     * @return {?}
     */
    FormManagerViewComponent.prototype.onSubmit = /**
     * @param {?} submission
     * @return {?}
     */
    function (submission) {
        var _this = this;
        this.submission.data = submission.data;
        this.submission.state = 'complete';
        this.service.formio.saveSubmission(this.submission).then(function (saved) {
            _this.onSuccess.emit();
            _this.router.navigate(['../', 'submission', saved._id], { relativeTo: _this.route });
        }).catch(function (err) { return _this.onError.emit(err); });
    };
    FormManagerViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    template: "<formio *ngIf=\"currentForm\" [renderer]=\"config.renderer\" [renderOptions]=\"renderOptions\" [url]=\"service.formio.formUrl\" [form]=\"currentForm\" [submission]=\"submission\" [success]=\"onSuccess\" [error]=\"onError\" (submit)=\"onSubmit($event)\" ></formio> "
                },] },
    ];
    /** @nocollapse */
    FormManagerViewComponent.ctorParameters = function () { return [
        { type: _form_manager_service__WEBPACK_IMPORTED_MODULE_2__["FormManagerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _form_manager_config__WEBPACK_IMPORTED_MODULE_1__["FormManagerConfig"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["FormioAuthService"] }
    ]; };
    return FormManagerViewComponent;
}());

if (false) {}


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludes.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayIncludes.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./node_modules/lodash/_baseIndexOf.js");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludesWith.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash/_arrayIncludesWith.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ "./node_modules/lodash/_baseEach.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ "./node_modules/lodash/_createBaseEach.js");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ "./node_modules/lodash/_baseIntersection.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIntersection.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ "./node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ "./node_modules/lodash/_arrayIncludesWith.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * The base implementation of methods like `_.intersection`, without support
 * for iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */
function baseIntersection(arrays, iteratee, comparator) {
  var includes = comparator ? arrayIncludesWith : arrayIncludes,
      length = arrays[0].length,
      othLength = arrays.length,
      othIndex = othLength,
      caches = Array(othLength),
      maxLength = Infinity,
      result = [];

  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = arrayMap(array, baseUnary(iteratee));
    }
    maxLength = nativeMin(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
      ? new SetCache(othIndex && array)
      : undefined;
  }
  array = arrays[0];

  var index = -1,
      seen = caches[0];

  outer:
  while (++index < length && result.length < maxLength) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (!(seen
          ? cacheHas(seen, computed)
          : includes(result, computed, comparator)
        )) {
      othIndex = othLength;
      while (--othIndex) {
        var cache = caches[othIndex];
        if (!(cache
              ? cacheHas(cache, computed)
              : includes(arrays[othIndex], computed, comparator))
            ) {
          continue outer;
        }
      }
      if (seen) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseIntersection;


/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_castArrayLikeObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_castArrayLikeObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js");

/**
 * Casts `value` to an empty array if it's not an array like object.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array|Object} Returns the cast array-like object.
 */
function castArrayLikeObject(value) {
  return isArrayLikeObject(value) ? value : [];
}

module.exports = castArrayLikeObject;


/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/each.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/each.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./forEach */ "./node_modules/lodash/forEach.js");


/***/ }),

/***/ "./node_modules/lodash/forEach.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/forEach.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    castFunction = __webpack_require__(/*! ./_castFunction */ "./node_modules/lodash/_castFunction.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),

/***/ "./node_modules/lodash/intersection.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/intersection.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseIntersection = __webpack_require__(/*! ./_baseIntersection */ "./node_modules/lodash/_baseIntersection.js"),
    baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    castArrayLikeObject = __webpack_require__(/*! ./_castArrayLikeObject */ "./node_modules/lodash/_castArrayLikeObject.js");

/**
 * Creates an array of unique values that are included in all given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * _.intersection([2, 1], [2, 3]);
 * // => [2]
 */
var intersection = baseRest(function(arrays) {
  var mapped = arrayMap(arrays, castArrayLikeObject);
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped)
    : [];
});

module.exports = intersection;


/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js ***!
  \*********************************************************************************/
/*! exports provided: PagerComponent, PaginationComponent, PaginationModule, PaginationConfig, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return PagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return PaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationConfig", function() { return PaginationConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return PAGER_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return PAGINATION_CONTROL_VALUE_ACCESSOR; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Provides default values for Pagination and pager components
 */
var PaginationConfig = /** @class */ (function () {
    function PaginationConfig() {
        this.main = {
            maxSize: void 0,
            itemsPerPage: 10,
            boundaryLinks: false,
            directionLinks: true,
            firstText: 'First',
            previousText: 'Previous',
            nextText: 'Next',
            lastText: 'Last',
            pageBtnClass: '',
            rotate: true
        };
        this.pager = {
            itemsPerPage: 15,
            previousText: '« Previous',
            nextText: 'Next »',
            pageBtnClass: '',
            align: true
        };
    }
    PaginationConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return PaginationConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ PAGER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return PagerComponent; }),
    multi: true
};
var PagerComponent = /** @class */ (function () {
    function PagerComponent(elementRef, paginationConfig, changeDetection) {
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /**
         * fired when total pages count changes, $event:number equals to total pages count
         */
        this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * fired when page was changed, $event:{page, itemsPerPage} equals to
         * object with current page index and number of items per page
         */
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
        }
    }
    Object.defineProperty(PagerComponent.prototype, "itemsPerPage", {
        get: /**
         * maximum number of items per page. If value less than 1 will display all items on one page
         * @return {?}
         */
        function () {
            return this._itemsPerPage;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "totalItems", {
        get: /**
         * total number of items in all pages
         * @return {?}
         */
        function () {
            return this._totalItems;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "totalPages", {
        get: /**
         * @return {?}
         */
        function () {
            return this._totalPages;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "page", {
        get: /**
         * @return {?}
         */
        function () {
            return this._page;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} config
     * @return {?}
     */
    PagerComponent.prototype.configureOptions = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = Object.assign({}, config);
    };
    /**
     * @return {?}
     */
    PagerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    PagerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    PagerComponent.prototype.getText = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        // tslint:disable-next-line:no-any
        return (/** @type {?} */ (this))[key + "Text"] || this.config[key + "Text"];
    };
    /**
     * @return {?}
     */
    PagerComponent.prototype.noPrevious = /**
     * @return {?}
     */
    function () {
        return this.page === 1;
    };
    /**
     * @return {?}
     */
    PagerComponent.prototype.noNext = /**
     * @return {?}
     */
    function () {
        return this.page === this.totalPages;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PagerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PagerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    PagerComponent.prototype.selectPage = /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                // tslint:disable-next-line:no-any
                var /** @type {?} */ target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    };
    // Create page object used in template
    /**
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    PagerComponent.prototype.makePage = /**
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    /**
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    PagerComponent.prototype.getPages = /**
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    function (currentPage, totalPages) {
        var /** @type {?} */ pages = [];
        // Default page limits
        var /** @type {?} */ startPage = 1;
        var /** @type {?} */ endPage = totalPages;
        var /** @type {?} */ isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (var /** @type {?} */ num = startPage; num <= endPage; num++) {
            var /** @type {?} */ page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                var /** @type {?} */ previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                var /** @type {?} */ nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // base class
    /**
     * @return {?}
     */
    PagerComponent.prototype.calculateTotalPages = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    PagerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'pager',
                    template: "<ul class=\"pager\">\n  <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a>\n  </li>\n  <li [class.disabled]=\"noNext()\" [class.next]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a>\n  </li>\n</ul>\n",
                    providers: [PAGER_CONTROL_VALUE_ACCESSOR]
                }] }
    ];
    /** @nocollapse */
    PagerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: PaginationConfig, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    PagerComponent.propDecorators = {
        "align": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxSize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "boundaryLinks": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "directionLinks": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "firstText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "previousText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "nextText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "lastText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rotate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "pageBtnClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "numPages": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "pageChanged": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "itemsPerPage": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "totalItems": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return PagerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ PAGINATION_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return PaginationComponent; }),
    multi: true
};
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(elementRef, paginationConfig, changeDetection) {
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /**
         * fired when total pages count changes, $event:number equals to total pages count
         */
        this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * fired when page was changed, $event:{page, itemsPerPage} equals to object
         * with current page index and number of items per page
         */
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(paginationConfig.main);
        }
    }
    Object.defineProperty(PaginationComponent.prototype, "itemsPerPage", {
        get: /**
         * maximum number of items per page. If value less than 1 will display all items on one page
         * @return {?}
         */
        function () {
            return this._itemsPerPage;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalItems", {
        get: /**
         * total number of items in all pages
         * @return {?}
         */
        function () {
            return this._totalItems;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalPages", {
        get: /**
         * @return {?}
         */
        function () {
            return this._totalPages;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "page", {
        get: /**
         * @return {?}
         */
        function () {
            return this._page;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} config
     * @return {?}
     */
    PaginationComponent.prototype.configureOptions = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = Object.assign({}, config);
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    PaginationComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    PaginationComponent.prototype.getText = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        // tslint:disable-next-line:no-any
        return (/** @type {?} */ (this))[key + "Text"] || this.config[key + "Text"];
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.noPrevious = /**
     * @return {?}
     */
    function () {
        return this.page === 1;
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.noNext = /**
     * @return {?}
     */
    function () {
        return this.page === this.totalPages;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PaginationComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PaginationComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    PaginationComponent.prototype.selectPage = /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                // tslint:disable-next-line:no-any
                var /** @type {?} */ target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    };
    // Create page object used in template
    /**
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    PaginationComponent.prototype.makePage = /**
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    /**
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    PaginationComponent.prototype.getPages = /**
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    function (currentPage, totalPages) {
        var /** @type {?} */ pages = [];
        // Default page limits
        var /** @type {?} */ startPage = 1;
        var /** @type {?} */ endPage = totalPages;
        var /** @type {?} */ isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (var /** @type {?} */ num = startPage; num <= endPage; num++) {
            var /** @type {?} */ page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                var /** @type {?} */ previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                var /** @type {?} */ nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // base class
    /**
     * @return {?}
     */
    PaginationComponent.prototype.calculateTotalPages = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    PaginationComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'pagination',
                    template: "<ul class=\"pagination\" [ngClass]=\"classMap\">\n  <li class=\"pagination-first page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noPrevious()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(1, $event)\"\n       [innerHTML]=\"getText('first')\"></a>\n  </li>\n\n  <li class=\"pagination-prev page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noPrevious()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\"\n       [innerHTML]=\"getText('previous')\"></a>\n  </li>\n\n  <li *ngFor=\"let pg of pages\"\n      [class.active]=\"pg.active\"\n      [class.disabled]=\"disabled&&!pg.active\"\n      class=\"pagination-page page-item\">\n    <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\"\n       [innerHTML]=\"pg.text\"></a>\n  </li>\n\n  <li class=\"pagination-next page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noNext()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\"\n       [innerHTML]=\"getText('next')\"></a></li>\n\n  <li class=\"pagination-last page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noNext()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\"\n       [innerHTML]=\"getText('last')\"></a></li>\n</ul>\n",
                    providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
                }] }
    ];
    /** @nocollapse */
    PaginationComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: PaginationConfig, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    PaginationComponent.propDecorators = {
        "align": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxSize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "boundaryLinks": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "directionLinks": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "firstText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "previousText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "nextText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "lastText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rotate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "pageBtnClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "numPages": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "pageChanged": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "itemsPerPage": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "totalItems": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return PaginationComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PaginationModule = /** @class */ (function () {
    function PaginationModule() {
    }
    /**
     * @return {?}
     */
    PaginationModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: PaginationModule, providers: [PaginationConfig] };
    };
    PaginationModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                    declarations: [PagerComponent, PaginationComponent],
                    exports: [PagerComponent, PaginationComponent]
                },] }
    ];
    return PaginationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1wYWdpbmF0aW9uLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvcGFnaW5hdGlvbi9wYWdlci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wYWdpbmF0aW9uL3BhZ2luYXRpb24ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHRvZG86IHNwbGl0XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbmZpZ01vZGVsLCBQYWdlck1vZGVsIH0gZnJvbSAnLi9tb2RlbHMnO1xuXG4vKiogUHJvdmlkZXMgZGVmYXVsdCB2YWx1ZXMgZm9yIFBhZ2luYXRpb24gYW5kIHBhZ2VyIGNvbXBvbmVudHMgKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29uZmlnIHtcbiAgbWFpbjogQ29uZmlnTW9kZWwgPSB7XG4gICAgbWF4U2l6ZTogdm9pZCAwLFxuICAgIGl0ZW1zUGVyUGFnZTogMTAsXG4gICAgYm91bmRhcnlMaW5rczogZmFsc2UsXG4gICAgZGlyZWN0aW9uTGlua3M6IHRydWUsXG4gICAgZmlyc3RUZXh0OiAnRmlyc3QnLFxuICAgIHByZXZpb3VzVGV4dDogJ1ByZXZpb3VzJyxcbiAgICBuZXh0VGV4dDogJ05leHQnLFxuICAgIGxhc3RUZXh0OiAnTGFzdCcsXG4gICAgcGFnZUJ0bkNsYXNzOiAnJyxcbiAgICByb3RhdGU6IHRydWVcbiAgfTtcbiAgcGFnZXI6IFBhZ2VyTW9kZWwgPSB7XG4gICAgaXRlbXNQZXJQYWdlOiAxNSxcbiAgICBwcmV2aW91c1RleHQ6ICfDgsKrIFByZXZpb3VzJyxcbiAgICBuZXh0VGV4dDogJ05leHQgw4LCuycsXG4gICAgcGFnZUJ0bkNsYXNzOiAnJyxcbiAgICBhbGlnbjogdHJ1ZVxuICB9O1xufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFByb3ZpZGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBQYWdlQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi9wYWdpbmF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uQ29uZmlnIH0gZnJvbSAnLi9wYWdpbmF0aW9uLmNvbmZpZyc7XG5cbmltcG9ydCB7IENvbmZpZ01vZGVsLCBQYWdlc01vZGVsIH0gZnJvbSAnLi9tb2RlbHMnO1xuXG5leHBvcnQgY29uc3QgUEFHRVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQYWdlckNvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlci5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1BBR0VSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gIGNvbmZpZzogQ29uZmlnTW9kZWw7XG4gIC8qKiBpZiBgdHJ1ZWAgYWxpZ25zIGVhY2ggbGluayB0byB0aGUgc2lkZXMgb2YgcGFnZXIgKi9cbiAgQElucHV0KCkgYWxpZ246IGJvb2xlYW47XG4gIC8qKiBsaW1pdCBudW1iZXIgZm9yIHBhZ2UgbGlua3MgaW4gcGFnZXIgKi9cbiAgQElucHV0KCkgbWF4U2l6ZTogbnVtYmVyO1xuICAvKiogaWYgZmFsc2UgZmlyc3QgYW5kIGxhc3QgYnV0dG9ucyB3aWxsIGJlIGhpZGRlbiAqL1xuICBASW5wdXQoKSBib3VuZGFyeUxpbmtzOiBib29sZWFuO1xuICAvKiogaWYgZmFsc2UgcHJldmlvdXMgYW5kIG5leHQgYnV0dG9ucyB3aWxsIGJlIGhpZGRlbiAqL1xuICBASW5wdXQoKSBkaXJlY3Rpb25MaW5rczogYm9vbGVhbjtcbiAgLy8gbGFiZWxzXG4gIC8qKiBmaXJzdCBidXR0b24gdGV4dCAqL1xuICBASW5wdXQoKSBmaXJzdFRleHQ6IHN0cmluZztcbiAgLyoqIHByZXZpb3VzIGJ1dHRvbiB0ZXh0ICovXG4gIEBJbnB1dCgpIHByZXZpb3VzVGV4dDogc3RyaW5nO1xuICAvKiogbmV4dCBidXR0b24gdGV4dCAqL1xuICBASW5wdXQoKSBuZXh0VGV4dDogc3RyaW5nO1xuICAvKiogbGFzdCBidXR0b24gdGV4dCAqL1xuICBASW5wdXQoKSBsYXN0VGV4dDogc3RyaW5nO1xuICAvKiogaWYgdHJ1ZSBjdXJyZW50IHBhZ2Ugd2lsbCBpbiB0aGUgbWlkZGxlIG9mIHBhZ2VzIGxpc3QgKi9cbiAgQElucHV0KCkgcm90YXRlOiBib29sZWFuO1xuICAvLyBjc3NcbiAgLyoqIGFkZCBjbGFzcyB0byA8Y29kZT48bGlcXD48L2NvZGU+ICovXG4gIEBJbnB1dCgpIHBhZ2VCdG5DbGFzczogc3RyaW5nO1xuXG4gIC8qKiBpZiB0cnVlIHBhZ2luYXRpb24gY29tcG9uZW50IHdpbGwgYmUgZGlzYWJsZWQgKi9cbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqIGZpcmVkIHdoZW4gdG90YWwgcGFnZXMgY291bnQgY2hhbmdlcywgJGV2ZW50Om51bWJlciBlcXVhbHMgdG8gdG90YWwgcGFnZXMgY291bnQgKi9cbiAgQE91dHB1dCgpIG51bVBhZ2VzOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICAvKiogZmlyZWQgd2hlbiBwYWdlIHdhcyBjaGFuZ2VkLCAkZXZlbnQ6e3BhZ2UsIGl0ZW1zUGVyUGFnZX0gZXF1YWxzIHRvXG4gICAqIG9iamVjdCB3aXRoIGN1cnJlbnQgcGFnZSBpbmRleCBhbmQgbnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcGFnZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxQYWdlQ2hhbmdlZEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnZUNoYW5nZWRFdmVudD4oKTtcblxuICAvKiogbWF4aW11bSBudW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UuIElmIHZhbHVlIGxlc3MgdGhhbiAxIHdpbGwgZGlzcGxheSBhbGwgaXRlbXMgb24gb25lIHBhZ2UgKi9cbiAgQElucHV0KClcbiAgZ2V0IGl0ZW1zUGVyUGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9pdGVtc1BlclBhZ2U7XG4gIH1cblxuICBzZXQgaXRlbXNQZXJQYWdlKHY6IG51bWJlcikge1xuICAgIHRoaXMuX2l0ZW1zUGVyUGFnZSA9IHY7XG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XG4gIH1cblxuICAvKiogdG90YWwgbnVtYmVyIG9mIGl0ZW1zIGluIGFsbCBwYWdlcyAqL1xuICBASW5wdXQoKVxuICBnZXQgdG90YWxJdGVtcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b3RhbEl0ZW1zO1xuICB9XG5cbiAgc2V0IHRvdGFsSXRlbXModjogbnVtYmVyKSB7XG4gICAgdGhpcy5fdG90YWxJdGVtcyA9IHY7XG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XG4gIH1cblxuICBnZXQgdG90YWxQYWdlcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b3RhbFBhZ2VzO1xuICB9XG5cbiAgc2V0IHRvdGFsUGFnZXModjogbnVtYmVyKSB7XG4gICAgdGhpcy5fdG90YWxQYWdlcyA9IHY7XG4gICAgdGhpcy5udW1QYWdlcy5lbWl0KHYpO1xuICAgIGlmICh0aGlzLmluaXRlZCkge1xuICAgICAgdGhpcy5zZWxlY3RQYWdlKHRoaXMucGFnZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0IHBhZ2UodmFsdWU6IG51bWJlcikge1xuICAgIGNvbnN0IF9wcmV2aW91cyA9IHRoaXMuX3BhZ2U7XG4gICAgdGhpcy5fcGFnZSA9IHZhbHVlID4gdGhpcy50b3RhbFBhZ2VzID8gdGhpcy50b3RhbFBhZ2VzIDogdmFsdWUgfHwgMTtcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcblxuICAgIGlmIChfcHJldmlvdXMgPT09IHRoaXMuX3BhZ2UgfHwgdHlwZW9mIF9wcmV2aW91cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnBhZ2VDaGFuZ2VkLmVtaXQoe1xuICAgICAgcGFnZTogdGhpcy5fcGFnZSxcbiAgICAgIGl0ZW1zUGVyUGFnZTogdGhpcy5pdGVtc1BlclBhZ2VcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBwYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gIH1cblxuICBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4gIGNsYXNzTWFwOiBzdHJpbmc7XG4gIHBhZ2VzOiBQYWdlc01vZGVsW107XG5cbiAgcHJvdGVjdGVkIF9pdGVtc1BlclBhZ2U6IG51bWJlcjtcbiAgcHJvdGVjdGVkIF90b3RhbEl0ZW1zOiBudW1iZXI7XG4gIHByb3RlY3RlZCBfdG90YWxQYWdlczogbnVtYmVyO1xuICBwcm90ZWN0ZWQgaW5pdGVkID0gZmFsc2U7XG4gIHByb3RlY3RlZCBfcGFnZSA9IDE7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwYWdpbmF0aW9uQ29uZmlnOiBQYWdpbmF0aW9uQ29uZmlnLFxuICAgICAgICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLmVsZW1lbnRSZWYgPSBlbGVtZW50UmVmO1xuICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgIHRoaXMuY29uZmlndXJlT3B0aW9ucyhcbiAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFnaW5hdGlvbkNvbmZpZy5tYWluLCBwYWdpbmF0aW9uQ29uZmlnLnBhZ2VyKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb25maWd1cmVPcHRpb25zKGNvbmZpZzogQ29uZmlnTW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuY2xhc3NNYXAgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJyc7XG4gICAgfVxuICAgIC8vIHdhdGNoIGZvciBtYXhTaXplXG4gICAgdGhpcy5tYXhTaXplID1cbiAgICAgIHR5cGVvZiB0aGlzLm1heFNpemUgIT09ICd1bmRlZmluZWQnID8gdGhpcy5tYXhTaXplIDogdGhpcy5jb25maWcubWF4U2l6ZTtcbiAgICB0aGlzLnJvdGF0ZSA9XG4gICAgICB0eXBlb2YgdGhpcy5yb3RhdGUgIT09ICd1bmRlZmluZWQnID8gdGhpcy5yb3RhdGUgOiB0aGlzLmNvbmZpZy5yb3RhdGU7XG4gICAgdGhpcy5ib3VuZGFyeUxpbmtzID1cbiAgICAgIHR5cGVvZiB0aGlzLmJvdW5kYXJ5TGlua3MgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gdGhpcy5ib3VuZGFyeUxpbmtzXG4gICAgICAgIDogdGhpcy5jb25maWcuYm91bmRhcnlMaW5rcztcbiAgICB0aGlzLmRpcmVjdGlvbkxpbmtzID1cbiAgICAgIHR5cGVvZiB0aGlzLmRpcmVjdGlvbkxpbmtzICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHRoaXMuZGlyZWN0aW9uTGlua3NcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5kaXJlY3Rpb25MaW5rcztcbiAgICB0aGlzLnBhZ2VCdG5DbGFzcyA9XG4gICAgICB0eXBlb2YgdGhpcy5wYWdlQnRuQ2xhc3MgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gdGhpcy5wYWdlQnRuQ2xhc3NcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5wYWdlQnRuQ2xhc3M7XG5cbiAgICAvLyBiYXNlIGNsYXNzXG4gICAgdGhpcy5pdGVtc1BlclBhZ2UgPVxuICAgICAgdHlwZW9mIHRoaXMuaXRlbXNQZXJQYWdlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHRoaXMuaXRlbXNQZXJQYWdlXG4gICAgICAgIDogdGhpcy5jb25maWcuaXRlbXNQZXJQYWdlO1xuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xuICAgIC8vIHRoaXMgY2xhc3NcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlID0gdmFsdWU7XG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xuICB9XG5cbiAgZ2V0VGV4dChrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHJldHVybiAodGhpcyBhcyBhbnkpW2Ake2tleX1UZXh0YF0gfHwgdGhpcy5jb25maWdbYCR7a2V5fVRleHRgXTtcbiAgfVxuXG4gIG5vUHJldmlvdXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZSA9PT0gMTtcbiAgfVxuXG4gIG5vTmV4dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlID09PSB0aGlzLnRvdGFsUGFnZXM7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZWxlY3RQYWdlKHBhZ2U6IG51bWJlciwgZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGlmIChldmVudCAmJiBldmVudC50YXJnZXQpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICBjb25zdCB0YXJnZXQ6IGFueSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgdGFyZ2V0LmJsdXIoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMud3JpdGVWYWx1ZShwYWdlKTtcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5wYWdlKTtcbiAgICB9XG4gIH1cblxuICAvLyBDcmVhdGUgcGFnZSBvYmplY3QgdXNlZCBpbiB0ZW1wbGF0ZVxuICBwcm90ZWN0ZWQgbWFrZVBhZ2UobnVtOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICB0ZXh0OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IGJvb2xlYW4pOiB7IG51bWJlcjogbnVtYmVyOyB0ZXh0OiBzdHJpbmc7IGFjdGl2ZTogYm9vbGVhbiB9IHtcbiAgICByZXR1cm4ge3RleHQsIG51bWJlcjogbnVtLCBhY3RpdmV9O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFBhZ2VzKGN1cnJlbnRQYWdlOiBudW1iZXIsIHRvdGFsUGFnZXM6IG51bWJlcik6IFBhZ2VzTW9kZWxbXSB7XG4gICAgY29uc3QgcGFnZXM6IFBhZ2VzTW9kZWxbXSA9IFtdO1xuXG4gICAgLy8gRGVmYXVsdCBwYWdlIGxpbWl0c1xuICAgIGxldCBzdGFydFBhZ2UgPSAxO1xuICAgIGxldCBlbmRQYWdlID0gdG90YWxQYWdlcztcbiAgICBjb25zdCBpc01heFNpemVkID1cbiAgICAgIHR5cGVvZiB0aGlzLm1heFNpemUgIT09ICd1bmRlZmluZWQnICYmIHRoaXMubWF4U2l6ZSA8IHRvdGFsUGFnZXM7XG5cbiAgICAvLyByZWNvbXB1dGUgaWYgbWF4U2l6ZVxuICAgIGlmIChpc01heFNpemVkKSB7XG4gICAgICBpZiAodGhpcy5yb3RhdGUpIHtcbiAgICAgICAgLy8gQ3VycmVudCBwYWdlIGlzIGRpc3BsYXllZCBpbiB0aGUgbWlkZGxlIG9mIHRoZSB2aXNpYmxlIG9uZXNcbiAgICAgICAgc3RhcnRQYWdlID0gTWF0aC5tYXgoY3VycmVudFBhZ2UgLSBNYXRoLmZsb29yKHRoaXMubWF4U2l6ZSAvIDIpLCAxKTtcbiAgICAgICAgZW5kUGFnZSA9IHN0YXJ0UGFnZSArIHRoaXMubWF4U2l6ZSAtIDE7XG5cbiAgICAgICAgLy8gQWRqdXN0IGlmIGxpbWl0IGlzIGV4Y2VlZGVkXG4gICAgICAgIGlmIChlbmRQYWdlID4gdG90YWxQYWdlcykge1xuICAgICAgICAgIGVuZFBhZ2UgPSB0b3RhbFBhZ2VzO1xuICAgICAgICAgIHN0YXJ0UGFnZSA9IGVuZFBhZ2UgLSB0aGlzLm1heFNpemUgKyAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBWaXNpYmxlIHBhZ2VzIGFyZSBwYWdpbmF0ZWQgd2l0aCBtYXhTaXplXG4gICAgICAgIHN0YXJ0UGFnZSA9XG4gICAgICAgICAgKE1hdGguY2VpbChjdXJyZW50UGFnZSAvIHRoaXMubWF4U2l6ZSkgLSAxKSAqIHRoaXMubWF4U2l6ZSArIDE7XG5cbiAgICAgICAgLy8gQWRqdXN0IGxhc3QgcGFnZSBpZiBsaW1pdCBpcyBleGNlZWRlZFxuICAgICAgICBlbmRQYWdlID0gTWF0aC5taW4oc3RhcnRQYWdlICsgdGhpcy5tYXhTaXplIC0gMSwgdG90YWxQYWdlcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIHBhZ2UgbnVtYmVyIGxpbmtzXG4gICAgZm9yIChsZXQgbnVtID0gc3RhcnRQYWdlOyBudW0gPD0gZW5kUGFnZTsgbnVtKyspIHtcbiAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLm1ha2VQYWdlKG51bSwgbnVtLnRvU3RyaW5nKCksIG51bSA9PT0gY3VycmVudFBhZ2UpO1xuICAgICAgcGFnZXMucHVzaChwYWdlKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgbGlua3MgdG8gbW92ZSBiZXR3ZWVuIHBhZ2Ugc2V0c1xuICAgIGlmIChpc01heFNpemVkICYmICF0aGlzLnJvdGF0ZSkge1xuICAgICAgaWYgKHN0YXJ0UGFnZSA+IDEpIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNQYWdlU2V0ID0gdGhpcy5tYWtlUGFnZShzdGFydFBhZ2UgLSAxLCAnLi4uJywgZmFsc2UpO1xuICAgICAgICBwYWdlcy51bnNoaWZ0KHByZXZpb3VzUGFnZVNldCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmRQYWdlIDwgdG90YWxQYWdlcykge1xuICAgICAgICBjb25zdCBuZXh0UGFnZVNldCA9IHRoaXMubWFrZVBhZ2UoZW5kUGFnZSArIDEsICcuLi4nLCBmYWxzZSk7XG4gICAgICAgIHBhZ2VzLnB1c2gobmV4dFBhZ2VTZXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYWdlcztcbiAgfVxuXG4gIC8vIGJhc2UgY2xhc3NcbiAgcHJvdGVjdGVkIGNhbGN1bGF0ZVRvdGFsUGFnZXMoKTogbnVtYmVyIHtcbiAgICBjb25zdCB0b3RhbFBhZ2VzID1cbiAgICAgIHRoaXMuaXRlbXNQZXJQYWdlIDwgMVxuICAgICAgICA/IDFcbiAgICAgICAgOiBNYXRoLmNlaWwodGhpcy50b3RhbEl0ZW1zIC8gdGhpcy5pdGVtc1BlclBhZ2UpO1xuXG4gICAgcmV0dXJuIE1hdGgubWF4KHRvdGFsUGFnZXMgfHwgMCwgMSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBQcm92aWRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbmZpZyB9IGZyb20gJy4vcGFnaW5hdGlvbi5jb25maWcnO1xuXG5pbXBvcnQgeyBDb25maWdNb2RlbCwgUGFnZXNNb2RlbCB9IGZyb20gJy4vbW9kZWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBQYWdlQ2hhbmdlZEV2ZW50IHtcbiAgaXRlbXNQZXJQYWdlOiBudW1iZXI7XG4gIHBhZ2U6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IFBBR0lOQVRJT05fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQYWdpbmF0aW9uQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1BBR0lOQVRJT05fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICBjb25maWc6IENvbmZpZ01vZGVsO1xuICAvKiogaWYgYHRydWVgIGFsaWducyBlYWNoIGxpbmsgdG8gdGhlIHNpZGVzIG9mIHBhZ2VyICovXG4gIEBJbnB1dCgpIGFsaWduOiBib29sZWFuO1xuICAvKiogbGltaXQgbnVtYmVyIGZvciBwYWdlIGxpbmtzIGluIHBhZ2VyICovXG4gIEBJbnB1dCgpIG1heFNpemU6IG51bWJlcjtcbiAgLyoqIGlmIGZhbHNlIGZpcnN0IGFuZCBsYXN0IGJ1dHRvbnMgd2lsbCBiZSBoaWRkZW4gKi9cbiAgQElucHV0KCkgYm91bmRhcnlMaW5rczogYm9vbGVhbjtcbiAgLyoqIGlmIGZhbHNlIHByZXZpb3VzIGFuZCBuZXh0IGJ1dHRvbnMgd2lsbCBiZSBoaWRkZW4gKi9cbiAgQElucHV0KCkgZGlyZWN0aW9uTGlua3M6IGJvb2xlYW47XG4gIC8vIGxhYmVsc1xuICAvKiogZmlyc3QgYnV0dG9uIHRleHQgKi9cbiAgQElucHV0KCkgZmlyc3RUZXh0OiBzdHJpbmc7XG4gIC8qKiBwcmV2aW91cyBidXR0b24gdGV4dCAqL1xuICBASW5wdXQoKSBwcmV2aW91c1RleHQ6IHN0cmluZztcbiAgLyoqIG5leHQgYnV0dG9uIHRleHQgKi9cbiAgQElucHV0KCkgbmV4dFRleHQ6IHN0cmluZztcbiAgLyoqIGxhc3QgYnV0dG9uIHRleHQgKi9cbiAgQElucHV0KCkgbGFzdFRleHQ6IHN0cmluZztcbiAgLyoqIGlmIHRydWUgY3VycmVudCBwYWdlIHdpbGwgaW4gdGhlIG1pZGRsZSBvZiBwYWdlcyBsaXN0ICovXG4gIEBJbnB1dCgpIHJvdGF0ZTogYm9vbGVhbjtcbiAgLy8gY3NzXG4gIC8qKiBhZGQgY2xhc3MgdG8gPGNvZGU+PGxpXFw+PC9jb2RlPiAqL1xuICBASW5wdXQoKSBwYWdlQnRuQ2xhc3M6IHN0cmluZztcblxuICAvKiogaWYgdHJ1ZSBwYWdpbmF0aW9uIGNvbXBvbmVudCB3aWxsIGJlIGRpc2FibGVkICovXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuXG4gIC8qKiBmaXJlZCB3aGVuIHRvdGFsIHBhZ2VzIGNvdW50IGNoYW5nZXMsICRldmVudDpudW1iZXIgZXF1YWxzIHRvIHRvdGFsIHBhZ2VzIGNvdW50ICovXG4gIEBPdXRwdXQoKSBudW1QYWdlczogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgLyoqIGZpcmVkIHdoZW4gcGFnZSB3YXMgY2hhbmdlZCwgJGV2ZW50OntwYWdlLCBpdGVtc1BlclBhZ2V9IGVxdWFscyB0byBvYmplY3RcbiAgICogd2l0aCBjdXJyZW50IHBhZ2UgaW5kZXggYW5kIG51bWJlciBvZiBpdGVtcyBwZXIgcGFnZVxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHBhZ2VDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlQ2hhbmdlZEV2ZW50PigpO1xuXG4gIC8qKiBtYXhpbXVtIG51bWJlciBvZiBpdGVtcyBwZXIgcGFnZS4gSWYgdmFsdWUgbGVzcyB0aGFuIDEgd2lsbCBkaXNwbGF5IGFsbCBpdGVtcyBvbiBvbmUgcGFnZSAqL1xuICBASW5wdXQoKVxuICBnZXQgaXRlbXNQZXJQYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zUGVyUGFnZTtcbiAgfVxuXG4gIHNldCBpdGVtc1BlclBhZ2UodjogbnVtYmVyKSB7XG4gICAgdGhpcy5faXRlbXNQZXJQYWdlID0gdjtcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcbiAgfVxuXG4gIC8qKiB0b3RhbCBudW1iZXIgb2YgaXRlbXMgaW4gYWxsIHBhZ2VzICovXG4gIEBJbnB1dCgpXG4gIGdldCB0b3RhbEl0ZW1zKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsSXRlbXM7XG4gIH1cblxuICBzZXQgdG90YWxJdGVtcyh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl90b3RhbEl0ZW1zID0gdjtcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcbiAgfVxuXG4gIGdldCB0b3RhbFBhZ2VzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsUGFnZXM7XG4gIH1cblxuICBzZXQgdG90YWxQYWdlcyh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl90b3RhbFBhZ2VzID0gdjtcbiAgICB0aGlzLm51bVBhZ2VzLmVtaXQodik7XG4gICAgaWYgKHRoaXMuaW5pdGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdFBhZ2UodGhpcy5wYWdlKTtcbiAgICB9XG4gIH1cblxuICBzZXQgcGFnZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgY29uc3QgX3ByZXZpb3VzID0gdGhpcy5fcGFnZTtcbiAgICB0aGlzLl9wYWdlID0gdmFsdWUgPiB0aGlzLnRvdGFsUGFnZXMgPyB0aGlzLnRvdGFsUGFnZXMgOiB2YWx1ZSB8fCAxO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgaWYgKF9wcmV2aW91cyA9PT0gdGhpcy5fcGFnZSB8fCB0eXBlb2YgX3ByZXZpb3VzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucGFnZUNoYW5nZWQuZW1pdCh7XG4gICAgICBwYWdlOiB0aGlzLl9wYWdlLFxuICAgICAgaXRlbXNQZXJQYWdlOiB0aGlzLml0ZW1zUGVyUGFnZVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHBhZ2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcbiAgfVxuXG4gIG9uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBvblRvdWNoZWQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgY2xhc3NNYXA6IHN0cmluZztcbiAgcGFnZXM6IFBhZ2VzTW9kZWxbXTtcblxuICBwcm90ZWN0ZWQgX2l0ZW1zUGVyUGFnZTogbnVtYmVyO1xuICBwcm90ZWN0ZWQgX3RvdGFsSXRlbXM6IG51bWJlcjtcbiAgcHJvdGVjdGVkIF90b3RhbFBhZ2VzOiBudW1iZXI7XG4gIHByb3RlY3RlZCBpbml0ZWQgPSBmYWxzZTtcbiAgcHJvdGVjdGVkIF9wYWdlID0gMTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcGFnaW5hdGlvbkNvbmZpZzogUGFnaW5hdGlvbkNvbmZpZyxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudFJlZjtcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICB0aGlzLmNvbmZpZ3VyZU9wdGlvbnMocGFnaW5hdGlvbkNvbmZpZy5tYWluKTtcbiAgICB9XG4gIH1cblxuICBjb25maWd1cmVPcHRpb25zKGNvbmZpZzogQ29uZmlnTW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuY2xhc3NNYXAgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJyc7XG4gICAgfVxuICAgIC8vIHdhdGNoIGZvciBtYXhTaXplXG4gICAgdGhpcy5tYXhTaXplID1cbiAgICAgIHR5cGVvZiB0aGlzLm1heFNpemUgIT09ICd1bmRlZmluZWQnID8gdGhpcy5tYXhTaXplIDogdGhpcy5jb25maWcubWF4U2l6ZTtcbiAgICB0aGlzLnJvdGF0ZSA9XG4gICAgICB0eXBlb2YgdGhpcy5yb3RhdGUgIT09ICd1bmRlZmluZWQnID8gdGhpcy5yb3RhdGUgOiB0aGlzLmNvbmZpZy5yb3RhdGU7XG4gICAgdGhpcy5ib3VuZGFyeUxpbmtzID1cbiAgICAgIHR5cGVvZiB0aGlzLmJvdW5kYXJ5TGlua3MgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gdGhpcy5ib3VuZGFyeUxpbmtzXG4gICAgICAgIDogdGhpcy5jb25maWcuYm91bmRhcnlMaW5rcztcbiAgICB0aGlzLmRpcmVjdGlvbkxpbmtzID1cbiAgICAgIHR5cGVvZiB0aGlzLmRpcmVjdGlvbkxpbmtzICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHRoaXMuZGlyZWN0aW9uTGlua3NcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5kaXJlY3Rpb25MaW5rcztcbiAgICB0aGlzLnBhZ2VCdG5DbGFzcyA9XG4gICAgICB0eXBlb2YgdGhpcy5wYWdlQnRuQ2xhc3MgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gdGhpcy5wYWdlQnRuQ2xhc3NcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5wYWdlQnRuQ2xhc3M7XG5cbiAgICAvLyBiYXNlIGNsYXNzXG4gICAgdGhpcy5pdGVtc1BlclBhZ2UgPVxuICAgICAgdHlwZW9mIHRoaXMuaXRlbXNQZXJQYWdlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHRoaXMuaXRlbXNQZXJQYWdlXG4gICAgICAgIDogdGhpcy5jb25maWcuaXRlbXNQZXJQYWdlO1xuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xuICAgIC8vIHRoaXMgY2xhc3NcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlID0gdmFsdWU7XG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xuICB9XG5cbiAgZ2V0VGV4dChrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIHJldHVybiAodGhpcyBhcyBhbnkpW2Ake2tleX1UZXh0YF0gfHwgdGhpcy5jb25maWdbYCR7a2V5fVRleHRgXTtcbiAgfVxuXG4gIG5vUHJldmlvdXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZSA9PT0gMTtcbiAgfVxuXG4gIG5vTmV4dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlID09PSB0aGlzLnRvdGFsUGFnZXM7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZWxlY3RQYWdlKHBhZ2U6IG51bWJlciwgZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGlmIChldmVudCAmJiBldmVudC50YXJnZXQpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICBjb25zdCB0YXJnZXQ6IGFueSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgdGFyZ2V0LmJsdXIoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMud3JpdGVWYWx1ZShwYWdlKTtcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5wYWdlKTtcbiAgICB9XG4gIH1cblxuICAvLyBDcmVhdGUgcGFnZSBvYmplY3QgdXNlZCBpbiB0ZW1wbGF0ZVxuICBwcm90ZWN0ZWQgbWFrZVBhZ2UoXG4gICAgbnVtOiBudW1iZXIsXG4gICAgdGV4dDogc3RyaW5nLFxuICAgIGFjdGl2ZTogYm9vbGVhblxuICApOiB7IG51bWJlcjogbnVtYmVyOyB0ZXh0OiBzdHJpbmc7IGFjdGl2ZTogYm9vbGVhbiB9IHtcbiAgICByZXR1cm4geyB0ZXh0LCBudW1iZXI6IG51bSwgYWN0aXZlIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0UGFnZXMoY3VycmVudFBhZ2U6IG51bWJlciwgdG90YWxQYWdlczogbnVtYmVyKTogUGFnZXNNb2RlbFtdIHtcbiAgICBjb25zdCBwYWdlczogUGFnZXNNb2RlbFtdID0gW107XG5cbiAgICAvLyBEZWZhdWx0IHBhZ2UgbGltaXRzXG4gICAgbGV0IHN0YXJ0UGFnZSA9IDE7XG4gICAgbGV0IGVuZFBhZ2UgPSB0b3RhbFBhZ2VzO1xuICAgIGNvbnN0IGlzTWF4U2l6ZWQgPVxuICAgICAgdHlwZW9mIHRoaXMubWF4U2l6ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5tYXhTaXplIDwgdG90YWxQYWdlcztcblxuICAgIC8vIHJlY29tcHV0ZSBpZiBtYXhTaXplXG4gICAgaWYgKGlzTWF4U2l6ZWQpIHtcbiAgICAgIGlmICh0aGlzLnJvdGF0ZSkge1xuICAgICAgICAvLyBDdXJyZW50IHBhZ2UgaXMgZGlzcGxheWVkIGluIHRoZSBtaWRkbGUgb2YgdGhlIHZpc2libGUgb25lc1xuICAgICAgICBzdGFydFBhZ2UgPSBNYXRoLm1heChjdXJyZW50UGFnZSAtIE1hdGguZmxvb3IodGhpcy5tYXhTaXplIC8gMiksIDEpO1xuICAgICAgICBlbmRQYWdlID0gc3RhcnRQYWdlICsgdGhpcy5tYXhTaXplIC0gMTtcblxuICAgICAgICAvLyBBZGp1c3QgaWYgbGltaXQgaXMgZXhjZWVkZWRcbiAgICAgICAgaWYgKGVuZFBhZ2UgPiB0b3RhbFBhZ2VzKSB7XG4gICAgICAgICAgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgICAgICAgc3RhcnRQYWdlID0gZW5kUGFnZSAtIHRoaXMubWF4U2l6ZSArIDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFZpc2libGUgcGFnZXMgYXJlIHBhZ2luYXRlZCB3aXRoIG1heFNpemVcbiAgICAgICAgc3RhcnRQYWdlID1cbiAgICAgICAgICAoTWF0aC5jZWlsKGN1cnJlbnRQYWdlIC8gdGhpcy5tYXhTaXplKSAtIDEpICogdGhpcy5tYXhTaXplICsgMTtcblxuICAgICAgICAvLyBBZGp1c3QgbGFzdCBwYWdlIGlmIGxpbWl0IGlzIGV4Y2VlZGVkXG4gICAgICAgIGVuZFBhZ2UgPSBNYXRoLm1pbihzdGFydFBhZ2UgKyB0aGlzLm1heFNpemUgLSAxLCB0b3RhbFBhZ2VzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgcGFnZSBudW1iZXIgbGlua3NcbiAgICBmb3IgKGxldCBudW0gPSBzdGFydFBhZ2U7IG51bSA8PSBlbmRQYWdlOyBudW0rKykge1xuICAgICAgY29uc3QgcGFnZSA9IHRoaXMubWFrZVBhZ2UobnVtLCBudW0udG9TdHJpbmcoKSwgbnVtID09PSBjdXJyZW50UGFnZSk7XG4gICAgICBwYWdlcy5wdXNoKHBhZ2UpO1xuICAgIH1cblxuICAgIC8vIEFkZCBsaW5rcyB0byBtb3ZlIGJldHdlZW4gcGFnZSBzZXRzXG4gICAgaWYgKGlzTWF4U2l6ZWQgJiYgIXRoaXMucm90YXRlKSB7XG4gICAgICBpZiAoc3RhcnRQYWdlID4gMSkge1xuICAgICAgICBjb25zdCBwcmV2aW91c1BhZ2VTZXQgPSB0aGlzLm1ha2VQYWdlKHN0YXJ0UGFnZSAtIDEsICcuLi4nLCBmYWxzZSk7XG4gICAgICAgIHBhZ2VzLnVuc2hpZnQocHJldmlvdXNQYWdlU2V0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVuZFBhZ2UgPCB0b3RhbFBhZ2VzKSB7XG4gICAgICAgIGNvbnN0IG5leHRQYWdlU2V0ID0gdGhpcy5tYWtlUGFnZShlbmRQYWdlICsgMSwgJy4uLicsIGZhbHNlKTtcbiAgICAgICAgcGFnZXMucHVzaChuZXh0UGFnZVNldCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhZ2VzO1xuICB9XG5cbiAgLy8gYmFzZSBjbGFzc1xuICBwcm90ZWN0ZWQgY2FsY3VsYXRlVG90YWxQYWdlcygpOiBudW1iZXIge1xuICAgIGNvbnN0IHRvdGFsUGFnZXMgPVxuICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPCAxXG4gICAgICAgID8gMVxuICAgICAgICA6IE1hdGguY2VpbCh0aGlzLnRvdGFsSXRlbXMgLyB0aGlzLml0ZW1zUGVyUGFnZSk7XG5cbiAgICByZXR1cm4gTWF0aC5tYXgodG90YWxQYWdlcyB8fCAwLCAxKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uQ29uZmlnIH0gZnJvbSAnLi9wYWdpbmF0aW9uLmNvbmZpZyc7XG5cbmltcG9ydCB7IFBhZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcGFnaW5hdGlvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbUGFnZXJDb21wb25lbnQsIFBhZ2luYXRpb25Db21wb25lbnRdLFxuICBleHBvcnRzOiBbUGFnZXJDb21wb25lbnQsIFBhZ2luYXRpb25Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogUGFnaW5hdGlvbk1vZHVsZSwgcHJvdmlkZXJzOiBbUGFnaW5hdGlvbkNvbmZpZ10gfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7O29CQU9zQjtZQUNsQixPQUFPLEVBQUUsS0FBSyxDQUFDO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsYUFBYSxFQUFFLEtBQUs7WUFDcEIsY0FBYyxFQUFFLElBQUk7WUFDcEIsU0FBUyxFQUFFLE9BQU87WUFDbEIsWUFBWSxFQUFFLFVBQVU7WUFDeEIsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU07WUFDaEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxFQUFFLElBQUk7U0FDYjtxQkFDbUI7WUFDbEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsWUFBWSxFQUFFLFlBQVk7WUFDMUIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsS0FBSyxFQUFFLElBQUk7U0FDWjs7O2dCQXBCRixVQUFVOzsyQkFOWDs7Ozs7OztBQ0FBLHFCQWtCYSw0QkFBNEIsR0FBYTtJQUNwRCxPQUFPLEVBQUUsaUJBQWlCOztJQUUxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxjQUFjLEdBQUEsQ0FBQztJQUM3QyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7O0lBNEdBLHdCQUFvQixVQUFzQixFQUM5QixnQkFBa0MsRUFDMUI7UUFGQSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRXRCLG9CQUFlLEdBQWYsZUFBZTs7Ozt3QkExRVEsSUFBSSxZQUFZLEVBQVU7Ozs7OzJCQUt2QixJQUFJLFlBQVksRUFBb0I7d0JBdUR2RSxRQUFRLENBQUMsU0FBUzt5QkFDakIsUUFBUSxDQUFDLFNBQVM7c0JBUVgsS0FBSztxQkFDTixDQUFDO1FBS2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FDbkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUNqRSxDQUFDO1NBQ0g7S0FDRjswQkF4RUcsd0NBQVk7Ozs7OztZQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQzs7Ozs7O1FBRzVCLFVBQWlCLENBQVM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM5Qzs7OzswQkFJRyxzQ0FBVTs7Ozs7O1lBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDOzs7Ozs7UUFHMUIsVUFBZSxDQUFTO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDOUM7Ozs7SUFFRCxzQkFBSSxzQ0FBVTs7OztRQUFkO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3pCOzs7OztRQUVELFVBQWUsQ0FBUztZQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUI7U0FDRjs7O09BUkE7SUFVRCxzQkFBSSxnQ0FBSTs7OztRQWVSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25COzs7OztRQWpCRCxVQUFTLEtBQWE7WUFDcEIscUJBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUVwQyxJQUFJLFNBQVMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLE9BQU8sU0FBUyxLQUFLLFdBQVcsRUFBRTtnQkFDaEUsT0FBTzthQUNSO1lBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDaEIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO2FBQ2hDLENBQUMsQ0FBQztTQUNKOzs7T0FBQTs7Ozs7SUE2QkQseUNBQWdCOzs7O0lBQWhCLFVBQWlCLE1BQW1CO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDekM7Ozs7SUFFRCxpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtZQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDM0U7O1FBRUQsSUFBSSxDQUFDLE9BQU87WUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDM0UsSUFBSSxDQUFDLE1BQU07WUFDVCxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDeEUsSUFBSSxDQUFDLGFBQWE7WUFDaEIsT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLFdBQVc7a0JBQ3JDLElBQUksQ0FBQyxhQUFhO2tCQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUNoQyxJQUFJLENBQUMsY0FBYztZQUNqQixPQUFPLElBQUksQ0FBQyxjQUFjLEtBQUssV0FBVztrQkFDdEMsSUFBSSxDQUFDLGNBQWM7a0JBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZO1lBQ2YsT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLFdBQVc7a0JBQ3BDLElBQUksQ0FBQyxZQUFZO2tCQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQzs7UUFHL0IsSUFBSSxDQUFDLFlBQVk7WUFDZixPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssV0FBVztrQkFDcEMsSUFBSSxDQUFDLFlBQVk7a0JBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7O1FBRTdDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztLQUNwQjs7Ozs7SUFFRCxtQ0FBVTs7OztJQUFWLFVBQVcsS0FBYTtRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDeEQ7Ozs7O0lBRUQsZ0NBQU87Ozs7SUFBUCxVQUFRLEdBQVc7O1FBRWpCLE9BQU8sbUJBQUMsSUFBVyxHQUFLLEdBQUcsU0FBTSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBSSxHQUFHLFNBQU0sQ0FBQyxDQUFDO0tBQ2pFOzs7O0lBRUQsbUNBQVU7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztLQUN4Qjs7OztJQUVELCtCQUFNOzs7SUFBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3RDOzs7OztJQUVELHlDQUFnQjs7OztJQUFoQixVQUFpQixFQUFZO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0tBQ3BCOzs7OztJQUVELDBDQUFpQjs7OztJQUFqQixVQUFrQixFQUFZO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0tBQ3JCOzs7Ozs7SUFFRCxtQ0FBVTs7Ozs7SUFBVixVQUFXLElBQVksRUFBRSxLQUFhO1FBQ3BDLElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTs7Z0JBRXpCLHFCQUFNLE1BQU0sR0FBUSxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUNqQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDZjtZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUI7S0FDRjs7Ozs7Ozs7SUFHUyxpQ0FBUTs7Ozs7O0lBQWxCLFVBQW1CLEdBQVcsRUFDWCxJQUFZLEVBQ1osTUFBZTtRQUNoQyxPQUFPLEVBQUMsSUFBSSxNQUFBLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLFFBQUEsRUFBQyxDQUFDO0tBQ3BDOzs7Ozs7SUFFUyxpQ0FBUTs7Ozs7SUFBbEIsVUFBbUIsV0FBbUIsRUFBRSxVQUFrQjtRQUN4RCxxQkFBTSxLQUFLLEdBQWlCLEVBQUUsQ0FBQzs7UUFHL0IscUJBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNsQixxQkFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBQ3pCLHFCQUFNLFVBQVUsR0FDZCxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssV0FBVyxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDOztRQUduRSxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTs7Z0JBRWYsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDcEUsT0FBTyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQzs7Z0JBR3ZDLElBQUksT0FBTyxHQUFHLFVBQVUsRUFBRTtvQkFDeEIsT0FBTyxHQUFHLFVBQVUsQ0FBQztvQkFDckIsU0FBUyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztpQkFDeEM7YUFDRjtpQkFBTTs7Z0JBRUwsU0FBUztvQkFDUCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7O2dCQUdqRSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDOUQ7U0FDRjs7UUFHRCxLQUFLLHFCQUFJLEdBQUcsR0FBRyxTQUFTLEVBQUUsR0FBRyxJQUFJLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUMvQyxxQkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLEdBQUcsS0FBSyxXQUFXLENBQUMsQ0FBQztZQUNyRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xCOztRQUdELElBQUksVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUM5QixJQUFJLFNBQVMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2pCLHFCQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNuRSxLQUFLLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ2hDO1lBRUQsSUFBSSxPQUFPLEdBQUcsVUFBVSxFQUFFO2dCQUN4QixxQkFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDN0QsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUN6QjtTQUNGO1FBRUQsT0FBTyxLQUFLLENBQUM7S0FDZDs7Ozs7SUFHUyw0Q0FBbUI7OztJQUE3QjtRQUNFLHFCQUFNLFVBQVUsR0FDZCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUM7Y0FDakIsQ0FBQztjQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFckQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDckM7O2dCQXhRRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLDJpQkFBcUM7b0JBQ3JDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2lCQUMxQzs7OztnQkExQkMsVUFBVTtnQkFXSCxnQkFBZ0I7Z0JBYnZCLGlCQUFpQjs7OzBCQWdDaEIsS0FBSzs0QkFFTCxLQUFLO2tDQUVMLEtBQUs7bUNBRUwsS0FBSzs4QkFHTCxLQUFLO2lDQUVMLEtBQUs7NkJBRUwsS0FBSzs2QkFFTCxLQUFLOzJCQUVMLEtBQUs7aUNBR0wsS0FBSzs2QkFHTCxLQUFLOzZCQUdMLE1BQU07Z0NBSU4sTUFBTTtpQ0FJTixLQUFLOytCQVdMLEtBQUs7O3lCQTlFUjs7Ozs7OztBQ0FBLHFCQXNCYSxpQ0FBaUMsR0FBYTtJQUN6RCxPQUFPLEVBQUUsaUJBQWlCOztJQUUxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxtQkFBbUIsR0FBQSxDQUFDO0lBQ2xELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQzs7SUE0R0EsNkJBQ1UsWUFDUixnQkFBa0MsRUFDMUI7UUFGQSxlQUFVLEdBQVYsVUFBVTtRQUVWLG9CQUFlLEdBQWYsZUFBZTs7Ozt3QkEzRWtCLElBQUksWUFBWSxFQUFVOzs7OzsyQkFLdkQsSUFBSSxZQUFZLEVBQW9CO3dCQXVEdkMsUUFBUSxDQUFDLFNBQVM7eUJBQ2pCLFFBQVEsQ0FBQyxTQUFTO3NCQVFYLEtBQUs7cUJBQ04sQ0FBQztRQU9qQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUM7S0FDRjswQkF4RUcsNkNBQVk7Ozs7OztZQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQzs7Ozs7O1FBRzVCLFVBQWlCLENBQVM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM5Qzs7OzswQkFJRywyQ0FBVTs7Ozs7O1lBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDOzs7Ozs7UUFHMUIsVUFBZSxDQUFTO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDOUM7Ozs7SUFFRCxzQkFBSSwyQ0FBVTs7OztRQUFkO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3pCOzs7OztRQUVELFVBQWUsQ0FBUztZQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUI7U0FDRjs7O09BUkE7SUFVRCxzQkFBSSxxQ0FBSTs7OztRQWVSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25COzs7OztRQWpCRCxVQUFTLEtBQWE7WUFDcEIscUJBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUVwQyxJQUFJLFNBQVMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLE9BQU8sU0FBUyxLQUFLLFdBQVcsRUFBRTtnQkFDaEUsT0FBTzthQUNSO1lBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDaEIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO2FBQ2hDLENBQUMsQ0FBQztTQUNKOzs7T0FBQTs7Ozs7SUE2QkQsOENBQWdCOzs7O0lBQWhCLFVBQWlCLE1BQW1CO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDekM7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtZQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDM0U7O1FBRUQsSUFBSSxDQUFDLE9BQU87WUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDM0UsSUFBSSxDQUFDLE1BQU07WUFDVCxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDeEUsSUFBSSxDQUFDLGFBQWE7WUFDaEIsT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLFdBQVc7a0JBQ3JDLElBQUksQ0FBQyxhQUFhO2tCQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUNoQyxJQUFJLENBQUMsY0FBYztZQUNqQixPQUFPLElBQUksQ0FBQyxjQUFjLEtBQUssV0FBVztrQkFDdEMsSUFBSSxDQUFDLGNBQWM7a0JBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZO1lBQ2YsT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLFdBQVc7a0JBQ3BDLElBQUksQ0FBQyxZQUFZO2tCQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQzs7UUFHL0IsSUFBSSxDQUFDLFlBQVk7WUFDZixPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssV0FBVztrQkFDcEMsSUFBSSxDQUFDLFlBQVk7a0JBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7O1FBRTdDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztLQUNwQjs7Ozs7SUFFRCx3Q0FBVTs7OztJQUFWLFVBQVcsS0FBYTtRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDeEQ7Ozs7O0lBRUQscUNBQU87Ozs7SUFBUCxVQUFRLEdBQVc7O1FBRWpCLE9BQU8sbUJBQUMsSUFBVyxHQUFLLEdBQUcsU0FBTSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBSSxHQUFHLFNBQU0sQ0FBQyxDQUFDO0tBQ2pFOzs7O0lBRUQsd0NBQVU7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztLQUN4Qjs7OztJQUVELG9DQUFNOzs7SUFBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3RDOzs7OztJQUVELDhDQUFnQjs7OztJQUFoQixVQUFpQixFQUFZO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0tBQ3BCOzs7OztJQUVELCtDQUFpQjs7OztJQUFqQixVQUFrQixFQUFZO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0tBQ3JCOzs7Ozs7SUFFRCx3Q0FBVTs7Ozs7SUFBVixVQUFXLElBQVksRUFBRSxLQUFhO1FBQ3BDLElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTs7Z0JBRXpCLHFCQUFNLE1BQU0sR0FBUSxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUNqQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDZjtZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUI7S0FDRjs7Ozs7Ozs7SUFHUyxzQ0FBUTs7Ozs7O0lBQWxCLFVBQ0UsR0FBVyxFQUNYLElBQVksRUFDWixNQUFlO1FBRWYsT0FBTyxFQUFFLElBQUksTUFBQSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQztLQUN0Qzs7Ozs7O0lBRVMsc0NBQVE7Ozs7O0lBQWxCLFVBQW1CLFdBQW1CLEVBQUUsVUFBa0I7UUFDeEQscUJBQU0sS0FBSyxHQUFpQixFQUFFLENBQUM7O1FBRy9CLHFCQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbEIscUJBQUksT0FBTyxHQUFHLFVBQVUsQ0FBQztRQUN6QixxQkFBTSxVQUFVLEdBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFdBQVcsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQzs7UUFHbkUsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7O2dCQUVmLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BFLE9BQU8sR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7O2dCQUd2QyxJQUFJLE9BQU8sR0FBRyxVQUFVLEVBQUU7b0JBQ3hCLE9BQU8sR0FBRyxVQUFVLENBQUM7b0JBQ3JCLFNBQVMsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7aUJBQ3hDO2FBQ0Y7aUJBQU07O2dCQUVMLFNBQVM7b0JBQ1AsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDOztnQkFHakUsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQzlEO1NBQ0Y7O1FBR0QsS0FBSyxxQkFBSSxHQUFHLEdBQUcsU0FBUyxFQUFFLEdBQUcsSUFBSSxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDL0MscUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxHQUFHLEtBQUssV0FBVyxDQUFDLENBQUM7WUFDckUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQjs7UUFHRCxJQUFJLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDOUIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQixxQkFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDbkUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUNoQztZQUVELElBQUksT0FBTyxHQUFHLFVBQVUsRUFBRTtnQkFDeEIscUJBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzdELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDekI7U0FDRjtRQUVELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7Ozs7O0lBR1MsaURBQW1COzs7SUFBN0I7UUFDRSxxQkFBTSxVQUFVLEdBQ2QsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDO2NBQ2pCLENBQUM7Y0FDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXJELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3JDOztnQkExUUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixvMUNBQTBDO29CQUMxQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztpQkFDL0M7Ozs7Z0JBOUJDLFVBQVU7Z0JBVUgsZ0JBQWdCO2dCQVp2QixpQkFBaUI7OzswQkFvQ2hCLEtBQUs7NEJBRUwsS0FBSztrQ0FFTCxLQUFLO21DQUVMLEtBQUs7OEJBR0wsS0FBSztpQ0FFTCxLQUFLOzZCQUVMLEtBQUs7NkJBRUwsS0FBSzsyQkFFTCxLQUFLO2lDQUdMLEtBQUs7NkJBR0wsS0FBSzs2QkFHTCxNQUFNO2dDQUlOLE1BQU07aUNBSU4sS0FBSzsrQkFXTCxLQUFLOzs4QkFsRlI7Ozs7Ozs7QUNBQTs7Ozs7O0lBYVMsd0JBQU87OztJQUFkO1FBQ0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7S0FDdEU7O2dCQVJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRSxDQUFDLGNBQWMsRUFBRSxtQkFBbUIsQ0FBQztvQkFDbkQsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLG1CQUFtQixDQUFDO2lCQUMvQzs7MkJBWEQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./src/app/feedback/chartsreport/chartsreport.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/feedback/chartsreport/chartsreport.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n   <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n         <div class=\"card-header\">\r\n            <div class=\"card-title-wrap bar-success\">\r\n               <h4 class=\"card-title\">Charts Report</h4>\r\n            </div>\r\n         </div>\r\n         <div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n               <form [formGroup]=\"form\" (ngSubmit)=\"manage(form.value)\">\r\n               <div class=\"row\">\r\n                  <div class=\"col-xl-12 col-lg-12 col-md-12 mb-1\">\r\n                     <div class=\"form-group\">\r\n                        <label for=\"field\">Select Survey</label>\r\n                        <select class=\"custom-select mb-2\" formControlName=\"formNames\" (change)=\"onSelectFormName($event.target.value)\">\r\n                        <option value=\"\">-- Select --</option>\r\n                        <option *ngFor=\"let item of formsData;let i = index\" value=\"{{i}}\" >{{item.name}}</option>\r\n                        </select>\r\n                     </div>\r\n                  </div>\r\n                  <div class=\"col-xl-12 col-lg-12 col-md-12 mb-1\">\r\n                     <div class=\"form-group\">\r\n                        <label for=\"field\">Select Chart Field</label>\r\n                          <!-- <select class=\"custom-select mb-2\" formControlName=\"fieldKey\"  (change)=\"onSelectQuestion($event.target.value)\"  > -->\r\n                         <select class=\"custom-select mb-2\" formControlName=\"fieldKey\">\r\n                            <option value=\"\">-- Select --</option>\r\n                            <option *ngFor=\"let value of formsDataSelected\" value=\"{{value.key}}\" >{{value.label}}</option>\r\n                        </select>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <h4 class=\"form-section\">Filters</h4>\r\n               <!-- <div class=\"form-group\" >\r\n               \t<label>Select Date Range</label>\r\n               \t<select name=\"daterange\" required formControlName=\"daterange\" class=\"form-control\">\r\n               \t\t<option value=\"1\">Last one week</option>\r\n               \t\t<option value=\"15\">Last 15 days</option>\r\n               \t\t<option value=\"30\">Last 30 days</option>\r\n               \t\t<option value=\"60\">Last 60 days</option>\r\n               \t\t<option value=\"90\">Last 90 days</option>\r\n               \t\t<option value=\"180\">Last 180 days</option>\r\n               \t\t<option value=\"365\">Last 365 days</option>\r\n               \t</select>\r\n               </div> -->\r\n               <div class=\"row\">\r\n               \t<div class=\"col-sm-4\">\r\n               \t\t<div class=\"form-group\">\r\n               \t\t\t<label for=\"sdate\">Start Date</label>\r\n               \t\t\t<div class=\"input-group\">\r\n               \t\t\t\t<input type=\"date\" id=\"sdate\" class=\"form-control\" formControlName=\"sdate\" >\r\n               \t\t\t</div>\r\n\r\n               \t\t</div>\r\n               \t</div>\r\n               \t<div class=\"col-sm-4\">\r\n               \t\t<div class=\"form-group\">\r\n               \t\t\t<div class=\"form-group\">\r\n               \t\t\t\t<label for=\"edate\">End Date</label>\r\n               \t\t\t\t<div class=\"input-group\">\r\n               \t\t\t\t\t<input type=\"date\" id=\"edate\" class=\"form-control\" formControlName=\"edate\" (input)=\"checkDates(saveDashboardSubmit('sdate').value,$event.target.value)\" >\r\n               \t\t\t\t</div>\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"dateError\">End date should be greater than start date.</small>\r\n                      <!-- <small *ngIf=\"saveDashboardSubmit.hasError('notValid')\">Not valid</small> -->\r\n               \t\t\t</div>\r\n               \t\t</div>\r\n               \t</div>\r\n               \t<div class=\"col-sm-4\">\r\n               \t\t<div class=\"form-group\">\r\n               \t\t\t\t<label [style.visibility]=\"'hidden'\">Action</label><br>\r\n               \t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-raised mr-1\" (click)=\"addNewInputFields()\" *ngIf=\"(form.controls.formNames.value >=0 && form.controls.fieldKey.value !='') && (form.controls.tblmap.length == 0)\">Add new filter</button>\r\n               \t\t\t</div>\r\n               \t</div>\r\n\r\n               \t\r\n               </div>\r\n\r\n               <div formArrayName=\"tblmap\" *ngIf=\"(form.controls.formNames.value >=0) && (form.controls.fieldKey.value !='')\">\r\n               \t<!-- <div formArrayName=\"tblmap\" *ngIf=\"form.controls.formNames.value >=0\"> -->\r\n                <div class=\"row\" [formGroupName]=\"i\" *ngFor=\"let tech of form.controls.tblmap.controls; let i = index\">\r\n                 <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\r\n                     <div class=\"form-group\">\r\n                        <label for=\"field\">Fields</label>\r\n                        <select class=\"custom-select mb-2\"  formControlName=\"formCol\"  placeholder=\"Rule Type\"  (change)=\"onSelectFields($event.target.value,i)\">\r\n                           <option value=\"\">-- Select --</option>\r\n                           <!-- <option *ngFor=\"let value of formsDataSelectedAllControls;let x = index\"  value=\"{{x}}\" >{{value.label}}</option>  -->\r\n                           <option *ngFor=\"let value of formsDataSelectedAllControls\"  value=\"{{value.key}}\" >{{value.label}}</option>\r\n                        </select>\r\n                     </div>\r\n                  </div>\r\n                 <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\" >\r\n                  <div class=\"form-group\">\r\n                    <label for=\"seloperator\">Operator</label><br />\r\n                    <select  class=\"custom-select mb-2\" formControlName=\"seloperator\" placeholder=\"Rule Type\">\r\n                      <option value=\"\">-- Select Operator --</option>\r\n                      <option *ngFor=\"let value of operatorArray[i]\"  value=\"{{value.opvalue}}\" >{{value.optext}}</option>\r\n                     <!--  <option value=\"<=\">less than or equal to</option>\r\n                      <option value=\"<\">less than</option>\r\n                      <option value=\"=\">equal to</option>\r\n                      <option value=\">\">greater than</option>\r\n                      <option value=\">=\">greater than or equal to</option> -->\r\n                    </select>\r\n                  </div>\r\n                  </div>\r\n                  <!-- <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"seloperator\">Operator</label><br />\r\n                    <select  class=\"custom-select mb-2\" formControlName=\"seloperator\" placeholder=\"Rule Type\">\r\n                      <option value=\"<=\">less than or equal to</option>\r\n                      <option value=\"<\">less than</option>\r\n                      <option value=\"=\">equal to</option>\r\n                      <option value=\">\">greater than</option>\r\n                      <option value=\">=\">greater than or equal to</option>\r\n                    </select>\r\n                  </div>\r\n                  </div> -->\r\n\r\n                  <!-- <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\" >\r\n                    <div class=\"form-group\">\r\n                      <label for=\"seloperator\">ADD VALUE{{i}}{{tech[i]}}</label><br />\r\n                      <input type=\"text\" name=\"txtfilterval\" formControlName=\"txtfilterval\" class=\"form-control\">\r\n                    </div>\r\n                  </div> -->\r\n\r\n                  <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\" *ngIf=\"valuesArray[i].type=='textfield' || valuesArray[i].type=='number'\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"seloperator\">ADD VALUE</label><br />\r\n                      <!-- *ngIf=\"==valuesArray[i]\" -->\r\n                      <input  type=\"text\" name=\"txtfilterval\" formControlName=\"txtfilterval\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                  <!-- <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\" *ngIf=\"valuesArray[i].type=='number'\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"seloperator\">ADD VALUE</label><br />\r\n                      <input  type=\"text\" name=\"txtfilterval\" formControlName=\"txtfilterval\" class=\"form-control\">\r\n                    </div>\r\n                  </div> -->\r\n\r\n                  <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\" *ngIf=\"valuesArray[i].type=='radio' || valuesArray[i].type=='select'\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"seloperator\">ADD VALUE</label><br />\r\n                    <select  class=\"custom-select mb-2\" formControlName=\"txtfilterval\" placeholder=\"Rule Type\">\r\n                      <option  *ngFor=\"let opt of valuesArray[i].values\" value=\"{{opt.value}}\">{{opt.label}}</option>\r\n                    </select>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- <div class=\"col-xl-2 col-lg-6 col-md-12 mb-1\" *ngIf=\"i > 0\"> -->\r\n                  \t<div class=\"col-xl-2 col-lg-6 col-md-12 mb-1\">\r\n                    <label [style.visibility]=\"'hidden'\">Action</label><br>\r\n                     <button class=\"btn btn-danger mr-1 btn-fab\" *ngIf=\"form.controls.tblmap.length > 0\"\r\n                     (click)=\"removeInputFields(i)\"><i class=\"fa fa-times\"></i></button>\r\n                     <button type=\"button\" class=\"btn btn-primary btn-raised mr-1\" (click)=\"addNewInputFields()\" *ngIf=\"(form.controls.formNames.value >=0 && form.controls.fieldKey.value !='') && (form.controls.tblmap.length-1 == i)\">Add new filter</button>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n               <!-- <button type=\"button\" class=\"btn btn-primary btn-raised mr-1\" (click)=\"addNewInputFields()\" *ngIf=\"(form.controls.formNames.value >=0) && (form.controls.fieldKey.value !='')\">Add a new row</button> -->\r\n               <button type=\"button\" class=\"btn btn-danger btn-raised mr-1\" (click)=\"cancel()\">Cancel</button>\r\n               <button type=\"submit\" class=\"btn btn-success btn-raised mr-1\"  [disabled]=\"!form.valid\">Get Report</button>\r\n               <button type=\"button\" class=\"btn btn-success btn-raised\"  [disabled]=\"!form.valid\" (click)=\"addtoDashboard(adddashboardmodal)\">Add to Dashboard</button>\r\n            </div>\r\n            </form>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>\r\n</div>\r\n\r\n    <ng-template #adddashboardmodal let-c=\"close\" let-d=\"dismiss\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Enter Details</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"txta\">Chart Name</label>\r\n                <input type=\"text\" name=\"name\" required [(ngModel)]=\"chartLabels.name\"  class=\"form-control\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>X-Axsis Label</label>\r\n                <input type=\"text\" name=\"xaxsis\" required [(ngModel)]=\"chartLabels.xaxis\" class=\"form-control\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>Y-Axsis Label</label>\r\n                <input type=\"text\" name=\"yaxsis\" required [(ngModel)]=\"chartLabels.yaxis\" class=\"form-control\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"form-group\">\r\n            <label>Chart Type</label>\r\n            <select name=\"chartType\" required formControlName=\"chartType\" class=\"form-control\">\r\n              <option value=\"line\">Line Chart</option>\r\n              <option value=\"bar\">Bar Chart</option>\r\n              <option value=\"pie\">Pie Chart</option>\r\n            </select>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary btn-raised\" (click)=\"c('Close click')\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-success btn-raised\" (click)=\"saveDashboardSubmit(c)\" [disabled]=\"submitted\">Submit</button>\r\n      </div>\r\n    </ng-template>\r\n\r\n\r\n<!-- Vertical Bar Chart Starts -->\r\n<div class=\"row\" *ngIf=\"barChartSingle.length >0\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <div class=\"card-title-wrap bar-info\">\r\n                    <h4 class=\"card-title\">Chart</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div id=\"vartical-bar-chart\" class=\"height-400\" >\r\n                        <!-- <ngx-charts-bar-vertical-2d [scheme]=\"barChartColorScheme\" [results]=\"barChartSingle\" [gradient]=\"barChartGradient\" [xAxis]=\"barChartShowXAxis\"\r\n                            [yAxis]=\"barChartShowYAxis\" [legend]=\"barChartShowLegend\" [showXAxisLabel]=\"barChartShowXAxisLabel\"\r\n                            [showYAxisLabel]=\"barChartShowYAxisLabel\" [xAxisLabel]=\"barChartXAxisLabel\" [yAxisLabel]=\"barChartYAxisLabel\"\r\n                            (select)=\"onSelect($event)\">\r\n                        </ngx-charts-bar-vertical-2d>-->\r\n                        <ngx-charts-bar-vertical\r\n                        [view]=\"view\"\r\n                        [scheme]=\"barChartColorScheme\"\r\n                        [results]=\"barChartSingle\"\r\n                        [gradient]=\"barChartGradient\"\r\n                        [xAxis]=\"barChartShowXAxis\"\r\n                        [yAxis]=\"barChartShowYAxis\"\r\n                        [legend]=\"barChartShowLegend\"\r\n                        [showXAxisLabel]=\"barChartShowXAxisLabel\"\r\n                        [showYAxisLabel]=\"barChartShowYAxisLabel\"\r\n                        [xAxisLabel]=\"barChartXAxisLabel\"\r\n                        [yAxisLabel]=\"barChartYAxisLabel\">\r\n                        <!-- (select)=\"onSelect($event)\" -->\r\n                        </ngx-charts-bar-vertical>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Vertical Bar Chart Ends -->\r\n\r\n\r\n<!-- <div class=\"row\">\r\n  <div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\r\n   <div class=\"form-group\">\r\n    <label for=\"field\">Select Form</label>\r\n\r\n    <select class=\"custom-select mb-2\"  (change)=\"onSelectFormName($event.target.value)\">\r\n     <option value=\"\">-- Select --</option>\r\n     <option *ngFor=\"let item of formsData;let i = index\" value=\"{{i}}\" >{{item.name}}</option>\r\n   </select>\r\n </div>\r\n</div>\r\n<div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\r\n  <div class=\"form-group\">\r\n   <label for=\"field\">Fields</label>\r\n\r\n   <select class=\"custom-select mb-2\"  (change)=\"onSelectQuestion($event.target.value)\"  >\r\n\r\n    <option value=\"\">-- Select --</option>\r\n    <option *ngFor=\"let value of formsDataSelected\" value=\"{{value.key}}\" >{{value.label}}</option>\r\n   </select>\r\n </div>\r\n</div>\r\n\r\n<div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\r\n  <div class=\"form-group\">\r\n  \t<br>\r\n   <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-bitbucket right\" (click)=\"savetoDashboard()\"><span class=\"ft-plus\"></span>Add to Dashboard</a>\r\n </div>\r\n</div>\r\n\r\n</div> -->\r\n\r\n<!--save dashboard form -->\r\n<!-- <section id=\"collapse\" *ngIf=\"showSaveForm\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"content-header\">Save Chart</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n              <form class=\"form\" [formGroup]=\"regularForm\" (ngSubmit)=\"onReactiveFormSubmit()\">\r\n                <div class=\"form-body\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"form-group\">\r\n                        <label>Chart Name</label>\r\n                        <input type=\"text\" name=\"name\" required formControlName=\"name\" class=\"form-control\">\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label>Chart Type</label>\r\n                        <select name=\"chartType\" required formControlName=\"chartType\" class=\"form-control\">\r\n                          <option value=\"line\">Line Chart</option>\r\n                          <option value=\"bar\">Bar Chart</option>\r\n                          <option value=\"pie\">Pie Chart</option>\r\n                        </select>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label>X-Axsis Label</label>\r\n                        <input type=\"text\" name=\"xaxsis\" required formControlName=\"xaxsis\" class=\"form-control\">\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label>Y-Axsis Label</label>\r\n                        <input type=\"text\" name=\"yaxsis\" required formControlName=\"yaxsis\" class=\"form-control\">\r\n                      </div>\r\n                      <h4 class=\"form-section\">Filters</h4>\r\n                      <div class=\"form-group\" >\r\n                        <label>Select Date Range</label>\r\n                        <select name=\"daterange\" required formControlName=\"daterange\" class=\"form-control\">\r\n                          <option value=\"1\">Last one week</option>\r\n                          <option value=\"15\">Last 15 days</option>\r\n                          <option value=\"30\">Last 30 days</option>\r\n                          <option value=\"60\">Last 60 days</option>\r\n                          <option value=\"90\">Last 90 days</option>\r\n                          <option value=\"180\">Last 180 days</option>\r\n                          <option value=\"365\">Last 365 days</option>\r\n                        </select>\r\n                      </div>\r\n\r\n\r\n                      <div formArrayName=\"tblmap\" *ngIf=\"(regularForm.controls.formNames.value >=0) && (regularForm.controls.tblNames.value >=0)\">\r\n                      \t<div class=\"row\" [formGroupName]=\"i\" *ngFor=\"let tech of regularForm.controls.tblmap.controls; let i = index\">\r\n                      \t\t<div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\r\n                      \t\t\t<div class=\"form-group\">\r\n                      \t\t\t\t<label for=\"field\">Fields</label>\r\n\r\n                      \t\t\t\t<select class=\"custom-select mb-2\" formControlName=\"formCol\"  placeholder=\"Rule Type\" >\r\n\r\n                      \t\t\t\t\t<option value=\"\">-- Select --</option>\r\n                      \t\t\t\t\t<option *ngFor=\"let value of formsDataSelected\" value=\"{{value.key}}\" >{{value.label}}</option>\r\n                      \t\t\t\t</select>\r\n                      \t\t\t</div>\r\n                      \t\t</div>\r\n\r\n\r\n\r\n                      \t\t\t<div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\r\n                      \t\t\t\t<div class=\"form-group\">\r\n                      \t\t\t\t\t<label for=\"seloperator\">Operator</label><br />\r\n                      \t\t\t\t\t<select  class=\"custom-select mb-2\" formControlName=\"seloperator\" placeholder=\"Rule Type\">\r\n                      \t\t\t\t\t\t<option value=\"1\">less than or equal to</option>\r\n                      \t\t\t\t\t\t<option value=\"2\">less than</option>\r\n                      \t\t\t\t\t\t<option value=\"3\">equal to</option>\r\n                      \t\t\t\t\t\t<option value=\"4\">greater than</option>\r\n                      \t\t\t\t\t\t<option value=\"5\">greater than or equal to</option>\r\n                      \t\t\t\t\t</select>\r\n   \r\n                      \t\t\t\t</div>\r\n                      \t\t\t</div>\r\n\r\n                      \t\t\t<div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\r\n                      \t\t\t\t<div class=\"form-group\">\r\n                      \t\t\t\t\t<label for=\"seloperator\">ADD VALUE</label><br />\r\n                      \t\t\t\t\t <input type=\"text\" name=\"txtfilterval\" required formControlName=\"txtfilterval\" class=\"form-control\">\r\n\r\n                      \t\t\t\t</div>\r\n                      \t\t\t</div>\r\n\r\n\r\n                      \t\t\t<div class=\"col-xl-2 col-lg-6 col-md-12 mb-1\" *ngIf=\"i > 0\">\r\n                      \t\t\t\t<br>\r\n                      \t\t\t\t<button class=\"btn btn-danger mr-1 btn-fab\" *ngIf=\"regularForm.controls.tblmap.length > 1\"\r\n                      \t\t\t\t\t(click)=\"removeInputField(i)\"><i class=\"fa fa-times\"></i></button>\r\n                      \t\t\t\t</div>\r\n                      \t\t\t</div>\r\n                      \t\t</div>\r\n\r\n                      <div class=\"form-group\">\r\n                      \t<button type=\"button\" class=\"btn btn-primary btn-raised mr-1\" (click)=\"addNewInputField()\">Add new Filter</button>\r\n                        <button type=\"button\" class=\"btn btn-danger btn-raised  mr-1\" (click)=\"cancel()\">Cancel</button>\r\n                        <button type=\"submit\" class=\"btn btn-success btn-raised\" [disabled]=\"!regularForm.valid\" >Generate Chart</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section> -->\r\n<!--save dashboard form-->\r\n"

/***/ }),

/***/ "./src/app/feedback/chartsreport/chartsreport.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/feedback/chartsreport/chartsreport.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlZWRiYWNrL2NoYXJ0c3JlcG9ydC9jaGFydHNyZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/feedback/chartsreport/chartsreport.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/feedback/chartsreport/chartsreport.component.ts ***!
  \*****************************************************************/
/*! exports provided: ChartsreportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsreportComponent", function() { return ChartsreportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_data_feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data/feedback.service */ "./src/app/shared/data/feedback.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _shared_configs_ngx_charts_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/configs/ngx-charts.config */ "./src/app/shared/configs/ngx-charts.config.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { barChartSingle, barChartmulti, pieChartSingle, pieChartmulti, lineChartSingle, lineChartMulti, areaChartSingle, areaChartMulti } from '../../shared/data/ngxChart';
var ChartsreportComponent = /** @class */ (function () {
    function ChartsreportComponent(feedbackservice, snotifyService, modalService, _FB) {
        this.feedbackservice = feedbackservice;
        this.snotifyService = snotifyService;
        this.modalService = modalService;
        this._FB = _FB;
        //Chart Data
        // lineChartMulti = lineChartMulti;
        // areaChartMulti = areaChartMulti;
        // pieChartSingle = pieChartSingle;
        // barChartSingle =barChartSingle;
        // barChartmulti = barChartmulti;
        this.barChartSingle = [];
        //Bar Charts
        this.barChartView = _shared_configs_ngx_charts_config__WEBPACK_IMPORTED_MODULE_4__["barChartView"];
        // options
        this.barChartShowYAxis = _shared_configs_ngx_charts_config__WEBPACK_IMPORTED_MODULE_4__["barChartShowYAxis"];
        this.barChartShowXAxis = _shared_configs_ngx_charts_config__WEBPACK_IMPORTED_MODULE_4__["barChartShowXAxis"];
        this.barChartGradient = _shared_configs_ngx_charts_config__WEBPACK_IMPORTED_MODULE_4__["barChartGradient"];
        this.barChartShowLegend = _shared_configs_ngx_charts_config__WEBPACK_IMPORTED_MODULE_4__["barChartShowLegend"];
        this.barChartShowXAxisLabel = _shared_configs_ngx_charts_config__WEBPACK_IMPORTED_MODULE_4__["barChartShowXAxisLabel"];
        //barChartXAxisLabel = chartsData.barChartXAxisLabel;
        this.barChartShowYAxisLabel = _shared_configs_ngx_charts_config__WEBPACK_IMPORTED_MODULE_4__["barChartShowYAxisLabel"];
        //barChartYAxisLabel = chartsData.barChartYAxisLabel;
        this.barChartColorScheme = _shared_configs_ngx_charts_config__WEBPACK_IMPORTED_MODULE_4__["barChartColorScheme"];
        this.barChartXAxisLabel = 'Options';
        this.barChartYAxisLabel = 'Count';
        this.formsData = [];
        this.formsDataSelected = [];
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
        this.dateError = false;
        this.submitted = false;
        this.submissions = [];
        this.formatedData = [];
        this.formsDataSelectedAllControls = [];
        this.showSaveForm = false;
        this.chartLabels = { "name": '', "xaxis": '', "yaxis": '' };
        //operatorloop=[];
        //valuesArray =[[],[{"label":"one","value":"1","shortcut":""},{"label":"two","value":"2","shortcut":""},{"label":"three","value":"3","shortcut":""}]];
        this.valuesArray = [];
        this.operatorArray = [];
        this.selectedformcol = '';
    }
    ChartsreportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.feedbackservice.getCampaignByOrg().then(function (data) {
            if (data['campaign']) {
                _this.formsData = data['campaign'];
                console.log("ngOnInit" + JSON.stringify(_this.formsData));
                //to fill default values
                //this.formDataSelectedFull =this.formsData[0];
                //let inputTypes =["radio","select"];
                //this.formsDataSelected =this.formsData[0]['form_data']['components'].filter(val => (val.key !='submit' && (val.type == 'radio' || val.type == 'select')));
            }
        }, function (error) {
        });
        // this.regularForm = new FormGroup({
        // 	'name': new FormControl(null, null),
        // 	'chartType': new FormControl(null, null),
        // 	//'data': new FormControl(null, null),
        // 	'xaxsis': new FormControl(null, null),
        // 	'yaxsis': new FormControl(null, null),
        // 	//'columns': new FormControl(null, null),
        // 	'daterange': new FormControl(null, null),
        // 	//'newscolumns': new FormControl(null, null),
        // 	//'xdata': new FormControl(null, null)
        // });
        this.regularForm = this._FB.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            chartType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            //'data':  ['', Validators.required],
            xaxsis: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            yaxsis: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            //'columns':  ['', Validators.required],
            daterange: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            formNames: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tblNames: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tblmap: this._FB.array([
                this.initMapFields()
            ])
        });
        this.form = this._FB.group({
            formNames: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fieldKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            //sdate : ['', Validators.required],
            sdate: [],
            edate: [],
            //edate : ['', Validators.required],
            tblmap: this._FB.array([
            //this.initMapFields()
            ])
        });
    };
    ChartsreportComponent.prototype.checkDates = function (sDate, eDate) {
        if (sDate > eDate) {
            this.dateError = true;
        }
        else {
            this.dateError = false;
        }
        // alert(typeof(sDate));
        // var s = parseInt(sDate.replace(/-/g, ''));
        // var e = parseInt(eDate.replace(/-/g, ''));
        // alert(eDate);
        // if(s > e){
        //   this.dateError =true;
        // }
        //console.log("sdsad");
    };
    ChartsreportComponent.prototype.onSelectFormName = function (index) {
        //this.formsDataSelected = this.formsData[index]['form_data']['components'].filter(val => val.key !='submit');
        this.formsDataSelected = this.formsData[index]['form_data']['components'].filter(function (val) { return (val.key != 'submit' && (val.type == 'radio' || val.type == 'select' || val.type == 'selectboxes')); });
        this.formsDataSelectedAllControls = this.formsData[index]['form_data']['components'].filter(function (val) { return (val.key != 'submit'); });
        //this.formsDataSelected =this.formsData[index]['form_data']['components'].filter( this.inputTypes.indexOf((val => val.type).toString()) > -1);
        this.formIdSelected = this.formsData[index]['id'];
        //let id =btoa(this.formsData[index]['id'].toString());
        //this.getSubmissions(id);
    };
    //onSelectQuestion(keyVal){
    ChartsreportComponent.prototype.submissionDatatoGraph = function (keyVal) {
        this.qSelected = keyVal;
        var labelsObj = [];
        var valuesAll = [];
        var labels = [];
        var valuesCount = [];
        for (var i = 0; i < this.formsDataSelected.length; i++) {
            if (this.formsDataSelected[i]['key'] == keyVal) {
                console.log("control type" + this.formsDataSelected[i]['type']);
                if (this.formsDataSelected[i]['type'] == 'radio' || this.formsDataSelected[i]['type'] == 'selectboxes') {
                    labelsObj.push(this.formsDataSelected[i].values);
                    //labels.push(this.formsDataSelected[i].values[0][i]);	
                }
                if (this.formsDataSelected[i]['type'] == 'select') {
                    labelsObj.push(this.formsDataSelected[i]['data'].values);
                }
            }
        }
        var _loop_1 = function (i) {
            var myObj = JSON.parse(this_1.submissions[i]['sub_data']);
            var myData = myObj.data;
            //if(this.formsDataSelected[i]['type'] == 'radio' || this.formsDataSelected[i]['type'] == 'select'){
            Object.keys(myData).forEach(function (key) {
                if (key == keyVal) {
                    //for checkbox list multi options exist   				
                    if (typeof (myData[key]) == 'object') {
                        console.log(JSON.stringify(myData[key]));
                        Object.keys(myData[key]).forEach(function (objkey) {
                            //alert(objkey);
                            if (myData[key][objkey] == true) {
                                valuesAll.push(objkey);
                            }
                        });
                    }
                    else {
                        valuesAll.push(myData[key]);
                    }
                }
            });
            //}
            // else if( this.formsDataSelected[i]['type'] == 'selectboxes'){
            // }
        };
        var this_1 = this;
        //let subs = JSON.parse(this.submissions['sub_data']);
        for (var i = 0; i < this.submissions.length; i++) {
            _loop_1(i);
        }
        var counts = {};
        for (var i = 0; i < valuesAll.length; i++) {
            var num = valuesAll[i];
            counts[num] = counts[num] ? counts[num] + 1 : 1;
        }
        for (var i = 0; i < labelsObj[0].length; i++) {
            labels.push(labelsObj[0][i].label);
            var count = counts[labelsObj[0][i].value];
            if (!count) {
                count = 0;
            }
            // if(count){
            // 	valuesCount.push(count);
            // }
            // else{
            // 	valuesCount.push(0);
            // }
            if (i == 0) {
                this.formatedData = [];
            }
            this.formatedData.push({
                "name": labelsObj[0][i].label,
                "value": count
            });
        }
        //this.data.lineArea6.labels = labels;
        //	this.data.lineArea6.series[0] = valuesCount;
        //console.log(JSON.stringify(this.barChartSingle));
        this.barChartSingle = this.formatedData;
        //   	this.barChartSingle = [
        //   {
        //     "name": "Germany",
        //     "value": 1000
        //   },
        //   {
        //     "name": "USA",
        //     "value": 200
        //   },
        //   {
        //     "name": "France",
        //     "value": 111
        //   },
        //   {
        //     "name": "Australia",
        //     "value": 650
        //   }
        // ];
        console.log(JSON.stringify(this.barChartSingle));
    };
    // getSubmissions(id) {
    // 	this.feedbackservice.getSubmissionsById(id).then(data => {
    // 		//alert(JSON.stringify(data));
    // 		console.log("getSubmissions" + JSON.stringify(data));
    // 		if (data['status'] == "success") {
    // 			this.submissions = data['subs'];
    // 			//console.log("submissions"+JSON.stringify(this.submissions));
    // 		}
    // 	})
    // }
    ChartsreportComponent.prototype.addtoDashboard = function (dashboardmodal) {
        this.modalService.open(dashboardmodal).result.then(function (result) {
            //this.closeResult = `Closed with: ${result}`;
        }, function (reason) {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    };
    ChartsreportComponent.prototype.saveDashboardSubmit = function (c) {
        var _this = this;
        this.submitted = true;
        if (this.form.value.sdate > this.form.value.edate) {
            this.dateError = true;
        }
        else {
            //{"formNames":"11","fieldKey":"radio2","sdate":"2019-01-31","edate":"2019-02-15","tblmap":[{"formCol":"textField2","seloperator":"3","txtfilterval":"aaa"}]}
            var userId = localStorage.getItem('currentUserId');
            var chartDetail = {
                uid: userId,
                name: this.chartLabels.name,
                chartType: 'bar',
                //data: this.regularForm.controls['data'].value,
                xaxsis: this.chartLabels.xaxis,
                yaxsis: this.chartLabels.yaxis,
                //columns: (this.userData) ? this.regularForm.controls['columns'].value : '',
                //daterange:  this.regularForm.controls['daterange'].value,
                fromDate: this.form.value.sdate,
                toDate: this.form.value.edate,
                filters: JSON.stringify(this.form.value.tblmap),
                formId: this.formIdSelected,
                qkey: this.form.value.fieldKey
                //newsletterColumns: this.newsletterSelectedColumn,
                //xdata: (this.userData) ? this.regularForm.controls['xdata'].value : '',
                //subTableName: this.regularForm.controls['newscolumns'].value,
                //mainRecordId: (!this.userData) ? this.regularForm.controls['columns'].value : ''
            };
            this.feedbackservice.saveDashboardChart(chartDetail).then(function (data) {
                if (data['status'] == 'true') {
                    c('hjk');
                    _this.snotifyService.success('Chart Saved Successfully.', '', _this.getConfig());
                    _this.form.reset();
                    _this.submitted = false;
                }
            });
        }
    };
    ChartsreportComponent.prototype.savetoDashboard = function () {
        this.showSaveForm = true;
    };
    ChartsreportComponent.prototype.cancel = function () {
        this.showSaveForm = false;
        this.form.reset();
        //this.form.tblmap.length =0;
    };
    /*onReactiveFormSubmit(){

        console.log(JSON.stringify(this.regularForm));

        let chartDetail = {
        uid: 1, //login userId
        name: this.regularForm.controls['name'].value,
        chartType: this.regularForm.controls['chartType'].value,
        //data: this.regularForm.controls['data'].value,
        xaxsis: this.regularForm.controls['xaxsis'].value,
        yaxsis: this.regularForm.controls['yaxsis'].value,
        //columns: (this.userData) ? this.regularForm.controls['columns'].value : '',
        daterange:  this.regularForm.controls['daterange'].value,
        formId:this.formIdSelected,
        qkey:this.qSelected
        //newsletterColumns: this.newsletterSelectedColumn,
        //xdata: (this.userData) ? this.regularForm.controls['xdata'].value : '',
        //subTableName: this.regularForm.controls['newscolumns'].value,
        //mainRecordId: (!this.userData) ? this.regularForm.controls['columns'].value : ''
    }
        this.feedbackservice.saveDashboardChart(chartDetail).then(data => {
        if(data['status'] == 'success'){
          this.snotifyService.success('Chart Saved Successfullly.', '', this.getConfig());
          this.regularForm.reset();
          this.showSaveForm =false;
          // this.chartService.getCharts(1, new Date().getTime()).then(data => {
          //   if(data['status'] == 'success'){
          //     this.charts = data['charts'];
          //     this.chartsCount = data['charts'].length;
          //     setTimeout(() => { this.loadingIndicator = false; }, 1500);
          //   }
          // });
        }
      });
    }*/
    // initMapFields() : FormGroup
    // {
    //    return this._FB.group({
    //       formCol 		: ['', Validators.required],
    //       seloperator 	: ['', Validators.required],
    //       txtfilterval 	: ['', Validators.required]        
    //    });
    // }
    ChartsreportComponent.prototype.initMapFields = function () {
        return this._FB.group({
            formCol: [],
            seloperator: [],
            txtfilterval: []
        });
    };
    ChartsreportComponent.prototype.onSelectFields = function (val, i) {
        var selindex = 0;
        this.formsDataSelectedAllControls.forEach(function (ctrl, index) {
            if (val == ctrl.key) {
                selindex = index;
            }
        });
        //this.selectedformcol = this.formsDataSelectedAllControls[val];
        //console.log("red"+JSON.stringify(val));
        var selectedField = this.formsDataSelectedAllControls[selindex];
        //console.log("sasa"+i);
        if (selectedField['type'] == 'textfield') {
            this.operatorArray[i] = [{ "opvalue": "3", "optext": "equal to" }];
            //this.valuesArray[i] =[];
            this.valuesArray[i] = {};
            this.valuesArray[i].type = "textfield";
            this.valuesArray[i].values = [];
            //this.valuesArray[i] = [{"type":"textfield"}];
        }
        if (selectedField['type'] == 'number') {
            //doit later 
            this.operatorArray[i] = [
                //{"opvalue":"1", "optext":"less than or equal to"},
                //{"opvalue":"2",  "optext":"less than"},
                { "opvalue": "3", "optext": "equal to" },
            ];
            this.valuesArray[i] = {};
            this.valuesArray[i].type = "number";
            this.valuesArray[i].values = [];
            //this.valuesArray[i] = [{"type":"textfield"}];
        }
        if (selectedField['type'] == 'radio') {
            this.operatorArray[i] = [{ "opvalue": "3", "optext": "equal to" }];
            this.valuesArray[i] = {};
            this.valuesArray[i].type = "radio";
            this.valuesArray[i].values = this.formsDataSelectedAllControls[selindex]['values'];
        }
        if (selectedField['type'] == 'select') {
            this.operatorArray[i] = [{ "opvalue": "3", "optext": "equal to" }];
            this.valuesArray[i] = {};
            this.valuesArray[i].type = "select";
            this.valuesArray[i].values = this.formsDataSelectedAllControls[selindex]['data']['values'];
        }
        if (selectedField['type'] == 'selectboxes') {
            this.operatorArray[i] = [{ "opvalue": "3", "optext": "equal to" }];
            this.valuesArray[i] = {};
            this.valuesArray[i].type = "selectboxes";
            this.valuesArray[i].values = this.formsDataSelectedAllControls[selindex]['values'];
        }
        console.log(JSON.stringify(this.operatorArray));
        console.log(JSON.stringify(this.valuesArray));
    };
    //for form
    ChartsreportComponent.prototype.manage = function (val) {
        var _this = this;
        var id = btoa(this.formIdSelected.toString());
        this.feedbackservice.getSubmissionsByIdFilter(id, val).then(function (data) {
            console.log("getSubmissions" + JSON.stringify(data));
            if (data['status'] == "success") {
                _this.submissions = data['subs'];
                /*let allSubs = data['subs'];
                //submissionloop this.submissions
                this.submissions =[];
                for(let i =0; i< allSubs.length; i++){
                    let myObj = JSON.parse(allSubs[i]['sub_data']);
                    let myData = myObj.data;
        
                    Object.keys(myData).forEach(key => {
                        for(let j=0; j<val['tblmap'].length;j++){
                            if(key == val['tblmap'][j]['formCol'] ){
                                if(myData[key] == val['tblmap'][j]['txtfilterval']){
                                    this.submissions.push(allSubs[i]);
                                }
                            }
                        }
                    })
                }*/
            }
            _this.submissionDatatoGraph(val.fieldKey);
        });
        console.log("aaa" + JSON.stringify(val));
        console.log("bbb" + JSON.stringify(this.formsDataSelectedAllControls));
    };
    ChartsreportComponent.prototype.addNewInputFields = function () {
        var control = this.form.controls.tblmap;
        control.push(this.initMapFields());
        this.valuesArray.push([]);
        this.operatorArray.push([]);
    };
    ChartsreportComponent.prototype.removeInputFields = function (i) {
        var control = this.form.controls.tblmap;
        control.removeAt(i);
        this.valuesArray.splice(i, 1);
        this.operatorArray.splice(i, 1);
    };
    //for form
    // addNewInputField() : void
    // {
    // 	const control = <FormArray>this.regularForm.controls.tblmap;
    // 	control.push(this.initMapFields());
    // }
    // removeInputField(i : number) : void
    // {
    // 	const control = <FormArray>this.regularForm.controls.tblmap;
    // 	control.removeAt(i);
    // }
    ChartsreportComponent.prototype.getConfig = function () {
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
    ChartsreportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chartsreport',
            template: __webpack_require__(/*! ./chartsreport.component.html */ "./src/app/feedback/chartsreport/chartsreport.component.html"),
            styles: [__webpack_require__(/*! ./chartsreport.component.scss */ "./src/app/feedback/chartsreport/chartsreport.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_data_feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ChartsreportComponent);
    return ChartsreportComponent;
}());



/***/ }),

/***/ "./src/app/feedback/createform/createform.component.html":
/*!***************************************************************!*\
  !*** ./src/app/feedback/createform/createform.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-sm-6\">\r\n\t\t<div class=\"content-header\">Create Survey</div>\r\n\t</div>\r\n\t<div class=\"col-sm-6\" style=\"text-align: right;\" *ngIf=\"!showSaveForm\">\r\n\t\t<p>\r\n\t\t\t<a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-bitbucket right\" (click)=\"saveToggle()\"><span class=\"ft-save\"></span>Save Survey </a>\r\n\t\t</p>\r\n\t</div>\r\n</div>\r\n<div class=\"row createform\" *ngIf=\"!showSaveForm\">\r\n\t<div class=\"col-sm-12\">\r\n\t\t<!-- <div class=\"form-group row\">\r\n\t\t\t<div class=\"col-sm-8\">\r\n\r\n\t\t\t<input class=\"form-control\" id=\"formTitle\" placeholder=\"Enter a Title\" type=\"text\">\r\n\t\t</div>\r\n\t\t\t<div class=\"col-sm-2\"><select class=\"form-control\" id=\"formSelect\"><option value=\"form\">Form</option><option value=\"wizard\">Wizard</option><option value=\"pdf\">PDF</option></select></div>\r\n\r\n\t\t\t<div class=\"col-sm-2\"><button class=\"btn btn-primary btn-block\">Save Form</button></div>\r\n\t\t</div> -->\r\n\r\n\t\t<form-builder [form]=\"form1\"></form-builder>\r\n\t\t<!-- <formio-grid [gridType]=\"'form'\" [createText]=\"'Create Form'\"\r\n\t\t(createItem)=\"onCreateItem()\"></formio-grid> -->\r\n\r\n\t\t<!-- <formio-grid\r\n\t\t[formio]=\"service.formio\"\r\n\t\t[gridType]=\"'form'\"\r\n\t\t[query]=\"{tags: config.tag, type: 'form'}\"\r\n\t\t(rowAction)=\"onAction($event)\"\r\n\t\t(rowSelect)=\"onSelect($event)\"\r\n\t\t[createText]=\"'Create Form'\"\r\n\t\t(createItem)=\"onCreateItem()\"\r\n\t\t></formio-grid> -->\r\n\t</div>\r\n</div>\r\n\r\n    <div class=\"row\" *ngIf=\"showSaveForm\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <form [formGroup]=\"saveCampaign\" novalidate>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"name\">Survey Name</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\" required>\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!saveCampaign.get('name').valid && (saveCampaign.get('name').dirty || saveCampaign.get('name').touched)\">This field is required!</small>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"sdate\">Start Date</label>\r\n                                <div class=\"input-group\">\r\n                                    <input type=\"date\" id=\"sdate\" class=\"form-control\" formControlName=\"sdate\" required>\r\n                                </div>\r\n                                <small class=\"form-text text-muted danger\" *ngIf=\"!saveCampaign.get('sdate').valid && (saveCampaign.get('sdate').dirty || saveCampaign.get('sdate').touched)\">This field is required!</small>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"form-group\">\r\n                                <label for=\"edate\">End Date</label>\r\n                                <div class=\"input-group\">\r\n                                    <input type=\"date\" id=\"edate\" class=\"form-control\" formControlName=\"edate\" (input)=\"checkDates(saveCampaign.get('sdate').value,$event.target.value)\" required>\r\n                                </div>\r\n                                <small class=\"form-text text-muted danger\" *ngIf=\"dateError\">End date should be greater than start date.</small>\r\n\t\t\t\t                <small *ngIf=\"saveCampaign.hasError('notValid')\">Not valid</small>\r\n                                <small class=\"form-text text-muted danger\" *ngIf=\"!saveCampaign.get('edate').valid && (saveCampaign.get('edate').dirty || saveCampaign.get('edate').touched)\">This field is required!</small>\r\n                            </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"description\">Description</label>\r\n                            <textarea class=\"form-control\" rows=\"3\" id=\"description\" formControlName=\"description\" required></textarea>\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!saveCampaign.get('description').valid && (saveCampaign.get('description').dirty || saveCampaign.get('description').touched)\">This field is required!</small>\r\n                        </div>\r\n\r\n                        <!-- <div class=\"form-group\">\r\n                            <label for=\"price\">Price</label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\">$</span>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" formControlName=\"price\" required>\r\n                            </div>\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!saveCampaign.get('price').valid && (saveCampaign.get('price').dirty || saveCampaign.get('price').touched)\">This field is required!</small>\r\n                        </div> -->\r\n\r\n                        <div class=\"form-group\">\r\n                            <button type=\"button\" class=\"btn btn-danger btn-raised mr-1\" (click)=\"cancel()\">Cancel</button>\r\n                            <button type=\"button\" class=\"btn btn-success btn-raised\" (click)=\"addcampaign()\" [disabled]=\"!saveCampaign.valid || submitted\">Save</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/feedback/createform/createform.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/feedback/createform/createform.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlZWRiYWNrL2NyZWF0ZWZvcm0vY3JlYXRlZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/feedback/createform/createform.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/feedback/createform/createform.component.ts ***!
  \*************************************************************/
/*! exports provided: CreateformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateformComponent", function() { return CreateformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_data_feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data/feedback.service */ "./src/app/shared/data/feedback.service.ts");
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




//import { newsLetterService } from '../../shared/data/newsletter.service';
//import { HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType } from '@angular/common/http';
var CreateformComponent = /** @class */ (function () {
    function CreateformComponent(feedbackservice, snotifyService
    // public service: FormManagerService,
    // public route: ActivatedRoute,
    // public router: Router,
    // public config: FormManagerConfig
    ) {
        this.feedbackservice = feedbackservice;
        this.snotifyService = snotifyService;
        this.form1 = {
            components: []
        };
        this.showSaveForm = false;
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
        this.dateError = false;
        this.submitted = false;
        //super(service, route, router, config);
        this.form1 = { components: [] };
    }
    CreateformComponent.prototype.ngOnInit = function () {
        this.saveCampaign = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'sdate': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'edate': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    };
    CreateformComponent.prototype.checkDates = function (sDate, eDate) {
        if (sDate > eDate) {
            this.dateError = true;
        }
        else {
            this.dateError = false;
        }
        // alert(typeof(sDate));
        // var s = parseInt(sDate.replace(/-/g, ''));
        // var e = parseInt(eDate.replace(/-/g, ''));
        // alert(eDate);
        // if(s > e){
        //   this.dateError =true;
        // }
        //console.log("sdsad");
    };
    Object.defineProperty(CreateformComponent.prototype, "f", {
        get: function () { return this.saveCampaign.controls; },
        enumerable: true,
        configurable: true
    });
    CreateformComponent.prototype.saveToggle = function () {
        this.showSaveForm = true;
    };
    CreateformComponent.prototype.cancel = function () {
        this.showSaveForm = false;
        //this.form1 ={components: []};
        this.f.name.setValue('');
        this.f.sdate.setValue('');
        this.f.edate.setValue('');
        this.f.description.setValue('');
    };
    CreateformComponent.prototype.addcampaign = function () {
        var _this = this;
        this.submitted = true;
        if (this.f.sdate.value > this.f.edate.value) {
            this.dateError = true;
        }
        else {
            var userId = localStorage.getItem('currentUserId');
            var mydata = {
                name: this.f.name.value,
                description: this.f.description.value,
                from_date: this.f.sdate.value,
                end_date: this.f.edate.value,
                status: 0,
                user_id: userId,
                form_data: JSON.stringify(this.form1)
            };
            this.feedbackservice.addCampaign(mydata).then(function (data) {
                if (data['status']) {
                    _this.showSaveForm = false;
                    _this.f.name.setValue('');
                    _this.f.sdate.setValue('');
                    _this.f.edate.setValue('');
                    _this.f.description.setValue('');
                    _this.form1 = { components: [] };
                    _this.snotifyService.success('Survey Saved Successfully', '', _this.getConfig());
                    _this.submitted = false;
                    // this.newsLetter.name = '';
                    // this.newsLetter.subject = '';
                    // this.newsLetter.listid = '';
                    // this.newsLetter.to = '';
                    // this.newsLetter.cc = '';
                    // this.newsLetter.bcc = '';
                    // this.newsLetter.body = this.defaultTemplate;
                    // this.newsletterservice.getNewletterTimeLine(new Date().getTime()).then(data => {
                    //   if(data['status']){
                    //     this.newsletterDetails = data['newsletter'];
                    //     this.collectionSize = data['newsletter'].length;
                    //     this.newsLetter.body = this.defaultTemplate;
                    //   }
                    // });
                    //window.location.reload();
                }
            });
            //  this.feedbackservice.addCampaign(mydata).then(data => {
            //     console.log(data);
            //     if(data['status'] == "success"){
            //       // this.router.navigate(['/dashboard/charts']).then(nav => {
            //       //   this.spinnerService.hide();
            //       // });
            //     }
            //     else{
            //       alert("failed");
            //     }
            // },
            // error => {
            //   //this.spinner.hide();
            // });
            //  this.feedbackservice.addCampaign(mydata)
            // .subscribe(
            //  r => {
            //    alert("Fom saved.");
            //      // if(r['status'] == 'success'){
            //      //     //this.router.navigate(['/apps/dashboards/analytics']);
            //      // }
            //     // this._location.go('apps/dashboards/analytics');
            //      //alert("hi");
            //    // if (r.token) {
            //    //  // this.customer.setToken(r.token);
            //    //  // this.router.navigateByUrl('/dashboard');
            //    // }
            //  },
            //  r => {
            //    alert(r.error.error);
            //  });
            console.log(JSON.stringify(this.form1));
        }
    };
    CreateformComponent.prototype.getConfig = function () {
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
    CreateformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createform',
            template: __webpack_require__(/*! ./createform.component.html */ "./src/app/feedback/createform/createform.component.html"),
            styles: [__webpack_require__(/*! ./createform.component.scss */ "./src/app/feedback/createform/createform.component.scss")]
        })
        //export class CreateformComponent extends FormManagerIndexComponent {
        ,
        __metadata("design:paramtypes", [_shared_data_feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"]
            // public service: FormManagerService,
            // public route: ActivatedRoute,
            // public router: Router,
            // public config: FormManagerConfig
        ])
    ], CreateformComponent);
    return CreateformComponent;
}());



/***/ }),

/***/ "./src/app/feedback/dbmaping/dbmaping.component.html":
/*!***********************************************************!*\
  !*** ./src/app/feedback/dbmaping/dbmaping.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"row\">\r\n    \t<div class=\"col-sm-12\">\r\n    \t\t<div class=\"content-header\">Database Mapping</div>\r\n    \t</div>\r\n    </div>\r\n    <!-- Reactive Form Validaton Starts -->\r\n    <div class=\"row\">\r\n    \t<div class=\"col-sm-12\">\r\n    \t\t<div class=\"card\">\r\n    \t\t\t<div class=\"card-header\">\r\n    \t\t\t\t<div class=\"card-title-wrap bar-success\">\r\n    \t\t\t\t\t<h4 class=\"card-title\">Database Mapping</h4>\r\n    \t\t\t\t</div>\r\n    \t\t\t</div>\r\n    \t\t\t<div class=\"card-body\">\r\n    \t\t\t\t<div class=\"card-block\">\r\n\r\n    \t\t\t\t\t<form [formGroup]=\"form\" (ngSubmit)=\"manage(form.value)\">\r\n\r\n    \t\t\t\t\t\t<div class=\"row\">\r\n    \t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 mb-1\">\r\n    \t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n    \t\t\t\t\t\t\t\t\t<label for=\"field\">Select Survey</label>\r\n    \t\t\t\t\t\t\t\t\t<select class=\"custom-select mb-2\" formControlName=\"formNames\" (change)=\"onSelectFormName($event.target.value)\">\r\n                        <option value=\"\" selected=\"true\">-- Select --</option>\r\n    \t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of formsData;let i = index\" value=\"{{i}}\" >{{item.name}}</option>\r\n    \t\t\t\t\t\t\t\t\t</select>\r\n    \t\t\t\t\t\t\t\t</div>\r\n    \t\t\t\t\t\t\t</div>\r\n\r\n    \t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 mb-1\" *ngIf=\"form.controls.formNames.value !=''\">\r\n    \t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n    \t\t\t\t\t\t\t\t\t<label for=\"field\">Select Table</label>\r\n    \t\t\t\t\t\t\t\t\t<select class=\"custom-select mb-2\" formControlName=\"tblNames\" (change)=\"onSelectTblName($event.target.value)\">\r\n                        <option value=\"\">-- Select --</option>\r\n    \t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of result;let i = index\" value=\"{{i}}\">{{item.name}}</option>\r\n    \t\t\t\t\t\t\t\t\t</select>\r\n    \t\t\t\t\t\t\t\t</div>\r\n    \t\t\t\t\t\t\t</div>\r\n    \t\t\t\t\t\t</div>\r\n\r\n\r\n\r\n         <!-- Assign the tblmap FormArray to the form\r\n         \twhere we want to track/generate new input track fields -->\r\n         \t<div formArrayName=\"tblmap\" *ngIf=\"(form.controls.formNames.value >=0) && (form.controls.tblNames.value >=0)\">\r\n\r\n            <!-- Assign a FormGroupName property binding to track\r\n                 and manage each separate generated input field.\r\n                 Also iterate through the tblmap FormArray to\r\n                 correctly track/render new input fields against\r\n                 existing fields -->\r\n                 <!-- <section> -->\r\n\r\n               <!-- <ion-item-group>\r\n               \t<ion-item-divider color=\"light\">Name #{{ i + 1 }}</ion-item-divider> -->\r\n                <div *ngIf=\"(form.controls.formNames.value >=0 && form.controls.tblNames.value !='')\">\r\n\r\n                  <button type=\"button\" class=\"btn btn-primary btn-raised mr-1\" (click)=\"addNewInputField()\" *ngIf=\"(form.controls.tblmap.length == 0)\">Add a new row</button>\r\n\r\n               \t<div class=\"row\" [formGroupName]=\"i\" *ngFor=\"let tech of form.controls.tblmap.controls; let i = index\" >\r\n\r\n               \t<!--<div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\r\n               \t\t\t<div class=\"form-group\">\r\n               \t\t\t\t<label for=\"field\">Form</label>\r\n\r\n               \t\t\t\t<select class=\"custom-select mb-2\" formControlName=\"formCol\"  placeholder=\"Rule Type\">\r\n               \t\t\t\t\t<optgroup *ngFor=\"let item of formsData\" label=\"{{item.name}}\">\r\n               \t\t\t\t\t\t<option *ngFor=\"let value of item.form_data.components\" value=\"{{value.key}}::{{item.id}}\" >{{value.label}}</option>\r\n               \t\t\t\t\t</optgroup>\r\n               \t\t\t\t</select>\r\n               \t\t\t</div>\r\n               \t\t</div>\r\n\r\n               \t\t<div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\r\n               \t\t\t<div class=\"form-group\">\r\n               \t\t\t\t<label for=\"field\">Tables</label>\r\n\r\n               \t\t\t\t<select class=\"custom-select mb-2\" formControlName=\"tblCol\"  placeholder=\"Rule Type\">\r\n               \t\t\t\t\t<optgroup *ngFor=\"let item of result\" label=\"{{item.name}}\">\r\n               \t\t\t\t\t\t<option *ngFor=\"let value of item.values\" value=\"{{value.column_name}}::{{item.name}}\">{{value.column_name}}</option>\r\n               \t\t\t\t\t</optgroup>\r\n               \t\t\t\t</select>\r\n               \t\t\t</div>\r\n               \t\t</div> -->\r\n               \t\t<div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\r\n               \t\t\t<div class=\"form-group\">\r\n               \t\t\t\t<label for=\"field\">Fields</label>\r\n\r\n               \t\t\t\t<select class=\"custom-select mb-2\" formControlName=\"formCol\"  placeholder=\"Rule Type\" >\r\n\r\n               \t\t\t\t\t<option value=\"\">-- Select --</option>\r\n               \t\t\t\t\t<option *ngFor=\"let value of formsDataSelected\" value=\"{{value.key}}\" >{{value.label}}</option>\r\n\r\n               \t\t\t\t\t<!-- <optgroup *ngFor=\"let item of formsData\" label=\"{{item.name}}\"> -->\r\n               \t\t\t\t\t\t<!-- <option *ngFor=\"let value of formsDataSelected.form_data.components\" value=\"{{value.key}}\" >{{value.label}}</option> -->\r\n               \t\t\t\t\t<!-- </optgroup> -->\r\n               \t\t\t\t</select>\r\n               \t\t\t</div>\r\n               \t\t</div>\r\n\r\n               \t\t<div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\r\n               \t\t\t<div class=\"form-group\">\r\n               \t\t\t\t<label for=\"field\">Table Columns</label>\r\n\r\n               \t\t\t\t<select class=\"custom-select mb-2\" formControlName=\"tblCol\"  placeholder=\"Rule Type\">\r\n               \t\t\t\t\t<!-- <optgroup *ngFor=\"let item of result\" label=\"{{item.name}}\"> -->\r\n               \t\t\t\t\t\t<!-- <option *ngFor=\"let value of tblDataSelected.values\" value=\"{{value.column_name}}\">{{value.column_name}}</option> -->\r\n               \t\t\t\t\t\t<option value=\"\">-- Select --</option>\r\n               \t\t\t\t\t\t<option *ngFor=\"let value of tblDataSelected\" value=\"{{value.column_name}}\">{{value.column_name}}</option>\r\n               \t\t\t\t\t<!-- </optgroup> -->\r\n               \t\t\t\t</select>\r\n               \t\t\t</div>\r\n               \t\t</div>\r\n\r\n                  <div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\r\n                    <!-- <div class=\"col-xl-2 col-lg-6 col-md-12 mb-1\"> -->\r\n                      <div class=\"form-group\">\r\n                        <label [style.visibility]=\"'hidden'\">Action</label><br>\r\n                     <button class=\"btn btn-danger mr-1 btn-fab\" *ngIf=\"form.controls.tblmap.length > 0\"\r\n                    (click)=\"removeInputField(i)\"><i class=\"fa fa-times\"></i></button>\r\n                     <button type=\"button\" class=\"btn btn-primary btn-raised mr-1\" (click)=\"addNewInputField()\" *ngIf=\"(form.controls.tblmap.length-1 == i)\">Add a new row</button>\r\n                   </div>\r\n                  </div>\r\n\r\n\r\n               \t\t<!-- <div class=\"col-xl-2 col-lg-6 col-md-12 mb-1\" *ngIf=\"i > 0\">\r\n                    <div class=\"col-sm-4\">\r\n                  <div class=\"form-group\">\r\n                    <div class=\"form-group\">\r\n                      <br>\r\n                      <button type=\"button\" class=\"btn btn-primary btn-raised mr-1\" (click)=\"addNewInputFields()\" *ngIf=\"(form.controls.formNames.value >=0 && form.controls.fieldKey.value !='') && (form.controls.tblmap.length == 0)\">Add new filter</button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n               \t\t<button class=\"btn btn-danger mr-1 btn-fab\" *ngIf=\"form.controls.tblmap.length > 1\"\r\n               \t\t\t(click)=\"removeInputField(i)\"><i class=\"fa fa-times\"></i></button>\r\n\r\n               \t\t</div> -->\r\n\r\n               \t</div>\r\n               </div>\r\n\r\n                    <!--  <input type=\"text\" class=\"form-control\" formControlName=\"name\">\r\n                    \t<input type=\"text\" class=\"form-control\" formControlName=\"formCol\"> -->\r\n                     <!--  <ion-input\r\n                        type=\"text\"\r\n                        maxlength=\"50\"\r\n                        formControlName=\"name\"></ion-input> -->\r\n\r\n\r\n\r\n                        <!-- Allow generated input field to be removed -->\r\n\r\n                        <!-- </section> -->\r\n                    </div>\r\n\r\n\r\n                    <!-- Allow new input field to be generated/added -->\r\n              <!--   <span\r\n                ion-button\r\n                float-left\r\n                icon-left\r\n                clear\r\n                (click)=\"addNewInputField()\">\r\n                Add a new row\r\n            </span> -->\r\n\r\n\r\n\r\n\r\n   \t <!-- Only allow form to be submitted IF validation criteria for\r\n   \t \tinput fields has been successfully passed [disabled]=\"!form.valid\"-->\r\n <!--   \t \t<button\r\n   \t \tion-button\r\n   \t \tblock\r\n   \t \tmargin-top\r\n   \t \tcolor=\"primary\"\r\n   \t \ttext-center\r\n   \t \t>Submit</button> -->\r\n   \t \t<div class=\"form-group\">\r\n   \t \t\t<!-- <button type=\"button\" class=\"btn btn-primary btn-raised mr-1\" (click)=\"addNewInputField()\">Add a new row</button> -->\r\n   \t \t\t<button type=\"button\" class=\"btn btn-danger btn-raised mr-1\" (click)=\"cancel()\">Cancel</button>\r\n   \t \t\t<button type=\"submit\" class=\"btn btn-success btn-raised\"  [disabled]=\"!form.valid\">Submit</button>\r\n   \t \t</div>\r\n   \t </form>\r\n\r\n\r\n<!--                 \t<div class=\"row\">\r\n                \t\t<div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\r\n                \t\t\t<div class=\"form-group\">\r\n                \t\t\t\t<label for=\"field\">Tables</label>\r\n\r\n                \t\t\t\t<select class=\"custom-select mb-2\"   placeholder=\"Rule Type\">\r\n                \t\t\t\t\t<optgroup *ngFor=\"let item of result\" label=\"{{item.name}}\">\r\n                \t\t\t\t\t\t<option *ngFor=\"let value of item.values\" value=\"{{value.column_name}}\">{{value.column_name}}</option>\r\n                \t\t\t\t\t</optgroup>\r\n                \t\t\t\t</select>\r\n                \t\t\t\t<small class=\"form-text text-muted danger\" *ngIf=\"!dbmapingForm.get('field').valid && (dbmapingForm.get('field').dirty || dbmapingForm.get('field').touched)\">Please select Rule Type!</small>\r\n                \t\t\t</div>\r\n                \t\t</div>\r\n                \t\t<div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\r\n                \t\t\t<div class=\"form-group\">\r\n                \t\t\t\t<label for=\"field\">Form</label>\r\n\r\n                \t\t\t\t<select class=\"custom-select mb-2\"   placeholder=\"Rule Type\">\r\n                \t\t\t\t\t<optgroup *ngFor=\"let item of formsData\" label=\"{{item.name}}\">\r\n                \t\t\t\t\t\t<option *ngFor=\"let value of item.form_data.components\" value=\"{{value.key}}\" >{{value.label}}</option>\r\n                \t\t\t\t\t</optgroup>\r\n                \t\t\t\t</select>\r\n                \t\t\t</div>\r\n                \t\t</div>\r\n                \t</div>\r\n                \t<div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\r\n                \t\t\r\n                \t</div> -->\r\n\r\n\r\n<!--                     <form [formGroup]=\"dbmapingForm\" (ngSubmit)=\"onReactiveFormSubmit()\" novalidate>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"selTable\">Choose Table</label>\r\n\r\n                            <select class=\"custom-select mb-2\" formControlName=\"selTable\">\r\n                            \t<option [ngValue]=\"1\">One </option>\r\n                            \t<option [ngValue]=\"2\">Two </option>\r\n                            </select>\r\n\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!dbmapingForm.get('selTable').valid && (dbmapingForm.get('selTable').dirty || dbmapingForm.get('selTable').touched)\">Please enter a valid email!</small>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"password\">Columns</label>\r\n\r\n                            <select class=\"custom-select mb-2\" formControlName=\"selTable\">\r\n                            \t<option [ngValue]=\"1\">One </option>\r\n                            \t<option [ngValue]=\"2\">Two </option>\r\n                            </select>\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!dbmapingForm.get('password').valid && (dbmapingForm.get('password').dirty || dbmapingForm.get('password').touched)\">Password characters length must be between 4 and 24 !</small>\r\n                        </div>\r\n\r\n                        <div class=\"col-lg-4 col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                  <label for=\"field\">Field</label>\r\n\r\n                                  <select class=\"custom-select mb-2\" formControlName=\"field\" [(ngModel)]=\"dbmapingForm.field\" placeholder=\"Rule Type\">\r\n                                    <optgroup *ngFor=\"let item of result\" label=\"{{item.name}}\">\r\n                                      <option *ngFor=\"let value of item.values\" value=\"{{value.column_name}}\">{{value.column_name}}</option>\r\n                                    </optgroup>\r\n                                  </select>\r\n                                  <small class=\"form-text text-muted danger\" *ngIf=\"!dbmapingForm.get('field').valid && (dbmapingForm.get('field').dirty || dbmapingForm.get('field').touched)\">Please select Rule Type!</small>\r\n                                </div>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"form-group\">\r\n                            <button type=\"button\" class=\"btn btn-danger btn-raised  mr-1\">Cancel</button>\r\n                            <button type=\"button\" class=\"btn btn-success btn-raised\" [disabled]=\"!dbmapingForm.valid\">Submit</button>\r\n                        </div>\r\n                    </form> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Reactive Form Validaton Ends --> \r\n\r\n          <!--   Select table\r\n\r\n       \r\n\r\n            <select class=\"custom-select mb-2\" >\r\n              <option [ngValue]=\"1\">One </option>\r\n              <option [ngValue]=\"2\">Two </option>\r\n            </select>\r\n\r\n            <select class=\"custom-select mb-2\" >\r\n              <option [ngValue]=\"1\">One </option>\r\n              <option [ngValue]=\"2\">Two </option>\r\n          </select> -->\r\n"

/***/ }),

/***/ "./src/app/feedback/dbmaping/dbmaping.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/feedback/dbmaping/dbmaping.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlZWRiYWNrL2RibWFwaW5nL2RibWFwaW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/feedback/dbmaping/dbmaping.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/feedback/dbmaping/dbmaping.component.ts ***!
  \*********************************************************/
/*! exports provided: DbmapingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbmapingComponent", function() { return DbmapingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_data_feedback_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/data/feedback.service */ "./src/app/shared/data/feedback.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DbmapingComponent = /** @class */ (function () {
    function DbmapingComponent(feedbackservice, snotifyService, router, _FB) {
        var _this = this;
        this.feedbackservice = feedbackservice;
        this.snotifyService = snotifyService;
        this.router = router;
        this._FB = _FB;
        this.extraFields = [];
        this.formsData = [];
        //formsDataSelected ={"id":"","name":"","form_data":{"components":[]},"org_id":"","userid":""};
        this.formsDataSelected = [];
        this.formDataSelectedFull = [];
        this.tblDataSelected = [];
        this.timeout = 3000;
        this.position = ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyPosition"].centerTop;
        this.progressBar = true;
        this.closeClick = true;
        this.newTop = true;
        this.backdrop = -1;
        this.dockMax = 8;
        this.blockMax = 6;
        this.pauseHover = true;
        this.titleMaxLength = 15;
        this.bodyMaxLength = 80;
        this.feedbackservice.getTablewithColumns().then(function (data) {
            _this.feedbackservice.getDynamicFields().then(function (data) {
                _this.extraFields = data['table'];
            });
            if (data['status'] == "success") {
                for (var i = 0; i < _this.extraFields.length; i++) {
                    data['table'].push(_this.extraFields[i]);
                }
                _this.tableValues = data['table'];
                var groups = new Set(_this.tableValues.map(function (item) { return item.table_name; }));
                _this.result = [];
                groups.forEach(function (g) {
                    _this.result.push({
                        name: g,
                        values: _this.tableValues.filter(function (i) { return i.table_name === g; })
                    });
                });
                //to fill default values
                console.log(_this.result);
                console.log(typeof (_this.result));
                // this.tblDataSelectedFull =this.result[0];
                _this.tblDataSelected = _this.result[0]['values'];
            }
        });
        this.feedbackservice.getCampaignByOrg().then(function (data) {
            if (data['campaign']) {
                _this.formsData = data['campaign'];
                //console.log(JSON.stringify(this.formsData));
                //to fill default values
                _this.formDataSelectedFull = _this.formsData[0];
                _this.formsDataSelected = _this.formsData[0]['form_data']['components'].filter(function (val) { return val.key != 'submit'; });
            }
        }, function (error) {
        });
    }
    DbmapingComponent.prototype.ngOnInit = function () {
        // this.dbmapingForm = this._fb.group({
        // 	columnmap: this._fb.array([
        // 		this.initcolumnmap(),
        // 		])
        // });
        this.form = this._FB.group({
            formNames: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tblNames: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tblmap: this._FB.array([
                this.initMapFields()
            ])
        });
    };
    //   initcolumnmap() : FormGroup
    //   {
    //   	return this._fb.group({
    //   		name : ['', Validators.required]
    //   	});
    //   }
    // addNewInputField() : void
    // {
    //    const control = <FormArray>this.dbmapingForm.controls.tblcol;
    //    control.push(this.initcolumnmap());
    // }
    // removeInputField(i : number) : void
    // {
    //    const control = <FormArray>this.dbmapingForm.controls.tblmap;
    //    control.removeAt(i);
    // }
    /**
       * Generates a FormGroup object with input field validation rules for
       * the tblmap form object
       *
       * @public
       * @method initMapFields
       * @return {FormGroup}
       */
    DbmapingComponent.prototype.initMapFields = function () {
        return this._FB.group({
            formCol: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tblCol: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    /**
     * Programmatically generates a new technology input field
     *
     * @public
     * @method addNewInputField
     * @return {none}
     */
    DbmapingComponent.prototype.addNewInputField = function () {
        var control = this.form.controls.tblmap;
        control.push(this.initMapFields());
    };
    /**
     * Programmatically removes a recently generated technology input field
     *
     * @public
     * @method removeInputField
     * @param i    {number}      The position of the object in the array that needs to removed
     * @return {none}
     */
    DbmapingComponent.prototype.removeInputField = function (i) {
        var control = this.form.controls.tblmap;
        control.removeAt(i);
    };
    /**
     * Receive the submitted form data
     *
     * @public
     * @method manage
     * @param val    {object}      The posted form data
     * @return {none}
     */
    DbmapingComponent.prototype.manage = function (val) {
        //const optGroupLabel = ev.target.options[selectedIndex].parentNode.getAttribute('label');
        var _this = this;
        //console.log(typeof(val));
        //alert(val['tblmap'][0].formCol.split("::")[1]);
        // let formid = val['tblmap'][0].formCol.split("::")[1];
        console.log("aaa" + JSON.stringify(this.tblDataSelected));
        var formid = this.formDataSelectedFull['id'];
        //alert(formid);
        val.formid = formid;
        val.tblname = this.tblDataSelected[val.tblNames]['table_name'];
        var myval = JSON.stringify(val);
        //  console.log(JSON.stringify(val));
        this.feedbackservice.updateTblMap(formid, myval).then(function (data) {
            _this.snotifyService.success('Saved Successfully', '', _this.getConfig());
            _this.router.navigate(['/feedback//formmanager']);
        });
    };
    DbmapingComponent.prototype.onSelectFormName = function (index) {
        this.formDataSelectedFull = this.formsData[index];
        this.formsDataSelected = this.formsData[index]['form_data']['components'].filter(function (val) { return val.key != 'submit'; });
        //alert(val);
        console.log(JSON.stringify(this.formsDataSelected));
    };
    DbmapingComponent.prototype.onSelectTblName = function (index) {
        //Object.keys(this.result[index]).map(i => this.tblDataSelected[i]);
        //this.tblDataSelected=[];
        //this.tblDataSelected = this.result[index];
        //this.tblDataSelectedFull = this.result[index];
        this.tblDataSelected = this.result[index]['values'];
        //console.log(JSON.stringify(this.tblDataSelected[0]['table_name']));
    };
    DbmapingComponent.prototype.cancel = function () {
        this.router.navigate(['/feedback//formmanager']);
        //this.form.reset();
    };
    DbmapingComponent.prototype.getConfig = function () {
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
    DbmapingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dbmaping',
            template: __webpack_require__(/*! ./dbmaping.component.html */ "./src/app/feedback/dbmaping/dbmaping.component.html"),
            styles: [__webpack_require__(/*! ./dbmaping.component.scss */ "./src/app/feedback/dbmaping/dbmaping.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_data_feedback_service__WEBPACK_IMPORTED_MODULE_3__["FeedbackService"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], DbmapingComponent);
    return DbmapingComponent;
}());



/***/ }),

/***/ "./src/app/feedback/feedback-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/feedback/feedback-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FeedbackRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackRoutingModule", function() { return FeedbackRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _createform_createform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createform/createform.component */ "./src/app/feedback/createform/createform.component.ts");
/* harmony import */ var _renderform_renderform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderform/renderform.component */ "./src/app/feedback/renderform/renderform.component.ts");
/* harmony import */ var _chartsreport_chartsreport_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chartsreport/chartsreport.component */ "./src/app/feedback/chartsreport/chartsreport.component.ts");
/* harmony import */ var _manageform_manageform_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manageform/manageform.component */ "./src/app/feedback/manageform/manageform.component.ts");
/* harmony import */ var _viewsubmissions_viewsubmissions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewsubmissions/viewsubmissions.component */ "./src/app/feedback/viewsubmissions/viewsubmissions.component.ts");
/* harmony import */ var _dbmaping_dbmaping_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dbmaping/dbmaping.component */ "./src/app/feedback/dbmaping/dbmaping.component.ts");
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
                path: 'createform',
                component: _createform_createform_component__WEBPACK_IMPORTED_MODULE_2__["CreateformComponent"],
                data: {
                    title: 'Create Feedback Form'
                }
            },
            {
                path: 'renderform',
                component: _renderform_renderform_component__WEBPACK_IMPORTED_MODULE_3__["RenderformComponent"],
                data: {
                    title: 'Render Form'
                }
            },
            {
                path: 'formmanager',
                component: _manageform_manageform_component__WEBPACK_IMPORTED_MODULE_5__["ManageformComponent"],
                data: {
                    title: 'Form Manager'
                }
            },
            {
                path: 'viewsubmissions',
                component: _viewsubmissions_viewsubmissions_component__WEBPACK_IMPORTED_MODULE_6__["ViewsubmissionsComponent"],
                data: {
                    title: 'Submissions Data'
                }
            },
            {
                path: 'dbmaping',
                component: _dbmaping_dbmaping_component__WEBPACK_IMPORTED_MODULE_7__["DbmapingComponent"],
                data: {
                    title: 'Assign columns'
                }
            },
            {
                path: 'chartsreport',
                component: _chartsreport_chartsreport_component__WEBPACK_IMPORTED_MODULE_4__["ChartsreportComponent"],
                data: {
                    title: 'Charts'
                }
            }
        ]
    }
];
var FeedbackRoutingModule = /** @class */ (function () {
    function FeedbackRoutingModule() {
    }
    FeedbackRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], FeedbackRoutingModule);
    return FeedbackRoutingModule;
}());



/***/ }),

/***/ "./src/app/feedback/feedback.module.ts":
/*!*********************************************!*\
  !*** ./src/app/feedback/feedback.module.ts ***!
  \*********************************************/
/*! exports provided: FeedbackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackModule", function() { return FeedbackModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _feedback_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedback-routing.module */ "./src/app/feedback/feedback-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var angular_formio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-formio */ "./node_modules/angular-formio/index.js");
/* harmony import */ var angular_formio_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-formio/grid */ "./node_modules/angular-formio/grid/index.js");
/* harmony import */ var angular_formio_manager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-formio/manager */ "./node_modules/angular-formio/manager/index.js");
/* harmony import */ var _createform_createform_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./createform/createform.component */ "./src/app/feedback/createform/createform.component.ts");
/* harmony import */ var _renderform_renderform_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./renderform/renderform.component */ "./src/app/feedback/renderform/renderform.component.ts");
/* harmony import */ var _manageform_manageform_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./manageform/manageform.component */ "./src/app/feedback/manageform/manageform.component.ts");
/* harmony import */ var _viewsubmissions_viewsubmissions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./viewsubmissions/viewsubmissions.component */ "./src/app/feedback/viewsubmissions/viewsubmissions.component.ts");
/* harmony import */ var _dbmaping_dbmaping_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dbmaping/dbmaping.component */ "./src/app/feedback/dbmaping/dbmaping.component.ts");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/dist/ng-chartist.js");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ng_chartist__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _chartsreport_chartsreport_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./chartsreport/chartsreport.component */ "./src/app/feedback/chartsreport/chartsreport.component.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_19__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { ReportsComponent } from "./reports/reports.component";










//import { JSONTableModule } from 'angular-json-table';




var FeedbackModule = /** @class */ (function () {
    function FeedbackModule() {
    }
    FeedbackModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _feedback_routing_module__WEBPACK_IMPORTED_MODULE_3__["FeedbackRoutingModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["Ng2SmartTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_8__["FroalaEditorModule"].forRoot(), angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_8__["FroalaViewModule"].forRoot(),
                angular_formio__WEBPACK_IMPORTED_MODULE_9__["FormioModule"],
                angular_formio_grid__WEBPACK_IMPORTED_MODULE_10__["FormioGrid"],
                angular_formio_manager__WEBPACK_IMPORTED_MODULE_11__["FormManagerModule"],
                //JSONTableModule,
                ng_chartist__WEBPACK_IMPORTED_MODULE_17__["ChartistModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_19__["NgxChartsModule"]
            ],
            declarations: [
                _createform_createform_component__WEBPACK_IMPORTED_MODULE_12__["CreateformComponent"],
                _renderform_renderform_component__WEBPACK_IMPORTED_MODULE_13__["RenderformComponent"],
                _manageform_manageform_component__WEBPACK_IMPORTED_MODULE_14__["ManageformComponent"],
                _viewsubmissions_viewsubmissions_component__WEBPACK_IMPORTED_MODULE_15__["ViewsubmissionsComponent"],
                _dbmaping_dbmaping_component__WEBPACK_IMPORTED_MODULE_16__["DbmapingComponent"],
                _chartsreport_chartsreport_component__WEBPACK_IMPORTED_MODULE_18__["ChartsreportComponent"]
            ],
            providers: [
            // FormManagerService,
            // {provide: FormManagerConfig, useValue: {
            //   tag: 'common'
            // }}
            ]
        })
    ], FeedbackModule);
    return FeedbackModule;
}());



/***/ }),

/***/ "./src/app/feedback/manageform/manageform.component.html":
/*!***************************************************************!*\
  !*** ./src/app/feedback/manageform/manageform.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"basic-elements\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"content-header\">Survey Manager</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" >\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                           <!-- <p>Survey Manager</p> -->\r\n                           <ngb-tabset (tabChange)=\"selectSurvey($event)\">\r\n                                <ngb-tab title=\"Survey Manager\" id=\"active\" active=\"SelectedTab == 'active'\">\r\n                                  <ng-template ngbTabContent>\r\n                                  </ng-template>\r\n                                </ngb-tab>\r\n                                <ngb-tab title=\"Expired\" id=\"expired\" active=\"SelectedTab == 'expired'\">\r\n                                  <ng-template ngbTabContent>\r\n                                  </ng-template>\r\n                                </ngb-tab>\r\n                                </ngb-tabset>\r\n                            \r\n                        </div>\r\n                        <div class=\"col-sm-6\" style=\"text-align: right;\">\r\n                            <p>\r\n                                <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-bitbucket right\" (click)=\"memToggle()\"><span class=\"ft-plus\"></span>Create Survey</a>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                          <ngx-datatable class=\"material\" class=\"bootstrap\" [rows]=\"tblData\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"50\" [sorts]=\"[{prop: ['name', 'start_date'], dir: 'desc'}]\" [limit]=\"10\">\r\n                              <ngx-datatable-column name=\"Survey Name\">\r\n                                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                      {{row.name}}\r\n                                  </ng-template>\r\n                              </ngx-datatable-column>\r\n                              <ngx-datatable-column name=\"Start Date\">\r\n                                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                      {{row.start_date}}\r\n                                  </ng-template>\r\n                              </ngx-datatable-column>\r\n                              <ngx-datatable-column name=\"End Date\">\r\n                                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                    {{row.end_date}}\r\n                                </ng-template>\r\n                              </ngx-datatable-column>\r\n                              <ngx-datatable-column name=\"Action\">\r\n<!-- \r\n                              \t<ng-template #content{{row.id}} let-c=\"close\" let-d=\"dismiss\">\r\n                                  \t<div class=\"modal-header\">\r\n                                  \t\t<h4 class=\"modal-title\">Modal title</h4>\r\n                                  \t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                                  \t\t\t<span aria-hidden=\"true\">&times;</span>\r\n                                  \t\t</button>\r\n                                  \t</div>\r\n                                  \t<div class=\"modal-body\">\r\n                                  \t\t<formio [form]=\"row.form_data\"></formio>\r\n                                  \t</div>\r\n                                  \t<div class=\"modal-footer\">\r\n                                  \t\t<button type=\"button\" class=\"btn btn-secondary btn-raised\" (click)=\"c('Close click')\">Close</button>\r\n                                  \t</div>\r\n                                  </ng-template> -->\r\n                                  <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\r\n                                   <!--  <a class=\"primary p-0\" data-original-title=\"\" title=\"\" (click)=\"editcampaign(row.id)\">\r\n                                        <i class=\"fas fa-pencil-alt font-medium-3 mr-2\"></i>{{rowIndex}} \r\n                                    </a>-->\r\n                                    \r\n                                     <a class=\"info p-0\" data-original-title=\"\" title=\"\" (click)=\"open(row.form_data,content,row.name)\" >\r\n                                        <i class=\"fas fa-eye font-medium-3 mr-2\"></i>\r\n                                    </a>\r\n                                    <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"viewSubmissions(row.id)\">\r\n                                        <i class=\"fas fa-table font-medium-3 mr-2\"></i>\r\n                                    </a>\r\n                                    <!-- <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"deletecampaign(row.id,rowIndex)\"> -->\r\n                                    <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"deletecampaign(row.id)\">\r\n                                        <i class=\"fas fa-trash font-medium-3 mr-2\"></i>\r\n                                    </a>\r\n\r\n                                    <!-- <a class=\"danger p-0\"  data-original-title=\"\" title=\"\" (click)=\"openurl(row.id)\">\r\n                                        Get URL\r\n                                    </a> -->\r\n                                    <a class=\"danger p-0\"  data-original-title=\"\" title=\"\" (click)=\"openurlModal(contenturl,row.id,row.name)\">\r\n                                        Get URL\r\n                                    </a>\r\n                                    <!-- <button class=\"btn btn-lg btn-outline-primary\" (click)=\"openurlModal(row.id,content)\">Launch demo modal</button> -->\r\n                                  </ng-template>\r\n\r\n\r\n                              </ngx-datatable-column>\r\n                          </ngx-datatable>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    \t<div class=\"modal-header\">\r\n    \t\t<h4 class=\"modal-title\">{{formTitle}}</h4>\r\n    \t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n    \t\t\t<span aria-hidden=\"true\">&times;</span>\r\n    \t\t</button>\r\n    \t</div>\r\n    \t<div class=\"modal-body\">\r\n    \t\t<formio [form]=\"form\"></formio>\r\n    \t</div>\r\n    </ng-template>\r\n\r\n    <ng-template #contenturl let-c=\"close\" let-d=\"dismiss\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">{{modalTitle}}</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"form-body\">\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"txta\">URL</label>\r\n                <textarea class=\"form-control\" id=\"txta\" rows=\"3\"  [(ngModel)]=\"exturl\" onClick=\"this.select();\"></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <fieldset class=\"form-group\">\r\n                <label for=\"txtb\">iframe</label>\r\n                <textarea class=\"form-control\" id=\"txtb\" rows=\"3\" [(ngModel)]=\"iframecode\" onClick=\"this.select();\"></textarea>\r\n              </fieldset>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary btn-raised\" (click)=\"c('Close click')\">Close</button>\r\n      </div>\r\n    </ng-template>\r\n\r\n<!--     <div class=\"row\" >\r\n    \t<div class=\"col-sm-12\">\r\n    \t\t<formio [form]=\"form\"></formio>\r\n    \t</div>\r\n    </div> -->\r\n\r\n\r\n<!--  <button class=\"btn btn-lg btn-outline-primary\" >Launch demo modal</button> -->\r\n<!--     <div class=\"row\" *ngIf=\"showMembership\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <form [formGroup]=\"membershipForm\" novalidate>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"membershipName\">Membership Name</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"membershipName\" formControlName=\"membershipName\" required>\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!membershipForm.get('membershipName').valid && (membershipForm.get('membershipName').dirty || membershipForm.get('membershipName').touched)\">This field is required!</small>\r\n                        </div>\r\n                        <div class=\"row\" *ngIf=\"!memShowLogo\">\r\n                          <div class=\"col-sm-8\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"custom-file center-block d-block\">\r\n                                  <input type=\"file\" class=\"custom-file-input\" id=\"membershipIcon\" formControlName=\"membershipIcon\" (change)=\"uploadmembershipIcon($event.target.files)\">\r\n                                  <label class=\"custom-file-label\" for=\"membershipIcon\" #membershipIconLabel>Choose file</label>\r\n                                </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\" *ngIf=\"!memShowLogo && memLogo != ''\">\r\n                                <button type=\"button\" class=\"btn btn-danger btn-raised mr-1\" (click)=\"memShowLogo = !memShowLogo\">Cancel</button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row\" *ngIf=\"memShowLogo\">\r\n                          <div class=\"col-sm-8\">\r\n                            <div class=\"form-group\">\r\n                              <img src=\"{{memLogo}}\" />\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                                <button type=\"button\" class=\"btn btn-danger btn-raised mr-1\" (click)=\"memShowLogo = !memShowLogo\">Change Logo</button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"textArea\">Description</label>\r\n                            <textarea class=\"form-control\" rows=\"3\" id=\"textArea\" formControlName=\"textArea\" required></textarea>\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!membershipForm.get('textArea').valid && (membershipForm.get('textArea').dirty || membershipForm.get('textArea').touched)\">This field is required!</small>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"duration\">Duration</label>\r\n                                <div class=\"input-group\">\r\n                                    <input type=\"number\" id=\"duration\" class=\"form-control\" formControlName=\"duration\" required>\r\n                                </div>\r\n                                <small class=\"form-text text-muted danger\" *ngIf=\"!membershipForm.get('duration').valid && (membershipForm.get('duration').dirty || membershipForm.get('duration').touched)\">This field is required!</small>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"durationIn\">Membership Period</label>\r\n                                <div class=\"input-group\">\r\n                                  <select id=\"durationIn\" class=\"form-control\" formControlName=\"durationIn\" required [value]='selectval'>\r\n                                    <option value=\"\">Select</option>\r\n                                    <option value=\"days\">Days</option>\r\n                                    <option value=\"month\">Month</option>\r\n                                    <option value=\"year\">Year</option>\r\n                                  </select>\r\n                                </div>\r\n                                <small class=\"form-text text-muted danger\" *ngIf=\"!membershipForm.get('durationIn').valid && (membershipForm.get('durationIn').dirty || membershipForm.get('durationIn').touched)\">This field is required!</small>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"price\">Price</label>\r\n                            <div class=\"input-group\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\">$</span>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" formControlName=\"price\" required>\r\n                            </div>\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!membershipForm.get('price').valid && (membershipForm.get('price').dirty || membershipForm.get('price').touched)\">This field is required!</small>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <button type=\"button\" class=\"btn btn-danger btn-raised mr-1\" (click)=\"cancel()\">Cancel</button>\r\n                            <button type=\"button\" class=\"btn btn-success btn-raised\" (click)=\"addMembership()\" [disabled]=\"!membershipForm.valid\">Submit</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n</section>\r\n<!-- <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"card-title-wrap bar-success\">\r\n                        <h4 class=\"card-title\">Modal with Default options</h4>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\"> -->\r\n                        \r\n\r\n                        <!-- <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open1(content)\">Launch demo modal</button>\r\n\r\n                        <hr>\r\n                        <p>Action : {{closeResult}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div> -->"

/***/ }),

/***/ "./src/app/feedback/manageform/manageform.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/feedback/manageform/manageform.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlZWRiYWNrL21hbmFnZWZvcm0vbWFuYWdlZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/feedback/manageform/manageform.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/feedback/manageform/manageform.component.ts ***!
  \*************************************************************/
/*! exports provided: ManageformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageformComponent", function() { return ManageformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable/release */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_data_feedback_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/data/feedback.service */ "./src/app/shared/data/feedback.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ManageformComponent = /** @class */ (function () {
    function ManageformComponent(feedbackservice, snotifyService, modalService, http, router) {
        this.feedbackservice = feedbackservice;
        this.snotifyService = snotifyService;
        this.modalService = modalService;
        this.http = http;
        this.router = router;
        this.tblData = [];
        this.dataSource = [];
        this.timeout = 1000;
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
        this.columns = [
            { name: 'Form Name' },
            { name: 'Start Date' },
            { name: 'End Date' },
            { name: 'Action' }
        ];
        this.SelectedTab = 'active';
    }
    ManageformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.feedbackservice.getCampaignByOrg().then(function (data) {
            if (data['campaign']) {
                _this.tblData = data['campaign'];
                _this.collectionSize = data['campaign'].length;
                _this.totalList = data['campaign'].length;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ManageformComponent.prototype.memToggle = function () {
        this.router.navigate(['/feedback/createform']);
    };
    ManageformComponent.prototype.encrypt = function (id) {
        return btoa((id * 1000 * 10 * 5362).toString());
    };
    ManageformComponent.prototype.editcampaign = function (id) {
        this.encrypt(id);
        // this.membershipservice.getMembershipById(id).then(data => {
        //   if(data['status'] == 'success'){
        //       this.membershipForm.controls['membershipName'].setValue(data['membership'][0]['plans']);
        //       this.membershipForm.controls['textArea'].setValue(data['membership'][0]['description']);
        //       this.membershipForm.controls['price'].setValue(data['membership'][0]['price']);
        //       this.membershipForm.controls['duration'].setValue(data['membership'][0]['terms']);
        //       this.membershipForm.controls['durationIn'].setValue(data['membership'][0]['duration']);
        //       this.memLogo = data['membership'][0]['membershipIcon'];
        //       //this.membershipForm.controls['membershipIcon'].setValue(data['membership'][0]['membershipIcon']);
        //       //this.membershipIconLabel.nativeElement.innerHTML = data['membership'][0]['membershipIcon'];
        //       this.selectval = data['membership'][0]['duration'];
        //       this.memId = data['membership'][0]['id'];
        //       this.showMembership = true;
        //       this.editMem = true;
        //       this.memShowLogo = true;
        //       //console.log(this.membershipForm.controls['membershipIcon'].value);
        //       //this.router.navigate(['/membership']);
        //   }
        // });
    };
    ManageformComponent.prototype.viewSubmissions = function (id) {
        var encrypt = this.encrypt(id);
        this.router.navigate(['/feedback/viewsubmissions'], { queryParams: { id: encrypt } });
    };
    //  public SelectedTab  = 'active';
    ManageformComponent.prototype.selectSurvey = function (value) {
        var _this = this;
        if (value.activeId == 'active') {
            this.SelectedTab = 'expired';
            //if(this.SelectedTab == 'expired'){
            this.feedbackservice.getExpiredCampaignByOrg().then(function (data) {
                // this.dataSource = [];
                // this.collectionSize = [];
                if (data['campaign']) {
                    _this.tblData = data['campaign'];
                    _this.collectionSize = data['campaign'].length;
                    _this.totalList = data['campaign'].length;
                }
            });
        }
        else {
            this.SelectedTab = 'active';
            this.feedbackservice.getCampaignByOrg().then(function (data) {
                if (data['campaign']) {
                    _this.tblData = data['campaign'];
                    _this.collectionSize = data['campaign'].length;
                    _this.totalList = data['campaign'].length;
                }
            }, function (error) {
                console.log(error);
            });
        }
        //console.log('Selected - ' + this.SelectedTab);
        //this.SelectedTab = value.nextId;
        //console.log('Selected id - ' + this.SelectedTab);
        // let store;
        // if(this.storeName.startsWith("Auto One")){
        //   store = this.storeName;
        // }
        // else{
        //   store = '';
        // }
    };
    ManageformComponent.prototype.viewcampaign = function (id) {
        this.encrypt(id);
    };
    ManageformComponent.prototype.deletecampaign = function (id) {
        var _this = this;
        this.feedbackservice.deleteCampaign(id).then(function (data) {
            if (data['status']) {
                _this.snotifyService.error('Deleted Successfully', '', _this.getConfig());
                //alert(index);
                _this.tblData = _this.tblData.filter(function (h) { return h.id != id; });
                _this.collectionSize = _this.tblData.length;
                _this.totalList = _this.tblData.length;
                // this.feedbackservice.getCampaignByOrg().then(data => {
                // 	if(data['campaign']){
                // 		this.tblData = data['campaign'];
                // 		this.collectionSize = data['campaign'].length;
                // 		this.totalList = data['campaign'].length;
                // 	}
                // },
                // error => {
                // });
            }
        });
    };
    ManageformComponent.prototype.copyToClipboard = function (str) {
        var el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };
    ManageformComponent.prototype.openurl = function (id) {
        var encrpypt = btoa((id * 1000 * 10 * 5362).toString());
        var oi = localStorage.getItem('oi');
        this.copyToClipboard("http://localhost:4200/#/pages/feedbacksubmit?id=" + encrpypt + "&oi=" + oi);
        this.snotifyService.info('Copied Successfully', '', this.getConfig());
        //this.router.navigate(['/pages/feedbacksubmit'],{queryParams:{id:encrpypt}});
        // const copyToClipboard = str => {
        // 	const el = document.createElement('textarea');
        // 	el.value = str;
        // 	el.setAttribute('readonly', '');
        // 	el.style.position = 'absolute';
        // 	el.style.left = '-9999px';
        // 	document.body.appendChild(el);
        // 	el.select();
        // 	document.execCommand('copy');
        // 	document.body.removeChild(el);
        // };
    };
    ManageformComponent.prototype.open = function (formdata, content, title) {
        this.formTitle = title;
        //this.form = JSON.parse(formdata);
        this.form = formdata;
        this.modalService.open(content).result.then(function (result) {
            // this.closeResult = `Closed with: ${result}`;
        }, function (reason) {
            //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    };
    // openContent() {
    //     const modalRef = this.modalService.open(NgbdModalContent);
    //     modalRef.componentInstance.name = 'World';
    // }
    ManageformComponent.prototype.openurlModal = function (contenturl, id, name) {
        var encrpypt = btoa((id * 1000 * 10 * 5362).toString());
        this.modalTitle = name;
        //this.copyToClipboard("http://localhost:4200/#/pages/feedbacksubmit?id="+encrpypt);
        //let domain = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port : '');
        //this.exturl ="http://localhost:4200/#/pages/feedbacksubmit?id="+encrpypt;
        //this.exturl =domain+"/#/pages/feedbacksubmit?id="+encrpypt;
        var fullUrl = location.href;
        var splitUrl = fullUrl.split("#");
        var oi = localStorage.getItem('oi');
        this.exturl = splitUrl[0] + "#/pages/feedbacksubmit?id=" + encrpypt + "&oi=" + oi;
        this.iframecode = '<iframe src="' + this.exturl + '" scrolling="yes" id="zgfm-iframe-5" frameborder="0" style="border:none;width:100%;min-height:100px;height: 100%;position: absolute;" allowTransparency="true"></iframe>';
        this.modalService.open(contenturl).result.then(function (result) {
            //this.closeResult = `Closed with: ${result}`;
        }, function (reason) {
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    };
    ManageformComponent.prototype.getConfig = function () {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"])
    ], ManageformComponent.prototype, "table", void 0);
    ManageformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manageform',
            template: __webpack_require__(/*! ./manageform.component.html */ "./src/app/feedback/manageform/manageform.component.html"),
            styles: [__webpack_require__(/*! ./manageform.component.scss */ "./src/app/feedback/manageform/manageform.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_shared_data_feedback_service__WEBPACK_IMPORTED_MODULE_5__["FeedbackService"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ManageformComponent);
    return ManageformComponent;
}());



/***/ }),

/***/ "./src/app/feedback/renderform/renderform.component.html":
/*!***************************************************************!*\
  !*** ./src/app/feedback/renderform/renderform.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\r\n   <div class=\"form-group\">\r\n    <label for=\"field\">Select Form</label>\r\n\r\n    <select class=\"custom-select mb-2\"  (change)=\"onSelectFormName($event.target.value)\">\r\n     <option *ngFor=\"let item of formsData;let i = index\" value=\"{{i}}\" [selected]=\"i == 0\">{{item.name}}</option>\r\n   </select>\r\n </div>\r\n</div>\r\n<div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\r\n  <div class=\"form-group\">\r\n   <label for=\"field\">Fields</label>\r\n\r\n   <select class=\"custom-select mb-2\"  (change)=\"onSelectQuestion($event.target.value)\"  >\r\n\r\n    <option value=\"\">-- Select --</option>\r\n    <option *ngFor=\"let value of formsDataSelected\" value=\"{{value.key}}\" >{{value.label}}</option>\r\n\r\n    <!-- <optgroup *ngFor=\"let item of formsData\" label=\"{{item.name}}\"> -->\r\n     <!-- <option *ngFor=\"let value of formsDataSelected.form_data.components\" value=\"{{value.key}}\" >{{value.label}}</option> -->\r\n     <!-- </optgroup> -->\r\n   </select>\r\n </div>\r\n</div>\r\n</div>\r\n<div class=\"row\" matchHeight=\"card\">\r\n  <div class=\"col-xl-8 col-lg-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <div class=\"card-title-wrap bar-warning\">\r\n          <h4 class=\"card-title mb-0\"></h4>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"card-block\">\r\n          <div id=\"line-area6\" class=\"height-350 lineArea6 lineArea6Shadow\">\r\n            <x-chartist [data]=\"lineArea6.data\" [type]=\"lineArea6.type\" [options]=\"lineArea6.options\" [responsiveOptions]=\"lineArea6.responsiveOptions\"\r\n            [events]=\"lineArea6.events\">\r\n          </x-chartist>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/feedback/renderform/renderform.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/feedback/renderform/renderform.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlZWRiYWNrL3JlbmRlcmZvcm0vcmVuZGVyZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/feedback/renderform/renderform.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/feedback/renderform/renderform.component.ts ***!
  \*************************************************************/
/*! exports provided: RenderformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderformComponent", function() { return RenderformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_feedback_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/data/feedback.service */ "./src/app/shared/data/feedback.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RenderformComponent = /** @class */ (function () {
    function RenderformComponent(feedbackservice, snotifyService) {
        this.feedbackservice = feedbackservice;
        this.snotifyService = snotifyService;
        this.formsData = [];
        this.formsDataSelected = [];
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
        this.data = { "lineArea6": {
                "labels": [
                    'fgh',
                    'twfgo',
                    'gfh'
                ],
                "series": [
                    [
                        10,
                        20,
                        30
                    ]
                ]
            } };
        this.submissions = [];
        // Line with Area Chart 6 Starts
        this.lineArea6 = {
            type: 'Line',
            data: this.data['lineArea6'],
            options: {
                low: 0,
                fullWidth: true,
                showArea: true,
                onlyInteger: true,
                axisY: {
                    low: 0,
                    scaleMinSpace: 50,
                },
                axisX: {
                    showGrid: false
                },
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'linear6',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(45,121,255,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(249,81,255, 1)'
                    });
                    defs.elem('linearGradient', {
                        id: 'gradient6',
                        x1: 0,
                        y1: 0,
                        x2: 1,
                        y2: 0
                    }).elem('stop', {
                        offset: 0.2,
                        'stop-color': 'rgba(200,220,255, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(247,250,255, 1)'
                    });
                },
                draw: function (data) {
                    var circleRadius = 10;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_3__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: data.value.y === 15 ? 'ct-point-circle' : 'ct-point-circle-transperent'
                        });
                        data.element.replace(circle);
                    }
                }
            },
        };
    }
    RenderformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.feedbackservice.getCampaignByOrg().then(function (data) {
            if (data['campaign']) {
                _this.formsData = data['campaign'];
                console.log("ngOnInit" + JSON.stringify(_this.formsData));
                //to fill default values
                //this.formDataSelectedFull =this.formsData[0];
                //let inputTypes =["radio","select"];
                _this.formsDataSelected = _this.formsData[0]['form_data']['components'].filter(function (val) { return (val.key != 'submit' && (val.type == 'radio' || val.type == 'select')); });
            }
        }, function (error) {
        });
    };
    RenderformComponent.prototype.onSelectFormName = function (index) {
        //this.formsDataSelected = this.formsData[index]['form_data']['components'].filter(val => val.key !='submit');
        this.formsDataSelected = this.formsData[index]['form_data']['components'].filter(function (val) { return (val.key != 'submit' && (val.type == 'radio' || val.type == 'select')); });
        //this.formsDataSelected =this.formsData[index]['form_data']['components'].filter( this.inputTypes.indexOf((val => val.type).toString()) > -1);
        var id = btoa(this.formsData[index]['id'].toString());
        this.getSubmissions(id);
    };
    RenderformComponent.prototype.onSelectQuestion = function (keyVal) {
        var labelsObj = [];
        var valuesAll = [];
        var labels = [];
        var valuesCount = [];
        for (var i = 0; i < this.formsDataSelected.length; i++) {
            if (this.formsDataSelected[i]['key'] == keyVal) {
                if (this.formsDataSelected[i]['type'] == 'radio') {
                    labelsObj.push(this.formsDataSelected[i].values);
                    //labels.push(this.formsDataSelected[i].values[0][i]);	
                }
                if (this.formsDataSelected[i]['type'] == 'select') {
                    labelsObj.push(this.formsDataSelected[i]['data'].values);
                }
            }
        }
        var _loop_1 = function (i) {
            var myObj = JSON.parse(this_1.submissions[i]['sub_data']);
            var myData = myObj.data;
            Object.keys(myData).forEach(function (key) {
                if (key == keyVal) {
                    valuesAll.push(myData[key]);
                }
            });
        };
        var this_1 = this;
        //let subs = JSON.parse(this.submissions['sub_data']);
        for (var i = 0; i < this.submissions.length; i++) {
            _loop_1(i);
        }
        var counts = {};
        for (var i = 0; i < valuesAll.length; i++) {
            var num = valuesAll[i];
            counts[num] = counts[num] ? counts[num] + 1 : 1;
        }
        for (var i = 0; i < labelsObj[0].length; i++) {
            labels.push(labelsObj[0][i].label);
            var count = counts[labelsObj[0][i].value];
            if (count) {
                valuesCount.push(count);
            }
            else {
                valuesCount.push(0);
            }
        }
        this.data.lineArea6.labels = labels;
        this.data.lineArea6.series[0] = valuesCount;
        // Line with Area Chart 6 Starts
        this.lineArea6 = {
            type: 'Line',
            data: this.data['lineArea6'],
            options: {
                low: 0,
                fullWidth: true,
                showArea: true,
                onlyInteger: true,
                axisY: {
                    low: 0,
                    scaleMinSpace: 50,
                },
                axisX: {
                    showGrid: false
                },
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'linear6',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(45,121,255,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(249,81,255, 1)'
                    });
                    defs.elem('linearGradient', {
                        id: 'gradient6',
                        x1: 0,
                        y1: 0,
                        x2: 1,
                        y2: 0
                    }).elem('stop', {
                        offset: 0.2,
                        'stop-color': 'rgba(200,220,255, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(247,250,255, 1)'
                    });
                },
                draw: function (data) {
                    var circleRadius = 10;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_3__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: data.value.y === 15 ? 'ct-point-circle' : 'ct-point-circle-transperent'
                        });
                        data.element.replace(circle);
                    }
                }
            },
        };
        // Line with Area Chart 6 Ends
        console.log("labelsObj" + JSON.stringify(labelsObj));
        console.log("labels" + JSON.stringify(labels));
        console.log("valuesAll" + JSON.stringify(valuesAll));
        console.log("valuesCount" + JSON.stringify(valuesCount));
    };
    RenderformComponent.prototype.getSubmissions = function (id) {
        var _this = this;
        this.feedbackservice.getSubmissionsById(id).then(function (data) {
            //alert(JSON.stringify(data));
            console.log("getSubmissions" + JSON.stringify(data));
            if (data['status'] == "success") {
                _this.submissions = data['subs'];
                //console.log("submissions"+JSON.stringify(this.submissions));
            }
            // 		this.respdata = data['subs'];
            // 		if(this.respdata){
            // 			for(let i =0; i< this.respdata.length; i++){
            // 				if(i==0){
            // 					this.emptyMsg = false;
            // 					this.dataFromServer.length = 0;
            // 					let subs = JSON.parse(this.respdata[0]['sub_data']);
            // 					this.customHeaders = Object.keys(subs.data);
            // 					this.pdfheaders =Object.keys(subs.data);
            // 					this.customHeaders.sort();
            // 					this.formTitle= this.respdata[0]['name'];
            // 				}
            // 				let myObj = JSON.parse(this.respdata[i]['sub_data']);
            // 				let myData = myObj.data;
            // 				Object.keys(myData).forEach(key => {
            // 					if(typeof myData[key] == 'object'){
            // 						let subObj = myData[key];
            // 						console.log(JSON.stringify(subObj));
            // 					let mystr =[];
            // 						Object.keys(subObj).forEach(key1 => {
            // 							if(subObj[key1] == true){
            // 								mystr.push(key1);
            // 							}
            // 						})
            // 						myData[key] =mystr.toString();
            // 					}
            // 				});
            // 				this.dataFromServer.push(myData);
            // 		}
            // 	}
            // }
            // if(data['status'] =="invalid"){
            // 	this.emptyMsg = true;
            // }
        });
    };
    RenderformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-renderform',
            template: __webpack_require__(/*! ./renderform.component.html */ "./src/app/feedback/renderform/renderform.component.html"),
            styles: [__webpack_require__(/*! ./renderform.component.scss */ "./src/app/feedback/renderform/renderform.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_data_feedback_service__WEBPACK_IMPORTED_MODULE_1__["FeedbackService"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyService"]])
    ], RenderformComponent);
    return RenderformComponent;
}());



/***/ }),

/***/ "./src/app/feedback/viewsubmissions/viewsubmissions.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/feedback/viewsubmissions/viewsubmissions.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n  viewsubmissions works!\r\n  <ngx-data-table [data]=\"data\"></ngx-data-table>\r\n</p> -->\r\n\r\n<!--Basic DataTable Starts-->\r\n<section id=\"basic-datatable\" class=\"mb-3\">\r\n<!--     <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"content-header\">Basic DataTable</div>\r\n            <p class=\"content-sub-header\">A feature-rich yet lightweight data-table crafted for Angular4 and beyond!</p>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\" *ngIf=\"!emptyMsg\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                  <div class=\"card-title-wrap bar-info\">\r\n                    <h4 class=\"card-title\">{{formTitle}}  </h4>\r\n                  </div>\r\n                  <button class=\"mr-1\" (click)=\"ExportToPdf()\" tooltip=\"Export as PDF\">\r\n                    <i class=\"fas fa-file-pdf\"></i>\r\n                </button>\r\n                <button class=\"mr-1\" (click)=\"ExportTOExcel()\" tooltip=\"Export as Xlsx\">\r\n                    <i class=\"fas fa-file-excel\"></i>\r\n                </button>\r\n                <button (click)=\"ExportTOCsv()\" tooltip=\"Export as Csv\">\r\n                    <i class=\"fas fa-file-csv\"></i>\r\n                </button>\r\n\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                    \t<table class=\"table table-responsive-md text-center\">\r\n                    \t\t<thead>\r\n                    \t\t\t<tr>\r\n                    \t\t\t\t<th *ngFor=\"let key of headerLabels\">\r\n                    \t\t\t\t\t{{key}}\r\n                    \t\t\t\t</th>\r\n                    \t\t\t</tr> \r\n                    \t\t</thead>\r\n                    \t\t<tbody>\r\n                    \t\t\t<tr *ngFor=\"let datavalues of dataFromServer\">\r\n                    \t\t\t\t<td *ngFor=\"let item of datavalues | keyvalue\">\r\n                    \t\t\t\t\t{{item.value}}\r\n                                        <!-- <span *ngIf=\"!isObject(item.value)\">\r\n                                            {{item.value}}\r\n                                        </span>\r\n                                        <span *ngIf=\"isObject(item.value)\">\r\n                                            <span *ngFor=\"let chkvalues of item.value | keyvalue\">{{chkvalues.value}}</span>\r\n                                        </span> -->\r\n                                       <!--  {{isObject(item.value)}} -->\r\n                    \t\t\t\t</td>\r\n\r\n                    \t\t\t</tr>\r\n                    \t\t</tbody>\r\n                    \t</table>\r\n                       <!--  <ngx-datatable class=\"bootstrap\" [rows]=\"rows\" [loadingIndicator]=\"loadingIndicator\" [columns]=\"columns\" [columnMode]=\"'force'\"\r\n                            [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [reorderable]=\"reorderable\">\r\n                        </ngx-datatable> -->\r\n\r\n\r\n                        <!-- <json-table \r\n      [dataSource]=\"dataFromServer\"\r\n       [headers]=\"customHeaders\"\r\n      ></json-table> -->\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    <div class=\"col-sm-12\" *ngIf=\"emptyMsg\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <div class=\"card-title-wrap bar-info\">\r\n                    <h4 class=\"card-title\">No submissions found.</h4>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    </div>\r\n</section>\r\n<!--Basic DataTable Ends-->\r\n"

/***/ }),

/***/ "./src/app/feedback/viewsubmissions/viewsubmissions.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/feedback/viewsubmissions/viewsubmissions.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlZWRiYWNrL3ZpZXdzdWJtaXNzaW9ucy92aWV3c3VibWlzc2lvbnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/feedback/viewsubmissions/viewsubmissions.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/feedback/viewsubmissions/viewsubmissions.component.ts ***!
  \***********************************************************************/
/*! exports provided: ViewsubmissionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsubmissionsComponent", function() { return ViewsubmissionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_data_feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data/feedback.service */ "./src/app/shared/data/feedback.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import * as FileSaver from 'file-saver';



var ViewsubmissionsComponent = /** @class */ (function () {
    // @ViewChild(DatatableComponent) table: DatatableComponent;
    function ViewsubmissionsComponent(feedbackservice, snotifyService, router, route) {
        var _this = this;
        this.feedbackservice = feedbackservice;
        this.snotifyService = snotifyService;
        this.router = router;
        this.route = route;
        this.mydata = {
            id: 0
        };
        this.campaignheaders = [];
        this.campaignData = [];
        this.respdata = [];
        this.emptyMsg = false;
        this.formTitle = '';
        //EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        //EXCEL_EXTENSION = '.xlsx';
        // data: any[] = [
        // {
        // 	"name": "Ethel Price",
        // 	"gender": "female",
        // 	"company": "Johnson, Johnson and Partners, LLC CMP DDC",
        // 	"age": 22
        // },
        // {
        // 	"name": "Claudine Neal",
        // 	"gender": "female",
        // 	"company": "Sealoud",
        // 	"age": 55
        // },
        // {
        // 	"name": "Beryl Rice",
        // 	"gender": "female",
        // 	"company": "Velity",
        // 	"age": 67
        // }
        // ];
        this.rows = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.columns = [];
        this.customHeaders = [];
        this.dataFromServer = [];
        this.pdfheaders = [];
        this.headerLabels = [];
        this.route.queryParams.subscribe(function (params) {
            var decrpypt = atob(params['id']);
            var formId = parseInt(decrpypt);
            _this.mydata.id = formId / 53620000;
        });
        var id = btoa(this.mydata.id.toString());
        var orgId = localStorage.getItem('oi');
        // this.customHeaders = {
        //   thead: ['CUSTOM NAME 1', 'SOME COOL NAME', 'ANOTHER NAME'], // the Column Name in table head.
        //   displayed: ['someFeild1', 'someFeild2', 'someFeild3'] // the data it should populate in table.
        // };
        // this.dataFromServer =
        //   [{
        //     'id': 20,
        //     'someFeild1': 'asdfasdf',
        //     'someFeild2': 'asdf',
        //     'someFeild3': 'asdfasdfasfasdfa',
        //     },
        //    {
        //     'id': 81,
        //     'someFeild1': 'aasdfsdf',
        //     'someFeild2': 'asasdfdf',
        //     'someFeild3': 'dfasfasdfa',
        //     }, 
        //   ];
        // this.customHeaders = ['someFeild1', 'someFeild2'];
        // this.dataFromServer =
        // [{
        // 	'id': 20,
        // 	'someFeild1': 'asdfasdf',
        // 	'someFeild2': 'asdf',
        // 	'someFeild3': 'asdfasdfasfasdfa',
        // },
        // {
        // 	'id': 81,
        // 	'someFeild1': 'aasdfsdf',
        // 	'someFeild2': 'asasdfdf',
        // 	'someFeild3': 'dfasfasdfa',
        // }, 
        // ];
        this.feedbackservice.getCampaignById(id, orgId).then(function (data) {
            _this.form = JSON.parse(data['campaign'][0].form_data);
            var components = _this.form['components'];
            //second api call 
            _this.feedbackservice.getSubmissionsById(id).then(function (data) {
                if (data['status'] == "success") {
                    _this.respdata = data['subs'];
                    if (_this.respdata) {
                        var _loop_1 = function (i) {
                            if (i == 0) {
                                _this.emptyMsg = false;
                                _this.dataFromServer.length = 0;
                                var subs = JSON.parse(_this.respdata[0]['sub_data']);
                                _this.customHeaders = Object.keys(subs.data);
                                _this.pdfheaders = Object.keys(subs.data);
                                _this.customHeaders.sort();
                                _this.formTitle = _this.respdata[0]['name'];
                                for (var y = 0; y < _this.customHeaders.length; y++) {
                                    for (var z = 0; z < components.length; z++) {
                                        if (components[z]['key'] == _this.customHeaders[y]) {
                                            _this.headerLabels.push(components[z]['label']);
                                        }
                                    }
                                }
                            }
                            var myObj = JSON.parse(_this.respdata[i]['sub_data']);
                            var myData = myObj.data;
                            Object.keys(myData).forEach(function (key) {
                                if (typeof myData[key] == 'object') {
                                    var subObj_1 = myData[key];
                                    console.log(JSON.stringify(subObj_1));
                                    var mystr_1 = [];
                                    Object.keys(subObj_1).forEach(function (key1) {
                                        if (subObj_1[key1] == true) {
                                            mystr_1.push(key1);
                                        }
                                    });
                                    myData[key] = mystr_1.toString();
                                }
                            });
                            //this.dataFromServer.push(myObj.data);
                            _this.dataFromServer.push(myData);
                            // this.customHeaders.forEach((item,index) =>{
                            // 	alert(item);
                            // 	alert(typeof myObj[item);
                            // })
                            //this.dataFromServer.push(Object..values(myObj.data))
                            //console.log(JSON.stringify(this.customHeaders));
                            //console.log(JSON.stringify(this.dataFromServer));
                        };
                        for (var i = 0; i < _this.respdata.length; i++) {
                            _loop_1(i);
                        }
                    }
                }
                if (data['status'] == "invalid") {
                    _this.emptyMsg = true;
                }
            });
            //this.campaignData= respdata
            // console.log(this.columns);
            //  this.rows = this.data;
            //this.form = [];
            //this.form = JSON.parse(data['campaign'][0].form_data);//)
            //this.formTitle= data['campaign'][0].name;
            //this.campaignData =  JSON.parse(data['campaign'].form_data);
            //this.form = this.campaignData[0].form_data;
            //this.formTitle= this.campaignData[0].name;
            // this.feedbackservice.getCampaignById(id).then(data => {
            // 	this.form = JSON.parse(data['campaign'][0].form_data);
            // 	let components = this.form['components'];
            // 	for(let i =0; i< components.length; i++){
            // 		if(components[i]['key']=='address'){
            // 		}
            // 		console.log(JSON.stringify(submission));
            // 		if(components[i]['type']=='address'){
            // 			addressKey.push(components[i]['key']);
            // 		}
            // 	}
            //})
            //this.formTitle= data['campaign'][0].name;
            //this.campaignData =  JSON.parse(data['campaign'].form_data);
            //this.form = this.campaignData[0].form_data;
            //this.formTitle= this.campaignData[0].name;
        });
    }
    // isObject(val) { 
    // 	alert(typeof val);
    // 	let myVal = val;
    // 	if(typeof val === 'object'){
    // 		myVal = myVal.toString();
    // 	}
    // 	return myVal; 
    // }
    ViewsubmissionsComponent.prototype.isObject = function (val) {
        if (typeof val === 'object') {
            return true;
        }
        return false;
    };
    ViewsubmissionsComponent.prototype.ngOnInit = function () {
    };
    // exportAsExcelFile(json: any[], excelFileName: string): void {
    // 	const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    // 	const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    // 	const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    // 	this.saveAsExcelFile(excelBuffer, excelFileName);
    // }
    // saveAsExcelFile(buffer: any, fileName: string): void {
    // 	const data: Blob = new Blob([buffer], {type: this.EXCEL_TYPE});
    // 	FileSaver.saveAs(data, fileName + '_export_' + new  Date().getTime() + this.EXCEL_EXTENSION);
    // }
    ViewsubmissionsComponent.prototype.ExportTOExcel = function () {
        //	this.exportAsExcelFile(this.dataFromServer, 'submissions');
        var workBook = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_new();
        var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].json_to_sheet(this.dataFromServer);
        xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_append_sheet(workBook, workSheet, 'data');
        xlsx__WEBPACK_IMPORTED_MODULE_4__["writeFile"](workBook, 'renewal_' + new Date().getTime() + '.xlsx');
    };
    ViewsubmissionsComponent.prototype.ExportTOCsv = function () {
        var workBook = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_new();
        var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].json_to_sheet(this.dataFromServer);
        var csv = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].sheet_to_csv(workSheet);
        xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_append_sheet(workBook, workSheet, 'data');
        xlsx__WEBPACK_IMPORTED_MODULE_4__["writeFile"](workBook, 'renewal_' + new Date().getTime() + '.csv');
    };
    ViewsubmissionsComponent.prototype.ExportToPdf = function () {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_5__();
        var col = this.pdfheaders;
        var rows = [];
        this.dataFromServer.forEach(function (element) {
            var row = [];
            for (var key in element) {
                var temp = [element[key]];
                row.push(temp);
            }
            rows.push(row);
            // var temp = [element.loyalty, element.points_redeemed, element.user_id, element.remaining_points, element.redeemed_on, element.expiry_date];
            // rows.push(temp);
        });
        doc.autoTable(col, rows, { startY: 10 });
        doc.save('renewal_' + new Date().getTime() + '.pdf');
    };
    ViewsubmissionsComponent.prototype.deleteByIdS = function (ids) {
        //console.log(id); // this function gives the ID of deleted rows.. as an array
    };
    ViewsubmissionsComponent.prototype.updateChanges = function (row) {
        // console.log(row); // This return the row which is updated with the id.
    };
    ViewsubmissionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewsubmissions',
            template: __webpack_require__(/*! ./viewsubmissions.component.html */ "./src/app/feedback/viewsubmissions/viewsubmissions.component.html"),
            styles: [__webpack_require__(/*! ./viewsubmissions.component.scss */ "./src/app/feedback/viewsubmissions/viewsubmissions.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_data_feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ViewsubmissionsComponent);
    return ViewsubmissionsComponent;
}());



/***/ }),

/***/ "./src/app/shared/configs/ngx-charts.config.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/configs/ngx-charts.config.ts ***!
  \*****************************************************/
/*! exports provided: barChartView, barChartShowXAxis, barChartShowYAxis, barChartGradient, barChartShowLegend, barChartShowXAxisLabel, barChartXAxisLabel, barChartShowYAxisLabel, barChartYAxisLabel, barChartColorScheme, pieChartView, pieChartShowLegend, pieChartColorScheme, pieChartShowLabels, pieChartExplodeSlices, pieChartDoughnut, pieChartGradient, pieChart1ExplodeSlices, pieChart1Doughnut, lineChartView, lineChartShowXAxis, lineChartShowYAxis, lineChartGradient, lineChartShowLegend, lineChartShowXAxisLabel, lineChartXAxisLabel, lineChartShowYAxisLabel, lineChartYAxisLabel, lineChartColorScheme, lineChartAutoScale, lineChartLineInterpolation, areaChartView, areaChartShowXAxis, areaChartShowYAxis, areaChartGradient, areaChartShowLegend, areaChartShowXAxisLabel, areaChartXAxisLabel, areaChartShowYAxisLabel, areaChartYAxisLabel, areaChartColorScheme, areaChartAutoScale, areaChartLineInterpolation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartView", function() { return barChartView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartShowXAxis", function() { return barChartShowXAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartShowYAxis", function() { return barChartShowYAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartGradient", function() { return barChartGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartShowLegend", function() { return barChartShowLegend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartShowXAxisLabel", function() { return barChartShowXAxisLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartXAxisLabel", function() { return barChartXAxisLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartShowYAxisLabel", function() { return barChartShowYAxisLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartYAxisLabel", function() { return barChartYAxisLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartColorScheme", function() { return barChartColorScheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartView", function() { return pieChartView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartShowLegend", function() { return pieChartShowLegend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartColorScheme", function() { return pieChartColorScheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartShowLabels", function() { return pieChartShowLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartExplodeSlices", function() { return pieChartExplodeSlices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartDoughnut", function() { return pieChartDoughnut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartGradient", function() { return pieChartGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChart1ExplodeSlices", function() { return pieChart1ExplodeSlices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChart1Doughnut", function() { return pieChart1Doughnut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartView", function() { return lineChartView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartShowXAxis", function() { return lineChartShowXAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartShowYAxis", function() { return lineChartShowYAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartGradient", function() { return lineChartGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartShowLegend", function() { return lineChartShowLegend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartShowXAxisLabel", function() { return lineChartShowXAxisLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartXAxisLabel", function() { return lineChartXAxisLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartShowYAxisLabel", function() { return lineChartShowYAxisLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartYAxisLabel", function() { return lineChartYAxisLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartColorScheme", function() { return lineChartColorScheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartAutoScale", function() { return lineChartAutoScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChartLineInterpolation", function() { return lineChartLineInterpolation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartView", function() { return areaChartView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartShowXAxis", function() { return areaChartShowXAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartShowYAxis", function() { return areaChartShowYAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartGradient", function() { return areaChartGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartShowLegend", function() { return areaChartShowLegend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartShowXAxisLabel", function() { return areaChartShowXAxisLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartXAxisLabel", function() { return areaChartXAxisLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartShowYAxisLabel", function() { return areaChartShowYAxisLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartYAxisLabel", function() { return areaChartYAxisLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartColorScheme", function() { return areaChartColorScheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartAutoScale", function() { return areaChartAutoScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaChartLineInterpolation", function() { return areaChartLineInterpolation; });
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");

//Bar Chart
var barChartView = [550, 400];
// options
var barChartShowXAxis = true;
var barChartShowYAxis = true;
var barChartGradient = false;
var barChartShowLegend = false;
var barChartShowXAxisLabel = true;
var barChartXAxisLabel = 'Country';
var barChartShowYAxisLabel = true;
var barChartYAxisLabel = 'Population';
var barChartColorScheme = {
    domain: ['#666EE8', '#28D094', '#FF9149', '#AAAAAA']
};
//Pie CHart
var pieChartView = [550, 400];
// options
var pieChartShowLegend = false;
var pieChartColorScheme = {
    domain: ['#666EE8', '#28D094', '#FF4961', '#AAAAAA']
};
// pie
var pieChartShowLabels = true;
var pieChartExplodeSlices = false;
var pieChartDoughnut = true;
var pieChartGradient = false;
var pieChart1ExplodeSlices = true;
var pieChart1Doughnut = false;
//Line Charts
var lineChartView = [550, 400];
// options
var lineChartShowXAxis = true;
var lineChartShowYAxis = true;
var lineChartGradient = false;
var lineChartShowLegend = false;
var lineChartShowXAxisLabel = true;
var lineChartXAxisLabel = 'Country';
var lineChartShowYAxisLabel = true;
var lineChartYAxisLabel = 'Population';
var lineChartColorScheme = {
    domain: ['#666EE8', '#FF9149', '#FF4961', '#AAAAAA']
};
// line, area
var lineChartAutoScale = true;
var lineChartLineInterpolation = d3_shape__WEBPACK_IMPORTED_MODULE_0__["curveBasis"];
//Area Charts
var areaChartView = [550, 400];
// options
var areaChartShowXAxis = true;
var areaChartShowYAxis = true;
var areaChartGradient = false;
var areaChartShowLegend = false;
var areaChartShowXAxisLabel = true;
var areaChartXAxisLabel = 'Country';
var areaChartShowYAxisLabel = true;
var areaChartYAxisLabel = 'Population';
var areaChartColorScheme = {
    domain: ['#FF9149', '#1E9FF2', '#1CBCD8', '#AAAAAA']
};
// line, area
var areaChartAutoScale = true;
var areaChartLineInterpolation = d3_shape__WEBPACK_IMPORTED_MODULE_0__["curveBasis"];


/***/ })

}]);
//# sourceMappingURL=feedback-feedback-module.js.map