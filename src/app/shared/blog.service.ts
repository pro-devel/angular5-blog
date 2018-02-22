import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Blog } from './blog.model';
@Injectable()
export class BlogService {
  blogList: AngularFireList<any>;
  selectedBlog: Blog = new Blog();
  constructor(private firebase :AngularFireDatabase ) { }

  getData(){
    this.blogList = this.firebase.list('posts');
    console.log(this.blogList);
    return this.blogList;
  }

  insertBlog(blog : Blog)
  {
    this.getData().push({
      name: blog.name,
      image: blog.image,
      label: blog.label,
      content: blog.content

    });
  }

  updateBlog(blog : Blog){
    this.getData().update(blog.$key,
    {
      name: blog.name,
      image: blog.image,
      label: blog.label,
      content: blog.content
    });
  }

  deleteBlog($key : string){
    this.getData().remove($key);
  }
}
