import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() numberOfPages!:number
  @Output() pageNumberClicked= new EventEmitter<number>();
  pages!:number[];
  constructor() { }

  ngOnInit(): void {
    this.pages = new Array(this.numberOfPages)
  }

  pageNumber(page:number){
      this.pageNumberClicked.emit(page)
  }
}
