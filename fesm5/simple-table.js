import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SimpleTableService = /** @class */ (function () {
    function SimpleTableService() {
    }
    SimpleTableService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    SimpleTableService.ctorParameters = function () { return []; };
    /** @nocollapse */ SimpleTableService.ngInjectableDef = defineInjectable({ factory: function SimpleTableService_Factory() { return new SimpleTableService(); }, token: SimpleTableService, providedIn: "root" });
    return SimpleTableService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SimpleTableComponent = /** @class */ (function () {
    function SimpleTableComponent() {
    }
    /**
     * @return {?}
     */
    SimpleTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SimpleTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xlw-simple-table',
                    template: "<table id=\"customers\">\n    <tr>\n      <th>Company</th>\n      <th>Contact</th>\n      <th>Country</th>\n    </tr>\n    <tr>\n      <td>Alfreds Futterkiste</td>\n      <td>Maria Anders</td>\n      <td>Germany</td>\n    </tr>\n    <tr>\n      <td>Berglunds snabbk\u00F6p</td>\n      <td>Christina Berglund</td>\n      <td>Sweden</td>\n    </tr>\n    <tr>\n      <td>Centro comercial Moctezuma</td>\n      <td>Francisco Chang</td>\n      <td>Mexico</td>\n    </tr>\n    <tr>\n      <td>Ernst Handel</td>\n      <td>Roland Mendel</td>\n      <td>Austria</td>\n    </tr>\n    <tr>\n      <td>Island Trading</td>\n      <td>Helen Bennett</td>\n      <td>UK</td>\n    </tr>\n    <tr>\n      <td>K\u00F6niglich Essen</td>\n      <td>Philip Cramer</td>\n      <td>Germany</td>\n    </tr>\n    <tr>\n      <td>Laughing Bacchus Winecellars</td>\n      <td>Yoshi Tannamuri</td>\n      <td>Canada</td>\n    </tr>\n    <tr>\n      <td>Magazzini Alimentari Riuniti</td>\n      <td>Giovanni Rovelli</td>\n      <td>Italy</td>\n    </tr>\n    <tr>\n      <td>North/South</td>\n      <td>Simon Crowther</td>\n      <td>UK</td>\n    </tr>\n    <tr>\n      <td>Paris sp\u00E9cialit\u00E9s</td>\n      <td>Marie Bertrand</td>\n      <td>France</td>\n    </tr>\n  </table>",
                    styles: ["#customers{font-family:\"Trebuchet MS\",Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%}#customers td,#customers th{border:1px solid #ddd;padding:8px}#customers tr:nth-child(even){background-color:#f2f2f2}#customers tr:hover{background-color:#ddd}#customers th{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#4caf50;color:#fff}"]
                },] },
    ];
    /** @nocollapse */
    SimpleTableComponent.ctorParameters = function () { return []; };
    return SimpleTableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SimpleTableModule = /** @class */ (function () {
    function SimpleTableModule() {
    }
    SimpleTableModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [SimpleTableComponent],
                    exports: [SimpleTableComponent]
                },] },
    ];
    return SimpleTableModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { SimpleTableService, SimpleTableComponent, SimpleTableModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXRhYmxlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9zaW1wbGUtdGFibGUvbGliL3NpbXBsZS10YWJsZS5zZXJ2aWNlLnRzIiwibmc6Ly9zaW1wbGUtdGFibGUvbGliL2NvbXBvbmVudHMvc2ltcGxlLXRhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vc2ltcGxlLXRhYmxlL2xpYi9zaW1wbGUtdGFibGUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2ltcGxlVGFibGVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGx3LXNpbXBsZS10YWJsZScsXG4gIHRlbXBsYXRlOiBgPHRhYmxlIGlkPVwiY3VzdG9tZXJzXCI+XHJcbiAgICA8dHI+XHJcbiAgICAgIDx0aD5Db21wYW55PC90aD5cclxuICAgICAgPHRoPkNvbnRhY3Q8L3RoPlxyXG4gICAgICA8dGg+Q291bnRyeTwvdGg+XHJcbiAgICA8L3RyPlxyXG4gICAgPHRyPlxyXG4gICAgICA8dGQ+QWxmcmVkcyBGdXR0ZXJraXN0ZTwvdGQ+XHJcbiAgICAgIDx0ZD5NYXJpYSBBbmRlcnM8L3RkPlxyXG4gICAgICA8dGQ+R2VybWFueTwvdGQ+XHJcbiAgICA8L3RyPlxyXG4gICAgPHRyPlxyXG4gICAgICA8dGQ+QmVyZ2x1bmRzIHNuYWJia8ODwrZwPC90ZD5cclxuICAgICAgPHRkPkNocmlzdGluYSBCZXJnbHVuZDwvdGQ+XHJcbiAgICAgIDx0ZD5Td2VkZW48L3RkPlxyXG4gICAgPC90cj5cclxuICAgIDx0cj5cclxuICAgICAgPHRkPkNlbnRybyBjb21lcmNpYWwgTW9jdGV6dW1hPC90ZD5cclxuICAgICAgPHRkPkZyYW5jaXNjbyBDaGFuZzwvdGQ+XHJcbiAgICAgIDx0ZD5NZXhpY288L3RkPlxyXG4gICAgPC90cj5cclxuICAgIDx0cj5cclxuICAgICAgPHRkPkVybnN0IEhhbmRlbDwvdGQ+XHJcbiAgICAgIDx0ZD5Sb2xhbmQgTWVuZGVsPC90ZD5cclxuICAgICAgPHRkPkF1c3RyaWE8L3RkPlxyXG4gICAgPC90cj5cclxuICAgIDx0cj5cclxuICAgICAgPHRkPklzbGFuZCBUcmFkaW5nPC90ZD5cclxuICAgICAgPHRkPkhlbGVuIEJlbm5ldHQ8L3RkPlxyXG4gICAgICA8dGQ+VUs8L3RkPlxyXG4gICAgPC90cj5cclxuICAgIDx0cj5cclxuICAgICAgPHRkPkvDg8K2bmlnbGljaCBFc3NlbjwvdGQ+XHJcbiAgICAgIDx0ZD5QaGlsaXAgQ3JhbWVyPC90ZD5cclxuICAgICAgPHRkPkdlcm1hbnk8L3RkPlxyXG4gICAgPC90cj5cclxuICAgIDx0cj5cclxuICAgICAgPHRkPkxhdWdoaW5nIEJhY2NodXMgV2luZWNlbGxhcnM8L3RkPlxyXG4gICAgICA8dGQ+WW9zaGkgVGFubmFtdXJpPC90ZD5cclxuICAgICAgPHRkPkNhbmFkYTwvdGQ+XHJcbiAgICA8L3RyPlxyXG4gICAgPHRyPlxyXG4gICAgICA8dGQ+TWFnYXp6aW5pIEFsaW1lbnRhcmkgUml1bml0aTwvdGQ+XHJcbiAgICAgIDx0ZD5HaW92YW5uaSBSb3ZlbGxpPC90ZD5cclxuICAgICAgPHRkPkl0YWx5PC90ZD5cclxuICAgIDwvdHI+XHJcbiAgICA8dHI+XHJcbiAgICAgIDx0ZD5Ob3J0aC9Tb3V0aDwvdGQ+XHJcbiAgICAgIDx0ZD5TaW1vbiBDcm93dGhlcjwvdGQ+XHJcbiAgICAgIDx0ZD5VSzwvdGQ+XHJcbiAgICA8L3RyPlxyXG4gICAgPHRyPlxyXG4gICAgICA8dGQ+UGFyaXMgc3DDg8KpY2lhbGl0w4PCqXM8L3RkPlxyXG4gICAgICA8dGQ+TWFyaWUgQmVydHJhbmQ8L3RkPlxyXG4gICAgICA8dGQ+RnJhbmNlPC90ZD5cclxuICAgIDwvdHI+XHJcbiAgPC90YWJsZT5gLFxuICBzdHlsZXM6IFtgI2N1c3RvbWVyc3tmb250LWZhbWlseTpcIlRyZWJ1Y2hldCBNU1wiLEFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTt3aWR0aDoxMDAlfSNjdXN0b21lcnMgdGQsI2N1c3RvbWVycyB0aHtib3JkZXI6MXB4IHNvbGlkICNkZGQ7cGFkZGluZzo4cHh9I2N1c3RvbWVycyB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjojZjJmMmYyfSNjdXN0b21lcnMgdHI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZGRkfSNjdXN0b21lcnMgdGh7cGFkZGluZy10b3A6MTJweDtwYWRkaW5nLWJvdHRvbToxMnB4O3RleHQtYWxpZ246bGVmdDtiYWNrZ3JvdW5kLWNvbG9yOiM0Y2FmNTA7Y29sb3I6I2ZmZn1gXVxufSlcbmV4cG9ydCBjbGFzcyBTaW1wbGVUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2ltcGxlVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2ltcGxlLXRhYmxlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU2ltcGxlVGFibGVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU2ltcGxlVGFibGVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNpbXBsZVRhYmxlTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0lBT0U7S0FBaUI7O2dCQUxsQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozs2QkFKRDs7Ozs7OztBQ0FBO0lBaUVFO0tBQWlCOzs7O0lBRWpCLHVDQUFROzs7SUFBUjtLQUNDOztnQkFsRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSx3dUNBd0REO29CQUNULE1BQU0sRUFBRSxDQUFDLCtXQUE2VyxDQUFDO2lCQUN4WDs7OzsrQkE5REQ7Ozs7Ozs7QUNBQTs7OztnQkFHQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2lCQUNoQzs7NEJBUkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==