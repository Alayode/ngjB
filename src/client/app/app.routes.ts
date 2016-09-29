import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { HelloWorldRoutes } from './helloWorld/index';
import { PaymentRoutes } from './payment/index';


export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...HelloWorldRoutes,
  ...PaymentRoutes
];
