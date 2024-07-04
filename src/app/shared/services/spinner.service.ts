import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor() { }

  showSpinner = new BehaviorSubject<boolean>(false);
  private counter = 0;

  disable() {
    this.counter--;
    if (this.counter == 0) {
      this.showSpinner.next(false);
    }
  }

  enable() {
    this.showSpinner.next(true);
    this.counter++;
  }

}
