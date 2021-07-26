(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~loyalty-loyalty-module~users-users-module"],{

/***/ "./node_modules/ngx-select-dropdown/dist/components/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-select-dropdown/dist/components/index.js ***!
  \*******************************************************************/
/*! exports provided: SelectDropDownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ngx_select_dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngx-select-dropdown-component */ "./node_modules/ngx-select-dropdown/dist/components/ngx-select-dropdown-component/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectDropDownComponent", function() { return _ngx_select_dropdown_component__WEBPACK_IMPORTED_MODULE_0__["SelectDropDownComponent"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-select-dropdown/dist/components/ngx-select-dropdown-component/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/ngx-select-dropdown/dist/components/ngx-select-dropdown-component/index.js ***!
  \*************************************************************************************************/
/*! exports provided: SelectDropDownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ngx_select_dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngx-select-dropdown.component */ "./node_modules/ngx-select-dropdown/dist/components/ngx-select-dropdown-component/ngx-select-dropdown.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectDropDownComponent", function() { return _ngx_select_dropdown_component__WEBPACK_IMPORTED_MODULE_0__["SelectDropDownComponent"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-select-dropdown/dist/components/ngx-select-dropdown-component/ngx-select-dropdown.component.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/ngx-select-dropdown/dist/components/ngx-select-dropdown-component/ngx-select-dropdown.component.js ***!
  \*************************************************************************************************************************/
/*! exports provided: SelectDropDownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDropDownComponent", function() { return SelectDropDownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var SelectDropDownComponent = /** @class */ (function () {
    function SelectDropDownComponent(cdref, _elementRef) {
        this.cdref = cdref;
        this._elementRef = _elementRef;
        /**
         * Get the required inputs
         */
        this.options = [];
        /**
         * configuration options
         */
        this.config = {};
        /**
         * Whether multiple selection or single selection allowed
         */
        this.multiple = false;
        /**
         * change event when value changes to provide user to handle things in change event
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted when dropdown is open.
         */
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted when dropdown is open.
         */
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Toogle the dropdown list
         */
        this.toggleDropdown = false;
        /**
         * Available items for selection
         */
        this.availableItems = [];
        /**
         * Selected Items
         */
        this.selectedItems = [];
        /**
         * Selection text to be Displayed
         */
        this.selectedDisplayText = "Select";
        /**
         * variable to track if clicked inside or outside of component
         */
        this.clickedInside = false;
        /**
         * variable to track keypress event inside and outsid of component
         */
        this.insideKeyPress = false;
        /**
         * variable to track the focused item whenuser uses arrow keys to select item
         */
        this.focusedItemIndex = null;
        /**
         * element to show not found text when not itmes match the search
         */
        this.showNotFound = false;
        this.onChange = function () {
        };
        this.onTouched = function () {
        };
        this.multiple = false;
    }
    Object.defineProperty(SelectDropDownComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            this.onChange(val);
            this.onTouched();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * click listener for host inside this component i.e
     * if many instances are there, this detects if clicked inside
     * this instance
     */
    SelectDropDownComponent.prototype.clickInsideComponent = function () {
        this.clickedInside = true;
    };
    /**
     * click handler on documnent to hide the open dropdown if clicked outside
     */
    SelectDropDownComponent.prototype.clickOutsideComponent = function () {
        if (!this.clickedInside) {
            this.toggleDropdown = false;
            this.resetArrowKeyActiveElement();
        }
        this.clickedInside = false;
    };
    /**
     * click handler on documnent to hide the open dropdown if clicked outside
     */
    SelectDropDownComponent.prototype.KeyPressOutsideComponent = function () {
        if (!this.insideKeyPress) {
            this.toggleDropdown = false;
            this.resetArrowKeyActiveElement();
        }
        this.insideKeyPress = false;
    };
    /**
     * Event handler for key up and down event and enter press for selecting element
     * @param event
     */
    SelectDropDownComponent.prototype.handleKeyboardEvent = function ($event) {
        this.insideKeyPress = true;
        if ($event.keyCode === 27 || this.disabled) {
            this.toggleDropdown = false;
            this.insideKeyPress = false;
            return;
        }
        var avaOpts = this.availableOptions.toArray();
        if (avaOpts.length === 0 && !this.toggleDropdown) {
            this.toggleDropdown = true;
        }
        // Arrow Down
        if ($event.keyCode === 40 && avaOpts.length > 0) {
            this.onArrowKeyDown();
            avaOpts[this.focusedItemIndex].nativeElement.focus();
            $event.preventDefault();
        }
        // Arrow Up
        if ($event.keyCode === 38 && avaOpts.length) {
            this.onArrowKeyUp();
            avaOpts[this.focusedItemIndex].nativeElement.focus();
            $event.preventDefault();
        }
        // Enter
        if ($event.keyCode === 13 && this.focusedItemIndex !== null) {
            this.selectItem(this.availableItems[this.focusedItemIndex], this.focusedItemIndex);
            return false;
        }
    };
    /**
     * Component onInit
     */
    SelectDropDownComponent.prototype.ngOnInit = function () {
        if (typeof this.options !== "undefined" && Array.isArray(this.options)) {
            this.availableItems = this.options.sort(this.config.customComparator).slice();
            this.initDropdownValuesAndOptions();
        }
    };
    /**
     * after view init to subscribe to available option changes
     */
    SelectDropDownComponent.prototype.ngAfterViewInit = function () {
        this.availableOptions.changes.subscribe(this.setNotFoundState.bind(this));
    };
    SelectDropDownComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SelectDropDownComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    SelectDropDownComponent.prototype.writeValue = function (value) {
        /* istanbul ignore else */
        if (value) {
            if (Array.isArray(value)) {
                if (this.multiple) {
                    this.value = value;
                }
                else {
                    this.value = value[0];
                }
            }
            else {
                this.value = value;
            }
            /* istanbul ignore else */
            if (this.selectedItems.length === 0) {
                if (Array.isArray(value)) {
                    this.selectedItems = value;
                }
                else {
                    this.selectedItems.push(value);
                }
                this.initDropdownValuesAndOptions();
            }
        }
    };
    /**
     * function sets whether to show items not found text or not
     */
    SelectDropDownComponent.prototype.setNotFoundState = function () {
        if (this.availableOptions.length === 0) {
            this.showNotFound = true;
        }
        else {
            this.showNotFound = false;
        }
        this.cdref.detectChanges();
    };
    /**
     * Component onchage i.e when any of the input properties change
     * @param changes
     */
    SelectDropDownComponent.prototype.ngOnChanges = function (changes) {
        this.selectedItems = [];
        this.searchText = null;
        this.options = this.options || [];
        if (changes.options) {
            this.availableItems = this.options.sort(this.config.customComparator).slice();
        }
        if (changes.value && JSON.stringify(changes.value.currentValue) === JSON.stringify([])) {
            this.availableItems = this.options.sort(this.config.customComparator).slice();
        }
        this.initDropdownValuesAndOptions();
    };
    /**
     * Deselct a selected items
     * @param item:  item to be deselected
     * @param index:  index of the item
     */
    SelectDropDownComponent.prototype.deselectItem = function (item, index) {
        this.selectedItems.splice(index, 1);
        if (!this.availableItems.includes(item)) {
            this.availableItems.push(item);
            this.availableItems.sort(this.config.customComparator);
        }
        this.selectedItems = this.selectedItems.slice();
        this.availableItems = this.availableItems.slice();
        // this.writeValue(this.selectedItems);
        this.valueChanged();
        this.resetArrowKeyActiveElement();
    };
    /**
     * Select an item
     * @param item:  item to be selected
     * @param index:  index of the item
     */
    SelectDropDownComponent.prototype.selectItem = function (item, index) {
        if (!this.multiple) {
            if (this.selectedItems.length > 0) {
                this.availableItems.push(this.selectedItems[0]);
            }
            this.selectedItems = [];
            this.toggleDropdown = false;
        }
        this.availableItems.splice(index, 1);
        this.selectedItems.push(item);
        this.selectedItems = this.selectedItems.slice();
        this.availableItems = this.availableItems.slice();
        this.selectedItems.sort(this.config.customComparator);
        this.availableItems.sort(this.config.customComparator);
        // this.writeValue(this.selectedItems);
        this.valueChanged();
        this.resetArrowKeyActiveElement();
    };
    /**
     * When selected items changes trigger the chaange back to parent
     */
    SelectDropDownComponent.prototype.valueChanged = function () {
        this.writeValue(this.selectedItems);
        // this.valueChange.emit(this.value);
        this.change.emit({ value: this.value });
        this.setSelectedDisplayText();
    };
    /**
     * Toggle the dropdownlist on/off
     */
    SelectDropDownComponent.prototype.toggleSelectDropdown = function () {
        this.toggleDropdown = !this.toggleDropdown;
        if (this.toggleDropdown) {
            this.open.emit();
        }
        else {
            this.close.emit();
        }
        this.resetArrowKeyActiveElement();
    };
    /**
     * initialize the config and other properties
     */
    SelectDropDownComponent.prototype.initDropdownValuesAndOptions = function () {
        var _this = this;
        var config = {
            displayKey: "description",
            height: 'auto',
            search: false,
            placeholder: 'Select',
            searchPlaceholder: 'Search',
            limitTo: this.options.length,
            customComparator: undefined,
            noResultsFound: 'No results found!',
            moreText: 'more',
            searchOnKey: null
        };
        if (this.config === "undefined" || Object.keys(this.config).length === 0) {
            this.config = __assign({}, config);
        }
        for (var _i = 0, _a = Object.keys(config); _i < _a.length; _i++) {
            var key = _a[_i];
            this.config[key] = this.config[key] ? this.config[key] : config[key];
        }
        // Adding placeholder in config as default param
        this.selectedDisplayText = this.config["placeholder"];
        if (this.value !== "" && typeof this.value !== "undefined") {
            if (Array.isArray(this.value)) {
                this.selectedItems = this.value;
            }
            else {
                this.selectedItems[0] = this.value;
            }
            this.selectedItems.forEach(function (item) {
                var ind = _this.availableItems.findIndex(function (aItem) { return JSON.stringify(item) === JSON.stringify(aItem); });
                if (ind !== -1) {
                    _this.availableItems.splice(ind, 1);
                }
            });
        }
        this.setSelectedDisplayText();
    };
    /**
     * set the text to be displayed
     */
    SelectDropDownComponent.prototype.setSelectedDisplayText = function () {
        var text = this.selectedItems[0];
        if (typeof this.selectedItems[0] === "object") {
            text = this.selectedItems[0][this.config.displayKey];
        }
        if (this.multiple && this.selectedItems.length > 0) {
            this.selectedDisplayText = this.selectedItems.length === 1 ? text :
                text + (" + " + (this.selectedItems.length - 1) + " " + this.config.moreText);
        }
        else {
            this.selectedDisplayText = this.selectedItems.length === 0 ? this.config.placeholder : text;
        }
    };
    /**
     * Event handler for arrow key up event thats focuses on a item
     */
    SelectDropDownComponent.prototype.onArrowKeyUp = function () {
        if (this.focusedItemIndex === 0) {
            this.focusedItemIndex = this.availableItems.length - 1;
            return;
        }
        if (this.onArrowKey()) {
            this.focusedItemIndex--;
        }
    };
    /**
     * Event handler for arrow key down event thats focuses on a item
     */
    SelectDropDownComponent.prototype.onArrowKeyDown = function () {
        if (this.focusedItemIndex === this.availableItems.length - 1) {
            this.focusedItemIndex = 0;
            return;
        }
        if (this.onArrowKey()) {
            this.focusedItemIndex++;
        }
    };
    SelectDropDownComponent.prototype.onArrowKey = function () {
        if (this.focusedItemIndex === null) {
            this.focusedItemIndex = 0;
            return false;
        }
        return true;
    };
    /**
     * will reset the element that is marked active using arrow keys
     */
    SelectDropDownComponent.prototype.resetArrowKeyActiveElement = function () {
        this.focusedItemIndex = null;
    };
    SelectDropDownComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: "ngx-select-dropdown",
                    template: "\n    <div class=\"ngx-dropdown-container\" tabindex=\"0\">\n        <button type=\"button\" class=\"ngx-dropdown-button\" [ngClass]=\"{'disabled':disabled}\" [disabled]=\"disabled\" (click)=\"toggleSelectDropdown()\">\n            <span>{{selectedDisplayText}} </span>\n            <span class=\"nsdicon-angle-down\"></span>\n        </button>\n        <div class=\"ngx-dropdown-list-container\" *ngIf=\"toggleDropdown\" [style.maxHeight]=\"config.height\">\n            <div class=\"search-container\" *ngIf=\"config.search\">\n                <input name=\"search\" [(ngModel)]=\"searchText\" />\n                <label [ngClass]=\"{'active': searchText}\">\n                    <span class=\"nsdicon-search\"></span> {{config.searchPlaceholder}}</label>\n            </div>\n            <ul class=\"selected-items\">\n                <li tabindex=\"-1\" *ngFor=\"let selected of selectedItems;let i = index\" (click)=\"deselectItem(selected,i)\">\n                    <span class=\"nsdicon-close\"></span>\n                    <span> {{selected[config.displayKey] || selected}}</span>\n                </li>\n            </ul>\n            <hr *ngIf=\"selectedItems.length > 0 && availableItems.length > 0\" />\n            <ul class=\"available-items\">\n                <li #availableOption *ngFor=\"let item of availableItems| filterBy: searchText : config.searchOnKey | limitTo : config.limitTo;let i = index\"\n                    tabindex=\"-1\" [ngClass]=\"{'active': focusedItemIndex == i}\" (click)=\"selectItem(item,i)\">\n                    {{item[config.displayKey] || item}}</li>\n                <li *ngIf=\"showNotFound\">{{config.noResultsFound}}</li>\n            </ul>\n        </div>\n    </div>\n  ",
                    styles: ["\n    .ngx-dropdown-container{width:100%;position:relative}.ngx-dropdown-container button{display:inline-block;margin-bottom:0;font-weight:400;line-height:1.42857143;vertical-align:middle;touch-action:manipulation;cursor:pointer;user-select:none;border:1px solid #ccc;border-radius:4px;color:#333;background-color:#fff;white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis}.ngx-dropdown-container button span{vertical-align:middle;float:left}.ngx-dropdown-container button .nsdicon-angle-down{position:relative;font-size:large;float:right}.ngx-dropdown-container .ngx-dropdown-button{width:100%;min-height:30px;padding:5px 10px 5px 10px;background-color:white}.ngx-dropdown-container .ngx-dropdown-list-container{box-sizing:border-box;border:1px solid rgba(0,0,0,0.15);border-radius:4px;padding-left:10px;padding-right:10px;z-index:999999999;width:100%;background-clip:padding-box;background:white;position:absolute;-webkit-box-shadow:5px 5px 5px 0px rgba(0,0,0,0.21);-moz-box-shadow:5px 5px 5px 0px rgba(0,0,0,0.21);box-shadow:5px 5px 5px 0px rgba(0,0,0,0.21);overflow-y:auto}.ngx-dropdown-container .ngx-dropdown-list-container .search-container{position:relative;padding-top:10px;margin-top:5px}.ngx-dropdown-container .ngx-dropdown-list-container .search-container input{background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;border-radius:0;outline:none;height:2rem;width:100%;font-size:13px;margin:0;padding:0;box-shadow:none;box-sizing:content-box;transition:all 0.3s}.ngx-dropdown-container .ngx-dropdown-list-container .search-container input:focus{border-bottom:1px solid #26a69a}.ngx-dropdown-container .ngx-dropdown-list-container .search-container input:focus+label{transform:translateY(-2px) scale(0.8);transform-origin:0 0}.ngx-dropdown-container .ngx-dropdown-list-container .search-container label{color:#9e9e9e;position:absolute;top:0;left:0;height:100%;font-size:1rem;cursor:text;-webkit-transition:-webkit-transform 0.2s ease-out;transition:-webkit-transform 0.2s ease-out;transition:transform 0.2s ease-out;transition:transform 0.2s ease-out, -webkit-transform 0.2s ease-out;-webkit-transform-origin:0% 100%;transform-origin:0% 100%;text-align:initial;transform:translateY(12px);pointer-events:none}.ngx-dropdown-container .ngx-dropdown-list-container .search-container label.active{transform:translateY(-2px) scale(0.8);transform-origin:0 0}.ngx-dropdown-container .ngx-dropdown-list-container ul{margin-top:1rem;margin-bottom:1rem;list-style-type:none;padding-left:0px}.ngx-dropdown-container .ngx-dropdown-list-container ul.selected-items li{background-color:#337ab7;color:white;margin-bottom:2px}.ngx-dropdown-container .ngx-dropdown-list-container ul.available-items li.active{background-color:#337ab7;color:#ffff}.ngx-dropdown-container .ngx-dropdown-list-container ul li{font-size:inherit;cursor:pointer;display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:normal}.ngx-dropdown-container .disabled{pointer-events:none;background-color:#e9ecef;opacity:1;cursor:no-drop}\n  "],
                    providers: [
                        {
                            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return SelectDropDownComponent; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    SelectDropDownComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    SelectDropDownComponent.propDecorators = {
        '_value': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'options': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'config': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'multiple': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'change': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'open': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'close': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'availableOptions': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: ['availableOption',] },],
        'clickInsideComponent': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] },],
        'clickOutsideComponent': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:click',] },],
        'KeyPressOutsideComponent': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:keydown',] },],
        'handleKeyboardEvent': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] },],
    };
    return SelectDropDownComponent;
}());

//# sourceMappingURL=ngx-select-dropdown.component.js.map

/***/ }),

/***/ "./node_modules/ngx-select-dropdown/dist/index.js":
/*!********************************************************!*\
  !*** ./node_modules/ngx-select-dropdown/dist/index.js ***!
  \********************************************************/
/*! exports provided: SelectDropDownComponent, SelectDropDownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./node_modules/ngx-select-dropdown/dist/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectDropDownComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["SelectDropDownComponent"]; });

/* harmony import */ var _ngx_select_dropdown_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngx-select-dropdown.module */ "./node_modules/ngx-select-dropdown/dist/ngx-select-dropdown.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectDropDownModule", function() { return _ngx_select_dropdown_module__WEBPACK_IMPORTED_MODULE_1__["SelectDropDownModule"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-select-dropdown/dist/ngx-select-dropdown.module.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-select-dropdown/dist/ngx-select-dropdown.module.js ***!
  \*****************************************************************************/
/*! exports provided: SelectDropDownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDropDownModule", function() { return SelectDropDownModule; });
/* harmony import */ var _pipes_filter_by_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipes/filter-by.pipe */ "./node_modules/ngx-select-dropdown/dist/pipes/filter-by.pipe.js");
/* harmony import */ var _pipes_limit_to_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/limit-to.pipe */ "./node_modules/ngx-select-dropdown/dist/pipes/limit-to.pipe.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_ngx_select_dropdown_component_ngx_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ngx-select-dropdown-component/ngx-select-dropdown.component */ "./node_modules/ngx-select-dropdown/dist/components/ngx-select-dropdown-component/ngx-select-dropdown.component.js");






var SelectDropDownModule = /** @class */ (function () {
    function SelectDropDownModule() {
    }
    SelectDropDownModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    declarations: [_components_ngx_select_dropdown_component_ngx_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["SelectDropDownComponent"], _pipes_limit_to_pipe__WEBPACK_IMPORTED_MODULE_1__["LimitToPipe"], _pipes_filter_by_pipe__WEBPACK_IMPORTED_MODULE_0__["ArrayFilterPipe"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
                    exports: [_components_ngx_select_dropdown_component_ngx_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["SelectDropDownComponent"], _pipes_limit_to_pipe__WEBPACK_IMPORTED_MODULE_1__["LimitToPipe"]],
                    providers: [],
                    bootstrap: []
                },] },
    ];
    /** @nocollapse */
    SelectDropDownModule.ctorParameters = function () { return []; };
    return SelectDropDownModule;
}());

//# sourceMappingURL=ngx-select-dropdown.module.js.map

/***/ }),

/***/ "./node_modules/ngx-select-dropdown/dist/pipes/filter-by.pipe.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ngx-select-dropdown/dist/pipes/filter-by.pipe.js ***!
  \***********************************************************************/
/*! exports provided: ArrayFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayFilterPipe", function() { return ArrayFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * filters an array based on searctext
 */
var ArrayFilterPipe = /** @class */ (function () {
    function ArrayFilterPipe() {
    }
    ArrayFilterPipe.prototype.transform = function (array, searchText, keyName) {
        if (!array || !searchText || !Array.isArray(array)) {
            return array;
        }
        if (typeof array[0] === 'string') {
            return array.filter(function (item) { return item.toLowerCase().indexOf(searchText.toLowerCase()) > -1; });
        }
        // filter array, items which match and return true will be
        // kept, false will be filtered out
        if (!keyName) {
            return array.filter(function (item) {
                for (var key in item) {
                    if (typeof item[key] !== "object" && item[key].toString().toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                        return true;
                    }
                }
                return false;
            });
        }
        else {
            return array.filter(function (item) {
                if (typeof item[keyName] !== "object" && item[keyName].toString().toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            });
        }
    };
    ArrayFilterPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: "filterBy"
                },] },
    ];
    /** @nocollapse */
    ArrayFilterPipe.ctorParameters = function () { return []; };
    return ArrayFilterPipe;
}());

//# sourceMappingURL=filter-by.pipe.js.map

/***/ }),

/***/ "./node_modules/ngx-select-dropdown/dist/pipes/limit-to.pipe.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ngx-select-dropdown/dist/pipes/limit-to.pipe.js ***!
  \**********************************************************************/
/*! exports provided: LimitToPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitToPipe", function() { return LimitToPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var LimitToPipe = /** @class */ (function () {
    function LimitToPipe() {
    }
    LimitToPipe.prototype.transform = function (array, itemsCount, startIndex) {
        if (startIndex === void 0) { startIndex = 0; }
        if (!Array.isArray(array)) {
            return array;
        }
        return array.slice(startIndex, startIndex + itemsCount);
    };
    LimitToPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: "limitTo"
                },] },
    ];
    /** @nocollapse */
    LimitToPipe.ctorParameters = function () { return []; };
    return LimitToPipe;
}());

//# sourceMappingURL=limit-to.pipe.js.map

/***/ })

}]);
//# sourceMappingURL=default~loyalty-loyalty-module~users-users-module.js.map