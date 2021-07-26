(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["organization-organization-module"],{

/***/ "./src/app/organization/organization-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/organization/organization-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: OrganizationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationRoutingModule", function() { return OrganizationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _organization_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./organization.component */ "./src/app/organization/organization.component.ts");
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
        component: _organization_component__WEBPACK_IMPORTED_MODULE_2__["OrganizationComponent"],
        data: {
            title: 'Organization'
        },
    }
];
var OrganizationRoutingModule = /** @class */ (function () {
    function OrganizationRoutingModule() {
    }
    OrganizationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], OrganizationRoutingModule);
    return OrganizationRoutingModule;
}());



/***/ }),

/***/ "./src/app/organization/organization.component.html":
/*!**********************************************************!*\
  !*** ./src/app/organization/organization.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"basic-elements\">\r\n    <div class=\"row\" *ngIf=\"!showOrg\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"content-header\">Organizations</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"showOrg\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"content-header\">Edit Organization</div>\r\n        </div>\r\n    </div>\r\n\t<div class=\"row\" *ngIf=\"!showOrg && !showForm\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <p>List of Organizations</p>\r\n                        </div>\r\n                        <div class=\"col-sm-6\" style=\"text-align: right;\">\r\n                            <p>\r\n                                <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-bitbucket right\" (click)=\"createOrg()\"><span class=\"ft-plus\"></span>Create Organization</a>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n\r\n                            <!-- <ngx-datatable #table class='bootstrap' [rows]=\"rows\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"10\">\r\n                            </ngx-datatable> -->\r\n                            <table class=\"table table-responsive-sm\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Organization Name</th>\r\n                                        <th>Organization Email</th>\r\n                                        <th>Organization Phone</th>\r\n                                        <th>Organization Address</th>\r\n                                        <th>Action</th>\r\n                                        <th>Enable/Disable</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let data of organizations\">\r\n                                        <td>{{data.name}}</td>\r\n                                        <td>{{data.email}}</td>\r\n                                        <td>{{data.phone}}</td>\r\n                                        <td>{{data.address}}</td>\r\n                                        <td>\r\n                                            <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"editOrganization(data.id)\">\r\n                                                <i class=\"fas fa-pencil-alt font-medium-3 mr-2\"></i>\r\n                                            </a>\r\n                                            <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"viewOrganization(data.id)\">\r\n                                                <i class=\"ft-eye font-medium-3 mr-2\"></i>\r\n                                            </a>\r\n                                        </td>\r\n                                        <td>\r\n\t\t\t\t\t\t\t\t\t        <ui-switch [(ngModel)]=\"data.status\" (ngModelChange)=\"onChange(this.data.status,data.id)\"></ui-switch>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"showOrg && !showForm\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <ngb-tabset>\r\n                            <ngb-tab title=\"Overview\">\r\n                                <ng-template ngbTabContent>\r\n                                    <form [formGroup]=\"organizationForm\" novalidate>\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"orgName\">Organization Name</label>\r\n                                            <input type=\"text\" class=\"form-control\" id=\"orgName\" formControlName=\"orgName\" [(ngModel)]=\"organization.orgName\" required>\r\n                                            <small class=\"form-text text-muted danger\" *ngIf=\"!organizationForm.get('orgName').valid && (organizationForm.get('orgName').dirty || organizationForm.get('orgName').touched)\">This field is required!</small>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"orgEmail\">Email</label>\r\n                                            <input type=\"email\" class=\"form-control\" id=\"orgEmail\" formControlName=\"orgEmail\" [(ngModel)]=\"organization.orgEmail\" required>\r\n                                            <small class=\"form-text text-muted danger\" *ngIf=\"!organizationForm.get('orgEmail').valid && (organizationForm.get('orgEmail').dirty || organizationForm.get('orgEmail').touched)\">This field is required!</small>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"orgPhone\">Phone</label>\r\n                                            <div class=\"input-group\">\r\n                                            <input type=\"number\" id=\"orgPhone\" class=\"form-control\" formControlName=\"orgPhone\" [(ngModel)]=\"organization.orgPhone\" required>\r\n                                            </div>\r\n                                            <small class=\"form-text text-muted danger\" *ngIf=\"!organizationForm.get('orgPhone').valid && (organizationForm.get('orgPhone').dirty || organizationForm.get('orgPhone').touched)\">This field is required!</small>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <label for=\"orgAddress\">Address</label>\r\n                                            <div class=\"input-group\">\r\n                                            <input type=\"text\" id=\"orgAddress\" class=\"form-control\" formControlName=\"orgAddress\" [(ngModel)]=\"organization.orgAddress\" ngx-google-places-autocomplete [options]='options' #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\">\r\n                                            </div>\r\n                                            <small class=\"form-text text-muted danger\" *ngIf=\"!organizationForm.get('orgAddress').valid && (organizationForm.get('orgAddress').dirty || organizationForm.get('orgAddress').touched)\">This field is required!</small>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group\">\r\n                                            <button type=\"submit\" class=\"btn btn-danger btn-raised mr-1\" (click)=\"cancel()\">Cancel</button>\r\n                                            <button type=\"submit\" *ngIf=\"save\" class=\"btn btn-success btn-raised\" (click)=\"saveOrganization()\" [disabled]=\"!organizationForm.valid\">Submit<i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i></button>\r\n                                            <button type=\"submit\" *ngIf=\"!save\" class=\"btn btn-success btn-raised\" (click)=\"saveOrganization()\" [disabled]=\"!organizationForm.valid\">Update<i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i></button>\r\n                                        </div>\r\n                                    </form>\r\n                                </ng-template>\r\n                            </ngb-tab>\r\n                            <ngb-tab title=\"Admin\">\r\n                                <ng-template ngbTabContent>\r\n                                    <ngx-datatable #table class='bootstrap' [rows]=\"rows\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"10\">\r\n                                    </ngx-datatable>\r\n                                </ng-template>\r\n                            </ngb-tab>\r\n                            <ngb-tab title=\"Subscribers\">\r\n                                <ng-template ngbTabContent>\r\n                                    <ngx-datatable #table class='bootstrap' [rows]=\"rows1\" [columns]=\"columns1\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"10\">\r\n                                    </ngx-datatable>\r\n                                </ng-template>\r\n                            </ngb-tab>\r\n                        </ngb-tabset>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"showForm\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                      <aw-wizard #wizard navBarLayout=\"large-empty-symbols\">\r\n                          <aw-wizard-step [stepTitle]=\"'Organization Details'\" [navigationSymbol]=\"{ symbol: '&#xf007;', fontFamily: 'FontAwesome' }\">\r\n                        <form [formGroup]=\"organizationForm\" novalidate>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"orgName\">Organization Name</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"orgName\" formControlName=\"orgName\" [(ngModel)]=\"organization.orgName\" required>\r\n                                <small class=\"form-text text-muted danger\" *ngIf=\"!organizationForm.get('orgName').valid && (organizationForm.get('orgName').dirty || organizationForm.get('orgName').touched)\">This field is required!</small>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"orgEmail\">Email</label>\r\n                                <input type=\"email\" class=\"form-control\" id=\"orgEmail\" formControlName=\"orgEmail\" [(ngModel)]=\"organization.orgEmail\" required>\r\n                                <small class=\"form-text text-muted danger\" *ngIf=\"!organizationForm.get('orgEmail').valid && (organizationForm.get('orgEmail').dirty || organizationForm.get('orgEmail').touched)\">This field is required!</small>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"orgPhone\">Phone</label>\r\n                                <div class=\"input-group\">\r\n                                <input type=\"number\" id=\"orgPhone\" class=\"form-control\" formControlName=\"orgPhone\" [(ngModel)]=\"organization.orgPhone\" required>\r\n                                </div>\r\n                                <small class=\"form-text text-muted danger\" *ngIf=\"!organizationForm.get('orgPhone').valid && (organizationForm.get('orgPhone').dirty || organizationForm.get('orgPhone').touched)\">This field is required!</small>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"orgAddress\">Address</label>\r\n                                <div class=\"input-group\">\r\n                                <input type=\"text\" id=\"orgAddress\" class=\"form-control\" formControlName=\"orgAddress\" [(ngModel)]=\"organization.orgAddress\" ngx-google-places-autocomplete [options]='options' #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\">\r\n                                </div>\r\n                                <small class=\"form-text text-muted danger\" *ngIf=\"!organizationForm.get('orgAddress').valid && (organizationForm.get('orgAddress').dirty || organizationForm.get('orgAddress').touched)\">This field is required!</small>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <button type=\"submit\" class=\"btn btn-danger btn-raised mr-1\" (click)=\"cancel()\">Cancel</button>\r\n                                <button type=\"button\" uiSref=\"work\" class=\"btn btn-success btn-raised\"  [disabled]=\"!organizationForm.valid\" awNextStep>Next<i  class=\"ft-chevron-right\"></i></button>\r\n                            </div>\r\n                        </form>\r\n                      </aw-wizard-step>\r\n                      <aw-wizard-step  [stepTitle]=\"'Enable Module'\" [navigationSymbol]=\"{ symbol: '&#xf0b1;', fontFamily: 'FontAwesome' }\">\r\n\r\n                        <div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                  <form class=\"form\" #moduleForm=\"ngForm\">\r\n                                    <div class=\"col-sm-12\">\r\n                                      <div class=\"card\">\r\n                                        <div class=\"card-body\">\r\n                                          <div class=\"card-block\">\r\n                                            <div class=\"col-sm-12\">\r\n                                              <button type=\"button\" class=\"btn mt-2\" [ngClass]=\"(module.emailManagement)?'btn-primary' : 'btn-outline-primary'\" name=\"emailManagement\" (click)=\"module.emailManagement = !module.emailManagement\"\r\n                                                      [attr.aria-expanded]=\"!module.emailManagement\" aria-controls=\"emailManagementcollapse\">\r\n                                                Email Management\r\n                                              </button>\r\n                                            </div>\r\n                                            <div class=\"col-sm-12\" id=\"emailManagementcollapse\" [ngbCollapse]=\"!module.emailManagement\">\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                      <label for=\"newsletter\">Newsletter</label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <ui-switch id=\"newsletter\" name=\"newsletter\" [(ngModel)]=\"emailManagement.newsletter\"></ui-switch>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                      <label for=\"reports\">Reports</label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <ui-switch id=\"reports\" name=\"reports\" [(ngModel)]=\"emailManagement.reports\"></ui-switch>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                      <label for=\"emailTemplate\">Email Templates</label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <ui-switch id=\"emailTemplate\" name=\"emailTemplate\" [(ngModel)]=\"emailManagement.emailTemplate\"></ui-switch>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"row\">\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-12\">\r\n                                      <div class=\"card\">\r\n                                        <div class=\"card-body\">\r\n                                          <div class=\"card-block\">\r\n                                            <div class=\"col-sm-12\">\r\n                                              <button type=\"button\" class=\"btn mt-2\" [ngClass]=\"(module.loyalty)?'btn-primary' : 'btn-outline-primary'\" (click)=\"module.loyalty = !module.loyalty\"\r\n                                                      [attr.aria-expanded]=\"!module.loyalty\" aria-controls=\"loyaltycollapse\">\r\n                                                Loyalty\r\n                                              </button>\r\n                                            </div>\r\n                                            <div class=\"col-sm-12\" id=\"loyaltycollapse\" [ngbCollapse]=\"!module.loyalty\">\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                      <label for=\"memPlans\">memPlans</label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <ui-switch id=\"memPlans\" name=\"memPlans\" [(ngModel)]=\"loyalty.memPlans\"></ui-switch>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                      <label for=\"renewals\">Renewals</label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <ui-switch id=\"renewals\" name=\"renewals\" [(ngModel)]=\"loyalty.renewals\"></ui-switch>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                      <label for=\"transactions\">Transactions</label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <ui-switch id=\"transactions\" name=\"transactions\" [(ngModel)]=\"loyalty.transactions\"></ui-switch>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                      <label for=\"loyaltypoints\">Loyalty Points</label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <ui-switch id=\"loyaltypoints\" name=\"loyaltypoints\" [(ngModel)]=\"loyalty.loyaltypoints\"></ui-switch>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                      <label for=\"redeemloyalty\">Redeem Loyalty</label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <ui-switch id=\"redeemloyalty\" name=\"redeemloyalty\" [(ngModel)]=\"loyalty.redeemloyalty\"></ui-switch>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                      <label for=\"loyaltyProgram\">Loyalty Program</label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <ui-switch id=\"loyaltyProgram\" name=\"loyaltyProgram\" [(ngModel)]=\"loyalty.loyaltyProgram\"></ui-switch>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                      <label for=\"rewards\">Rewards</label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <ui-switch id=\"rewards\" name=\"rewards\" [(ngModel)]=\"loyalty.rewards\"></ui-switch>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"row\">\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-12\">\r\n                                      <div class=\"card\">\r\n                                        <div class=\"card-body\">\r\n                                          <div class=\"card-block\">\r\n                                            <div class=\"col-sm-12\">\r\n                                              <button type=\"button\" class=\"btn mt-2\"  [ngClass]=\"(module.survey)?'btn-primary' : 'btn-outline-primary'\" (click)=\"module.survey = !module.survey\"\r\n                                                      [attr.aria-expanded]=\"!module.survey\" aria-controls=\"surveycollapse\">\r\n                                                Survey\r\n                                              </button>\r\n                                            </div>\r\n                                            <div class=\"col-sm-12\" id=\"surveycollapse\" [ngbCollapse]=\"!module.survey\">\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                      <label for=\"createForm\">Create Form</label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <ui-switch id=\"createForm\" name=\"createForm\" [(ngModel)]=\"survey.createForm\"></ui-switch>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                      <label for=\"formmanager\">Form Manager</label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <ui-switch id=\"formmanager\" name=\"formmanager\" [(ngModel)]=\"survey.formmanager\"></ui-switch>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                      <label for=\"tablemapping\">Table Mapping</label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <ui-switch id=\"tablemapping\" name=\"tablemapping\" [(ngModel)]=\"survey.tablemapping\"></ui-switch>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                      <label for=\"chartsreport\">Charts Report</label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <ui-switch id=\"chartsreport\" name=\"chartsreport\" [(ngModel)]=\"survey.chartsreport\"></ui-switch>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"row\">\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-12\">\r\n                                        <div class=\"card\">\r\n                                          <div class=\"card-body\">\r\n                                            <div class=\"card-block\">\r\n                                              <div class=\"col-sm-12\">\r\n                                                <button type=\"button\" class=\"btn mt-2\" [ngClass]=\"(module.membership)?'btn-primary' : 'btn-outline-primary'\" name=\"emailManagement\" (click)=\"module.membership = !module.membership\"\r\n                                                        [attr.aria-expanded]=\"!module.membership\" aria-controls=\"membershipcollapse\">\r\n                                                  Membership\r\n                                                </button>\r\n                                              </div>\r\n                                              <div class=\"col-sm-12\" id=\"membershipcollapse\" [ngbCollapse]=\"!module.membership\">\r\n                                                <div class=\"row\">\r\n                                                  <div class=\"col-md-6\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <label for=\"members\">Members</label>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                  <div class=\"col-md-6\">\r\n                                                    <div class=\"form-group\">\r\n                                                      <ui-switch id=\"members\" name=\"members\" [(ngModel)]=\"members.members\"></ui-switch>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                  <div class=\"col-md-6\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <label for=\"subscribers\">Subscribers</label>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                  <div class=\"col-md-6\">\r\n                                                    <div class=\"form-group\">\r\n                                                      <ui-switch id=\"subscribers\" name=\"subscribers\" [(ngModel)]=\"members.subscribers\"></ui-switch>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                  <div class=\"col-md-6\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <label for=\"management\">Management</label>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                  <div class=\"col-md-6\">\r\n                                                    <div class=\"form-group\">\r\n                                                      <ui-switch id=\"management\" name=\"management\" [(ngModel)]=\"members.management\"></ui-switch>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                  <div class=\"col-md-6\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <label for=\"list\">List</label>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                  <div class=\"col-md-6\">\r\n                                                    <div class=\"form-group\">\r\n                                                      <ui-switch id=\"list\" name=\"list\" [(ngModel)]=\"members.list\"></ui-switch>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                        </div>\r\n                                      </div>\r\n                                    <div class=\"col-sm-12\">\r\n                                      <div class=\"card\">\r\n                                        <div class=\"card-body\">\r\n                                          <div class=\"card-block\">\r\n                                            <div class=\"col-sm-12\">\r\n                                              <button type=\"button\" class=\"btn mt-2\" [ngClass]=\"(module.webPush)?'btn-primary' : 'btn-outline-primary'\" (click)=\"module.webPush = !module.webPush\"\r\n                                                      [attr.aria-expanded]=\"!module.webPush\" aria-controls=\"webPushcollapse\">\r\n                                                Web Push Dashboard\r\n                                              </button>\r\n                                            </div>\r\n                                            <div class=\"col-sm-12\" id=\"webPushcollapse\" [ngbCollapse]=\"!module.webPush\">\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                      <label for=\"webPushDashboard\">Dashboard</label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <ui-switch id=\"webPushDashboard\" name=\"webPushDashboard\" [(ngModel)]=\"webPushDashboard.webPushDashboard\"></ui-switch>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                      <label for=\"webEngagement\">Campaign</label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <ui-switch id=\"webEngagement\" name=\"webEngagement\" [(ngModel)]=\"webPushDashboard.webEngagement\"></ui-switch>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                      <label for=\"segments\">Segments</label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <ui-switch id=\"segments\" name=\"segments\" [(ngModel)]=\"webPushDashboard.segments\"></ui-switch>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                      <label for=\"tokens\">Tokens</label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <ui-switch id=\"tokens\" name=\"tokens\" [(ngModel)]=\"webPushDashboard.tokens\"></ui-switch>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                      <label for=\"webtemplate\">Web Template</label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <ui-switch id=\"webtemplate\" name=\"webtemplate\" [(ngModel)]=\"webPushDashboard.webtemplate\"></ui-switch>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                      <label for=\"webnotification\">Web Notifications</label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <ui-switch id=\"webnotification\" name=\"webnotification\" [(ngModel)]=\"webPushDashboard.webnotification\"></ui-switch>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                      <label for=\"safaripushconfig\">Safari Push Config</label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <ui-switch id=\"safaripushconfig\" name=\"safaripushconfig\" [(ngModel)]=\"webPushDashboard.safaripushconfig\"></ui-switch>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"row\">\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-12\">\r\n                                      <div class=\"card\">\r\n                                        <div class=\"card-body\">\r\n                                          <div class=\"card-block\">\r\n                                            <div class=\"col-sm-12\">\r\n                                              <button type=\"button\" class=\"btn mt-2\" [ngClass]=\"(module.events)?'btn-primary' : 'btn-outline-primary'\" (click)=\"module.events = !module.events\"\r\n                                                      [attr.aria-expanded]=\"!module.events\" aria-controls=\"eventscollapse\">\r\n                                                      Events\r\n                                              </button>\r\n                                            </div>\r\n                                            <div class=\"col-sm-12\" id=\"eventscollapse\" [ngbCollapse]=\"!module.events\">\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                      <label for=\"events\">Events</label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <ui-switch id=\"events\" name=\"events\" [(ngModel)]=\"events.events\"></ui-switch>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"row\">\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                      <button uiSref=\"personal\" type=\"button\" class=\"btn btn-raised btn-secondary mr-1\" awPreviousStep>\r\n                                          <span style=\"margin-right:10px;\">\r\n                                              <i class=\"ft-chevron-left\"></i>\r\n                                          </span> Previous</button>\r\n                                      <button type=\"submit\" class=\"btn btn-success btn-raised\" (click)=\"saveOrganization()\">Save</button>\r\n                                    </div>\r\n                                  </form>\r\n                                </div>\r\n                              </div>\r\n                            <!-- </ng-template>\r\n                          </ngb-tab> -->\r\n                        </aw-wizard-step>\r\n                    </aw-wizard>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/organization/organization.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/organization/organization.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-content .tab-pane {\n  padding-top: 20px; }\n\n.alert {\n  padding: 8px;\n  margin-bottom: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JnYW5pemF0aW9uL0M6XFxVc2Vyc1xcTVJUMjBcXERlc2t0b3BcXFVNXFx1c2VybWFuYWdlbWVudC9zcmNcXGFwcFxcb3JnYW5pemF0aW9uXFxvcmdhbml6YXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osbUJBQWtCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvb3JnYW5pemF0aW9uL29yZ2FuaXphdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWItY29udGVudCAudGFiLXBhbmV7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLmFsZXJ0IHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/organization/organization.component.ts":
/*!********************************************************!*\
  !*** ./src/app/organization/organization.component.ts ***!
  \********************************************************/
/*! exports provided: OrganizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationComponent", function() { return OrganizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable/release */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_data_organization_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/data/organization.service */ "./src/app/shared/data/organization.service.ts");
/* harmony import */ var _shared_data_subscription_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/data/subscription.service */ "./src/app/shared/data/subscription.service.ts");
/* harmony import */ var _shared_data_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/data/settings.service */ "./src/app/shared/data/settings.service.ts");
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








var OrganizationComponent = /** @class */ (function () {
    function OrganizationComponent(organizationservice, settingsservice, subscriptionService, snotifyService) {
        this.organizationservice = organizationservice;
        this.settingsservice = settingsservice;
        this.subscriptionService = subscriptionService;
        this.snotifyService = snotifyService;
        this.showOrg = false;
        this.showForm = false;
        this.submitted = false;
        this.subscribers = [];
        this.admins = [];
        this.options = {
            types: ['geocode'],
            componentRestrictions: { country: 'AU' }
        };
        this.columns = [
            { prop: 'firstName' },
            { prop: 'lastEmail' },
            { prop: 'email' },
            { prop: 'role' }
        ];
        this.columns1 = [
            { prop: 'Organization' },
            { prop: 'subscriptionType' },
            { prop: 'Count' }
        ];
        this.organization = {
            'id': '',
            'orgName': '',
            'orgEmail': '',
            'orgPhone': '',
            'orgAddress': ''
        };
        this.data = { 'status': '' };
        this.style = 'material';
        this.title = 'Success';
        this.body = 'Organization created successfully!';
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
        this.timestamp = new Date().getTime();
        this.module = {
            'emailManagement': false,
            'loyalty': false,
            'survey': false,
            'membership': false,
            'webPush': false,
            'events': false,
            'emailManagementSub': [],
            'loyaltySub': [],
            'membersSub': [],
            'surveySub': [],
            'webPushSub': [],
            'eventsSub': []
        };
        this.emailManagement = {
            'newsletter': false,
            'reports': false,
            'emailTemplate': false
        };
        this.loyalty = {
            'memPlans': false,
            'renewals': false,
            'transactions': false,
            'loyaltypoints': false,
            'redeemloyalty': false,
            'loyaltyProgram': false,
            'rewards': false
        };
        this.members = {
            'members': false,
            'subscribers': false,
            'management': false,
            'list': false,
            'segments': false
        };
        this.survey = {
            'createForm': false,
            'formmanager': false,
            'tablemapping': false,
            'chartsreport': false
        };
        this.webPushDashboard = {
            'webPushDashboard': false,
            'webEngagement': false,
            'segments': false,
            'tokens': false,
            'webtemplate': false,
            'webnotification': false,
            'safaripushconfig': false
        };
        this.events = {
            'events': false
        };
        this.modulesettings = false;
        this.showOrg = false;
        //this.status = false;
        /*this.organizationservice.getOrganization().then(data => {
            if(data['organization']){
                console.log('ORG data - ' + JSON.stringify(data['organization']));
                for (let i = 0; i < data['organization'].length; i++) {
                    let array = {
                        organizationName: data['organization'][i]['name'],
                        organizationEmail: data['organization'][i]['email'],
                        organizationPhone: data['organization'][i]['phone']
                    }
                    this.organizations.push(array);
                }
                this.rows = this.organizations;
            }
        });*/
    }
    OrganizationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.save = true;
        this.organizationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'orgName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'orgEmail': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'orgPhone': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'orgAddress': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        this.showOrg = false;
        console.log('timestamp- ' + this.timestamp);
        this.organizationservice.getCharts().then(function (data) {
            console.log('getCharts - ' + JSON.stringify(data));
        });
        this.organizationservice.getOrganization(new Date().getTime()).then(function (data) {
            if (data['organization']) {
                _this.organizations = data['organization'];
                for (var i = 0; i < data['organization'].length; i++) {
                    _this.status = data['organization'][i]['status'];
                }
                console.log('ORG data - ' + JSON.stringify(data['organization']));
                // for (let i = 0; i < data['organization'].length; i++) {
                // 	let array = {
                // 		organizationName: data['organization'][i]['name'],
                // 		organizationEmail: data['organization'][i]['email'],
                // 		organizationPhone: data['organization'][i]['phone'],
                // 		organizationAddress: data['organization'][i]['address']
                // 	}
                // 	this.organizations.push(array);
                // }
                // this.rows = this.organizations;
            }
        });
    };
    OrganizationComponent.prototype.handleAddressChange = function (address) {
        // Do some stuff
        this.newaddress = address.formatted_address;
    };
    OrganizationComponent.prototype.getConfig = function () {
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
    OrganizationComponent.prototype.saveOrganization = function () {
        var _this = this;
        this.submitted = true;
        if (this.save) {
            var organizationDetail = {
                'orgName': this.organizationForm.controls['orgName'].value,
                'orgEmail': this.organizationForm.controls['orgEmail'].value,
                'orgPhone': this.organizationForm.controls['orgPhone'].value,
                'orgAddress': this.newaddress
            };
            this.module.emailManagementSub.push(this.emailManagement);
            this.module.loyaltySub.push(this.loyalty);
            this.module.membersSub.push(this.members);
            this.module.surveySub.push(this.survey);
            this.module.webPushSub.push(this.webPushDashboard);
            this.userData = {
                username: '',
                password: '123456',
                email: organizationDetail['orgEmail'],
                status: 'y'
            };
            this.organizationservice.saveOrganization(organizationDetail, this.module, this.userData).then(function (data) {
                if (data['status'] == 'success') {
                    _this.menuhidefunction(data['orgId']);
                    var _a = _this.getConfig(), timeout = _a.timeout, closeOnClick = _a.closeOnClick, config = __rest(_a, ["timeout", "closeOnClick"]);
                    _this.snotifyService.confirm(_this.body, _this.title, __assign({}, config, { buttons: [
                            { text: 'Ok', action: function (toast) {
                                    _this.snotifyService.remove(toast.id);
                                    _this.submitted = false;
                                    _this.showOrg = false;
                                    _this.showForm = false;
                                    _this.organizationservice.getOrganization(new Date().getTime()).then(function (data) {
                                        _this.organizations = [];
                                        if (data['organization']) {
                                            _this.organizations = data['organization'];
                                        }
                                    });
                                    _this.organizationForm.reset();
                                }
                            }
                        ] }));
                }
            });
        }
        else if (!this.save) {
            var organizationDetail = {
                'id': this.organization.id,
                'orgName': this.organizationForm.controls['orgName'].value,
                'orgEmail': this.organizationForm.controls['orgEmail'].value,
                'orgPhone': this.organizationForm.controls['orgPhone'].value,
                'orgAddress': this.newaddress
            };
            this.organizationservice.updateOrganization(organizationDetail).then(function (data) {
                var _a = _this.getConfig(), timeout = _a.timeout, closeOnClick = _a.closeOnClick, config = __rest(_a, ["timeout", "closeOnClick"]);
                _this.snotifyService.confirm(_this.body, _this.title, __assign({}, config, { buttons: [
                        { text: 'Ok', action: function (toast) {
                                _this.snotifyService.remove(toast.id);
                                _this.submitted = false;
                                _this.showOrg = false;
                                _this.showForm = false;
                                _this.organizationservice.getOrganization(new Date().getTime()).then(function (data) {
                                    _this.organizations = [];
                                    if (data['organization']) {
                                        _this.organizations = data['organization'];
                                    }
                                });
                            } }
                    ] }));
            });
        }
    };
    OrganizationComponent.prototype.menuhidefunction = function (orgId) {
        //user Menu
        var userMenu = [
            {
                'path': '/users/profile', 'title': 'User Profile', 'icon': 'fas fa-user', 'class': '', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': []
            }
        ];
        //Main menu
        var mainMenu;
        // let   mainMenu = [{
        //     'path': '/dashboard/charts', 'title': 'Home', 'icon': 'icon-home', 'class': '', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': []
        //   }];
        if (this.module.loyalty) {
            var loyaltymenu = { 'path': '', 'title': 'Loyalty', 'icon': 'icon-present', 'class': 'has-sub', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': [] };
            if (this.loyalty.memPlans) {
                loyaltymenu.submenu.push({ 'path': '/loyalty/membership', 'title': 'Membership', 'icon': '', 'class': '', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': [] });
            }
            if (this.loyalty.renewals) {
                loyaltymenu.submenu.push({ 'path': '/loyalty/renewals', 'title': 'Renewals', 'icon': '', 'class': '', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': [] });
            }
            if (this.loyalty.transactions) {
                loyaltymenu.submenu.push({ 'path': '/loyalty/transactions', 'title': 'Transactions', 'icon': '', 'class': '', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': [] });
                userMenu.push({ 'path': '/loyalty/transactions', 'title': 'Transactions', 'icon': '', 'class': '', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': [] });
            }
            if (this.loyalty.loyaltypoints) {
                loyaltymenu.submenu.push({ 'path': '/loyalty/loyalty-points', 'title': 'Loyalty Points', 'icon': '', 'class': '', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': [] });
            }
            if (this.loyalty.redeemloyalty) {
                loyaltymenu.submenu.push({ 'path': '/loyalty/redeem-loyalty-display', 'title': 'Redeem Loyalty ', 'icon': '', 'class': '', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': [] });
                userMenu.push({ 'path': '/loyalty/redeem-loyalty-display', 'title': 'Redeem Loyalty ', 'icon': '', 'class': '', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': [] });
            }
            if (this.loyalty.loyaltyProgram) {
                loyaltymenu.submenu.push({ 'path': '/loyalty/loyalty-display', 'title': 'Loyalty Program', 'icon': '', 'class': '', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': [] });
                userMenu.push({ 'path': '/loyalty/loyalty-display', 'title': 'Loyalty Program', 'icon': '', 'class': '', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': [] });
            }
            if (this.loyalty.rewards) {
                loyaltymenu.submenu.push({ 'path': '/loyalty/redeem-reward', 'title': 'Rewards', 'icon': '', 'class': '', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': [] });
                userMenu.push({ 'path': '/loyalty/redeem', 'title': 'Rewards', 'icon': '', 'class': '', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': [] });
            }
            mainMenu.push(loyaltymenu);
        }
        if (this.module.membership) {
            var membermenu = { 'path': '', 'title': 'Membership', 'icon': 'ft-users', 'class': 'has-sub', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': [] };
            if (this.members.members) {
                membermenu.submenu.push({ 'path': '/users/users', 'title': 'Members', 'icon': '', 'class': '', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': [] });
            }
            if (this.members.subscribers) {
                membermenu.submenu.push({ 'path': '/users/subscribers', 'title': 'Subscriber', 'icon': '', 'class': '', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': [] });
            }
            if (this.members.management) {
                membermenu.submenu.push({ 'path': '/users/move-users', 'title': 'Management', 'icon': '', 'class': '', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': [] });
            }
            if (this.members.list) {
                membermenu.submenu.push({ 'path': '/users/lists', 'title': 'Lists', 'icon': '', 'class': '', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': [] });
            }
            if (this.members.segments) {
                membermenu.submenu.push({ 'path': '/users/segments', 'title': 'Segments', 'icon': '', 'class': '', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': [] });
            }
            mainMenu.push(membermenu);
        }
        if (this.module.survey) {
            var surveymenu = { 'path': '', 'title': 'Feedback', 'icon': 'icon-envelope', 'class': 'has-sub', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': [] };
            if (this.survey.createForm) {
                surveymenu.submenu.push({ 'path': '/feedback/createform', 'title': 'Create Form', 'icon': '', 'class': '', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': [] });
            }
            if (this.survey.formmanager) {
                surveymenu.submenu.push({ 'path': '/feedback/formmanager', 'title': 'Form Manager', 'icon': '', 'class': '', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': [] });
            }
            if (this.survey.tablemapping) {
                surveymenu.submenu.push({ 'path': '/feedback/dbmaping', 'title': 'Table Maping', 'icon': '', 'class': '', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': [] });
            }
            if (this.survey.chartsreport) {
                surveymenu.submenu.push({ 'path': '/feedback/chartsreport', 'title': 'Charts Report', 'icon': '', 'class': '', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': [] });
            }
            mainMenu.push(surveymenu);
        }
        if (this.module.emailManagement) {
            var campaignmenu = { 'path': '', 'title': 'Campaign', 'icon': 'icon-grid', 'class': 'has-sub', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': [] };
            if (this.emailManagement.newsletter) {
                campaignmenu.submenu.push({ 'path': '/campaign/newsletter', 'title': 'Newsletter', 'icon': '', 'class': '', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': [] });
            }
            if (this.emailManagement.reports) {
                campaignmenu.submenu.push({ 'path': '/campaign/reports', 'title': 'Reports', 'icon': '', 'class': '', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': [] });
            }
            if (this.emailManagement.emailTemplate) {
                campaignmenu.submenu.push({ 'path': '/campaign/emailtemplate', 'title': 'Email Template', 'icon': '', 'class': '', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': [] });
            }
            mainMenu.push(campaignmenu);
        }
        if (this.module.webPush) {
            var webPushmenu = { "path": "", "title": "Web Push", "icon": "", "class": "has-sub", "badge": "", "badgeClass": "", "isExternalLink": false, "submenu": [] };
            if (this.webPushDashboard.webPushDashboard) {
                webPushmenu.submenu.push({ "path": "/web-dashboard/dashboard", "title": "Dashboard", "icon": "", "class": "", "badge": "", "badgeClass": "", "isExternalLink": false, "submenu": [] });
            }
            if (this.webPushDashboard.webEngagement) {
                webPushmenu.submenu.push({ "path": "/web-dashboard/web-engagement", "title": "Campaign", "icon": "", "class": "", "badge": "", "badgeClass": "", "isExternalLink": false, "submenu": [] });
            }
            if (this.webPushDashboard.segments) {
                webPushmenu.submenu.push({ "path": "/web-dashboard/segments", "title": "Segments", "icon": "", "class": "", "badge": "", "badgeClass": "", "isExternalLink": false, "submenu": [] });
            }
            if (this.webPushDashboard.tokens) {
                webPushmenu.submenu.push({ "path": "/web-dashboard/tokens", "title": "Tokens", "icon": "", "class": "", "badge": "", "badgeClass": "", "isExternalLink": false, "submenu": [] });
            }
            if (this.webPushDashboard.webtemplate) {
                webPushmenu.submenu.push({ "path": "/web-dashboard/web-template", "title": "Web-Template", "icon": "", "class": "", "badge": "", "badgeClass": "", "isExternalLink": false, "submenu": [] });
            }
            if (this.webPushDashboard.webnotification) {
                webPushmenu.submenu.push({ "path": "/web-dashboard/web-notification", "title": "Web Notifications", "icon": "", "class": "", "badge": "", "badgeClass": "", "isExternalLink": false, "submenu": [] });
            }
            if (this.webPushDashboard.safaripushconfig) {
                webPushmenu.submenu.push({ "path": "/web-dashboard/safaripushconfig", "title": "Safari Push Config", "icon": "", "class": "", "badge": "", "badgeClass": "", "isExternalLink": false, "submenu": [] });
            }
            mainMenu.push(webPushmenu);
        }
        if (this.module.events) {
            var eventsmenu = { 'path': '/events', 'title': 'Events', 'icon': 'icon-list', 'class': '', 'badge': '', 'badgeClass': '', 'isExternalLink': false, 'submenu': [] };
            mainMenu.push(eventsmenu);
        }
        this.settingsservice.addMenuOrgId(mainMenu, userMenu, 'saveModule', orgId).then(function (data) {
            console.log('mainMenu - ' + JSON.stringify(mainMenu));
        });
    };
    OrganizationComponent.prototype.editOrganization = function (id) {
        var _this = this;
        this.organizationservice.getOrganizationById(id).then(function (data) {
            //console.log('getOrganizationById - ' + JSON.stringify(data));
            _this.organization.id = data['organization'][0].id;
            _this.organization.orgName = data['organization'][0].name;
            _this.organization.orgEmail = data['organization'][0].email;
            _this.organization.orgPhone = data['organization'][0].phone;
            _this.organization.orgAddress = data['organization'][0].address;
            _this.showOrg = true;
            _this.save = false;
        }, function (error) {
        });
        this.organizationservice.getAdminsByOrgId(id).then(function (data) {
            if (data['organization']) {
                //console.log('ORG data - ' + JSON.stringify(data['organization']));
                for (var i = 0; i < data['organization'].length; i++) {
                    var array = {
                        firstName: data['organization'][i]['FirstName'],
                        lastEmail: data['organization'][i]['LastName'],
                        email: data['organization'][i]['email'],
                        role: data['organization'][i]['role']
                    };
                    _this.admins.push(array);
                }
                _this.rows = _this.admins;
            }
        });
        this.subscriptionService.getSubscribers().then(function (data) {
            console.log('getSubscribers - ' + JSON.stringify(data));
            _this.subscriptionList = data['rows'];
            if (data['rows']) {
                //console.log('ORG data - ' + JSON.stringify(data['organization']));
                for (var i = 0; i < data['rows'].length; i++) {
                    var array = {
                        Organization: data['rows'][i]['Organization'],
                        subscriptionType: data['rows'][i]['Type'],
                        Count: data['rows'][i]['Count']
                    };
                    _this.subscribers.push(array);
                }
                _this.rows1 = _this.subscribers;
            }
        });
        this.organizationservice.ModuleSettings(this.module, 'getModule', id).then(function (data) {
            if (data['status'] == 'success') {
                _this.modulesettings = true;
                _this.module.emailManagement = data['module'][0]['emailManagement'];
                _this.module.loyalty = data['module'][0]['loyalty'];
                _this.module.survey = data['module'][0]['survey'];
                _this.module.membership = data['module'][0]['membership'];
                _this.module.webPush = data['module'][0]['webPush'];
                _this.emailManagement.newsletter = data['module'][0]['emailManagementSub'][0]['newsletter'];
                _this.emailManagement.reports = data['module'][0]['emailManagementSub'][0]['reports'];
                _this.emailManagement.emailTemplate = data['module'][0]['emailManagementSub'][0]['emailTemplate'];
                _this.loyalty.memPlans = data['module'][0]['loyaltySub'][0]['memPlans'];
                _this.loyalty.renewals = data['module'][0]['loyaltySub'][0]['renewals'];
                _this.loyalty.transactions = data['module'][0]['loyaltySub'][0]['transactions'];
                _this.loyalty.loyaltypoints = data['module'][0]['loyaltySub'][0]['loyaltypoints'];
                _this.loyalty.redeemloyalty = data['module'][0]['loyaltySub'][0]['redeemloyalty'];
                _this.loyalty.loyaltyProgram = data['module'][0]['loyaltySub'][0]['loyaltyProgram'];
                _this.loyalty.rewards = data['module'][0]['loyaltySub'][0]['rewards'];
                _this.members.members = data['module'][0]['membersSub'][0]['members'];
                _this.members.subscribers = data['module'][0]['membersSub'][0]['subscribers'];
                _this.members.management = data['module'][0]['membersSub'][0]['management'];
                _this.members.list = data['module'][0]['membersSub'][0]['list'];
                _this.members.segments = data['module'][0]['membersSub'][0]['segments'];
                _this.survey.createForm = data['module'][0]['surveySub'][0]['createForm'];
                _this.survey.formmanager = data['module'][0]['surveySub'][0]['formmanager'];
                _this.survey.tablemapping = data['module'][0]['surveySub'][0]['tablemapping'];
                _this.survey.chartsreport = data['module'][0]['surveySub'][0]['chartsreport'];
                _this.webPushDashboard.webPushDashboard = data['module'][0]['webPushSub'][0]['webPushDashboard'];
                _this.webPushDashboard.webEngagement = data['module'][0]['webPushSub'][0]['webEngagement'];
                _this.webPushDashboard.segments = data['module'][0]['webPushSub'][0]['segments'];
                _this.module.emailManagementSub = [];
                _this.module.loyaltySub = [];
                _this.module.membersSub = [];
                _this.module.surveySub = [];
                _this.module.webPushSub = [];
            }
            else {
                _this.modulesettings = false;
            }
        });
    };
    OrganizationComponent.prototype.viewOrganization = function (id) {
        this.organizationservice.getOrganizationById(id).then(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                title: '<b>Organization Detail</b>',
                type: 'info',
                html: '<table class="viewOrg"><tbody><tr></tr>' +
                    '<tr><th>ORGANIZATION NAME</th><td>' + data['organization'][0].name + '</td></tr>' +
                    '<tr><th>EMAIL</th><td>' + data['organization'][0].email + '</td></tr>' +
                    '<tr><th>PHONE</th><td>' + data['organization'][0].phone + '</td></tr>' +
                    '<tr><th>ADDRESS</th><td>' + data['organization'][0].address + '</td></tr>' +
                    '</tbody></table><br />',
                showCloseButton: true,
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Okay!'
            });
        });
    };
    OrganizationComponent.prototype.onChange = function (status, id) {
        this.organizationservice.updateStatus(status.toString(), id).then(function (data) {
            console.log('updateStatus - ' + JSON.stringify(data));
        });
    };
    OrganizationComponent.prototype.createOrg = function () {
        this.save = true;
        this.showOrg = false;
        this.showForm = true;
    };
    OrganizationComponent.prototype.cancel = function () {
        this.showOrg = false;
        this.showForm = false;
        this.organizationForm.reset();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"])
    ], OrganizationComponent.prototype, "table", void 0);
    OrganizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organization',
            template: __webpack_require__(/*! ./organization.component.html */ "./src/app/organization/organization.component.html"),
            styles: [__webpack_require__(/*! ./organization.component.scss */ "./src/app/organization/organization.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_data_organization_service__WEBPACK_IMPORTED_MODULE_5__["OrganizationService"], _shared_data_settings_service__WEBPACK_IMPORTED_MODULE_7__["SettingsService"], _shared_data_subscription_service__WEBPACK_IMPORTED_MODULE_6__["SubscriptionService"], ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"]])
    ], OrganizationComponent);
    return OrganizationComponent;
}());



/***/ }),

/***/ "./src/app/organization/organization.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/organization/organization.module.ts ***!
  \*****************************************************/
/*! exports provided: OrganizationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationModule", function() { return OrganizationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _organization_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./organization-routing.module */ "./src/app/organization/organization-routing.module.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/directives/match-height.directive */ "./src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var _organization_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./organization.component */ "./src/app/organization/organization.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es5.js");
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-archwizard */ "./node_modules/angular-archwizard/esm5/angular-archwizard.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var OrganizationModule = /** @class */ (function () {
    function OrganizationModule() {
    }
    OrganizationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _organization_routing_module__WEBPACK_IMPORTED_MODULE_4__["OrganizationRoutingModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_7__["MatchHeightModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ngx_ui_switch__WEBPACK_IMPORTED_MODULE_10__["UiSwitchModule"],
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_2__["GooglePlaceModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"],
                angular_archwizard__WEBPACK_IMPORTED_MODULE_11__["ArchwizardModule"]
            ],
            declarations: [
                _organization_component__WEBPACK_IMPORTED_MODULE_8__["OrganizationComponent"],
            ]
        })
    ], OrganizationModule);
    return OrganizationModule;
}());



/***/ }),

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



/***/ })

}]);
//# sourceMappingURL=organization-organization-module.js.map