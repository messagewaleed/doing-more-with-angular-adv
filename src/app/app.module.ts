import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostTileComponent } from './blog-post-tile/blog-post-tile.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostTileComponent,
    BlogListComponent,
    PaginatorComponent,
    TruncatePipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [TruncatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
