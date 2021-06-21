import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boot-header',
  templateUrl: './boot-header.component.html',
  styleUrls: ['./boot-header.component.css'],
})
export class BootHeaderComponent implements OnInit {
  isOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
