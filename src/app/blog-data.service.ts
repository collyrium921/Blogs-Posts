import { Injectable } from '@angular/core';
import { BLOG_POSTS } from './blogPost';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor() { }

  getData(){
    return BLOG_POSTS;
  }
}
