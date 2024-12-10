import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  standalone: true,
})
export class ChangeDetectionChildDefault {
  @Input() data: any;
}

@Component({
  selector: 'test-push',
  template: ` <div>Input (regular): {{ data?.value ?? '-' }}</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ChangeDetectionChildPush {
  @Input() strings?: string[];

  @Input() set data(value: any) {
    this._data = value;
    // this.cdr.markForCheck();
  }

  get data(): any {
    return this._data;
  }

  private _data: any;

  constructor(private readonly cdr: ChangeDetectorRef) {}
}

@Component({
  selector: 'test-push-save',
  templateUrl: './test-save.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AsyncPipe],
})
export class ChangeDetectionChildPushAsync {
  get data(): any {
    return this.data$.value;
  }
  @Input() set data(value: any) {
    this.data$.next(value);
    this.dataChange.emit(value);
  }
  @Output() dataChange = new EventEmitter<any>();
  data$ = new BehaviorSubject<any>(null);
}
