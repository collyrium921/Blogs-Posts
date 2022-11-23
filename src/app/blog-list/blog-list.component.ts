import {
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BLOG_POSTS } from '../blogPost';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  blogPosts!: BlogPost[][];
  currentPage: number = 0;
  //for one component
  // @ViewChild('tile') blogPostTileComponent!: BlogPostTileComponent;

  //for multiple components used in markup
  @ViewChildren('tile')
  blogPostTileComponent!: QueryList<BlogPostTileComponent>;

  constructor() {}

  ngOnInit(): void {
    this.blogPosts = BLOG_POSTS;
  }

  updatePage(newPage: number) {
    this.currentPage = newPage;
  }

  expandAll() {
    //for a single component used in markup
    // this.blogPostTileComponent.showFullSummary()

    //for multiple components used in markup
    this.blogPostTileComponent.forEach((e) => e.showFullSummary());
  }
}
