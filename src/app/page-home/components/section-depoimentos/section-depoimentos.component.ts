import { Component } from '@angular/core';

import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-section-depoimentos',
  templateUrl: './section-depoimentos.component.html',
  styleUrls: ['./section-depoimentos.component.scss'],
})
export class SectionDepoimentosComponent {}
