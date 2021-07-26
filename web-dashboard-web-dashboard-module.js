(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["web-dashboard-web-dashboard-module"],{

/***/ "./src/app/web-dashboard/segments/segments.component.html":
/*!****************************************************************!*\
  !*** ./src/app/web-dashboard/segments/segments.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"basic-elements\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-6\">\r\n\t\t\t<div class=\"content-header\">Segments</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\" *ngIf=\"!showSegment\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<p>Segments</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- <div class=\"col-sm-4\">\r\n\t\t\t\t              <button type=\"button\" class=\"btn btn-outline-primary mt-2\" (click)=\"isCollapsed = !isCollapsed\"\r\n\t\t\t\t                      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\r\n\t\t\t\t                Select Columns\r\n\t\t\t\t              </button>\r\n\r\n\t\t\t\t\t\t\t<div id=\"collapseExample\" class=\"selected-column\" [ngbCollapse]=\"!isCollapsed\">\r\n\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t  \t<li *ngFor='let col of allColumns'>\r\n\t\t\t\t\t\t\t\t\t    <input\r\n\t\t\t\t\t\t\t\t\t      type='checkbox'\r\n\t\t\t\t\t\t\t\t\t      [id]=\"col.name\"\r\n\t\t\t\t\t\t\t\t\t      (click)='toggle(col)'\r\n\t\t\t\t\t\t\t\t\t      [checked]='isChecked(col)'\r\n\t\t\t\t\t\t\t\t\t    />\r\n\t\t\t\t\t\t\t\t\t    <label [attr.for]=\"col.name\">{{col.name}}</label>\r\n\t\t\t\t\t\t\t\t  \t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t<div class=\"col-sm-4\" style=\"text-align: right;\">\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t<a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-bitbucket right\" (click)=\"memToggle()\"><span class=\"ft-plus\"></span>Create Segment</a>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t\t<ngx-datatable class=\"material\" class=\"bootstrap\" [rows]=\"segments\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"50\" [limit]=\"10\">\r\n\t\t\t\t\t\t\t\t<ngx-datatable-column name=\"Segment Name\">\r\n\t\t\t\t\t\t\t\t\t<ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t\t\t\t\t\t\t\t{{row.name}}\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</ngx-datatable-column>\r\n\t\t\t\t\t\t\t\t<ngx-datatable-column name=\"Subscribers\">\r\n\t\t\t\t\t\t\t\t\t<ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-info waves-effect btn-sm\" style=\"margin-right: 1.75rem;\"\r\n\t\t\t\t\t\t\t\t\t\t(click)=\"getTokenCounts(row.id,$event)\" >Get Segments Reach</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"showId == row.id\">{{counts}}</span>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</ngx-datatable-column>\r\n\t\t\t\t\t\t\t\t<ngx-datatable-column name=\"Created\">\r\n\t\t\t\t\t\t\t\t\t<ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t\t\t\t\t\t\t\t{{row.created}}\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</ngx-datatable-column>\r\n\t\t\t\t\t\t\t\t<ngx-datatable-column name=\"Segment\">\r\n\t\t\t\t\t\t\t\t\t<ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t\t\t\t\t\t\t<!-- <button class=\"btn btn-success btn-raised\" (click)=\"viewSegment(row.id);\">View</button> -->\r\n\t\t\t\t\t\t\t\t\t\t<!-- <button type=\"button\" class=\"btn btn-success btn-sm red\"\r\n\t\t\t\t\t\t\t\t\t\t(click)=\"viewSegment(row.id)\">View</button>\r\n\t\t\t\t\t\t\t\t -->\r\n\t\t\t\t\t\t\t\t \t<button type=\"button\" class=\"btn btn-outline-info waves-effect btn-sm\"\r\n\t\t\t\t\t\t\t\t\t\t(click)=\"viewSegment(row.id)\">View</button>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</ngx-datatable-column>\r\n\t\t\t\t\t\t\t\t<ngx-datatable-column name=\"Action\">\r\n\t\t\t\t\t\t\t\t\t<ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t\t\t\t\t\t\t\t<a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"deletesegment(row.id)\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-trash font-medium-3 mr-2\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</ngx-datatable-column>\r\n\t\t\t\t\t\t\t</ngx-datatable>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- <div>\r\n\t\t\t\t\t\t\t<ngx-datatable\r\n\t\t\t\t\t\t\tclass ='material'\r\n\t\t\t\t\t\t\t  class='bootstrap'\r\n\t\t\t\t\t\t\t  [rows]='segments'\r\n\t\t\t\t\t\t\t  [columnMode]=\"'force'\"\r\n\t\t\t\t\t\t\t  [headerHeight]=\"50\"\r\n\t\t\t\t\t\t\t  [footerHeight]=\"50\"\r\n\t\t\t\t\t\t\t  [rowHeight]=\"'auto'\">\r\n\t\t\t\t\t\t\t  <ngx-datatable-column\r\n\t\t\t\t\t\t\t\t*ngFor=\"let col of columns\"\r\n\t\t\t\t\t\t\t\t[name]=\"col.name\">\r\n\t\t\t\t\t\t\t  </ngx-datatable-column>\r\n\t\t\t\t\t\t\t  <ngx-datatable-column name=\"Action\">\r\n\t\t\t\t\t\t\t\t<ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t\t\t\t\t\t\t<a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"deletesegment(row.id)\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-trash font-medium-3 mr-2\"></i>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t</ngx-datatable-column>\r\n\t\t\t\t\t\t\t</ngx-datatable>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row\" *ngIf=\"showSegment\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<form [formGroup]=\"segmentForm\" (ngSubmit)=\"addSegment(segmentForm.value)\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label for=\"name\">Segment Name</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\" required>\r\n\t\t\t\t\t\t\t\t<small class=\"form-text text-muted danger\" *ngIf=\"!segmentForm.get('name').valid && (segmentForm.get('name').dirty || segmentForm.get('name').touched)\">This field is required!</small>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<h2>Actions</h2>\r\n\t\t\t\t\t\t\t<p>Subscribers performs any of the following actions</p>\r\n\r\n\t\t\t\t\t\t\t<div formArrayName=\"actionset\">\r\n\t\t\t\t\t\t\t\t<div  [formGroupName]=\"i\" *ngFor=\"let tech of segmentForm.controls.actionset.controls; let i = index\">\r\n\t\t\t\t\t\t\t\t<!-- \t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\r\n\t\t\t\t\t\t\t\t\t    <div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select  class=\"custom-select mb-2\" formControlName=\"act1\" placeholder=\"Select an option\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"visitedpage\" selected>Visited page</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"clickedelement\">Clicked Element</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\" >\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select  class=\"custom-select mb-2\" formControlName=\"act2\" placeholder=\"Select an option\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"pageurl\" selected>Page URL</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"refferingurl\">Reffering URL</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\" >\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select  class=\"custom-select mb-2\" formControlName=\"act3\" placeholder=\"Select an option\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"isequalto\" selected>Is equal to</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"isnotequalto\">Is not equal to</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"contains\">Contains</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input  type=\"text\" name=\"act4\" formControlName=\"act4\" class=\"form-control\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xl-1 col-lg-6 col-md-12 mb-1\" >\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xl-2 col-lg-6 col-md-12 mb-1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger mr-1 btn-fab\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"removeSetCondition1(i)\"><i class=\"fa fa-times\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-primary btn-block btn-raised\" (click)=\"addSetCondition1()\" >Add Condition</button>\r\n\r\n\t\t\t\t\t\t\t<h2>properties</h2>\r\n\t\t\t\t\t\t\t<p>Subscribers has the following properties</p>\r\n\r\n\t\t\t\t\t\t\t<div formArrayName=\"propertyset\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\" [formGroupName]=\"i\" *ngFor=\"let tech of segmentForm.controls.propertyset.controls; let i = index\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select mb-2\"  formControlName=\"ddl1\"  placeholder=\"Rule Type\"  (change)=\"ddl1change($event.target.value,i)\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let value of propertyList; let j = index\"  value=\"{{value.name}}\" >{{value.name}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\" >\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<select  class=\"custom-select mb-2\" formControlName=\"seloperator\" placeholder=\"Rule Type\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"isequalto\" selected>Is equal to</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"isnotequalto\">Is not equal to</option>\r\n\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\" *ngIf=\"valuesArray.length >0\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div  *ngIf=\"propertyList[valuesArray[i]].values.length == 0\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input  type=\"text\" name=\"txtfilterval\" formControlName=\"txtfilterval\" class=\"form-control\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div  *ngIf=\"propertyList[valuesArray[i]].values.length > 0\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select mb-2\" formControlName=\"txtfilterval\" placeholder=\"Rule Type\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" selected>-- Select --</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option  *ngFor=\"let opt of propertyList[valuesArray[i]].values\" value=\"{{opt}}\">{{opt}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xl-1 col-lg-6 col-md-12 mb-1\" >\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xl-2 col-lg-6 col-md-12 mb-1\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger mr-1 btn-fab\"\r\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"removeSetCondition(i)\"><i class=\"fa fa-times\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-primary btn-block btn-raised\" (click)=\"addSetCondition()\" >Add Condition</button>\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-raised mr-1\" (click)=\"cancel()\">Cancel</button>\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success btn-raised\" [disabled]=\"!segmentForm.valid || submitted\">Create</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/web-dashboard/segments/segments.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/web-dashboard/segments/segments.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected-column {\n  width: 38%;\n  margin-right: 20px;\n  text-align: left;\n  background: #FFF;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24); }\n\nli {\n  list-style: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLWRhc2hib2FyZC9zZWdtZW50cy9DOlxcVXNlcnNcXE1SVDIwXFxEZXNrdG9wXFxVTVxcdXNlcm1hbmFnZW1lbnQvc3JjXFxhcHBcXHdlYi1kYXNoYm9hcmRcXHNlZ21lbnRzXFxzZWdtZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQVU7RUFDUCxtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQiw2RUFBNEUsRUFDL0U7O0FBQ0Q7RUFDQyxpQkFBZ0IsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC93ZWItZGFzaGJvYXJkL3NlZ21lbnRzL3NlZ21lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdGVkLWNvbHVtbntcclxuXHR3aWR0aDogMzglO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG59XHJcbmxpe1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/web-dashboard/segments/segments.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/web-dashboard/segments/segments.component.ts ***!
  \**************************************************************/
/*! exports provided: SegmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentsComponent", function() { return SegmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_data_web_engagement_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/data/web-engagement.service */ "./src/app/shared/data/web-engagement.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';




//import { FeedbackService } from '../../shared/data/feedback.service';


var SegmentsComponent = /** @class */ (function () {
    function SegmentsComponent(http, snotifyService, webengagementservice, router, _FB) {
        this.http = http;
        this.snotifyService = snotifyService;
        this.webengagementservice = webengagementservice;
        this.router = router;
        this._FB = _FB;
        this.segments = [];
        this.showSegment = false;
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
        this.submitted = false;
        this.columns = [
            { name: 'Name' },
            { name: 'Subscribers' },
            { name: 'Created' }
        ];
        this.allColumns = [
            { name: 'Name' },
            { name: 'Subscribers' },
            { name: 'Created' }
        ];
        this.isCollapsed = false;
        this.propertyList = [
            { name: 'Operating System', operator: ['Is equal to', 'Is not equal to'], values: ['Windows', 'Linux', 'MacOS'] },
            { name: 'Browser', operator: ['Is equal to', 'Is not equal to'], values: ['Chrome', 'Firefox', 'Safari', 'Opera', 'Edge'] },
            //{ name: 'User Agent', operator:['Is equal to','Is not equal to'], values: [] },
            { name: 'Platform', operator: ['Is equal to', 'Is not equal to'], values: ['Mobile', 'Desktop'] },
            //{ name: 'Location', operator:['Is equal to','Is not equal to'], values: ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]},
            { name: 'Location', operator: ['Is equal to', 'Is not equal to'], values: ["New South Wales", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia", "Australian Capital Territory"] },
        ];
        this.valuesArray = [];
    }
    SegmentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.segmentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            /*'textArea': new FormControl(null, [Validators.required]),
            'price': new FormControl(null, [Validators.required]),
            'duration': new FormControl(null, [Validators.required]),
            'durationIn': new FormControl(null, [Validators.required]),
            'membershipIcon': new FormControl(null, null)*/
            'actionset': this._FB.array([]),
            'propertyset': this._FB.array([
            //this.initMapFields()
            ])
        });
        this.webengagementservice.getSegmentByOrg().then(function (data) {
            if (data['status'] == 'success') {
                _this.segments = data['segments'];
                //this.collectionSize = data['segments'].length;
                _this.totalList = data['segments'].length;
            }
        }, function (error) {
        });
    };
    Object.defineProperty(SegmentsComponent.prototype, "f", {
        get: function () { return this.segmentForm.controls; },
        enumerable: true,
        configurable: true
    });
    SegmentsComponent.prototype.memToggle = function () {
        this.showSegment = true;
    };
    SegmentsComponent.prototype.toggle = function (col) {
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
    SegmentsComponent.prototype.isChecked = function (col) {
        return this.columns.find(function (c) {
            return c.name === col.name;
        });
    };
    SegmentsComponent.prototype.cancel = function () {
        //window.location.reload();
        this.showSegment = false;
        this.segmentForm.reset();
    };
    SegmentsComponent.prototype.deletesegment = function (id) {
        var _this = this;
        this.webengagementservice.deleteSegment(id).then(function (data) {
            if (data['status']) {
                _this.snotifyService.error('Deleted Successfully', '', _this.getConfig());
                _this.segments = _this.segments.filter(function (h) { return h.id != id; });
            }
        });
    };
    /*action dynamic code*/
    SegmentsComponent.prototype.initMapFields1 = function () {
        return this._FB.group({
            act1: [],
            act2: [],
            act3: [],
            act4: []
        });
    };
    // valuesArray1 =[];
    //  ddl1change1(val,index){
    //    this.valuesArray[index] = val;
    //  }
    SegmentsComponent.prototype.addSetCondition1 = function () {
        var control = this.segmentForm.controls.actionset;
        control.push(this.initMapFields1());
    };
    SegmentsComponent.prototype.removeSetCondition1 = function (i) {
        var control = this.segmentForm.controls.actionset;
        control.removeAt(i);
        //this.valuesArray.splice(i, 1);
        //this.operatorArray.splice(i, 1);
    };
    /*action dynamic code end*/
    /*property dynamic*/
    SegmentsComponent.prototype.initMapFields = function () {
        return this._FB.group({
            ddl1: [],
            seloperator: [],
            txtfilterval: []
        });
    };
    SegmentsComponent.prototype.ddl1change = function (val, index) {
        //alert(val);
        var nameary = ["Operating System", "Browser", "Platform", "Location"];
        var indexsel = nameary.indexOf(val);
        //alert("indexsel"+indexsel);
        //this.valuesArray.push(indexsel);
        this.valuesArray[index] = indexsel;
    };
    SegmentsComponent.prototype.addSetCondition = function () {
        this.valuesArray.push(0);
        var control = this.segmentForm.controls.propertyset;
        control.push(this.initMapFields());
    };
    SegmentsComponent.prototype.removeSetCondition = function (i) {
        var control = this.segmentForm.controls.propertyset;
        control.removeAt(i);
        this.valuesArray.splice(i, 1);
        //this.operatorArray.splice(i, 1);
    };
    /*property dynamic end*/
    SegmentsComponent.prototype.addSegment = function (val) {
        var _this = this;
        this.submitted = true;
        console.log(JSON.stringify(val));
        var obj = { 'name': '', 'condition': { 'propertyset': '', 'actionset': '' }, 'subscribers': 0 };
        //let obj= {'name':'','condition':'','subscribers':0};
        obj['name'] = val.name;
        obj['condition']['propertyset'] = val.propertyset;
        obj['condition']['actionset'] = val.actionset;
        obj['subscribers'] = 0;
        //let mydata = JSON.stringify(obj);
        this.webengagementservice.addSegment(obj).then(function (data) {
            if (data['status'] == 'true') {
                _this.snotifyService.success('Added Successfully', '', _this.getConfig());
                _this.submitted = false;
                _this.segmentForm.reset();
                _this.showSegment = false;
                _this.webengagementservice.getSegmentByOrg().then(function (data) {
                    if (data['status'] == 'success') {
                        _this.segments = data['segments'];
                        //this.collectionSize = data['segments'].length;
                        _this.totalList = data['segments'].length;
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        });
    };
    SegmentsComponent.prototype.viewSegment = function (id) {
        // alert(id);
        // id = "['"+id+"']";
        this.webengagementservice.getSegmentById([id]).then(function (data) {
            console.log('Data - ' + JSON.stringify(data));
            var data1 = JSON.parse(data["segments"][0]["condition"]);
            var propertylength = data1["propertyset"].length;
            var propertyset = "";
            var actionlength = data1["actionset"].length;
            var actionset = "";
            var i = 0;
            var str = "";
            for (i = 0; i < actionlength; i++) {
                //  actionset = actionset + "<br />" + JSON.stringify(data1["actionset"][i]);
                // }
                //     for ($i = 0; $i < $actionlength; $i++) {
                actionset = actionset + " and ";
                //act1
                //  if(data1["actionset"][i]['act1'] == 'tokenin'){
                //   actionset = actionset + "Clicked";
                // }
                // if(data1["actionset"][i]['act1'] == 'tokennotin'){
                //   actionset = actionset + "Not Clicked";
                // }
                if (data1["actionset"][i]['act2'] == 'event') {
                    actionset = actionset + " action"; //"event";
                    //   $str .= "event";//"event";
                }
                if (data1["actionset"][i]['act2'] == 'category') {
                    actionset = actionset + " category";
                    // $str .= "category";
                }
                if (data1["actionset"][i]['act2'] == 'pageurl') {
                    actionset = actionset + "Page URL";
                }
                if (data1["actionset"][i]['act2'] == 'refferingurl') {
                    actionset = actionset + "Reffering URL";
                }
                //act3
                if (data1["actionset"][i]['act3'] == 'isequalto') {
                    actionset = actionset + " is equal to ";
                }
                if (data1["actionset"][i]['act3'] == 'contains') {
                    actionset = actionset + " contains ";
                    actionset = actionset + data1["actionset"][i]['act4'];
                }
                else {
                    actionset = actionset + data1["actionset"][i]['act4'];
                }
            }
            // actionset = str;
            // if(propertylength > 0)
            // {
            //  str="";
            // }
            for (i = 0; i < propertylength; i++) {
                propertyset = propertyset + " and ";
                if (data1["propertyset"][i]['ddl1'] == 'Operating System') {
                    propertyset = propertyset + "Platform";
                }
                if (data1["propertyset"][i]['ddl1'] == 'Browser') {
                    propertyset = propertyset + "Browser info";
                }
                if (data1["propertyset"][i]['ddl1'] == 'Platform') {
                    propertyset = propertyset + "Device Type";
                }
                if (data1["propertyset"][i]['ddl1'] == 'Location') {
                    propertyset = propertyset + "State";
                }
                //DDL2
                if (data1["propertyset"][i]['seloperator'] == 'isequalto') {
                    propertyset = propertyset + " is equal to ";
                }
                if (data1["propertyset"][i]['seloperator'] == 'isnotequalto') {
                    propertyset = propertyset + " is not equal to ";
                }
                //ddl3
                propertyset = propertyset + data1["propertyset"][i]['txtfilterval'];
            }
            //propertyset = str;
            if (actionset != "" || propertyset != "") {
                if (actionset != "") {
                    actionset = "<b>Actions : </b>" + actionset.substring(5, actionset.length);
                }
                if (propertyset != "") {
                    propertyset = "<b>Properties : </b>" + propertyset.substring(5, propertyset.length);
                }
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                    title: 'Segment',
                    //type: 'info',
                    html: '<div align="left">' + actionset + '<br />' + propertyset,
                    // '<b>data </b><br />' + actionset + '<br />',
                    showCloseButton: true,
                    showCancelButton: false,
                    focusConfirm: false,
                    confirmButtonText: 'Ok'
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()("No Segment", "", "info");
            }
        });
    };
    SegmentsComponent.prototype.getConfig = function () {
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
    SegmentsComponent.prototype.getTokenCounts = function (id, event) {
        var _this = this;
        console.log('ID in - ' + id);
        this.webengagementservice.getTokensCountBySegment(id).then(function (data) {
            if (data['status'] == 'success') {
                _this.counts = data['tokens'];
                _this.showId = id;
            }
        });
    };
    SegmentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-segments',
            template: __webpack_require__(/*! ./segments.component.html */ "./src/app/web-dashboard/segments/segments.component.html"),
            styles: [__webpack_require__(/*! ./segments.component.scss */ "./src/app/web-dashboard/segments/segments.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"], _shared_data_web_engagement_service__WEBPACK_IMPORTED_MODULE_5__["WebEngagementService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], SegmentsComponent);
    return SegmentsComponent;
}());



/***/ }),

/***/ "./src/app/web-dashboard/view-tokens/view-tokens.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/web-dashboard/view-tokens/view-tokens.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\r\n  <div class=\"content-header\">Subscribers</div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"form-group\">\r\n      <form [formGroup]=\"filterForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4\">\r\n            <label for=\"memType\">Start Date</label>\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" formControlName=\"startDate\" [(ngModel)]=\"filterModule.startDate\" ngbDatepicker #d2=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <div class=\"input-group-text\" (click)=\"d2.toggle()\">\r\n                  <i class=\"fa fa-calendar\" style=\"cursor: pointer;\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <label for=\"memType\">End Date</label>\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" formControlName=\"endDate\" [(ngModel)]=\"filterModule.endDate\" ngbDatepicker #d3=\"ngbDatepicker\" (ngModelChange)=\"endDate()\">\r\n              <div class=\"input-group-append\">\r\n                <div class=\"input-group-text\" (click)=\"d3.toggle()\">\r\n                  <i class=\"fa fa-calendar\" style=\"cursor: pointer;\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n           <small class=\"form-text text-muted danger\" *ngIf=\"error.isError\">{{error.errorMessage}}</small>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <br />\r\n            <button type=\"button\" class=\"btn btn-info btn-raised mr-1\" (click)=\"getFilters()\">Filter</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"card-block\">\r\n      <div class=\"col-lg-12\" *ngIf=\"userchart != ''\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <div class=\"card-title-wrap bar-success\">\r\n               <h4 class=\"card-title\">User Statistics</h4>\r\n             </div>\r\n           </div>\r\n           <div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n              <div class=\"height-400\">\r\n                <ngx-charts-bar-vertical\r\n                  [scheme]=\"ChartColorScheme\"\r\n                  [results]=\"userchart\"\r\n                  [gradient]=\"false\"\r\n                  [xAxis]=\"true\"\r\n                  [yAxis]=\"true\"\r\n                  [legend]=\"false\"\r\n                  [showXAxisLabel]=\"true\"\r\n                  [showYAxisLabel]=\"true\"\r\n                  xAxisLabel=\"Date\"\r\n                  yAxisLabel=\"Subscribers\">\r\n                </ngx-charts-bar-vertical>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-12\" *ngIf=\"userchart == ''\" style=\"border-left: 5px solid red;\">\r\n        <div class=\"card\" style=\"border-bottom: 1px solid #c2c3c3; border-radius: 0;\r\n         \">\r\n          <div class=\"card-header\" style=\"padding: 0px;\r\n            padding-bottom: 15px;\">\r\n          <h4 class=\"card-title\">No data to display</h4>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 btnalgn\">\r\n          <button type=\"button\" class=\"btn btn-success btn-raised mr-1\" (click)=\"getActive()\">Active</button>\r\n          <button type=\"button\" class=\"btn btn-warning btn-raised mr-1\" (click)=\"getInactive()\">InActive</button>\r\n          <button type=\"button\" class=\"btn btn-danger btn-raised mr-1\" (click)=\"ngOnInit()\">Reset</button>\r\n          <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"isCollapsed = !isCollapsed\"\r\n          [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\r\n          Select Columns\r\n          </button>\r\n          <div id=\"collapseExample\" class=\"selected-column\" [ngbCollapse]=\"!isCollapsed\">\r\n            <ul >\r\n              <li *ngFor='let col of allColumns'>\r\n                <input type='checkbox' [id]=\"col.name\" (click)='toggle(col)' [checked]='isChecked(col)' />\r\n                <label [attr.for]=\"col.name\">{{col.name}}</label>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <ngx-datatable\r\n        class ='material'\r\n        class='bootstrap'\r\n        [rows]='rows'\r\n        [columnMode]=\"'force'\"\r\n        [headerHeight]=\"50\"\r\n        [footerHeight]=\"50\"\r\n        [rowHeight]=\"'auto'\" [limit]=\"10\">\r\n          <ngx-datatable-column\r\n            *ngFor=\"let col of columns\"\r\n            [name]=\"col.name\">\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Action\" [width]=\"50\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              <span class=\"badge badge-primary\" *ngIf=\"row.status == 'y'\">Active</span>\r\n               <span class=\"badge badge-primary\" *ngIf=\"row.status == 'n'\">Inactive</span>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n      </ngx-datatable>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/web-dashboard/view-tokens/view-tokens.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/web-dashboard/view-tokens/view-tokens.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected-column {\n  width: 38%;\n  margin-right: 20px;\n  float: right;\n  text-align: left;\n  background: #FFF;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24); }\n\nli {\n  list-style: none; }\n\nul.tablealgn {\n  float: right;\n  text-align: -webkit-auto; }\n\n.btnalgn {\n  text-align: -webkit-right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLWRhc2hib2FyZC92aWV3LXRva2Vucy9DOlxcVXNlcnNcXE1SVDIwXFxEZXNrdG9wXFxVTVxcdXNlcm1hbmFnZW1lbnQvc3JjXFxhcHBcXHdlYi1kYXNoYm9hcmRcXHZpZXctdG9rZW5zXFx2aWV3LXRva2Vucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLFdBQVU7RUFDVixtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsNkVBQTRFLEVBQzlFOztBQUNEO0VBQ0ksaUJBQWdCLEVBQ25COztBQUNEO0VBQ0ksYUFBWTtFQUNaLHlCQUF3QixFQUMzQjs7QUFDRDtFQUNLLDBCQUNMLEVBQUMiLCJmaWxlIjoic3JjL2FwcC93ZWItZGFzaGJvYXJkL3ZpZXctdG9rZW5zL3ZpZXctdG9rZW5zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdGVkLWNvbHVtbntcclxuICAgd2lkdGg6IDM4JTtcclxuICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICBmbG9hdDogcmlnaHQ7XHJcbiAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbn1cclxubGl7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbnVsLnRhYmxlYWxnbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWF1dG87XHJcbn1cclxuLmJ0bmFsZ24ge1xyXG5cdCAgICB0ZXh0LWFsaWduOiAtd2Via2l0LXJpZ2h0XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/web-dashboard/view-tokens/view-tokens.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/web-dashboard/view-tokens/view-tokens.component.ts ***!
  \********************************************************************/
/*! exports provided: ViewTokensComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTokensComponent", function() { return ViewTokensComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_web_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/data/web-dashboard.service */ "./src/app/shared/data/web-dashboard.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewTokensComponent = /** @class */ (function () {
    function ViewTokensComponent(webDashboardService, formBuilder) {
        this.webDashboardService = webDashboardService;
        this.formBuilder = formBuilder;
        this.ChartColorScheme = {
            domain: ['#666EE8', '#FF9149', '#FF4961', '#AAAAAA']
        };
        this.barChartColorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        this.pieChartColorScheme = {
            domain: ['#666EE8', '#28D094', '#FF4961', '#AAAAAA']
        };
        this.userchart = [];
        this.tilesData = [];
        this.rows = [];
        this.abTestingRows = [];
        this.states = [];
        this.filterModule = {
            'startDate': '',
            'endDate': ''
        };
        this.columns = [
            { name: 'Browser' },
            { name: 'Location' },
            { name: 'State' },
            { name: 'Device' },
            { name: 'Token' },
        ];
        this.allColumns = [
            { name: 'Browser' },
            { name: 'Location' },
            { name: 'State' },
            { name: 'Device' },
            { name: 'Token' },
        ];
        this.isCollapsed = false;
        this.showCol = false;
        this.error = { isError: false, errorMessage: '' };
    }
    ViewTokensComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.webDashboardService.getWebNotificationTokenByOrg().then(function (data) {
            if (data['status'] == 'success') {
                _this.rows = data['rdata'];
            }
        });
        this.filterForm = this.formBuilder.group({
            startDate: ['', null],
            endDate: ['', null]
        });
        this.webDashboardService.getWebTokenStats().then(function (data) {
            if (data['status'] != 0) {
                _this.userchart = data['stats'];
            }
            else {
                _this.userchart = [];
            }
        });
        this.webDashboardService.getWebTokenStatsbydate(this.filterModule).then(function (data) {
            if (data['status'] != 0) {
                _this.userchart = data['stats'];
            }
            else {
                _this.userchart = [];
            }
        });
    };
    ViewTokensComponent.prototype.toggle = function (col) {
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
    ViewTokensComponent.prototype.isChecked = function (col) {
        return this.columns.find(function (c) {
            return c.name === col.name;
        });
    };
    ViewTokensComponent.prototype.getColumns = function () {
        this.showCol = !this.showCol;
        // CHANGE THE NAME OF THE BUTTON.
        if (this.showCol)
            this.showCol = true;
        else
            this.showCol = false;
    };
    ViewTokensComponent.prototype.getFilters = function () {
        var _this = this;
        this.webDashboardService.getWebTokenStatsbydate(this.filterModule).then(function (data) {
            if (data['status'] != 0) {
                _this.userchart = data['stats'];
            }
            else {
                _this.userchart = [];
            }
        });
        this.webDashboardService.getWebNotificationTokenByOrgDate(this.filterModule).then(function (data) {
            if (data['status'] == 'success') {
                _this.rows = data['rdata'];
            }
            else {
                _this.rows = [];
            }
        });
    };
    ViewTokensComponent.prototype.getActive = function () {
        var _this = this;
        this.webDashboardService.getActiveTokenByOrg().then(function (data) {
            if (data['status'] == 'success') {
                console.log('Came here');
                _this.rows = data['rdata'];
            }
            else {
                _this.rows = [];
            }
        });
    };
    ViewTokensComponent.prototype.getInactive = function () {
        var _this = this;
        this.webDashboardService.getInactiveTokenByOrg().then(function (data) {
            if (data['status'] == 'success') {
                console.log('Came here');
                _this.rows = data['rdata'];
            }
            else {
                _this.rows = [];
            }
        });
    };
    ViewTokensComponent.prototype.endDate = function () {
        this.error = '';
        //if(this.filterForm.controls.endDate.value){
        this.parsedStartDate = this.filterForm.controls.startDate.value['year'] + '-' + this.filterForm.controls.startDate.value['month'] + '-' + this.filterForm.controls.startDate.value['day'];
        this.parsedEndDate = this.filterForm.controls.endDate.value['year'] + '-' + this.filterForm.controls.endDate.value['month'] + '-' + this.filterForm.controls.endDate.value['day'];
        if (Date.parse(this.parsedStartDate) > Date.parse(this.parsedEndDate)) {
            this.error = { isError: true, errorMessage: 'End date should be greater than Start date' };
        }
    };
    ViewTokensComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-tokens',
            template: __webpack_require__(/*! ./view-tokens.component.html */ "./src/app/web-dashboard/view-tokens/view-tokens.component.html"),
            styles: [__webpack_require__(/*! ./view-tokens.component.scss */ "./src/app/web-dashboard/view-tokens/view-tokens.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_data_web_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["WebDashboardService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ViewTokensComponent);
    return ViewTokensComponent;
}());



/***/ }),

/***/ "./src/app/web-dashboard/web-dashboard-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/web-dashboard/web-dashboard-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: WebDashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebDashboardRoutingModule", function() { return WebDashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _web_dashboard_web_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-dashboard/web-dashboard.component */ "./src/app/web-dashboard/web-dashboard/web-dashboard.component.ts");
/* harmony import */ var _webpush_charts_webpush_charts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webpush-charts/webpush-charts.component */ "./src/app/web-dashboard/webpush-charts/webpush-charts.component.ts");
/* harmony import */ var _safaripushconfig_safaripushconfig_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../safaripushconfig/safaripushconfig.component */ "./src/app/safaripushconfig/safaripushconfig.component.ts");
/* harmony import */ var _web_engagement_web_engagement_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./web-engagement/web-engagement.component */ "./src/app/web-dashboard/web-engagement/web-engagement.component.ts");
/* harmony import */ var _web_template_web_template_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./web-template/web-template.component */ "./src/app/web-dashboard/web-template/web-template.component.ts");
/* harmony import */ var _view_tokens_view_tokens_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-tokens/view-tokens.component */ "./src/app/web-dashboard/view-tokens/view-tokens.component.ts");
/* harmony import */ var _segments_segments_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./segments/segments.component */ "./src/app/web-dashboard/segments/segments.component.ts");
/* harmony import */ var _web_notification_web_notifications_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./web-notification/web-notifications.component */ "./src/app/web-dashboard/web-notification/web-notifications.component.ts");
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
                path: 'dashboard',
                component: _web_dashboard_web_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["WebDashboardComponent"],
                data: {
                    title: 'Web Dashboard'
                }
            },
            {
                path: 'webpush-charts',
                component: _webpush_charts_webpush_charts_component__WEBPACK_IMPORTED_MODULE_3__["WebpushChartsComponent"],
                data: {
                    title: 'Charts'
                }
            },
            {
                path: 'web-engagement',
                component: _web_engagement_web_engagement_component__WEBPACK_IMPORTED_MODULE_5__["WebEngagementComponent"],
                data: {
                    title: 'Web-Engagement'
                }
            },
            {
                path: 'segments',
                component: _segments_segments_component__WEBPACK_IMPORTED_MODULE_8__["SegmentsComponent"],
                data: {
                    title: 'Segments'
                }
            },
            {
                path: 'web-notification',
                component: _web_notification_web_notifications_component__WEBPACK_IMPORTED_MODULE_9__["WebNotificationsComponent"],
                data: {
                    title: 'Web Notification'
                }
            },
            {
                path: 'tokens',
                component: _view_tokens_view_tokens_component__WEBPACK_IMPORTED_MODULE_7__["ViewTokensComponent"],
                data: {
                    title: 'Tokens'
                }
            },
            {
                path: 'web-template',
                component: _web_template_web_template_component__WEBPACK_IMPORTED_MODULE_6__["WebTemplateComponent"],
                data: {
                    title: 'Web-Template'
                }
            },
            {
                path: 'safaripushconfig',
                component: _safaripushconfig_safaripushconfig_component__WEBPACK_IMPORTED_MODULE_4__["SafaripushconfigComponent"],
                data: {
                    title: 'Safari Push Config'
                }
            }
        ]
    }
];
var WebDashboardRoutingModule = /** @class */ (function () {
    function WebDashboardRoutingModule() {
    }
    WebDashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], WebDashboardRoutingModule);
    return WebDashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/web-dashboard/web-dashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/web-dashboard/web-dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: WebDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebDashboardModule", function() { return WebDashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _web_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web-dashboard-routing.module */ "./src/app/web-dashboard/web-dashboard-routing.module.ts");
/* harmony import */ var _web_dashboard_web_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web-dashboard/web-dashboard.component */ "./src/app/web-dashboard/web-dashboard/web-dashboard.component.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _webpush_charts_webpush_charts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./webpush-charts/webpush-charts.component */ "./src/app/web-dashboard/webpush-charts/webpush-charts.component.ts");
/* harmony import */ var _web_engagement_web_engagement_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./web-engagement/web-engagement.component */ "./src/app/web-dashboard/web-engagement/web-engagement.component.ts");
/* harmony import */ var _web_template_web_template_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./web-template/web-template.component */ "./src/app/web-dashboard/web-template/web-template.component.ts");
/* harmony import */ var _view_tokens_view_tokens_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-tokens/view-tokens.component */ "./src/app/web-dashboard/view-tokens/view-tokens.component.ts");
/* harmony import */ var _segments_segments_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./segments/segments.component */ "./src/app/web-dashboard/segments/segments.component.ts");
/* harmony import */ var _safaripushconfig_safaripushconfig_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../safaripushconfig/safaripushconfig.component */ "./src/app/safaripushconfig/safaripushconfig.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/directives/match-height.directive */ "./src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_highcharts_chart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-highcharts-chart */ "./node_modules/angular-highcharts-chart/fesm5/angular-highcharts-chart.js");
/* harmony import */ var _web_notification_web_notifications_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./web-notification/web-notifications.component */ "./src/app/web-dashboard/web-notification/web-notifications.component.ts");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var WebDashboardModule = /** @class */ (function () {
    function WebDashboardModule() {
    }
    WebDashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["NgxChartsModule"],
                _web_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["WebDashboardRoutingModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
                _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_14__["MatchHeightModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                angular_highcharts_chart__WEBPACK_IMPORTED_MODULE_16__["AngularHighchartsChartModule"],
                ngx_ui_switch__WEBPACK_IMPORTED_MODULE_18__["UiSwitchModule"]
            ],
            declarations: [
                _web_dashboard_web_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["WebDashboardComponent"],
                _webpush_charts_webpush_charts_component__WEBPACK_IMPORTED_MODULE_7__["WebpushChartsComponent"],
                _web_engagement_web_engagement_component__WEBPACK_IMPORTED_MODULE_8__["WebEngagementComponent"],
                _web_template_web_template_component__WEBPACK_IMPORTED_MODULE_9__["WebTemplateComponent"],
                _view_tokens_view_tokens_component__WEBPACK_IMPORTED_MODULE_10__["ViewTokensComponent"],
                _segments_segments_component__WEBPACK_IMPORTED_MODULE_11__["SegmentsComponent"],
                _web_notification_web_notifications_component__WEBPACK_IMPORTED_MODULE_17__["WebNotificationsComponent"],
                _safaripushconfig_safaripushconfig_component__WEBPACK_IMPORTED_MODULE_12__["SafaripushconfigComponent"]
            ]
        })
    ], WebDashboardModule);
    return WebDashboardModule;
}());



/***/ }),

/***/ "./src/app/web-dashboard/web-dashboard/web-dashboard.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/web-dashboard/web-dashboard/web-dashboard.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"text-alignment\">\r\n  <div class=\"row\"  *ngIf=\"sentData<=0\">\r\n        <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n        <ul class=\"nav nav-pills nav-fill navtop\" style =\" margin-top: 30px !important;\">\r\n          <li class=\"col-md-2\" style = \"flex:0 0 9%;\">\r\n          <a>Get Started</a></li>\r\n              <li class=\"nav-item\">\r\n                  <a class=\"nav-link active\" class=\"btn btn-outline-success\" href=\"#menu1\" data-toggle=\"tab\"><i class=\"icon-check font-medium-3 mr-2\"></i>Sign up and add a site</a>\r\n              </li>\r\n              <li class=\"nav-item\" *ngIf= \"subscriber > 0\">\r\n                   <a class=\"nav-link\"class=\"btn btn-outline-success\" href=\"#menu2\" data-toggle=\"tab\"><i class=\"icon-check font-medium-3 mr-2\"></i>Integrate click365 JS</a>\r\n              </li>\r\n              <li class=\"nav-item\" *ngIf= \"subscriber <= 0\">\r\n              <a class=\"nav-link\"class=\"btn btn-outline-danger\" href=\"#menu2\" data-toggle=\"tab\"><i class=\"fab\">2</i>Integrate click365 JS</a>\r\n          </li>\r\n              <li class=\"nav-item\" *ngIf= \"sentData > 0\">\r\n                  <a class=\"nav-link active\" class=\"btn btn-outline-success\" href=\"#menu3\" data-toggle=\"tab\"><i class=\"icon-check font-medium-3 mr-2\"></i>Send your first notification</a>\r\n              </li>\r\n              <li class=\"nav-item\" *ngIf =\"sentData<=0\">\r\n                  <a class=\"nav-link\" class=\"btn btn-outline-primary\" href=\"#menu3\" data-toggle=\"tab\" (click)=\"gotoCampaign()\"><i class=\"fab\">3</i>Send your first notification</a>\r\n              </li>\r\n          </ul>\r\n          <div class=\"tab-content float-right\" style =\" margin-top: 0px !important;padding: 5px;\">\r\n              <div class=\"tab-pane active\" role=\"tabpanel\" id=\"menu1\"></div>\r\n              <div class=\"tab-pane\" role=\"tabpanel\" id=\"menu2\"></div>\r\n              <div class=\"tab-pane\" role=\"tabpanel\" id=\"menu3\"></div>\r\n          </div>\r\n      </div>\r\n      </div>\r\n      </div>\r\n      </div>\r\n  <div class=\"row\" >\r\n  <div class=\"col-xl-3 col-lg-6 col-12\" *ngFor=\"let tile of tilesData;let i=index;\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"media align-items-stretch\">\r\n          <div class=\"p-2 text-center rounded-left pt-3 bg-primary\" *ngIf=\"i==0\">\r\n            <i class=\"icon-users font-large-2 text-white\" ></i>\r\n          </div>\r\n           <div class=\"p-2 text-center rounded-left pt-3 bg-success\"  *ngIf=\"i==1\">\r\n            <i class=\"icon-paper-plane font-large-2 text-white\" ></i>\r\n          </div>\r\n            <div class=\"p-2 text-center rounded-left pt-3 bg-info\"  *ngIf=\"i==2\">\r\n            <i class=\"icon-like font-large-2 text-white\" ></i>\r\n          </div>\r\n          <div class=\"p-2 text-center rounded-left pt-3 bg-warning\"  *ngIf=\"i==3\">\r\n            <i class=\"icon-envelope-open font-large-2 text-white\" ></i>\r\n          </div>\r\n          <div class=\"p-2 media-body\">\r\n            <h6>{{tile.label}}</h6>\r\n            <h5 class=\"text-bold-400 mb-0\">{{tile.count}}</h5>\r\n            <h6 class=\"text-bold-200 mb-0\">{{tile.weekCount}} in this week</h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" >\r\n<div class=\"col-md-12\">\r\n<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"card-title-wrap bar-success\">\r\n     <h4 class=\"card-title\">Dashboard Analytics</h4>\r\n   </div>\r\n </div>\r\n <div class=\"card-body\">\r\n  <div class=\"card-block\">\r\n    <div class=\"height-400\">\r\n      <ngx-charts-bar-vertical\r\n      [scheme]=\"ChartColorScheme\"\r\n      [results]=\"weeklyData\"\r\n      [gradient]=\"false\"\r\n      [xAxis]=\"true\"\r\n      [yAxis]=\"true\"\r\n      [legend]=\"false\"\r\n      [showXAxisLabel]=\"true\"\r\n      [showYAxisLabel]=\"true\"\r\n      xAxisLabel=\"X-AXIS\"\r\n      yAxisLabel=\"CURRENT WEEK REPORT\">\r\n    </ngx-charts-bar-vertical>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-lg-6 col-md-12\" *ngFor=\"let chart of charts\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title info\">{{chart.name}}</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <div class=\"height-400\" *ngIf=\"chart.chartType == 'bar'\">\r\n              <a class=\"btn btn-primary btn-raised mr-1\" data-original-title=\"\" style=\"float: right;\" title=\"\" (click)=\"gotoTokens()\" >view all</a>\r\n                <ngx-charts-bar-vertical [scheme]=\"ChartColorScheme\" [results]=\"chart.layout\" [gradient]=\"false\" [xAxis]=\"true\"\r\n                    [yAxis]=\"true\" [legend]=\"false\" [showXAxisLabel]=\"true\"\r\n                    [showYAxisLabel]=\"true\" [yAxisTicks]=\"chart.yAxisTicks\" [xAxisLabel]=\"chart.xaxis\" [yAxisLabel]=\"chart.yaxis\">\r\n                </ngx-charts-bar-vertical>\r\n            </div>\r\n            <div class=\"height-400\" *ngIf=\"chart.chartType == 'pie'\">\r\n                <!-- <ngx-charts-pie-chart [scheme]=\"ChartColorScheme\" [results]=\"chart.layout\" [legend]=\"true\" [explodeSlices]=\"false\"\r\n                    [labels]=\"true\" [doughnut]=\"false\" [gradient]=\"false\">\r\n                </ngx-charts-pie-chart> -->\r\n                <ngx-charts-advanced-pie-chart [view]=\"view\" [scheme]=\"ChartColorScheme\" [results]=\"chart.layout\"></ngx-charts-advanced-pie-chart>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"col-lg-4 col-md-12\">\r\n      <div class=\"card text-center\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title success\">Text Align Center</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <p class=\"card-text\">Gummi bears I love oat cake gingerbread donut cotton candy pie biscuit tart. Chocolate cake chocolate cake I love marzipan cookie macaroon. Tart I love I love carrot cake carrot cake chupa chups caramels. Carrot cake pastry cotton candy.</p>\r\n            <p class=\"card-text\">Dessert I love brownie biscuit topping I love chocolate cake gingerbread jelly beans. Chocolate cake cake cheesecake. Chocolate cake pastry macaroon.</p>\r\n            <a class=\"btn btn-raised btn-success\">Load More</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4 col-md-12\">\r\n      <div class=\"card text-right\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"card-title danger\">Text Align Right</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"card-block\">\r\n            <p class=\"card-text\">Gummi bears I love oat cake gingerbread donut cotton candy pie biscuit tart. Chocolate cake chocolate cake I love marzipan cookie macaroon. Tart I love I love carrot cake carrot cake chupa chups caramels. Carrot cake pastry cotton candy.</p>\r\n            <p class=\"card-text\">Dessert I love brownie biscuit topping I love chocolate cake gingerbread jelly beans. Chocolate cake cake cheesecake. Chocolate cake pastry macaroon.</p>\r\n            <a class=\"btn btn-raised btn-danger\">Load More</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n</section>\r\n\r\n<div class=\"row\" >\r\n  <div class=\"col-lg-6 col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <div class=\"card-title-wrap bar-success\">\r\n         <h4 class=\"card-title\">User Statistics</h4>\r\n         <a class=\"btn btn-primary btn-raised mr-1\" data-original-title=\"\" style=\"float: right;\" title=\"\" (click)=\"gotoTokens()\" >view all</a>\r\n       </div>\r\n     </div>\r\n     <div class=\"card-body\">\r\n      <div class=\"card-block\">\r\n        <div class=\"height-400\">\r\n          <ngx-charts-bar-vertical\r\n          [scheme]=\"ChartColorScheme\"\r\n          [results]=\"userchart\"\r\n          [gradient]=\"false\"\r\n          [xAxis]=\"true\"\r\n          [yAxis]=\"true\"\r\n          [legend]=\"false\"\r\n          [showXAxisLabel]=\"true\"\r\n          [showYAxisLabel]=\"true\"\r\n          xAxisLabel=\"Date\"\r\n          yAxisLabel=\"Subscribers\">\r\n        </ngx-charts-bar-vertical>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n<div class=\"col-lg-6 col-md-12\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <div class=\"card-title-wrap bar-success\">\r\n        <h4 class=\"card-title\">Subscriptions By City</h4>\r\n       </div>\r\n     </div>\r\n     <div class=\"card-body\">\r\n       <div class=\"card-block\">\r\n         <select class=\"form-control\" name=\"state\" (change)=\"changeGraph($event.target.value)\">\r\n           <option value=\"\">Select State</option>\r\n           <option *ngFor=\"let state of states\" value=\"{{state.name}}\">{{state.name}}</option>\r\n         </select>\r\n          <div class=\"height-400\" *ngFor=\"let chart of cityChart\">\r\n            <ngx-charts-bar-vertical [scheme]=\"ChartColorScheme\" [results]=\"chart.layout\" [gradient]=\"false\" [xAxis]=\"true\"\r\n                [yAxis]=\"true\" [legend]=\"false\" [showXAxisLabel]=\"true\"\r\n                [showYAxisLabel]=\"true\" [yAxisTicks]=\"chart.yAxisTicks\" [xAxisLabel]=\"chart.xaxis\" [yAxisLabel]=\"chart.yaxis\">\r\n            </ngx-charts-bar-vertical>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n <ngb-tabset>\r\n              <ngb-tab title=\"Notifications\">\r\n                <ng-template ngbTabContent>\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n              <ngx-datatable class=\"material\" class=\"bootstrap\" [rows]=\"rows\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\"  [limit]=\"10\" >\r\n                <ngx-datatable-column name=\"Notification Title\" [width]=\"200\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    {{row.campaign_title}}\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"Notification Message\" [width]=\"300\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                   {{row.campaign_message}}\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"Total Sent\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    {{row.sent+row.not_sent}}\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"Sent Successfully\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    {{row.sent}}<span class=\"text-success ml-2\" *ngIf=\"row.received >0\">{{((row.sent/(row.sent+row.not_sent))*100) | number : '1.0-2'}}%</span>\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"Inprogress\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    {{(row.sent+row.not_sent)-row.received-row.not_sent}}<span class=\"text-success ml-2\">{{(((row.sent+row.not_sent)-row.received-row.not_sent)/(row.sent+row.not_sent)*100) | number : '1.0-2'}}%</span>\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"Delivered\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    {{row.received}}<span class=\"text-success ml-2\" *ngIf=\"row.received >0\">{{((row.received/row.sent)*100) | number : '1.0-2'}}%</span>\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"Bounced\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    {{row.not_sent}}<span class=\"text-success ml-2\" *ngIf=\"row.not_sent >0\">{{((row.not_sent/row.sent)*100) | number : '1.0-2'}}%</span>\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"Clicked\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    {{row.clicks}}<span class=\"text-success ml-2\" *ngIf=\"row.clicks >0\">{{((row.clicks/row.received)*100) | number : '1.0-2'}}% of delivered</span>\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"Action\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\r\n                   <a class=\"info p-0\" data-original-title=\"\" title=\"\" (click)=\"viewChart(row.campaign_id,'S')\" >\r\n                    <i class=\"fas ft-bar-chart-2 font-medium-3 mr-2\"></i>\r\n                    <a class=\"Info p-0\"  (click)=\"CopyWebDashboard(row.campaign_id)\">\r\n                    <i class=\"fas fa-copy font-medium-3 mr-2\"></i></a>\r\n                  </a>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n\r\n              </ngx-datatable>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </ng-template>\r\n  </ngb-tab>\r\n  <ngb-tab title=\"A/B Test Notifications\">\r\n    <ng-template ngbTabContent>\r\n\r\n<!--       <ngb-tabset>\r\n        <ngb-tab title=\"Overview\">\r\n        </ngb-tab>\r\n        <ngb-tab title=\"A/B Testing\">\r\n        </ngb-tab>\r\n      </ngb-tabset> -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n              <ngx-datatable class=\"material\" class=\"bootstrap\" [rows]=\"abTestingRows\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\"  [limit]=\"10\">\r\n\r\n                <!-- <ngx-datatable-column name=\"Test Type\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    {{row.type}}\r\n                  </ng-template>\r\n                </ngx-datatable-column> -->\r\n                <ngx-datatable-column name=\"Notification Title\" [width]=\"150\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template >\r\n                   <p> {{row.campaign_title[0]}} </p><br>\r\n                   <p> {{row.campaign_title[1]}} </p>\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n\r\n                <ngx-datatable-column name=\"Notification Message\" [width]=\"200\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                   <p> {{row.campaign_message[0]}} </p><br>\r\n                   <p> {{row.campaign_message[1]}} </p>\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"Sent\" valign=\"center\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template valign=\"center\">\r\n                    {{row.sent+row.not_sent}}\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"Inprogress\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template valign=\"center\">\r\n                    {{(row.sent+row.not_sent)-row.received-row.not_sent}}<span class=\"text-success ml-2\">{{(((row.sent+row.not_sent)-row.received-row.not_sent)/(row.sent+row.not_sent)*100) | number : '1.0-2'}}%</span>\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"Delivered\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    {{row.received}}<span class=\"text-success ml-2\" *ngIf=\"row.received >0\">{{((row.received/row.sent)*100) | number : '1.0-2'}}%</span>\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n\r\n                <ngx-datatable-column name=\"Bounced\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    {{row.not_sent}}<span class=\"text-success ml-2\" *ngIf=\"row.not_sent >0\">{{((row.not_sent/row.sent)*100) | number : '1.0-2'}}%</span>\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n\r\n                <ngx-datatable-column name=\"Clicked\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    {{row.clicks}}<span class=\"text-success ml-2\" *ngIf=\"row.clicks >0\">{{((row.clicks/row.received)*100) | number : '1.0-2'}}% of delivered</span>\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"Action\">\r\n                  <ng-template let-row=\"row\" ngx-datatable-cell-template let-rowIndex=\"rowIndex\">\r\n                   <a class=\"info p-0\" data-original-title=\"\" title=\"\" (click)=\"viewChart(row.campaign_id,'AB')\" >\r\n                    <i class=\"fas ft-bar-chart-2 font-medium-3 mr-2\"></i>\r\n                  </a>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              </ngx-datatable>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </ngb-tab>\r\n</ngb-tabset>\r\n\r\n<!-- Bar Chart Starts -->\r\n<!-- <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <div class=\"card-title-wrap bar-primary\">\r\n                    <h4 class=\"card-title\">Bar Chart</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\" >\r\n                <div class=\"card-block\">\r\n                    <div id=\"bar-bar1\" class=\"height-400\">\r\n                        <canvas baseChart class=\"chart\" [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\" [colors]=\"barChartColors\"\r\n                            [legend]=\"barChartLegend\" [chartType]=\"barChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n<!-- Bar Chart Ends -->\r\n\r\n<!-- Bar Chart Starts -->\r\n<!-- <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <div class=\"card-title-wrap bar-primary\">\r\n                    <h4 class=\"card-title\">Bar Chart</h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div id=\"bar-bar1\" class=\"height-400\">\r\n                        <canvas baseChart class=\"chart\" [datasets]=\"aaabarChartData\" [labels]=\"aaabarChartLabels\" [options]=\"aaabarChartOptions\" [colors]=\"barChartColors\"\r\n                            [legend]=\"aaabarChartLegend\" [chartType]=\"aaabarChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n<!-- Bar Chart Ends -->\r\n"

/***/ }),

/***/ "./src/app/web-dashboard/web-dashboard/web-dashboard.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/web-dashboard/web-dashboard/web-dashboard.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  direction: rtl; }\n\n.navtop {\n  margin-top: 50px; }\n\n.tab-content {\n  padding: 40px;\n  margin-top: -20px; }\n\n.fab {\n  width: 24px;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 17px;\n  border: 1px solid #9288d0;\n  margin-right: 0.75rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLWRhc2hib2FyZC93ZWItZGFzaGJvYXJkL0M6XFxVc2Vyc1xcTVJUMjBcXERlc2t0b3BcXFVNXFx1c2VybWFuYWdlbWVudC9zcmNcXGFwcFxcd2ViLWRhc2hib2FyZFxcd2ViLWRhc2hib2FyZFxcd2ViLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWMsRUFDakI7O0FBQ0Q7RUFDSSxpQkFBZSxFQUNsQjs7QUFDRDtFQUNJLGNBQWE7RUFDYixrQkFBaUIsRUFDcEI7O0FBRUQ7RUFFRSxZQUFXO0VBRVgsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLDBCQUF5QjtFQUN6QixzQkFBcUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC93ZWItZGFzaGJvYXJkL3dlYi1kYXNoYm9hcmQvd2ViLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBkaXJlY3Rpb246IHJ0bDtcclxufVxyXG4ubmF2dG9we1xyXG4gICAgbWFyZ2luLXRvcDo1MHB4O1xyXG59XHJcbi50YWItY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbn1cclxuXHJcbi5mYWIge1xyXG5cclxuICB3aWR0aDogMjRweDtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzkyODhkMDtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/web-dashboard/web-dashboard/web-dashboard.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/web-dashboard/web-dashboard/web-dashboard.component.ts ***!
  \************************************************************************/
/*! exports provided: WebDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebDashboardComponent", function() { return WebDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_data_web_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data/web-dashboard.service */ "./src/app/shared/data/web-dashboard.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebDashboardComponent = /** @class */ (function () {
    // barChart
    /* public aaabarChartOptions = {
             title: {
               display: true,
               text: 'Chart.js Bar Chart - Stacked'
             },
             tooltips: {
               mode: 'index',
               intersect: false
             },
             responsive: true,
             scales: {
               xAxes: [{
                 stacked: true,
               }],
               yAxes: [{
                 stacked: true
               }]
             }
           };
   
     public aaabarChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
     // public barChartType = 'bar';
     // public barChartLegend =  true;
   
   
      aaabarChartData = {
         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
         datasets: [{
           label: 'Dataset 1',
           stack: 'Stack 0',
           data: [28, 48, 40, 19, 86, 27, 90]
         }, {
           label: 'Dataset 2',
           stack: 'Stack 0',
           data: [65, 59, 80, 81, 56, 55, 40]
         }]
       };
   
     public aaabarChartType = 'bar';
     public aaabarChartLegend =  true;*/
    //     barChartData: any[] = [
    //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    // ];
    // barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    // barChartOptions: any = {
    //   scaleShowVerticalLines: false,
    //   responsive: true,
    //   maintainAspectRatio: false
    // };
    // barChartData: any[] = [
    //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    // ];
    /*barChartColors: Array<any> = [
    
    
      {
    
        backgroundColor: 'rgba(255, 95, 32, 0.8)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
      {
    
        backgroundColor: 'rgba(102, 110, 232, 0.8)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
    
    ];*/
    function WebDashboardComponent(webDashboardService, router) {
        var _this = this;
        this.webDashboardService = webDashboardService;
        this.router = router;
        this.ChartColorScheme = {
            domain: ['#666EE8', '#FF9149', '#FF4961', '#AAAAAA']
        };
        this.barChartColorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        this.pieChartColorScheme = {
            domain: ['#666EE8', '#28D094', '#FF4961', '#AAAAAA']
        };
        this.view = [900, 350];
        this.userchart = [];
        this.tilesData = [];
        this.rows = [];
        this.abTestingRows = [];
        this.states = [];
        this.webDashboardService.getStats().then(function (data) {
            console.log(data['stats']);
            var chartData = [];
            var barChartData = [];
            var baryAxisTicks = [];
            var pieChartData = [];
            if (data['stats']) {
                for (var i = 0; i < data['stats'].length; i++) {
                    //console.log(data['buildCharts'][i]['chartData']);
                    if (data['stats'][i]['type'] == 'location') {
                        _this.states.push({ 'name': data['stats'][i]['value'] });
                        barChartData.push({ "name": data['stats'][i]['value'], "value": data['stats'][i]['counts'] });
                        baryAxisTicks.push(data['stats'][i]['counts']);
                    }
                    if (data['stats'][i]['type'] == 'browser') {
                        pieChartData.push({ "name": data['stats'][i]['value'], "value": data['stats'][i]['counts'] });
                    }
                }
            }
            chartData.push({ "layout": barChartData.slice(), "yAxisTicks": baryAxisTicks, "name": 'Subscriptions By State', "chartType": 'bar', "xaxis": 'State', "yaxis": 'Number Of Subscribers' });
            chartData.push({ "layout": pieChartData.slice(), "name": 'Subscriptions By Browser', "chartType": 'pie', "xaxis": 'Browsers', "yaxis": 'Number Of Subscribers' });
            _this.charts = chartData;
        });
        this.webDashboardService.getWeekDashboardTiles().then(function (data) {
            if (data['status'] == 'success') {
                _this.weeklyData = data['report'];
                console.log('this.weeklyData ' + JSON.stringify(_this.weeklyData));
                _this.webDashboardService.getWebDashboardTiles().then(function (data) {
                    if (data['status'] == 'success') {
                        _this.tilesData = data['stats'];
                        var dates = ["0", "12", "0", "24"];
                        console.log('this.weeklyData1 ' + JSON.stringify(_this.weeklyData));
                        _this.tilesData = _this.tilesData.map(function (ob, i) { return (__assign({}, ob, { "weekCount": _this.weeklyData[i]['value'] })); });
                    }
                });
            }
        });
        this.webDashboardService.getWebDashboardTiles().then(function (data) {
            if (data['status'] == 'success') {
                _this.tilesData = data['stats'];
                var dates = ["0", "12", "0", "24"];
                console.log('this.weeklyData1 ' + JSON.stringify(_this.weeklyData));
                _this.tilesData = _this.tilesData.map(function (ob, i) { return (__assign({}, ob, { "weekCount": _this.weeklyData[i]['value'] })); });
            }
        });
        this.webDashboardService.getCampaignCountByOrg().then(function (data) {
            if (data['status'] == 'success') {
                console.log('sentData - ' + JSON.stringify(data));
                _this.sentData = data['count'][0]['count'];
            }
        });
        this.webDashboardService.getSubscriberCountByOrg().then(function (data) {
            console.log('subscriber - ' + JSON.stringify(data));
            if (data['status'] == 'success') {
                _this.subscriber = data['count'][0]['count'];
            }
        });
        this.webDashboardService.getWebUserStats().then(function (data) {
            if (data['status'] == 'success') {
                _this.userchart = data['stats'];
            }
            // console.log(data['stats']);
            // let chartData = [];
            // let barChartData = [];
            // let baryAxisTicks = [];
            // let pieChartData = [];
            // for(let i = 0; i < data['stats'].length; i++){
            //     barChartData.push({"name": data['stats'][i]['subscribedate'], "value": data['stats'][i]['count']});
            //     baryAxisTicks.push(data['stats'][i]['count']);
            //   }
            // chartData.push({"layout": [...barChartData], "yAxisTicks": baryAxisTicks, "name": 'Subscriptions By Date', "chartType": 'bar', "xaxis": 'Date', "yaxis": 'Number Of Subscribers'});
            // //chartData.push({"layout": [...pieChartData], "name": 'Subscriptions By Browser', "chartType": 'pie', "xaxis": 'Browsers', "yaxis": 'Number Of Subscribers'});
            // this.charts.push(chartData);
        });
    }
    WebDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.webDashboardService.getWebNotificationReportNonAB().then(function (data) {
            if (data['status'] == 'success') {
                _this.rows = data['stats'];
                //this.rows = data['stats'].filter(h => h.campaign_type != 'AB');
                //let abTestingRows1 =data['stats'].filter(h => h.campaign_type == 'AB');
                //console.log(JSON.stringify(abTestingRows1));
                //this.abTestingRows =JSON.parse(JSON.stringify(abTestingRows1));
                // alert(typeof(this.abTestingRows));
                //alert(this.abTestingRows[0].campaign_title);
                //alert(typeof(this.abTestingRows[0].campaign_title));
            }
        });
        this.webDashboardService.getWebNotificationReportABall().then(function (data) {
            if (data['status'] == 'success') {
                _this.abTestingRows = data['stats'];
                // let abTestingRows1 =data['stats'].filter(h => h.campaign_type == 'AB');
                // console.log(JSON.stringify(abTestingRows1));
                // this.abTestingRows =JSON.parse(JSON.stringify(abTestingRows1));
                // alert(typeof(this.abTestingRows));
                // alert(this.abTestingRows[0].campaign_title);
                // alert(typeof(this.abTestingRows[0].campaign_title));
            }
        });
    };
    WebDashboardComponent.prototype.changeGraph = function (state) {
        var _this = this;
        this.webDashboardService.getCities(state).then(function (data) {
            if (data['status'] == 'success') {
                var chartData = [];
                var barChartData = [];
                var baryAxisTicks = [];
                for (var i = 0; i < data['stats'].length; i++) {
                    //console.log(data['buildCharts'][i]['chartData']);
                    if (data['stats'][i]['type'] == 'location') {
                        //this.states.push({'name': data['stats'][i]['value']});
                        barChartData.push({ "name": data['stats'][i]['value'], "value": data['stats'][i]['counts'] });
                        baryAxisTicks.push(data['stats'][i]['counts']);
                    }
                }
                chartData.push({ "layout": barChartData.slice(), "yAxisTicks": baryAxisTicks, "name": 'Subscriptions By City', "chartType": 'bar', "xaxis": 'City', "yaxis": 'Number Of Subscribers' });
                //chartData.push({"layout": [...pieChartData], "name": 'Subscriptions By Browser', "chartType": 'pie', "xaxis": 'Browsers', "yaxis": 'Number Of Subscribers'});
                _this.cityChart = chartData;
            }
            else {
                _this.cityChart = [];
            }
        });
    };
    WebDashboardComponent.prototype.encrypt = function (id) {
        return btoa((id * 1000 * 10 * 5362).toString());
    };
    WebDashboardComponent.prototype.viewChart = function (campaignid, type) {
        var encrypt = this.encrypt(campaignid);
        this.router.navigate(['/web-dashboard/webpush-charts'], { queryParams: { id: encrypt, type: type } });
    };
    WebDashboardComponent.prototype.gotoTokens = function () {
        this.router.navigate(['/web-dashboard/tokens'], {});
    };
    WebDashboardComponent.prototype.gotoCampaign = function () {
        this.router.navigate(['/web-dashboard/web-engagement'], {});
    };
    WebDashboardComponent.prototype.CopyWebDashboard = function (Id) {
        this.router.navigate(['/web-dashboard/web-engagement'], { queryParams: { id: Id } });
    };
    WebDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-web-dashboard',
            template: __webpack_require__(/*! ./web-dashboard.component.html */ "./src/app/web-dashboard/web-dashboard/web-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./web-dashboard.component.scss */ "./src/app/web-dashboard/web-dashboard/web-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_data_web_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["WebDashboardService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WebDashboardComponent);
    return WebDashboardComponent;
}());



/***/ }),

/***/ "./src/app/web-dashboard/web-engagement/web-engagement.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/web-dashboard/web-engagement/web-engagement.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"filter\" class=\"mb-3\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"content-header\"><i class=\"far fa-paper-plane font-medium-3 mr-2\" style=\"border: 1px solid grey;border-radius: 32px;padding: 13px;background: grey;color: white;\"></i>&nbsp;One-Time Campaigns<br><p>Send one-time messages to your subscribers</p></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"!ab && !subscription\">\r\n        <div class=\"col-sm-8\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <form class=\"form\" #f=\"ngForm\"><!--  (ngSubmit)=\"f.form.valid && scheduleNotification(f.form.value)\" -->\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-6\" style=\"float:right;\">\r\n                                    <a (click)=\"copyCampaign()\" class=\"btn btn-raised mr-1 shadow-z-2 btn-primary\">Copy from the previous Campaign</a>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-6\">\r\n                                    <h4 class=\"section\">Content</h4>\r\n                                </div>\r\n                                <div class=\"col-sm-6\" style=\"text-align: right;\">\r\n                                    <a (click)=\"abtesting()\"><i class=\"ft-plus-circle\"></i>Try out A/B testing</a>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-body\">\r\n                                <div>\r\n                                    <div class=\"form-group\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-sm-6\">\r\n                                                <label for=\"floattitle\">Title</label>\r\n                                            </div>\r\n                                            <div class=\"col-sm-6\" style=\"text-align: right;\">\r\n                                                <p>\r\n                                                    <span *ngIf=\"!floattitle.value\">{{longTxt}}/96</span>\r\n                                                    <span *ngIf=\"floattitle.value && floattitle.value.length > 0\">{{longTxt + floattitle.value.length}}/96</span>\r\n                                                </p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <input type=\"text\" class=\"form-control\" id=\"floattitle\" name=\"floattitle\" [(ngModel)]=\"form.floattitle\" required #floattitle=\"ngModel\"  placeholder=\"96 characters maximum\" maxlength=\"96\" [ngClass]=\"{ 'is-invalid': f.submitted && !floattitle.valid }\">\r\n                                        <small class=\"form-text text-muted danger\" *ngIf=\"!floattitle.valid && (floattitle.dirty || floattitle.touched)\">Title is required!</small>\r\n                                        <small class=\"form-text text-muted danger\" *ngIf=\"f.submitted && !floattitle.valid && !floattitle.touched\">Title is required!</small>\r\n                                    </div>\r\n                                </div>\r\n                                <div>\r\n                                    <div class=\"form-group\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-sm-6\">\r\n                                                <label for=\"floatmessage\">Message</label>\r\n                                            </div>\r\n                                            <div class=\"col-sm-6\" style=\"text-align: right;\">\r\n                                                <p>\r\n                                                    <span *ngIf=\"!floatmessage.value\">{{longTxt}}/255</span>\r\n                                                    <span *ngIf=\"floatmessage.value && floatmessage.value.length > 0\">{{longTxt + floatmessage.value.length}}/255</span>\r\n                                                </p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <input type=\"text\" class=\"form-control\" id=\"floatmessage\" name=\"floatmessage\" [(ngModel)]=\"form.floatmessage\" required #floatmessage=\"ngModel\"  placeholder=\"255 characters maximum\" maxlength=\"255\" [ngClass]=\"{ 'is-invalid': f.submitted && !floatmessage.valid }\">\r\n                                        <small class=\"form-text text-muted danger\" *ngIf=\"!floatmessage.valid && (floatmessage.dirty || floatmessage.touched)\">Message is required!</small>\r\n                                        <small class=\"form-text text-muted danger\" *ngIf=\"f.submitted && !floatmessage.valid && !floatmessage.touched\">Message is required!</small>\r\n                                    </div>\r\n                                </div>\r\n                                <div>\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"floaturl\">Landing Page URL</label>\r\n                                        <input type=\"url\" class=\"form-control\" id=\"floaturl\" name=\"floaturl\" [(ngModel)]=\"form.floaturl\" pattern=\"https?://.+\"  required #floaturl=\"ngModel\"  placeholder=\"Enter URL with http:// or https://\" [ngClass]=\"{ 'is-invalid': f.submitted && !floaturl.valid }\">\r\n                                        <!-- <small class=\"form-text text-muted danger\" *ngIf=\"!floaturl.valid && (floaturl.dirty || floaturl.touched)\">URL is required!</small>\r\n                                        <small class=\"form-text text-muted danger\" *ngIf=\"floaturl.errors.pattern\">Enter a valid URL</small> -->\r\n                                        <small *ngIf=\"(floaturl.touched || f.submitted) && !floaturl.valid\" class=\"form-text text-muted danger\">\r\n                                            <small *ngIf=\"floaturl.errors.required\">URL is required!</small>\r\n                                            <small *ngIf=\"floaturl.errors.pattern\">Enter a valid URL</small>\r\n                                        </small>\r\n                                        <!-- <small class=\"form-text text-muted danger\" *ngIf=\"f.submitted && !floaturl.valid && !floaturl.touched\">URL is required!</small> -->\r\n                                    </div>\r\n                                </div>\r\n                                <div>\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"image\">Image</label>\r\n                                        <p>File type supported: jpg, jpeg, png. Recommended Size: 192x192.</p>\r\n                                        <img *ngIf=\"!url\" src=\"assets/img/logo.png\" style=\"background: black;\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                        <img *ngIf=\"url\" src=\"{{url}}\" />\r\n                                        &nbsp;\r\n                                        <div *ngIf=\"!copyCampaignBoolean\">\r\n                                          <label #imageLabel class=\"btn btn-raised btn-sm btn-danger mr-1\" color=\"primary\" for=\"file-upload\">\r\n                                            Upload\r\n                                          </label>\r\n                                          <input type=\"file\" class=\"form-control\" id=\"file-upload\" name=\"image\" [(ngModel)]=\"form.image\" required #image=\"ngModel\" (change)=\"uploadmembershipIcon($event.target.files,'url')\" [ngClass]=\"{ 'is-invalid': f.submitted && !image.valid }\" /><!-- (change)=\"uploadSubmit($event.target.files)\"(change)=\"addFile($event,'url')\"  -->\r\n                                          <small class=\"form-text text-muted danger\" *ngIf=\"f.submitted  && !image.touched\">Image is required!</small>\r\n                                          <i *ngIf=\"loader\" class=\"fas fa-spinner fa fa-spin\"></i><p *ngIf=\"loader\" style=\"color:red;\">&nbsp;Please wait while the image uploads.</p>\r\n                                        </div>\r\n                                        <div *ngIf=\"copyCampaignBoolean\">\r\n                                          <button type=\"button\" class=\"btn btn-danger btn-raised mr-1\" (click)=\"copyCampaignBoolean = !copyCampaignBoolean\">Change image</button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div>\r\n                                    <div class=\"form-group\">\r\n                                        <input type=\"checkbox\" name=\"bigIm\" value=\"bigIm\" (change)=\"addBigImage($event.target.checked)\">&nbsp;Show Big Image<br>&nbsp;&nbsp;Big image is only supported on Chrome (56+) browser. Image may get cropped on android devices.<br><br>\r\n                                        <div *ngIf=\"showBigImage\">\r\n                                            <label for=\"bigImage\">Image</label>\r\n                                            <p>File type supported: jpg, jpeg, png. Recommended Size: 360x240.</p>\r\n                                            <img *ngIf=\"!bigImageUrl && !defaultBigImage\" src=\"assets/img/logo.png\" style=\"background: black;\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                            <img *ngIf=\"!bigImageUrl && defaultBigImage\" src=\"{{defaultBigImage}}\" />\r\n                                            <img *ngIf=\"bigImageUrl\" src=\"{{bigImageUrl}}\" />\r\n                                            <div *ngIf=\"(copyCampaignBoolean || !copyCampaignBoolean) && !bigImageUrl\">\r\n                                              &nbsp;<label #bigImageLabel class=\"btn btn-raised btn-sm btn-danger mr-1\" color=\"primary\" for=\"file-upload1\">\r\n                                              Upload Image\r\n                                              </label>\r\n                                              <input type=\"file\" class=\"form-control\" id=\"file-upload1\" name=\"bigImage\" [(ngModel)]=\"form.bigImage\" required #bigImage=\"ngModel\" (change)=\"uploadBigImage($event.target.files,'bigImage')\" [ngClass]=\"{ 'is-invalid': f.submitted && !bigImage.valid }\" /><!-- (change)=\"uploadSubmit($event.target.files)\"(change)=\"addFile($event,'url')\"  -->\r\n                                              <small class=\"form-text text-muted danger\" *ngIf=\"f.submitted && !bigImage.valid && !bigImage.touched\">Image is required!</small>\r\n                                              <i *ngIf=\"imageloader\" class=\"fas fa-spinner fa fa-spin\"></i><p *ngIf=\"imageloader\" style=\"color:red;\">&nbsp;Please wait while the image uploads.</p>\r\n                                            </div>\r\n                                            <div *ngIf=\"copyCampaignBoolean && bigImageUrl\">\r\n                                              <button type=\"button\" class=\"btn btn-danger btn-raised mr-1\" (click)=\"copyCampaignBoolean = !copyCampaignBoolean\">Change image</button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!-- <input type=\"checkbox\" name=\"buttons\">&nbsp;Show Button(s) on Chrome Notification<br>&nbsp;&nbsp;Call to action buttons are only supported on Chrome browser. -->\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <h4 class=\"section\">Audience</h4>\r\n                                <p>Send this notification to</p>\r\n                                <input type=\"radio\" name=\"segment\" [(ngModel)]=\"form.segment\" id=\"subscribers\" value=\"all\" (change)=\"selectSegment($event)\" required>&nbsp;All Subscribers<br>\r\n                                <input type=\"radio\" name=\"segment\" [(ngModel)]=\"form.segment\" id=\"segments\" #segment=\"ngModel\" value=\"segments\" (change)=\"selectSegment($event)\" required>&nbsp;My Segments<br><br>\r\n                                <small class=\"form-text text-muted danger\" *ngIf=\"f.submitted && !segment.valid && !segment.touched\">Please select a Segment</small>\r\n                                <div class=\"card-body border\" style=\"border-radius: 8px !important;\" *ngIf=\"showSegments\">\r\n                                    <div class=\"card-block\">\r\n                                        <div class=\"col-lg-12\">\r\n                                            <!-- <fieldset class=\"col-lg-12 segments checkbox\" *ngFor=\"let segment of segments; let i = index;\"> -->\r\n                                                <div class=\"col-lg-12\" *ngFor=\"let segment of segments\">\r\n                                                <input type=\"checkbox\" id=\"{{segment.id}}\" (change)=\"onChange(segment.id,$event.target.checked)\" required />&nbsp;<label>{{segment.name}}</label></div>\r\n                                            <!-- </fieldset> --><!-- <small class=\"form-text text-muted danger\" *ngIf=\"f.submitted && !seg.valid && !seg.touched\">Please select a Segment</small> -->\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <h4 class=\"section\">Campaign Settings</h4>\r\n                                <!-- <input type=\"checkbox\">&nbsp;Auto-hide notification after 20 seconds.\r\n                                <p>&nbsp;&nbsp;Don't attempt sending this notification</p>\r\n                                <div class=\"row\">\r\n                                    <fieldset class=\"col-sm-3\">\r\n                                        <div class=\"input-group\">\r\n                                            <select id=\"day\" class=\"form-control\" name=\"day\" [(ngModel)]=\"form.day\">\r\n                                                <option *ngFor=\"let day of days\" value=\"{{day}}\">{{day}}</option>\r\n                                            </select>\r\n                                            <div class=\"input-group-append\">\r\n                                                <span class=\"input-group-text\" id=\"basic-addon2\">days</span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </fieldset>\r\n                                    <fieldset class=\"col-sm-3\">\r\n                                        <div class=\"input-group\">\r\n                                            <select id=\"hours\" class=\"form-control\" name=\"hours\" [(ngModel)]=\"form.hours\">\r\n                                                <option *ngFor=\"let hour of hours\" value=\"{{hour}}\">{{hour}}</option>\r\n                                            </select>\r\n                                            <div class=\"input-group-append\">\r\n                                                <span class=\"input-group-text\" id=\"basic-addon2\">hours</span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </fieldset>\r\n                                    <fieldset class=\"col-sm-3\">\r\n                                        <div class=\"input-group\">\r\n                                            <select id=\"minutes\" class=\"form-control\" name=\"minutes\" [(ngModel)]=\"form.minutes\">\r\n                                                <option *ngFor=\"let minute of minutes\" value=\"{{minute}}\">{{minute}}</option>\r\n                                            </select>\r\n                                            <div class=\"input-group-append\">\r\n                                                <span class=\"input-group-text\" id=\"basic-addon2\">minutes</span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </fieldset>\r\n                                </div><br><br> -->\r\n\r\n                                <input type=\"checkbox\" [(ngModel)]=\"form.scheduled\" name=\"scheduled\" (click)=\"schedule($event)\">&nbsp;Schedule notification for a later date\r\n                                <div class=\"card-body\" style=\"border-radius: 25px !important;background-color: #e9ecef !important;\" *ngIf=\"event\">\r\n                                    <div class=\"card-block\">\r\n                                        <div class=\"col-lg-12\">\r\n                                            <fieldset class=\"form-group\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-lg-6\">\r\n                                                        <label>Date</label>\r\n                                                    </div>\r\n                                                    <!-- <div class=\"col-lg-6\">\r\n                                                        <label>Time</label>\r\n                                                    </div> -->\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-lg-6\">\r\n                                                        <div class=\"input-group\">\r\n                                                            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" [(ngModel)]=\"form.scheduledate\" name=\"scheduledate\" #scheduledate=\"ngModel\" ngbDatepicker [dayTemplate]=\"customDay\"\r\n                                                            [markDisabled]=\"isDisabled\" [minDate]=\"minDate\" #d3=\"ngbDatepicker\" required (ngModelChange)=\"disableTimeByDate($event,'normal')\">\r\n                                                            <div class=\"input-group-append\">\r\n                                                                <div class=\"input-group-text\" (click)=\"d3.toggle()\">\r\n                                                                    <i class=\"fa fa-calendar\" style=\"cursor: pointer;\"></i>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n\r\n                                                    <!-- <div class=\"col-lg-6\">\r\n                                                        <ngb-timepicker [(ngModel)]=\"form.time\" name=\"time\" #time=\"ngModel\"></ngb-timepicker>\r\n                                                    </div> -->\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-lg-6\">\r\n                                                        <label>Time</label>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-lg-6\">\r\n                                                        <ngb-timepicker [(ngModel)]=\"form.time\" (ngModelChange)=\"disabletime($event,'normal')\" name=\"time\" #time=\"ngModel\" required></ngb-timepicker>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <label>The notification will be sent at this time according to your current timezone (GMT+00:00 Etc/GMT)</label>\r\n                                            </fieldset>\r\n                                        </div>\r\n                                    </div>\r\n                                </div><br><br>\r\n                            </div>\r\n                            <div class=\"form-group\" style=\"float: right;\">\r\n                                <button type=\"submit\" class=\"btn btn-success btn-raised\" [disabled]=\"!f.valid\" *ngIf=\"form.scheduled\" (click)=\"scheduleNotification(f.form.value)\">Schedule</button>\r\n                                <button type=\"submit\" class=\"btn btn-success btn-raised\" [disabled]=\"!f.valid\" *ngIf=\"!form.scheduled\" (click)=\"scheduleNotification(f.form.value)\">Send Now <i *ngIf=\"submitted\" class=\"fas fa-spinner fa fa-spin\"></i></button>\r\n                            </div>\r\n                            <div class=\"form-group\" style=\"float: right;\">\r\n                           <button type=\"submit\" class=\"btn btn-success btn-raised mr-1\" (click)=\"saveTemplate(f.form.value)\" [disabled]= \"!form.floattitle || !form.floatmessage || !form.image || form.scheduled || form.segment \" >Save As Template</button>\r\n                        </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\" style=\"background: rgba(218, 218, 218, 0.59);\">\r\n                    <div class=\"card-block\">\r\n                        <h4 class=\"section\">Previews</h4>\r\n                        <h5 class=\"form-section\">Chrome on Windows</h5>\r\n                        <div col-lg-12 style=\"border: 1px solid #ccc7c7;background: #fff;padding: 12px;\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xl-4\">\r\n                                    <img *ngIf=\"!url\" src=\"assets/img/logo.png\" style=\"background: black;margin: 7px 0;\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                    <img *ngIf=\"url\" src=\"{{url}}\" style=\"margin: 7px 0;\" width=\"30\" height=\"30\" alt=\"\" />\r\n                                </div>\r\n                                <div class=\"col-xl-8\">\r\n                                    <b><p *ngIf=\"!floattitle.value\">Notification Title</p></b>\r\n                                    <b><p *ngIf=\"floattitle.value\">{{floattitle.value}}</p></b>\r\n                                    <p *ngIf=\"!floatmessage.value\" class=\"text-bold-400 mb-0\">Notification Message</p>\r\n                                    <p *ngIf=\"floatmessage.value\" class=\"text-bold-400 mb-0\">{{floatmessage.value}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <br>\r\n                        <h5 class=\"form-section\">Firefox on Windows</h5>\r\n                        <div class=\"block\" style=\"border: 1px solid #ccc7c7;background: #fff;padding: 12px;\">\r\n                            <b><h5 *ngIf=\"!floattitle.value\">Notification Title</h5></b>\r\n                            <b><p *ngIf=\"floattitle.value\">{{floattitle.value}}</p></b>\r\n                            <div class=\"col-xl-3 col-lg-6 col-12\">\r\n                                <div class=\"card\">\r\n\r\n                                    <div class=\"card-body\">\r\n                                      <div class=\"media align-items-stretch\">\r\n                                        <!-- <h5 *ngIf=\"!title\">Notification Title</h5><br />\r\n                                        <h5 *ngIf=\"title\">{{title}}</h5><br /> -->\r\n                                        <img *ngIf=\"!url\" src=\"assets/img/logo.png\" style=\"background: black;\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                        <img *ngIf=\"url\" src=\"{{url}}\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                        <div class=\"p-2 media-body\">\r\n\r\n                                          <h6 *ngIf=\"!floatmessage.value\" class=\"text-bold-400 mb-0\">Notification Message</h6>\r\n                                          <h6 *ngIf=\"floatmessage.value\" class=\"text-bold-400 mb-0\">{{floatmessage.value}}</h6>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div><br>\r\n                        <h5 class=\"form-section\">Chrome on Mac</h5>\r\n                        <div col-lg-12 style=\"border: 1px solid #ccc7c7;background: #fff;padding: 12px;\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xl-2\">\r\n                                    <img src=\"assets/img/logos/chrome-logo@2x.png\" style=\"width: 100%;margin: 12px 7px;\" alt=\"\" />\r\n                                </div>\r\n                                    <div class=\"col-xl-6\">\r\n                                        <b><p *ngIf=\"!floattitle.value\">Notification Title</p></b>\r\n                                        <b><p *ngIf=\"floattitle.value\">{{floattitle.value}}</p></b>\r\n                                        <p *ngIf=\"!floatmessage.value\" class=\"text-bold-400 mb-0\">Notification Message</p>\r\n                                        <p *ngIf=\"floatmessage.value\" class=\"text-bold-400 mb-0\">{{floatmessage.value}}</p>\r\n                                    </div>\r\n                                    <div class=\"col-xl-4\">\r\n                                    <img *ngIf=\"!url\" src=\"assets/img/logo.png\" style=\"background: black;margin: 7px 0;\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                    <img *ngIf=\"url\" src=\"{{url}}\" width=\"50\" style=\"margin: 7px 0;\" height=\"50\" alt=\"\" />\r\n                                </div>\r\n                            </div>\r\n                        </div><br>\r\n\r\n                        <h5 class=\"form-section\">Chrome on Android</h5>\r\n                        <div col-lg-12 style=\"border: 1px solid #ccc7c7;background: #fff;padding: 12px;\">\r\n                            <div class=\"row\">\r\n                                    <div class=\"col-xl-8\">\r\n                                        <b><p *ngIf=\"!floattitle.value\">Notification Title</p></b>\r\n                                        <b><p *ngIf=\"floattitle.value\">{{floattitle.value}}</p></b>\r\n                                        <p *ngIf=\"!floatmessage.value\" class=\"text-bold-400 mb-0\">Notification Message</p>\r\n                                        <p *ngIf=\"floatmessage.value\" class=\"text-bold-400 mb-0\">{{floatmessage.value}}</p>\r\n                                    </div>\r\n                                    <div class=\"col-xl-4\">\r\n                                    <img *ngIf=\"!url\" src=\"assets/img/logo.png\" style=\"background: black;margin: 7px 0;\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                        <img *ngIf=\"url\" src=\"{{url}}\" style=\"margin: 7px 0;\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                </div>\r\n                            </div>\r\n                        </div><br>\r\n\r\n                        <h5 class=\"form-section\">Edge on Windows</h5>\r\n                        <div col-lg-12 style=\"border: 1px solid #ccc7c7;background: #474747;padding: 12px;color:#fff;\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xl-4\">\r\n                                    <img *ngIf=\"!url\" src=\"assets/img/logo.png\" style=\"margin: 7px 0;\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                    <img *ngIf=\"url\" src=\"{{url}}\" style=\"margin: 7px 0;\" width=\"30\" height=\"30\" alt=\"\" />\r\n                                </div>\r\n                                <div class=\"col-xl-8\">\r\n                                    <b><p *ngIf=\"!floattitle.value\">Notification Title</p></b>\r\n                                    <b><p *ngIf=\"floattitle.value\">{{floattitle.value}}</p></b>\r\n                                    <p *ngIf=\"!floatmessage.value\" class=\"text-bold-400 mb-0\">Notification Message</p>\r\n                                    <p *ngIf=\"floatmessage.value\" class=\"text-bold-400 mb-0\">{{floatmessage.value}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <!-- <h5 class=\"section\">Chrome on Mac</h5>\r\n                        <div class=\"previews\">\r\n                            <h5 *ngIf=\"!title\">Notification Title</h5><br />\r\n                            <h5 *ngIf=\"title\">{{title}}</h5><br />\r\n                            <img *ngIf=\"!url\" src=\"assets/img/logo.png\" style=\"background: black;\" width=\"100\" height=\"100\" alt=\"\" />\r\n                            <img *ngIf=\"url\" src=\"{{url}}\" width=\"100\" height=\"100\" alt=\"\" />\r\n                        </div>\r\n\r\n                        <h5 class=\"section\">Chrome on Android</h5>\r\n                        <div class=\"col-xl-3 col-lg-6 col-12\">\r\n                            <div class=\"card\">\r\n                                <div class=\"card-body\">\r\n                                  <div class=\"media align-items-stretch\">\r\n                                    <h5 *ngIf=\"!title\">Notification Title</h5><br />\r\n                                    <h5 *ngIf=\"title\">{{title}}</h5><br />\r\n                                    <img *ngIf=\"!url\" src=\"assets/img/logo.png\" style=\"background: black;\" width=\"100\" height=\"100\" alt=\"\" />\r\n                                    <img *ngIf=\"url\" src=\"{{url}}\" width=\"100\" height=\"100\" alt=\"\" />\r\n                                    <div class=\"p-2 media-body\">\r\n\r\n                                      <h6 *ngIf=\"!message\" class=\"text-bold-400 mb-0\">Notification Message</h6>\r\n                                      <h6 *ngIf=\"message\" class=\"text-bold-400 mb-0\">{{message}}</h6>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"ab && !subscription\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"card-title-wrap\">\r\n                        <ngb-tabset #t=\"ngbTabset\">\r\n                            <ngb-tab title=\"Variant A\" id=\"variantA\">\r\n                                <ng-template ngbTabContent>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-8\">\r\n                                            <div class=\"card\">\r\n                                                <div class=\"card-body\">\r\n                                                    <div class=\"card-block\">\r\n                                                        <form class=\"form\" #a=\"ngForm\" (ngSubmit)=\"a.form.valid && t.select('variantB')\">\r\n                                                            <div class=\"form-body\">\r\n                                                                <div>\r\n                                                                    <div class=\"form-group\">\r\n                                                                        <div class=\"row\">\r\n                                                                            <div class=\"col-sm-6\">\r\n                                                                                <label for=\"floattitleA\">Title</label>\r\n                                                                            </div>\r\n                                                                            <div class=\"col-sm-6\" style=\"text-align: right;\">\r\n                                                                                <p>\r\n                                                                                    <span *ngIf=\"!floattitleA.value\">{{longTxt}}/96</span>\r\n                                                                                    <span *ngIf=\"floattitleA.value && floattitleA.value.length > 0\">{{longTxt + floattitleA.value.length}}/96</span>\r\n                                                                                </p>\r\n                                                                            </div>\r\n                                                                        </div>\r\n                                                                        <input type=\"text\" class=\"form-control\" id=\"floattitleA\" name=\"floattitleA\" [(ngModel)]=\"formAB.floattitleA\" required #floattitleA=\"ngModel\"  placeholder=\"96 characters maximum\" maxlength=\"96\" [ngClass]=\"{ 'is-invalid': a.submitted && !floattitleA.valid }\">\r\n                                                                        <small class=\"form-text text-muted danger\" *ngIf=\"!floattitleA.valid && (floattitleA.dirty || floattitleA.touched)\">Title is required!</small>\r\n                                                                        <small class=\"form-text text-muted danger\" *ngIf=\"a.submitted && !floattitleA.valid && !floattitleA.touched\">Title is required!</small>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div>\r\n                                                                    <div class=\"form-group\">\r\n                                                                        <div class=\"row\">\r\n                                                                            <div class=\"col-sm-6\">\r\n                                                                                <label for=\"floatmessageA\">Message</label>\r\n                                                                            </div>\r\n                                                                            <div class=\"col-sm-6\" style=\"text-align: right;\">\r\n                                                                                <p>\r\n                                                                                    <span *ngIf=\"!floatmessageA.value\">{{longTxt}}/255</span>\r\n                                                                                    <span *ngIf=\"floatmessageA.value && floatmessageA.value.length > 0\">{{longTxt + floatmessageA.value.length}}/255</span>\r\n                                                                                </p>\r\n                                                                            </div>\r\n                                                                        </div>\r\n                                                                        <input type=\"text\" class=\"form-control\" id=\"floatmessageA\" name=\"floatmessageA\" [(ngModel)]=\"formAB.floatmessageA\" required #floatmessageA=\"ngModel\"  placeholder=\"255 characters maximum\" maxlength=\"255\" [ngClass]=\"{ 'is-invalid': a.submitted && !floatmessageA.valid }\">\r\n                                                                        <small class=\"form-text text-muted danger\" *ngIf=\"!floatmessageA.valid && (floatmessageA.dirty || floatmessageA.touched)\">Message is required!</small>\r\n                                                                        <small class=\"form-text text-muted danger\" *ngIf=\"a.submitted && !floatmessageA.valid && !floatmessageA.touched\">Title is required!</small>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div>\r\n                                                                    <div class=\"form-group\">\r\n                                                                        <label for=\"floaturlA\">Landing Page URL</label>\r\n                                                                        <input type=\"url\" class=\"form-control\" id=\"floaturlA\" name=\"floaturlA\" [(ngModel)]=\"formAB.floaturlA\" required #floaturlA=\"ngModel\"  placeholder=\"Enter URL with http:// or https://\" [ngClass]=\"{ 'is-invalid': a.submitted && !floaturlA.valid }\">\r\n                                                                        <!-- <small class=\"form-text text-muted danger\" *ngIf=\"!floaturlA.valid && (floaturlA.dirty || floaturlA.touched)\">URL is required!</small> -->\r\n                                                                        <small *ngIf=\"(floaturlA.touched || a.submitted) && !floaturlA.valid\" class=\"form-text text-muted danger\">\r\n                                                                            <small *ngIf=\"floaturlA.errors.required\">URL is required!</small>\r\n                                                                            <small *ngIf=\"floaturlA.errors.pattern\">Enter a valid URL</small>\r\n                                                                        </small>\r\n                                                                        <small class=\"form-text text-muted danger\" *ngIf=\"a.submitted && !floaturlA.valid && !floaturlA.touched\">URL is required!</small>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <!-- <div>\r\n                                                                    <div class=\"form-group\">\r\n                                                                        <label for=\"ruleType\">Image</label>\r\n                                                                        <p>File type supported: jpg, jpeg, png. Recommended Size: 192x192.</p>\r\n                                                                        <img *ngIf=\"!imageurlA\" src=\"assets/img/logo.png\" style=\"background: black;\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                                                        <img *ngIf=\"imageurlA\" src=\"{{imageurlA}}\" width=\"50\" height=\"50\" />\r\n                                                                        &nbsp;<label #imageALabel class=\"btn btn-raised btn-sm btn-danger mr-1\" color=\"primary\" for=\"file-upload\">\r\n                                                                            Upload\r\n                                                                        </label>\r\n                                                                        <input type=\"file\" class=\"form-control\" id=\"file-upload\" name=\"imageurlA\" [(ngModel)]=\"formAB.imageurlA\" #urlA=\"ngModel\" (change)=\"uploadmembershipIcon($event.target.files,'urlA')\" required />\r\n                                                                        <i *ngIf=\"loader\" class=\"fas fa-spinner fa fa-spin\"></i><p *ngIf=\"loader\" style=\"color:red;\">&nbsp;Please wait while the image uploads.</p>\r\n                                                                    </div>\r\n                                                                </div> -->\r\n\r\n                                                                <div class=\"form-group\">\r\n                                                                    <label for=\"imageurlA\">Image</label>\r\n                                                                    <p>File type supported: jpg, jpeg, png. Recommended Size: 192x192.</p>\r\n                                                                    <img *ngIf=\"!imageUrlA\" src=\"assets/img/logo.png\" style=\"background: black;\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                                                    <img *ngIf=\"imageUrlA\" src=\"{{imageUrlA}}\" />\r\n                                                                    &nbsp;<label #imageALabel class=\"btn btn-raised btn-sm btn-danger mr-1\" color=\"primary\" for=\"file-upload\">\r\n                                                                    Upload\r\n                                                                    </label>\r\n                                                                    <input type=\"file\" class=\"form-control\" id=\"file-upload\" name=\"image\" [(ngModel)]=\"formAB.imageurlA\" required #imageurlA=\"ngModel\" (change)=\"uploadmembershipIcon($event.target.files,'urlA')\" [ngClass]=\"{'is-invalid': a.submitted && !imageurlA.valid }\" /><!-- (change)=\"uploadSubmit($event.target.files)\"(change)=\"addFile($event,'url')\"  -->\r\n                                                                    <small class=\"form-text text-muted danger\" *ngIf=\"a.submitted && !imageUrlA\">Image is required!</small>\r\n                                                                    <i *ngIf=\"loader\" class=\"fas fa-spinner fa fa-spin\"></i><p *ngIf=\"loader\" style=\"color:red;\">&nbsp;Please wait while the image uploads.</p>\r\n                                                                </div>\r\n                                                                <div>\r\n                                                                    <div class=\"form-group\">\r\n                                                                        <input type=\"checkbox\" name=\"bigImageA\" value=\"bigImageA\" (change)=\"addABigImage($event.target.checked)\">&nbsp;Show Big Image<br>&nbsp;&nbsp;Big image is only supported on Chrome (56+) browser. Image may get cropped on android devices.<br><br>\r\n                                                                        <div *ngIf=\"showBigImageA\">\r\n                                                                            <label for=\"bigImageA\">Image</label>\r\n                                                                            <p>File type supported: jpg, jpeg, png. Recommended Size: 360x240.</p>\r\n                                                                            <img *ngIf=\"!bigImageUrlA\" src=\"assets/img/logo.png\" style=\"background: black;\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                                                            <img *ngIf=\"bigImageUrlA\" src=\"{{bigImageUrlA}}\" />\r\n                                                                            &nbsp;<label #bigImageALabel class=\"btn btn-raised btn-sm btn-danger mr-1\" color=\"primary\" for=\"file-uploadA\">\r\n                                                                            Upload Image\r\n                                                                            </label>\r\n                                                                            <input type=\"file\" class=\"form-control\" id=\"file-uploadA\" name=\"bigImageA\" [(ngModel)]=\"form.bigImageA\" required #bigImageA=\"ngModel\" (change)=\"uploadBigImage($event.target.files,'bigImageA')\" [ngClass]=\"{ 'is-invalid': a.submitted && !bigImageA.valid }\" /><!-- (change)=\"uploadSubmit($event.target.files)\"(change)=\"addFile($event,'url')\"  -->\r\n                                                                            <small class=\"form-text text-muted danger\" *ngIf=\"a.submitted && !bigImageA.valid && !bigImageA.touched\">Image is required!</small>\r\n                                                                            <i *ngIf=\"imageloader\" class=\"fas fa-spinner fa fa-spin\"></i><p *ngIf=\"imageloader\" style=\"color:red;\">&nbsp;Please wait while the image uploads.</p>\r\n                                                                        </div>\r\n                                                                        <!-- <input type=\"checkbox\">&nbsp;Show Button(s) on Chrome Notification<br>&nbsp;&nbsp;Call to action buttons are only supported on Chrome browser. -->\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"form-group\" style=\"float: right;\">\r\n                                                                <button type=\"submit\" class=\"btn btn-success btn-raised\">Next</button>\r\n                                                            </div>\r\n                                                        </form>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <div class=\"card\">\r\n                                                <div class=\"card-body\" style=\"background: rgba(218, 218, 218, 0.59);\">\r\n                                                    <div class=\"card-block\">\r\n                                                        <h4 class=\"section\">Previews</h4>\r\n                                                        <h5 class=\"form-section\">Chrome on Windows</h5>\r\n                                                        <div col-lg-12 style=\"border: 1px solid #ccc7c7;background: #fff;padding: 12px;\">\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-xl-4\">\r\n                                                                    <img *ngIf=\"!imageurlA.value\" src=\"assets/img/logo.png\" style=\"background: black;margin: 7px 0;\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                                                            <img *ngIf=\"imageurlA.value\" src=\"{{imageurlA.value}}\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                                                    <img *ngIf=\"imageurlA.value\" src=\"{{imageurlA}}\" style=\"margin: 7px 0;\" width=\"30\" height=\"30\" alt=\"\" />\r\n                                                                </div>\r\n                                                                <div class=\"col-xl-8\">\r\n                                                                    <b><p *ngIf=\"!floattitleA.value\">Notification Title</p></b>\r\n                                                                    <b><p *ngIf=\"floattitleA.value\">{{floattitleA.value}}</p></b>\r\n                                                                    <p *ngIf=\"!floatmessageA.value\" class=\"text-bold-400 mb-0\">Notification Message</p>\r\n                                                                    <p *ngIf=\"floatmessageA.value\" class=\"text-bold-400 mb-0\">{{floatmessageA.value}}</p>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <br>\r\n                                                        <h5 class=\"form-section\">Firefox on Windows</h5>\r\n                                                        <div class=\"block\" style=\"border: 1px solid #ccc7c7;background: #fff;padding: 12px;\">\r\n                                                            <b><h5 *ngIf=\"!floattitleA.value\">Notification Title</h5></b>\r\n                                                            <b><p *ngIf=\"floattitleA.value\">{{floattitleA.value}}</p></b>\r\n                                                            <div class=\"col-xl-3 col-lg-6 col-12\">\r\n                                                                <div class=\"card\">\r\n\r\n                                                                    <div class=\"card-body\">\r\n                                                                        <div class=\"media align-items-stretch\">\r\n                                                                            <img *ngIf=\"!imageurlA.value\" src=\"assets/img/logo.png\" style=\"background: black;\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                                                            <img *ngIf=\"imageurlA.value\" src=\"{{imageurlA.value}}\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                                                            <div class=\"p-2 media-body\">\r\n\r\n                                                                                <h6 *ngIf=\"!floatmessageA.value\" class=\"text-bold-400 mb-0\">Notification Message</h6>\r\n                                                                                <h6 *ngIf=\"floatmessageA.value\" class=\"text-bold-400 mb-0\">{{floatmessageA.value}}</h6>\r\n                                                                            </div>\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div><br>\r\n                                                        <h5 class=\"form-section\">Chrome on Mac</h5>\r\n                                                        <div col-lg-12 style=\"border: 1px solid #ccc7c7;background: #fff;padding: 12px;\">\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-xl-2\">\r\n                                                                    <img src=\"assets/img/logos/chrome-logo@2x.png\" style=\"width: 100%;margin: 12px 7px;\" alt=\"\" />\r\n                                                                </div>\r\n                                                                <div class=\"col-xl-6\">\r\n                                                                    <b><p *ngIf=\"!floattitleA.value\">Notification Title</p></b>\r\n                                                                    <b><p *ngIf=\"floattitleA.value\">{{floattitleA.value}}</p></b>\r\n                                                                    <p *ngIf=\"!floatmessageA.value\" class=\"text-bold-400 mb-0\">Notification Message</p>\r\n                                                                    <p *ngIf=\"floatmessageA.value\" class=\"text-bold-400 mb-0\">{{floatmessageA.value}}</p>\r\n                                                                </div>\r\n                                                                <div class=\"col-xl-4\">\r\n                                                                    <img *ngIf=\"!imageurlA.value\" src=\"assets/img/logo.png\" style=\"background: black;margin: 7px 0;\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                                                    <img *ngIf=\"imageurlA.value\" src=\"{{imageurlA.value}}\" width=\"50\" style=\"margin: 7px 0;\" height=\"50\" alt=\"\" />\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div><br>\r\n\r\n                                                        <h5 class=\"form-section\">Chrome on Android</h5>\r\n                                                        <div col-lg-12 style=\"border: 1px solid #ccc7c7;background: #fff;padding: 12px;\">\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-xl-8\">\r\n                                                                    <b><p *ngIf=\"!floattitleA.value\">Notification Title</p></b>\r\n                                                                    <b><p *ngIf=\"floattitleA.value\">{{floattitleA.value}}</p></b>\r\n                                                                    <p *ngIf=\"!floatmessageA.value\" class=\"text-bold-400 mb-0\">Notification Message</p>\r\n                                                                    <p *ngIf=\"floatmessageA.value\" class=\"text-bold-400 mb-0\">{{floatmessageA.value}}</p>\r\n                                                                </div>\r\n                                                                <div class=\"col-xl-4\">\r\n                                                                    <img *ngIf=\"!imageurlA.value\" src=\"assets/img/logo.png\" style=\"background: black;margin: 7px 0;\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                                                    <img *ngIf=\"imageurlA.value\" src=\"{{imageurlA.value}}\" style=\"margin: 7px 0;\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div><br>\r\n\r\n                                                        <h5 class=\"form-section\">Edge on Windows</h5>\r\n                                                        <div col-lg-12 style=\"border: 1px solid #ccc7c7;background: #474747;padding: 12px;color:#fff;\">\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-xl-4\">\r\n                                                                    <img *ngIf=\"!imageurlA.value\" src=\"assets/img/logo.png\" style=\"margin: 7px 0;\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                                                    <img *ngIf=\"imageurlA.value\" src=\"{{imageurlA.value}}\" style=\"margin: 7px 0;\" width=\"30\" height=\"30\" alt=\"\" />\r\n                                                                </div>\r\n                                                                <div class=\"col-xl-8\">\r\n                                                                    <b><p *ngIf=\"!floattitleA.value\">Notification Title</p></b>\r\n                                                                    <b><p *ngIf=\"floattitleA.value\">{{floattitleA.value}}</p></b>\r\n                                                                    <p *ngIf=\"!floatmessageA.value\" class=\"text-bold-400 mb-0\">Notification Message</p>\r\n                                                                    <p *ngIf=\"floatmessageA.value\" class=\"text-bold-400 mb-0\">{{floatmessageA.value}}</p>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </ngb-tab>\r\n                            <ngb-tab id=\"variantB\">\r\n                                <ng-template ngbTabTitle>\r\n                                Variant B</ng-template>\r\n                                <ng-template ngbTabContent>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-8\">\r\n                                            <div class=\"card\">\r\n                                                <div class=\"card-body\">\r\n                                                    <div class=\"card-block\">\r\n                                                        <form class=\"form\" #b=\"ngForm\" (ngSubmit)=\"b.form.valid && subscribe()\">\r\n                                                            <div class=\"form-body\">\r\n                                                                <div>\r\n                                                                    <div class=\"form-group\">\r\n                                                                        <div class=\"row\">\r\n                                                                            <div class=\"col-sm-6\">\r\n                                                                                <label for=\"floattitleB\">Title</label>\r\n                                                                            </div>\r\n                                                                            <div class=\"col-sm-6\" style=\"text-align: right;\">\r\n                                                                                <p>\r\n                                                                                    <span *ngIf=\"!floattitleB.value\">{{longTxt}}/96</span>\r\n                                                                                    <span *ngIf=\"floattitleB.value && floattitleB.value.length > 0\">{{longTxt + floattitleB.value.length}}/96</span>\r\n                                                                                </p>\r\n                                                                            </div>\r\n                                                                        </div>\r\n                                                                        <input type=\"text\" class=\"form-control\" id=\"floattitleB\" name=\"floattitleB\" [(ngModel)]=\"formAB.floattitleB\" required #floattitleB=\"ngModel\"  placeholder=\"96 characters maximum\" maxlength=\"96\" [ngClass]=\"{ 'is-invalid': b.submitted && !floattitleB.valid }\">\r\n                                                                        <small class=\"form-text text-muted danger\" *ngIf=\"!floattitleB.valid && (floattitleB.dirty || floattitleB.touched)\">Title is required!</small>\r\n                                                                        <small class=\"form-text text-muted danger\" *ngIf=\"b.submitted && !floattitleB.valid && !floattitleB.touched\">Title is required!</small>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div>\r\n                                                                    <div class=\"form-group\">\r\n                                                                        <div class=\"row\">\r\n                                                                            <div class=\"col-sm-6\">\r\n                                                                                <label for=\"floatmessageB\">Message</label>\r\n                                                                            </div>\r\n                                                                            <div class=\"col-sm-6\" style=\"text-align: right;\">\r\n                                                                                <p>\r\n                                                                                    <span *ngIf=\"!floatmessageB.value\">{{longTxt}}/255</span>\r\n                                                                                    <span *ngIf=\"floatmessageB.value && floatmessageB.value.length > 0\">{{longTxt + floatmessageB.value.length}}/255</span>\r\n                                                                                </p>\r\n                                                                            </div>\r\n                                                                        </div>\r\n                                                                        <input type=\"text\" class=\"form-control\" id=\"floatmessageB\" name=\"floatmessageB\" [(ngModel)]=\"formAB.floatmessageB\" required #floatmessageB=\"ngModel\"  placeholder=\"255 characters maximum\" maxlength=\"255\" [ngClass]=\"{ 'is-invalid': b.submitted && !floatmessageB.valid }\">\r\n                                                                        <small class=\"form-text text-muted danger\" *ngIf=\"!floatmessageB.valid && (floatmessageB.dirty || floatmessageB.touched)\">Message is required!</small>\r\n                                                                        <small class=\"form-text text-muted danger\" *ngIf=\"b.submitted && !floatmessageB.valid && !floatmessageB.touched\">Title is required!</small>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div>\r\n                                                                    <div class=\"form-group\">\r\n                                                                        <label for=\"floaturlB\">Landing Page URL</label>\r\n                                                                        <input type=\"url\" class=\"form-control\" id=\"floaturlB\" name=\"floaturlB\" [(ngModel)]=\"formAB.floaturlB\" required #floaturlB=\"ngModel\"  placeholder=\"Enter URL with http:// or https://\" [ngClass]=\"{ 'is-invalid': b.submitted && !floaturlB.valid }\">\r\n                                                                        <!-- <small class=\"form-text text-muted danger\" *ngIf=\"!floaturlB.valid && (floaturlB.dirty || floaturlB.touched)\">URL is required!</small> -->\r\n                                                                        <small *ngIf=\"!floaturlB.valid && (floaturlB.dirty || floaturlB.touched)\" class=\"form-text text-muted danger\">\r\n                                                                            <small *ngIf=\"floaturlB.errors.required\">URL is required!</small>\r\n                                                                            <small *ngIf=\"floaturlB.errors.pattern\">Enter a valid URL</small>\r\n                                                                        </small>\r\n                                                                        <small class=\"form-text text-muted danger\" *ngIf=\"b.submitted && !floaturlB.valid && !floaturlB.touched\">URL is required!</small>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div>\r\n                                                                    <div class=\"form-group\">\r\n                                                                        <label for=\"ruleType\">Image</label>\r\n                                                                        <p>File type supported: jpg, jpeg, png. Recommended Size: 192x192.</p>\r\n                                                                        <img *ngIf=\"!imageUrlB\" src=\"assets/img/logo.png\" style=\"background: black;\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                                                        <img *ngIf=\"imageUrlB\" src=\"{{imageUrlB}}\" width=\"50\" height=\"50\" />\r\n                                                                        &nbsp;<label #imageurlBLabel class=\"btn btn-raised btn-sm btn-danger mr-1\" color=\"primary\" for=\"file-upload\">\r\n                                                                            Upload\r\n                                                                        </label>\r\n                                                                        <input id=\"file-upload\" type=\"file\" name=\"imageurlB\" [(ngModel)]=\"formAB.imageurlB\" (change)=\"uploadmembershipIcon($event.target.files,'urlB')\"/>\r\n                                                                        <i *ngIf=\"loader\" class=\"fas fa-spinner fa fa-spin\"></i><p *ngIf=\"loader\" style=\"color:red;\">&nbsp;Please wait while the image uploads.</p>\r\n\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div>\r\n                                                                    <div class=\"form-group\">\r\n                                                                        <input type=\"checkbox\" name=\"bigImageB\" value=\"bigImageB\" (change)=\"addBBigImage($event.target.checked)\">&nbsp;Show Big Image<br>&nbsp;&nbsp;Big image is only supported on Chrome (56+) browser. Image may get cropped on android devices.<br><br>\r\n\r\n                                                                        <div *ngIf=\"showBigImageB\">\r\n                                                                            <label for=\"bigImageB\">Image</label>\r\n                                                                            <p>File type supported: jpg, jpeg, png. Recommended Size: 360x240.</p>\r\n                                                                            <img *ngIf=\"!bigImageUrlB\" src=\"assets/img/logo.png\" style=\"background: black;\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                                                            <img *ngIf=\"bigImageUrlB\" src=\"{{bigImageUrlB}}\" />\r\n                                                                            &nbsp;<label #bigImageBLabel class=\"btn btn-raised btn-sm btn-danger mr-1\" color=\"primary\" for=\"file-uploadB\">\r\n                                                                            Upload Image\r\n                                                                            </label>\r\n                                                                            <input type=\"file\" class=\"form-control\" id=\"file-uploadB\" name=\"bigImageB\" [(ngModel)]=\"formAB.bigImageB\" required #bigImageB=\"ngModel\" (change)=\"uploadBigImage($event.target.files,'bigImageB')\" [ngClass]=\"{ 'is-invalid': b.submitted && !bigImageB.valid }\" /><!-- (change)=\"uploadSubmit($event.target.files)\"(change)=\"addFile($event,'url')\"  -->\r\n                                                                            <small class=\"form-text text-muted danger\" *ngIf=\"b.submitted && !bigImageB.valid && !bigImageB.touched\">Image is required!</small>\r\n                                                                            <i *ngIf=\"imageloader\" class=\"fas fa-spinner fa fa-spin\"></i><p *ngIf=\"imageloader\" style=\"color:red;\">&nbsp;Please wait while the image uploads.</p>\r\n                                                                        </div>\r\n                                                                        <!-- <input type=\"checkbox\">&nbsp;Show Button(s) on Chrome Notification<br>&nbsp;&nbsp;Call to action buttons are only supported on Chrome browser. -->\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-sm-6\">\r\n                                                                    <!-- <button type=\"button\" class=\"btn btn-success btn-raised\" (click)=\"ngOnInit()\">Back</button> -->\r\n                                                                </div>\r\n                                                                <div class=\"col-sm-6\" style=\"text-align: right;\">\r\n                                                                    <button type=\"submit\" class=\"btn btn-success btn-raised\">Next</button>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </form>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <div class=\"card\">\r\n                                                <div class=\"card-body\" style=\"background: rgba(218, 218, 218, 0.59);\">\r\n                                                    <div class=\"card-block\">\r\n                                                        <h4 class=\"section\">Previews</h4>\r\n                                                        <h5 class=\"form-section\">Chrome on Windows</h5>\r\n                                                        <div col-lg-12 style=\"border: 1px solid #ccc7c7;background: #fff;padding: 12px;\">\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-xl-4\">\r\n                                                                    <img *ngIf=\"!imageUrlB\" src=\"assets/img/logo.png\" style=\"background: black;margin: 7px 0;\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                                                    <img *ngIf=\"imageUrlB\" src=\"{{imageUrlB}}\" style=\"margin: 7px 0;\" width=\"30\" height=\"30\" alt=\"\" />\r\n                                                                </div>\r\n                                                                <div class=\"col-xl-8\">\r\n                                                                    <b><p *ngIf=\"!floattitleB.value\">Notification Title</p></b>\r\n                                                                    <b><p *ngIf=\"floattitleB.value\">{{floattitleB.value}}</p></b>\r\n                                                                    <p *ngIf=\"!floatmessageB.value\" class=\"text-bold-400 mb-0\">Notification Message</p>\r\n                                                                    <p *ngIf=\"floatmessageB.value\" class=\"text-bold-400 mb-0\">{{floatmessageB.value}}</p>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <br>\r\n                                                        <h5 class=\"form-section\">Firefox on Windows</h5>\r\n                                                        <div class=\"block\" style=\"border: 1px solid #ccc7c7;background: #fff;padding: 12px;\">\r\n                                                            <b><h5 *ngIf=\"!floattitleB.value\">Notification Title</h5></b>\r\n                                                            <b><p *ngIf=\"floattitleB.value\">{{floattitleB.value}}</p></b>\r\n                                                            <div class=\"col-xl-3 col-lg-6 col-12\">\r\n                                                                <div class=\"card\">\r\n\r\n                                                                    <div class=\"card-body\">\r\n                                                                        <div class=\"media align-items-stretch\">\r\n                                                                            <img *ngIf=\"!imageUrlB\" src=\"assets/img/logo.png\" style=\"background: black;\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                                                            <img *ngIf=\"imageUrlB\" src=\"{{imageUrlB}}\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                                                            <div class=\"p-2 media-body\">\r\n\r\n                                                                                <h6 *ngIf=\"!floatmessageB.value\" class=\"text-bold-400 mb-0\">Notification Message</h6>\r\n                                                                                <h6 *ngIf=\"floatmessageB.value\" class=\"text-bold-400 mb-0\">{{floatmessageB.value}}</h6>\r\n                                                                            </div>\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div><br>\r\n                                                        <h5 class=\"form-section\">Chrome on Mac</h5>\r\n                                                        <div col-lg-12 style=\"border: 1px solid #ccc7c7;background: #fff;padding: 12px;\">\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-xl-2\">\r\n                                                                    <img src=\"assets/img/logos/chrome-logo@2x.png\" style=\"width: 100%;margin: 12px 7px;\" alt=\"\" />\r\n                                                                </div>\r\n                                                                <div class=\"col-xl-6\">\r\n                                                                    <b><p *ngIf=\"!floattitleB.value\">Notification Title</p></b>\r\n                                                                    <b><p *ngIf=\"floattitleB.value\">{{floattitleB.value}}</p></b>\r\n                                                                    <p *ngIf=\"!floatmessageB.value\" class=\"text-bold-400 mb-0\">Notification Message</p>\r\n                                                                    <p *ngIf=\"floatmessageB.value\" class=\"text-bold-400 mb-0\">{{floatmessageB.value}}</p>\r\n                                                                </div>\r\n                                                                <div class=\"col-xl-4\">\r\n                                                                    <img *ngIf=\"!imageUrlB\" src=\"assets/img/logo.png\" style=\"background: black;margin: 7px 0;\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                                                    <img *ngIf=\"imageUrlB\" src=\"{{imageUrlB}}\" width=\"50\" style=\"margin: 7px 0;\" height=\"50\" alt=\"\" />\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div><br>\r\n\r\n                                                        <h5 class=\"form-section\">Chrome on Android</h5>\r\n                                                        <div col-lg-12 style=\"border: 1px solid #ccc7c7;background: #fff;padding: 12px;\">\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-xl-8\">\r\n                                                                    <b><p *ngIf=\"!floattitleB.value\">Notification Title</p></b>\r\n                                                                    <b><p *ngIf=\"floattitleB.value\">{{floattitleB.value}}</p></b>\r\n                                                                    <p *ngIf=\"!floatmessageB.value\" class=\"text-bold-400 mb-0\">Notification Message</p>\r\n                                                                    <p *ngIf=\"floatmessageB.value\" class=\"text-bold-400 mb-0\">{{floatmessageB.value}}</p>\r\n                                                                </div>\r\n                                                                <div class=\"col-xl-4\">\r\n                                                                    <img *ngIf=\"!imageUrlB\" src=\"assets/img/logo.png\" style=\"background: black;margin: 7px 0;\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                                                    <img *ngIf=\"imageUrlB\" src=\"{{imageUrlB}}\" style=\"margin: 7px 0;\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div><br>\r\n\r\n                                                        <h5 class=\"form-section\">Edge on Windows</h5>\r\n                                                        <div col-lg-12 style=\"border: 1px solid #ccc7c7;background: #474747;padding: 12px;color:#fff;\">\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-xl-4\">\r\n                                                                    <img *ngIf=\"!imageUrlB\" src=\"assets/img/logo.png\" style=\"margin: 7px 0;\" width=\"50\" height=\"50\" alt=\"\" />\r\n                                                                    <img *ngIf=\"imageUrlB\" src=\"{{imageUrlB}}\" style=\"margin: 7px 0;\" width=\"30\" height=\"30\" alt=\"\" />\r\n                                                                </div>\r\n                                                                <div class=\"col-xl-8\">\r\n                                                                    <b><p *ngIf=\"!floattitleB.value\">Notification Title</p></b>\r\n                                                                    <b><p *ngIf=\"floattitleB.value\">{{floattitleB.value}}</p></b>\r\n                                                                    <p *ngIf=\"!floatmessageB.value\" class=\"text-bold-400 mb-0\">Notification Message</p>\r\n                                                                    <p *ngIf=\"floatmessageB.value\" class=\"text-bold-400 mb-0\">{{floatmessageB.value}}</p>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </ngb-tab>\r\n                        </ngb-tabset>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"subscription\">\r\n        <div class=\"col-sm-8\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block\">\r\n                        <h4 class=\"section\">Audience</h4>\r\n                        <p>Send this notification to</p>\r\n                        <input type=\"radio\" name=\"radio\" id=\"subscribers\" value=\"all\" (change)=\"selectSegment($event)\">&nbsp;All Subscribers<br>\r\n                        <input type=\"radio\" name=\"radio\" id=\"segments\" value=\"segments\" (change)=\"selectSegment($event)\">&nbsp;My Segments<br><br>\r\n                        <div class=\"card-body border\" style=\"border-radius: 8px !important;\" *ngIf=\"showSegments\">\r\n                            <div class=\"card-block\">\r\n                                <div class=\"col-lg-12\">\r\n                                    <div class=\"col-lg-12\" *ngFor=\"let segment of segments\">\r\n                                        <input type=\"checkbox\" (change)=\"onChange(segment.id,$event.target.checked)\" required />&nbsp;<label>{{segment.name}}</label>\r\n                                                <!-- <input type=\"checkbox\" id=\"{{segment.id}}\" [(ngModel)]=\"segment.id\" (change)=\"onChange(segment.id,$event.target.checked)\" required />&nbsp;<label>{{segment.name}}</label> --></div>\r\n                                    <!-- <fieldset class=\"col-lg-12 segments checkbox\" *ngFor=\"let segment of segments\">\r\n                                        <input type=\"checkbox\" id=\"{{segment.name}}\" name=\"{{segment.name}}\" (change)=\"onChange(segment.id, $event.target.value)\" />&nbsp;<label>{{segment.name}}</label>\r\n                                    </fieldset> -->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"ruleType\">Select the users for sending the A/B Testing</label>\r\n                                <input type=\"number\" name=\"userCount\" [(ngModel)]=\"formAB.userCount\" (input)=\"sendABTest($event.target.value)\" />\r\n                                <p>Total Users - {{countOfUsers}}</p>\r\n                                <p *ngIf=\"formAB.userCount && countOfUsers\">Remaining - {{countOfUsers - (formAB.userCount * 2)}}</p>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"ruleType\">Send Winner Notification</label>\r\n                                <input type=\"radio\" name=\"winnerNotification\" id=\"manual\" [(ngModel)]=\"formAB.winnerNotification\" value=\"Manual\">&nbsp;Manual<br>\r\n                                <input type=\"radio\" name=\"winnerNotification\" id=\"automatic\" [(ngModel)]=\"formAB.winnerNotification\" value=\"Automatic\">&nbsp;Automatic<br><br>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <h4 class=\"section\">Campaign Settings</h4>\r\n                        <!-- <input type=\"checkbox\">&nbsp;Auto-hide notification after 20 seconds.\r\n                        <p>&nbsp;&nbsp;Don't attempt sending this notification</p>\r\n                        <div class=\"row\">\r\n                            <fieldset class=\"col-sm-3\">\r\n                                <div class=\"input-group\">\r\n                                    <select id=\"durationIn\" class=\"form-control\">\r\n                                        <option value=\"day\" *ngFor=\"let day of days\">{{day}}</option>\r\n                                    </select>\r\n                                    <div class=\"input-group-append\">\r\n                                        <span class=\"input-group-text\" id=\"basic-addon2\">days</span>\r\n                                    </div>\r\n                                </div>\r\n                            </fieldset>\r\n                            <fieldset class=\"col-sm-3\">\r\n                                <div class=\"input-group\">\r\n                                    <select id=\"durationIn\" class=\"form-control\">\r\n                                        <option value=\"day\" *ngFor=\"let hour of hours\">{{hour}}</option>\r\n                                    </select>\r\n                                    <div class=\"input-group-append\">\r\n                                        <span class=\"input-group-text\" id=\"basic-addon2\">hours</span>\r\n                                    </div>\r\n                                </div>\r\n                            </fieldset>\r\n                            <fieldset class=\"col-sm-3\">\r\n                                <div class=\"input-group\">\r\n                                    <select id=\"durationIn\" class=\"form-control\">\r\n                                        <option value=\"day\" *ngFor=\"let minute of minutes\">{{minute}}</option>\r\n                                    </select>\r\n                                    <div class=\"input-group-append\">\r\n                                        <span class=\"input-group-text\" id=\"basic-addon2\">minutes</span>\r\n                                    </div>\r\n                                </div>\r\n                            </fieldset>\r\n                        </div><br><br> -->\r\n\r\n                        <input type=\"checkbox\" [(ngModel)]=\"formAB.scheduled\" (click)=\"schedule($event)\">&nbsp;Schedule notification for a later date\r\n                        <div class=\"card-body\" style=\"border-radius: 25px !important;background-color: #e9ecef !important;\" *ngIf=\"event\">\r\n                            <div class=\"card-block\">\r\n                                <div class=\"col-lg-12\">\r\n                                    <fieldset class=\"form-group\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-lg-6\">\r\n                                                <label>Date</label>\r\n                                            </div>\r\n                                            <!-- <div class=\"col-lg-6\">\r\n                                                <label>Time</label>\r\n                                            </div> -->\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-lg-6\">\r\n                                                <div class=\"input-group\">\r\n                                                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" [minDate]=\"minDate\" [(ngModel)]=\"formAB.scheduledate\" name=\"scheduledate\" #scheduledate=\"ngModel\" ngbDatepicker [dayTemplate]=\"customDay\"\r\n                                                    [markDisabled]=\"isDisabled\" #d3=\"ngbDatepicker\" required (ngModelChange)=\"disableTimeByDate($event,'AB')\">\r\n                                                    <div class=\"input-group-append\">\r\n                                                        <div class=\"input-group-text\" (click)=\"d3.toggle()\">\r\n                                                            <i class=\"fa fa-calendar\" style=\"cursor: pointer;\"></i>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <!-- <div class=\"col-lg-6\">\r\n                                                <ngb-timepicker [(ngModel)]=\"formAB.time\" name=\"time\" #time=\"ngModel\"></ngb-timepicker>\r\n                                            </div> -->\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-lg-6\">\r\n                                                <label>Time</label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-lg-6\">\r\n                                                <ngb-timepicker [(ngModel)]=\"formAB.time\"  (ngModelChange)=\"disabletime($event,'AB')\" name=\"time\" #time=\"ngModel\" required></ngb-timepicker>\r\n                                            </div>\r\n                                        </div>\r\n                                        <label>The notification will be sent at this time according to your current timezone (GMT+00:00 Etc/GMT)</label>\r\n                                    </fieldset>\r\n                                </div>\r\n                            </div>\r\n                        </div><br><br>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <button type=\"button\" class=\"btn btn-success btn-raised\" (click)=\"abtesting()\">Back</button>\r\n                            </div>\r\n                            <div class=\"col-sm-6\" style=\"text-align: right;\">\r\n                                <button type=\"button\" class=\"btn btn-success btn-raised\" (click)=\"send(this.formAB)\">Send Now</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\" style=\"background: rgba(218, 218, 218, 0.59);\">\r\n                    <div class=\"card-block\">\r\n                        <h4 class=\"section\">A/B Test Information</h4>\r\n                        <div col-lg-12 style=\"border: 1px solid #ccc7c7;background: #fff;padding: 20px;\">\r\n                            <div class=\"row\">\r\n                                <h5>Sample audience</h5>\r\n                                <p>Your selected audience has 0 subscribers. You need at least 800 subscribers to create an A/B test.</p>\r\n                            </div>\r\n                        </div>\r\n                        <br>\r\n                        <div col-lg-12 style=\"border: 1px solid #ccc7c7;background: #fff;padding: 20px;\">\r\n                            <div class=\"row\">\r\n                                <h5>Test duration</h5>\r\n                                <p>The A/B test will run for 1 hour; during which the variants will be sent to the sample audience. The variant with the highest clicks will be declared the winner.</p><br>\r\n                                <p>The winner variant will then be sent to the rest of the subscribers.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div><br>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/web-dashboard/web-engagement/web-engagement.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/web-dashboard/web-engagement/web-engagement.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"file\"] {\n  display: none; }\n\n.section {\n  color: #343a40;\n  line-height: 3rem;\n  font-size: 1.2rem;\n  letter-spacing: 0.5px;\n  font-weight: 400;\n  margin-bottom: 20px;\n  border-bottom: 1px solid #343a40; }\n\nfieldset.col-lg-12.segments {\n  line-height: 2; }\n\nfieldset.col-lg-12.segments:hover {\n  background-color: #eeeff1; }\n\n/*input[type=checkbox]:checked + label{\r\n\tbackground-color: #298ee9 !important;\r\n}\r\ninput[type=checkbox]:checked + fieldset.col-lg-12.segments label {\r\n\tbackground-color: #298ee9 !important;\r\n}*/\n\n.form-control.is-invalid {\n  border-color: #dc3545; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViLWRhc2hib2FyZC93ZWItZW5nYWdlbWVudC9DOlxcVXNlcnNcXE1SVDIwXFxEZXNrdG9wXFxVTVxcdXNlcm1hbmFnZW1lbnQvc3JjXFxhcHBcXHdlYi1kYXNoYm9hcmRcXHdlYi1lbmdhZ2VtZW50XFx3ZWItZW5nYWdlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWEsRUFDaEI7O0FBSUQ7RUFDQyxlQUFjO0VBQ1gsa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixzQkFBcUI7RUFDckIsaUJBQWdCO0VBQ2hCLG9CQUFtQjtFQUNuQixpQ0FBZ0MsRUFDbkM7O0FBQ0Q7RUFDQyxlQUFjLEVBQ2Q7O0FBQ0Q7RUFDSSwwQkFBeUIsRUFDNUI7O0FBQ0Q7Ozs7O0dBS0c7O0FBQ0g7RUFDQyxzQkFBcUIsRUFDckIiLCJmaWxlIjoic3JjL2FwcC93ZWItZGFzaGJvYXJkL3dlYi1lbmdhZ2VtZW50L3dlYi1lbmdhZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ucHJldmlld3N7XHJcblx0XHJcbn1cclxuLnNlY3Rpb257XHJcblx0Y29sb3I6ICMzNDNhNDA7XHJcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzM0M2E0MDtcclxufVxyXG5maWVsZHNldC5jb2wtbGctMTIuc2VnbWVudHN7XHJcblx0bGluZS1oZWlnaHQ6IDI7XHJcbn1cclxuZmllbGRzZXQuY29sLWxnLTEyLnNlZ21lbnRzOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVmZjE7XHJcbn1cclxuLyppbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWx7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzI5OGVlOSAhaW1wb3J0YW50O1xyXG59XHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBmaWVsZHNldC5jb2wtbGctMTIuc2VnbWVudHMgbGFiZWwge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyOThlZTkgIWltcG9ydGFudDtcclxufSovXHJcbi5mb3JtLWNvbnRyb2wuaXMtaW52YWxpZHtcclxuXHRib3JkZXItY29sb3I6ICNkYzM1NDU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/web-dashboard/web-engagement/web-engagement.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/web-dashboard/web-engagement/web-engagement.component.ts ***!
  \**************************************************************************/
/*! exports provided: WebEngagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebEngagementComponent", function() { return WebEngagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_data_web_engagement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data/web-engagement.service */ "./src/app/shared/data/web-engagement.service.ts");
/* harmony import */ var _shared_data_web_template_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/data/web-template.service */ "./src/app/shared/data/web-template.service.ts");
/* harmony import */ var _shared_data_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/data/settings.service */ "./src/app/shared/data/settings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var WebEngagementComponent = /** @class */ (function () {
    function WebEngagementComponent(config, http, router, route, settingsservice, webengagementservice, WebTemplateService, snotifyService) {
        var _this = this;
        this.config = config;
        this.http = http;
        this.router = router;
        this.route = route;
        this.settingsservice = settingsservice;
        this.webengagementservice = webengagementservice;
        this.WebTemplateService = WebTemplateService;
        this.snotifyService = snotifyService;
        this.days = [];
        this.hours = [];
        this.minutes = [];
        this.event = false;
        this.ab = false;
        this.showSegments = false;
        this.showBigImage = false;
        this.ashowBigImage = false;
        this.loader = false;
        this.subscription = false;
        this.formb = {};
        this.formc = {};
        this.activeTabIndex = 0;
        this.form = {
            'floattitle': '',
            'floatmessage': '',
            'floaturl': '',
            'image': '',
            'bigImage': '',
            'day': '',
            'hours': '',
            'minutes': '',
            'scheduledate': '',
            'scheduled': '',
            'time': '',
            'segment': '',
            'seg': '',
            'token': 'click365.com.au',
            'icon': 'assets/img/logo.png'
        };
        this.formAB = {
            'floattitleA': '',
            'floatmessageA': '',
            'floaturlA': '',
            'imageurlA': '',
            'bigImageA': '',
            'floattitleB': '',
            'floatmessageB': '',
            'floaturlB': '',
            'imageurlB': '',
            'bigImageB': '',
            'userCount': '',
            'scheduled': '',
            'scheduledate': '',
            'time': '',
            'winnerNotification': ''
        };
        this.idArray = [];
        this.userCount = [];
        this.tokenAList = [];
        this.tokenBList = [];
        this.copyCampaignBoolean = false;
        this.style = 'material';
        this.title = 'Success';
        this.body = 'Organization created successfully!';
        this.timeout = 3000;
        this.position = ng_snotify__WEBPACK_IMPORTED_MODULE_6__["SnotifyPosition"].centerTop;
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
        this.showBigImageA = false;
        this.showBigImageB = false;
        this.imageloader = false;
        var current = new Date();
        this.minDate = {
            year: current.getFullYear(),
            month: current.getMonth() + 1,
            day: current.getDate()
        };
        this.settingsservice.getSettings().then(function (data) {
            if (data['status'] == 'success' && data['settings'][0]['defaultlogo']) {
                _this.url = data['settings'][0]['defaultlogo'];
                _this.defaultBigImage = data['settings'][0]['defaultlogo'];
            }
        });
        this.route.queryParams.subscribe(function (params) {
            //console.log('this.campaignId' + this.campaignId);
            _this.webengagementservice.getCampaignId(params['id']).then(function (data) {
                if (data['status'] == 'success') {
                    _this.copyCampaignBoolean = true;
                    if (data['campaign'][0].image) {
                        _this.showBigImage = true;
                    }
                    _this.form.floattitle = data['campaign'][0].campaign_title;
                    _this.form.floatmessage = data['campaign'][0].campaign_message;
                    _this.form.floaturl = data['campaign'][0].landing_url;
                    _this.url = data['campaign'][0].icon;
                    _this.form.image = _this.url;
                    _this.bigImageUrl = data['campaign'][0].image;
                    _this.form.bigImage = _this.bigImageUrl;
                }
            });
        });
    }
    WebEngagementComponent.prototype.disabletime = function (control, type) {
        console.log(control);
        var current = new Date();
        if (type == 'normal') {
            if (this.form.scheduledate != '') {
                var dates = this.form.scheduledate['day'] + '/' + this.form.scheduledate['month'] + '/' + this.form.scheduledate['year'];
                var currentdateformat = current.getDate() + '/' + (current.getMonth() + 1) + '/' + current.getFullYear();
                if (currentdateformat == dates) {
                    if (control.hour < current.getHours()) {
                        this.form.time = '';
                        if (control.minute <= current.getMinutes()) {
                            this.form.time = '';
                        }
                    }
                }
            }
        }
        else {
            if (this.formAB.scheduledate != '') {
                var dates = this.formAB.scheduledate['day'] + '/' + this.formAB.scheduledate['month'] + '/' + this.formAB.scheduledate['year'];
                var currentdateformat = current.getDate() + '/' + (current.getMonth() + 1) + '/' + current.getFullYear();
                if (currentdateformat == dates) {
                    if (control.hour < current.getHours()) {
                        this.formAB.time = '';
                        if (control.minute <= current.getMinutes()) {
                            this.formAB.time = '';
                        }
                    }
                }
            }
        }
    };
    WebEngagementComponent.prototype.disableTimeByDate = function (control, type) {
        var current = new Date();
        var dates = control.day + '/' + control.month + '/' + control.year;
        var currentdateformat = current.getDate() + '/' + (current.getMonth() + 1) + '/' + current.getFullYear();
        if (type == "AB") {
            if (this.formAB.time != '') {
                if (currentdateformat == dates) {
                    if (this.formAB.time['hour'] < current.getHours()) {
                        this.formAB.time = '';
                        if (this.formAB.time['minute'] <= current.getMinutes()) {
                            this.formAB.time = '';
                        }
                    }
                }
            }
        }
        else {
            if (this.form.time != '') {
                if (currentdateformat == dates) {
                    if (this.form.time['hour'] < current.getHours()) {
                        this.form.time = '';
                        if (this.form.time['minute'] <= current.getMinutes()) {
                            this.form.time = '';
                        }
                    }
                }
            }
        }
    };
    WebEngagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ab = false;
        this.subscription = false;
        this.longTxt = 0;
        this.reset();
        var d = new Date();
        this.Date = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
        for (var i = 0; i <= this.Date; i++) {
            this.days.push(i);
        }
        for (var j = 0; j <= 23; j++) {
            this.hours.push(j);
        }
        for (var k = 0; k <= 55; k += 5) {
            this.minutes.push(k);
        }
        this.webengagementservice.getSegments(new Date().getTime()).then(function (data) {
            if (data['status'] == 'success') {
                _this.segments = data['segments'];
                console.log('segments - ' + JSON.stringify(_this.segments));
            }
        });
        this.webengagementservice.getSegments(new Date().getTime()).then(function (data) {
            if (data['status'] == 'success') {
                _this.segments = data['segments'];
                console.log('segments - ' + JSON.stringify(_this.segments));
            }
        });
    };
    WebEngagementComponent.prototype.reset = function () {
        this.title1 = '';
        this.message = '';
    };
    WebEngagementComponent.prototype.schedule = function (event) {
        this.event = event.target.checked;
    };
    WebEngagementComponent.prototype.selectSegment = function (event) {
        var _this = this;
        this.showSegments = false;
        this.segmentVal = event.target.value;
        if (event.target.value == 'segments') {
            this.showSegments = true;
        }
        if (event.target.value == 'all') {
            this.webengagementservice.getAllTokens(this.segmentVal).then(function (tokendata) {
                _this.countOfUsers = tokendata['nonsafaritokens'].length;
            });
        }
    };
    WebEngagementComponent.prototype.addBigImage = function (event) {
        this.showBigImage = false;
        if (event) {
            this.showBigImage = true;
        }
        else {
            this.showBigImage = false;
        }
    };
    WebEngagementComponent.prototype.addABigImage = function (event) {
        this.showBigImageA = false;
        if (event) {
            this.showBigImageA = true;
        }
        else {
            this.showBigImageA = false;
        }
    };
    WebEngagementComponent.prototype.addBBigImage = function (event) {
        this.showBigImageB = false;
        if (event) {
            this.showBigImageB = true;
        }
        else {
            this.showBigImageB = false;
        }
    };
    WebEngagementComponent.prototype.sendABTest = function (value) {
    };
    WebEngagementComponent.prototype.abtesting = function () {
        this.ab = true;
        this.subscription = false;
    };
    WebEngagementComponent.prototype.subscribe = function () {
        this.subscription = true;
        this.ab = false;
    };
    WebEngagementComponent.prototype.onChange = function (id, isChecked) {
        var _this = this;
        if (isChecked) {
            this.idArray.push(id);
        }
        else {
            var index = this.idArray.indexOf(id);
            this.idArray.splice(index, 1);
        }
        this.webengagementservice.getTokensBySegment(this.idArray).then(function (tokendata) {
            _this.countOfUsers = tokendata['nonsafaritokens'].length;
        });
    };
    WebEngagementComponent.prototype.send = function (data) {
        var _this = this;
        if (this.segmentVal == 'all') {
            this.webengagementservice.getAllTokens(this.segmentVal).then(function (tokendata) {
                if ((tokendata['nonsafaritokens'] && tokendata['nonsafaritokens'].length >= 2 * parseInt(data['userCount'])) && (data['nonsafaritokens'] != '' || data['nonsafaritokens'] != null)) {
                    _this.tokenAList = (tokendata['nonsafaritokens'].slice(0, parseInt(data['userCount'])));
                    _this.tokenBList = (tokendata['nonsafaritokens'].slice(parseInt(data['userCount']), 2 * parseInt(data['userCount'])));
                    _this.sendTokenAData = {
                        nonsafaritoken: _this.tokenAList,
                        title: data['floattitleA'],
                        body: data['floatmessageA'],
                        icon: _this.formAB.imageurlA,
                        image: _this.formAB.bigImageA,
                        landingURL: data['floaturlA'],
                        safaritoken: '',
                        type: 'A'
                    };
                    _this.sendTokenBData = {
                        nonsafaritoken: _this.tokenBList,
                        title: data['floattitleB'],
                        body: data['floatmessageB'],
                        icon: _this.formAB.imageurlB,
                        image: _this.formAB.bigImageB,
                        landingURL: data['floaturlB'],
                        safaritoken: '',
                        type: 'B'
                    };
                    _this.selectednotification = {
                        all: 'all',
                        selected: ''
                    };
                    _this.saveABCampaign(_this.sendTokenAData, _this.sendTokenBData, data, 'nonsafari');
                }
                else if (((tokendata['safaritokens'] && tokendata['safaritokens'].length != null || tokendata['safaritokens'].length != '') && tokendata['safaritokens'].length >= 2 * parseInt(data['userCount'])) && (tokendata['safaritokens'] != '' || tokendata['safaritokens'] != null)) {
                    _this.tokenAList = (tokendata['safaritokens'].slice(0, parseInt(data['userCount'])));
                    _this.tokenBList = (tokendata['safaritokens'].slice(parseInt(data['userCount']), 2 * parseInt(data['userCount'])));
                    _this.sendTokenAData = {
                        title: data['floattitleA'],
                        body: data['floatmessageA'],
                        icon: _this.formAB.imageurlA,
                        image: _this.formAB.bigImageA,
                        landingURL: data['floaturlA'],
                        safaritoken: _this.tokenAList,
                        type: 'A'
                    };
                    _this.sendTokenBData = {
                        title: data['floattitleB'],
                        body: data['floatmessageB'],
                        icon: _this.formAB.imageurlB,
                        image: _this.formAB.bigImageB,
                        landingURL: data['floaturlB'],
                        safaritoken: _this.tokenBList,
                        type: 'B'
                    };
                    _this.selectednotification = {
                        all: 'all',
                        selected: ''
                    };
                    _this.saveABCampaign(_this.sendTokenAData, _this.sendTokenBData, data, 'safari');
                }
            });
        }
        else if (this.segmentVal == 'segments') {
            this.webengagementservice.getTokensBySegment(this.idArray).then(function (tokendata) {
                if ((tokendata['nonsafaritokens'].length >= 2 * parseInt(data['userCount'])) && (data['nonsafaritokens'] != '' || data['nonsafaritokens'] != null)) {
                    _this.tokenAList = (tokendata['nonsafaritokens'].slice(0, parseInt(data['userCount'])));
                    _this.tokenBList = (tokendata['nonsafaritokens'].slice(parseInt(data['userCount']), 2 * parseInt(data['userCount'])));
                    _this.sendTokenAData = {
                        nonsafaritoken: _this.tokenAList,
                        title: data['floattitleA'],
                        body: data['floatmessageA'],
                        icon: _this.formAB.imageurlA,
                        image: _this.formAB.bigImageA,
                        landingURL: data['floaturlA'],
                        safaritoken: '',
                        type: 'A'
                    };
                    _this.sendTokenBData = {
                        nonsafaritoken: _this.tokenBList,
                        title: data['floattitleB'],
                        body: data['floatmessageB'],
                        icon: _this.formAB.imageurlB,
                        image: _this.formAB.bigImageB,
                        landingURL: data['floaturlB'],
                        safaritoken: '',
                        type: 'B'
                    };
                    _this.selectednotification = {
                        all: '',
                        selected: _this.idArray
                    };
                    _this.saveABCampaign(_this.sendTokenAData, _this.sendTokenBData, data, 'nonsafari');
                }
                else if ((tokendata['safaritokens'].length >= 2 * parseInt(data['userCount'])) && (tokendata['safaritokens'] != '' || tokendata['safaritokens'] != null)) {
                    _this.tokenAList = (tokendata['safaritokens'].slice(0, parseInt(data['userCount'])));
                    _this.tokenBList = (tokendata['safaritokens'].slice(parseInt(data['userCount']), 2 * parseInt(data['userCount'])));
                    _this.sendTokenAData = {
                        title: data['floattitleA'],
                        body: data['floatmessageA'],
                        icon: _this.formAB.imageurlA,
                        image: _this.formAB.bigImageA,
                        landingURL: data['floaturlA'],
                        safaritoken: _this.tokenAList,
                        type: 'A'
                    };
                    _this.sendTokenBData = {
                        title: data['floattitleB'],
                        body: data['floatmessageB'],
                        icon: _this.formAB.imageurlB,
                        image: _this.formAB.bigImageB,
                        landingURL: data['floaturlB'],
                        safaritoken: _this.tokenBList,
                        type: 'B'
                    };
                    _this.selectednotification = {
                        all: '',
                        selected: _this.idArray
                    };
                    _this.saveABCampaign(_this.sendTokenAData, _this.sendTokenBData, data, 'safari');
                }
            });
        }
    };
    WebEngagementComponent.prototype.saveABCampaign = function (sendTokenAData, sendTokenBData, data, val) {
        var _this = this;
        debugger;
        if (data['scheduled'] == '') {
            this.webengagementservice.saveABWebCampaign(data, '', '', this.selectednotification).then(function (webdata) {
                if (webdata['campaign'] > 0) {
                    console.log('sendTokenAData - ' + JSON.stringify(sendTokenAData));
                    if (val == 'nonsafari') {
                        _this.webengagementservice.sendNotification(sendTokenAData, webdata['campaign']).then(function (notificationAdata) {
                            console.log('sendNotification - ' + JSON.stringify(notificationAdata));
                            if (notificationAdata['success'] > 0) {
                                _this.status = 'success';
                            }
                            else if (notificationAdata['success'] == 0) {
                                _this.status = 'failed';
                            }
                            _this.webengagementservice.sendNotification(sendTokenBData, webdata['campaign']).then(function (notificationBdata) {
                                console.log('sendNotification - ' + JSON.stringify(notificationBdata));
                                if (notificationBdata['success'] > 0) {
                                    _this.status = 'success';
                                }
                                else if (notificationBdata['success'] == 0) {
                                    _this.status = 'failed';
                                }
                                _this.webengagementservice.updateWebCampaign(webdata['campaign'], _this.status, (notificationAdata['success'] + notificationBdata['success'])).then(function (updatedata) {
                                    _this.campaignId = webdata['campaign'];
                                    _this.snotifyService.success('Notifications sent successfully!', '', _this.getConfig());
                                    _this.router.navigate(['/web-dashboard/dashboard']);
                                    console.log('webdata - ' + JSON.stringify(updatedata));
                                });
                            });
                            //return this.status;
                        });
                    }
                    else if (val == 'safari') {
                        _this.webengagementservice.sendSafariNotification(sendTokenAData).then(function (notificationAdata) {
                            _this.webengagementservice.sendSafariNotification(sendTokenBData).then(function (notificationBdata) {
                                _this.webengagementservice.updateWebCampaign(webdata['campaign'], 'success', (notificationAdata['success'] + notificationBdata['success'])).then(function (updatedata) {
                                    _this.campaignId = webdata['campaign'];
                                    console.log('webdata - ' + JSON.stringify(updatedata));
                                });
                            });
                        });
                    }
                }
            });
        }
        else if (data['scheduled'] == true) {
            this.webengagementservice.saveABWebCampaign(data, sendTokenAData, sendTokenBData, this.selectednotification).then(function (webdata) {
                _this.snotifyService.success('Notifications are Scheduled successfully!', '', _this.getConfig());
                _this.router.navigate(['/web-dashboard/dashboard']);
                console.log('scheduled - ' + JSON.stringify(webdata));
            });
        }
    };
    WebEngagementComponent.prototype.scheduleNotification = function (data) {
        var _this = this;
        this.submitted = true;
        if (this.form.image != '') {
            this.form.image = this.form.image;
        }
        else if (this.form.image == '') {
            this.form.image = this.url; //data['settings'][0]['defaultlogo'];
        }
        if (data['scheduled'] == '' || data['scheduled'] == null) {
            if (this.segmentVal == 'all') {
                this.webengagementservice.getAllTokens(this.segmentVal).then(function (tokendata) {
                    if (tokendata['nonsafaritokens'] != '' && tokendata['nonsafaritokens'] != null) {
                        _this.scheduleData = {
                            nonsafaritoken: tokendata['nonsafaritokens'],
                            title: data['floattitle'],
                            body: data['floatmessage'],
                            icon: _this.form.image,
                            image: _this.form.bigImage,
                            landingURL: data['floaturl'],
                            safaritoken: '',
                            type: '',
                            scheduled: '',
                            scheduledate: '',
                            time: ''
                        };
                        _this.selectednotification = {
                            all: 'all',
                            selected: ''
                        };
                        _this.webengagementservice.saveWebCampaign(_this.scheduleData, _this.selectednotification).then(function (webdata) {
                            if (webdata['campaign'] > 0) {
                                _this.webengagementservice.sendNotification(_this.scheduleData, webdata['campaign']).then(function (notificationdata) {
                                    if (notificationdata['success'] > 0) {
                                        _this.status = 'success';
                                    }
                                    else if (notificationdata['success'] == 0) {
                                        _this.status = 'failed';
                                    }
                                    _this.webengagementservice.updateWebCampaign(webdata['campaign'], _this.status, notificationdata['success']).then(function (updatedata) {
                                        _this.webengagementservice.getNotSentTokens(webdata['campaign']).then(function (NotSentData) {
                                            _this.snotifyService.success('Notifications sent successfully!', '', _this.getConfig());
                                            _this.submitted = false;
                                            _this.router.navigate(['/web-dashboard/dashboard']);
                                        });
                                        if (tokendata['safaritokens'] != '' && tokendata['safaritokens'] != null) {
                                            console.log('SSSafari - ' + tokendata['safaritokens']);
                                            _this.safariData = {
                                                title: data['floattitle'],
                                                body: data['floatmessage'],
                                                icon: _this.form.image,
                                                image: _this.form.bigImage,
                                                landingURL: data['floaturl'],
                                                safaritoken: tokendata['safaritokens'],
                                                campaign_id: webdata['campaign'],
                                                type: '',
                                                scheduled: '',
                                                scheduledate: '',
                                                time: ''
                                            };
                                            _this.selectednotification = {
                                                all: 'all',
                                                selected: ''
                                            };
                                            if (webdata['campaign'] > 0) {
                                                _this.webengagementservice.sendSafariNotification(_this.safariData).then(function (safaridata) {
                                                    _this.webengagementservice.updateWebCampaign(webdata['campaign'], 'success', (notificationdata['success'] + 1)).then(function (updatedata) {
                                                        _this.webengagementservice.getNotSentTokens(webdata['campaign']).then(function (NotSentData) {
                                                            _this.snotifyService.success('Notifications sent successfully!', '', _this.getConfig());
                                                            _this.router.navigate(['/web-dashboard/dashboard']);
                                                        });
                                                        //alert('Notifications sent successfully!');
                                                        //this.url = '';
                                                        //this.bigImageUrl = '';
                                                        //this.floatingLabelForm.reset();
                                                    });
                                                });
                                            }
                                            //});
                                        }
                                    });
                                });
                            }
                        });
                    }
                    else if ((tokendata['nonsafaritokens'] == '' || tokendata['nonsafaritokens'] == null) && (tokendata['safaritokens'] != '' || tokendata['safaritokens'] != null)) {
                        _this.safariData = {
                            title: data['floattitle'],
                            body: data['floatmessage'],
                            icon: _this.form.image,
                            image: _this.form.bigImage,
                            landingURL: data['floaturl'],
                            safaritoken: tokendata['safaritokens'],
                            campaign_id: '',
                            type: '',
                            scheduled: '',
                            scheduledate: '',
                            time: ''
                        };
                        _this.selectednotification = {
                            all: 'all',
                            selected: ''
                        };
                        _this.webengagementservice.saveWebCampaign(_this.safariData, _this.selectednotification).then(function (webdata) {
                            if (webdata['campaign'] > 0) {
                                _this.safariData.campaign_id = webdata['campaign'];
                                _this.webengagementservice.sendSafariNotification(_this.safariData).then(function (notificationdata) {
                                    if (notificationdata['success'] > 0) {
                                        _this.status = 'success';
                                    }
                                    else if (notificationdata['success'] == 0) {
                                        _this.status = 'failed';
                                    }
                                    _this.webengagementservice.updateWebCampaign(webdata['campaign'], _this.status, notificationdata['success']).then(function (updatedata) {
                                        _this.webengagementservice.getNotSentTokens(webdata['campaign']).then(function (NotSentData) {
                                            _this.snotifyService.success('Notifications sent successfully!', '', _this.getConfig());
                                            _this.router.navigate(['/web-dashboard/dashboard']);
                                        });
                                        //console.log('webdata - ' + JSON.stringify(updatedata));
                                        //alert('Notifications sent successfully!');
                                        //this.url = '';
                                        //this.bigImageUrl = '';
                                        //this.floatingLabelForm.reset();
                                    });
                                });
                            }
                        });
                    }
                });
            }
            else if (this.segmentVal == 'segments') {
                this.webengagementservice.getTokensBySegment(this.idArray).then(function (tokendata) {
                    if (tokendata['nonsafaritokens'] != '' && tokendata['nonsafaritokens'] != null) {
                        _this.scheduleData = {
                            nonsafaritoken: tokendata['nonsafaritokens'],
                            title: data['floattitle'],
                            body: data['floatmessage'],
                            icon: _this.form.image,
                            image: _this.form.bigImage,
                            landingURL: data['floaturl'],
                            safaritoken: '',
                            type: '',
                            scheduled: '',
                            scheduledate: '',
                            time: ''
                        };
                        _this.selectednotification = {
                            all: '',
                            selected: _this.idArray
                        };
                        _this.webengagementservice.saveWebCampaign(_this.scheduleData, _this.selectednotification).then(function (webdata) {
                            if (webdata['campaign'] > 0) {
                                _this.webengagementservice.sendNotification(_this.scheduleData, webdata['campaign']).then(function (notificationdata) {
                                    if (notificationdata['success'] > 0) {
                                        _this.status = 'success';
                                    }
                                    else if (notificationdata['success'] == 0) {
                                        _this.status = 'failed';
                                    }
                                    _this.webengagementservice.updateWebCampaign(webdata['campaign'], _this.status, notificationdata['success']).then(function (updatedata) {
                                        _this.webengagementservice.getNotSentTokens(webdata['campaign']).then(function (NotSentData) {
                                            _this.snotifyService.success('Notifications sent successfully!', '', _this.getConfig());
                                            _this.router.navigate(['/web-dashboard/dashboard']);
                                        });
                                        if (tokendata['safaritokens'] != '' && tokendata['safaritokens'] != null) {
                                            _this.safariData = {
                                                title: data['floattitle'],
                                                body: data['floatmessage'],
                                                icon: _this.form.image,
                                                image: _this.form.bigImage,
                                                landingURL: data['floaturl'],
                                                safaritoken: tokendata['safaritokens'],
                                                campaign_id: webdata['campaign'],
                                                type: '',
                                                scheduled: '',
                                                scheduledate: '',
                                                time: ''
                                            };
                                            if (webdata['campaign'] > 0) {
                                                _this.webengagementservice.sendSafariNotification(_this.safariData).then(function (safaridata) {
                                                    _this.webengagementservice.updateWebCampaign(webdata['campaign'], 'success', (notificationdata['success'])).then(function (updatedata) {
                                                        _this.webengagementservice.getNotSentTokens(webdata['campaign']).then(function (NotSentData) {
                                                            _this.snotifyService.success('Notifications sent successfully!', '', _this.getConfig());
                                                            _this.router.navigate(['/web-dashboard/dashboard']);
                                                        });
                                                        //console.log('webdata - ' + JSON.stringify(updatedata));
                                                        //alert('Notifications sent successfully!');
                                                        //this.url = '';
                                                        //this.bigImageUrl = '';
                                                        //this.floatingLabelForm.reset();
                                                    });
                                                });
                                            }
                                        }
                                    });
                                });
                            }
                        });
                    }
                    else if ((tokendata['nonsafaritokens'] == '' || tokendata['nonsafaritokens'] == null) && (tokendata['safaritokens'] != '' || tokendata['safaritokens'] != null)) {
                        _this.safariData = {
                            title: data['floattitle'],
                            body: data['floatmessage'],
                            icon: _this.form.image,
                            image: _this.form.bigImage,
                            landingURL: data['floaturl'],
                            safaritoken: tokendata['safaritokens'],
                            campaign_id: '',
                            type: '',
                            scheduled: '',
                            scheduledate: '',
                            time: ''
                        };
                        _this.webengagementservice.saveWebCampaign(_this.safariData, _this.selectednotification).then(function (webdata) {
                            if (webdata['campaign'] > 0) {
                                _this.safariData.campaign_id = webdata['campaign'];
                                _this.webengagementservice.sendSafariNotification(_this.safariData).then(function (safaridata) {
                                    _this.webengagementservice.updateWebCampaign(webdata['campaign'], 'success', (safaridata['success'])).then(function (updatedata) {
                                        _this.webengagementservice.getNotSentTokens(webdata['campaign']).then(function (NotSentData) {
                                            _this.snotifyService.success('Notifications sent successfully!', '', _this.getConfig());
                                            _this.router.navigate(['/web-dashboard/dashboard']);
                                        });
                                        //console.log('webdata - ' + JSON.stringify(updatedata));
                                        //alert('Notifications sent successfully!');
                                        //this.url = '';
                                        //this.bigImageUrl = '';
                                        //this.floatingLabelForm.reset();
                                    });
                                });
                            }
                        });
                    }
                });
            }
        }
        else if (data['scheduled'] == true) {
            if (this.segmentVal == 'all') {
                this.webengagementservice.getAllTokens(this.segmentVal).then(function (tokendata) {
                    if (tokendata['nonsafaritokens'] != '' || tokendata['nonsafaritokens'] != null) {
                        _this.scheduleData = {
                            nonsafaritoken: tokendata['nonsafaritokens'],
                            title: data['floattitle'],
                            body: data['floatmessage'],
                            icon: _this.form.image,
                            image: _this.form.bigImage,
                            landingURL: data['floaturl'],
                            safaritoken: '',
                            type: '',
                            scheduled: data['scheduled'],
                            scheduledate: data['scheduledate'],
                            time: data['time']
                        };
                        _this.selectednotification = {
                            all: 'all',
                            selected: ''
                        };
                    }
                    if (tokendata['safaritokens'] != '' || tokendata['safaritokens'] != null) {
                        _this.scheduleData = {
                            title: data['floattitle'],
                            body: data['floatmessage'],
                            icon: _this.form.image,
                            image: _this.form.bigImage,
                            landingURL: data['floaturl'],
                            safaritoken: tokendata['safaritokens'],
                            type: '',
                            scheduled: data['scheduled'],
                            scheduledate: data['scheduledate'],
                            time: data['time']
                        };
                        _this.selectednotification = {
                            all: 'all',
                            selected: ''
                        };
                    }
                    _this.webengagementservice.saveWebCampaign(_this.scheduleData, _this.selectednotification).then(function (webdata) {
                        _this.url = '';
                        _this.bigImageUrl = '';
                        _this.floatingLabelForm.reset();
                        _this.snotifyService.success('Notifications are Scheduled successfully!', '', _this.getConfig());
                        _this.router.navigate(['/web-dashboard/dashboard']);
                    });
                });
            }
            else if (this.segmentVal == 'segments') {
                this.webengagementservice.getTokensBySegment(this.idArray).then(function (tokendata) {
                    if (tokendata['nonsafaritokens'] != '' || tokendata['nonsafaritokens'] != null) {
                        _this.scheduleData = {
                            nonsafaritoken: tokendata['nonsafaritokens'],
                            title: data['floattitle'],
                            body: data['floatmessage'],
                            icon: _this.form.image,
                            image: _this.form.bigImage,
                            landingURL: data['floaturl'],
                            safaritoken: '',
                            type: '',
                            scheduled: data['scheduled'],
                            scheduledate: data['scheduledate'],
                            time: data['time']
                        };
                        _this.selectednotification = {
                            all: '',
                            selected: _this.idArray
                        };
                    }
                    if (tokendata['safaritokens'] != '' || tokendata['safaritokens'] != null) {
                        _this.scheduleData = {
                            title: data['floattitle'],
                            body: data['floatmessage'],
                            icon: _this.form.image,
                            image: _this.form.bigImage,
                            landingURL: data['floaturl'],
                            safaritoken: tokendata['safaritokens'],
                            type: '',
                            scheduled: data['scheduled'],
                            scheduledate: data['scheduledate'],
                            time: data['time']
                        };
                        _this.selectednotification = {
                            all: '',
                            selected: _this.idArray
                        };
                    }
                    _this.webengagementservice.saveWebCampaign(_this.scheduleData, _this.selectednotification).then(function (webdata) {
                        _this.url = '';
                        _this.bigImageUrl = '';
                        _this.floatingLabelForm.reset();
                        _this.snotifyService.success('Notifications are Scheduled successfully!', '', _this.getConfig());
                        _this.router.navigate(['/web-dashboard/dashboard']);
                    });
                });
            }
        }
    };
    WebEngagementComponent.prototype.uploadBigImage = function (files, val) {
        this.imageloader = true;
        this.loader = false;
        if (val == 'bigImage') {
            this.bigImageUrl = 'https://cockburncrc.com.au/members/usermanagement/images/WebImages/' + files[0].name;
            this.form.bigImage = this.bigImageUrl;
        }
        if (val == 'bigImageA') {
            this.bigImageUrlA = 'https://cockburncrc.com.au/members/usermanagement/images/WebImages/' + files[0].name;
            this.formAB.bigImageA = this.bigImageUrlA;
        }
        if (val == 'bigImageB') {
            this.bigImageUrlB = 'https://cockburncrc.com.au/members/usermanagement/images/WebImages/' + files[0].name;
            this.formAB.bigImageB = this.bigImageUrlB;
        }
        this.uploadAndProgressImage(files, 'bigImage');
    };
    WebEngagementComponent.prototype.uploadAndProgressImage = function (files, imageType) {
        var _this = this;
        console.log(imageType);
        var formData = new FormData();
        Array.from(files).forEach(function (f) { return formData.append('file', f); });
        this.http.post('https://click365.com.au/members/uploadWebImages.php?fld=WebImages&type=' + imageType, formData)
            .subscribe(function (event) {
            _this.loader = false;
            _this.imageloader = false;
            if (event && event['status'] == "Sorry, your file is too large.") {
                alert('Sorry, your file is too large. Recommended Size: 192x192.');
                _this.bigImageUrl = '';
            }
        });
    };
    WebEngagementComponent.prototype.uploadmembershipIcon = function (files, val) {
        this.loader = true;
        this.imageloader = false;
        if (val == 'url') {
            this.url = 'https://cockburncrc.com.au/members/usermanagement/images/WebImages/' + files[0].name;
            this.form.image = this.url;
        }
        if (val == 'urlA') {
            this.imageUrlA = 'https://cockburncrc.com.au/members/usermanagement/images/WebImages/' + files[0].name;
            this.formAB.imageurlA = this.imageUrlA;
        }
        else if (val == 'urlB') {
            this.imageUrlB = 'https://cockburncrc.com.au/members/usermanagement/images/WebImages/' + files[0].name;
            this.formAB.imageurlB = this.imageUrlB;
        }
        this.uploadAndProgress(files, 'smallImage');
    };
    WebEngagementComponent.prototype.uploadAndProgress = function (files, imageType) {
        var _this = this;
        console.log(imageType);
        var formData = new FormData();
        Array.from(files).forEach(function (f) { return formData.append('file', f); });
        this.http.post('https://click365.com.au/members/uploadWebImages.php?fld=WebImages&type=' + imageType, formData)
            .subscribe(function (event) {
            _this.loader = false;
            _this.imageloader = false;
            if (event && event['status'] == "Sorry, your file is too large.") {
                alert('Sorry, your file is too large. Recommended Size: 192x192.');
                _this.url = '';
                _this.imageUrlA = '';
                _this.imageUrlB = '';
            }
        });
    };
    WebEngagementComponent.prototype.copyCampaign = function () {
        var _this = this;
        this.webengagementservice.getLastCampaign().then(function (data) {
            if (data['status'] == 'success') {
                _this.copyCampaignBoolean = true;
                if (data['campaign'][0].image) {
                    _this.showBigImage = true;
                }
                _this.form.floattitle = data['campaign'][0].campaign_title;
                _this.form.floatmessage = data['campaign'][0].campaign_message;
                _this.form.floaturl = data['campaign'][0].landing_url;
                _this.url = data['campaign'][0].icon;
                _this.form.image = _this.url;
                _this.bigImageUrl = data['campaign'][0].image;
                _this.form.bigImage = _this.bigImageUrl;
            }
        });
    };
    WebEngagementComponent.prototype.saveTemplate = function (data) {
        console.log('Tem Data - ' + JSON.stringify(data));
        var self = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
            title: "<h5>Template Name</h5>",
            input: "text",
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save'
        }).then(function (save) {
            console.log(JSON.stringify(save));
            window.location.href = ('http://localhost:4200/#/web-dashboard/web-template');
            if (save.value) {
                self.insertwebtemplate(data, save.value);
            }
        });
    };
    WebEngagementComponent.prototype.insertwebtemplate = function (data, templateName) {
        this.saveData = {
            title: data['floattitle'],
            body: data['floatmessage'],
            icon: this.form.image,
            image: this.form.bigImage,
            landingURL: data['floaturl'],
            templatename: templateName
        };
        if (data['segment'] == 'all') {
            this.selectednotification = {
                all: 'all',
                selected: ''
            };
        }
        else if (data['segment'] == 'segments') {
            this.selectednotification = {
                all: '',
                selected: this.idArray
            };
        }
        // this.snotifyService.success('Saved Successfully', '', this.getConfig());
        //this.webtemplateForm.reset();
        this.WebTemplateService.insertwebtemplate(this.saveData, this.selectednotification).then(function (data) {
            console.log(data);
            if (data['status'] == 'success') {
            }
        });
    };
    WebEngagementComponent.prototype.getConfig = function () {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], WebEngagementComponent.prototype, "floatingLabelForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('a'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], WebEngagementComponent.prototype, "variantAForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('b'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], WebEngagementComponent.prototype, "variantBForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('imageLabel'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WebEngagementComponent.prototype, "imageLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('bigImageLabel'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WebEngagementComponent.prototype, "bigImageLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('imageALabel'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WebEngagementComponent.prototype, "imageALabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('imageBLabel'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WebEngagementComponent.prototype, "imageBLabel", void 0);
    WebEngagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-web-engagement',
            template: __webpack_require__(/*! ./web-engagement.component.html */ "./src/app/web-dashboard/web-engagement/web-engagement.component.html"),
            styles: [__webpack_require__(/*! ./web-engagement.component.scss */ "./src/app/web-dashboard/web-engagement/web-engagement.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDatepickerConfig"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _shared_data_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"], _shared_data_web_engagement_service__WEBPACK_IMPORTED_MODULE_2__["WebEngagementService"], _shared_data_web_template_service__WEBPACK_IMPORTED_MODULE_3__["WebTemplateService"], ng_snotify__WEBPACK_IMPORTED_MODULE_6__["SnotifyService"]])
    ], WebEngagementComponent);
    return WebEngagementComponent;
}());



/***/ }),

/***/ "./src/app/web-dashboard/web-notification/web-notifications.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/web-dashboard/web-notification/web-notifications.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <section>\r\n <!--    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"content-header\" *ngIf=\"!showForm\">Notification Automation List</div>\r\n            <div class=\"content-header\" *ngIf=\"showForm\">Create Notification Automation</div>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"row\" *ngIf=\"showTable\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6 content-header\">\r\n                            <h3>Notifications List</h3>\r\n                        </div>\r\n                        <div class=\"col-sm-6\" style=\"text-align: right;\">\r\n                            <p>\r\n                                <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-bitbucket float-right\" (click)=\"new()\"><span class=\"ft-plus\"></span>Create Notification Automation</a>\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n\r\n                       <!--    <div class=\"row\">\r\n                                          <div class=\"col-4 pr-0\">\r\n                                              <div class=\"card px-1\">\r\n                                                <div class=\"input-group\">\r\n                                                  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"fromDt\" ngbDatepicker #d2=\"ngbDatepicker\">\r\n                                                  <div class=\"input-group-append\">\r\n                                                    <div class=\"input-group-text\" (click)=\"d2.toggle()\">\r\n                                                      <i class=\"fa fa-calendar\" style=\"cursor: pointer;\"></i>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-4 pr-0\">\r\n                                                <div class=\"card px-1\">\r\n                                          <div class=\"input-group\">\r\n                                          <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp1\" [(ngModel)]=\"toDt\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n                                          <div class=\"input-group-append\">\r\n                                          <div class=\"input-group-text\" (click)=\"d1.toggle()\">\r\n                                            <i class=\"fa fa-calendar\" style=\"cursor: pointer;\"></i>\r\n                                          </div>\r\n                                          </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                          <div class=\"col-2 pr-0\">\r\n                                            <div class=\"card px-1\">\r\n                                              <button type=\"button\" class=\"btn btn-success btn-raised\" (click)=\"search()\">Search</button>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"col-2 pr-0\">\r\n                                            <div class=\"card px-1\">\r\n                                              <button type=\"button\" class=\"btn btn-danger btn-raised\" (click)=\"reset()\" style=\"margin-right: 14px;\">Reset</button>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n -->\r\n                            <table class=\"table table-responsive-md text-center\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Event Name</th>\r\n                                        <th>Template</th>\r\n                                        <th>Duration After</th>\r\n                                        <th>Status</th>\r\n                                        <th>Created At</th>\r\n                                        <th>Segment</th>\r\n                                        <th>Notification Data</th>\r\n                                        <th>Action</th>\r\n                                        <!-- <th>Statistics</th> -->\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let data of listData | paginate: { itemsPerPage: 10, currentPage: p }\">\r\n                                        <td>{{data.event}}</td>\r\n                                        <td>{{data.template}}</td>\r\n                                        <td>{{data.duration}}</td>\r\n                                        <td>{{data.status}}</td>\r\n                                        <td>{{data.created_date}}</td>\r\n                                         <td><button class=\"btn btn-success btn-raised\" (click)=\"viewSegment(data.by_segment);\">View</button></td>\r\n                                        <td><button class=\"btn btn-success btn-raised\" (click)=\"viewNotify(data.notification_data);\">View</button></td>\r\n                                        <td *ngIf=\"data.status == 'Pending'\">\r\n                                           <ui-switch id=\"active\" [checked]=\"true\" (change)=\"change_status(data.id,'Complete')\"></ui-switch>\r\n                                         </td>\r\n                                         <td *ngIf=\"data.status == 'Complete'\">\r\n                                             <ui-switch id=\"active\" [checked]=\"false\" disabled (change)=\"change_status(data.id,'Pending')\"></ui-switch>\r\n                                        </td>\r\n\r\n                                        \r\n                                       <!--  <td>\r\n                                        <a class=\"success p-0\" (click)=\"detail(data.task_id);\"><i class=\"icon-bar-chart\"></i></a>\r\n                                        <td> -->\r\n                                    </tr>\r\n\r\n                                    <!-- <pagination-controls (pageChange)=\"p = $event\"></pagination-controls> -->\r\n                                </tbody>\r\n                            </table>\r\n                            <div class=\"col-12 paginationonAction\">\r\n                                <span class=\"total\">{{collectionSize}} Total</span>\r\n                                <ngb-pagination [pageSize]=\"pageSize\" [(page)]=\"p\" [maxSize]=\"10\" [rotate]=\"true\" [collectionSize]=\"collectionSize\" [boundaryLinks]=\"true\" style=\"float: right;\"></ngb-pagination>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n<div *ngIf=\"showForm\">\r\n   \r\n<form [formGroup]=\"notificationform\" novalidate>\r\n\t<div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"content-header\">Notification Automation</div>\r\n        </div>\r\n    </div>\r\n\r\n<div formArrayName=\"notifications\" class=\"col-md-12\">\r\n      <div *ngFor=\"let notifications of notificationform.controls.notifications.controls; let idx = index\" [formGroup]=\"notificationform\">\r\n        <div class=\"row form-group\">\r\n          <div class=\"card-body border\">\r\n\t\t    <div class=\"card-block\">\r\n\t\t        <div class=\"col-lg-12\">\r\n\t\t        \t<div class=\"row\">\r\n\t\t\t\t        <span class=\"form-text text-muted danger\">*</span><p>Event Name</p>&nbsp;&nbsp;\r\n\t\t\t\t        <div class=\"col-lg-6\">\r\n\t\t\t\t           <input type=\"text\" formControlName=\"event{{idx}}\" id=\"event{{idx}}\" required />\r\n\t\t\t\t   \t\t\t<small class=\"form-text text-muted danger\" *ngIf=\"event==''\">Event Name is required!</small>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t        \t<div class=\"row\">\r\n\t\t        \t<span class=\"form-text text-muted danger\">*</span><p>Send a notification</p>&nbsp;&nbsp;\r\n\r\n            \t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n                      <input class=\"custom-control-input\" type=\"radio\" name=\"immediately{{idx}}\" formControlName=\"immediately{{idx}}\" id=\"immediately{{idx}}\" value=\"after\" checked=\"true\" style=\"margin-top: 6px;\">\r\n                      <label class=\"custom-control-label\" for=\"immediately{{idx}}\">After</label>\r\n                    </div>\r\n            \t\t<div class=\"col-lg-3\">\r\n\t                <div class=\"input-group\">\r\n\t                    <select class=\"form-control\" id=\"duration{{idx}}\" formControlName=\"duration{{idx}}\" placeholder=\"Duration\" required>\r\n\t                    \t      <option *ngFor=\"let i of numbers\" value=\"{{i}}\">{{i}}</option>\r\n\t                    </select>\r\n\r\n\t                    <span ngbDropdown>\r\n\t                        <div class=\"input-group-append\">\r\n\t                           <select class=\"form-control\" id=\"span{{idx}}\" formControlName=\"span{{idx}}\" placeholder=\"Span\" required>\r\n\t\t\t                        <option value=\"minutes\">Minutes</option>\r\n\t\t\t                        <option value=\"hours\">Hours</option>\r\n\t\t\t                        <option value=\"days\">Days</option>\r\n\t\t\t                        <option value=\"weeks\">Weeks</option>\r\n\t\t\t                        <option value=\"months\">Months</option>\r\n\t\t\t                    </select>\r\n\t                        </div>\r\n\t                    </span>\r\n\t                   \t     <small class=\"form-text text-muted danger\" *ngIf=\"duration=='' || span==''\">Duration is required!</small>\r\n\t\t\t\t    \r\n\t                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n        <span class=\"form-text text-muted danger\">*</span><p>Select a Template</p>\r\n\t\r\n        <div class=\"col-lg-6\">\r\n           \t<select class=\"form-control\" id=\"template{{idx}}\" [(ngModel)]=\"web_template\" formControlName=\"template{{idx}}\" placeholder=\"Choose a Template\" required>\r\n\t\t        <option value=''>Select a template</option>\r\n\t\t        <option *ngFor=\"let template of template\" value=\"{{template.template_name}}\">{{template.template_name}}</option>\r\n\t\t    </select>\r\n\t\t    \t<small class=\"form-text text-muted danger\" *ngIf=\"web_template==''\">Template is required!</small>\r\n\t\r\n\t\t</div>\r\n\r\n\t\t</div>&nbsp;&nbsp;\r\n\t\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t<form [formGroup]=\"segmentForm\">\r\n\t\t\t\t\t\t\t<h2>Events</h2>\r\n\t\t\t\t\t\t\t<p>Subscribers perform following Events</p>\r\n\r\n\t\t\t\t\t\t\t<div formArrayName=\"actionset\">\r\n\t\t\t\t\t\t\t\t<div  [formGroupName]=\"i\" *ngFor=\"let tech of segmentForm.controls.actionset.controls; let i = index\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\r\n\t\t\t\t\t\t\t\t\t    <div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select  class=\"custom-select mb-2\" formControlName=\"act1\" placeholder=\"Select an option\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"tokenin\" selected>Clicked</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"tokennotin\">Not Clicked</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\" >\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select  class=\"custom-select mb-2\" formControlName=\"act2\" placeholder=\"Select an option\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"category\" selected>Category</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"event\">Action</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\" >\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select  class=\"custom-select mb-2\" formControlName=\"act3\" placeholder=\"Select an option\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"isequalto\" selected>Is equal to</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <option value=\"isnotequalto\">Is not equal to</option> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"contains\">Contains</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input  type=\"text\" name=\"act4\" formControlName=\"act4\" class=\"form-control\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xl-1 col-lg-6 col-md-12 mb-1\" >\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xl-2 col-lg-6 col-md-12 mb-1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger mr-1 btn-fab\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"removeSetCondition1(i)\"><i class=\"fa fa-times\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-primary btn-block btn-raised\" (click)=\"addSetCondition1()\" >Add Condition</button>\r\n\r\n\t\t\t\t\t\t\t<h2>Properties</h2>\r\n\t\t\t\t\t\t\t<p>Subscribers has the following properties</p>\r\n\r\n\t\t\t\t\t\t\t<div formArrayName=\"propertyset\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\" [formGroupName]=\"i\" *ngFor=\"let tech of segmentForm.controls.propertyset.controls; let i = index\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select mb-2\"  formControlName=\"ddl1\"  placeholder=\"Rule Type\"  (change)=\"ddl1change($event.target.value,i)\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let value of propertyList; let j = index\"  value=\"{{value.name}}\" >{{value.name}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xl-3 col-lg-6 col-md-12 mb-1\" >\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<select  class=\"custom-select mb-2\" formControlName=\"seloperator\" placeholder=\"Rule Type\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"isequalto\" selected>Is equal to</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"isnotequalto\">Is not equal to</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"contains\">Contains</option>\r\n\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-6 col-md-12 mb-1\" *ngIf=\"valuesArray.length >0\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div  *ngIf=\"propertyList[valuesArray[i]].values.length == 0\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input  type=\"text\" name=\"txtfilterval\" formControlName=\"txtfilterval\" class=\"form-control\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div  *ngIf=\"propertyList[valuesArray[i]].values.length > 0\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"custom-select mb-2\" formControlName=\"txtfilterval\" placeholder=\"Rule Type\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" selected>-- Select --</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option  *ngFor=\"let opt of propertyList[valuesArray[i]].values\" value=\"{{opt}}\">{{opt}}</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-xl-1 col-lg-6 col-md-12 mb-1\" >\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xl-2 col-lg-6 col-md-12 mb-1\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger mr-1 btn-fab\"\r\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"removeSetCondition(i)\"><i class=\"fa fa-times\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-primary btn-block btn-raised\" (click)=\"addSetCondition()\" >Add Condition</button>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t</div>\r\n\t    <div style=\"text-align: right;\">\r\n\t\t\t<button type=\"submit\" class=\"btn btn-success btn-raised\" id=\"create_{{idx}}\" (click)=\"addSegment(segmentForm.value,idx)\" [disabled]=\"submitted\">Create Notification</button>\r\n\t\t\t&nbsp;&nbsp;<button type=\"submit\" class=\"btn btn-danger btn-raised\" (click)=\"cancel()\">Cancel</button>\r\n\t\t\t\r\n\t\t</div>\r\n\r\n\t\t    </div>\r\n\r\n\t\t</div></div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</form>\r\n</div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/web-dashboard/web-notification/web-notifications.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/web-dashboard/web-notification/web-notifications.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYi1kYXNoYm9hcmQvd2ViLW5vdGlmaWNhdGlvbi93ZWItbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/web-dashboard/web-notification/web-notifications.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/web-dashboard/web-notification/web-notifications.component.ts ***!
  \*******************************************************************************/
/*! exports provided: WebNotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebNotificationsComponent", function() { return WebNotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_data_web_engagement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data/web-engagement.service */ "./src/app/shared/data/web-engagement.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
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





var WebNotificationsComponent = /** @class */ (function () {
    function WebNotificationsComponent(formBuilder, _FB, webengagementservice, snotifyService) {
        this.formBuilder = formBuilder;
        this._FB = _FB;
        this.webengagementservice = webengagementservice;
        this.snotifyService = snotifyService;
        this.style = 'material';
        this.title = 'Success';
        this.body = 'Organization created successfully!';
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
        this.submitted = false;
        // segments =[];
        this.showSegment = false;
        this.columns = [
            { name: 'Name' },
            { name: 'Subscribers' },
            { name: 'Created' }
        ];
        this.allColumns = [
            { name: 'Name' },
            { name: 'Subscribers' },
            { name: 'Created' }
        ];
        this.isCollapsed = false;
        this.propertyList = [
            { name: 'Operating System', operator: ['Is equal to', 'Is not equal to'], values: ['Windows', 'Linux', 'MacOS'] },
            { name: 'Browser', operator: ['Is equal to', 'Is not equal to'], values: ['Chrome', 'Firefox', 'Safari', 'Opera', 'Edge'] },
            // { name: 'User Agent', operator:['Is equal to','Is not equal to'], values: [] },
            { name: 'Reffering URL', operator: ['Is equal to', 'Is not equal to'], values: [] },
            { name: 'Page URL', operator: ['Is equal to', 'Is not equal to'], values: [] },
            { name: 'Platform', operator: ['Is equal to', 'Is not equal to'], values: ['Mobile', 'Desktop'] }
            //{ name: 'Location', operator:['Is equal to','Is not equal to'], values: ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]},
        ];
        this.numbers = [];
        this.p = 1;
        this.pageSize = 10;
        this.event = null;
        this.immediately = null;
        this.duration = null;
        this.span = null;
        this.web_template = null;
        this.valuesArray = [];
        this.numbers = Array.from({ length: 59 }, function (v, k) { return k + 1; });
    }
    WebNotificationsComponent.prototype.viewSegment = function (id) {
        // alert(id);
        // id = "['"+id+"']";
        this.webengagementservice.getSegmentById([id]).then(function (data) {
            console.log('Data - ' + JSON.stringify(data));
            var data1 = JSON.parse(data["segments"][0]["condition"]);
            var propertylength = data1["propertyset"].length;
            var propertyset = "";
            var actionlength = data1["actionset"].length;
            var actionset = "";
            var i = 0;
            var str = "";
            for (i = 0; i < actionlength; i++) {
                // 	actionset = actionset + "<br />" + JSON.stringify(data1["actionset"][i]);
                // }
                //     for ($i = 0; $i < $actionlength; $i++) {
                actionset = actionset + " and ";
                //act1
                if (data1["actionset"][i]['act1'] == 'tokenin') {
                    actionset = actionset + "Clicked";
                }
                if (data1["actionset"][i]['act1'] == 'tokennotin') {
                    actionset = actionset + "Not Clicked";
                }
                if (data1["actionset"][i]['act2'] == 'event') {
                    actionset = actionset + " action"; //"event";
                    //   $str .= "event";//"event";
                }
                if (data1["actionset"][i]['act2'] == 'category') {
                    actionset = actionset + " category";
                    // $str .= "category";
                }
                //act3
                if (data1["actionset"][i]['act3'] == 'isequalto') {
                    actionset = actionset + " is equal to ";
                }
                if (data1["actionset"][i]['act3'] == 'contains') {
                    actionset = actionset + " contains ";
                    actionset = actionset + data1["actionset"][i]['act4'];
                }
                else {
                    actionset = actionset + data1["actionset"][i]['act4'];
                }
            }
            // actionset = str;
            // if(propertylength > 0)
            // {
            // 	str="";
            // }
            for (i = 0; i < propertylength; i++) {
                propertyset = propertyset + " and ";
                if (data1["propertyset"][i]['ddl1'] == 'Operating System') {
                    propertyset = propertyset + "Platform";
                }
                if (data1["propertyset"][i]['ddl1'] == 'Browser') {
                    propertyset = propertyset + "Browser info";
                }
                if (data1["propertyset"][i]['ddl1'] == 'Platform') {
                    propertyset = propertyset + "Device Type";
                }
                if (data1["propertyset"][i]['ddl1'] == 'Location') {
                    propertyset = propertyset + "State";
                }
                if (data1["propertyset"][i]['ddl1'] == 'Page URL') {
                    propertyset = propertyset + "Page URL";
                }
                if (data1["propertyset"][i]['ddl1'] == 'Reffering URL') {
                    propertyset = propertyset + "Reffering URL";
                }
                //DDL2
                if (data1["propertyset"][i]['seloperator'] == 'isequalto') {
                    propertyset = propertyset + " is equal to ";
                }
                if (data1["propertyset"][i]['seloperator'] == 'isnotequalto') {
                    propertyset = propertyset + " is not equal to ";
                }
                if (data1["propertyset"][i]['seloperator'] == 'contains') {
                    propertyset = propertyset + " contains ";
                }
                //ddl3
                propertyset = propertyset + data1["propertyset"][i]['txtfilterval'];
            }
            //propertyset = str;
            if (actionset != "" || propertyset != "") {
                if (actionset != "") {
                    actionset = "<b>Events : </b>" + actionset.substring(5, actionset.length);
                }
                if (propertyset != "") {
                    propertyset = "<b>Properties : </b>" + propertyset.substring(5, propertyset.length);
                }
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                    title: 'Segment',
                    //type: 'info',
                    html: '<div align="left">' + actionset + '<br />' + propertyset,
                    // '<b>data </b><br />' + actionset + '<br />',
                    showCloseButton: true,
                    showCancelButton: false,
                    focusConfirm: false,
                    confirmButtonText: 'Ok'
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()("No Segment", "", "info");
            }
            // alert(JSON.stringify(data));
        });
    };
    WebNotificationsComponent.prototype.cancel = function () {
        this.showForm = false;
        this.showTable = true;
    };
    WebNotificationsComponent.prototype.change_status = function (id, status) {
        var _this = this;
        this.savetemplateData = {
            status: status,
            id: id
        };
        this.webengagementservice.updatePushAutomation(this.savetemplateData).then(function (data) {
            // alert(JSON.stringify(data));
            _this.snotifyService.success('Status Updated Successfully!', '', _this.getConfig());
            for (var i in _this.listData) {
                if (_this.listData[i].id === id) {
                    _this.listData[i].status = status;
                }
            }
        });
    };
    WebNotificationsComponent.prototype.ngOnInit = function () {
        //    this.segmentForm = new FormGroup({
        //        'name': new FormControl(null, [Validators.required]),
        //        /*'textArea': new FormControl(null, [Validators.required]),
        //        'price': new FormControl(null, [Validators.required]),
        //        'duration': new FormControl(null, [Validators.required]),
        //        'durationIn': new FormControl(null, [Validators.required]),
        //        'membershipIcon': new FormControl(null, null)*/
        //        'actionset' : this._FB.array([
        //        ]),
        //        'propertyset' : this._FB.array([
        //        //this.initMapFields()
        //        ])
        //    });
        // 	let formControls = {
        // 		radio: 'F',
        // duration: ['', Validators.required],
        // span: ['', Validators.required],
        // template: ['', Validators.required],
        // // segment: ['', Validators.required],
        // event: ['', Validators.required],
        // notifications: this.formBuilder.array([
        // this.createItem(1),
        // ]),
        //   }
        //   this.notificationform = this.formBuilder.group(formControls);
        //   this.webengagementservice.selectwebtemplate().then(data => {
        //   	if(data['status'] == 'success'){
        //   		this.template = data['webtemplate'];
        //   	}
        //   	console.log('Data - ' + JSON.stringify(data['webtemplate']));
        //   });
        //   // this.webengagementservice.getSegments(new Date().getTime()).then(data => {
        //   // 	if(data['status'] == 'success'){
        //   // 		this.segments = data['segments'];
        //   // 		console.log('segments - ' + JSON.stringify(this.segments));
        //   // 	}
        //   // });
        this.getData();
        this.showForm = false;
        this.showTable = true;
    };
    Object.defineProperty(WebNotificationsComponent.prototype, "f", {
        get: function () { return this.notificationform.controls; },
        enumerable: true,
        configurable: true
    });
    WebNotificationsComponent.prototype.getData = function () {
        var _this = this;
        this.webengagementservice.getPushAutomation().then(function (data) {
            console.log('Data - ' + JSON.stringify(data));
            if (data['status'] == 'success') {
                _this.listData = data['lists'];
                //  alert(JSON.stringify(this.listData));
                // for(let i = 0; i < this.listData.length; i++){
                //   let encodeJSON = JSON.parse(this.listData[i]['parameters']);
                //   //alert(encodeJSON);
                //   if(encodeJSON != null)
                //     this.listData[i]['parameters']= encodeJSON['link'];
                // }
                _this.collectionSize = data['lists'].length;
                _this.totalList = data['lists'].length;
            }
        });
    };
    WebNotificationsComponent.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            //this.loadData();
        }
    };
    WebNotificationsComponent.prototype.new = function () {
        var _this = this;
        this.event = null;
        this.immediately = null;
        this.duration = null;
        this.span = null;
        this.web_template = null;
        this.showForm = true;
        this.showTable = false;
        this.segmentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            /*'textArea': new FormControl(null, [Validators.required]),
            'price': new FormControl(null, [Validators.required]),
            'duration': new FormControl(null, [Validators.required]),
            'durationIn': new FormControl(null, [Validators.required]),
            'membershipIcon': new FormControl(null, null)*/
            'actionset': this._FB.array([]),
            'propertyset': this._FB.array([
            //this.initMapFields()
            ])
        });
        var formControls = {
            radio: 'F',
            duration: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            span: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            template: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            // segment: ['', Validators.required],
            event: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            notifications: this.formBuilder.array([
                this.createItem(1),
            ]),
        };
        this.notificationform = this.formBuilder.group(formControls);
        this.notificationform.reset();
        this.webengagementservice.selectwebtemplate().then(function (data) {
            if (data['status'] == 'success') {
                _this.template = data['webtemplate'];
            }
            console.log('Data - ' + JSON.stringify(data['webtemplate']));
        });
        // this.webengagementservice.getSegments(new Date().getTime()).then(data => {
        // 	if(data['status'] == 'success'){
        // 		this.segments = data['segments'];
        // 		console.log('segments - ' + JSON.stringify(this.segments));
        // 	}
        // });
    };
    WebNotificationsComponent.prototype.createItem = function (index) {
        /*return this.formBuilder.group({
          immediately : 'F'
        });*/
        console.log('Index = ' + index);
        //this.indexValue++;
        var i = 'immediately' + index;
        var d = 'duration' + index;
        var s = 'span' + index;
        var t = 'template' + index;
        return this.formBuilder.group({
            i: 'F',
            d: '',
            s: '',
            t: ''
        });
    };
    Object.defineProperty(WebNotificationsComponent.prototype, "invoiceparticularsArray", {
        get: function () {
            return this.notificationform.get('notificationform');
        },
        enumerable: true,
        configurable: true
    });
    WebNotificationsComponent.prototype.addInvoiceParticulars = function (index) {
        this.control = this.notificationform.controls.notifications;
        this.control.push(this.createItem(index));
        // let fg = this.formBuilder.group(new FormControl());
        // this.invoiceparticularsArray.push(this.createItem(index));
    };
    WebNotificationsComponent.prototype.deleteInvoiceParticulars = function (idx) {
        this.control.removeAt(idx);
    };
    WebNotificationsComponent.prototype.send = function () {
        var _this = this;
        if (this.f.radio.value == 'now') {
            this.savetemplateData = {
                value: this.f.radio.value,
                template: this.f.template.value,
                duration: '',
                status: 'sent'
            };
            console.log('createNotification - ' + JSON.stringify(this.savetemplateData));
            this.webengagementservice.createNotification(this.savetemplateData).then(function (data) {
                console.log('createNotification - ' + JSON.stringify(_this.savetemplateData));
            });
            this.webengagementservice.getTemplateByName(this.f.template.value).then(function (data) {
                _this.templateData = data['campaign'];
            });
            /*this.webengagementservice.getAllTokens('all').then(tokendata => {
                if(tokendata['nonsafaritokens'] != '' && tokendata['nonsafaritokens'] != null){
                    this.scheduleData = {
                        nonsafaritoken: tokendata['nonsafaritokens'],
                        title: this.templateData[0]['campaign_title'],
                        body: this.templateData[0]['campaign_message'],
                        icon: this.templateData[0]['icon'],
                        image: this.templateData[0]['image'],
                        landingURL: this.templateData[0]['landing_url'],
                        safaritoken: '',
                        type: '',
                        scheduled:'',
                        scheduledate:'',
                        time:''
                    }
                    this.selectednotification = {
                        all: 'all',
                        selected: ''
                    }
                    console.log('ScheduleData - ' + JSON.stringify(this.scheduleData));
                    this.webengagementservice.saveWebCampaign(this.scheduleData,this.selectednotification).then(webdata => {
                        if(webdata['campaign'] > 0){
                            this.webengagementservice.sendNotification(this.scheduleData,webdata['campaign']).then(notificationdata => {
                                console.log('sendNotification - ' + JSON.stringify(notificationdata));
                                if(notificationdata['success'] > 0){
                                    this.status = 'success'
                                }
                                else if(notificationdata['success'] == 0){
                                    this.status = 'failed'
                                }
                                this.webengagementservice.updateWebCampaign(webdata['campaign'],this.status,notificationdata['success']).then(updatedata => {
                                    this.webengagementservice.getNotSentTokens(webdata['campaign']).then(NotSentData => {
                                        console.log('NotSentData ' + JSON.stringify(NotSentData));
                                    })
                                    if(tokendata['safaritokens'] != '' && tokendata['safaritokens'] != null){
                                        console.log('SSSafari - ' + tokendata['safaritokens']);
                                            this.safariData = {
                                                title: data['floattitle'],
                                                body: data['floatmessage'],
                                                icon: this.form.image,
                                                image: this.form.bigImage,
                                                landingURL: data['floaturl'],
                                                safaritoken: tokendata['safaritokens'],
                                                campaign_id: webdata['campaign'],
                                                type: '',
                                                scheduled:'',
                                                scheduledate:'',
                                                time: ''
                                            }
                                            this.selectednotification = {
                                                all: 'all',
                                                selected: ''
                                            }
                                            if(webdata['campaign'] > 0){
                                                this.webengagementservice.sendSafariNotification(this.safariData).then(safaridata => {
                                                    this.webengagementservice.updateWebCampaign(webdata['campaign'],'success',(notificationdata['success']+1)).then(updatedata => {
                                                        this.webengagementservice.getNotSentTokens(webdata['campaign']).then(NotSentData => {
                                                            console.log('NotSentData ' + JSON.stringify(NotSentData));
                                                        })
                                                        alert('Notifications sent successfully!');
                                                    });
                                                });
                                            }
                                        //});
                                    }
                                });
                            });
                        }
                    });
                }
            });*/
        }
        //alert(this.f.radio.value);
    };
    WebNotificationsComponent.prototype.create = function (index, id, segment_name) {
        var _this = this;
        if (document.getElementById("immediately" + index).value == 'after') {
            this.webengagementservice.getTemplateByName(document.getElementById("template" + index).value).then(function (data) {
                _this.templateData = data['campaign'];
                _this.savetemplateDetails = {
                    nonsafaritoken: '',
                    title: data['campaign'][0]['campaign_title'],
                    body: data['campaign'][0]['campaign_message'],
                    icon: data['campaign'][0]['icon'],
                    image: data['campaign'][0]['image'],
                    landingURL: data['campaign'][0]['landing_url'],
                    safaritoken: '',
                    type: '',
                    scheduled: '',
                    scheduledate: '',
                    time: '',
                    by_segment: id,
                };
                _this.selectednotification = {
                    all: '',
                    selected: ''
                };
                _this.webengagementservice.saveWebCampaign(_this.savetemplateDetails, _this.selectednotification).then(function (webdata) {
                    _this.savetemplateData = {
                        value: document.getElementById("immediately" + index).value,
                        template: document.getElementById("template" + index).value,
                        duration: document.getElementById("duration" + index).value + ' ' + document.getElementById("span" + index).value,
                        status: 'Pending',
                        data: {
                            title: data['campaign'][0]['campaign_title'],
                            body: data['campaign'][0]['campaign_message'],
                            icon: data['campaign'][0]['icon'],
                            image: data['campaign'][0]['image'],
                            landingURL: data['campaign'][0]['landing_url'],
                            campaign_id: webdata['campaign']
                        },
                        segment: segment_name,
                        by_segment: id,
                        event: document.getElementById("event" + index).value
                    };
                    _this.webengagementservice.createNotification(_this.savetemplateData).then(function (data) {
                        console.log('createNotification - ' + JSON.stringify(_this.savetemplateData));
                        document.getElementById('create_' + index).setAttribute("style", "pointer-events:none; cursor: not-allowed;");
                        _this.snotifyService.success('Automation Scheduled Successfully', '', _this.getConfig());
                        _this.notificationform.reset();
                        _this.submitted = false;
                        _this.showForm = false;
                        _this.showTable = true;
                        _this.getData();
                        // swal("Success!","Automation Scheduled Successfully!","success");
                        // 		window.location.reload();
                        //this.notificationform.reset();
                        // document.getElementById('create_'+index).style.pointerEvents = "none";
                        // document.getElementById('create_'+index).style.cursor = "not-allowed";
                        //document.getElementById('create_'+index).prop('disabled',true);//pointer-events: none;
                    });
                });
            });
            /*console.log('createNotification - ' + JSON.stringify(this.savetemplateData));
            this.webengagementservice.createNotification(this.savetemplateData).then(data => {
                console.log('createNotification - ' + JSON.stringify(this.savetemplateData));
                document.getElementById('create_'+index).style.pointerEvents = "none";
                document.getElementById('create_'+index).style.cursor = "not-allowed";
                //document.getElementById('create_'+index).prop('disabled',true);//pointer-events: none;
            });*/
            /*this.webengagementservice.saveWebCampaign(this.savetemplateDetails,this.selectednotification).then(webdata => {
                console.log('Save Campaign - ' + JSON.stringify(webdata));
            });*/
        }
    };
    /*action dynamic code*/
    WebNotificationsComponent.prototype.initMapFields1 = function () {
        return this._FB.group({
            act1: [],
            act2: [],
            act3: [],
            act4: []
        });
    };
    // valuesArray1 =[];
    //  ddl1change1(val,index){
    //    this.valuesArray[index] = val;
    //  }
    WebNotificationsComponent.prototype.addSetCondition1 = function () {
        var control = this.segmentForm.controls.actionset;
        control.push(this.initMapFields1());
    };
    WebNotificationsComponent.prototype.removeSetCondition1 = function (i) {
        var control = this.segmentForm.controls.actionset;
        control.removeAt(i);
        //this.valuesArray.splice(i, 1);
        //this.operatorArray.splice(i, 1);
    };
    /*action dynamic code end*/
    /*property dynamic*/
    WebNotificationsComponent.prototype.initMapFields = function () {
        return this._FB.group({
            ddl1: [],
            seloperator: [],
            txtfilterval: []
        });
    };
    WebNotificationsComponent.prototype.ddl1change = function (val, index) {
        //alert(val);
        var nameary = ["Operating System", "Browser", "Reffering URL", "Page URL", "Platform", "Location"];
        var indexsel = nameary.indexOf(val);
        //alert("indexsel"+indexsel);
        //this.valuesArray.push(indexsel);
        this.valuesArray[index] = indexsel;
    };
    WebNotificationsComponent.prototype.addSetCondition = function () {
        this.valuesArray.push(0);
        var control = this.segmentForm.controls.propertyset;
        control.push(this.initMapFields());
    };
    WebNotificationsComponent.prototype.removeSetCondition = function (i) {
        var control = this.segmentForm.controls.propertyset;
        control.removeAt(i);
        this.valuesArray.splice(i, 1);
        //this.operatorArray.splice(i, 1);
    };
    /*property dynamic end*/
    WebNotificationsComponent.prototype.addSegment = function (val, index) {
        var _this = this;
        if (document.getElementById("immediately" + index).value == '') {
            this.immediately = '';
        }
        if (document.getElementById("event" + index).value == '') {
            this.event = '';
        }
        if (document.getElementById("duration" + index).value == '') {
            this.duration = '';
        }
        if (document.getElementById("span" + index).value == '') {
            this.span = '';
        }
        if (document.getElementById("template" + index).value == '') {
            this.web_template = '';
        }
        //alert("immediately=" + (document.getElementById("immediately"+index) as HTMLInputElement).value + "event=" + (document.getElementById("event"+index) as HTMLInputElement).value + "duration=" + (document.getElementById("duration"+index) as HTMLInputElement).value + "span=" + (document.getElementById("span"+index) as HTMLInputElement).value + "template=" + (document.getElementById("template"+index) as HTMLInputElement).value);
        if (document.getElementById("immediately" + index).value == '' || document.getElementById("event" + index).value == '' || document.getElementById("duration" + index).value == '' || document.getElementById("span" + index).value == '' || document.getElementById("template" + index).value == '') {
            // swal("Error!","Please Fill All the required fields","error");
            return;
        }
        console.log(JSON.stringify(val));
        var obj = { 'name': '', 'condition': { 'propertyset': '', 'actionset': '' }, 'subscribers': 0 };
        //let obj= {'name':'','condition':'','subscribers':0};
        obj['name'] = '';
        obj['condition']['propertyset'] = val.propertyset;
        obj['condition']['actionset'] = val.actionset;
        obj['subscribers'] = 0;
        //let mydata = JSON.stringify(obj);
        this.webengagementservice.addSegment(obj).then(function (data) {
            _this.submitted = true;
            if (data['status'] == 'true') {
                // alert(JSON.stringify(data));
                _this.create(index, data['id'], '');
                // this.snotifyService.success('Added Successfullly', '', this.getConfig());
                _this.segmentForm.reset();
            }
        });
    };
    WebNotificationsComponent.prototype.viewNotify = function (data) {
        var data1 = JSON.parse(data);
        var img = "";
        if (data1.image) {
            img = "'<b>Big Image : </b><img src=' + img + ' /><br /></div>',";
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Notification Data',
            //type: 'info',
            html: '<div align="left">' +
                '<b>Title : </b>' + data1.title + '<br />' +
                '<b>Message : </b>' + data1.body + '<br />' +
                '<b>Landing Page URL : </b>' + data1.landingURL + '<br />' +
                '<b>Icon : </b><img src=' + data1.icon + ' /><br />' +
                img,
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText: 'Ok'
        });
    };
    WebNotificationsComponent.prototype.getConfig = function () {
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
    WebNotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-web-notifications',
            template: __webpack_require__(/*! ./web-notifications.component.html */ "./src/app/web-dashboard/web-notification/web-notifications.component.html"),
            styles: [__webpack_require__(/*! ./web-notifications.component.scss */ "./src/app/web-dashboard/web-notification/web-notifications.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _shared_data_web_engagement_service__WEBPACK_IMPORTED_MODULE_2__["WebEngagementService"], ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"]])
    ], WebNotificationsComponent);
    return WebNotificationsComponent;
}());



/***/ }),

/***/ "./src/app/web-dashboard/web-template/web-template.component.html":
/*!************************************************************************!*\
  !*** ./src/app/web-dashboard/web-template/web-template.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"basic-elements\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-6\">\r\n\t\t\t<!-- <div class=\"content-header\">Segments</div> -->\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\" *ngIf=\"showTable\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-header\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\" style=\"text-align: right;\">\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t\t<ngx-datatable class=\"material\" class=\"bootstrap\" [rows]=\"segments\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"50\" [sorts]=\"[{prop: ['campaign_title','template_name'], dir: 'desc'}]\" [limit]=\"10\">\r\n\t\t\t\t\t\t\t\t<ngx-datatable-column name=\"Event\">\r\n\t\t\t\t\t\t\t\t\t<ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t\t\t\t\t\t\t\t\t{{row.campaign_title}}\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</ngx-datatable-column>\r\n\t\t\t\t\t\t\t\t<ngx-datatable-column name=\"Template Mapping\">\r\n\t\t\t\t\t\t\t\t\t<ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t\t\t\t\t\t\t\t\t{{row.template_name}}\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</ngx-datatable-column>\r\n\t\t\t\t\t\t\t\t<!-- <ngx-datatable-column name=\"Created\">\r\n\t\t\t\t\t\t\t\t\t<ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t\t\t\t\t\t\t\t{{row.created}}\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</ngx-datatable-column> -->\r\n\t\t\t\t\t\t\t\t<ngx-datatable-column name=\"Action\">\r\n\t\t\t\t\t\t\t\t\t<ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n\t\t\t\t\t\t\t\t\t\t<a class=\"success p-0\" data-original-title=\"\" title=\"\" (click)=\"edittemplateById(row.id)\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-pencil-alt font-medium-3 mr-2\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t<!-- <a class=\"danger p-0\" data-original-title=\"\" title=\"\" (click)=\"viewwebtemplate()\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"ft-eye font-medium-3 mr-2\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a> -->\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</ngx-datatable-column>\r\n\t\t\t\t\t\t\t</ngx-datatable>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row\" *ngIf=\"!showTable\">\r\n\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t\t\t\t  <form class=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid\">\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"floattitle\">Title</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\" style=\"text-align: right;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"!floattitle.value\">{{floattitle.value.length}}/96</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"floattitle.value && floattitle.value.length > 0\">{{floattitle.value.length}}/96</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"floattitle\" name=\"floattitle\" [(ngModel)]=\"form.floattitle\" required #floattitle=\"ngModel\"  placeholder=\"96 characters maximum\" maxlength=\"96\" [ngClass]=\"{ 'is-invalid': f.submitted && !floattitle.valid }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small class=\"form-text text-muted danger\" *ngIf=\"!floattitle.valid && (floattitle.dirty || floattitle.touched)\">Title is required!</small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small class=\"form-text text-muted danger\" *ngIf=\"f.submitted && !floattitle.valid && !floattitle.touched\">Title is required!</small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"floatmessage\">Message</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\" style=\"text-align: right;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"!floatmessage.value\">{{floatmessage.value.length}}/255</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"floatmessage.value && floatmessage.value.length > 0\">{{floatmessage.value.length}}/255</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"floatmessage\" name=\"floatmessage\" [(ngModel)]=\"form.floatmessage\" required #floatmessage=\"ngModel\"  placeholder=\"255 characters maximum\" maxlength=\"255\" [ngClass]=\"{ 'is-invalid': f.submitted && !floatmessage.valid }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small class=\"form-text text-muted danger\" *ngIf=\"!floatmessage.valid && (floatmessage.dirty || floatmessage.touched)\">Message is required!</small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small class=\"form-text text-muted danger\" *ngIf=\"f.submitted && !floatmessage.valid && !floatmessage.touched\">Message is required!</small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"floaturl\">Landing Page URL</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"url\" class=\"form-control\" id=\"floaturl\" name=\"floaturl\" [(ngModel)]=\"form.floaturl\" pattern=\"https?://.+\"  required #floaturl=\"ngModel\"  placeholder=\"Enter URL with http:// or https://\" [ngClass]=\"{ 'is-invalid': f.submitted && !floaturl.valid }\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <small class=\"form-text text-muted danger\" *ngIf=\"!floaturl.valid && (floaturl.dirty || floaturl.touched)\">URL is required!</small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small class=\"form-text text-muted danger\" *ngIf=\"floaturl.errors.pattern\">Enter a valid URL</small> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small *ngIf=\"(floaturl.touched || f.submitted) && !floaturl.valid\" class=\"form-text text-muted danger\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small *ngIf=\"floaturl.errors.required\">URL is required!</small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small *ngIf=\"floaturl.errors.pattern\">Enter a valid URL</small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small class=\"form-text text-muted danger\" *ngIf=\"f.submitted && !floaturl.valid && !floaturl.touched\">URL is required!</small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"image\">Image</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>File type supported: jpg, jpeg, png. Recommended Size: 192x192.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!url\" src=\"assets/img/logo.png\" style=\"background: black;\" width=\"50\" height=\"50\" alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"url\" src=\"{{url}}\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;<label #imageLabel class=\"btn btn-raised btn-sm btn-danger mr-1\" color=\"primary\" for=\"file-upload\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" class=\"form-control\" id=\"file-upload\" name=\"image\" [(ngModel)]=\"form.image\" required #image=\"ngModel\" (change)=\"uploadmembershipIcon($event.target.files,'url')\" [ngClass]=\"{ 'is-invalid': f.submitted && !image.valid }\" style=\"display:none;\"/><!-- (change)=\"uploadSubmit($event.target.files)\"(change)=\"addFile($event,'url')\"  -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small class=\"form-text text-muted danger\" *ngIf=\"f.submitted && !image.valid && !image.touched\">Image is required!</small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i *ngIf=\"loader\" class=\"fas fa-spinner fa fa-spin\"></i><p *ngIf=\"loader\" style=\"color:red;\">&nbsp;Please wait while the image uploads.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"bigIm\" value=\"bigIm\" (change)=\"addBigImage($event.target.checked)\">&nbsp;Show Big Image<br>&nbsp;&nbsp;Big image is only supported on Chrome (56+) browser. Image may get cropped on android devices.<br><br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"showBigImage\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"bigImage\">Image</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>File type supported: jpg, jpeg, png. Recommended Size: 360x240.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"!bigImageUrl\" src=\"assets/img/logo.png\" style=\"background: black;\" width=\"50\" height=\"50\" alt=\"\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"bigImageUrl\" src=\"{{bigImageUrl}}\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;<label #bigImageLabel class=\"btn btn-raised btn-sm btn-danger mr-1\" color=\"primary\" for=\"file-upload1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload Image\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" class=\"form-control\" id=\"file-upload1\" name=\"bigImage\" [(ngModel)]=\"form.bigImage\" required #bigImage=\"ngModel\" (change)=\"uploadBigImage($event.target.files,'bigImage')\" [ngClass]=\"{ 'is-invalid': f.submitted && !bigImage.valid }\" style=\"display:none;\" /><!-- (change)=\"uploadSubmit($event.target.files)\"(change)=\"addFile($event,'url')\"  -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small class=\"form-text text-muted danger\" *ngIf=\"f.submitted && !bigImage.valid && !bigImage.touched\">Image is required!</small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i *ngIf=\"imageloader\" class=\"fas fa-spinner fa fa-spin\"></i><p *ngIf=\"imageloader\" style=\"color:red;\">&nbsp;Please wait while the image uploads.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <input type=\"checkbox\" name=\"buttons\">&nbsp;Show Button(s) on Chrome Notification<br>&nbsp;&nbsp;Call to action buttons are only supported on Chrome browser. -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-raised mr-1\" (click)=\"cancel()\">Cancel</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success btn-raised\" (click)=\"updatewebtemplate()\">Update</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t</div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/web-dashboard/web-template/web-template.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/web-dashboard/web-template/web-template.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYi1kYXNoYm9hcmQvd2ViLXRlbXBsYXRlL3dlYi10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/web-dashboard/web-template/web-template.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/web-dashboard/web-template/web-template.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebTemplateComponent", function() { return WebTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable/release */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _shared_data_web_template_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/data/web-template.service */ "./src/app/shared/data/web-template.service.ts");
/* harmony import */ var _shared_data_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/data/settings.service */ "./src/app/shared/data/settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';





var WebTemplateComponent = /** @class */ (function () {
    function WebTemplateComponent(http, snotifyService, webtemplateservice, settingsservice, router) {
        this.http = http;
        this.snotifyService = snotifyService;
        this.webtemplateservice = webtemplateservice;
        this.settingsservice = settingsservice;
        this.router = router;
        this.segments = [];
        this.form = {
            'floattitle': '',
            'floatmessage': '',
            'floaturl': '',
            'image': '',
            'bigImage': '',
            'day': '',
            'hours': '',
            'minutes': '',
            'scheduledate': '',
            'scheduled': '',
            'time': '',
            'segment': '',
            'seg': '',
            'token': 'click365.com.au',
            'icon': 'assets/img/logo.png'
        };
        this.idArray = [];
        this.timeout = 3000;
        this.position = ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyPosition"].centerTop;
        this.progressBar = true;
        this.showBigImage = false;
        this.closeClick = true;
        this.newTop = true;
        this.backdrop = -1;
        this.dockMax = 8;
        this.blockMax = 6;
        this.pauseHover = true;
        this.titleMaxLength = 15;
        this.bodyMaxLength = 80;
        this.columns = [
            { name: 'Event' },
            { name: 'Template Mapping' },
            { name: 'Action' }
        ];
        this.loader = false;
        this.showTable = true;
        this.templateID = 0;
        this.imageloader = false;
    }
    WebTemplateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.webtemplateservice.selectwebtemplate().then(function (data) {
            if (data['webtemplate']) {
                _this.segments = data['webtemplate'];
                _this.collectionSize = data['webtemplate'].length;
                _this.totalList = data['webtemplate'].length;
            }
        });
        this.settingsservice.getSettings().then(function (data) {
            console.log('data - ' + data['settings'][0]['sitedir']);
            if (data['status'] == 'success') {
                _this.sitedir = data['settings'][0]['sitedir'];
            }
        });
    };
    WebTemplateComponent.prototype.updatewebtemplate = function () {
        var _this = this;
        this.saveData = {
            title: this.form.floattitle,
            body: this.form.floatmessage,
            icon: this.url,
            image: this.bigImageUrl,
            landingURL: this.form.floaturl,
        };
        this.snotifyService.success('Updated Successfully', '', this.getConfig());
        this.showTable = true;
        this.webtemplateservice.updatewebtemplate(this.saveData, this.templateID).then(function (data) {
            console.log(data);
            if (data['status'] == 'success') {
                _this.webtemplateservice.selectwebtemplate().then(function (data) {
                    if (data['webtemplate']) {
                        _this.segments = data['webtemplate'];
                        _this.collectionSize = data['webtemplate'].length;
                        _this.totalList = data['webtemplate'].length;
                    }
                });
                // this.form.floattitle = data['webtemplate'][0]['title'];
                // this.form.floatmessage = data['webtemplate'][0]['body'];
                // this.form.image = data['webtemplate'][0]['icon'];
                // this.form.bigImage = data['webtemplate'][0]['image'];
                // this.form.floaturl = data['webtemplate'][0]['landingURL'];
            }
        });
    };
    WebTemplateComponent.prototype.edittemplateById = function (id) {
        var _this = this;
        this.showTable = false;
        this.templateID = id;
        this.webtemplateservice.edittemplateById(id).then(function (data) {
            console.log('Tem val - ' + JSON.stringify(data));
            _this.form.floattitle = data['webtemplate'][0]['campaign_title'];
            _this.form.floatmessage = data['webtemplate'][0]['campaign_message'];
            // this.form.image = data['webtemplate'][0]['icon'];
            console.log('Image URL - ' + data['webtemplate'][0]['icon']);
            _this.url = data['webtemplate'][0]['icon'];
            _this.bigImageUrl = data['webtemplate'][0]['image'];
            _this.form.floaturl = data['webtemplate'][0]['landing_url'];
            //this.saveData['title'].setValue(data['webtemplate'][0]['campaign_title']);
            //this.saveData = data[''][0]['campaign_title'];
            // this.saveData = data[''][0]['campaign_message'];
            // this.saveData = data[''][0]['landing_url'];
            // this.saveData = data[''][0]['image'];
            // this.saveData = data[''][0]['icon'];
            //this.segments = data['webtemplate'][0]['campaign_title'];
        });
        // this.router.navigate(['/web-dashboard/web-engagement'],{queryParams:{id:id}});
        /*this.webtemplateservice.edittemplate(id).then(data => {
          if(data['status'] == 'success'){
     
          }
        })*/
    };
    // updatetemplate(){
    //   this.webtemplateservice.updatetemplate().then(data => {
    //
    //
    //   })
    // }
    WebTemplateComponent.prototype.cancel = function () {
        this.showTable = true;
    };
    WebTemplateComponent.prototype.addBigImage = function (event) {
        this.showBigImage = false;
        if (event) {
            this.showBigImage = true;
        }
        else {
            this.showBigImage = false;
        }
    };
    WebTemplateComponent.prototype.uploadBigImage = function (files) {
        this.imageloader = true;
        this.loader = false;
        // this.bigImageUrl = 'https://cockburncrc.com.au/members/usermanagement/images/UploadwebImages/'+files[0].name;
        //  this.bigImageUrl = 'https://cockburncrc.com.au/members/usermanagement/images/UploadwebImages/usermanagement/'+files[0].name;
        if (this.sitedir != '' && this.sitedir != null) {
            this.bigImageUrl = 'https://cockburncrc.com.au/members/usermanagement/images/UploadwebImages/' + this.sitedir + '/' + files[0].name;
        }
        else if (this.sitedir == '' || this.sitedir == null) {
            this.bigImageUrl = 'https://cockburncrc.com.au/members/usermanagement/images/UploadwebImages/' + files[0].name;
        }
        console.log('dxcvdx - ' + this.bigImageUrl);
        this.uploadAndProgress(files, 'bigImage');
    };
    WebTemplateComponent.prototype.uploadmembershipIcon = function (files) {
        this.loader = true;
        this.imageloader = false;
        // this.url = 'https://cockburncrc.com.au/members/usermanagement/images/UploadwebImages/'+files[0].name;
        //this.url = 'https://cockburncrc.com.au/members/usermanagement/images/UploadwebImages/usermanagement/'+files[0].name;
        if (this.sitedir != '' && this.sitedir != null) {
            this.url = 'https://cockburncrc.com.au/members/usermanagement/images/UploadwebImages/' + this.sitedir + '/' + files[0].name;
        }
        else if (this.sitedir == '' || this.sitedir == null) {
            this.url = 'https://cockburncrc.com.au/members/usermanagement/images/UploadwebImages/' + files[0].name;
        }
        console.log('dxcvdx - ' + this.url);
        this.uploadAndProgress(files, 'smallImage');
    };
    WebTemplateComponent.prototype.uploadAndProgress = function (files, imageType) {
        var _this = this;
        console.log(imageType);
        var formData = new FormData();
        Array.from(files).forEach(function (f) { return formData.append('file', f); });
        this.http.post('https://cockburncrc.com.au/members/usermanagement/uploadTemplateImages.php?fld=UploadwebImages/usermanagement&type=' + imageType, formData)
            .subscribe(function (event) {
            _this.loader = false;
            _this.imageloader = false;
            if (event && event['status'] == "Sorry, your file is too large.") {
                alert('Sorry, your file is too large. Recommended Size: 192x192.');
                _this.url = '';
                _this.bigImageUrl = '';
            }
        });
    };
    WebTemplateComponent.prototype.getConfig = function () {
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
    ], WebTemplateComponent.prototype, "table", void 0);
    WebTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-web-template',
            template: __webpack_require__(/*! ./web-template.component.html */ "./src/app/web-dashboard/web-template/web-template.component.html"),
            styles: [__webpack_require__(/*! ./web-template.component.scss */ "./src/app/web-dashboard/web-template/web-template.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyService"], _shared_data_web_template_service__WEBPACK_IMPORTED_MODULE_5__["WebTemplateService"], _shared_data_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WebTemplateComponent);
    return WebTemplateComponent;
}());



/***/ }),

/***/ "./src/app/web-dashboard/webpush-charts/webpush-charts.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/web-dashboard/webpush-charts/webpush-charts.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Vertical Bar Chart Starts -->\r\n<!-- <div class=\"row\">\r\n   <div class=\"col-sm-6\">\r\n       <div class=\"content-header\">Bar Charts</div>\r\n   </div>\r\n   </div>-->\r\n<!--Basic Table Starts-->\r\n<div class=\"col-sm-12\" style=\"text-align: right;\">\r\n  <p>\r\n    <a class=\"btn btn-social btn-round btn-min-width mr-2 mb-2 btn-outline-bitbucket right\" onClick=\"window.location.reload()\"><span class=\"ft-refresh-cw\"></span>Refresh</a>\r\n  </p>\r\n</div>\r\n<section id=\"simple-table\" *ngIf=\"!isABtestingReport\">\r\n<ngx-datatable class=\"material\" class=\"bootstrap\" [rows]=\"abTestStats\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\"  [limit]=\"10\">\r\n    <ngx-datatable-column name=\"Notification Title\" >\r\n       <ng-template let-row=\"row\" ngx-datatable-cell-template >\r\n        {{row.campaign_title}}\r\n       </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Notification Message\">\r\n       <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{row.campaign_message}}\r\n       </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Sent\">\r\n       <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{row.sent+row.not_sent}}\r\n       </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Inprogress\">\r\n       <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{(row.sent+row.not_sent)-row.received-row.not_sent}}<span class=\"text-success ml-2\">{{(((row.sent+row.not_sent)-row.received-row.not_sent)/(row.sent+row.not_sent)*100) | number : '1.0-2'}}%</span>\r\n       </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Delivered\">\r\n       <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{row.received}}<span class=\"text-success ml-2\" *ngIf=\"row.received >0\">{{((row.received/row.sent)*100) | number : '1.0-2'}}%</span>\r\n       </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Bounced\">\r\n       <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{row.not_sent}}<span class=\"text-success ml-2\" *ngIf=\"row.not_sent >0\">{{((row.not_sent/row.sent)*100) | number : '1.0-2'}}%</span>\r\n       </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Clicked\">\r\n       <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n          {{row.clicks}}<span class=\"text-success ml-2\" *ngIf=\"row.clicks >0\">{{((row.clicks/row.received)*100) | number : '1.0-2'}}% of delivered</span>\r\n       </ng-template>\r\n    </ngx-datatable-column>\r\n</ngx-datatable>\r\n </section>\r\n\r\n<section id=\"simple-table\" *ngIf=\"isABtestingReport\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <div *ngIf=\"!successSent\">\r\n            A/B Notification - <strong class=\"text-warning\">In Progress.</strong>\r\n          </div>\r\n          <div *ngIf=\"successSent\">\r\n            A/B Notification - <strong class=\"text-success\">Sent Successfully</strong>.\r\n          </div>\r\n          <div class=\"text-right\" *ngIf=\"winnerSending == 'Manual' && winnerType != '' && !successSent\">\r\n            <button type=\"button\" class=\"btn btn-raised btn-success\" (click)=\"sendABNotification()\">Send</button> the Winner Notification {{winnerType}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-12\">\r\n      <ngx-datatable class=\"material\" class=\"bootstrap\" [rows]=\"abTestStats\" [columns]=\"columns\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\"  [limit]=\"10\">\r\n          <ngx-datatable-column name=\"Test Type\">\r\n             <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                {{row.type}}\r\n             </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Notification Title\" >\r\n             <ng-template let-row=\"row\" ngx-datatable-cell-template >\r\n                <p *ngIf=\"row.type=='A' || row.type=='Final A'\"> {{row.campaign_title[0]}} </p>\r\n                <p *ngIf=\"row.type=='B' || row.type=='Final B'\"> {{row.campaign_title[1]}} </p>\r\n             </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Notification Message\">\r\n             <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <p *ngIf=\"row.type=='A' || row.type=='Final A'\"> {{row.campaign_message[0]}} </p>\r\n                <p *ngIf=\"row.type=='B' || row.type=='Final B'\"> {{row.campaign_message[1]}} </p>\r\n             </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Sent\">\r\n             <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                {{row.sent+row.not_sent}}\r\n             </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Inprogress\">\r\n             <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                {{(row.sent+row.not_sent)-row.received-row.not_sent}}<span class=\"text-success ml-2\">{{(((row.sent+row.not_sent)-row.received-row.not_sent)/(row.sent+row.not_sent)*100) | number : '1.0-2'}}%</span>\r\n             </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Delivered\">\r\n             <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                {{row.received}}<span class=\"text-success ml-2\" *ngIf=\"row.received >0\">{{((row.received/row.sent)*100) | number : '1.0-2'}}%</span>\r\n             </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Bounced\">\r\n             <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                {{row.not_sent}}<span class=\"text-success ml-2\" *ngIf=\"row.not_sent >0\">{{((row.not_sent/row.sent)*100) | number : '1.0-2'}}%</span>\r\n             </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Clicked\">\r\n             <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                {{row.clicks}}<span class=\"text-success ml-2\" *ngIf=\"row.clicks >0\">{{((row.clicks/row.received)*100) | number : '1.0-2'}}% of delivered</span>\r\n             </ng-template>\r\n          </ngx-datatable-column>\r\n      </ngx-datatable>\r\n    </div>\r\n  </div>\r\n </section>\r\n<!--Basic Table Ends-->\r\n<div class=\"row\">\r\n   <div class=\"col-sm-12\">\r\n      <div class=\"card\">\r\n         <div class=\"card-header\">\r\n            <div class=\"card-title-wrap bar-info\">\r\n               <h4 class=\"card-title\">Time Stastistics</h4>\r\n            </div>\r\n         </div>\r\n         <div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n               <div id=\"vartical-bar-chart\" class=\"height-400\">\r\n                  <lib-highcharts-angular [Highcharts]=\"Highcharts\" [options]=\"chartOptions\" style=\"width: 100%; height: 400px; display: block;\"></lib-highcharts-angular>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <div class=\"col-sm-6\">\r\n      <div class=\"card\">\r\n         <div class=\"card-header\">\r\n            <div class=\"card-title-wrap bar-info\">\r\n               <h4 class=\"card-title\">Browser Stastistics</h4>\r\n            </div>\r\n         </div>\r\n         <div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n               <div id=\"vartical-bar-chart\" class=\"height-400\">\r\n                  <ngx-charts-bar-vertical-2d [scheme]=\"ChartColorScheme\" [results]=\"browserChart\" [gradient]=\"false\" [xAxis]=\"true\"\r\n                  [yAxis]=\"true\" [legend]=\"false\" [showXAxisLabel]=\"true\"\r\n                  [showYAxisLabel]=\"true\" xAxisLabel=\"Browser\" yAxisLabel=\"Total\">\r\n                  </ngx-charts-bar-vertical-2d>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <!--</div>\r\n      <div class=\"row\">-->\r\n   <div class=\"col-sm-6\">\r\n      <div class=\"card\">\r\n         <div class=\"card-header\">\r\n            <div class=\"card-title-wrap bar-info\">\r\n               <h4 class=\"card-title\">Location Stastistics</h4>\r\n            </div>\r\n         </div>\r\n         <div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n               <div id=\"vartical-bar-chart\" class=\"height-400\">\r\n                  <ngx-charts-bar-vertical-2d [scheme]=\"ChartColorScheme\" [results]=\"locationChart\" [gradient]=\"false\" [xAxis]=\"true\"\r\n                  [yAxis]=\"true\" [legend]=\"false\" [showXAxisLabel]=\"true\"\r\n                  [showYAxisLabel]=\"true\" xAxisLabel=\"Location\" yAxisLabel=\"Total\">\r\n                  </ngx-charts-bar-vertical-2d>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>\r\n<div class=\"row\">\r\n   <div class=\"col-sm-6\">\r\n      <div class=\"card\">\r\n         <div class=\"card-header\">\r\n            <div class=\"card-title-wrap bar-info\">\r\n               <h4 class=\"card-title\">Timeline Stastistics</h4>\r\n            </div>\r\n         </div>\r\n         <div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n               <div id=\"vartical-bar-chart\" class=\"height-400\">\r\n                  <ngx-charts-bar-vertical-2d [scheme]=\"ChartColorScheme\" [results]=\"timelineChart\" [gradient]=\"false\" [xAxis]=\"true\"\r\n                  [yAxis]=\"true\" [legend]=\"false\" [showXAxisLabel]=\"true\"\r\n                  [showYAxisLabel]=\"true\" xAxisLabel=\"Time\" yAxisLabel=\"Total\">\r\n                  </ngx-charts-bar-vertical-2d>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <!-- </div>\r\n      <div class=\"row\"> -->\r\n   <div class=\"col-sm-6\">\r\n      <div class=\"card\">\r\n         <div class=\"card-header\">\r\n            <div class=\"card-title-wrap bar-info\">\r\n               <h4 class=\"card-title\">Device Type Stastistics</h4>\r\n            </div>\r\n         </div>\r\n         <div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n               <div id=\"vartical-bar-chart\" class=\"height-400\">\r\n                  <!-- <ngx-charts-pie-grid\r\n                     [view]=\"view\"\r\n                     [scheme]=\"ChartColorScheme\"\r\n                     [results]=\"platformChart\"\r\n                     (select)=\"onSelect($event)\">\r\n                     </ngx-charts-pie-grid> -->\r\n                  <ngx-charts-bar-vertical-2d [scheme]=\"ChartColorScheme\" [results]=\"deviceChart\" [gradient]=\"false\" [xAxis]=\"true\"\r\n                  [yAxis]=\"true\" [legend]=\"false\" [showXAxisLabel]=\"true\"\r\n                  [showYAxisLabel]=\"true\" xAxisLabel=\"Device Type\" yAxisLabel=\"Total\">\r\n                  </ngx-charts-bar-vertical-2d>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>\r\n<div class=\"row\">\r\n   <div class=\"col-sm-6\">\r\n      <div class=\"card\">\r\n         <div class=\"card-header\">\r\n            <div class=\"card-title-wrap bar-info\">\r\n               <h4 class=\"card-title\">Operating System Stastistics</h4>\r\n            </div>\r\n         </div>\r\n         <div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n               <div id=\"vartical-bar-chart\" class=\"height-400\">\r\n                  <!-- <ngx-charts-pie-grid\r\n                     [view]=\"view\"\r\n                     [scheme]=\"ChartColorScheme\"\r\n                     [results]=\"platformChart\"\r\n                     (select)=\"onSelect($event)\">\r\n                     </ngx-charts-pie-grid> -->\r\n                  <ngx-charts-bar-vertical-2d [scheme]=\"ChartColorScheme\" [results]=\"platformChart\" [gradient]=\"false\" [xAxis]=\"true\"\r\n                  [yAxis]=\"true\" [legend]=\"false\" [showXAxisLabel]=\"true\"\r\n                  [showYAxisLabel]=\"true\" xAxisLabel=\"Operating System\" yAxisLabel=\"Total\">\r\n                  </ngx-charts-bar-vertical-2d>\r\n               </div>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/web-dashboard/webpush-charts/webpush-charts.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/web-dashboard/webpush-charts/webpush-charts.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYi1kYXNoYm9hcmQvd2VicHVzaC1jaGFydHMvd2VicHVzaC1jaGFydHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/web-dashboard/webpush-charts/webpush-charts.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/web-dashboard/webpush-charts/webpush-charts.component.ts ***!
  \**************************************************************************/
/*! exports provided: WebpushChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebpushChartsComponent", function() { return WebpushChartsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_data_web_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data/web-dashboard.service */ "./src/app/shared/data/web-dashboard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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





var WebpushChartsComponent = /** @class */ (function () {
    function WebpushChartsComponent(webDashboardService, snotifyService, router, route) {
        var _this = this;
        this.webDashboardService = webDashboardService;
        this.snotifyService = snotifyService;
        this.router = router;
        this.route = route;
        this.ChartColorScheme = {
            domain: ['#666EE8', '#FF9149', '#FF4961', '#AAAAAA']
        };
        this.browserChart = [];
        this.locationChart = [];
        this.timelineChart = [];
        this.deviceChart = [];
        this.platformChart = [];
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_1__;
        this.abTestStats = [];
        this.isABtestingReport = false;
        this.successSent = false;
        this.style = 'material';
        this.title = 'Success';
        this.body = 'Organization created successfully!';
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
        this.route.queryParams.subscribe(function (params) {
            _this.webDashboardService.getValueforTimelineGraphs(params['id'], params['type']).then(function (data) {
                if (data['status'] == 'success') {
                    _this.timeCharts = data['stats'];
                    var senddate = _this.timeCharts[0].createdDate.split('-');
                    var timeval = _this.timeCharts[0].time.split(':');
                    var month = new Date(_this.timeCharts[0].createdDate).getUTCMonth();
                    var chartData = [];
                    var receivedData = [];
                    var clickedData = [];
                    console.log('data - ' + JSON.stringify(_this.timeCharts));
                    for (var i = 0; i < _this.timeCharts.length; i++) {
                        if (_this.timeCharts[i]['type'] == 'received') {
                            receivedData.push([_this.timeCharts[i].datetimeval, _this.timeCharts[i].counts]);
                        }
                        if (_this.timeCharts[i]['type'] == 'clicked') {
                            clickedData.push([_this.timeCharts[i].datetimeval, _this.timeCharts[i].counts]);
                        }
                    }
                    highcharts__WEBPACK_IMPORTED_MODULE_1__["setOptions"]({
                        time: {
                            timezoneOffset: parseInt(timeval[0]) * 60
                        }
                    });
                    _this.chartOptions = {
                        credits: {
                            enabled: false
                        },
                        title: {
                            text: 'Rate'
                        },
                        chart: {
                            type: 'spline'
                        },
                        xAxis: {
                            labels: {
                                enabled: false
                            },
                            type: 'datetime'
                        },
                        series: [{
                                data: receivedData,
                                pointStart: Date.UTC((senddate[0]), month, (senddate[2])),
                                pointInterval: 10000 * 60,
                                name: 'Received'
                            },
                            {
                                data: clickedData,
                                pointStart: Date.UTC((senddate[0]), month, (senddate[2])),
                                pointInterval: 10000 * 60,
                                name: 'Clicked'
                            }]
                    };
                }
            });
            if (params['type'] == 'AB') {
                _this.isABtestingReport = true;
            }
            _this.getTbltestingReport(params['id'], params['type']);
            /*chart1 end*/
            _this.getBrowserChart(params['id'], params['type']);
            _this.getLocationChart(params['id'], params['type']);
            _this.getTimelineChart(params['id'], params['type']);
            _this.getPlatformChart(params['id'], params['type']);
            _this.getDeviceChart(params['id'], params['type']);
        });
    }
    WebpushChartsComponent.prototype.ngOnInit = function () {
    };
    WebpushChartsComponent.prototype.sendABNotification = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.webDashboardService.sendWinnerNotification(params['id'], params['type'], _this.winnerType).then(function (data) {
                if (data['status'] == 'success') {
                    _this.snotifyService.success('Remaining Notifications sent successfully!', '', _this.getConfig());
                    _this.successSent = true;
                    _this.webDashboardService.getValueforTimelineGraphs(params['id'], params['type']).then(function (data) {
                        if (data['status'] == 'success') {
                            _this.timeCharts = data['stats'];
                            var senddate = _this.timeCharts[0].createdDate.split('-');
                            var timeval = _this.timeCharts[0].time.split(':');
                            var month = new Date(_this.timeCharts[0].createdDate).getUTCMonth();
                            var chartData = [];
                            var receivedData = [];
                            var clickedData = [];
                            console.log('data - ' + JSON.stringify(_this.timeCharts));
                            for (var i = 0; i < _this.timeCharts.length; i++) {
                                if (_this.timeCharts[i]['type'] == 'received') {
                                    receivedData.push([_this.timeCharts[i].datetimeval, _this.timeCharts[i].counts]);
                                }
                                if (_this.timeCharts[i]['type'] == 'clicked') {
                                    clickedData.push([_this.timeCharts[i].datetimeval, _this.timeCharts[i].counts]);
                                }
                            }
                            highcharts__WEBPACK_IMPORTED_MODULE_1__["setOptions"]({
                                time: {
                                    timezoneOffset: parseInt(timeval[0]) * 60
                                }
                            });
                            _this.chartOptions = {
                                credits: {
                                    enabled: false
                                },
                                title: {
                                    text: 'Rate'
                                },
                                chart: {
                                    type: 'spline'
                                },
                                xAxis: {
                                    labels: {
                                        enabled: false
                                    },
                                    type: 'datetime'
                                },
                                series: [{
                                        data: receivedData,
                                        pointStart: Date.UTC((senddate[0]), month, (senddate[2])),
                                        pointInterval: 10000 * 60,
                                        name: 'Received'
                                    },
                                    {
                                        data: clickedData,
                                        pointStart: Date.UTC((senddate[0]), month, (senddate[2])),
                                        pointInterval: 10000 * 60,
                                        name: 'Clicked'
                                    }]
                            };
                        }
                    });
                    if (params['type'] == 'AB') {
                        _this.isABtestingReport = true;
                    }
                    _this.getTbltestingReport(params['id'], params['type']);
                    /*chart1 end*/
                    _this.getBrowserChart(params['id'], params['type']);
                    _this.getLocationChart(params['id'], params['type']);
                    _this.getTimelineChart(params['id'], params['type']);
                    _this.getPlatformChart(params['id'], params['type']);
                    _this.getDeviceChart(params['id'], params['type']);
                }
            });
        });
    };
    WebpushChartsComponent.prototype.getBrowserChart = function (id, type) {
        var _this = this;
        this.webDashboardService.getWebNotificationReportByBrowser(id, type).then(function (data) {
            if (data['status'] == 'success') {
                _this.browserChart = data['stats'];
            }
        });
    };
    WebpushChartsComponent.prototype.getLocationChart = function (id, type) {
        var _this = this;
        this.webDashboardService.getWebNotificationReportByLocation(id, type).then(function (data) {
            if (data['status'] == 'success') {
                _this.locationChart = data['stats'];
            }
        });
    };
    WebpushChartsComponent.prototype.getTimelineChart = function (id, type) {
        var _this = this;
        this.webDashboardService.getWebNotificationReportByTime(id, type).then(function (data) {
            if (data['status'] == 'success') {
                _this.timelineChart = data['stats'];
            }
        });
    };
    WebpushChartsComponent.prototype.getPlatformChart = function (id, type) {
        var _this = this;
        this.webDashboardService.getWebNotificationReportByPlatform(id, type).then(function (data) {
            if (data['status'] == 'success') {
                _this.platformChart = data['stats'];
            }
        });
    };
    WebpushChartsComponent.prototype.getDeviceChart = function (id, type) {
        var _this = this;
        this.webDashboardService.getWebNotificationReportByDevice(id, type).then(function (data) {
            if (data['status'] == 'success') {
                _this.deviceChart = data['stats'];
            }
        });
    };
    WebpushChartsComponent.prototype.getTbltestingReport = function (id, type) {
        var _this = this;
        this.webDashboardService.getWebNotificationReportTbl(id, type).then(function (data) {
            if (data['status'] == 'success') {
                _this.abTestStats = data['stats'];
                _this.winnerType = _this.abTestStats[0]['winnertype'];
                _this.winnerSending = _this.abTestStats[0]['winnerSending'];
                if (_this.abTestStats[0]['status'] == 'sent') {
                    _this.successSent = true;
                }
                else {
                    _this.successSent = false;
                }
            }
        });
    };
    WebpushChartsComponent.prototype.getConfig = function () {
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
    WebpushChartsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-webpush-charts',
            template: __webpack_require__(/*! ./webpush-charts.component.html */ "./src/app/web-dashboard/webpush-charts/webpush-charts.component.html"),
            styles: [__webpack_require__(/*! ./webpush-charts.component.scss */ "./src/app/web-dashboard/webpush-charts/webpush-charts.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_data_web_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["WebDashboardService"],
            ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WebpushChartsComponent);
    return WebpushChartsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=web-dashboard-web-dashboard-module.js.map