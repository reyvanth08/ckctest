(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subscription-subscription-module"],{

/***/ "./src/app/shared/directives/match-height.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/match-height.directive.ts ***!
  \*************************************************************/
/*! exports provided: MatchHeightDirective, MatchHeightModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchHeightDirective", function() { return MatchHeightDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchHeightModule", function() { return MatchHeightModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MatchHeightDirective = /** @class */ (function () {
    function MatchHeightDirective(el) {
        this.el = el;
    }
    MatchHeightDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        // call our matchHeight function here
        setTimeout(function () { _this.matchHeights(_this.el.nativeElement, _this.matchHeight); }, 300);
    };
    MatchHeightDirective.prototype.matchHeights = function (parent, className) {
        // match height logic here
        if (!parent)
            return;
        // step 1: find all the child elements with the selected class name
        var children = parent.getElementsByClassName(className);
        if (!children)
            return;
        //PIXINVENT - Match hight - fix --- comment below code
        Array.from(children).forEach(function (x) {
            x.style.height = 'initial';
        });
        // step 2a: get all the child elements heights
        var itemHeights = Array.from(children)
            .map(function (x) { return x.getBoundingClientRect().height; });
        // step 2b: find out the tallest
        var maxHeight = itemHeights.reduce(function (prev, curr) {
            return curr > prev ? curr : prev;
        }, 0);
        // step 3: update all the child elements to the tallest height
        Array.from(children)
            .forEach(function (x) { return x.style.height = maxHeight + "px"; });
    };
    MatchHeightDirective.prototype.onResize = function () {
        // call our matchHeight function here
        this.matchHeights(this.el.nativeElement, this.matchHeight);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MatchHeightDirective.prototype, "matchHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MatchHeightDirective.prototype, "onResize", null);
    MatchHeightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[matchHeight]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], MatchHeightDirective);
    return MatchHeightDirective;
}());

var MatchHeightModule = /** @class */ (function () {
    function MatchHeightModule() {
    }
    MatchHeightModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [MatchHeightDirective],
            exports: [MatchHeightDirective]
        })
    ], MatchHeightModule);
    return MatchHeightModule;
}());



/***/ }),

/***/ "./src/app/subscription/subscription-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/subscription/subscription-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SubscriptionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionRoutingModule", function() { return SubscriptionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _subscription_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscription.component */ "./src/app/subscription/subscription.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        // path: '',
        // children: [{
        //     path: 'cards',
        //     component: CardsComponent
        // }
        // ]
        path: '',
        component: _subscription_component__WEBPACK_IMPORTED_MODULE_2__["SubscriptionComponent"],
        data: {
            title: 'Subscription'
        },
    }
];
var SubscriptionRoutingModule = /** @class */ (function () {
    function SubscriptionRoutingModule() {
    }
    SubscriptionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], SubscriptionRoutingModule);
    return SubscriptionRoutingModule;
}());



/***/ }),

/***/ "./src/app/subscription/subscription.component.html":
/*!**********************************************************!*\
  !*** ./src/app/subscription/subscription.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"content-header\">Subscription</div>\r\n    </div>\r\n</div>\r\n<section id=\"ngx\">\r\n    <div class=\"card\" *ngIf=\"!viewForm\">\r\n        <div class=\"card-header\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <p>List of Subscriptions</p>\r\n                </div>\r\n                <div class=\"col-sm-6\" style=\"text-align: right;\">\r\n                    <p>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-bitbucket right\" (click)=\"addSubscription()\"><span class=\"ft-plus\"></span>Add Subscription</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <ngx-datatable #table class='bootstrap' [rows]=\"rows\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"10\"></ngx-datatable>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\" *ngIf=\"viewForm\">\r\n        <div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n                <form  [formGroup]=\"personalForm\" class=\"editForm\" novalidate>\r\n                            <!-- <h4 class=\"head text-center\">Select the type of Subscription</h4>\r\n                            <br/> -->\r\n                            <div class='row'>\r\n                                <div class='col-12'>\r\n                                \t<div class=\"form-group\">\r\n                                        <label class=\"form-control-label\" for=\"type\">Subscription Type</label>\r\n                                        <input class=\"form-control input-md\" required formControlName=\"type\" type=\"text\">\r\n                                        <small class=\"form-text text-muted danger\" *ngIf=\"!personalForm.get('type').valid && (personalForm.get('type').dirty || personalForm.get('type').touched)\">This field is required!</small>\r\n                                    </div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n                                        <label class=\"form-control-label\" for=\"campaign\">Maximum Campaign</label>\r\n                                        <input class=\"form-control input-md\" required formControlName=\"campaign\" type=\"number\">\r\n                                        <small class=\"form-text text-muted danger\" *ngIf=\"!personalForm.get('campaign').valid && (personalForm.get('campaign').dirty || personalForm.get('campaign').touched)\">This field is required!</small>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"form-control-label\" for=\"members\">Maximum Members</label>\r\n                                        <input class=\"form-control input-md\" required formControlName=\"members\" type=\"number\">\r\n                                        <small class=\"form-text text-muted danger\" *ngIf=\"!personalForm.get('members').valid && (personalForm.get('members').dirty || personalForm.get('members').touched)\">This field is required!</small>\r\n                                    </div>\r\n                                    <div class=\"form-group text-center\">\r\n                                    \t<button type=\"submit\" class=\"btn btn-danger btn-raised mr-1\" (click)=\"cancel()\">Cancel</button>\r\n                                        <button type=\"submit\" class=\"btn btn-success btn-raised\" (click)=\"saveSubscription()\" [disabled]=\"!personalForm.valid\">Save <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i></button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/subscription/subscription.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/subscription/subscription.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmlwdGlvbi9zdWJzY3JpcHRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/subscription/subscription.component.ts":
/*!********************************************************!*\
  !*** ./src/app/subscription/subscription.component.ts ***!
  \********************************************************/
/*! exports provided: SubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionComponent", function() { return SubscriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable/release */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_data_subscription_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/data/subscription.service */ "./src/app/shared/data/subscription.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubscriptionComponent = /** @class */ (function () {
    function SubscriptionComponent(subscriptionService) {
        var _this = this;
        this.subscriptionService = subscriptionService;
        this.subscribers = [];
        this.submitted = false;
        this.viewForm = false;
        this.columns = [
            { prop: 'type' },
            { prop: 'noOfCampaign' },
            { prop: 'noOfMembers' }
        ];
        this.subscriptionService.getSubscription(new Date().getTime()).then(function (data) {
            _this.subscriptionList = data['subscription'];
            if (data['subscription']) {
                for (var i = 0; i < data['subscription'].length; i++) {
                    var array = {
                        type: data['subscription'][i]['type'],
                        noOfCampaign: data['subscription'][i]['campaign'],
                        noOfMembers: data['subscription'][i]['members']
                    };
                    _this.subscribers.push(array);
                }
                _this.rows = _this.subscribers;
            }
        });
    }
    SubscriptionComponent.prototype.ngOnInit = function () {
        this.personalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'type': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'campaign': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'members': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        }, { updateOn: 'blur' });
    };
    SubscriptionComponent.prototype.addSubscription = function () {
        this.viewForm = true;
        this.personalForm.reset();
    };
    SubscriptionComponent.prototype.cancel = function () {
        this.viewForm = false;
        this.personalForm.reset();
    };
    SubscriptionComponent.prototype.saveSubscription = function () {
        var _this = this;
        this.submitted = true;
        var subscriptionDetail = {
            'type': this.personalForm.controls['type'].value,
            'campaign': this.personalForm.controls['campaign'].value,
            'members': this.personalForm.controls['members'].value
        };
        this.subscriptionService.saveSubscription(subscriptionDetail).then(function (data) {
            if (data['status']) {
                console.log('Came here!');
                _this.submitted = false;
                _this.viewForm = false;
                _this.subscribers = [];
                _this.rows = [];
                _this.subscriptionService.getSubscription(new Date().getTime()).then(function (data) {
                    _this.subscriptionList = data['subscription'];
                    if (data['subscription']) {
                        for (var i = 0; i < data['subscription'].length; i++) {
                            var array = {
                                type: data['subscription'][i]['type'],
                                noOfCampaign: data['subscription'][i]['campaign'],
                                noOfMembers: data['subscription'][i]['members']
                            };
                            _this.subscribers.push(array);
                        }
                        _this.rows = _this.subscribers;
                    }
                });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"])
    ], SubscriptionComponent.prototype, "table", void 0);
    SubscriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subscription',
            template: __webpack_require__(/*! ./subscription.component.html */ "./src/app/subscription/subscription.component.html"),
            styles: [__webpack_require__(/*! ./subscription.component.scss */ "./src/app/subscription/subscription.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_data_subscription_service__WEBPACK_IMPORTED_MODULE_3__["SubscriptionService"]])
    ], SubscriptionComponent);
    return SubscriptionComponent;
}());



/***/ }),

/***/ "./src/app/subscription/subscription.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/subscription/subscription.module.ts ***!
  \*****************************************************/
/*! exports provided: SubscriptionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionModule", function() { return SubscriptionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _subscription_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscription-routing.module */ "./src/app/subscription/subscription-routing.module.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/directives/match-height.directive */ "./src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var _subscription_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subscription.component */ "./src/app/subscription/subscription.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SubscriptionModule = /** @class */ (function () {
    function SubscriptionModule() {
    }
    SubscriptionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _subscription_routing_module__WEBPACK_IMPORTED_MODULE_4__["SubscriptionRoutingModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_7__["MatchHeightModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ngx_ui_switch__WEBPACK_IMPORTED_MODULE_10__["UiSwitchModule"],
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_2__["GooglePlaceModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"]
            ],
            declarations: [
                _subscription_component__WEBPACK_IMPORTED_MODULE_8__["SubscriptionComponent"],
            ]
        })
    ], SubscriptionModule);
    return SubscriptionModule;
}());



/***/ })

}]);
//# sourceMappingURL=subscription-subscription-module.js.map