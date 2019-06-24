import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import * as moment from 'moment';
@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnDestroy {

  timer: number=0;
  timerRef;
  running: boolean = false;
  resetBt: boolean = false;
  colorBt: boolean = false;
  startText = 'Start';
  minutes: number=0;
  seconds: number=0;
  constructor() { }

  
  startTimer() {
    this.running = !this.running;
    this.resetBt = false;
    if (this.running) {
      this.colorBt = true;
      this.startText = 'Stop';      
      this.timerRef =   setInterval(() => {
        this.timer = this.timer+1
        if(this.timer === 100) {
          this.timer = 0;
          this.seconds += 1;
        }
        if(this.seconds === 60) {
          this.seconds = 0;
          this.minutes +=1;
        }
      },10);
      
     
    } else {
      this.startText = 'Start';
      this.resetBt = true;
      this.colorBt = true;
      clearInterval(this.timerRef);
    }
    
    
  }
  format():string {
     return moment().hour(0).minute(0).second(this.timer).format('ss');
  }
  format1():string {
    return moment().hour(0).minute(this.seconds).second(0).format('mm');
  }
  format2():string {
    return moment().hour(this.minutes).minute(0).second(0).format('HH');
  }
clearTimer() {
  this.running = false;
  this.startText = 'Start';
  this.resetBt = false;
  this.colorBt = false;
  this.timer = this.seconds = this.minutes = 0;
  clearInterval(this.timerRef);
  
}
ngOnDestroy() {
  clearInterval(this.timerRef);
}

}
