import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[exampleDirective]',
  exportAs: 'example',
  standalone: true,
})
export class ExampleDirective {
  @Input() message = 'Default message';
  @Input() exampleValue: any;

  sayHello() {
    alert(this.message);
  }

  @HostListener('click')
  onClick() {
    if (this.exampleValue !== undefined) {
      alert(this.exampleValue);
    }
  }
}
