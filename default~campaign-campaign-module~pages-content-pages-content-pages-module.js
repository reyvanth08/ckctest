(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~campaign-campaign-module~pages-content-pages-content-pages-module"],{

/***/ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js")) :
	undefined;
}(this, (function (exports,core,rxjs) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Injectable service
 * @export
 */
var Ng4LoadingSpinnerService = /** @class */ (function () {
    /**
     * Creates an instance of Ng4LoadingSpinnerService.
     * @memberof Ng4LoadingSpinnerService
     */
    function Ng4LoadingSpinnerService() {
        /**
         * \@description spinners BehaviorSubject
         * \@memberof Ng4LoadingSpinnerService
         */
        this.spinnerSubject = new rxjs.BehaviorSubject(false);
    }
    /**
     * To show spinner
     * @memberof Ng4LoadingSpinnerService
     */
    /**
     * To show spinner
     * \@memberof Ng4LoadingSpinnerService
     * @return {?}
     */
    Ng4LoadingSpinnerService.prototype.show = /**
     * To show spinner
     * \@memberof Ng4LoadingSpinnerService
     * @return {?}
     */
    function () {
        this.spinnerSubject.next(true);
    };
    /**
     * To hide spinner
     * @memberof Ng4LoadingSpinnerService
     */
    /**
     * To hide spinner
     * \@memberof Ng4LoadingSpinnerService
     * @return {?}
     */
    Ng4LoadingSpinnerService.prototype.hide = /**
     * To hide spinner
     * \@memberof Ng4LoadingSpinnerService
     * @return {?}
     */
    function () {
        this.spinnerSubject.next(false);
    };
    /**
     * @return {?}
     */
    Ng4LoadingSpinnerService.prototype.getMessage = /**
     * @return {?}
     */
    function () {
        return this.spinnerSubject.asObservable();
    };
    Ng4LoadingSpinnerService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    Ng4LoadingSpinnerService.ctorParameters = function () { return []; };
    return Ng4LoadingSpinnerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@description
 * @author Amit Mahida
 * @export
 */
var Ng4LoadingSpinnerComponent = /** @class */ (function () {
    /**
     * Constructor
     * @param spinnerService Spinner Service
     * @memberof Ng4LoadingSpinnerComponent
     */
    function Ng4LoadingSpinnerComponent(spinnerService) {
        this.spinnerService = spinnerService;
        /**
         * \@description Default loading spinner template
         * \@memberof Ng4LoadingSpinnerComponent
         */
        this._template = "\n  <div class=\"lds-roller\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>";
        /**
         * \@description Loading text
         * \@memberof Ng4LoadingSpinnerComponent
         */
        this._loadingText = '';
        /**
         * \@description Defines threhold for not to diplay if time is less than 500ms
         * \@memberof Ng4LoadingSpinnerComponent
         */
        this._threshold = 500;
        /**
         * \@description Defines timeout to hide after time 5000ms
         * \@memberof Ng4LoadingSpinnerComponent
         */
        this._timeout = 5000;
        /**
         * \@description Defines z-index property of the loading text
         * \@memberof Ng4LoadingSpinnerComponent
         */
        this._zIndex = 9999;
        /**
         * \@description Show/hide spinner
         * \@memberof Ng4LoadingSpinnerComponent
         */
        this.showSpinner = false;
        this.createServiceSubscription();
    }
    Object.defineProperty(Ng4LoadingSpinnerComponent.prototype, "zIndex", {
        get: /**
         * \@description returns z-index for input text
         * \@readonly
         * \@memberof Ng4LoadingSpinnerComponent
         * @return {?}
         */
        function () {
            return this._zIndex;
        },
        set: /**
         * \@description Sets z-index for input text
         * \@memberof Ng4LoadingSpinnerComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._zIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ng4LoadingSpinnerComponent.prototype, "template", {
        get: /**
         * \@description Gives the current template
         * \@readonly
         * \@memberof Ng4LoadingSpinnerComponent
         * @return {?}
         */
        function () {
            return this._template;
        },
        set: /**
         * \@description Accepts custom template
         * \@memberof Ng4LoadingSpinnerComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._template = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ng4LoadingSpinnerComponent.prototype, "loadingText", {
        get: /**
         * \@description Gives loading text
         * \@readonly
         * \@memberof Ng4LoadingSpinnerComponent
         * @return {?}
         */
        function () {
            return this._loadingText;
        },
        set: /**
         * \@description Accepts loading text string
         * \@memberof Ng4LoadingSpinnerComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._loadingText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ng4LoadingSpinnerComponent.prototype, "threshold", {
        get: /**
         * \@description
         * \@readonly
         * \@memberof Ng4LoadingSpinnerComponent
         * @return {?}
         */
        function () {
            return this._threshold;
        },
        set: /**
         * \@description Accepts external threshold
         * \@memberof Ng4LoadingSpinnerComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._threshold = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ng4LoadingSpinnerComponent.prototype, "timeout", {
        get: /**
         * \@description
         * \@readonly
         * \@memberof Ng4LoadingSpinnerComponent
         * @return {?}
         */
        function () {
            return this._timeout;
        },
        set: /**
         * \@description Accepts external timeout
         * \@memberof Ng4LoadingSpinnerComponent
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._timeout = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Destroy function
     * @memberof Ng4LoadingSpinnerComponent
     */
    /**
     * Destroy function
     * \@memberof Ng4LoadingSpinnerComponent
     * @return {?}
     */
    Ng4LoadingSpinnerComponent.prototype.ngOnDestroy = /**
     * Destroy function
     * \@memberof Ng4LoadingSpinnerComponent
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * Create service subscription
     * @memberof Ng4LoadingSpinnerComponent
     */
    /**
     * Create service subscription
     * \@memberof Ng4LoadingSpinnerComponent
     * @return {?}
     */
    Ng4LoadingSpinnerComponent.prototype.createServiceSubscription = /**
     * Create service subscription
     * \@memberof Ng4LoadingSpinnerComponent
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ thresholdTimer;
        var /** @type {?} */ timeoutTimer;
        this.subscription =
            this.spinnerService.getMessage().subscribe(function (show) {
                if (show) {
                    if (thresholdTimer) {
                        return;
                    }
                    thresholdTimer = setTimeout(function () {
                        thresholdTimer = null;
                        this.showSpinner = show;
                        timeoutTimer = setTimeout(function () {
                            timeoutTimer = null;
                            this.showSpinner = false;
                        }.bind(this), this.timeout);
                    }.bind(_this), _this.threshold);
                }
                else {
                    if (thresholdTimer) {
                        clearTimeout(thresholdTimer);
                        thresholdTimer = null;
                    }
                    clearTimeout(timeoutTimer);
                    timeoutTimer = null;
                    _this.showSpinner = false;
                }
            });
    };
    Ng4LoadingSpinnerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ng4-loading-spinner',
                    template: "<div #spinnerContainer [class]=\"showSpinner ? 'visible spinner center' : 'hidden spinner center'\" [innerHTML]=\"template\">     </div> <div id=\"loading-spinner-text\" class=\"loading-spinner-text\" [style.zIndex]=\"zIndex\" [class]=\"showSpinner ? 'visible loading-text' : 'hidden loading-text'\"> {{loadingText}} </div> ",
                    styles: [".spinner { position: fixed; padding: 0px; top: 0; left: 0; height: 100%; width: 100%; z-index: 9998; background: #000; opacity: 0.6; transition: opacity 0.3s linear; } .center { margin: auto; width: 100%; } .loading-text { position: fixed; top: 0; width: 100%; height: 100%; left: 0; padding: 0; margin: 0; color: #FFF; font-family: sans-serif; background: transparent; text-align: center; padding-top: 33%; } .spinner img { position: fixed; padding: 0px; /* height: 100%; width: 100%; top: 0; left: 0; */ z-index: 10; background: #000; opacity: 0.6; transition: opacity 0.3s linear; } .hidden { visibility: hidden; opacity: 0; transition: visibility 0s 0.3s, opacity 0.3s linear; } .visible { visibility: visible; } .lds-roller { display: inline-block; position: relative; width: 64px; height: 64px; left: 48%; top: 47%; } .lds-roller div { animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite; transform-origin: 32px 32px; } .lds-roller div:after { content: \" \"; display: block; position: absolute; width: 6px; height: 6px; border-radius: 50%; background: #fff; margin: -3px 0 0 -3px; } .lds-roller div:nth-child(1) { animation-delay: -0.036s; } .lds-roller div:nth-child(1):after { top: 50px; left: 50px; } .lds-roller div:nth-child(2) { animation-delay: -0.072s; } .lds-roller div:nth-child(2):after { top: 54px; left: 45px; } .lds-roller div:nth-child(3) { animation-delay: -0.108s; } .lds-roller div:nth-child(3):after { top: 57px; left: 39px; } .lds-roller div:nth-child(4) { animation-delay: -0.144s; } .lds-roller div:nth-child(4):after { top: 58px; left: 32px; } .lds-roller div:nth-child(5) { animation-delay: -0.18s; } .lds-roller div:nth-child(5):after { top: 57px; left: 25px; } .lds-roller div:nth-child(6) { animation-delay: -0.216s; } .lds-roller div:nth-child(6):after { top: 54px; left: 19px; } .lds-roller div:nth-child(7) { animation-delay: -0.252s; } .lds-roller div:nth-child(7):after { top: 50px; left: 14px; } .lds-roller div:nth-child(8) { animation-delay: -0.288s; } .lds-roller div:nth-child(8):after { top: 45px; left: 10px; } @keyframes lds-roller { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } #loading-spinner-text { font-size: 26px; } .loading-spinner-text { font-size: 26px; }"],
                    encapsulation: core.ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    Ng4LoadingSpinnerComponent.ctorParameters = function () { return [
        { type: Ng4LoadingSpinnerService, },
    ]; };
    Ng4LoadingSpinnerComponent.propDecorators = {
        "zIndex": [{ type: core.Input },],
        "template": [{ type: core.Input },],
        "loadingText": [{ type: core.Input },],
        "threshold": [{ type: core.Input },],
        "timeout": [{ type: core.Input },],
    };
    return Ng4LoadingSpinnerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Ng4LoadingSpinnerModule = /** @class */ (function () {
    function Ng4LoadingSpinnerModule() {
    }
    /**
     * @return {?}
     */
    Ng4LoadingSpinnerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: Ng4LoadingSpinnerModule,
            providers: [Ng4LoadingSpinnerService]
        };
    };
    Ng4LoadingSpinnerModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [],
                    declarations: [Ng4LoadingSpinnerComponent],
                    exports: [Ng4LoadingSpinnerComponent],
                    providers: [Ng4LoadingSpinnerService]
                },] },
    ];
    return Ng4LoadingSpinnerModule;
}());

exports.Ng4LoadingSpinnerModule = Ng4LoadingSpinnerModule;
exports.Ng4LoadingSpinnerService = Ng4LoadingSpinnerService;
exports.Ng4LoadingSpinnerComponent = Ng4LoadingSpinnerComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ })

}]);
//# sourceMappingURL=default~campaign-campaign-module~pages-content-pages-content-pages-module.js.map