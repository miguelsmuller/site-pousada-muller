import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menuShow:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.menuShow = !this.menuShow;
    console.log(this.menuShow);
  }

}
