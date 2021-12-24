import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@core/layout.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () => import('./page-home/page-home.module').then((m) => m.PageHomeModule),
        },
      ],
      { relativeLinkResolution: 'legacy', anchorScrolling: 'enabled' }
    ),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
