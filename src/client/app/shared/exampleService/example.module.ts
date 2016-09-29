import {NgModule} from "@angular/core";
import {ExampleService} from "./example.service";


//Create the @NgModule Decorator

@NgModule({})

export class ExampleModule {
    static forRoot(){
        return {
            ngModule: ExampleModule,
            provideers: [ExampleService]
        }
    }
}

export {
    ExampleService
}