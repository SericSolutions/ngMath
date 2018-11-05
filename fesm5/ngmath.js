import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgmathService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgmathService.ngInjectableDef = defineInjectable({ factory: function NgmathService_Factory() { return new NgmathService(); }, token: NgmathService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
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

export { NgmathService, NgmathComponent, NgmathModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdtYXRoLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ21hdGgvbGliL25nbWF0aC5zZXJ2aWNlLnRzIiwibmc6Ly9uZ21hdGgvbGliL25nbWF0aC5jb21wb25lbnQudHMiLCJuZzovL25nbWF0aC9saWIvbmdtYXRoLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nbWF0aFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIGFkZCAoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXJ7XG4gICAgcmV0dXJuIChhICsgYilcbiAgfVxuXG4gIHB1YmxpYyBzZWNyZXQgKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVye1xuICAgIHJldHVybiAoYSAtIGIgKiAzKVxuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1uZ21hdGgnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbmdtYXRoIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBOZ21hdGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nbWF0aENvbXBvbmVudCB9IGZyb20gJy4vbmdtYXRoLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW05nbWF0aENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZXhwb3J0czogW05nbWF0aENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTmdtYXRoTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0lBT0U7S0FBaUI7Ozs7OztJQUVWLDJCQUFHOzs7OztJQUFWLFVBQVksQ0FBUyxFQUFFLENBQVM7UUFDOUIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFDO0tBQ2Y7Ozs7OztJQUVNLDhCQUFNOzs7OztJQUFiLFVBQWUsQ0FBUyxFQUFFLENBQVM7UUFDakMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQztLQUNuQjs7Z0JBYkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7d0JBSkQ7Q0FFQTs7Ozs7O0FDRkE7SUFhRTtLQUFpQjs7OztJQUVqQixrQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsOENBSVQ7aUJBRUY7Ozs7SUFRRCxzQkFBQztDQWhCRDs7Ozs7O0FDRkE7SUFHQTtLQU02Qjs7Z0JBTjVCLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0JBQy9CLE9BQU8sRUFBRSxFQUNSO29CQUNELE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztpQkFDM0I7O0lBQzJCLG1CQUFDO0NBTjdCOzs7Ozs7Ozs7Ozs7OzsifQ==