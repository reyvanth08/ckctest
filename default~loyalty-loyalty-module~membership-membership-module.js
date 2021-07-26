(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~loyalty-loyalty-module~membership-membership-module"],{

/***/ "./src/app/membership/membership.component.html":
/*!******************************************************!*\
  !*** ./src/app/membership/membership.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"basic-elements\">\r\n\r\n   <div class=\"row\" *ngIf=\"!showMembership\">\r\n      <div class=\"col-sm-12\">\r\n         <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <div class=\"col-md-6\">\r\n         <div class=\"content-header\">Membership</div>\r\n      </div>\r\n\r\n               <div class=\"row\">\r\n                 <div class=\"col-md-9 text-right\">\r\n                   <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"isCollapsed = !isCollapsed\"\r\n                           [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\r\n                     Select Columns\r\n                   </button>\r\n                   <div id=\"collapseExample\" class=\"selected-column\" [ngbCollapse]=\"!isCollapsed\">\r\n                     <ul>\r\n                         <li *ngFor='let col of allColumns'>\r\n                           <input\r\n                             type='checkbox'\r\n                             [id]=\"col.name\"\r\n                             (click)='toggle(col)'\r\n                             [checked]='isChecked(col)'\r\n                           />\r\n                           <label [attr.for]=\"col.name\">{{col.name}}</label>\r\n                         </li>\r\n                     </ul>\r\n                   </div>\r\n                 </div>\r\n                 <div class=\"col-md-3\">\r\n                   <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-bitbucket right\" (click)=\"memToggle()\"><span class=\"ft-plus\"></span>Add Membership</a>\r\n                 </div>\r\n               </div>\r\n               <!-- <div class=\"col-sm-12\" style=\"text-align: left;\">\r\n                      <button type=\"button\" class=\"btn btn-outline-primary mt-2\" (click)=\"isCollapsed = !isCollapsed\"\r\n                              [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\r\n                        Select Columns\r\n                      </button>\r\n\r\n              <div id=\"collapseExample\" class=\"selected-column\" [ngbCollapse]=\"!isCollapsed\">\r\n                <ul>\r\n                    <li *ngFor='let col of allColumns'>\r\n                      <input\r\n                        type='checkbox'\r\n                        [id]=\"col.name\"\r\n                        (click)='toggle(col)'\r\n                        [checked]='isChecked(col)'\r\n                      />\r\n                      <label [attr.for]=\"col.name\">{{col.name}}</label>\r\n                    </li>\r\n                </ul>\r\n              </div></div> -->\r\n               <!--<div class=\"card-body\">\r\n                  <div class=\"card-block\">\r\n                     <ngx-datatable class=\"material\" class=\"bootstrap\" [rows]=\"members\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"50\" [sorts]=\"[{prop: ['plans', 'price', 'terms'], dir: 'desc'}]\" [limit]=\"10\">\r\n                     <ngx-datatable-column name=\"Membership Name\">\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                           {{row.plans}}\r\n                        </ng-template>\r\n                     </ngx-datatable-column>\r\n                     <ngx-datatable-column name=\"Price\">\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                           {{row.price}}\r\n                        </ng-template>\r\n                     </ngx-datatable-column>\r\n                     <ngx-datatable-column name=\"Duration\">\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                           {{row.terms}} {{row.duration}}\r\n                        </ng-template>\r\n                     </ngx-datatable-column>\r\n                     <ngx-datatable-column name=\"Action\">\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                           <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"editmembership(row.id)\">\r\n                           <i class=\"fas fa-pencil-alt font-medium-3 mr-2\"></i>\r\n                           </a>\r\n                           <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"deletemembership(row.id)\">\r\n                           <i class=\"fas fa-trash font-medium-3 mr-2\"></i>\r\n                           </a>\r\n                        </ng-template>\r\n                     </ngx-datatable-column>\r\n                     </ngx-datatable>\r\n                  </div>\r\n               </div>-->\r\n               <div>\r\n                <ngx-datatable\r\n                class ='material'\r\n                  class='bootstrap'\r\n                  [rows]='members'\r\n                  [columnMode]=\"'force'\"\r\n                  [headerHeight]=\"50\"\r\n                  [footerHeight]=\"50\"\r\n                  [rowHeight]=\"'auto'\">\r\n                  <ngx-datatable-column\r\n                    *ngFor=\"let col of columns\"\r\n                    [name]=\"col.name\">\r\n                  </ngx-datatable-column>\r\n                 <ngx-datatable-column name=\"Action\">\r\n                                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                    <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"editmembership(row.id)\">\r\n                                        <i class=\"fas fa-pencil-alt font-medium-3 mr-2\"></i>\r\n                                    </a>\r\n                                    <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"deletemembership(row.id)\">\r\n                                        <i class=\"fas fa-trash font-medium-3 mr-2\"></i>\r\n                                    </a>\r\n                                  </ng-template>\r\n                              </ngx-datatable-column>\r\n                </ngx-datatable>\r\n            </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <div class=\"row\" *ngIf=\"showMembership\">\r\n      <div class=\"col-sm-12\">\r\n         <div class=\"card\">\r\n            <div class=\"card-body\">\r\n               <div class=\"card-block\">\r\n                  <form [formGroup]=\"membershipForm\" novalidate>\r\n                     <div class=\"form-group\">\r\n                        <label for=\"membershipName\">Membership Name</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"membershipName\" formControlName=\"membershipName\" required>\r\n                        <small class=\"form-text text-muted danger\" *ngIf=\"!membershipForm.get('membershipName').valid && (membershipForm.get('membershipName').dirty || membershipForm.get('membershipName').touched)\">This field is required!</small>\r\n                     </div>\r\n                     <div class=\"from-group\">\r\n                        <label for=\"membershipName\">Membership Logo</label>\r\n                        <div class=\"row\" *ngIf=\"!memShowLogo || memLogo == ''\">\r\n                           <div class=\"col-sm-8\">\r\n                              <div class=\"form-group\">\r\n                                 <div class=\"custom-file center-block d-block\">\r\n                                    <input type=\"file\" class=\"custom-file-input\" id=\"membershipIcon\" formControlName=\"membershipIcon\" (change)=\"uploadmembershipIcon($event.target.files)\">\r\n                                    <label class=\"custom-file-label\" for=\"membershipIcon\" #membershipIconLabel>Choose file</label>\r\n                                 </div>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                        <div class=\"row\" *ngIf=\"memShowLogo && memLogo != ''\">\r\n                           <div class=\"col-sm-8\">\r\n                              <div class=\"form-group\">\r\n                                 <img src=\"{{memLogo}}\" style=\"width: 50% !important;\"/>\r\n                              </div>\r\n                           </div>\r\n                           <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                 <button type=\"button\" class=\"btn btn-danger btn-raised mr-1\" (click)=\"memShowLogo = !memShowLogo\">Change Logo</button>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"form-group\">\r\n                        <label for=\"textArea\">Description</label>\r\n                        <textarea class=\"form-control\" rows=\"3\" id=\"textArea\" formControlName=\"textArea\"></textarea>\r\n                        <small class=\"form-text text-muted danger\" *ngIf=\"!membershipForm.get('textArea').valid && (membershipForm.get('textArea').dirty || membershipForm.get('textArea').touched)\">This field is required!</small>\r\n                     </div>\r\n                     <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                           <div class=\"form-group\">\r\n                              <label for=\"duration\">Duration</label>\r\n                              <div class=\"input-group\">\r\n                                 <input type=\"number\" id=\"duration\" min=\"0\" max=\"36\" oninput=\"this.value = Math.abs(this.value)\" class=\"form-control\" formControlName=\"duration\" required>\r\n                              </div>\r\n                              <small class=\"form-text text-muted danger\" *ngIf=\"!membershipForm.get('duration').valid && (membershipForm.get('duration').dirty || membershipForm.get('duration').touched)\">This field is required!</small>\r\n                           </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                           <div class=\"form-group\">\r\n                              <label for=\"durationIn\">Membership Period</label>\r\n                              <div class=\"input-group\">\r\n                                 <select id=\"durationIn\" class=\"form-control\" formControlName=\"durationIn\" required [value]='selectval'>\r\n                                    <option value=\"\">Select</option>\r\n                                    <option value=\"days\">Days</option>\r\n                                    <option value=\"month\">Month</option>\r\n                                    <option value=\"year\">Year</option>\r\n                                 </select>\r\n                              </div>\r\n                              <small class=\"form-text text-muted danger\" *ngIf=\"!membershipForm.get('durationIn').valid && (membershipForm.get('durationIn').dirty || membershipForm.get('durationIn').touched)\">This field is required!</small>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"form-group\">\r\n                        <label for=\"price\">Price</label>\r\n                        <div class=\"input-group\">\r\n                           <div class=\"input-group-prepend\">\r\n                              <span class=\"input-group-text\">$</span>\r\n                           </div>\r\n                           <input type=\"number\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" formControlName=\"price\" min=\"1\" oninput=\"this.value = Math.abs(this.value)\" required>\r\n                        </div>\r\n                        <small class=\"form-text text-muted danger\" *ngIf=\"!membershipForm.get('price').valid && (membershipForm.get('price').dirty || membershipForm.get('price').touched)\">This field is required!</small>\r\n                     </div>\r\n                     <!-- <h2>Renewal Reminder Configuration</h2>\r\n                     <p>Enter the number of days and choose template for reminding the users on their membership renewal.</p>\r\n                     <div formArrayName=\"actionset\">\r\n                        <div  [formGroupName]=\"i\" *ngFor=\"let tech of membershipForm.controls.actionset.controls; let i = index\">\r\n                        <div class=\"row\" >\r\n                           <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\r\n                              <div class=\"form-group\">\r\n                                 <label>Reminder Days</label>\r\n                                 <input type=\"number\" max=\"30\" oninput=\"this.value = Math.abs(this.value)\" formControlName=\"days\" class=\"form-control\" required>\r\n                              </div>\r\n                           </div>\r\n                           <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\" >\r\n                              <div class=\"form-group\">\r\n                                 <label>Choose Template</label>\r\n                                 <select  class=\"custom-select mb-2\" formControlName=\"template\" placeholder=\"Select an template\" required>\r\n                                    <option *ngFor=\"let template of templates\" value=\"{{template.id}}\">{{template.name}}</option>\r\n                                 </select>\r\n                              </div>\r\n                           </div>\r\n                           <div class=\"col-xl-1 col-lg-6 col-md-12 mb-1\" >\r\n                              <div class=\"col-xl-2 col-lg-6 col-md-12 mb-1\">\r\n                                 <label></label>\r\n                                 <button class=\"btn btn-danger mr-1 btn-fab\"\r\n                                    (click)=\"removeSetCondition(i)\"><i class=\"fa fa-times\"></i></button>\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                   </div> -->\r\n               <!-- <button type=\"button\" class=\"btn btn-outline-primary btn-block btn-raised\" (click)=\"addSetCondition()\" >Add Condition</button> -->\r\n               <div class=\"form-group\">\r\n               <button type=\"button\" class=\"btn btn-danger btn-raised mr-1\" (click)=\"cancel()\">Cancel</button>\r\n               <button type=\"button\" class=\"btn btn-success btn-raised\" (click)=\"addMembership()\" [disabled]=\"!membershipForm.valid || submitted\">Submit</button>\r\n               </div>\r\n               </form>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/membership/membership.component.scss":
/*!******************************************************!*\
  !*** ./src/app/membership/membership.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected-column {\n  width: 38%;\n  margin-right: 20px;\n  float: right;\n  text-align: left;\n  background: #FFF;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24); }\n\nli {\n  list-style: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVyc2hpcC9DOlxcVXNlcnNcXE1SVDIwXFxEZXNrdG9wXFxVTVxcdXNlcm1hbmFnZW1lbnQvc3JjXFxhcHBcXG1lbWJlcnNoaXBcXG1lbWJlcnNoaXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLDZFQUE0RSxFQUM3RTs7QUFDRDtFQUNFLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnNoaXAvbWVtYmVyc2hpcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3RlZC1jb2x1bW57XHJcbiAgd2lkdGg6IDM4JTtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZDogI0ZGRjtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG59XHJcbmxpe1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/membership/membership.component.ts":
/*!****************************************************!*\
  !*** ./src/app/membership/membership.component.ts ***!
  \****************************************************/
/*! exports provided: MembershipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembershipComponent", function() { return MembershipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable/release */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_data_membership_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/data/membership.service */ "./src/app/shared/data/membership.service.ts");
/* harmony import */ var _shared_data_email_template_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/data/email-template.service */ "./src/app/shared/data/email-template.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MembershipComponent = /** @class */ (function () {
    function MembershipComponent(http, snotifyService, membershipservice, emailTemplateService, router, _FB) {
        this.http = http;
        this.snotifyService = snotifyService;
        this.membershipservice = membershipservice;
        this.emailTemplateService = emailTemplateService;
        this.router = router;
        this._FB = _FB;
        this.members = [];
        this.showMembership = false;
        this.p = 1;
        this.pageSize = 5;
        this.editMem = false;
        this.memId = 0;
        this.selectval = '';
        this.memLogo = '';
        this.memShowLogo = false;
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
        this.submitted = false;
        /*columns = [
          { name: 'Membership Name' },
          { name: 'Price' },
          { name: 'Duration' },
          { name: 'Action' }
        ];*/
        this.columns = [
            { name: 'Plans' },
            { name: 'Price' },
            { name: 'Duration' }
        ];
        this.allColumns = [
            { name: 'Plans' },
            { name: 'Price' },
            { name: 'Duration' }
        ];
        this.isCollapsed = false;
        this.actionsetIndex = 0;
    }
    MembershipComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.membershipForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'membershipName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'textArea': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, null),
            'price': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'duration': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'durationIn': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'membershipIcon': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, null),
        }, { updateOn: 'blur' });
        this.membershipservice.getMembership().then(function (data) {
            if (data['membership']) {
                _this.members = data['membership'];
                _this.collectionSize = data['membership'].length;
                _this.totalList = data['membership'].length;
            }
        }, function (error) {
        });
        this.emailTemplateService.getNewsTemp(new Date()).then(function (data) {
            if (data['status'] == 'success') {
                _this.templates = data['emailTemplate'];
                // this.templates = [...this.templates];
                //this.addSetCondition(0);
            }
            else {
                _this.templates = [];
            }
        });
    };
    Object.defineProperty(MembershipComponent.prototype, "f", {
        get: function () { return this.membershipForm.controls; },
        enumerable: true,
        configurable: true
    });
    MembershipComponent.prototype.toggle = function (col) {
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
    MembershipComponent.prototype.isChecked = function (col) {
        return this.columns.find(function (c) {
            return c.name === col.name;
        });
    };
    MembershipComponent.prototype.memToggle = function () {
        this.showMembership = true;
    };
    MembershipComponent.prototype.initMapFields = function () {
        //  let f = 'days'+index;
        //  let m = 'template'+index;
        //  return this._FB.group({
        //    f : '',
        //    m: ''
        //  });
        return this._FB.group({
            days: [],
            template: []
        });
    };
    MembershipComponent.prototype.addSetCondition = function () {
        //  let fg = this._FB.group(new FormControl());
        //  this.particularsArray.push(this.initMapFields(this.actionsetIndex));
        //  this.actionsetIndex ++;
        // const control = <FormArray>this.membershipForm.controls.actionset;
        // control.push(this.initMapFields());
        // this.actionsetIndex ++;
    };
    MembershipComponent.prototype.removeSetCondition = function (i) {
        // const control = <FormArray>this.membershipForm.controls.actionset;
        // control.removeAt(i);
    };
    MembershipComponent.prototype.addSetConditionEdit = function (myobj) {
        // const control = <FormArray>this.membershipForm.controls.actionset;
        // control.push(this.initMapFieldsEdit(myobj));
    };
    MembershipComponent.prototype.initMapFieldsEdit = function (myobj) {
        return this._FB.group({
            days: [myobj['days']],
            template: [myobj['template']]
        });
    };
    //  addSetConditionEdit(myobj, index){
    //    let fg = this._FB.group(new FormControl());
    //    this.particularsArray.push(this.initMapFieldsEdit(myobj, index));
    //   //  const control = <FormArray>this.membershipForm.controls.actionset;
    //   //  control.push(this.initMapFieldsEdit(myobj, index));
    //   }
    //
    //   initMapFieldsEdit(myobj, index) : FormGroup{
    //     let f = 'days'+index;
    //     let m = 'template'+index;
    //     return this._FB.group({
    //       f   : [myobj[f]],
    //       m   : [myobj[m]]
    //     });
    //   }
    MembershipComponent.prototype.cancel = function () {
        var _this = this;
        //window.location.reload();
        this.showMembership = false;
        this.membershipForm.reset();
        this.memLogo = '';
        this.memShowLogo = false;
        this.selectval = '';
        this.memId = 0;
        this.editMem = false;
        this.membershipForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'membershipName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'textArea': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, null),
            'price': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'duration': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'durationIn': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'membershipIcon': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, null),
        }, { updateOn: 'blur' });
        this.membershipservice.getMembershipTime(new Date().getTime()).then(function (data) {
            if (data['membership']) {
                _this.members = data['membership'];
                _this.collectionSize = data['membership'].length;
                _this.totalList = data['membership'].length;
            }
        }, function (error) {
        });
    };
    MembershipComponent.prototype.addMembership = function () {
        var _this = this;
        this.submitted = true;
        if (!this.editMem) {
            this.memDetail = {
                memname: this.f.membershipName.value,
                description: this.f.textArea.value,
                duration: this.f.duration.value,
                price: this.f.price.value,
                durationIn: this.f.durationIn.value,
                membershipIcon: this.memLogo,
            };
            this.membershipservice.addMembership(this.memDetail).then(function (data) {
                if (data['status']) {
                    _this.actionsetIndex = 0;
                    _this.memId = 0;
                    _this.snotifyService.success('Saved Successfully', '', _this.getConfig());
                    _this.submitted = false;
                    _this.showMembership = false;
                    _this.membershipForm.reset();
                    _this.membershipForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                        'membershipName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                        'textArea': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, null),
                        'price': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                        'duration': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                        'durationIn': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                        'membershipIcon': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, null),
                    }, { updateOn: 'blur' });
                    _this.membershipservice.getMembershipTime(new Date().getTime()).then(function (data) {
                        if (data['membership']) {
                            _this.members = data['membership'];
                            _this.collectionSize = data['membership'].length;
                            _this.totalList = data['membership'].length;
                        }
                    }, function (error) {
                    });
                    //this.router.navigate(['/membership']);
                }
            });
        }
        else {
            var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
                '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
            //if(pattern.test(this.memLogo)){
            this.memLogo = this.memLogo.substring(this.memLogo.lastIndexOf('/') + 1);
            //}
            console.log('memLogo 1- ' + this.memLogo.substring(this.memLogo.lastIndexOf('/') + 1));
            console.log('pattern.test(this.memLogo) - ' + pattern.test(this.memLogo));
            this.memDetail = {
                memname: this.f.membershipName.value,
                description: this.f.textArea.value,
                duration: this.f.duration.value,
                price: this.f.price.value,
                durationIn: this.f.durationIn.value,
                membershipIcon: this.memLogo,
                id: this.memId,
            };
            console.log('memLogo 2- ' + this.memLogo);
            //console.log('memDetail - '+this.memDetail);
            this.membershipservice.updateMembership(this.memDetail).then(function (data) {
                if (data['status']) {
                    _this.submitted = false;
                    console.log(data['membership']);
                    _this.showMembership = false;
                    _this.membershipForm.reset();
                    _this.membershipForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                        'membershipName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                        'textArea': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, null),
                        'price': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                        'duration': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                        'durationIn': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                        'membershipIcon': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, null),
                    }, { updateOn: 'blur' });
                    _this.memLogo = '';
                    _this.memShowLogo = false;
                    _this.selectval = '';
                    _this.membershipservice.getMembershipTime(new Date().getTime()).then(function (data) {
                        if (data['membership']) {
                            _this.memId = 0;
                            _this.editMem = false;
                            _this.snotifyService.success('Updated Successfully', '', _this.getConfig());
                            _this.members = data['membership'];
                            _this.collectionSize = data['membership'].length;
                            _this.totalList = data['membership'].length;
                        }
                    }, function (error) {
                    });
                }
            });
        }
    };
    MembershipComponent.prototype.editmembership = function (id) {
        var _this = this;
        this.membershipservice.getMembershipById(id).then(function (data) {
            if (data['status'] == 'success') {
                _this.submitted = false;
                _this.membershipForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    'membershipName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    'textArea': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, null),
                    'price': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    'duration': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    'durationIn': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                    'membershipIcon': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, null),
                }, { updateOn: 'blur' });
                _this.actionsetIndex = 0;
                _this.membershipForm.controls['membershipName'].setValue(data['membership'][0]['plans']);
                _this.membershipForm.controls['textArea'].setValue(data['membership'][0]['description']);
                _this.membershipForm.controls['price'].setValue(data['membership'][0]['price']);
                _this.membershipForm.controls['duration'].setValue(data['membership'][0]['terms']);
                _this.membershipForm.controls['durationIn'].setValue(data['membership'][0]['duration']);
                _this.memLogo = data['membership'][0]['membershipIcon'];
                //this.membershipForm.controls['membershipIcon'].setValue(data['membership'][0]['membershipIcon']);
                //this.membershipIconLabel.nativeElement.innerHTML = data['membership'][0]['membershipIcon'];
                _this.selectval = data['membership'][0]['duration'];
                _this.memId = data['membership'][0]['id'];
                _this.showMembership = true;
                _this.editMem = true;
                _this.memShowLogo = true;
                // let actionset = data['membership'][0]['templateMapping'];
                // console.log(actionset.length);
                // for(let i= 0; i< actionset.length; i++){
                //   this.addSetConditionEdit(actionset[i]);
                // }
                // for(let i = 0; i < actionset.length; i++){
                //   this.addSetConditionEdit(actionset[i], i);
                // }
                //this.membershipForm.controls['actionset'].push();
                //console.log(this.membershipForm.controls['membershipIcon'].value);
                //this.router.navigate(['/membership']);
            }
        });
    };
    MembershipComponent.prototype.deletemembership = function (id) {
        var _this = this;
        this.membershipservice.deleteMembership(id).then(function (data) {
            if (data['text'] == "true") {
                _this.snotifyService.error('Deleted Successfully', '', _this.getConfig());
                _this.membershipservice.getMembershipTime(new Date().getTime()).then(function (data) {
                    if (data['membership']) {
                        _this.members = data['membership'];
                        _this.collectionSize = data['membership'].length;
                        _this.totalList = data['membership'].length;
                    }
                }, function (error) {
                });
            }
            else if (data['text'] == 'cannot delete') {
                _this.snotifyService.success('Connot delete membership as it is used in loyalty program', '', _this.getConfig());
            }
        });
    };
    MembershipComponent.prototype.uploadmembershipIcon = function (files) {
        this.membershipIconLabel.nativeElement.innerHTML = files[0].name;
        this.memLogo = files[0].name;
        //console.log(this.membershipIconLabel.nativeElement);
        //alert(files[0].name);
        this.uploadAndProgress(files);
    };
    MembershipComponent.prototype.uploadAndProgress = function (files) {
        console.log(files);
        var formData = new FormData();
        Array.from(files).forEach(function (f) { return formData.append('file', f); });
        this.http.post('https://cockburncrc.com.au/members/usermanagement/uploadLogo.php?fld=MembershipLogo', formData, { reportProgress: true, observe: 'events' })
            .subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].UploadProgress) {
                //this.percentDone = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpResponse"]) {
                //this.uploadSuccess = true;
            }
        });
    };
    MembershipComponent.prototype.getConfig = function () {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('membershipIconLabel'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MembershipComponent.prototype, "membershipIconLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"])
    ], MembershipComponent.prototype, "table", void 0);
    MembershipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-membership',
            template: __webpack_require__(/*! ./membership.component.html */ "./src/app/membership/membership.component.html"),
            styles: [__webpack_require__(/*! ./membership.component.scss */ "./src/app/membership/membership.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyService"], _shared_data_membership_service__WEBPACK_IMPORTED_MODULE_6__["MembershipService"], _shared_data_email_template_service__WEBPACK_IMPORTED_MODULE_7__["EmailTemplateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], MembershipComponent);
    return MembershipComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~loyalty-loyalty-module~membership-membership-module.js.map