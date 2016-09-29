"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var example_service_1 = require("./example.service");
exports.ExampleService = example_service_1.ExampleService;
var ExampleModule = (function () {
    function ExampleModule() {
    }
    ExampleModule.forRoot = function () {
        return {
            ngModule: ExampleModule,
            provideers: [example_service_1.ExampleService]
        };
    };
    ExampleModule = __decorate([
        core_1.NgModule({}), 
        __metadata('design:paramtypes', [])
    ], ExampleModule);
    return ExampleModule;
}());
exports.ExampleModule = ExampleModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvZXhhbXBsZVNlcnZpY2UvZXhhbXBsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QixlQUFlLENBQUMsQ0FBQTtBQUN2QyxnQ0FBNkIsbUJBQW1CLENBQUMsQ0FBQTtBQWlCN0Msc0JBQWM7QUFWbEI7SUFBQTtJQU9BLENBQUM7SUFOVSxxQkFBTyxHQUFkO1FBQ0ksTUFBTSxDQUFDO1lBQ0gsUUFBUSxFQUFFLGFBQWE7WUFDdkIsVUFBVSxFQUFFLENBQUMsZ0NBQWMsQ0FBQztTQUMvQixDQUFBO0lBQ0wsQ0FBQztJQVJMO1FBQUMsZUFBUSxDQUFDLEVBQUUsQ0FBQzs7cUJBQUE7SUFTYixvQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFkscUJBQWEsZ0JBT3pCLENBQUE7QUFJQSIsImZpbGUiOiJhcHAvc2hhcmVkL2V4YW1wbGVTZXJ2aWNlL2V4YW1wbGUubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7RXhhbXBsZVNlcnZpY2V9IGZyb20gXCIuL2V4YW1wbGUuc2VydmljZVwiO1xuXG5cbi8vQ3JlYXRlIHRoZSBATmdNb2R1bGUgRGVjb3JhdG9yXG5cbkBOZ01vZHVsZSh7fSlcblxuZXhwb3J0IGNsYXNzIEV4YW1wbGVNb2R1bGUge1xuICAgIHN0YXRpYyBmb3JSb290KCl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogRXhhbXBsZU1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVlcnM6IFtFeGFtcGxlU2VydmljZV1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBFeGFtcGxlU2VydmljZVxufSJdfQ==
