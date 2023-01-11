import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent {
  @Input() pageNumbers: any;
  pages!: number[];

  ngOnInit() {
    this.pages = new Array(this.pageNumbers);
  }
}
