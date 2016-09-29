"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var testing_1 = require('@angular/http/testing');
var Observable_1 = require('rxjs/Observable');
var name_list_service_1 = require('./name-list.service');
function main() {
    describe('NameList Service', function () {
        var nameListService;
        var backend;
        var initialResponse;
        beforeEach(function () {
            var injector = core_1.ReflectiveInjector.resolveAndCreate([
                name_list_service_1.NameListService,
                http_1.BaseRequestOptions,
                testing_1.MockBackend,
                { provide: http_1.Http,
                    useFactory: function (backend, defaultOptions) {
                        return new http_1.Http(backend, defaultOptions);
                    },
                    deps: [testing_1.MockBackend, http_1.BaseRequestOptions]
                },
            ]);
            nameListService = injector.get(name_list_service_1.NameListService);
            backend = injector.get(testing_1.MockBackend);
            var connection;
            backend.connections.subscribe(function (c) { return connection = c; });
            initialResponse = nameListService.get();
            connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ body: '["Dijkstra", "Hopper"]' })));
        });
        it('should return an Observable when get called', function () {
            expect(initialResponse).toEqual(jasmine.any(Observable_1.Observable));
        });
        it('should resolve to list of names when get called', function () {
            var names;
            initialResponse.subscribe(function (data) { return names = data; });
            expect(names).toEqual(['Dijkstra', 'Hopper']);
        });
    });
}
exports.main = main;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbmFtZS1saXN0L25hbWUtbGlzdC5zZXJ2aWNlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFtQyxlQUFlLENBQUMsQ0FBQTtBQUNuRCxxQkFBdUYsZUFBZSxDQUFDLENBQUE7QUFDdkcsd0JBQTRCLHVCQUF1QixDQUFDLENBQUE7QUFDcEQsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0Msa0NBQWdDLHFCQUFxQixDQUFDLENBQUE7QUFFdEQ7SUFDRSxRQUFRLENBQUMsa0JBQWtCLEVBQUU7UUFDM0IsSUFBSSxlQUFnQyxDQUFDO1FBQ3JDLElBQUksT0FBb0IsQ0FBQztRQUN6QixJQUFJLGVBQW9CLENBQUM7UUFFekIsVUFBVSxDQUFDO1lBRVQsSUFBSSxRQUFRLEdBQUcseUJBQWtCLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ2pELG1DQUFlO2dCQUNmLHlCQUFrQjtnQkFDbEIscUJBQVc7Z0JBQ1gsRUFBQyxPQUFPLEVBQUUsV0FBSTtvQkFDWixVQUFVLEVBQUUsVUFBUyxPQUEwQixFQUFFLGNBQWtDO3dCQUNqRixNQUFNLENBQUMsSUFBSSxXQUFJLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO29CQUMzQyxDQUFDO29CQUNELElBQUksRUFBRSxDQUFDLHFCQUFXLEVBQUUseUJBQWtCLENBQUM7aUJBQ3hDO2FBQ0YsQ0FBQyxDQUFDO1lBQ0gsZUFBZSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsbUNBQWUsQ0FBQyxDQUFDO1lBQ2hELE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLHFCQUFXLENBQUMsQ0FBQztZQUVwQyxJQUFJLFVBQWUsQ0FBQztZQUNwQixPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQU0sSUFBSyxPQUFBLFVBQVUsR0FBRyxDQUFDLEVBQWQsQ0FBYyxDQUFDLENBQUM7WUFDMUQsZUFBZSxHQUFHLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN4QyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksZUFBUSxDQUFDLElBQUksc0JBQWUsQ0FBQyxFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLDZDQUE2QyxFQUFFO1lBQ2hELE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBVSxDQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxpREFBaUQsRUFBRTtZQUNwRCxJQUFJLEtBQVUsQ0FBQztZQUNmLGVBQWUsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFTLElBQUssT0FBQSxLQUFLLEdBQUcsSUFBSSxFQUFaLENBQVksQ0FBQyxDQUFDO1lBQ3ZELE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQXRDZSxZQUFJLE9Bc0NuQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvbmFtZS1saXN0L25hbWUtbGlzdC5zZXJ2aWNlLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWZsZWN0aXZlSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VSZXF1ZXN0T3B0aW9ucywgQ29ubmVjdGlvbkJhY2tlbmQsIEh0dHAsIFJlc3BvbnNlLCBSZXNwb25zZU9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE1vY2tCYWNrZW5kIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cC90ZXN0aW5nJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5pbXBvcnQgeyBOYW1lTGlzdFNlcnZpY2UgfSBmcm9tICcuL25hbWUtbGlzdC5zZXJ2aWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1haW4oKSB7XG4gIGRlc2NyaWJlKCdOYW1lTGlzdCBTZXJ2aWNlJywgKCkgPT4ge1xuICAgIGxldCBuYW1lTGlzdFNlcnZpY2U6IE5hbWVMaXN0U2VydmljZTtcbiAgICBsZXQgYmFja2VuZDogTW9ja0JhY2tlbmQ7XG4gICAgbGV0IGluaXRpYWxSZXNwb25zZTogYW55O1xuXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG5cbiAgICAgIGxldCBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlQW5kQ3JlYXRlKFtcbiAgICAgICAgTmFtZUxpc3RTZXJ2aWNlLFxuICAgICAgICBCYXNlUmVxdWVzdE9wdGlvbnMsXG4gICAgICAgIE1vY2tCYWNrZW5kLFxuICAgICAgICB7cHJvdmlkZTogSHR0cCxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBmdW5jdGlvbihiYWNrZW5kOiBDb25uZWN0aW9uQmFja2VuZCwgZGVmYXVsdE9wdGlvbnM6IEJhc2VSZXF1ZXN0T3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBIdHRwKGJhY2tlbmQsIGRlZmF1bHRPcHRpb25zKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcHM6IFtNb2NrQmFja2VuZCwgQmFzZVJlcXVlc3RPcHRpb25zXVxuICAgICAgICB9LFxuICAgICAgXSk7XG4gICAgICBuYW1lTGlzdFNlcnZpY2UgPSBpbmplY3Rvci5nZXQoTmFtZUxpc3RTZXJ2aWNlKTtcbiAgICAgIGJhY2tlbmQgPSBpbmplY3Rvci5nZXQoTW9ja0JhY2tlbmQpO1xuXG4gICAgICBsZXQgY29ubmVjdGlvbjogYW55O1xuICAgICAgYmFja2VuZC5jb25uZWN0aW9ucy5zdWJzY3JpYmUoKGM6IGFueSkgPT4gY29ubmVjdGlvbiA9IGMpO1xuICAgICAgaW5pdGlhbFJlc3BvbnNlID0gbmFtZUxpc3RTZXJ2aWNlLmdldCgpO1xuICAgICAgY29ubmVjdGlvbi5tb2NrUmVzcG9uZChuZXcgUmVzcG9uc2UobmV3IFJlc3BvbnNlT3B0aW9ucyh7IGJvZHk6ICdbXCJEaWprc3RyYVwiLCBcIkhvcHBlclwiXScgfSkpKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGFuIE9ic2VydmFibGUgd2hlbiBnZXQgY2FsbGVkJywgKCkgPT4ge1xuICAgICAgZXhwZWN0KGluaXRpYWxSZXNwb25zZSkudG9FcXVhbChqYXNtaW5lLmFueShPYnNlcnZhYmxlKSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHJlc29sdmUgdG8gbGlzdCBvZiBuYW1lcyB3aGVuIGdldCBjYWxsZWQnLCAoKSA9PiB7XG4gICAgICBsZXQgbmFtZXM6IGFueTtcbiAgICAgIGluaXRpYWxSZXNwb25zZS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4gbmFtZXMgPSBkYXRhKTtcbiAgICAgIGV4cGVjdChuYW1lcykudG9FcXVhbChbJ0RpamtzdHJhJywgJ0hvcHBlciddKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iXX0=
