import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatButtonModule],
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <nav>
          <button mat-raised-button color="accent" routerLink="/first">
            First
          </button>
          <button mat-raised-button color="accent" routerLink="/directive-test">
            Directive test
          </button>
          <button mat-raised-button color="accent" routerLink="/responsive">
            Responsive
          </button>
          <button
            mat-raised-button
            color="accent"
            routerLink="/change-detection"
          >
            Change detection
          </button>
        </nav>
      </mat-toolbar-row>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      nav {
        display: flex;
        gap: 10px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'angular-mule';
}
