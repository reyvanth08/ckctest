(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~loyalty-loyalty-module~renewals-renewals-module"],{

/***/ "./src/app/renewals/renewals.component.html":
/*!**************************************************!*\
  !*** ./src/app/renewals/renewals.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"basic-elements\">\r\n\t<div class=\"row\">\r\n\t    <div class=\"col-md-6\">\r\n\t        <div class=\"content-header\">Renewals</div>\r\n\t    </div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<!-- <div class=\"card-title-wrap bar-success\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success btn-raised\" (click)=\"recRenewal()\" style=\"margin-right: 14px;\">Recent Renewal</button>\r\n    \t\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-raised\" (click)=\"pendRenewal()\">Pending Renewal</button>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t        <div class=\"card-block\">\r\n\t\t\t\t        \t<div class=\"row\">\r\n\t\t\t\t\t          <div class=\"col-md-4\">\r\n\t\t\t\t\t            <div class=\"form-group\">\r\n\t\t\t\t\t              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\" (keyup)='updateFilter($event)' placeholder=\"Search Member...\">\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t          </div>\r\n\t\t\t\t\t          <div class=\"col-md-3\">\r\n\t\t\t\t\t            <div class=\"form-group\">\r\n\t\t\t\t\t              <button type=\"button\" class=\"btn btn-info btn-raised\" (click)=\"reset()\" style=\"margin-right: 14px;\">Reset</button>\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t          </div>\r\n\t\t\t\t        \t</div>\r\n\t\t\t\t        \t<!-- <ngx-datatable #table class='bootstrap' [rows]=\"rows\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n\t\t\t\t              [rowHeight]=\"'auto'\" [limit]=\"10\">\r\n\t\t\t\t              </ngx-datatable> -->\r\n\t\t\t\t\t\t\t<ngx-datatable *ngIf=\"recentRenewal\" #table class='bootstrap' [rows]=\"renewals\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"20\" [loadingIndicator]=\"isLoading\">\r\n\t\t\t\t\t\t\t\t<ngx-datatable-column name=\"Transaction Id\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t\t\t\t\t\t\t\t\t {{row.transaction_id}}\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t </ngx-datatable-column>\r\n\t\t\t\t\t\t\t\t <ngx-datatable-column name=\"User Name\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t\t\t\t\t\t\t\t\t {{row.name}}\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t </ngx-datatable-column>\r\n\t\t\t\t\t\t\t\t <ngx-datatable-column name=\"Membership Plan\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t\t\t\t\t\t\t\t\t {{row.plans}}\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t </ngx-datatable-column>\r\n\t\t\t\t\t\t\t\t <ngx-datatable-column name=\"Expiry Date\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t\t\t\t\t\t\t\t\t {{row.expire_date}}\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t </ngx-datatable-column>\r\n\t\t\t\t\t\t\t</ngx-datatable>\r\n\t\t\t\t\t\t\t<ngx-datatable *ngIf=\"pendingRenewal\" #table class='bootstrap' [rows]=\"pendingRenewals\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"10\" [loadingIndicator]=\"isLoading\">\r\n\t\t\t\t\t\t\t\t<ngx-datatable-column name=\"Transaction Id\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t\t\t\t\t\t\t\t\t {{row.transaction_id}}\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t </ngx-datatable-column>\r\n\t\t\t\t\t\t\t\t <ngx-datatable-column name=\"User Name\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t\t\t\t\t\t\t\t\t {{row.name}}\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t </ngx-datatable-column>\r\n\t\t\t\t\t\t\t\t <ngx-datatable-column name=\"Membership Plan\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t\t\t\t\t\t\t\t\t {{row.plans}}\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t </ngx-datatable-column>\r\n\t\t\t\t\t\t\t\t <ngx-datatable-column name=\"Expiry Date\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t\t\t\t\t\t\t\t\t {{row.expire_date}}\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t </ngx-datatable-column>\r\n\t\t\t\t\t\t\t\t <ngx-datatable-column name=\"Action\">\r\n\t\t\t\t\t\t\t\t\t <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t\t\t\t\t\t\t\t <a class=\"success p-0\" data-original-title=\"\" title=\"\" *ngIf=\"row.sentMail == 1 && row.user_id == userId\">\r\n\t\t\t\t\t\t\t\t\t\t Notified User\r\n\t\t\t\t\t\t\t\t\t\t </a>\r\n\t\t\t\t\t\t\t\t\t\t <a class=\"danger p-0\" data-original-title=\"\" title=\"\" *ngIf=\"sentEmail == false && row.sentMail == 0\" (click)=\"sendEmail(row.id, row.email, row.name, row.plans, row.expire_date)\">\r\n\t\t\t\t\t\t\t\t\t\t Remind User\r\n\t\t\t\t\t\t\t\t\t\t </a>\r\n\t\t\t\t\t\t\t\t\t </ng-template>\r\n\t\t\t\t\t\t\t\t </ngx-datatable-column>\r\n\t\t\t\t\t\t\t</ngx-datatable>\r\n\t\t\t\t            <!-- <table class=\"table table-responsive-sm\">\r\n\t\t\t\t                <thead>\r\n\t\t\t\t                    <tr>\r\n\t\t\t\t                        <th>Transaction ID</th>\r\n\t\t\t\t                        <th>User Name</th>\r\n\t\t\t\t                        <th>Membership Plan</th>\r\n\t\t\t\t                        <th>Expiry Date</th>\r\n\t\t\t\t                        <th>Action</th>\r\n\t\t\t\t                    </tr>\r\n\t\t\t\t                </thead>\r\n\t\t\t\t                <tbody *ngIf=\"\">\r\n\t\t\t\t                    <tr *ngFor=\"let data of renewals\">\r\n\t\t\t\t                        <td>{{data.transaction_id}}</td>\r\n\t\t\t\t                        <td>{{data.name}}</td>\r\n\t\t\t\t                        <td>{{data.plans}}</td>\r\n\t\t\t\t                        <td>{{data.expire_date}}</td>\r\n\t\t\t\t                        <td></td>\r\n\t\t\t\t                    </tr>\r\n\t\t\t\t                </tbody>\r\n\t\t\t\t                <tbody *ngIf=\"pendingRenewal\">\r\n\t\t\t\t                    <tr *ngFor=\"let data of pendingRenewals\">\r\n\t\t\t\t                        <td>{{data.transaction_id}}</td>\r\n\t\t\t\t                        <td>{{data.name}}</td>\r\n\t\t\t\t                        <td>{{data.plans}}</td>\r\n\t\t\t\t                        <td>{{data.expire_date}}</td>\r\n\t\t\t\t                        <td>\r\n\r\n\t\t\t\t                        </td>\r\n\t\t\t\t                    </tr>\r\n\t\t\t\t                </tbody>\r\n\t\t\t\t            </table> -->\r\n\t\t\t\t        </div>\r\n\t\t\t\t      </div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/renewals/renewals.component.scss":
/*!**************************************************!*\
  !*** ./src/app/renewals/renewals.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbmV3YWxzL3JlbmV3YWxzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/renewals/renewals.component.ts":
/*!************************************************!*\
  !*** ./src/app/renewals/renewals.component.ts ***!
  \************************************************/
/*! exports provided: RenewalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenewalsComponent", function() { return RenewalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_renewal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/data/renewal.service */ "./src/app/shared/data/renewal.service.ts");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable/release */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RenewalsComponent = /** @class */ (function () {
    function RenewalsComponent(renewalservice) {
        this.renewalservice = renewalservice;
        this.renewals = [];
        this.pendingRenewals = [];
        this.originalDataSource = [];
        this.filteredData = [];
        this.recentRenewal = false;
        this.pendingRenewal = false;
        this.sentEmail = false;
        this.userId = 0;
        this.columns = [
            { name: 'Transaction ID' },
            { name: 'User Name' },
            { name: 'Membership Plan' },
            // { name: 'Amount' },
            // { name: 'Renewal Date' },
            { name: 'Expiry Date' }
        ];
        this.isLoading = false;
        this.searchText = '';
        this.isLoading = true;
    }
    RenewalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.getRenewals();
        this.renewalservice.getRenewal().then(function (data) {
            if (data['status'] == 'success') {
                //this.renewals = data['renewal'];
                // for (let i = 0; i < data['renewal'].length; i++) {
                //   if(data['renewal'][i]['pendingRenewal'] == 0){
                //     this.renewals.push(data['renewal'][i]);
                //   //console.log(this.renewals);
                //   }
                //   else{
                _this.pendingRenewals = data['renewal'];
                _this.originalDataSource = data['renewal'];
                _this.filteredData = data['renewal'];
                //console.log(this.pendingRenewals);
                //   }
                // }
                // this.recRenewal();
            }
            else {
                _this.renewals = [];
                _this.pendingRenewals = [];
                _this.originalDataSource = [];
                _this.filteredData = [];
            }
            _this.pendingRenewal = true;
            _this.recentRenewal = false;
            _this.isLoading = false;
        });
    };
    RenewalsComponent.prototype.getRenewals = function () {
        var _this = this;
        this.renewalservice.getRenewal().then(function (data) {
            if (data['status'] == 'success') {
                //this.renewals = data['renewal'];
                for (var i = 0; i < data['renewal'].length; i++) {
                    if (data['renewal'][i]['pendingRenewal'] == 0) {
                        _this.renewals.push(data['renewal'][i]);
                        //console.log(this.renewals);
                    }
                    else {
                        _this.pendingRenewals.push(data['renewal'][i]);
                        //console.log(this.pendingRenewals);
                    }
                }
                _this.recRenewal();
            }
            else {
                _this.renewals = [];
                _this.pendingRenewals = [];
            }
        });
    };
    RenewalsComponent.prototype.recRenewal = function () {
        this.recentRenewal = true;
        this.pendingRenewal = false;
    };
    RenewalsComponent.prototype.pendRenewal = function () {
    };
    RenewalsComponent.prototype.reset = function () {
        this.pendingRenewals = this.originalDataSource;
        this.searchText = '';
        this.table.offset = 0;
    };
    RenewalsComponent.prototype.updateFilter = function (event) {
        if (event.target.value != '') {
            this.searchText = event.target.value.toLowerCase();
            var val_1 = event.target.value.toLowerCase();
            var keys_1 = Object.keys(this.pendingRenewals[0]);
            var colsAmt_1 = keys_1.length;
            this.pendingRenewals = this.filteredData.filter(function (item) {
                for (var i = 0; i < colsAmt_1; i++) {
                    if (item[keys_1[i]] != null) {
                        if (item[keys_1[i]].toString().toLowerCase().indexOf(val_1) !== -1 || !val_1) {
                            return true;
                        }
                    }
                }
            });
        }
        else {
            this.pendingRenewals = this.originalDataSource;
        }
        this.table.offset = 0;
    };
    RenewalsComponent.prototype.sendEmail = function (id, email, name, plans, expire_date) {
        var _this = this;
        this.userId = id;
        // debugger;
        this.renewalservice.sendRenewalEmail(id, email, name, plans, expire_date).then(function (data) {
            if (data['status'] == 'success') {
                _this.getRenewals();
                _this.sentEmail = true;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"])
    ], RenewalsComponent.prototype, "table", void 0);
    RenewalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-renewals',
            template: __webpack_require__(/*! ./renewals.component.html */ "./src/app/renewals/renewals.component.html"),
            styles: [__webpack_require__(/*! ./renewals.component.scss */ "./src/app/renewals/renewals.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_data_renewal_service__WEBPACK_IMPORTED_MODULE_1__["RenewalService"]])
    ], RenewalsComponent);
    return RenewalsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~loyalty-loyalty-module~renewals-renewals-module.js.map