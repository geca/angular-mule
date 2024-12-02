import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { Directive } from '@angular/core';
import { DirectiveTestComponent } from './directive-test/directive-test.component';

export const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'directive-test', component: DirectiveTestComponent },
];
