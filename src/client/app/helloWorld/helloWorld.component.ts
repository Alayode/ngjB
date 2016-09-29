import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../shared/index';


/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-helloWorld',
  templateUrl: 'helloWorld.component.html',
  styleUrls: ['helloWorld.component.css'],
})

export class HelloWorldComponent {
  constructor(private exampleService:ExampleService){}
}

