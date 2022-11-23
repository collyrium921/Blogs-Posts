import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BLOG_POSTS } from '../blogPost';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogPosts!: BlogPost[][];
  currentPage:number=0;
  constructor() { }

  ngOnInit(): void {
    this.blogPosts = BLOG_POSTS
  }

  updatePage(newPage:number){
    this.currentPage = newPage;
    }
}
