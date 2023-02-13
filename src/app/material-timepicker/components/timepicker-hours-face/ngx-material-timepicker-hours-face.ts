import { EventEmitter, Input, Output, Component, Inject } from '@angular/core';
import { DateTime } from 'luxon';
import { ClockFaceTime } from '../../models/clock-face-time.interface';
import { TimepickerTimeUtils } from '../../utils/timepicker-time.utils';

@Component({
    template: ''
  }) 
  
export class NgxMaterialTimepickerHoursFace {

    @Input() selectedHour: ClockFaceTime;
    @Input() minTime: DateTime;
    @Input() maxTime: DateTime;
    @Input() format: any;

    @Output() hourChange = new EventEmitter<ClockFaceTime>();
    @Output() hourSelected = new EventEmitter<number>();

    hoursList: ClockFaceTime[] = [];

    protected constructor(@Inject(String) format:any) {
        this.hoursList = TimepickerTimeUtils.getHours(format);
    }

    onTimeSelected(time): void {
        this.hourSelected.next(time);
    }
}
