import { Injectable, Inject } from '@angular/core';
import { SB_BETSLIP_SERVICE } from './tokens';
import { SbBetslipService } from './sb-betlip-service.interface';

@Injectable({
  providedIn: 'root'
})
export class BetslipService {
  constructor(@Inject(SB_BETSLIP_SERVICE) private service: SbBetslipService) {}

  createbet() {
    console.log('[B] createbet');
    this.service.doSomething();
  }

  foo() {
    console.log('[B] foo');
  }
}
