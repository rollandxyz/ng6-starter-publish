(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('simple-table', ['exports', '@angular/core'], factory) :
    (factory((global['simple-table'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SimpleTableService = (function () {
        function SimpleTableService() {
        }
        SimpleTableService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        SimpleTableService.ctorParameters = function () { return []; };
        /** @nocollapse */ SimpleTableService.ngInjectableDef = i0.defineInjectable({ factory: function SimpleTableService_Factory() { return new SimpleTableService(); }, token: SimpleTableService, providedIn: "root" });
        return SimpleTableService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SimpleTableComponent = (function () {
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
            { type: i0.Component, args: [{
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
    var SimpleTableModule = (function () {
        function SimpleTableModule() {
        }
        SimpleTableModule.decorators = [
            { type: i0.NgModule, args: [{
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

    exports.SimpleTableService = SimpleTableService;
    exports.SimpleTableComponent = SimpleTableComponent;
    exports.SimpleTableModule = SimpleTableModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXRhYmxlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vc2ltcGxlLXRhYmxlL2xpYi9zaW1wbGUtdGFibGUuc2VydmljZS50cyIsIm5nOi8vc2ltcGxlLXRhYmxlL2xpYi9jb21wb25lbnRzL3NpbXBsZS10YWJsZS5jb21wb25lbnQudHMiLCJuZzovL3NpbXBsZS10YWJsZS9saWIvc2ltcGxlLXRhYmxlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNpbXBsZVRhYmxlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hsdy1zaW1wbGUtdGFibGUnLFxuICB0ZW1wbGF0ZTogYDx0YWJsZSBpZD1cImN1c3RvbWVyc1wiPlxyXG4gICAgPHRyPlxyXG4gICAgICA8dGg+Q29tcGFueTwvdGg+XHJcbiAgICAgIDx0aD5Db250YWN0PC90aD5cclxuICAgICAgPHRoPkNvdW50cnk8L3RoPlxyXG4gICAgPC90cj5cclxuICAgIDx0cj5cclxuICAgICAgPHRkPkFsZnJlZHMgRnV0dGVya2lzdGU8L3RkPlxyXG4gICAgICA8dGQ+TWFyaWEgQW5kZXJzPC90ZD5cclxuICAgICAgPHRkPkdlcm1hbnk8L3RkPlxyXG4gICAgPC90cj5cclxuICAgIDx0cj5cclxuICAgICAgPHRkPkJlcmdsdW5kcyBzbmFiYmvDg8K2cDwvdGQ+XHJcbiAgICAgIDx0ZD5DaHJpc3RpbmEgQmVyZ2x1bmQ8L3RkPlxyXG4gICAgICA8dGQ+U3dlZGVuPC90ZD5cclxuICAgIDwvdHI+XHJcbiAgICA8dHI+XHJcbiAgICAgIDx0ZD5DZW50cm8gY29tZXJjaWFsIE1vY3RlenVtYTwvdGQ+XHJcbiAgICAgIDx0ZD5GcmFuY2lzY28gQ2hhbmc8L3RkPlxyXG4gICAgICA8dGQ+TWV4aWNvPC90ZD5cclxuICAgIDwvdHI+XHJcbiAgICA8dHI+XHJcbiAgICAgIDx0ZD5Fcm5zdCBIYW5kZWw8L3RkPlxyXG4gICAgICA8dGQ+Um9sYW5kIE1lbmRlbDwvdGQ+XHJcbiAgICAgIDx0ZD5BdXN0cmlhPC90ZD5cclxuICAgIDwvdHI+XHJcbiAgICA8dHI+XHJcbiAgICAgIDx0ZD5Jc2xhbmQgVHJhZGluZzwvdGQ+XHJcbiAgICAgIDx0ZD5IZWxlbiBCZW5uZXR0PC90ZD5cclxuICAgICAgPHRkPlVLPC90ZD5cclxuICAgIDwvdHI+XHJcbiAgICA8dHI+XHJcbiAgICAgIDx0ZD5Lw4PCtm5pZ2xpY2ggRXNzZW48L3RkPlxyXG4gICAgICA8dGQ+UGhpbGlwIENyYW1lcjwvdGQ+XHJcbiAgICAgIDx0ZD5HZXJtYW55PC90ZD5cclxuICAgIDwvdHI+XHJcbiAgICA8dHI+XHJcbiAgICAgIDx0ZD5MYXVnaGluZyBCYWNjaHVzIFdpbmVjZWxsYXJzPC90ZD5cclxuICAgICAgPHRkPllvc2hpIFRhbm5hbXVyaTwvdGQ+XHJcbiAgICAgIDx0ZD5DYW5hZGE8L3RkPlxyXG4gICAgPC90cj5cclxuICAgIDx0cj5cclxuICAgICAgPHRkPk1hZ2F6emluaSBBbGltZW50YXJpIFJpdW5pdGk8L3RkPlxyXG4gICAgICA8dGQ+R2lvdmFubmkgUm92ZWxsaTwvdGQ+XHJcbiAgICAgIDx0ZD5JdGFseTwvdGQ+XHJcbiAgICA8L3RyPlxyXG4gICAgPHRyPlxyXG4gICAgICA8dGQ+Tm9ydGgvU291dGg8L3RkPlxyXG4gICAgICA8dGQ+U2ltb24gQ3Jvd3RoZXI8L3RkPlxyXG4gICAgICA8dGQ+VUs8L3RkPlxyXG4gICAgPC90cj5cclxuICAgIDx0cj5cclxuICAgICAgPHRkPlBhcmlzIHNww4PCqWNpYWxpdMODwqlzPC90ZD5cclxuICAgICAgPHRkPk1hcmllIEJlcnRyYW5kPC90ZD5cclxuICAgICAgPHRkPkZyYW5jZTwvdGQ+XHJcbiAgICA8L3RyPlxyXG4gIDwvdGFibGU+YCxcbiAgc3R5bGVzOiBbYCNjdXN0b21lcnN7Zm9udC1mYW1pbHk6XCJUcmVidWNoZXQgTVNcIixBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZjtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7d2lkdGg6MTAwJX0jY3VzdG9tZXJzIHRkLCNjdXN0b21lcnMgdGh7Ym9yZGVyOjFweCBzb2xpZCAjZGRkO3BhZGRpbmc6OHB4fSNjdXN0b21lcnMgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6I2YyZjJmMn0jY3VzdG9tZXJzIHRyOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2RkZH0jY3VzdG9tZXJzIHRoe3BhZGRpbmctdG9wOjEycHg7cGFkZGluZy1ib3R0b206MTJweDt0ZXh0LWFsaWduOmxlZnQ7YmFja2dyb3VuZC1jb2xvcjojNGNhZjUwO2NvbG9yOiNmZmZ9YF1cbn0pXG5leHBvcnQgY2xhc3MgU2ltcGxlVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpbXBsZVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NpbXBsZS10YWJsZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1NpbXBsZVRhYmxlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1NpbXBsZVRhYmxlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTaW1wbGVUYWJsZU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O2lDQUpEOzs7Ozs7O0FDQUE7UUFpRUU7U0FBaUI7Ozs7UUFFakIsdUNBQVE7OztZQUFSO2FBQ0M7O29CQWxFRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxrQkFBa0I7d0JBQzVCLFFBQVEsRUFBRSx3dUNBd0REO3dCQUNULE1BQU0sRUFBRSxDQUFDLCtXQUE2VyxDQUFDO3FCQUN4WDs7OzttQ0E5REQ7Ozs7Ozs7QUNBQTs7OztvQkFHQ0MsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxFQUNSO3dCQUNELFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO3dCQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztxQkFDaEM7O2dDQVJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9