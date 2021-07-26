(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["statistics-statistics-module"],{

/***/ "./src/app/statistics/statistics-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/statistics/statistics-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: StatisticsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsRoutingModule", function() { return StatisticsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _statistics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statistics.component */ "./src/app/statistics/statistics.component.ts");
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
        component: _statistics_component__WEBPACK_IMPORTED_MODULE_2__["StatisticsComponent"],
        data: {
            title: 'Statistics'
        },
    }
];
var StatisticsRoutingModule = /** @class */ (function () {
    function StatisticsRoutingModule() {
    }
    StatisticsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], StatisticsRoutingModule);
    return StatisticsRoutingModule;
}());



/***/ }),

/***/ "./src/app/statistics/statistics.component.html":
/*!******************************************************!*\
  !*** ./src/app/statistics/statistics.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<!--Tabset Starts-->\r\n\t<div class=\"col-md-12 col-lg-12\">\r\n\t\t<ngb-tabset>\r\n\t\t\t<ngb-tab title=\"Overview\">\r\n\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-6 col-12\">\r\n\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"px-3 py-3\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body text-left align-self-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"icon-envelope-open info font-large-2 float-left\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body text-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3>{{openCount}}</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Opened</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-6 col-12\">\r\n\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"px-3 py-3\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body text-left align-self-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"icon-link warning font-large-2 float-left\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body text-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3>{{clickCount}}</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Clicked</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-6 col-12\">\r\n\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"px-3 py-3\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body text-left align-self-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"icon-envelope success font-large-2 float-left\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body text-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3>{{totalSent - openCount }}</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Unopened</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xl-6 col-lg-12 col-sm-12\">\r\n\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-header pb-0\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-title-wrap bar-primary\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Report Detail</h4>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t\t\t\t\t<br/><br/>\r\n\t\t\t\t\t\t\t\t\t\t<b>Subject</b>: {{subject}}<br/>\r\n\t\t\t\t\t\t\t\t\t\t<b>Sent To</b>: {{list}}<br/>\r\n\t\t\t\t\t\t\t\t\t\t<b>Total Recipients</b>: {{numberUsers}}<br/><br/>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!-- <div class=\"col col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card mb-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<b>Message</b>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xl-6 col-lg-6 col-sm-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"messageTemplate\" style=\"height: 150px;overflow-y: scroll;overflow-x: hidden;\" disabled=\"true\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-xl-6 col-lg-12\">\r\n\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-header pb-0\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-title-wrap bar-primary\">\r\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Sends <span class=\"smallContent\">Last sent on </span></h4>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card gradient-mint\">\r\n\t\t\t\t\t\t\t\t\t\t\t        <div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t          <div class=\"px-3 py-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t            <div class=\"media\">\r\n\t\t\t\t\t\t\t\t\t\t\t              <div class=\"align-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t                <i class=\"fas fa-check-double font-large-2 text-white\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t              </div>\r\n\t\t\t\t\t\t\t\t\t\t\t              <div class=\"media-body text-white text-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t                <h3 class=\"text-white\">{{totalSentPerc | number : '1.0-2'}}%</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t                <span>Delivered</span>\r\n\t\t\t\t\t\t\t\t\t\t\t              </div>\r\n\t\t\t\t\t\t\t\t\t\t\t            </div>\r\n\t\t\t\t\t\t\t\t\t\t\t          </div>\r\n\t\t\t\t\t\t\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t\t\t\t\t\t    </div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6 col-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card gradient-red-pink\">\r\n\t\t\t\t\t\t\t\t\t\t\t        <div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t          <div class=\"px-3 py-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t            <div class=\"media\">\r\n\t\t\t\t\t\t\t\t\t\t\t              <div class=\"align-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t              \t<i class=\"fas fa-exclamation-triangle font-large-2 text-white\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t              </div>\r\n\t\t\t\t\t\t\t\t\t\t\t              <div class=\"media-body text-white text-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t                <h3 class=\"text-white\">{{notSentPerc | number : '1.0-2'}}%</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t                <span>Bounced</span>\r\n\t\t\t\t\t\t\t\t\t\t\t              </div>\r\n\t\t\t\t\t\t\t\t\t\t\t            </div>\r\n\t\t\t\t\t\t\t\t\t\t\t          </div>\r\n\t\t\t\t\t\t\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t\t\t\t\t\t    </div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t        <div class=\"card-header\">\r\n\t\t\t\t          <div class=\"card-title-wrap bar-primary\">\r\n\t\t\t\t            <h4 class=\"card-title\">Timeline Graph</h4>\r\n\t\t\t\t          </div>\r\n\t\t\t\t        </div>\r\n\t\t\t\t        <div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t<lib-highcharts-angular [Highcharts]=\"Highcharts\" [options]=\"chartOptions\" style=\"width: 100%; height: 400px; display: block;\"></lib-highcharts-angular>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t        <div class=\"card-header\">\r\n\t\t\t\t\t\t          <div class=\"card-title-wrap bar-primary\">\r\n\t\t\t\t\t\t            <h4 class=\"card-title\">Links</h4>\r\n\t\t\t\t\t\t          </div>\r\n\t\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t        <div class=\"card-body\">\r\n\t\t\t\t\t\t          \t<div class=\"card-block\">\r\n\t\t\t\t\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let link of links\">\r\n                  \t\t\t\t<td *ngIf=\"(link.clickCount) != 0 && (link.link != null && link.link != '')\">\r\n                      \t\t\t\t{{link.link}}\r\n                  \t\t\t\t</td>\r\n                  \t\t\t\t<td style=\"width: 100%;\" *ngIf=\"(numberUsers - link.clickCount) != 0 && (link.link != null && link.link != '')\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ngb-progressbar type=\"info\" [value]=\"(link.clickCount / numberUsers) * 100\" [striped]=\"true\" [animated]=\"true\" class=\"progress-bar-md\"></ngb-progressbar> {{link.clickCount}} of {{numberUsers}}\r\n                  \t\t\t\t</td>\r\n                  \t\t\t\t<td style=\"width: 100%;\" *ngIf=\"(numberUsers - link.clickCount) == 0 && (link.link != null && link.link != '')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ngb-progressbar type=\"success\" [value]=\"100\" [striped]=\"true\" class=\"progress-bar-md\"></ngb-progressbar>{{link.clickCount}} of {{numberUsers}}\r\n                  \t\t\t\t</td>\r\n              \t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t            \t</table>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-title-wrap bar-primary\">\r\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Domains</h4>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let domain of domains\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"(domain.count) != 0 && (domain.domains != null && domain.domains != '')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{domain.domains}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"width: 100%;\" *ngIf=\"(domain.count) != 0 && (domain.domains != null && domain.domains != '')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ngb-progressbar type=\"success\" [value]=\"(domain.count / numberUsers) * 100\" [striped]=\"true\" class=\"progress-bar-md\"></ngb-progressbar> {{domain.count}} of {{numberUsers}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!-- <div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-title-wrap bar-warning\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"card-title mb-0\">Sales Analysis</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"line-area6\" class=\"height-350 lineArea6 lineArea6Shadow\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <x-chartist [data]=\"lineArea6.data\" [type]=\"lineArea6.type\" [options]=\"lineArea6.options\" [responsiveOptions]=\"lineArea6.responsiveOptions\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[events]=\"lineArea6.events\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</x-chartist>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t</ng-template>\r\n\t\t\t</ngb-tab>\r\n\t\t\t<!-- <ngb-tab title=\"Mail Client\">\r\n\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\tMail Clients\r\n\t\t\t\t</ng-template>\r\n\t\t\t</ngb-tab> -->\r\n\t\t\t<ngb-tab title=\"Link\">\r\n\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t        <div class=\"card-header\">\r\n\t\t\t\t          <div class=\"card-title-wrap bar-primary\">\r\n\t\t\t\t            <h4 class=\"card-title\">Links</h4>\r\n\t\t\t\t          </div>\r\n\t\t\t\t        </div>\r\n\t\t\t\t        <div class=\"card-body\">\r\n\t\t\t\t          \t<div class=\"card-block\">\r\n\t\t\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let link of links\">\r\n \t\t\t\t\t\t\t\t\t\t\t <td *ngIf=\"(link.clickCount) != 0 && (link.link != null && link.link != '')\">\r\n \t\t\t\t\t\t\t\t\t\t\t\t\t {{link.link}}\r\n \t\t\t\t\t\t\t\t\t\t\t </td>\r\n\t\t\t\t\t\t\t\t\t\t\t <td style=\"width: 100%;\" *ngIf=\"(numberUsers - link.clickCount) != 0 && (link.link != null && link.link != '')\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ngb-progressbar type=\"info\" [value]=\"(link.clickCount / numberUsers) * 100\" [striped]=\"true\" [animated]=\"true\" class=\"progress-bar-md\"></ngb-progressbar> {{link.clickCount}} of {{numberUsers}}\r\n                  \t\t\t\t\t\t\t </td>\r\n\t\t\t\t\t\t\t\t\t\t\t <td style=\"width: 100%;\" *ngIf=\"(numberUsers - link.clickCount) == 0 && (link.link != null && link.link != '')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ngb-progressbar type=\"success\" [value]=\"100\" [striped]=\"true\" class=\"progress-bar-md\"></ngb-progressbar>{{link.clickCount}} of {{numberUsers}}\r\n                  \t\t\t\t\t\t\t </td>\r\n \t\t\t\t\t\t\t\t\t\t </tr>\r\n\t\t\t\t\t\t\t\t\t</tbody>\r\n\t            \t\t\t\t</table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</ngb-tab>\r\n\t\t\t<ngb-tab title=\"Domain\">\r\n\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t<div class=\"card-title-wrap bar-primary\">\r\n\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Domains</h4>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let domain of domains\">\r\n\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"(domain.count) != 0 && (domain.domains != null && domain.domains != '')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{domain.domains}}\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td style=\"width: 100%;\" *ngIf=\"(domain.count) != 0 && (domain.domains != null && domain.domains != '')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ngb-progressbar type=\"success\" [value]=\"(domain.count / numberUsers) * 100\" [striped]=\"true\" class=\"progress-bar-md\"></ngb-progressbar> {{domain.count}} of {{numberUsers}}\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</ngb-tab>\r\n\t\t\t\t<ngb-tab title=\"Activity\">\r\n\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t\t\t<div class=\"card-title-wrap bar-success\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-info btn-raised\" (click)=\"openSubscriberList()\" style=\"margin-right: 14px;\">Opens</button>\r\n\t\t    \t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-raised\" (click)=\"clickSubscriberList()\" style=\"margin-right: 14px;\">Clicks</button>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-raised\" (click)=\"unSubscriberList()\" style=\"margin-right: 14px;\">Unsubscribers</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"card-body\" *ngIf=\"openCountTable\">\r\n\t\t\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t\t\t<table class=\"table table-responsive-sm\">\r\n\t\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>First Name</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Last Name</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Email</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>DateTime</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t<tbody >\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let data of openSubscribers\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{data.firstName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{data.lastName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{data.email}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{data.dateTime}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"card-body\" *ngIf=\"clickCountTable\">\r\n\t\t\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t\t\t<table class=\"table table-responsive-sm\">\r\n\t\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LinkCount</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Link</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Name</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let data of clickSubscribers\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{data.linkCount}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{data.link}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{data.name}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"card-body\" *ngIf=\"unsubscriberTable\">\r\n\t\t\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t\t\t<table class=\"table table-responsive-sm\">\r\n\t\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>FirstName</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>LastName</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Email</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>UnsubscribeDate</th>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let data of campaignUnsubscribers\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{data.firstName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{data.lastName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{data.email}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{data.unsubscribe_date}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</ngb-tab>\r\n\t\t</ngb-tabset>\r\n\t</div>\r\n\t<!--Tabset Ends-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/statistics/statistics.component.scss":
/*!******************************************************!*\
  !*** ./src/app/statistics/statistics.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/statistics/statistics.component.ts":
/*!****************************************************!*\
  !*** ./src/app/statistics/statistics.component.ts ***!
  \****************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_data_statistics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/data/statistics.service */ "./src/app/shared/data/statistics.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent(statisticsService, route, router) {
        var _this = this;
        this.statisticsService = statisticsService;
        this.route = route;
        this.router = router;
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.openCountTable = true;
        this.route.queryParams.subscribe(function (params) {
            _this.newsletterId = window.atob(params['id']).split("$")[0];
            //this.newsletterId = window.atob(this.newsletterId);//.split("$")[0];
            _this.statisticsService.gettimeline(_this.newsletterId).then(function (data) {
                if (data['status']) {
                    debugger;
                    //console.log(data['reports']);
                    var opencount = [];
                    var clickcount = [];
                    var graphdata = [];
                    var graphlabels = [];
                    for (var i = 0; i < data['reports']['open'].length; i++) {
                        opencount.push(data['reports']['open'][i]['opencount']);
                        graphlabels.push(data['reports']['open'][i]['hr']);
                    }
                    opencount.push(1);
                    for (var i = 0; i < data['reports']['click'].length; i++) {
                        clickcount.push(data['reports']['click'][i]['clickcount']);
                        graphlabels.push(data['reports']['open'][i]['hr']);
                    }
                    clickcount.push(6);
                    graphdata.push({ data: opencount, label: 'Opened' }, { data: clickcount, label: 'Clicked' });
                    //console.log(graphdata);
                    _this.chartData = graphdata;
                    console.log(_this.chartData);
                    console.log(typeof (_this.chartData));
                    _this.chartLabels = graphlabels;
                }
            }, function (error) {
            });
        });
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.statisticsService.getReportById(this.newsletterId).then(function (data) {
            if (data['status']) {
                //document.getElementById('messageTemplate').innerHTML = JSON.parse(data['reports'][0]['message']);
                _this.newsletterDetail = JSON.parse(data['reports'][0]['message']);
                _this.newsletterDate = data['reports'][0]['date'];
                _this.subject = data['reports'][0]['subject'];
                _this.list = data['reports'][0]['list'];
                _this.totalSent = data['reports'][0]['totalSent'];
                _this.notSent = data['reports'][0]['notSent'];
                _this.numberUsers = data['reports'][0]['numberUsers'];
                _this.sent = data['reports'][0]['numberUsers'] - data['reports'][0]['notSent'];
                _this.totalSentPerc = ((data['reports'][0]['totalSent'] / data['reports'][0]['numberUsers']) * 100);
                _this.notSentPerc = ((data['reports'][0]['notSent'] / data['reports'][0]['numberUsers']) * 100);
                _this.clickCount = data['reports'][0]['clickCount'];
                console.log(data['reports']);
                if (_this.newsletterDate != '') {
                    var sendDate = _this.newsletterDate.split('-');
                    var month = new Date(_this.newsletterDate).getUTCMonth();
                    _this.statisticsService.getnormaltimeline(_this.newsletterId).then(function (data) {
                        if (data['status']) {
                            var openRates = data['reports']['open'];
                            var openData = [];
                            for (var i = 0; i < openRates.length; i++) {
                                if (openRates[i].hasOwnProperty('opencount')) {
                                    openData.push([openRates[i].hr, parseInt(openRates[i].opencount)]);
                                }
                                else {
                                    openData.push(["00:00", 0]);
                                }
                            }
                            var clickRates = data['reports']['click'];
                            var clickData = [];
                            for (var i = 0; i < clickRates.length; i++) {
                                if (clickRates[i].hasOwnProperty('clickcount')) {
                                    clickData.push([clickRates[i].hr, parseInt(clickRates[i].clickcount)]);
                                }
                                else {
                                    clickData.push(["00:00", 0]);
                                }
                            }
                            var deliveredData = [];
                            deliveredData.push([data['reports']['delivered'][0]['hr'], parseInt(data['reports']['delivered'][0]['deliveredCount'])]);
                            var bouncedData = [];
                            bouncedData.push([data['reports']['delivered'][0]['hr'], parseInt(data['reports']['delivered'][0]['bouncedCount'])]);
                            highcharts__WEBPACK_IMPORTED_MODULE_2__["setOptions"]({
                                time: {
                                    timezoneOffset: parseInt("10") * 60
                                }
                            });
                            _this.chartOptions = {
                                title: {
                                    text: 'Newsletter Overview'
                                },
                                chart: {
                                    type: 'spline'
                                },
                                xAxis: {
                                    type: 'datetime'
                                },
                                series: [{
                                        data: openData,
                                        pointInterval: 10000 * 60,
                                        name: 'Open Count'
                                    },
                                    {
                                        data: clickData,
                                        pointInterval: 10000 * 60,
                                        name: 'Click Count'
                                    },
                                    {
                                        data: deliveredData,
                                        pointInterval: 10000 * 60,
                                        name: 'Delivered Count'
                                    },
                                    {
                                        data: bouncedData,
                                        pointInterval: 10000 * 60,
                                        name: 'Bounced Count'
                                    }]
                            };
                        }
                    });
                }
            }
        }, function (error) {
        });
        this.statisticsService.getclickCounts(this.newsletterId).then(function (data) {
            if (data['status'] = 'success') {
                _this.links = data['reports'];
                _this.openCount = data['reports'][0]['openCount'];
                if (_this.openCount > 0) {
                    _this.openRate = (_this.openCount / (_this.totalSent - _this.notSent)) * 100;
                }
            }
        }, function (error) {
        });
        this.statisticsService.getEmailDomain(this.newsletterId).then(function (data) {
            if (data['status'] = 'success') {
                _this.domains = data['reports'];
                console.log(_this.domains);
            }
        }, function (error) {
        });
        this.statisticsService.getOpenSubscriberList(this.newsletterId).then(function (data) {
            if (data['status'] = 'success') {
                _this.openSubscribers = data['reports'];
            }
        }, function (error) {
        });
        this.statisticsService.getClickSubscriberList(this.newsletterId).then(function (data) {
            if (data['status'] = 'success') {
                _this.clickSubscribers = data['reports'];
            }
        }, function (error) {
        });
        this.statisticsService.getUnSubscriberList(this.newsletterId).then(function (data) {
            if (data['status'] = 'success') {
                _this.campaignUnsubscribers = data['reports'];
            }
        }, function (error) {
        });
    };
    StatisticsComponent.prototype.openSubscriberList = function () {
        this.clickCountTable = false;
        this.unsubscriberTable = false;
        this.openCountTable = true;
    };
    StatisticsComponent.prototype.clickSubscriberList = function () {
        this.clickCountTable = true;
        this.openCountTable = false;
        this.unsubscriberTable = false;
    };
    StatisticsComponent.prototype.unSubscriberList = function () {
        this.unsubscriberTable = true;
        this.clickCountTable = false;
        this.openCountTable = false;
    };
    StatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statistics',
            template: __webpack_require__(/*! ./statistics.component.html */ "./src/app/statistics/statistics.component.html"),
            styles: [__webpack_require__(/*! ./statistics.component.scss */ "./src/app/statistics/statistics.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_data_statistics_service__WEBPACK_IMPORTED_MODULE_3__["StatisticsService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/app/statistics/statistics.module.ts":
/*!*************************************************!*\
  !*** ./src/app/statistics/statistics.module.ts ***!
  \*************************************************/
/*! exports provided: StatisticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsModule", function() { return StatisticsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/dist/ng-chartist.js");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_chartist__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _statistics_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./statistics-routing.module */ "./src/app/statistics/statistics-routing.module.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/directives/match-height.directive */ "./src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var _statistics_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./statistics.component */ "./src/app/statistics/statistics.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_highcharts_chart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-highcharts-chart */ "./node_modules/angular-highcharts-chart/fesm5/angular-highcharts-chart.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var StatisticsModule = /** @class */ (function () {
    function StatisticsModule() {
    }
    StatisticsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _statistics_routing_module__WEBPACK_IMPORTED_MODULE_4__["StatisticsRoutingModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"],
                ng_chartist__WEBPACK_IMPORTED_MODULE_3__["ChartistModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_7__["MatchHeightModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["NgxDatatableModule"],
                angular_highcharts_chart__WEBPACK_IMPORTED_MODULE_10__["AngularHighchartsChartModule"]
            ],
            declarations: [
                _statistics_component__WEBPACK_IMPORTED_MODULE_8__["StatisticsComponent"],
            ]
        })
    ], StatisticsModule);
    return StatisticsModule;
}());



/***/ })

}]);
//# sourceMappingURL=statistics-statistics-module.js.map