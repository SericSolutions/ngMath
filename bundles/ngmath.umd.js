(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngmath', ['exports', '@angular/core'], factory) :
    (factory((global.ngmath = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var NgmathService = /** @class */ (function () {
        function NgmathService() {
        }
        /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        NgmathService.prototype.add = /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
            function (a, b) {
                return (a + b);
            };
        /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        NgmathService.prototype.secret = /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
            function (a, b) {
                return (a - b * 3);
            };
        NgmathService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgmathService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgmathService.ngInjectableDef = i0.defineInjectable({ factory: function NgmathService_Factory() { return new NgmathService(); }, token: NgmathService, providedIn: "root" });
        return NgmathService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var NgmathComponent = /** @class */ (function () {
        function NgmathComponent() {
        }
        /**
         * @return {?}
         */
        NgmathComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        NgmathComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-ngmath',
                        template: "\n    <p>\n      ngmath works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        NgmathComponent.ctorParameters = function () { return []; };
        return NgmathComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var NgmathModule = /** @class */ (function () {
        function NgmathModule() {
        }
        NgmathModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [NgmathComponent],
                        imports: [],
                        exports: [NgmathComponent]
                    },] }
        ];
        return NgmathModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.NgmathService = NgmathService;
    exports.NgmathComponent = NgmathComponent;
    exports.NgmathModule = NgmathModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdtYXRoLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmdtYXRoL2xpYi9uZ21hdGguc2VydmljZS50cyIsIm5nOi8vbmdtYXRoL2xpYi9uZ21hdGguY29tcG9uZW50LnRzIiwibmc6Ly9uZ21hdGgvbGliL25nbWF0aC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ21hdGhTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHB1YmxpYyBhZGQgKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVye1xuICAgIHJldHVybiAoYSArIGIpXG4gIH1cblxuICBwdWJsaWMgc2VjcmV0IChhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlcntcbiAgICByZXR1cm4gKGEgLSBiICogMylcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbmdtYXRoJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIG5nbWF0aCB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTmdtYXRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ21hdGhDb21wb25lbnQgfSBmcm9tICcuL25nbWF0aC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtOZ21hdGhDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGV4cG9ydHM6IFtOZ21hdGhDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE5nbWF0aE1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOzs7Ozs7UUFFViwyQkFBRzs7Ozs7WUFBVixVQUFZLENBQVMsRUFBRSxDQUFTO2dCQUM5QixRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUM7YUFDZjs7Ozs7O1FBRU0sOEJBQU07Ozs7O1lBQWIsVUFBZSxDQUFTLEVBQUUsQ0FBUztnQkFDakMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQzthQUNuQjs7b0JBYkZBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7OzRCQUpEO0tBRUE7Ozs7OztBQ0ZBO1FBYUU7U0FBaUI7Ozs7UUFFakIsa0NBQVE7OztZQUFSO2FBQ0M7O29CQWRGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSw4Q0FJVDtxQkFFRjs7OztRQVFELHNCQUFDO0tBaEJEOzs7Ozs7QUNGQTtRQUdBO1NBTTZCOztvQkFONUJDLFdBQVEsU0FBQzt3QkFDUixZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7d0JBQy9CLE9BQU8sRUFBRSxFQUNSO3dCQUNELE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztxQkFDM0I7O1FBQzJCLG1CQUFDO0tBTjdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=