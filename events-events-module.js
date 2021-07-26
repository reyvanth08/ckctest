(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-events-module"],{

/***/ "./src/app/events/events-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/events/events-routing.module.ts ***!
  \*************************************************/
/*! exports provided: EventsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsRoutingModule", function() { return EventsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _events_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.component */ "./src/app/events/events.component.ts");
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
        component: _events_component__WEBPACK_IMPORTED_MODULE_2__["EventsComponent"],
        data: {
            title: 'Events'
        },
    }
];
var EventsRoutingModule = /** @class */ (function () {
    function EventsRoutingModule() {
    }
    EventsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], EventsRoutingModule);
    return EventsRoutingModule;
}());



/***/ }),

/***/ "./src/app/events/events.component.html":
/*!**********************************************!*\
  !*** ./src/app/events/events.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"content-header\">Events</div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\" style=\"text-align: right;\">\r\n                    <p>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-bitbucket float-right\" (click)=\"createEvent()\" *ngIf=\"eventTable\"><span class=\"ft-plus\"></span>Create Event</a>\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-bitbucket float-right\" (click)=\"listEvent()\" *ngIf=\"!eventTable\"><span class=\"ft-list\"></span>Event List</a>\r\n                    </p>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n               <div *ngIf=\"eventTable\" class=\"col-md-12\">\r\n                 <div class=\"row\" *ngIf=\"eventTable\">\r\n                     <div class=\"col-sm-12\">\r\n                         <div class=\"card\">\r\n                             <div class=\"card-header\">\r\n                                 <div class=\"row\">\r\n                                     <div class=\"col-sm-6\">\r\n                                         <p>Event List</p>\r\n                                     </div>\r\n                                     </div>\r\n                                 <div class=\"card-body\">\r\n                                     <div class=\"card-block\">\r\n                                         <table class=\"table table-responsive-md text-center\">\r\n                                             <thead>\r\n                                                 <tr>\r\n                                                     <th>Title</th>\r\n                                                     <!-- <th>Decription</th> -->\r\n                                                     <th>Member Only</th>\r\n                                                     <!-- <th>Custom URL</th> -->\r\n                                                     <th>Event Email</th>\r\n                                                     <th>Start Date</th>\r\n                                                     <th>End Date</th>\r\n                                                     <th>Action</th>\r\n                                                 </tr>\r\n                                             </thead>\r\n                                             <tbody>\r\n                                                 <tr *ngFor=\"let data of eventData | paginate: { itemsPerPage: 10, currentPage: p }\">\r\n                                                     <td><a href=\"{{data.url}}\" target=\"_blank\">{{data.title}}</a></td>\r\n                                                     <td *ngIf=\"data.member == 1\">\r\n                                                         <ui-switch id=\"active\" [checked]=\"true\" disabled></ui-switch>\r\n                                                     </td>\r\n                                                     <td *ngIf=\"data.member == 0\">\r\n                                                         <ui-switch id=\"active\" [checked]=\"false\" disabled></ui-switch>\r\n                                                     </td>\r\n\r\n                                                     <!-- <td>{{data.url}}</td> -->\r\n                                                     <td>{{data.email}}</td>\r\n                                                     <td>{{data.st_dt | date: 'yyyy-MM-dd'}}</td>\r\n                                                     <td>{{data.end_dt | date: 'yyyy-MM-dd'}}</td>\r\n                                                   \r\n                                                     <!-- <td *ngIf=\"data.end_dt < dt\">\r\n                                          \r\n                                                      <a class=\"default p-0\" data-original-title=\"\" title=\"\">\r\n                                                 \r\n                                                          <i class=\"fas fa-pencil-alt font-medium-3 mr-2\"></i>\r\n                                                      </a>\r\n                                                      <a class=\"default p-0\" style=\"cursor: not-allowed;\" data-original-title=\"\" title=\"\" *ngIf=\"data.sold != 0\">\r\n                                                          <i class=\"fas fa-trash font-medium-3 mr-2\"></i>\r\n                                                      </a>\r\n                                                        <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"deleteevent(data.id)\" *ngIf=\"data.sold == 0\">\r\n                                                             <i class=\"fas fa-trash font-medium-3 mr-2\"></i>\r\n                                                         </a>\r\n                                              \r\n                                                    </td> -->\r\n                                                    <td>\r\n                                                         <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"editevent(data.id,data.title)\">\r\n                                                             <i class=\"fas fa-pencil-alt font-medium-3 mr-2\"></i>\r\n                                                         </a>\r\n                                                      <!--    <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"deleteevent(data.id)\">\r\n                                                             <i class=\"fas fa-trash font-medium-3 mr-2\"></i>\r\n                                                          </a>-->\r\n                                                     <a class=\"default p-0\" style=\"cursor: not-allowed;\" data-original-title=\"\" title=\"\" *ngIf=\"data.sold != 0\">\r\n                                                          <i class=\"fas fa-trash font-medium-3 mr-2\"></i>\r\n                                                      </a>\r\n                                                        <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"deleteevent(data.id)\" *ngIf=\"data.sold == 0\">\r\n                                                             <i class=\"fas fa-trash font-medium-3 mr-2\"></i>\r\n                                                         </a>\r\n                                              \r\n                                                    </td>\r\n                                           \r\n                                                   <!--   <td>\r\n                                                         <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"editevent(data.id)\">\r\n                                                             <i class=\"fas fa-pencil-alt font-medium-3 mr-2\"></i>\r\n                                                         </a>\r\n                                                         <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"deleteevent(data.id)\">\r\n                                                             <i class=\"fas fa-trash font-medium-3 mr-2\"></i>\r\n                                                         </a>\r\n                                                     </td> -->\r\n                                                 </tr>\r\n\r\n                                                 <!-- <pagination-controls (pageChange)=\"p = $event\"></pagination-controls> -->\r\n                                             </tbody>\r\n                                         </table>\r\n                                         <div class=\"col-12 paginationonAction\">\r\n                                             <span class=\"total\">{{collectionSize}} Total</span>\r\n                                             <ngb-pagination [pageSize]=\"pageSize\" [(page)]=\"p\" [maxSize]=\"10\" [rotate]=\"true\" [collectionSize]=\"collectionSize\" [boundaryLinks]=\"true\" style=\"float: right;\"></ngb-pagination>\r\n                                         </div>\r\n                                     </div>\r\n                                 </div>\r\n                             </div>\r\n                         </div>\r\n                     </div>\r\n                 </div>\r\n\r\n              </div>\r\n                <!-- <div class=\"card-block\">\r\n                </div> -->\r\n                <div class=\"col-md-12\" *ngIf=\"!eventTable\">\r\n\r\n  <ngb-tabset (tabChange)=\"selectData($event)\" #tabs>\r\n\r\n    <ngb-tab title=\"Details\" id=\"details\" active=\"SelectedTab == 'details'\">\r\n      <ng-template ngbTabContent>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                  <form class=\"form\" #eventForm=\"ngForm\">\r\n                    <div class=\"form-body\">\r\n                      <!-- <h4 class=\"form-section\">\r\n                      <i class=\"icon-user\"></i> Personal Details</h4> -->\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                          <div class=\"form-group\">\r\n                            <label>Title</label>\r\n                            <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"events.title\"\r\n                         [ngClass]=\"{ 'is-invalid': eventForm.submitted && title.invalid }\" required>\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"eventForm.submitted && title.invalid\">This field is required!</small>\r\n                          </div>\r\n                        </div>\r\n\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                          <div class=\"form-group\">\r\n                            <label>Description</label>\r\n                            <input type=\"text\" description class=\"form-control\" name=\"description\" [(ngModel)]=\"events.description\" [ngClass]=\"{ 'is-invalid': eventForm.submitted && description.invalid }\" required>\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"eventForm.submitted && description.invalid\">This field is required!</small>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                          <div class=\"form-group\">\r\n                            <label>Member Only</label>\r\n                            <div class=\"form-input\">\r\n                              <ui-switch id=\"member\" [checked]=\"events.member\" (click)=\"member(events.member)\"></ui-switch>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                                               \r\n                      </div>\r\n\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                          <div class=\"form-group\">\r\n                            <label>FAQ's</label>\r\n                            <input type=\"text\" class=\"form-control\" name=\"faq\" [(ngModel)]=\"events.faq\" [ngClass]=\"{ 'is-invalid': eventForm.submitted && faq.invalid }\" required>\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"eventForm.submitted && faq.invalid\">This field is required!</small>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n \r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                          <div class=\"form-group\">\r\n                            <label>Custom URL</label>\r\n                            <input type=\"text\" class=\"form-control\" name=\"url\" [(ngModel)]=\"events.url\" [ngClass]=\"{ 'is-invalid': eventForm.submitted && url.invalid }\" required>\r\n                            <small class=\"form-text text-muted green\">Start with http or https</small>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                          <div class=\"form-group\">\r\n                            <label>Event Email</label>\r\n                            <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"events.email\" [ngClass]=\"{ 'is-invalid': eventForm.submitted && email.invalid }\" required >\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"eventForm.submitted && email.invalid\">This field is required!</small>\r\n                            <!-- <div *ngIf=\"email.errors.required\">Email is required</div>\r\n                            <div *ngIf=\"email.errors.email\">Email must be a valid email address</div> -->\r\n\r\n                          </div>\r\n                        </div>\r\n\r\n                      </div>\r\n\r\n\r\n\r\n   <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                                              <div class=\"form-group\">\r\n                            <label>Start Date</label>\r\n\r\n                              <input required [(ngModel)]=\"events.st_dt\" #st_dt=\"ngModel\" [ngClass]=\"{ 'is-invalid': eventForm.submitted && st_dt.invalid }\" class=\"form-control\" id=\"st_dt\" name=\"st_dt\" type=\"date\">\r\n                              <!-- datetime-local -->\r\n                        </div>\r\n                      </div>\r\n\r\n                        <div class=\"col-md-6\">\r\n                          <div class=\"form-group\">\r\n                            <label>End Date</label>\r\n\r\n          <input required [(ngModel)]=\"events.end_dt\" #end_dt=\"ngModel\" [ngClass]=\"{ 'is-invalid': eventForm.submitted && end_dt.invalid }\" class=\"form-control\" id=\"end_dt\" name=\"end_dt\" type=\"date\">\r\n                        </div>\r\n                        </div>\r\n\r\n                      </div>\r\n\r\n                    </div>\r\n\r\n\r\n\r\n  <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                                              <div class=\"form-group\">\r\n                            <label>Start Time</label>\r\n\r\n                              <input required [(ngModel)]=\"events.st_time\" #st_dt=\"ngModel\" [ngClass]=\"{ 'is-invalid': eventForm.submitted && st_time.invalid }\" class=\"form-control\" id=\"st_time\" name=\"st_time\" type=\"time\">\r\n                              <!-- datetime-local -->\r\n                        </div>\r\n                      </div>\r\n\r\n                        <div class=\"col-md-6\">\r\n                          <div class=\"form-group\">\r\n                            <label>End Time</label>\r\n\r\n          <input required [(ngModel)]=\"events.end_time\" #end_dt=\"ngModel\" [ngClass]=\"{ 'is-invalid': eventForm.submitted && end_time.invalid }\" class=\"form-control\" id=\"end_time\" name=\"end_time\" type=\"time\">\r\n                        </div>\r\n                        </div>\r\n\r\n                      </div>\r\n\r\n                    <!-- </div> -->\r\n            <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                             <div class=\"form-group\">\r\n                                        <div class=\"custom-file center-block d-block\">\r\n                                      <label>Banner</label>\r\n                                        <input type=\"file\" id=\"uploadBanner\" accept=\".png,.gif,.jpeg,.jpg\" (change)=\"uploadBanner($event.target.files)\" />\r\n                        <label class=\"custom-file-label\" for=\"uploadBanner\" #uploadBannerLabel>Choose Banner</label>\r\n                        <small class=\"form-text text-muted green\">Width must be between 700 px to 1200 px. But for best resolution width should be 1200 px.</small>\r\n                       </div>\r\n                                    </div>\r\n                                 \r\n                          <!-- <div class=\"form-group\">\r\n                            <label>Event Banner</label>\r\n                                <input style='width: 97%;' type=\"file\" accept=\".png,.gif,.jpeg,.jpg\" multiple id=\"upload\" formControlName=\"upload\" (change)=\"upload($event.target.files)\" />\r\n                              <label class=\"custom-file-label\" for=\"upload\" #uploadLabel>Choose Banner</label>\r\n\r\n                              <br /><br />\r\n                                   <small class=\"form-text text-muted green\">\r\n                                    Image height must be >= 200 px and ratio must be 3:2 (width:height)\r\n                              </small>\r\n                          </div> -->                    \r\n                        </div>\r\n                      </div>\r\n           \r\n\r\n\r\n                    <div class=\"form-actions\">\r\n                      <!-- <button type=\"submit\" class=\"btn btn-raised btn-danger mr-1\" (click)=\"cancel()\">\r\n                      Cancel\r\n                      </button> -->\r\n                      <button type=\"submit\" class=\"btn btn-raised btn-success mr-1\" (click)=\"updateevent()\" *ngIf=\"!save\" [disabled]=\"!eventForm.valid || !isEmail() || !isURL(events.url) || events.sold !=0 || events.end_dt < dt\">\r\n                      Update Event <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i>\r\n                      </button>\r\n                      <button type=\"submit\" class=\"btn btn-raised btn-success\" (click)=\"insertevent('save')\" *ngIf=\"save\" [disabled]=\"!eventForm.valid || !isEmail() || !isURL(events.url) || events.sold !=0\">\r\n                      Save\r\n                      <!-- <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i> -->\r\n                      </button>\r\n                      &nbsp;\r\n                      <button type=\"submit\" class=\"btn btn-raised btn-success\" (click)=\"insertevent('next')\" *ngIf=\"save\" [disabled]=\"!eventForm.valid || !isEmail() || !isURL(events.url) || events.sold !=0\">\r\n                      Save & Next\r\n                      </button>\r\n\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </ngb-tab>\r\n\r\n    <ngb-tab title=\"Location\" id=\"location\" active=\"SelectedTab == 'location'\" [disabled]=\"flag\">\r\n\r\n      <ng-template ngbTabContent>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                  <form class=\"form\" #locationForm=\"ngForm\">\r\n                    <div class=\"form-body\">\r\n                      <!-- <h4 class=\"form-section\">\r\n                      <i class=\"icon-user\"></i> Personal Details</h4> -->\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-12\" class=\"form-actions\">\r\n                          <div class=\"form-group\">\r\n                            <!-- <label>Enter Address</label> -->\r\n                            <!-- <input type=\"text\" class=\"form-control\" name=\"address\" [(ngModel)]=\"location.address\" [ngClass]=\"{ 'is-invalid': locationForm.submitted && address.invalid }\" required> -->\r\n                            <input id=\"address\" name=\"address\" class=\"form-control\" placeholder=\"Enter address\" (focus)=\"initAutocomplete()\" (change)=\"findLocation()\" type=\"text\"\r\n [(ngModel)]=\"location.address\" [ngClass]=\"{ 'is-invalid': locationForm.submitted && address.invalid }\" required\r\n                           [disabled]=\"events.sold !=0 || events.end_dt < dt\" />\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"locationForm.submitted && address.invalid\">This field is required!</small>\r\n                          </div>\r\n                        <!-- </div>\r\n                        <div class=\"form-actions\"> -->\r\n                          <!-- <button type=\"submit\" class=\"btn btn-raised btn-danger mr-1\" (click)=\"cancel()\">\r\n                          Cancel\r\n                          </button> -->\r\n                          <button type=\"submit\" class=\"btn btn-raised btn-success mr-1\" (click)=\"updatelocation()\" *ngIf=\"!save\" [disabled]=\"!locationForm.valid || events.sold !=0 || events.end_dt < dt\">\r\n                          Update Location <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i>\r\n                          </button>\r\n                          <button type=\"submit\" class=\"btn btn-raised btn-success\" (click)=\"insertlocation('save')\" *ngIf=\"save\" [disabled]=\"!locationForm.valid || events.sold !=0\">\r\n                          Save\r\n                          <!-- <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i> -->\r\n                          </button>&nbsp;\r\n                          <button type=\"submit\" class=\"btn btn-raised btn-success\" (click)=\"insertlocation('next')\" *ngIf=\"save\" [disabled]=\"!locationForm.valid || events.sold !=0\">\r\n                          Save & next\r\n                           <!-- <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i> -->\r\n                          </button>\r\n\r\n                        </div>\r\n\r\n                      </div>\r\n\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                          <agm-map [(latitude)]=\"location.lat\" [(longitude)]=\"location.lng\" [(zoom)]=\"location.zoom\" [disableDefaultUI]=\"true\" [zoomControl]=\"true\" [(fitBounds)]='location.viewport'>\r\n                            <agm-marker [(latitude)]=\"location.marker.lat\" [(longitude)]=\"location.marker.lng\" [markerDraggable]=\"location.marker.draggable\" (dragEnd)='markerDragEnd($event)'></agm-marker>\r\n\r\n                            <!-- <agm-circle [latitude]=\"location.lat\" [longitude]=\"location.lng\"\r\n                            [(radius)]=\"circleRadius\"\r\n                            [fillColor]=\"'blue'\"\r\n                            [circleDraggable]=\"true\"\r\n                            [editable]=\"true\"></agm-circle> -->\r\n                          </agm-map>\r\n\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </ng-template>\r\n    </ngb-tab>\r\n\r\n  <ngb-tab title=\"Contacts\" id=\"contacts\" active=\"SelectedTab == 'contacts'\" [disabled]=\"flag\">\r\n    <ng-template ngbTabContent>\r\n      <div class=\"row\" *ngIf=\"showTable && !showForm\">\r\n          <div class=\"col-sm-12\">\r\n              <div class=\"card\">\r\n                  <div class=\"card-header\">\r\n                      <div class=\"row\">\r\n                          <div class=\"col-sm-6\">\r\n                              <p>Contacts</p>\r\n                          </div>\r\n                          <div class=\"col-sm-6\" style=\"text-align: right;\">\r\n                              <p>\r\n                                  <a *ngIf=\"events.end_dt >= dt\" class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-bitbucket float-right\" (click)=\"addcontact(events.id)\"><span class=\"ft-plus\"></span> Add Contact</a>\r\n                              </p>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"card-body\">\r\n                          <div class=\"card-block\">\r\n                              <table class=\"table table-responsive-md text-center\">\r\n                                  <thead>\r\n                                      <tr>\r\n                                          <th>Name</th>\r\n                                          <th>Phone</th>\r\n                                          <th>Action</th>\r\n                                      </tr>\r\n                                  </thead>\r\n                                  <tbody>\r\n                                      <tr *ngFor=\"let data of contactData | paginate: { itemsPerPage: 10, currentPage: p }\">\r\n                                          <td>{{data.name}}</td>\r\n                                          <td>{{data.phone}}</td>\r\n                                            <td *ngIf=\"events.sold != 0 || events.end_dt < dt\">\r\n                                             <a class=\"default p-0\" style=\"cursor: not-allowed;\" data-original-title=\"\" title=\"\">\r\n                                                 <i class=\"fas fa-pencil-alt font-medium-3 mr-2\"></i>\r\n                                            </a>\r\n                                             <a class=\"default p-0\" style=\"cursor: not-allowed;\" data-original-title=\"\" title=\"\">\r\n                                                <i class=\"fas fa-trash font-medium-3 mr-2\"></i>\r\n                                            </a>\r\n                                        </td>\r\n                                       \r\n                                          <td *ngIf=\"events.sold == 0 && events.end_dt >= dt\">\r\n                                              <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"editcontact(data.id)\">\r\n                                                  <i class=\"fas fa-pencil-alt font-medium-3 mr-2\"></i>\r\n                                              </a>\r\n                                              <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"deletecontact(data.id)\">\r\n                                                  <i class=\"fas fa-trash font-medium-3 mr-2\"></i>\r\n                                              </a>\r\n                                          </td>\r\n                                      </tr>\r\n\r\n                                      <!-- <pagination-controls (pageChange)=\"p = $contact\"></pagination-controls> -->\r\n                                  </tbody>\r\n                              </table>\r\n                              <div class=\"col-12 paginationonAction\">\r\n                                  <span class=\"total\">{{contactcollectionSize}} Total</span>\r\n                                  <ngb-pagination [pageSize]=\"pageSize\" [(page)]=\"p\" [maxSize]=\"10\" [rotate]=\"true\" [collectionSize]=\"contactcollectionSize\" [boundaryLinks]=\"true\" style=\"float: right;\"></ngb-pagination>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"row\" *ngIf=\"!showTable && showForm\">\r\n          <div class=\"col-sm-12\">\r\n              <div class=\"card\">\r\n                  <div class=\"card-body\">\r\n                      <div class=\"card-block\">\r\n                        <!-- <ngb-tabset>\r\n                          <ngb-tab title=\"Information\">\r\n                            <ng-template ngbTabContent> -->\r\n                              <form class=\"form\" #contactForm=\"ngForm\">\r\n                                <div class=\"form-body\">\r\n                                  <!-- <h4 class=\"form-section\">\r\n                                  <i class=\"icon-user\"></i> Personal Details</h4> -->\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                      <div class=\"form-group\">\r\n                                        <label>Name</label>\r\n                                        <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"contacts.name\" [ngClass]=\"{ 'is-invalid': contactForm.submitted && name.invalid }\" required>\r\n                                        <small class=\"form-text text-muted danger\" *ngIf=\"contactForm.submitted && name.invalid\">This field is required!</small>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                      <div class=\"form-group\">\r\n                                        <label>Phone</label>\r\n                                        <input type=\"tel\" phone class=\"form-control\" name=\"phone\" \r\n                                        pattern=\"[0-9]{10}\" length=\"10\" [(ngModel)]=\"contacts.phone\" [ngClass]=\"{ 'is-invalid': contactForm.submitted && phone.invalid }\" required>\r\n                                        <small class=\"form-text text-muted danger\" *ngIf=\"contactForm.submitted && name.invalid\">This field is required!</small>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"form-actions\">\r\n                                  <button type=\"submit\" class=\"btn btn-raised btn-danger mr-1\" (click)=\"cancelcontact()\">\r\n                                  Cancel\r\n                                  </button>\r\n                                  <button type=\"submit\" class=\"btn btn-raised btn-success mr-1\" (click)=\"updatecontact()\" *ngIf=\"!save\" [disabled]=\"!contactForm.valid || events.sold !=0\">\r\n                                  Update Contact <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i>\r\n                                  </button>\r\n                                  <button type=\"submit\" class=\"btn btn-raised btn-success\" (click)=\"insertcontact('save')\" *ngIf=\"save\" [disabled]=\"!contactForm.valid || events.sold !=0\">\r\n                                  Save\r\n                                  <!-- <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i> -->\r\n                                  </button>&nbsp;\r\n                                  <button type=\"submit\" class=\"btn btn-raised btn-success\" (click)=\"insertcontact('next')\" *ngIf=\"save\" [disabled]=\"!contactForm.valid || events.sold !=0\">\r\n                                  Save & Next\r\n                                  <!-- <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i> -->\r\n                                  </button>\r\n\r\n                                </div>\r\n                              </form>\r\n                            <!-- </ng-template>\r\n                          </ngb-tab>\r\n                        </ngb-tabset> -->\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n    </ng-template>\r\n  </ngb-tab>\r\n\r\n\r\n<ngb-tab title=\"Images\" id=\"images\" active=\"SelectedTab == 'images'\" [disabled]=\"flag\">\r\n  <ng-template ngbTabContent>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n              <form [formGroup]=\"Form\" novalidate>\r\n                <div class=\"form-body\">\r\n                      <div class=\"form-group\">\r\n                      <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                      <!-- <div class=\"form-group\"> -->\r\n                        <input  type=\"file\" accept=\".png,.gif,.jpeg,.jpg\" multiple id=\"upload\" formControlName=\"upload\" (change)=\"upload($event.target.files)\" />\r\n                        <label class=\"custom-file-label\" for=\"upload\" #uploadLabel>Choose Image files</label>\r\n\r\n                        <br /><br />\r\n                             <small class=\"form-text text-muted green\">\r\n                              Image height must be >= 200 px and ratio must be 3:2 (width:height)\r\n                        </small>\r\n                    <br />\r\n                        <!-- <button type=\"submit\" class=\"btn btn-raised btn-success mr-1\" (click)=\"uploadImage()\" *ngIf=\"files.length > 0\">\r\n                        Upload Images <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i>\r\n                        </button> -->\r\n                        <button id=\"btnUpload\" type=\"submit\" class=\"btn btn-raised btn-success mr-1\" (click)=\"uploadImage('save')\" [disabled]=\"isDisabled || events.sold !=0 || events.end_dt < dt\">\r\n                        Upload<i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i>\r\n                        </button>&nbsp;\r\n                        <button id=\"btnUpload\" type=\"submit\" class=\"btn btn-raised btn-success mr-1\" (click)=\"uploadImage('next')\" [disabled]=\"isDisabled || events.sold !=0 || events.end_dt < dt\">\r\n                        Upload & Next <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i>\r\n                        </button>\r\n\r\n                        <button type='submit' style=\"visibility:hidden;\" id='viewImages' (click)=\"viewImages()\"></button>\r\n                        <button type='submit' style=\"visibility:hidden;\" id='sponsors' (click)=\"sponsorTab()\"></button>\r\n\r\n                      </div>\r\n\r\n                    </div>\r\n                      </div>\r\n\r\n                      <div class=\"row\">\r\n                          <!-- <div class=\"upload-image\"> -->\r\n                            <div class=\"image-wrapper\" *ngFor=\"let data of images\">\r\n                              <span>\r\n                                <img class=\"product-image\" src=\"https://cockburncrc.com.au/members/usermanagement/{{data['image']}}\" height=\"100%\" width=\"100%\" />\r\n                                <!-- <a class=\"delete-btn\" (click)=\"deleteImg(data['id'])\">Delete</a> -->\r\n                              </span>\r\n                              <div align='center'>\r\n                                <a *ngIf=\"events.sold == 0\" class=\"danger p-0\" data-original-title=\"\" style=\"margin:10px;\" (click)=\"deleteImg(data.id)\">\r\n                                    <i class=\"fas fa-trash font-medium-3 mr-2\"></i>\r\n                                </a>\r\n                                <a class=\"default p-0\" style=\"cursor: not-allowed;\" data-original-title=\"\" title=\"\" *ngIf=\"events.sold != 0 || events.end_dt < dt\">\r\n                                            <i class=\"fas fa-trash font-medium-3 mr-2\"></i>\r\n                                </a>\r\n                              </div>\r\n                            </div>\r\n                          <!-- </div> -->\r\n                      </div>\r\n\r\n                </div>\r\n              </form>\r\n\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </ng-template>\r\n</ngb-tab>\r\n\r\n<ngb-tab title=\"Sponsors\" id=\"sponsors\" active=\"SelectedTab == 'sponsors'\" [disabled]=\"flag\">\r\n  <ng-template ngbTabContent>\r\n    <div class=\"row\" *ngIf=\"showTable && !showForm\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <p>Sponsors</p>\r\n                        </div>\r\n                        <div class=\"col-sm-6\" style=\"text-align: right;\">\r\n                            <p>\r\n                                <a *ngIf=\"events.end_dt >= dt\" class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-bitbucket float-right\" (click)=\"addsponsor(events.id)\"><span class=\"ft-plus\"></span> Add Sponsor</a>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <table class=\"table table-responsive-md text-center\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Image</th>\r\n                                        <th>Website</th>\r\n                                        <th>Action</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let data of sponsorData | paginate: { itemsPerPage: 10, currentPage: p }\">\r\n                                        <td><img src=\"https://cockburncrc.com.au/members/usermanagement/{{data['img']}}\" height=\"75px\" width=\"125px\" /></td>\r\n                                        <td>{{data.website}}</td>\r\n\r\n                                         <td *ngIf=\"events.sold != 0 || events.end_dt < dt\">\r\n                                             <a class=\"default p-0\" style=\"cursor: not-allowed;\" data-original-title=\"\" title=\"\">\r\n                                                 <i class=\"fas fa-pencil-alt font-medium-3 mr-2\"></i>\r\n                                            </a>\r\n                                             <a class=\"default p-0\" style=\"cursor: not-allowed;\" data-original-title=\"\" title=\"\">\r\n                                                <i class=\"fas fa-trash font-medium-3 mr-2\"></i>\r\n                                            </a>\r\n                                        </td>\r\n                                        <td *ngIf=\"events.sold == 0 && events.end_dt >= dt\">\r\n                                            <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"editsponsor(data.id)\">\r\n                                                <i class=\"fas fa-pencil-alt font-medium-3 mr-2\"></i>\r\n                                            </a>\r\n                                            <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"deletesponsor(data.id)\">\r\n                                                <i class=\"fas fa-trash font-medium-3 mr-2\"></i>\r\n                                            </a>\r\n                                        </td>\r\n                                    </tr>\r\n\r\n                                    <!-- <pagination-controls (pageChange)=\"p = $contact\"></pagination-controls> -->\r\n                                </tbody>\r\n                            </table>\r\n                            <div class=\"col-12 paginationonAction\">\r\n                                <span class=\"total\">{{sponsorcollectionSize}} Total</span>\r\n                                <ngb-pagination [pageSize]=\"pageSize\" [(page)]=\"p\" [maxSize]=\"10\" [rotate]=\"true\" [collectionSize]=\"sponsorcollectionSize\" [boundaryLinks]=\"true\" style=\"float: right;\"></ngb-pagination>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"!showTable && showForm\">\r\n\r\n        <div class=\"col-sm-12\">\r\n\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                      <!-- <ngb-tabset>\r\n                        <ngb-tab title=\"Information\">\r\n                          <ng-template ngbTabContent> -->\r\n                            <form class=\"form\" #sponsorForm=\"ngForm\">\r\n                              <div class=\"form-body\">\r\n                                <!-- <h4 class=\"form-section\">\r\n                                <i class=\"icon-user\"></i> Personal Details</h4> -->\r\n                                <div class=\"row\">\r\n                                  <!-- <div class=\"col-md-12\"> -->\r\n                                    <div class=\"form-group\" style=\"width:97%;margin-left:14px;\">\r\n                                        <div class=\"custom-file center-block d-block\">\r\n                                      <label>Sponsor's Logo</label>\r\n                                        <input type=\"file\" id=\"uploadLogo\" accept=\".png,.gif,.jpeg,.jpg\" (change)=\"uploadLogo($event.target.files)\" />\r\n                        <label class=\"custom-file-label\" for=\"uploadLogo\" #uploadLogoLabel>Choose Logo</label>\r\n                        <small class=\"form-text text-muted green\">Width must be 250 px & height must be 150 px</small>\r\n                       </div>\r\n                                    </div>\r\n                                  <!-- </div> -->\r\n                                <!--  </div>\r\n                                 </div>\r\n                                <div class=\"row\">\r\n                              -->\r\n                                  <div class=\"col-md-12\">\r\n                                  <!-- <div class=\"row\"> -->\r\n                              \r\n                                    <div class=\"form-group\">\r\n                                      <label>Website URL</label>\r\n                                      <input type=\"text\" id=\"website\" class=\"form-control\" align=\"left\" name=\"website\" [(ngModel)]=\"sponsors.website\" required>\r\n                                      <!-- <small class=\"form-text text-muted danger\" *ngIf=\"sponsorForm.submitted && website.invalid\">This field is required!</small> -->\r\n                                            <small class=\"form-text text-muted green\">Start with http or https</small>\r\n                                    </div>\r\n                                  </div>\r\n                                <!-- </div> -->\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"form-actions\">\r\n                                <button type=\"submit\" class=\"btn btn-raised btn-danger mr-1\" (click)=\"cancelsponsor()\">\r\n                                Cancel\r\n                                </button>\r\n                                <button type=\"submit\" class=\"btn btn-raised btn-success mr-1\" (click)=\"updatesponsor()\" *ngIf=\"!save\" [disabled]=\"!sponsorForm.valid || isLogoDisabled || !isURL(sponsors.website) || events.sold !=0 || events.end_dt < dt\">\r\n                                Update Sponsor <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i>\r\n                                </button>\r\n                                <button type=\"submit\" class=\"btn btn-raised btn-success\" (click)=\"insertsponsor('save')\" *ngIf=\"save\" [disabled]=\"!sponsorForm.valid || isLogoDisabled || !isURL(sponsors.website) || events.sold !=0\">\r\n                                Save\r\n                                <!-- <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i> -->\r\n                                </button>&nbsp;\r\n                                <button type=\"submit\" class=\"btn btn-raised btn-success\" (click)=\"insertsponsor('next')\" *ngIf=\"save\" [disabled]=\"!sponsorForm.valid || isLogoDisabled || !isURL(sponsors.website) || events.sold !=0\">\r\n                                Save & Next\r\n                                <!-- <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i> -->\r\n                                </button>\r\n\r\n                              </div>\r\n                            </form>\r\n                          <!-- </ng-template>\r\n                        </ngb-tab>\r\n                      </ngb-tabset> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n  </ng-template>\r\n</ngb-tab>\r\n\r\n  <ngb-tab title=\"Tickets\" id=\"tickets\" active=\"SelectedTab == 'tickets'\" [disabled]=\"flag\">\r\n    <ng-template ngbTabContent>\r\n      <div class=\"row\" *ngIf=\"showTable && !showForm\">\r\n          <div class=\"col-sm-12\">\r\n              <div class=\"card\">\r\n                  <div class=\"card-header\">\r\n                      <div class=\"row\">\r\n                          <div class=\"col-sm-6\">\r\n                              <p>Event Tickets</p>\r\n                          </div>\r\n                      <!--                              <div class=\"col-sm-6\">\r\n                        <button class=\"mr-1\" (click)=\"ExportToPdf()\" tooltip=\"Export as PDF\">\r\n                            <i class=\"fas fa-file-pdf\"></i>\r\n                        </button>\r\n                        <button class=\"mr-1\" (click)=\"ExportTOExcel()\" tooltip=\"Export as Xlsx\">\r\n                            <i class=\"fas fa-file-excel\"></i>\r\n                        </button>\r\n                        <button (click)=\"ExportTOCsv()\" tooltip=\"Export as Csv\">\r\n                            <i class=\"fas fa-file-csv\"></i>\r\n                        </button>\r\n                    </div> -->\r\n         \r\n                          <div class=\"col-sm-6\" style=\"text-align: right;\">\r\n                              <p>\r\n                                <button [disabled]=\"!ticketData || events.sold ==0\" class=\"btn btn-success btn-raised\" (click)=\"viewTransactions();\"><i class=\"fa fa-eye\"></i> Transactions</button>\r\n                            <!--     Transactions:\r\n                                   <button  style=\"margin-top:5px;\" class=\"mr-1\" (click)=\"ExportToPdf()\" tooltip=\"View Transactions\">\r\n                                       <i class=\"fa fa-eye\"></i>\r\n                                  </button>\r\n                               \r\n                                  <button  style=\"margin-top:5px;\" class=\"mr-1\" (click)=\"ExportToPdf()\" tooltip=\"Export as PDF\">\r\n                                      <i class=\"fas fa-file-pdf\"></i>\r\n                                  </button>\r\n                                  <button  style=\"margin-top:5px;\" class=\"mr-1\" (click)=\"ExportTOExcel()\" tooltip=\"Export as Xlsx\">\r\n                                      <i class=\"fas fa-file-excel\"></i>\r\n                                  </button>\r\n                                  <button style=\"margin-top:5px;\" (click)=\"ExportTOCsv()\" tooltip=\"Export as Csv\">\r\n                                      <i class=\"fas fa-file-csv\"></i>\r\n                                  </button> -->\r\n                                  <a *ngIf=\"events.end_dt >= dt\" style=\"margin-left:20px;\" class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-bitbucket float-right\" (click)=\"addticket(events.id)\"><span class=\"ft-plus\"></span> Add Event Ticket</a>\r\n                              </p>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"card-body\">\r\n                          <div class=\"card-block\">\r\n                              <table class=\"table table-responsive-md text-center\">\r\n                                  <thead>\r\n                                      <tr>\r\n                                          <th>Ticket Type</th>\r\n                                          <!-- <th>Decription</th> -->\r\n                                          <th>Price</th>\r\n                                          <th>Total Tickets</th>\r\n                                          <th>Available Tickets</th>\r\n                                          <th>Sold Tickets</th>\r\n                                          <th>Action</th>\r\n                                      </tr>\r\n                                  </thead>\r\n                                  <tbody>\r\n                                      <tr *ngFor=\"let data of ticketData | paginate: { itemsPerPage: 10, currentPage: p }\">\r\n                                          <td>{{data.type}}</td>\r\n                                          <!-- <td>{{data.description}}</td> -->\r\n                                          <td>${{data.price}}</td>\r\n                                          <td>{{data.total_tickets}}</td>\r\n                                          <td>{{data.no_available}}</td>\r\n                                           <td><button class=\"btn btn-success btn-raised\" (click)=\"viewTickets(data.id,data.type,data.price);\" [disabled]=\"data.no_available == data.total_tickets\">View</button></td>\r\n                                        \r\n                                         <!--  <td *ngIf=\"data.active == 1\">\r\n                                              <ui-switch id=\"active\" [checked]=\"true\" disabled></ui-switch>\r\n                                          </td>\r\n                                          <td *ngIf=\"data.active == 0\">\r\n                                              <ui-switch id=\"active\" [checked]=\"false\" disabled></ui-switch>\r\n                                          </td>\r\n                                         -->\r\n                                          <td *ngIf=\"data.no_available != data.total_tickets\">\r\n                                          \r\n                                        <!--       <a class=\"default p-0\" style=\"cursor: not-allowed;\" data-original-title=\"\" title=\"\">\r\n                                         \r\n                                                  <i class=\"fas fa-pencil-alt font-medium-3 mr-2\"></i>\r\n                                              </a> -->\r\n                                              <a *ngIf=\"events.end_dt >= dt\" class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"editticket(data.id)\">\r\n                                         \r\n                                                  <i class=\"fas fa-pencil-alt font-medium-3 mr-2\"></i>\r\n                                              </a>\r\n                                          <a  *ngIf=\"events.end_dt < dt\" class=\"default p-0\" style=\"cursor: not-allowed;\" data-original-title=\"\" title=\"\">\r\n                                                  <i class=\"fas fa-pencil-alt font-medium-3 mr-2\"></i>\r\n                                              </a>\r\n                                              <a class=\"default p-0\" style=\"cursor: not-allowed;\" data-original-title=\"\" title=\"\">\r\n                                                  <i class=\"fas fa-trash font-medium-3 mr-2\"></i>\r\n                                              </a>\r\n                                          </td>\r\n                                          <td *ngIf=\"data.no_available == data.total_tickets\">\r\n                                               <!-- <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"editticket(data.id)\">\r\n                                         \r\n                                                  <i class=\"fas fa-pencil-alt font-medium-3 mr-2\"></i>\r\n                                              </a> -->\r\n                                           <a *ngIf=\"events.end_dt >= dt\" class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"editticket(data.id)\">\r\n                                         \r\n                                                  <i class=\"fas fa-pencil-alt font-medium-3 mr-2\"></i>\r\n                                              </a>\r\n                                          <a  *ngIf=\"events.end_dt < dt\" class=\"default p-0\" style=\"cursor: not-allowed;\" data-original-title=\"\" title=\"\">\r\n                                                  <i class=\"fas fa-pencil-alt font-medium-3 mr-2\"></i>\r\n                                              </a>\r\n                                             \r\n                                              <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"deleteticket(data.id)\">\r\n                                                  <i class=\"fas fa-trash font-medium-3 mr-2\"></i>\r\n                                              </a>\r\n                                          </td>\r\n                                      </tr>\r\n\r\n                                      <!-- <pagination-controls (pageChange)=\"p = $ticket\"></pagination-controls> -->\r\n                                  </tbody>\r\n                              </table>\r\n                              <div class=\"col-12 paginationonAction\">\r\n                                  <span class=\"total\">{{ticketcollectionSize}} Total</span>\r\n                                  <ngb-pagination [pageSize]=\"pageSize\" [(page)]=\"p\" [maxSize]=\"10\" [rotate]=\"true\" [collectionSize]=\"ticketcollectionSize\" [boundaryLinks]=\"true\" style=\"float: right;\"></ngb-pagination>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"row\" *ngIf=\"!showTable && showForm\">\r\n          <div class=\"col-sm-12\">\r\n              <div class=\"card\">\r\n                  <div class=\"card-body\">\r\n                      <div class=\"card-block\">\r\n                        <!-- <ngb-tabset>\r\n                          <ngb-tab title=\"Information\">\r\n                            <ng-template ngbTabContent> -->\r\n                              <form class=\"form\" #ticketForm=\"ngForm\">\r\n                                <div class=\"form-body\">\r\n                                  <!-- <h4 class=\"form-section\">\r\n                                  <i class=\"icon-user\"></i> Personal Details</h4> -->\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                      <div class=\"form-group\">\r\n                                        <label>Ticket Type</label>\r\n                                        <input type=\"text\" class=\"form-control\" name=\"type\" [(ngModel)]=\"tickets.type\" [ngClass]=\"{ 'is-invalid': ticketForm.submitted && type.invalid }\" required  [disabled]=\"events.sold != 0\">\r\n                                        <small class=\"form-text text-muted danger\" *ngIf=\"ticketForm.submitted && type.invalid\">This field is required!</small>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                      <div class=\"form-group\">\r\n                                        <label>Description</label>\r\n                                        <input type=\"text\" description class=\"form-control\" name=\"description\" [(ngModel)]=\"tickets.description\" [ngClass]=\"{ 'is-invalid': ticketForm.submitted && description.invalid }\" required [disabled]=\"events.sold != 0\">\r\n                                        <small class=\"form-text text-muted danger\" *ngIf=\"ticketForm.submitted && description.invalid\">This field is required!</small>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                      <div class=\"form-group\">\r\n                                        <label>Price</label>\r\n                                        <input type=\"number\" class=\"form-control\" name=\"price\" [(ngModel)]=\"tickets.price\" [ngClass]=\"{ 'is-invalid': ticketForm.submitted && price.invalid }\" required [disabled]=\"events.sold != 0\">\r\n                                        <small class=\"form-text text-muted danger\" *ngIf=\"ticketForm.submitted && price.invalid\">This field is required!</small>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                      <div class=\"form-group\">\r\n                                        <label>Available Tickets</label>\r\n                                        <input type=\"number\" class=\"form-control\" name=\"no_available\" [(ngModel)]=\"tickets.no_available\" [ngClass]=\"{ 'is-invalid': ticketForm.submitted && no_available.invalid }\" required>\r\n                                        <small class=\"form-text text-muted danger\" *ngIf=\"ticketForm.submitted && no_available.invalid\">This field is required!</small>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                  <!-- <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                      <div class=\"form-group\">\r\n                                            <label for=\"active\">Active</label>\r\n                                            <div>\r\n                                                <ui-switch id=\"active\" [checked]=\"tickets.active\" (click)=\"active(tickets.active)\" formControlName=\"active\"></ui-switch>\r\n                                            </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div> -->\r\n                                </div>\r\n                                <div class=\"form-actions\">\r\n                                  <button type=\"submit\" class=\"btn btn-raised btn-danger mr-1\" (click)=\"cancelticket()\">\r\n                                  Cancel\r\n                                  </button>\r\n                                  <button type=\"submit\" class=\"btn btn-raised btn-success mr-1\" (click)=\"updateticket()\" *ngIf=\"!save\" [disabled]=\"!ticketForm.valid\">\r\n                                  Update Ticket <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i>\r\n                                  </button>\r\n                                  <button type=\"submit\" class=\"btn btn-raised btn-success\" (click)=\"insertticket()\" *ngIf=\"save\" [disabled]=\"!ticketForm.valid\">\r\n                                  Add Ticket <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i>\r\n                                  </button>\r\n                                </div>\r\n                              </form>\r\n                            <!-- </ng-template>\r\n                          </ngb-tab>\r\n                        </ngb-tabset> -->\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n      </ng-template>\r\n    </ngb-tab>\r\n  </ngb-tabset>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/events/events.component.scss":
/*!**********************************************!*\
  !*** ./src/app/events/events.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sebm-google-map-container {\n  height: 300px;\n  width: 100%; }\n\n#address {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%; }\n\n.image-wrapper span {\n  width: 150px;\n  height: 150px;\n  margin: 10px;\n  float: left;\n  border: 1px solid #ccc;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  cursor: default;\n  background: #fff; }\n\n.product-image {\n  width: 100%;\n  height: 100%; }\n\na.delete-btn {\n  color: #f00;\n  cursor: pointer; }\n\n.error {\n  color: #ff0000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzL0M6XFxVc2Vyc1xcTVJUMjBcXERlc2t0b3BcXFVNXFx1c2VybWFuYWdlbWVudC9zcmNcXGFwcFxcZXZlbnRzXFxldmVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxjQUFhO0VBQ2IsWUFBVyxFQUNaOztBQUNEO0VBQ08sbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixVQUFTO0VBQ1QsWUFBVyxFQUNaOztBQUVEO0VBQ0ksYUFBWTtFQUNaLGNBQWE7RUFDYixhQUFZO0VBQ1osWUFBVztFQUNYLHVCQUFzQjtFQUN0QixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLGlCQUFnQixFQUVuQjs7QUFlRDtFQUNJLFlBQVU7RUFDVixhQUFXLEVBQ2Q7O0FBQ0Q7RUFDSSxZQUFXO0VBQ1gsZ0JBQWUsRUFDbEI7O0FBYUQ7RUFDSSxlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZXZlbnRzL2V2ZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWJtLWdvb2dsZS1tYXAtY29udGFpbmVyIHtcclxuICAgaGVpZ2h0OiAzMDBweDtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiB9XHJcbiAjYWRkcmVzcyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmltYWdlLXdyYXBwZXIgc3BhbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC8vIC5icm93c2UtYnRuIHtcclxuICAgICAgLy8gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIC8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIC8vICAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgICAgLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLy8gICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgLy8gICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgIC8vICAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XHJcbiAgICAgIC8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gLmJyb3dzZS1pbWFnZSB7XHJcbiAgICAgIC8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIC8vICAgICB0b3A6IDI1JTtcclxuICAgICAgLy8gfVxyXG4gICAgICAucHJvZHVjdC1pbWFnZXtcclxuICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgfVxyXG4gICAgICBhLmRlbGV0ZS1idG4ge1xyXG4gICAgICAgICAgY29sb3I6ICNmMDA7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLy8gI2NhbWVyYUltZyB7XHJcbiAgICAgIC8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIC8vICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAvLyAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIC8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIC8vICAgICB0b3A6MDtcclxuICAgICAgLy8gICAgIGJvdHRvbTowO1xyXG4gICAgICAvLyAgICAgbGVmdDowO1xyXG4gICAgICAvLyAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIC8vICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIC5lcnJvciB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmMDAwMDtcclxuICAgICAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/events/events.component.ts":
/*!********************************************!*\
  !*** ./src/app/events/events.component.ts ***!
  \********************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable/release */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_data_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/data/events.service */ "./src/app/shared/data/events.service.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _agm_core_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core/services */ "./node_modules/@agm/core/services.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_14__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var EventsComponent = /** @class */ (function () {
    function EventsComponent(http, mapsApiLoader, zone, wrapper, snotifyService, eventsservice, router, route) {
        var _this = this;
        this.http = http;
        this.mapsApiLoader = mapsApiLoader;
        this.zone = zone;
        this.wrapper = wrapper;
        this.snotifyService = snotifyService;
        this.eventsservice = eventsservice;
        this.router = router;
        this.route = route;
        this.circleRadius = 5000; // km
        this.location = {
            lat: 0,
            lng: 0,
            marker: {
                lat: 0,
                lng: 0,
                draggable: true
            },
            zoom: 5,
            address: '',
            event_id: ''
        };
        this.flag = false;
        this.SelectedTab = '';
        this.showTable = true;
        this.showForm = false;
        this.submitted = false;
        this.events = {
            'id': '',
            'title': '',
            'description': '',
            'member': false,
            'faq': '',
            'url': '',
            'email': '',
            'st_dt': null,
            'end_dt': null,
            'st_time': null,
            'end_time': null,
            'sold': 0,
            'banner': ''
        };
        this.tickets = {
            'id': '',
            'type': '',
            'description': '',
            'price': '',
            'active': false,
            'no_available': '',
            'event_id': '',
            'total_tickets': ''
        };
        this.totalticket = 0;
        this.contacts = {
            'id': '',
            'name': '',
            'phone': '',
            'event_id': ''
        };
        this.sponsors = {
            'id': '',
            'img': '',
            'website': '',
            'event_id': ''
        };
        this.p = 1;
        this.eventTable = true;
        this.pageSize = 10;
        this.count = [];
        this.columns = [
            { prop: 'name' },
            { prop: 'description' },
            { prop: 'price' },
            { prop: 'no_available' },
            { prop: 'active' }
        ];
        this.style = 'material';
        this.title = 'Snotify title!';
        this.body = 'Lorem ipsum dolor sit amet!';
        this.timeout = 1000;
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
        this.left_tickets = 0;
        this.exportData = [];
        this.fileName = '';
        this.files = [];
        this.isDisabled = true;
        this.isLogoDisabled = true;
        this.isBannerDisabled = true;
        //this.events = new Array();
        this.mapsApiLoader = mapsApiLoader;
        this.zone = zone;
        this.wrapper = wrapper;
        this.mapsApiLoader.load().then(function () {
            _this.geocoder = new google.maps.Geocoder();
            _this.initAutocomplete();
            // this.findLocation("Australia");
            // this.location.address = '';
            _this.dt = new Date().toISOString().slice(0, 10);
        });
    }
    EventsComponent.prototype.isEmail = function () {
        if (this.events.email == null) {
            return false;
        }
        // Assigning the email format regular expression
        var emailPattern = "^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})";
        // alert(this.events.email.match(emailPattern));
        return this.events.email.match(emailPattern);
    };
    EventsComponent.prototype.isURL = function (url) {
        if (url == null) {
            return false;
        }
        // Assigning the url format regular expression
        var urlPattern = "^http(s{0,1})://[a-zA-Z0-9_/\\-\\.]+\\.([A-Za-z/]{2,5})[a-zA-Z0-9_/\\&\\?\\=\\-\\.\\~\\%]*";
        return url.match(urlPattern);
    };
    EventsComponent.prototype.upload = function (files) {
        var _this = this;
        this.files = files;
        var img = new Image();
        var width = 0;
        var height = 0;
        var i = 0;
        for (i = 0; i < files.length; i++) {
            img.src = window.URL.createObjectURL(files[i]);
            img.onload = function () {
                width = img.naturalWidth;
                height = img.naturalHeight;
                if (((width / height) != 3 / 2) || height < 200) {
                    alert("Image height must be >= 200 px and ratio must be 3:2 (width:height)");
                    _this.uploadLabel.nativeElement.innerHTML = "Choose Logo";
                    _this.files = null;
                    return;
                }
                else {
                    _this.isDisabled = false;
                    // this.uploadLabel.nativeElement.innerHTML = files[0].name;
                    // this.fileName = files[0].name;
                    // var i=0;
                    // this.uploadLabel.nativeElement.innerHTML = "";
                    // for(i=0;i<files.length;i++)
                    // {
                    // alert(files[i].name);
                    // this.uploadLabel.nativeElement.innerHTML = this.uploadLabel.nativeElement.innerHTML + " " + (i+1) + ") " + files[i].name;
                    // }
                }
            };
            this.uploadLabel.nativeElement.innerHTML = "";
            for (i = 0; i < files.length; i++) {
                this.uploadLabel.nativeElement.innerHTML = this.uploadLabel.nativeElement.innerHTML + " " + (i + 1) + ") " + files[i].name;
            }
        }
        // this.files = files;
        // this.isDisabled = false;
        //   // this.uploadLabel.nativeElement.innerHTML = files[0].name;
        //   // this.fileName = files[0].name;
        //   var i=0;
        //   this.uploadLabel.nativeElement.innerHTML = "";
        //   for(i=0;i<files.length;i++)
        //   {
        //     this.uploadLabel.nativeElement.innerHTML = this.uploadLabel.nativeElement.innerHTML + " " + (i+1) + ") " + files[i].name;
        //   }
        //   console.log(this.uploadLabel.nativeElement);
        //  //this.uploadAndProgress(files);
    };
    // validate MM/DD/YYYY
    // static date(c: AbstractControl): { [key: string]: boolean } {
    //   let value = c.value;
    //   if (value && typeof value === "string") {
    //     let match = value.match(/^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/);
    //     if (!match) {
    //       return {'dateInvalid': true};
    //     }
    //     let date = new Date(`${match[3]}-${match[1]}-${match[2]}`);
    //     if (isNaN(date.getTime())) {
    //       return {'dateInvalid': true};
    //     }
    //   }
    //   return null;
    // }
    EventsComponent.prototype.uploadImage = function (str) {
        this.uploadAndProgress(this.files, str);
    };
    EventsComponent.prototype.uploadAndProgress = function (files, str) {
        var _this = this;
        this.submitted = true;
        console.log(files);
        var i = 0;
        for (i = 0; i < files.length; i++) {
            var formData = new FormData();
            //Array.from(files[i]).forEach(f => formData.append('file',f));
            formData.append('file', files[i]);
            this.fileName = files[i].name;
            var ext = this.fileName.substring(this.fileName.lastIndexOf('.') + 1, this.fileName.length);
            var dest_file = new Date().getTime() + "." + ext;
            //alert(dest_file);
            var id = this.events.id;
            this.http.post('https://cockburncrc.com.au/members/usermanagement/uploadEventImages.php?event_id=' + id + '&action=add&fld=event_images&file=' + dest_file, formData, { reportProgress: true, observe: 'events' })
                .subscribe(function (event) {
                // alert(JSON.stringify(event));
                if (event && event['status'] == "Sorry, your file is too large.") {
                    _this.snotifyService.success('Sorry, your file dimension is not proper. Recommended Size in 6:18 ratio.', '', _this.getConfig());
                }
                // if (event.type === HttpEventType.UploadProgress) {
                //   //this.percentDone = Math.round(100 * event.loaded / event.total);
                // } else if (event instanceof HttpResponse) {
                //   //this.uploadSuccess = true;
                // }
                if (i == files.length - 1) {
                    _this.submitted = false;
                    // this.snotifyService.success('Uploaded Successfully!', '', this.getConfig());
                    // swal("Success!",'Uploaded Successfully!', 'success');
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                        type: 'success',
                        title: '',
                        html: '' +
                            'Uploaded Successfully!',
                        showCloseButton: false,
                        confirmButtonText: 'Ok',
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        showCancelButton: false,
                    }).then(function (dismiss) {
                        // this.viewImages();
                        //console.log(JSON.stringify(dismiss));
                        if (dismiss.value && dismiss !== 'cancel') {
                            if (str == 'next') {
                                var element = document.getElementById("sponsors");
                                element.click();
                                // this.tabs.select('tickets');
                            }
                            else {
                                var element = document.getElementById("viewImages");
                                // element.addEventListener("click", this.viewImages());
                                element.click();
                            }
                        }
                    });
                    _this.files = null;
                }
            });
        }
    };
    EventsComponent.prototype.sponsorTab = function () {
        // alert('test');
        this.showTable = false;
        this.showForm = true;
        this.save = true;
        this.sponsors.event_id = this.events.id;
        this.tabs.select('sponsors');
    };
    EventsComponent.prototype.viewImages = function () {
        var _this = this;
        this.eventsservice.getimages(this.events.id).then(function (data1) {
            // alert(JSON.stringify(data1));
            if (data1['status'] == 'success') {
                _this.images = data1['images'];
            }
            else {
                _this.images = [];
            }
        });
        this.files = null;
        this.isDisabled = true;
        this.uploadLabel.nativeElement.innerHTML = "Choose Image files";
    };
    Object.defineProperty(EventsComponent.prototype, "f", {
        get: function () { return this.Form.controls; },
        enumerable: true,
        configurable: true
    });
    //Below is location code
    EventsComponent.prototype.initAutocomplete = function () {
        this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('address'), { types: ['geocode'], componentRestrictions: { country: 'AU' } });
        // address fields in the form.
        //this.autocomplete.addListener('place_changed', this.findLocation((<HTMLInputElement>document.getElementById('autocomplete')).value));
        //this.findLocation((<HTMLInputElement>document.getElementById('autocomplete')).value);
    };
    EventsComponent.prototype.findLocation = function (address) {
        var _this = this;
        if (address === void 0) { address = ''; }
        if (address == '')
            address = document.getElementById('address').value;
        this.location.address = address;
        if (!this.geocoder)
            this.geocoder = new google.maps.Geocoder();
        this.geocoder.geocode({
            'address': address
        }, function (results, status) {
            console.log(results);
            if (status == google.maps.GeocoderStatus.OK) {
                for (var i = 0; i < results[0].address_components.length; i++) {
                    var types = results[0].address_components[i].types;
                    console.log(types);
                    if (types.indexOf('locality') != -1) {
                        _this.location.address_level_2 = results[0].address_components[i].long_name;
                    }
                    if (types.indexOf('country') != -1) {
                        _this.location.address_country = results[0].address_components[i].long_name;
                    }
                    if (types.indexOf('postal_code') != -1) {
                        _this.location.address_zip = results[0].address_components[i].long_name;
                    }
                    if (types.indexOf('administrative_area_level_1') != -1) {
                        _this.location.address_state = results[0].address_components[i].long_name;
                    }
                }
                if (results[0].geometry.location) {
                    _this.location.lat = results[0].geometry.location.lat();
                    _this.location.lng = results[0].geometry.location.lng();
                    _this.location.marker.lat = results[0].geometry.location.lat();
                    _this.location.marker.lng = results[0].geometry.location.lng();
                    _this.location.marker.draggable = true;
                    _this.location.viewport = results[0].geometry.viewport;
                }
                _this.map.triggerResize();
            }
            else {
                //alert("Please enter proper address.");
            }
        });
    };
    EventsComponent.prototype.findAddressByCoordinates = function () {
        var _this = this;
        this.geocoder.geocode({
            'location': {
                lat: this.location.marker.lat,
                lng: this.location.marker.lng
            }
        }, function (results, status) {
            _this.decomposeAddressComponents(results);
        });
    };
    EventsComponent.prototype.decomposeAddressComponents = function (addressArray) {
        if (addressArray.length == 0)
            return false;
        var address = addressArray[0].address_components;
        console.log(address);
        for (var _i = 0, address_1 = address; _i < address_1.length; _i++) {
            var element = address_1[_i];
            console.log(element);
            if (element.length == 0 && !element['types'])
                continue;
            if (element['types'].indexOf('street_number') > -1) {
                this.location.address_level_1 = element['long_name'];
                continue;
            }
            if (element['types'].indexOf('route') > -1) {
                this.location.address_level_1 += ', ' + element['long_name'];
                continue;
            }
            if (element['types'].indexOf('locality') > -1) {
                this.location.address_level_2 = element['long_name'];
                continue;
            }
            if (element['types'].indexOf('administrative_area_level_1') > -1) {
                this.location.address_state = element['long_name'];
                continue;
            }
            if (element['types'].indexOf('country') > -1) {
                this.location.address_country = element['long_name'];
                continue;
            }
            if (element['types'].indexOf('postal_code') > -1) {
                this.location.address_zip = element['long_name'];
                continue;
            }
        }
    };
    EventsComponent.prototype.updateOnMap = function () {
        console.log('updating');
        var full_address = this.location.address_level_1 || "";
        if (this.location.address_level_2)
            full_address = full_address + " " + this.location.address_level_2;
        if (this.location.address_state)
            full_address = full_address + " " + this.location.address_state;
        if (this.location.address_country)
            full_address = full_address + " " + this.location.address_country;
        this.findLocation(full_address);
        console.log(full_address);
    };
    EventsComponent.prototype.circleRadiusInKm = function () {
        return this.circleRadius / 1000;
    };
    EventsComponent.prototype.milesToRadius = function (value) {
        this.circleRadius = value / 0.00062137;
    };
    EventsComponent.prototype.circleRadiusInMiles = function () {
        return this.circleRadius * 0.00062137;
    };
    EventsComponent.prototype.markerDragEnd = function (m, $event) {
        this.location.marker.lat = m.coords.lat;
        this.location.marker.lng = m.coords.lng;
        this.findAddressByCoordinates();
    };
    //Above is location code
    EventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({}, { updateOn: 'blur' });
        this.location.marker.draggable = true;
        this.SelectedTab = 'details';
        this.eventTable = true;
        this.eventsservice.getevent(new Date().getTime()).then(function (data) {
            // alert(JSON.stringify(data));
            if (data['status'] == 'success') {
                _this.eventData = data['events'];
                _this.collectionSize = data['events'].length;
                _this.totalevent = data['events'].length;
            }
        });
    };
    EventsComponent.prototype.selectData = function (value) {
        var _this = this;
        this.SelectedTab = value.nextId;
        if (value.nextId == 'details') {
            this.save = true;
            this.eventsservice.geteventById(this.events.id).then(function (data) {
                if (data['status'] == 'success') {
                    _this.save = false;
                }
            });
        }
        else if (value.nextId == 'location') {
            this.save = true;
            this.location.event_id = this.events.id;
            this.location.address = '';
            this.eventsservice.getlocation(this.events.id).then(function (data) {
                if (data['status'] == 'success') {
                    _this.location.address = data['location'][0].address;
                    _this.save = false;
                    _this.findLocation(_this.location.address);
                }
                else {
                    _this.findLocation("Australia");
                    _this.location.address = '';
                }
            });
        }
        else if (value.nextId == 'tickets') {
            this.tickets.event_id = this.events.id;
            this.showTable = true;
            this.showForm = false;
            this.eventsservice.getticket(this.tickets.event_id).then(function (data) {
                if (data['status'] == 'success') {
                    // alert(JSON.stringify(data));
                    _this.ticketData = data['tickets'];
                    _this.ticketcollectionSize = data['tickets'].length;
                    _this.totalticket = data['tickets'].length;
                }
            });
        }
        else if (value.nextId == 'contacts') {
            // this.contactData = [];
            // this.contactcollectionSize = [];
            // this.totalcontact = [];
            this.contacts.event_id = this.events.id;
            this.showTable = true;
            this.showForm = false;
            this.eventsservice.getcontact(this.contacts.event_id).then(function (data) {
                //alert(JSON.stringify(data));
                if (data['status'] == 'success') {
                    _this.contactData = data['contacts'];
                    _this.contactcollectionSize = data['contacts'].length;
                    _this.totalcontact = data['contacts'].length;
                }
                else {
                    // this.contactData = [];
                    // this.contactcollectionSize = [];
                    // this.totalcontact = [];
                }
            });
        }
        else if (value.nextId == 'images') {
            this.viewImages();
            // this.eventsservice.getimages(this.events.id).then(data => {
            //   //alert(JSON.stringify(data));
            //
            //     if(data['status'] == 'success'){
            //         this.images = data['images'];
            //     }
            // });
        }
        else if (value.nextId == 'sponsors') {
            // this.contactData = [];
            // this.contactcollectionSize = [];
            // this.totalcontact = [];
            this.sponsors.event_id = this.events.id;
            this.showTable = true;
            this.showForm = false;
            this.eventsservice.getsponsor(this.sponsors.event_id).then(function (data) {
                //alert(JSON.stringify(data));
                if (data['status'] == 'success') {
                    _this.sponsorData = data['sponsors'];
                    _this.sponsorcollectionSize = data['sponsors'].length;
                    _this.totalsponsor = data['sponsors'].length;
                }
                else {
                    // this.contactData = [];
                    // this.contactcollectionSize = [];
                    // this.totalcontact = [];
                }
            });
        }
    };
    EventsComponent.prototype.deleteImg = function (id) {
        var self = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
            title: '',
            html: '' +
                'Image will be deleted. Do you want to continue?',
            showCloseButton: true,
            confirmButtonText: 'Ok',
            allowOutsideClick: false,
            allowEscapeKey: false,
            showCancelButton: true,
        }).then(function (dismiss) {
            //console.log(JSON.stringify(dismiss));
            if (dismiss.value && dismiss !== 'cancel') {
                self.eventsservice.deleteImgById(id).then(function (data) {
                    self.snotifyService.error('Deleted Successfully', '', self.getConfig());
                    for (var i in self.images) {
                        if (self.images[i].id === id) {
                            self.images.splice(i, 1);
                        }
                    }
                    // self.eventsservice.getimages(self.images.event_id).then(data => {
                    //     if(data['status'] == 'success'){
                    //       this.images = data['images'];
                    //     }
                    // });
                }, function (error) {
                });
            }
        });
    };
    EventsComponent.prototype.listEvent = function () {
        this.eventTable = true;
    };
    EventsComponent.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            //this.loadData();
        }
    };
    EventsComponent.prototype.createEvent = function () {
        this.resetall();
        this.events.id = '';
        this.events.title = '';
        this.events.email = '';
        this.events.description = '';
        this.events.url = '';
        this.events.faq = '';
        this.events.st_dt = '';
        this.events.end_time = '';
        this.events.st_time = '';
        this.events.banner = '';
        this.events.end_dt = '';
        this.events.sold = 0;
        this.flag = true;
        this.eventTable = false;
        this.save = true;
    };
    EventsComponent.prototype.resetall = function () {
        // this.eventForm.reset();
        // this.contactForm.reset();
        // this.locationForm.reset();
        // this.ticketForm.reset();
        this.location.address = '';
        this.images = [];
        // this.eventData=[];
        this.ticketData = [];
        this.ticketcollectionSize = [];
        this.totalticket = 0;
        this.contactData = [];
        this.contactcollectionSize = [];
        this.totalcontact = [];
        // this.collectionSize=[];
        this.sponsorData = [];
        this.sponsorcollectionSize = [];
        this.totalsponsor = [];
    };
    EventsComponent.prototype.editevent = function (id, title) {
        var _this = this;
        this.eventname = title;
        this.resetall();
        this.flag = false;
        this.eventsservice.geteventById(id).then(function (data) {
            // alert(JSON.stringify(data));
            _this.save = false;
            _this.eventTable = false;
            _this.showForm = false;
            _this.showTable = true; //200319
            _this.events.id = data['events'][0].id;
            _this.events.title = data['events'][0].title;
            _this.events.email = data['events'][0].email;
            _this.events.description = data['events'][0].description;
            _this.events.url = data['events'][0].url;
            _this.events.faq = data['events'][0].faq;
            _this.events.st_dt = data['events'][0].st_dt.slice(0, 10);
            _this.events.end_dt = data['events'][0].end_dt.slice(0, 10);
            _this.events.banner = data['events'][0].banner;
            _this.events.st_time = data['events'][0].st_time;
            _this.events.end_time = data['events'][0].end_time;
            _this.events.sold = data['events'][0].sold;
            if (data['events'][0].member == 1)
                _this.events.member = true;
            else
                _this.events.member = false;
        }, function (error) {
        });
    };
    EventsComponent.prototype.cancel = function () {
        this.showTable = true;
        this.showForm = false;
        this.save = true;
        this.eventForm.reset();
        this.events.id = '';
        this.events.title = '';
        this.events.email = '';
        this.events.url = '';
        this.events.description = '';
        this.events.faq = '';
        this.events.end_dt = '';
        this.events.st_dt = '';
        this.events.banner = '';
        this.events.st_time = '';
        this.events.end_time = '';
        this.events.member = false;
        this.events.sold = 0;
    };
    EventsComponent.prototype.deleteevent = function (id) {
        var self = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
            title: '',
            html: '' +
                'Event will be deleted. Do you want to continue?',
            showCloseButton: true,
            confirmButtonText: 'Ok',
            allowOutsideClick: false,
            allowEscapeKey: false,
            showCancelButton: true,
        }).then(function (dismiss) {
            //console.log(JSON.stringify(dismiss));
            if (dismiss.value && dismiss !== 'cancel') {
                self.eventsservice.deleteeventById(id).then(function (data) {
                    self.snotifyService.success('Deleted Successfully', '', self.getConfig());
                    // window.location.reload();
                    for (var i in self.eventData) {
                        if (self.eventData[i].id === id) {
                            self.eventData.splice(i, 1);
                        }
                    }
                    self.collectionSize = self.eventData.length;
                    self.totalevent = self.eventData.length;
                    // self.eventData = [];
                    // self.collectionSize = [];
                    // self.totalevent = [];
                    // this.eventTable = true;
                    //
                    // self.eventsservice.getevent(new Date().getTime()).then(data => {
                    //     if(data['status'] == 'success'){
                    //         self.eventData = data['events'];
                    //         self.collectionSize = data['events'].length;
                    //         self.totalevent = data['events'].length;
                    //     }
                    // });
                }, function (error) {
                });
            }
        });
    };
    EventsComponent.prototype.viewTickets = function (ticket_id, type, price) {
        var self = this;
        // this.eventname = this.eventname;
        this.eventsservice.get_tickets_detail(ticket_id).then(function (data) {
            console.log('Data - ' + JSON.stringify(data));
            var style = "<style> #customers td, #customers th {border: 1px solid #ddd; padding: 8px;} #customers tr:nth-child(even){background-color: #f2f2f2;} #customers tr:hover {background-color: #ddd;} #customers th { padding-top: 12px; padding-bottom: 12px; text-align: left; background-color: gray; color: white;}</style>";
            var str = style + '<br /><table style="width:100%;" id="customers"><tr><th>Transaction ID</th><th>User Name</th><th>Email</th><th>Phone</th><th>Quantity</th><th>Price</th><th>Transaction Date</th></tr>';
            for (var i = 0; i < data['tickets'].length; i++) {
                str = str + "<tr>";
                str = str + "<td>" + data['tickets'][i].transaction_id + "</td><td>" + data['tickets'][i].user_name + "</td><td>" + data['tickets'][i].email + "</td><td>" + data['tickets'][i].phone + "</td><td>" + data['tickets'][i].qty + "</td><td>$" + (data['tickets'][i].qty * price) + "</td><td>" + data['tickets'][i].transaction_date + "</td>";
                str = str + "</tr>";
            }
            str = str + "</table>";
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                title: self.eventname + ' - Ticket Type - ' + type + ' ($' + price + ')',
                width: 1000,
                //type: 'info',
                html: str,
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: 'Export to Excel',
                cancelButtonText: 'Export to PDF',
            }).then(function (dismiss) {
                //console.log(JSON.stringify(dismiss));
                if (dismiss.value == true) {
                    var tbl = document.getElementById('customers');
                    var wb = xlsx__WEBPACK_IMPORTED_MODULE_12__["utils"].table_to_book(tbl);
                    xlsx__WEBPACK_IMPORTED_MODULE_12__["writeFile"](wb, self.eventname + '_tickets_' + type + '_' + new Date().getTime() + '.xlsx');
                }
                else if (dismiss.dismiss.toString() == "cancel") {
                    // alert(JSON.stringify(data['tickets']);
                    var doc = new jspdf__WEBPACK_IMPORTED_MODULE_13__();
                    var col = ['Transaction ID', 'User Name', 'Email', 'Phone', 'Quantity', 'Amount', 'Transaction Date'];
                    var rows = [];
                    data['tickets'].forEach(function (element) {
                        var temp = [element.transaction_id, element.user_name, element.email, element.phone, element.qty, "$" + (element.qty * price), element.transaction_date];
                        rows.push(temp);
                    });
                    doc.autoTable(col, rows, { startY: 10 });
                    doc.save(self.eventname + '_tickets_' + type + '_' + new Date().getTime() + '.pdf');
                }
            });
        });
    };
    EventsComponent.prototype.viewTransactions = function () {
        var self = this;
        this.eventsservice.get_event_tickets_detail(this.tickets.event_id).then(function (data) {
            console.log('Data - ' + JSON.stringify(data));
            var style = "<style> #customers td, #customers th {border: 1px solid #ddd; padding: 8px;} #customers tr:nth-child(even){background-color: #f2f2f2;} #customers tr:hover {background-color: #ddd;} #customers th { padding-top: 12px; padding-bottom: 12px; text-align: left; background-color: gray; color: white;}</style>";
            var str = style + '<br /><table style="width:100%;" id="customers"><tr><th>Transaction ID</th><th>User Name</th><th>Email</th><th>Phone</th><th>Amount</th><th>Transaction Date</th></tr>';
            for (var i = 0; i < data['tickets'].length; i++) {
                str = str + "<tr>";
                str = str + "<td>" + data['tickets'][i].transaction_id + "</td><td>" + data['tickets'][i].user_name + "</td><td>" + data['tickets'][i].email + "</td><td>" + data['tickets'][i].phone + "</td><td>$" + data['tickets'][i].amount + "</td><td>" + data['tickets'][i].transaction_date + "</td>";
                str = str + "</tr>";
            }
            str = str + "</table>";
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                title: self.eventname + ' - Tickets Transactions',
                width: 1000,
                //type: 'info',
                html: str,
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: 'Export to Excel',
                cancelButtonText: 'Export to PDF',
            }).then(function (dismiss) {
                // alert(dismiss.dismiss);
                //console.log(JSON.stringify(dismiss));
                if (dismiss.value == true) {
                    var tbl = document.getElementById('customers');
                    var wb = xlsx__WEBPACK_IMPORTED_MODULE_12__["utils"].table_to_book(tbl);
                    xlsx__WEBPACK_IMPORTED_MODULE_12__["writeFile"](wb, self.eventname + '_tickets_transactions_' + new Date().getTime() + '.xlsx');
                }
                else if (dismiss.dismiss.toString() == "cancel") {
                    // alert(JSON.stringify(data['tickets']);
                    var doc = new jspdf__WEBPACK_IMPORTED_MODULE_13__();
                    var col = ['Transaction ID', 'User Name', 'Email', 'Phone', 'Amount', 'Transaction Date'];
                    var rows = [];
                    data['tickets'].forEach(function (element) {
                        var temp = [element.transaction_id, element.user_name, element.email, element.phone, "$" + element.amount, element.transaction_date];
                        rows.push(temp);
                    });
                    doc.autoTable(col, rows, { startY: 10 });
                    doc.save(self.eventname + '_tickets_transactions_' + new Date().getTime() + '.pdf');
                }
            });
        });
    };
    EventsComponent.prototype.insertevent = function (str) {
        var _this = this;
        var stDate = new Date().toISOString().slice(0, 10);
        var endDate = new Date().toISOString().slice(0, 10);
        var flag = false;
        if (this.events.st_dt != null) {
            stDate = this.events.st_dt;
            // endDate = this.toDt['year']+'-'+this.toDt['month']+'-'+this.toDt['day'];
            flag = true;
        }
        else {
            flag = false;
        }
        endDate = this.events.end_dt;
        //this.popupModel.dp = stDate;
        if ((stDate > endDate) && flag == true) {
            //alert("End Date must be greater than Start Date.");
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()("Error!", "End Date must be greater than Start Date.", "error");
            // this.snotifyService.success('End Date must be greater than Start Date.', 'Error', this.getConfig());
            return;
        }
        if (this.events.st_time != null) {
            flag = true;
        }
        else {
            flag = false;
        }
        if ((this.events.st_time >= this.events.end_time) && flag == true) {
            //alert("End Date must be greater than Start Date.");
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()("Error!", "End Time must be greater than Start Time.", "error");
            // this.snotifyService.success('End Date must be greater than Start Date.', 'Error', this.getConfig());
            return;
        }
        this.events.title = this.events.title.replace("'", "\\'");
        this.events.description = this.events.description.replace("'", "\\'");
        this.events.faq = this.events.faq.replace("'", "\\'");
        if (this.files.length > 0) {
            var ext = this.fileName.substring(this.fileName.lastIndexOf('.') + 1, this.fileName.length);
            var dest_file = "uploads/event_banners/" + new Date().getTime() + "." + ext;
            this.uploadAndProgressBanner(dest_file);
            this.events["banner"] = dest_file;
        }
        //  if(this.events.id != ''){
        this.submitted = true;
        this.eventsservice.addevent(this.events, 'add').then(function (data) {
            // alert(JSON.stringify(data));
            _this.flag = false;
            if (data['status']) {
                // this.eventForm.reset();
                _this.snotifyService.success('Saved Successfully', '', _this.getConfig());
                _this.eventData = [];
                _this.collectionSize = [];
                _this.totalevent = [];
                _this.save = false;
                // alert(JSON.stringify(data));
                // alert(data['events']);
                _this.events.id = data['events'];
                _this.eventsservice.getevent(new Date().getTime()).then(function (eventdata) {
                    // alert(JSON.stringify(eventdata));
                    if (eventdata['status'] == 'success') {
                        _this.eventData = eventdata['events'];
                        _this.collectionSize = eventdata['events'].length;
                        _this.totalevent = eventdata['events'].length;
                        _this.submitted = false;
                        if (str != 'next') {
                            _this.showForm = false;
                            _this.eventTable = true;
                        }
                        else {
                            _this.location.event_id = _this.events.id;
                            _this.tabs.select('location');
                        }
                    }
                });
            }
        });
    };
    EventsComponent.prototype.updateevent = function () {
        var _this = this;
        var stDate = new Date().toISOString().slice(0, 10);
        var endDate = new Date().toISOString().slice(0, 10);
        var flag = false;
        if (this.events.st_dt != null) {
            stDate = this.events.st_dt;
            // endDate = this.toDt['year']+'-'+this.toDt['month']+'-'+this.toDt['day'];
            flag = true;
        }
        else {
            flag = false;
        }
        endDate = this.events.end_dt;
        //this.popupModel.dp = stDate;
        if ((stDate > endDate) && flag == true) {
            //alert("End Date must be greater than Start Date.");
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()("Error!", "End Date must be greater than Start Date.", "error");
            // this.snotifyService.success('End Date must be greater than Start Date.', 'Error', this.getConfig());
            return;
        }
        if (this.events.st_time != null) {
            flag = true;
        }
        else {
            flag = false;
        }
        if ((this.events.st_time >= this.events.end_time) && flag == true) {
            //alert("End Date must be greater than Start Date.");
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()("Error!", "End Time must be greater than Start Time.", "error");
            // this.snotifyService.success('End Date must be greater than Start Date.', 'Error', this.getConfig());
            return;
        }
        this.submitted = true;
        // alert(JSON.stringify(this.events));
        this.events.title = this.events.title.replace("'", "\\'");
        this.events.description = this.events.description.replace("'", "\\'");
        this.events.faq = this.events.faq.replace("'", "\\'");
        if (this.files.length > 0) {
            var ext = this.fileName.substring(this.fileName.lastIndexOf('.') + 1, this.fileName.length);
            var dest_file = "uploads/event_banners/" + new Date().getTime() + "." + ext;
            this.uploadAndProgressBanner(dest_file);
            this.events["banner"] = dest_file;
        }
        this.eventsservice.addevent(this.events, 'update').then(function (data) {
            if (data['status']) {
                _this.submitted = false;
                _this.eventForm.reset();
                _this.snotifyService.success('Updated Successfully', '', _this.getConfig());
                _this.eventData = [];
                _this.collectionSize = [];
                _this.totalevent = [];
                _this.eventsservice.getevent(new Date().getTime()).then(function (eventdata) {
                    if (eventdata['status'] == 'success') {
                        _this.eventData = eventdata['events'];
                        _this.collectionSize = eventdata['events'].length;
                        _this.totalevent = eventdata['events'].length;
                        _this.submitted = false;
                        _this.showForm = false;
                        _this.eventTable = true;
                    }
                });
            }
        });
    };
    EventsComponent.prototype.cancellocation = function () {
        this.showTable = true;
        this.showForm = false;
        this.save = true;
        this.locationForm.reset();
        this.location.address = '';
        this.eventTable = true;
    };
    EventsComponent.prototype.insertlocation = function (str) {
        var _this = this;
        //alert(JSON.stringify(this.location));
        this.submitted = true;
        this.location.address = document.getElementById('address').value;
        this.eventsservice.addlocation(this.location, 'add').then(function (data) {
            if (data['status']) {
                _this.submitted = false;
                // this.eventTable = true;
                // this.showForm = false;
                _this.locationForm.reset();
                _this.snotifyService.success('Saved Successfully', '', _this.getConfig());
                if (str != 'next') {
                    _this.showForm = false;
                    _this.eventTable = true;
                }
                else {
                    _this.showTable = false;
                    _this.showForm = true;
                    _this.save = true;
                    _this.contacts.event_id = _this.events.id;
                    _this.tabs.select('contacts');
                }
            }
        });
    };
    EventsComponent.prototype.updatelocation = function () {
        var _this = this;
        this.submitted = true;
        this.location.address = document.getElementById('address').value;
        this.eventsservice.addlocation(this.location, 'update').then(function (data) {
            if (data['status']) {
                _this.submitted = false;
                // this.eventTable = true;
                // this.showForm = false;
                _this.locationForm.reset();
                _this.snotifyService.success('Updated Successfully', '', _this.getConfig());
                // this.tabs.select("contacts");
            }
        });
    };
    EventsComponent.prototype.isNumberKey = function (evt) {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    EventsComponent.prototype.addticket = function () {
        // this.ticketForm.reset();
        this.tickets.id = '';
        this.tickets.type = '';
        this.tickets.description = '';
        this.tickets.price = null;
        this.tickets.no_available = null;
        this.tickets.total_tickets = null;
        this.tickets.active = false;
        this.showTable = false;
        this.showForm = true;
        this.save = true;
    };
    EventsComponent.prototype.editticket = function (id) {
        var _this = this;
        this.eventsservice.getticketById(id).then(function (data) {
            //alert(JSON.stringify(data));
            _this.save = false;
            _this.showTable = false;
            _this.showForm = true;
            _this.tickets.id = data['tickets'][0].id;
            _this.tickets.type = data['tickets'][0].type;
            _this.tickets.price = data['tickets'][0].price;
            _this.tickets.no_available = data['tickets'][0].no_available;
            _this.left_tickets = parseInt(_this.tickets.no_available);
            _this.tickets.total_tickets = data['tickets'][0].total_tickets;
            if (data['tickets'][0].active == 1)
                _this.tickets.active = true;
            else
                _this.tickets.active = false;
            _this.tickets.description = data['tickets'][0].description;
            _this.tickets.event_id = data['tickets'][0].event_id;
        }, function (error) {
        });
    };
    EventsComponent.prototype.cancelticket = function () {
        this.showTable = true;
        this.showForm = false;
        this.save = true;
        this.ticketForm.reset();
        this.tickets.id = '';
        this.tickets.type = '';
        this.tickets.price = '';
        this.tickets.no_available = '';
        this.tickets.total_tickets = '';
        this.tickets.active = false;
        this.tickets.description = '';
        this.tickets.event_id = '';
    };
    EventsComponent.prototype.deleteticket = function (id) {
        var self = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
            title: '',
            html: '' +
                'Event Ticket will be deleted. Do you want to continue?',
            showCloseButton: true,
            confirmButtonText: 'Ok',
            allowOutsideClick: false,
            allowEscapeKey: false,
            showCancelButton: true,
        }).then(function (dismiss) {
            //console.log(JSON.stringify(dismiss));
            if (dismiss.value && dismiss !== 'cancel') {
                self.eventsservice.deleteticketById(id).then(function (data) {
                    self.snotifyService.success('Deleted Successfully', '', self.getConfig());
                    // alert(JSON.stringify(self.ticketData));
                    for (var i in self.ticketData) {
                        if (self.ticketData[i].id === id) {
                            self.ticketData.splice(i, 1);
                        }
                    }
                    self.ticketcollectionSize = self.ticketData.length;
                    self.totalticket = self.ticketData.length;
                    // self.ticketData = [];
                    // self.ticketcollectionSize = [];
                    // self.totalticket = [];
                    // self.eventsservice.getticket(this.tickets.event_id).then(data => {
                    //     if(data['status'] == 'success'){
                    //         self.ticketData = data['tickets'];
                    //         self.ticketcollectionSize = data['tickets'].length;
                    //         self.totalticket = data['tickets'].length;
                    //     }
                    // });
                }, function (error) {
                });
            }
        });
    };
    EventsComponent.prototype.updateticket = function () {
        var _this = this;
        if (parseInt(this.tickets.price) < 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()("Error!", "Must be valid Price", "error");
            return;
        }
        if (parseInt(this.tickets.no_available) < 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()("Error!", "No. of Tickets Available must be Valid", "error");
            return;
        }
        var tkt = 0;
        tkt = parseInt(this.tickets.total_tickets);
        var no_available = parseInt(this.tickets.no_available);
        no_available = no_available - this.left_tickets;
        tkt = tkt + no_available; //parseInt(this.tickets.no_available) - parseInt(this.left_tickets);
        // tkt = parseInt(this.tickets.total_tickets) + (parseInt(this.tickets.no_available) - parseInt(this.left_tickets));
        this.tickets.total_tickets = tkt + '';
        this.submitted = true;
        this.eventsservice.addticket(this.tickets, 'update').then(function (data) {
            _this.submitted = false;
            if (data['status']) {
                _this.ticketForm.reset();
                _this.snotifyService.success('Updated Successfully', '', _this.getConfig());
                _this.ticketData = [];
                _this.ticketcollectionSize = [];
                _this.totalticket = 0;
                _this.showTable = true;
                _this.showForm = false;
                _this.save = false;
                // this.eventsservice.getticket(this.tickets.event_id).then(data => {
                //     if(data['status'] == 'success'){
                _this.ticketData = data['tickets'];
                _this.ticketcollectionSize = data['tickets'].length;
                _this.totalticket = data['tickets'].length;
                _this.submitted = false;
                //     }
                // });
            }
        });
    };
    EventsComponent.prototype.insertticket = function () {
        var _this = this;
        if (parseInt(this.tickets.price) < 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()("Error!", "Must be valid Price", "error");
            return;
        }
        if (parseInt(this.tickets.no_available) < 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()("Error!", "No. of Tickets Available must be Valid", "error");
            return;
        }
        this.submitted = true;
        this.eventsservice.addticket(this.tickets, 'add').then(function (data) {
            _this.showTable = true;
            _this.showForm = false;
            _this.save = false;
            _this.submitted = false;
            // alert(JSON.stringify(data));
            if (data['status']) {
                _this.ticketForm.reset();
                _this.snotifyService.success('Saved Successfully', '', _this.getConfig());
                _this.ticketData = [];
                _this.ticketcollectionSize = [];
                _this.totalticket = 0;
                // this.eventsservice.getticket(this.tickets.event_id).then(data1 => {
                // alert(JSON.stringify(data1));
                // if(data1['status'] == 'success'){
                _this.ticketData = data['tickets'];
                _this.ticketcollectionSize = data['tickets'].length;
                _this.totalticket = data['tickets'].length;
                _this.submitted = false;
                // }
                // });
            }
        });
    };
    EventsComponent.prototype.active = function (val) {
        //alert(val);
        if (val == true)
            this.tickets.active = false;
        else
            this.tickets.active = true;
    };
    EventsComponent.prototype.member = function (val) {
        //alert(val);
        if (val == true)
            this.events.member = false;
        else
            this.events.member = true;
    };
    EventsComponent.prototype.addcontact = function () {
        // this.contactForm.reset();
        this.contacts.id = '';
        this.contacts.phone = null;
        this.contacts.name = '';
        this.showTable = false;
        this.showForm = true;
        this.save = true;
    };
    EventsComponent.prototype.editcontact = function (id) {
        var _this = this;
        this.eventsservice.getcontactById(id).then(function (data) {
            //alert(JSON.stringify(data));
            _this.save = false;
            _this.showTable = false;
            _this.showForm = true;
            _this.contacts.id = data['contacts'][0].id;
            _this.contacts.name = data['contacts'][0].name;
            _this.contacts.phone = data['contacts'][0].phone;
            _this.contacts.event_id = data['contacts'][0].event_id;
        }, function (error) {
        });
    };
    EventsComponent.prototype.cancelcontact = function () {
        this.showTable = true;
        this.showForm = false;
        this.save = true;
        this.contactForm.reset();
        this.contacts.id = '';
        this.contacts.name = '';
        this.contacts.phone = '';
        this.contacts.event_id = '';
    };
    EventsComponent.prototype.deletecontact = function (id) {
        var self = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
            title: '',
            html: '' +
                'Contact will be deleted. Do you want to continue?',
            showCloseButton: true,
            confirmButtonText: 'Ok',
            allowOutsideClick: false,
            allowEscapeKey: false,
            showCancelButton: true,
        }).then(function (dismiss) {
            //console.log(JSON.stringify(dismiss));
            if (dismiss.value && dismiss !== 'cancel') {
                self.eventsservice.deletecontactById(id).then(function (data) {
                    self.snotifyService.success('Deleted Successfully', '', self.getConfig());
                    for (var i in self.contactData) {
                        if (self.contactData[i].id === id) {
                            self.contactData.splice(i, 1);
                        }
                    }
                    self.contactcollectionSize = self.contactData.length;
                    self.totalcontact = self.contactData.length;
                    // self.contactData = [];
                    // self.contactcollectionSize = [];
                    // self.totalcontact = [];
                    // self.eventsservice.getcontact(this.contacts.event_id).then(data => {
                    //     if(data['status'] == 'success'){
                    //         self.contactData = data['contacts'];
                    //         self.contactcollectionSize = data['contacts'].length;
                    //         self.totalcontact = data['contacts'].length;
                    //     }
                    // });
                }, function (error) {
                });
            }
        });
    };
    EventsComponent.prototype.updatecontact = function () {
        var _this = this;
        if (parseInt(this.contacts.phone) < 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()("Error!", "Enter Valid Phone Number", "error");
            return;
        }
        this.submitted = true;
        this.eventsservice.addcontact(this.contacts, 'update').then(function (data) {
            _this.submitted = false;
            // alert(JSON.stringify(data));
            if (data['status']) {
                _this.contactForm.reset();
                _this.snotifyService.success('Updated Successfully', '', _this.getConfig());
                _this.contactData = [];
                _this.contactcollectionSize = [];
                _this.totalcontact = [];
                _this.showTable = true;
                _this.showForm = false;
                _this.save = false;
                // this.eventsservice.getcontact(this.contacts.event_id).then(data => {
                //     if(data['status'] == 'success'){
                _this.contactData = data['contacts'];
                _this.contactcollectionSize = data['contacts'].length;
                _this.totalcontact = data['contacts'].length;
                _this.submitted = false;
                //     }
                // });
            }
        });
    };
    EventsComponent.prototype.insertcontact = function (str) {
        var _this = this;
        if (parseInt(this.contacts.phone) < 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()("Error!", "Enter Valid Phone Number", "error");
            return;
        }
        this.submitted = true;
        //  alert(JSON.stringify(this.contacts));
        this.eventsservice.addcontact(this.contacts, 'add').then(function (data) {
            // this.showTable = true;
            // this.showForm = false;
            _this.save = false;
            _this.submitted = false;
            if (data['status']) {
                // this.contactForm.reset();
                _this.snotifyService.success('Saved Successfully', '', _this.getConfig());
                _this.contactData = [];
                _this.contactcollectionSize = [];
                _this.totalcontact = [];
                // this.eventsservice.getcontact(this.contacts.event_id).then(data => {
                // alert('test');
                // if(data['status'] == 'success'){
                _this.contactData = data['contacts'];
                _this.contactcollectionSize = data['contacts'].length;
                _this.totalcontact = data['contacts'].length;
                _this.submitted = false;
                // }
                // });
                if (str != 'next') {
                    _this.showForm = false;
                    _this.eventTable = true;
                }
                else {
                    _this.images.event_id = _this.events.id;
                    _this.tabs.select('images');
                }
            }
        });
    };
    EventsComponent.prototype.addsponsor = function () {
        // this.contactForm.reset();
        this.sponsors.id = '';
        this.sponsors.img = null;
        this.sponsors.website = '';
        this.showTable = false;
        this.showForm = true;
        this.save = true;
    };
    EventsComponent.prototype.editsponsor = function (id) {
        var _this = this;
        this.eventsservice.getsponsorById(id).then(function (data) {
            _this.isLogoDisabled = false;
            //alert(JSON.stringify(data));
            _this.save = false;
            _this.showTable = false;
            _this.showForm = true;
            _this.sponsors.id = data['sponsors'][0].id;
            _this.sponsors.img = data['sponsors'][0].img;
            _this.sponsors.website = data['sponsors'][0].website;
            _this.sponsors.event_id = data['sponsors'][0].event_id;
        }, function (error) {
        });
    };
    EventsComponent.prototype.cancelsponsor = function () {
        this.showTable = true;
        this.showForm = false;
        this.save = true;
        this.sponsorForm.reset();
        this.sponsors.id = '';
        this.sponsors.img = '';
        this.sponsors.website = '';
        this.sponsors.event_id = '';
    };
    EventsComponent.prototype.deletesponsor = function (id) {
        var self = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
            title: '',
            html: '' +
                'Sponsor will be deleted. Do you want to continue?',
            showCloseButton: true,
            confirmButtonText: 'Ok',
            allowOutsideClick: false,
            allowEscapeKey: false,
            showCancelButton: true,
        }).then(function (dismiss) {
            //console.log(JSON.stringify(dismiss));
            if (dismiss.value && dismiss !== 'cancel') {
                self.eventsservice.deletesponsorById(id).then(function (data) {
                    self.snotifyService.success('Deleted Successfully', '', self.getConfig());
                    for (var i in self.sponsorData) {
                        if (self.sponsorData[i].id === id) {
                            self.sponsorData.splice(i, 1);
                        }
                    }
                    self.sponsorcollectionSize = self.sponsorData.length;
                    self.totalsponsor = self.sponsorData.length;
                    // self.sponsorData = [];
                    // self.sponsorcollectionSize = [];
                    // self.totalsponsor = [];
                    // self.eventsservice.getsponsor(this.sponsors.event_id).then(data => {
                    //     if(data['status'] == 'success'){
                    //         self.sponsorData = data['sponsors'];
                    //         self.sponsorcollectionSize = data['sponsors'].length;
                    //         self.totalsponsor = data['sponsors'].length;
                    //     }
                    // });
                }, function (error) {
                });
            }
        });
    };
    EventsComponent.prototype.updatesponsor = function () {
        var _this = this;
        this.submitted = true;
        if (this.files.length > 0) {
            var ext = this.fileName.substring(this.fileName.lastIndexOf('.') + 1, this.fileName.length);
            var dest_file = "uploads/event_sponsors/" + new Date().getTime() + "." + ext;
            this.uploadAndProgressLogo(dest_file);
            this.sponsors["img"] = dest_file;
        }
        var website = document.getElementById("website");
        this.sponsors["website"] = website.value;
        //           
        this.eventsservice.addsponsor(this.sponsors, 'update').then(function (data) {
            _this.submitted = false;
            // alert(JSON.stringify(data));
            if (data['status']) {
                _this.sponsorForm.reset();
                _this.snotifyService.success('Updated Successfully', '', _this.getConfig());
                _this.sponsorData = [];
                _this.sponsorcollectionSize = [];
                _this.totalsponsor = [];
                _this.showTable = true;
                _this.showForm = false;
                _this.save = false;
                // this.eventsservice.getsponsor(this.sponsors.event_id).then(data => {
                //     if(data['status'] == 'success'){
                _this.sponsorData = data['sponsors'];
                _this.sponsorcollectionSize = data['sponsors'].length;
                _this.totalsponsor = data['sponsors'].length;
                _this.submitted = false;
                //     }
                // });
            }
        });
    };
    EventsComponent.prototype.insertsponsor = function (str) {
        var _this = this;
        this.submitted = true;
        // var formData = new FormData();
        //       formData.append('file',this.files[0]);
        //       this.fileName = this.files[0].name;
        // alert("filename = " + this.fileName);
        var ext = this.fileName.substring(this.fileName.lastIndexOf('.') + 1, this.fileName.length);
        var dest_file = "uploads/event_sponsors/" + new Date().getTime() + "." + ext;
        this.uploadAndProgressLogo(dest_file);
        this.sponsors["img"] = dest_file;
        var website = document.getElementById("website");
        this.sponsors["website"] = website.value;
        //alert(dest_file);
        //&fld=event_images&file=' + dest_file, formData, {reportProgress: true, observe: 'events'}
        //  alert(JSON.stringify(this.sponsors));
        this.eventsservice.addsponsor(this.sponsors, 'add').then(function (data) {
            // this.showTable = true;
            // this.showForm = false;
            _this.save = false;
            _this.submitted = false;
            if (data['status']) {
                // this.sponsorForm.reset();
                _this.snotifyService.success('Saved Successfully', '', _this.getConfig());
                _this.sponsorData = [];
                _this.sponsorcollectionSize = [];
                _this.totalsponsor = [];
                // this.eventsservice.getsponsor(this.sponsors.event_id).then(data => {
                // alert('test');
                // if(data['status'] == 'success'){
                _this.sponsorData = data['sponsors'];
                _this.sponsorcollectionSize = data['sponsors'].length;
                _this.totalsponsor = data['sponsors'].length;
                _this.submitted = false;
                // }
                // });
                if (str != 'next') {
                    _this.showForm = false;
                    _this.eventTable = true;
                }
                else {
                    _this.tickets.event_id = _this.events.id;
                    _this.tabs.select('tickets');
                }
            }
        });
    };
    // getImageDimension (image): Observable<any> {
    //     return new Observable(observer => {
    //         const img = new Image();
    //         img.onload = function (event) {
    //             const loadedImage: any = event.currentTarget;
    //             image.width = loadedImage.width;
    //             image.height = loadedImage.height;
    //             observer.next(image);
    //             observer.complete();
    //         }
    //         img.src = image.url;
    //     });
    // }
    EventsComponent.prototype.uploadLogo = function (files) {
        var _this = this;
        // console.log(files[0]);
        var img = new Image();
        var width = 0;
        var height = 0;
        img.src = window.URL.createObjectURL(files[0]);
        img.onload = function () {
            width = img.naturalWidth;
            height = img.naturalHeight;
            if (width != 250 || height != 150) {
                alert("Your file width is " + width + " & height is " + height + ". It must be 250 (width) * 150 (height)");
                _this.uploadLogoLabel.nativeElement.innerHTML = "Choose Logo";
                _this.files = null;
            }
            else {
                _this.fileName = files[0].name;
                _this.files = files;
                _this.isLogoDisabled = false;
                _this.uploadLogoLabel.nativeElement.innerHTML = files[0].name;
                console.log(_this.uploadLogoLabel.nativeElement);
            }
        };
    };
    EventsComponent.prototype.uploadAndProgressLogo = function (dest_file) {
        var _this = this;
        this.submitted = true;
        console.log(this.files);
        if (this.files.length > 0) {
            var formData = new FormData();
            formData.append('file', this.files[0]);
            this.fileName = this.files[0].name;
            // alert("this.fileName= " + this.fileName);
            // var ext=this.fileName.substring(this.fileName.lastIndexOf('.')+1, this.fileName.length);
            //var dest_file = new Date().getTime() + "." + ext;
            //alert(dest_file);
            this.http.post('https://cockburncrc.com.au/members/usermanagement/uploadEventSponsorLogo.php?fld=event_sponsors&file=' + dest_file, formData, { reportProgress: true, observe: 'events' })
                .subscribe(function (event) {
                //alert(JSON.stringify(event));
                // if(event && event['status'] == "Sorry, your file is too large."){
                //   this.snotifyService.success('Sorry, your file dimension is not proper. Recommended Size is 250 * 150.', '', this.getConfig());
                // }
                _this.files = null;
            });
        }
    };
    EventsComponent.prototype.uploadBanner = function (files) {
        var _this = this;
        // console.log(files[0]);
        var img = new Image();
        var width = 0;
        var height = 0;
        img.src = window.URL.createObjectURL(files[0]);
        img.onload = function () {
            width = img.naturalWidth;
            height = img.naturalHeight;
            if (width > 1200 || width < 700) {
                alert("Width must be between 700px to 1200px");
                _this.uploadBannerLabel.nativeElement.innerHTML = "Choose Banner";
                _this.files = null;
            }
            else {
                _this.fileName = files[0].name;
                _this.files = files;
                _this.isBannerDisabled = false;
                _this.uploadBannerLabel.nativeElement.innerHTML = files[0].name;
                console.log(_this.uploadBannerLabel.nativeElement);
            }
        };
    };
    EventsComponent.prototype.uploadAndProgressBanner = function (dest_file) {
        var _this = this;
        this.submitted = true;
        console.log(this.files);
        if (this.files.length > 0) {
            var formData = new FormData();
            formData.append('file', this.files[0]);
            this.fileName = this.files[0].name;
            // alert("this.fileName= " + this.fileName);
            // var ext=this.fileName.substring(this.fileName.lastIndexOf('.')+1, this.fileName.length);
            //var dest_file = new Date().getTime() + "." + ext;
            //alert(dest_file);
            this.http.post('https://cockburncrc.com.au/members/usermanagement/uploadEventBanner.php?fld=event_banners&file=' + dest_file, formData, { reportProgress: true, observe: 'events' })
                .subscribe(function (event) {
                //alert(JSON.stringify(event));
                // if(event && event['status'] == "Sorry, your file is too large."){
                //   this.snotifyService.success('Sorry, your file dimension is not proper. Recommended Size is 250 * 150.', '', this.getConfig());
                // }
                _this.files = null;
            });
        }
    };
    EventsComponent.prototype.getConfig = function () {
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
    EventsComponent.prototype.ExportToPdf = function () {
        this.get_event_tickets('pdf');
        // console.log(this.exportData);
        //   var doc = new jspdf();
        //   var col = ['Transaction ID','User Name','Email','Phone','Amount','Transaction Date'];
        //   var rows = [];
        //   this.exportData.forEach(element => {
        //     var temp = [element.transaction_id, element.user_name, element.email, element.phone, element.amount,element.transaction_date];
        //     rows.push(temp);
        //   });
        //   doc.autoTable(col, rows, { startY: 10 });
        //   doc.save('tickets_'+ new Date().getTime() +'.pdf');
    };
    EventsComponent.prototype.get_event_tickets = function (export1) {
        var _this = this;
        this.eventsservice.get_event_tickets_detail(this.tickets.event_id).then(function (data) {
            // alert(JSON.stringify(data));
            if (data['status'] == 'success') {
                _this.exportData = data['tickets'];
                if (export1 == "xl") {
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_12__["utils"].book_new();
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_12__["utils"].json_to_sheet(_this.exportData);
                    xlsx__WEBPACK_IMPORTED_MODULE_12__["utils"].book_append_sheet(workBook, workSheet, 'data');
                    xlsx__WEBPACK_IMPORTED_MODULE_12__["writeFile"](workBook, 'tickets_' + new Date().getTime() + '.xlsx');
                }
                else if (export1 == "csv") {
                    var workBook = xlsx__WEBPACK_IMPORTED_MODULE_12__["utils"].book_new();
                    var workSheet = xlsx__WEBPACK_IMPORTED_MODULE_12__["utils"].json_to_sheet(_this.exportData);
                    var csv = xlsx__WEBPACK_IMPORTED_MODULE_12__["utils"].sheet_to_csv(workSheet);
                    xlsx__WEBPACK_IMPORTED_MODULE_12__["utils"].book_append_sheet(workBook, workSheet, 'data');
                    xlsx__WEBPACK_IMPORTED_MODULE_12__["writeFile"](workBook, 'tickets_' + new Date().getTime() + '.csv');
                }
                else if (export1 == "pdf") {
                    var doc = new jspdf__WEBPACK_IMPORTED_MODULE_13__();
                    var col = ['Transaction ID', 'User Name', 'Email', 'Phone', 'Amount', 'Transaction Date'];
                    var rows = [];
                    _this.exportData.forEach(function (element) {
                        var temp = [element.transaction_id, element.user_name, element.email, element.phone, "$" + element.amount, element.transaction_date];
                        rows.push(temp);
                    });
                    doc.autoTable(col, rows, { startY: 10 });
                    doc.save('tickets_' + new Date().getTime() + '.pdf');
                }
            }
        });
    };
    EventsComponent.prototype.ExportTOExcel = function () {
        this.get_event_tickets('xl');
        // if(typeof require !== 'undefined') 
        // XLSX = require('xlsx');
        // const workBook = XLSX.utils.book_new();
        // const workSheet = XLSX.utils.json_to_sheet(this.exportData);
        // XLSX.utils.book_append_sheet(workBook, workSheet, 'data');
        // XLSX.writeFile(workBook, 'tickets_'+ new Date().getTime() +'.xlsx');
    };
    EventsComponent.prototype.ExportTOCsv = function () {
        this.get_event_tickets('csv');
        // if(typeof require !== 'undefined') 
        // XLSX =x require('xlsx');
        //   const workBook = XLSX.utils.book_new();
        //   const workSheet = XLSX.utils.json_to_sheet(this.exportData);
        //   const csv = XLSX.utils.sheet_to_csv(workSheet);
        //   XLSX.utils.book_append_sheet(workBook, workSheet, 'data');
        //   XLSX.writeFile(workBook, 'tickets_'+ new Date().getTime() +'.csv');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmMap"]),
        __metadata("design:type", _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmMap"])
    ], EventsComponent.prototype, "map", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"])
    ], EventsComponent.prototype, "mydatatable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("eventForm"),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], EventsComponent.prototype, "eventForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("placesRef"),
        __metadata("design:type", ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__["GooglePlaceDirective"])
    ], EventsComponent.prototype, "placesRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("ticketForm"),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], EventsComponent.prototype, "ticketForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("locationForm"),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], EventsComponent.prototype, "locationForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("contactForm"),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], EventsComponent.prototype, "contactForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("sponsorForm"),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], EventsComponent.prototype, "sponsorForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('uploadLabel'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EventsComponent.prototype, "uploadLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('uploadLogoLabel'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EventsComponent.prototype, "uploadLogoLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('uploadBannerLabel'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EventsComponent.prototype, "uploadBannerLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tabs'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTabset"])
    ], EventsComponent.prototype, "tabs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], EventsComponent.prototype, "floatingLabelForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('vform'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], EventsComponent.prototype, "validationForm", void 0);
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.scss */ "./src/app/events/events.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], _agm_core__WEBPACK_IMPORTED_MODULE_8__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _agm_core_services__WEBPACK_IMPORTED_MODULE_9__["GoogleMapsAPIWrapper"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_5__["SnotifyService"], _shared_data_events_service__WEBPACK_IMPORTED_MODULE_7__["EventsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/events/events.module.ts":
/*!*****************************************!*\
  !*** ./src/app/events/events.module.ts ***!
  \*****************************************/
/*! exports provided: EventsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsModule", function() { return EventsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _events_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events-routing.module */ "./src/app/events/events-routing.module.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/directives/match-height.directive */ "./src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var _events_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es5.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var EventsModule = /** @class */ (function () {
    function EventsModule() {
    }
    EventsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _events_routing_module__WEBPACK_IMPORTED_MODULE_3__["EventsRoutingModule"],
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
                _events_component__WEBPACK_IMPORTED_MODULE_7__["EventsComponent"],
            ]
        })
    ], EventsModule);
    return EventsModule;
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
//# sourceMappingURL=events-events-module.js.map