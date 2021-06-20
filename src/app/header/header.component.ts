import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  @Output() openMenu = new EventEmitter();
  ngOnInit(): void {
    console.log(this.openMenu.emit());
  }
}
