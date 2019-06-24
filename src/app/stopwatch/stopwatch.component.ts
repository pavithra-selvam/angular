import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnDestroy {

  timer: number=0;
  timerRef:Subscription = null;
  running: boolean = false;
  resetBt: boolean = false;
  colorBt: boolean = false;
  startText = 'Start';
  constructor() { }

  
  startTimer() {
    this.running = !this.running;
    this.resetBt = false;
    if (this.running) {
      this.colorBt = true;
      this.startText = 'Stop';
      const secondsCounter = interval(1);
      this.timerRef =  
        secondsCounter.subscribe(() =>
          this.timer = this.timer+1); 
     
    } else {
      this.startText = 'Start';
      this.resetBt = true;
      this.colorBt = true;
      this.timerRef.unsubscribe();
    }
    
    
  }
  format():string {
    const minutes = Math.floor(this.timer / (1000 * 60));
    const seconds = Math.floor((this.timer - minutes * 1000 * 60) / 1000);
    const fract = Math.floor((this.timer - minutes * 1000 * 60 - seconds * 1000) / 10);

    return minutes + 'm ' + (seconds < 10 ? '0' : '') + seconds + 's ' + (fract < 10 ? '0' : '') + fract + 'ms';
}
clearTimer() {
  this.running = false;
  this.startText = 'Start';
  this.resetBt = false;
  this.colorBt = false;
  this.timer = 0;
  this.timerRef.unsubscribe();
  
}
ngOnDestroy() {
  this.timerRef.unsubscribe();
}

}
