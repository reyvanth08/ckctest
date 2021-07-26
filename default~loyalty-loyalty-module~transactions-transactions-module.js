(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~loyalty-loyalty-module~transactions-transactions-module"],{

/***/ "./src/app/transactions/transactions.component.html":
/*!**********************************************************!*\
  !*** ./src/app/transactions/transactions.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"ngx\" class=\"mb-3\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h2 class=\"content-header\">Transaction Details</h2>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <select class=\"form-control\" [(ngModel)]=\"search.paidUser\" (change)=\"filterTableOnPaidStatus($event)\">\r\n                    <option value=''>Filter Users</option>\r\n                    <option value='Paid'>Paid</option>\r\n                    <option value='Not Paid'>Not Paid</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-5\">\r\n                <div class=\"form-group\">\r\n                  <select class=\"form-control\" [(ngModel)]=\"search.membership\" (change)=\"filterTableOnMembership($event)\">\r\n                    <option value=''>Filter Membership</option>\r\n                    <option *ngFor=\"let member of members\" value=\"{{member.id}}\">{{member.plans}} {{member.duration}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                  <button type=\"button\" class=\"btn btn-info btn-raised\" (click)=\"reset()\" style=\"margin-right: 14px;\">Reset</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <ngx-datatable #table class='material bootstrap' [rows]='dataSource' [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"20\" [loadingIndicator]=\"isLoading\">\r\n              <ngx-datatable-column name=\"Transaction Id\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  {{row.transaction_id}}\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Name\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  {{row.name}}\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Email\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  {{row.email}}\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Membership plan\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  {{row.plans}}\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Membership plan Amount\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  ${{row.amount}}\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Renewal Due Date\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  {{row.renewal_date | date :'yyyy-MM-dd'}}\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Renewed\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  {{row.renewed_status}}\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n            </ngx-datatable>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/transactions/transactions.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/transactions/transactions.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cron-select-wrap {\n  display: inline-block; }\n  .cron-select-wrap .cron-select {\n    width: 150px;\n    height: 34px;\n    padding: 6px 12px;\n    margin: 0;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s; }\n  .cron-select-wrap select[multiple] {\n    height: 140px; }\n  .select-options {\n  display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbnNhY3Rpb25zL0M6XFxVc2Vyc1xcTVJUMjBcXERlc2t0b3BcXFVNXFx1c2VybWFuYWdlbWVudC9zcmNcXGFwcFxcdHJhbnNhY3Rpb25zXFx0cmFuc2FjdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBcUIsRUF1QnhCO0VBeEJEO0lBSVEsYUFBWTtJQUNaLGFBQVk7SUFDWixrQkFBaUI7SUFDakIsVUFBUTtJQUNSLGdCQUFlO0lBQ2Ysd0JBQXVCO0lBQ3ZCLFlBQVc7SUFDWCx1QkFBc0I7SUFDdEIsdUJBQXNCO0lBQ3RCLHVCQUFzQjtJQUN0QixtQkFBa0I7SUFFbEIsaURBQTRDO0lBRzVDLHNFQUFxRSxFQUN4RTtFQXBCTDtJQXNCUSxjQUFhLEVBQ2hCO0VBRUw7RUFDQyxzQkFBb0IsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyb24tc2VsZWN0LXdyYXAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgIC5jcm9uLXNlbGVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMzRweDtcclxuICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XHJcbiAgICAgICAgY29sb3I6ICM1NTU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgLjE1cywtd2Via2l0LWJveC1zaGFkb3cgZWFzZS1pbi1vdXQgLjE1cztcclxuICAgICAgICAtby10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgLjE1cyxib3gtc2hhZG93IGVhc2UtaW4tb3V0IC4xNXM7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IC4xNXMsYm94LXNoYWRvdyBlYXNlLWluLW91dCAuMTVzO1xyXG4gICAgfVxyXG4gICAgc2VsZWN0W211bHRpcGxlXXtcclxuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgfVxyXG59XHJcbi5zZWxlY3Qtb3B0aW9ucyB7XHJcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/transactions/transactions.component.ts":
/*!********************************************************!*\
  !*** ./src/app/transactions/transactions.component.ts ***!
  \********************************************************/
/*! exports provided: TransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function() { return TransactionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_data_transactions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/data/transactions.service */ "./src/app/shared/data/transactions.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_data_membership_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/data/membership.service */ "./src/app/shared/data/membership.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent(router, http, transactionsservice, membershipService) {
        this.router = router;
        this.http = http;
        this.transactionsservice = transactionsservice;
        this.membershipService = membershipService;
        this.isLoading = false;
        this.dataSource = [];
        this.originalDataSource = [];
        this.filteredDataSource = [];
        this.members = [];
        this.search = {
            'paidUser': '',
            'membership': ''
        };
        this.pageSize = 10;
        this.columns = [
            { name: 'Name' },
            { name: 'Email' },
            { name: 'Membership plan' },
            { name: 'Membership plan Amount' },
            { name: 'Transaction Id' },
            { name: 'Renewal Due Date' },
            { name: 'Renewed' }
        ];
        this.isLoading = true;
    }
    TransactionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.membershipService.getMembership().then(function (data) {
            if (data['membership']) {
                _this.members = data['membership'];
            }
        }, function (error) {
        });
        this.transactionsservice.getTransaction().then(function (data) {
            if (data['status'] == "success") {
                _this.dataSource = data['data'];
                _this.originalDataSource = data['data'];
                _this.isLoading = false;
            }
            else {
                _this.dataSource = [];
                _this.originalDataSource = [];
                _this.isLoading = false;
            }
        });
    };
    TransactionsComponent.prototype.filterTableOnPaidStatus = function (event) {
        var _this = this;
        this.isLoading = true;
        if (event.target.value != '') {
            this.search.paidUser = event.target.value;
            var val_1 = event.target.value.toLowerCase();
            if (this.search.membership != '') {
                this.dataSource = this.originalDataSource.filter(function (user) { return user.renewed_status.toLowerCase() === val_1; });
                this.dataSource = this.dataSource.filter(function (user) { return user.mId === _this.search.membership; });
            }
            else {
                this.dataSource = this.originalDataSource.filter(function (user) { return user.renewed_status.toLowerCase() === val_1; });
                this.filteredDataSource = this.dataSource;
            }
            this.isLoading = false;
        }
        else {
            this.dataSource = this.originalDataSource;
            if (this.search.membership != '') {
                this.dataSource = this.originalDataSource;
                this.dataSource = this.dataSource.filter(function (user) { return user.mId === _this.search.membership; });
            }
            this.search.paidUser = '';
            this.isLoading = false;
        }
        this.table.offset = 0;
    };
    TransactionsComponent.prototype.filterTableOnMembership = function (event) {
        var _this = this;
        this.isLoading = true;
        if (event.target.value != '') {
            var val_2 = event.target.value;
            if (this.search.paidUser != '') {
                this.dataSource = this.originalDataSource.filter(function (user) { return user.mId === val_2; });
                this.dataSource = this.dataSource.filter(function (user) { return user.renewed_status.toLowerCase() === _this.search.paidUser.toLowerCase(); });
            }
            else {
                this.dataSource = this.originalDataSource.filter(function (user) { return user.mId === val_2; });
                this.filteredDataSource = this.dataSource;
            }
            this.search.membership = val_2;
            this.isLoading = false;
        }
        else {
            this.dataSource = this.originalDataSource;
            if (this.search.paidUser != '') {
                this.dataSource = this.originalDataSource;
                this.dataSource = this.dataSource.filter(function (user) { return user.renewed_status.toLowerCase() === _this.search.paidUser; });
            }
            this.search.membership = '';
            this.isLoading = false;
        }
        this.table.offset = 0;
    };
    TransactionsComponent.prototype.reset = function () {
        this.dataSource = this.originalDataSource;
        this.search.paidUser = '';
        this.search.membership = '';
        this.table.offset = 0;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"])
    ], TransactionsComponent.prototype, "table", void 0);
    TransactionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transactions',
            template: __webpack_require__(/*! ./transactions.component.html */ "./src/app/transactions/transactions.component.html"),
            styles: [__webpack_require__(/*! ./transactions.component.scss */ "./src/app/transactions/transactions.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _shared_data_transactions_service__WEBPACK_IMPORTED_MODULE_3__["TransactionsService"],
            _shared_data_membership_service__WEBPACK_IMPORTED_MODULE_5__["MembershipService"]])
    ], TransactionsComponent);
    return TransactionsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~loyalty-loyalty-module~transactions-transactions-module.js.map