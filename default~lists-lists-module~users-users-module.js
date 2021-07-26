(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~lists-lists-module~users-users-module"],{

/***/ "./src/app/lists/lists.component.html":
/*!********************************************!*\
  !*** ./src/app/lists/lists.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"content-header\">Lists</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"showTable && !showForm\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <p>Lists</p>\r\n                        </div>\r\n                        <!-- <div class=\"col-sm-6\" style=\"text-align: right;\">\r\n                            <p>\r\n                                <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-bitbucket float-right\" (click)=\"addlist()\"><span class=\"ft-plus\"></span> Add List</a>\r\n                            </p>\r\n                        </div> -->\r\n                    </div>\r\n                    <!-- <div class=\"col-sm-12 btnalgn\">\r\n                      <button type=\"button\" class=\"btn btn-outline-primary mt-2\" (click)=\"isCollapsed = !isCollapsed\"\r\n                      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\r\n                      Select Columns\r\n                      </button>\r\n\r\n                      <div id=\"collapseExample\" class=\"selected-column\" [ngbCollapse]=\"!isCollapsed\">\r\n                        <ul class=\"tablealgn\">\r\n                          <li *ngFor='let col of allColumns1'>\r\n                            <input type='checkbox' [id]=\"col.name\" (click)='toggle(col)' [checked]='isChecked(col)' />\r\n                            <label [attr.for]=\"col.name\">{{col.name}}</label>\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div> -->\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-10 text-right\">\r\n                        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"isCollapsed = !isCollapsed\"\r\n                                [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\r\n                          Select Columns\r\n                        </button>\r\n                        <div id=\"collapseExample\" class=\"selected-column\" [ngbCollapse]=\"!isCollapsed\">\r\n                          <ul>\r\n                              <li *ngFor='let col of allColumns1'>\r\n                                <input\r\n                                  type='checkbox'\r\n                                  [id]=\"col.name\"\r\n                                  (click)='toggle(col)'\r\n                                  [checked]='isChecked(col)'\r\n                                />\r\n                                <label [attr.for]=\"col.name\">{{col.name}}</label>\r\n                              </li>\r\n                          </ul>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-2\">\r\n                        <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-bitbucket float-right\" (click)=\"addlist()\"><span class=\"ft-plus\"></span> Add List</a>\r\n                      </div>\r\n                    </div>\r\n                    <!-- <div class=\"col-sm-6\" style=\"text-align: right;\">\r\n                      <button type=\"button\" class=\"btn btn-outline-primary mt-2\" (click)=\"isCollapsed = !isCollapsed\"\r\n                              [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\r\n                        Select Columns\r\n                      </button>\r\n\r\n              <div id=\"collapseExample\" class=\"selected-column\" [ngbCollapse]=\"!isCollapsed\">\r\n                <ul>\r\n                    <li *ngFor='let col of allColumns1'>\r\n                      <input\r\n                        type='checkbox'\r\n                        [id]=\"col.name\"\r\n                        (click)='toggle(col)'\r\n                        [checked]='isChecked(col)'\r\n                      />\r\n                      <label [attr.for]=\"col.name\">{{col.name}}</label>\r\n                    </li>\r\n                </ul>\r\n              </div></div> -->\r\n                    <!--<div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <table class=\"table table-responsive-md text-center\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>List Name</th>\r\n                                        <th>Email</th>\r\n                                        <th>Phone Number</th>\r\n                                        <th>Address</th>\r\n                                        <th>Action</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let data of listData | paginate: { itemsPerPage: 10, currentPage: p }\">\r\n                                        <td>{{data.name}}</td>\r\n                                        <td>{{data.email}}</td>\r\n                                        <td>{{data.phone}}</td>\r\n                                        <td>{{data.address}}</td>\r\n                                        <td>\r\n                                            <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"editlist(data.id)\">\r\n                                                <i class=\"fas fa-pencil-alt font-medium-3 mr-2\"></i>\r\n                                            </a>\r\n                                            <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"deletelist(data.id)\">\r\n                                                <i class=\"fas fa-trash font-medium-3 mr-2\"></i>\r\n                                            </a>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            <div class=\"col-12 paginationonAction\">\r\n                                <span class=\"total\">{{collectionSize}} Total</span>\r\n                                <ngb-pagination [pageSize]=\"pageSize\" [(page)]=\"p\" [maxSize]=\"10\" [rotate]=\"true\" [collectionSize]=\"collectionSize\" [boundaryLinks]=\"true\" style=\"float: right;\"></ngb-pagination>\r\n                            </div>\r\n                        </div>\r\n                    </div>-->\r\n                    <div>\r\n                <ngx-datatable\r\n                class ='material'\r\n                  class='bootstrap'\r\n                  [rows]='listData'\r\n                  [columnMode]=\"'force'\"\r\n                  [headerHeight]=\"50\"\r\n                  [footerHeight]=\"50\"\r\n                  [rowHeight]=\"'auto'\" [limit]=\"10\">\r\n                  <ngx-datatable-column\r\n                    *ngFor=\"let col of columns1\"\r\n                    [name]=\"col.name\">\r\n                  </ngx-datatable-column>\r\n                 <ngx-datatable-column name=\"Action\">\r\n                                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                  <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"editlist(row.id)\">\r\n                                  <i class=\"fas fa-pencil-alt font-medium-3 mr-2\"></i>\r\n                                  </a>\r\n                                  <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"deletelist(row.id)\">\r\n                                  <i class=\"fas fa-trash font-medium-3 mr-2\"></i>\r\n                                  </a>\r\n                                  </ng-template>\r\n                              </ngx-datatable-column>\r\n                </ngx-datatable>\r\n            </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"!showTable && !showForm\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                      <ngb-tabset>\r\n                        <ngb-tab title=\"Information\">\r\n                          <ng-template ngbTabContent>\r\n                            <form class=\"form\" #listForm=\"ngForm\">\r\n                              <div class=\"form-body\">\r\n                                <!-- <h4 class=\"form-section\">\r\n                                <i class=\"icon-user\"></i> Personal Details</h4> -->\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                      <label>Name</label>\r\n                                      <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"lists.name\" [ngClass]=\"{ 'is-invalid': listForm.submitted && name.invalid }\" required>\r\n                                      <small class=\"form-text text-muted danger\" *ngIf=\"listForm.submitted && name.invalid\">This field is required!</small>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                      <label>Email</label>\r\n                                      <input type=\"email\" email class=\"form-control\" name=\"email\" [(ngModel)]=\"lists.email\" [ngClass]=\"{ 'is-invalid': listForm.submitted && email.invalid }\" required>\r\n                                      <small class=\"form-text text-muted danger\" *ngIf=\"listForm.submitted && email.invalid\">This field is required!</small>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                      <label>Phone Number</label>\r\n                                      <input (keypress)=\"isNumberKey($event)\" maxlength=\"10\" class=\"form-control\" name=\"phonenum\" [(ngModel)]=\"lists.phonenum\" [ngClass]=\"{ 'is-invalid': listForm.submitted && phonenum.invalid }\" required>\r\n                                      <small class=\"form-text text-muted danger\" *ngIf=\"listForm.submitted && phonenum.invalid\">This field is required!</small>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                      <label>Address</label>\r\n                                      <input type=\"text\" class=\"form-control\" name=\"address\" [(ngModel)]=\"lists.address\" ngx-google-places-autocomplete [options]='options' #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\" [ngClass]=\"{ 'is-invalid': listForm.submitted && address.invalid }\" required>\r\n                                      <small class=\"form-text text-muted danger\" *ngIf=\"listForm.submitted && address.invalid\">This field is required!</small>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                      <label>Newsletter</label>\r\n                                      <div class=\"custom-control custom-checkbox m-0\">\r\n                                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"newsletter\" name=\"newsletter\" [(ngModel)]=\"lists.newsletter\">\r\n                                        <label class=\"custom-control-label\" for=\"newsletter\">Opt In</label>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\" *ngIf=\"extraFields\">\r\n                                  <div class=\"col-md-12\">\r\n                                      <h4 class=\"form-section\">Extra Fields</h4>\r\n                                      <div class=\"row\">\r\n                                        <div class=\"col-md-6\" *ngFor=\"let field of addFields;let i = index\">\r\n                                          <div class=\"form-group\" *ngIf=\"field.fieldType == 'text'\">\r\n                                            <label>{{field.label}}</label>\r\n                                            <input class=\"form-control\"  name=\"{{field.fieldName}}\" value=\"{{field.valuesBind}}\" [(ngModel)]=\"field.valuesBind\" type=\"text\" minlength=\"1\" maxlength=\"{{field.length}}\" [required]=\"field.mandatory\" (change)=\"fieldValueChange(field.id,$event.target.value, field.fieldName)\">\r\n                                            <small *ngIf=\"field.validation || listForm.submitted && (field.fieldName.invalid)\" class=\"form-text text-muted danger\">{{field.validationMsg}}</small>\r\n                                          </div>\r\n                                          <div class=\"form-group\" *ngIf=\"field.fieldType == 'date'\">\r\n                                            <label>{{field.label}}</label>\r\n                                            <input class=\"form-control\" name=\"{{field.fieldName}}\" value=\"{{field.valuesBind}}\" [(ngModel)]=\"field.valuesBind\" type=\"date\" [required]=\"field.mandatory\" (change)=\"fieldValueChange(field.id,$event.target.value, field.fieldName)\">\r\n                                            <small *ngIf=\"field.validation || listForm.submitted && (dateValue.invalid)\" class=\"form-text text-muted danger\">{{field.validationMsg}}</small>\r\n                                          </div>\r\n                                          <div class=\"form-group\" *ngIf=\"field.fieldType == 'number'\">\r\n                                            <label>{{field.label}}</label>\r\n                                            <input class=\"form-control\" value=\"{{field.valuesBind}}\" name=\"{{field.fieldName}}\" #numbererrorValue=\"ngModel\" [(ngModel)]=\"field.valuesBind\" minlength=\"0\" maxlength=\"{{field.length}}\" #numbererrorValue=\"ngModel\" [required]=\"field.mandatory\" (change)=\"fieldValueChange(field.id,$event.target.value, field.fieldName)\" (keypress)=\"isNumberKey($event)\">\r\n                                            <!-- <input class=\"form-control\" name=\"numberValue\" [(ngModel)]=\"lists.numberValue\" *ngIf=\"field.length == '' && field.length <= 0\" type=\"text\" pattern=\"[0-9]\" [required]=\"field.mandatory\" (change)=\"fieldValueChange(field.id,$event.target.value, field.fieldName)\"> -->\r\n                                            <small *ngIf=\"field.length != '' && field.length > 0\" class=\"form-text text-muted danger\">Field Length Should not exceed {{field.length}}</small>\r\n                                            <small *ngIf=\"field.validation || listForm.submitted && (numbererrorValue.errors)\" class=\"form-text text-muted danger\">{{field.validationMsg}}</small>\r\n                                          </div>\r\n                                          <div class=\"form-group\" *ngIf=\"field.fieldType == 'float'\">\r\n                                            <label>{{field.label}}</label>\r\n                                            <input class=\"form-control\" value=\"{{field.valuesBind}}\" name=\"{{field.fieldName}}\" #floaterrorValue=\"ngModel\" [(ngModel)]=\"field.valuesBind\" minlength=\"0\" maxlength=\"{{field.length}}\" #floaterrorValue=\"ngModel\" [required]=\"field.mandatory\" (change)=\"fieldValueChange(field.id,$event.target.value, field.fieldName)\" (keypress)=\"isNumberKey($event)\">\r\n                                            <!-- <input class=\"form-control\" name=\"floatValue\" [(ngModel)]=\"lists.floatValue\" maxlength=\"{{field.length}}\" *ngIf=\"field.length != '' && field.length > 0\" pattern=\"/^[0-9]+(\\.[0-9]{1,2})?$/\" (change)=\"fieldValueChange(field.id,$event.target.value, field.fieldName)\" type=\"text\" [required]=\"field.mandatory\">\r\n                                            <input class=\"form-control\" name=\"floatValue\" [(ngModel)]=\"lists.floatValue\" *ngIf=\"field.length == '' && field.length <= 0\" pattern=\"/^[0-9]+(\\.[0-9]{1,2})?$/\" (change)=\"fieldValueChange(field.id,$event.target.value, field.fieldName)\" type=\"text\" [required]=\"field.mandatory\"> -->\r\n                                            <small *ngIf=\"field.length != '' && field.length > 0\" class=\"form-text text-muted danger\">Field Length Should not exceed {{field.length}}</small>\r\n                                            <small *ngIf=\"field.validation || listForm.submitted && (floaterrorValue.errors)\" class=\"form-text text-muted danger\">{{field.validationMsg}}</small>\r\n                                          </div>\r\n                                          <div class=\"form-group\" *ngIf=\"field.fieldType == 'toggle'\">\r\n                                              <label>{{field.label}}</label>\r\n                                              <ui-switch name=\"{{field.fieldName}}\" [(ngModel)]=\"field.valuesBind\"  (change)=\"fieldValueChange(field.id,$event, field.fieldName)\" [required]=\"field.mandatory\"></ui-switch>\r\n                                              <small *ngIf=\"field.validation || listForm.submitted && (toggleValue.invalid)\" class=\"form-text text-muted danger\">{{field.validationMsg}}</small>\r\n                                            </div>\r\n                                        </div>\r\n                                      </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"form-actions\">\r\n                                <button type=\"submit\" class=\"btn btn-raised btn-danger mr-1\" (click)=\"cancel()\">\r\n                                Cancel\r\n                                </button>\r\n                                <button type=\"submit\" class=\"btn btn-raised btn-success mr-1\" (click)=\"list()\" *ngIf=\"!save\" [disabled]=\"!listForm.valid || submitted\">\r\n                                Update List <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i>\r\n                                </button>\r\n                                <button type=\"submit\" class=\"btn btn-raised btn-success\" (click)=\"list()\" *ngIf=\"save\" [disabled]=\"!listForm.valid || submitted\">\r\n                                Add List <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i>\r\n                                </button>\r\n                              </div>\r\n                            </form>\r\n                          </ng-template>\r\n                        </ngb-tab>\r\n                        <ngb-tab title=\"Subscriber\">\r\n                          <ng-template ngbTabContent>\r\n                                <!-- <ngx-datatable #table class='bootstrap' [rows]=\"rows\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n                                  [rowHeight]=\"'auto'\" [limit]=\"5\"></ngx-datatable> -->\r\n                                  <div class=\"card-body\">\r\n                                      <div class=\"card-block\">\r\n                                          <ngx-datatable #mydatatable class=\"bootstrap fullscreen\" [headerHeight]=\"50\" [limit]=\"5\" [columnMode]=\"'force'\" [footerHeight]=\"50\"\r\n                                              [rowHeight]=\"'auto'\" [rows]=\"rows\" [scrollbarH]=\"true\">\r\n                                              <ngx-datatable-column name=\"First Name\">\r\n                                                  <ng-template ngx-datatable-cell-template  let-row=\"row\">\r\n                                                          {{row.FirstName}}\r\n                                                  </ng-template>\r\n                                              </ngx-datatable-column>\r\n                                              <ngx-datatable-column name=\"Last Name\">\r\n                                                  <ng-template ngx-datatable-cell-template let-row=\"row\">\r\n                                                          {{row.LastName}}\r\n                                                  </ng-template>\r\n                                              </ngx-datatable-column>\r\n                                              <ngx-datatable-column name=\"Email\" [width]=\"250\">\r\n                                                  <ng-template ngx-datatable-cell-template let-row=\"row\">\r\n                                                      {{row.email}}\r\n                                                  </ng-template>\r\n                                              </ngx-datatable-column>\r\n                                              <ngx-datatable-column name=\"Address\" [width]=\"250\">\r\n                                                  <ng-template ngx-datatable-cell-template let-row=\"row\">\r\n                                                      {{row.address}}\r\n                                                  </ng-template>\r\n                                              </ngx-datatable-column>\r\n                                              <ngx-datatable-column name=\"List Name\">\r\n                                                  <ng-template ngx-datatable-cell-template let-row=\"row\">\r\n                                                      {{row.listname}}\r\n                                                  </ng-template>\r\n                                              </ngx-datatable-column>\r\n                                              <ngx-datatable-column name=\"Subscribed On\" [width]=\"200\">\r\n                                                  <ng-template ngx-datatable-cell-template let-row=\"row\">\r\n                                                      {{row.date}}\r\n                                                  </ng-template>\r\n                                              </ngx-datatable-column>\r\n                                              <!--<ngx-datatable-column name=\"Subscribed Status\">\r\n                                                  <ng-template ngx-datatable-cell-template let-row=\"row\">\r\n                                                      {{row.status}}\r\n                                                  </ng-template>\r\n                                              </ngx-datatable-column>-->\r\n                                              <ngx-datatable-column name=\"Subscribed\">\r\n                                                <ng-template ngx-datatable-cell-template let-row=\"row\">\r\n                                                  <ui-switch [(ngModel)]=\"row.status\" (ngModelChange)=\"updateStatus($event, row.id)\"></ui-switch>\r\n                                                </ng-template>\r\n                                              </ngx-datatable-column>\r\n                                          </ngx-datatable>\r\n                                      </div>\r\n                                  </div>\r\n                          </ng-template>\r\n                        </ngb-tab>\r\n                      </ngb-tabset>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n  <div class=\"row\" *ngIf=\"showForm\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <form class=\"form\" #listForm=\"ngForm\">\r\n              <div class=\"form-body\">\r\n                <!-- <h4 class=\"form-section\">\r\n                <i class=\"icon-user\"></i> Personal Details</h4> -->\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label>Name</label>\r\n                      <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"lists.name\" [ngClass]=\"{ 'is-invalid': listForm.submitted && name.invalid }\" required>\r\n                      <small class=\"form-text text-muted danger\" *ngIf=\"listForm.submitted && name.invalid\">This field is required!</small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label>Email</label>\r\n                      <input type=\"email\" email class=\"form-control\" name=\"email\" [(ngModel)]=\"lists.email\" [ngClass]=\"{ 'is-invalid': listForm.submitted && email.invalid }\" required>\r\n                      <small class=\"form-text text-muted danger\" *ngIf=\"listForm.submitted && email.invalid\">This field is required!</small>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label>Phone Number</label>\r\n                      <input (keypress)=\"isNumberKey($event)\"  maxlength=\"10\" class=\"form-control\" name=\"phonenum\" [(ngModel)]=\"lists.phonenum\" [ngClass]=\"{ 'is-invalid': listForm.submitted && phonenum.invalid }\" required>\r\n                      <small class=\"form-text text-muted danger\" *ngIf=\"listForm.submitted && phonenum.invalid\">This field is required!</small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label>Address</label>\r\n                      <input type=\"text\" class=\"form-control\" name=\"address\" [(ngModel)]=\"lists.address\" ngx-google-places-autocomplete [options]='options' #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\" [ngClass]=\"{ 'is-invalid': listForm.submitted && address.invalid }\" required>\r\n                      <small class=\"form-text text-muted danger\" *ngIf=\"listForm.submitted && address.invalid\">This field is required!</small>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                      <label>Newsletter</label>\r\n                      <div class=\"custom-control custom-checkbox m-0\">\r\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"newsletter\" name=\"newsletter\" [(ngModel)]=\"lists.newsletter\">\r\n                        <label class=\"custom-control-label\" for=\"newsletter\">Opt In</label>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"extraFields\">\r\n                  <div class=\"col-md-12\">\r\n                      <h4 class=\"form-section\">Extra Fields</h4>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-6\" *ngFor=\"let field of addFields;let i = index\">\r\n                          <div class=\"form-group\" *ngIf=\"field.fieldType == 'text'\">\r\n                            <label>{{field.label}}</label>\r\n                            <input class=\"form-control\"  name=\"{{field.fieldName}}\" [(ngModel)]=\"field.fieldName_extra\" type=\"text\" minlength=\"1\" maxlength=\"{{field.length}}\" [required]=\"field.mandatory\" (change)=\"fieldValueChange(field.id,$event.target.value, field.fieldName)\">\r\n                            <small *ngIf=\"field.validation && (listForm.submitted && field.fieldName.invalid)\" class=\"form-text text-muted danger\">{{field.validationMsg}}</small>\r\n                          </div>\r\n                          <div class=\"form-group\" *ngIf=\"field.fieldType == 'date'\">\r\n                            <label>{{field.label}}</label>\r\n                            <input class=\"form-control\" name=\"{{field.fieldName}}\" [(ngModel)]=\"field.fieldName_extra\" type=\"date\" [required]=\"field.mandatory\" (change)=\"fieldValueChange(field.id,$event.target.value, field.fieldName)\">\r\n                            <small *ngIf=\"field.validation && (listForm.submitted && dateValue.invalid)\" class=\"form-text text-muted danger\">{{field.validationMsg}}</small>\r\n                          </div>\r\n                          <div class=\"form-group\" *ngIf=\"field.fieldType == 'number'\">\r\n                            <label>{{field.label}}</label>\r\n                            <input class=\"form-control\" name=\"{{field.fieldName}}\" #numbererrorValue=\"ngModel\" [(ngModel)]=\"field.fieldName_extra\" minlength=\"0\" maxlength=\"{{field.length}}\" #numbererrorValue=\"ngModel\" [required]=\"field.mandatory\" (change)=\"fieldValueChange(field.id,$event.target.value, field.fieldName)\" (keypress)=\"isNumberKey($event)\">\r\n                            <!-- <input class=\"form-control\" name=\"numberValue\" [(ngModel)]=\"lists.numberValue\" *ngIf=\"field.length == '' && field.length <= 0\" type=\"text\" pattern=\"[0-9]\" [required]=\"field.mandatory\" (change)=\"fieldValueChange(field.id,$event.target.value, field.fieldName)\"> -->\r\n                            <small *ngIf=\"field.length != '' && field.length > 0\" class=\"form-text text-muted danger\">Field Length Should not exceed {{field.length}}</small>\r\n                            <small *ngIf=\"field.validation && (listForm.submitted && numbererrorValue.invalid)\" class=\"form-text text-muted danger\">{{field.validationMsg}}</small>\r\n                          </div>\r\n                          <div class=\"form-group\" *ngIf=\"field.fieldType == 'float'\">\r\n                            <label>{{field.label}}</label>\r\n                            <input class=\"form-control\" name=\"{{field.fieldName}}\" #floaterrorValue=\"ngModel\" [(ngModel)]=\"field.fieldName_extra\" minlength=\"0\" maxlength=\"{{field.length}}\" #floaterrorValue=\"ngModel\" [required]=\"field.mandatory\" (change)=\"fieldValueChange(field.id,$event.target.value, field.fieldName)\" (keypress)=\"isNumberKey($event)\">\r\n                            <!-- <input class=\"form-control\" name=\"floatValue\" [(ngModel)]=\"lists.floatValue\" maxlength=\"{{field.length}}\" *ngIf=\"field.length != '' && field.length > 0\" pattern=\"/^[0-9]+(\\.[0-9]{1,2})?$/\" (change)=\"fieldValueChange(field.id,$event.target.value, field.fieldName)\" type=\"text\" [required]=\"field.mandatory\">\r\n                            <input class=\"form-control\" name=\"floatValue\" [(ngModel)]=\"lists.floatValue\" *ngIf=\"field.length == '' && field.length <= 0\" pattern=\"/^[0-9]+(\\.[0-9]{1,2})?$/\" (change)=\"fieldValueChange(field.id,$event.target.value, field.fieldName)\" type=\"text\" [required]=\"field.mandatory\"> -->\r\n                            <small *ngIf=\"field.length != '' && field.length > 0\" class=\"form-text text-muted danger\">Field Length Should not exceed {{field.length}}</small>\r\n                            <small *ngIf=\"field.validation && (listForm.submitted && floaterrorValue.invalid)\" class=\"form-text text-muted danger\">{{field.validationMsg}}</small>\r\n                          </div>\r\n                          <div class=\"form-group\" *ngIf=\"field.fieldType == 'toggle'\">\r\n                              <label>{{field.label}}</label>\r\n                              <ui-switch name=\"{{field.fieldName}}\" [(ngModel)]=\"field.fieldName_extra\" (change)=\"fieldValueChange(field.id,$event, field.fieldName)\"></ui-switch>\r\n                              <!-- <small *ngIf=\"field.validation && (listForm.submitted && toggleValue.invalid)\" class=\"form-text text-muted danger\">{{field.validationMsg}}</small> -->\r\n                            </div>\r\n                        </div>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-actions\">\r\n                <button type=\"submit\" class=\"btn btn-raised btn-danger mr-1\" (click)=\"cancel()\">\r\n                Cancel\r\n                </button>\r\n                <button type=\"submit\" class=\"btn btn-raised btn-success mr-1\" (click)=\"list()\" *ngIf=\"!save\" [disabled]=\"!listForm.valid || submitted\">\r\n                Update List <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i>\r\n                </button>\r\n                <button type=\"submit\" class=\"btn btn-raised btn-success\" (click)=\"list()\" *ngIf=\"save\" [disabled]=\"!listForm.valid || submitted\">\r\n                Add List <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i>\r\n                </button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/lists/lists.component.scss":
/*!********************************************!*\
  !*** ./src/app/lists/lists.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected-column {\n  width: 38%;\n  margin-right: 20px;\n  float: right;\n  text-align: left;\n  background: #FFF;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24); }\n\nli {\n  list-style: none; }\n\nul.tablealgn {\n  float: right;\n  text-align: -webkit-auto; }\n\nngx-datatable.bootstrap.ngx-datatable.fixed-header.virtualized {\n  float: left; }\n\n.btnalgn {\n  text-align: -webkit-right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdHMvQzpcXFVzZXJzXFxNUlQyMFxcRGVza3RvcFxcVU1cXHVzZXJtYW5hZ2VtZW50L3NyY1xcYXBwXFxsaXN0c1xcbGlzdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLDZFQUE0RSxFQUM5RTs7QUFDRDtFQUNJLGlCQUFnQixFQUNuQjs7QUFDRDtFQUNJLGFBQVk7RUFDWix5QkFBd0IsRUFDM0I7O0FBQ0Q7RUFDSSxZQUFXLEVBQ2Q7O0FBQ0Q7RUFDSywwQkFDTCxFQUFDIiwiZmlsZSI6InNyYy9hcHAvbGlzdHMvbGlzdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0ZWQtY29sdW1ue1xyXG4gICB3aWR0aDogMzglO1xyXG4gICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgIGZsb2F0OiByaWdodDtcclxuICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxufVxyXG5saXtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxudWwudGFibGVhbGduIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHRleHQtYWxpZ246IC13ZWJraXQtYXV0bztcclxufVxyXG5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcC5uZ3gtZGF0YXRhYmxlLmZpeGVkLWhlYWRlci52aXJ0dWFsaXplZCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uYnRuYWxnbiB7XHJcblx0ICAgIHRleHQtYWxpZ246IC13ZWJraXQtcmlnaHRcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/lists/lists.component.ts":
/*!******************************************!*\
  !*** ./src/app/lists/lists.component.ts ***!
  \******************************************/
/*! exports provided: ListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsComponent", function() { return ListsComponent; });
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
/* harmony import */ var _shared_data_lists_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/data/lists.service */ "./src/app/shared/data/lists.service.ts");
/* harmony import */ var _shared_data_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/data/user.service */ "./src/app/shared/data/user.service.ts");
/* harmony import */ var _shared_data_addFields_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/data/addFields.service */ "./src/app/shared/data/addFields.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ListsComponent = /** @class */ (function () {
    function ListsComponent(snotifyService, addFieldsService, listsservice, userservice, router, route) {
        this.snotifyService = snotifyService;
        this.addFieldsService = addFieldsService;
        this.listsservice = listsservice;
        this.userservice = userservice;
        this.router = router;
        this.route = route;
        this.showTable = true;
        this.showForm = false;
        this.submitted = false;
        this.lists = {
            'id': '',
            'name': '',
            'email': '',
            'phonenum': '',
            'address': '',
            'newsletter': '',
            'fields': '',
        };
        this.lists_extra = {};
        this.options = {
            types: ['geocode'],
            componentRestrictions: { country: 'AU' }
        };
        this.p = 1;
        this.pageSize = 10;
        this.count = [];
        this.style = 'material';
        this.title = 'Snotify title!';
        this.body = 'Lorem ipsum dolor sit amet!';
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
        //submitted=false;
        this.extraFields = false;
        this.FieldsValue = [];
        this.addFields = [];
        this.columns = [
            { prop: 'firstName' },
            { prop: 'lastName' },
            { prop: 'email' },
            { prop: 'address' },
            { prop: 'listName' },
            { prop: 'subscribedOn' },
            { prop: 'subscribedStatus' },
            { prop: 'Subscribed' }
        ];
        this.columns1 = [
            { name: 'Name' },
            { name: 'Email' },
            { name: 'Phone' },
            { name: 'Address' }
        ];
        this.allColumns1 = [
            { name: 'Name' },
            { name: 'Email' },
            { name: 'Phone' },
            { name: 'Address' }
        ];
        this.isCollapsed = false;
        //this.lists = new Array();
    }
    ListsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.listForm = new FormGroup({
        //     'fname': new FormControl(null, [Validators.required]),
        //     'address': new FormControl(null, [Validators.required]),
        //     'email': new FormControl(null, [Validators.required, Validators.email]),
        //     'phone': new FormControl(null, [Validators.required]),
        //     'newsletter': new FormControl(null,null)
        // });
        this.listsservice.getlist(new Date().getTime()).then(function (data) {
            if (data['status'] == 'success') {
                _this.listData = data['lists'];
                _this.collectionSize = data['lists'].length;
                _this.totalList = data['lists'].length;
            }
        });
        this.addFieldsService.getFieldsByTable('list').then(function (data) {
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
                _this.addFields = [];
                _this.extraFields = false;
            }
        });
    };
    ListsComponent.prototype.handleAddressChange = function (address) {
        // Do some stuff
        this.newaddress = address.formatted_address;
    };
    ListsComponent.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            //this.loadData();
        }
    };
    ListsComponent.prototype.addlist = function () {
        this.showTable = false;
        this.showForm = true;
        this.save = true;
    };
    ListsComponent.prototype.toggle = function (col) {
        var isChecked = this.isChecked(col);
        console.log('isChecked value - ' + isChecked);
        if (isChecked) {
            this.columns1 = this.columns1.filter(function (c) {
                console.log('Name - ' + c.name);
                return c.name !== col.name;
            });
        }
        else {
            this.columns1 = this.columns1.concat([col]);
            console.log('columns1 - ' + this.columns1);
        }
    };
    ListsComponent.prototype.isChecked = function (col) {
        return this.columns1.find(function (c) {
            return c.name === col.name;
        });
    };
    ListsComponent.prototype.editlist = function (id) {
        var _this = this;
        this.listsservice.getlistById(id).then(function (data) {
            _this.save = false;
            _this.showTable = false;
            _this.showForm = false;
            _this.lists.id = data['lists'][0].id;
            _this.lists.name = data['lists'][0].name;
            _this.lists.email = data['lists'][0].email;
            _this.lists.phonenum = data['lists'][0].phone;
            _this.lists.address = data['lists'][0].address; // this.newaddress; data['lists'][0].address;
            _this.newaddress = data['lists'][0].address;
            _this.lists.newsletter = data['lists'][0].newsletter;
            _this.lists.fields = data['lists'][0].extraFieldsValue;
            if (data['lists'][0].extraFieldsValue != '') {
                _this.FieldsValue = JSON.parse(data['lists'][0].extraFieldsValue);
                for (var j = 0; j < _this.addFields.length; j++) {
                    for (var i = 0; i < _this.FieldsValue.length; i++) {
                        if (_this.addFields[j].id == _this.FieldsValue[i].id) {
                            var modelName = _this.FieldsValue[i].fieldName + '_extra';
                            _this.addFields[j].valuesBind = _this.FieldsValue[i].value;
                            //if(this.addFields[j].fieldType == 'text'){
                            _this.lists_extra[modelName] = _this.FieldsValue[i].value;
                            //}
                            // if(this.addFields[j].fieldType == 'date'){
                            //   this.lists_extra.this.FieldsValue[i].fieldName+'_extra' = this.FieldsValue[i].value;
                            // }
                            // if(this.addFields[j].fieldType == 'number'){
                            //   this.lists_extra.this.FieldsValue[i].fieldName+'_extra' = this.FieldsValue[i].value;
                            // }
                            // if(this.addFields[j].fieldType == 'float'){
                            //   this.lists_extra.this.FieldsValue[i].fieldName+'_extra' = this.FieldsValue[i].value;
                            // }
                            // if(this.addFields[j].fieldType == 'toggle'){
                            // this.lists_extra.this.FieldsValue[i].fieldName+'_extra' = this.FieldsValue[i].value;
                            // }
                        }
                    }
                }
            }
        }, function (error) {
        });
        this.listsservice.getUsersByListId(id).then(function (data) {
            if (data['status'] == 'success') {
                _this.rows = data['users'];
            }
            else {
                _this.rows = '';
            }
        });
    };
    ListsComponent.prototype.updateStatus = function (event, userid) {
        var _this = this;
        var SubscriptionDetail = {
            id: userid,
            listId: this.lists.id
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
    ListsComponent.prototype.cancel = function () {
        this.showTable = true;
        this.showForm = false;
        this.save = true;
        this.listForm.reset();
        this.lists.id = '';
        this.lists.name = '';
        this.lists.email = '';
        this.lists.phonenum = '';
        this.lists.address = '';
        this.lists.newsletter = '';
    };
    ListsComponent.prototype.fieldValueChange = function (id, value, fieldName) {
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
        console.log('val -' + JSON.stringify(this.FieldsValue));
    };
    ListsComponent.prototype.deletelist = function (id) {
        var self = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
            title: '',
            html: '' +
                'Users Subscribed to the list will be deleted. Do you want to continue?',
            showCloseButton: true,
            confirmButtonText: 'Ok',
            allowOutsideClick: false,
            allowEscapeKey: false,
            showCancelButton: true,
        }).then(function (dismiss) {
            //console.log(JSON.stringify(dismiss));
            if (dismiss.value && dismiss !== 'cancel') {
                self.listsservice.deletelistById(id).then(function (data) {
                    self.snotifyService.error('Deleted Successfully', '', self.getConfig());
                    self.listData = [];
                    self.collectionSize = [];
                    self.totalList = [];
                    self.listsservice.getlist(new Date().getTime()).then(function (data) {
                        if (data['status'] == 'success') {
                            self.listData = data['lists'];
                            self.collectionSize = data['lists'].length;
                            self.totalList = data['lists'].length;
                        }
                    });
                }, function (error) {
                });
            }
        });
    };
    ListsComponent.prototype.list = function () {
        var _this = this;
        if (this.newaddress != '') {
            this.lists.address = this.newaddress;
        }
        console.log(this.lists);
        this.submitted = true;
        if (this.extraFields) {
            this.lists.fields = JSON.stringify(this.FieldsValue);
        }
        else {
            this.lists.fields = '';
        }
        //this.submitted = true;
        if (this.lists.id != '') {
            this.listsservice.addlist(this.lists, 'update').then(function (data) {
                if (data['status']) {
                    _this.listForm.reset();
                    // this.lists.id = '';
                    // this.lists.name = '';
                    // this.lists.email = '';
                    // this.lists.phonenum = '';
                    // this.lists.address = '';
                    // this.lists.newsletter = '';
                    _this.snotifyService.success('Updated Successfully', '', _this.getConfig());
                    _this.submitted = false;
                    _this.listData = [];
                    _this.collectionSize = [];
                    _this.totalList = [];
                    _this.listsservice.getlist(new Date().getTime()).then(function (listdata) {
                        if (listdata['status'] == 'success') {
                            _this.listData = listdata['lists'];
                            _this.collectionSize = listdata['lists'].length;
                            _this.totalList = listdata['lists'].length;
                            _this.submitted = false;
                            _this.showForm = false;
                            _this.showTable = true;
                        }
                    });
                }
            });
        }
        else {
            this.listsservice.addlist(this.lists, 'add').then(function (data) {
                if (data['status']) {
                    _this.listForm.reset();
                    // this.lists.id = '';
                    // this.lists.name = '';
                    // this.lists.email = '';
                    // this.lists.phonenum = '';
                    // this.lists.address = '';
                    // this.lists.newsletter = '';
                    _this.snotifyService.success('Saved Successfully', '', _this.getConfig());
                    _this.listData = [];
                    _this.collectionSize = [];
                    _this.totalList = [];
                    _this.listsservice.getlist(new Date().getTime()).then(function (listdata) {
                        if (listdata['status'] == 'success') {
                            _this.listData = listdata['lists'];
                            _this.collectionSize = listdata['lists'].length;
                            _this.totalList = listdata['lists'].length;
                            _this.submitted = false;
                            _this.showForm = false;
                            _this.showTable = true;
                        }
                    });
                }
            });
        }
    };
    ListsComponent.prototype.isNumberKey = function (evt) {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    ListsComponent.prototype.getConfig = function () {
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
    ], ListsComponent.prototype, "mydatatable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("listForm"),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ListsComponent.prototype, "listForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("placesRef"),
        __metadata("design:type", ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_3__["GooglePlaceDirective"])
    ], ListsComponent.prototype, "placesRef", void 0);
    ListsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lists',
            template: __webpack_require__(/*! ./lists.component.html */ "./src/app/lists/lists.component.html"),
            styles: [__webpack_require__(/*! ./lists.component.scss */ "./src/app/lists/lists.component.scss")]
        }),
        __metadata("design:paramtypes", [ng_snotify__WEBPACK_IMPORTED_MODULE_5__["SnotifyService"], _shared_data_addFields_service__WEBPACK_IMPORTED_MODULE_9__["AddFieldsService"], _shared_data_lists_service__WEBPACK_IMPORTED_MODULE_7__["ListsService"], _shared_data_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ListsComponent);
    return ListsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~lists-lists-module~users-users-module.js.map