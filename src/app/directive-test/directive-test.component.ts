import { Component } from '@angular/core';
import { ExampleDirective } from '../example.directive';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <button
        exampleDirective
        #myDirective="example"
        message="Hello from directive!"
        (click)="myDirective.sayHello()"
      >
        Say Hello
      </button>

      <button exampleDirective [exampleValue]="42">Click Me</button>
    </div>
  `,
  standalone: true,
  imports: [ExampleDirective],
})
export class DirectiveTestComponent {}
