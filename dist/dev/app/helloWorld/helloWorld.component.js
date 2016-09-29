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
var index_1 = require('../shared/index');
var HelloWorldComponent = (function () {
    function HelloWorldComponent(exampleService) {
        this.exampleService = exampleService;
    }
    HelloWorldComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-helloWorld',
            templateUrl: 'helloWorld.component.html',
            styleUrls: ['helloWorld.component.css'],
        }), 
        __metadata('design:paramtypes', [index_1.ExampleService])
    ], HelloWorldComponent);
    return HelloWorldComponent;
}());
exports.HelloWorldComponent = HelloWorldComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oZWxsb1dvcmxkL2hlbGxvV29ybGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsc0JBQStCLGlCQUFpQixDQUFDLENBQUE7QUFhakQ7SUFDRSw2QkFBb0IsY0FBNkI7UUFBN0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7SUFBRSxDQUFDO0lBUnREO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3hDLENBQUM7OzJCQUFBO0lBSUYsMEJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLDJCQUFtQixzQkFFL0IsQ0FBQSIsImZpbGUiOiJhcHAvaGVsbG9Xb3JsZC9oZWxsb1dvcmxkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFeGFtcGxlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XG5cblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEhvbWVDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWhlbGxvV29ybGQnLFxuICB0ZW1wbGF0ZVVybDogJ2hlbGxvV29ybGQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaGVsbG9Xb3JsZC5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgSGVsbG9Xb3JsZENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZXhhbXBsZVNlcnZpY2U6RXhhbXBsZVNlcnZpY2Upe31cbn1cblxuIl19
