import { NgModule } from '@angular/core';

import { SafePipe } from './pipes/safe.pipe';
import { SafeUrl } from './pipes/safe-url.pipe';

@NgModule({
  imports: [],
  declarations: [SafePipe, SafeUrl],
  exports: [SafePipe, SafeUrl],
})
export class CoreModule {}
