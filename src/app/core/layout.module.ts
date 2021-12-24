import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LibrariesModule } from './libraries.module';
import { CoreModule } from './core.module';

import { DIALOG_TYPE } from './services/dialog.token';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { CheckCookiesComponent } from './components/check-cookies/check-cookies.component';
import { DialogDefaultComponent } from './components/dialog-default/dialog-default.component';
import { DialogMapComponent } from './components/dialog-map/dialog-map.component';
import { DialogImageComponent } from './components/dialog-image/dialog-image.component';
import { DialogDisponibilidadeComponent } from './components/dialog-disponibilidade/dialog-disponibilidade.component';

@NgModule({
  imports: [CommonModule, RouterModule, LibrariesModule, CoreModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CheckCookiesComponent,
    DialogDefaultComponent,
    DialogMapComponent,
    DialogImageComponent,
    DialogDisponibilidadeComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CheckCookiesComponent,
    DialogDefaultComponent,
    DialogMapComponent,
    DialogImageComponent,
    DialogDisponibilidadeComponent,
  ],
  providers: [{ provide: DIALOG_TYPE, useValue: DialogDisponibilidadeComponent }],
})
export class LayoutModule {}
