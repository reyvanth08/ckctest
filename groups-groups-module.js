(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["groups-groups-module"],{

/***/ "./src/app/groups/group-detail/group-detail.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/groups/group-detail/group-detail.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"tabs\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"card-title-wrap bar-success\">\r\n            <h4 class=\"card-title\">{{groupName}}</h4>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <ngb-tabset>\r\n              <ngb-tab title=\"Home\">\r\n                <ng-template ngbTabContent>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                      <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                          <div class=\"card-title-wrap\">\r\n                            <div class=\"content-header\">Create Group</div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                          <div class=\"card-block\">\r\n                            <form  class=\"form\" #groupsForm=\"ngForm\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                  <div class=\"form-group\">\r\n                                    <label>Name</label>\r\n                                    <input type=\"text\" name=\"groupName\" [(ngModel)]=\"groupData.groupName\" class=\"form-control\" [disabled]=\"!isGroupAdmin\">\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"row\">\r\n                               <div class=\"col-md-6\">\r\n                                  <div class=\"form-group\">\r\n                                   <label>Description</label>\r\n                                   <textarea class=\"form-control\" name=\"groupDescription\" [(ngModel)]=\"groupData.groupDescription\" rows=\"3\" [disabled]=\"!isGroupAdmin\"></textarea>\r\n                                  </div>\r\n                               </div>\r\n                             </div>\r\n                             <div class=\"row\">\r\n                              <div class=\"col-md-6\">\r\n                                 <div class=\"form-group\">\r\n                                   <div class=\"row\" *ngIf=\"memShowLogo && groupData.coverPhoto != ''\">\r\n                                      <div class=\"col-sm-8\">\r\n                                         <div class=\"form-group\">\r\n                                            <img src=\"https://cockburncrc.com.au/members/usermanagement/images/groups/{{groupData.coverPhoto}}\" style=\"width: 50% !important;\"/>\r\n                                         </div>\r\n                                      </div>\r\n                                      <div class=\"col-sm-3\">\r\n                                         <div class=\"form-group\">\r\n                                            <button type=\"button\" class=\"btn btn-danger btn-raised mr-1\"  (click)=\"memShowLogo = !memShowLogo\" [disabled]=\"!isGroupAdmin\" required>Change Logo</button>\r\n                                         </div>\r\n                                      </div>\r\n\r\n                                   </div>\r\n                                   <div class=\"row\" *ngIf=\"!memShowLogo || groupData.coverPhoto == ''\">\r\n                                     <label for=\"file\">Upload Cover Photo</label>\r\n                                     <div class=\"custom-file center-block d-block\">\r\n                                       <input type=\"file\" class=\"custom-file-input\" id=\"coverPhoto\" name=\"coverPhoto\" (change)=\"uploadCoverPhoto($event.target.files)\" >\r\n                                       <label class=\"custom-file-label\" for=\"coverPhoto\" #coverPhoto>Choose file</label>\r\n                                      </div>\r\n                                    </div>\r\n                                 </div>\r\n                               </div>\r\n                              </div>\r\n                              <div class=\"row\" >\r\n                               <div class=\"form-group\">\r\n                                <div class=\"col-md-6\">\r\n                                  <label>Group Control</label>\r\n                                  <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"groupControl\" [(ngModel)]=\"groupData.groupControl\" [disabled]=\"!isGroupAdmin\">\r\n                                    <label ngbButtonLabel class=\"btn-raised btn-primary\">\r\n                                        <input ngbButton type=\"radio\" [value]=\"1\"> Member Invite\r\n                                    </label>\r\n                                    <label ngbButtonLabel class=\"btn-raised btn-primary\">\r\n                                        <input ngbButton type=\"radio\"  [value]=\"2\"> Admin Invite\r\n                                    </label>\r\n                                    <label ngbButtonLabel class=\"btn-raised btn-primary\">\r\n                                        <input ngbButton type=\"radio\" [value]=\"3\"> Any one can join\r\n                                    </label>\r\n                                  </div>\r\n                                    <!-- <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"groupControl\" [(ngModel)]=\"groupData.groupControl\">\r\n                                        <label ngbButtonLabel class=\"btn-raised btn-primary\">\r\n                                            <input ngbButton type=\"radio\" [value]=\"member\"> Member Invite\r\n                                        </label>\r\n                                        <label ngbButtonLabel class=\"btn-raised btn-primary\">\r\n                                            <input ngbButton type=\"radio\" [value]=\"admin\"> Admin Invite\r\n                                        </label>\r\n                                        <label ngbButtonLabel class=\"btn-raised btn-primary\">\r\n                                            <input ngbButton type=\"radio\" [value]=\"any\"> Any one can join\r\n                                        </label>\r\n                                    </div> -->\r\n                               </div>\r\n                             </div>\r\n                            </div>\r\n                            <div class=\"form-group \">\r\n                              <button type=\"submit\" class=\"btn btn-info btn-raised\" (click)=\"updateGroups(groupData.id)\" [disabled]=\"!isGroupAdmin\" > Save </button>\r\n                              <button  class=\"btn btn-danger btn-raised \" style=\"margin-left:10px;\" (click)=\"cancels()\" [disabled]=\"!isGroupAdmin\">Cancel</button>\r\n                          <!-- </div> -->\r\n                            </div>\r\n                            </form>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </ng-template>\r\n              </ngb-tab>\r\n\r\n              <ngb-tab title=\"Members\">\r\n                <app-group-members></app-group-members>\r\n                <!-- <ngb-tab title=\"Normal Campaign Reports\" id=\"normal\" active=\"SelectedTab == 'normal'\"> -->\r\n\t\t\t\t\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t          \t<ngx-datatable class=\"material\" class=\"bootstrap\" [rows]=\"groupmembersname\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"50\"  [limit]=\"10\">\r\n\t\t\t\t              <ngx-datatable-column name=\"Member Name\">\r\n\t\t\t\t                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t\t                      {{row.name}}\r\n\t\t\t\t                  </ng-template>\r\n\t\t\t\t              </ngx-datatable-column>\r\n\t\t\t\t              <ngx-datatable-column name=\"GroupName\">\r\n\t\t\t\t                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t\t                      {{row.groupname}}\r\n\t\t\t\t                  </ng-template>\r\n\t\t\t\t              </ngx-datatable-column>\r\n\t\t\t\t              <ngx-datatable-column name=\"Group id\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{row.group_id}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t                </ngx-datatable-column>\r\n\t\t\t            \t</ngx-datatable>\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</ngb-tab>\r\n\r\n              <ngb-tab title=\"Discussion Forum\" *ngIf=\"discussionForum\">\r\n\r\n              </ngb-tab>\r\n            </ngb-tabset>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/groups/group-detail/group-detail.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/groups/group-detail/group-detail.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cC1kZXRhaWwvZ3JvdXAtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/groups/group-detail/group-detail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/groups/group-detail/group-detail.component.ts ***!
  \***************************************************************/
/*! exports provided: GroupDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDetailComponent", function() { return GroupDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_data_groups_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/data/groups.service */ "./src/app/shared/data/groups.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GroupDetailComponent = /** @class */ (function () {
    function GroupDetailComponent(groupsService, formBuilder, http, snotifyService, route, router) {
        var _this = this;
        this.groupsService = groupsService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.snotifyService = snotifyService;
        this.route = route;
        this.router = router;
        this.groupData = {
            'groupName': '',
            'groupDescription': '',
            'groupControl': '',
            'coverPhoto': '',
            'user_id': localStorage.getItem('currentUserId'),
            'id': 0
        };
        this.groupmembersname = [];
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
        this.isGroupAdmin = false;
        this.isUser = false;
        this.groupCtrl = {
            'member': 1,
            'admin': 2,
            'any': 3
        };
        this.groupCtrlUpdate = {
            '1': 'member',
            '2': 'admin',
            '3': 'any'
        };
        this.Columns = [
            { name: 'Name' },
            { name: 'GroupName' },
            { name: 'group_id' },
        ];
        this.discussionForum = true;
        this.memShowLogo = false;
        var users = JSON.parse(localStorage.getItem('currentUser'));
        this.userId = users['id'];
        this.route.queryParams.subscribe(function (params) {
            _this.groupId = window.atob(params['id']);
            if (params['v']) {
                _this.discussionForum = false;
            }
            _this.groupsService.editGroup(_this.groupId).then(function (data) {
                if (data['status'] == 'success') {
                    _this.groupData.groupName = data['groups'][0]['name'];
                    _this.groupData.groupDescription = data['groups'][0]['description'];
                    _this.groupData.user_id = data['groups'][0]['admin_id'];
                    _this.groupData.coverPhoto = data['groups'][0]['coverPhoto'];
                    if (_this.groupData.coverPhoto != '') {
                        _this.memShowLogo = true;
                    }
                    else {
                        _this.memShowLogo = false;
                    }
                    _this.groupData.groupControl = _this.groupCtrl[data['groups'][0]['access']];
                    _this.groupData.id = data['groups'][0]['id'];
                    if (data['groups'][0]['admin_id'] == _this.userId) {
                        _this.isGroupAdmin = true;
                    }
                    else {
                        _this.isGroupAdmin = false;
                    }
                }
            });
        });
        this.groupsService.viewGroupMembers(this.groupId).then(function (data) {
            if (data['status'] == 'success') {
                _this.groupmembersname = data['groups'];
            }
            else {
                _this.groupmembersname = [];
            }
        });
    }
    GroupDetailComponent.prototype.ngOnInit = function () {
        //console.log(this);
        //   this.groupsService.viewGroupMembers(this.groupId).then(data =>{
        //         if(data['status'] == 'success'){
        //           this.groupmembersname= data['groups'];
        //         }
        //         else{
        //           this.groupmembersname=[];
        //         }
        // });
    };
    GroupDetailComponent.prototype.updateGroups = function (id) {
        var _this = this;
        var v = this.groupData.groupControl;
        this.groupsService.updateGroups(this.groupData).then(function (data) {
            if (data['status'] == 'success') {
                _this.snotifyService.success('Group updated Successfully', '', _this.getConfig());
                _this.groupData.groupControl = _this.groupCtrl[_this.groupData.groupControl];
            }
            else {
                _this.snotifyService.error('error in group update ', '', _this.getConfig());
            }
        });
    };
    GroupDetailComponent.prototype.cancels = function (id) {
        this.router.navigate(['/groups/group-listing']);
    };
    GroupDetailComponent.prototype.uploadCoverPhoto = function (files) {
        this.coverPhoto.nativeElement.innerHTML = files[0].name;
        this.groupData.coverPhoto = files[0].name;
        console.log(this.coverPhoto.nativeElement);
        //alert(files[0].name);
        this.uploadAndProgress(files);
    };
    GroupDetailComponent.prototype.uploadAndProgress = function (files) {
        console.log(files);
        var formData = new FormData();
        Array.from(files).forEach(function (f) { return formData.append('file', f); });
        this.http.post('https://cockburncrc.com.au/members/usermanagement/uploadLogo.php?fld=groups', formData, { reportProgress: true, observe: 'events' })
            .subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress) {
                //this.percentDone = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]) {
                //this.uploadSuccess = true;
            }
        });
    };
    GroupDetailComponent.prototype.getConfig = function () {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("groupsForm"),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], GroupDetailComponent.prototype, "groupsForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('coverPhoto'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GroupDetailComponent.prototype, "coverPhoto", void 0);
    GroupDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-group-detail',
            template: __webpack_require__(/*! ./group-detail.component.html */ "./src/app/groups/group-detail/group-detail.component.html"),
            styles: [__webpack_require__(/*! ./group-detail.component.scss */ "./src/app/groups/group-detail/group-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_data_groups_service__WEBPACK_IMPORTED_MODULE_4__["GroupsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], GroupDetailComponent);
    return GroupDetailComponent;
}());



/***/ }),

/***/ "./src/app/groups/group-listing/group-listing.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/groups/group-listing/group-listing.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"card-deck\" *ngIf=\"!addGroup\"  class=\"basic-elements\">\r\n\r\n <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n          <div class=\"content-header\">All Groups {{count}}</div>\r\n      </div>\r\n\r\n    <div class=\"col-md-6\">\r\n      <div class=\"content-header text-right\"><a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-bitbucket float-right\" (click)=\"addGroup = !addGroup\"><span class=\"ft-plus\"></span> Add Groups</a></div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n          Order By:\r\n          <select (change)=\"orderBy($event)\" style=\"font-size:15px;\" name=\"activity\" >\r\n            <option value=\"all\">All</option>\r\n            <option value=\"active\">Active</option>\r\n            <option value=\"inactive\">InActive</option>\r\n            <option value=\"alphabetical\">Alphabetical</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <form class=\"form\">\r\n          <div class=\"form-group inputs-icons\">\r\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"  name=\"form-control-with-icon\" (input)=\"searchGroups($event.target.value)\">\r\n\t\t\t\t\t\t\t<div class=\"form-control-position\">\r\n\t\t\t\t\t\t\t\t<i class=\"ft-search info\"></i>\r\n              </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n          </form>\r\n        </div>\r\n      <div class=\"col-md-3\">\r\n        <button class=\"btn btn-lg btn-outline-primary\" *ngIf=\"isGroupAdmin\" (click)=\"groupdetails(modelcontent)\">Notifications</button>\r\n          <!-- <input type=\"button\" onclick=\"groupdetails() \" value=\"Group details\"> -->\r\n      </div>\r\n    </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-3 col-lg-6 col-12\" *ngFor=\"let groups of groupList\">\r\n      <div class=\"card-deck\">\r\n        <div class=\"card\">\r\n          <img class=\"card-img-top\" src=\"https://cockburncrc.com.au/members/usermanagement/images/groups/{{groups.coverPhoto}}\" alt=\"Card image cap\">\r\n          <div class=\"align-self-center halfway-fab text-center\">\r\n              <a class=\"profile-image\">\r\n                  <img src=\"https://cockburncrc.com.au/members/usermanagement/images/groups/{{groups.coverPhoto}}\" class=\"rounded-circle img-border gradient-summer width-100\" alt=\"Card image\">\r\n              </a>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n             <div class=\"form-group \">\t\r\n              <h4 class=\"card-title text-center\"><a  class=\"success p-0\" (click)=\"redirect(groups.id,(userId != groups.admin_id));\">{{groups.name}}</a></h4>\t\r\n                </div>\r\n              <div class=\"text-center\">\r\n                <a class=\"btn btn-success mr-1 btn-fab \" *ngIf=\"userId == groups.admin_id\" (click)=\"redirect(groups.id)\">\r\n                  <i class=\"fa fa-pencil-alt\"></i>\r\n                </a>\r\n                <a class=\"btn btn-warning mr-1 btn-fab\">\r\n                  <i class=\"fa fa-clock-o\"></i>\r\n                </a>\r\n                <a class=\"btn btn-danger mr-1 btn-fab\">\r\n                  <i class=\"fa fa-users\"></i>\r\n                </a>\r\n                <a class=\"btn btn-danger mr-1 btn-fab\" data-original-title=\"\" title=\"\"  *ngIf=\"userId == groups.admin_id\" (click)=\"deleteGroup(groups.id)\">\r\n                  <i class=\"fa fa-trash\"></i>\r\n                </a>\r\n              </div>\r\n              <div class=\"text-center\">\r\n                <button class=\"btn btn-info btn-round text-center btn-raised btn-lg\"  title=\"\" *ngIf=\"groups.Exitgrp == 'false' && userId != groups.admin_id\"  (click)=\"joingroup(groups.id, groups.access)\"><i class=\"fa fa-sign-in-alt\" ></i>Join Group</button>\r\n              </div>\r\n              <div class=\"text-center\">\r\n                <button class=\"btn btn-info btn-round text-center btn-raised btn-lg\"  *ngIf=\"groups.Exitgrp == 'true' && groups.accepted == 'true'\"   (click)=\"exitgroup(groups.id)\"><i class=\"fa fa-sign-in-alt\" ></i> Exit Group</button>\r\n              </div>\r\n              <div class=\"text-center\">\r\n                <span  *ngIf=\"groups.accepted == 'pending' && groups.Exitgrp == 'true'\"  >Request Pending</span>\r\n                <span  *ngIf=\"groups.accepted == 'rej' && groups.Exitgrp == 'true'\" >Request Rejected</span>\r\n              </div>\r\n              <!-- <div class=\"text-center\">\r\n                <button class=\"btn btn-info btn-round text-center btn-raised btn-lg\" (click)=\"viewgroup(groups.id)\"><i class=\"fa fa-sign-in-alt\" ></i> View Group</button>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"card\">\r\n          <img class=\"card-img-top\" src=\"assets/img/photos/2.jpg\" alt=\"Card image cap\">\r\n          <div class=\"align-self-center halfway-fab text-center\">\r\n              <a class=\"profile-image\">\r\n                  <img src=\"assets/img/portrait/medium/avatar-m-9.jpg\" class=\"rounded-circle img-border gradient-summer width-100\" alt=\"Card image\">\r\n              </a>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <h4 class=\"card-title text-center\">Group1</h4>\r\n            <h6 class=\"card-subtitle text-muted text-center\">Public Group</h6>\r\n            <div class=\"text-center\">\r\n              <a class=\"btn-adn btn btn-success mr-1 btn-fab\">\r\n                <i class=\"fa fa-pencil-alt\"></i>\r\n              </a>\r\n              <a class=\"btn btn-warning mr-1 btn-fab\">\r\n                <i class=\"fa fa-clock-o\"></i>\r\n              </a>\r\n              <a class=\"btn btn-danger mr-1 btn-fab\">\r\n                <i class=\"fa fa-users\"></i>\r\n              </a>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <button class=\"btn btn-info btn-round text-center btn-raised btn-lg\" ><i class=\"fa fa-sign-in-alt\"></i> Join Group</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card\">\r\n          <img class=\"card-img-top\" src=\"assets/img/photos/2.jpg\" alt=\"Card image cap\">\r\n          <div class=\"align-self-center halfway-fab text-center\">\r\n              <a class=\"profile-image\">\r\n                  <img src=\"assets/img/portrait/medium/avatar-m-9.jpg\" class=\"rounded-circle img-border gradient-summer width-100\" alt=\"Card image\">\r\n              </a>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n              <h4 class=\"card-title text-center\">Group1</h4>\r\n              <h6 class=\"card-subtitle text-muted text-center\">Public Group</h6>\r\n              <div class=\"text-center\">\r\n                <a class=\"btn-adn btn btn-success mr-1 btn-fab\">\r\n                  <i class=\"fa fa-pencil-alt\"></i>\r\n                </a>\r\n                <a class=\"btn btn-warning mr-1 btn-fab\">\r\n                  <i class=\"fa fa-clock-o\"></i>\r\n                </a>\r\n                <a class=\"btn btn-danger mr-1 btn-fab\">\r\n                  <i class=\"fa fa-users\"></i>\r\n                </a>\r\n              </div>\r\n              <div class=\"text-center\">\r\n                <button class=\"btn btn-info btn-round text-center btn-raised btn-lg\" ><i class=\"fa fa-sign-in-alt\"></i> Join Group</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section *ngIf=\"addGroup\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n\t\t\t\t\t<div class=\"card-title-wrap\">\r\n            <div class=\"content-header\">Create Group</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n              <!-- <form [formGroup]=\"regularForm\" (ngSubmit)=\"onReactiveFormSubmit()\" novalidate> -->\r\n            <form  class=\"form\" #groupsForm=\"ngForm\" >\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label>Name</label>\r\n                    <input type=\"text\" name=\"groupName\" [(ngModel)]=\"groupData.groupName\" class=\"form-control\" placeholder=\"Enter the name\" required>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n               <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                   <label>Description</label>\r\n                   <textarea class=\"form-control\" name=\"groupDescription\" [(ngModel)]=\"groupData.groupDescription\" rows=\"3\" placeholder=\"Enter the Description\" required></textarea>\r\n\r\n                  </div>\r\n               </div>\r\n             </div>\r\n             <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                 <div class=\"form-group\">\r\n                   <label for=\"file\">Upload Cover Photo</label>\r\n                   <div class=\"custom-file center-block d-block\">\r\n                     <input type=\"file\" class=\"custom-file-input\" id=\"coverPhoto\" name=\"coverPhoto\" (change)=\"uploadCoverPhoto($event.target.files)\">\r\n                     <label class=\"custom-file-label\" for=\"coverPhoto\" #coverPhoto>Choose file</label>\r\n                    </div>\r\n                 </div>\r\n               </div>\r\n              </div>\r\n              <div class=\"row\" >\r\n               <div class=\"form-group\">\r\n                <div class=\"col-md-6\">\r\n                  <label>Group Control</label>\r\n                  <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"groupControl\" [(ngModel)]=\"groupData.groupControl\" required>\r\n                    <label ngbButtonLabel class=\"btn-raised btn-primary\">\r\n                        <input ngbButton type=\"radio\" [value]=\"1\"> Member Invite\r\n                    </label>\r\n                    <label ngbButtonLabel class=\"btn-raised btn-primary\">\r\n                        <input ngbButton type=\"radio\"  [value]=\"2\"> Admin Invite\r\n                    </label>\r\n                    <label ngbButtonLabel class=\"btn-raised btn-primary\">\r\n                        <input ngbButton type=\"radio\" [value]=\"3\"> Any one can join\r\n                    </label>\r\n                  </div>\r\n                    <!-- <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"groupControl\" [(ngModel)]=\"groupData.groupControl\">\r\n                        <label ngbButtonLabel class=\"btn-raised btn-primary\">\r\n                            <input ngbButton type=\"radio\" [value]=\"member\"> Member Invite\r\n                        </label>\r\n                        <label ngbButtonLabel class=\"btn-raised btn-primary\">\r\n                            <input ngbButton type=\"radio\" [value]=\"admin\"> Admin Invite\r\n                        </label>\r\n                        <label ngbButtonLabel class=\"btn-raised btn-primary\">\r\n                            <input ngbButton type=\"radio\" [value]=\"any\"> Any one can join\r\n                        </label>\r\n                    </div> -->\r\n               </div>\r\n             </div>\r\n            </div>\r\n            <!-- <div class=\"row\"> -->\r\n              <div class=\"form-group \">\r\n                <button type=\"submit\" class=\"btn btn-success btn-raised\" (click)=\"saveGroup()\"  [disabled]=\" !groupsForm.valid || submit\"> Save </button>\r\n                <button  class=\"btn btn-danger btn-raised \" style=\"margin-left:10px;\" (click)=\"cancel()\">Cancel</button>\r\n            <!-- </div> -->\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</section>\r\n<ng-template ngbTabContent #modelcontent let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Pending Request </h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n\r\n  <div class=\"card-body\">\r\n      <div class=\"card-block\">\r\n        <ngx-datatable #modelcontent class=\"material\" class=\"bootstrap\" [rows]=\"pendingGropReqList\" [columns]=\"columns\" [sorts]=\"[{prop: ['id'], dir: 'desc'}]\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"50\"  [limit]=\"10\">\r\n          <ngx-datatable-column name=\"id\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    {{row.id}}\r\n              </ng-template>\r\n          </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Name\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                      {{row.firstName}} {{row.lastName}}\r\n                </ng-template>\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Group Name\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    {{row.groupname}}\r\n                </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Date\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    {{row.date}}\r\n                </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Action\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\"  >\r\n                    <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"acceptGroupReq(rowIndex,row.id)\">\r\n                    <i class=\"fas fa-check font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                    <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"rejectGroupReq(rowIndex,row.id)\">\r\n                    <i class=\"fas fa-close font-medium-3 mr-2\"></i>\r\n                    </a>\r\n                </ng-template>\r\n            </ngx-datatable-column>\r\n        </ngx-datatable>\r\n\r\n  <!-- <ngx-datatable  class=\"material\" class=\"bootstrap\" [rows]=\"pendingGropReqList\" [columns]=\"columns1\" [columnMode]=\"'force'\"  [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"10\">\r\n\r\n\r\n\r\n\r\n        <ngx-datatable-column  name=\"Name\" [width]=\"250\">\r\n            <ng-template let-row=\"row\" ngx-table-cell-template>\r\n                {{row.firstName}} {{row.lastName}}\r\n            </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Group Name\" [width]=\"250\">\r\n            <ng-template let-row=\"row\" ngx-table-cell-template>\r\n              {{row.groupname}}\r\n            </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Date\" [width]=\"250\">\r\n            <ng-template let-row=\"row\" ngx-table-cell-template>\r\n             {{row.date}}\r\n            </ng-template>\r\n        </ngx-datatable-column>\r\n           <ngx-datatable-column name=\"Action\" [width]=\"250\">\r\n             <ng-template let-row=\"row\" ngx-table-cell-template>\r\n             <button type=\"button\"class=\"btn btn-raised mr-1 btn-success\" (click)=\"acceptGroupReq(i,pendingReq.id)\">Accept</button>\r\n\r\n\r\n             <button type=\"button\" class=\"btn btn-raised mr-1 btn-danger\" (click)=\"rejectGroupReq(i,pendingReq.id)\">Reject</button>\r\n           </ng-template>\r\n\r\n         </ngx-datatable-column>\r\n\r\n    </ngx-datatable> -->\r\n      </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/groups/group-listing/group-listing.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/groups/group-listing/group-listing.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".align-self-center {\n  position: relative !important;\n  top: -50px !important; }\n\n.btn-lg {\n  padding: 10px 50px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3VwLWxpc3RpbmcvQzpcXFVzZXJzXFxNUlQyMFxcRGVza3RvcFxcVU1cXHVzZXJtYW5hZ2VtZW50L3NyY1xcYXBwXFxncm91cHNcXGdyb3VwLWxpc3RpbmdcXGdyb3VwLWxpc3RpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBNkI7RUFDN0Isc0JBQXFCLEVBQ3RCOztBQUNEO0VBQ0UsOEJBQTZCLEVBQzlCIiwiZmlsZSI6InNyYy9hcHAvZ3JvdXBzL2dyb3VwLWxpc3RpbmcvZ3JvdXAtbGlzdGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGlnbi1zZWxmLWNlbnRlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICB0b3A6IC01MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bi1sZ3tcclxuICBwYWRkaW5nOiAxMHB4IDUwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/groups/group-listing/group-listing.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/groups/group-listing/group-listing.component.ts ***!
  \*****************************************************************/
/*! exports provided: GroupListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupListingComponent", function() { return GroupListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_data_groups_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/data/groups.service */ "./src/app/shared/data/groups.service.ts");
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








var GroupListingComponent = /** @class */ (function () {
    function GroupListingComponent(groupsService, formBuilder, http, snotifyService, modal, route, router) {
        var _this = this;
        this.groupsService = groupsService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.snotifyService = snotifyService;
        this.modal = modal;
        this.route = route;
        this.router = router;
        this.groupData = {
            'groupName': '',
            'groupDescription': '',
            'groupControl': '',
            'coverPhoto': '',
            'user_id': localStorage.getItem('currentUserId')
        };
        this.addGroup = false;
        this.groupList = [];
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
        this.submit = false;
        this.isUser = false;
        this.columns = [
            { name: 'Name' },
            { name: 'Description' },
            { name: 'Access' },
            { name: 'Date' }
        ];
        this.groupCtrl = {
            '1': 'member',
            '2': 'admin',
            '3': 'any'
        };
        this.pendingGropReqList = [];
        this.isGroupAdmin = false;
        this.orderByString = '';
        var users = JSON.parse(localStorage.getItem('currentUser'));
        this.userId = users['id'];
        if (users) {
            if (users['role_id'] == '3') {
                this.isUser = true;
            }
        }
        this.groupsService.getGroupAdmin(this.userId).then(function (data) {
            if (data['status'] == 'success') {
                _this.isGroupAdmin = true;
            }
            else {
                _this.isGroupAdmin = false;
            }
        });
    }
    GroupListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.isUser) {
            this.groupsService.getGroups(this.userId).then(function (data) {
                if (data['status'] == 'success') {
                    _this.groupList = data['groups'];
                }
                else {
                    _this.groupList = [];
                }
            });
        }
        else {
            this.groupsService.groupByUser(this.userId).then(function (data) {
                if (data['status'] == 'success') {
                    _this.groupList = data['groups'];
                }
                else {
                    _this.groupsService.getGroups(_this.userId).then(function (data) {
                        if (data['status'] == 'success') {
                            _this.groupList = data['groups'];
                        }
                        else {
                            _this.groupList = [];
                        }
                    });
                }
            });
        }
    };
    GroupListingComponent.prototype.redirect = function (id, viewDiscussion) {
        this.router.navigate(['/groups/group-detail'], { queryParams: { id: window.btoa(id), v: viewDiscussion } });
    };
    GroupListingComponent.prototype.saveGroup = function () {
        var _this = this;
        this.submit = true;
        var v = this.groupData.groupControl;
        this.groupData.groupControl = this.groupCtrl[this.groupData.groupControl];
        this.groupsService.addGroups(this.groupData).then(function (data) {
            if (data['status'] == 'success') {
                _this.groupList = [];
                _this.addGroup = false;
                _this.snotifyService.success('Group Created Successfully', '', _this.getConfig());
                _this.groupsForm.reset();
                _this.submit = false;
                _this.groupsService.getGroups(_this.userId).then(function (data) {
                    if (data['status'] == 'success') {
                        _this.groupList = data['groups'];
                    }
                    else {
                        _this.groupList = [];
                    }
                });
                _this.groupList = data['groups'];
            }
            else {
                alert("failed");
            }
        });
    };
    GroupListingComponent.prototype.cancel = function () {
        this.addGroup = false;
        this.submit = false;
        this.groupsForm.reset();
    };
    GroupListingComponent.prototype.editGroup = function (id) {
        var _this = this;
        this.groupsService.getGroups(this.userId).then(function (data) {
            if (data['status'] == 'success') {
                _this.groupData.groupName = data['groups'][0]['name'];
                _this.groupData.groupDescription = data['groups'][0]['description'];
                _this.groupData.groupControl = data['groups'][0]['groupControl'];
            }
        });
    };
    //
    GroupListingComponent.prototype.deleteGroup = function (groupId) {
        var _this = this;
        this.groupsService.deleteGroup(groupId).then(function (data) {
            if (data['status'] == 'success') {
                _this.snotifyService.success('Group Deleted Successfully', '', _this.getConfig());
                //this.groupList = data['groups'];
                _this.groupList = _this.groupList.filter(function (obj) {
                    return obj.id !== groupId;
                });
                //  this.groupName= data['groups'];
            }
            else {
                _this.groupList = [];
                //  this.groupName=[];
            }
        });
    };
    GroupListingComponent.prototype.searchGroups = function (str) {
        var _this = this;
        // debugger;
        if (str == '') {
            if (this.orderByString != '') {
                this.groupsService.orderBy(this.orderByString).then(function (data) {
                    if (data['status'] == 'success') {
                        _this.groupList = data['groups'];
                        //
                    }
                });
            }
            else {
                this.groupsService.getGroups(this.userId).then(function (data) {
                    if (data['status'] == 'success') {
                        _this.groupList = data['groups'];
                    }
                    else {
                        _this.groupList = [];
                    }
                });
            }
        }
        else {
            this.groupsService.searchGroups(str, this.orderByString).then(function (data) {
                if (data['status'] == 'success') {
                    _this.groupList = data['groups'];
                    //
                }
                else {
                    _this.groupList = [];
                }
            });
        }
    };
    GroupListingComponent.prototype.orderBy = function (str) {
        var _this = this;
        this.groupsService.orderBy(str.target.value).then(function (data) {
            _this.orderByString = str.target.value;
            if (data['status'] == 'success') {
                _this.groupList = data['groups'];
                //
            }
            else {
                _this.groupsService.getGroups(_this.userId).then(function (data) {
                    if (data['status'] == 'success') {
                        _this.groupList = data['groups'];
                    }
                    else {
                        _this.groupList = [];
                    }
                });
            }
        });
    };
    GroupListingComponent.prototype.joingroup = function (id, access) {
        var _this = this;
        this.groupsService.joingroup(id, this.userId, access).then(function (data) {
            if (access == 'any') {
                if (data['status'] == 'success') {
                    _this.snotifyService.success('Joined Group Successfully', '', _this.getConfig());
                    _this.groupsService.getGroups(_this.userId).then(function (data) {
                        if (data['status'] == 'success') {
                            _this.groupList = data['groups'];
                        }
                        else {
                            _this.groupList = [];
                        }
                    });
                    //this.groupList = data['groups'];
                    //  *ngIf="userId = groups.admin_id"
                }
            }
            else {
                if (data['status'] == 'success') {
                    _this.snotifyService.success('Request sent Successfully', '', _this.getConfig());
                    _this.groupsService.getGroups(_this.userId).then(function (data) {
                        if (data['status'] == 'success') {
                            _this.groupList = data['groups'];
                        }
                        else {
                            _this.groupList = [];
                        }
                    });
                    //this.groupList = data['groups'];
                    //  *ngIf="userId = groups.admin_id"
                }
                else {
                    //this.snotifyService.success('Already Requested', '', this.getConfig());
                    // this.groupList = [];
                }
            }
        });
    };
    GroupListingComponent.prototype.exitgroup = function (id) {
        var _this = this;
        this.groupsService.exitgroup(id, this.userId).then(function (data) {
            if (data['status'] == 'success') {
                _this.snotifyService.success('Left The Group Successfully', '', _this.getConfig());
                _this.groupsService.getGroups(_this.userId).then(function (data) {
                    if (data['status'] == 'success') {
                        _this.groupList = data['groups'];
                    }
                    else {
                        _this.groupList = [];
                    }
                });
                //this.groupList = data['groups'];
                //  *ngIf="userId = groups.admin_id"
            }
            else {
                //     //this.snotifyService.success('Already Requested', '', this.getConfig());
                //  this.groupsService.getGroups().then(data =>{
                //     if(data['status'] == 'success'){
                //this.groupList = data['groups'];
            }
            // else{
            // this.groupList = [];
            // }
        });
    };
    // });
    // }
    //  viewgroup(viewcontent) {
    // this.modal.open(viewcontent, { size: 'lg' });
    // }
    GroupListingComponent.prototype.groupByUser = function (id) {
    };
    GroupListingComponent.prototype.groupdetails = function (modelcontent) {
        var _this = this;
        this.groupsService.getpendingGroupRequests(this.userId).then(function (data) {
            if (data['status'] == 'success') {
                _this.pendingGropReqList = data['groups'];
            }
            else {
                _this.pendingGropReqList = [];
            }
        });
        //alert("xc");
        this.modal.open(modelcontent, { size: 'lg' });
    };
    GroupListingComponent.prototype.acceptGroupReq = function (rowIndex, id) {
        var _this = this;
        this.groupsService.acceptGroupReq(id).then(function (data) {
            if (data['status'] == 'success') {
                var a = _this.pendingGropReqList.filter(function (subject) { return subject.id !== id; });
                _this.pendingGropReqList = a;
                // for(var i=0;i<this.pendingGropReqList.length;i++){
                //   if(this.pendingGropReqList[i].id == id ){
                //   console.log(this.pendingGropReqList);
                //     this.pendingGropReqList.splice(i,1);
                //     console.log(this.pendingGropReqList);
                //   }
                // }
                //this.pendingGropReqList.splice(rowIndex,1);
                //alert("success");
                //this.groupList = data['groups'];
            }
            else {
                alert("failed");
                //    this.groupsService.getGroups().then(data =>{
                //       if(data['status'] == 'success'){
                //        //this.groupList = data['groups'];
                //      }
                //   else{
                //     this.groupList = [];
                //   }
                // })
            }
        });
    };
    GroupListingComponent.prototype.rejectGroupReq = function (rowIndex, id) {
        var _this = this;
        this.groupsService.rejectGroupReq(id).then(function (data) {
            if (data['status'] == 'success') {
                var a = _this.pendingGropReqList.filter(function (subject) { return subject.id !== id; });
                _this.pendingGropReqList = a;
                //this.pendingGropReqList.splice(rowIndex,1);
                //this.groupList = data['groups'];
            }
            else {
                _this.groupsService.getGroups(_this.userId).then(function (data) {
                    if (data['status'] == 'success') {
                        //this.groupList = data['groups'];
                    }
                    else {
                        _this.groupList = [];
                    }
                });
            }
        });
    };
    // getpendingrequest($userId,$groupId)
    // {
    //
    // }
    //  groupnotifications()
    //  {
    //    {
    //     this.groupsService.getGroups().then(data =>{
    //       if(data['status'] == 'success'){
    //         this.groupnotif = data['groups'];
    //       }
    //       else{
    //         this.groupnotif = [];
    //       }
    //     })
    //   }
    // //alert("xc");
    //
    //  }
    GroupListingComponent.prototype.trimLongText = function (name) {
        if (!name)
            return '';
        if (name.length <= 20) {
            return name;
        }
        return name.substr(0, 20) + '...';
    };
    GroupListingComponent.prototype.getConfig = function () {
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
    GroupListingComponent.prototype.uploadCoverPhoto = function (files) {
        this.coverPhoto.nativeElement.innerHTML = files[0].name;
        this.groupData.coverPhoto = files[0].name;
        console.log(this.coverPhoto.nativeElement);
        //alert(files[0].name);
        this.uploadAndProgress(files);
    };
    GroupListingComponent.prototype.uploadAndProgress = function (files) {
        console.log(files);
        var formData = new FormData();
        Array.from(files).forEach(function (f) { return formData.append('file', f); });
        this.http.post('https://cockburncrc.com.au/members/usermanagement/uploadLogo.php?fld=groups', formData, { reportProgress: true, observe: 'events' })
            .subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].UploadProgress) {
                //this.percentDone = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
                //this.uploadSuccess = true;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], GroupListingComponent.prototype, "modalContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("groupsForm"),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], GroupListingComponent.prototype, "groupsForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('coverPhoto'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GroupListingComponent.prototype, "coverPhoto", void 0);
    GroupListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-group-listing',
            template: __webpack_require__(/*! ./group-listing.component.html */ "./src/app/groups/group-listing/group-listing.component.html"),
            styles: [__webpack_require__(/*! ./group-listing.component.scss */ "./src/app/groups/group-listing/group-listing.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_data_groups_service__WEBPACK_IMPORTED_MODULE_5__["GroupsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GroupListingComponent);
    return GroupListingComponent;
}());



/***/ }),

/***/ "./src/app/groups/group-members/group-members.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/groups/group-members/group-members.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\r\n  <div class=\"\">\r\n    <div class=\"\">\r\n      <nav class=\"navbar center\" style=\"\">\r\n        <div class=\"mx-auto\">&nbsp;\r\n          <i class=\"fas fa-users\"></i> &nbsp; &nbsp; All members &nbsp; <span class=\"badge badge-pill badge-secondary\">26</span>\r\n        </div>\r\n        <div class=\"mx-auto\" id=\"\">\r\n          <label for=\"\"> Order By: &nbsp;</label>\r\n          <select>\r\n            <option value=\"active\"> Active </option>\r\n            <option value=\"lastActive\" selected> Last Active </option>\r\n            <option value=\"offline\"> Offline </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-inline mx-auto\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"SEARCH\">\r\n            <span class=\"input-group-btn\">\r\n              <button class=\"btn btn-mdb-color btn-rounded btn-sm my-0 ml-sm-2\" type=\"button\">SEARCH</button>\r\n            </span>\r\n        </div>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\" style=\"margin: 100px;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"card card-body\" >\r\n        <img class=\"card-img-top\" src=\"https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg\" alt=\"Card image cap\" width=\"50px;\" height=\"100px\">\r\n        <div class=\"align-self-center halfway-fab text-center\">\r\n          <a class=\"profile-image\">\r\n            <img src=\"https://www.w3schools.com/howto/img_avatar.png\" class=\"avatar\" style=\"vertical-align: middle; margin-top:-25px; ;width: 75px;height: 75px;border-radius: 50%; border: 5px solidblack transparent\" alt=\"Card image\">\r\n          </a>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <h4 class=\"text-center\">Mohammad Kaine</h4>\r\n            <h5 class=\"card-subtitle text-muted text-center\">@mohammad <i class=\"ft-check\"></i></h5>\r\n            <div class=\"text-center\">\r\n              <span class=\"fa fa-star checked\"></span>\r\n              <span class=\"fa fa-star checked\"></span>\r\n              <span class=\"fa fa-star checked\"></span>\r\n              <span class=\"fa fa-star\"></span>\r\n              <span class=\"fa fa-star\"></span>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <font size=\"1\">3 out of 5 stars </font>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <a class=\" btn btn-social-Vimeo\"><span class=\"\"></span> </a>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <button class=\"btn btn-info btn-raised btn- btn-round form-control\" ><i class=\"fas fa-user-plus\"></i> &nbsp; Add friend</button>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <button class=\"btn btn-default btn-round text-center form-control\" ><i class=\"icon-feed\"></i> &nbsp; Follow</button>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <button class=\"btn btn-default btn-round text-center form-control\" ><i class=\"fas fa-envelope-open-text\"></i> &nbsp; Message</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"card card-body\">\r\n        <img class=\"card-img-top\" src=\"https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg\" alt=\"Card image cap\" width=\"50px;\" height=\"100px\">\r\n        <div class=\"align-self-center halfway-fab text-center\">\r\n          <a class=\"profile-image\">\r\n            <img src=\"https://www.w3schools.com/howto/img_avatar.png\" class=\"avatar\" style=\"vertical-align: middle; margin-top:-25px; ;width: 75px;height: 75px;border-radius: 50%; border: 5px solidblack transparent\" alt=\"Card image\">\r\n          </a>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <h4 class=\"text-center\">Youssef Kaine</h4>\r\n            <h5 class=\"card-subtitle text-muted text-center\">@admin <i class=\"ft-check\"></i></h5>\r\n            <div class=\"text-center\" >\r\n              <span class=\"fa fa-star checked\"></span>\r\n              <span class=\"fa fa-star checked\"></span>\r\n              <span class=\"fa fa-star checked\"></span>\r\n              <span class=\"fa fa-star checked\"></span>\r\n              <span class=\"fa fa-star\"></span>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <font size=\"1\">4 out of 5 stars </font>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <a class=\" btn btn-social-Vimeo\"><span class=\"\"></span> </a>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <button class=\"btn btn-info btn-raised btn- btn-round form-control\" ><i class=\"fas fa-user-plus\"></i> &nbsp; Add friend</button>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <button class=\"btn btn-default btn-round text-center form-control\" ><i class=\"icon-feed\"></i> Follow</button>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <button class=\"btn btn-default btn-round text-center form-control\" ><i class=\"fas fa-envelope-open-text\"></i> Message</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"card card-body\">\r\n        <img class=\"card-img-top\" src=\"https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg\" alt=\"Card image cap\" width=\"50px;\" height=\"100px\">\r\n        <div class=\"align-self-center halfway-fab text-center\">\r\n          <a class=\"profile-image\">\r\n            <img src=\"https://www.w3schools.com/howto/img_avatar.png\" class=\"avatar\" style=\"vertical-align: middle; margin-top:-25px; ;width: 75px;height: 75px;border-radius: 50%; border: 5px solidblack transparent\" alt=\"Card image\">\r\n          </a>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <h4 class=\"text-center\">Kavin Steffan</h4>\r\n            <h5 class=\"card-subtitle text-muted text-center\">@steffan <i class=\"ft-check\"></i></h5>\r\n            <div class=\"text-center\" >\r\n              <span class=\"fa fa-star checked\"></span>\r\n              <span class=\"fa fa-star checked\"></span>\r\n              <span class=\"fa fa-star \"></span>\r\n              <span class=\"fa fa-star\"></span>\r\n              <span class=\"fa fa-star\"></span>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <font size=\"1\">2 out of 5 stars </font>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <a class=\" btn btn-social-Vimeo\"><span class=\"\"></span> </a>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <button class=\"btn btn-info btn-raised btn- btn-round form-control\" ><i class=\"fas fa-user-plus\"></i> &nbsp; Add friend</button>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <button class=\"btn btn-default btn-round text-center form-control\" ><i class=\"icon-feed\"></i> Follow</button>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <button class=\"btn btn-default btn-round text-center form-control\" ><i class=\"fas fa-envelope-open-text\"></i> Message</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/groups/group-members/group-members.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/groups/group-members/group-members.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checked {\n  color: orange; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXBzL2dyb3VwLW1lbWJlcnMvQzpcXFVzZXJzXFxNUlQyMFxcRGVza3RvcFxcVU1cXHVzZXJtYW5hZ2VtZW50L3NyY1xcYXBwXFxncm91cHNcXGdyb3VwLW1lbWJlcnNcXGdyb3VwLW1lbWJlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxjQUFhLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9ncm91cHMvZ3JvdXAtbWVtYmVycy9ncm91cC1tZW1iZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrZWQge1xyXG5jb2xvcjogb3JhbmdlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/groups/group-members/group-members.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/groups/group-members/group-members.component.ts ***!
  \*****************************************************************/
/*! exports provided: GroupMembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupMembersComponent", function() { return GroupMembersComponent; });
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

var GroupMembersComponent = /** @class */ (function () {
    function GroupMembersComponent() {
    }
    GroupMembersComponent.prototype.ngOnInit = function () {
    };
    GroupMembersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-group-members',
            template: __webpack_require__(/*! ./group-members.component.html */ "./src/app/groups/group-members/group-members.component.html"),
            styles: [__webpack_require__(/*! ./group-members.component.scss */ "./src/app/groups/group-members/group-members.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GroupMembersComponent);
    return GroupMembersComponent;
}());



/***/ }),

/***/ "./src/app/groups/groups-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/groups/groups-routing.module.ts ***!
  \*************************************************/
/*! exports provided: GroupsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsRoutingModule", function() { return GroupsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _group_members_group_members_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group-members/group-members.component */ "./src/app/groups/group-members/group-members.component.ts");
/* harmony import */ var _group_listing_group_listing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group-listing/group-listing.component */ "./src/app/groups/group-listing/group-listing.component.ts");
/* harmony import */ var _group_detail_group_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./group-detail/group-detail.component */ "./src/app/groups/group-detail/group-detail.component.ts");
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
                path: 'group-listing',
                component: _group_listing_group_listing_component__WEBPACK_IMPORTED_MODULE_3__["GroupListingComponent"],
                data: {
                    title: 'Groups'
                },
            },
            {
                path: 'group-members',
                component: _group_members_group_members_component__WEBPACK_IMPORTED_MODULE_2__["GroupMembersComponent"],
                data: {
                    title: 'Group Members'
                }
            },
            {
                path: 'group-detail',
                component: _group_detail_group_detail_component__WEBPACK_IMPORTED_MODULE_4__["GroupDetailComponent"],
                data: {
                    title: 'Group Dettail'
                }
            },
        ]
    }
];
var GroupsRoutingModule = /** @class */ (function () {
    function GroupsRoutingModule() {
    }
    GroupsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], GroupsRoutingModule);
    return GroupsRoutingModule;
}());



/***/ }),

/***/ "./src/app/groups/groups.module.ts":
/*!*****************************************!*\
  !*** ./src/app/groups/groups.module.ts ***!
  \*****************************************/
/*! exports provided: GroupsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsModule", function() { return GroupsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _groups_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./groups-routing.module */ "./src/app/groups/groups-routing.module.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/directives/match-height.directive */ "./src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es5.js");
/* harmony import */ var _group_detail_group_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./group-detail/group-detail.component */ "./src/app/groups/group-detail/group-detail.component.ts");
/* harmony import */ var _group_members_group_members_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./group-members/group-members.component */ "./src/app/groups/group-members/group-members.component.ts");
/* harmony import */ var _group_listing_group_listing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./group-listing/group-listing.component */ "./src/app/groups/group-listing/group-listing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var GroupsModule = /** @class */ (function () {
    function GroupsModule() {
    }
    GroupsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _groups_routing_module__WEBPACK_IMPORTED_MODULE_3__["GroupsRoutingModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["NgxChartsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_6__["MatchHeightModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["NgxDatatableModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_9__["FroalaEditorModule"].forRoot(), angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_9__["FroalaViewModule"].forRoot(),
                ngx_ui_switch__WEBPACK_IMPORTED_MODULE_10__["UiSwitchModule"]
            ],
            declarations: [
                _group_detail_group_detail_component__WEBPACK_IMPORTED_MODULE_11__["GroupDetailComponent"],
                _group_members_group_members_component__WEBPACK_IMPORTED_MODULE_12__["GroupMembersComponent"],
                _group_listing_group_listing_component__WEBPACK_IMPORTED_MODULE_13__["GroupListingComponent"]
            ]
        })
    ], GroupsModule);
    return GroupsModule;
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
//# sourceMappingURL=groups-groups-module.js.map