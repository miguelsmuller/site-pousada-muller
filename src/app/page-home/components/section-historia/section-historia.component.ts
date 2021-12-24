import { Component } from '@angular/core';

@Component({
  selector: 'app-section-historia',
  templateUrl: './section-historia.component.html',
  styleUrls: ['./section-historia.component.scss'],
})
export class SectionHistoriaComponent {
  public pictures = [
    {
      alt: 'item 2',
      src: 'https://res.cloudinary.com/miguelsmuller/image/upload/ar_1:1,c_fill/v1621942224/pousada-muller-site/galeria-pousada/pousada-1-square_tkk9dm.WebP',
      styleContent: 'justify-self-end',
      styleImage: 'transform translate-x-4 -rotate-8',
    },
    {
      alt: 'item 3',
      src: 'https://res.cloudinary.com/miguelsmuller/image/upload/ar_1:1,c_fill/v1621942222/pousada-muller-site/galeria-pousada/pousada-6-square_cvbpvq.WebP',
      styleContent: 'justify-self-start',
      styleImage: 'transform -translate-x-2 rotate-6',
    },
    {
      alt: 'item 4',
      src: 'https://res.cloudinary.com/miguelsmuller/image/upload/ar_1:1,c_fill/v1621942223/pousada-muller-site/galeria-pousada/pousada-7-square_twyhh9.WebP',
      styleContent: 'justify-self-end',
      styleImage: 'transform translate-x-2 -translate-y-10 rotate-6',
    },
    {
      alt: 'item 5',
      src: 'https://res.cloudinary.com/miguelsmuller/image/upload/ar_1:1,c_fill/v1621942224/pousada-muller-site/galeria-pousada/pousada-2-square_c5fnyb.WebP',
      styleContent: 'justify-self-start',
      styleImage: 'transform -translate-x-2 -translate-y-6 -rotate-3',
    },
  ];
}
