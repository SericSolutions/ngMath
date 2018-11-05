import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class NgmathService {
    constructor() { }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    add(a, b) {
        return (a + b);
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    secret(a, b) {
        return (a - b * 3);
    }
}
NgmathService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgmathService.ctorParameters = () => [];
/** @nocollapse */ NgmathService.ngInjectableDef = defineInjectable({ factory: function NgmathService_Factory() { return new NgmathService(); }, token: NgmathService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class NgmathComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NgmathComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ngmath',
                template: `
    <p>
      ngmath works!
    </p>
  `
            }] }
];
/** @nocollapse */
NgmathComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class NgmathModule {
}
NgmathModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgmathComponent],
                imports: [],
                exports: [NgmathComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { NgmathService, NgmathComponent, NgmathModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdtYXRoLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ21hdGgvbGliL25nbWF0aC5zZXJ2aWNlLnRzIiwibmc6Ly9uZ21hdGgvbGliL25nbWF0aC5jb21wb25lbnQudHMiLCJuZzovL25nbWF0aC9saWIvbmdtYXRoLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nbWF0aFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIGFkZCAoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXJ7XG4gICAgcmV0dXJuIChhICsgYilcbiAgfVxuXG4gIHB1YmxpYyBzZWNyZXQgKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVye1xuICAgIHJldHVybiAoYSAtIGIgKiAzKVxuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1uZ21hdGgnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbmdtYXRoIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBOZ21hdGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nbWF0aENvbXBvbmVudCB9IGZyb20gJy4vbmdtYXRoLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW05nbWF0aENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZXhwb3J0czogW05nbWF0aENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTmdtYXRoTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BS2EsYUFBYTtJQUV4QixpQkFBaUI7Ozs7OztJQUVWLEdBQUcsQ0FBRSxDQUFTLEVBQUUsQ0FBUztRQUM5QixRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUM7S0FDZjs7Ozs7O0lBRU0sTUFBTSxDQUFFLENBQVMsRUFBRSxDQUFTO1FBQ2pDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUM7S0FDbkI7OztZQWJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztBQ0pELE1BV2EsZUFBZTtJQUUxQixpQkFBaUI7Ozs7SUFFakIsUUFBUTtLQUNQOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7OztHQUlUO2FBRUY7Ozs7Ozs7OztBQ1ZELE1BU2EsWUFBWTs7O1lBTnhCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQy9CLE9BQU8sRUFBRSxFQUNSO2dCQUNELE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQzthQUMzQjs7Ozs7Ozs7Ozs7Ozs7OyJ9