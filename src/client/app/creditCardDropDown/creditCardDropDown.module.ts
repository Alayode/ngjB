//import NgModule
import { NgModule } from '@angular/core';

//import Component
import {CreditCardDropDownComponent} from '../creditCardDropDown/creditCardDropDown.component';

//import the CommonModule
import { CommonModule } from '@angular/common';

// import BrowserModule
import {BrowserModule} from '@angular/platform-browser';

//import NgbModule from ng-bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


//add the ngModule decorator and its properties

@NgModule({
  imports: [ BrowserModule, NgbModule ],
  declarations: [ CreditCardDropDownComponent ],
  bootstrap: [ CreditCardDropDownComponent ]
})

//dont forget to export our new module
export class creditCardModule {}