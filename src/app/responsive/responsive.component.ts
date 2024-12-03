import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-responsive-grid',
  standalone: true,
  imports: [MatGridListModule],
  template: `
    <mat-grid-list [cols]="columns" rowHeight="200px" gutterSize="10px">
      <mat-grid-tile>Div A</mat-grid-tile>
      <mat-grid-tile>Div B</mat-grid-tile>
      <mat-grid-tile>Div C</mat-grid-tile>
      <mat-grid-tile>Div D</mat-grid-tile>
      <mat-grid-tile>Div E</mat-grid-tile>
      <mat-grid-tile>Div F</mat-grid-tile>
    </mat-grid-list>
  `,
  styles: [
    `
      mat-grid-tile {
        background-color: #f0f0f0;
        border: 1px solid #ccc;
      }
    `,
  ],
})
export class ResponsiveComponent {
  columns = 1;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(['(min-width: 1800px)']).subscribe((result) => {
      this.columns = result.matches ? 2 : 1;
    });
  }
}
