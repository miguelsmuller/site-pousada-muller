import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { LibrariesModule } from '@core/libraries.module';
import { LayoutModule } from '@core/layout.module';

import { PageHomeComponent } from './page-home.component';
import { SectionCoverComponent } from './components/section-cover/section-cover.component';
import { SectionIntroducaoComponent } from './components/section-introducao/section-introducao.component';
import { SectionHistoriaComponent } from './components/section-historia/section-historia.component';
import { SectionAcomodacoesComponent } from './components/section-acomodacoes/section-acomodacoes.component';
import { SectionDepoimentosComponent } from './components/section-depoimentos/section-depoimentos.component';
import { SectionCidadeComponent } from './components/section-cidade/section-cidade.component';
import { SectionContatoComponent } from './components/section-contato/section-contato.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: PageHomeComponent,
      },
    ]),
    LibrariesModule,
    LayoutModule,
  ],
  declarations: [
    PageHomeComponent,
    SectionCoverComponent,
    SectionIntroducaoComponent,
    SectionHistoriaComponent,
    SectionAcomodacoesComponent,
    SectionDepoimentosComponent,
    SectionCidadeComponent,
    SectionContatoComponent,
  ],
})
export class PageHomeModule {}
