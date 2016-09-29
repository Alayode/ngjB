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
var testing_1 = require('@angular/core/testing');
var about_module_1 = require('./about.module');
function main() {
    describe('About component', function () {
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [TestComponent],
                imports: [about_module_1.AboutModule]
            });
        });
        it('should work', testing_1.async(function () {
            testing_1.TestBed
                .compileComponents()
                .then(function () {
                var fixture = testing_1.TestBed.createComponent(TestComponent);
                var aboutDOMEl = fixture.debugElement.children[0].nativeElement;
                expect(aboutDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Features');
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
            template: '<sd-about></sd-about>'
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHdCQUdPLHVCQUF1QixDQUFDLENBQUE7QUFFL0IsNkJBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFFN0M7SUFDRyxRQUFRLENBQUMsaUJBQWlCLEVBQUU7UUFJM0IsVUFBVSxDQUFDO1lBQ1QsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztnQkFDN0IsWUFBWSxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQywwQkFBVyxDQUFDO2FBQ3ZCLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLGFBQWEsRUFDZCxlQUFLLENBQUM7WUFDSixpQkFBTztpQkFDSixpQkFBaUIsRUFBRTtpQkFDbkIsSUFBSSxDQUFDO2dCQUNKLElBQUksT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7Z0JBRWpFLE1BQU0sQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzlFLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQXhCZSxZQUFJLE9Bd0JuQixDQUFBO0FBTUQ7SUFBQTtJQUFxQixDQUFDO0lBSnRCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSx1QkFBdUI7U0FDbEMsQ0FBQzs7cUJBQUE7SUFDbUIsb0JBQUM7QUFBRCxDQUFyQixBQUFzQixJQUFBIiwiZmlsZSI6ImFwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgYXN5bmMsXG4gIFRlc3RCZWRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcblxuaW1wb3J0IHsgQWJvdXRNb2R1bGUgfSBmcm9tICcuL2Fib3V0Lm1vZHVsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWluKCkge1xuICAgZGVzY3JpYmUoJ0Fib3V0IGNvbXBvbmVudCcsICgpID0+IHtcbiAgICAvLyBTZXR0aW5nIG1vZHVsZSBmb3IgdGVzdGluZ1xuICAgIC8vIERpc2FibGUgb2xkIGZvcm1zXG5cbiAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICAgIGRlY2xhcmF0aW9uczogW1Rlc3RDb21wb25lbnRdLFxuICAgICAgICBpbXBvcnRzOiBbQWJvdXRNb2R1bGVdXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgd29yaycsXG4gICAgICBhc3luYygoKSA9PiB7XG4gICAgICAgIFRlc3RCZWRcbiAgICAgICAgICAuY29tcGlsZUNvbXBvbmVudHMoKVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoVGVzdENvbXBvbmVudCk7XG4gICAgICAgICAgICBsZXQgYWJvdXRET01FbCA9IGZpeHR1cmUuZGVidWdFbGVtZW50LmNoaWxkcmVuWzBdLm5hdGl2ZUVsZW1lbnQ7XG5cblx0ICAgICAgICAgIGV4cGVjdChhYm91dERPTUVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2gyJylbMF0udGV4dENvbnRlbnQpLnRvRXF1YWwoJ0ZlYXR1cmVzJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pKTtcbiAgICB9KTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGVzdC1jbXAnLFxuICB0ZW1wbGF0ZTogJzxzZC1hYm91dD48L3NkLWFib3V0Pidcbn0pXG5jbGFzcyBUZXN0Q29tcG9uZW50IHt9XG4iXX0=
