import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModuleAModule, SBBetslipServiceService } from '@example/module-a';
import { ModuleBModule, SB_BETSLIP_SERVICE } from '@example/module-b';
import { ModuleCModule } from '@example/module-c';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ModuleAModule, ModuleBModule, ModuleCModule],
  providers: [
    /* Uncomment this part to use the implementation from module-a. */
    // {
    //   provide: SB_BETSLIP_SERVICE,
    //   useClass: SBBetslipServiceService
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
