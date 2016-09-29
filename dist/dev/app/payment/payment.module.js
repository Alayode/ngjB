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
var payment_component_1 = require('./payment.component');
var shared_module_1 = require('../shared/shared.module');
var PaymentModule = (function () {
    function PaymentModule() {
    }
    PaymentModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, shared_module_1.SharedModule],
            declarations: [payment_component_1.PaymentComponent],
            exports: [payment_component_1.PaymentComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], PaymentModule);
    return PaymentModule;
}());
exports.PaymentModule = PaymentModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYXltZW50L3BheW1lbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0Msa0NBQW1DLHFCQUFxQixDQUFDLENBQUE7QUFDekQsOEJBQThCLHlCQUF5QixDQUFDLENBQUE7QUFXeEQ7SUFBQTtJQUE0QixDQUFDO0lBUDdCO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMscUJBQVksRUFBQyw0QkFBWSxDQUFDO1lBQ3BDLFlBQVksRUFBRSxDQUFDLG9DQUFnQixDQUFDO1lBQ2hDLE9BQU8sRUFBRSxDQUFDLG9DQUFnQixDQUFDO1NBRTlCLENBQUM7O3FCQUFBO0lBRTBCLG9CQUFDO0FBQUQsQ0FBNUIsQUFBNkIsSUFBQTtBQUFoQixxQkFBYSxnQkFBRyxDQUFBIiwiZmlsZSI6ImFwcC9wYXltZW50L3BheW1lbnQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0ICB7IFBheW1lbnRDb21wb25lbnQgfSBmcm9tICAnLi9wYXltZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLFNoYXJlZE1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbUGF5bWVudENvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW1BheW1lbnRDb21wb25lbnRdXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBQYXltZW50TW9kdWxlIHt9XG4iXX0=
