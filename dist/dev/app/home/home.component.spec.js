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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var testing_2 = require('@angular/core/testing');
var http_1 = require('@angular/http');
var testing_3 = require('@angular/http/testing');
var index_1 = require('../shared/index');
var home_module_1 = require('./home.module');
function main() {
    describe('Home component', function () {
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [forms_1.FormsModule, router_1.RouterModule, http_1.HttpModule, home_module_1.HomeModule],
                declarations: [TestComponent],
                providers: [
                    index_1.NameListService,
                    http_1.BaseRequestOptions,
                    testing_3.MockBackend,
                    { provide: http_1.Http, useFactory: function (backend, defaultOptions) {
                            return new http_1.Http(backend, defaultOptions);
                        },
                        deps: [testing_3.MockBackend, http_1.BaseRequestOptions]
                    },
                ]
            });
        });
        it('should work', testing_2.async(function () {
            testing_1.TestBed
                .compileComponents()
                .then(function () {
                var fixture = testing_1.TestBed.createComponent(TestComponent);
                fixture.detectChanges();
                var homeInstance = fixture.debugElement.children[0].componentInstance;
                var homeDOMEl = fixture.debugElement.children[0].nativeElement;
                expect(homeInstance.nameListService).toEqual(jasmine.any(index_1.NameListService));
                expect(homeDOMEl.querySelectorAll('li').length).toEqual(0);
                homeInstance.newName = 'Minko';
                homeInstance.addName();
                fixture.detectChanges();
                expect(homeDOMEl.querySelectorAll('li').length).toEqual(1);
                expect(homeDOMEl.querySelectorAll('li')[0].textContent).toEqual('Minko');
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
            template: '<sd-home></sd-home>'
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx3QkFBd0IsdUJBQXVCLENBQUMsQ0FBQTtBQUNoRCxzQkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx3QkFFTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLHFCQUlPLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZCLHdCQUE0Qix1QkFBdUIsQ0FBQyxDQUFBO0FBRXBELHNCQUFnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ2xELDRCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUUzQztJQUNFLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtRQUd6QixVQUFVLENBQUM7WUFDVCxpQkFBTyxDQUFDLHNCQUFzQixDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxtQkFBVyxFQUFFLHFCQUFZLEVBQUUsaUJBQVUsRUFBRSx3QkFBVSxDQUFDO2dCQUM1RCxZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUM7Z0JBQzdCLFNBQVMsRUFBRTtvQkFDVCx1QkFBZTtvQkFDZix5QkFBa0I7b0JBQ2xCLHFCQUFXO29CQUNYLEVBQUMsT0FBTyxFQUFFLFdBQUksRUFBRSxVQUFVLEVBQUUsVUFBVSxPQUEwQixFQUFFLGNBQWtDOzRCQUNoRyxNQUFNLENBQUMsSUFBSSxXQUFJLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO3dCQUMzQyxDQUFDO3dCQUNELElBQUksRUFBRSxDQUFDLHFCQUFXLEVBQUUseUJBQWtCLENBQUM7cUJBQ3hDO2lCQUNGO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsYUFBYSxFQUNkLGVBQUssQ0FBQztZQUNKLGlCQUFPO2lCQUNKLGlCQUFpQixFQUFFO2lCQUNuQixJQUFJLENBQUM7Z0JBQ0osSUFBSSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3JELE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFFeEIsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUM7Z0JBQ3RFLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztnQkFFL0QsTUFBTSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBZSxDQUFDLENBQUMsQ0FBQztnQkFDM0UsTUFBTSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRTNELFlBQVksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUMvQixZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBRXZCLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFFeEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNELE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNFLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQTlDZSxZQUFJLE9BOENuQixDQUFBO0FBTUQ7SUFBQTtJQUFzQixDQUFDO0lBSnZCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxxQkFBcUI7U0FDaEMsQ0FBQzs7cUJBQUE7SUFDb0Isb0JBQUM7QUFBRCxDQUF0QixBQUF1QixJQUFBIiwiZmlsZSI6ImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlc3RCZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgYXN5bmNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7XG4gIEJhc2VSZXF1ZXN0T3B0aW9ucyxcbiAgQ29ubmVjdGlvbkJhY2tlbmQsXG4gIEh0dHAsIEh0dHBNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBNb2NrQmFja2VuZCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAvdGVzdGluZyc7XG5cbmltcG9ydCB7IE5hbWVMaXN0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgeyBIb21lTW9kdWxlIH0gZnJvbSAnLi9ob21lLm1vZHVsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWluKCkge1xuICBkZXNjcmliZSgnSG9tZSBjb21wb25lbnQnLCAoKSA9PiB7XG4gICAgLy8gc2V0dGluZyBtb2R1bGUgZm9yIHRlc3RpbmdcbiAgICAvLyBEaXNhYmxlIG9sZCBmb3Jtc1xuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgICAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIEh0dHBNb2R1bGUsIEhvbWVNb2R1bGVdLFxuICAgICAgICBkZWNsYXJhdGlvbnM6IFtUZXN0Q29tcG9uZW50XSxcbiAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgTmFtZUxpc3RTZXJ2aWNlLFxuICAgICAgICAgIEJhc2VSZXF1ZXN0T3B0aW9ucyxcbiAgICAgICAgICBNb2NrQmFja2VuZCxcbiAgICAgICAgICB7cHJvdmlkZTogSHR0cCwgdXNlRmFjdG9yeTogZnVuY3Rpb24gKGJhY2tlbmQ6IENvbm5lY3Rpb25CYWNrZW5kLCBkZWZhdWx0T3B0aW9uczogQmFzZVJlcXVlc3RPcHRpb25zKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgSHR0cChiYWNrZW5kLCBkZWZhdWx0T3B0aW9ucyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVwczogW01vY2tCYWNrZW5kLCBCYXNlUmVxdWVzdE9wdGlvbnNdXG4gICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHdvcmsnLFxuICAgICAgYXN5bmMoKCkgPT4ge1xuICAgICAgICBUZXN0QmVkXG4gICAgICAgICAgLmNvbXBpbGVDb21wb25lbnRzKClcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KFRlc3RDb21wb25lbnQpO1xuICAgICAgICAgICAgZml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICAgICAgICAgIGxldCBob21lSW5zdGFuY2UgPSBmaXh0dXJlLmRlYnVnRWxlbWVudC5jaGlsZHJlblswXS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICAgICAgICAgIGxldCBob21lRE9NRWwgPSBmaXh0dXJlLmRlYnVnRWxlbWVudC5jaGlsZHJlblswXS5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgICAgICBleHBlY3QoaG9tZUluc3RhbmNlLm5hbWVMaXN0U2VydmljZSkudG9FcXVhbChqYXNtaW5lLmFueShOYW1lTGlzdFNlcnZpY2UpKTtcbiAgICAgICAgICAgIGV4cGVjdChob21lRE9NRWwucXVlcnlTZWxlY3RvckFsbCgnbGknKS5sZW5ndGgpLnRvRXF1YWwoMCk7XG5cbiAgICAgICAgICAgIGhvbWVJbnN0YW5jZS5uZXdOYW1lID0gJ01pbmtvJztcbiAgICAgICAgICAgIGhvbWVJbnN0YW5jZS5hZGROYW1lKCk7XG5cbiAgICAgICAgICAgIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgICBleHBlY3QoaG9tZURPTUVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJykubGVuZ3RoKS50b0VxdWFsKDEpO1xuICAgICAgICAgICAgZXhwZWN0KGhvbWVET01FbC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpWzBdLnRleHRDb250ZW50KS50b0VxdWFsKCdNaW5rbycpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICB9KSk7XG4gIH0pO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZXN0LWNtcCcsXG4gIHRlbXBsYXRlOiAnPHNkLWhvbWU+PC9zZC1ob21lPidcbn0pXG5jbGFzcyBUZXN0Q29tcG9uZW50IHsgfVxuIl19
