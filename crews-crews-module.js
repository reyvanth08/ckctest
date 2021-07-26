(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crews-crews-module"],{

/***/ "./src/app/crews/crews-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/crews/crews-routing.module.ts ***!
  \***********************************************/
/*! exports provided: CrewsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrewsRoutingModule", function() { return CrewsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _crews_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crews.component */ "./src/app/crews/crews.component.ts");
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
        component: _crews_component__WEBPACK_IMPORTED_MODULE_2__["CrewsComponent"],
        data: {
            title: 'Statistics'
        },
    }
];
var CrewsRoutingModule = /** @class */ (function () {
    function CrewsRoutingModule() {
    }
    CrewsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], CrewsRoutingModule);
    return CrewsRoutingModule;
}());



/***/ }),

/***/ "./src/app/crews/crews.component.html":
/*!********************************************!*\
  !*** ./src/app/crews/crews.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"card-deck\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"white text-center p-4\">\r\n          <h4 class=\"content-header\">Get started with  in the next 5 minutes</h4>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-4\">\r\n      <!-- <div class=\"card-deck\"> -->\r\n        <!-- <div class=\"card\"> -->\r\n          <!-- <img class=\"card-img-top\" src=\"assets/img/photos/3.jpeg\" alt=\"Card image cap\"> -->\r\n          <!-- <div class=\"card-body\"> -->\r\n            <!-- <div class=\"card-block\"> -->\r\n              <h5>1.Add code to your website</h5>\r\n              <!-- <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->\r\n            <!-- </div> -->\r\n          <!-- </div> -->\r\n        </div>\r\n\r\n        <div class=\"col-4\">\r\n          <!-- <img class=\"card-img-top\" src=\"assets/img/photos/14.jpeg\" alt=\"Card image cap\"> -->\r\n          <!-- <div class=\"card-body\"> -->\r\n            <!-- <div class=\"card-block\"> -->\r\n              <h5 >2.Ask permission from your visitors to recieve  notification</h5>\r\n              <!-- <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p> -->\r\n            <!-- </div> -->\r\n          <!-- </div> -->\r\n        </div>\r\n\r\n        <div class=\"col-4\">\r\n          <!-- <img class=\"card-img-top\" src=\"assets/img/photos/17.jpeg\" alt=\"Card image cap\"> -->\r\n          <!-- <div class=\"card-body\"> -->\r\n            <!-- <div class=\"card-block\"> -->\r\n              <h5>3.Send your notification</h5>\r\n              <!-- <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p> -->\r\n            <!-- </div> -->\r\n          <!-- </div> -->\r\n        </div>\r\n      <!-- </div> -->\r\n    <!-- </div> -->\r\n  </div>\r\n      </section>\r\n\r\n      <section id=\"ngx\" class=\"mb-3\">\r\n      \t<div class=\"row\">\r\n      \t\t<div class=\"col-12\">\r\n      \t\t</div>\r\n      \t</div>\r\n      \t  <br />\r\n      <div class=\"row\">\r\n      \t<div class=\"col-sm-12\">\r\n          \t<h4 class=\"card-title\">Step 1: Install  smart code</h4>\r\n      \t\t<div class=\"card\">\r\n      \t\t\t<div class=\"card-body\">\r\n      \t\t\t\t<div class=\"col-sm-12\">\r\n      \t\t\t\t\t<div class=\"card\">\r\n      \t\t\t\t\t\t<div class=\"card-body\">\r\n      \t\t\t\t\t\t\t  <div class=\"card-block\">\r\n      \t\t\t\t\t\t\t\t\t<form [formGroup] =\"crewsForm\" novalidate>\r\n      \t\t\t\t\t\t\t\t\t<label for=\"script\">copy and paste this code before the tag on each page of your web site</label>\r\n      \t\t\t\t\t\t\t<div class=\"row\">\r\n      \t\t\t\t\t\t\t<div class=\"col-sm-12\">\r\n      \t\t\t\t\t\t\t<div class=\"form-group\">\r\n      \t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"3\" id=\"script\" formControlName=\"script\" [(ngModel)]=\"txtscript\"></textarea>\r\n      \t\t\t\t\t\t\t\t\t<small class=\"form-text text-muted danger\" *ngIf=\"!crewsForm.get('script').valid && (crewsForm.get('script').dirty || crewsForm.get('script').touched)\">This field is required!</small>\r\n      \t\t\t\t\t\t\t</div>\r\n      \t\t\t\t\t\t</div>\r\n                  <label for=\"mail\">Send to developers(s)</label>\r\n                  <div class=\"col-sm-12\">\r\n                  <div class=\"input-group\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"mail\"  formControlName=\"mail\" pattern=\"^(\\s?[^\\s,]+@[^\\s,]+\\.[^\\s,]+\\s?,)*(\\s?[^\\s,]+@[^\\s,]+\\.[^\\s,]+)$\">\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-raised btn-primary\" type=\"button\"  (click)=\"sendmail()\"   style=\"margin-right: 14px;\" [disabled]=\"!crewsForm.valid\">Send to developers</button>\r\n                    </div>\r\n                  </div>\r\n                      <small class=\"form-text text-muted danger\" *ngIf=\"!crewsForm.get('mail').valid && (crewsForm.get('mail').dirty || crewsForm.get('mail').touched)\">This field is required!</small>\r\n                </div>\r\n                <a _ngcontent-c2=\"\"  id=\"pixinventLink\">Download WordPress Plug_In</a>\r\n      \t\t\t\t\t\t\t</div>\r\n      \t\t\t\t\t\t</form>\r\n      \t\t\t\t\t\t</div>\r\n      \t\t\t\t\t\t</div>\r\n\r\n      \t\t\t\t\t</div>\r\n      \t\t\t\t</div>\r\n      \t\t\t</div></div>\r\n      \t\t</div>\r\n      \t</div>\r\n      </section>\r\n"

/***/ }),

/***/ "./src/app/crews/crews.component.scss":
/*!********************************************!*\
  !*** ./src/app/crews/crews.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZXdzL2NyZXdzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/crews/crews.component.ts":
/*!******************************************!*\
  !*** ./src/app/crews/crews.component.ts ***!
  \******************************************/
/*! exports provided: CrewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrewsComponent", function() { return CrewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable/release */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_data_crews_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/data/crews.service */ "./src/app/shared/data/crews.service.ts");
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





var CrewsComponent = /** @class */ (function () {
    function CrewsComponent(snotifyService, formBuilder, CrewsService) {
        var _this = this;
        this.snotifyService = snotifyService;
        this.formBuilder = formBuilder;
        this.CrewsService = CrewsService;
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
        this.txtscript = '';
        this.CrewsService.getDataForCrew().then(function (data) {
            console.log(data);
            if (data['status'] == 'success') {
                // this.txtscript= data['crews'][0]['title'];
                //this.txtscript='jQuery( document ).ready( function () {var isMobile = {Android: function() {return navigator.userAgent.match(/Android/i);},BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);}, Opera: function() {  return navigator.userAgent.match(/Opera Mini/i);  },Windows: function() {return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);},any: function() {  return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()) if ((document.cookie.indexOf("visited=true") == -1)) {jQuery("#click365WebPushModal").modal()}jQuery(document).on("click", "#later-btn", function(event){var expires = new Date((new Date()).valueOf() + 1);document.cookie = "visited=true,path=/,expires=" + expires.toUTCString();}) var checkRemotePermission = function (permissionData) {  "use strict" }alert("safari browser came to check permission");console.log("safari browser came to check permission");console.log(permissionData);alert("safari browser came to check permission");if (permissionData.permission === "default") {console.log("The user is making a decision");window.safari.pushNotification.requestPermission("//safaripush.click365.com.au",pushId, {},checkRemotePermission);} else if (permissionData.permission === "denied") {console.log("safari browser denier");} else if (permissionData.permission === "granted"){console.log("The user said yes, with token: " + permissionData.deviceToken);alert("The user said yes, with token: " + permissionData.deviceToken); var orgID='+ data["crews"][0]["org_id"]+';  var platformName = "Unknown";var deviceType="Desktop";var isMobile = {Android: function () {  return navigator.userAgent.match(/Android/i);},  BlackBerry: function () {return navigator.userAgent.match(/BlackBerry/i);}      iOS: function () {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},  Opera: function () {return navigator.userAgent.match(/Opera Mini/i);},  Windows: function () {return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);},  any: function () {  return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};  if (isMobile.any()) {deviceType = "Mobile";} if (navigator.appVersion.indexOf("Win") != -1) platformName = "Windows";if (navigator.appVersion.indexOf("Mac") != -1) platformName = "MacOS";if (navigator.appVersion.indexOf("X11") != -1) platformName = "UNIX";if (navigator.appVersion.indexOf("Linux") != -1) platformName = "Linux";  var request_uri = location.pathname + location.search;  var page = request_uri.replace("/", "");    var pageVisited = window.location.href;  var domainName = window.location.hostname;var queryParams = pageVisited.split("?")[1] || "";var referrer = document.referrer;  jQuery.getJSON("https://ipapi.co/json/", function (data) { var browser_info = JSON.stringify(data, null, 2);  var cityName = data["city"];var countryName = data["country_name"];var stateName = data["region"];var latitude = data["latitude"];  var longitude = data["longitude"];var dataText = "token=" + permissionData.deviceToken + "&page=" + pageVisited + "&browser_info=Safari" + "&referrer=" + referrer + "&city=" + cityName + "&state=" + stateName + "&country=" + countryName + "&latitude=" + latitude + "&longitude=" + longitude + "&platform=" + platformName + "&queryParams=" + queryParams + "&orgID=" + orgID + "&deviceType=" + deviceType;jQuery.ajax({type: "POST",url: "https://cockburncrc.com.au/members/usermanagement/saveStats.php",     data: dataText,  success: function () {  }    });  });  var expires = new Date((new Date()).valueOf() + 1000);document.cookie = "visited=true,path=/,expires=" + expires.toUTCString();console.log(permissionData.deviceToken);}};jQuery(document).on("click", "#subscribe-btn", function (event){var browserName = ""; var orgID='+ data["crews"][0]["org_id"]+'; var platformName = "Unknown";var pageVisited = window.location.href;var domainName = window.location.hostname;var queryParams = pageVisited.split("?")[1] || "";var deviceType = "Desktop";if (navigator.appVersion.indexOf("Win") != -1) platformName = "Windows";if (navigator.appVersion.indexOf("Mac") != -1) platformName = "MacOS";if (navigator.appVersion.indexOf("X11") != -1) platformName = "UNIX";if (navigator.appVersion.indexOf("Linux") != -1) platformName = "Linux";var isMobile = {Android: function () {return navigator.userAgent.match(/Android/i);},BlackBerry: function () {return navigator.userAgent.match(/BlackBerry/i);},iOS: function () {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera: function () {return navigator.userAgent.match(/Opera Mini/i);},Windows: function () {return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);},any: function () {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};if (isMobile.any()) {deviceType = "Mobile";}if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) != -1) {browserName = "Opera";} else if (navigator.userAgent.indexOf("Chrome") != -1) {browserName = "Chrome";} else if (navigator.userAgent.indexOf("Safari") != -1) {browserName = "Safari";} else if (navigator.userAgent.indexOf("Firefox") != -1) {browserName = "Firefox";} else if ((navigator.userAgent.indexOf("MSIE") != -1)) //IF IE > 10{browserName = "Edge";} else {browserName = "Unknown/Other";}  if (browserName.indexOf("Safari") != -1) {console.log("safari browser");if (("safari" in window || "Safari" in window) && "pushNotification" in window.safari) {  alert("safari");var permissionData = window.safari.pushNotification.permission(pushId);checkRemotePermission(permissionData);} else {console.log("push not supported");}jQuery("#click365WebPushModal").modal("hide");  } else {jQuery("#click365WebPushModal").modal("hide");messaging.requestPermission().then(function () {console.log("I am in here");return messaging.getToken();})then(function (token) {regId=token;var request_uri = location.pathname + location.search;  var page = request_uri.replace("/", "");  var referrer = document.referrer;jQuery.getJSON("https://ipapi.co/json/", function (data) {var browser_info = JSON.stringify(data, null, 2);var cityName = data["city"];var countryName = data["country_name"];  var stateName = data["region"];  var latitude = data["latitude"];  var longitude = data["longitude"]; var dataText = "token=" + token + "&page=" + pageVisited + "&browser_info=" + browserName + "&referrer=" + referrer + "&city=" + cityName + "&state=" + stateName + "&country=" + countryName + "&latitude=" + latitude + "&longitude=" + longitude + "&platform=" + platformName + "&queryParams=" + queryParams + "&orgID=" + orgID + "&deviceType=" + deviceType;jQuery.ajax({type: "POST",  url: "https://cockburncrc.com.au/members/usermanagement/saveStats.php",   data: dataText,  success: function () {  }  });});var expires = new Date((new Date()).valueOf() + 1000);document.cookie = "visited=true,path=/,expires=" + expires.toUTCString();console.log(token);}).catch(function (err) {console.log("there was an error" + err);var expires = new Date((new Date()).valueOf() + 1);document.cookie = "visited=true,path=/,expires=" + expires.toUTCString();});}});});​<div id="click365WebPushModal" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-body"><div class="row" style="margin-top:10px"><div class="col-lg-12"><div class="col-lg-2" style="padding-top:5px"><img src='+ data["crews"][0]["image_url"]+' class="img-responsive" /></div><div class="col-lg-8" style="padding-top:15px"><p>'+ data["crews"][0]["title"]+'</p><p>'+ data["crews"][0]["description"]+'</p></div></div></div><div class="row" style="margin-top: 3%; text-align: right;margin-right: 22px !important;"><div class="col-lg-12"><button type="button" id="later-btn" class="btn btn-default" style="font-family:"DINPro-Regular"; min-width:100px;max-width:100px;border-color:rgb(204, 204, 204);"data-dismiss="modal">'+ data["crews"][0]["disallow_text"]+'</button> <button type="button" id="subscribe-btn" class="btn btn-primary" style="padding-bottom: 6px!important;padding-top: 6px!important;background: #00c33d !important;color: #fff;border: 1px solid #059833 !important;box-shadow: 0px 0px #059833 inset !important;min-width: 100px;max-width: 100px;border-radius: 0;">'+ data["crews"][0]["allow_text"]+'</button></div></div></div></div></div></div>';
                _this.txtscript = '<script src="https://click365.com.au/media365push.js" id="click365WebPushScript" data-oid=' + localStorage.getItem('oi') + ' data-pid="web.com.click365.carferret"></script>';
            }
        });
    }
    CrewsComponent.prototype.ngOnInit = function () {
        this.crewsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'script': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            'mail': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
        /*  this.crewsForm = new FormGroup({
            'titles': new FormControl(null,[Validators.required]),
            'title': new FormControl(null,[Validators.required]),
            'description': new FormControl(null,[Validators.required]),
            'disallow_text': new FormControl(null,[Validators.required]),
            'allow_text': new FormControl(null,[Validators.required]),
            'mobile_description': new FormControl(null,[Validators.required]),
            // 'mobile_opt': new FormControl(null,[Validators.required]),
            'image_url': new FormControl(null, null)
          })*/
    };
    CrewsComponent.prototype.sendmail = function () {
        var email = {
            script: this.crewsForm.controls['script'].value,
            mail: this.crewsForm.controls['mail'].value
        };
        this.CrewsService.sendmail(email).then(function (data) {
            console.log(data);
            if (data['status'] == 'success') {
            }
        });
        this.snotifyService.success('Send Mail Successfully', '', this.getConfig());
        this.crewsForm.reset();
    };
    CrewsComponent.prototype.getdata = function () {
        // let data={
        //   titles:this.crewsForm.controls['titles'].value,
        //   title:this.crewsForm.controls['title'].value,
        //   description:this.crewsForm.controls['description'].value,
        //   disallow_text:this.crewsForm.controls['disallow_text'].value,
        //   allow_text:this.crewsForm.controls['allow_text'].value,
        //   mobile_description:this.crewsForm.controls['mobile_description'].value,
        //   // mobile_opt:this.crewsForm.controls['mobile_opt'].value,
        //   image_url:this.crewsForm.controls['image_url'].value
        // }
        this.CrewsService.getDataForCrew().then(function (data) {
            console.log(data);
            if (data['status'] == 'success') {
            }
        });
    };
    CrewsComponent.prototype.getConfig = function () {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"])
    ], CrewsComponent.prototype, "table", void 0);
    CrewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crews',
            template: __webpack_require__(/*! ./crews.component.html */ "./src/app/crews/crews.component.html"),
            styles: [__webpack_require__(/*! ./crews.component.scss */ "./src/app/crews/crews.component.scss")]
        }),
        __metadata("design:paramtypes", [ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_data_crews_service__WEBPACK_IMPORTED_MODULE_3__["crewsService"]])
    ], CrewsComponent);
    return CrewsComponent;
}());



/***/ }),

/***/ "./src/app/crews/crews.module.ts":
/*!***************************************!*\
  !*** ./src/app/crews/crews.module.ts ***!
  \***************************************/
/*! exports provided: CrewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrewsModule", function() { return CrewsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/dist/ng-chartist.js");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_chartist__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _crews_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crews-routing.module */ "./src/app/crews/crews-routing.module.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/directives/match-height.directive */ "./src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var _crews_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crews.component */ "./src/app/crews/crews.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CrewsModule = /** @class */ (function () {
    function CrewsModule() {
    }
    CrewsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _crews_routing_module__WEBPACK_IMPORTED_MODULE_4__["CrewsRoutingModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"],
                ng_chartist__WEBPACK_IMPORTED_MODULE_3__["ChartistModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_7__["MatchHeightModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["NgxDatatableModule"]
            ],
            declarations: [
                _crews_component__WEBPACK_IMPORTED_MODULE_8__["CrewsComponent"],
            ]
        })
    ], CrewsModule);
    return CrewsModule;
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
//# sourceMappingURL=crews-crews-module.js.map