import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { ExternalModule } from './external.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { SectionCoverComponent } from './componentes/section-cover/section-cover.component';
import { SectionIntroducaoComponent } from './componentes/section-introducao/section-introducao.component';
import { SectionHistoriaComponent } from './componentes/section-historia/section-historia.component';
import { SectionAcomodacoesComponent } from './componentes/section-acomodacoes/section-acomodacoes.component';
import { SectionDepoimentosComponent } from './componentes/section-depoimentos/section-depoimentos.component';
import { SectionCidadeComponent } from './componentes/section-cidade/section-cidade.component';
import { SectionContatoComponent } from './componentes/section-contato/section-contato.component';
import { DialogMapComponent } from './componentes/dialogs/dialog-map/dialog-map.component';
import { DialogImageComponent } from './componentes/dialogs/dialog-image/dialog-image.component';
import { DialogDisponibilidadeComponent } from './componentes/dialogs/dialog-disponibilidade/dialog-disponibilidade.component';

import { PageHomeComponent } from './pages/page-home/page-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionCoverComponent,
    SectionIntroducaoComponent,
    SectionHistoriaComponent,
    SectionAcomodacoesComponent,
    SectionDepoimentosComponent,
    SectionCidadeComponent,
    SectionContatoComponent,
    PageHomeComponent,
    DialogMapComponent,
    DialogImageComponent,
    DialogDisponibilidadeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ExternalModule,
    //ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
