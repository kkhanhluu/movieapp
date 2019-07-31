import { NgModule } from '@angular/core';

import { NgbdModalContentComponent } from './components/modal/modal.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SafeUrlPipe } from './pipes/safeUrl.pipe';

@NgModule({
  declarations: [NgbdModalContentComponent, SpinnerComponent, SafeUrlPipe],
  entryComponents: [NgbdModalContentComponent],
  exports: [SpinnerComponent, SafeUrlPipe]
})
export class SharedModule {}
