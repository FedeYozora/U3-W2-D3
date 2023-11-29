import { Injectable, OnInit } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService implements OnInit {
  posts: Post[] = [];
  constructor() {}

  ngOnInit() {
    fetch('../assets/db.json')
      .then((res) => res.json())
      .then((data) =>
        data.forEach((element: Post) => {
          this.posts.push(element);
        })
      )
      .catch((err) => alert(err));
  }

  getPosts(): Post[] {
    this.posts = [];
    return this.posts;
  }

  editPosts(post: Post) {
    post.active = post.active === true ? false : true;
    fetch('../assets/db.json', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(post),
    }).then((res) => res.json());
  }
}
