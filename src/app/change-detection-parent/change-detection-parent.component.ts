import { Component } from '@angular/core';
import {
  ChangeDetectionChildDefault,
  ChangeDetectionChildPush,
  ChangeDetectionChildPushAsync,
} from '../change-detection-child/change-detection-child.component';
@Component({
  selector: 'change-detection-parent',
  templateUrl: './change-detection-parent.component.html',
  standalone: true,
  imports: [
    ChangeDetectionChildDefault,
    ChangeDetectionChildPush,
    ChangeDetectionChildPushAsync,
  ],
})
export class ChangeDetectionParentComponent {
  data: { value: number } | null = null;
}
