import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-not-actives',
  templateUrl: './not-actives.component.html',
  styleUrls: ['./not-actives.component.scss'],
})
export class NotActivesComponent {
  posts: Post[] = this.getPosts();
  constructor(private postSvc: PostsService) {}

  getPosts(): Post[] {
    this.postSvc.ngOnInit();
    return this.postSvc.getPosts();
  }

  addPost(post: Post): void {
    this.postSvc.editPosts(post);
  }
}
