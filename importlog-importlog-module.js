(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["importlog-importlog-module"],{

/***/ "./src/app/importlog/importlog-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/importlog/importlog-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ImportLogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportLogRoutingModule", function() { return ImportLogRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _importlog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./importlog.component */ "./src/app/importlog/importlog.component.ts");
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
        component: _importlog_component__WEBPACK_IMPORTED_MODULE_2__["ImportLogComponent"],
        data: {
            title: 'ImportLog'
        },
    }
];
var ImportLogRoutingModule = /** @class */ (function () {
    function ImportLogRoutingModule() {
    }
    ImportLogRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], ImportLogRoutingModule);
    return ImportLogRoutingModule;
}());



/***/ }),

/***/ "./src/app/importlog/importlog.component.html":
/*!****************************************************!*\
  !*** ./src/app/importlog/importlog.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"content-header\" *ngIf=\"!showForm\">Import Log</div>\r\n            <div class=\"content-header\" *ngIf=\"showForm\">Import Log Details</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"showTable && !showForm\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <p>Latest Log</p>\r\n                        </div>\r\n                        <div class=\"col-sm-6\" style=\"text-align: right;\">\r\n                            <p>\r\n                                <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-bitbucket float-right\" (click)=\"redirect()\"><span class=\"ft-plus\"></span>Import</a>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n\r\n                          <div class=\"row\">\r\n                                          <div class=\"col-4 pr-0\">\r\n                                              <div class=\"card px-1\">\r\n                                                <div class=\"input-group\">\r\n                                                  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"fromDt\" ngbDatepicker #d2=\"ngbDatepicker\">\r\n                                                  <div class=\"input-group-append\">\r\n                                                    <div class=\"input-group-text\" (click)=\"d2.toggle()\">\r\n                                                      <i class=\"fa fa-calendar\" style=\"cursor: pointer;\"></i>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-4 pr-0\">\r\n                                                <div class=\"card px-1\">\r\n                                          <div class=\"input-group\">\r\n                                          <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp1\" [(ngModel)]=\"toDt\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n                                          <div class=\"input-group-append\">\r\n                                          <div class=\"input-group-text\" (click)=\"d1.toggle()\">\r\n                                            <i class=\"fa fa-calendar\" style=\"cursor: pointer;\"></i>\r\n                                          </div>\r\n                                          </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                          <div class=\"col-2 pr-0\">\r\n                                            <div class=\"card px-1\">\r\n                                              <button type=\"button\" class=\"btn btn-success btn-raised\" (click)=\"search()\">Search</button>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"col-2 pr-0\">\r\n                                            <div class=\"card px-1\">\r\n                                              <button type=\"button\" class=\"btn btn-danger btn-raised\" (click)=\"reset()\" style=\"margin-right: 14px;\">Reset</button>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n\r\n                            <table class=\"table table-responsive-md text-center\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Title</th>\r\n                                        <th>URL</th>\r\n                                        <th>Started At</th>\r\n                                        <th>Finished At</th>\r\n                                        <!-- <th>Task Type</th> -->\r\n                                        <th>Action</th>\r\n                                        <th>Statistics</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let data of listData | paginate: { itemsPerPage: 10, currentPage: p }\">\r\n                                        <td>{{data.title}}</td>\r\n                                        <td>{{data.parameters}}</td>\r\n                                        <td>{{data.started_at}}</td>\r\n                                        <td>{{data.finished_at}}</td>\r\n                                        <!-- <td>{{data.task}}</td> -->\r\n                                        <td>\r\n                                            <!-- <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"edit(data.id)\">\r\n                                                <i class=\"fas fa-pencil-alt font-medium-3 mr-2\"></i>\r\n                                            </a> -->\r\n                                            <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"delete(data.task_id)\">\r\n                                                <i class=\"fas fa-trash font-medium-3 mr-2\"></i>\r\n                                            </a>\r\n                                        </td>\r\n                                        <td>\r\n                                        <a class=\"success p-0\" (click)=\"detail(data.task_id);\"><i class=\"icon-bar-chart\"></i></a>\r\n                                        <td>\r\n                                    </tr>\r\n\r\n                                    <!-- <pagination-controls (pageChange)=\"p = $event\"></pagination-controls> -->\r\n                                </tbody>\r\n                            </table>\r\n                            <div class=\"col-12 paginationonAction\">\r\n                                <span class=\"total\">{{collectionSize}} Total</span>\r\n                                <ngb-pagination [pageSize]=\"pageSize\" [(page)]=\"p\" [maxSize]=\"10\" [rotate]=\"true\" [collectionSize]=\"collectionSize\" [boundaryLinks]=\"true\" style=\"float: right;\"></ngb-pagination>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"!showTable && !showForm\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                      <ngb-tabset>\r\n                        <ngb-tab title=\"Information\">\r\n                          <ng-template ngbTabContent>\r\n                            <form class=\"form\" [formGroup]=\"listForm\">\r\n                                <div class=\"form-body\">\r\n                                    <!-- <h4 class=\"form-section\">\r\n                                    <i class=\"icon-user\"></i> Personal Details</h4> -->\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"projectinput1\">Name</label>\r\n                                                <input type=\"text\" id=\"projectinput1\" class=\"form-control\" formControlName=\"fname\" [(ngModel)]=\"lists.name\" required>\r\n                                                <small class=\"form-text text-muted danger\" *ngIf=\"!listForm.get('fname').valid && (listForm.get('fname').dirty || listForm.get('fname').touched)\">This field is required!</small>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"projectinput2\">Email</label>\r\n                                                <input type=\"text\" id=\"projectinput2\" class=\"form-control\" formControlName=\"email\" [(ngModel)]=\"lists.email\" required>\r\n                                                <small class=\"form-text text-muted danger\" *ngIf=\"!listForm.get('email').valid && (listForm.get('email').dirty || listForm.get('email').touched)\">This field is required!</small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"projectinput3\">Phone Number</label>\r\n                                                <input type=\"text\" id=\"projectinput3\" class=\"form-control\" formControlName=\"phone\" [(ngModel)]=\"lists.phonenum\" required>\r\n                                                <small class=\"form-text text-muted danger\" *ngIf=\"!listForm.get('phone').valid && (listForm.get('phone').dirty || listForm.get('phone').touched)\">This field is required!</small>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label for=\"projectinput4\">Address</label>\r\n                                                <input type=\"text\" id=\"projectinput4\" class=\"form-control\" formControlName=\"address\" [(ngModel)]=\"lists.address\" ngx-google-places-autocomplete [options]='options' #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\" required>\r\n                                                <small class=\"form-text text-muted danger\" *ngIf=\"!listForm.get('address').valid && (listForm.get('address').dirty || listForm.get('address').touched)\">This field is required!</small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <!-- <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Select File</label>\r\n                                                <input type=\"file\" class=\"form-control-file\" id=\"projectinput8\" name=\"image\" [(ngModel)]=\"lists.image\">\r\n                                            </div>\r\n                                        </div> -->\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Newsletter</label>\r\n                                                <div class=\"custom-control custom-checkbox m-0\">\r\n                                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"item1\" formControlName=\"newsletter\" [(ngModel)]=\"lists.newsletter\">\r\n                                                    <label class=\"custom-control-label\" for=\"item1\">Opt In</label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-actions\">\r\n                                    <button type=\"submit\" class=\"btn btn-raised btn-danger mr-1\" (click)=\"cancel()\">\r\n                                    <i class=\"icon-trash\"></i> Cancel\r\n                                    </button>\r\n                                    <button type=\"submit\" class=\"btn btn-raised btn-success mr-1\" (click)=\"list()\" *ngIf=\"!save\" [disabled]=\"!listForm.valid\">\r\n                                    <i class=\"icon-note\"></i> Update List <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i>\r\n                                    </button>\r\n                                    <button type=\"submit\" class=\"btn btn-raised btn-success\" (click)=\"list()\" *ngIf=\"save\" [disabled]=\"!listForm.valid\">\r\n                                    <i class=\"icon-note\"></i> Add List <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i>\r\n                                    </button>\r\n                                </div>\r\n                            </form>\r\n                          </ng-template>\r\n                        </ngb-tab>\r\n                        <ngb-tab title=\"Subscriber\">\r\n                          <ng-template ngbTabContent>\r\n                                <!-- <ngx-datatable #table class='bootstrap' [rows]=\"rows\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n                                  [rowHeight]=\"'auto'\" [limit]=\"5\"></ngx-datatable> -->\r\n                                  <div class=\"card-body\">\r\n                                      <div class=\"card-block\">\r\n                                          <ngx-datatable #mydatatable class=\"bootstrap fullscreen\" [headerHeight]=\"50\" [limit]=\"5\" [columnMode]=\"'force'\" [footerHeight]=\"50\"\r\n                                              [rowHeight]=\"'auto'\" [rows]=\"rows\" [scrollbarH]=\"true\">\r\n                                              <ngx-datatable-column name=\"First Name\">\r\n                                                  <ng-template ngx-datatable-cell-template  let-row=\"row\">\r\n                                                          {{row.FirstName}}\r\n                                                  </ng-template>\r\n                                              </ngx-datatable-column>\r\n                                              <ngx-datatable-column name=\"Last Name\">\r\n                                                  <ng-template ngx-datatable-cell-template let-row=\"row\">\r\n                                                          {{row.LastName}}\r\n                                                  </ng-template>\r\n                                              </ngx-datatable-column>\r\n                                              <ngx-datatable-column name=\"Email\" [width]=\"250\">\r\n                                                  <ng-template ngx-datatable-cell-template let-row=\"row\">\r\n                                                      {{row.email}}\r\n                                                  </ng-template>\r\n                                              </ngx-datatable-column>\r\n                                              <ngx-datatable-column name=\"Address\" [width]=\"250\">\r\n                                                  <ng-template ngx-datatable-cell-template let-row=\"row\">\r\n                                                      {{row.address}}\r\n                                                  </ng-template>\r\n                                              </ngx-datatable-column>\r\n                                              <ngx-datatable-column name=\"List Name\">\r\n                                                  <ng-template ngx-datatable-cell-template let-row=\"row\">\r\n                                                      {{row.listname}}\r\n                                                  </ng-template>\r\n                                              </ngx-datatable-column>\r\n                                              <ngx-datatable-column name=\"Subscribed On\" [width]=\"200\">\r\n                                                  <ng-template ngx-datatable-cell-template let-row=\"row\">\r\n                                                      {{row.date}}\r\n                                                  </ng-template>\r\n                                              </ngx-datatable-column>\r\n                                              <ngx-datatable-column name=\"Subscribed Status\">\r\n                                                  <ng-template ngx-datatable-cell-template let-row=\"row\">\r\n                                                      {{row.status}}\r\n                                                  </ng-template>\r\n                                              </ngx-datatable-column>\r\n                                              <ngx-datatable-column name=\"Subscribed\">\r\n                                                <ng-template ngx-datatable-cell-template let-row=\"row\">\r\n                                                  <ui-switch [(ngModel)]=\"row.status\" (ngModelChange)=\"updateStatus($event, row.id)\"></ui-switch>\r\n                                                </ng-template>\r\n                                              </ngx-datatable-column>\r\n                                          </ngx-datatable>\r\n                                      </div>\r\n                                  </div>\r\n                          </ng-template>\r\n                        </ngb-tab>\r\n                      </ngb-tabset>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"showForm\">\r\n      <div class=\"col-sm-12\">\r\n          <div class=\"card\">\r\n              <div class=\"card-header\">\r\n\r\n      <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <label *ngIf=\"schedule[0].task == 'schedule'\"><b>Cron Job : </b>\r\n              {{schedule[0].minute}} {{schedule[0].hour}} {{schedule[0].day}} {{schedule[0].month}} {{schedule[0].weekday}}\r\n              (minute hour day month weekday)\r\n            </label>\r\n\r\n              <table class=\"table table-responsive-md text-center\">\r\n                  <thead>\r\n                      <tr>\r\n                          <th>Title</th>\r\n                          <!-- <th>URL</th> -->\r\n                          <th>Started At</th>\r\n                          <th>Finished At</th>\r\n                          <th>Status</th>\r\n                          <th>Task</th>\r\n                      </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                      <tr *ngFor=\"let data of listData1 | paginate: { itemsPerPage: 10, currentPage: p }\">\r\n                          <td>{{data.title}}</td>\r\n                          <!-- <td>{{data.parameters}}</td> -->\r\n                          <td>{{data.started_at}}</td>\r\n                          <td>{{data.finished_at}}</td>\r\n                          <td>\r\n                            {{data.status}}\r\n                          </td>\r\n                          <td>\r\n                          {{data.task}}\r\n                          </td>\r\n                      </tr>\r\n\r\n                      <!-- <pagination-controls (pageChange)=\"p = $event\"></pagination-controls> -->\r\n                  </tbody>\r\n              </table>\r\n              <div class=\"col-12 paginationonAction\">\r\n                  <span class=\"total\">{{collectionSize1}} Total</span>\r\n                  <ngb-pagination [pageSize]=\"pageSize\" [(page)]=\"p\" [maxSize]=\"10\" [rotate]=\"true\" [collectionSize]=\"collectionSize1\" [boundaryLinks]=\"true\" style=\"float: right;\"></ngb-pagination>\r\n              </div>\r\n\r\n              <br />\r\n              <button type=\"submit\" class=\"btn btn-raised btn-danger mr-1\" (click)=\"cancel()\">\r\n              <!-- <i class=\"icon-trash\"></i> Cancel -->Back\r\n              </button>\r\n\r\n          </div>\r\n\r\n      </div>\r\n</div></div></div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/importlog/importlog.component.scss":
/*!****************************************************!*\
  !*** ./src/app/importlog/importlog.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltcG9ydGxvZy9pbXBvcnRsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/importlog/importlog.component.ts":
/*!**************************************************!*\
  !*** ./src/app/importlog/importlog.component.ts ***!
  \**************************************************/
/*! exports provided: ImportLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportLogComponent", function() { return ImportLogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_data_importlog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data/importlog.service */ "./src/app/shared/data/importlog.service.ts");
/* harmony import */ var _shared_data_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/data/user.service */ "./src/app/shared/data/user.service.ts");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable/release */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ImportLogComponent = /** @class */ (function () {
    function ImportLogComponent(snotifyService, importlogservice, userservice, router, route) {
        this.snotifyService = snotifyService;
        this.importlogservice = importlogservice;
        this.userservice = userservice;
        this.router = router;
        this.route = route;
        this.schedule = [];
        this.showTable = true;
        this.showForm = false;
        this.submitted = false;
        this.importlog = {
            'id': '',
            'name': '',
            'email': '',
            'phonenum': '',
            'address': '',
            'newsletter': ''
        };
        this.options = {
            types: ['geocode'],
            componentRestrictions: { country: 'AU' }
        };
        this.p = 1;
        this.pageSize = 10;
        this.rows = [];
        this.count = [];
        // columns = [
        //   { prop: 'firstName' },
        //   { prop: 'lastName' },
        //   { prop: 'email' },
        //   { prop: 'address'},
        //   { prop: 'listName' },
        //   { prop: 'subscribedOn'},
        //   { prop: 'subscribedStatus' },
        //   { prop: 'Subscribed' }
        // ];
        this.style = 'material';
        this.title = 'Snotify title!';
        this.body = 'Lorem ipsum dolor sit amet!';
        this.timeout = 3000;
        this.position = ng_snotify__WEBPACK_IMPORTED_MODULE_7__["SnotifyPosition"].centerTop;
        this.progressBar = true;
        this.closeClick = true;
        this.newTop = true;
        this.backdrop = -1;
        this.dockMax = 8;
        this.blockMax = 6;
        this.pauseHover = true;
        this.titleMaxLength = 15;
        this.bodyMaxLength = 80;
        //this.lists = new Array();
        if (localStorage.getItem("redirect") == "Y") {
            localStorage.setItem("redirect", "N");
            window.location.reload();
        }
    }
    ImportLogComponent.prototype.ngOnInit = function () {
        this.listForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'fname': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'address': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'newsletter': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, null)
        });
        this.getImportLogData();
    };
    ImportLogComponent.prototype.getImportLogData = function () {
        var _this = this;
        this.importlogservice.getImportLog().then(function (data) {
            if (data['status'] == 'success') {
                _this.listData = data['lists'];
                //alert(JSON.stringify(this.listData));
                for (var i = 0; i < _this.listData.length; i++) {
                    var encodeJSON = JSON.parse(_this.listData[i]['parameters']);
                    //alert(encodeJSON);
                    if (encodeJSON != null)
                        _this.listData[i]['parameters'] = encodeJSON['link'];
                }
                _this.collectionSize = data['lists'].length;
                _this.totalList = data['lists'].length;
            }
        });
    };
    ImportLogComponent.prototype.handleAddressChange = function (address) {
        // Do some stuff
        this.newaddress = address.formatted_address;
    };
    ImportLogComponent.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            //this.loadData();
        }
    };
    ImportLogComponent.prototype.detail = function (task_id) {
        var _this = this;
        this.showTable = false;
        this.showForm = true;
        this.save = true;
        this.importlogservice.getImportLogById(task_id).then(function (data1) {
            //alert(JSON.stringify(data1));
            if (data1['status'] == 'success') {
                _this.schedule = data1['lists'];
            }
        });
        this.importlogservice.getLogDetail(task_id).then(function (data) {
            if (data['status'] == 'success') {
                _this.listData1 = data['lists'];
                //alert(JSON.stringify(this.listData));
                // for(let i = 0; i < this.listData1.length; i++){
                //   let encodeJSON = JSON.parse(this.listData1[i]['parameters']);
                //   this.listData1[i]['parameters']= encodeJSON['link'];
                // }
                _this.collectionSize1 = data['lists'].length;
                _this.totalList1 = data['lists'].length;
            }
        });
    };
    ImportLogComponent.prototype.redirect = function () {
        //this.router.navigate(['/loyalty/transactions'],{queryParams:{id:window.btoa(id+"$reportEdit")}});
        this.router.navigate(['/configurations/import']);
    };
    ImportLogComponent.prototype.edit = function (id) {
        // this.importlogservice.getImportById(id).then(data => {
        //   this.rows = data['users'];
        // })
    };
    ImportLogComponent.prototype.updateStatus = function (event, userid) {
        var _this = this;
        var SubscriptionDetail = {
            id: userid
        };
        if (event) {
            this.userservice.addSubscriptionUser(SubscriptionDetail).then(function (data) {
                _this.snotifyService.success('Successfully Subscribed', '', _this.getConfig());
            });
        }
        else {
            this.userservice.unSubscriptionUser(SubscriptionDetail).then(function (data) {
                _this.snotifyService.success('Successfully Unsubscribed', '', _this.getConfig());
            });
        }
    };
    ImportLogComponent.prototype.cancel = function () {
        this.showTable = true;
        this.showForm = false;
        this.save = true;
        this.importlog.id = '';
        this.importlog.name = '';
        this.importlog.email = '';
        this.importlog.phonenum = '';
        this.importlog.address = '';
        this.importlog.newsletter = '';
    };
    ImportLogComponent.prototype.reset = function () {
        this.getImportLogData();
        this.fromDt = null;
        this.toDt = null;
    };
    ImportLogComponent.prototype.search = function () {
        var _this = this;
        if (this.fromDt == null && this.toDt == null) {
            //alert("Please Enter Start Date & End Date.");
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()("Error!", "Please Enter Start Date & End Date.", "error");
            // this.snotifyService.success('Please Enter Start Date & End Date.', 'Error', this.getConfig());
            return;
        }
        var stDate = new Date().toISOString().slice(0, 10);
        var endDate = new Date().toISOString().slice(0, 10);
        var flag = false;
        if (this.fromDt != null) {
            stDate = this.fromDt['year'] + '-' + this.fromDt['month'] + '-' + this.fromDt['day'];
            flag = true;
        }
        else {
            stDate = "2019-1-1";
        }
        if (this.toDt != null) {
            endDate = this.toDt['year'] + '-' + this.toDt['month'] + '-' + this.toDt['day'];
            flag = true;
        }
        else {
            flag = false;
        }
        //this.popupModel.dp = stDate;
        if ((stDate > endDate) && flag == true) {
            //alert("End Date must be greater than Start Date.");
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()("Error!", "End Date must be greater than Start Date.", "error");
            // this.snotifyService.success('End Date must be greater than Start Date.', 'Error', this.getConfig());
            return;
        }
        //let whereClause =  "active='Y' and (date(started_at)>='" + stDate + "' AND date(started_at)<='" + endDate + "')";
        var whereClause = "(date(started_at)>='" + stDate + "' AND date(started_at)<='" + endDate + "')";
        //alert(whereClause);
        this.importlogservice.filter(whereClause).then(function (data) {
            if (data['status'] == 'success') {
                _this.listData = data['lists'];
                //alert(JSON.stringify(this.listData));
                for (var i = 0; i < _this.listData.length; i++) {
                    var encodeJSON = JSON.parse(_this.listData[i]['parameters']);
                    _this.listData[i]['parameters'] = encodeJSON['link'];
                }
                _this.collectionSize = data['lists'].length;
                _this.totalList = data['lists'].length;
            }
            else {
                _this.listData = null;
                _this.collectionSize = 0;
                _this.totalList = 0;
            }
        });
    };
    ImportLogComponent.prototype.delete = function (id) {
        var _this = this;
        this.importlogservice.deleteById(id).then(function (data) {
            for (var i in _this.listData) {
                if (_this.listData[i].task_id === id) {
                    _this.listData.splice(i, 1);
                }
            }
            _this.collectionSize = _this.listData.length;
            _this.totalList = _this.listData.length;
            // alert('Deleted Successfully!');
            //this.snotifyService.error('Deleted Successfully!', 'Success', this.getConfig());
            _this.snotifyService.error('Deleted Successfully', '', _this.getConfig());
        }, function (error) {
        });
    };
    // list(){
    //     this.lists.address = this.newaddress;
    //     this.submitted = true;
    //     if(this.lists.id != ''){
    //         this.listsservice.addlist(this.lists, 'update').then(data => {
    //             if(data['status']){
    //                 this.snotifyService.success('Updated Successfullly', '', this.getConfig());
    //                 this.listData = [];
    //                 this.collectionSize = [];
    //                 this.totalList = [];
    //                 this.listsservice.getlist(new Date().getTime()).then(listdata => {
    //                     if (listdata['status'] == 'success') {
    //                         this.listData = listdata['lists'];
    //                         this.collectionSize = listdata['lists'].length;
    //                         this.totalList = listdata['lists'].length;
    //                         this.submitted = false;
    //                         this.showForm = false;
    //                         this.showTable = true;
    //                     }
    //                 });
    //             }
    //         });
    //     }
    //     else{
    //         this.listsservice.addlist(this.lists, 'add').then(data => {
    //             if(data['status']){
    //                 this.snotifyService.success('Saved Successfullly', '', this.getConfig());
    //                 this.listData = [];
    //                 this.collectionSize = [];
    //                 this.totalList = [];
    //                 this.listsservice.getlist(new Date().getTime()).then(listdata => {
    //                     if (listdata['status'] == 'success') {
    //                         this.listData = listdata['lists'];
    //                         this.collectionSize = listdata['lists'].length;
    //                         this.totalList = listdata['lists'].length;
    //                         this.submitted = false;
    //                         this.showForm = false;
    //                         this.showTable = true;
    //                     }
    //                 });
    //             }
    //         });
    //     }
    // }
    ImportLogComponent.prototype.getConfig = function () {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_4__["DatatableComponent"])
    ], ImportLogComponent.prototype, "mydatatable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("placesRef"),
        __metadata("design:type", ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__["GooglePlaceDirective"])
    ], ImportLogComponent.prototype, "placesRef", void 0);
    ImportLogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-importlog',
            template: __webpack_require__(/*! ./importlog.component.html */ "./src/app/importlog/importlog.component.html"),
            styles: [__webpack_require__(/*! ./importlog.component.scss */ "./src/app/importlog/importlog.component.scss")]
        }),
        __metadata("design:paramtypes", [ng_snotify__WEBPACK_IMPORTED_MODULE_7__["SnotifyService"], _shared_data_importlog_service__WEBPACK_IMPORTED_MODULE_2__["ImportLogService"], _shared_data_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], ImportLogComponent);
    return ImportLogComponent;
}());



/***/ }),

/***/ "./src/app/importlog/importlog.module.ts":
/*!***********************************************!*\
  !*** ./src/app/importlog/importlog.module.ts ***!
  \***********************************************/
/*! exports provided: ImportLogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportLogModule", function() { return ImportLogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _importlog_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./importlog-routing.module */ "./src/app/importlog/importlog-routing.module.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/directives/match-height.directive */ "./src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var _importlog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./importlog.component */ "./src/app/importlog/importlog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ImportLogModule = /** @class */ (function () {
    function ImportLogModule() {
    }
    ImportLogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _importlog_routing_module__WEBPACK_IMPORTED_MODULE_3__["ImportLogRoutingModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["NgxChartsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_6__["MatchHeightModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["NgxDatatableModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["GooglePlaceModule"],
                ngx_ui_switch__WEBPACK_IMPORTED_MODULE_11__["UiSwitchModule"]
            ],
            declarations: [
                _importlog_component__WEBPACK_IMPORTED_MODULE_7__["ImportLogComponent"],
            ]
        })
    ], ImportLogModule);
    return ImportLogModule;
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
//# sourceMappingURL=importlog-importlog-module.js.map