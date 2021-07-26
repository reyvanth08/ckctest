(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~campaign-campaign-module~email-template-email-template-module"],{

/***/ "./src/app/email-template/email-template.component.html":
/*!**************************************************************!*\
  !*** ./src/app/email-template/email-template.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"basic-elements\">\r\n\t<div class=\"row\">\r\n\t    <div class=\"col-md-6\">\r\n\t        <div class=\"content-header\">Email Templates</div>\r\n\t    </div>\r\n\t</div>\r\n\r\n\t<div class=\"row\" *ngIf=\"new\">\r\n\t\t<div class=\"col-md-12\" *ngIf=\"showTable\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t    <div class=\"col-sm-12\" style=\"text-align: right;\" *ngIf=\"showTable\">\r\n\t\t\t\t\t        <p>\r\n\t\t\t\t\t            <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-bitbucket float-right\" (click)=\"addet()\"><span class=\"ft-plus\"></span>Add Email Template</a>\r\n\t\t\t\t\t        </p>\r\n\t\t\t\t\t    </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n              <table class=\"table table-responsive-sm\">\r\n                  <thead>\r\n                      <tr>\r\n                          <th>Template Name</th>\r\n                          <th>Subject</th>\r\n                          <th>Action</th>\r\n                      </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let templateData of emailTemplates | paginate: { itemsPerPage: 10, currentPage: p }\">\r\n                        <td>{{templateData.name}}</td>\r\n                        <td>{{templateData.subject}}</td>\r\n                        <td>\r\n                            <a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"editet(templateData.id)\">\r\n                                <i class=\"fas fa-pencil-alt font-medium-3 mr-2\"></i>\r\n                            </a>\r\n                            <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"deleteet(templateData.id)\">\r\n                                <i class=\"fas fa-trash font-medium-3 mr-2\"></i>\r\n                            </a>\r\n                      \t</td>\r\n                    </tr>\r\n                      <!-- <pagination-controls (pageChange)=\"p = $event\"></pagination-controls> -->\r\n                  </tbody>\r\n              </table>\r\n            <div class=\"col-12 paginationonAction\">\r\n            \t<span class=\"total\">{{collectionSize}} Total</span>\r\n            \t<ngb-pagination class=\"datatable-footer-inner\" [pageSize]=\"pageSize\" [(page)]=\"p\" [maxSize]=\"5\" [rotate]=\"true\" [collectionSize]=\"collectionSize\" [boundaryLinks]=\"true\" style=\"float: right;\"></ngb-pagination>\r\n          </div>\r\n        </div>\r\n    \t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\t\t<div class=\"col-md-12\" *ngIf=\"!showTable\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t          <div class=\"card-block\">\r\n\t            \t<form class=\"form\" [formGroup]=\"emailTemplateForm\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-body\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"temname\">Name</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"temname\" class=\"form-control\" formControlName=\"temname\" placeholder=\"Enter Template Name\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<small class=\"form-text text-muted danger\" *ngIf=\"!emailTemplateForm.get('temname').valid && (emailTemplateForm.get('temname').dirty || emailTemplateForm.get('temname').touched)\">Please enter a value.</small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"temsub\">Subject</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"temsub\" class=\"form-control\" formControlName=\"temsub\" placeholder=\"Enter Subject\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<small class=\"form-text text-muted danger\" *ngIf=\"!emailTemplateForm.get('temsub').valid && (emailTemplateForm.get('temsub').dirty || emailTemplateForm.get('temsub').touched)\">Please enter a value.</small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"template\">Save as Template</label><br />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ui-switch formControlName=\"template\" id=\"template\"></ui-switch>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"template\">Type Id (Unique Id for Template Differentiation)</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\"  class=\"form-control\" formControlName=\"temtypeid\" placeholder=\"Enter Type Id\" (blur)=\"checkUniqueId($event.target.value)\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<small class=\"form-text text-muted danger\" *ngIf=\"typeIdExsits\">That type id is taken. Try another.</small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<small class=\"form-text text-muted danger\" *ngIf=\"(!emailTemplateForm.get('temtypeid').valid && (emailTemplateForm.get('temtypeid').dirty || emailTemplateForm.get('temtypeid').touched))\">Please enter a value.</small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h2>Map User Details to be displayed in Template Below</h2>\r\n\t\t                      <p>Example :- [NAME] means Member Name, and so on...</p>\r\n\t\t                      <div formArrayName=\"mapusers\">\r\n\t\t                         <div  [formGroupName]=\"i\" *ngFor=\"let tech of emailTemplateForm.controls.mapusers.controls; let i = index\">\r\n\t\t                         \t<div class=\"row\">\r\n\t\t                            <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\r\n\t\t                               <div class=\"form-group\">\r\n\t\t                                  <label>Enter value within [] only.</label>\r\n\t\t                                  <input type=\"text\" formControlName=\"nametype\" class=\"form-control\" required>\r\n\t\t                               </div>\r\n\t\t                            </div>\r\n\t\t                            <div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\" >\r\n\t\t                               <div class=\"form-group\">\r\n\t\t                                  <label>Choose User Details.</label>\r\n\t\t                                  <select  class=\"custom-select mb-2\" formControlName=\"uservalue\" placeholder=\"Select User Details\" required>\r\n\t\t                                     <option value=\"name\">Name</option>\r\n \t\t                                     <option value=\"firstName\">First Name</option>\r\n \t\t                                     <option value=\"lastName\">Last Name</option>\r\n \t\t                                     <option value=\"email\">Email</option>\r\n \t\t                                     <option value=\"dob\">DOB</option>\r\n \t\t                                     <option value=\"address\">Address</option>\r\n\t\t                                  </select>\r\n\t\t                               </div>\r\n\t\t                            </div>\r\n\t\t                            <div class=\"col-xl-1 col-lg-6 col-md-12 mb-1\" >\r\n\t\t                               <div class=\"col-xl-2 col-lg-6 col-md-12 mb-1\">\r\n\t\t                                  <label></label>\r\n\t\t                                  <button class=\"btn btn-danger mr-1 btn-fab\"\r\n\t\t                                     (click)=\"removeSetCondition(i)\"><i class=\"fa fa-times\"></i></button>\r\n\t\t                               </div>\r\n\t\t                            </div>\r\n\t\t                         \t</div>\r\n\t\t                      \t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-primary btn-block btn-raised\" (click)=\"addSetCondition()\" >Add User Details</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div [froalaEditor]=\"options\" #my_editor formControlName=\"tembody\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</fieldset>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-actions\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-raised btn-success mr-1\" (click)=\"addEmailTemplate()\" *ngIf=\"!showEdit\" [disabled]=\"!emailTemplateForm.valid || typeIdExsits || submitted\">Save Template</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-raised btn-danger mr-1\" (click)=\"updateEmailTemplate()\" *ngIf=\"showEdit\" [disabled]=\"!emailTemplateForm.valid || typeIdExsits || submitted\">Update Template</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-raised btn-danger mr-1\" (click)=\"cancel()\">Cancel</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t       </div>\r\n        \t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- <div class=\"row\" *ngIf=\"showEdit\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t                    <div class=\"card-block\">\r\n\t                        <form class=\"form\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"projectinput1\">Name</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"editEmailTemDetails.name\" placeholder=\"Enter Template Name\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"projectinput2\">Subject</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"subject\" [(ngModel)]=\"editEmailTemDetails.subject\" placeholder=\"Enter Subject\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-12\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"template\">Save as Template</label><br />\r\n\t\t\t\t\t\t\t\t\t\t\t<ui-switch [(ngModel)]=\"editEmailTemDetails.template\" name=\"template\"></ui-switch>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<fieldset class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div [froalaEditor]=\"options\" #my_editor name=\"body\" [(ngModel)]=\"editEmailTemDetails.body\"></div>\r\n\t\t\t\t                        </fieldset>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"form-actions\">\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-raised btn-danger mr-1\" (click)=\"updateEmailTemplate()\" [disabled]=\"!emailTemplateForm.valid\">Update Template</button>\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-raised btn-success\" (click)=\"cancel()\">Cancel</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</form>\r\n\t                    </div>\r\n                \t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div> -->\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/email-template/email-template.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/email-template/email-template.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtYWlsLXRlbXBsYXRlL2VtYWlsLXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/email-template/email-template.component.ts":
/*!************************************************************!*\
  !*** ./src/app/email-template/email-template.component.ts ***!
  \************************************************************/
/*! exports provided: EmailTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplateComponent", function() { return EmailTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_data_email_template_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/data/email-template.service */ "./src/app/shared/data/email-template.service.ts");
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





var EmailTemplateComponent = /** @class */ (function () {
    function EmailTemplateComponent(snotifyService, formBuilder, emailtemplateservice, router, _FB) {
        this.snotifyService = snotifyService;
        this.formBuilder = formBuilder;
        this.emailtemplateservice = emailtemplateservice;
        this.router = router;
        this._FB = _FB;
        this.p = 1;
        this.pageSize = 10;
        this.showTable = true;
        this.showEdit = false;
        this.new = true;
        this.typeIdExsits = false;
        this.options = {
            charCounterCount: true,
            // Set the image upload parameter.
            imageUploadParam: 'image_param',
            // Set the image upload URL.
            imageUploadURL: 'https://cockburncrc.com.au/members/usermanagement/images',
            // Additional upload params.
            imageUploadParams: { id: 'my_editor' },
            // Set request type.
            imageUploadMethod: 'POST',
            // Set max image size to 5MB.
            imageMaxSize: 5 * 1024 * 1024,
            // Allow to upload PNG and JPG.
            imageAllowedTypes: ['jpeg', 'jpg', 'png', 'gif'],
            //Edit toolbar
            toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'indent', 'outdent', '|', 'fontFamily', 'fontSize', 'color', 'paragraphStyle', '|', 'paragraphFormat',
                ,
                'insertImage', 'insertLink', 'viewcode', 'insertHR', 'selectAll', 'clearFormatting', 'html', 'undo', 'redo'],
            events: {
                'froalaEditor.initialized': function () {
                    console.log('initialized');
                },
                'froalaEditor.image.beforeUpload': function (e, editor, images) {
                    //Your code
                    if (images.length) {
                        // Create a File Reader.
                        var reader = new FileReader();
                        // Set the reader to insert images when they are loaded.
                        reader.onload = function (ev) {
                            var result = ev.target['result'];
                            editor.image.insert(result, null, null, editor.image.get());
                            console.log(ev, editor.image, ev.target['result']);
                        };
                        // Read image as base64.
                        reader.readAsDataURL(images[0]);
                    }
                    // Stop default upload chain.
                    return false;
                }
            }
        };
        this.success = false;
        this.error = false;
        this.editEmailTemDetails = {
            'id': ''
        };
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
        this.defaultTemplate = this.emailtemplateservice.getDefaultTemplate();
    }
    EmailTemplateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.emailTemplateForm = this.formBuilder.group({
            'temname': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'temsub': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'tembody': this.defaultTemplate,
            'template': false,
            'temtypeid': ['', null],
            'mapusers': this._FB.array([]),
        }, { updateOn: 'blur' });
        this.emailtemplateservice.getEmailTemp().then(function (data) {
            console.log(data['emailTemplate']);
            if (data['status'] == 'success') {
                _this.emailTemplates = data['emailTemplate'];
                _this.collectionSize = data['emailTemplate'].length;
            }
            else {
                _this.emailTemplates = [];
                _this.collectionSize = 0;
            }
        }, function (error) {
        });
    };
    Object.defineProperty(EmailTemplateComponent.prototype, "f", {
        get: function () { return this.emailTemplateForm.controls; },
        enumerable: true,
        configurable: true
    });
    EmailTemplateComponent.prototype.addet = function () {
        this.showTable = false;
        this.new = true;
    };
    EmailTemplateComponent.prototype.initMapFields = function () {
        return this._FB.group({
            nametype: [],
            uservalue: []
        });
    };
    EmailTemplateComponent.prototype.addSetCondition = function () {
        var control = this.emailTemplateForm.controls.mapusers;
        control.push(this.initMapFields());
    };
    EmailTemplateComponent.prototype.removeSetCondition = function (i) {
        var control = this.emailTemplateForm.controls.mapusers;
        control.removeAt(i);
    };
    EmailTemplateComponent.prototype.addSetConditionEdit = function (myobj) {
        var control = this.emailTemplateForm.controls.mapusers;
        control.push(this.initMapFieldsEdit(myobj));
    };
    EmailTemplateComponent.prototype.initMapFieldsEdit = function (myobj) {
        return this._FB.group({
            nametype: [myobj['nametype']],
            uservalue: [myobj['uservalue']]
        });
    };
    EmailTemplateComponent.prototype.cancel = function () {
        var _this = this;
        this.showTable = true;
        this.new = true;
        this.showEdit = false;
        this.emailTemplateForm.reset();
        this.emailtemplateservice.getEmailTempTimeStamp(new Date().getTime()).then(function (data) {
            console.log(data['emailTemplate']);
            if (data['status'] == 'success') {
                _this.emailTemplateForm = _this.formBuilder.group({
                    'temname': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    'temsub': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    'tembody': _this.defaultTemplate,
                    'template': false,
                    'temtypeid': ['', null],
                    'mapusers': _this._FB.array([]),
                });
                _this.emailTemplates = data['emailTemplate'];
                _this.collectionSize = data['emailTemplate'].length;
            }
            else {
                _this.emailTemplates = [];
                _this.collectionSize = 0;
            }
        }, function (error) {
        });
    };
    EmailTemplateComponent.prototype.editet = function (id) {
        var _this = this;
        this.emailtemplateservice.getEmailTempById(id).then(function (data) {
            console.log(data['emailTemplate']);
            if (data['status'] == 'success') {
                _this.emailTemplateForm = _this.formBuilder.group({
                    'temname': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    'temsub': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    'tembody': _this.defaultTemplate,
                    'template': false,
                    'temtypeid': ['', null],
                    'mapusers': _this._FB.array([]),
                });
                _this.emailTemplateForm.controls['temname'].setValue(data['emailTemplate'][0].name);
                _this.emailTemplateForm.controls['temsub'].setValue(data['emailTemplate'][0].subject);
                _this.emailTemplateForm.controls['tembody'].setValue(data['emailTemplate'][0].body);
                _this.editEmailTemDetails.id = data['emailTemplate'][0].id;
                // this.editEmailTemDetails.name = data['emailTemplate'][0].name;
                // this.editEmailTemDetails.subject = data['emailTemplate'][0].subject;
                // this.editEmailTemDetails.body = data['emailTemplate'][0].body;
                if (data['emailTemplate'][0].type == "news") {
                    _this.emailTemplateForm.controls['template'].setValue(true);
                }
                else {
                    _this.emailTemplateForm.controls['template'].setValue(false);
                }
                _this.emailTemplateForm.controls['temtypeid'].setValue(data['emailTemplate'][0].typeId);
                if (data['emailTemplate'][0].mapUsers != '' && data['emailTemplate'][0].mapUsers != null) {
                    var mapUsers = data['emailTemplate'][0].mapUsers;
                    //console.log(mapUsers.length);
                    for (var i = 0; i < mapUsers.length; i++) {
                        _this.addSetConditionEdit(mapUsers[i]);
                    }
                }
                _this.new = true;
                _this.showTable = false;
                _this.showEdit = true;
                _this.success = false;
                _this.error = false;
                _this.typeIdExsits = false;
            }
        }, function (error) {
        });
    };
    EmailTemplateComponent.prototype.deleteet = function (id) {
        var _this = this;
        this.emailtemplateservice.deleteEmailTempById(id).then(function (data) {
            if (data['status'] == "success") {
                _this.showTable = true;
                _this.new = true;
                _this.error = false;
                _this.typeIdExsits = false;
                _this.success = false;
                _this.snotifyService.error('Deleted Successfully', '', _this.getConfig());
                _this.emailtemplateservice.getEmailTempTimeStamp(new Date().getTime()).then(function (data) {
                    console.log(data['emailTemplate']);
                    if (data['status'] == 'success') {
                        _this.emailTemplates = data['emailTemplate'];
                        _this.collectionSize = data['emailTemplate'].length;
                    }
                    else {
                        _this.emailTemplates = [];
                        _this.collectionSize = 0;
                    }
                }, function (error) {
                });
            }
        }, function (error) {
        });
    };
    EmailTemplateComponent.prototype.addEmailTemplate = function () {
        var _this = this;
        this.submitted = true;
        this.emailTemDetails = {
            name: this.f.temname.value,
            subject: this.f.temsub.value,
            body: this.f.tembody.value,
            type: this.f.template.value.toString(),
            typeId: this.f.temtypeid.value,
            mapUsers: this.f.mapusers.value
        };
        this.emailtemplateservice.addEmailTemp(this.emailTemDetails).then(function (data) {
            if (data['status']) {
                _this.showTable = true;
                _this.new = true;
                _this.error = false;
                _this.typeIdExsits = false;
                _this.success = true;
                _this.snotifyService.success('Saved Successfully', '', _this.getConfig());
                _this.submitted = false;
                _this.emailTemplateForm.reset();
                _this.emailTemplateForm = _this.formBuilder.group({
                    'temname': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    'temsub': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    'tembody': _this.defaultTemplate,
                    'template': false,
                    'temtypeid': ['', null],
                    'mapusers': _this._FB.array([]),
                }, { updateOn: 'blur' });
                _this.emailtemplateservice.getEmailTempTimeStamp(new Date().getTime()).then(function (data) {
                    console.log(data['emailTemplate']);
                    if (data['status'] == 'success') {
                        _this.emailTemplates = data['emailTemplate'];
                        _this.collectionSize = data['emailTemplate'].length;
                    }
                    else {
                        _this.emailTemplates = [];
                        _this.collectionSize = 0;
                    }
                }, function (error) {
                });
            }
            else {
                _this.showTable = false;
                _this.new = true;
                _this.error = true;
                _this.success = false;
            }
        });
    };
    EmailTemplateComponent.prototype.updateEmailTemplate = function () {
        var _this = this;
        this.submitted = true;
        this.emailTemDetails = {
            id: this.editEmailTemDetails.id,
            name: this.f.temname.value,
            subject: this.f.temsub.value,
            body: this.f.tembody.value,
            type: this.f.template.value.toString(),
            typeId: this.f.temtypeid.value,
            mapUsers: this.f.mapusers.value
        };
        this.emailtemplateservice.updateEmailTemp(this.emailTemDetails).then(function (data) {
            if (data['status']) {
                _this.showTable = true;
                _this.showEdit = false;
                _this.new = true;
                _this.error = false;
                _this.typeIdExsits = false;
                _this.success = false;
                _this.snotifyService.success('Updated Successfully', '', _this.getConfig());
                _this.submitted = false;
                _this.emailTemplateForm.reset();
                _this.emailTemplateForm = _this.formBuilder.group({
                    'temname': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    'temsub': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    'tembody': _this.defaultTemplate,
                    'template': false,
                    'temtypeid': ['', null],
                    'mapusers': _this._FB.array([]),
                });
                _this.emailtemplateservice.getEmailTempTimeStamp(new Date().getTime()).then(function (data) {
                    console.log(data['emailTemplate']);
                    if (data['status'] == 'success') {
                        _this.emailTemplates = data['emailTemplate'];
                        _this.collectionSize = data['emailTemplate'].length;
                    }
                    else {
                        _this.emailTemplates = [];
                        _this.collectionSize = 0;
                    }
                });
            }
            else {
                _this.showTable = false;
                _this.new = true;
                _this.error = true;
                _this.success = false;
                _this.showEdit = true;
            }
        });
    };
    EmailTemplateComponent.prototype.close = function () {
        this.success = false;
        this.error = false;
        this.typeIdExsits = false;
    };
    EmailTemplateComponent.prototype.checkUniqueId = function (value) {
        var _this = this;
        this.emailtemplateservice.getUniqueId(value).then(function (data) {
            if (data['status'] == 'success' && data['emailTemplate']) {
                _this.typeIdExsits = true;
            }
            else {
                _this.typeIdExsits = false;
            }
        });
    };
    EmailTemplateComponent.prototype.getConfig = function () {
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
    EmailTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email-template',
            template: __webpack_require__(/*! ./email-template.component.html */ "./src/app/email-template/email-template.component.html"),
            styles: [__webpack_require__(/*! ./email-template.component.scss */ "./src/app/email-template/email-template.component.scss")]
        }),
        __metadata("design:paramtypes", [ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _shared_data_email_template_service__WEBPACK_IMPORTED_MODULE_3__["EmailTemplateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EmailTemplateComponent);
    return EmailTemplateComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~campaign-campaign-module~email-template-email-template-module.js.map