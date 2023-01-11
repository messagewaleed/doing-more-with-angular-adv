import { Component, Input } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.css'],
})
export class BlogPostTileComponent {
  // @Input('title') title!: string;
  // @Input('description') description!: string;

  @Input('post') post!: BlogPost;

  ngOnInit() {
    // this.title = 'Sample title this...';
    // this.description = 'Description here about the blog tile...';
  }
}
