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
var forms_1 = require('@angular/forms');
var testing_1 = require('@angular/core/testing');
var common_1 = require('@angular/common');
var testing_2 = require('@angular/core/testing');
var testing_3 = require('@angular/router/testing');
var app_component_1 = require('./app.component');
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./about/about.component');
var toolbar_component_1 = require('./shared/toolbar/toolbar.component');
var navbar_component_1 = require('./shared/navbar/navbar.component');
function main() {
    describe('App component', function () {
        var config = [
            { path: '', component: home_component_1.HomeComponent },
            { path: 'about', component: about_component_1.AboutComponent }
        ];
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [forms_1.FormsModule, testing_3.RouterTestingModule.withRoutes(config)],
                declarations: [TestComponent, toolbar_component_1.ToolbarComponent,
                    navbar_component_1.NavbarComponent, app_component_1.AppComponent,
                    home_component_1.HomeComponent, about_component_1.AboutComponent],
                providers: [
                    { provide: common_1.APP_BASE_HREF, useValue: '/' }
                ]
            });
        });
        it('should build without a problem', testing_2.async(function () {
            testing_1.TestBed
                .compileComponents()
                .then(function () {
                var fixture = testing_1.TestBed.createComponent(TestComponent);
                var compiled = fixture.nativeElement;
                expect(compiled).toBeTruthy();
            });
        }));
    });
}
exports.main = main;
var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent = __decorate([
        core_1.Component({
            selector: 'test-cmp',
            template: '<sd-app></sd-app>'
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxzQkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3Qyx3QkFBd0IsdUJBQXVCLENBQUMsQ0FBQTtBQUNoRCx1QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUVoRCx3QkFFTyx1QkFBdUIsQ0FBQyxDQUFBO0FBSS9CLHdCQUVPLHlCQUF5QixDQUFDLENBQUE7QUFDakMsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsK0JBQThCLHVCQUF1QixDQUFDLENBQUE7QUFDdEQsZ0NBQStCLHlCQUF5QixDQUFDLENBQUE7QUFDekQsa0NBQWlDLG9DQUFvQyxDQUFDLENBQUE7QUFDdEUsaUNBQWdDLGtDQUFrQyxDQUFDLENBQUE7QUFFbkU7SUFFRSxRQUFRLENBQUMsZUFBZSxFQUFFO1FBRXhCLElBQUksTUFBTSxHQUFZO1lBQ3BCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtZQUN0QyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7U0FDN0MsQ0FBQztRQUNGLFVBQVUsQ0FBQztZQUNULGlCQUFPLENBQUMsc0JBQXNCLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLG1CQUFXLEVBQUUsNkJBQW1CLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5RCxZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsb0NBQWdCO29CQUM1QyxrQ0FBZSxFQUFFLDRCQUFZO29CQUM3Qiw4QkFBYSxFQUFFLGdDQUFjLENBQUM7Z0JBQ2hDLFNBQVMsRUFBRTtvQkFDVCxFQUFFLE9BQU8sRUFBRSxzQkFBYSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUU7aUJBQzFDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsZ0NBQWdDLEVBQ2pDLGVBQUssQ0FBQztZQUNKLGlCQUFPO2lCQUNKLGlCQUFpQixFQUFFO2lCQUNuQixJQUFJLENBQUM7Z0JBQ0osSUFBSSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3JELElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7Z0JBRXJDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFoQ2UsWUFBSSxPQWdDbkIsQ0FBQTtBQU9EO0lBQUE7SUFDQSxDQUFDO0lBTkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLG1CQUFtQjtTQUM5QixDQUFDOztxQkFBQTtJQUdGLG9CQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUEiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUZXN0QmVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IEFQUF9CQVNFX0hSRUYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge1xuICBhc3luY1xufSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHtcbiAgUm91dGVcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIFJvdXRlclRlc3RpbmdNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyL3Rlc3RpbmcnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL2Fib3V0L2Fib3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZWQvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWluKCkge1xuXG4gIGRlc2NyaWJlKCdBcHAgY29tcG9uZW50JywgKCkgPT4ge1xuXG4gICAgbGV0IGNvbmZpZzogUm91dGVbXSA9IFtcbiAgICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnYWJvdXQnLCBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50IH1cbiAgICBdO1xuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgICAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBSb3V0ZXJUZXN0aW5nTW9kdWxlLndpdGhSb3V0ZXMoY29uZmlnKV0sXG4gICAgICAgIGRlY2xhcmF0aW9uczogW1Rlc3RDb21wb25lbnQsIFRvb2xiYXJDb21wb25lbnQsXG4gICAgICAgICAgTmF2YmFyQ29tcG9uZW50LCBBcHBDb21wb25lbnQsXG4gICAgICAgICAgSG9tZUNvbXBvbmVudCwgQWJvdXRDb21wb25lbnRdLFxuICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICB7IHByb3ZpZGU6IEFQUF9CQVNFX0hSRUYsIHVzZVZhbHVlOiAnLycgfVxuICAgICAgICBdXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgYnVpbGQgd2l0aG91dCBhIHByb2JsZW0nLFxuICAgICAgYXN5bmMoKCkgPT4ge1xuICAgICAgICBUZXN0QmVkXG4gICAgICAgICAgLmNvbXBpbGVDb21wb25lbnRzKClcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KFRlc3RDb21wb25lbnQpO1xuICAgICAgICAgICAgbGV0IGNvbXBpbGVkID0gZml4dHVyZS5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgICAgICBleHBlY3QoY29tcGlsZWQpLnRvQmVUcnV0aHkoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pKTtcbiAgfSk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rlc3QtY21wJyxcbiAgdGVtcGxhdGU6ICc8c2QtYXBwPjwvc2QtYXBwPidcbn0pXG5cbmNsYXNzIFRlc3RDb21wb25lbnQge1xufVxuXG5cblxuIl19
