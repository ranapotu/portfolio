import { Component, ElementRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactComponent } from '../contact/contact.component';

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
  constructor(private _eref: ElementRef, public dialog: MatDialog) {}

  ngOnInit(): void {}
  onClick(event: any) {
    if (!this._eref.nativeElement.contains(event.target))
      // or some similar check
      this.isOpen = false;
  }

  openDialog() {
    this.dialog.open(ContactComponent);
  }
}
