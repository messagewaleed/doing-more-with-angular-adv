import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent {
  @Input() pageNumbers: any;
  pages!: number[];

  @Output() pageNumberClick = new EventEmitter<number>();

  ngOnInit() {
    this.pages = new Array(this.pageNumbers);
  }

  pageNumberClicked(pageNumber: number) {
    // Emitting an event whenever a particular page number is clicked
    this.pageNumberClick.emit(pageNumber); 
  }
}
