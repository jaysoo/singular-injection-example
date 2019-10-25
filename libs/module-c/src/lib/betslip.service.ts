import { Injectable } from '@angular/core';
import { BetslipService as BetslipServiceB } from '@example/module-b';

@Injectable({
  providedIn: 'root'
})
export class BetslipService {
  constructor(private serivce: BetslipServiceB) {}

  createbet() {
    this.serivce.foo();
    console.log('[C] createbet');
  }
}
