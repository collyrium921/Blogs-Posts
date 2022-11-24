import { Component, ContentChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  @ContentChild('headerElem') headerElem: any;
  constructor() { }

  ngOnInit(): void {
  }

}
