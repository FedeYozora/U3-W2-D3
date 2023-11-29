import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-actives',
  templateUrl: './actives.component.html',
  styleUrls: ['./actives.component.scss'],
})
export class ActivesComponent {
  posts: Post[] = this.getPosts();
  constructor(private postSvc: PostsService) {}

  getPosts(): Post[] {
    this.postSvc.ngOnInit();
    return this.postSvc.getPosts();
  }

  removePost(post: Post): void {
    this.postSvc.editPosts(post);
  }
}
