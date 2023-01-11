import { Component, Input } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.css'],
})
export class BlogPostTileComponent {
  // @Input('title') title!: string;
  // @Input('description') description!: string;

  constructor(private truncatePipe: TruncatePipe) {}

  fullText!: string;

  @Input('post') post!: BlogPost;

  ngOnInit() {
    this.fullText = this.post.description;
    this.post.description = this.truncatePipe.transform(
      this.post.description,
      100
    );
    // this.title = 'Sample title this...';
    // this.description = 'Description here about the blog tile...';
  }

  displayFullText() {
    this.post.description = this.fullText;
  }
}
