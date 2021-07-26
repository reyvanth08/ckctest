(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~safaripushconfig-safaripushconfig-module~web-dashboard-web-dashboard-module"],{

/***/ "./src/app/safaripushconfig/safaripushconfig.component.html":
/*!******************************************************************!*\
  !*** ./src/app/safaripushconfig/safaripushconfig.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"safariForm\">\r\n  <section id=\"ngx\" class=\"mb-3\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n          <!-- <div class=\"content-header\">SafariPushConfig</div> -->\r\n    </div>\r\n  </div>\r\n    <br />\r\n<div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n              <div class=\"card-block\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                      <div class=\"custom-file center-block d-block\">\r\n                        <input type=\"file\" accept=\".p12\" class=\"custom-file-input\" id=\"upload\" formControlName=\"upload\" (change)=\"uploadFiles($event.target.files,'upload','p12')\">\r\n                        <label class=\"custom-file-label\" for=\"upload\" #uploadLabel>Upload p12 file</label>\r\n                       </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <div class=\"custom-file center-block d-block\">\r\n                        <input type=\"file\" accept=\".pem\"  class=\"custom-file-input\" id=\"upload1\" formControlName=\"upload1\" (change)=\"uploadFiles($event.target.files,'upload1','pem')\">\r\n                        <label class=\"custom-file-label\" for=\"upload1\" #uploadLabel1> Upload Apple WWDRCA file</label>\r\n                       </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <div class=\"custom-file center-block d-block\">\r\n                        <!-- <input type=\"file\" accept=\".cer\" class=\"custom-file-input\" id=\"upload2\" formControlName=\"uploadFile\" (change)=\"uploadFiles($event.target.files,'uploadFile')\">\r\n                        <label class=\"custom-file-label\" for=\"upload2\" #uploadLabel2>Upload Push Certificate</label> -->\r\n                        <input type=\"file\" accept=\".cer\" class=\"custom-file-input\" id=\"uploadFile\" formControlName=\"uploadFile\" (change)=\"uploadFiles($event.target.files,'uploadFile','cer')\">\r\n                        <label class=\"custom-file-label\" for=\"uploadFile\" #uploadLabel2>Upload Push Certificate</label>\r\n                       </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <div class=\"custom-file center-block d-block\">\r\n                        <input type=\"file\" accept=\".png\" class=\"custom-file-input\" id=\"upload3\" formControlName=\"upload3\" (change)=\"upload3($event.target.files)\">\r\n                        <label class=\"custom-file-label\" for=\"upload3\" #uploadLabel3>Upload Icon File </label>\r\n                       </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                      <label for=\"url\">Pem Password</label>\r\n                      <input type=\"password\" class=\"form-control\"  formControlName=\"pwd\" id=\"password\" name=\"pwd\">\r\n                    </div>\r\n\r\n                      <!-- <div class=\"form-group\">\r\n                        <label for=\"basicInput\">Safari Push ID</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"safari\" formControlName=\"safari\">\r\n                      </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label for=\"url\">Safari Push URL</label>\r\n                    <input type=\"text\" class=\"form-control\"  formControlName=\"push\" pattern=\"https?://.+\" id=\"url\" name=\"url\">\r\n                    </div> -->\r\n                    <div class=\"form-group\">\r\n                      <label for=\"basicInput\">Safari Push ID</label>\r\n                      <input type=\"text\" class=\"form-control\" id=\"safari\" formControlName=\"safari\">\r\n                      <!-- <input type=\"text\" class=\"form-control\" name=\"safari\" id=\"safariID\" formControlName=\"safari\"> -->\r\n                      <small class=\"form-text text-muted green\">Website Push ID, as specified in your developer account.</small>\r\n                    </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"url\">URL Format String</label>\r\n                  <!-- <input type=\"text\" class=\"form-control\"  formControlName=\"push\" pattern=\"https?://.+\" id=\"url\" name=\"url\"> -->\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"url\" name=\"url\" id=\"url\" formControlName=\"push\" required>\r\n                  <small class=\"form-text text-muted green\">URL to go to when the notification is clicked. Use %@ as a placeholder for arguments. Ex. https://domain.com.au/%@/</small>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label for=\"url\">Allowed Domains</label>\r\n                    <input type=\"text\" class=\"form-control\"  formControlName=\"domains\" id=\"allowedDomains\" name=\"allowedDomains\">\r\n                    <small class=\"form-text text-muted green\">An array of websites that are allowed. Ex. [\"https://domain.com.au\",\"https://safaripush.click365.com.au\",\"https://www.domain.com.au\"]</small>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label for=\"url\">Authentication Token</label>\r\n                    <input type=\"text\" class=\"form-control\"  formControlName=\"token\" id=\"authenticationToken\" name=\"authenticationToken\">\r\n                  </div>\r\n\r\n                  <div style=\"text-align: left;\">\r\n              \t\t\t<button type=\"submit\" class=\"btn btn-success btn-raised\" id=\"save\" [disabled]=\"!safariForm.valid || !isURL()\" (click)=\"save()\">{{action}}</button>\r\n              \t\t</div>\r\n              </div>\r\n              </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n    </div>\r\n</div>\r\n      </section>\r\n      </form>\r\n"

/***/ }),

/***/ "./src/app/safaripushconfig/safaripushconfig.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/safaripushconfig/safaripushconfig.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhZmFyaXB1c2hjb25maWcvc2FmYXJpcHVzaGNvbmZpZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/safaripushconfig/safaripushconfig.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/safaripushconfig/safaripushconfig.component.ts ***!
  \****************************************************************/
/*! exports provided: SafaripushconfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafaripushconfigComponent", function() { return SafaripushconfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_data_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data/settings.service */ "./src/app/shared/data/settings.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SafaripushconfigComponent = /** @class */ (function () {
    function SafaripushconfigComponent(_FB, settingsservice, http) {
        this._FB = _FB;
        this.settingsservice = settingsservice;
        this.http = http;
        //formData: FormGroup;
        this.files = [];
        this.loader = false;
        this.serve = '';
        this.file = '';
        this.apple = '';
        this.p12File = '';
        this.wwdrcaFile = '';
        this.pushCertificate = '';
        this.icon = '';
        this.safariId = '';
        this.URL = '';
        this.form = {
            'image': '',
        };
        this.action = 'Add';
    }
    SafaripushconfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.safariForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'upload': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'upload1': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'uploadFile': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'upload3': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'safari': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'push': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'token': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'pwd': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'domains': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
        this.settingsservice.getSafariConfig().then(function (data) {
            // alert(JSON.stringify(data));
            console.log('water - ' + JSON.stringify(data));
            if (data['data'].length > 0) {
                _this.action = 'Update';
                var pushid = data['data'][0]['safari_push_id'];
                document.getElementById('safari').value = pushid;
                _this.uploadLabel.nativeElement.innerHTML = data['data'][0]['p12_file'];
                _this.uploadLabel1.nativeElement.innerHTML = data['data'][0]['wwdrca_file'];
                _this.uploadLabel2.nativeElement.innerHTML = data['data'][0]['push_certificate'];
                _this.uploadLabel3.nativeElement.innerHTML = data['data'][0]['icon_file'];
                document.getElementById('allowedDomains').value = data['data'][0]['allowedDomains'];
                document.getElementById('password').value = data['data'][0]['password'];
                document.getElementById('url').value = data['data'][0]['safari_push_url'];
                document.getElementById('authenticationToken').value = data['data'][0]['token'];
            }
        });
        // this.settingsservice.getSettings().then(data => {
        //    console.log('data - ' + data['settings'][0]['sitedir']);
        //    if(data['status'] == 'success'){
        //      this.sitedir = data['settings'][0]['sitedir'];
        //    }
        // });
    };
    /*upload(files: File[]){
    this.uploadLabel.nativeElement.innerHTML = files[0].name;
      this.loader = true;
      this.url = 'https://cockburncrc.com.au/members/usermanagement/safaripushtemp/'+files[0].name;
      console.log('dxcvdx - ' + this.url);
      this.uploadFileProgress(files);
    }
  
    uploadFileProgress(files: File[]){
      console.log('formData - ' + files);
      var formData = new FormData();
      console.log('formData - ' + formData);
      Array.from(files).forEach(f => formData.append('file',f));
      this.http.post('https://cockburncrc.com.au/members/usermanagement/uploadSafariFile.php?fld=safaripushtemp', formData)
        .subscribe(event => {
          this.loader = false;
      });
    }
  
    upload1(files: File[]){
    this.uploadLabel1.nativeElement.innerHTML = files[0].name;
      this.loader = true;
      this.url = 'https://cockburncrc.com.au/members/usermanagement/safaripushtemp/'+files[0].name;
      console.log('dxcvdx - ' + this.url);
      this.GetUploadFileProgress(files);
    }
  
    GetUploadFileProgress(files: File[]){
      console.log('formData - ' + files);
      var formData = new FormData();
      console.log('formData - ' + formData);
      Array.from(files).forEach(f => formData.append('file',f));
      this.http.post('https://cockburncrc.com.au/members/usermanagement/uploadSafariFile.php?fld=safaripushtemp', formData)
        .subscribe(event => {
          this.loader = false;
      });
    }*/
    SafaripushconfigComponent.prototype.uploadFiles = function (files, fileType, extension) {
        console.log('File - ' + fileType);
        var ext = document.getElementById(fileType).value.match(/\.([^\.]+)$/)[1];
        switch (ext) {
            case extension:
                break;
            default:
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Error!', 'Only ' + extension + ' extension is allowed', 'error');
                document.getElementById(fileType).value = '';
                return;
        }
        this.loader = true;
        if (fileType == 'upload') {
            this.uploadLabel.nativeElement.innerHTML = files[0].name;
            this.file1 = files[0].name; //'https://cockburncrc.com.au/members/usermanagement/safari_push/' + this.safariForm.controls['safari'].value + '/' + files[0].name;
            this.p12 = files;
            //this.safariForm.controls['upload'].setValue('https://cockburncrc.com.au/members/usermanagement/safaripushtemp/'+files[0].name);
        }
        if (fileType == 'upload1') {
            this.uploadLabel1.nativeElement.innerHTML = files[0].name;
            this.file2 = files[0].name; //'https://cockburncrc.com.au/members/usermanagement/safari_push/' + this.safariForm.controls['safari'].value + '/' + files[0].name;
            this.pem = files;
            //this.safariForm.controls['upload1'].setValue('https://cockburncrc.com.au/members/usermanagement/safaripushtemp/'+files[0].name);
        }
        if (fileType == 'uploadFile') {
            this.uploadLabel2.nativeElement.innerHTML = files[0].name;
            this.file3 = files[0].name; //'https://cockburncrc.com.au/members/usermanagement/safari_push/' + this.safariForm.controls['safari'].value + '/' + files[0].name;
            //this.safariForm.controls['uploadFile'].setValue('https://cockburncrc.com.au/members/usermanagement/safaripushtemp/'+files[0].name);  this.files = files;
            this.cer = files;
        }
        // this.uploadFileAndProgress(files);
    };
    SafaripushconfigComponent.prototype.uploadFileAndProgress = function (files) {
        var _this = this;
        console.log('formData - ' + files);
        var formData = new FormData();
        console.log('formData - ' + formData);
        Array.from(files).forEach(function (f) { return formData.append('file', f); });
        this.http.post('https://cockburncrc.com.au/members/usermanagement/upload_safari_push_files.php?safariId=' + this.formData.safariId, formData)
            .subscribe(function (event) {
            _this.loader = false;
        });
    };
    SafaripushconfigComponent.prototype.upload3 = function (files) {
        var ext = document.getElementById('upload3').value.match(/\.([^\.]+)$/)[1];
        switch (ext) {
            case 'png':
                // case 'gif':
                // case 'jpg':
                // case 'jpeg':
                // case 'tiff':
                // case 'tif':
                break;
            default:
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Error!', 'Only .png extension allowed', 'error');
                document.getElementById('upload3').value = '';
                return;
        }
        this.uploadLabel3.nativeElement.innerHTML = files[0].name;
        this.loader = true;
        this.img = files;
        this.imageIcon = files[0].name; //'https://cockburncrc.com.au/members/usermanagement/safari_push/' + this.safariForm.controls['safari'].value + '/' + files[0].name;
        //this.safariForm.controls['upload3'].setValue('https://cockburncrc.com.au/members/usermanagement/images/'+files[0].name);
        console.log('dxcvdx - ' + this.url);
        // this.uploadPushProgress(files);
    };
    SafaripushconfigComponent.prototype.uploadPushProgress = function (files) {
        var _this = this;
        var formData = new FormData();
        Array.from(files).forEach(function (f) { return formData.append('file', f); });
        this.http.post('https://cockburncrc.com.au/members/usermanagement/upload_safari_push_iconset.php?safariId=' + this.formData.safariId, formData)
            .subscribe(function (event) {
            _this.loader = false;
            if (event && event['status'] == "Sorry, your file is too large.") {
                alert('Sorry, your file is too large. Recommended Size: 192x192.');
                _this.uploadLabel3.nativeElement.innerHTML = '';
            }
        });
    };
    SafaripushconfigComponent.prototype.isURL = function () {
        if (this.url == null) {
            return false;
        }
        // Assigning the url format regular expression
        var urlPattern = "^http(s{0,1})://[a-zA-Z0-9_/\\-\\.]+\\.([A-Za-z/]{2,5})[a-zA-Z0-9_/\\&\\?\\=\\-\\.\\~\\%]*";
        return this.url.match(urlPattern);
    };
    SafaripushconfigComponent.prototype.save = function () {
        var pushid = this.safariForm.controls['safari'].value;
        this.formData = {
            safariId: pushid,
            p12File: '/home/click365com/public_html/usermanagement/safari_push/' + pushid + '/' + this.file1,
            wwdrcaFile: '/home/click365com/public_html/usermanagement/safari_push/' + pushid + '/' + this.file2,
            pushCertificate: '/home/click365com/public_html/usermanagement/safari_push/' + pushid + '/' + this.file3,
            icon: '/home/click365com/public_html/usermanagement/safari_push/' + pushid + '/' + this.imageIcon,
            URL: this.safariForm.controls['push'].value,
            allowedDomains: this.safariForm.controls['domains'].value,
            password: this.safariForm.controls['pwd'].value,
            token: this.safariForm.controls['token'].value,
            org_id: localStorage.getItem('oi') //,
            // 'file':{'tmp_name':this.img}
        };
        this.uploadPushProgress(this.img);
        this.uploadFileAndProgress(this.p12);
        this.uploadFileAndProgress(this.pem);
        this.uploadFileAndProgress(this.cer);
        this.uploadFileAndProgress(this.img);
        // this.formData.set('file',fileArray);
        // Array.from(this.p12).forEach(f => this.formData.append('file',f));
        // Array.from(this.pem).forEach(f => this.formData.append('file',f));
        // alert(JSON.stringify(this.formData));
        console.log('push-' + JSON.stringify(this.formData));
        this.settingsservice.saveSafariConfig(this.formData, this.action).then(function (data) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Success!', 'Saved Successfully', 'success');
            console.log('water - ' + JSON.stringify(data));
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('uploadLabel'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SafaripushconfigComponent.prototype, "uploadLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('uploadLabel1'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SafaripushconfigComponent.prototype, "uploadLabel1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('uploadLabel2'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SafaripushconfigComponent.prototype, "uploadLabel2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('uploadLabel3'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SafaripushconfigComponent.prototype, "uploadLabel3", void 0);
    SafaripushconfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-safaripushconfig',
            template: __webpack_require__(/*! ./safaripushconfig.component.html */ "./src/app/safaripushconfig/safaripushconfig.component.html"),
            styles: [__webpack_require__(/*! ./safaripushconfig.component.scss */ "./src/app/safaripushconfig/safaripushconfig.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _shared_data_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SafaripushconfigComponent);
    return SafaripushconfigComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~safaripushconfig-safaripushconfig-module~web-dashboard-web-dashboard-module.js.map