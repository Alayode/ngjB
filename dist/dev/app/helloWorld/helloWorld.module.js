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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var helloWorld_component_1 = require('./helloWorld.component');
var shared_module_1 = require('../shared/shared.module');
var index_1 = require('../shared/exampleService/index');
var HelloWorldModule = (function () {
    function HelloWorldModule() {
    }
    HelloWorldModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, shared_module_1.SharedModule],
            declarations: [helloWorld_component_1.HelloWorldComponent],
            exports: [helloWorld_component_1.HelloWorldComponent],
            providers: [index_1.ExampleService]
        }), 
        __metadata('design:paramtypes', [])
    ], HelloWorldModule);
    return HelloWorldModule;
}());
exports.HelloWorldModule = HelloWorldModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oZWxsb1dvcmxkL2hlbGxvV29ybGQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MscUNBQWtDLHdCQUF3QixDQUFDLENBQUE7QUFDM0QsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFDdkQsc0JBQStCLGdDQUFnQyxDQUFDLENBQUE7QUFTaEU7SUFBQTtJQUFnQyxDQUFDO0lBTmpDO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSw0QkFBWSxDQUFDO1lBQ3JDLFlBQVksRUFBRSxDQUFDLDBDQUFtQixDQUFDO1lBQ25DLE9BQU8sRUFBRSxDQUFDLDBDQUFtQixDQUFDO1lBQzlCLFNBQVMsRUFBRSxDQUFDLHNCQUFjLENBQUM7U0FDNUIsQ0FBQzs7d0JBQUE7SUFDOEIsdUJBQUM7QUFBRCxDQUFoQyxBQUFpQyxJQUFBO0FBQXBCLHdCQUFnQixtQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9oZWxsb1dvcmxkL2hlbGxvV29ybGQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0hlbGxvV29ybGRDb21wb25lbnR9IGZyb20gJy4vaGVsbG9Xb3JsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgRXhhbXBsZVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvZXhhbXBsZVNlcnZpY2UvaW5kZXgnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFNoYXJlZE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0hlbGxvV29ybGRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbSGVsbG9Xb3JsZENvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW0V4YW1wbGVTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkTW9kdWxlIHsgfVxuXG5cblxuIl19
