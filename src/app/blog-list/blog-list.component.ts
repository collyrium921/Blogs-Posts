import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { BlogDataService } from '../blog-data.service';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BLOG_POSTS } from '../blogPost';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],})
export class BlogListComponent implements OnInit {
  blogPosts!: BlogPost[][];
  currentPage: number = 0;
  //for one component
  // @ViewChild('tile') blogPostTileComponent!: BlogPostTileComponent;

  //for multiple components used in markup
  @ViewChildren('tile')
  blogPostTileComponent!: QueryList<BlogPostTileComponent>;

  constructor(private blogDataService: BlogDataService) {}

  ngOnInit(): void {
    //without using service
    // this.blogPosts = BLOG_POSTS;

    this.blogPosts = this.blogDataService.getData()
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

  favAll(){
    // this.blogPosts[this.currentPage].forEach(e=> e.isFav = true)

    //when I use changeDetectionStrategy in the child component
    this.blogPosts[this.currentPage].map(post=>({
      title: post.title,
      summary: post.summary,
      isFav: true
    }));
  }
}
