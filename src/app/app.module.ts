import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { LayoutModule } from '@core/layout.module';

import { AppComponent } from './app.component';
import { reducers } from './reducers';

import { environment } from '../environments/environment';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule.forRoot([
    {
        path: '',
        loadChildren: () => import('./page-home/page-home.module').then((m) => m.PageHomeModule),
    },
], { relativeLinkResolution: 'legacy', anchorScrolling: 'enabled', initialNavigation: 'enabledBlocking' }),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
