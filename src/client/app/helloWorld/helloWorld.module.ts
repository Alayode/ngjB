import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HelloWorldComponent} from './helloWorld.component';
import { SharedModule } from '../shared/shared.module';
import { ExampleService } from '../shared/exampleService/index';


@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [HelloWorldComponent],
  exports: [HelloWorldComponent],
  providers: [ExampleService]
})
export class HelloWorldModule { }



