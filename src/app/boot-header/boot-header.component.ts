import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-boot-header',
  templateUrl: './boot-header.component.html',
  styleUrls: ['./boot-header.component.css'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class BootHeaderComponent implements OnInit {
  isOpen: boolean = false;
  constructor(private _eref: ElementRef) {}

  ngOnInit(): void {}
  onClick(event: any) {
    if (!this._eref.nativeElement.contains(event.target))
      // or some similar check
      this.isOpen = false;
  }
}
