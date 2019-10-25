import { InjectionToken } from '@angular/core';
import { SbBetslipService } from './sb-betlip-service.interface';

export const SB_BETSLIP_SERVICE = new InjectionToken<SbBetslipService>(
  'SbBetslipService',
  {
    providedIn: 'root',
    // Default implementation if alternative interface is not provided.
    factory: () => ({
      doSomething() {
        console.log('[Default] do something');
      }
    })
  }
);
